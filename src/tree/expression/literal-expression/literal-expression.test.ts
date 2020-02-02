import { LiteralExpressionTree } from '.';
import { parseCode } from '../../../test-helper';

test('check true', () => {
    const code = 'true';
    const tree = parseCode(code, LiteralExpressionTree);
    expect(tree.literal.value).toBe(code);
});
