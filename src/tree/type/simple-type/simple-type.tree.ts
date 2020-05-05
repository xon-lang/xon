import { SimpleTypeContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../type.tree';

export class SimpleTypeTree extends TypeTree {
    name: string;

    constructor(public ctx?: SimpleTypeContext) {
        super();
        this.name = ctx?.ID().text;
    }

    eq(anotherType: TypeTree) {
        return anotherType instanceof SimpleTypeTree && anotherType.name == this.name;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
        };
    }
}
