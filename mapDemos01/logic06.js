//create an array of objects for each location
var cities = [
    {
        name: "New York City",
        location: [40.7128, -74.0059],
        population: 8804190
    },
    {
        name: "Los Angeles",
        location: [34.0522, -118.2437],
        population: 3898747
    },
    {
        name: "Houston",
        location: [29.7604, -95.3698],
        population: 2304580
    },
    {
        name: "Omaha",
        location: [41.2524, -95.9980],
        population: 486051
    },
    {
        name: "Chicago",
        location: [41.8781, -87.6298],
        population: 2746388
    },
];

// make a list to hold the markers for each city - add the list of markers to a toggle-able layer
var cityMarkers = [];


// function that will do thing:
function markerSize(pop){return Math.sqrt(pop) * 40};

//loop through each city in the array of cities and extract the necessary attributes to build a circle marker and then add a popup to the map
for(var i=0; i < cities.length; i++)
{
    L.circle(
        cities[i].location, // extracts the location property (coordinates) from the object
        {
            color: "black",
            fillColor: "blue",
            fillOpacity: .5,
            // set the radius property by calling the markerSize to calculate the radius by using the population property
            radius: markerSize(cities[i].population)
        }
    )
    .bindPopup(
        `<center><h1>${cities[i].name}</h1><hr><h2>Population: ${cities[i].population}</h2></center>`
    );
};

// use the markerArray as a layerGroup with L.layerGroup(array of markers)
var cityLayer = L.layerGroup(cityMarkers);

// use layerGroup of markers as an overlay - can be toggleable
var overlays = {cities: cityLayer}; // makes a toggle-able option, named cities, that can show/hide the city markers and their populations

// add the tile layer
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// object to hold the tile layers
var tiles = {
    street: street,
    topograhpy: topo
};

// add the layers property to myMap
var myMap = L.map("map",
    { 
        center: [37.0902, -95.7129],
        zoom: 5,
        layers: [street, cityLayer]
    }
);

// pass the map layers into the layer control and add the layer control to the map
L.control.layers(tiles, overlays).addTo(myMap);

// function that will do thing:
function markerSize(pop){return Math.sqrt(pop) * 40};

//loop through each city in the array of cities and extract the necessary attributes to build a circle marker and then add a popup to the map
for(var i=0; i < cities.length; i++)
{
    L.circle(
        cities[i].location, // extracts the location property (coordinates) from the object
        {
            color: "black",
            fillColor: "blue",
            fillOpacity: .5,
            // set the radius property by calling the markerSize to calculate the radius by using the population property
            radius: markerSize(cities[i].population)
        }
    )
    .bindPopup(
        `<center><h1>${cities[i].name}</h1><hr><h2>Population: ${cities[i].population}</h2></center>`
    ).addTo(myMap);
}