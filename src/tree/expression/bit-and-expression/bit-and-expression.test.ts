import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { BitAndExpressionTree } from './bit-and-expression.tree';

test('bit and', () => {
    const code = '123 and 456';
    const tree = parseExpression<BitAndExpressionTree>(code);
    expect(tree).toBeInstanceOf(BitAndExpressionTree);
    expect(evalExpression(tree)).toBe(123 & 456);
});
