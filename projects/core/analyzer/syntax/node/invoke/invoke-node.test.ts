import {$Node} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {IdNode} from '../../../lexical/node/id/id-node';
import {IntegerNode} from '../../../lexical/node/integer/integer-node';
import {GroupNode} from '../../group/group-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {MemberNode} from '../member/member-node';
import {InvokeNode} from './invoke-node';

test('method call', () => {
  const text = "f(3, 'str')";
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.InvokeNode);
  expect(node.group.items.length).toBe(2);
  expect(node.group.items[0]?.value?.$).toBe($Node.IntegerNode);
  expect((node.group.items[0]?.value as IntegerNode).text).toBe('3');
  expect(node.group.items[1]?.value?.$).toBe($Node.CharNode);
  expect((node.group.items[1]?.value as IdNode).text).toBe("'str'");
  expect(node.instance.$).toBe($Node.IdNode);
});

test('method on several lines', () => {
  const text = `f[3,
        'str', 123, 
    415]`;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.InvokeNode);
  expect(node.group.items.length).toBe(4);
  const indexer1 = node.group.items[0]?.value;
  const indexer2 = node.group.items[1]?.value;
  expect(indexer1?.$).toBe($Node.IntegerNode);
  expect(indexer2?.$).toBe($Node.CharNode);
  expect(node.instance.$).toBe($Node.IdNode);
});

test('can call with type parameter', () => {
  const text = 'a.get [1]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.InvokeNode);
  expect(node.group.items.length).toBe(1);
  expect((node.group.items[0]?.value as IntegerNode).text).toBe('1');
  expect(node.instance.$).toBe($Node.MemberNode);
  const {operator, instance, id} = node.instance as MemberNode;
  expect(operator.text).toBe('.');
  expect((instance as IdNode).text).toBe('a');
  expect((id as IdNode).text).toBe('get');
});

test('object method', () => {
  const text = '{a, b}.call()';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.InvokeNode);
  expect(node.group.items.length).toBe(0);
  expect(node.instance.$).toBe($Node.MemberNode);
  const {operator, instance, id} = node.instance as MemberNode;
  expect(operator.text).toBe('.');
  const leftParameters = (instance as GroupNode).items;
  expect(leftParameters.length).toBe(2);
  expect((leftParameters[0].value as IdNode).text).toBe('a');
  expect((leftParameters[1].value as IdNode).text).toBe('b');
  expect((id as IdNode).text).toBe('call');
});

test('generics', () => {
  const text = 'Animal{T}';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.InvokeNode);
  expect(node.group.items.length).toBe(1);
  expect(node.instance.$).toBe($Node.IdNode);
  expect((node.instance as IdNode).text).toBe('Animal');
});
