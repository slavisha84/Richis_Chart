
var boston = [{
  "City": "Boston",
  "Date": "4/15/19 12:00 AM",
  "Actual": 51.44,
  "Forecast": 53.32
},
{
  "City": "Boston",
  "Date": "4/15/19 1:00 AM",
  "Actual": 49.67,
  "Forecast": 51.19
},
{
  "City": "Boston",
  "Date": "4/15/19 2:00 AM",
  "Actual": 48.46,
  "Forecast": 49.16
},
{
  "City": "Boston",
  "Date": "4/15/19 3:00 AM",
  "Actual": 47.37,
  "Forecast": 47.46
},
{
  "City": "Boston",
  "Date": "4/15/19 4:00 AM",
  "Actual": 46.59,
  "Forecast": 46.34
},
{
  "City": "Boston",
  "Date": "4/15/19 5:00 AM",
  "Actual": 45.46,
  "Forecast": 45.6
},
{
  "City": "Boston",
  "Date": "4/15/19 6:00 AM",
  "Actual": 44.88,
  "Forecast": 46.05
},
{
  "City": "Boston",
  "Date": "4/15/19 7:00 AM",
  "Actual": 45.85,
  "Forecast": 45.55
},
{
  "City": "Boston",
  "Date": "4/15/19 8:00 AM",
  "Actual": 45.3,
  "Forecast": 44.93
},
{
  "City": "Boston",
  "Date": "4/15/19 9:00 AM",
  "Actual": 44.79,
  "Forecast": 44.06
},
{
  "City": "Boston",
  "Date": "4/15/19 10:00 AM",
  "Actual": 42.51,
  "Forecast": 43.57
},
{
  "City": "Boston",
  "Date": "4/15/19 11:00 AM",
  "Actual": 42.67,
  "Forecast": 43.53
},
{
  "City": "Boston",
  "Date": "4/15/19 12:00 PM",
  "Actual": 45.83,
  "Forecast": 44.31
},
{
  "City": "Boston",
  "Date": "4/15/19 1:00 PM",
  "Actual": 47.65,
  "Forecast": 45.97
},
{
  "City": "Boston",
  "Date": "4/15/19 2:00 PM",
  "Actual": 48.91,
  "Forecast": 48.6
},
{
  "City": "Boston",
  "Date": "4/15/19 3:00 PM",
  "Actual": 50.51,
  "Forecast": 51.03
},
{
  "City": "Boston",
  "Date": "4/15/19 4:00 PM",
  "Actual": 52.4,
  "Forecast": 53.19
},
{
  "City": "Boston",
  "Date": "4/15/19 5:00 PM",
  "Actual": 54.39,
  "Forecast": 55.39
},
{
  "City": "Boston",
  "Date": "4/15/19 6:00 PM",
  "Actual": 56.19,
  "Forecast": 59.55
},
{
  "City": "Boston",
  "Date": "4/15/19 7:00 PM",
  "Actual": 57.49,
  "Forecast": 61.6
},
{
  "City": "Boston",
  "Date": "4/15/19 8:00 PM",
  "Actual": 58.78,
  "Forecast": 61.83
},
{
  "City": "Boston",
  "Date": "4/15/19 9:00 PM",
  "Actual": 60.31,
  "Forecast": 62.62
},
{
  "City": "Boston",
  "Date": "4/15/19 10:00 PM",
  "Actual": 59.3,
  "Forecast": 61.28
},
{
  "City": "Boston",
  "Date": "4/15/19 11:00 PM",
  "Actual": 59.14,
  "Forecast": 58.72
}];
am4core.useTheme(am4themes_animated);

