import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LessThanExpressionTree } from './less-than-expression.tree';

test('less than', () => {
    const code = '234<634';
    const tree = parseExpression<LessThanExpressionTree>(code);
    expect(evalExpression(tree)).toBe(234 < 634);
});
