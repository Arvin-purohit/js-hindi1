const userMail = []

if (userMail.length===0) {
    console.log("mail entered");
    
}else {
    console.log("mail not entered");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


if (userMail.length===0) {
console.log("array is empty ");

}

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const ps4 = 100
ps4 <=60 ?  console.log("less than 60"): console.log("more than 60");

