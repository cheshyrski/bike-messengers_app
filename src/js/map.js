var x=new google.maps.LatLng(49.841835389,24.03132611);
var point1 = new google.maps.LatLng(49.836808, 24.001919);//M11-1
var point2 = new google.maps.LatLng(49.826160, 24.026439);//E471-1
var point3 = new google.maps.LatLng(49.824750, 24.051686);//H09-1
var point4 = new google.maps.LatLng(49.836420, 24.066600);//H02-1
var point5 = new google.maps.LatLng(49.853139, 24.065375);//жд-1
var point6 = new google.maps.LatLng(49.865247, 24.052719);//M06-1
var point7 = new google.maps.LatLng(49.870904, 24.018831);//Варшавская
var point8 = new google.maps.LatLng(49.854192, 23.984536);//M10-1
var point9 = new google.maps.LatLng(49.829746, 23.964004);//M11-2
var point10 = new google.maps.LatLng(49.805761, 23.980755);//T1416-2
var point11 = new google.maps.LatLng(49.801940, 24.017909);//E471-2
var point12 = new google.maps.LatLng(49.801018, 24.067107);//H09-2
var point13 = new google.maps.LatLng(49.822622, 24.109364);//H02-2
var point14 = new google.maps.LatLng(49.849350, 24.112835);//жд-2
var point15 = new google.maps.LatLng(49.886850, 24.059146);//M09-2
var point16 = new google.maps.LatLng(49.883299, 23.997699);//За Варшавской
var point17 = new google.maps.LatLng(49.865669, 23.957687);//M10-2
var point18 = new google.maps.LatLng(49.820678, 23.912986);//Внешняя-M11
var point19 = new google.maps.LatLng(49.793143, 23.931155);//Внешняя-СКНИЛОВ
var point20 = new google.maps.LatLng(49.781017, 23.966675);//Внешняя-T1416
var point21 = new google.maps.LatLng(49.768098, 24.014036);//Внешняя-E471
var point22 = new google.maps.LatLng(49.768230, 24.107328);//Внешняя-H09
var point23 = new google.maps.LatLng(49.791034, 24.143461);//Внешняя-СОСНОВКА
var point24 = new google.maps.LatLng(49.817517, 24.158976);//Внешняя-Н02-ВИННИКИ
var point25 = new google.maps.LatLng(49.866754, 24.171020);//Внешняя-КАММЕНОПОЛЬ
var point26 = new google.maps.LatLng(49.892932, 24.122027);//Внешняя-Н17
var point27 = new google.maps.LatLng(49.908184, 24.093039);//Внешняя-ДУБЛЯНЫ
var point28 = new google.maps.LatLng(49.922283, 24.052737);//Внешняя-М09
var point29 = new google.maps.LatLng(49.925157, 23.947680);//Внешняя-
var point30 = new google.maps.LatLng(49.918746, 23.910265);//Внешняя-БИРКИ
var point31 = new google.maps.LatLng(49.874298, 23.889034);//Внешняя-М10-РЯСНЕ-РУС
var point32 = new google.maps.LatLng(49.843766, 23.894750);//Внешняя-ОБЪЕЗДНАЯ-РУДНО

