import {
  $ValueDeclarationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseValueDeclarationNode,
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
  const node = parseValueDeclarationNode(0, nodes) as ValueDeclarationNode;

  expect(node).toBeTruthy();
  expect(is(node, $ValueDeclarationNode())).toBe(true);

  return node.diagnose!();
}
