let text = "Hello World";
let pattern = /Hello/;
console.log(pattern.test(text)); // true
// Constructor form
console.log(new RegExp("hello").test("hello there")); // true
