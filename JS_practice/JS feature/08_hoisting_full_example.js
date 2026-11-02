// 8. FULL HOISTING EXAMPLE (from notes) with expected output
console.log(a);   // undefined  (var hoisted)
greet();          // Hello from the greet function!  (function decl fully hoisted)
try { console.log(Person); }          // class in TDZ
catch (e) { console.log(e.message); } // Cannot access 'Person' before initialization

var a = 10;
function greet() { console.log("Hello from the greet function!"); }

try { sayHi(); }                      // var sayHi is undefined here
catch (e) { console.log(e.message); } // sayHi is not a function
var sayHi = () => { console.log("Hi there!"); };

class Person {
  constructor(name) { this.name = name; }
  display() { console.log(`Person name: ${this.name}`); }
}

console.log(a);               // 10
sayHi();                      // Hi there!
const p1 = new Person("Alice");
p1.display();                 // Person name: Alice
