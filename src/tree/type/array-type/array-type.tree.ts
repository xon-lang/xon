import { ArrayTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ArrayTypeTree extends TypeTree {
    baseType: TypeTree;

    constructor(public ctx: ArrayTypeContext) {
        super();
        this.baseType = getTypeTree(ctx.type());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            baseType: this.baseType.toPlain(),
        };
    }
}
