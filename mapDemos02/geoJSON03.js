var dataURL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000"

var myMap = L.map("map",
    {
    center: [37.7749, -122.4194],
    zoom: 13
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// use d3.json() to make a heatmap from the promise data
d3.json(dataURL).then(function(data)
    {
        // make an empty array to hold all of the points
        var heatArray = [];
        for(var i = 0; i < data.length; i++) // loops through the array of data points
        {
            var location = data[i].location; // extracts the location
            heatArray.push([location.coordinates[1], location.coordinates[0]]
            );
        }
        // use L.heatLayer() to create a heatmap from the array of points and add them to the map
        var heat = L.heatLayer(heatArray, {radius: 25, blur: 40}).addTo(myMap);
    }
);