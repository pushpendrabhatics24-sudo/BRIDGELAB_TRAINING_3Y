// Q6. Progressive Discount System
const purchaseTotal = 6500; // Change this value to test other discount tiers.

let discountPercentage;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = purchaseTotal * discountPercentage / 100;
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: Rs. ${purchaseTotal.toFixed(2)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final price after discount: Rs. ${finalPrice}`);
