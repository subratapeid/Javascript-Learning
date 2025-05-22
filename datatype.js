// 1. String
// Used for storing text (any characters inside quotes).
// 📌 Example:
let name = "Amit";
let message = 'Hello, world!';
// 🎯 Use Case: To store names, messages, file paths, etc.

// 2. Number
// Used for all numbers (both integer and decimal).
// 📌 Example:
let age = 25;
let price = 99.99;
// 🎯 Use Case: Calculations, counters, prices, scores, etc.

// 3. Boolean
// Used for true or false values only.
// 📌 Example:
let isLoggedIn = true;
let hasLicense = false;
// 🎯 Use Case: Conditions like login status, on/off, yes/no.

// 4. Undefined
// When a variable is declared but no value is assigned.
// 📌 Example:
let x;
console.log(x); // undefined
// 🎯 Use Case: To check if a variable is not yet initialized.

// 5. Null
// Represents intentional empty value (nothing).
// 📌 Example:
let data = null;
// 🎯 Use Case: To manually clear a value or show “no data”.

// 6. Object
// Stores key-value pairs (like a dictionary).
// 📌 Example:
let user = {
  name: "Amit",
  age: 25,
  email: "amit@example.com"
};
// 🎯 Use Case: Storing user profiles, settings, or structured data.

// 7. Array (a type of Object)
// Stores a list of values in an ordered way.
// 📌 Example:
let fruits = ["Apple", "Mango", "Banana"];
// 🎯 Use Case: Storing items, lists, tasks, etc.

// 8. Symbol (Advanced)
// Used to create unique values (mostly in advanced code).
// 📌 Example:
let id = Symbol("userId");
// 🎯 Use Case: When you need unique keys in objects (used in libraries/frameworks).

// 9. BigInt (ES2020)
// Used for very large integers beyond Number limit.
let bigNum = 1234567890123456789012345678901234567890n;
// 🎯 Use Case: When working with large numbers (like finance, cryptography).

// ##: typeof Operator
// To check the data type in JS:
console.log(typeof id); 
