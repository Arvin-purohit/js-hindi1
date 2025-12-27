const name = 'nsfxarvin '
let number = 72

console.log(name + number +  " hello" ) 
//this is old and slow 

console.log(`hello my name is ${name } and my game level is ${number } expecting a friend request`);

//this is the modern work 

const discordId = new String("arvinpurohit1")




//++++++++++++++++++++++++//string methods
console.log(discordId + [4])

console.log(discordId.toUpperCase());

console.log(discordId.indexOf("a"));

console.log(discordId.charAt(2));

let newName = discordId.substring(0,10)

let naming = discordId.slice(-10,4)
console.log(newName);
console.log(naming);

console.log(discordId.concat() , name); //concat is used to join two strings

console.log(discordId.charCodeAt(1))

let url = "https.arvin//arvin%20purohit.com"
console.log(url.replace("%20","-"));
console.log(url.includes("arvin"))

const fame = "      arvin    "
const fame1 = "arvin"
console.log(fame.trim());
console.log(fame1.trim());

const sample = "is this the place we used to love"

const str1 = sample.split(" ")
console.log(str1[5]);
// console.log(typeof sample)

const str2 = sample.split("")
console.log(str2[6]);

let str3 = sample.split()
console.log(str3)



//***************************more strings are there**************************


