// Q2. Multi-Type Data Summary
const userName = "Aarav";                 // string
const age = 20;                           // number
const isStudent = true;                   // boolean
const subjects = ["Java", "DBMS"];        // array
const address = { city: "Mathura" };      // object
const middleName = null;                  // null
let phoneNumber;                          // undefined

// typeof null returns "object" in JavaScript, which is a known language behavior.
const report = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "address", value: JSON.stringify(address), type: typeof address },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "phoneNumber", value: phoneNumber, type: typeof phoneNumber }
];

console.table(report);
