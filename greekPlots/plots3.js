//
// search results
function popular(entry) {
    return entry.greekSearchResults > 1000000
    // when the function is used with .filter() function, it finds and returns entries that satisfy that criteria
}
// make an array of popular Greek entries
let poppinGreeks = searchResults.filter(popularGreek); // uses the function to filter based on criteria
let poppinRomans = searchResults.filter(popularRoman); // uses the function to filter based on criteria

//we can also sort and slice the data to filter for the top 10 results
poppinGreeks = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
poppinRomans = searchResults.sort((a, b) => b.romanSearchResults - a.romanSearchResults);

// slice the data to the first 10 results
poppinGreeks = poppinGreeks.slice(0, 10);
poppinRomans = poppinRomans.slice(0, 10);

// to plot data, first we need to have our trace information
let greekTrace = {
    x: poppinGreeks.map(result => result.pair),
    y: poppinGreeks.map(result => result.greekSearchResults),
    text: poppinGreeks.map(result => result.greekName),
    name: "Greek",
    type: "bar"
};

let romanTrace = {
    x: poppinRomans.map(result => result.pair),
    y: poppinRomans.map(result => result.romanSearchResults),
    text: poppinRomans.map(result => result.romanName),
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