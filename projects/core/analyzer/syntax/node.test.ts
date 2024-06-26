import {nothing} from '../../../lib/types';
import {textResourceFrom} from '../../util/resource/text/text-resource';
import {IntegerNode} from '../lexical/node/integer/integer-node';
import {syntaxParse} from '../syntax-analyzer';
import {$Node} from './node';
import {InfixNode} from './node/infix/infix-node';

test('comma', () => {
  const text = '1';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INTEGER);
  expect(node.text).toBe('1');
});

// test('single expression', () => {
//   const text = '\n  a = 1';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as AssignNode;

//   expect(statements.length).toBe(1);

//   expect((node.left as TokenNode).text).toBe('a');
//   expect(node.operator.text).toBe('=');
//   expect((node.right as IntegerNode).text).toBe('1');
// });

// test('debug 1', () => {
//   const text = 'a = 1\n b = 2\n +b';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as AssignNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.ASSIGN);
// });

// test('debug 2', () => {
//   const text = 'a = 1\nb = 2\n';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node0 = statements[0].item as AssignNode;
//   const node1 = statements[1].item as AssignNode;

//   expect(statements.length).toBe(2);
//   expect(node0.$).toBe($Node.ASSIGN);
//   expect(node1.$).toBe($Node.ASSIGN);
// });

test('debug 3', () => {
  const text = `a
 b
c`;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node0 = statements[0].value as InfixNode;
  const node1 = statements[1].value as InfixNode;

  expect(statements.length).toBe(2);
  expect(node0.$).toBe($Node.ID);
  expect(node1.$).toBe($Node.ID);
});

test('debug 4', () => {
  const text = '  a\n   b\n   b';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;

  expect(statements.length).toBe(1);
  expect(statements[0].children.length).toBe(1);
  expect(statements[0].body?.length).toBe(2);
  expect(statements[0].indentLevel).toBe(0);
  expect(statements[0].body?.at(0)?.indentLevel).toBe(1);
  expect(statements[0].body?.at(1)?.indentLevel).toBe(1);
});

test('multiple expression', () => {
  const text = '\n  x = 1\n  y = 2\n  z = 3';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;

  expect(statements.length).toBe(3);
});
