// 6. DEBUGGING
// 1) console.log
const price = 100, discount = 20;
console.log("Price before discount:", price);
console.log("Discount applied:", discount);
console.log("Final price:", price - discount); // 80

// 2) console.warn / console.error
let age = -5;
if (age < 0) console.warn("Warning: Age cannot be negative");
try { let num = "hello"; console.log(num.toFixed(2)); }
catch (err) { console.error("Error occurred:", err.message); } // num.toFixed is not a function

// 3) debugger keyword (pauses only when DevTools / VS Code debugger is attached)
function calculateTotal(a, b) {
  debugger; // execution stops here
  return a + b;
}
console.log(calculateTotal(10, 15)); // 25

// 4/5) DevTools & VS Code example: average of array
const numbers = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  // debugger; // uncomment to pause every iteration
  sum += numbers[i];
}
let average = sum / numbers.length;
console.log("Average:", average); // 25 (sum = 100)

// 5) VS Code debugging example: BUGGY version
function calculateCartTotalBuggy(cartItems) {
  let total = 0;
  for (let i = 0; i <= cartItems.length; i++) { // BUG: <= goes one index too far
    total += cartItems[i].price * cartItems[i].quantity; // cartItems[3] is undefined -> TypeError
  }
  return total;
}
// FIXED version: use <
function calculateCartTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
  }
  return total;
}
const cart = [
  { item: "Shoes", price: 1200, quantity: 2 },
  { item: "Shirt", price: 800, quantity: 1 },
  { item: "Watch", price: 1500, quantity: 1 },
];
try { calculateCartTotalBuggy(cart); }
catch (e) { console.log("Buggy:", e.message); } // Cannot read properties of undefined (reading 'price')
console.log("Cart total:", calculateCartTotal(cart)); // 2400 + 800 + 1500 = 4700
