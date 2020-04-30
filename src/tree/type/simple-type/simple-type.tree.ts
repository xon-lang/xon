import { SimpleTypeContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../type.tree';

export class SimpleTypeTree extends TypeTree {
    name: string;

    constructor(public ctx?: SimpleTypeContext) {
        super();
        this.name = ctx?.ID().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
        };
    }
}
