import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LogicalNotExpressionTree } from './logical-not-expression.tree';

test('logical not', () => {
    const code = '!34536';
    const tree = parseExpression<LogicalNotExpressionTree>(code);
    expect(tree).toBeInstanceOf(LogicalNotExpressionTree);
    expect(evalExpression(tree)).toBe(!34536);
});
