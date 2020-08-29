import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { UnaryMinusExpressionTree } from './unary-minus-expression.tree';

test('unary minus', () => {
    const code = '-34536';
    const tree = parseExpression<UnaryMinusExpressionTree>(code);
    expect(tree).toBeInstanceOf(UnaryMinusExpressionTree);
    expect(evalExpression(tree)).toBe(-34536);
});
