import {newTextData, nothing, textResourceFromData} from '#/common';
import {StringNode, syntaxFromResource} from '#/core';
import {$} from '#/typing';

test('string', () => {
  const text = newTextData('"abc   def"');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text.toString()).toBe(text.slice(1, -1));
  expect(node.value).toBe('abc   def');
});

test('multiline string', () => {
  const text = newTextData('"some\nmultiline\n\n\nstring\n"');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text.toString()).toBe(text.slice(1, -1));
  expect(node.value).toBe('some\nmultiline\n\n\nstring\n');
});

test('empty string', () => {
  const text = newTextData('"');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content).toBeFalsy();
  expect(node.value).toBe('');
});

test('not closed', () => {
  const text = newTextData('"abc');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text.toString()).toBe('abc');
  expect(node.value).toBe('abc');
});

test('emoji', () => {
  const text = newTextData('"🙂"');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text.toString()).toBe('🙂');
  expect(node.value).toBe('🙂');
  expect(node.reference.range.stop.index).toBe(3);
});

test('emoji 2', () => {
  const text = newTextData('"👩‍❤️‍💋‍👩"');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text.toString()).toBe('👩‍❤️‍💋‍👩');
  expect(node.value).toBe('👩‍❤️‍💋‍👩');
  expect(node.reference.range.stop.index).toBe(10);
});
