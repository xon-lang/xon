import {
  $IfStatementNode,
  IfStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  nonHiddenNodeGenerator,
  parseIfStatementNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

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
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseIfStatementNode(0, nodes) as IfStatementNode;
  const diagnosticContext = newDiagnosticContext();

  expect(node).toBeTruthy();
  expect(is(node, $IfStatementNode())).toBe(true);

  node.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
