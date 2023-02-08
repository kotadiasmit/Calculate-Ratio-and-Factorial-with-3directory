let factorialOfNumber = require("../factorial/index.js");
let ratioOfTwoNumbers = require("../ratio/index.js");
//console.log(ratioOfTwoNumbers(4, 2));
let ratioAndFactorial = (n1, n2, n3) => {
  let factorial = factorialOfNumber(n3);
  let ratio = ratioOfTwoNumbers(n1, n2);
  return (object = {
    ratio: ratio,
    factorial: factorial,
  });
};
console.log(ratioAndFactorial(4, 2, 3));
module.exports = ratioAndFactorial;
