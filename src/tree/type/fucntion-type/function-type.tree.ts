import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { getTypesTree, getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
    args: TypeTree[];
    returnType: TypeTree;

    constructor(public ctx?: FunctionTypeContext) {
        super();
        if (!ctx) return;
        this.args = getTypesTree(ctx._args);
        this.returnType = getTypeTree(ctx._returnType);
        this.name =
            '(' + this.args.map((x) => `${x.name}`).join(', ') + ') ' + this.returnType.name;
    }

    eq(anotherType: TypeTree): boolean {
        return (
            this == anotherType ||
            (anotherType instanceof FunctionTypeTree &&
                anotherType.args.length == this.args.length &&
                anotherType.args.every((x, i) => x.eq(this.args[i])))
        );
    }
}
