import { parseExpression } from '../../../parse';
import { NumberLiteralTree } from '../../literal/number-literal/number-literal.tree';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { FunctionExpressionTree } from './function-expression.tree';

test('function call', () => {
    const code = "f(3, 'str')";
    const tree = parseExpression<FunctionExpressionTree>(code);
    expect(tree.args.length).toBe(2);
    const [arg1, arg2] = tree.args.map((x) => x as LiteralExpressionTree);
    expect(arg1.literal).toBeInstanceOf(NumberLiteralTree);
    expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
    expect(tree.object).toBeInstanceOf(IdExpressionTree);
});

test('function on several lines', () => {
    const code = `f(3,
        'str', 123, 
    415)`;
    const tree = parseExpression<FunctionExpressionTree>(code);
    expect(tree.args.length).toBe(4);
    const [arg1, arg2] = tree.args.map((x) => x as LiteralExpressionTree);
    expect(arg1.literal).toBeInstanceOf(NumberLiteralTree);
    expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
    expect(tree.object).toBeInstanceOf(IdExpressionTree);
});
