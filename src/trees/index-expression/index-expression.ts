import { parseCode } from '../../test-helper';
import { IndexExpressionTree } from './index-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { PropertyExpressionTree } from '../property-expression/property-expression.tree';

test('integer expression index', () => {
    const code = 'some_object.prop["ppp"]';
    const tree = parseCode(code, IndexExpressionTree);
    expect(tree.objectExpression).toBeInstanceOf(PropertyExpressionTree);
    expect(tree.indexExpression).toBeInstanceOf(AddExpressionTree);
});
