const appUser = new Object() // you can write like these or either 
const dataUser = {

} // like these
// console.log(appUser);

dataUser.name = "arvin"
dataUser.fullName = "arvin purohit"
dataUser.isLoggedIn = "true"

// console.log(dataUser);

const nayaUser = {
    name: "coder",
    fullName:{
        firstName : "Madan",
        lastName : "purohit"
    }
}

// console.log(nayaUser.fullName.firstName); use . to refer the inside of the object 

const obj1 = {1:"A", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3); //WAY ONE

const obj4 = {...obj1 ,...obj2 ,...obj3}
// console.log(obj4);  // WAY TWO


// console.log(Object.keys(dataUser));
// console.log(Object.values(dataUser))

// console.log(Object.hasOwnProperty(dataUser.isLogged));



const player  = {
name: "arvin",
education : 12,
study:"programming"

}


// console.log(player.study);

// const {education} = player// this is usefull where you have to use the same element various times
// console.log(education);

