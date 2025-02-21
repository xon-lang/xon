import {
  $ConstStatementNode,
  ConstStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseConstStatementNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Const statement has no errors', () => {
  const text = newText('const a: 1 = 2');
  const diagnostics = constStatementNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function constStatementNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseConstStatementNode(0, nodes) as ConstStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ConstStatementNode())).toBe(true);

  return node.diagnose!();
}
