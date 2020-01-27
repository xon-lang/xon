import { parseCode } from '../../../test-helper';
import { PropertyExpressionTree } from './property-expression.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

test('several properties', () => {
    const code = 'some.object.propName';
    const tree = parseCode(code, PropertyExpressionTree);
    expect(tree.name).toBe('propName');
});
