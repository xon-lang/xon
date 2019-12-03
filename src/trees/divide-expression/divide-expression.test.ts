import { parseCode } from '../../test-helper/parse';
import { DivideExpressionTree } from './divide-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('one divide by one', () => {
    const code = '1/1';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(DivideExpressionTree);
});
