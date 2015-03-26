var map;

function initialize() {
  var mapOptions = {
    center: { lat: 40.600314, lng: -99.664023},
    zoom: 5
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
  google.maps.event.addListener(map,'click',function(event) {

    var coordinates = event.latLng.lat() + ', ' + event.latLng.lng();
    console.log(coordinates)
  //  document.getElementById('latlng').value = event.latLng.lat() + ', ' + event.latLng.lng()
 });
}
  google.maps.event.addDomListener(window, 'load', initialize);
