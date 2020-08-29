import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LogicalAndExpressionTree } from './logical-and-expression.tree';

test('logical and', () => {
    const code = '123 && 456';
    const tree = parseExpression<LogicalAndExpressionTree>(code);
    expect(tree).toBeInstanceOf(LogicalAndExpressionTree);
    expect(evalExpression(tree)).toBe(123 && 456);
});
