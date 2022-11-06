import {
  ArrayValueMetadata,
  fillTypeMetadata,
  fillValueMetadata,
  TestDeclarationScope,
} from '~/metadata';
import { parseExpression } from '~/util';

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
