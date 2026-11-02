// 2. LOOPS
// for
for (let i = 0; i < 5; i++) console.log("Iteration number: " + i);
// 0 1 2 3 4

// while (condition checked first)
let counter = 0;
while (counter < 3) { console.log("counter is: " + counter); counter++; }
// 0 1 2

// do...while (runs at least once)
let x = 10;
do { console.log("This runs once even though x > 5: " + x); x++; } while (x < 5);
// runs once: x = 10

// for...of (values of iterable)
const colors = ["red", "green", "blue"];
for (const color of colors) console.log(color); // red green blue
for (const letter of "HELLO") console.log(letter); // H E L L O

// for...in (keys of object)
const car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (const key in car) console.log(`${key}: ${car[key]}`);
// brand: Toyota / model: Corolla / year: 2020
