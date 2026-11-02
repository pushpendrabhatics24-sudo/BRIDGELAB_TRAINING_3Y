// Nested objects + destructuring
let user = { id: 101, profile: { username: "john", contact: { email: "xyz@example.com" } } };
let { profile: { username, contact: { email } } } = user;
console.log(username, email); // john xyz@example.com
