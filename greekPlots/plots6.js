// set up a function that initializes the plot
function init()
{
    d3.json("data.json").then(function(data){
        trace = {
            x: data.map(data => data.pair),
            y: data.map(data => data.greekSearchResults),
            type: "bar"
        }
        traceData = [trace];

        layout = {
            title: "Greek Data"
        }

        Plotly.newPlot("plot1", traceData, layout);
    });
}

// make a function that updates the plot
function updatePlot()
{
    d3.json("data.json").then(function(data){

    
        let dropdown = d3.select("#selDataset"); // d3 selector on the dropdown menu

        // access nest value properties from the options int he dropdown
        let dataset = dropdown.property("value");

        let x = [];
        let y = [];
        let label = "";

        // based on the value attribute from either option in the dropdown, establish the values of the arrays for the data for the traces
        if(dataset == "greek")
        {
            x = data.map(data => data.pair);
            y = data.map(data => data.greekSearchResults);
        }
        else if(dataset == "roman")
        {
            x = data.map(data => data.pair);
            y = data.map(data => data.romanSearchResults);
        }

        let update = {
            title: label
        }

        // call on Plotly.restyle() to restyle the plot
        Plotly.restyle("plot1", "x", [x]);
        Plotly.restyle("plot1", "y", [y]);
        Plotly.relayout("plot1", update)
    });
}
// call on our d3 selector to associate the dropdown with an object
d3.selectAll("#selDataset").on("change", updatePlot);

// call init()
init();