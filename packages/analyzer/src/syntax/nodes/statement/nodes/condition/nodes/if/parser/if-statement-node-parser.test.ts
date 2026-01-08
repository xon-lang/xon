import {
  $IfStatementNode,
  $IntegerNode,
  AnalyzerDiagnostic,
  IfStatementNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseIfStatementNode,
} from '#analyzer';
import {$Model, ArrayData, Integer, is, newArrayData, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('If statement with errors', () => {
  const text = newText('if 7 17 37');
  const node = getIfStatementNode(text, 2);

  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).token.text.toNativeString()).toBe('7');
});

test('If statement without errors', () => {
  const text = newText('if 7');
  const node = getIfStatementNode(text, 0);

  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).token.text.toNativeString()).toBe('7');
});

function getIfStatementNode(text: Text, extraNodesCount: Integer): IfStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseIfStatementNode(context, nodes) as IfStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $IfStatementNode())).toBe(true);
  expect(context.extraNodes.count()).toBe(extraNodesCount);

  return node;
}

// Diagnostics
test('If statement has no errors', () => {
  const text = newText('if 1');
  const diagnostics = ifNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('If statement has no condition expression', () => {
  const text = newText('if');
  const diagnostics = ifNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Expect expression');
});

test('If statement has non condition expression', () => {
  const text = newText('if else');
  const diagnostics = ifNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Expect expression');
});

function ifNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseIfStatementNode(context, nodes) as IfStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $IfStatementNode())).toBe(true);

  return context.diagnostic.items;
}
