import { coreDeclarationSemantic } from './core';

test('something type', () => {
  expect(coreDeclarationSemantic('Anything').name).toBe('Anything');

  expect(coreDeclarationSemantic('Something').name).toBe('Something');
  expect(coreDeclarationSemantic('Something').base?.declaration.name).toBe('Anything');

  expect(coreDeclarationSemantic('Nothing').name).toBe('Nothing');
  expect(coreDeclarationSemantic('Nothing').base?.declaration.name).toBe('Anything');
});
