import { parseCode, evalExpression, parseExpression } from '../../../test-helper';
import { MulDivExpressionTree } from './mul-div-expression.tree';

test('two multiply by two', () => {
    const code = '2*2';
    const tree = parseCode(code, MulDivExpressionTree);
    expect(evalExpression(tree)).toBe(2 * 2);
});

test('333 divide by 111', () => {
    const code = '333/111';
    const tree = parseCode(code, MulDivExpressionTree);
    expect(evalExpression(tree)).toBe(333 / 111);
});

test('multiply and divide', () => {
    const code = '2*2/2*2';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe(((2 * 2) / 2) * 2);
});

test('multiply and divide 2', () => {
    const code = '9/3*2*2/2*2';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe((((9 / 3) * 2 * 2) / 2) * 2);
});
