let text = "Price: 200, Discount: 50, Total: 150";
let numbers = text.match(/\d+/g);
console.log(numbers); // [ '200', '50', '150' ]
