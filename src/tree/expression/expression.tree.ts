import { evalExpression } from '../../test-helper';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
    valueType: string;

    eval() {
        return evalExpression(this);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            valueType: this.valueType,
        };
    }
}
