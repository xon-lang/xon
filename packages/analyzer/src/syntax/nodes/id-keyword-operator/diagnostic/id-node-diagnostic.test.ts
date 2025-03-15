import {
  $MemberNode,
  collapseMemberNode,
  MemberNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('No errors', () => {
  const text = newText('abc.def');
  const diagnostics = memberNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Identifier expect', () => {
  const text = newText('abc.');
  const diagnostics = memberNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Identifier expect');
});

function memberNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseMemberNode(nodes, 0)?.node as MemberNode;
  const diagnosticContext = newDiagnosticContext();

  expect(node).toBeTruthy();
  expect(is(node, $MemberNode())).toBe(true);

  node.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
