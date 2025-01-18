import {$JoiningNode, newAnalyzerContext, newCharacterStreamFromText, parseJoiningNode} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('no space', () => {
  const text = newText('~.def');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseJoiningNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $JoiningNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('~');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.stop.index).toBe(1);
  expect(node?.range.stop.line).toBe(0);
});

test('with space', () => {
  const text = newText('~   .def');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseJoiningNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $JoiningNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('~   ');
  expect(node?.range.stop.index).toBe(4);
  expect(node?.range.stop.line).toBe(0);
});

test('with new line', () => {
  const text = newText('~   \n \r \n\n   .def');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseJoiningNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $JoiningNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('~   \n \r \n\n   ');
  expect(node?.range.stop.index).toBe(13);
  expect(node?.range.stop.line).toBe(3);
  expect(node?.range.stop.column).toBe(3);
});

test('no joining', () => {
  const text = newText(' ~  ');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseJoiningNode(context);

  expect(node).toBeFalsy();
});
