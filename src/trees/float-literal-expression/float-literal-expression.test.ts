import { parseCode, parseWrongCode } from '../../test-helper';
import { FloatLiteralExpressionTree } from './float-literal-expression.tree';

test('positive number', () => {
    const code = '123.123';
    const tree = parseCode(code, FloatLiteralExpressionTree);
    expect(tree.value).toBe(code);
});

test('zero number', () => {
    const code = '0.0';
    const tree = parseCode(code, FloatLiteralExpressionTree);
    expect(tree.value).toBe(code);
});

test('underscore in number', () => {
    const code = '5_999_245.15463_64';
    const tree = parseCode(code, FloatLiteralExpressionTree);
    expect(tree.value).toBe('5999245.1546364');
});

test('no underscore at the end', () => {
    const code = '123_.2647_';
    parseWrongCode(code, FloatLiteralExpressionTree);
});

test('no several underscores', () => {
    const code = '123_4567__321.0';
    parseWrongCode(code, FloatLiteralExpressionTree);
});
