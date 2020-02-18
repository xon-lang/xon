import { EnumItemContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';
import { BooleanLiteralTree } from '../../literal/boolean-literal/boolean-literal.tree';
import { DecimalLiteralTree } from '../../literal/decimal-literal/decimal-literal.tree';
import { getLiteralTree } from '../../literal/literal-helper';
import { LiteralType } from '../../literal/literal-type';
import { LiteralTree } from '../../literal/literal.tree';

export class EnumItemTree extends BaseTree {
    name: string;
    value: string;
    step: string;
    valueType: LiteralType;
    private _value: LiteralTree;

    get nextValueAndStep() {
        return this.getNextValueAndStep();
    }

    constructor(public ctx: EnumItemContext) {
        super();
        this.name = ctx.ID().text;
        this._value = ctx.literal() && getLiteralTree(ctx.literal());
        this.value = this._value.value;
        this.valueType = this._value.valueType;
        this.step = ctx.constant() && ctx.constant().text;
    }

    private getNextValueAndStep() {
        if (!this._value) return null;

        if (this._value instanceof BooleanLiteralTree) {
            // return !!((this._value.isPositive + 55) % 2);
        }

        if (this._value instanceof DecimalLiteralTree) {
            return +this._value.value + 1;
        }
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            valueType: this.valueType,
            value: this.value,
        };
    }
}
