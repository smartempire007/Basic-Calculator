// take the operator input
const operator = window.prompt(
    "Enter operator (make a choice [ + ], [ - ], [ * ], [ / ]): "
);


// take the operand input

const num1 = parseFloat(window.prompt("Enter your first number: "));

const num2 = parseFloat(window.prompt("Enter your second number: "));

let result;


if (operator == "+") {
    result = num1 + num2;
} 
else if (operator == "-") {
    result = num1 - num2;
} 
else if (operator == "*") {
    result = num1 * num2;
} 
else {
    result = num1 / num2;
}

// display the result of the calculator

document.write(`${num1} ${operator} ${num2} = ${result}`);