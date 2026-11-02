// 3. TYPE CONVERSION
// ---- Implicit (coercion) ----
let result = "Hello" + 5;
console.log(result, typeof result);   // Hello5 string   (+ with string -> concat)
let result1 = 10 - "4";
console.log(result1, typeof result1); // 6 number        (- forces number)
console.log(true + 3);                // 4  (true -> 1)
console.log(false + 5);               // 5  (false -> 0)
console.log("Value is " + true);      // Value is true
console.log(null + 5);                // 5  (null -> 0)
console.log(undefined + 5);           // NaN
console.log(5 == "5");                // true  (string -> number)
console.log(false == 0);              // true
console.log(null == 0);               // false (null equals only undefined)

// ---- Explicit (casting) ----
console.log(Number("123"), typeof Number("123"));          // 123 number
console.log(parseFloat("45.67"), typeof parseFloat("45.67")); // 45.67 number
console.log(String(100), typeof String(100));              // 100 string
console.log(250 + "", typeof (250 + ""));                  // 250 string
console.log(Number(true), Number(false));                  // 1 0
console.log(Boolean(10), Boolean(0));                      // true false
console.log(Boolean("Hello"), Boolean(""));                // true false
console.log(String(true), String(false));                  // true false
