import { LiteralExpressionContext } from '../../../grammar/generated/XonParser';
import { PrimitiveDataType, DataTypeInfo } from '../../data-type';
import { ExpressionTreeBase } from './expression-tree-base';

export class LiteralExpressionTree extends ExpressionTreeBase {
    constructor(public ctx: LiteralExpressionContext) {
        super();
        if (ctx.literal().IntegerLiteral()) {
            this.dataType = new DataTypeInfo(PrimitiveDataType.i32);
        } else if (ctx.literal().FloatLiteral()) {
            this.dataType = new DataTypeInfo(PrimitiveDataType.f32);
        } else if (ctx.literal().BooleanLiteral()) {
            this.dataType = new DataTypeInfo(PrimitiveDataType.bool);
        } else if (ctx.literal().CharacterLiteral()) {
            this.dataType = new DataTypeInfo(PrimitiveDataType.char);
        } else if (ctx.literal().StringLiteral()) {
            this.dataType = new DataTypeInfo(PrimitiveDataType.str);
        }
    }

    toPlain() {
        return {
            dataType: this.dataType.type,
            value: this.ctx.text,
        };
    }
}
