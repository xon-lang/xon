import {
  $GroupNode,
  $LambdaNode,
  collapseNodes,
  LambdaNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Lambda has no errors', () => {
  const text = newText('(): 1 = 2');
  const diagnostics = returnNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function returnNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseNodes(nodes).first() as LambdaNode;
  const diagnosticContext = newDiagnosticContext();

  expect(node).toBeTruthy();
  expect(is(node, $LambdaNode())).toBe(true);
  expect(is(node.group, $GroupNode())).toBe(true);

  node.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
