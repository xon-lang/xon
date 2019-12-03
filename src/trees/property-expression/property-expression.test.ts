import { parseCode } from '../../test-helper/parse';
import { PropertyExpressionTree } from './property-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('several properties', () => {
    const code = 'some.object.propName';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(PropertyExpressionTree);

    if (tree instanceof PropertyExpressionTree) {
        expect(tree.name).toBe('propName');
    }
});
