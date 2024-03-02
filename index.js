// TypeError: 'X' is not iterable in JavaScript

// EXAMPLE 1 - Iterating over an Object in JavaScript

const obj = {name: 'Bobby Hadz', age: 30};

// ✅ Using Object.keys()
for (const key of Object.keys(obj)) {
  console.log(key); // 👉️ name, age
  console.log(obj[key]); // 👉️ 'Bobby Hadz', 30
}

// ✅ Using Object.values()
for (const value of Object.values(obj)) {
  console.log(value); // 👉️ Bobby Hadz, 30
}

// ✅ Using Object.entries()
for (const entry of Object.entries(obj)) {
  console.log(entry); // 👉️ ['name', 'Bobby Hadz'], ['age', 30]
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using Array.forEach()

// const obj = {name: 'Bobby Hadz', age: 30};

// Object.keys(obj).forEach((key, index) => {
//   console.log(key); // 👉️ name, age
//   console.log(obj[key]); // 👉️ 'Bobby Hadz', 30

//   console.log(index); // 👉️ 0, 1
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use curly braces when destructuring an object

// const obj = {
//   first: 'bobby',
//   last: 'hadz',
// };

// const {first, last} = obj;

// console.log(first); // bobby
// console.log(last); // hadz

// ------------------------------------------------------------------

// // EXAMPLE 4 - Iterating over a generator function

// function* generator(a, b, c) {
//   yield a;
//   yield b;
//   yield c;
// }

// for (const num of generator(5, 10, 15)) {
//   console.log(num); // 👉️ 5, 10, 15
// }

// ------------------------------------------------------------------

// // TypeError: undefined is not iterable in JavaScript

// // EXAMPLE 5 - Provide a fallback value of an empty array

// const [a, b] = undefined || [];

// console.log(a); // 👉️ a
// console.log(b); // 👉️ b

// ------------------------------------------------------------------

// // EXAMPLE 6 - Correctly destructuring and using default values

// function hello(arr = []) {
//   const [a, b] = arr || [];
// }

// hello();
