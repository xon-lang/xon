import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
    as<T extends ExpressionTree>() {
        return (this as any) as T;
    }
}
