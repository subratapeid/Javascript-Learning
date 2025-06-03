// all important methodes for an array in js

// 1. push()
// Add one or more items at the end of the array.

let array = [1,2,3,4,5];
array.push(6);
// console.log("Push:" + array);

// 2. pop()
// Remove the last item from the array and return it.
let fruits = ["Apple", "Grapps", "Mango"];
    fruits.pop();
    // console.log("Pop:" + fruits);
    
// 3. shift()
// Remove the first item from the array and return it.

let months = ["Jan", "Feb", "Mar", "Appr"];
    months.shift();
    // console.log("Shift:" + months);
    
// 4. unshift()
// Add one or more items at the start of the array.

let days = ["monday", "tuesday", "wednesday"]
    days.unshift("sunday");
    // console.log("Unshift: " +days);
    
// 5. length
// Get or set the length of the array.
let length = days.length;
    // console.log("Length: "+ length);

// 6. indexOf()
// Find the index of an item in the array (returns -1 if not found).

let index = days.indexOf("tuesday");
    // console.log("index: " + index);
    
// 7. includes()
// Check if an array contains an item (true or false).

let isInclude = months.includes("Feb");
    // console.log("Is Include: " + isInclude);
    
// 8. slice()
// Create a new array by copying a part of the original array.

let slice = array.slice(1,5,6);
    // console.log("Slice: " + slice);

// 9. splice()
// Change the contents of an array by removing/replacing/adding elements.
// console.log(array.splice(1, 2));
// console.log(array.splice(1, 0, 2, 3));

// 10. forEach()
// Run a function for each item in the array (no return).
    // array.forEach(item=>console.log("Foreach: " + item));

// 11. map()
// Create a new array by applying a function to each item.
let map = array.map(num=>(num*num));
// console.log("Map Squired: " +map);

// 12. filter()
// Create a new array with items that pass a condition.

let oddNumbers = array.filter(num=>num%2!==0);
// console.log("Odd Numbers: " + oddNumbers);

// 13. reduce()
// Combine all items into a single value by applying a function.
let sum = array.reduce((total, x) => total + x, 0);
    // console.log(sum);

// 14. find()
// Return the first item that matches a condition.
    let find = array.find(item=> item>2);
    // console.log("Find: " +find);
    
// 15. findIndex()
// Return the index of the first item that matches a condition.
    
let findIndex = array.findIndex(x => x == 4);
    // console.log("Find Index: " +findIndex);

// 16. sort()
// Sort the array items in place.
let numbers = [12,2,5,48,55,62,72];
let names = ["Chandan", "Ajay", "Bijay", "Sujay", "Deelip", "Pratap"];

let sortedNumbers = numbers.sort((a,b)=> a-b); // for numbers data
let sortedNames = names.sort(); // for alphabetical data
// console.log("Sort Numbers: " + sortedNumbers);
// console.log("Sort Names: " + sortedNames);

// 17. join()
// Join all array items into a string, separated by a specified separator.
let joinNames = names.join("-");
// console.log("Join: " + joinNames);

// 18. concat()
// Combine two or more arrays into a new array.
let concatedArray = array.concat(names);
    // console.log("Concat: " + concatedArray);


// Destructing Arary

let fruits2 = [fruit1="Banana", "Mango", "Apple"];

let [, , fruit] = fruits2;
console.log(fruit);
