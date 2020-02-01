import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { FunctionExpressionContext } from "./XonParser";
import { IndexExpressionContext } from "./XonParser";
import { SliceExpressionContext } from "./XonParser";
import { MemberExpressionContext } from "./XonParser";
import { PowExpressionContext } from "./XonParser";
import { UnaryPlusExpressionContext } from "./XonParser";
import { UnaryMinusExpressionContext } from "./XonParser";
import { BitNotExpressionContext } from "./XonParser";
import { LogicalNotExpressionContext } from "./XonParser";
import { MulDivModExpressionContext } from "./XonParser";
import { AddSubExpressionContext } from "./XonParser";
import { BitShiftExpressionContext } from "./XonParser";
import { RelationalExpressionContext } from "./XonParser";
import { EqualityExpressionContext } from "./XonParser";
import { BitAndExpressionContext } from "./XonParser";
import { BitXorExpressionContext } from "./XonParser";
import { BitOrExpressionContext } from "./XonParser";
import { LogicalAndExpressionContext } from "./XonParser";
import { LogicalOrExpressionContext } from "./XonParser";
import { IdExpressionContext } from "./XonParser";
import { IntegerLiteralExpressionContext } from "./XonParser";
import { FloatLiteralExpressionContext } from "./XonParser";
import { BooleanLiteralExpressionContext } from "./XonParser";
import { CharacterLiteralExpressionContext } from "./XonParser";
import { StringLiteralExpressionContext } from "./XonParser";
import { ArrayLiteralExpressionContext } from "./XonParser";
import { RangeExpressionContext } from "./XonParser";
import { ObjectLiteralExpressionContext } from "./XonParser";
import { ParenthesizedExpressionContext } from "./XonParser";
import { PipeExpressionContext } from "./XonParser";
import { LambdaExpressionContext } from "./XonParser";
import { IfStatementContext } from "./XonParser";
import { LoopStatementContext } from "./XonParser";
import { AssignmentStatementContext } from "./XonParser";
import { PreprocessorStatementContext } from "./XonParser";
import { ExpressionStatementContext } from "./XonParser";
import { ProgramContext } from "./XonParser";
import { ScopeContext } from "./XonParser";
import { ScopeArgumentContext } from "./XonParser";
import { StatementContext } from "./XonParser";
import { ExpressionContext } from "./XonParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `XonParser`.
 */
export interface XonParserListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by the `functionExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `functionExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `indexExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterIndexExpression?: (ctx: IndexExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `indexExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitIndexExpression?: (ctx: IndexExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `sliceExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterSliceExpression?: (ctx: SliceExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `sliceExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitSliceExpression?: (ctx: SliceExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `memberExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterMemberExpression?: (ctx: MemberExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `memberExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitMemberExpression?: (ctx: MemberExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `powExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterPowExpression?: (ctx: PowExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `powExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitPowExpression?: (ctx: PowExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `unaryPlusExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `unaryPlusExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `unaryMinusExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `unaryMinusExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `bitNotExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `bitNotExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNotExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalNotExpression?: (ctx: LogicalNotExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNotExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalNotExpression?: (ctx: LogicalNotExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `mulDivModExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterMulDivModExpression?: (ctx: MulDivModExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `mulDivModExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitMulDivModExpression?: (ctx: MulDivModExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `addSubExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterAddSubExpression?: (ctx: AddSubExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `addSubExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitAddSubExpression?: (ctx: AddSubExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `bitShiftExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `bitShiftExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `relationalExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `relationalExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `equalityExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `equalityExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `bitAndExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `bitAndExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `bitXorExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterBitXorExpression?: (ctx: BitXorExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `bitXorExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitBitXorExpression?: (ctx: BitXorExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `bitOrExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `bitOrExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalAndExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `logicalAndExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalOrExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `logicalOrExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `idExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterIdExpression?: (ctx: IdExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `idExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitIdExpression?: (ctx: IdExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterIntegerLiteralExpression?: (ctx: IntegerLiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitIntegerLiteralExpression?: (ctx: IntegerLiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `floatLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterFloatLiteralExpression?: (ctx: FloatLiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `floatLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitFloatLiteralExpression?: (ctx: FloatLiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterBooleanLiteralExpression?: (ctx: BooleanLiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitBooleanLiteralExpression?: (ctx: BooleanLiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `characterLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterCharacterLiteralExpression?: (ctx: CharacterLiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `characterLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitCharacterLiteralExpression?: (ctx: CharacterLiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterStringLiteralExpression?: (ctx: StringLiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitStringLiteralExpression?: (ctx: StringLiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `arrayLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `arrayLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `rangeExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterRangeExpression?: (ctx: RangeExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `rangeExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitRangeExpression?: (ctx: RangeExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `objectLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `objectLiteralExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `pipeExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterPipeExpression?: (ctx: PipeExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `pipeExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitPipeExpression?: (ctx: PipeExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `lambdaExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `lambdaExpression`
     * labeled alternative in `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ifStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ifStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by the `loopStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by the `loopStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by the `assignmentStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Exit a parse tree produced by the `assignmentStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Enter a parse tree produced by the `preprocessorStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    enterPreprocessorStatement?: (ctx: PreprocessorStatementContext) => void;
    /**
     * Exit a parse tree produced by the `preprocessorStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    exitPreprocessorStatement?: (ctx: PreprocessorStatementContext) => void;
    /**
     * Enter a parse tree produced by the `expressionStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by the `expressionStatement`
     * labeled alternative in `XonParser.statement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `XonParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `XonParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `XonParser.scope`.
     * @param ctx the parse tree
     */
    enterScope?: (ctx: ScopeContext) => void;
    /**
     * Exit a parse tree produced by `XonParser.scope`.
     * @param ctx the parse tree
     */
    exitScope?: (ctx: ScopeContext) => void;
    /**
     * Enter a parse tree produced by `XonParser.scopeArgument`.
     * @param ctx the parse tree
     */
    enterScopeArgument?: (ctx: ScopeArgumentContext) => void;
    /**
     * Exit a parse tree produced by `XonParser.scopeArgument`.
     * @param ctx the parse tree
     */
    exitScopeArgument?: (ctx: ScopeArgumentContext) => void;
    /**
     * Enter a parse tree produced by `XonParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `XonParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `XonParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XonParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
}
