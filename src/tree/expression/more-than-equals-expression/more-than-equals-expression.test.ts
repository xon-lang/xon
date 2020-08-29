import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { MoreThanEqualsExpressionTree } from './more-than-equals-expression.tree';

test('more than equals', () => {
    const code = '234>=634';
    const tree = parseExpression<MoreThanEqualsExpressionTree>(code);
    expect(evalExpression(tree)).toBe(234 >= 634);
});
