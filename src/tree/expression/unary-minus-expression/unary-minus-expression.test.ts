import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { UnaryMinusExpressionTree } from './unary-minus-expression.tree';

test('unary minus', () => {
    const code = '-34536';
    const tree = parseCode(code, UnaryMinusExpressionTree);
    expect(tree).toBeInstanceOf(UnaryMinusExpressionTree);
    expect(evalExpression(tree)).toBe(-34536);
});
