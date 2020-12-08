import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { NumType } from '../../type/primitive/num-type';
import { SubstractExpressionTree } from './substract-expression.tree';

test('substract decimal', () => {
    const code = '2563460-25_325_235_265_311';
    const tree = parseExpression<SubstractExpressionTree>(code);
    expect(evalExpression(tree)).toBe(2563460 - 25_325_235_265_311);
});

test('num minus num', () => {
    const code = '10-1';
    const tree = parseExpression<SubstractExpressionTree>(code);
    expect(tree.getType()).toBeInstanceOf(NumType);
    expect(evalExpression(tree)).toBe(9);
});

test('num minus bool', () => {
    const code = '1- true';
    const tree = parseExpression<SubstractExpressionTree>(code);
    expect(tree.getType()).toBeInstanceOf(NumType);
    expect(evalExpression(tree)).toBe(0);
});

test('num minus null', () => {
    const code = '1- null';
    const tree = parseExpression<SubstractExpressionTree>(code);
    expect(tree.getType()).toBeInstanceOf(NumType);
    expect(evalExpression(tree)).toBe(1);
});

test('num minus str', () => {
    const code = "1 - 'str'";
    const tree = parseExpression<SubstractExpressionTree>(code);
    expect(tree.getType()).toBeUndefined();
});
