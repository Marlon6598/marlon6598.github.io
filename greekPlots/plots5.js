// D3 is a library that allows us to implement data-driven documents
// D3 allows for more interactive elements to be added to our web pages
// Perfect for dashboards!

// First use D3.json() to access jsonified data
//implement a promise using .then()
d3.json("data.json").then(function(data){
    // if the endpoint (in this case the data.json file) is accessed, simply output the data
    console.log(data);
});

// function that filters Greek search results
function popularGreek(greek)
{
    return greek.greekSearchResults > 100000000
}

d3.json("data.json").then(function(data){
    // use the data from the .js to plot the charts
    // filter results
    let poppinGreeks = data.filter(popularGreek);
    // use a console.log() to check the results
    // console.log(poppinGreeks);
    // make the trace for the greek data
    let trace = {
        x: poppinGreeks.map(entry => entry.greekName),
        y: poppinGreeks.map(entry => entry.greekSearchResults),
        type: "bar"
    };

    // data trace array
    let traceData = [trace];
    
    // apply the title
    let layout = {title: "Popular Greek Search Results"};

    // render the plot to Plotly
    Plotly.newPlot("plot1", traceData, layout);
});