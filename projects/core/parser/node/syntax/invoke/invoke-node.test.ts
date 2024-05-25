import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {GroupNode} from '../../group/group-node';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {IntegerNode} from '../../token/integer/integer-node';
import {MemberNode} from '../member/member-node';
import {InvokeNode} from './invoke-node';

test('method call', () => {
  const text = "f(3, 'str')";
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INVOKE);
  expect(node.group.items.length).toBe(2);
  expect(node.group.items[0]?.value?.$).toBe($Node.INTEGER);
  expect((node.group.items[0]?.value as IntegerNode).text).toBe('3');
  expect(node.group.items[1]?.value?.$).toBe($Node.CHAR);
  expect((node.group.items[1]?.value as IdNode).text).toBe("'str'");
  expect(node.instance.$).toBe($Node.ID);
});

test('method on several lines', () => {
  const text = `f[3,
        'str', 123, 
    415]`;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INVOKE);
  expect(node.group.items.length).toBe(4);
  const indexer1 = node.group.items[0]?.value;
  const indexer2 = node.group.items[1]?.value;
  expect(indexer1?.$).toBe($Node.INTEGER);
  expect(indexer2?.$).toBe($Node.CHAR);
  expect(node.instance.$).toBe($Node.ID);
});

test('can call with type parameter', () => {
  const text = 'a.get [1]';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INVOKE);
  expect(node.group.items.length).toBe(1);
  expect((node.group.items[0]?.value as IntegerNode).text).toBe('1');
  expect(node.instance.$).toBe($Node.MEMBER);
  const {operator, instance, id} = node.instance as MemberNode;
  expect(operator.text).toBe('.');
  expect((instance as IdNode).text).toBe('a');
  expect((id as IdNode).text).toBe('get');
});

test('object method', () => {
  const text = '{a, b}.call()';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INVOKE);
  expect(node.group.items.length).toBe(0);
  expect(node.instance.$).toBe($Node.MEMBER);
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
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as InvokeNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INVOKE);
  expect(node.group.items.length).toBe(1);
  expect(node.instance.$).toBe($Node.ID);
  expect((node.instance as IdNode).text).toBe('Animal');
});
