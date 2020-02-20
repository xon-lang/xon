import { parseCode } from '../../../test-helper';
import { EnumDefinitionTree } from './enum-definition.tree';

test('enum full', () => {
    const code = 'enum Letter:\n    A = 2, \\x: x ^ 2\n    B\n    C';
    const tree = parseCode(code, EnumDefinitionTree);

    expect(tree.items.length).toBe(3);
    expect(tree.items.map(x => x.name).join(', ')).toBe('A, B, C');
    expect(tree.items[1].value).toBe(4);
});

test('enum value', () => {
    const code = 'enum Letter:\n    A = 1\n    B\n    C';
    const tree = parseCode(code, EnumDefinitionTree);

    expect(tree.items.length).toBe(3);
    expect(tree.items.map(x => x.name).join(', ')).toBe('A, B, C');
    expect(tree.items[1].value).toBe(2);
});

test('enum step', () => {
    const code = 'enum Letter:\n    A \\$ + 5\n    B\n    C';
    const tree = parseCode(code, EnumDefinitionTree);

    expect(tree.items.length).toBe(3);
    expect(tree.items.map(x => x.name).join(', ')).toBe('A, B, C');
    expect(tree.items[1].value).toBe(5);
    expect(tree.items[2].value).toBe(10);
});

test('enum base', () => {
    const code = 'enum Letter:\n    A\n    B\n    C';
    const tree = parseCode(code, EnumDefinitionTree);

    expect(tree.items.length).toBe(3);
    expect(tree.items.map(x => x.name).join(', ')).toBe('A, B, C');
    expect(tree.items[2].value).toBe(2);
});
