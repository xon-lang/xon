import { parseCode } from '../../../test-helper';
import { CharacterLiteralTree } from './character-literal.tree';

test('a char', () => {
    const code = "'a'";
    const tree = parseCode(code, CharacterLiteralTree);
    expect(tree.value).toBe(code.replace(/\'/g, ''));
});
