"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const program_tree_1 = require("../program.tree");
test_helper_1.testXonFIle(program_tree_1.ProgramTree, tree => {
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
//# sourceMappingURL=several-scopes.test.js.map