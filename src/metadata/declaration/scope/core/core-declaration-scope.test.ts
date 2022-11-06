import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';

test('none type', () => {
  const coreScope = new TestDeclarationScope();
  expect(coreScope.core.none).toBeTruthy();
});
