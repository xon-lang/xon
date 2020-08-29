import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { BitLeftShiftExpressionTree } from './bit-left-shift-expression.tree';

test('shift left arithmetic', () => {
    const code = '2<<14';
    const tree = parseExpression<BitLeftShiftExpressionTree>(code);
    expect(evalExpression(tree)).toBe(2 << 14);
});
