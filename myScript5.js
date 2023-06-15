'use strict';

// Demonstrating map method
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const convertEuro2USD = 1.1;
const movementsArr = account1.movements;
const movementsEuro = movementsArr.map(
  val => (val * convertEuro2USD).toFixed(2)
  //   return Number(val * convertEuro2USD).toFixed(2);
);

console.log(`Original array: `, movementsArr);
console.log(`Transformed array: `, movementsEuro);

// using the for of method to accomplish the task above
const movementsPushArr = [];
for (const vals of movementsArr)
  movementsPushArr.push((vals * convertEuro2USD).toFixed(2));
console.log(`Using the for...of loop`);
console.log(movementsPushArr);

// More map examples
console.log(`More map examples`);
const movementDesc = movementsArr.map(
  (value, index, arr) =>
    `Movement ${index + 1}: you ${
      value > 0 ? `deposited` : `withdrew`
    }  ${Math.abs(value)}`
);
console.log(movementDesc);
