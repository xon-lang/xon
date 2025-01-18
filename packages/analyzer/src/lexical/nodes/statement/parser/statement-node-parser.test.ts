import {
  $MemberNode,
  $StatementNode2,
  IdNode,
  MemberNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatementNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('statement', () => {
  const text = newText('   abc.   def   ');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStatementNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $StatementNode2)).toBe(true);
  expect(node?.indentLevel).toBe(0);
  expect(node?.indent.stop.index).toBe(3);
  expect(is(node?.value, $MemberNode)).toBe(true);
  expect(((node?.value as MemberNode).instance as IdNode).text.toNativeString()).toBe('abc');
});
