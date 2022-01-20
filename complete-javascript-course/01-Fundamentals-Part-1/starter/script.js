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
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


