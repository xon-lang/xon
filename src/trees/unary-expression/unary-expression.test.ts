import { parseCode, parseWrongCode } from '../../test-helper/parse';
import { UnaryExpressionTree } from './unary-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('unary plus', () => {
    const code = '+34536';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(UnaryExpressionTree);
});

test('unary minus', () => {
    const code = '-1';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(UnaryExpressionTree);
});

test('unary not', () => {
    const code = '!true';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(UnaryExpressionTree);
});

test('no binary', () => {
    const code = '5 + 7';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).not.toBeInstanceOf(UnaryExpressionTree);
});
