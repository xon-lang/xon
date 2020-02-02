import { ScopeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getStatementTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';

export class ScopeTree extends BaseTree {
    name: string;
    isClass: boolean;
    isFunction: boolean;
    args: {
        name: string;
        type: string;
        value: ExpressionTree;
    }[];

    statements: StatementTree[];
    scopes: ScopeTree[];

    constructor(public ctx: ScopeContext) {
        super();
        this.name = ctx.ID().text;
        this.isClass = this.name[0] == this.name[0].toUpperCase();
        this.isFunction = !this.isClass;
        this.args =
            ctx.scopeArgument()?.map(x => ({
                type: x._type.text,
                name: x._name.text,
                value: x.expression() && getExpressionTree(x.expression()),
            })) || [];
        this.statements = ctx.statement().map(getStatementTree);
        this.scopes = ctx.scope().map(x => new ScopeTree(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            isClass: this.isClass,
            isFunction: this.isFunction,
            args: this.args.map(x => ({
                type: x.type,
                name: x.name,
                value: x.value?.toPlain(),
            })),
            statements: this.statements.map(x => x.toPlain()),
            scopes: this.scopes.map(x => x.toPlain()),
        };
    }
}
