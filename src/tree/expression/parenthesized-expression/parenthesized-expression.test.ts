import { evalExpression, parseExpression } from '../../../test-helper';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { UnaryMinusExpressionTree } from '../unary-minus-expression/unary-minus-expression.tree';

test('one parenthesized expression', () => {
    const code = '(1+1)';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(AddExpressionTree);
});

test('several parenthesized expression', () => {
    const code = '(((-123)))';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(UnaryMinusExpressionTree);
    expect(evalExpression(tree)).toBe(-123);
});
