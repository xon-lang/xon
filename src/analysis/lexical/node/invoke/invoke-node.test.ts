import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { InvokeNode } from '~/analysis/lexical/node/invoke/invoke-node';
import { NodeType } from '~/analysis/node';
import { ArrayNode } from '~/analysis/syntax/node/array/array-node';
import { MemberNode } from '~/analysis/syntax/node/member/member-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('method call', () => {
  const code = "f(3, 'str')";
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InvokeNode;

  expect(tree.$).toBe(NodeType.INVOKE);
  expect(tree.array.items.length).toBe(2);
  expect(tree.array.items[0]?.$).toBe(NodeType.INTEGER);
  expect((tree.array.items[0] as IntegerNode).text).toBe('3');
  expect(tree.array.items[1]?.$).toBe(NodeType.STRING);
  expect((tree.array.items[1] as IdNode).text).toBe("'str'");
  expect(tree.instance.$).toBe(NodeType.ID);
});

test('method on several lines', () => {
  const code = `f[3,
        'str', 123, 
    415]`;
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InvokeNode;

  expect(tree.$).toBe(NodeType.INVOKE);
  expect(tree.array.items.length).toBe(4);
  const indexer1 = tree.array.items[0];
  const indexer2 = tree.array.items[1];
  expect(indexer1?.$).toBe(NodeType.INTEGER);
  expect(indexer2?.$).toBe(NodeType.STRING);
  expect(tree.instance.$).toBe(NodeType.ID);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InvokeNode;

  expect(tree.$).toBe(NodeType.INVOKE);
  expect(tree.array.items.length).toBe(1);
  expect((tree.array.items[0] as IntegerNode).text).toBe('1');
  expect(tree.instance.$).toBe(NodeType.MEMBER);
  const { operator, instance, id } = tree.instance as MemberNode;
  expect(operator.text).toBe('.');
  expect((instance as IdNode).text).toBe('a');
  expect((id as IdNode).text).toBe('get');
});

test('object method', () => {
  const code = '{a, b}.call()';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InvokeNode;

  expect(tree.$).toBe(NodeType.INVOKE);
  expect(tree.array.items.length).toBe(0);
  expect(tree.instance.$).toBe(NodeType.MEMBER);
  const { operator, instance, id } = tree.instance as MemberNode;
  expect(operator.text).toBe('.');
  const leftParameters = (instance as ArrayNode).items;
  expect(leftParameters.length).toBe(2);
  expect((leftParameters[0] as IdNode).text).toBe('a');
  expect((leftParameters[1] as IdNode).text).toBe('b');
  expect((id as IdNode).text).toBe('call');
});

test('generics', () => {
  const code = 'Animal{T}';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InvokeNode;

  expect(tree.$).toBe(NodeType.INVOKE);
  expect(tree.array.items.length).toBe(1);
  expect(tree.instance.$).toBe(NodeType.ID);
  expect((tree.instance as IdNode).text).toBe('Animal');
});
