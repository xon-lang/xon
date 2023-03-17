import { parse } from '~/analysis/parser/parser';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { InvokeValueMetadata } from '~/metadata/expression/value/invoke/invoke-value-metadata';

test('lambda call', () => {
  const code = '(()=>1+1)()';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(InvokeValueMetadata);
  expect(metadata.type().is(tree.scope.core.number.type)).toBe(true);
  expect(metadata.type().is(tree.scope.core.string.type)).toBe(false);
});
