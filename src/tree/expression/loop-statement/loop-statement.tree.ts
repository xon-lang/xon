import { LoopExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { getStatementsTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';

export class LoopExpressionTree extends StatementTree {
    infinity: boolean;

    indexName: string;
    keyName: string;
    valueName: string;
    expression: ExpressionTree;
    statements: StatementTree[];

    constructor(public ctx: LoopExpressionContext) {
        super();
        this.infinity = !ctx.expression();

        this.indexName = ctx._index?.text;
        this.keyName = ctx._key?.text;
        this.valueName = ctx._value?.text;
        this.expression = ctx.expression() && getExpressionTree(ctx.expression());
        this.statements = getStatementsTree(ctx.body().statement());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            infinity: this.infinity,
            indexName: this.indexName,
            keyName: this.keyName,
            valueName: this.valueName,
            expression: this.expression.toPlain(),
            statements: this.statements.map(x => x.toPlain()),
        };
    }
}
