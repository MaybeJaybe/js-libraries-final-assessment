/* eslint-disable no-undef */
const { ordinalSuffix } = require('./index.js');

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

test('test numbers', () => {
  expect(ordinalSuffix(1)).toBe('1st');
  expect(ordinalSuffix(2)).toBe('2nd');
  expect(ordinalSuffix(3)).toBe('3rd');
  expect(ordinalSuffix(4)).toBe('4th');
  expect(ordinalSuffix(18)).toBe('18th');
  expect(ordinalSuffix(82)).toBe('82nd');
});
