import { anythingType, nothingType, somethingType } from './core';

test('something type', () => {
  expect(anythingType().name).toBe('Anything');

  expect(somethingType().name).toBe('Something');
  expect(somethingType().base?.name).toBe('Anything');

  expect(nothingType().name).toBe('Nothing');
  expect(nothingType().base?.name).toBe('Anything');
});
