//question why var is not used 
//ans because it will change the answers in all var 


// this is global scope
const a = 10
let b = 20        

//this is block scope
if (true) {
    let a = 50
    let b = 40
    console.log(a);
    console.log(b);
    
}
console.log(a);
console.log(b);

//global scope can be used in block scope
//but block scope cant be used in global scope


function one (){
    const username = "arvin"
    
    function two (){
        const fullname = "purohit"
        console.log(username);
        console.log(fullname);
    }
    

}
one()


// to help this concept undertand better think that a child can ask for a chocolate from the parent but a parent cannot ask to the  child      


if (true) {
    const username = "arvin"
    if (username==="arvin") {
        const fullname = "purohit"
        console.log(username + fullname);
        
        console.log(fullname);
    }
    
    console.log(username);
}


//+++++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++++++

console.log(one(5))
function one(num){
    return num + 5
}

// console.log(add4(4))  if variables are used then the declaration can only be given after initialization  and vice versa if variables are not declared
const add4 = function two(num){
    return num + 4
}
console.log(  add4(4));
