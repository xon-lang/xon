import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {$Node} from '../../../node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {IntegerNode} from './integer-node';

test('integer', () => {
  const text = '123';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INTEGER);
  expect(node.text).toBe('123');
});

test('zero int number', () => {
  const text = '0';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INTEGER);
  expect(node.text).toBe('0');
});
