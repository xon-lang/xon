import { ObjectTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ObjectTypeTree extends TypeTree {
    items: { name: string; type: TypeTree }[];

    constructor(public ctx?: ObjectTypeContext) {
        super();
        this.items = ctx.ID().map((x, i) => ({
            name: x.text,
            type: getTypeTree(ctx.type(i)),
        }));
    }

    eq(anotherType: TypeTree) {
        return (
            anotherType instanceof ObjectTypeTree &&
            anotherType.items.length == this.items.length &&
            anotherType.items.every(
                (x, i) => x.name == this.items[i].name && x.type.eq(this.items[i].type)
            )
        );
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map((x) => ({
                name: x.name,
                type: x.type.toPlain(),
            })),
        };
    }
}
