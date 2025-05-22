let num = 9;
// for loop
/*
for(let i=1; i<=num; i++){
    console.log("number= " + i);
}
*/
// while loop
/*
let i = 1;
while(i <= num){
    console.log("number= " + i);
    i++
}
*/
// do while loop
/*
let j = 1;
do{
    console.log("number= " + j);
    j++
}
while(j<=10);
*/

// for in loop
// let person = {name: "Asha", age: 25};
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// for off loop
// let fruits = ["Mango", "Apple", "Banana"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }


// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;  // skips printing 3
//   }
//   if (i === 5) {
//     return;  // stops loop when i is 5
//   }
//   console.log(i);
// }
// Output: 1 2 4


// callback

function doTask(callbackName) {
  console.log("Task started");
  callbackName();
  return true;
}

function finished() {
  setTimeout(()=>{
  console.log("Tea is ready!");
  }, 5000)
  console.log("Waiting while tea is being made...");
}

// if(doTask(finished)){
//   console.log("Done");
// }

function countDown(n) {
  if (n <= 0) return;
  console.log(n);
  setTimeout(function(){
  countDown(n - 1);
  },1000);
}
// countDown(20)


// arrow function`
// 
const greet = (name)=> {
  console.log(`Hello ${name}`);
}



// Step 1: Products ka list (normally API se aata hai)
const products = [
  {id:1, name: "T-Shirt", price: 800 },
  {id:2, name: "Watch", price: 1500 },
  {id:3,  name: "Shoes", price: 2200 },
  {id:4, name: "Bag", price: 700 },
  {id:5, name: "Laptop", price: 55000 },
];

// const premiumProducts = products.filter(product=>product.price>=1000);
// console.log(premiumProducts);
// const premiumProductNames = premiumProducts.map(product=>product.name);
// console.log(premiumProductNames);


// function isValidEmail(email) {
//   const pattern = /^[\w.-]+@[a-z]+\.[a-z]{2,3}$/;
//   return pattern.test(email);
// }

// console.log(isValidEmail("hello@mail.com"));  // true
// console.log(isValidEmail("wrong@site.cokk")); // false
