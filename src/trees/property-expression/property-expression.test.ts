import { parseCode } from '../../test-helper';
import { PropertyExpressionTree } from './property-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('several properties', () => {
    const code = 'some.object.propName';
    const tree = parseCode(code, PropertyExpressionTree);
    expect(tree.name).toBe('propName');
});
