// Create a result div element
const resultDiv = document.createElement("div");
resultDiv.id = "result";

// Append the result div to a wrapper element (assuming you have a "wrapper" element)
document.getElementById('wrapper').appendChild(resultDiv);

// Get the input element where the user enters the expression
const inputElement = document.getElementById('calc');

// Add a 'keypress' event listener to the input field
inputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        exeMath();
    }
});

function exeMath() {
    const mathVal = inputElement.value;
    // console.log(mathVal);

    // Split the expression into operands and operator
    const operands = mathVal.split(/[\+\-\*\/]/);
    // console.log(operands);

    if (operands.length !== 2) {
        document.getElementById('result').innerHTML = "Invalid input. Please enter a valid expression."
        return;
    }

    const operand1 = parseFloat(operands[0]);
    const operand2 = parseFloat(operands[1]);

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById('result').innerHTML = "Invalid input. Please enter valid numbers."
        return;
    }

    const operator = mathVal.match(/[\+\-\*\/]/);

    if (!operator) {
        document.getElementById('result').innerHTML = "Invalid input. Please enter a valid operator (+, -, *, or /)."
        return;
    }

    let result;

    switch (operator[0]) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                document.getElementById('result').innerHTML = 'Division by zero is not allowed.'
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            document.getElementById('result').innerHTML = "Invalid operator. Please use +, -, *, or /."
            return;
    }

    // Set the result in the result div
    document.getElementById('result').innerHTML = `Result: ${Math.round(result)}`;
}