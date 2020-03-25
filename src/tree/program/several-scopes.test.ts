import { testXonFIle } from '../../test-helper';
import { FunctionStatementTree } from '../statement/function-statement/function-statement.tree';
import { ProgramTree } from './program.tree';

testXonFIle(ProgramTree, tree => {
    expect(tree.statements.length).toBe(3);

    const function1 = tree.statements[0] as FunctionStatementTree;
    expect(function1.name).toBe('firstScope');
    expect(function1.args.length).toBe(0);
    expect(function1.statements.length).toBe(2);

    const function2 = tree.statements[1] as FunctionStatementTree;
    expect(function2.name).toBe('secondScope');
    expect(function2.args.length).toBe(0);
    expect(function2.statements.length).toBe(1);

    const innerScope = function2.statements[0] as FunctionStatementTree;
    expect(innerScope.name).toBe('innerScope');

    const function3 = tree.statements[2] as FunctionStatementTree;
    expect(function3.name).toBe('thirdWithArgs');
    expect(function3.args.length).toBe(2);
});
