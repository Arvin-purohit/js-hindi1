
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

     static classId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const Arvin = new User('Arvin')
// console.log(Arvin.classId())
console.log(Arvin);


const tea = new Teacher('tea', 'arvin@tea.com')
console.log(tea);

