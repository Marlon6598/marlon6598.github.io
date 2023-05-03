//
// search results
function popular(entry) {
    return entry.greekSearchResults > 1000000
    // when the function is used with .filter() function, it finds and returns entries that satisfy that criteria
};
// make an array of popular Greek entries
let poppinGreeks = searchResults.filter(popularGreek); // uses the function to filter based on criteria
let poppinRomans = searchResults.filter(popularRoman); // uses the function to filter based on criteria

//we can also sort and slice the data to filter for the top 10 results
poppinGreeks = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
poppinRomans = searchResults.sort((a, b) => b.romanSearchResults - a.romanSearchResults);

// slice the data to the first 10 results
poppinGreeks = poppinGreeks.slice(0, 10);
poppinRomans = poppinRomans.slice(0, 10);

// use .reverse() function to reverse the order of the data, which is great for horizontal bar charts
poppinGreeks = poppinGreeks.reverse();
poppinRomans = poppinRomans.reverse();

// to plot data, first we need to have our trace information
let greekTrace = {
    y: poppinGreeks.map(result => result.pair),
    x: poppinGreeks.map(result => result.greekSearchResults),
    text: poppinGreeks.map(result => result.greekName),
    name: "Greek",
    type: "bar",
    orientation: "h"
};

let romanTrace = {
    y: poppinRomans.map(result => result.pair),
    x: poppinRomans.map(result => result.romanSearchResults),
    text: poppinRomans.map(result => result.romanName),
    name: "Roman",
    type: "bar",
    orientation: "h"
};

// create the array for our traces to be plotted together
let greekData = [greekTrace];
let romanData = [romanTrace];

// add the layout properties
let greekLayout = {
    title: "top 10 Greek Search Results",
    margin: {
        l: 100,
        r: 100,
        b: 100,
        t: 100,
    }
};

let romanLayout = {
    title: "Top 10 Roman Search Results",
    margin: {
        l: 100,
        r: 100,
        b: 100,
        t: 100,
    }
};

// render the plot to the tag with id = 'plot'
Plotly.newPlot("plot1", greekData, layout);
Plotly.newPlot("plot2", romanData, layout);