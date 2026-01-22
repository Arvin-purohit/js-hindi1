class User {
    constructor(username){
        this.username = username
    }

   
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}   


    class Teacher extends User{
        constructor(username,email , password){
            super(username)
            this.email = email
            this.password = password
        }

        addCourse(){
            console.log(`a new course has been added ${this.username}`);
            
        }
    }

const hack =  new Teacher('Arvin' , 'arvin@gmail.com' ,123 )
hack.logMe()
hack.addCourse()

const  masalaChai = new User('naman')
masalaChai.logMe()


console.log(hack instanceof Teacher);


