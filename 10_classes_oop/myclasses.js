// class User {
//     constructor (username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     myUser(){
//             return `${this.username.toUpperCase()}`
        
//     }
// }

// const chai =  new User('chai', 'chai@fb.com', 123)
// console.log(chai.encryptPassword());
// console.log(chai.myUser());


function User(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password
    }

User.prototype.encryptPassword = function(){
        return `${this.password}abc`

}
User.prototype.myUser = function(){
        return `${this.username.toUpperCase()}`

}


const helo =  new User('tea', 'chai@fb.com', 123)
console.log(helo.encryptPassword());
console.log(helo.myUser());
