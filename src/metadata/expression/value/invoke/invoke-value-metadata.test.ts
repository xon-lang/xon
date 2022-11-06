import { fillValueMetadata, InvokeValueMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('lambda call', () => {
  const code = '(()=>1+1)()';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(InvokeValueMetadata);
  expect(metadata.type().is(tree.scope.core.number.type)).toBe(true);
  expect(metadata.type().is(tree.scope.core.string.type)).toBe(false);
});
