// from data.js
const tableData = data;

// Select the table body
let tbody = d3.select("tbody");

// For each entry, append to the table
tableData.forEach((sightings) => {
    const row = tbody.append("tr");
    for (key in sightings){
      const cell = tbody.append("td");
      cell.text(sightings[key]);
    }
});

// Select the Filter Table button
const filter = d3.select("#filter-btn");

// Event listener on clicking the "Filter" button
filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Remove the table body text so you don't just append the results to the bottom
  d3.select("tbody").text("")

  // Select the input element (date) and get the raw HTML node
  const inputElement = d3.select("#datetime");

  // Get the value property of the input element (date)
  const inputValue = inputElement.property("value");

  // Test print the results to console
  console.log(inputValue);
  console.log(tableData);

  // Define the filtered data based on date
  const filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // Test print the results of the filtered data to the console
  console.log(filteredData);

  // For each result entry append to the table body
  filteredData.forEach((result) => {
    const row = tbody.append("tr");
    for (key in result){
      const cell = tbody.append("td");
      cell.text(result[key]);
    }
  
  });

});

// Select reset button to clear results
const reset = d3.select("#reset-btn");

// Event listener on clicking the "Clear Results" button
reset.on("click", function() {

  // Remove the table body text so you don't just append the results to the bottom
  d3.select("tbody").text("")

  // Repopulate the full table data
  tableData.forEach((sightings) => {
    const row = tbody.append("tr");
    for (key in sightings){
      const cell = tbody.append("td");
      cell.text(sightings[key]);
    }
  });

});