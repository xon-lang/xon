import { evalExpression, parseExpression } from '../../../test-helper';
import { AddSubExpressionTree } from '../add-sub-expression/add-sub-expression.tree';
import { UnaryMinusExpressionTree } from '../unary-minus-expression/unary-minus-expression.tree';

test('one parenthesized expression', () => {
    const code = '(1+1)';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(AddSubExpressionTree);
});

test('several parenthesized expression', () => {
    const code = '(((-123)))';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(UnaryMinusExpressionTree);
    expect(evalExpression(tree)).toBe(-123);
});
