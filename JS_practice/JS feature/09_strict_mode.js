// 9. STRICT MODE (each case in its own strict function so file runs fully)
function t(label, fn) { try { fn(); } catch (e) { console.log(`${label}: ${e.name} -> ${e.message}`); } }

// Global strict mode would be: "use strict"; at the top of the file.

// 1) Implicit global
t("Sloppy implicit global", function () { z = 5; console.log("z =", z); }); // works in non-strict
t("Strict implicit global", function () { "use strict"; y = 20; });        // ReferenceError: y is not defined

// 2) this in function
t("Sloppy this", function () { (function () { console.log(this === globalThis); })(); }); // true
t("Strict this", function () { (function () { "use strict"; console.log(this); })(); });  // undefined

// 3) Read-only property assignment
t("Strict read-only", function () {
  "use strict";
  const obj = {};
  Object.defineProperty(obj, "id", { value: 10, writable: false });
  obj.id = 20; // TypeError
});

// 4) eval scope
t("Strict eval", function () {
  "use strict";
  eval("var q = 10;");
  console.log(q); // ReferenceError: q is not defined
});

// 5) Duplicate params, octal literal, with, delete var = SyntaxError (compile-time) in strict mode.
//    Verified via new Function so the file still runs:
t("Duplicate params", () => new Function('"use strict"; function add(a, a) { return a; }'));
t("Octal literal",   () => new Function('"use strict"; let num = 010;'));
t("with statement",  () => new Function('"use strict"; with (Math) { console.log(sqrt(16)); }'));
t("delete variable", () => new Function('"use strict"; var x = 5; delete x;'));
t("Reserved word",   () => new Function('"use strict"; var interface = 1;'));
