import {nothing} from '../../../../lib/core';
import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node, is} from '../../node';
import {IntegerNode} from '../../token/literal/integer/integer-node';
import {GroupNode} from '../group/group-node';
import {InfixNode} from '../infix/infix-node';
import {ObjectNode} from '../object/object-node';
import {ArrayNode} from './array-node';

test('empty object', () => {
  const text = '{}';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ObjectNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OBJECT);
  expect(node.items.length).toBe(0);
});

test('single item', () => {
  const text = '[123 456]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(1);
  expect((node.items[0] as IntegerNode).text).toBe('123');
});

test('single comma', () => {
  const text = '[,]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(node.items.length).toBe(2);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(is(node.close, $Node.CLOSE)).toBe(true);
});

test('empty not closed', () => {
  const text = '[';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.length).toBe(0);
});

test('inner group', () => {
  const text = '[()]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(1);

  const innerGroup = node.items[0] as GroupNode;
  expect(is(innerGroup, $Node.GROUP)).toBe(true);
  expect(innerGroup.items.length).toBe(0);
});

test('inner empty group', () => {
  const text = '[[[]]]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(1);

  const innerGroup = node.items[0] as GroupNode;
  expect(is(innerGroup, $Node.ARRAY)).toBe(true);
  expect(innerGroup.items.length).toBe(1);

  const innerInnerGroup = innerGroup.items[0] as GroupNode;
  expect(is(innerInnerGroup, $Node.ARRAY)).toBe(true);
  expect(innerInnerGroup.items.length).toBe(0);
});

test('two integers no comma and ws at the end', () => {
  const text = '[1, 2]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(2);
  expect((node.items[0] as IntegerNode).text).toBe('1');
  expect((node.items[1] as IntegerNode).text).toBe('2');
});

test('two integers and comma no ws at the end', () => {
  const text = '[1, 2,]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(3);
  expect((node.items[0] as IntegerNode).text).toBe('1');
  expect((node.items[1] as IntegerNode).text).toBe('2');
});

test('two integers and comma and ws', () => {
  const text = '[1, 2, ]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(3);
  expect((node.items[0] as IntegerNode).text).toBe('1');
  expect((node.items[1] as IntegerNode).text).toBe('2');
});

test('array on several lines', () => {
  const text = `[1,
                2+2
                3,
     4,    6+6]`;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(4);
  expect((node.items[0] as IntegerNode).text).toBe('1');
  expect((node.items[1] as InfixNode).operator.text).toBe('+');
});

test('debug 1', () => {
  const text = '[1, , 2 ]';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ArrayNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.ARRAY)).toBe(true);
  expect(node.items.length).toBe(3);
  expect((node.items[0] as IntegerNode).text).toBe('1');
  expect((node.items[2] as IntegerNode).text).toBe('2');
});
