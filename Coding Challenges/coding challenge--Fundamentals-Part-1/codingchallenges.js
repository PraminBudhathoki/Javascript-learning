//coding challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// //////////////////////////////////////
// //Coding Challenge - 2
// if(markHigherBMI){
//     console.log(`Mark's BMI is higher than John's!`);
// }else{
//     console.log(`John's BMI is higher than Mark's!`);
// }
// if(markHigherBMI){
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
// }else{
//     console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
// }

//////////////////////////////////////
//Coding Challenge -3
// let dolphinScore1 = Number(prompt("Enter the 1st score of Dolphin:"));
// let dolphinScore2 = Number(prompt("Enter the 2nd score of Dolphin:"));
// let dolphinScore3 = Number(prompt("Enter the 3rd score of Dolphin:"));

// let koalasScore1 = Number(prompt("Enter the 1st score of Koalas:"));
// let koalasScore2 = Number(prompt("Enter the 2nd score of Koalas:"));
// let koalasScore3 = Number(prompt("Enter the 3rd score of Koalas:"));

// const averageDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3 )/3;
// const averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3 )/3;
// if(averageDolphin > 100 || averageKoalas > 100){
    
//     if(averageDolphin > averageKoalas){
//         console.log("Dolphin is the winner");
        
//     }else if(averageKoalas > averageDolphin){
//         console.log("Koalas is the winner");
//     }else{
//         console.log("Both are draw");
    
//     }
// }
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

//////////////////////////////////
//coding challenge-4
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
