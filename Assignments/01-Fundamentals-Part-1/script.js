// Values and Variables

// 1
const countryName ="Nepal";
const continentName ="Asia";
let population = 29140000;//13000000;//130000000//

// 2
console.log(countryName);
console.log(continentName);
console.log(population);


// Datatypes
// 1
let isIsland = false;
let language;

// 2
console.log(isIsland);
console.log(population);
console.log(countryName);
console.log(language);

//let,var and const
//1
language = "Nepali";

//2
//Done

//3
//countryName="India";

//Basic operator
// 1
let halfPopulation = population /2;
console.log(halfPopulation);

//2
halfPopulation++;
console.log(halfPopulation);

// 3
const finlandPopulation = 6000000;
let isPopGreater=halfPopulation > finlandPopulation;
console.log(isPopGreater);

//4
let averagePopulation =33000000;
isPopGreater =halfPopulation >averagePopulation;
console.log(isPopGreater);


// 5
let description = countryName + " is in "+ continentName + " and its " + population +" people speak " + language;
console.log(description); 

//String and template literal
//1
description = `${countryName}  is in ${continentName}  and its ${population} people speak ${language}`;
console.log(description); 

//Taking Decisions:if / else statements
//1
if(population > 33000000){
    console.log(`${countryName}'s population is above average`);
}else{
    console.log(`${countryName}'s population is ${33000000-population} million below average`)
}

//Type coersion and conversion
//2
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


//Equality Operators: == vs. ===
//1
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

//2 3 4 5 6 7 8
// if(numNeighbours === 1){
    // console.log("Only 1 border!");
// }else if(numNeighbours > 1){
    // console.log('More than 1 border');
// }else{
    // console.log('No border');
// }

//logical operator
//1 2 3 4 5
if (language === 'english' && population < 50000000 && !isIsland)
{
console.log(`You should live in ${countryName} :)`);
} else {
console.log(`${countryName} does not meet your criteria :(`);
}

