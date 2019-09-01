import { VariableDeclarationStatementTree } from '../../../ast/trees/statements/variable-declaration-statement-tree';
import { ExpressionCompiler } from '../expression-compiler';

export class VariableDeclarationStatementCompiler {
    constructor(public tree: VariableDeclarationStatementTree) {}

    compile() {
        const expressionCompiler = new ExpressionCompiler(this.tree.value);
        const type = this.tree.value.dataType.type;
        const name = this.tree.name;
        const value = expressionCompiler.compile();
        return `__${type} ${name} = ${value};`;
    }
}
