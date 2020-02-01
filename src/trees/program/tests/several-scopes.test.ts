import { testXonFIle } from '../../../test-helper';
import { ProgramTree } from '../program.tree';

testXonFIle(ProgramTree, tree => {
    expect(tree.scopes.length).toBe(3);

    expect(tree.scopes[0].name).toBe('firstScope');
    expect(tree.scopes[0].args.length).toBe(0);
    expect(tree.scopes[0].statements.length).toBe(2);

    expect(tree.scopes[1].name).toBe('secondScope');
    expect(tree.scopes[1].args.length).toBe(0);
    expect(tree.scopes[1].scopes.length).toBe(1);
    expect(tree.scopes[1].scopes[0].name).toBe('innerScope');


    expect(tree.scopes[2].name).toBe('thirdWithArgs');
    expect(tree.scopes[2].args.length).toBe(2);
});
