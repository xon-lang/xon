import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { BitXorExpressionTree } from './bit-xor-expression.tree';

test('bit xor', () => {
    const code = '123 xor 456';
    const tree = parseCode(code, BitXorExpressionTree);
    expect(tree).toBeInstanceOf(BitXorExpressionTree);
    expect(evalExpression(tree)).toBe(123 ^ 456);
});
