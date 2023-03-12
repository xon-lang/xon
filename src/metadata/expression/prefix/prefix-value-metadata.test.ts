import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { PrefixValueMetadata } from '~/metadata/expression/value/prefix/prefix-value-metadata';
import { parseNode } from '~/parser/parser';

test('prefix', () => {
  const code = '+1';
  const tree = parseNode(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(PrefixValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});
