import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { MoreThanExpressionTree } from './more-than-expression.tree';

test('more than', () => {
    const code = '234>634';
    const tree = parseCode(code, MoreThanExpressionTree);
    expect(evalExpression(tree)).toBe(234 > 634);
});
