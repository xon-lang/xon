import { parseCode, evalExpression } from '../../test-helper';
import { SubtractionExpressionTree } from './subtraction-expression.tree';

test('one minus one', () => {
    const code = '10-5';
    const tree = parseCode(code, SubtractionExpressionTree);
    expect(evalExpression(tree)).toBe(10 - 5);
});
