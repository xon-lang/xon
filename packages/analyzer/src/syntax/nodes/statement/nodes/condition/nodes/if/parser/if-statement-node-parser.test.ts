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
import {ArrayData, newArrayData, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('If statement with errors', () => {
  const text = newText('if 7 17 37');
  const node = getIfStatementNode(text);

  expect(node.errorNodes?.count()).toBe(2);
  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

test('If statement without errors', () => {
  const text = newText('if 7');
  const node = getIfStatementNode(text);

  expect(node.errorNodes?.count()).toBe(0);
  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

function getIfStatementNode(text: Text): IfStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseIfStatementNode(context, 0, nodes) as IfStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $IfStatementNode())).toBe(true);

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
  const node = parseIfStatementNode(context, 0, nodes) as IfStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $IfStatementNode())).toBe(true);

  return context.diagnostic.items;
}
