import { evalExpression, parseCode } from '../../../test-helper';
import { DeclarationStatementTree } from './declaration-statement.tree';

test('declaration without type', () => {
    const code = 'a := 5 + 5';
    const tree = parseCode(code, DeclarationStatementTree);
    expect(tree.name).toBe('a');
    expect(evalExpression(tree.value)).toBe(5 + 5);
});

test('declaration with type', () => {
    const code = 'a: Number = 5 + 5';
    const tree = parseCode(code, DeclarationStatementTree);
    expect(tree.name).toBe('a');
    expect(evalExpression(tree.value)).toBe(5 + 5);
});
