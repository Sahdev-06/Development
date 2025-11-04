let score = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);   

/// -------- After conversion into Number ---------  ///

// "33" => type - number  |   value - 33
// "33abc" => type - number  |   value - NaN
// null => type - number  |   value - Nan
// undefined => type - number  |   value - Nan
// true/flase => type - number  |   value - 1/0



let isLoggedIn = 1;

let booleanIsLoggenIn = Boolean(isLoggedIn);
console.log(booleanIsLoggenIn);


//  --------  After conversion into Boolean   ------------   // 

//  1 => true  |  0 => false 
// "abcde" => true
// ""  => false


let randomNumber = 39;

let stringToNumber = String(randomNumber);
console.log(stringToNumber);
console.log(typeof stringToNumber); 


// ******************* Operations  *********************  //

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " Sahdev";
let str3 = str1 + str2;
console.log(str3);   // Hello Sahdev

console.log("1" + 2);   // 12
console.log(1 + "2");   // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32


console.log(+true);  // 1  , not recomanded 
// console.log(true+)    // give error
console.log(+"");  // 0


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;  //  not recomanded

//  prefix and postfix

let gameCounter = 100;
gameCounter++;  // 101
++gamecounter;  // 101

console.log(gameCounter);