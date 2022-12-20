import { CoreDeclarationScope } from '~/metadata/declaration/scope/core/core-declaration-scope';

test('none type', () => {
  const coreScope = new CoreDeclarationScope();
  expect(coreScope.integer).toBeTruthy();
});
