const assert = require('assert');
const { add } = require('./stringCalcMain');

describe('StringCalculator', () => {
    it('should return 0 for empty string', () => {
      assert.strictEqual(add(""), 0);
    });
  
    it('should return the number itself for a single number', () => {
      assert.strictEqual(add("1"), 1);
    });
  
    it('should return the sum for two numbers', () => {
      assert.strictEqual(add("1,2"), 3);
    });
  
    it('should handle new lines between numbers', () => {
      assert.strictEqual(add("1\n2,3"), 6);
    });
});  