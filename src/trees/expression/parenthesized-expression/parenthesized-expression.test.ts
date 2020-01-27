import { parseCode, evalExpression, parseExpression } from '../../../test-helper';
import { AddSubExpressionTree } from '../add-sub-expression/add-sub-expression.tree';
import { UnaryExpressionTree } from '../unary-expression/unary-expression.tree';
import { ParenthesizedExpressionTree } from './parenthesized-expression.tree';

test('one parenthesized expression', () => {
    const code = '(1+1)';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(AddSubExpressionTree);
});

test('several parenthesized expression', () => {
    const code = '(((-123)))';
    const tree = parseExpression(code);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);
    expect(evalExpression(tree)).toBe(-123);
});
