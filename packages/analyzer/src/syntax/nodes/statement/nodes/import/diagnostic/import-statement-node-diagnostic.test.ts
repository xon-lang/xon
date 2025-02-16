import {
  $ImportStatementNode,
  ImportStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseImportStatementNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Import statement has no errors', () => {
  const text = newText('import "@xon/core"');
  const diagnostics = returnNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function returnNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseImportStatementNode(0, nodes) as ImportStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ImportStatementNode())).toBe(true);

  return node.diagnose!();
}
