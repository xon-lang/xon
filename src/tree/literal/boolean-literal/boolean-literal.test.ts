import { parseCode } from '../../../test-helper';
import { BooleanLiteralTree } from './boolean-literal.tree';

test('check true', () => {
    const code = 'true';
    const tree = parseCode(code, BooleanLiteralTree);
    expect(tree.value).toBe(1);
});

test('check false', () => {
    const code = 'false';
    const tree = parseCode(code, BooleanLiteralTree);
    expect(tree.value).toBe(0);
});