function initialize() {
  var mapProp = {
    center: x,
    zoom: 12,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var myTrip1=[point1, point2, point3, point4, point5, point6, point7, point8, point1];
  var flightPath1 = new google.maps.Polygon({
  	path:myTrip1,
  	strokeColor: "#008080",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#008080",
  	fillOpacity:0.3
  });

  var myTrip2=[point1, point9, point10, point11, point2, point1];
  var flightPath2 = new google.maps.Polygon({
  	path:myTrip2,
  	strokeColor: "#9b00ff",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#9b00ff",
  	fillOpacity:0.3
  });

  var myTrip3=[point2, point11, point12, point3,  point2];
  var flightPath3 = new google.maps.Polygon({
  	path:myTrip3,
  	strokeColor: "#b71d41",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#b71d41",
  	fillOpacity:0.3
  });

  var myTrip4=[point3, point12, point13, point4, point3];
  var flightPath4 = new google.maps.Polygon({
  	path:myTrip4,
  	strokeColor: "#1b00ff",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#1b00ff",
  	fillOpacity:0.3
  });

  var myTrip5=[point4, point13, point14, point5, point4];
  var flightPath5 = new google.maps.Polygon({
  	path:myTrip5,
  	strokeColor: "#4d3939",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#4d3939",
  	fillOpacity:0.3
  });

  var myTrip6=[point5, point14, point15, point6, point5];
  var flightPath6 = new google.maps.Polygon({
  	path:myTrip6,
  	strokeColor: "#ff1b00",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#ff1b00",
  	fillOpacity:0.3
  });

  var myTrip7=[point6, point15, point16, point7, point6];
  var flightPath7 = new google.maps.Polygon({
  	path:myTrip7,
  	strokeColor: "#e5ff00",
  	strokeOpacity:0.8,
  	strokeWeight:2,
  	fillColor: "#e5ff00",
  	fillOpacity:0.4
  });

  var myTrip8=[point7, point16, point17, point8, point7];
  var flightPath8 = new google.maps.Polygon({
  	path:myTrip8,
  	strokeColor: "#7e7563",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#7e7563",
  	fillOpacity:0.3
  });

  var myTrip9=[point8, point17, point9, point1, point8];
  var flightPath9 = new google.maps.Polygon({
  	path:myTrip9,
  	strokeColor: "#ff9a00",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#ff9a00",
  	fillOpacity:0.3
  });

  var myTrip10=[point9, point18, point19, point20, point21, point11, point10, point9];
  var flightPath10 = new google.maps.Polygon({
  	path:myTrip10,
  	strokeColor: "#7e7563",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#7e7563",
  	fillOpacity:0.3
  });

  var myTrip11=[point11, point21, point22, point12, point11];
  var flightPath11 = new google.maps.Polygon({
  	path:myTrip11,
  	strokeColor: "#00ff1b",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#00ff1b",
  	fillOpacity:0.3
  });

  var myTrip12=[point12, point22, point23, point24, point13, point12];
  var flightPath12 = new google.maps.Polygon({
  	path:myTrip12,
  	strokeColor: "#f1a552",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#f1a552",
  	fillOpacity:0.3
  });

  var myTrip13=[point13, point24, point25, point14, point13];
  var flightPath13 = new google.maps.Polygon({
  	path:myTrip13,
  	strokeColor: "#1d41b7",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#1d41b7",
  	fillOpacity:0.3
  });

  var myTrip14=[point14, point25, point26, point27, point28, point15, point14];
  var flightPath14 = new google.maps.Polygon({
  	path:myTrip14,
  	strokeColor: "#008080",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#008080",
  	fillOpacity:0.3
  });

  var myTrip15=[point15, point28, point29, point16, point15];
  var flightPath15 = new google.maps.Polygon({
  	path:myTrip15,
  	strokeColor: "#ff9a00",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#ff9a00",
  	fillOpacity:0.3
  });

  var myTrip16=[point16, point29, point30, point31, point17, point16];
  var flightPath16 = new google.maps.Polygon({
  	path:myTrip16,
  	strokeColor: "#000199",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#000199",
  	fillOpacity:0.3
  });

  var myTrip17=[point17, point31, point32,point18, point9, point17];
  var flightPath17 = new google.maps.Polygon({
  	path:myTrip17,
  	strokeColor: "#ff1b00",
  	strokeOpacity:0.6,
  	strokeWeight:2,
  	fillColor: "#ff1b00",
  	fillOpacity:0.3
  });

  flightPath1.setMap(map);
  flightPath2.setMap(map);
  flightPath3.setMap(map);
  flightPath4.setMap(map);
  flightPath5.setMap(map);
  flightPath6.setMap(map);
  flightPath7.setMap(map);
  flightPath8.setMap(map);
  flightPath9.setMap(map);
  flightPath10.setMap(map);
  flightPath11.setMap(map);
  flightPath12.setMap(map);
  flightPath13.setMap(map);
  flightPath14.setMap(map);
  flightPath15.setMap(map);
  flightPath16.setMap(map);
  flightPath17.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
