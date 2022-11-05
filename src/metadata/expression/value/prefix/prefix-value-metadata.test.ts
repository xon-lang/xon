import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { PrefixValueMetadata } from '@/metadata/expression/value/prefix/prefix-value-metadata';
import { fillValueMetadata } from '@/metadata/expression/value/value-metadata-helper';
import { parseExpression } from '@/util/parse';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(PrefixValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});
