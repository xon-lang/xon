import { StatementTree } from '../../ast/trees/statement-tree';
import { AssignmentStatementCompiler } from './statements/assignment-statement-compiler';
import { FunctionCallStatementCompiler } from './statements/function-call-statement-compiler';
import { DeclarationStatementCompiler } from './statements/declaration-statement-compiler';

export class StatementCompiler {
    constructor(public tree: StatementTree) {}

    compile() {
        if (this.tree.declarationStatement) {
            return new DeclarationStatementCompiler(this.tree.declarationStatement).compile();
        }
        if (this.tree.assignmentStatement) {
            return new AssignmentStatementCompiler(this.tree.assignmentStatement).compile();
        }
        if (this.tree.functionCallStatement) {
            return new FunctionCallStatementCompiler(this.tree.functionCallStatement).compile();
        }
        return '';
    }
}
