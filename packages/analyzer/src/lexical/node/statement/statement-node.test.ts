import {$MemberNode, $StatementNode2, IdNode, MemberNode, parseStatementNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('statement', () => {
  const text = newText('   abc.   def   ');
  const source = charStreamFromText(text);
  const node = parseStatementNode(source);

  expect(node).toBeTruthy();
  expect(is(node, $StatementNode2)).toBe(true);
  expect(node?.indentLevel).toBe(0);
  expect(node?.indent.stop.index).toBe(3);
  expect(is(node?.value, $MemberNode)).toBe(true);
  expect(((node?.value as MemberNode).instance as IdNode).text.toNativeString()).toBe('abc');
});
