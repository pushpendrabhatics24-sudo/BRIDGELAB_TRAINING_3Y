// Q4. Academic Performance Evaluator
// Enter marks for five subjects here (each subject is out of 100).
const marks = [88, 92, 76, 81, 90];

if (marks.length !== 5 || marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    console.log("Invalid input: enter exactly five marks between 0 and 100.");
} else {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
    const percentage = (total / (marks.length * 100)) * 100;

    let result;

    if (marks.some(mark => mark < 35)) {
        result = "Detained";
    } else if (percentage >= 85) {
        result = "Promoted with Distinction";
    } else if (percentage >= 50) {
        result = "Promoted";
    } else {
        result = "Detained";
    }

    console.log(`Average marks: ${average.toFixed(2)}`);
    console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
    console.log(`Result: ${result}`);
}
