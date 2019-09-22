// from data.js
let tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table
let table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
let tbody = d3.select("tbody");

/* loop through data.js to add to create the table...
exercise 2 & 3 (start at about 52 minutes in video tho*/
tableData.forEach(sightings => {
    let row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to `click-me`
let button = d3.select("#filter-btn");
//console.log(button);

// Getting a reference to the input element on the page with the id property set to 'input-field' 
let inputField = d3.select("#datetime");

/*
Use a date form in your HTML document and write JavaScript code that will listen for events 
and search through the date/time column to find rows that match user input.
*/
button.on("click", function() {
    
  });
  
  





