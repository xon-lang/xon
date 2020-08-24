import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { PowExpressionTree } from './pow-expression.tree';

test('pow positive', () => {
    const code = '2^5';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(PowExpressionTree);
    if (tree instanceof PowExpressionTree) {
        expect(evalExpression(tree.base)).toBe(2);
        expect(evalExpression(tree.exponent)).toBe(5);
    }
    expect(evalExpression(tree)).toBe(Math.pow(2, 5));
});

test('pow negative', () => {
    const code = '-10^-2';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe(-Math.pow(10, -2));
});

test('pow negative in parens', () => {
    const code = '(-10)^-2';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe(Math.pow(-10, -2));
});

test('pow  fraction', () => {
    const code = '-10^-(10/2)';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe(-Math.pow(10, -(10 / 2)));
});
