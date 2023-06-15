'use strict';
// Demonstrating the use of foreach on Maps and Sets
// foreach on Maps
console.log(`-----foreach method on Maps-----`);
const currencies = new Map([
  [`USD`, `United States Dollar`],
  [`EUR`, `Euro`],
  [`GBP`, `Pound Sterling`],
]);
currencies.forEach(function (val, key, map) {
  console.log(`${key}: ${val}`);
});

// foreach on Sets
console.log(`-----foreach method on Sets-----`);
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
console.log(`Unique currencies: `, currenciesUnique);
currenciesUnique.forEach(function (val, _, set) {
  console.log(`${val}: ${val}`);
});
// Note: the underscore means the parameter at that position is irrelevant
