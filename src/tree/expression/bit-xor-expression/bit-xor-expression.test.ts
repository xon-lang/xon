import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { BitXorExpressionTree } from './bit-xor-expression.tree';

test('bit xor', () => {
    const code = '123 xor 456';
    const tree = parseExpression<BitXorExpressionTree>(code);
    expect(tree).toBeInstanceOf(BitXorExpressionTree);
    // eslint-disable-next-line no-bitwise
    expect(evalExpression(tree)).toBe(123 ^ 456);
});
