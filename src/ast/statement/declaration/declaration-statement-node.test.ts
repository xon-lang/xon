import { SingleBodyNode } from '../../body/single/single-body-node';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseStatement } from '../../util/parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { DeclarationStatementNode } from './declaration-statement-node';

test('type and value', () => {
  const code = 'a Integer: 1';
  const node = parseStatement<DeclarationStatementNode>(code);
  expect(node).toBeInstanceOf(DeclarationStatementNode);

  expect(node.declaration.modifier).toBe(null);
  expect(node.declaration.id.name.text).toBe('a');
  expect((node.declaration.type as IdExpressionNode).id.name.text).toBe('Integer');
  expect(
    (
      ((node.declaration.body as SingleBodyNode).statement as ExpressionStatementNode)
        .expression as LiteralExpressionNode
    ).literal.value,
  ).toBe(1);
});
