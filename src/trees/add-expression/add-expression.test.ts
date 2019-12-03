import { parseCode, evalExpression } from '../../test-helper';
import { AddExpressionTree } from './add-expression.tree';

test('one_plus_one', () => {
    const code = '1+1';
    const tree = parseCode(code, AddExpressionTree);
    expect(evalExpression(tree)).toBe(2);
});
