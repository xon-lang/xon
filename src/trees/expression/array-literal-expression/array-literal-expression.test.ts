import { parseCode, parseWrongCode } from '../../../test-helper';
import { ArrayLiteralExpressionTree } from './array-literal-expression.tree';
import { evalExpression } from '../../../test-helper';

test('check array', () => {
    const code = '[1, 2+2, 4, 6+6]';
    const tree = parseCode(code, ArrayLiteralExpressionTree);
    expect(tree.items.length).toBe(4);
    expect(tree.items.map(evalExpression).reduce((a, b) => a + b, 0)).toBe(
        [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0)
    );
});
