// Q3. Monthly Expense Tracker
const expenses = {
    food: 5000,
    travel: 2000,
    rent: 10000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

// Add all category expenses.
for (const amount of Object.values(expenses)) {
    total += amount;
}

const average = total / Object.keys(expenses).length;
const taxRate = 0.10;
let finalAmount = total;
finalAmount += total * taxRate; // Add 10% tax using an assignment operator.

console.log(`Total expenses: Rs. ${total.toFixed(2)}`);
console.log(`Average expense: Rs. ${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: Rs. ${finalAmount.toFixed(2)}`);
