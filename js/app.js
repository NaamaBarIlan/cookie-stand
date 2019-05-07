'use strict';

// source from MDN math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Global Variables

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPikeStore = document.getElementById('first-and-pike-store');
var seatacAirportStore = document.getElementById('seatac-airport-store');
var seattleCenterStore = document.getElementById('seattle-center-store');
var capitolHillStore = document.getElementById('capitol-hill-store');
var alkiStore = document.getElementById('alki-store');

// 1. Create JS object literals for each shop that
// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// 2. Uses a method of that object to generate a random number of customers per hour.

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location
// using average cookies purchased and the random number of customers generated

// 4. Store the results for each location in a separate array...
// perhaps as a property of the object representing that location

// 5. Display the values of each array as unordered lists in the browser

// LOCATION 1 - 1st and Pike

var firstAndPike = {
  storeLocation: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  hourlySales: [],
  hourlySalesCalc: function(){
    for(var i =0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
    }
  },
  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++){

      // create an element
      var liEl = document.createElement('li');

      // give the elemet content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

      // append the element to the dom
      firstAndPikeStore.appendChild(liEl);
    }
  }
};


// LOCATION 2 - SeaTac Airport

var seaTacAirport = {
  storeLocation: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  hourlySales: [],
  hourlySalesCalc: function(){
    for(var i =0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
    }
  },
  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++){

      // create an element
      var liEl = document.createElement('li');

      // give the elemet content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

      // append the element to the dom
      seatacAirportStore.appendChild(liEl);
    }
  }
};


// LOCATION 3 - Seattle Center

var seattleCenter = {
  storeLocation: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  hourlySales: [],
  hourlySalesCalc: function(){
    for(var i =0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
    }
  },
  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++){

      // create an element
      var liEl = document.createElement('li');

      // give the elemet content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

      // append the element to the dom
      seattleCenterStore.appendChild(liEl);
    }
  }
};


// LOCATION 4 - Capitol Hill

var capitolHill = {
  storeLocation: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  hourlySales: [],
  hourlySalesCalc: function(){
    for(var i =0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
    }
  },
  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++){

      // create an element
      var liEl = document.createElement('li');

      // give the elemet content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

      // append the element to the dom
      capitolHillStore.appendChild(liEl);
    }
  }
};


// LOCATION 5 - Alki

var alki = {
  storeLocation: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  hourlySales: [],
  hourlySalesCalc: function(){
    for(var i =0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale));
    }
  },
  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++){

      // create an element
      var liEl = document.createElement('li');

      // give the elemet content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies.';

      // append the element to the dom
      alkiStore.appendChild(liEl);
    }
  }
};

// Calling the hourlySalesCalc functions

firstAndPike.hourlySalesCalc();
seaTacAirport.hourlySalesCalc();
seattleCenter.hourlySalesCalc();
capitolHill.hourlySalesCalc();
alki.hourlySalesCalc();

// Calling the render functions

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

// Array of all store objects:

// var allStores = [firstAndPike.render(), seaTacAirport.render(), seattleCenter.render(), capitolHill.render(), alki.render()];

// Iterate over the array
// for loop: call method in each object that generates # of cookies each hour per store and
// Append array values to the DOM

// var allStoresSales = {
//     for (var i = 0; i < allStores.length; i++){
//     } 
// };


