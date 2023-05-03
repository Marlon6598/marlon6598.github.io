// define a JS object (value - key pairs) for trace information
var trace = {
    x: xData,
    y: xData
};

// data array that contains our trace info
var data = [trace];

// specify layout attributes
var layout = {
    title: "A Plotly Plot for you plotters"
};

// call plotly.newPlot()
// takes 3 arguments
    // destination - an id in the html
    // data array
    // layout attribute object
Plotly.newPlot("plot", data, layout);