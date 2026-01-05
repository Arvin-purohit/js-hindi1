const numbers = [1,2,3]
const total =  numbers.reduce(function (acc , currval) {
 console.log(`arr : ${acc} and currval : ${currval}`);
 
    return acc + currval
} , 0)
console.log(total);

const shoppingCard = [
    {
        itemname : "javascript",
        price: 1000
    },
    {
        itemname : "py",
        price: 2000
    },
    {
        itemname : "c++",
        price: 3000
    },
    {
        itemname : "css",
        price: 4000
    },
]

const priceToPay =  shoppingCard.reduce((acc , item) => acc+item.price , 0 )
console.log(priceToPay);
 