// Q8. Employee Salary Projection
const currentSalary = 40000;
const annualIncrementRate = 10; // percentage
let salary = currentSalary;

const yearlyProjection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * annualIncrementRate / 100;
    salary = Math.round(salary);

    yearlyProjection.push({
        Year: year,
        Salary: `Rs. ${salary.toLocaleString("en-IN")}`
    });
}

console.table(yearlyProjection);
