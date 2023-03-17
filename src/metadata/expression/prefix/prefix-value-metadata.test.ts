import { parse } from '~/analysis/syntax/syntax-analysis';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { PrefixValueMetadata } from '~/metadata/expression/value/prefix/prefix-value-metadata';

test('prefix', () => {
  const code = '+1';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(PrefixValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});
