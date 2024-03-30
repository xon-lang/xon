import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {ASSIGN} from '../../../parser-config';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {AssignNode} from './assign-node';

test('a assign b', () => {
  const text = 'a = b';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as AssignNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ASSIGN);
  expect(node.operator.text).toBe(ASSIGN);
  expect((node.left as IdNode).text).toBe('a');
  expect((node.right as IdNode).text).toBe('b');
});

test('a has no assign', () => {
  const text = 'a = ';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as AssignNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ASSIGN);
  expect(node.operator.text).toBe(ASSIGN);
  expect((node.left as IdNode).text).toBe('a');
  expect(node.right).toBe(nothing);
});
