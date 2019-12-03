import { parseCode } from '../../test-helper/parse';
import { CharacterLiteralTree } from './character-literal.tree';

test('a char', () => {
    const code = "'a'";
    const parser = parseCode(code, CharacterLiteralTree);
    expect(parser.value).toBe(code.replace(/\'/g, ''));
});
