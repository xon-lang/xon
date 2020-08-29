import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { MultiplyExpressionTree } from './multiply-expression.tree';

test('two multiply by two', () => {
    const code = '2*2';
    const tree = parseExpression<MultiplyExpressionTree>(code);
    expect(evalExpression(tree)).toBe(2 * 2);
});
