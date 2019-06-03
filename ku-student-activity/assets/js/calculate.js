google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBudget);
google.charts.setOnLoadCallback(drawPersonnel);
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawHIV);

function drawBudget() {
      var data = google.visualization.arrayToDataTable([
        ['Year','งบประมาณ'],
        ['2546', 45148], ['2547', 44019], ['2548', 44389], ['2549', 52007],
        ['2550', 61468], ['2551',65435], ['2552',70900], ['2553',71625], 
        ['2554',86905], ['2555', 91997], ['2556',99788], ['2557',106103], 
        ['2558',109658], ['2559',121202], ['2560',126197]
      ]);

      var options = {
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Budget (Million)'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      options = {
        fontName:'Bai Jamjuree',
        colors:['#45ADA8'],
        height: 400,
        lineWidth: 3
      };

      chart.draw(data, options);
}

function drawPersonnel() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'จำนวนบุคลากรทางการแพทย์'],
      ['แพทย์', 23020],
      ['ทันตแพทย์', 5198],
      ['เภสัชกร',  8879],
      ['พยาบาลวิชาชีพ', 109754],
      ['พยาบาลเทคนิค', 15595]
    ]);
    data.sort([{column: 1, desc: true}]);
    var options = {
        fontName:'Bai Jamjuree',
        colors:['#594F4F', '#547980', '#45ADA8', '#9DE0AD', '#E5FCC2']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function drawHIV() {

    var data = google.visualization.arrayToDataTable([
      ['Year', 'เสียชีวิต', 'รักษาตัว'],
      ['2543', 8695, 72421],
      ['2544', 10113, 75205],
      ['2545', 15597, 83870],
      ['2546', 16892, 83046],
      ['2547', 11473, 79383],
      ['2548', 7949, 73311],
      ['2549', 6551, 69022],
      ['2550', 5522, 71091],
      ['2551', 4685, 67836],
      ['2551', 4046, 72916],  
      ['2552', 3638, 70274],
      ['2553', 3758, 71651],
      ['2554', 4034, 70224],
      ['2555', 5683, 75300],
      ['2556', 5705, 65032],
      ['2557', 5456, 70847],
      ['2558', 4954, 69257],
      ['2559', 4605, 67091]
    ]);

    var options = {
        fontName:'Bai Jamjuree',
        colors:['#594F4F', '#547980'],
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: 'percent'
    };
    var chart = new google.visualization.BarChart(document.getElementById('stacked_chart'));
    chart.draw(data, options);
}