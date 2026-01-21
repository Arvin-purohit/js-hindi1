const heroes = ['thor' , 'spiderman']
const myhero = {
    thor: 'hammer',
    spiderman : 'web',

    getSpidyPower: function(){
        console.log(`this is my power ${this.spiderman}`);
        
    }
}

Object.prototype.arvin = function(){
    // console.log(`this is my power`);
    
}

Array.prototype.heyArvin = function(){
    // console.log(`hello world`);
    
}
myhero.arvin()
// myhero.heyArvin()
heroes.heyArvin()

// Object.setPrototypeOf()

const anotherName = 'Arvin     '

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
    
}
anotherName.truelength()