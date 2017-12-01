function calNetAddr(ip, subnet) {
    var result = [];
    var subnetSet = binToDec(binSubnet(subnet)).split('.');
    ip = ip.split('.');
    for (var i = 0; i < 4; i++) {
        var tmp = Number(ip[i]);
        result.push(tmp & parseInt(subnetSet[i]));
    }
    return result.join('.');
}

function binSubnet(subnet) {
    var bin = '';
    for (var i = 0; i < 32; i++) {
        bin += i < subnet ? 1 : 0;
    }
    return bin;
}

function binToDec(bin) {
    var result = [];
    for (var i = 0; i < 4; i++) {
        result.push(parseInt(bin.slice(i * 8, (i + 1) * 8), 2));
    }
    return result.join('.');
}

function decToBin(dec) {
    var result = '';
    dec = dec.split('.');
    for (i in dec) {
        var tmp = parseInt(dec[i]).toString(2);
        while (tmp.length < 8) {
            tmp = '0' + tmp;
        }
        result += tmp;
    }
    return result;
}

function getWildCard(subnet) {
    var result = '';
    for (var i = 0; i < 32; i++) {
        result += i < subnet ? 0 : 1;
    }
    return result;
}

function getUsableIPRange(netAddr, wildCard) {
    if (parseInt(wildCard, 2) <= 1) {
        return '-';
    }
    var tmp = netAddr.split('.');
    for (i in tmp) {
        tmp[i] = parseInt(tmp[i]);
    }
    var start = [tmp[0], tmp[1], tmp[2], (tmp[3] + 1)].join('.');
    for (var i = 0; i < 4; i++) {
        tmp[i] += parseInt(wildCard.slice(i * 8, (i + 1) * 8), 2);
    }
    var end = [tmp[0], tmp[1], tmp[2], (tmp[3] - 1)].join('.');
    return start + ' - ' + end;
}

function getBroadCastAddr(netAddr, wildCard) {
    if (parseInt(wildCard, 2) == 0) {
        return netAddr;
    }
    var tmp = netAddr.split('.');
    for (i in tmp) {
        tmp[i] = parseInt(tmp[i]);
    }
    for (var i = 0; i < 4; i++) {
        tmp[i] += parseInt(wildCard.slice(i * 8, (i + 1) * 8), 2);
    }
    return tmp.join('.');
}

function getClass(subnet) {
    if (subnet < 16) {
        return 'A'
    }
    else if (subnet < 24) {
        return 'B'
    }
    else {
        return 'C'
    }
}

function isPrivate(ip) {
    ip = ip.split('.');
    for (i in ip) {
        ip[i] = parseInt(ip[i]);
    }
    return ip[0] == 10 || (ip[0] == 172 && (ip[1] >= 16 && ip[1] <= 31)) || (ip[0] == 192 && ip[1] == 168);
}

$('form').submit(function (e) { 
    e.preventDefault();
    var rawData = $(this).serializeArray();
    var data = {}
    for (i in rawData) {
        data[rawData[i].name] = rawData[i].value;
    }
    var ip = data.ip;
    var subnet = parseInt(data.subnet);
    var netAddr = calNetAddr(ip, subnet)
    var wildCard = getWildCard(subnet);
    var totalIPs = Math.pow(2, (wildCard.match(/1/g) || []).length);

    var result = [];
    result.push(ip);
    result.push(netAddr);
    result.push(getUsableIPRange(netAddr, wildCard));
    result.push(getBroadCastAddr(netAddr, wildCard));
    result.push(totalIPs);
    result.push(totalIPs > 1 ? totalIPs - 2 : 0);
    result.push(binToDec(binSubnet(subnet)));
    result.push(binToDec(wildCard));
    result.push(binSubnet(subnet));
    result.push(getClass(subnet));
    result.push('/ ' + subnet);
    result.push(isPrivate(ip) ? 'Private' : 'Public');
    result.push(ip + ' / ' + subnet);
    result.push(decToBin(ip));
    result.push(parseInt(decToBin(ip), 2));
    result.push('0x' + parseInt(decToBin(ip), 2).toString(16));
    for (var i = 0; i < $('table tr').length; i++) {
        if (result[i] === undefined) {
            break;
        }
        $('table tr:eq(' + i + ')').find('td:eq(1)').text(result[i]);
    }
    $('.result-wrapper').removeClass('hide');
});