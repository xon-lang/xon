import { evalExpression, parseCode } from '../../../test-helper';
import { NotEqualsExpressionTree } from './not-equals-expression.tree';

test('not equals', () => {
    const code = '234 != 634';
    const tree = parseCode(code, NotEqualsExpressionTree);

    expect(evalExpression(tree)).toBe(+'234' !== 634);
});
