function initMap() {
  console.log(map);
  var coordinates = { lat: 47.212325, lng: 38.933663 },
    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
    });

  image = '../../img/articles/desktop/busy_bathroom_desktop.png';
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image,
  });
}
