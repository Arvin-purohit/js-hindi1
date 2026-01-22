// console.log( Object.getOwnPropertyDescriptor(Math , 'PI'));

const chai  = {
name: 'masalaChai',
price : 20,
isAvailable : true,
isReady : () => {
    console.log(`chai nahi bani`);
    
}
}

console.log( Object.getOwnPropertyDescriptor(chai , 'name'));

Object.defineProperty(chai , 'name' , {
    // writable : false,
    enumerable : false
})

console.log( Object.getOwnPropertyDescriptor(chai , 'name'));

for (let [key , value] of Object.entries(chai)) {
    if (typeof value !== 'function' ) {
        console.log(`${key} : ${value}`);
        
    }
    
}