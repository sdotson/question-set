// question 1
// Write a program that reads in a mathematical expression from STDIN and outputs the
// result to STDOUT. The program must provide the results with floating point precision.

// Sample input:
// (8 / 3 * 5) + 10 - 6

// Sample output:
// 17.333333333333

const mathExpression = process.argv.slice(2)[0];

function evaluateMathExpressionWithPrecision(expression) {
  return Number(eval(expression).toFixed(12));
}

console.log(evaluateMathExpressionWithPrecision(mathExpression));
