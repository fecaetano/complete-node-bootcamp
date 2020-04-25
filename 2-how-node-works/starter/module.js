// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Calculator1 = require('./test-module-1');
const calc = new Calculator1();
console.log(calc.add(2, 5));

// exports
// const Calculator2 = require("./test-module-2");
const { add, multiply, divide } = require('./test-module-2');
console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(divide(10, 5));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
