import { parseCode } from '../../../parse';
import { StringLiteralTree } from './string-literal.tree';

test('single line string', () => {
    const code = "'some string'";
    const tree = parseCode(code, StringLiteralTree);
    expect(tree.value).toBe(code.replace(/\'/g, ''));
});

test('multiline string', () => {
    const code = "'some\nmultiline\n\t\n\t\nstring\n'";
    const tree = parseCode(code, StringLiteralTree);
    expect(tree.value).toBe(code.replace(/\'/g, ''));
});

test('empty string', () => {
    const code = "''";
    const tree = parseCode(code, StringLiteralTree);
    expect(tree.value).toBe('');
});
