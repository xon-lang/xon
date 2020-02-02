import { parseCode } from '../../../test-helper';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { MemberExpressionTree } from './member-expression.tree';

test('several properties', () => {
    const code = 'some.object.propName';
    const tree = parseCode(code, MemberExpressionTree);
    expect(tree.name).toBe('propName');
});

test('member object check', () => {
    const code = 'func().prop';
    const tree = parseCode(code, MemberExpressionTree);
    expect(tree.name).toBe('prop');
    expect(tree.object).toBeInstanceOf(FunctionExpressionTree);
});
