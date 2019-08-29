import { StatementTree } from '../../ast/trees/statement-tree';
import { VarDeclarationStatementCompiler } from './var-declaration-statement-compiler';
import { AssignmentStatementCompiler } from './statements/assignment-statement-compiler';
import { FunctionCallStatementCompiler } from './statements/function-call-statement-compiler';

export class StatementCompiler {
    constructor(public tree: StatementTree) {}

    compile() {
        if (this.tree.varDeclarationStatementTree) {
            return new VarDeclarationStatementCompiler(this.tree.varDeclarationStatementTree).compile();
        }
        if (this.tree.assignmentStatementTree) {
            return new AssignmentStatementCompiler(this.tree.assignmentStatementTree).compile();
        }
        if (this.tree.functionCallStatementTree) {
            return new FunctionCallStatementCompiler(this.tree.functionCallStatementTree).compile();
        }
        return '';
    }
}
