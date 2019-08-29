import { ExpressionCompiler } from '../expression-compiler';
import { AssignmentStatementTree } from '../../../ast/trees/statements/assignment-statement-tree';

export class AssignmentStatementCompiler {
    constructor(public tree: AssignmentStatementTree) {}

    compile() {
        const name = this.tree.name;
        const value = new ExpressionCompiler(this.tree.value).compile();
        return `${name} = ${value};`;
    }
}
