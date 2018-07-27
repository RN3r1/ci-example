let add = require('./addTwoNumbers');
let substract = require('./substractTwoNumbers');
let divide = require('./divideTwoNumbers');
let multiply = require('./multiplyTwoNumbers');
let _ = require('lodash');

console.log('Inicia las pruebas...');

let numbers = _.range(1, 10);
numbers.map((number, index)=>{

    let addResult = add(number, index);
    let substractResult = substract(number, index);
    let divideResult = divide(number, index);
    let multiplyResult = multiply(number, index);

    console.log(`Prueba ${index}`);
    console.log(`${number}+${index}=${addResult}`);
    console.log(`${number}-${index}=${substractResult}`);
    console.log(`${number}*${index}=${multiplyResult}`);
    console.log(`${number}/${index}=${divideResult}`);
    console.log('*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*');
    console.log();

});