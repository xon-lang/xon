import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {GroupNode} from '../../group/group-node';
import {$Node} from '../../node';

test('open paren', () => {
  const text = '(';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.GROUP);
  expect(node.open.$).toBe($Node.OPEN);
  expect(node.open.text).toBe('(');
  expect(node.close).toBe(nothing);
});

test('open bracket', () => {
  const text = '[';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ARRAY);
  expect(node.open.$).toBe($Node.OPEN);
  expect(node.open.text).toBe('[');
  expect(node.close).toBe(nothing);
});

test('open brace', () => {
  const text = '{';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OBJECT);
  expect((node as GroupNode).open.$).toBe($Node.OPEN);
  expect((node as GroupNode).open.text).toBe('{');
  expect((node as GroupNode).close).toBe(nothing);
});
