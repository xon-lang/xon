import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { SubstractExpressionTree } from './substract-expression.tree';

test('substract decimal', () => {
    const code = '2563460-25_325_235_265_311';
    const tree = parseExpression<SubstractExpressionTree>(code);
    expect(evalExpression(tree)).toBe(2563460 - 25_325_235_265_311);
});
