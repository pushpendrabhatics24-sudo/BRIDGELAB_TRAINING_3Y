// 1. Object literal
const student = {
  name: "John", age: 21, course: "B.Tech", isActive: true,
  greet: function () { return `Hello, my name is ${this.name}`; }
};
delete student.course;
console.log(student.name);     // John
console.log(student.greet());  // Hello, my name is John
console.log(student.course);   // undefined (deleted)
