import { none } from '../../../../lib/core';
import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillValueMetadata } from '../value-metadata-helper';
import { MemberValueMetadata } from './member-value-metadata';

test('member', () => {
  const code = '4.5.test2';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(MemberValueMetadata);
  expect(metadata.type().equals(tree.scope.core.string.type)).toBe(true);
});

test('without member name', () => {
  const code = '4.5.';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(MemberValueMetadata);
  expect(metadata.type()).toBe(none);
});
