import { evalExpression, parseCode } from '../../../test-helper';
import { LambdaExpressionTree } from './lambda-expression.tree';

test('lambda with plus expression body', () => {
    const code = '\\x: 55 + 55';
    const tree = parseCode(code, LambdaExpressionTree);
    expect(tree.args.length).toBe(1);
    expect(tree.args[0]).toBe('x');
    expect(evalExpression(tree.body)).toBe(55 + 55);
});
