import { parse } from '~/analysis/parser/parser';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { InfixValueMetadata } from '~/metadata/expression/value/infix/infix-value-metadata';

test('integer plus integer', () => {
  const code = '1 + 1';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(InfixValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});
