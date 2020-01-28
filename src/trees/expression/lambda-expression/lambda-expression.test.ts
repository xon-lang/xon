import { evalExpression, parseCode } from '../../../test-helper';
import { LambdaExpressionTree } from './lambda-expression.tree';

test('lambda with plus expression body', () => {
    const code = '\\55 + 55';
    const tree = parseCode(code, LambdaExpressionTree);
    expect(evalExpression(tree.body)).toBe(110);
});
