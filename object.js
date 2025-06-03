// 1. Object.keys()
// ✅ Description: Returns all the keys from the object as an array.
// 🎯 Use Case: Useful when you want to loop through all keys.
const user = { name: "Amit", age: 25 };
console.log(Object.keys(user));  // ["name", "age"]
// 📌 Use Case: Creating a dynamic form based on object keys.


// 2. Object.values()
// ✅ Description: Returns all the values of the object.
// 🎯 Use Case: When you want to show only values (not keys) in UI.
console.log(Object.values(user));  // ["Amit", 25]
// 📌 Use Case: Displaying user data in a table row.


// 3. Object.entries()
// ✅ Description: Returns key-value pairs as nested arrays.
// 🎯 Use Case: Easily loop over both key and value.
console.log(Object.entries(user));  // [["name", "Amit"], ["age", 25]]
// 📌 Use Case: Convert object to array for CSV export or table view.


// 4. Object.fromEntries()
// ✅ Description: Converts array of [key, value] back to an object.
// 🎯 Use Case: When receiving key-value pairs from APIs or forms.
const arr = [["name", "Amit"], ["age", 25]];
console.log(Object.fromEntries(arr));  // { name: "Amit", age: 25 }
// 📌 Use Case: Convert formData into usable object.


// 5. Object.assign()
// ✅ Description: Copies values from one or more objects into a target.
// 🎯 Use Case: Merging multiple objects or updating state immutably.
const extra = { city: "Delhi" };
console.log(Object.assign({}, user, extra));  // { name: "Amit", age: 25, city: "Delhi" }
// 📌 Use Case: Merging user profile data with defaults.


// 6. Object.freeze()
// ✅ Description: Locks an object so no changes can be made.
// 🎯 Use Case: Prevent accidental changes in configuration objects.
const settings = Object.freeze({ theme: "dark" });
settings.theme = "light";  // No effect
// 📌 Use Case: Lock system settings or app constants.


// 7. Object.seal()
// ✅ Description: You can modify values, but can't add/remove properties.
// 🎯 Use Case: Limit the shape of object but allow value changes.
const config = Object.seal({ mode: "edit" });
config.mode = "view";  // Works
delete config.mode;    // Won’t work
// 📌 Use Case: Protect API request payload format.


// 8. hasOwnProperty()
// ✅ Description: Checks if object contains a specific key.
// 🎯 Use Case: Avoid undefined errors when accessing keys.
console.log(user.hasOwnProperty("name"));  // true
// 📌 Use Case: Validate if form submission has required fields.


// 9. in operator
// ✅ Description: Checks if property exists (even from prototype).
// 🎯 Use Case: More flexible than hasOwnProperty.
console.log("name" in user);  // true
// 📌 Use Case: Check if default settings are applied or overridden.


// 10. for...in loop
// ✅ Description: Loop through object keys.
// 🎯 Use Case: Access all properties dynamically.
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// 📌 Use Case: Render object fields in a reusable card component.


// 11. Destructuring
// ✅ Description: Extract values from object into variables.
// 🎯 Use Case: Cleaner access to properties.
const { name, age } = user;
console.log(name);  // "Amit"
// 📌 Use Case: Use only required values in components or functions.


// 12. Optional Chaining (?.)
// ✅ Description: Safely access deeply nested properties.
// 🎯 Use Case: Prevent crashes if data is missing.
const data = { profile: { city: "Mumbai" } };
console.log(data.profile?.city);  // "Mumbai"
// 📌 Use Case: When fetching user data from backend where some fields may be missing.


// 13. typeof + !Array.isArray()
// ✅ Description: Identify if a value is a plain object.
// 🎯 Use Case: Handle different data types dynamically.
const value = { name: "Amit" };
if (typeof value === "object" && !Array.isArray(value)) {
  console.log("It's an object");
}
// 📌 Use Case: API response validation.

// 14. JSON.stringify()
// ✅ Description: Convert object to JSON string.
// 🎯 Use Case: Store object in localStorage or send to server.
const json = JSON.stringify(user);
// 📌 Use Case: Saving user session in browser.


// 15. JSON.parse()
// ✅ Description: Convert JSON string back to JS object.
// 🎯 Use Case: Read data from localStorage or API.
const obj = JSON.parse(json);
// 📌 Use Case: Restore user settings from saved string.


// 16. Object.defineProperty()
// ✅ Description: Add or change object property with extra control.
// 🎯 Use Case: Make read-only properties or hidden fields.
const person = {};
Object.defineProperty(person, "id", {
  value: 101,
  writable: false,
});
person.id = 202;  // Won’t change
// 📌 Use Case: Hide internal configuration from user.

// Destructing Object

let students=[{"name": "Ajay", "age": 20, "city": "Bangalore"},
{"name": "Bijay", "age": 25, "city": "Mangalore"}
]

let [student1, student2] = students;
console.log(student2.age);

let newStudents = Object.create(students[1]);
console.log(newStudents.city);