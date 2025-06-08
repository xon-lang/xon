import {
  $ElseStatementNode,
  ElseStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseElseStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Else statement with errors', () => {
  const text = newText('else 7 17 37');
  const node = getElseStatementNode(text);

  expect(node.errorNodes?.count()).toBe(3);
});

test('Else statement without errors', () => {
  const text = newText('else');
  const node = getElseStatementNode(text);

  expect(node.errorNodes?.count()).toBe(0);
});

function getElseStatementNode(text: Text): ElseStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseElseStatementNode(context, 0, nodes) as ElseStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ElseStatementNode())).toBe(true);

  return node;
}
