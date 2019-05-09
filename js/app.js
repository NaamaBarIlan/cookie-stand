'use strict';

// source from MDN math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Global Variables

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// STORE ARRAY

var allStores = [];
var allHourlyTotals = [];
var totalAllLocationsPerHour = [];

// Access to the table in the DOM

var storesTable = document.getElementById('pats-salmon-cookies');

// STORE CONSTRUCTOR

function Store(storeLocation, minCust, maxCust, avgCookieSale){
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = [];
  this.dailyTotal = 0;

  this.hourlySalesCalc = function(){
    for(var i =0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
    }
    allHourlyTotals.push(this.hourlySales);
    console.log('all hourly totals' + allHourlyTotals);
  };

  this.makeDataRows = function(){

    // create the row
    var trEl = document.createElement('tr');
  
    // create, content, append first cell
    var tdEL = document.createElement('td');
    tdEL.textContent = this.storeLocation;
    trEl.appendChild(tdEL);
  
    // Loop through storeHours array for cookies per hour per location
    for (var i = 0; i < storeHours.length; i++){
      tdEL = document.createElement('td');
      tdEL.textContent = this.hourlySales[i];
      trEl.appendChild(tdEL);
    }
  
    // create, content, append total cell
    tdEL = document.createElement('td');
    tdEL.textContent = this.dailyTotal;
    trEl.appendChild(tdEL);
  
    // append the row to the table
    storesTable.appendChild(trEl);
  };

  this.dailyTotalSum = function(){
    for (var i = 0; i < this.hourlySales.length; i++){
      this.dailyTotal += this.hourlySales[i];
    }
    // console.log(this.dailyTotalSum);
  };
  this.allCall = function(){
    this.hourlySalesCalc();
    this.dailyTotalSum();
    this.makeDataRows();
  };
  allStores.push(this);
}

// STORE INSTANCES

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

console.log('an array of arrays' + allHourlyTotals);

// CALL FUNCTIONS

makeHeaderRow();


pike.allCall();
seaTac.allCall();
seattleCenter.allCall();
capitolHill.allCall();
alki.allCall();


// TABLE HEADER FUNCTION

function makeHeaderRow(){
  // create the row
  var trEl = document.createElement('tr');

  // create, content, append first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Hours/Locations';
  trEl.appendChild(thEl);

  // Loop through storeHours array for cells
  for (var i = 0; i < storeHours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }

  // create, content, append total cell
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  // append the row to the table
  storesTable.appendChild(trEl);
}

// 

function allStoresHourlyTotals(){
  // Outer loop of arrays
  for (var i = 0; i < allHourlyTotals.length; i++){
    console.log('allHourlyTotals' + allHourlyTotals[i]);
    var hourlySum = 0;
    // Inner loop of arrays
    for (var j = 0; j < allHourlyTotals[i].length; j++){
      hourlySum = hourlySum + allHourlyTotals[j][i];
    }
    totalAllLocationsPerHour.push(hourlySum);
  }
}

allStoresHourlyTotals();


// TABLE FOOTER FUNCTION

function makeFooterRow(){
  // create the row
  var trEl = document.createElement('tr');

  // create, content, append first cell
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  // Loop through totalAllLocationsPerHour array for cells
  for (var i = 0; i < storeHours.length; i++){
    var tdEL = document.createElement('td');
    tdEL.textContent = totalAllLocationsPerHour[i];
    trEl.appendChild(tdEL);
  }
  // create, content, append total of totals cell

  // append the row to the table
  storesTable.appendChild(trEl);
}

makeFooterRow();
