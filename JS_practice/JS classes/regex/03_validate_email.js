let email = "test@example.com";
let pattern = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
console.log(pattern.test(email));                 // true
console.log(pattern.test("bad@email"));           // false
