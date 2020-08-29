import { parseExpression } from '../../../parse';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { MemberExpressionTree } from './member-expression.tree';

test('several properties', () => {
    const code = 'some.object.propName';
    const tree = parseExpression<MemberExpressionTree>(code);
    expect(tree.hasElvis).toBe(false);
    expect(tree.memberName).toBe('propName');
});

test('member object check', () => {
    const code = 'func().prop';
    const tree = parseExpression<MemberExpressionTree>(code);
    expect(tree.hasElvis).toBe(false);
    expect(tree.memberName).toBe('prop');
    expect(tree.object).toBeInstanceOf(FunctionExpressionTree);
});

test('has elvis', () => {
    const code = 'func()?.prop';
    const tree = parseExpression<MemberExpressionTree>(code);
    expect(tree.hasElvis).toBe(true);
    expect(tree.memberName).toBe('prop');
    expect(tree.object).toBeInstanceOf(FunctionExpressionTree);
});
