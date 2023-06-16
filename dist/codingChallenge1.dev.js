'use strict'; // coding Challenge 1

var checkDogs = function checkDogs(dogsJulia, dogsKate) {
  var dogsJuliaCopy = dogsJulia.slice(); // shallow copy of dogsJulia

  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);
  var dogsJuliaKate = dogsJuliaCopy.concat(dogsKate);
  console.log(dogsJuliaKate);
  dogsJuliaKate.forEach(function (value, index) {
    var output = value >= 3 ? "Dog number ".concat(index + 1, " is an adult, and is ").concat(value, " years old") : "Dog number ".concat(index + 1, " is still a puppy\uD83D\uDC36");
    console.log(output);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); // Immediately Invoked Function Expressions -IIFE
// (() => {
//   let name = prompt(`Enter your name`);
//   name =
//     name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
//   console.log(name);
// })();
// coding Challenge 2

console.log("---Coding challenge 2--");
console.log("---Display Dog Human Ages--");

var calcAverageHumanAge = function calcAverageHumanAge(dogAgeArray) {
  return dogAgeArray.map(function (age) {
    return age <= 2 ? age * 2 : 16 + age * 4;
  }).filter(function (humanAge) {
    return humanAge >= 18;
  }).reduce(function (accumulator, ages, ind, arr) {
    return accumulator + ages / arr.length;
  }, 0);
};

console.log("-Data 1-");
var dogHumanAgesArray2 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(dogHumanAgesArray2.toFixed(2));
console.log([5, 2, 4, 1, 15, 8, 3]);
console.log("-Data 2-");
var dogHumanAgesArray3 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(dogHumanAgesArray3.toFixed(2));
console.log([16, 6, 10, 5, 6, 1, 4]);