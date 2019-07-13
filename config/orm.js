// set up a custom object-relational mapping to MySQL database and export for use elsewhere

var connection = require("../config/connection.js");


// Helper function to create an array of question marks ["?", "?", "?"] for placeholder search values and turns it into a string.

function printQuestionMarks(num) {
  var arr = [];
  
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}