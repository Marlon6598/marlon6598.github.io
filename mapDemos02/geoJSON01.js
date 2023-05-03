// NYC Coordinates: 40.7128 N, 74.0060 W

// Make a variable to hold the map
var myMap = L.map("map",
    {
    center: [40.7128, -74.0060],
    zoom: 11
});

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

/*
// Get the GeoJSON data with D3
d3.json("nyc.geojson").then(
    function(data)
    {
        // Because this nyc.geoJson file has polygon coordinates, it plots the outlines of the neighborhoods
        L.geoJson(data).addTo(myMap);
    }
);

// Specify the properties in a variable to be use with the style property in L.geoJson()
var styling = {
    color: "blue", // Changes the outlines for each neighborhood to white
    fillColor: "blue",
    fillOpacity: 0.2,
    weight: 1
};

// We can change the colors of the outlines of the neighborhoods
// get the GeoJSON data with D3
d3.json("nyc.geojson").then(function(data){L.geoJson(data,{style: styling}).addTo(myMap)});
*/

// Color the boroughs on the map based on the name of the borough
function boroughColor(borough)
{
    if (borough == "Brooklyn")
        return "brown";
    else if (borough == "Bronx")
        return "red";
    else if (borough == "Manhattan")
        return "orange";
    else if (borough == "Queens")
        return "green";
    else // the only other option left is Staten Island
        return "blue";
};

// Because this nyc.geoJson file has polygon coordinates, it plots the outlines of the neighborhoods
// You can access the boroughs by going to data.feature.properties.borough
d3.json("nyc.geojson").then(
    function(data)
    {
        L.geoJson(data,{
            style: function (feature) {
                return {
                    color: "white",
                    fillOpacity: 0.3,
                    weight: 1,
                    fillColor: boroughColor(feature.properties.borough) // Call a function and pass in the value from data.feature.properties.borough; this info is from the nyc.geojson file
                };
            },
            // This property allows for actions and other attributes to be mapped to each neighborhood on the map
            onEachFeature: function(feature, layer)
            {
                // Bind a popup when the neighborhood is clicked
                layer.bindPopup(`${feature.properties.neighborhood}<hr>${feature.properties.borough}</center>`);

                // Use layer.on() to add events to the map based on the cursor position
                layer.on({
                    mouseover: function(event){
                        layer = event.target, // Tell what triggered the event - store the reference in a variable
                        layer.setStyle({fillOpacity: 0.6}) // use setStyle() property to change the fillOpacity
                    }, 
                    mouseout: function(event){
                        layer = event.target, // Tell what triggered the event - store the reference in a variable
                        layer.setStyle({fillOpacity: 0.3}) // use setStyle() property to change the fillOpacity
                    },
                    // add a click function event
                    click: function(event){
                        myMap.fitBounds(event.target.getBounds());
                    }
                })
            }
        }).addTo(myMap);
    }
);