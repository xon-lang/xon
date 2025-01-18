import {
  $IdNode,
  $WhitespaceNode,
  collapseMemberNode,
  IdNode,
  MemberNode,
  newAnalyzerContext,
  parseExpressionNodes,
  WhitespaceNode,
} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('member with id instance', () => {
  const text = newText('  abc.   def   ');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {nodes} = parseExpressionNodes(context);
  const node = collapseMemberNode(nodes)?.node as MemberNode;

  expect(node).toBeTruthy();
  expect(is(node.instance, $IdNode)).toBe(true);
  expect((node.instance as IdNode).text.toNativeString()).toBe('abc');
  expect(node.instance.hiddenNodes).toBeFalsy();
  expect(node.hiddenNodes?.count()).toBe(1);
  expect(is(node.id, $IdNode)).toBe(true);
  expect(node.id?.hiddenNodes?.count()).toBe(1);
  expect(is(node.id?.hiddenNodes?.first(), $WhitespaceNode)).toBe(true);
  expect((node.id?.hiddenNodes?.first() as WhitespaceNode).text.toNativeString()).toBe('   ');
  expect(node.id?.text.toNativeString()).toBe('def');
});
