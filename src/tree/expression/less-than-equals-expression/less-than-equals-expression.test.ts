import { evalExpression, parseCode } from '../../../test-helper';
import { LessThanEqualsExpressionTree } from './less-than-equals-expression.tree';

test('less  equals', () => {
    const code = '234<=234';
    const tree = parseCode(code, LessThanEqualsExpressionTree);
    expect(evalExpression(tree)).toBe(234 <= 234);
});
