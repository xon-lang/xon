import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {IdNode} from '../../../lexical/node/id/id-node';
import {GroupNode} from '../../group/group-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {IntegerNode} from '../integer/integer-node';
import {MemberNode} from '../member/member-node';
import {StringNode} from '../string/string-node';
import {InvokeNode} from './invoke-node';

test('method call', () => {
  const text = "f(3, 'str')";
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InvokeNode);
  expect(node.group.items.length).toBe(2);
  expect(node.group.items[0]?.value?.$).toBe($.IntegerNode);
  expect((node.group.items[0]?.value as IntegerNode).content.text.toString()).toBe('3');
  expect(node.group.items[1]?.value?.$).toBe($.CharNode);
  expect((node.group.items[1]?.value as StringNode).content?.text.toString()).toBe('str');
  expect(node.instance.$).toBe($.IdNode);
});

test('method on several lines', () => {
  const text = `f[3,
        'str', 123, 
    415]`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InvokeNode);
  expect(node.group.items.length).toBe(4);
  const indexer1 = node.group.items[0]?.value;
  const indexer2 = node.group.items[1]?.value;
  expect(indexer1?.$).toBe($.IntegerNode);
  expect(indexer2?.$).toBe($.CharNode);
  expect(node.instance.$).toBe($.IdNode);
});

test('can call with type parameter', () => {
  const text = 'a.get [1]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InvokeNode);
  expect(node.group.items.length).toBe(1);
  expect((node.group.items[0]?.value as IntegerNode).content.text.toString()).toBe('1');
  expect(node.instance.$).toBe($.MemberNode);
  const {operator, instance, id} = node.instance as MemberNode;
  expect(operator.text.toString()).toBe('.');
  expect((instance as IdNode).text.toString()).toBe('a');
  expect((id as IdNode).text.toString()).toBe('get');
});

test('object method', () => {
  const text = '{a, b}.call()';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InvokeNode);
  expect(node.group.items.length).toBe(0);
  expect(node.instance.$).toBe($.MemberNode);
  const {operator, instance, id} = node.instance as MemberNode;
  expect(operator.text.toString()).toBe('.');
  const leftParameters = (instance as GroupNode).items;
  expect(leftParameters.length).toBe(2);
  expect((leftParameters[0].value as IdNode).text.toString()).toBe('a');
  expect((leftParameters[1].value as IdNode).text.toString()).toBe('b');
  expect((id as IdNode).text.toString()).toBe('call');
});

test('generics', () => {
  const text = 'Animal{T}';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.InvokeNode);
  expect(node.group.items.length).toBe(1);
  expect(node.instance.$).toBe($.IdNode);
  expect((node.instance as IdNode).text.toString()).toBe('Animal');
});
