import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { BitAndExpressionTree } from './bit-and-expression.tree';

test('bit and', () => {
    const code = '123 and 456';
    const tree = parseExpression<BitAndExpressionTree>(code);
    expect(tree).toBeInstanceOf(BitAndExpressionTree);
    // eslint-disable-next-line no-bitwise
    expect(evalExpression(tree)).toBe(123 & 456);
});
