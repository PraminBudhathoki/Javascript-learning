// let js = 'amazing';
// if(js==='amazing')alert("Javascript is fun!");
// console.log(48+8+23-10);

// console.log('Pramin');
// console.log(23);

// let firstName ="Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//Variable name conventions
// let jonas_matilda = "3M";
// let $function =27;

// let  person ="Pramin"
// let PI = 3.1415;

// let myFirstJob ="Programmer";
// let myCurrentJob ="Teacher";

// console.log(myFirstJob);



// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Pramin');

// javascriptIsFun ='Yes!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);


// let age = 30;
// age = 31;

// const birthyear =1991;
// birthyear =1990; --error

// const job; --error--you can't just declare the variable using const you must also define it.

// var job = 'Programmer';
// job = "teacher"; 

// lastName = 'Budhathoki';
// console.log(lastName);

////////////////////////////
//Basic Operator
//Math operator
// const now =2037;
// const agePramin = now -2002;
// const agePush = now-2003;
// console.log(agePramin , agePush);


// console.log(agePramin*2 , agePramin/10, 2**3);
//2**3 means 2 to the power 3 which is 2*2*2=8

// const firstName ="Pramin";
// const lastName ="Budhathoki";
// console.log(firstName+' '+lastName);


//Assigmment operator

// let x =10 + 5;  //15
// x+=10;// x =x+10 => 25
// x*=4; // x=x*4 => 100
// x++;  // x=x+1;
// x--;
// x--;
// ++x;
// --x;
// console.log(x);

//comparision operator
// console.log(agePramin > agePush);//>,<,>=,<=
// console.log(agePush >= 18);

// const isFullAge =  agePush >= 18;

// console.log(now -2002 > now-2003);
 

////////////////////////////////////////

// const firstName = 'Pramin';
// const job = 'teacher';
// const birthyear = 2002;
// const year = 2022;

// const pramin = " I'm " +firstName + " ,a " + (year - birthyear) + " years old" + job + "!";
// console.log(pramin);

// const praminNew = `I'm ${firstName},a ${year - birthyear} year old ${job} !`;
// console.log(praminNew);


// console.log(`Just a regular string...`);


// console.log('String with \n\ multiple \n\ lines');

// console.log(`String with
// multiple
// lines`);


// const age = 10;
// const isOldEnough = age >= 18;


// if(age >= 18){
    // console.log('Sarah can start driving liscence.  ');
// }else{
    // const leftYears = 18 - age;
    // console.log(`Sarah can't start driving liscence. Come back after ${leftYears} years  `);

// }

// let century;
// const birthyear = 1991;
// if(birthyear <= 2000){
    //  century = 20;
// } else {
    //  century = 21;
// }
// console.log(century);

/////////////////////////////
//Type conversion 
// const inputYear = '1991';
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18);

// console.log(Number('Pramin'));
// console.log(typeof NaN);

// console.log(String(23), 23);


//Type coersion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23'*2);
// console.log('23'/2);
// console.log('23'>'18');


// let n = '1' + 1;
// n = n - 1;
// console.log(n);

/////////////////////////
// 5 falsy values: 0, '', undefined, null, NaN
// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////////
//Equality operator
// const age = 18;
// if(age  === 18) console.log("You just become adult(strict)");

// //=== is called strict equality operator which does not perform type coersion.
// //== is called loose equality operator which performs type coersion
// if(age  == 18) console.log("You just become adult(loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//     console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else if (favourite === 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }
  
// if (favourite !== 23) console.log('Why not 23?');
  

///////////////////////////////////////////////////////
//logical operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const   day  = prompt("Enter the day");

// switch(day){
//     case 'monday': //day === 'monday'
//         console.log('Plan for projects');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory lectures');
//         break;
//     case 'wednesday':
//     case 'thrusday':
//         console.log('Write code examples');
//     case 'friday':
//         console.log('Record videos');
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break; 
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan for projects');
//     console.log('Go to coding meetup');
//   } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
//   } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
//   } else if (day === 'friday') {
//     console.log('Record videos');
//   } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
//   } else {
//     console.log('Not a valid day!');
//   }

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Pramin';
console.log(`I'm ${2037 - 2002} years old ${me}`);

//////////////////////////////////////
//The ternary operator
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);