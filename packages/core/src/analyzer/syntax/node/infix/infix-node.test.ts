import {newText, newTextResource, nothing} from '#common';
import {
  $InfixNode,
  $IntegerNode,
  $PrefixNode,
  IdNode,
  InfixNode,
  IntegerNode,
  PrefixNode,
  syntaxFromResource,
} from '#core';
import {evaluate} from '#interpreter';
import {expect, test} from 'vitest';

test('several operands with different priorities', () => {
  const text = newText('1*1+1+2^5*2/2');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as InfixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($InfixNode);
  expect(node.operator.text.toNativeString()).toBe('+');
  expect(evaluate(node)).toBe(34);
});

test('num plus str', () => {
  const text = newText('1  + "str"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as InfixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($InfixNode);
  expect(node.operator.text.toNativeString()).toBe('+');
  expect(evaluate(node)).toBe('1str');
});

test('num is number', () => {
  const text = newText('1 & Number');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as InfixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($InfixNode);
  expect(node.operator.text.toNativeString()).toBe('&');
  expect((node.left as IntegerNode).content.text.toNativeString()).toBe('1');
  expect((node.right as IdNode).text.toNativeString()).toBe('Number');
});

test('equals', () => {
  const text = newText('this.text == 123');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as InfixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($InfixNode);
  expect(node.operator.text.toNativeString()).toBe('==');
  expect((node.right as IntegerNode).content.text.toNativeString()).toBe('123');
});

// test('has several relational operators', () => {
//   const text = 'a<b>c';
//   const source = textResourceFrom(nothing, text);
//   const syntax = resourceParse(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as InfixNode;

//   expect(statements.length()).toBe(1);
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
  const text = newText('1 /+ 2');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as InfixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($InfixNode);
  expect(node.left?.$).toBe($IntegerNode);
  expect(node.operator.text.toNativeString()).toBe('/');

  expect(node.right?.$).toBe($PrefixNode);
  expect((node.right as PrefixNode).operator.text.toNativeString()).toBe('+');
  expect((node.right as PrefixNode).value?.$).toBe($IntegerNode);
  expect(((node.right as PrefixNode).value as IntegerNode).content.text.toNativeString()).toBe('2');
});

test('range', () => {
  const text = newText('0..3');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as InfixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($InfixNode);

  expect(node.left.$).toBe($IntegerNode);
  expect((node.left as IntegerNode).content.text.toNativeString()).toBe('0');

  expect(node.operator.text.toNativeString()).toBe('..');

  expect(node.right?.$).toBe($IntegerNode);
  expect((node.right as IntegerNode).content.text.toNativeString()).toBe('3');
});
