import { ObjectTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ObjectTypeTree extends TypeTree {
    items: { name: string; type: TypeTree }[];

    constructor(public ctx?: ObjectTypeContext) {
        super();
        if (!ctx) return;

        this.items = ctx.ID().map((x, i) => ({
            name: x.text,
            type: getTypeTree(ctx.type(i)),
        }));
        this.name = '{' + this.items.map((x) => `${x.name} ${x.type.name}`).join(', ') + '}';
    }

    eq(anotherType: TypeTree) {
        return (
            this == anotherType ||
            (anotherType instanceof ObjectTypeTree &&
                anotherType.items.length == this.items.length &&
                anotherType.items.every(
                    (x, i) => x.name == this.items[i].name && x.type.eq(this.items[i].type)
                ))
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
