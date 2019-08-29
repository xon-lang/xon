import { VariableExpressionContext } from '../../../grammar/generated/AsmParser';
import { ExpressionTree } from '../expression-tree';
import { VarDeclarationStatementTree } from '../statements/var-declaration-statement-tree';

export class VariableExpressionTree {
    name: string;
    varDeclaration: VarDeclarationStatementTree;

    constructor(public ctx: VariableExpressionContext) {
        this.name = ctx.insensetiveName().text;
        // this.varDeclaration = new VarDeclarationStatementTree(ctx);
    }

    toPlane() {
        const o = {
            name: this.name,
        };
        return o;
    }
}
