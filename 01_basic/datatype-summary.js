// PRIMITIVE TYPE INCLUDES

// 7  DATA TYPES == (STRING , NUMBER , BOOLEAN ,NULL , UNDEFINED , SYMBOL ,BIGINT )

// STRING = ""
// NUMBER = 123
// BOOLEAN = TRUE OR false
// NULL = EMPTY
// UNDEFINED = UNDEFINED

const score = 103
const scorevalue = 135.4
const outsideTemp = null
let userLoggedIN = false
let userEmail;  //or undefined

// all id have different values
const id = Symbol(123)
const anotherId = Symbol(123)
// console.log(id===anotherId);

// BigInt = apply n after the bigvalue to  get the right info

const value = 1243255616166166611616
// console.log(value);




// REFERENCE OR (NON - PRIMITIVE)
 
// INCLUDES = ARRAYS ,OBJECTS , FUNCTIONS

const characters = ["ichigo"  ,"urahara" ,"aizen"]  //this is an example off array


let myObj = {
    name : "arvin" ,
    age : 18
}
let myFunction = function(){
console.log("mein hu khalnayak");
}

console.log(typeof userEmail);





//  If val is undefined, return "undefined".
//  If val is null, return "object".
//  If val is a String, return "string".
//  If val is a Symbol, return "symbol".
//  If val is a Boolean, return "boolean".
//  If val is a Number, return "number".
// - If val is a BigInt, return "bigint".