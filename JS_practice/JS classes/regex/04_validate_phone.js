let phone = "9876543210";
let pattern = /^[6-9]\d{9}$/;
console.log(pattern.test(phone));        // true (starts 6-9, 10 digits)
console.log(pattern.test("1234567890")); // false
