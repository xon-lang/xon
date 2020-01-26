import { StatementContext, ExpressionStatementContext } from '../../grammar/.antlr/XonParser';
import { AssignmentStatementContext } from '../../grammar/.antlr/XonParser';
import { AssignmentStatementTree } from '../assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';

export function getStatementTree(ctx: StatementContext) {
    if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
    if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
}
