import { parseExpression } from '../../../parse';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { OperatorExpressionTree } from '../operator-expression/operator-expression.tree';
import { IndexExpressionTree } from './index-expression.tree';

test('string expression index', () => {
  const code = 'prop["ppp"]';
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.value).toBeInstanceOf(IdExpressionTree);
  expect(tree.index).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.index as LiteralExpressionTree).literal).toBeInstanceOf(StringLiteralTree);
});

test('integer expression index', () => {
  const code = 'prop[12+33]';
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.value).toBeInstanceOf(IdExpressionTree);
  expect(tree.index).toBeInstanceOf(OperatorExpressionTree);
  expect((tree.index as OperatorExpressionTree).left).toBeInstanceOf(LiteralExpressionTree);
});
