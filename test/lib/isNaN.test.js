const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const isNaN = require('../../src/lib/isNaN.js');

describe('isNaN lib', () => {
  test('input is NaN', () => {
    assert.strictEqual(isNaN(NaN), true);
  });
  test('input is 0', () => {
    assert.strictEqual(isNaN(0), false);
  });
  test('input is -0', () => {
    assert.strictEqual(isNaN(-0), false);
  });
  test('input is ""', () => {
    assert.strictEqual(isNaN(''), false);
  });
  test('input is null', () => {
    assert.strictEqual(isNaN(null), false);
  });
  test('input is undefined', () => {
    assert.strictEqual(isNaN(undefined), false);
  });
  test('input is false', () => {
    assert.strictEqual(isNaN(false), false);
  });
  test('input is Infinity', () => {
    assert.strictEqual(isNaN(Infinity), false);
  });
  test('without input arguments', () => {
    assert.strictEqual(isNaN(), false);
  });
  test('typeof isNaN()', () => {
    assert.strictEqual(typeof isNaN(), 'boolean');
  });
});
