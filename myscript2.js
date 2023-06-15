'use strict';

console.log(`------Using the for...of  method------`);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`------Using the FOREACH method------`);
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

console.log(
  `------Using the FOREACH method(enhanced with function(currentItem, currentIndex, entireArray))------`
);
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

console.log(`------Using the regular expression format------`);
movements.forEach(element => {
  if (element > 0) {
    console.log(`You deposited ${element}`);
  } else {
    console.log(`You withdrew ${Math.abs(element)}`);
  }
});

console.log(
  `------Using the entries array method to obtain key-value pairs------`
);
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
