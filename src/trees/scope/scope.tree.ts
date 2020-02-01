import { ScopeContext } from '../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { BaseTree } from '../base.tree';
import { StatementTree } from '../statement/statement.tree';
import { getStatementTree } from '../statement/statement-helper';

export class ScopeTree extends BaseTree {
    args: {
        name: string;
        type: string;
        value: ExpressionTree;
    }[];

    name: string;
    statements: StatementTree [];
    scopes: ScopeTree[]

    constructor(public ctx: ScopeContext) {
        super();
        this.name = ctx.ID().text;
        this.args = ctx.scopeArgument()?.map(x => ({
            type: x._type.text,
            name: x._name.text,
            value: x.expression() && getExpressionTree(x.expression()),
        })) || [];
        this.statements = ctx.statement().map(getStatementTree);
        this.scopes = ctx.scope().map(x=>new ScopeTree(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
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
