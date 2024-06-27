const assert = require('assert');
const { add } = require('./stringCalcMain');

describe('StringCalculator', () => {
    it('should return 0 for empty string', () => { //1
      assert.strictEqual(add(""), 0);
    });
  
    it('should return the number itself for a single number', () => { //2
      assert.strictEqual(add("1"), 1);
    });
  
    it('should return the sum for two numbers', () => { //3
      assert.strictEqual(add("1,2"), 3);
    });
  
    it('should handle new lines between numbers', () => { //4
      assert.strictEqual(add("1\n2,3"), 6);
    });

    it('should support different delimiters', () => { //5
      assert.strictEqual(add("//;\n1;2"), 3);
    });
  
    it('should handle multiple delimiters of any length', () => { //6
      assert.strictEqual(add("//[***]\n1***2***3"), 6);
    });
  
    it('should handle multiple delimiters with different lengths', () => { //7
      assert.strictEqual(add("//[*][%]\n1*2%3"), 6);
      assert.strictEqual(add("//[***][%%%]\n1***2%%%3"), 6);
    });
  
    it('should throw an exception for negative numbers', () => { //8
      assert.throws(() => {
        add("1,-2,3");
      }, /negatives not allowed: -2/);
    });
  
    it('should ignore numbers greater than 1000', () => { //9
      assert.strictEqual(add("2,1001"), 2);
    });
  
    it('should throw an exception for invalid input with delimiter followed by newline', () => { //10
      assert.throws(() => {
        add("1,\n2,3");
      }, /Invalid input: delimiter followed by newline or newline followed by delimiter/);
    });
  
    it('should throw an exception for invalid input with newline followed by delimiter', () => { //11
      assert.throws(() => {
        add("1\n,2,3");
      }, /Invalid input: delimiter followed by newline or newline followed by delimiter/);
    });
});  