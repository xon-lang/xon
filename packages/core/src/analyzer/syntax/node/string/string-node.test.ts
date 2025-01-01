import {newText, newTextResource, nothing} from '#common';
import {$StringNode, StringNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('string', () => {
  const text = newText('"abc   def"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as StringNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($StringNode);
  expect(node.content?.text.equals(text.slice(1, -1))).toBe(true);
  expect(node.value).toBe('abc   def');
});

test('multiline string', () => {
  const text = newText('"some\nmultiline\n\n\nstring\n"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as StringNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($StringNode);
  expect(node.content?.text.equals(text.slice(1, -1))).toBe(true);
  expect(node.value).toBe('some\nmultiline\n\n\nstring\n');
});

test('empty string', () => {
  const text = newText('"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as StringNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($StringNode);
  expect(node.content).toBeFalsy();
  expect(node.value).toBe('');
});

test('not closed', () => {
  const text = newText('"abc');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as StringNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($StringNode);
  expect(node.content?.text.toNativeString()).toBe('abc');
  expect(node.value).toBe('abc');
});

test('emoji', () => {
  const text = newText('"🙂"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as StringNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($StringNode);
  expect(node.content?.text.toNativeString()).toBe('🙂');
  expect(node.value).toBe('🙂');
  expect(node.reference.range.stop.index).toBe(3);
});

test('emoji 2', () => {
  const text = newText('"👩‍❤️‍💋‍👩"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as StringNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($StringNode);
  expect(node.content?.text.toNativeString()).toBe('👩‍❤️‍💋‍👩');
  expect(node.value).toBe('👩‍❤️‍💋‍👩');
  expect(node.reference.range.stop.index).toBe(10);
});
