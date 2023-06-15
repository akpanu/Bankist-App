'use strict';

let arr = [`a`, `b`, `c`, `d`, `e`];

// The slice method
/************************ 
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
*********************** */

// The splice method
/*************
console.log(`-----Demonstrating the splice method------`);
let arr2 = [`a`, `b`, `c`, `d`, `e`];
console.log(arr2.splice(2));
console.log(arr2); // two elements deleted by splice method above
*************/

/*************
console.log(`-----Demonstrating the splice method------`);
let arr3 = [`a`, `b`, `c`, `d`, `e`];
arr3.splice(-1); // chop off last element
console.log(arr3);
arr3.splice(1, 2); // chop off 2nd & 3rd element
console.log(arr3);
*************/

// Demonstrating Reverse Method
/*************
console.log(`------Demonstrating REVERSE method------`);
let arr4 = [`j`, `i`, `h`, `g`, `f`];
// The reverse method actually mutates the original array
console.log(`Original array: `, arr4);
console.log(`Reversed array`, arr4.reverse());
console.log(`New original array(mutated)`, arr4);
*************/

// Demonstrating the concat method
/*************
console.log(`--------Demonstrating the concat method--------`);
let firstArr = [`a`, `b`, `c`, `d`, `e`];
let secondArr = [`f`, `g`, `h`, `i`, `j`];
console.log(`First array: ${firstArr}`);
console.log(`second array: ${secondArr}`);
console.log(`Concatenated arrays:`, firstArr.concat(secondArr));
console.log(`Using the spread operator...`);
console.log([...firstArr, ...secondArr]);
*************/

// Demonstrating the JOIN method
/*************
console.log(`--------Using the JOIN method -- pretty interesting way--------`);
let firstArr2 = [`a`, `b`, `c`, `d`, `e`];
let secondArr2 = [`f`, `g`, `h`, `i`, `j`];
console.log([...firstArr2, ...secondArr2].join(` - `));
*************/

// THE at METHOD
console.log(`-----Using the at method------`);
const arr5 = [23, 11, 64];
console.log(arr5.at(0));
console.log(arr5.at(2));

console.log(arr5.slice(-1)[0]);
console.log(arr5.at(-1));

console.log(`-----at method can be used on strings------`);
console.log(`uwem`.at(0));
console.log(`uwem`.at(-1));
