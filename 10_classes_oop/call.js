function setUser (username){
this.username = username
}

function createUser(username,email , password){
setUser.call(this, username)
    this.email = email,
    this.password = password


}
const chai = new createUser('Arvin','chai@google.com' , 123)
console.log(chai);
