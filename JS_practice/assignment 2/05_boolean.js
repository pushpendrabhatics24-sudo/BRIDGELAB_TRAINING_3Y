console.log(Boolean(10), Boolean(0), Boolean("Hello"), Boolean(""), Boolean(null));
let a = 10, b = 5;
console.log(a > b, a === b);

// Falsy values
[false, 0, "", null, undefined, NaN].forEach(v => console.log(String(v), "->", Boolean(v)));
// Truthy surprises
["0", "false", " ", [], {}, function () {}].forEach(v => console.log(typeof v, "->", Boolean(v)));

let userName = "", userAge = 25;
if (userName) console.log("Username is set.");   // not run
if (userAge) console.log("Age is valid.");       // runs
