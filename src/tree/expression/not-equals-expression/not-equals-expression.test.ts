import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { NotEqualsExpressionTree } from './not-equals-expression.tree';

test('not equals', () => {
    const code = '234 != 634';
    const tree = parseExpression<NotEqualsExpressionTree>(code);

    expect(evalExpression(tree)).toBe(+'234' !== 634);
});
