import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
    dataType: TypeTree;

    getType(): TypeTree {
        return null;
    }

    getInfixOperationType(operatorName: string, rightOperand: ExpressionTree): TypeTree {
        return this.getType()[`__${operatorName}__`][rightOperand.getType().name];
    }

    as<T extends ExpressionTree>() {
        return (this as any) as T;
    }
}
