import { parseCode, parseWrongCode } from '../../test-helper/parse';
import { FloatLiteralTree } from './float-literal.tree';

test('positive number', () => {
    const code = '123.123';
    const tree = parseCode(code, FloatLiteralTree);
    expect(tree.value).toBe(code);
});

test('zero number', () => {
    const code = '0.0';
    const tree = parseCode(code, FloatLiteralTree);
    expect(tree.value).toBe(code);
});

test('underscore in number', () => {
    const code = '5_999_245.15463_64';
    const tree = parseCode(code, FloatLiteralTree);
    expect(tree.value).toBe('5999245.1546364');
});

test('no underscore at the start', () => {
    const code = '_123.2535';
    parseWrongCode(code, FloatLiteralTree);
});

test('no underscore at the end', () => {
    const code = '123_.2647_';
    parseWrongCode(code, FloatLiteralTree);
});

test('no several underscores', () => {
    const code = '123_4567__321.0';
    parseWrongCode(code, FloatLiteralTree);
});
