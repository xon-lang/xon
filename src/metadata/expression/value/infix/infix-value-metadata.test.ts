import { fillValueMetadata, InfixValueMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('integer plus integer', () => {
  const code = '1 + 1';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(InfixValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});
