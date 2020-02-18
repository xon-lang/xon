import { evalExpression, parseCode } from '../../../test-helper';
import { ExpressionTree } from '../expression.tree';
import { StringFormatExpressionTree } from './string-format-expression.tree';

test('format string', () => {
    const code = "f'1+1 = {1 + 1}; \\'2+2 = {2+2}'";
    const tree = parseCode(code, StringFormatExpressionTree);

    expect(tree).toBeInstanceOf(StringFormatExpressionTree);
    expect(tree.value).toBeInstanceOf(ExpressionTree);
    expect(evalExpression(tree.value)).toBe(`1+1 = ${1 + 1}; '2+2 = ${2 + 2}`);
});
