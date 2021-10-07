import { parseExpression } from '../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { InfixExpressionTree } from '../infix-expression/infix-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { IndexExpressionTree } from './index-expression.tree';

test('string expression index', () => {
  const code = 'prop["ppp"]';
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);

  expect(tree.index).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.index as LiteralExpressionTree).literal.value).toBe('ppp');
});

test('integer expression index', () => {
  const code = 'prop[12+33]';
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);

  expect(tree.index).toBeInstanceOf(InfixExpressionTree);
  expect((tree.index as InfixExpressionTree).left).toBeInstanceOf(LiteralExpressionTree);
});
