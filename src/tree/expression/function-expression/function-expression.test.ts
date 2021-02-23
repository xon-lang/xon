import { parseExpression } from '../../../parse';
import { IntegerLiteralTree } from '../../literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { FunctionExpressionTree } from './function-expression.tree';

test('function call', () => {
  const code = 'f(count = 3, "str")';
  const tree = parseExpression<FunctionExpressionTree>(code);
  expect(tree.args.length).toBe(2);
  expect(tree.args[0].name).toBe('count');
  expect((tree.args[0].value as LiteralExpressionTree).literal).toBeInstanceOf(IntegerLiteralTree);
  expect((tree.args[0].value as LiteralExpressionTree).literal.value).toBe(3);
  expect((tree.args[1].value as LiteralExpressionTree).literal).toBeInstanceOf(StringLiteralTree);
  expect((tree.args[1].value as LiteralExpressionTree).literal.value).toBe('str');
  expect(tree.object).toBeInstanceOf(IdExpressionTree);
});

test('function on several lines', () => {
  const code = `f(3,
        "str", 123, 
    415)`;
  const tree = parseExpression<FunctionExpressionTree>(code);
  expect(tree.args.length).toBe(4);
  const [arg1, arg2] = tree.args.map((x) => x.value as LiteralExpressionTree);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
  expect(tree.object).toBeInstanceOf(IdExpressionTree);
});
