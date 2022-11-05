import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { InvokeValueMetadata } from '@/metadata/expression/value/invoke/invoke-value-metadata';
import { fillValueMetadata } from '@/metadata/expression/value/value-metadata-helper';
import { parseExpression } from '@/util/parse';

test('lambda call', () => {
  const code = '(()=>1+1)()';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(InvokeValueMetadata);
  expect(metadata.type().is(tree.scope.core.number.type)).toBe(true);
  expect(metadata.type().is(tree.scope.core.string.type)).toBe(false);
});
