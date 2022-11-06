import { fillValueMetadata, PrefixValueMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(PrefixValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});
