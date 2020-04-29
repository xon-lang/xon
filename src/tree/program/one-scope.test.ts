import { evalExpression, testXonFIle } from '../../test-helper';
import { AssignmentStatementTree } from '../statement/assignment-statement/assignment-statement.tree';
import { FunctionStatementTree } from '../statement/function-statement/function-statement.tree';
import { ProgramTree } from './program.tree';

testXonFIle(ProgramTree, (tree) => {
    expect(tree.statements.length).toBe(2);

    const func = tree.statements[0] as FunctionStatementTree;
    expect(func).not.toBeUndefined();
    expect(func.value.name).toBe('oneScope');
    expect(func.value.args.length).toBe(0);

    expect(func.value.statements[0]).toBeInstanceOf(AssignmentStatementTree);
    expect(evalExpression((func.value.statements[0] as AssignmentStatementTree).value)).toBe(
        23 + 5
    );
});
