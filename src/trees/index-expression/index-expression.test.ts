import { parseCode } from '../../test-helper';
import { IndexExpressionTree } from './index-expression.tree';
import { PropertyExpressionTree } from '../property-expression/property-expression.tree';
import { StringLiteralExpressionTree } from '../string-literal-expression/string-literal-expression.tree';
import { AddExpressionTree } from '../add-expression/add-expression.tree';

test('string expression index', () => {
    const code = 'some_object.prop["ppp"]';
    const tree = parseCode(code, IndexExpressionTree);
    expect(tree.objectExpression).toBeInstanceOf(PropertyExpressionTree);
    expect(tree.indexExpression).toBeInstanceOf(StringLiteralExpressionTree);
});

test('integer expression index', () => {
    const code = 'some_object.prop[12+33]';
    const tree = parseCode(code, IndexExpressionTree);
    expect(tree.objectExpression).toBeInstanceOf(PropertyExpressionTree);
    expect(tree.indexExpression).toBeInstanceOf(AddExpressionTree);
});
