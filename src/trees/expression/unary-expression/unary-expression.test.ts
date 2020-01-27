import { parseCode, parseWrongCode } from '../../../test-helper';
import { UnaryExpressionTree } from './unary-expression.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

test('unary plus', () => {
    const code = '+34536';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);

    expect(tree.isPlus).toBe(true);
    expect(tree.isMinus).toBe(false);
    expect(tree.isLogicalNot).toBe(false);
    expect(tree.isBitNot).toBe(false);
});

test('unary minus', () => {
    const code = '-1';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);

    expect(tree.isPlus).toBe(false);
    expect(tree.isMinus).toBe(true);
    expect(tree.isLogicalNot).toBe(false);
    expect(tree.isBitNot).toBe(false);
});

test('unary logic not', () => {
    const code = '!true';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);

    expect(tree.isPlus).toBe(false);
    expect(tree.isMinus).toBe(false);
    expect(tree.isLogicalNot).toBe(true);
    expect(tree.isBitNot).toBe(false);
});

test('unary bitwise not', () => {
    const code = '~1';
    const tree = parseCode(code, UnaryExpressionTree);
    expect(tree).toBeInstanceOf(UnaryExpressionTree);

    expect(tree.isPlus).toBe(false);
    expect(tree.isMinus).toBe(false);
    expect(tree.isLogicalNot).toBe(false);
    expect(tree.isBitNot).toBe(true);
});
