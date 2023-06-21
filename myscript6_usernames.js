'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// an array of each of the acounts
const accounts = [account1, account2, account3, account4];

// generating a username for account3
// a map returns another array
const owner = account3.owner;
const acctOwner = owner.toLowerCase().split(` `);
console.log(acctOwner);
const usernameArr = acctOwner.map(val => val.slice(0, 1));
console.log(usernameArr.join(''));

// putting the above into a function
const createUsername = accountOwner => {
  const username = accountOwner
    .toLowerCase()
    .split(` `)
    .map(val => val.slice(0, 1))
    .join('');

  return username;
};
console.log(`---Using a function---`);
console.log(createUsername(owner));

// using the map and foreach method
// to compute usernames of each of the accounts
const createUsernameFromAccts = acctsArray => {
  acctsArray.forEach(acct => {
    // create a new propetty username
    acct.username = acct.owner
      .toLowerCase()
      .split(` `)
      .map(val => val.slice(0, 1))
      .join('');
  });
};
console.log(`----Transformed accounts array----`);
createUsernameFromAccts(accounts);
console.log(accounts);

// demonstrating the filter method
// filter array selects elements based on a criteria
// and returns it into an array
console.log(`---The filter method---`);
console.log(account3.movements);
const deposits = account3.movements.filter(val => val > 0);
console.log(deposits);
// using the for...of loop to accomplish as above
console.log(`---Using the for...of loop--`);
const deposits2 = [];
for (const val of account3.movements.filter(val => val > 0)) {
  deposits2.push(val);
}
console.log(deposits2);

// using the filter method to obtain the withdrawals
const withdrawals = [];
// using functional filter method
console.log(`Obtaining withdrawals only using filter method`);
const withdrawalsOnly = account3.movements.filter(amt => amt < 0);
console.log(withdrawalsOnly);
console.log(`Obtaining withdrawals only using for...of method`);
for (const value of account3.movements.filter(amt => amt < 0)) {
  withdrawals.push(value);
}

console.log(withdrawals);

// dynamically adding deposits to the accounts array accounts
const acctsNew = acctsArray4 => {
  acctsArray4.forEach(acct => {
    acct.deposits = acct.movements.filter(amt => amt > 0);
    acct.withdrawals = acct.movements.filter(amt => amt < 0);
  });
};
acctsNew(accounts);
console.log(accounts);

// Demonstrating the reduce method
console.log(`Using the reduce method`);
const balancesAcct1 = account1.movements.reduce(
  (accumulator, item) => accumulator + item,
  0
);
console.log(`Account 1 balance: `, balancesAcct1);
console.log(`---using the for...of loop to reduce---`);
let balancesAcct1_for = 0;
for (const item of account1.movements) {
  balancesAcct1_for += item;
}
console.log(`Acct 1 balance using for: `, balancesAcct1_for);

// Obtaining the maximum Account1 balance using the reduce method
console.log(`Obtaining the max amt in Account1 object using the reduce method`);
const maxAmt = mvmnts =>
  mvmnts.reduce((acc, val) => Math.max(acc, val), mvmnts[0]);
console.log(`Maximum value in the array: ${maxAmt(account1.movements)}`);

// Method chaining - PIPELINE
console.log(`-----Method chaining------`);
const eurosUSD = 1.1;
const depositsUSD = account1.movements
  .filter(amt => amt > 0)
  .map(amt => amt * eurosUSD)
  .reduce((acc, amt, ind) => acc + amt, 0);
console.log(depositsUSD.toFixed(3));

// Demonstrating the find method
console.log(`-----Demonstrating the find method-----`);
const firstWithdrawal = account1.movements.find(amt => amt < 0);
console.log(`Entire array: `, account1.movements);
console.log(`First withdrawal: ${firstWithdrawal}`);

// Locating an account using the find method
console.log(`Locating an account using the find method`);
const acctJess = accounts.find(acct => acct.owner === `Jessica Davis`);
console.log(acctJess);

// Demonstrating includes, some and every
console.log(`Demonstrating includes, some and every`);
// includes
console.log(`Account 1 movements:`, account1.movements);
console.log(`Includes -130?`, account1.movements.includes(-130));
console.log(`Includes 650?`, account1.movements.includes(650));

// some
console.log(
  `Contains amount less than 1000?`,
  account1.movements.some(mov => mov < 1000)
);

// every
console.log(`Account 2 movements:`, account2.movements);
console.log(
  `Are all elements deposits?`,
  account2.movements.every(amt => amt > 0)
);
console.log(
  `Are all elements withdrawals?`,
  account2.movements.every(amt => amt < 0)
);
console.log(
  `Are some elements deposits?`,
  account4.movements.some(amt => amt > 0)
);

console.log(`Account 4 movements:`, account4.movements);
console.log(
  `Are all elements deposits?`,
  account4.movements.every(amt => amt > 0)
);
console.log(
  `Are all elements withdrawals?`,
  account4.movements.every(amt => amt < 0)
);

// Demonstrating flat and flatMap methods
console.log(`------Demonstrating flat and flatMap methods--------`);
const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(`Original array: `, arr1);
console.log(`Flattened array: `, arr1.flat());

