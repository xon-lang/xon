import { ExpressionCompiler } from '../expression-compiler';
import { DeclarationStatementTree } from '../../../ast/trees/statements/declaration-statement-tree';
import { VariableDeclarationStatementCompiler } from './variable-declaration-statement-compiler';

export class DeclarationStatementCompiler {
    constructor(public tree: DeclarationStatementTree) {}

    compile() {
        if (this.tree.variableDeclaration) {
            return new VariableDeclarationStatementCompiler(this.tree.variableDeclaration).compile();
        }
        return '';
    }
}
