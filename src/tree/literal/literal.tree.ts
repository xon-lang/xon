import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class LiteralTree extends BaseTree {
    ctx?: LiteralContext;
    value: any;
    dataType: TypeTree;

    abstract getType(): TypeTree;

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
