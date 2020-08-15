import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { DecimalLiteralTree } from '../../literal/decimal-literal/decimal-literal.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { SliceExpressionTree } from './slice-expression.tree';

test('start and end', () => {
    const code = 'array[1:2+2]';
    const tree = parseCode(code, SliceExpressionTree);
    expect(tree.value).toBeInstanceOf(IdExpressionTree);
    expect(tree.start).toBeInstanceOf(LiteralExpressionTree);
    expect(tree.start['literal']).toBeInstanceOf(DecimalLiteralTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(2 + 2);
});

test('start, end, step', () => {
    const code = 'array[1:2+2:2/2]';
    const tree = parseCode(code, SliceExpressionTree);
    expect(tree.value).toBeInstanceOf(IdExpressionTree);
    expect(tree.start).toBeInstanceOf(LiteralExpressionTree);
    expect(tree.start['literal']).toBeInstanceOf(DecimalLiteralTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(2 + 2);
    expect(evalExpression(tree.step)).toBe(2 / 2);
});
