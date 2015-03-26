var map;

function initialize() {
  var mapOptions = {
    center: { lat: 40.600314, lng: -99.664023},
    zoom: 5
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
  var array = [];
  google.maps.event.addListener(map,'click',function(event) {
    var coordinates = [event.latLng.lat() + ', ' + event.latLng.lng()];
    array.push(coordinates);
    console.log(array);
  });
  exportCsv(array);
}

google.maps.event.addDomListener(window, 'load', initialize);

function exportCsv(data) {
  $('#done-button').on('click', function() {
    var csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function(infoArray, index){
       dataString = infoArray.join(",");
       csvContent += index < data.length ? dataString+ "\n" : dataString;
    });
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  });
}