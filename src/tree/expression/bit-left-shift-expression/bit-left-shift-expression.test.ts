import { evalExpression, parseCode } from '../../../test-helper';
import { BitLeftExpressionTree } from './bit-left-shift-expression.tree';

test('shift left arithmetic', () => {
    const code = '2<<14';
    const tree = parseCode(code, BitLeftExpressionTree);
    expect(evalExpression(tree)).toBe(2 << 14);
});
