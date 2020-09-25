import { StatementContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ExpressionStatementTree } from './expression-statement/expression-statement.tree';

export abstract class StatementTree extends BaseTree {
    ctx?: StatementContext;

    get asExpression() {
        const self = this as any;
        return (self as ExpressionStatementTree)?.value;
    }
}
