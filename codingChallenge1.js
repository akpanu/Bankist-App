'use strict';

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
(() => {
  let name = prompt(`Enter your name`);
  name =
    name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
  console.log(name);
})();
