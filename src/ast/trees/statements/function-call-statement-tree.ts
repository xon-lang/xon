import { FunctionCallContext } from '../../../grammar/generated/AsmParser';
import { ExpressionTree } from '../expression-tree';

export class FunctionCallStatementTree {
    name: string;
    arguments: ExpressionTree[];

    constructor(public ctx: FunctionCallContext) {
        this.name = ctx._name.text;
        this.arguments = ctx._args.map(x => new ExpressionTree(x));
    }

    toPlane() {
        return {
            name: this.name,
            arguments: this.arguments.map(x => x.toPlane()),
        };
    }
}
