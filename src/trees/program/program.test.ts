import { parseCode, evalExpression } from '../../test-helper';
import { ProgramTree } from './program.tree';
import { AssignmentStatementTree } from '../assignment-statement/assignment-statement.tree';

test('function with one expression body', () => {
    const code = 'myScope {a = 1 + 1;}';
    const tree = parseCode(code, ProgramTree);
    const scope = tree.scopes[0];

    expect(scope).not.toBeUndefined();
    expect(scope.name).toBe('myScope');
    expect(scope.args.length).toBe(0);

    expect(scope.body[0]).toBeInstanceOf(AssignmentStatementTree);
    expect(evalExpression((scope.body[0] as AssignmentStatementTree).value)).toBe(2);
});
