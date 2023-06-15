'use strict'; // Demonstrating map method

var account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  // %
  pin: 1111
};
var convertEuro2USD = 1.1;
var movementsArr = account1.movements;
var movementsEuro = movementsArr.map(function (val) {
  return (val * convertEuro2USD).toFixed(2);
} //   return Number(val * convertEuro2USD).toFixed(2);
);
console.log("Original array: ", movementsArr);
console.log("Transformed array: ", movementsEuro); // using the for of method to accomplish the task above

var movementsPushArr = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = movementsArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var vals = _step.value;
    movementsPushArr.push((vals * convertEuro2USD).toFixed(2));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log("Using the for...of loop");
console.log(movementsPushArr); // More map examples

console.log("More map examples");
var movementDesc = movementsArr.map(function (value, index, arr) {
  return "Movement ".concat(index + 1, ": you ").concat(value > 0 ? "deposited" : "withdrew", "  ").concat(Math.abs(value));
});
console.log(movementDesc);