import { parseCode, evalExpression } from '../../test-helper';
import { DivideExpressionTree } from './divide-expression.tree';

test('one divide by one', () => {
    const code = '9/3';
    const tree = parseCode(code, DivideExpressionTree);
    expect(evalExpression(tree)).toBe(9 / 3);
});
