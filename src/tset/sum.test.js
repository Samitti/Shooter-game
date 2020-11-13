const sum = require('../Content/sum');

test('checks if the test is properly setup', () => {
  expect(sum(1, 2)).toBe(3);
});