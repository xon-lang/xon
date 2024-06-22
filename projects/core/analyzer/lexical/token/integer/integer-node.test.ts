import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../../syntax/node';
import {IntegerNode} from './integer-node';

test('integer', () => {
  const text = '123';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INTEGER);
  expect(node.text).toBe('123');
});

test('zero int number', () => {
  const text = '0';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INTEGER);
  expect(node.text).toBe('0');
});
