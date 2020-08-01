import { parseCode } from '../../../test-helper';
import { NullLiteralTree } from './null-literal.tree';

test('check null', () => {
    const code = 'null';
    const tree = parseCode(code, NullLiteralTree);
    expect(tree.value).toBe('null');
});
