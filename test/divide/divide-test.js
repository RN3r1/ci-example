var common = require('../common');
var expect = common.chai.expect;
var _ = common._;
var divideTwoNumbers = common.divideTwoNumbers;


it('should divide two numbers', function () {
    
    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x / y;

    // 2. ACT
    var sum2 = divideTwoNumbers(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });

  it('should work with lots of numbers', function () {
    
    let numbers1 = _.range(1, 100);
    numbers1.map((number, index)=>{

        let litSum = number/index;
        let calculatedSum = divideTwoNumbers(number, index);
        expect(litSum).to.be.equal(calculatedSum);

    });

  });