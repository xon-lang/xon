import { parseCode } from '../../test-helper';
import { ParenthesizedExpressionTree } from './parenthesized-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { UnaryExpressionTree } from '../unary-expression/unary-expression.tree';

test('one parenthesized expression', () => {
    const code = '(1+1)';
    const tree = parseCode(code, AddExpressionTree);
    expect(tree).toBeInstanceOf(AddExpressionTree);
});

test('several parenthesized expression', () => {
    const code = '(((-123)))';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);
});
