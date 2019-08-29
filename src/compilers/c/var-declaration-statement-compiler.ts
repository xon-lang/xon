import { VarDeclarationStatementTree } from '../../ast/trees/statements/var-declaration-statement-tree';
import { ExpressionCompiler } from './expression-compiler';

export class VarDeclarationStatementCompiler {
    constructor(public tree: VarDeclarationStatementTree) {}

    compile() {
        const expressionCompiler = new ExpressionCompiler(this.tree.value);
        const type = expressionCompiler.getType();
        const name = this.tree.name;
        const value = expressionCompiler.compile();
        return `${type} ${name} = ${value};`;
    }
}
