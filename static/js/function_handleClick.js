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