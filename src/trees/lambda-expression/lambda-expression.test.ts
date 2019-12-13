import { parseCode, evalExpression } from '../../test-helper';
import { LambdaExpressionTree } from './lambda-expression.tree';

test('one_plus_one', () => {
    const code = '(x, y) => 55 + 55';
    const tree = parseCode(code, LambdaExpressionTree);
    expect(tree.args.length).toBe(2);
    expect(evalExpression(tree.body)).toBe(110);
});
