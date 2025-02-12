import {
  $ElseStatementNode,
  ElseStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Else statement with errors', () => {
  const text = newText('else 7 17 37');
  const node = parseElseStatementNode(text);

  expect(node.errorNodes?.count()).toBe(3);
});

test('Else statement without errors', () => {
  const text = newText('else');
  const node = parseElseStatementNode(text);

  expect(node.errorNodes?.count()).toBe(0);
});

function parseElseStatementNode(text: Text): ElseStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first() as ElseStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ElseStatementNode)).toBe(true);

  return node;
}
