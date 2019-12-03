import { parseCode, parseWrongCode } from '../../test-helper';
import { IntegerLiteralTree } from './integer-literal.tree';

test('positive number', () => {
    const code = '144126';
    const tree = parseCode(code, IntegerLiteralTree);
    expect(tree.value).toBe(code);
});

test('zero number', () => {
    const code = '0';
    const tree = parseCode(code, IntegerLiteralTree);
    expect(tree.value).toBe(code);
});

test('underscore in number', () => {
    const code = '5_999_245';
    const tree = parseCode(code, IntegerLiteralTree);
    expect(tree.value).toBe('5999245');
});

test('no underscore at the start', () => {
    const code = '_123';
    parseWrongCode(code, IntegerLiteralTree);
});

test('no underscore at the end', () => {
    const code = '123_';
    const tree = parseCode(code, IntegerLiteralTree);
    expect(tree.value).toBe('123');
});

test('no several underscores', () => {
    const code = '123_4567__321';
    const tree = parseCode(code, IntegerLiteralTree);
    expect(tree.value).toBe('1234567');
});
