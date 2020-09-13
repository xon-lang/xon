import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
    toPlain() {
        return {
            ...super.toPlain(),
        };
    }

    as<T extends ExpressionTree>() {
        return (this as any) as T;
    }
}
