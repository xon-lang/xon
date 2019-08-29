import { VarDeclarationContext } from '../../../grammar/generated/AsmParser';
import { ExpressionTree } from '../expression-tree';

export class VarDeclarationStatementTree {
    name: string;
    value: ExpressionTree;

    constructor(public ctx: VarDeclarationContext) {
        this.name = ctx._name.text;
        this.value = new ExpressionTree(ctx._value);
    }

    toPlane() {
        return {
            name: this.name,
            value: this.value.toPlane(),
        };
    }
}
