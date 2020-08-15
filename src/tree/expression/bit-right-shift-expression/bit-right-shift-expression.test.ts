import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { BitRightShiftExpressionTree } from './bit-right-shift-expression.tree';

test('shift right arithmetic', () => {
    const code = '2>>14';
    const tree = parseCode(code, BitRightShiftExpressionTree);
    expect(evalExpression(tree)).toBe(2 >> 14);
});
