import { evalExpression, parseCode } from '../../../test-helper';
import { SubstractExpressionTree } from './substract-expression.tree';

test('substract decimal', () => {
    const code = '2563460-25_325_235_265_311';
    const tree = parseCode(code, SubstractExpressionTree);
    expect(evalExpression(tree)).toBe(2563460 - 25_325_235_265_311);
});
