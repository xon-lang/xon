import {
  $ConditionStatementNode,
  ConditionStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptConditionStatement} from '#translator';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('If statement', () => {
  const text = newText('if 1\n  2\n  3');
  const node = getConditionStatementNode(text);
  const translated = translateTypescriptConditionStatement(node);

  expect(translated.toNativeString()).toBe('if (1) {\n  2;\n  3;\n}');
});

function getConditionStatementNode(text: Text): ConditionStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStatements(context).statements.at(0) as ConditionStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ConditionStatementNode())).toBe(true);

  return node;
}
