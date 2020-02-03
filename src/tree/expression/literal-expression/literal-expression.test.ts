import { parseCode } from '../../../test-helper';
import { LiteralExpressionTree } from './literal-expression.tree';

test('check true', () => {
    const code = 'true';
    const tree = parseCode(code, LiteralExpressionTree);
    expect(tree.literal.value).toBe(code);
});
