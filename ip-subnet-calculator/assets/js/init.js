var $subnet = $('.input-group.subnet');
var lastSelectedSubnet = localStorage.getItem('subnet');
for (var i = 1; i <= 32; i++) {
    var bin = '';
    for (var j = 0; j < 32; j++) {
        bin += j < i ? '1' : '0';
    }
    var ip = '';
    for (var j = 0; j < 4; j++) {
        var tmp = parseInt(bin.slice(j * 8, (j + 1) * 8), 2);
        ip += tmp + (j < 3 ? '.' : '');
    }
    var $option = $(`
        <option value="`+ i + `"` + (parseInt(lastSelectedSubnet) === i ? ' selected' : '') + `>` + ip + ' / ' + i + `</option>
    `);
    $subnet.find('select').append($option);
}

$subnet.find('select').change(function() {
    localStorage.setItem('subnet', $(this).val());
});
