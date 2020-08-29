import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { NumberLiteralTree } from '../../literal/number-literal/number-literal.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { RangeExpressionTree } from './range-expression.tree';

test('start and end', () => {
    const code = '[1:5+2]';
    const tree = parseExpression<RangeExpressionTree>(code);
    expect(tree.start).toBeInstanceOf(LiteralExpressionTree);
    expect(tree.start['literal']).toBeInstanceOf(NumberLiteralTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(5 + 2);
});

test('start, end, step', () => {
    const code = '[1:2+2:2/1]';
    const tree = parseExpression<RangeExpressionTree>(code);
    expect(tree.start).toBeInstanceOf(LiteralExpressionTree);
    expect(tree.start['literal']).toBeInstanceOf(NumberLiteralTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(2 + 2);
    expect(evalExpression(tree.step)).toBe(2 / 1);
});
