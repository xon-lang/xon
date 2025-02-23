import {
  $StructuralTypeDeclarationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseStructuralTypeDeclarationNode,
  StructuralTypeDeclarationNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Const statement has no errors', () => {
  const text = newText('type A = 1');
  const diagnostics = constStatementNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

function constStatementNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseStructuralTypeDeclarationNode(0, nodes) as StructuralTypeDeclarationNode;

  expect(node).toBeTruthy();
  expect(is(node, $StructuralTypeDeclarationNode())).toBe(true);

  return node.diagnose!();
}
