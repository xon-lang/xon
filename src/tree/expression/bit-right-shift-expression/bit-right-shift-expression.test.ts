import { evalExpression, parseCode } from '../../../test-helper';
import { BitRightExpressionTree } from './bit-right-shift-expression.tree';

test('shift right arithmetic', () => {
    const code = '2>>14';
    const tree = parseCode(code, BitRightExpressionTree);
    expect(evalExpression(tree)).toBe(2>>14);
});