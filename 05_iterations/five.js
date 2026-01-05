const myArr = ["hindi" , "english", "maths", "social"]
myArr.forEach(function (item){
    console.log(item);
    
})

// const newArr = ["history", "mathematics","science"]
// function print(item , index , arr){
//     // console.log(item, index , arr);
// }
// myArr.forEach(print)


const coding = [
    {
        languageName : "javascript",
        languageshort : "js"
    },
    {
        languageName : "java",
        languageshort : "java"
    },
    {
        languageName : "python",
        languageshort : "py"
    }
]
coding.forEach( (item)=> {
console.log(item.languageshort);

} )