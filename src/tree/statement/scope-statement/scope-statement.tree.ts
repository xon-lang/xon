import { ScopeStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTree } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class ScopeStatementTree extends StatementTree {
    name: string;
    isClass: boolean;
    isFunction: boolean;
    args: {
        name: string;
        valueType: string;
        condition: ExpressionTree;
        value: ExpressionTree;
    }[];

    statements: StatementTree[];

    constructor(public ctx: ScopeStatementContext) {
        super();
        this.name = ctx.ID().text;
        this.isClass = this.name[0] == this.name[0].toUpperCase();
        this.isFunction = !this.isClass;
        this.args =
            ctx.scopeArgument()?.map(x => ({
                name: x._name.text,
                valueType: x._valueType.text,
                condition: x._condition && getExpressionTree(x._condition),
                value: x._value && getExpressionTree(x._value),
            })) || [];
        this.statements = getStatementsTree(ctx
            .body()
            .statement());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            isClass: this.isClass,
            isFunction: this.isFunction,
            args: this.args.map(x => ({
                name: x.name,
                valueType: x.valueType,
                condition: x.condition?.toPlain(),
                value: x.value?.toPlain(),
            })),
            statements: this.statements.map(x => x.toPlain()),
        };
    }
}
