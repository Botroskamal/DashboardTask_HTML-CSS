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
var root = am5.Root.new("chartdiv1"); 

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    startAngle: -200,
    endAngle: 20,
    innerRadius: -10
  })
);

var axisRenderer = am5radar.AxisRendererCircular.new(root, {
  strokeOpacity: 0.1,
  minGridDistance: 30
});


axisRenderer.grid.template.setAll({
  visible: false
});

var axis = chart.xAxes.push(
  am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    max: 100,
    strictMinMax: true,
    visible: false,
    renderer: axisRenderer
  })
);

function createRange(start, end, color, label) {
  
  var rangeDataItem = axis.makeDataItem({
    value: start,
    endValue: end
  });

  var range = axis.createAxisRange(rangeDataItem);
  
  rangeDataItem.get("axisFill").setAll({
    visible: true,
    fill: color,
    fillOpacity: 0.8
  });
  
  rangeDataItem.get("tick").setAll({
    visible: false
  });
  
  rangeDataItem.get("label").setAll({
    text: label,
    inside: true,
    radius: 5,
    fontSize: "0.9em",
    fill: am5.color(0xffffff)
  });

}

createRange(0, 45, am5.color(0xFFFFFF));
createRange(45, 100, am5.color(0xB37EFC));






/* -------------- chart 2 ---------------------- */
var root = am5.Root.new("chartdiv2"); 

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    startAngle: -200,
    endAngle: 20,
    innerRadius: -10
    
  })
);

var axisRenderer = am5radar.AxisRendererCircular.new(root, {
  strokeOpacity: 0.1,
  minGridDistance: 30
});


axisRenderer.grid.template.setAll({
  visible: false
});

var axis = chart.xAxes.push(
  am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    max: 100,
    strictMinMax: true,
    visible: false,
    renderer: axisRenderer
  })
);

function createRange(start, end, color, label) {
  
  var rangeDataItem = axis.makeDataItem({
    value: start,
    endValue: end
  });

  var range = axis.createAxisRange(rangeDataItem);
  
  rangeDataItem.get("axisFill").setAll({
    visible: true,
    fill: color,
    fillOpacity: 0.8
  });
  
  rangeDataItem.get("tick").setAll({
    visible: false
  });
  
  rangeDataItem.get("label").setAll({
    text: label,
    inside: true,
    radius: 5,
    fontSize: "0.9em",
    fill: am5.color(0xffffff)
  });

}

createRange(0, 55, am5.color(0xFF7E86));
createRange(55, 100, am5.color(0xF4F5F9));


/* -------------- chart 3 ---------------------- */
var root = am5.Root.new("chartdiv3"); 

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    startAngle: -200,
    endAngle: 20,
    innerRadius: -10
    
  })
);

var axisRenderer = am5radar.AxisRendererCircular.new(root, {
  strokeOpacity: 0.1,
  minGridDistance: 30
});


axisRenderer.grid.template.setAll({
  visible: false
});

var axis = chart.xAxes.push(
  am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    max: 100,
    strictMinMax: true,
    visible: false,
    renderer: axisRenderer
  })
);

function createRange(start, end, color, label) {
  
  var rangeDataItem = axis.makeDataItem({
    value: start,
    endValue: end
  });

  var range = axis.createAxisRange(rangeDataItem);
  
  rangeDataItem.get("axisFill").setAll({
    visible: true,
    fill: color,
    fillOpacity: 0.8
  });
  
  rangeDataItem.get("tick").setAll({
    visible: false
  });
  
  rangeDataItem.get("label").setAll({
    text: label,
    inside: true,
    radius: 5,
    fontSize: "0.9em",
    fill: am5.color(0xffffff)
  });

}

createRange(0, 24, am5.color(0xA162F7));
createRange(24, 100, am5.color(0xF4F5F9));


/* -------------- chart 4 ---------------------- */
var root = am5.Root.new("chartdiv4"); 

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    startAngle: -200,
    endAngle: 20,
    innerRadius: -10
    
  })
);

var axisRenderer = am5radar.AxisRendererCircular.new(root, {
  strokeOpacity: 0.1,
  minGridDistance: 30
});


axisRenderer.grid.template.setAll({
  visible: false
});

var axis = chart.xAxes.push(
  am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    max: 100,
    strictMinMax: true,
    visible: false,
    renderer: axisRenderer
  })
);

function createRange(start, end, color, label) {
  
  var rangeDataItem = axis.makeDataItem({
    value: start,
    endValue: end
  });

  var range = axis.createAxisRange(rangeDataItem);
  
  rangeDataItem.get("axisFill").setAll({
    visible: true,
    fill: color,
    fillOpacity: 0.8
  });
  
  rangeDataItem.get("tick").setAll({
    visible: false
  });
  
  rangeDataItem.get("label").setAll({
    text: label,
    inside: true,
    radius: 5,
    fontSize: "0.9em",
    fill: am5.color(0xffffff)
  });

}

createRange(0, 35, am5.color(0xF6CC0D));
createRange(35, 100, am5.color(0xF4F5F9));