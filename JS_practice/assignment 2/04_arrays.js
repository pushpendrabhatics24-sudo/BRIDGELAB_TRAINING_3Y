let numbers = [10, 20, 30, 40, 50];
console.log("Initial:", numbers);
numbers.push(60);    console.log("push(60):", numbers);
numbers.unshift(0);  console.log("unshift(0):", numbers);
numbers.pop();       console.log("pop():", numbers);
numbers.shift();     console.log("shift():", numbers);
let combined = numbers.concat([70, 80, 90]); console.log("concat():", combined);
console.log("slice(2,5):", combined.slice(2, 5));
combined.splice(3, 2, 100, 110); console.log("splice(3,2,100,110):", combined);
console.log("Has 40?", combined.includes(40));
console.log("Index of 100:", combined.indexOf(100));
combined.sort((a, b) => a - b); console.log("sort():", combined);
combined.reverse();             console.log("reverse():", combined);
console.log("map(x*2):", combined.map(n => n * 2));
console.log("filter(>50):", combined.filter(n => n > 50));
console.log("reduce(sum):", combined.reduce((s, v) => s + v, 0));
combined.forEach(n => console.log(n));

// Creation / access
console.log(new Array(25, 30, 35), new Array(10));
const colors = ["Red", "Green", "Blue"];
console.log(colors[0], colors[2], colors[3]);
