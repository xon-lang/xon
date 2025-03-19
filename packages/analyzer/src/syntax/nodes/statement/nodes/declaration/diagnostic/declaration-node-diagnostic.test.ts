import {
  $DeclarationNode,
  DeclarationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  nonHiddenNodeGenerator,
  parseDeclarationNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Const statement has no errors', () => {
  const text = newText('a: 1 = 2');
  const diagnostics = constStatementNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Nominal type declaration has no errors', () => {
  const text = newText('type A');
  const diagnostics = constStatementNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function constStatementNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseDeclarationNode(0, nodes) as DeclarationNode;
  const diagnosticContext = newDiagnosticContext();

  expect(node).toBeTruthy();
  expect(is(node, $DeclarationNode())).toBe(true);

  node.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
