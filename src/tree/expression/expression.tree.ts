import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
    dataType: TypeTree;

    getType(): TypeTree {
        return null;
    }

    getInfixOperationType(operator: string, left: ExpressionTree, right: ExpressionTree): TypeTree {
        return left.getType().getInfixOperationType(operator, right.getType());
    }

    as<T extends ExpressionTree>() {
        return (this as any) as T;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            dataType: this.getType()?.name,
        };
    }
}
