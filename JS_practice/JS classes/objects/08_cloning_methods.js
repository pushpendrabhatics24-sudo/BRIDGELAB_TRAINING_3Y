// Cloning / merging and Object methods
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(Object.keys(obj2));    // [ 'a', 'b', 'c' ]
console.log(Object.values(obj2));  // [ 1, 2, 3 ]
console.log(Object.entries(obj2)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(Object.assign({}, obj1, { d: 4 })); // { a: 1, b: 2, d: 4 }
