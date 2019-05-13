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
var footerHourlyTotals = [];
var grandTotal = 0;

// DOM ACCESS

// Access to the table in the DOM
var storesTable = document.getElementById('pats-salmon-cookies');

// Access to the form in the Dom
var newStoreForm = document.getElementById('new-store-form');


// STORE CONSTRUCTOR

function Store(storeLocation, minCust, maxCust, avgCookieSale){
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;

  // Each stor's hourly sales
  this.hourlySales = [];
  this.dailyTotal = 0;
  this.hourlySalesCalc = function(){
    for(var i =0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
    }
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
      // console.log('hourlySales is ' + this.hourlySales);
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
      console.log(this.dailyTotalSum);
    }
    
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

// CALL FUNCTIONS

makeHeaderRow();

pike.allCall();
seaTac.allCall();
seattleCenter.allCall();
capitolHill.allCall();
alki.allCall();

footerHourlyTotalsCalc ();
makeFooterRow();

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
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  // append the row to the table
  storesTable.appendChild(trEl);
}

// TABLE FOOTER FUNCTION

function makeFooterRow(){

  // Create the footer
  var tFoot = document.createElement('tfoot');

  // create the row
  var trEl = document.createElement('tr');

  // create, content, append first cell
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  // Loop through storeHours array for cells
  for (var i = 0; i < storeHours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = footerHourlyTotals[i];
    trEl.appendChild(tdEl);
  }

  // create, content, append total cell
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);

  // append the row to the footer
  tFoot.appendChild(trEl);

  // append the footer to the table
  storesTable.appendChild(tFoot);
}

function footerHourlyTotalsCalc (){
  for (var i = 0; i < storeHours.length; i++){
    // local column total variable
    var hourlySum = 0;
    for (var j = 0; j < allStores.length; j++){
      hourlySum += allStores[j].hourlySales[i];
    }
    grandTotal += hourlySum;
    footerHourlyTotals[i] = hourlySum;
  }
}

// EVENT HANDLER

// the event handler should take the data from the input field, pass it into the constructor function,
// and create a new instance of a cookie stand that then appends to the table.

function handleFormSubmit(event){

  // event.preventDefault, b/c of the submit default
  event.preventDefault();
  

  // capture data from forms, fix types as needed
  // var inputName = event.target.inputName.value;

  var storeLocation = event.target.storelocation.value;
  var minCustomers = event.target.mincust.value;
  var maxCustomers = event.target.maxcust.value;
  var avgCookieSale = event.target.avgCookieSale.value;



  // validate form data - done in html

  // use data to create a new store
  var newStore = new Store(storeLocation, minCustomers, maxCustomers, avgCookieSale);
  console.log('the all store array' + allStores[5]);

  // Empty the previous table

  storesTable.innerHTML = '';

  // This empties the form fields after the data has been grabbed
  // event.target.inputName.value = null;

  event.target.storelocation.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgCookieSale.value = null;

  // Repaint the page - render all

  // renderAll();
  makeHeaderRow();

  pike.allCall();
  seaTac.allCall();
  seattleCenter.allCall();
  capitolHill.allCall();
  alki.allCall();
  newStore.allCall();

  footerHourlyTotalsCalc ();
  makeFooterRow();
}

// EVENT LISTENER for a new store
newStoreForm.addEventListener('submit', handleFormSubmit);


