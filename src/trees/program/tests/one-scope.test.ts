import { parseCode, evalExpression, getTestCode, testXonFIle } from '../../../test-helper';
import { ProgramTree } from '../program.tree';
import { AssignmentStatementTree } from '../../assignment-statement/assignment-statement.tree';

testXonFIle(ProgramTree, tree => {
    expect(tree.scopes.length).toBe(1);

    const scope = tree.scopes[0];
    expect(scope).not.toBeUndefined();
    expect(scope.name).toBe('oneScope');
    expect(scope.args.length).toBe(0);

    expect(scope.body[0]).toBeInstanceOf(AssignmentStatementTree);
    // expect(evalExpression((scope.body[0] as AssignmentStatementTree).value)).toBe(2);
});
