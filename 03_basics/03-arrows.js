// const userDetails = {
//     name: "arvin",
//     price: 555,
//     welcomeMessage : function(){
//         console.log( `${this .name} welcome to the website`);
//         console.log(this);  // this is used to refer the current context
        
        
//     }

// }
// userDetails.welcomeMessage()

// userDetails.name = "maddy"
// userDetails.welcomeMessage()

// function one (){
//     let username = "arvin"
//     console.log(this.username);
                                                       //POINT TO REMEMBER THIS METHOD ONLY WORKS ON OBJECT 
// }
// one()


// const chai = function () {
//     let username = "arvin"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "arvin"
    // console.log(this);
}



//this is the basic method
// const one = function(num1,num2){
// return num1 + num2
// }
// console.log(one(5,6))


// const one = (num1,num2) =>  (num1 + num2)

// console.log(one(5,6))
const addTwo = (num1, num2) => ({username: "arvin"})


console.log(addTwo(3, 4))

