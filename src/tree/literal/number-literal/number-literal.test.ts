import { parseCode } from '../../../parse';
import { NumberLiteralTree } from './number-literal.tree';

test('zero int number', () => {
    const code = '0';
    const tree = parseCode(code, NumberLiteralTree);
    expect(tree.value).toBe(0);
});

test('positive int number', () => {
    const code = '2523';
    const tree = parseCode(code, NumberLiteralTree);
    expect(tree.value).toBe(2523);
});

test('positive float number', () => {
    const code = '123.123';
    const tree = parseCode(code, NumberLiteralTree);
    expect(tree.value).toBe(123.123);
});

test('zero float number', () => {
    const code = '0.0';
    const tree = parseCode(code, NumberLiteralTree);
    expect(tree.value).toBe(0.0);
});

test('zero float number no base', () => {
    const code = '.0';
    const tree = parseCode(code, NumberLiteralTree);
    expect(tree.value).toBe(0.0);
});

test('zero float number', () => {
    const code = '0.0';
    const tree = parseCode(code, NumberLiteralTree);
    expect(tree.value).toBe(0.0);
});

test('underscore in number', () => {
    const code = '5_999_245.15463_64';
    const tree = parseCode(code, NumberLiteralTree);
    expect(tree.value).toBe(5999245.1546364);
    expect(tree.value).toBe(5999245.1546364);
    expect(tree.value).toBe(5999245.1546364);
    expect(tree.value).toBe(5999245.1546364);
});
