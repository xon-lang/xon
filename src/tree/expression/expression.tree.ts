import { evalExpression } from '../../test-helper';
import { BaseTree } from '../base.tree';

export class ExpressionTree extends BaseTree {
    type: string;

    eval() {
        return evalExpression(this);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            type: this.type,
        };
    }
}
