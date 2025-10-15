const accountId = 5563;
let accountEmail = "sahdev@gmail.com";
var accoundPassword = "123456";
accountCity = "meerut";
let accountState;           // undefined

//  accountId = 236    // Not allowed because of constant value

accountEmail = "SK@gmail.com";
accountPassword = "78965";
accountCity = "Delhi";

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

// Log/print the multiple values of the variables in the tabular/table form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);