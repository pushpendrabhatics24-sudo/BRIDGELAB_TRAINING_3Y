// Global scope
var globalVar = 'I am global';
function myFunction() { console.log(globalVar); }
myFunction();
console.log(globalVar);

// Function scope
function showAge() { let age = 25; console.log(age); }
showAge();
try { console.log(age); } catch (e) { console.log('Error:', e.message); }

// Block scope
if (true) {
  let blockVar = "I am block scoped";
  const anotherVar = 10;
  console.log(blockVar, anotherVar);
}
try { console.log(blockVar); } catch (e) { console.log('Error:', e.message); }

// Lexical scope
function outerFunction() {
  var outerVar = 'I am outside';
  function innerFunction() { console.log(outerVar); }
  innerFunction();
}
outerFunction();
