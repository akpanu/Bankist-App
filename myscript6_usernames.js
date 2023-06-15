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
