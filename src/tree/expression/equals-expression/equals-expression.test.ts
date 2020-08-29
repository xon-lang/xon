import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { EqualsExpressionTree } from './equals-expression.tree';

test('equals', () => {
    const code = '234 == 634';
    const tree = parseExpression<EqualsExpressionTree>(code);

    expect(evalExpression(tree)).toBe(+'234' === 634);
});
