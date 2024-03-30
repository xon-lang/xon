import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {TYPE} from '../../../parser-config';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {TypeNode} from './type-node';

test('a is B', () => {
  const text = 'a: B';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as TypeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.TYPE);
  expect(node.operator.text).toBe(TYPE);
  expect((node.left as IdNode).text).toBe('a');
  expect((node.right as IdNode).text).toBe('B');
});

test('a has no type', () => {
  const text = 'a: ';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as TypeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.TYPE);
  expect(node.operator.text).toBe(TYPE);
  expect((node.left as IdNode).text).toBe('a');
  expect(node.right).toBe(nothing);
});
