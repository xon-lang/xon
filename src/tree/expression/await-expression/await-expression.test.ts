import { parseCode, evalExpression } from '../../../test-helper';
import { AwaitExpressionTree } from './await-expression.tree';

test('bit not', () => {
    const code = 'await some.Task';
    const tree = parseCode(code, AwaitExpressionTree);
    expect(tree).toBeInstanceOf(AwaitExpressionTree);
});
