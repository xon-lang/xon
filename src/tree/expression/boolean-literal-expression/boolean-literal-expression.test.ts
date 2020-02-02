import { parseCode, parseWrongCode } from '../../../test-helper';
import { BooleanLiteralExpressionTree } from './boolean-literal-expression.tree';

test('check true', () => {
    const code = 'true';
    const tree = parseCode(code, BooleanLiteralExpressionTree);
    expect(tree.value).toBe(code);
});

test('check false', () => {
    const code = 'false';
    const tree = parseCode(code, BooleanLiteralExpressionTree);
    expect(tree.value).toBe(code);
});

// test('no True', () => {
//     const code = 'True';
//     parseWrongCode(code, BooleanLiteralExpressionTree);
// });
