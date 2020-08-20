import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { BitNotExpressionTree } from './bit-not-expression.tree';

test('bit not', () => {
    const code = 'not 34536';
    const tree = parseCode(code, BitNotExpressionTree);
    expect(tree).toBeInstanceOf(BitNotExpressionTree);
    expect(evalExpression(tree)).toBe(~34536);
});
