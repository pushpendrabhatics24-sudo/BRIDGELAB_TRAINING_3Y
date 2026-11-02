// 4. TYPES OF ERRORS (each wrapped in try/catch so file runs fully)
function show(label, fn) {
  try { fn(); } catch (e) { console.log(`${label}: ${e.name} -> ${e.message}`); }
}

// a) SyntaxError: detected BEFORE execution, so only eval/new Function can show it at runtime
show("Syntax", () => eval('console.log("Welcome to JavaScript"')); // missing )

// b) ReferenceError
show("Reference", () => console.log(userName)); // userName is not defined

// c) TypeError
show("Type", () => { let number = 42; number.toLowerCase(); }); // not a function

// d) RangeError
show("Range", () => new Array(-1)); // Invalid array length (note: 1e12 also fails)

// e) URIError
show("URI", () => decodeURIComponent("%ZZ")); // URI malformed
