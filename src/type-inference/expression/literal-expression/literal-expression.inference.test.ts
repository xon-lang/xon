import { TestScope } from '../../../metadata/handler/new-handler/test-scope';
import { LiteralTypeInfo } from '../../../metadata/type/literal/literal-type-info';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseExpression } from '../../../tree/parse';
import { LiteralExpressionInference } from './literal-expression.inference';

test('integer', () => {
  const code = '123';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

  const inference = new LiteralExpressionInference(tree, new TestScope());
  expect(inference.type).toBe(LiteralTypeInfo);
});
