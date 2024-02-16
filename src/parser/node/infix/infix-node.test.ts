import { evaluate } from '../../../util/evaluate';
import { parse } from '../../parser';
import { GroupNode } from '../group/group-node';
import { IdNode } from '../id/id-node';
import { IntegerNode } from '../integer/integer-node';
import { TokenNode } from '../node';
import { $Node } from '../node-type';
import { PrefixNode } from '../prefix/prefix-node';
import { InfixNode } from './infix-node';

test('infix operator', () => {
  const text = 'abc.def';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe($Node.INFIX);
  expect((node.left as TokenNode).text).toBe('abc');
  expect(node.operator.text).toBe('.');
  expect((node.right as TokenNode).text).toBe('def');
});

test('several operands with different priorities', () => {
  const text = '1*1+1+2^5*2/2';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('+');
  expect(evaluate(node)).toBe(34);
});

// test('infix declaration', () => {
//   const text = 'infix + (a: Number, b: Number): Number = a+b';
//   const source = Source.fromText(text);
//   const lexer = new LexicalAnalysis(source.text);
//   const nodes = lexer.body().statements[0].nodes;
//   const node = nodes[0] as InfixNode;

//   expect(node.$).toBe(NodeType.INFIX);
//   expect(node.operator.text).toBe('=');

//   const left = node.left as InfixNode;
//   expect(left.$).toBe(NodeType.INFIX);
//   expect(left.operator.text).toBe(':');

//   const invoke = left.left as InvokeNode;
//   expect(invoke.$).toBe(NodeType.INVOKE);
//   expect(invoke.instance.$).toBe(NodeType.PREFIX);
//   const instance = invoke.instance as PrefixNode;

//   expect(instance.operator.text).toBe('infix');
//   expect(instance.value.$).toBe(NodeType.OPERATOR);
//   expect((instance.value as OperatorNode).text).toBe('+');

//   const type = left.right as IdNode;
//   expect(type.$).toBe(NodeType.ID);
//   expect(type.text).toBe('Number');

//   const right = node.right as InfixNode;
//   expect(right.$).toBe(NodeType.INFIX);
//   expect(right.operator.text).toBe('+');
//   expect(right.left.$).toBe(NodeType.ID);
//   expect(right.right.$).toBe(NodeType.ID);
//   expect((right.left as IdNode).text).toBe('a');
//   expect((right.right as IdNode).text).toBe('b');
// });

test('num plus str', () => {
  const text = '1  + "str"';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('+');
  expect(evaluate(node)).toBe('1str');
});

test('num is number', () => {
  const text = '1 & Number';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('&');
  expect((node.left as IntegerNode).text).toBe('1');
  expect((node.right as IdNode).text).toBe('Number');
});

test('equals', () => {
  const text = 'this.text == 123';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('==');
  expect((node.right as IntegerNode).text).toBe('123');
});

test('has several relational operators', () => {
  const text = 'a<b>c';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('>');
  expect(node.left?.$).toBe($Node.INFIX);
  expect(node.right?.$).toBe($Node.ID);

  const left = node.left as InfixNode;
  expect(left.operator.text).toBe('<');
  expect((left.left as IdNode).text).toBe('a');
  expect((left.right as IdNode).text).toBe('b');
  expect((node.right as IdNode).text).toBe('c');
});

test('several operators', () => {
  const text = '1 /+ 2';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe($Node.INFIX);
  expect(node.left?.$).toBe($Node.INTEGER);
  expect(node.operator.text).toBe('/');

  expect(node.right?.$).toBe($Node.PREFIX);
  expect((node.right as PrefixNode).operator.text).toBe('+');
  expect((node.right as PrefixNode).value?.$).toBe($Node.INTEGER);
  expect(((node.right as PrefixNode).value as IntegerNode).text).toBe('2');
});

test('has argument', () => {
  const text = '(x) = x + 42';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as InfixNode;

  expect(tree.$).toBe($Node.INFIX);
  expect((tree.left as GroupNode).items.length).toBe(1);
  expect(((tree.left as GroupNode).items[0] as IdNode).text).toBe('x');

  expect(
    evaluate(tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('two parameter', () => {
  const text = '(a, b) = a+b';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as InfixNode;

  expect(tree.$).toBe($Node.INFIX);
  expect((tree.left as GroupNode).items.length).toBe(2);
  expect(((tree.left as GroupNode).items[0] as IdNode).text).toBe('a');
  expect(((tree.left as GroupNode).items[1] as IdNode).text).toBe('b');
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
