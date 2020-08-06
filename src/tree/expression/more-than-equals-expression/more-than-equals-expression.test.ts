import { evalExpression, parseCode } from '../../../test-helper';
import { MoreThanEqualsExpressionTree } from './more-than-equals-expression.tree';

test('more than equals', () => {
    const code = '234>=634';
    const tree = parseCode(code, MoreThanEqualsExpressionTree);
    expect(evalExpression(tree)).toBe(234 >= 634);
});
