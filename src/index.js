const numeral = require('numeral');
require('./index.css');
const courseValue=numeral(10).format('$00,00');
console.log('I would not pay ${courseValue} for this course!');