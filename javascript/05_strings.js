/* 
 --> A string is a collection of characters and a primitive type that behaves like an object.
 --> but for non-primitive they are actual object.   
 --> Strings are immutable and whey any method is applied, a new string is returned.
 --> it does not change  the original value.
 */    

const name = "Sahdev";
const repoCount = 2;
// console.log(name + repoCount);     // Not recomanded in modern JS


console.log(`my name is ${name} and repo count is ${repoCount}`);   // string interpolation method

const city = new String("Meerut");  // another way to declare string

console.log(city[0]);   // M
console.log(city.__proto__);  //  {}

console.log(city.length);  // 6
console.log(city.toUpperCase());  // Meerut
console.log(city.charAt(3));  // which char present at index 3 -> r
console.log(city.indexOf('u'));  // at which index 'u' is present -> 4

const string2 = city.substring(0, 3);  // Mee , last index not included and can't use -ve.
console.log(string2);
const anotherstring = city.slice(2, 5);  // eru , last idx not included and can use -ve.
console.log(anotherstring);

const stringTwo = "    Mango     ";
console.log(stringTwo.trim());  // remove white space means remove start and end space of the string.

const url = "https://java%20script.com";
console.log(url.replace('%20', '-'));    // replace the specified sub-string to another string.

console.log(url.includes('java')); // check whether the substring is present in the string or not.

const fruits = "mango-apple-banana";  // ['mango' , 'apple', 'banana']
console.log(fruits.split('-'));  // split the string based on specified character and convert it in array.