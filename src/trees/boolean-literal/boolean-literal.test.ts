import { parseCode, parseWrongCode } from '../../test-helper/parse';
import { BooleanLiteralTree } from './boolean-literal.tree';

test('check true', () => {
    const code = 'true';
    const parser = parseCode(code, BooleanLiteralTree);
    expect(parser.value).toBe(code);
});

test('check false', () => {
    const code = 'false';
    const parser = parseCode(code, BooleanLiteralTree);
    expect(parser.value).toBe(code);
});

test('no True', () => {
    const code = 'True';
    parseWrongCode(code, BooleanLiteralTree);
});
