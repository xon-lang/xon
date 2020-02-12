import { ScopeStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { LineBreakStatementTree } from '../line-break-statement/line-break-statement.tree';
import { getStatementTree } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class ScopeStatementTree extends StatementTree {
    name: string;
    isClass: boolean;
    isFunction: boolean;
    args: {
        name: string;
        type: string;
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
                type: x._type.text,
                condition: x._condition && getExpressionTree(x._condition),
                value: x._value && getExpressionTree(x._value),
            })) || [];
        this.statements = ctx
            .body()
            .statement()
            .map(getStatementTree)
            .filter(x => !(x instanceof LineBreakStatementTree));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            isClass: this.isClass,
            isFunction: this.isFunction,
            args: this.args.map(x => ({
                name: x.name,
                type: x.type,
                condition: x.condition?.toPlain(),
                value: x.value?.toPlain(),
            })),
            statements: this.statements.map(x => x.toPlain()),
        };
    }
}
