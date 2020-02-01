import { ParserRuleContext } from 'antlr4ts';
import { XonParser } from './grammar/.antlr/XonParser';
import { ExpressionTree } from './trees/expression/expression.tree';
export * from './test-helper';
export declare function parse(code: string): XonParser;
export declare function parseExpression(code: string): ExpressionTree;
export declare function parseStatement(code: string): import("./trees/statement/assignment-statement/assignment-statement.tree").AssignmentStatementTree | import("./trees/statement/expression-statement/expression-statement.tree").ExpressionStatementTree;
export declare function parseCode<T>(code: string, type: new (ctx: ParserRuleContext) => T): T;
