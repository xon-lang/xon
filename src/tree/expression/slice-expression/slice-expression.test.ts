import { parseCode, evalExpression } from '../../../test-helper';
import { SliceExpressionTree } from './slice-expression.tree';
import { MemberExpressionTree } from '../member-expression/member-expression.tree';
import { StringLiteralExpressionTree } from '../string-literal-expression/string-literal-expression.tree';
import { AddSubExpressionTree } from '../add-sub-expression/add-sub-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { IntegerLiteralExpressionTree } from '../integer-literal-expression/integer-literal-expression.tree';

test('start and end', () => {
    const code = 'array[1:2+2]';
    const tree = parseCode(code, SliceExpressionTree);
    expect(tree.value).toBeInstanceOf(IdExpressionTree);
    expect(tree.start).toBeInstanceOf(IntegerLiteralExpressionTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(2 + 2);
});

test('start, end, step', () => {
    const code = 'array[1:2+2:2/2]';
    const tree = parseCode(code, SliceExpressionTree);
    expect(tree.value).toBeInstanceOf(IdExpressionTree);
    expect(tree.start).toBeInstanceOf(IntegerLiteralExpressionTree);
    expect(evalExpression(tree.start)).toBe(1);
    expect(evalExpression(tree.end)).toBe(2 + 2);
    expect(evalExpression(tree.step)).toBe(2 / 2);
});
