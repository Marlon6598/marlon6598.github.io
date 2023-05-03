var myMap = L.map("map",
    {
        center: [37.0902, -95.7129],
        zoom: 5
    }
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var nyc = L.marker(
    [40.7128, -74.0059],
    {
        title: "New York City"
    }
).addTo(myMap);

var la = L.marker(
    [34.0522, -118.2437],
    {
        title: "Los Angeles"
    }
).addTo(myMap);

var hs = L.marker(
    [29.7604, -95.3698],
    {
        title: "Houston"
    }
).addTo(myMap);

var om = L.marker(
    [41.2524, -95.9980],
    {
        title: "Omaha"
    }
).addTo(myMap);

var co = L.marker(
    [41.8781, -87.6298],
    {
        title: "Chicago"
    }
).addTo(myMap);