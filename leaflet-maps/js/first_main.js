let mymap = L.map('gamestopMap').setView([29.660, -82.321], 11.95);

L.tileLayer('https://api.mapbox.com/styles/v1/mrkennedya/cjp0h04q008sc2rnzlkdio8ty/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXJrZW5uZWR5YSIsImEiOiJjanAwZ3Q1dHczNGZ4M2pwdHlxdWllNHZ0In0.RoTUq5wpXW1DtDCI5W4W7Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let gamestop1 = L.marker([29.627090, -82.385948]).addTo(mymap);
  gamestop1.bindPopup("<b>2803 SW 42nd St #50</b><br>Gainesville, FL 32608").openPopup();

var gamestop2 = L.marker([29.656598, -82.410772]).addTo(mymap);
  gamestop2.bindPopup("<b>6419 W Newberry Rd</b><br>Gainesville, FL 32605");

var gamestop3 = L.marker([29.675955, -82.337331]).addTo(mymap);
  gamestop3.bindPopup("<b>2631 NW 13th St</b><br>Gainesville, FL 32609");

var gamestop4 = L.marker([29.709666, -82.354712]).addTo(mymap);
  gamestop4.bindPopup("<b>5824 NW 34th Blvd #110</b><br>Gainesville, FL 32653");
