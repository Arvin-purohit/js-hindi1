//how to write function = 
// function sayMyName (){
// console.log("a");
// console.log("r");
// console.log("v");
// console.log("i");
// console.log("n");

// }
// sayMyName()


function addition (number1 , number2){
    // let result = number1 +number2
    // return result
    // console.log(arvin);
    
    return  number1 + number2 // an simple equation
}
 const answer = addition(3,4)
 console.log("RESULT :" , answer);
 
 //brief explanation of the above concept
 //the words in the ()  near function is called parameters
 //and the ()near the reference is called arguement

 //if you add the reference in an variable and ask console to print the result would be undefined
 //if you want to print with variable you to have to pass return method to print in the function ie., as you can see in the above code 
 //nothing will be of use after return method is passed
 // simple equation has been mentioned above

 function userLoggedIn (username = "name"){
    if(!username){
        console.log("Please Enter A Username");
        return
    }
    return `${username} has logged in `  


 }
 console.log(userLoggedIn("arvin"));


 function cart (...num1){
    return num1
}
// console.log(cart(500,200,600,2000));

const userDetails =  {
name: "arvin",
hobby: "coding"
}

function handleObject (anydetails){
    console.log(`hey friends my name is ${anydetails.name} and my hobbby is ${anydetails.hobby}`);

}
// handleObject(userDetails)
handleObject({
    name:"arvin",
    hobby:"coding"
})


// const secondArray = [200,100,300,4000]
function helpline (getArray){
    return getArray[3]
}
console.log(helpline([200,399,199,500]));

 
 