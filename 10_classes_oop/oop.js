const user =  {
    userName: 'Arvin',
    isLoggedIn : true , 
    Age: 18,
    getUserDetails: function(){
        // console.log("got user details");
        // console.log(this.userName)

        // console.log(this)
    }


}

// console.log(user.Age);
// console.log(user.getUserDetails());
// console.log(this);




function User(userName , isLoggedIn , Age){
this.userName = userName,
this.isLoggedIn = isLoggedIn,
this.Age = Age
this.greeting = function(){
    console.log(User.userName);
    
}

return this
}
 
const userOne = new User('Arvin', true , 18 )
const two =  new User('naman', false , 20 )
console.log(two instanceof User)
console.log(two.constructor)