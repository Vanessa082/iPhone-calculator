const display = document.getElementById('calc-display')
const buttons = document.querySelectorAll('[data-number], [data-operation], [data-all-clear], [data-equals]')

let firstOperand = ''
let operator = ''
let secondOperand = ''

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const value = this.innerText

    if (value === 'AC') {
      display.value = ''
      firstOperand = ''
      operator = ''
      secondOperand = ''
    } else if (value === '+/-') {
      display.value = (parseFloat(display.value) * -1).toString()
    } else if (value === '%') {
      display.value = (parseFloat(display.value) / 100).toString()
    } else if (value === '=') {
      if (firstOperand && operator && secondOperand) {
        const result = calculate(parseFloat(firstOperand), operator, parseFloat(secondOperand))
        display.value = result.toString()
        firstOperand = result.toString()
        operator = ''
        secondOperand = ''
      }
    } else if (Number.isInteger(parseInt(value))) {
      if (!operator) {
        firstOperand += value
      } else {
        secondOperand += value
      }
      display.value = (operator ? secondOperand : firstOperand)
    } else {
      operator = value
    }
  })
})

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return parseFloat(num1 + num2)
    case '-':
      return parseFloat(num1 - num2)
    case '×':
      return parseFloat(num1 * num2)
    case '÷'::
      return parseFloat(num1 / num2)
    default:
      return 'Error'
  }
}