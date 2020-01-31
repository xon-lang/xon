import { evalExpression, parseCode } from '../../../test-helper';
import { PipeExpressionTree } from './pipe-expression.tree';

test('arithmetic pipe', () => {
    const code = '1+1 |x: x + 5 + x |z: z + x ';
    const tree = parseCode(code, PipeExpressionTree);

    let x = 1 + 1;
    let z = x + 5 + x;
    let res = z + x;
    expect(evalExpression(tree)).toBe(res);
});

test('arithmetic and logic pipe', () => {
    const code = '1+1 |x: x + 5 + x |z: z || x ';
    const tree = parseCode(code, PipeExpressionTree);

    let x = 1 + 1;
    let z = x + 5 + x;
    let res = z || x;
    expect(evalExpression(tree)).toBe(res);
});

test('complex pipe', () => {
    const code = '33 >> 44 |x: x^x + x |z: z^x && x^z | z + x';
    const tree = parseCode(code, PipeExpressionTree);

    let x = 33 >> 44;
    let z = Math.pow(x, x) + x;
    let a = Math.pow(z, x) && Math.pow(x, z);
    let res = z + x;
    expect(evalExpression(tree)).toBe(res);
});
