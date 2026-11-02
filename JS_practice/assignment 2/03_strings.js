let str1 = 'Hello', str2 = "World", str3 = "Alice";
console.log(str1, str2, `Hello, ${str3}!`);

// Immutability
let s = "Hello"; s[0] = "J"; console.log(s);   // Hello
s = "World"; console.log(s);                    // new string assigned

// Interning
let s1 = "hello", s2 = "hello";
console.log(s1 === s2);                         // true

// Concatenation
let c = "Hello" + " " + "World"; console.log(c);

// Literal vs Object
let a = "john", b = new String("john");
console.log(a == b, a === b);                   // true false
console.log(typeof a, typeof b);                // string object

// Methods demo
let str = "  JavaScript is Awesome!  ";
let t = str.trim();
console.log("trim():", t);
console.log("toUpperCase():", t.toUpperCase());
console.log("toLowerCase():", t.toLowerCase());
console.log("includes('Awesome'):", t.includes("Awesome"));
console.log("includes('Python'):", t.includes("Python"));
console.log("indexOf('is'):", t.indexOf("is"));
console.log("slice(0,10):", t.slice(0, 10));
console.log("replace():", t.replace("Awesome", "Powerful"));
console.log("split():", t.split(" "));
console.log("concat():", t.concat(" Let's learn it!"));
console.log("startsWith('Java'):", t.startsWith("Java"));
console.log("endsWith('Awesome!'):", t.endsWith("Awesome!"));
