import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { BitAndExpressionTree } from './bit-and-expression.tree';

test('bit and', () => {
    const code = '123 and 456';
    const tree = parseCode(code, BitAndExpressionTree);
    expect(tree).toBeInstanceOf(BitAndExpressionTree);
    expect(evalExpression(tree)).toBe(123 & 456);
});
