
var clearScoreButton = document.querySelector(".clearscores");
var tableContainer = document.getElementById('table-container');

function createTableFromObjects(data) {
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');


    // Create table header row
    var keys = Object.keys(data[0]);
    for (var key of keys) {
        var headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
    
    // Create table data rows
    for (var obj of data) {
      var dataRow = document.createElement('tr');
      for (var key of keys) {
        var dataCell = document.createElement('td');
        dataCell.textContent = obj[key];
        dataRow.appendChild(dataCell);
      }
      table.appendChild(dataRow);
    }
  
    return table;
  }


// Pull items from local storage to arrage in table created above
var scoreboard = JSON.parse(localStorage.getItem("playerDetails"));
var table = createTableFromObjects(scoreboard);

tableContainer.appendChild(table);

//Button to allow user to clear local storage high scores
clearScoreButton.addEventListener("click", clearStorage);

function clearStorage() {
    localStorage.clear();
    tableContainer.textContent = "No scores to show";
}