import { parseCode, evalExpression } from '../../test-helper';
import { MultiplicationExpressionTree } from './multiplication-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('one multiply by one', () => {
    const code = '2*2';
    const tree = parseCode(code, MultiplicationExpressionTree);
    expect(evalExpression(tree)).toBe(2 * 2);
});
