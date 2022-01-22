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
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
  
//   const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
  
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return -1;
//     }
//   }
  
//   console.log(yearsUntilRetirement(1991, 'Jonas'));
//   console.log(yearsUntilRetirement(1950, 'Mike'));

  //////////////////
  //Array
//   const friend1 = "michael";
//   const friend2 = "Ram";
//   const friend3 = "Hari";

//   const friends = ["michael",'Ram','Hari'];
//   console.log( friends);

//   const y = new Array(1991,1992,1993,1994);

//   console.log(friends[0]);
//   console.log(friends[2]);

//   console.log(friends.length);
//   console.log(friends[friends.length - 1]);

//   friends[2] = 'Jay';
//   console.log( friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
    //     return 2037 - birthYeah;
    //   }
    //   const years = [1990, 1967, 2002, 2010, 2018];
    
    //   const age1 = calcAge(years[0]);
    //   const age2 = calcAge(years[1]);
    //   const age3 = calcAge(years[years.length - 1]);
    //   console.log(age1, age2, age3);
    
    //   const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
    //   console.log(ages);
    
  const friends = ["michael",'Ram','Hari'];