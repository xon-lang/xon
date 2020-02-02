import { parseCode, evalExpression } from '../../../test-helper';
import { RangeExpressionTree } from './range-expression.tree';
import { IntegerLiteralExpressionTree } from '../integer-literal-expression/integer-literal-expression.tree';

test('start and end', () => {
    const code = '[1:5+2]';
    const tree = parseCode(code, RangeExpressionTree);
    expect(tree.start).toBeInstanceOf(IntegerLiteralExpressionTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(5 + 2);
});

test('start, end, step', () => {
    const code = '[1:2+2:2/1]';
    const tree = parseCode(code, RangeExpressionTree);
    expect(tree.start).toBeInstanceOf(IntegerLiteralExpressionTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(2 + 2);
    expect(evalExpression(tree.step)).toBe(2 / 1);
});
