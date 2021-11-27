// import the data from data.js
const tableData = data;

// IMPORTANT
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage. 
// It is often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps), 
// for presentation.

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// With this code, we:
// Declare a variable, tbody &
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
// Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality

function buildTable(data) {
    //  clear the existing data for a clean slate
    tbody.html("");

    // tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.
    // The parentheses with empty quotes (("");) is an empty string.
    // Basically, this entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; 
    // in other words, create a blank canvas. 
    // This is a standard way to clear data.

    // **************************
    //     11.5.2
    // Add forEach to Your Table
    // **************************
    // 
    // practice forEach
    // 
    // copy'n'paste this code to the console if you want to run it;
    // it's being included here as coursework notes only, not really part of app.js
    //  let numbers = [1,2,3,4,5,6]
    //  numbers.forEach(function (element){
        // console.log(element**2);
    // })

    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // This single line of code is doing a lot. It tells JavaScript to find the <tbody> tag within the HTML 
        // and add a table row ("tr").
        // We'll get back to HTML when it's time to display our table, but for now keep in mind
        // that the <tr> tags are used for each row in a table. 
        // Each object, or UFO sighting, in the array will be wrapped in a <tr> tag.

        Object.values(dataRow).forEach((val) => {

        //  We're already working with an array of objects, where each object is a UFO sighting. 
        // By starting our line of code with Object.values, we're telling JavaScript to reference one object 
        // from the array of UFO sightings. By adding (dataRow) as the argument, 
        // we are saying that we want the values to go into the dataRow. We've added forEach((val) to specify 
        // that we want one object per row.
        // Let's think of it this way: we're telling our code put each sighting onto its own row of data. 
        // The val argument represents each item in the object, such as the location, shape, or duration.
        // In the next two lines of code, we'll append each value of the object to a cell in the table. 
        // In our editor, the next few lines of code will go inside our new function. 
        // Let's first create a variable to append data to a table:

        let cell = row.append("td");
        cell.text(val);

        });
// With this function, we have done the following:
// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from each object into a cell in the row
    });
};

    
    // **************************
    //     11.5.3
    // Add Filters
    // &&&
    //      11.5.4
    //  Use the IF Statement
    // **************************
    // 
    // Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality

// pseudocode practice - 'if' statement that we'll use for filtering table by date
// if (a date is entered) {
//     Filter the default data to show only the date entered
// };

function handleClick() {
    // this function will be invoked in the html code whenever someone clicks on a filter in the table
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // check to see if a date was entered as a filter & apply the filter to the table data that is manifest
    // only show rows where 'datetime' matches the filter value 'date'
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using filtered data
    buildTable(filteredData);
};

// handleClick is a function that handles a click by the user
// we also need to listen for the click, which will invoke handleClick()
// fyi #filter-btn here refers to something in the html that we'll name #filter-btn when we create the html
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

    // **************************
    //     11.6.1
    // Bootstrap Components
    // **************************
// go to index.html file....




