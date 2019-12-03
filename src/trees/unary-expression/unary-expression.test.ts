import { parseCode, parseWrongCode } from '../../test-helper/parse';
import { UnaryExpressionTree } from './unary-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('unary plus', () => {
    const code = '+34536';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(UnaryExpressionTree);
});

test('unary minus', () => {
    const code = '-1';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(UnaryExpressionTree);
});

test('unary not', () => {
    const code = '!true';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(UnaryExpressionTree);
});

test('no binary', () => {
    const code = '5 + 7';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).not.toBeInstanceOf(UnaryExpressionTree);
});
