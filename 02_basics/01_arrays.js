// Array

const myArr = [1, 4, 5, 6, 7, 8, 9];
const heroes = ['Iron man', 'Hulk', 'Steave'];

const arr2 = new Array(2, 4, 5, 6, 7, 8);
console.log(myArr[2]);

// Array Methods

myArr.push(2);  // insert element at the end of the array
myArr.push(3);
myArr.pop();  // remove element at the end of the array

myArr.unshift(10); // insert element at the start of the array
myArr.shift();  // remove element at the start of the array

console.log(myArr.includes(5));  // check the presence of element | return boolean value
console.log(myArr.indexOf(5));  // check the index of element | return index

const newArr = myArr.join(); // change all the element into string seprated by commas
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);  // return string

// slice and splice

console.log("A ->", myArr);

const arr03 = myArr.slice(1, 3);

console.log(arr03); // return [4, 5] | return sub-array , last value NOT included
console.log("B ->", myArr);

const arr04 = myArr.splice(1, 3);
console.log("c ->", myArr);
console.log(arr04);
