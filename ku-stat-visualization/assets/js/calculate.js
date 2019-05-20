google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBudget);
google.charts.setOnLoadCallback(drawChart);

function drawBudget() {
      var data = google.visualization.arrayToDataTable([
        ['Year','Budget'],
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
        // title: 'My Daily Activities',
        fontName:'Roboto',
        height: 400,
      };

      chart.draw(data, options);
}

function drawChart() {

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
        fontName:['Bai Jamjuree','Roboto'],
        title: 'My Daily Activities',
        colors:['#594F4F', '#547980', '#45ADA8', '#9DE0AD', '#E5FCC2']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}