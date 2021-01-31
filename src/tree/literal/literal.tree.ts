import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class LiteralTree<T> extends BaseTree {
    ctx?: LiteralContext;
    value: T;
    dataType: TypeTree;

    abstract getType(): TypeTree;
}
