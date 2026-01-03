// for loop 

for (let score = 0; score <= 10 ; score++) {
    
    const element = score;
    if (element == 5) {
        // console.log("5 is the best number");
        
        
    }
    // console.log(element);
    
}

for (let a = 0; a <= 9; a++) {
//    console.log(`outer loop ${a}`);
   
    for (let b = 0; b <= 10; b++) {
        const element = b;
        // console.log(`inner loop value ${b} and inner loop count ${a}`);
        // console.log(a + '*' + b +  '=' + a*b );
        
        
    }
}

const myArray = ["ichigo" , "urahara" , "shinzou"]
// console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

for (let score = 1; score <= 20; score++) {
    
    if (score == 5) {
        console.log("detected 5");
        continue
        
    }

    const element = score;

    console.log(`points scored ${element}`);
    
    
}
for (let score = 1; score <= 20; score++) {
    
    if (score == 5) {
        console.log("detected 5");
        break
        
    }

    const element = score;

    console.log(`points scored ${element}`);
    
    
}