const arr2 = [[1, 2, 3], [2, 3, 5, [3, [6, 9], 4, 3]], 8, 3, 6, 8];
console.log(`Original deeply nested array`, arr2);
console.log(`Flattened nested array: `, arr2.flat(4));

// Obtaining all the balances using map, flat and reduce
// on all accounts in the accounts array
console.log(`Total available balance in all accounts: `);
const allAcctBalance = accounts
  .map(acct => acct.movements) // obtain all movements
  .flat() // flatten all movements into a single dim array
  .reduce((acc, mov) => acc + mov, 0);
console.log(`Total account balance: `, allAcctBalance);

// using the flatMap method to enhance performance
console.log(`-----using the flatMap method to enhance performance-----`);
const allAcctBalance2 = accounts
  .flatMap(acct => acct.movements)
  .reduce((acc, amt) => acc + amt, 0);
console.log(`Total acct balance using flatMap: `, allAcctBalance2);

// SORTING
// strings
console.log(`-----Demonstrating Sorting (strings)-----`);
const names = [`Jonas`, `Mark`, `Zack`, `Martha`, `Uwem`, `Mfoniso`];
console.log(`Original array:`, names);
console.log(
  `Sorted arrays (original array muted in the process: )`,
  names.sort()
);
console.log(`Original array:`, names);

// numbers
console.log(`-----Demonstrating Sorting (numbers)-----`);
const acct1 = account1.movements;
// sorting asc
console.log(`---Ascending---`);
console.log(`Original account 1 movements: `, account1.movements);
// const sortAscending = acct1.sort((a, b) => {
//   let result = 0;
//   if (a < b) result = -1;
//   if (a > b) result = 1;
//   return result;
// });
// more performant code below:
const sortAscending = acct1.sort((a, b) => a - b);
console.log(`Sorted account 1 movements (asc): `, sortAscending);
// sortng desc
// const sortDescending = acct1.sort((a, b) => {
//   let result;
//   if (a < b) result = 1;
//   if (a > b) result = -1;
//   return result;
// });
// more performant code below:
const sortDescending = acct1.sort((a, b) => b - a);
console.log(`Sorted account 1 movements (desc)`, sortDescending);

// Creating arrays programmatically
console.log(`------Creating arrays programmatically-------`);
const arrEven = Array.from({ length: 10 }, (curr, index) => (index *= 2));
console.log(arrEven);

// Generating 100 random integers
const randonNum = Array.from({ length: 100 }, () =>
  Math.ceil(Math.random() * 100)
);
console.log(randonNum);

// Obtaining total deposits in all accounts
console.log(`Total deposits in all accounts`);
const totalDepositSum = accounts
  .flatMap(acct => acct.movements)
  .filter(amt => amt > 0)
  .reduce((sum, amt) => sum + amt, 0);
console.log(totalDepositSum);

console.log(`---Total deposits with at least 1000---`);
const totalDep1k = accounts
  .flatMap(acct => acct.movements)
  .filter(amt => amt >= 1000).length;
// .reduce((acc, item, ix) => acc + 1, 0);
console.log(`Deposits above 1k inclusive: `, totalDep1k);

const totalDep1k2 = accounts
  .flatMap(acct => acct.movements)
  .reduce((acc, amt) => (amt >= 1000 ? ++acc : acc), 0);
console.log(`Deposits above 1k inclusive2: `, totalDep1k2);

// creating new objects using the reduce method
console.log(`------Creating new objects using the reduce method------`);
const sumWithDep = (acc, deposits = 0, withdrawals = 0) =>
  acc
    .flatMap(acc => acc.movements)
    .reduce((_, val) => {
      val > 0 ? (deposits += val) : (withdrawals += val);
      return { withdrawals, deposits };
    }, 0);
const sumWithDepObject = sumWithDep(accounts);
console.log(sumWithDepObject);

const sumWithDep2 = accts =>
  accts
    .flatMap(accts => accts.movements)
    .reduce(
      (sums, value) => {
        // value > 0 ? (sums.deposits += value) : (sums.withdrawals += value); // more efficient cbode below
        sums[value > 0 ? `deposits` : `withdrawals`] += value;
        return sums;
      },
      { deposits: 0, withdrawals: 0 }
    );
const sumWithDepObject2 = sumWithDep2(accounts);
console.log(sumWithDepObject2);

// creating a title case sentence
const titledSentence = sentence => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [
    `a`,
    `an`,
    `the`,
    `but`,
    `or`,
    `on`,
    `and`,
    `not`,
    `in`,
    `with`,
    `is`,
  ];
  const capitalizedSentence = sentence
    .toLowerCase()
    .split(` `)
    .map(
      str => (exceptions.includes(str) ? str : capitalize(str))
      // : str.replace(str[0], str[0].toUpperCase());
    )
    .join(` `);
  return capitalize(capitalizedSentence);
};

const s1 = `this is a nice title`;
const s2 = `this is a LONG title but not too long`;
const s3 = `and here is another title with AN EXAMPLE and ILLustRATion`;
console.log(titledSentence(s1));
console.log(titledSentence(s2));
console.log(titledSentence(s3));
// console.log(s1, s2, s3);
