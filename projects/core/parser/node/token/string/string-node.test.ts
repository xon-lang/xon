import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../resource-parser';
import {$Node} from '../../node';
import {StringNode} from './string-node';

test('string', () => {
  const text = '"abc   def"';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.STRING);
  expect(node.text).toBe(text);
});

test('multiline string', () => {
  const text = '"some\nmultiline\n\n\nstring\n"';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.STRING);
  expect(node.text).toBe(text);
});

test('empty string', () => {
  const text = '"';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.STRING);
  expect(node.text).toBe(text);
});

test('not closed', () => {
  const text = '"abc';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.STRING);
  expect(node.text).toBe('"abc');
});
