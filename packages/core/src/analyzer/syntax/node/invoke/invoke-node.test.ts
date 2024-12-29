import {newText, newTextResource, nothing} from '#common';
import {
  $CharNode,
  $IdNode,
  $IntegerNode,
  $InvokeNode,
  $MemberNode,
  GroupNode,
  IdNode,
  IntegerNode,
  InvokeNode,
  MemberNode,
  StringNode,
  syntaxFromResource,
} from '#core';

test('method call', () => {
  const text = newText("f(3, 'str')");
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($InvokeNode);
  expect(node.group.items.length).toBe(2);
  expect(node.group.items[0]?.value?.$).toBe($IntegerNode);
  expect((node.group.items[0]?.value as IntegerNode).content.text.toString()).toBe('3');
  expect(node.group.items[1]?.value?.$).toBe($CharNode);
  expect((node.group.items[1]?.value as StringNode).content?.text.toString()).toBe('str');
  expect(node.instance.$).toBe($IdNode);
});

test('method on several lines', () => {
  const text = newText(`f[3,
        'str', 123, 
    415]`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($InvokeNode);
  expect(node.group.items.length).toBe(4);
  const indexer1 = node.group.items[0]?.value;
  const indexer2 = node.group.items[1]?.value;
  expect(indexer1?.$).toBe($IntegerNode);
  expect(indexer2?.$).toBe($CharNode);
  expect(node.instance.$).toBe($IdNode);
});

test('can call with type parameter', () => {
  const text = newText('a.get [1]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($InvokeNode);
  expect(node.group.items.length).toBe(1);
  expect((node.group.items[0]?.value as IntegerNode).content.text.toString()).toBe('1');
  expect(node.instance.$).toBe($MemberNode);
  const {operator, instance, id} = node.instance as MemberNode;
  expect(operator.text.toString()).toBe('.');
  expect((instance as IdNode).text.toString()).toBe('a');
  expect((id as IdNode).text.toString()).toBe('get');
});

test('object method', () => {
  const text = newText('{a, b}.call()');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($InvokeNode);
  expect(node.group.items.length).toBe(0);
  expect(node.instance.$).toBe($MemberNode);
  const {operator, instance, id} = node.instance as MemberNode;
  expect(operator.text.toString()).toBe('.');
  const leftParameters = (instance as GroupNode).items;
  expect(leftParameters.length).toBe(2);
  expect((leftParameters[0].value as IdNode).text.toString()).toBe('a');
  expect((leftParameters[1].value as IdNode).text.toString()).toBe('b');
  expect((id as IdNode).text.toString()).toBe('call');
});

test('generics', () => {
  const text = newText('Animal{T}');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($InvokeNode);
  expect(node.group.items.length).toBe(1);
  expect(node.instance.$).toBe($IdNode);
  expect((node.instance as IdNode).text.toString()).toBe('Animal');
});
