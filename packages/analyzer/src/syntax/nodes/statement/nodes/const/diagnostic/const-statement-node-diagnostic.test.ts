import {
  $ReturnStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseReturnStatementNode,
  ReturnStatementNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Return statement has no errors', () => {
  const text = newText('return 1');
  const diagnostics = returnNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function returnNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseReturnStatementNode(0, nodes) as ReturnStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ReturnStatementNode())).toBe(true);

  return node.diagnose!();
}
