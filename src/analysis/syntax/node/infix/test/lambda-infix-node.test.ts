import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { NodeType } from '~/analysis/node';
import { ArrayNode } from '~/analysis/syntax/node/array/array-node';
import { InfixNode } from '~/analysis/syntax/node/infix/infix-node';
import { InvokeNode } from '~/analysis/syntax/node/invoke/invoke-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('has argument', () => {
  const code = '[x] = x + 42';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect((tree.left as ArrayNode).parameters.length).toBe(1);
  expect(((tree.left as ArrayNode).parameters[0] as IdNode).text).toBe('x');
  expect(((tree.left as ArrayNode).parameters[0] as IdNode).text).toBe('x');

  expect(
    evaluate(source, tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const code = '{N,M ,K:String }[x] = x + 42';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  const left = tree.left as InvokeNode;
  const generics = left.instance as ArrayNode;
  expect(generics.parameters.length).toBe(3);
  expect((generics.parameters[0] as IdNode).text).toBe('N');
  expect((generics.parameters[1] as IdNode).text).toBe('M');

  const kExpression = generics.parameters[2] as InfixNode;
  expect(kExpression.$).toBe(NodeType.INFIX);
  expect((kExpression.left as IdNode).text).toBe('K');
  expect(kExpression.operator.text).toBe(':');
  expect((kExpression.right as IdNode).text).toBe('String');
  expect(left.array.parameters.length).toBe(1);
  expect(left.array.parameters[0].$).toBe(NodeType.ID);
  expect((left.array.parameters[0] as IdNode).text).toBe('x');
  expect(
    evaluate(source, tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]= 42+45';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect((tree.left as ArrayNode).parameters.length).toBe(0);
  expect(evaluate(source, tree.right)).toBe(42 + 45);
});

test('lambda inner lambda', () => {
  const code = '[a] = [b, c] = 42+45';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.left.$).toBe(NodeType.ARRAY);
  expect((tree.left as ArrayNode).parameters.length).toBe(1);
  expect(((tree.left as ArrayNode).parameters[0] as IdNode).text).toBe('a');
  expect(tree.right.$).toBe(NodeType.INFIX);
  expect(((tree.right as InfixNode).left as ArrayNode).parameters.length).toBe(2);
  expect((tree.right as InfixNode).right.$).toBe(NodeType.INFIX);
});
