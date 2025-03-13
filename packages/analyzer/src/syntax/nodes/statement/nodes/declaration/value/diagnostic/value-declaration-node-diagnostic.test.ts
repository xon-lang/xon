import {
  $ValueDeclarationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  nonHiddenNodeGenerator,
  parseParameterDeclarationNode,
  ValueDeclarationNode,
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

function constStatementNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseParameterDeclarationNode(0, nodes) as ValueDeclarationNode;
  const diagnosticContext = newDiagnosticContext();

  expect(node).toBeTruthy();
  expect(is(node, $ValueDeclarationNode())).toBe(true);

  node.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
