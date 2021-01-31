import { parseLiteral } from '../../../parse';
import { NullLiteralTree } from './null-literal.tree';

test('check null', () => {
    const code = 'null';
    const tree = parseLiteral<NullLiteralTree>(code);
    expect(tree.value).toBe(null);
});
