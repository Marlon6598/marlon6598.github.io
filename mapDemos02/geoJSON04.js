var dataURL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000"

var myMap = L.map("map",
    {
    center: [37.7749, -122.4194],
    zoom: 13
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// use d3.json() to make a marker cluster map from the promise data
d3.json(dataURL).then(function(data)
    {
        // make a marker cluster group to hold the clusters of points
        var markers = L.markerClusterGroup();
        for(var i = 0; i < data.length; i++) // loops through the array of data points
        {
            var location = data[i].location; // extracts the location

            var dateOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            };

            //add the coordinates as an array to the marker clusters and add a popup
            markers.addLayer(
                L.marker(
                    [
                        location.coordinates[1],
                        location.coordinates[0]
                    ]
                )
                .bindPopup(
                    `${new Date(data[i].date).toLocaleDateString("en-US", dateOptions)}
                    <hr>
                    <b>Address: </b>${data[i].address} <br>
                    <b>Description: </b>${data[i].descript}<br>
                    <b>Time: </b>${data[i].time}`
                )
            );
        }
    }
);