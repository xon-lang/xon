import { GroupNode } from '~/parser/node/group/group-node';
import { IdNode } from '~/parser/node/id/id-node';
import { InfixNode } from '~/parser/node/infix/infix-node';
import { InvokeNode } from '~/parser/node/invoke/invoke-node';
import { NodeType } from '~/parser/node/node';
import { LexicalAnalysis } from '~/parser/parser';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('has argument', () => {
  const text = '[x] = x + 42';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();
  const tree = body.statements[0].nodes[0] as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect((tree.left as GroupNode).bodies.length).toBe(1);
  expect(((tree.left as GroupNode).bodies[0].statements[0].nodes[0] as IdNode).text).toBe('x');

  expect(
    evaluate(tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const text = '{N,M ,K:String }[x] = x + 42';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();
  const tree = body.statements[0].nodes[0] as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  const left = tree.left as InvokeNode;
  const generics = left.instance as GroupNode;
  expect(generics.bodies.length).toBe(3);
  expect((generics.bodies[0].statements[0].nodes[0] as IdNode).text).toBe('N');
  expect((generics.bodies[1].statements[0].nodes[0] as IdNode).text).toBe('M');

  const kExpression = generics.bodies[2].statements[0].nodes[0] as InfixNode;
  expect(kExpression.$).toBe(NodeType.INFIX);
  expect((kExpression.left as IdNode).text).toBe('K');
  expect(kExpression.operator.text).toBe(':');
  expect((kExpression.right as IdNode).text).toBe('String');
  expect(left.group.bodies.length).toBe(1);
  expect(left.group.bodies[0].statements[0].nodes[0].$).toBe(NodeType.ID);
  expect((left.group.bodies[0].statements[0].nodes[0] as IdNode).text).toBe('x');
  expect(
    evaluate(tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const text = '[]= 42+45';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();
  const tree = body.statements[0].nodes[0] as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect((tree.left as GroupNode).bodies.length).toBe(1);
  expect(evaluate(tree.right)).toBe(42 + 45);
});

test('lambda inner lambda', () => {
  const text = '[a] = [b, c] = 42+45';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();
  const tree = body.statements[0].nodes[0] as InfixNode;

  expect(tree.$).toBe(NodeType.INFIX);
  expect(tree.left.$).toBe(NodeType.GROUP);
  expect((tree.left as GroupNode).bodies.length).toBe(1);
  expect(((tree.left as GroupNode).bodies[0].statements[0].nodes[0] as IdNode).text).toBe('a');
  expect(tree.right.$).toBe(NodeType.INFIX);
  expect(((tree.right as InfixNode).left as GroupNode).bodies.length).toBe(2);
  expect((tree.right as InfixNode).right.$).toBe(NodeType.INFIX);
});
