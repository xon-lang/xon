import { FunctionContext } from '../../grammar/xon-parser';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getStatementsTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';

export class FunctionTree extends ExpressionTree {
    name: string;
    args: {
        name: string;
        type: string;
        value: ExpressionTree;
    }[];
    statements: StatementTree[];

    constructor(public ctx: FunctionContext) {
        super();

        this.name = ctx.ID().text;
        this.args =
            ctx.argument()?.map((x) => ({
                name: x._name.text,
                type: x._type && x._type.text,
                value: getExpressionTree(x._value),
            })) || [];
        this.statements = getStatementsTree(ctx.body());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            args: this.args.map((x) => ({
                name: x.name,
                type: x.type,
                value: x.value?.toPlain(),
            })),
            statements: this.statements.map((x) => x.toPlain()),
        };
    }
}
