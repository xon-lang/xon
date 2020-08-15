import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { LogicalOrExpressionTree } from './logical-or-expression.tree';

test('logical or', () => {
    const code = '123 || 456';
    const tree = parseCode(code, LogicalOrExpressionTree);
    expect(tree).toBeInstanceOf(LogicalOrExpressionTree);
    expect(evalExpression(tree)).toBe(123 || 456);
});
