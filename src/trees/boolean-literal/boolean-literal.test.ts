import { parseCode, parseWrongCode } from '../../test-helper';
import { BooleanLiteralTree } from './boolean-literal.tree';

test('check true', () => {
    const code = 'true';
    const tree = parseCode(code, BooleanLiteralTree);
    expect(tree.value).toBe(code);
});

test('check false', () => {
    const code = 'false';
    const tree = parseCode(code, BooleanLiteralTree);
    expect(tree.value).toBe(code);
});

test('no True', () => {
    const code = 'True';
    parseWrongCode(code, BooleanLiteralTree);
});
