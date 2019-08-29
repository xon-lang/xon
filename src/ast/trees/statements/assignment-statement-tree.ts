import { AssignmentStatementContext } from '../../../grammar/generated/AsmParser';
import { ExpressionTree } from '../expression-tree';

export class AssignmentStatementTree {
    name: string;
    type: string;
    value: ExpressionTree;

    constructor(public ctx: AssignmentStatementContext) {
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
