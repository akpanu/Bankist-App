'use strict';

// Test Data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.Calculate recommended food portion
dogs.forEach(
  dog => (dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(2)))
);
console.log(dogs);

// 2. Find Sarah's dog and log food qty to console
const dogSarah = dogs.find(dog => dog.owners.includes(`Sarah`));

// fxn to return food qty from dogObject
const statusMsg = stat => {
  let statmsg = ``;
  if (stat === 1) statmsg = `ok`;
  else if (stat === 2) statmsg = `too little`;
  else if (stat === 3) statmsg = `too much`;
  return statmsg;
};
const foodStatus = dogObject => {
  const food = dogObject.recommendedFood;
  const foodLowerBound = food * 0.9;
  const foodUpperBound = food * 1.1;
  const foodConsumed = dogObject.curFood;
  let status;

  if (foodConsumed >= foodLowerBound && foodConsumed <= foodUpperBound)
    status = 1;
  else {
    status = foodConsumed < foodLowerBound ? 2 : 3;
  }
  return status;
};
console.log(`Sarah's dog eats ${statusMsg(foodStatus(dogSarah))}`);

// 3. Create array of dog owners eating  much & little
const ownersEatTooMuch = dogObjects =>
  dogObjects
    .filter(dog => foodStatus(dog) === 3)
    .flatMap(dogObj => dogObj.owners);

const ownersEatTooLittle = dogObjects =>
  dogObjects
    .filter(dog => foodStatus(dog) === 2)
    .flatMap(dogObj => dogObj.owners);

console.log(`Owners of dogs eating too much`);
console.log(ownersEatTooMuch(dogs));
console.log(`Owners of dogs eating too little`);
console.log(ownersEatTooLittle(dogs));

// 4. Log a string from arrays created above
const dogsEatMuch = ownersEatTooMuch(dogs).join(` and `);
console.log(`${dogsEatMuch}'s dogs eat too much`);

const dogsEatLittle = ownersEatTooLittle(dogs).join(` and `);
console.log(`${dogsEatLittle}'s dogs eat too little`);

// 5. Dogs eating exact food amt as recommended
const exactAmt = dogObjects =>
  dogObjects.filter(dogObj => dogObj.curFood === dogObj.recommendedFood).length;

console.log(
  `Any dog eating exact amt of food? ${exactAmt(dogs) ? true : false}`
);

// 6. Dog eating ok amt of food
const okAmt = dogObjects =>
  dogObjects.filter(dogObj => foodStatus(dogObj) === 1).length;
// console.log(okAmt(dogs));
console.log(`Any dog eating ok amt of food? ${okAmt(dogs) ? true : false}`);

// 7. Dog array object with ok amt of food
const okAmtDogArr = dogObjects =>
  dogObjects.filter(dogObj => foodStatus(dogObj) === 1);
console.log(okAmtDogArr(dogs));

// 8.
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
