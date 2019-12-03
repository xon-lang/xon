import { parseCode } from '../../test-helper/parse';
import { IndexExpressionTree } from './index-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('several properties', () => {
    const code = 'some.object.propName';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(IndexExpressionTree);

    if (tree instanceof IndexExpressionTree) {
        expect(tree.name).toBe('propName');
    }
});
