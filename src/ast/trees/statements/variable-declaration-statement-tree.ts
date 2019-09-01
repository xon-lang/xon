import { ExpressionTree } from '../expression-tree';
import { VariableDeclarationStatementContext } from '../../../grammar/generated/XonParser';
import { DataTypeInfo } from '../../data-type';

export class VariableDeclarationStatementTree {
    name: string;
    value: ExpressionTree;

    constructor(public ctx: VariableDeclarationStatementContext) {
        this.name = ctx._name.text;
        this.value = new ExpressionTree(ctx._value);
        if (ctx.dataType()) {
            this.value.dataType = new DataTypeInfo(ctx.dataType().text);
        }
    }

    toPlane() {
        return {
            name: this.name,
            value: this.value.toPlane(),
        };
    }
}
