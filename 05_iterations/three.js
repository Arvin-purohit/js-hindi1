//for of

let num = [1,2,3,4,5]
for (const value of num) {
    // console.log(value);
    
}

let greetings = "hello world"

for (const greet of greetings) {
    if (greet == " ") {
        // continue
    }
    // console.log(`each char ${greet}`);
    
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")


console.log(map);



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);
