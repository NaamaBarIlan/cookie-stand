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
    console.log(this.dailyTotalSum);
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

// TABLE DATA FUNCTION

// function makeDataRows(){

//   // create the row
//   var trEl = document.createElement('tr');

//   // create, content, append first cell
//   var tdEL = document.createElement('td');
//   tdEL.textContent = pike.storeLocation;
//   trEl.appendChild(tdEL);

//   // Loop through storeHours array for cookies per hour per location
//   for (var i = 0; i < storeHours.length; i++){
//     tdEL = document.createElement('td');
//     tdEL.textContent = pike.hourlySales[i];
//     trEl.appendChild(tdEL);
//   }

//   // create, content, append total cell
//   tdEL = document.createElement('td');
//   tdEL.textContent = pike.dailyTotal;
//   trEl.appendChild(tdEL);

//   // append the row to the table
//   storesTable.appendChild(trEl);
// }

// 1. Create JS object literals for each shop that
// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// 2. Uses a method of that object to generate a random number of customers per hour.

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location
// using average cookies purchased and the random number of customers generated

// 4. Store the results for each location in a separate array...
// perhaps as a property of the object representing that location

// 5. Display the values of each array as unordered lists in the browser

// // LOCATION 1 - 1st and Pike

// var firstAndPike = {
//   storeLocation: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   hourlySales: [],
//   dailyTotal: 0,
//   hourlySalesCalc: function(){
//     for(var i =0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
//     }
//   },
//   render: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){

//       // create an element
//       var liEl = document.createElement('li');

//       // give the elemet content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

//       // append the element to the dom
//       firstAndPikeStore.appendChild(liEl);
//     }
//     liEl = document.createElement('li');

//     liEl.textContent = 'Daily Total: ' + this.dailyTotal;

//     firstAndPikeStore.appendChild(liEl);

//   },
//   dailyTotalSum: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       this.dailyTotal += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalSum();
//     this.render();
//   }
// };


// // LOCATION 2 - SeaTac Airport

// var seaTacAirport = {
//   storeLocation: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,
//   hourlySalesCalc: function(){
//     for(var i =0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
//     }
//   },
//   render: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){

//       // create an element
//       var liEl = document.createElement('li');

//       // give the elemet content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

//       // append the element to the dom
//       seatacAirportStore.appendChild(liEl);
//     }
//     liEl = document.createElement('li');

//     liEl.textContent = 'Daily Total: ' + this.dailyTotal;

//     seatacAirportStore.appendChild(liEl);

//   },
//   dailyTotalSum: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       this.dailyTotal += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalSum();
//     this.render();
//   }
// };


// // LOCATION 3 - Seattle Center

// var seattleCenter = {
//   storeLocation: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   hourlySales: [],
//   dailyTotal: 0,
//   hourlySalesCalc: function(){
//     for(var i =0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
//     }
//   },
//   render: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){

//       // create an element
//       var liEl = document.createElement('li');

//       // give the elemet content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

//       // append the element to the dom
//       seattleCenterStore.appendChild(liEl);
//     }
//     liEl = document.createElement('li');

//     liEl.textContent = 'Daily Total: ' + this.dailyTotal;

//     seattleCenterStore.appendChild(liEl);

//   },
//   dailyTotalSum: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       this.dailyTotal += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalSum();
//     this.render();
//   }
// };


// // LOCATION 4 - Capitol Hill

// var capitolHill = {
//   storeLocation: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   hourlySales: [],
//   dailyTotal: 0,
//   hourlySalesCalc: function(){
//     for(var i =0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
//     }
//   },
//   render: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){

//       // create an element
//       var liEl = document.createElement('li');

//       // give the elemet content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

//       // append the element to the dom
//       capitolHillStore.appendChild(liEl);
//     }
//     liEl = document.createElement('li');

//     liEl.textContent = 'Daily Total: ' + this.dailyTotal;

//     capitolHillStore.appendChild(liEl);
//   },
//   dailyTotalSum: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       this.dailyTotal += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalSum();
//     this.render();
//   }
// };


// // LOCATION 5 - Alki

// var alki = {
//   storeLocation: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   hourlySales: [],
//   dailyTotal: 0,
//   hourlySalesCalc: function(){
//     for(var i =0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
//     }
//   },
//   render: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){

//       // create an element
//       var liEl = document.createElement('li');

//       // give the elemet content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

//       // append the element to the dom
//       alkiStore.appendChild(liEl);
//     }
//     liEl = document.createElement('li');

//     liEl.textContent = 'Daily Total: ' + this.dailyTotal;

//     alkiStore.appendChild(liEl);
//   },
//   dailyTotalSum: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       this.dailyTotal += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalSum();
//     this.render();
//   }
// };

// // Calling all the functions

// firstAndPike.allCall();
// seaTacAirport.allCall();
// seattleCenter.allCall();
// capitolHill.allCall();
// alki.allCall();

  // this.render = function(){
  //   for (var i = 0; i < this.hourlySales.length; i++){

  //     // create an element
  //     var liEl = document.createElement('li');

  //     // give the elemet content
  //     liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

  //     // append the element to the dom
  //     storesTable.appendChild(liEl);
  //   }
  //   liEl = document.createElement('li');

  //   liEl.textContent = 'Daily Total: ' + this.dailyTotal;

  //   storesTable.appendChild(liEl);

  // };
