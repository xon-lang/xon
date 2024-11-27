import '#/core';

test('array min number', () => {
  const arr = [0, 1, 2, -3, 5, 7, 3];

  expect(arr.min((x) => x)).toBe(-3);
});

test('array min object', () => {
  const arr = [{n: 1}, {n: 0}, {n: 3}];

  expect(arr.min((x) => x.n)?.n).toBe(0);
});

test('array max number', () => {
  const arr = [0, 1, 2, -3, 5, 7, 3];

  expect(arr.max((x) => x)).toBe(7);
});

test('array max object', () => {
  const arr = [{n: 1}, {n: 0}, {n: 3}];

  expect(arr.max((x) => x.n)?.n).toBe(3);
});

test('array minMax number', () => {
  const arr = [{n: 1}, {n: 0}, {n: 3}];

  expect(arr.minMax((x) => x.n)?.min.n).toBe(0);
  expect(arr.minMax((x) => x.n)?.max.n).toBe(3);
});
