import { parseCode, evalExpression } from '../../../test-helper';
import { BitOrExpressionTree } from './bit-or-expression.tree';

test('bit or', () => {
    const code = '123 or 456';
    const tree = parseCode(code, BitOrExpressionTree);
    expect(tree).toBeInstanceOf(BitOrExpressionTree);
    expect(evalExpression(tree)).toBe(123 | 456)
});
