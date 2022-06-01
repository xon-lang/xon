import { CoreDeclarationScope } from './core-declaration-metadata';

test('none type', () => {
  const coreScope = new CoreDeclarationScope();
  expect(coreScope.none).toBeTruthy();
});
