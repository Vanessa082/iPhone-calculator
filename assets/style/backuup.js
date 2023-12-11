// let currentNumber = "0";
// let storedNumber = null;
// let selectedOperator = null;
// let shouldResetDisplay = false;

// // Function to update the display
// function updateDisplay() {
//   display.value = currentNumber;
// }

// // Function to append a digit to the current number
// function appendNumber(number) {
//   if (currentNumber === "0" || shouldResetDisplay) {
//     currentNumber = number;
//     shouldResetDisplay = false;
//   } else {
//     currentNumber += number;
//   }
//   updateDisplay();
// }

// // Function to clear the display and reset variables
// function clearAll() {
//   currentNumber = "0";
//   storedNumber = null;
//   selectedOperator = null;
//   shouldResetDisplay = false;
//   updateDisplay();
// }

// // Function to perform the selected operation
// function performOperation(operator) {
//   if (selectedOperator !== null && !shouldResetDisplay) {
//     calculate();
//   }

//   storedNumber = currentNumber;
//   selectedOperator = operator;
//   shouldResetDisplay = true;
// }

// // Function to perform the calculation
// function calculate() {
//   if (selectedOperator === "/") {
//     currentNumber = parseFloat(storedNumber) / parseFloat(currentNumber);
//   } else if (selectedOperator === "*") {
//     currentNumber = parseFloat(storedNumber) * parseFloat(currentNumber);
//   } else if (selectedOperator === "+") {
//     currentNumber = parseFloat(storedNumber) + parseFloat(currentNumber);
//   } else if (selectedOperator === "-") {
//     currentNumber = parseFloat(storedNumber) - parseFloat(currentNumber);
//   }

//   selectedOperator = null;
//   storedNumber = null;
//   updateDisplay();
// }

// // Event listeners for digit buttons
// document.querySelectorAll(".darkbg").forEach(button => {
//   button.addEventListener("click", () => {
//     appendNumber(button.innerText);
//   });
// });

// // Event listener for clear button
// document.querySelector(".greybg").addEventListener("click", () => {
//   clearAll();
// });

// // Event listeners for operator buttons
// document.querySelectorAll(".oranbg").forEach(button => {
//   button.addEventListener("click", () => {
//     performOperation(button.innerText);
//   });
// });

// // Event listener for equal button
// document.querySelector("#zero").addEventListener("click", () => {
//   calculate();
// });