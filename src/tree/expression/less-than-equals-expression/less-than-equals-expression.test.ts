import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { LessThanEqualsExpressionTree } from './less-than-equals-expression.tree';

test('less  equals', () => {
    const code = '234<=234';
    const tree = parseCode(code, LessThanEqualsExpressionTree);
    expect(evalExpression(tree)).toBe(234 <= 234);
});
