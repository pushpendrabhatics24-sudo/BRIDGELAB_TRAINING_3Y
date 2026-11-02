// 5. Object.create()
const parent = { greet() { console.log("Hello from parent!"); } };
const child = Object.create(parent);
child.name = "Child Object";
child.greet();                                   // Hello from parent!
console.log(Object.getPrototypeOf(child) === parent); // true
