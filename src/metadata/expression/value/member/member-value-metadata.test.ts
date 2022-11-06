import { fillValueMetadata, MemberValueMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('member', () => {
  const code = '4.5.testNumberProp1';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(MemberValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});

test('without member name', () => {
  const code = '4.5.';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(MemberValueMetadata);
  expect(metadata.type()).toBe(null);
});
