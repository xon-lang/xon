import { ArrayTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ArrayTypeTree extends TypeTree {
    baseType: TypeTree;

    constructor(public ctx?: ArrayTypeContext) {
        super();
        if (!ctx) return;
        this.baseType = getTypeTree(ctx.type());
        this.name = `${this.baseType.name}[]`;
    }

    eq(anotherType: TypeTree): boolean {
        return (
            this == anotherType ||
            (anotherType instanceof ArrayTypeTree && anotherType.baseType.eq(this.baseType))
        );
    }
}
