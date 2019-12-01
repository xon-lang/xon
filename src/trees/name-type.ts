import { NameTypeContext } from '../../grammar/generated/XonParser';

export class NameTypeTree {
    name: string;
    type: string;

    constructor(public ctx: NameTypeContext) {
        this.name = ctx._name.text;
        this.type = ctx._type.text;
    }

    toPlain() {
        return { name: this.name, type: this.type };
    }
}
