const assert = require('chai').assert;
const isNaN = require('./../../src/lib/isNaN.js');

describe('isNaN lib', () => {
  it('should return true, while isNaN(NaN)', () => {
    assert.equal(isNaN(NaN), true);
  });

  it('should return type boolean', () => {
    assert.typeOf(isNaN(), 'boolean');
  });

  it('should return false, while isNaN(0)', () => {
    assert.equal(isNaN(0), false);
  });

  it('should return false, while isNaN(-0)', () => {
    assert.equal(isNaN(-0), false);
  });

  it('should return false, while isNaN("")', () => {
    assert.equal(isNaN(''), false);
  });

  it('should return false, while isNaN(null)', () => {
    assert.equal(isNaN(null), false);
  });

  it('should return false, while isNaN(undefined)', () => {
    assert.equal(isNaN(undefined), false);
  });

  it('should return false, while isNaN()', () => {
    assert.equal(isNaN(), false);
  });

  it('should return false, while isNaN(false)', () => {
    assert.equal(isNaN(false), false);
  });

  it('should return false, while isNaN(Infinity)', () => {
    assert.equal(isNaN(Infinity), false);
  });
});