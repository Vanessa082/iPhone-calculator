const monitor = document.getElementById('calc-display')

function clr() {
  monitor.value = ''
}
clr()

function plusMinus() {
  const currentNum = parseFloat(monitor.value)
  monitor.value = -currentNum
}

function arithmeticOperation(a, b, sign) {
  switch (sign) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    case '%':
      return a % b
    case '.':
      return a.b
    case '-/+':
      return plusMinus()
    case 'AC':
      return clr()
    default:
      monitor.value = 'Error'
      break
  }
}

function show(val) {
  monitor.value += val
}
show('')

function mathOperation() {
  const equation = monitor.value
  const operator = equation.match(/[/*-+%]/)[0]
  const vals = equation.split(operator)
  console.log(vals, operator)
  const result = arithmeticOperation(+vals[0], +vals[1], operator)
  monitor.value = result
}
mathOperation()
