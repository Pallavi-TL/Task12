console.log("Compound Interest Calculation for static values:");

console.log("The compound interest after 3 years is: 50000")

// Given values
const principal = 50000;
const rate = 5;
const times = 4;
const years = 3;

// Calculate compound interest

const amount = principal * Math.pow((1 + (rate / (times * 100))), times * years);
const compoundInterest = amount - principal;    
console.log(`Amount: $${amount.toFixed(2)}`);
console.log(`Compound Interest: $${compoundInterest.toFixed(2)}`);
