import { FunctionTree } from '../../tree/function/function.tree';
import { parseFunction } from '../../tree/parse';
import { ExpressionStatementInference } from '../statement/expression-statement/expression-statement.inference';
import { getFunctionInference } from './function-inference.helper';

test('has return type', () => {
  const code = 'f(a Integer) Integer:\n    a';
  const tree = parseFunction<FunctionTree>(code);
  expect(tree).toBeInstanceOf(FunctionTree);

  const inference = getFunctionInference(tree, new Map());
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Integer');
});
