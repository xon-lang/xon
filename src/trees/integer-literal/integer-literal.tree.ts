import { IntegerLiteralContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class IntegerLiteralTree extends BaseTree {
    value: string;

    constructor(public ctx: IntegerLiteralContext) {
        super();
        this.value = ctx.DecimalLiteral().text.replace(/_/g, '');
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
