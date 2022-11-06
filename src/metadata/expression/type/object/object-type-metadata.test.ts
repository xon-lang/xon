import { fillTypeMetadata, ObjectTypeMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('object', () => {
  const code = '{a = 1, b = 2, c = 3}';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as ObjectTypeMetadata;

  expect(metadata).toBeInstanceOf(ObjectTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(3);
});

test('object is other one', () => {
  const code = '{a = 1, b = 2, c = 3}';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as ObjectTypeMetadata;

  const code2 = '{a = 1, b = 1, c = 1}';
  const tree2 = parseExpression(code2);
  tree2.scope.parent = new TestDeclarationScope();
  const metadata2 = fillTypeMetadata(tree2) as ObjectTypeMetadata;

  const code3 = '{x = 1, b = 2, c = 3}';
  const tree3 = parseExpression(code3);
  tree3.scope.parent = new TestDeclarationScope();
  const metadata3 = fillTypeMetadata(tree3) as ObjectTypeMetadata;

  expect(metadata).toBeInstanceOf(ObjectTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(3);
  expect(metadata.is(metadata2)).toBe(true);
  expect(metadata.is(metadata3)).toBe(false);
});
