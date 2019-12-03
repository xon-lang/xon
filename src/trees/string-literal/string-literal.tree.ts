import { StringLiteralContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class StringLiteralTree extends BaseTree {
    value: string;

    constructor(public ctx: StringLiteralContext) {
        super();
        this.value = ctx.StringLiteral().text.slice(1, -1);
    }

    toPlain() {
        return {
            type: 'StringLiteral',
            value: this.value,
        };
    }
}
