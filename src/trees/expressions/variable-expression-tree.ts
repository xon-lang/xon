import { VariableDeclarationStatementTree } from '../statements/variable-declaration-statement-tree';
import { VariableExpressionContext } from '../../../grammar/generated/XonParser';

export class VariableExpressionTree {
    name: string;

    constructor(public ctx: VariableExpressionContext) {
        this.name = ctx.ID().text;
    }

    getDeclarationLink(parent: any = this): VariableDeclarationStatementTree {
        if (!parent) return null;
        if (!parent.declarations) return this.getDeclarationLink(parent.parent);

        const declarations: VariableDeclarationStatementTree[] = parent.declarations.filter(
            x => x instanceof VariableDeclarationStatementTree
        );
        for (const declaration of declarations) {
            if (declaration.name == this.name) {
                return declaration;
            }
        }
    }

    toPlain() {
        const o = {
            name: this.name,
        };
        return o;
    }
}
