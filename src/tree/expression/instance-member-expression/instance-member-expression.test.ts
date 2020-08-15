import { parseCode } from '../../../parse';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { MemberExpressionTree } from '../member-expression/member-expression.tree';
import { InstanceMemberExpressionTree } from './instance-member-expression.tree';

test('object instance member', () => {
    const code = '.object.propName';
    const tree = parseCode(code, MemberExpressionTree);
    expect(tree.memberName).toBe('propName');

    const instanceMember = tree.object as InstanceMemberExpressionTree;
    expect(instanceMember).toBeInstanceOf(InstanceMemberExpressionTree);
    expect(instanceMember.memberName).toBe('object');
});

test('func instance member', () => {
    const code = '.func().prop';
    const tree = parseCode(code, MemberExpressionTree);
    expect(tree.memberName).toBe('prop');

    const functionTree = tree.object as FunctionExpressionTree;
    expect(functionTree).toBeInstanceOf(FunctionExpressionTree);

    const instanceMember = functionTree.object as InstanceMemberExpressionTree;
    expect(instanceMember).toBeInstanceOf(InstanceMemberExpressionTree);
    expect(instanceMember.memberName).toBe('func');
});

test('single prop instance member', () => {
    const code = '.prop';
    const tree = parseCode(code, InstanceMemberExpressionTree);
    expect(tree.memberName).toBe('prop');
});
