'use strict'; // Data

var account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  // %
  pin: 1111
};
var account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};
var account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};
var account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
}; // an array of each of the acounts

var accounts = [account1, account2, account3, account4]; // generating a username for account3
// a map returns another array

var owner = account3.owner;
var acctOwner = owner.toLowerCase().split(" ");
console.log(acctOwner);
var usernameArr = acctOwner.map(function (val) {
  return val.slice(0, 1);
});
console.log(usernameArr.join('')); // putting the above into a function

var createUsername = function createUsername(accountOwner) {
  var username = accountOwner.toLowerCase().split(" ").map(function (val) {
    return val.slice(0, 1);
  }).join('');
  return username;
};

console.log("---Using a function---");
console.log(createUsername(owner)); // using the map and foreach method
// to compute usernames of each of the accounts

var createUsernameFromAccts = function createUsernameFromAccts(acctsArray) {
  acctsArray.forEach(function (acct) {
    // create a new propetty username
    acct.username = acct.owner.toLowerCase().split(" ").map(function (val) {
      return val.slice(0, 1);
    }).join('');
  });
};

console.log("----Transformed accounts array----");
createUsernameFromAccts(accounts);
console.log(accounts); // demonstrating the filter method
// filter array selects elements based on a criteria
// and returns it into an array

console.log("---The filter method---");
console.log(account3.movements);
var deposits = account3.movements.filter(function (val) {
  return val > 0;
});
console.log(deposits); // using the for...of loop to accomplish as above

console.log("---Using the for...of loop--");
var deposits2 = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = account3.movements.filter(function (val) {
    return val > 0;
  })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var val = _step.value;
    deposits2.push(val);
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

console.log(deposits2); // using the filter method to obtain the withdrawals

var withdrawals = []; // using functional filter method

console.log("Obtaining withdrawals only using filter method");
var withdrawalsOnly = account3.movements.filter(function (amt) {
  return amt < 0;
});
console.log(withdrawalsOnly);
console.log("Obtaining withdrawals only using for...of method");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = account3.movements.filter(function (amt) {
    return amt < 0;
  })[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var value = _step2.value;
    withdrawals.push(value);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

console.log(withdrawals); // dynamically adding deposits to the accounts array accounts

var acctsNew = function acctsNew(acctsArray4) {
  acctsArray4.forEach(function (acct) {
    acct.deposits = acct.movements.filter(function (amt) {
      return amt > 0;
    });
    acct.withdrawals = acct.movements.filter(function (amt) {
      return amt < 0;
    });
  });
};

acctsNew(accounts);
console.log(accounts); // Demonstrating the reduce method

console.log("Using the reduce method");
var balancesAcct1 = account1.movements.reduce(function (accumulator, item) {
  return accumulator + item;
}, 0);
console.log("Account 1 balance: ", balancesAcct1);
console.log("---using the for...of loop to reduce---");
var balancesAcct1_for = 0;
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = account1.movements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var item = _step3.value;
    balancesAcct1_for += item;
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

console.log("Acct 1 balance using for: ", balancesAcct1_for);