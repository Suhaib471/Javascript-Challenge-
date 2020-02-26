// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


// Use d3 to update each cell's text with ufo data
tableData.forEach(function(ufoSightings) {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Getting a reference to the button on the page 
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page 
var inputField = d3.select("#datetime");

// Use d3 to update each table with filtered data
  button.on("click", function() {
    console.log('Button Clicked!');
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    var filteredData = data.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
    
    filteredData.forEach(function(ufoSightings) {
      var row = tbody.append("tr");
      Object.entries(ufoSightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });

  });
