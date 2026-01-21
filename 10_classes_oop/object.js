// function getMultiple (num){
//     return num*5
// }

// getMultiple.power = 2
// console.log(getMultiple(4));
// console.log(getMultiple.power);
// console.log(getMultiple.prototype);


function createUser(userName , score){
this.userName = userName,
this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser('chai' , 25)
const tea = new createUser('tea', 250)

chai.printMe()
tea.printMe()
