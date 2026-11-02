// 5. ERROR HANDLING: try...catch...finally + throw
try {
  console.log("Before error");
  console.log(10 / 0); // Infinity (valid in JS)
  console.log(x);      // ReferenceError
} catch (error) {
  console.log("An error occurred: " + error.message); // x is not defined
} finally {
  console.log("Execution completed."); // always runs
}
// Output: Before error / Infinity / An error occurred: x is not defined / Execution completed.

// Custom error using throw
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
}
try {
  console.log(divide(10, 2)); // 5
  console.log(divide(5, 0));  // throws
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log("Cleanup done");
}
