// Florida coordinates - [27.96044, -82.30695]

var path = "ACS-ED_2014-2018_Economic.geojson";

var myMap = L.map("map",
    {
    center: [27.96044, -82.30695],
    zoom: 7
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json(path).then(function(data){
    console.log(data);
    // define a choropleth layer using L.choropleth()
    var chorolayer = L.choropleth(data, {
        valueProperty: "DP03_16E", // extract property DP03_16E
        scale: ["#fee8c8", "#e34a33"], // establishes color scale for values in the map
        steps: 10, // tells the numbers of breaks in the step range in the color scale
        mode: "q", // establish breaks in "q" (quartile). "e" = equidistant, "k" = mode
        style: {
            color: "white",
            weight: 1,
            fillOpacity: 0.4
        },
        // onEachFeature to bind the popups
        onEachFeature: function(feature, layer){
            layer.bindPopup(
                `County: ${feature.properties.NAME}
                <hr>Approx. Pop. of Employed Peoples w/ Kids Ages 6-17: <b>${feature.properties.DP03_16E.toLocaleString("en-US")}</b><br>
                Est. Income & Benefits for families: <b>${feature.properties.DP03_75E.toLocaleString("en-US")}</b>`);
        }
    }).addTo(myMap);

    // set up the legend - set up the legend inside of a control L.control()
    let legend = L.control(
        {position: "bottomright"}
    ); // set the position using the position property

    // set up the properties of the legend using .onAdd property, which uses an inline function call to "draw" HTML code for the legend
    legend.onAdd = function(){
        // set up HTML properties of the legend here
        // legend is designed to create a new 'div' that is not already in the HTML, then add the div to the page. Use L.DomUtil.create() to create the HTML that will go in the page
        // make a div with id = "info legend"
        let div = L.DomUtil.create("div", "info legend");

            // use the choropleth layer to get the following pieces of info
            // get the limits for the segments in the choropeth using .options.limits
            let limits = chorolayer.options.limits;
            console.log(limits);

            // get the colors that correspond to the limits for the segments in the choropleth using .options.colors
            let colors = chorolayer.options.colors;
            console.log(colors);

            //add an array for the labels to be added
            let labels = [];

            // add the div code for the minimum and maximum
            var legendInfo = "<h1>Population with Children<br>(ages 6 - 17)</h1>" +
            "<div class = \"labels\">" +
            "<div class=\"min\">" + limits[0] + "</div>" +
            "<div class=\"max\">" + limits[limits.length-1].toLocaleString() + "</div>" +
            "</div>";

            // use .innerHTML property to add the legendInfo to the legend
            div.innerHTML =  legendInfo;

            // generate the code that draws the blocks using the ul. Use forEach to loop through the limits and add a li for each color and push the values into the labels array
            limits.forEach(
                function(limit, index){
                    // generate the li with each color and push to the lables array
                    labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
                }
            );

            // use <ul> and join the text in the labels array to form the list, then add the list to the div
            div.innerHTML += "<ul>" + labels.join("") + "</ul>";

        // return finalized div
        return div;
    };

    legend.addTo(myMap);
}
);