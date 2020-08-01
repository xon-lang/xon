import { parseCode } from '../../../test-helper';
import { AddSubExpressionTree } from '../add-sub-expression/add-sub-expression.tree';
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
    expect(tree.value).toBeInstanceOf(AddSubExpressionTree);
});
