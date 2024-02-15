import { coreType } from './core';

test('something type', () => {
  expect(coreType('Anything').name).toBe('Anything');

  expect(coreType('Something').name).toBe('Something');
  expect(coreType('Something').base?.name).toBe('Anything');

  expect(coreType('Nothing').name).toBe('Nothing');
  expect(coreType('Nothing').base?.name).toBe('Anything');
});
