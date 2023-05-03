var myMap = L.map("map",
    {
        center: [37.0902, -95.7129],
        zoom: 5
    }
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

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