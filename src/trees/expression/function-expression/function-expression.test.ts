import { parseCode, evalExpression } from '../../../test-helper';
import { FunctionExpressionTree } from './function-expression.tree';
import { IntegerLiteralExpressionTree } from '../integer-literal-expression/integer-literal-expression.tree';
import { StringLiteralExpressionTree } from '../string-literal-expression/string-literal-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';

test('function call', () => {
    const code = 'f(3, "str")';
    const tree = parseCode(code, FunctionExpressionTree);
    expect(tree.args.length).toBe(2);
    expect(tree.args[0]).toBeInstanceOf(IntegerLiteralExpressionTree);
    expect(tree.args[1]).toBeInstanceOf(StringLiteralExpressionTree);
    expect(tree.object).toBeInstanceOf(IdExpressionTree);
});
