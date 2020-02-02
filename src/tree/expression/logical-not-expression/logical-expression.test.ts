import { parseCode, evalExpression } from '../../../test-helper';
import { LogicalNotExpressionTree } from './logical-not-expression.tree';

test('logical not', () => {
    const code = '!34536';
    const tree = parseCode(code, LogicalNotExpressionTree);
    expect(tree).toBeInstanceOf(LogicalNotExpressionTree);
    expect(evalExpression(tree)).toBe(!34536)
});
