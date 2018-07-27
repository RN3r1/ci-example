var common = require('../common');
var expect = common.chai.expect;
var _ = common._;
var addTwoNumbers = common.addTwoNumbers;


it('should add two numbers', function () {
    
    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x + y;

    // 2. ACT
    var sum2 = addTwoNumbers(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });

  it('should work with expansion', function () {
    
    var x = 5;
    var y = 1;
    var z = 4;
    var sum1 = x + y + z;

    var sum2 = addTwoNumbers(x, (y+z));

    expect(sum2).to.be.equal(sum1);

  });
  it('should work with lots of numbers', function () {
    
    let numbers1 = _.range(100);
    numbers1.map((number, index)=>{

        let litSum = number+index;
        let calculatedSum = addTwoNumbers(number, index);
        expect(litSum).to.be.equal(calculatedSum);

    });

  });