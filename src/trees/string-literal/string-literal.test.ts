import { parseCode, parseWrongCode } from '../../test-helper/parse';
import { StringLiteralTree } from './string-literal.tree';

test('correct string', () => {
    const code = '"some string"';
    const parser = parseCode(code, StringLiteralTree);
    expect(parser.value).toBe(code.replace(/\"/g, ''));
});

test('incorrect string', () => {
    const code = "'some string'";
    parseWrongCode(code, StringLiteralTree);
});
