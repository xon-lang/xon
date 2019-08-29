import { NameTypeContext } from '../../grammar/generated/AsmParser';

export class NameTypeTree {
    name: string;
    type: string;

    constructor(public ctx: NameTypeContext) {
        this.name = ctx._name.text;
        this.type = ctx._type.text;
    }

    toPlane() {
        return { name: this.name, type: this.type };
    }
}
