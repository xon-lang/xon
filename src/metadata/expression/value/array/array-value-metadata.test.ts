import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '@/metadata/expression/type/type-metadata-helper';
import { ArrayValueMetadata } from '@/metadata/expression/value/array/array-value-metadata';
import { fillValueMetadata } from '@/metadata/expression/value/value-metadata-helper';
import { parseExpression } from '@/util/parse';

test('empty', () => {
  const code = '[]';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(ArrayValueMetadata);
  expect(metadata.type().equals(fillTypeMetadata(tree))).toBe(true);
});

test('123', () => {
  const code = '[1, 2, 3]';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(ArrayValueMetadata);
  expect(metadata.type().equals(fillTypeMetadata(tree))).toBe(true);
});
