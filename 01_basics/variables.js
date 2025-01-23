const accountId = 11111
let accountName = "Suman"
var passWord = "12345"
accountCity = "Jamshedpur"
let accountState;

// accountId = 2121 ---> Changing the const value is not allowed.

/* 

Var is not used widely on modern day JS, as it has
issues in block scope and functional scope so prefer let.

*/

accountName = "Dubey"
passWord = "10987"
accountCity = "Hyderabad"



console.log(accountId)

console.table([accountId, accountName, passWord, accountCity, accountState])