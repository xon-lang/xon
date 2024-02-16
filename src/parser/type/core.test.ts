import { coreValueMeta } from './core';

test('something type', () => {
  expect(coreValueMeta('Anything').declaration.name).toBe('Anything');

  expect(coreValueMeta('Something').declaration.name).toBe('Something');
  expect(coreValueMeta('Something').declaration.restriction?.declaration.name).toBe('Anything');

  expect(coreValueMeta('Nothing').declaration.name).toBe('Nothing');
  expect(coreValueMeta('Nothing').declaration.restriction?.declaration.name).toBe('Anything');
});
