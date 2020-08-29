import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LessThanEqualsExpressionTree } from './less-than-equals-expression.tree';

test('less  equals', () => {
    const code = '234<=234';
    const tree = parseExpression<LessThanEqualsExpressionTree>(code);
    expect(evalExpression(tree)).toBe(234 <= 234);
});
