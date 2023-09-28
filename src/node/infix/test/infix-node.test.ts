import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { InfixNode } from '~/node/infix/infix-node';
import { IdNode } from '~/node/lexical/id/id-node';
import { IntegerNode } from '~/node/lexical/integer/integer-node';
import { LexicalNode } from '~/node/lexical/lexical-node';
import { MemberNode } from '~/node/member/member-node';
import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('infix operator', () => {
  const text = 'abc.def';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as MemberNode;

  expect(node.$).toBe(NodeType.MEMBER);
  expect((node.instance as LexicalNode).text).toBe('abc');
  expect(node.operator.text).toBe('.');
  expect(node.id.text).toBe('def');
});

test('several operands with different priorities', () => {
  const text = '1*1+1+2^5*2/2';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
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
  const text = "1  + 'str'";
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('+');
  expect(evaluate(node)).toBe('1str');
});

test('num is number', () => {
  const text = '1 & Number';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('&');
  expect((node.left as IntegerNode).text).toBe('1');
  expect((node.right as IdNode).text).toBe('Number');
});

test('equals', () => {
  const text = 'this.text == 123';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('==');
  expect((node.right as IntegerNode).text).toBe('123');
});

test('has several relational operators', () => {
  const text = 'a<b>c';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('>');
  expect(node.left.$).toBe(NodeType.INFIX);
  expect(node.right.$).toBe(NodeType.ID);

  const left = node.left as InfixNode;
  expect(left.operator.text).toBe('<');
  expect((left.left as IdNode).text).toBe('a');
  expect((left.right as IdNode).text).toBe('b');
  expect((node.right as IdNode).text).toBe('c');
});

test('several operators', () => {
  const text = '1 /+ 2';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.left.$).toBe(NodeType.INTEGER);
  expect(node.operator.text).toBe('/');

  expect(node.right.$).toBe(NodeType.PREFIX);
  expect((node.right as PrefixNode).operator.text).toBe('+');
  expect((node.right as PrefixNode).value.$).toBe(NodeType.INTEGER);
  expect(((node.right as PrefixNode).value as IntegerNode).text).toBe('2');
});
