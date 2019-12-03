import { parseCode, evalExpression } from '../../test-helper';
import { AddExpressionTree } from './add-expression.tree';

test('one plus one', () => {
    const code = '1+1';
    const tree = parseCode(code, AddExpressionTree);
    expect(evalExpression(tree)).toBe(2);
});
