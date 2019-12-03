import { parseCode } from '../../test-helper';
import { CharacterLiteralExpressionTree } from './character-literal-expression.tree';

test('a char', () => {
    const code = "'a'";
    const tree = parseCode(code, CharacterLiteralExpressionTree);
    expect(tree.value).toBe(code.replace(/\'/g, ''));
});
