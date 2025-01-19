import {
  collapseMemberNode,
  MemberNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseExpressionNodes,
} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {expect, test} from 'vitest';

test('No errors', () => {
  const text = newText('abc.def');
  const diagnostics = memberNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Expect identifier', () => {
  const text = newText('abc.');
  const diagnostics = memberNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Expect identifier');
});

function memberNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {nodes} = parseExpressionNodes(context);
  const node = collapseMemberNode(nodes)?.node as MemberNode;

  return node!.diagnose!();
}
