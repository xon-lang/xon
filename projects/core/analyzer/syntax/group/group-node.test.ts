import {nothing} from '../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../diagnostic/analyzer-diagnostic-message';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {IntegerNode} from '../../lexical/node/integer/integer-node';
import {$Node, is} from '../../node';
import {InfixNode} from '../node/infix/infix-node';
import {syntaxParse} from '../syntax-analyzer';
import {ArrayNode, GroupNode, ObjectNode} from './group-node';

test('empty closed', () => {
  const text = '()';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as GroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.GROUP)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(is(node.close, $Node.CLOSE)).toBe(true);
  expect(node.items.length).toBe(0);
});

test('validate close pair', () => {
  const text = '(';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as GroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.GROUP)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.length).toBe(0);
  expect(syntax.diagnosticManager.diagnostics.length).toBe(1);

  const issueMessage = DIAGNOSTIC_MESSAGE.expectCloseToken(node.open.text);

  expect(syntax.diagnosticManager.diagnostics[0].message.actual).toBe(issueMessage.actual);
  expect(syntax.diagnosticManager.diagnostics[0].message.expect).toBe(issueMessage.expect);
});

test('a in group', () => {
  const text = '(a)';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.GROUP);
});

test('empty object', () => {
  const text = '{}';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ObjectNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OBJECT);
  expect(node.items.length).toBe(0);
});

test('single item', () => {
  const text = '[123 456]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(1);
  expect((node.items[0]?.value as IntegerNode).text).toBe('123');
});

test('single comma', () => {
  const text = '[,]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(node.items.length).toBe(2);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(is(node.close, $Node.CLOSE)).toBe(true);
});

test('empty not closed', () => {
  const text = '[';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.length).toBe(0);
});

test('inner group', () => {
  const text = '[()]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(1);

  const innerGroup = node.items[0]?.value as GroupNode;
  expect(is(innerGroup, $Node.GROUP)).toBe(true);
  expect(innerGroup.items.length).toBe(0);
});

test('inner empty group', () => {
  const text = '[[[]]]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(1);

  const innerGroup = node.items[0]?.value as GroupNode;
  expect(is(innerGroup, $Node.ARRAY)).toBe(true);
  expect(innerGroup.items.length).toBe(1);

  const innerInnerGroup = innerGroup.items[0]?.value as GroupNode;
  expect(is(innerInnerGroup, $Node.ARRAY)).toBe(true);
  expect(innerInnerGroup.items.length).toBe(0);
});

test('two integers no comma and ws at the end', () => {
  const text = '[1, 2]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(2);
  expect((node.items[0]?.value as IntegerNode).text).toBe('1');
  expect((node.items[1]?.value as IntegerNode).text).toBe('2');
});

test('two integers and comma no ws at the end', () => {
  const text = '[1, 2,]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(3);
  expect((node.items[0]?.value as IntegerNode).text).toBe('1');
  expect((node.items[1]?.value as IntegerNode).text).toBe('2');
});

test('two integers and comma and ws', () => {
  const text = '[1, 2, ]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(3);
  expect((node.items[0]?.value as IntegerNode).text).toBe('1');
  expect((node.items[1]?.value as IntegerNode).text).toBe('2');
});

test('array on several lines', () => {
  const text = `[1,
                2+2
                3,
     4,    6+6]`;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(4);
  expect((node.items[0]?.value as IntegerNode).text).toBe('1');
  expect((node.items[1]?.value as InfixNode).operator.text).toBe('+');
});

test('debug 1', () => {
  const text = '[1, , 2 ]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ArrayNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ARRAY);
  expect(node.items.length).toBe(3);
  expect((node.items[0]?.value as IntegerNode).text).toBe('1');
  expect((node.items[2]?.value as IntegerNode).text).toBe('2');
});

test('empty object', () => {
  const text = '{}';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ObjectNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OBJECT);
  expect(node.items.length).toBe(0);
});

// test('group with nl', () => {
//   const text = `  (123 ,456
//   7)`;
//   const source = textResourceFrom(nothing, text);
//   const syntax = syntaxParse(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as GroupNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.GROUP);
//   expect(node.items.length).toBe(2);
//   expect((node.items[0]?.value as IntegerNode).text).toBe('123');
//   expect(node.items[0]?.statements.length).toBe(1);
//   expect((node.items[1]?.value as IntegerNode).text).toBe('456');
//   expect(node.items[1]?.statements.length).toBe(1);
//   expect(node.items[1]?.statements[0].body.length).toBe(1);
//   expect((node.items[1]?.statements[0].body[0].item as IntegerNode).text).toBe('7');
// });
