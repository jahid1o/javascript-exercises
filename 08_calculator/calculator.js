const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = array => array.reduce((total, item) => total += item, 0);

const multiply = array => array.reduce((total, item) => total *= item, 1);

const power = (a, b) => a ** b;

const factorial = function(number) {
  let fact = 1
	for (let i = number; i > 0; i--) {
    fact *= i
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
