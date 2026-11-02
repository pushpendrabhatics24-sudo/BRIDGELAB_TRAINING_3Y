# JavaScript Assignment 1 — Solutions

This folder contains separate JavaScript solutions for all 10 questions in the supplied assignment.

## How to run
1. Install Node.js, or open a browser's Developer Tools → Console.
2. Run one file at a time with Node.js, for example:
   `node Q1_Personalized_Login_Greeting.js`
3. Change the sample values near the top of each file to test other cases.

## Notes
- Q2 explicitly handles JavaScript's `typeof null === "object"` behavior and uses `Array.isArray()` for arrays.
- Q4 validates that exactly five marks are supplied and that each mark is between 0 and 100.
- Q7 uses a test guess as requested; the secret number is printed to make testing easy.
- Q9 rounds division answers to two decimal places.
- Q10 follows the assignment's age bands: citizen and age 18–20 prints “Eligible to vote only”; citizen and age 21 or above prints “Eligible for all services.”
