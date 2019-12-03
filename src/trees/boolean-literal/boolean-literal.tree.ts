import { BooleanLiteralContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class BooleanLiteralTree extends BaseTree {
    value: string;

    constructor(public ctx: BooleanLiteralContext) {
        super();
        this.value = ctx.BooleanLiteral().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
