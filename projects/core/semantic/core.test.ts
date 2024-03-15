import {coreDeclarationManager} from './core';
import {DeclarationKind} from './declaration-manager';
import {TypeDeclarationSemantic} from './declaration/type/type-declaration-semantic';
import {DeclarationTypeSemantic} from './type/declaration/declaration-type-semantic';

test('something type', () => {
  const declarationManager = coreDeclarationManager();

  expect(declarationManager?.single(DeclarationKind.TYPE, 'Anything')?.name).toBe('Anything');

  const somethingDeclaration = declarationManager?.single(DeclarationKind.TYPE, 'Something') as TypeDeclarationSemantic;
  expect(somethingDeclaration?.name).toBe('Something');
  expect((somethingDeclaration?.baseType as DeclarationTypeSemantic).declaration.name).toBe('Anything');

  const nothingDeclaration = declarationManager?.single(DeclarationKind.TYPE, 'Nothing') as TypeDeclarationSemantic;
  expect(nothingDeclaration?.name).toBe('Nothing');
  expect((nothingDeclaration?.baseType as DeclarationTypeSemantic).declaration.name).toBe('Anything');
});
