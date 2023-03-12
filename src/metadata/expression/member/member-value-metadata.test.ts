import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { MemberValueMetadata } from '~/metadata/expression/value/member/member-value-metadata';
import { parseExpression } from '~/parser/parser';

test('member', () => {
  const code = '4.5.testNumberProp1';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(MemberValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});

test('without member name', () => {
  const code = '4.5.';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(MemberValueMetadata);
  expect(metadata.type()).toBe(null);
});
