import { parseCode, evalExpression } from '../../test-helper';
import { FunctionCallExpressionTree } from './function-call-expression.tree';
import { IntegerLiteralExpressionTree } from '../integer-literal-expression/integer-literal-expression.tree';
import { StringLiteralExpressionTree } from '../string-literal-expression/string-literal-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';

test('function call', () => {
    const code = 'f(3, "str")';
    const tree = parseCode(code, FunctionCallExpressionTree);
    expect(tree.arguments.length).toBe(2);
    expect(tree.arguments[0]).toBeInstanceOf(IntegerLiteralExpressionTree);
    expect(tree.arguments[1]).toBeInstanceOf(StringLiteralExpressionTree);
    expect(tree.function).toBeInstanceOf(IdExpressionTree);
});
