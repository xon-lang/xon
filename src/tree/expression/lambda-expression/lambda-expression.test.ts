import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LambdaExpressionTree } from './lambda-expression.tree';

test('lambda with plus expression body', () => {
    const code = '\\x: 55 + 55';
    const tree = parseExpression<LambdaExpressionTree>(code);
    expect(tree.args.length).toBe(1);
    expect(tree.args[0]).toBe('x');
    expect(evalExpression(tree.body)).toBe(55 + 55);
});
