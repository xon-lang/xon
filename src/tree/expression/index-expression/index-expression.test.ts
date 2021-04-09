import { parseExpression } from '../../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { OperatorExpressionTree } from '../operator-expression/operator-expression.tree';
import { IndexExpressionTree } from './index-expression.tree';

test('string expression index', () => {
  const code = 'prop["ppp"]';
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.object).toBeInstanceOf(IdExpressionTree);

  expect(tree.arguments.length).toBe(1);
  expect(tree.arguments[0].value).toBeInstanceOf(LiteralExpressionTree);
  expect(tree.arguments[0].name).toBeFalsy();
  expect((tree.arguments[0].value as LiteralExpressionTree).literal.value).toBe('ppp');
});

test('integer expression index', () => {
  const code = 'prop[12+33]';
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.object).toBeInstanceOf(IdExpressionTree);
  
  expect(tree.arguments.length).toBe(1);
  expect(tree.arguments[0].value).toBeInstanceOf(OperatorExpressionTree);
  expect(tree.arguments[0].name).toBeFalsy();
  expect((tree.arguments[0].value as OperatorExpressionTree).left).toBeInstanceOf(
    LiteralExpressionTree,
  );
});
