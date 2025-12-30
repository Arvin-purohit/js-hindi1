//object literals

const mySym = Symbol("key1")

const myUser = {
    name: "arvin",
    [mySym]:"myKey",
    age : 18,
 "full name": "Arvin Purohit" ,
    location : "chennai",
    email : "arvinpurohit@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","Friday"]

}

// console.log(myUser.email) 
// console.log(myUser["email"]);

// console.log(myUser["full name"])
// explanation 
//when we have to access the inside value of objects the best practice is to use [""] this instead of . because . can only access the objects which is not written in a sting format ie., name ..... but with [""] this you can also access the objects which are written in sting format "name"
// console.log( typeof myUser[mySym] );

myUser["location"] = "bangalore"
// console.log(myUser["location"]);
// Object.freeze(myUser)
myUser["location"] = "delhi"
// console.log(myUser);

//function

myUser.greeting = function(){
console.log([`hello myUser this is  ${myUser.name} and this is my email : ${this.email} if anybody wants to contact me you can directly dm me in my email`]);
}//if you want ot access the object you can either refer the object name or can use this. function to access


console.log(myUser.greeting());//remember every function has to end with ()


