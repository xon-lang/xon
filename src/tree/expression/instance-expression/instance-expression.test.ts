import { parseExpression } from '../../../parse';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { InstanceExpressionTree } from './instance-expression.tree';

test('instance property', () => {
    const code = '@propName';
    const tree = parseExpression<InstanceExpressionTree>(code);
    expect(tree.name).toBe('propName');
});

test('instance function', () => {
    const code = '@func()';
    const tree = parseExpression<FunctionExpressionTree>(code);
    expect(tree.object).toBeInstanceOf(InstanceExpressionTree);
    if (tree.object instanceof InstanceExpressionTree) expect(tree.object.name).toBe('func');
});
