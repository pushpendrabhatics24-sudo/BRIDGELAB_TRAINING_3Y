// 1. SWITCH
// Q1: Day number -> day name
let dayNumber = 5;
let dayName;
switch (dayNumber) {
  case 1: dayName = "Monday"; break;
  case 2: dayName = "Tuesday"; break;
  case 3: dayName = "Wednesday"; break;
  case 4: dayName = "Thursday"; break;
  case 5: dayName = "Friday"; break;
  case 6: dayName = "Saturday"; break;
  case 7: dayName = "Sunday"; break;
  default: dayName = "Invalid day number";
}
console.log(`Today is ${dayName}.`); // Today is Friday.

// Q2: Without break -> fall-through
let n = 2;
switch (n) {
  case 1: console.log("One");
  case 2: console.log("Two");   // match starts here
  case 3: console.log("Three"); // falls through (no break)
  default: console.log("Default");
}
// Output: Two, Three, Default

// Q3: Grouped cases (weekday / weekend)
let d = 6;
switch (d) {
  case 6:
  case 7: console.log("Weekend"); break;
  default: console.log("Weekday");
}
// Output: Weekend
