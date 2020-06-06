// from data.js
var tableData = data;

// fadeout of intro text
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var fullHeight = $(window).height()

    $('.paragraph-fade').css({
        'opacity': ((fullHeight/5 - scroll) / 200) + 0.1
    });
});

// // format of data.js
// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   },

// Level 1: Automatic Table and Date Search (Required)

// Get a reference to the table body
var tbody = d3.select("tbody");

// loop to add data into table
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
//listen for event
  //filter data
    //rewrite table
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Use input value to filter tableData
  
// Level 2: Multiple Search Categories (Optional)
// Complete all of Level 1 criteria.
//
// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
//
// date/time
// city
// state
// country
// shape
