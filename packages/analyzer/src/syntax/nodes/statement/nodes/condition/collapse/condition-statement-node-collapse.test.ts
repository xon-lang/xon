import {
  $ConditionStatementNode,
  $IntegerNode,
  ConditionStatementNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Condition without else', () => {
  const text = newText('if 0\n  1\n  2');
  const node = getConditionStatementNode(text);

  expect(node.ifStatement.keyword.text.toNativeString()).toBe('if');
  expect(node.elseStatement).toBeFalsy();
  expect(is(node.ifStatement.expression, $IntegerNode())).toBeTruthy();
  expect((node.ifStatement.expression as IntegerNode).contentNode.text.toNativeString()).toBe('0');
  expect(node.ifStatement.body?.count()).toBe(2);
});

test('Condition with else', () => {
  const text = newText('if 0\n  1\n  2\nelse\n 3\n 4\n 5');
  const node = getConditionStatementNode(text);

  expect(node.ifStatement.keyword.text.toNativeString()).toBe('if');
  expect(node.elseStatement?.keyword.text.toNativeString()).toBe('else');
  expect(is(node.ifStatement.expression, $IntegerNode())).toBeTruthy();
  expect((node.ifStatement.expression as IntegerNode).contentNode.text.toNativeString()).toBe('0');
  expect(node.ifStatement.body?.count()).toBe(2);
  expect(node.elseStatement?.body?.count()).toBe(3);
});

function getConditionStatementNode(text: Text): ConditionStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStatements(context).statements.at(0) as ConditionStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ConditionStatementNode())).toBe(true);

  return node;
}
