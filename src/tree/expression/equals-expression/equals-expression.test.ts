import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { EqualsExpressionTree } from './equals-expression.tree';

test('equals', () => {
    const code = '234 == 634';
    const tree = parseCode(code, EqualsExpressionTree);

    expect(evalExpression(tree)).toBe(+'234' === 634);
});
