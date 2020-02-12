import { evalExpression, parseCode } from '../../../test-helper';
import { AssignmentStatementTree } from './assignment-statement.tree';

test('variable assignment', () => {
    const code = 'a = 5 + 5\n';
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.isDeclaration).toBe(false);
    expect(tree.name).toBe('a');
    expect(evalExpression(tree.value)).toBe(5 + 5);
});

test('variable declaration', () => {
    const code = 'var a = 5 + 5\n';
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.isDeclaration).toBe(true);
    expect(tree.name).toBe('a');
    expect(evalExpression(tree.value)).toBe(5 + 5);
});
