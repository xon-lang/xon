import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType } from '~/analysis/node';
import { InfixNode } from '~/analysis/syntax/node/infix/infix-node';
import { InvokeNode } from '~/analysis/syntax/node/invoke/invoke-node';
import { PrefixNode } from '~/analysis/syntax/node/prefix/prefix-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('infix operator', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes() as LexicalNode[];

  expect(tokens.length).toBe(3);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].$).toBe(NodeType.ID);

  expect(tokens[1].text).toBe('.');
  expect(tokens[1].$).toBe(NodeType.OPERATOR);

  expect(tokens[2].text).toBe('def');
  expect(tokens[2].$).toBe(NodeType.ID);
});

test('several operands with different priorities', () => {
  const code = '1*1+1+2^5*2/2';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(source, tree)).toBe(34);
});

// test('several operands with different priorities', () => {
//   const code = 'infix + (a: Number, b: Number): Number = a+b';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as InfixNode;

//   expect(tree.$).toBe(NodeType.INFIX);
//   expect(tree.operator.text).toBe('=');

//   const left = tree.left as InfixNode;
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

//   const right = tree.right as InfixNode;
//   expect(right.$).toBe(NodeType.INFIX);
//   expect(right.operator.text).toBe('+');
//   expect(right.left.$).toBe(NodeType.ID);
//   expect(right.right.$).toBe(NodeType.ID);
//   expect((right.left as IdNode).text).toBe('a');
//   expect((right.right as IdNode).text).toBe('b');
// });

test('num plus str', () => {
  const code = "1  + 'str'";
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(source, tree)).toBe('1str');
});

test('num is number', () => {
  const code = '1 & Number';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('&');
  expect((tree.left as IntegerNode).text).toBe('1');
});

test('equals', () => {
  const code = 'this.text == 123';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('==');
  expect((tree.right as IntegerNode).text).toBe('123');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('>');
  expect(tree.left.$).toBe(NodeType.INFIX);
  expect(tree.right.$).toBe(NodeType.ID);

  const left = tree.left as InfixNode;
  expect(left.operator.text).toBe('<');
  expect((left.left as IdNode).text).toBe('a');
  expect((left.right as IdNode).text).toBe('b');
  expect((tree.right as IdNode).text).toBe('c');
});

test('several operators', () => {
  const code = '1 /+ 2';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.left.$).toBe(NodeType.INTEGER);
  expect(tree.operator.text).toBe('/');

  expect(tree.right.$).toBe(NodeType.PREFIX);
  expect((tree.right as PrefixNode).operator.text).toBe('+');
  expect((tree.right as PrefixNode).value.$).toBe(NodeType.INTEGER);
  expect(((tree.right as PrefixNode).value as IntegerNode).text).toBe('2');
});
