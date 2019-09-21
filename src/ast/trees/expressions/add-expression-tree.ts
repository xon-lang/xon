import { AddExpressionContext } from '../../../grammar/generated/XonParser';
import { ExpressionTree } from './expression-tree';
import { ExpressionTreeBase } from './expression-tree-base';
import { DataTypeInfo } from '../../../ast/data-type';

export class AddExpressionTree extends ExpressionTreeBase {
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: AddExpressionContext) {
        super();
        this.left = new ExpressionTree(ctx._left);
        this.right = new ExpressionTree(ctx._right);

        if (this.left.dataType && this.right.dataType) {
            this.dataType = DataTypeInfo.resolveAddOperationType(this.left.dataType, this.right.dataType);
        } else {
            this.dataTypeDependsOn = [...this.left.dataTypeDependsOn, ...this.right.dataTypeDependsOn];
        }
    }

    toPlane() {
        const o = {
            left: this.left.toPlane(),
            right: this.left.toPlane(),
        };
        return o;
    }
}
