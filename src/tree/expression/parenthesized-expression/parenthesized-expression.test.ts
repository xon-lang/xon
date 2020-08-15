import { evalExpression, parseExpression } from '../../../test-helper';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { ParenthesizedExpressionTree } from './parenthesized-expression.tree';

test('one parenthesized expression', () => {
    const code = '(1+1)';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(ParenthesizedExpressionTree);
    if (tree instanceof ParenthesizedExpressionTree)
        expect(tree.value).toBeInstanceOf(AddExpressionTree);
});

test('several parenthesized expression', () => {
    const code = '(((-123)))';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(ParenthesizedExpressionTree);
    expect(evalExpression(tree)).toBe(-123);
});
