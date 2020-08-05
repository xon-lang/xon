import { parseCode } from '../../../test-helper';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { ExpressionTree } from '../expression.tree';
import { StringFormatExpressionTree } from './string-format-expression.tree';

test('format string', () => {
    const code = "f'1+1 = {1 + 1}; \\'2+2 = {2+2}'";
    const tree = parseCode(code, StringFormatExpressionTree);

    expect(tree).toBeInstanceOf(StringFormatExpressionTree);
    expect(tree.value).toBeInstanceOf(ExpressionTree);
    expect(tree.value.eval()).toBe(`1+1 = ${1 + 1}; '2+2 = ${2 + 2}`);
});

test('another format string', () => {
    const code = "f'{color}{chargeIcon}{battery.percent}% | size=13'";
    const tree = parseCode(code, StringFormatExpressionTree);

    expect(tree).toBeInstanceOf(StringFormatExpressionTree);
    expect(tree.value).toBeInstanceOf(AddExpressionTree);
});
