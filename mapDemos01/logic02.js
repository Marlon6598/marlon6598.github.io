// Leaflet maps consist of layers:
    // base layer - tile
    // marker layer(s) - the markers that go on top of the tile
// tell where the map is going to be located - use L.map() in order to set the location of the map

// L - leaflet

// Create our initial map object by setting the latitude, longitude, and zoom level
// Store this information into a variable using let or var

// Atlanta coordinates: 33.7488 N, 84.3877 W -> [33.7488,-84,3877]

var myMap = L.map("map",
    {
        center: [33.7488, -84,3877],
        zoom: 10
    }
);

// add the initial tile layer to the map
// use L.tileLayer(tileAttributes)
// .addTo(mapObject)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Add a marker to the map

var marker = L.marker(
    [33.7488, -84,3877],
    {
        title: "Hello from Atlanta, GA, USA!" // Hoverable text
    }
).addTo(myMap);

// add a popup to the marker as well -- makes the marker clickable
marker.bindPopup("Hello From Atlanta, GA, USA!");