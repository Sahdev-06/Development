// DataTypes  -->  Primitive & Non-Primitive/reference

/* 
  Primitive (7 types) :
    --> String, Number, Boolean, null, undefined, symbol, BigInt
    --> Primitive are call by value does not provide original reference of memory
*/
const score = 100;  // number
const scoreValue = 100.25;   // number
const isLoggedIn = false;   // boolean
const outsideTemp = null;   // null
let userEmail;   // undefined
const id = Symbol("1234");  // symbol
const bigNumber = 4648446854449465444844498464n   // bigInt

/* 
  Non-Primitive (Reference) :
    --> (types) - Array, objects, functions
    --> Allocate direcet reference in momory
    --> return type (typeof) of  non-primitive datatype is an object
*/
const heros = ["IronMan", "Hulk", "Steave",];  // Array
let myObj = {      // object
    name : "hello",
    age : 25
};   
const myFunction = function() {   // function
    console.log("hello world");
}





// --------------------------------------------------------------------------------------------------//

/* 
  Memory -> Stack , Heap
  -->  Stack (primitive)
  -->  Heap  (non-primitive)
*/

let name = "Mohan";

let anotherName = name;
anotherName = "kumar";

console.log(name);    // Mohan
console.log(anotherName);   // kumar

let userOne = {
    name : "Ironman",
    age : 46
};

let userTwo = userOne;

userTwo.name = "Tony Stark";

console.log(userOne.name);  // Tony Stark
console.log(userTwo.name);  // Tony Stark