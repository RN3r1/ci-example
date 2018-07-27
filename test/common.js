var chai = require("chai");
var _ = require('lodash');

var addTwoNumbers = require('../addTwoNumbers');
var divideTwoNumbers = require('../divideTwoNumbers');
var multiplyTwoNumbers = require('../multiplyTwoNumbers');
var substractTwoNumbers = require('../substractTwoNumbers');

var options = {
    foo: "foo"
};

exports.addTwoNumbers = addTwoNumbers;
exports.divideTwoNumbers = divideTwoNumbers;
exports.multiplyTwoNumbers = multiplyTwoNumbers;
exports.substractTwoNumbers = substractTwoNumbers;
exports.options = options;
exports.chai = chai;
exports.assert = chai.assert;
exports._ = _;