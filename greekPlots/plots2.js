/* use .map to create the arrays
let pairs = searchResults.map(function(result) {
    return searchResults.pair;
}); */

// instead of the longer version of .map(), we can do a short version
let pairs = searchResults.map(result => result.pair);
let greekSearchResults = searchResults.map(result => result.greekSearchResults);
let greekNames = searchResults.map(result => result.greekNames);
let romanSearchResults = searchResults.map(result => result.romanSearchResults);
let romanNames = searchResults.map(result => result.romanNames);

// to plot data, first we need to have our trace information
let greekTrace = {
    x: pairs,
    y: greekSearchResults,
    text: greekNames,
    name: "Greek",
    type: "bar"
};

let romanTrace = {
    x: pairs,
    y: romanSearchResults,
    text: romanNames,
    name: "Roman",
    type: "bar"
};

// create the array for our traces to be plotted together
let data = [greekTrace, romanTrace];

// add the layout properties
let layout = {
    title: "Greek vs. Roman Search Results",
    barmode: "group",
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
};

// render the plot to the tag with id = 'plot'
Plotly.newPlot("plot", data, layout);