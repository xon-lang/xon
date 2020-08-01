import { evalExpression } from '../../test-helper';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
    eval() {
        return evalExpression(this);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            type: this.getType()?.toPlain(),
        };
    }

    as<T>() {
        return (this as any) as T;
    }

    abstract getType(): TypeTree;
}
