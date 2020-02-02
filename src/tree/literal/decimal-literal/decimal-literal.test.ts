import { parseCode } from '../../../test-helper';
import { DecimalLiteralTree } from './decimal-literal.tree';

test('positive number', () => {
    const code = '144126';
    const tree = parseCode(code, DecimalLiteralTree);
    expect(tree.value).toBe(code);
});

test('zero number', () => {
    const code = '0';
    const tree = parseCode(code, DecimalLiteralTree);
    expect(tree.value).toBe(code);
});

test('underscore in number', () => {
    const code = '5_999_245';
    const tree = parseCode(code, DecimalLiteralTree);
    expect(tree.value).toBe('5999245');
});

test('no underscore at the end', () => {
    const code = '123_';
    const tree = parseCode(code, DecimalLiteralTree);
    expect(tree.value).toBe('123');
});

test('no several underscores', () => {
    const code = '123_4567__321';
    const tree = parseCode(code, DecimalLiteralTree);
    expect(tree.value).toBe('1234567');
});
