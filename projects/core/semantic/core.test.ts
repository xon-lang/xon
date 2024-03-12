import {coreDeclarationSemantic} from './core';
import {IdTypeSemantic} from './type/id/id-type-semantic';

test('something type', () => {
  expect(coreDeclarationSemantic('Anything').name).toBe('Anything');

  expect(coreDeclarationSemantic('Something').name).toBe('Something');
  expect((coreDeclarationSemantic('Something').type as IdTypeSemantic)?.declaration?.name).toBe('Anything');

  expect(coreDeclarationSemantic('Nothing').name).toBe('Nothing');
  expect((coreDeclarationSemantic('Nothing').type as IdTypeSemantic)?.declaration?.name).toBe('Anything');
});
