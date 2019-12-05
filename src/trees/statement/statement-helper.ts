import { StatementContext } from '../../grammar/.antlr/XonParser';
import { AssignmentStatementContext } from '../../grammar/.antlr/XonParser';
import { AssignmentStatementTree } from '../assignment-statement/assignment-statement.tree';

export function getStatementTree(ctx: StatementContext) {
    if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
}
