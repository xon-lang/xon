import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { LiteralType } from './literal-type';

export class LiteralTree extends BaseTree {
    ctx: LiteralContext;
    value: string;
    valueType: LiteralType;

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
            valueType: this.valueType,
        };
    }
}
