import { fillValueMetadata, IdValueMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('none object', () => {
  const code = 'null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});

test('none model', () => {
  const code = 'null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});
