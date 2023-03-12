import { ArrayNode } from '~/node/array/array-node';
import { InfixNode } from '~/node/infix/infix-node';
import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';
import { parseNode } from '~/parser/parser';
import { evaluate } from '~/util/evaluate';

test('has argument', () => {
  const code = '[x] = x + 42';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect((tree.left as ArrayNode).parameters.length).toBe(1);
  expect((tree.left as ArrayNode).parameters[0].text).toBe('x');
  expect(
    evaluate(tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const code = '{N,M ,K:String }[x] = x + 42';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  const left = tree.left as InvokeNode;
  const generics = left.instance as ArrayNode;
  expect(generics.parameters.length).toBe(3);
  expect(generics.parameters[0].text).toBe('N');
  expect(generics.parameters[1].text).toBe('M');
  const kExpression = generics.parameters[2] as InfixNode;
  expect(kExpression.nodeType).toBe(NodeType.INFIX);
  expect(kExpression.left.text).toBe('K');
  expect(kExpression.operator.text).toBe(':');
  expect(kExpression.right.text).toBe('String');
  expect(left.array.parameters.length).toBe(1);
  expect(left.array.parameters.at(0)?.nodeType).toBe(NodeType.ID);
  expect(left.array.parameters.at(0)?.text).toBe('x');
  expect(
    evaluate(tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]= 42+45';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect((tree.left as ArrayNode).parameters.length).toBe(0);
  expect(evaluate(tree.right)).toBe(42 + 45);
});

test('lambda inner lambda', () => {
  const code = '[a] = [b, c] = 42+45';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ARRAY);
  expect((tree.left as ArrayNode).parameters.length).toBe(1);
  expect((tree.left as ArrayNode).parameters[0].text).toBe('a');
  expect(tree.right.nodeType).toBe(NodeType.INFIX);
  expect(((tree.right as InfixNode).left as ArrayNode).parameters.length).toBe(2);
  expect((tree.right as InfixNode).right.nodeType).toBe(NodeType.INFIX);
});
