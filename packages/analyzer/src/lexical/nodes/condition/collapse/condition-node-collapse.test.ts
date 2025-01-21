import {
  $IdNode,
  $MemberNode,
  $WhitespaceNode,
  IdNode,
  MemberNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
  WhitespaceNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('member with id instance', () => {
  const text = newText('  abc.   def   ');
  const node = parseMemberNode(text);

  expect(node).toBeTruthy();
  expect(is(node.instance, $IdNode)).toBe(true);
  expect((node.instance as IdNode).text.toNativeString()).toBe('abc');
  expect(node.instance.hiddenNodes).toBeFalsy();
  expect(is(node.id, $IdNode)).toBe(true);
  expect(node.id?.hiddenNodes?.count()).toBe(1);
  expect(is(node.id?.hiddenNodes?.first(), $WhitespaceNode)).toBe(true);
  expect((node.id?.hiddenNodes?.first() as WhitespaceNode).text.toNativeString()).toBe('   ');
  expect(node.id?.text.toNativeString()).toBe('def');
});

function parseMemberNode(text: Text): MemberNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first()?.value as MemberNode;

  expect(node).toBeTruthy();
  expect(is(node, $MemberNode)).toBe(true);

  return node;
}
