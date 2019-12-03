import { parseCode } from '../../test-helper/parse';
import { ParenthesizedExpressionTree } from './parenthesized-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { UnaryExpressionTree } from '../unary-expression/unary-expression.tree';

test('one parenthesized expression', () => {
    const code = '(1+1)';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(AddExpressionTree);
    expect(tree.toPlain().type).toBe('AddExpression');
});

test('several parenthesized expression', () => {
    const code = '(((-123)))';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(UnaryExpressionTree);
    expect(tree.toPlain().type).toBe('UnaryExpression');
});
