import { NodeType } from '~/parser/lexer/node';
import { BodyableNode } from '~/tree/expression/bodyable/bodyable-expression-tree';
import { parseExpression } from '~/util/parse';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const tree = parseExpression(code) as BodyableNode;

  expect(tree).toBeInstanceOf(BodyableNode);
  expect(tree.expression.nodeType).toBe(NodeType.ID);
  expect(tree.expression.text).toBe('abc');
  expect(tree.body.source.expressions.length).toBe(1);
});
