import {
    AssignmentStatementContext,
    ExpressionStatementContext,
    IfStatementContext,
    LineBreakStatementContext,
    LoopStatementContext,
    PreprocessorStatementContext,
    ReturnStatementContext,
    StatementContext,
} from '../../grammar/xon-parser';
import { AssignmentStatementTree } from './assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from './expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement/if-statement.tree';
import { LineBreakStatementTree } from './line-break-statement/line-break-statement.tree';
import { LoopStatementTree } from './loop-statement/loop-statement.tree';
import { PreprocessorStatementTree } from './preprocessor-statement/preprocessor-statement.tree';
import { ReturnStatementTree } from './return-statement/return-statement.tree';
import { StatementTree } from './statement.tree';

export function getStatementTree(ctx: StatementContext): StatementTree {
    if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
    if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
    if (ctx instanceof IfStatementContext) return new IfStatementTree(ctx);
    if (ctx instanceof LoopStatementContext) return new LoopStatementTree(ctx);
    if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementTree(ctx);
    if (ctx instanceof ReturnStatementContext) return new ReturnStatementTree(ctx);
    if (ctx instanceof LineBreakStatementContext) return new LineBreakStatementTree(ctx);
    throw 'No Statemenet found for ' + ctx.constructor.name;
}
