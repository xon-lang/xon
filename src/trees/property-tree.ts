import { PropertyDeclarationContext } from '../../grammar/generated/XonParser';
import { ExpressionTree } from './expression-tree';
import { NameTypeTree } from './name-type';

export class PropertyTree {
    nameType: NameTypeTree;
    value: ExpressionTree;

    constructor(ctx: PropertyDeclarationContext) {
        this.nameType = new NameTypeTree(ctx.nameType());
        this.value = new ExpressionTree(ctx.expression());
    }

    toPlane() {
        return {
            name: this.nameType.name,
            type: this.nameType.type,
            value: this.value.toPlane(),
        };
    }
}
