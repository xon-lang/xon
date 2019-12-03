import { FloatLiteralContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class FloatLiteralTree extends BaseTree {
    value: string;

    constructor(public ctx: FloatLiteralContext) {
        super();
        this.value = ctx.FloatLiteral().text.replace(/_/g, '');
    }

    toPlain() {
        return {
            type: 'FloatLiteral',
            value: this.value,
        };
    }
}
