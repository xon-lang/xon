import {coreDeclarationSemantic} from './core';
import {DeclarationTypeSemantic} from './type/declaration/declaration-type-semantic';

test('something type', () => {
  expect(coreDeclarationSemantic('Anything')?.name).toBe('Anything');

  expect(coreDeclarationSemantic('Something')?.name).toBe('Something');
  expect((coreDeclarationSemantic('Something')?.type as DeclarationTypeSemantic)?.declaration?.name).toBe('Anything');

  expect(coreDeclarationSemantic('Nothing')?.name).toBe('Nothing');
  expect((coreDeclarationSemantic('Nothing')?.type as DeclarationTypeSemantic)?.declaration?.name).toBe('Anything');
});
