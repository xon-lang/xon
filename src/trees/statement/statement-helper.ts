import { StatementContext, ExpressionStatementContext } from '../../grammar/xon-parser';
import { AssignmentStatementContext } from '../../grammar/xon-parser';
import { AssignmentStatementTree } from '../statement/assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';

export function getStatementTree(ctx: StatementContext) {
    if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
    if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
}
