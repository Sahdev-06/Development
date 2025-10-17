/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 != 1);
console.log(2 == 1);
*/

console.log("2" > 1); // true
console.log("02" > 1); // true

// avoid this type of conversion in line 13 to 20 becuase they are confusing.
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // false

/* comparision convert null to a number , treating it as 0.
That's why null >= 0 is true and null > 0 is false  */ 

console.log(undefined == 0);    // false
console.log(undefined < 0);    // false
console.log(undefined > 0);   // false

console.log(2 === 2);  // (===) strict equility check with dataTypes