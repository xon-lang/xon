import {
  $TypeDeclarationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  nonHiddenNodeGenerator,
  parseTypeDeclarationNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Nominal type declaration has no errors', () => {
  const text = newText('type A');
  const diagnostics = constStatementNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function constStatementNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseTypeDeclarationNode(0, nodes)!;
  const diagnosticContext = newDiagnosticContext();

  expect(node).toBeTruthy();
  expect(is(node, $TypeDeclarationNode())).toBe(true);

  node.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
