import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
    ctx: LiteralContext;
    value: any;

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
