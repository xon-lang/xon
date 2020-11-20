import { parseExpression } from '../../../parse';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { InstanceExpressionTree } from './instance-expression.tree';

test('instance property', () => {
    const code = '@@propName';
    const tree = parseExpression<InstanceExpressionTree>(code);
    expect(tree.memberName).toBe('propName');
    expect(tree.level).toBe(1);
});

test('instance function', () => {
    const code = '@func()';
    const tree = parseExpression<FunctionExpressionTree>(code);
    expect(tree.object).toBeInstanceOf(InstanceExpressionTree);
    if (tree.object instanceof InstanceExpressionTree) {
        expect(tree.object.memberName).toBe('func');
        expect(tree.object.level).toBe(0);
    }
});
