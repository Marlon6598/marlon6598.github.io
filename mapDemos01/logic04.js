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

// Draw a circle around Georgia Tech using L.circle()
L.circle(
    [33.7756, -84.3963],
    {
        color: "black",
        opacity: .50,
        fillColor: "yellow",
        radius: 400,
        fillOpacity: .30
    }
).bindPopup("Hello From Georgia Tech!").addTo(myMap);

// Draw a rectangle
L.rectangle(
    [
        // Specify the start and end of the rectangle
        [33.7734, -84.3676],
        [33.7712, -84.3646]
    ],
    {
        color: "black",
        opacity: .50,
        fillColor: "red",
        fillOpacity: 0.2,
        stroke: true,
        weight: 2
    
    }
).bindPopup("Hello From Ponce City Market!").addTo(myMap);

// draw a line from the Mercedes Benz arena to the State Farm arena
L.polyline([
    [33.7573, -84.3963],
    [33.7553, -84.4006]
],
    {
        color: "red"
    }
).addTo(myMap);

// draw a polygon around Chateau Elan using L.polygon()
L.polygon(
    [
        [34.1018, -83.8177],
        [34.0998, -83.8157],
        [34.0975, -83.8107],
        [34.0985, -83.8087]
    ],
    {
        color: "black",
        opacity: .50,
        fillColor: "orange",
        fillOpacity: .50
    }
).addTo(myMap);

