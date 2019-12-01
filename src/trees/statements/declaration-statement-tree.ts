import { DeclarationStatementContext } from '../../../grammar/generated/XonParser';
import { VariableDeclarationStatementTree } from './variable-declaration-statement-tree';

export class DeclarationStatementTree {
    name: string;
    variableDeclaration: VariableDeclarationStatementTree;

    constructor(public ctx: DeclarationStatementContext) {
        if (ctx.variableDeclarationStatement()) {
            this.variableDeclaration = new VariableDeclarationStatementTree(ctx.variableDeclarationStatement());
            this.name = this.variableDeclaration.name;
        }
    }

    toPlain() {
        return {
            name: this.name,
            variableDeclaration: this.variableDeclaration.toPlain(),
        };
    }
}
