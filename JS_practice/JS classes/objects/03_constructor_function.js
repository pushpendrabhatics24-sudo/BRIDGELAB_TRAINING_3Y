// 3. Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () { return `Hi, I'm ${this.name}`; };
}
const person1 = new Person("John", 21);
const person2 = new Person("Riya", 22);
console.log(person1.greet()); // Hi, I'm John
console.log(person2.greet()); // Hi, I'm Riya
