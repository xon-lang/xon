import { parseCode } from '../../../test-helper';
import { ArrayExpressionTree } from '../array-expression/array-expression.tree';
import { SpreadExpressionTree } from './spread-expression.tree';

test('spread expression', () => {
    const code = '[...[1,2,3]]';
    const tree = parseCode(code, ArrayExpressionTree);
    const item = tree.items[0] as SpreadExpressionTree;
    expect(item).toBeInstanceOf(SpreadExpressionTree);
    expect(item.value).toBeInstanceOf(ArrayExpressionTree);
});
