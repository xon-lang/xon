import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { BitNotExpressionTree } from './bit-not-expression.tree';

test('bit not', () => {
    const code = 'not 34536';
    const tree = parseExpression<BitNotExpressionTree>(code);
    expect(tree).toBeInstanceOf(BitNotExpressionTree);
    expect(evalExpression(tree)).toBe(~34536);
});
