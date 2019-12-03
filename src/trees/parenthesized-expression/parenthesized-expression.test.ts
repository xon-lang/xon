import { parseCode } from '../../test-helper/parse';
import { ParenthesizedExpressionTree } from './parenthesized-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('one Parenthesized expression', () => {
    const code = '(1+1)';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(ParenthesizedExpressionTree);
    expect(parser.toPlain().type).toBe('AddExpression');
});

test('several Parenthesized expression', () => {
    const code = '(((-123)))';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(ParenthesizedExpressionTree);
    expect(parser.toPlain().type).toBe('UnaryExpression');
});
