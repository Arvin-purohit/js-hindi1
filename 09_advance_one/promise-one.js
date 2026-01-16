// const promiseOne = new Promise(function(resolve, reject){
// setTimeout(() => {
//     console.log('Promise created')
// ,resolve()} , 2000);
// })

// promiseOne.then(function(){
//     console.log('problem consumed')
// })

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('hello world')
//     },resolve(['userName : Arvin , gmail : Arvin@haha.com' ]), 1000)
// }).then(function(user){
// console.log(user);

// })
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     let error = false
//     if (!error) {
//          resolve({username: "arvin", password: "321"})
//     }else{
//         reject('ERROR : SOMETHING WENT WRONG')
//     }
//     },1000)
// })
// promiseFour
// .then(function(user){
// console.log(user);
// return user.username

// })
// .then((username)=>{
// console.log(username)
// })
// .catch(function(error){
// console.log(error)
// }).finally(function(){
//     console.log('finally')
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username : "js" , password : 321})
//         }else{
//             reject('ERROR : JS WENT WRONG')
//         }
//     })
// })
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

async function getAllUsers() {
    try {
        fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log('error occured')
    }
}
getAllUsers()