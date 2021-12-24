import { SingleBodyNode } from '../../body/single/single-body-node';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseStatement } from '../../util/parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { AttributeStatementNode } from './attribute-statement-node';

test('type and value', () => {
  const code = 'a Integer: 1';
  const node = parseStatement<AttributeStatementNode>(code);
  expect(node).toBeInstanceOf(AttributeStatementNode);

  expect(node.attribute.modifier).toBe(null);
  expect(node.attribute.id.name.text).toBe('a');
  expect((node.attribute.type as IdExpressionNode).id.name.text).toBe('Integer');
  expect(
    (
      ((node.attribute.body as SingleBodyNode).statement as ExpressionStatementNode)
        .expression as LiteralExpressionNode
    ).literal.value,
  ).toBe(1);
});
