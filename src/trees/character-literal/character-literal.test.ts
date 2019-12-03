import { parseCode } from '../../test-helper/parse';
import { CharacterLiteralTree } from './character-literal.tree';

test('a char', () => {
    const code = "'a'";
    const tree = parseCode(code, CharacterLiteralTree);
    expect(tree.value).toBe(code.replace(/\'/g, ''));
});
