const sum = require('./sum.js');

test('adds 1x + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
