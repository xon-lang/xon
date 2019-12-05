import { parseCode, evalExpression } from '../../test-helper';
import { AssignmentStatementTree } from './assignment-statement.tree';

test('variable assignment', () => {
    const code = 'a = 5';
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.name).toBe('a');
    expect(evalExpression(tree.value)).toBe(5);
});
