import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { BitRightShiftExpressionTree } from './bit-right-shift-expression.tree';

test('shift right arithmetic', () => {
    const code = '2>>14';
    const tree = parseExpression<BitRightShiftExpressionTree>(code);
    expect(evalExpression(tree)).toBe(2 >> 14);
});
