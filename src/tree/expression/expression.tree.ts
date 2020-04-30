import { evalExpression } from '../../test-helper';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
    type: TypeTree;

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
