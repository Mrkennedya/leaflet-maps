let schoolmap = L.map('schoolMap').setView([29.646, -82.330], 11.00);

L.tileLayer('https://api.mapbox.com/styles/v1/mrkennedya/cjp0h04q008sc2rnzlkdio8ty/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXJrZW5uZWR5YSIsImEiOiJjanAwZ3Q1dHczNGZ4M2pwdHlxdWllNHZ0In0.RoTUq5wpXW1DtDCI5W4W7Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(schoolmap);

for (let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].schoolName + '</h3>' + '<p>' + places[i].description + '</p>')
  .addTo(schoolmap);
}
