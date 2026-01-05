//for off loop is usable in only maps
//for in loop is used where the for off doesnt work

const myObject = {
    hin : "hindi",
    eng : "english",
    mat : "maths"
}
for (const key in myObject) {
    // console.log(`${key} full form is ${myObject[key]}`);
    
}
///this was for for in loop for object


const myArr = ["hin" , "eng" , "mat"]
for (const key in myArr) {
    
    console.log(`${myArr[key]}`);
    
    
}