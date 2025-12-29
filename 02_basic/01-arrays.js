// basics......
//arrays can be number string boolean or arrays itself


//how to denote arrays = 
 
const myArr = [0,1,2,3,4,5] 
// console.log(myArr[5] ) // the number written in the key will only get printed
const myArr2 = ["ichigo", "urahara" ,"kenpachi"]

//array methods

// myArr.push(6) 
// myArr.push(7)

// myArr2.push("Aizen")
// myArr.pop()
// console.log(myArr , myArr2);

// /


// let newArr = myArr.join() // join method is used to convert array into an string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// slice , splice
const myh1 = myArr.slice(0,3)
console.log("A", myArr);
console.log(myh1);

const myh2 = myArr.slice(0,2)
console.log("B", myArr);
console.log(myh2);

const myh3 = myArr.splice(2,4)
console.log("C", myArr);
console.log( myh3);

//NOTES FOR SLICE AND SPLICE
// when slice is used the original value of the  array does not change and the count starts from 0 and the last value does not include and the  range will be like ie., 1,2,3,4 and if you use slice(1,3) 2 and 3 will be printed 

// when splice is used the original array gets affected and the count starts from 1 for ex. array = [1,2,3,4,5] and splice(1,3) then the outcome will of the original array will be 4 and 5 and the splice data will be 1,2,3


