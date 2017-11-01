'use strict'
const airport = new Store ('Portland Airport' , 23 , 65 , 6.3);
const pioneer = new Store ('Pioneer Square' , 3 , 24 , 1.2);
const powells = new Store ('Powell\'s Bookstore' , 11 , 38 , 3.7);
const stjohns = new Store ('St Johns' , 20 , 38 , 2.3);
const waterfront = new Store ('Waterfront' , 2 , 16 , 4.6);


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store (name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;

    const salesByHour = [];
    for (let i=0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandom(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;
};

console.log(salesByHour);




//Random customer number generator.
function getRandom (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//This will render on the page
Store.prototype.build = function () {
    const store = document.getElementById('div');
    const title = document.createElement('H3');
    title.textContent = this.name;
    const ul = document.createElement('UL');
    store.appendChild(ul);
    ul.appendChild(title);

    for (let i= 0; i < hours.length; i++) {
        let li = document.createElement('LI');
        li.textContent = "Hour: " + this.salesByHour[i].hour + " Cookies: " + this.salesByHour[i].cookiesSold;
        ul.appendChild(li);
    }
}

// const mainList = document.getElementById('list');
// const table = document.createElement('TABLE');
// mainList.appendChild(table);

// //table head
// const thead = document.createElement('THEAD');
// table.appendChild(thead);
// thead.textContent = "Hours: ";


// // table head
// const thead = document.createElement('THEAD');
// table.appendChild(thead);
// thead.textContent = this.name;

// //table row
// const trow = document.createElement('TR');
// table.appendChild(trow);
// trow.textContent = this.hour;

// const hourData = document.createElement('TD');
// trow.appendChild(hourData);
// hourData.textContent = "Hour: ";

// const cookieData = document.createElement('TD');
// trow.appendChild(cookieData);
// cookieData.textContent = "Cookies: ";


// airport.hourlySales();
// pioneer.hourlySales();
// powells.hourlySales();
// stjohns.hourlySales();
// waterfront.hourlySales();