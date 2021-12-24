import { SingleBodyNode } from '../body/single/single-body-node';
import { IdExpressionNode } from '../expression/id/id-expression-node';
import { LiteralExpressionNode } from '../expression/literal/literal-expression-node';
import { ExpressionStatementNode } from '../statement/expression/expression-statement-node';
import { parseAttribute } from '../util/parse';
import { AttributeNode, Modifier } from './attribute-node';

test('type and value', () => {
  const code = 'a Integer: 1';
  const node = parseAttribute(code);
  expect(node).toBeInstanceOf(AttributeNode);

  expect(node.modifier).toBe(null);
  expect(node.id.name.text).toBe('a');
  expect((node.type as IdExpressionNode).id.name.text).toBe('Integer');
  expect(
    (
      ((node.body as SingleBodyNode).statement as ExpressionStatementNode)
        .expression as LiteralExpressionNode
    ).literal.value,
  ).toBe(1);
});

test('type', () => {
  const code = 'object a Integer';
  const node = parseAttribute(code);
  expect(node).toBeInstanceOf(AttributeNode);

  expect(node.modifier).toBe(Modifier.object);
  expect(node.id.name.text).toBe('a');
  expect((node.type as IdExpressionNode).id.name.text).toBe('Integer');
  expect(node.body).toBe(null);
});

test('value', () => {
  const code = 'a: 1';
  const node = parseAttribute(code);
  expect(node).toBeInstanceOf(AttributeNode);

  expect(node.modifier).toBe(null);
  expect(node.id.name.text).toBe('a');
  expect(node.type).toBe(null);
  expect(
    (
      ((node.body as SingleBodyNode).statement as ExpressionStatementNode)
        .expression as LiteralExpressionNode
    ).literal.value,
  ).toBe(1);
});
