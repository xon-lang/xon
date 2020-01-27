import { LoopStatementContext } from '../../grammar/.antlr/XonParser';
import { StatementTree } from '../statement/statement.tree';
import { getStatementTree } from '../statement/statement-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class LoopStatementTree extends StatementTree {
    ifLoop: boolean;
    infinity: boolean;

    indexName: string;
    keyName: string;
    valueName: string;
    expression: ExpressionTree;
    statements: StatementTree[];

    constructor(public ctx: LoopStatementContext) {
        super();
        this.ifLoop = !!ctx.If();
        this.infinity = !ctx.expression();

        this.indexName = ctx._index?.text;
        this.keyName = ctx._key?.text;
        this.valueName = ctx._value?.text;
        this.expression = ctx.expression() && getExpressionTree(ctx.expression());
        this.statements = ctx.statement().map(getStatementTree);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            ifLoop: this.ifLoop,
            infinity: this.infinity,
            indexName: this.indexName,
            keyName: this.keyName,
            valueName: this.valueName,
            expression: this.expression.toPlain(),
            statements: this.statements.map(x => x.toPlain()),
        };
    }
}
