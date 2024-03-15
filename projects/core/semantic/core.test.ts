import {coreDeclarationManager} from './core';
import {DeclarationKind} from './declaration-manager';
import {TypeDeclarationSemantic} from './declaration/type/type-declaration-semantic';

test('something type', () => {
  const declarationManager = coreDeclarationManager();

  expect(declarationManager?.single(DeclarationKind.TYPE, 'Anything')?.name).toBe('Anything');

  expect(declarationManager?.single(DeclarationKind.TYPE, 'Something')?.name).toBe('Something');
  expect((declarationManager?.single(DeclarationKind.TYPE, 'Something') as TypeDeclarationSemantic)?.baseType).toBe(
    'Anything',
  );

  expect(declarationManager?.single(DeclarationKind.TYPE, 'Nothing')?.name).toBe('Nothing');
  expect((declarationManager?.single(DeclarationKind.TYPE, 'Nothing') as TypeDeclarationSemantic)?.baseType).toBe(
    'Anything',
  );
});
