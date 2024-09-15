import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {IdNode} from '../../../lexical/node/id/id-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {IntegerNode} from '../integer/integer-node';
import {PrefixNode} from '../prefix/prefix-node';
import {InfixNode} from './infix-node';

test('several operands with different priorities', () => {
  const text = '1*1+1+2^5*2/2';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InfixNode);
  expect(node.operator.text.toString()).toBe('+');
  expect(evaluate(node)).toBe(34);
});

test('num plus str', () => {
  const text = '1  + "str"';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InfixNode);
  expect(node.operator.text.toString()).toBe('+');
  expect(evaluate(node)).toBe('1str');
});

test('num is number', () => {
  const text = '1 & Number';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InfixNode);
  expect(node.operator.text.toString()).toBe('&');
  expect((node.left as IntegerNode).content.text.toString()).toBe('1');
  expect((node.right as IdNode).text.toString()).toBe('Number');
});

test('equals', () => {
  const text = 'this.text == 123';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InfixNode);
  expect(node.operator.text.toString()).toBe('==');
  expect((node.right as IntegerNode).content.text.toString()).toBe('123');
});

// test('has several relational operators', () => {
//   const text = 'a<b>c';
//   const source = textResourceFrom(nothing, text);
//   const syntax = resourceParse(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as InfixNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.INFIX);
//   expect(node.operator.text.toString()).toBe('>');
//   expect(node.left?.$).toBe($Node.INFIX);
//   expect(node.right?.$).toBe($Node.ID);

//   const left = node.left as InfixNode;
//   expect(left.operator.text.toString()).toBe('<');
//   expect((left.left as IdNode).text.toString()).toBe('a');
//   expect((left.right as IdNode).text.toString()).toBe('b');
//   expect((node.right as IdNode).text.toString()).toBe('c');
// });

test('several operators', () => {
  const text = '1 /+ 2';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InfixNode);
  expect(node.left?.$).toBe($.IntegerNode);
  expect(node.operator.text.toString()).toBe('/');

  expect(node.right?.$).toBe($.PrefixNode);
  expect((node.right as PrefixNode).operator.text.toString()).toBe('+');
  expect((node.right as PrefixNode).value?.$).toBe($.IntegerNode);
  expect(((node.right as PrefixNode).value as IntegerNode).content.text.toString()).toBe('2');
});

test('range', () => {
  const text = '0..3';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InfixNode);

  expect(node.left.$).toBe($.IntegerNode);
  expect((node.left as IntegerNode).content.text.toString()).toBe('0');

  expect(node.operator.text.toString()).toBe('..');

  expect(node.right?.$).toBe($.IntegerNode);
  expect((node.right as IntegerNode).content.text.toString()).toBe('3');
});
