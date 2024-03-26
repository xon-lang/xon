import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {TokenNode} from '../../token/token-node';
import {RangeNode} from './range-node';

test('range', () => {
  const text = '0..3';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as RangeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.RANGE);

  expect(node.from.$).toBe($Node.INTEGER);
  expect((node.from as TokenNode).text).toBe('0');

  expect(node.operator.text).toBe('..');

  expect(node.to.$).toBe($Node.INTEGER);
  expect((node.to as TokenNode).text).toBe('3');
});
