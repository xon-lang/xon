import {
    AssignmentStatementContext,
    ExpressionStatementContext,
    IfStatementContext,
    LoopStatementContext,
    PreprocessorStatementContext,
    StatementContext,
} from '../../grammar/xon-parser';
import { AssignmentStatementTree } from './assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from './expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement/if-statement.tree';
import { LoopStatementTree } from './loop-statement/loop-statement.tree';
import { PreprocessorStatementTree } from './preprocessor-statement/preprocessor-statement.tree';
import { StatementTree } from './statement.tree';

export function getStatementTree(ctx: StatementContext): StatementTree {
    if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
    if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
    if (ctx instanceof IfStatementContext) return new IfStatementTree(ctx);
    if (ctx instanceof LoopStatementContext) return new LoopStatementTree(ctx);
    if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementTree(ctx);
}
