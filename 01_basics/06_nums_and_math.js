const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance);  // [number: 400]

console.log(balance.toString().length);  // convert into string and print length -> 3
console.log(balance.toFixed(2));  // no of digits after decimal which is 2 in this case

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));  // gives round of value in digts specified in method -> 23.9

const numbers = 1000000;
console.log(numbers.toLocaleString('en-IN')); // formats the number using Indian-style commas and digit grouping



// ----------------------------- Math --------------------------------------------  //

console.log(Math.abs(-4)); // give +ve remove -ve sign if present
console.log(Math.round(4.6));  // return round-of value
console.log(Math.ceil(5.3)); // 6
console.log(Math.floor(4.7)); // 4
console.log(Math.min(4, 7, 9, 3, 1, 5, 7));  // return min value  -> 1
console.log(Math.max(4, 7, 9, 3, 1, 5, 7));  // return max value  -> 9

console.log(Math.random()); // return value in range(0-1) 
console.log((Math.random() * 10) + 1 );
console.log(Math.floor((Math.random() * 10) + 1 ));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + 10 );  // return value in range(10-20)