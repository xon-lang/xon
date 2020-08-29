import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { MoreThanExpressionTree } from './more-than-expression.tree';

test('more than', () => {
    const code = '234>634';
    const tree = parseExpression<MoreThanExpressionTree>(code);
    expect(evalExpression(tree)).toBe(234 > 634);
});
