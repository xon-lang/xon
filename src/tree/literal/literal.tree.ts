import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class LiteralTree extends BaseTree {
    ctx: LiteralContext;
    value: string;
    valueType: string;

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
            valueType: this.valueType,
        };
    }
}
