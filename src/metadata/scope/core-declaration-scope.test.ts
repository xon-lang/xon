import { CoreDeclarationScope } from './core-declaration-scope';

test('none type', () => {
  const coreScope = new CoreDeclarationScope();
  expect(coreScope.none).toBeTruthy();
});
