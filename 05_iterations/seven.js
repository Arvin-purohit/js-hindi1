const myNumbs = [1,2,3,4,5,6,7,8,9]
// const hey = myNumbs.map((num)  => num + 10)
// console.log(hey);

let hi = myNumbs
.map((num) => num * 10  )
.map((num) =>num +1 )
.filter((num) => num >= 31)
console.log(hi);
