import {
  $CharacterNode,
  AnalyzerDiagnostic,
  CharacterNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCharacterNode,
} from '#analyzer';
import {ArrayData, newText, nothing, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('character', () => {
  const text = newText("'ab\n\nc'");
  const node = getCharacterNode(text);

  expect(is(node, $CharacterNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe("'");
  expect(node?.content?.text.toNativeString()).toBe('ab\n\nc');
  expect(node?.close?.text.toNativeString()).toBe("'");
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.start.column).toBe(0);
  expect(node?.range.stop.index).toBe(7);
  expect(node?.range.stop.line).toBe(2);
  expect(node?.range.stop.column).toBe(2);
});

test('character only quote', () => {
  const text = newText("'a");
  const node = getCharacterNode(text);

  expect(is(node, $CharacterNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe("'");
  expect(node?.content?.text.toNativeString()).toBe('a');
  expect(node?.close).toBe(nothing);
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

test('empty character single quote', () => {
  const text = newText("'");
  const node = getCharacterNode(text);

  expect(is(node, $CharacterNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe("'");
  expect(node?.content).toBe(nothing);
  expect(node?.close).toBe(nothing);
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('empty character double quote', () => {
  const text = newText("''");
  const node = getCharacterNode(text);

  expect(is(node, $CharacterNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe("'");
  expect(node?.content).toBe(nothing);
  expect(node?.close?.text.toNativeString()).toBe("'");
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

function getCharacterNode(text: Text): CharacterNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCharacterNode(context)!;

  expect(is(node, $CharacterNode())).toBe(true);
  expect(node.open.text.toNativeString()).toBe("'");

  if (node.close) {
    expect(node.close.text.toNativeString()).toBe("'");
  }

  return node;
}

// Diagnostics

test('No errors', () => {
  const text = newText("'a'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Only character expect but empty', () => {
  const text = newText("''");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Only character expect');
});

test('Only character expect but many', () => {
  const text = newText("'abc'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Only character expect');
});

test('Close token expect', () => {
  const text = newText("'a");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Close token expect');
});

function charNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  parseCharacterNode(context);

  return context.diagnostic.items;
}
