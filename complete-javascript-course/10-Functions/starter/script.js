'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 way
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const pramin = {
  fullName: 'Pramin Budhathoki',
  passport: 1232143123,
};

const checkin = function (flightNum, passsenger) {
  flightNum = 'LH2323';
  passsenger.fullName = 'Mr. ' + passsenger.fullName;

  if (passsenger.passport === 1232143123) {
    alert('checkin');
  } else {
    alert('Wrong Passport');
  }
};

checkin(flight, pramin);
console.log(flight);
console.log(pramin);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(pramin);
checkin(flight, pramin);
