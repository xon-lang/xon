import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { UnaryPlusExpressionTree } from './unary-plus-expression.tree';

test('unary plus', () => {
    const code = '+34536';
    const tree = parseExpression<UnaryPlusExpressionTree>(code);
    expect(tree).toBeInstanceOf(UnaryPlusExpressionTree);
    expect(evalExpression(tree)).toBe(+34536);
});
