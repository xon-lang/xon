import {memoize} from '#common';
import {expect, test} from 'vitest';

test('Memoize sum', () => {
  let counter = 0;

  const sumFn = (a: number, b: number) => {
    counter += 1;

    return a + b;
  };

  const sum = memoize(sumFn);

  expect(sum(1, 2)).toBe(3);
  expect(counter).toBe(1);

  expect(sum(3, 4)).toBe(7);
  expect(counter).toBe(2);
});
