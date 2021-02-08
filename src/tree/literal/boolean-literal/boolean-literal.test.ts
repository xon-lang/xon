import { parseLiteral } from '../../../parse';
import { BooleanLiteralTree } from './boolean-literal.tree';

test('check true', () => {
    const code = 'true';
    const tree = parseLiteral<BooleanLiteralTree>(code);
    expect(tree.getValue()).toBe(true);
});

test('check false', () => {
    const code = 'false';
    const tree = parseLiteral<BooleanLiteralTree>(code);
    expect(tree.getValue()).toBe(false);
});
