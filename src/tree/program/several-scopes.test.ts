import { testXonFIle } from '../../test-helper';
import { ScopeStatementTree } from '../statement/scope-statement/scope-statement.tree';
import { ProgramTree } from './program.tree';

testXonFIle(ProgramTree, tree => {
    expect(tree.statements.length).toBe(3);

    const scope1 = tree.statements[0] as ScopeStatementTree;
    expect(scope1.name).toBe('firstScope');
    expect(scope1.args.length).toBe(0);
    expect(scope1.statements.length).toBe(2);

    const scope2 = tree.statements[1] as ScopeStatementTree;
    expect(scope2.name).toBe('secondScope');
    expect(scope2.args.length).toBe(0);
    expect(scope2.statements.length).toBe(1);

    const innerScope = scope2.statements[0] as ScopeStatementTree;
    expect(innerScope.name).toBe('innerScope');

    const scope3 = tree.statements[2] as ScopeStatementTree;
    expect(scope3.name).toBe('thirdWithArgs');
    expect(scope3.args.length).toBe(2);
});
