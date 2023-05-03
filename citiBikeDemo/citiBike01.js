// perform an API call to the CitiBike API and process data
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(function(responseData){function createMarkers(responseData)})

// make a fucntion to create the markers. After the markers are created, function creates the map
function createMarkers(bikeData)
{
    console.log(bikeData); // returns an array of data, where the array is store in .data.stations
    // pull the stations property to get the array
    var stations = bikeData.data.stations;

    // create the markers -- make an empty array so that we can toggle the markers
    var bikeMarkers = [];

    // populate the bikeMarkers array by looping through the array of stations
    for (var i = 0; i < stations.length; i++)
    {
        // save the reference to the current station
        let currentStation = stations[i];

        // for each station, make a marker and then bind a popup with the station's name
        let currentMarker = L.marker([currentStation.lat, currentStation.lon])
            .bindPopup(`<center
            <h2>${currentStation.name}</h2><hr>
            <b>Bike Capacity: <b>${currentStation.capacity}</b>
            </center>`);

        // then add the marker to the bikeMarkers array
        bikeMarkers.push(currentMarker);
    }
    
    // call the function to create the map and pass in the markers using L.layerGroup
    createMap(L.layerGroup(bikeMarkers));

}

function createMap(bikeMarkers)
{
    // Create the tile layer that will be the background of our map.
    var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // grayscale layer
    var grayscale = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });

    // water color layer
    var waterColor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'jpg'
    });

    // make an object to hold the baseMaps (tile layers)
    var baseMaps = {
        "Street Map": streetmap,
        "Grayscale Map": grayscale,
        "Watercolor Map": waterColor
    };

    // NYC coordinates = [40.73, -74.0059]
    // add the toggleable overlays
    var overlayMaps = {"Bike Stations": bikeMarkers};

    // make the map with the options
    var myMap = L.map("map", {center: [40.73, -74.0059], zoom: 12, layers: [streetmap, bikeMarkers]});

    // create the layer control
    L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);
};