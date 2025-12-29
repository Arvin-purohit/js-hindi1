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
console.log( typeof myUser[mySym] );

myUser["location"] = "bangalore"
// console.log(myUser["location"]);
Object.freeze(myUser)
myUser["location"] = "delhi"
console.log(myUser);


