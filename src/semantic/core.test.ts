import { coreValueSemantic } from './core';

test('something type', () => {
  expect(coreValueSemantic('Anything').declaration.name).toBe('Anything');

  expect(coreValueSemantic('Something').declaration.name).toBe('Something');
  expect(coreValueSemantic('Something').declaration.restriction?.declaration.name).toBe('Anything');

  expect(coreValueSemantic('Nothing').declaration.name).toBe('Nothing');
  expect(coreValueSemantic('Nothing').declaration.restriction?.declaration.name).toBe('Anything');
});
