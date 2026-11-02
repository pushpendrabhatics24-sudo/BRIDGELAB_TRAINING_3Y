// 7. HOISTING
// Function declaration: fully hoisted
greet(); // Hello World!
function greet() { console.log("Hello World!"); }

// Function expression with var: only variable hoisted (undefined)
try { sayHi0(); } catch (e) { console.log(e.message); } // sayHi0 is not a function
var sayHi0 = function () { console.log("Hi there!"); };

// var: hoisted + undefined
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// let / const: hoisted but in TDZ -> ReferenceError
try { console.log(x); } catch (e) { console.log(e.name + ": " + e.message); } // Cannot access 'x' before initialization
let x = 5;
try { console.log(y); } catch (e) { console.log(e.name + ": " + e.message); }
const y = 10;

// Class: TDZ as well
try { const s1 = new Student("Alice", 22); } catch (e) { console.log(e.name + ": " + e.message); }
class Student {
  constructor(name, age) { this.name = name; this.age = age; }
  displayInfo() { console.log(`Name: ${this.name}, Age: ${this.age}`); }
}
const student2 = new Student("Bob", 20);
student2.displayInfo(); // Name: Bob, Age: 20