// create chart
var chart = am4core.create("chartdiv", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;

var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = 0;
axis.max = 100;
axis.strictMinMax = true;
axis.renderer.inside = true;
//axis.renderer.ticks.template.inside = true;
//axis.stroke = chart.colors.getIndex(3);
axis.renderer.radius = am4core.percent(97);
//axis.renderer.radius = 80;
axis.renderer.line.strokeOpacity = 1;
axis.renderer.line.strokeWidth = 5;
axis.renderer.line.stroke = chart.colors.getIndex(0);
axis.renderer.ticks.template.stroke = chart.colors.getIndex(0);
axis.renderer.labels.template.radius = 35;
axis.renderer.ticks.template.strokeOpacity = 1;
axis.renderer.grid.template.disabled = true;
axis.renderer.ticks.template.length = 10;
axis.hiddenState.properties.opacity = 1;
axis.hiddenState.properties.visible = true;
axis.setStateOnChildren = true;
axis.renderer.hiddenState.properties.endAngle = 180;
 

var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = 0;
axis2.max = 100;
axis2.strictMinMax = true;

axis2.renderer.line.strokeOpacity = 1;
axis2.renderer.line.strokeWidth = 5;
axis2.renderer.line.stroke = chart.colors.getIndex(3);
axis2.renderer.ticks.template.stroke = chart.colors.getIndex(3);

axis2.renderer.ticks.template.strokeOpacity = 1;
axis2.renderer.grid.template.disabled = true;
axis2.renderer.ticks.template.length = 10;
axis2.hiddenState.properties.opacity = 1;
axis2.hiddenState.properties.visible = true;
axis2.setStateOnChildren = true;
axis2.renderer.hiddenState.properties.endAngle = 180;

var hand = chart.hands.push(new am4charts.ClockHand());
hand.fill = axis.renderer.line.stroke;
hand.stroke = axis.renderer.line.stroke;
hand.axis = axis;
hand.pin.radius = 14;
hand.startWidth = 10;

//var axis3 = chart.xAxes.push(new am4charts.ValueAxis());
//axis3.min = 0;
//axis3.max = 23;
//axis3.strictMinMax = true;
//axis3.renderer.inside = true;
//axis.renderer.ticks.template.inside = true;
//axis.stroke = chart.colors.getIndex(3);
//axis3.renderer.radius = am4core.percent(97);
//axis.renderer.radius = 80;
//axis3.renderer.line.strokeOpacity = 1;
//axis3.renderer.line.strokeWidth = 5;
//axis3.renderer.line.stroke = chart.colors.getIndex(6);
//axis3.renderer.ticks.template.stroke = chart.colors.getIndex(6);
//axis3.renderer.labels.template.radius = 35;
//axis3.renderer.ticks.template.strokeOpacity = 1;
//axis3.renderer.grid.template.disabled = true;
//axis3.renderer.ticks.template.length = 10;
//axis3.hiddenState.properties.opacity = 1;
//axis3.hiddenState.properties.visible = true;
//axis3.setStateOnChildren = true;
//axis3.renderer.hiddenState.properties.endAngle = 180;
 

var hand2 = chart.hands.push(new am4charts.ClockHand());
hand2.fill = axis2.renderer.line.stroke;
hand2.stroke = axis2.renderer.line.stroke;
hand2.axis = axis2;
hand2.pin.radius = 10;
hand2.startWidth = 10;

//var hand3 = chart.hands.push(new am4charts.ClockHand());
//hand3.fill = axis3.renderer.line.stroke;
//hand3.stroke = axis3.renderer.line.stroke;
//hand3.axis = axis3;
//hand3.pin.radius = 10;
//hand3.startWidth = 10;

// loop through boston, define an array, push the actual values to the array
// in setInterval, do a for loop
actual_data = []
for_data = []
//actual_data2=[]
//for_data2=[]
for (let i =0; i<boston.length; i++) {
  actual_data.push(boston[i]["Actual"]) 
  for_data.push(boston[i]["Forecast"])
  //actual_data2.push(boston[i]["Date"])
}

setInterval(() => {
  hand.showValue(actual_data.shift(),1000,am4core.ease.cubicOut);
  label.text = (hand.value) + " ºF";
  hand2.showValue(for_data.shift(), 1000, am4core.ease.cubicOut);
  label2.text = (hand2.value) + " ºF";
  },2500)


// for (let i=0; i<boston.length; i++) {
//   // (if i == i) {break}
//   setInterval(() => {
//     hand.showValue(boston[i]['Actual'],1000,am4core.ease.cubicOut);
//     label.text = "" + Math.round(hand.value);
//     hand2.showValue(boston[i]["Forecast"], 1000, am4core.ease.cubicOut);
//     label2.text = "" + Math.round(hand2.value);
//   },0)
  


// setInterval(() => {
//  hand.showValue([55,56,57], 1000, am4core.ease.cubicOut);
//  label.text = "" + Math.round(hand.value);
//  hand2.showValue(boston[0]["Forecast"], 1000, am4core.ease.cubicOut);
//  label2.text = "" + Math.round(hand2.value);
// }, 3000);

var legend = new am4charts.Legend();
legend.isMeasured = true;
legend.y = am4core.percent(100);
legend.verticalCenter = "bottom";
legend.parent = chart.chartContainer;
legend.data = [{
 "name": "Actual",
 "fill": chart.colors.getIndex(0)
}, {
 "name": "Forecast",
 "fill": chart.colors.getIndex(3)
}, {
  "name": "Boston on 04/15/2019",
  "fill": chart.colors.getIndex(6)
}];


var labelList = new am4core.ListTemplate(new am4core.Label());
labelList.template.isMeasured = false;
labelList.template.background.strokeWidth = 2;
labelList.template.fontSize = 25;
labelList.template.padding(10, 20, 10, 20);
labelList.template.y = am4core.percent(50);
labelList.template.horizontalCenter = "middle";

var label = labelList.create();
label.parent = chart.chartContainer;
label.x = am4core.percent(40);
label.background.stroke = chart.colors.getIndex(0);
label.fill = chart.colors.getIndex(0);
label.text = "0";

var label2 = labelList.create();
label2.parent = chart.chartContainer;
label2.x = am4core.percent(60);
label2.background.stroke = chart.colors.getIndex(3);
label2.fill = chart.colors.getIndex(3);
label2.text = "0";

legend.itemContainers.template.events.on("hit", function(ev) {
 var index = ev.target.dataItem.index;
 if (ev.target.isActive) {
   chart.hands.getIndex(index).show();
   chart.xAxes.getIndex(index).show();
   labelList.getIndex(index).show();
 }
 else {
   chart.hands.getIndex(index).hide();
   chart.xAxes.getIndex(index).hide();
   labelList.getIndex(index).hide();
 }
  

});