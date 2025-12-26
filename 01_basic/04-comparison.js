//EQUALITY CHECKS               COMPARISON CHECK
// >   <   =                    // <=    >=


//*********************NO PROBLEM IN COMPARING SAME DATA TYPE*************************************+//

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//NO PROBLEM IN COMPARING DIFFERNT DATA TYPES IF EQUALITY CHECKS USED// THOUGH ONLY SAME DATA TYPES  HAS TO BE WRITTEN
// console.log("2" > 1);
// console.log("02" > 1);

//FACE A WRONG ANSWER WHEN COMPARISON CHECKS USED FOR EX.(>=)
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//THESE TYPES OF CONVERSION ARE AVOIDED 

// IF ===  USED THEN ONLY SAME DATA TYPES WILL WORK  

console.log("2" === 2);