import {
  $IdNode,
  $MemberNode,
  $WhitespaceNode,
  IdNode,
  IfStatementNode,
  MemberNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
  WhitespaceNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('If statement with errors', () => {
  const text = newText('if 1 2 3');
  const node = parseIfStatementNode(text);

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

function parseIfStatementNode(text: Text): IfStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first()?.value as IfStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $MemberNode)).toBe(true);

  return node;
}
