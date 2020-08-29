import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LogicalOrExpressionTree } from './logical-or-expression.tree';

test('logical or', () => {
    const code = '123 || 456';
    const tree = parseExpression<LogicalOrExpressionTree>(code);
    expect(tree).toBeInstanceOf(LogicalOrExpressionTree);
    expect(evalExpression(tree)).toBe(123 || 456);
});
