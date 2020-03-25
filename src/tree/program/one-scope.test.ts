import { evalExpression, testXonFIle } from '../../test-helper';
import { AssignmentStatementTree } from '../statement/assignment-statement/assignment-statement.tree';
import { FunctionStatementTree } from '../statement/function-statement/function-statement.tree';
import { ProgramTree } from './program.tree';

testXonFIle(ProgramTree, tree => {
    expect(tree.statements.length).toBe(2);

    const scope = tree.statements[0] as FunctionStatementTree;
    expect(scope).not.toBeUndefined();
    expect(scope.name).toBe('oneScope');
    expect(scope.args.length).toBe(0);

    expect(scope.statements[0]).toBeInstanceOf(AssignmentStatementTree);
    expect(evalExpression((scope.statements[0] as AssignmentStatementTree).value)).toBe(23 + 5);
});
