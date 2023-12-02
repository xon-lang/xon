import { IdNode } from '~/parser/node/id/id-node';
import { LambdaNode } from '~/parser/node/lambda/lambda-node';
import { NodeType } from '~/parser/node/node-type';
import { parse } from '~/parser/parser';
import { evaluate } from '~/util/evaluate';

test('has argument', () => {
  const text = '(x) = x + 42';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as LambdaNode;

  expect(tree.$).toBe(NodeType.LAMBDA);
  expect(tree.assignee.items.length).toBe(1);
  expect((tree.assignee.items[0] as IdNode).text).toBe('x');

  expect(
    evaluate(tree.assign.value, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('two parameter', () => {
  const text = '(a, b) = a+b';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as LambdaNode;

  expect(tree.$).toBe(NodeType.LAMBDA);
  expect(tree.assignee.items.length).toBe(2);
  expect((tree.assignee.items[0] as IdNode).text).toBe('a');
  expect((tree.assignee.items[1] as IdNode).text).toBe('b');
});

// test('generics', () => {
//   const text = '{N,M ,K:String }[x] = x + 42';
//   const nodes = parse(text).root.children;
//   const tree = nodes[0] as InfixNode;

//   expect(tree.$).toBe(NodeType.INFIX);
//   const left = tree.left as InvokeNode;
//   const generics = left.instance as GroupNode;
//   expect(generics.items.length).toBe(3);
//   expect((generics.items[0] as IdNode).text).toBe('N');
//   expect((generics.items[1] as IdNode).text).toBe('M');

//   const kExpression = generics.items[2] as InfixNode;
//   expect(kExpression.$).toBe(NodeType.INFIX);
//   expect((kExpression.left as IdNode).text).toBe('K');
//   expect(kExpression.operator.text).toBe(':');
//   expect((kExpression.right as IdNode).text).toBe('String');
//   expect(left.group.items.length).toBe(1);
//   expect(left.group.items[0].$).toBe(NodeType.ID);
//   expect((left.group.items[0] as IdNode).text).toBe('x');
//   expect(
//     evaluate(tree.right, {
//       x: 37,
//     }),
//   ).toBe(37 + 42);
// });

// test('no arguments', () => {
//   const text = '[]= 42+45';
//   const nodes = parse(text).root.children;
//   const tree = nodes[0] as InfixNode;

//   expect(tree.$).toBe(NodeType.INFIX);
//   expect((tree.left as GroupNode).items.length).toBe(0);
//   expect(evaluate(tree.right)).toBe(42 + 45);
// });

// test('lambda inner lambda', () => {
//   const text = '[a] = [b, c] = 42+45';
//   const nodes = parse(text).root.children;
//   const tree = nodes[0] as ArraAss;

//   expect(tree.$).toBe(NodeType.INFIX);
//   expect(tree.left.$).toBe(NodeType.ARRAY);
//   expect((tree.left as GroupNode).items.length).toBe(1);
//   expect(((tree.left as GroupNode).items[0] as IdNode).text).toBe('a');
//   expect(tree.right.$).toBe(NodeType.INFIX);
//   expect(((tree.right as InfixNode).left as GroupNode).items.length).toBe(2);
//   expect((tree.right as InfixNode).right.$).toBe(NodeType.INFIX);
// });
