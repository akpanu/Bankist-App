'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

const account5 = {
  owner: 'Uwem Akpan',
  movements: [4300, 10000, 7000, 500, 9900],
  interestRate: 1,
  pin: 5555,
};

// array of individual account objects
const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Manipulating the DOM
// Displaying the money movements
const updateUI = acct => {
  // display balances
  displayBalances(acct);

  // display total balance
  calcDisplayBal(acct);

  // display summary
  calcDisplaySummary(acct);
};

const displayBalances = function (account, sorted = false) {
  containerMovements.innerHTML = ``; // clear current contents of the container

  const moves = sorted
    ? account.movements.slice().sort((a, b) => a - b) // call slice method to return a copy of the array to prevent mutating the original array
    : account.movements;
  moves.forEach((val, index) => {
    const type = val > 0 ? `deposit` : `withdrawal`;

    const htmlText = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${index + 1} ${type}
      </div>
      <div class="movements__value">${val.toFixed(2)}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML(`afterbegin`, htmlText);
  });
};

// displayBalances(account1.movements);

// calculating ahd displaying the balance on the app
const calcDisplayBal = acct => {
  acct.balance = acct.movements.reduce(
    (accumulator, amt) => accumulator + amt,
    0
  );
  labelBalance.textContent = `${acct.balance.toFixed(2)}€`;
};
// const currentBal = calcDisplayBal(movements);
// labelBalance.textContent = `${currentBal}€`;

// calculating and displaying the deposits on the app
const calcDisplaySummary = function (account) {
  const deposits = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, amt) => acc + amt, 0);

  const withdrawals = account.movements
    .filter(amt => amt < 0)
    .reduce((acc, amt) => acc + amt, 0);

  const interest = account.movements
    .filter(amt => amt > 0)
    .map(amt => (amt * account.interestRate) / 100)
    .filter(interest => interest >= 1.0)
    .reduce((acc, intrst) => acc + intrst, 0);

  labelSumIn.textContent = `${deposits.toFixed(2)}€`;
  labelSumOut.textContent = `${Math.abs(withdrawals).toFixed(2)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
// calcDisplaySummary(account1.movements);

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
console.log(`----Transformed accounts array autogenerating usernames----`);
createUsernameFromAccts(accounts);

// Implementing login
let currentAccount; // holds current account object in the entire app
btnLogin.addEventListener(`click`, e => {
  e.preventDefault(); // makes the console to retain contents after a button click
  // console.log(`LOGIN`);
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount.pin === +inputLoginPin.value) {
    // Display UI and message
    inputLoginUsername.value = ``;
    inputLoginPin.value = ``;
    inputLoginPin.blur();
    labelWelcome.textContent = ``;
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome ${
      currentAccount.owner.split(` `)[0]
    }, to your bank account`;

    // UPDATE the UI
    updateUI(currentAccount);
  }
});

// Implementing Transfers
btnTransfer.addEventListener(`click`, e => {
  e.preventDefault();

  // obtain amount and receiving acct details
  const transferAmt = +inputTransferAmount.value;
  const receivingAcct = accounts.find(
    acct => acct.username === inputTransferTo.value
  );
  console.log(transferAmt, receivingAcct);
  inputTransferAmount.value = inputTransferTo.value = ``;
  inputTransferAmount.blur();

  // ensure that there is sufficient funds,
  // transfer amount is greater than zero,
  // check whether the receiving acct is available
  // and the receiving acct is not equal to current Acct
  if (
    transferAmt > 0 &&
    receivingAcct &&
    currentAccount.balance >= transferAmt &&
    receivingAcct?.username !== currentAccount.username
  ) {
    // console.log(`SUCCESSFUL`);
    // debit current acct and credit receiving acct
    currentAccount.movements.push(-transferAmt);
    receivingAcct.movements.push(transferAmt);

    // update the UI
    updateUI(currentAccount);
  }
});

// Apply for loan
btnLoan.addEventListener(`click`, e => {
  e.preventDefault();

  const loanAmt = Math.floor(inputLoanAmount.value);
  if (
    loanAmt > 0 &&
    currentAccount.movements.some(amt => amt >= loanAmt * 0.1)
  ) {
    currentAccount.movements.push(loanAmt);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});

// Implementing sortng
let sortedState = false;
btnSort.addEventListener(`click`, e => {
  e.preventDefault();

  displayBalances(currentAccount, !sortedState);
  sortedState = !sortedState;
});
// Implementing the close account feature
btnClose.addEventListener(`click`, e => {
  e.preventDefault();

  if (
    currentAccount?.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    // console.log(`Deleted`);
    const deleteAcctIndex = accounts.findIndex(
      acct => acct.username === currentAccount.username
    );
    accounts.splice(deleteAcctIndex, 1); // delete the current account
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ``;
});
