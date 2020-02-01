import { parseCode, parseWrongCode } from '../../../test-helper';
import { StringLiteralExpressionTree } from './string-literal-expression.tree';

test('correct string', () => {
    const code = '"some string"';
    const tree = parseCode(code, StringLiteralExpressionTree);
    expect(tree.value).toBe(code.replace(/\"/g, ''));
});

test('incorrect string', () => {
    const code = "'some string'";
    parseWrongCode(code, StringLiteralExpressionTree);
});
