import { StatementContext } from '../../grammar/.antlr/XonParser';
import { AssignmentStatementTree } from '../statement/assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
export declare function getStatementTree(ctx: StatementContext): AssignmentStatementTree | ExpressionStatementTree;
