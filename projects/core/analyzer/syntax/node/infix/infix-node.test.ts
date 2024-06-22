import {nothing} from '../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {IdNode} from '../../../lexical/node/id/id-node';
import {IntegerNode} from '../../../lexical/node/integer/integer-node';
import {LexicalNode} from '../../../lexical/node/lexical-node';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {PrefixNode} from '../prefix/prefix-node';
import {InfixNode} from './infix-node';

test('several operands with different priorities', () => {
  const text = '1*1+1+2^5*2/2';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('+');
  expect(evaluate(node)).toBe(34);
});

test('num plus str', () => {
  const text = '1  + "str"';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('+');
  expect(evaluate(node)).toBe('1str');
});

test('num is number', () => {
  const text = '1 & Number';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('&');
  expect((node.left as IntegerNode).text).toBe('1');
  expect((node.right as IdNode).text).toBe('Number');
});

test('equals', () => {
  const text = 'this.text == 123';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('==');
  expect((node.right as IntegerNode).text).toBe('123');
});

// test('has several relational operators', () => {
//   const text = 'a<b>c';
//   const source = textResourceFrom(nothing, text);
//   const syntax = resourceParse(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as InfixNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.INFIX);
//   expect(node.operator.text).toBe('>');
//   expect(node.left?.$).toBe($Node.INFIX);
//   expect(node.right?.$).toBe($Node.ID);

//   const left = node.left as InfixNode;
//   expect(left.operator.text).toBe('<');
//   expect((left.left as IdNode).text).toBe('a');
//   expect((left.right as IdNode).text).toBe('b');
//   expect((node.right as IdNode).text).toBe('c');
// });

test('several operators', () => {
  const text = '1 /+ 2';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);
  expect(node.left?.$).toBe($Node.INTEGER);
  expect(node.operator.text).toBe('/');

  expect(node.right?.$).toBe($Node.PREFIX);
  expect((node.right as PrefixNode).operator.text).toBe('+');
  expect((node.right as PrefixNode).value?.$).toBe($Node.INTEGER);
  expect(((node.right as PrefixNode).value as IntegerNode).text).toBe('2');
});

test('range', () => {
  const text = '0..3';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);

  expect(node.left.$).toBe($Node.INTEGER);
  expect((node.left as LexicalNode).text).toBe('0');

  expect(node.operator.text).toBe('..');

  expect(node.right?.$).toBe($Node.INTEGER);
  expect((node.right as LexicalNode).text).toBe('3');
});
