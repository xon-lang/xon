import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { XonParserListener } from "./XonParserListener";
export declare class XonParser extends Parser {
    static readonly MultiLineComment = 1;
    static readonly SingleLineComment = 2;
    static readonly If = 3;
    static readonly Loop = 4;
    static readonly In = 5;
    static readonly BitAnd = 6;
    static readonly BitOr = 7;
    static readonly BitXor = 8;
    static readonly RightShiftArithmetic = 9;
    static readonly LeftShiftArithmetic = 10;
    static readonly RightShiftLogical = 11;
    static readonly OpenBracket = 12;
    static readonly CloseBracket = 13;
    static readonly OpenParen = 14;
    static readonly CloseParen = 15;
    static readonly OpenBrace = 16;
    static readonly CloseBrace = 17;
    static readonly SemiColon = 18;
    static readonly Comma = 19;
    static readonly Assign = 20;
    static readonly QuestionMark = 21;
    static readonly Colon = 22;
    static readonly Ellipsis = 23;
    static readonly Dot = 24;
    static readonly Plus = 25;
    static readonly Minus = 26;
    static readonly BitNot = 27;
    static readonly Not = 28;
    static readonly Multiply = 29;
    static readonly Divide = 30;
    static readonly Modulus = 31;
    static readonly Pow = 32;
    static readonly Sharp = 33;
    static readonly LessThan = 34;
    static readonly MoreThan = 35;
    static readonly LessThanEquals = 36;
    static readonly MoreThanEquals = 37;
    static readonly Equals = 38;
    static readonly NotEquals = 39;
    static readonly And = 40;
    static readonly Or = 41;
    static readonly MultiplyAssign = 42;
    static readonly DivideAssign = 43;
    static readonly ModulusAssign = 44;
    static readonly PlusAssign = 45;
    static readonly MinusAssign = 46;
    static readonly LeftShiftArithmeticAssign = 47;
    static readonly RightShiftArithmeticAssign = 48;
    static readonly RightShiftLogicalAssign = 49;
    static readonly BitAndAssign = 50;
    static readonly BitXorAssign = 51;
    static readonly BitOrAssign = 52;
    static readonly LambdaStart = 53;
    static readonly Pipe = 54;
    static readonly BooleanLiteral = 55;
    static readonly DecimalLiteral = 56;
    static readonly FloatLiteral = 57;
    static readonly StringLiteral = 58;
    static readonly CharacterLiteral = 59;
    static readonly Preprocessor = 60;
    static readonly LambdaParam = 61;
    static readonly ID = 62;
    static readonly WhiteSpaces = 63;
    static readonly UnexpectedCharacter = 64;
    static readonly RULE_program = 0;
    static readonly RULE_scope = 1;
    static readonly RULE_scopeArgument = 2;
    static readonly RULE_statement = 3;
    static readonly RULE_expression = 4;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    constructor(input: TokenStream);
    program(): ProgramContext;
    scope(): ScopeContext;
    scopeArgument(): ScopeArgumentContext;
    statement(): StatementContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class ProgramContext extends ParserRuleContext {
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    scope(): ScopeContext[];
    scope(i: number): ScopeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class ScopeContext extends ParserRuleContext {
    ID(): TerminalNode;
    OpenBrace(): TerminalNode;
    CloseBrace(): TerminalNode;
    scopeArgument(): ScopeArgumentContext[];
    scopeArgument(i: number): ScopeArgumentContext;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    scope(): ScopeContext[];
    scope(i: number): ScopeContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class ScopeArgumentContext extends ParserRuleContext {
    _name: Token;
    _type: Token;
    Colon(): TerminalNode;
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    Assign(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class StatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StatementContext): void;
}
export declare class IfStatementContext extends StatementContext {
    If(): TerminalNode;
    expression(): ExpressionContext;
    OpenBrace(): TerminalNode;
    CloseBrace(): TerminalNode;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    constructor(ctx: StatementContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class LoopStatementContext extends StatementContext {
    _value: Token;
    _key: Token;
    _index: Token;
    Loop(): TerminalNode;
    OpenBrace(): TerminalNode;
    CloseBrace(): TerminalNode;
    expression(): ExpressionContext | undefined;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    In(): TerminalNode | undefined;
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(ctx: StatementContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class AssignmentStatementContext extends StatementContext {
    ID(): TerminalNode;
    expression(): ExpressionContext;
    SemiColon(): TerminalNode;
    Assign(): TerminalNode | undefined;
    PlusAssign(): TerminalNode | undefined;
    MinusAssign(): TerminalNode | undefined;
    MultiplyAssign(): TerminalNode | undefined;
    DivideAssign(): TerminalNode | undefined;
    ModulusAssign(): TerminalNode | undefined;
    BitAndAssign(): TerminalNode | undefined;
    BitOrAssign(): TerminalNode | undefined;
    BitXorAssign(): TerminalNode | undefined;
    constructor(ctx: StatementContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class PreprocessorStatementContext extends StatementContext {
    Preprocessor(): TerminalNode;
    constructor(ctx: StatementContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class ExpressionStatementContext extends StatementContext {
    expression(): ExpressionContext;
    SemiColon(): TerminalNode;
    constructor(ctx: StatementContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class FunctionExpressionContext extends ExpressionContext {
    _object: ExpressionContext;
    _expression: ExpressionContext;
    _args: ExpressionContext[];
    OpenParen(): TerminalNode;
    CloseParen(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class IndexExpressionContext extends ExpressionContext {
    _value: ExpressionContext;
    _index: ExpressionContext;
    OpenBracket(): TerminalNode;
    CloseBracket(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class SliceExpressionContext extends ExpressionContext {
    _value: ExpressionContext;
    _startPos: ExpressionContext;
    _end: ExpressionContext;
    _step: ExpressionContext;
    OpenBracket(): TerminalNode;
    Colon(): TerminalNode[];
    Colon(i: number): TerminalNode;
    CloseBracket(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class MemberExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    Dot(): TerminalNode;
    ID(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class PowExpressionContext extends ExpressionContext {
    _base: ExpressionContext;
    _exponent: ExpressionContext;
    Pow(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class UnaryPlusExpressionContext extends ExpressionContext {
    Plus(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class UnaryMinusExpressionContext extends ExpressionContext {
    Minus(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class BitNotExpressionContext extends ExpressionContext {
    BitNot(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class LogicalNotExpressionContext extends ExpressionContext {
    Not(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class MulDivModExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operation: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    Multiply(): TerminalNode | undefined;
    Divide(): TerminalNode | undefined;
    Modulus(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class AddSubExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operation: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    Plus(): TerminalNode | undefined;
    Minus(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class BitShiftExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LeftShiftArithmetic(): TerminalNode | undefined;
    RightShiftArithmetic(): TerminalNode | undefined;
    RightShiftLogical(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class RelationalExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LessThan(): TerminalNode | undefined;
    LessThanEquals(): TerminalNode | undefined;
    MoreThanEquals(): TerminalNode | undefined;
    MoreThan(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class EqualityExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    Equals(): TerminalNode | undefined;
    NotEquals(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class BitAndExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    BitAnd(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class BitXorExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    BitXor(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class BitOrExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    BitOr(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class LogicalAndExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    And(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class LogicalOrExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    Or(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class IdExpressionContext extends ExpressionContext {
    ID(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class IntegerLiteralExpressionContext extends ExpressionContext {
    DecimalLiteral(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class FloatLiteralExpressionContext extends ExpressionContext {
    FloatLiteral(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class BooleanLiteralExpressionContext extends ExpressionContext {
    BooleanLiteral(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class CharacterLiteralExpressionContext extends ExpressionContext {
    CharacterLiteral(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class StringLiteralExpressionContext extends ExpressionContext {
    StringLiteral(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class ArrayLiteralExpressionContext extends ExpressionContext {
    _expression: ExpressionContext;
    _items: ExpressionContext[];
    OpenBracket(): TerminalNode;
    CloseBracket(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class RangeExpressionContext extends ExpressionContext {
    _startPos: ExpressionContext;
    _end: ExpressionContext;
    _step: ExpressionContext;
    OpenBracket(): TerminalNode;
    Colon(): TerminalNode[];
    Colon(i: number): TerminalNode;
    CloseBracket(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class ObjectLiteralExpressionContext extends ExpressionContext {
    OpenBrace(): TerminalNode;
    CloseBrace(): TerminalNode;
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    Colon(): TerminalNode[];
    Colon(i: number): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class ParenthesizedExpressionContext extends ExpressionContext {
    OpenParen(): TerminalNode;
    expression(): ExpressionContext;
    CloseParen(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class PipeExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    Pipe(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    ID(): TerminalNode | undefined;
    Colon(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
export declare class LambdaExpressionContext extends ExpressionContext {
    LambdaStart(): TerminalNode;
    expression(): ExpressionContext;
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    Colon(): TerminalNode | undefined;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: XonParserListener): void;
    exitRule(listener: XonParserListener): void;
}
