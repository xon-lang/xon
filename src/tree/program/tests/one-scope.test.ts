import { testXonFIle, evalExpression } from '../../../test-helper';
import { AssignmentStatementTree } from '../../statement/assignment-statement/assignment-statement.tree';
import { ProgramTree } from '../program.tree';

testXonFIle(ProgramTree, tree => {
    expect(tree.scopes.length).toBe(1);

    const scope = tree.scopes[0];
    expect(scope).not.toBeUndefined();
    expect(scope.name).toBe('oneScope');
    expect(scope.args.length).toBe(0);

    expect(scope.statements[0]).toBeInstanceOf(AssignmentStatementTree);
    expect(evalExpression((scope.statements[0] as AssignmentStatementTree).value)).toBe(23 + 5);
});
