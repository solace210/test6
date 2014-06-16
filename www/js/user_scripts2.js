//$.ui.ready(function(){
//    load_map();
//}); 

//var my_map;

function load_map() {
  
  $('#map-content').empty();
  $('#map-content').append('<div id="map-holder"></div>');
  $("#map-holder").height($(window).height()-60);
    
  // create a map in the "map" div, set the view to a given place and zoom
  var my_map = L.map('map-holder').setView([51.505, -0.09], 13);
  
  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(my_map);

  // add a marker in the given location, attach some popup content to it and open the popup
  L.marker([51.5, -0.09]).addTo(my_map)
    .bindPopup('Your polling station is here.')
    .openPopup();
  
}