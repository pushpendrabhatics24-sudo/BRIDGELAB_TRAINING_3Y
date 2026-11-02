// 4. ES6 class
class User {
  constructor(name, email) { this.name = name; this.email = email; }
  display() { return `User: ${this.name}, Email: ${this.email}`; }
}
const user1 = new User("John", "xyz@example.com");
console.log(user1.display()); // User: John, Email: xyz@example.com
