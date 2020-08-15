import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { UnaryPlusExpressionTree } from './unary-plus-expression.tree';

test('unary plus', () => {
    const code = '+34536';
    const tree = parseCode(code, UnaryPlusExpressionTree);
    expect(tree).toBeInstanceOf(UnaryPlusExpressionTree);
    expect(evalExpression(tree)).toBe(+34536);
});
