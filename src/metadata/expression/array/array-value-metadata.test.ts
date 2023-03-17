import { parse } from '~/analysis/syntax/syntax-analysis';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { ArrayValueMetadata } from '~/metadata/expression/array/array-value-metadata';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { fillTypeMetadata } from '~/metadata/type/type-metadata-helper';

test('empty', () => {
  const code = '[]';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(ArrayValueMetadata);
  expect(metadata.type().equals(fillTypeMetadata(tree))).toBe(true);
});

test('123', () => {
  const code = '[1, 2, 3]';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(ArrayValueMetadata);
  expect(metadata.type().equals(fillTypeMetadata(tree))).toBe(true);
});
