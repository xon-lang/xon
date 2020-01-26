import { parseCode, evalExpression, getTestCode, testXonFIle } from '../../../test-helper';
import { ProgramTree } from '../program.tree';
import { AssignmentStatementTree } from '../../assignment-statement/assignment-statement.tree';

testXonFIle(ProgramTree, tree => {
    expect(tree.scopes.length).toBe(3);

    expect(tree.scopes[0].name).toBe('firstScope');
    expect(tree.scopes[0].args.length).toBe(0);
    expect(tree.scopes[0].body.length).toBe(2);

    expect(tree.scopes[1].name).toBe('secondScope');
    expect(tree.scopes[1].args.length).toBe(0);

    expect(tree.scopes[2].name).toBe('thirdWithArgs');
    expect(tree.scopes[2].args.length).toBe(2);
});
