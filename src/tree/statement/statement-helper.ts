import {
    AssignmentStatementContext,
    DeclarationStatementContext,
    ExpressionStatementContext,
    FunctionStatementContext,
    LineBreakStatementContext,
    PreprocessorStatementContext,
    ReturnStatementContext,
    StatementContext,
} from '../../grammar/xon-parser';
import { AssignmentStatementTree } from './assignment-statement/assignment-statement.tree';
import { DeclarationStatementTree } from './declaration-statement/declaration-statement.tree';
import { ExpressionStatementTree } from './expression-statement/expression-statement.tree';
import { FunctionStatementTree } from './function-statement/function-statement.tree';
import { LineBreakStatementTree } from './line-break-statement/line-break-statement.tree';
import { PreprocessorStatementTree } from './preprocessor-statement/preprocessor-statement.tree';
import { ReturnStatementTree } from './return-statement/return-statement.tree';
import { StatementTree } from './statement.tree';

export function getStatementTree(ctx: StatementContext): StatementTree {
    if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
    if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
    if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementTree(ctx);
    if (ctx instanceof ReturnStatementContext) return new ReturnStatementTree(ctx);
    if (ctx instanceof LineBreakStatementContext) return new LineBreakStatementTree(ctx);
    if (ctx instanceof FunctionStatementContext) return new FunctionStatementTree(ctx);
    if (ctx instanceof DeclarationStatementContext) return new DeclarationStatementTree(ctx);

    throw Error('No Statemenet found for ' + ctx.constructor.name);
}

export function getStatementsTree(statements: StatementContext[]) {
    return statements.filter(x => !(x instanceof LineBreakStatementContext)).map(getStatementTree);
}
