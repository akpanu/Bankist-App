'use strict';

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

(function () {
  var name = prompt("Enter your name");
  name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
  console.log(name);
})();