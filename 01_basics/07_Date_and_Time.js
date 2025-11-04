// Dates 

const myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);  // object

let date01 = new Date(2025, 0, 3);
let date02 = new Date(2025, 0, 3, 11, 30);
let date03 = new Date("2025-11-03");
let date04 = new Date("11-03-2025");
console.log(date04.toLocaleString());
console.log(date04.getTime()); // time in milisecond 

let myTimeStamp = Date.now();

console.log(myTimeStamp);  // time in milisecond 
console.log(Math.floor(Date.now()/1000)); // date/time in second

let newDate = new Date();
console.log(newDate.getMonth());  // return month | ex- 0 -> jan, 1 -> feb, 2 -> mar etc 
console.log(newDate.getDay());  // return day of the week | ex- 1 -> mon, 2 -> tue etc
console.log(newDate.getDate());  // return date of month | ex- 1, 2, 3, 4, 5, 6, 7 ..... etc

console.log(newDate.toLocaleString('default', {
    weekday : "long"
}));

/**
 * In dates some method return month start with 0 ex, 0 - jan, 1 - feb.
 * In dates some method return month start with 1
 */