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
map.set("IN", "India")
map.set("SAB", "Saudi Arab of Emirates")
map.set ("FR", "France")
// console.log(map);


for (const [ key , value] of map) {
    console.log(key , ":>" , value );
    
}