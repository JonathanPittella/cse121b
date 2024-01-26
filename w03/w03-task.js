// w03-task.js

/* FUNCTIONS */

// Function Definition - Add Numbers
function addNumbers() {
    let num1 = parseFloat(document.getElementById("add1").value);
    let num2 = parseFloat(document.getElementById("add2").value);
    let sum = num1 + num2;
    document.getElementById("sum").value = sum;
}

// Function Expression - Subtract Numbers
const subtractNumbers = function() {
    let num1 = parseFloat(document.getElementById("subtract1").value);
    let num2 = parseFloat(document.getElementById("subtract2").value);
    let difference = num1 - num2;
    document.getElementById("difference").value = difference;
};

// Arrow Function - Multiply Numbers
const multiplyNumbers = () => {
    let num1 = parseFloat(document.getElementById("factor1").value);
    let num2 = parseFloat(document.getElementById("factor2").value);
    let product = num1 * num2;
    document.getElementById("product").value = product;
};

// Open Function Use - Divide Numbers
const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    if (divisor !== 0) {
        let quotient = dividend / divisor;
        document.getElementById("quotient").value = quotient.toFixed(2);
    } else {
        document.getElementById("quotient").value = "Error: Division by zero";
    }
};

// Event listeners for function buttons
document.getElementById("addNumbers").addEventListener("click", addNumbers);
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

// Function to calculate total due
function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let isMember = document.getElementById("member").checked;
    if (isMember) {
        subtotal *= 0.8; // Applying 20% discount for members
    }
    document.getElementById("total").textContent = `$ ${subtotal.toFixed(2)}`;
}

// Event listener for total button
document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */

// Function to generate arrays and perform operations
function generateArrays() {
    // Getting source array
    let sourceArray = document.getElementById("array").textContent.split(',').map(Number);

    // Outputting source array
    document.getElementById("array").textContent = sourceArray.join(', ');

    // Filtering odd and even numbers
    let oddNumbers = sourceArray.filter(num => num % 2 !== 0);
    let evenNumbers = sourceArray.filter(num => num % 2 === 0);

    // Outputting odd and even numbers
    document.getElementById("odds").textContent = oddNumbers.join(', ');
    document.getElementById("evens").textContent = evenNumbers.join(', ');

    // Calculating sum of original array
    let sumOfArray = sourceArray.reduce((acc, curr) => acc + curr, 0);
    document.getElementById("sumOfArray").textContent = sumOfArray;

    // Multiplying each element of source array by 2
    let multipliedArray = sourceArray.map(num => num * 2);

    // Outputting multiplied array
    document.getElementById("multiplied").textContent = multipliedArray.join(', ');

    // Calculating sum of multiplied array
    let sumOfMultiplied = multipliedArray.reduce((acc, curr) => acc + curr, 0);
    document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
}

// Calling the function to generate arrays on load
window.onload = generateArrays;
