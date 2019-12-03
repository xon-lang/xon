import { parseCode, parseWrongCode } from '../../test-helper';
import { UnaryExpressionTree } from './unary-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('unary plus', () => {
    const code = '+34536';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);
});

test('unary minus', () => {
    const code = '-1';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);
});

test('unary not', () => {
    const code = '!true';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);
});
