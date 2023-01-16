/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root and chart
var root = am5.Root.new("bar-chart"); 

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push( 
  am5xy.XYChart.new(root, {
    panY: false,
    wheelY: "zoomX",
    layout: root.verticalLayout
  }) 
);

// Define data
var data = [{ 
  category: "1PM", 
  value1: 850
}, { 
  category: "2PM", 
  value1: 650
}, { 
  category: "3PM", 
  value1: 1000
}, {
  category: "4PM",
  value1: 600
},{
  category: "5PM", 
  value1: 850
}, {
  category: "6PM", 
  value1: 500
}, {
  category: "7PM", 
  value1: 700
}];

// Craete Y-axis
let yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
    }),
    visible: false
  })
);

// Create X-Axis
var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.2,
      renderer: am5xy.AxisRendererX.new(root, {
    }),
    categoryField: "category"
  })
);
xAxis.data.setAll(data);

// Create series
var series1 = chart.series.push( 
  am5xy.ColumnSeries.new(root, {  
    xAxis: xAxis, 
    yAxis: yAxis, 
    valueYField: "value1", 
    categoryXField: "category",
    tooltip: am5.Tooltip.new(root, {})
  }) 
);
series1.data.setAll(data);



// Add legend
