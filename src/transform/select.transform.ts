import { IfExpressionTree } from '../tree/expression/if-expression/if-expression.tree';
import { SelectExpressionTree } from '../tree/expression/select-expression/select-expression.tree';
import { BaseTransform } from './base-transform';

export class SelectTransform extends BaseTransform {
    constructor(public tree: SelectExpressionTree) {
        super();
    }

    transformToIfExpression() {
        new IfExpressionTree();
    }
}
