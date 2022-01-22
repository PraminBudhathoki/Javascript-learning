//////////////////////////////
//Strict mode
// 'use strict';

// let hasDriversLisence = false;
// const passtest = true;

// if(passtest) hasDriverLisence = true;
// if(hasDriversLisence) console.log("I can drive :D");

// const interface = "audio";
// const private = 534;

////////////////////////////
//functions

// function logger(){
    // console.log('My name is Pramin');
// }

// calling or running or invoking functions
// logger();
// logger();
// logger();

// function fruitprocessor(apples , oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitprocessor(5,0);
// console.log(appleJuice); 
// console.log(fruitprocessor(5,0));

// const appleOrangeJuice = fruitprocessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');


////////////////////////
// function declaration vs expression
// // function declaration
// function calcAge1(birthyear){
//     return 2037 - birthyear;
// }

// const age1 = calcAge1(2002);

// // function expression
// const calcAge2 =function (birthyear){
//     return 2037 - birthyear;
// }
// const age2 =calcAge2(1991);

// console.log(age1, age2);


// //Arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear, firstname)  => {
//     const age = 2037 -birthYear;
//     const retirement = 60 - age;
//     // return retirement;    
//     return `${firstname} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2002,'Pramin'));
// console.log(yearsUntilRetirement(2005,'Pramisha'));

// function  cutFruitPieces(fruit){
//     return fruit *4;
// }

// function fruitProcessor(apples ,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);


//     const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));
///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  
  const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));