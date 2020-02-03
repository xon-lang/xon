import { parseCode } from '../../../test-helper';
import { StringLiteralTree } from './string-literal.tree';

test('correct string', () => {
    const code = "'some string'";
    const tree = parseCode(code, StringLiteralTree);
    expect(tree.value).toBe(code.replace(/\'/g, ''));
});
