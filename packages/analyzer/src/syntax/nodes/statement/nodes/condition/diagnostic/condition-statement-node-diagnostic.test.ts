import {
  $ConditionStatementNode,
  ConditionStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  parseStatements,
} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('No errors', () => {
  const text = newText('if 1\n 2');
  const diagnostics = conditionNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function conditionNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStatements(context).statements.at(0) as ConditionStatementNode;
  const diagnosticContext = newDiagnosticContext();

  expect(node).toBeTruthy();
  expect(is(node, $ConditionStatementNode())).toBe(true);

  node.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
