import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { BitOrExpressionTree } from './bit-or-expression.tree';

test('bit or', () => {
    const code = '123 or 456';
    const tree = parseExpression<BitOrExpressionTree>(code);
    expect(tree).toBeInstanceOf(BitOrExpressionTree);
    expect(evalExpression(tree)).toBe(123 | 456);
});
