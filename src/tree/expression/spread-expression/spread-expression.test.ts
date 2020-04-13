import { parseCode } from '../../../test-helper';
import { SpreadExpressionTree } from './spread-expression.tree';

test('spread expression', () => {
    const code = '...some.object.propName';
    const tree = parseCode(code, SpreadExpressionTree);
    expect(tree).toBeInstanceOf(SpreadExpressionTree);
});
