import { parseCode } from '../../test-helper/parse';
import { DivideExpressionTree } from './divide-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('one divide by one', () => {
    const code = '1/1';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(DivideExpressionTree);
});
