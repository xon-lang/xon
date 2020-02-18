import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class DeclarationStatementTree extends StatementTree {
    name: string;
    valueType: string;
    value: ExpressionTree;

    constructor(public ctx: DeclarationStatementContext) {
        super();
        this.name = ctx._name.text;
        this.valueType = ctx._type?.text;
        this.value = ctx._value && getExpressionTree(ctx._value);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            valueType: this.valueType,
            value: this.value?.toPlain(),
        };
    }
}
