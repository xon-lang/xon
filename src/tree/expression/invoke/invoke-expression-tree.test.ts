import { NodeType } from '~/parser/lexer/node';
import { ArrayNode } from '~/tree/expression/array/array-expression-tree';
import { InfixNode } from '~/tree/expression/infix/infix-expression-tree';
import { InvokeNode } from '~/tree/expression/invoke/invoke-expression-tree';
import { parseExpression } from '~/util/parse';

test('method call', () => {
  const code = "f(3, 'str')";
  const tree = parseExpression(code) as InvokeNode;

  expect(tree.nodeType).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.nodeType).toBe(NodeType.INTEGER);
  expect(tree.array.parameters.at(0)?.text).toBe('3');
  expect(tree.array.parameters.at(1)?.nodeType).toBe(NodeType.STRING);
  expect(tree.array.parameters.at(1)?.text).toBe(`'str'`);
  expect(tree.instance.nodeType).toBe(NodeType.ID);
});

test('method on several lines', () => {
  const code = `f[3,
        'str', 123, 
    415]`;
  const tree = parseExpression(code) as InvokeNode;

  expect(tree.nodeType).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(4);
  const indexer1 = tree.array.parameters.at(0);
  const indexer2 = tree.array.parameters.at(1);
  expect(indexer1?.nodeType).toBe(NodeType.INTEGER);
  expect(indexer2?.nodeType).toBe(NodeType.STRING);
  expect(tree.instance.nodeType).toBe(NodeType.ID);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const tree = parseExpression(code) as InvokeNode;

  expect(tree.nodeType).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(1);
  expect(tree.array.parameters[0].text).toBe('1');
  expect(tree.instance.nodeType).toBe(NodeType.INFIX);
  const { operator, left, right } = tree.instance as InfixNode;
  expect(operator.text).toBe('.');
  expect(left.text).toBe('a');
  expect(right.text).toBe('get');
});

test('object method', () => {
  const code = '{a, b}.call()';
  const tree = parseExpression(code) as InvokeNode;

  expect(tree.nodeType).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(0);
  expect(tree.instance.nodeType).toBe(NodeType.INFIX);
  const { operator, left, right } = tree.instance as InfixNode;
  expect(operator.text).toBe('.');
  const leftParameters = (left as ArrayNode).parameters;
  expect(leftParameters.length).toBe(2);
  expect(leftParameters[0].text).toBe('a');
  expect(leftParameters[1].text).toBe('b');
  expect(right.text).toBe('call');
});

test('generics', () => {
  const code = 'Animal{T}';
  const tree = parseExpression(code) as InvokeNode;

  expect(tree.nodeType).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(1);
  expect(tree.instance.nodeType).toBe(NodeType.ID);
  expect(tree.instance.text).toBe('Animal');
});
