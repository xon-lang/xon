import { LiteralContext, LiteralExpressionContext } from '../../../grammar/generated/AsmParser';
import { stringLiteralToBytes } from '../../data-helper';

export enum LiteralType {
    Decimal,
    Boolean,
    String,
}

export class LiteralExpressionTree {
    type: LiteralType;
    data: number[] = [];

    constructor(public ctx: LiteralExpressionContext) {
        if (ctx.literal().BooleanLiteral()) {
            this.type = LiteralType.Boolean;
            this.data = [ctx.literal().BooleanLiteral().text == 'true' ? 1 : 0];
        } else if (ctx.literal().DecimalLiteral()) {
            this.type = LiteralType.Decimal;
            this.data = [+ctx.literal().DecimalLiteral().text];
        } else if (ctx.literal().StringLiteral()) {
            this.type = LiteralType.String;
            this.data = stringLiteralToBytes(ctx.literal().StringLiteral().text);
        }
    }

    toPlane() {
        const o = {
            type: LiteralType[this.type],
            data: this.data,
        };
        if (this.type == LiteralType.String) {
            return { ...o, value: this.ctx.literal().StringLiteral().text };
        }
        return o;
    }
}
