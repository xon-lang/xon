import { parseCode } from '../../test-helper/test-parser';
import { ParenthesizedExpressionParser } from './parenthesized-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('one Parenthesized expression', () => {
    const code = '(1+1)';
    const parser = parseCode(code, ExpressionParser);
    expect(parser.value).toBeInstanceOf(ParenthesizedExpressionParser);
    expect(parser.toPlain().type).toBe('AddExpression');
});

test('several Parenthesized expression', () => {
    const code = '(((-123)))';
    const parser = parseCode(code, ExpressionParser);
    expect(parser.value).toBeInstanceOf(ParenthesizedExpressionParser);
    expect(parser.toPlain().type).toBe('UnaryExpression');
});
