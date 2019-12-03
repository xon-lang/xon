import { parseCode, parseWrongCode } from '../../test-helper/parse';
import { IntegerLiteralTree } from './integer-literal.tree';

test('positive number', () => {
    const code = '144126';
    const parser = parseCode(code, IntegerLiteralTree);
    expect(parser.value).toBe(code);
});

test('zero number', () => {
    const code = '0';
    const parser = parseCode(code, IntegerLiteralTree);
    expect(parser.value).toBe(code);
});

test('underscore in number', () => {
    const code = '5_999_245';
    const parser = parseCode(code, IntegerLiteralTree);
    expect(parser.value).toBe('5999245');
});

test('no underscore at the start', () => {
    const code = '_123';
    parseWrongCode(code, IntegerLiteralTree);
});

test('no underscore at the end', () => {
    const code = '123_';
    const parser = parseCode(code, IntegerLiteralTree);
    expect(parser.value).toBe('123');
});

test('no several underscores', () => {
    const code = '123_4567__321';
    const parser = parseCode(code, IntegerLiteralTree);
    expect(parser.value).toBe('1234567');
});
