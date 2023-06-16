'use strict';

// coding Challenge 1
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(); // shallow copy of dogsJulia
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);
  const dogsJuliaKate = dogsJuliaCopy.concat(dogsKate);

  console.log(dogsJuliaKate);
  dogsJuliaKate.forEach((value, index) => {
    const output =
      value >= 3
        ? `Dog number ${index + 1} is an adult, and is ${value} years old`
        : `Dog number ${index + 1} is still a puppy🐶`;

    console.log(output);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Immediately Invoked Function Expressions -IIFE
// (() => {
//   let name = prompt(`Enter your name`);
//   name =
//     name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
//   console.log(name);
// })();

// coding Challenge 2
console.log(`---Coding challenge 2--`);
console.log(`---Display Dog Human Ages--`);
const calcAverageHumanAge = dogAgeArray =>
  dogAgeArray
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce(
      (accumulator, ages, ind, arr) => accumulator + ages / arr.length,
      0
    );

console.log(`-Data 1-`);
const dogHumanAgesArray2 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(dogHumanAgesArray2.toFixed(2));
console.log([5, 2, 4, 1, 15, 8, 3]);
console.log(`-Data 2-`);
const dogHumanAgesArray3 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(dogHumanAgesArray3.toFixed(2));
console.log([16, 6, 10, 5, 6, 1, 4]);
