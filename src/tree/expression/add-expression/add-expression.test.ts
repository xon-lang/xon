import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { StrType } from '../../type/primitive/str-type';
import { NumType } from './../../type/primitive/num-type';
import { AddExpressionTree } from './add-expression.tree';

test('num plus num', () => {
    const code = '1+1';
    const tree = parseExpression<AddExpressionTree>(code);
    expect(tree.getType()).toBeInstanceOf(NumType);
    expect(evalExpression(tree)).toBe(2);
});

test('num plus bool', () => {
    const code = '1+ true';
    const tree = parseExpression<AddExpressionTree>(code);
    expect(tree.getType()).toBeInstanceOf(NumType);
    expect(evalExpression(tree)).toBe(2);
});

test('num plus null', () => {
    const code = '1+ null';
    const tree = parseExpression<AddExpressionTree>(code);
    expect(tree.getType()).toBeInstanceOf(NumType);
    expect(evalExpression(tree)).toBe(1);
});

test('num plus str', () => {
    const code = "1+ 'str'";
    const tree = parseExpression<AddExpressionTree>(code);
    expect(tree.getType()).toBeInstanceOf(StrType);
    expect(evalExpression(tree)).toBe('1str');
});
