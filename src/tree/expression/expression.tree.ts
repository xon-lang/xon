import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
    valueType: string;

    toPlain() {
        return {
            ...super.toPlain(),
            valueType: this.valueType
        };
    }
}
