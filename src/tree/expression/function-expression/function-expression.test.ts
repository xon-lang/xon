import { LiteralExpressionTree } from '..';
import { parseCode } from '../../../test-helper';
import { DecimalLiteralTree } from '../../literal/decimal-literal/decimal-literal.tree';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { FunctionExpressionTree } from './function-expression.tree';

test('function call', () => {
    const code = 'f(3, "str")';
    const tree = parseCode(code, FunctionExpressionTree);
    expect(tree.args.length).toBe(2);
    const [arg1, arg2] = tree.args.map(x => x as LiteralExpressionTree);
    expect(arg1.literal).toBeInstanceOf(DecimalLiteralTree);
    expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
    expect(tree.object).toBeInstanceOf(IdExpressionTree);
});
