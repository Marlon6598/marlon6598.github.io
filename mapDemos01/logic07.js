// access the URL endpoint
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){createFeatures(data.features)});

// make functions to process the data
function createFeatures(earthquakeData)
{
    console.log(earthquakeData); // extracts the data for our popups for each point
    // define a function named onEachFeature to extract the location (name) and date & bind the popups
    function onEachFeature(feature, layer){
        layer.bindPopup(`<center>${feature.properties.place}<hr>${new Date(feature.properties.time)}</hr></center>`)
    }

    // use L.geoJSON to make the groJSON marker layer
    // left onEachFeature is the property for the marker layer, right onEachFeature is function applied to the marker layer
    var earthquakes = L.geoJSON(earthquakeData, {onEachFeature: onEachFeature});
    
    // call another fucntion to make the map
    createMap(earthquakes);
};

function createMap(earthquakes)
{
    // add the tile layer
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'

    });

    // make a tileLayer object
    var tiles = {
        "Street Map": street,
        "Topography Map": topo
    }

    // make overlay that uses the earthquake geoJSON marker layer
    var overlays = {"Earthquake Data": earthquakes};

    // make the map with the defaults
    var myMap = L.map("map",
        { 
            center: [37.0902, -95.7129],
            zoom: 5,
            layers: [street, earthquakes]
        }
    );

    // layer control
    L.control.layers(tiles, overlays, {collapsed: false});
}
