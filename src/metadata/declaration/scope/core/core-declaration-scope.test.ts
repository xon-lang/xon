import { TestDeclarationScope } from '~/metadata';

test('none type', () => {
  const coreScope = new TestDeclarationScope();
  expect(coreScope.core.none).toBeTruthy();
});
