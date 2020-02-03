import { evalExpression, parseCode } from '../../../test-helper';
import { DecimalLiteralTree } from '../../literal/decimal-literal/decimal-literal.tree';
import { RangeExpressionTree } from './range-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';

test('start and end', () => {
    const code = '[1:5+2]';
    const tree = parseCode(code, RangeExpressionTree);
    expect(tree.start).toBeInstanceOf(LiteralExpressionTree);
    expect(tree.start['literal']).toBeInstanceOf(DecimalLiteralTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(5 + 2);
});

test('start, end, step', () => {
    const code = '[1:2+2:2/1]';
    const tree = parseCode(code, RangeExpressionTree);
    expect(tree.start).toBeInstanceOf(LiteralExpressionTree);
    expect(tree.start['literal']).toBeInstanceOf(DecimalLiteralTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(2 + 2);
    expect(evalExpression(tree.step)).toBe(2 / 1);
});
