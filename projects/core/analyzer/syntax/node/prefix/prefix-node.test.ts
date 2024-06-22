import {nothing} from '../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {OperatorNode} from '../../../lexical/token/operator/operator-node';
import {PrefixNode} from './prefix-node';

test('negative integer', () => {
  const text = '-1';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});

test('infix modifier', () => {
  const text = 'infix';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as OperatorNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OPERATOR);
  expect(node.text).toBe('infix');
});

test('hidden nodes', () => {
  const text = '-    1\n';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('-');

  expect(node.value.hiddenNodes?.length).toBe(1);
  expect(node.value.hiddenNodes?.at(0)?.$).toBe($Node.WHITESPACE);
  expect(node.value.hiddenNodes?.at(0)?.text).toBe('    ');

  expect(evaluate(node)).toBe(-1);
});
