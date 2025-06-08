import {
  $IdNode,
  $MemberNode,
  $WhitespaceNode,
  AnalyzerDiagnostic,
  collapseMemberNode,
  IdNode,
  MemberNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  WhitespaceNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Member with id instance', () => {
  const text = newText('  abc.   def   ');
  const node = getMemberNode(text);

  expect(is(node.instance, $IdNode())).toBe(true);
  expect((node.instance as IdNode).text.toNativeString()).toBe('abc');
  expect(node.instance.hiddenNodes).toBeFalsy();
  expect(is(node.id, $IdNode())).toBe(true);
  expect(node.id?.hiddenNodes?.count()).toBe(1);
  expect(is(node.id?.hiddenNodes?.first(), $WhitespaceNode())).toBe(true);
  expect((node.id?.hiddenNodes?.first() as WhitespaceNode).text.toNativeString()).toBe('   ');
  expect(node.id?.text.toNativeString()).toBe('def');
});

function getMemberNode(text: Text): MemberNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = collapseMemberNode(context).collapse(nodes, 0)?.node as MemberNode;

  expect(node).toBeTruthy();
  expect(is(node, $MemberNode())).toBe(true);

  return node;
}

// Diagnostic
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
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = collapseMemberNode(context).collapse(nodes, 0)?.node as MemberNode;

  expect(node).toBeTruthy();
  expect(is(node, $MemberNode())).toBe(true);

  return context.diagnostic.items;
}
