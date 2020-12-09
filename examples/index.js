var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    //source destination
    center: ol.proj.fromLonLat([77.50, 12.99]),
    zoom: 12
  })
}); 

//changing co-ordinates
//add exception handling for invalid coordinates 
var waypoints = [
  [77.50, 12.99],
  [77.5354, 12.9756]
]
var control = new olrm.Control({
  map,
  waypoints
});

map.addControl(control)