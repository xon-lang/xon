import { parseCode } from '../../../test-helper';
import { BooleanLiteralTree } from './boolean-literal.tree';

test('check true', () => {
    const code = 'true';
    const tree = parseCode(code, BooleanLiteralTree);
    expect(tree.value).toBe(true);
});

test('check false', () => {
    const code = 'false';
    const tree = parseCode(code, BooleanLiteralTree);
    expect(tree.value).toBe(false);
});
