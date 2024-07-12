import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../syntax-analyzer';
import {StringNode} from './string-node';

test('string', () => {
  const text = '"abc   def"';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text).toBe(text.slice(1, -1));
  expect(node.value).toBe('abc   def');
});

test('multiline string', () => {
  const text = '"some\nmultiline\n\n\nstring\n"';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text).toBe(text.slice(1, -1));
  expect(node.value).toBe('some\nmultiline\n\n\nstring\n');
});

test('empty string', () => {
  const text = '"';
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
  const text = '"abc';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text).toBe('abc');
  expect(node.value).toBe('abc');
});
