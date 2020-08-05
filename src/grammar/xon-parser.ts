// Generated from XonParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly As = 3;
	public static readonly If = 4;
	public static readonly Else = 5;
	public static readonly Loop = 6;
	public static readonly In = 7;
	public static readonly Pass = 8;
	public static readonly Continue = 9;
	public static readonly Break = 10;
	public static readonly Return = 11;
	public static readonly Select = 12;
	public static readonly Preprocessor = 13;
	public static readonly LineBreak = 14;
	public static readonly BitAnd = 15;
	public static readonly BitOr = 16;
	public static readonly BitXor = 17;
	public static readonly RightShiftArithmetic = 18;
	public static readonly LeftShiftArithmetic = 19;
	public static readonly RightShiftLogical = 20;
	public static readonly OpenBracket = 21;
	public static readonly CloseBracket = 22;
	public static readonly OpenParen = 23;
	public static readonly CloseParen = 24;
	public static readonly OpenBrace = 25;
	public static readonly CloseBrace = 26;
	public static readonly Ad = 27;
	public static readonly Comma = 28;
	public static readonly Assign = 29;
	public static readonly QuestionMark = 30;
	public static readonly Colon = 31;
	public static readonly TwoColon = 32;
	public static readonly Dot = 33;
	public static readonly Plus = 34;
	public static readonly Minus = 35;
	public static readonly BitNot = 36;
	public static readonly Not = 37;
	public static readonly Multiply = 38;
	public static readonly Divide = 39;
	public static readonly Modulus = 40;
	public static readonly Pow = 41;
	public static readonly Sharp = 42;
	public static readonly LessThan = 43;
	public static readonly MoreThan = 44;
	public static readonly LessThanEquals = 45;
	public static readonly MoreThanEquals = 46;
	public static readonly Equals = 47;
	public static readonly NotEquals = 48;
	public static readonly And = 49;
	public static readonly Or = 50;
	public static readonly MultiplyAssign = 51;
	public static readonly DivideAssign = 52;
	public static readonly ModulusAssign = 53;
	public static readonly PlusAssign = 54;
	public static readonly MinusAssign = 55;
	public static readonly LeftShiftArithmeticAssign = 56;
	public static readonly RightShiftArithmeticAssign = 57;
	public static readonly RightShiftLogicalAssign = 58;
	public static readonly BitAndAssign = 59;
	public static readonly BitXorAssign = 60;
	public static readonly BitOrAssign = 61;
	public static readonly LambdaStart = 62;
	public static readonly Pipe = 63;
	public static readonly Underscore = 64;
	public static readonly Declaration = 65;
	public static readonly Constant = 66;
	public static readonly Spread = 67;
	public static readonly NullLiteral = 68;
	public static readonly BooleanLiteral = 69;
	public static readonly DecimalLiteral = 70;
	public static readonly FloatLiteral = 71;
	public static readonly StringLiteral = 72;
	public static readonly StringFormatStart = 73;
	public static readonly StringFormatMiddle = 74;
	public static readonly StringFormatEnd = 75;
	public static readonly ID = 76;
	public static readonly Skip = 77;
	public static readonly UnexpectedCharacter = 78;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_assignmentsList = 7;
	public static readonly RULE_leftAssignments = 8;
	public static readonly RULE_middleAssignments = 9;
	public static readonly RULE_rightAssignments = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_function = 12;
	public static readonly RULE_argument = 13;
	public static readonly RULE_body = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_arrayItem = 16;
	public static readonly RULE_literal = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "member", 
		"statement", "assignmentsList", "leftAssignments", "middleAssignments", 
		"rightAssignments", "type", "function", "argument", "body", "expression", 
		"arrayItem", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'as'", "'if'", "'else'", "'loop'", "'in'", 
		"'pass'", "'continue'", "'break'", "'return'", "'select'", undefined, 
		undefined, "'and'", "'or'", "'xor'", "'>>'", "'<<'", "'>>>'", "'['", "']'", 
		"'('", "')'", "'{'", "'}'", "'@'", "','", "'='", "'?'", "':'", "'::'", 
		"'.'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", 
		"'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", 
		"'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", 
		"'|='", "'\\'", "'|'", "'_'", "':='", "'::='", "'...'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "As", "If", "Else", "Loop", "In", "Pass", 
		"Continue", "Break", "Return", "Select", "Preprocessor", "LineBreak", 
		"BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Ad", "Comma", "Assign", "QuestionMark", "Colon", 
		"TwoColon", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
		"Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", 
		"Equals", "NotEquals", "And", "Or", "MultiplyAssign", "DivideAssign", 
		"ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "Declaration", 
		"Constant", "Spread", "NullLiteral", "BooleanLiteral", "DecimalLiteral", 
		"FloatLiteral", "StringLiteral", "StringFormatStart", "StringFormatMiddle", 
		"StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad) | (1 << XonParser.Comma))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.DecimalLiteral - 67)) | (1 << (XonParser.FloatLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0)) {
				{
				this.state = 38;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 36;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 37;
					this.definition();
					}
					break;
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.importPath();
			this.state = 44;
			this.match(XonParser.Colon);
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Multiply:
				{
				this.state = 45;
				this.match(XonParser.Multiply);
				this.state = 46;
				this.match(XonParser.As);
				this.state = 47;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;
			case XonParser.ID:
				{
				this.state = 48;
				this.importMember();
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 49;
					this.match(XonParser.Comma);
					this.state = 50;
					this.importMember();
					}
					}
					this.state = 55;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Dot) {
					{
					{
					this.state = 58;
					this.match(XonParser.Dot);
					}
					}
					this.state = 63;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 64;
				_la = this._input.LA(1);
				if (!(_la === XonParser.StringLiteral || _la === XonParser.ID)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Dot || _la === XonParser.StringLiteral || _la === XonParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importMember(): ImportMemberContext {
		let _localctx: ImportMemberContext = new ImportMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_importMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			_localctx._name = this.match(XonParser.ID);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 70;
				this.match(XonParser.As);
				this.state = 71;
				_localctx._alias = this.match(XonParser.ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			_localctx._name = this.match(XonParser.ID);
			this.state = 75;
			this.match(XonParser.Colon);
			this.state = 76;
			this.match(XonParser.LineBreak);
			this.state = 77;
			this.match(XonParser.INDENT);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 78;
				this.member();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Pass || _la === XonParser.LineBreak || _la === XonParser.ID);
			this.state = 83;
			this.match(XonParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 92;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 86;
					this.type(0);
					}
					break;

				case 2:
					{
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
						{
						this.state = 87;
						this.type(0);
						}
					}

					this.state = 90;
					this.match(XonParser.Assign);
					this.state = 91;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.function();
				}
				break;

			case 3:
				_localctx = new PassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 95;
				this.match(XonParser.Pass);
				}
				break;

			case 4:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 96;
				this.match(XonParser.LineBreak);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_statement);
		try {
			let _alt: number;
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 100;
						this.assignmentsList();
						this.state = 101;
						this.match(XonParser.Assign);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 105;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 107;
				this.expression(0);
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 108;
						this.match(XonParser.Comma);
						this.state = 109;
						this.expression(0);
						}
						}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				}
				break;

			case 3:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				this.function();
				}
				break;

			case 4:
				_localctx = new PassStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 116;
				this.match(XonParser.Pass);
				}
				break;

			case 5:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 117;
				this.match(XonParser.Continue);
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 118;
				this.match(XonParser.Break);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 119;
				this.match(XonParser.Return);
				this.state = 121;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 120;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 123;
				this.expression(0);
				}
				break;

			case 9:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 124;
				this.match(XonParser.LineBreak);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentsList(): AssignmentsListContext {
		let _localctx: AssignmentsListContext = new AssignmentsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_assignmentsList);
		let _la: number;
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.leftAssignments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.leftAssignments();
				this.state = 129;
				this.middleAssignments();
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 130;
					this.rightAssignments();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 133;
				this.middleAssignments();
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 134;
					this.rightAssignments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leftAssignments(): LeftAssignmentsContext {
		let _localctx: LeftAssignmentsContext = new LeftAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_leftAssignments);
		let _la: number;
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
				this.match(XonParser.ID);
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 140;
					this.match(XonParser.Comma);
					this.state = 142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 141;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.Comma:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 149;
					this.match(XonParser.Comma);
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 150;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.Comma);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public middleAssignments(): MiddleAssignmentsContext {
		let _localctx: MiddleAssignmentsContext = new MiddleAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_middleAssignments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(XonParser.Spread);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 160;
				this.match(XonParser.ID);
				}
			}

			this.state = 170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 163;
					this.match(XonParser.Comma);
					this.state = 164;
					this.match(XonParser.Spread);
					this.state = 166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 165;
						this.match(XonParser.ID);
						}
					}

					}
					}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rightAssignments(): RightAssignmentsContext {
		let _localctx: RightAssignmentsContext = new RightAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_rightAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 173;
				this.match(XonParser.Comma);
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 174;
					this.match(XonParser.ID);
					}
				}

				}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Comma);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new SimpleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 182;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new DictionaryTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.match(XonParser.OpenBrace);
				this.state = 184;
				this.match(XonParser.ID);
				this.state = 185;
				this.type(0);
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 186;
					this.match(XonParser.Comma);
					this.state = 187;
					this.match(XonParser.ID);
					this.state = 188;
					this.type(0);
					}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 194;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 196;
				this.match(XonParser.OpenParen);
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 197;
					(_localctx as FunctionTypeContext)._type = this.type(0);
					(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
					this.state = 202;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 198;
						this.match(XonParser.Comma);
						this.state = 199;
						(_localctx as FunctionTypeContext)._type = this.type(0);
						(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
						}
						}
						this.state = 204;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 207;
				this.match(XonParser.CloseParen);
				this.state = 208;
				(_localctx as FunctionTypeContext)._returnType = this.type(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 216;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
					this.state = 211;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 212;
					this.match(XonParser.OpenBracket);
					this.state = 213;
					this.match(XonParser.CloseBracket);
					}
					}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			_localctx._name = this.match(XonParser.ID);
			this.state = 220;
			this.match(XonParser.OpenParen);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 221;
				this.argument();
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 222;
					this.match(XonParser.Comma);
					this.state = 223;
					this.argument();
					}
					}
					this.state = 228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 231;
			this.match(XonParser.CloseParen);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 232;
				this.type(0);
				}
			}

			this.state = 235;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			_localctx._name = this.match(XonParser.ID);
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 238;
				this.type(0);
				}
				break;

			case 2:
				{
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 239;
					this.type(0);
					}
				}

				this.state = 242;
				this.match(XonParser.Assign);
				this.state = 243;
				this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(XonParser.Colon);
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 247;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 248;
				this.match(XonParser.LineBreak);
				this.state = 249;
				this.match(XonParser.INDENT);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 250;
					this.statement();
					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad) | (1 << XonParser.Comma))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.DecimalLiteral - 67)) | (1 << (XonParser.FloatLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0));
				this.state = 255;
				this.match(XonParser.DEDENT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				_localctx = new IfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 260;
				this.match(XonParser.If);
				this.state = 261;
				this.expression(0);
				this.state = 262;
				this.body();
				this.state = 269;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 263;
					this.match(XonParser.Else);
					this.state = 266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 264;
						this.match(XonParser.If);
						this.state = 265;
						this.expression(0);
						}
					}

					this.state = 268;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new LoopExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 271;
				this.match(XonParser.Loop);
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.DecimalLiteral - 68)) | (1 << (XonParser.FloatLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
					{
					this.state = 284;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						this.state = 272;
						(_localctx as LoopExpressionContext)._value = this.match(XonParser.ID);
						this.state = 277;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
						case 1:
							{
							this.state = 273;
							this.match(XonParser.Comma);
							this.state = 275;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 274;
								(_localctx as LoopExpressionContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 281;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 279;
							this.match(XonParser.Comma);
							this.state = 280;
							(_localctx as LoopExpressionContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 283;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 286;
					this.expression(0);
					}
				}

				this.state = 289;
				this.body();
				}
				break;

			case 3:
				{
				_localctx = new SelectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 290;
				this.match(XonParser.Select);
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.DecimalLiteral - 68)) | (1 << (XonParser.FloatLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
					{
					this.state = 291;
					(_localctx as SelectExpressionContext)._value = this.expression(0);
					this.state = 294;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.As) {
						{
						this.state = 292;
						this.match(XonParser.As);
						this.state = 293;
						this.match(XonParser.ID);
						}
					}

					}
				}

				this.state = 298;
				this.match(XonParser.Colon);
				this.state = 299;
				this.match(XonParser.LineBreak);
				this.state = 300;
				this.match(XonParser.INDENT);
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 301;
					(_localctx as SelectExpressionContext)._expression = this.expression(0);
					(_localctx as SelectExpressionContext)._cases.push((_localctx as SelectExpressionContext)._expression);
					this.state = 302;
					this.body();
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.LineBreak) {
						{
						this.state = 303;
						this.match(XonParser.LineBreak);
						}
					}

					}
					}
					this.state = 308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.DecimalLiteral - 68)) | (1 << (XonParser.FloatLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0));
				this.state = 310;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 312;
				this.match(XonParser.Dot);
				this.state = 313;
				this.match(XonParser.ID);
				}
				break;

			case 5:
				{
				_localctx = new AsyncExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.match(XonParser.Ad);
				this.state = 315;
				this.expression(25);
				}
				break;

			case 6:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 316;
				this.match(XonParser.Plus);
				this.state = 317;
				this.expression(23);
				}
				break;

			case 7:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 318;
				this.match(XonParser.Minus);
				this.state = 319;
				this.expression(22);
				}
				break;

			case 8:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 320;
				this.match(XonParser.BitNot);
				this.state = 321;
				this.expression(21);
				}
				break;

			case 9:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 322;
				this.match(XonParser.Not);
				this.state = 323;
				this.expression(20);
				}
				break;

			case 10:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 324;
				this.match(XonParser.ID);
				}
				break;

			case 11:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 325;
				this.literal();
				}
				break;

			case 12:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 326;
				this.match(XonParser.StringFormatStart);
				this.state = 332;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 327;
						this.expression(0);
						this.state = 328;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 334;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 335;
				this.expression(0);
				this.state = 336;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 13:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 338;
				this.match(XonParser.OpenBracket);
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.DecimalLiteral - 67)) | (1 << (XonParser.FloatLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0)) {
					{
					this.state = 339;
					this.arrayItem();
					this.state = 344;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 340;
						this.match(XonParser.Comma);
						this.state = 341;
						this.arrayItem();
						}
						}
						this.state = 346;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 349;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 14:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 350;
				this.match(XonParser.OpenBracket);
				this.state = 351;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 352;
				this.match(XonParser.Colon);
				this.state = 353;
				(_localctx as RangeExpressionContext)._endPos = this.expression(0);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 354;
					this.match(XonParser.Colon);
					this.state = 355;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 358;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 15:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 360;
				this.match(XonParser.OpenBrace);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.DecimalLiteral - 67)) | (1 << (XonParser.FloatLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0)) {
					{
					this.state = 367;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						this.state = 361;
						this.match(XonParser.Dot);
						this.state = 362;
						this.match(XonParser.ID);
						}
						break;

					case 2:
						{
						this.state = 364;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Spread) {
							{
							this.state = 363;
							this.match(XonParser.Spread);
							}
						}

						this.state = 366;
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
						}
						break;
					}
					this.state = 369;
					this.match(XonParser.Assign);
					this.state = 370;
					(_localctx as ObjectExpressionContext)._expression = this.expression(0);
					(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
					this.state = 384;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 371;
						this.match(XonParser.Comma);
						this.state = 378;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
						case 1:
							{
							this.state = 372;
							this.match(XonParser.Dot);
							this.state = 373;
							this.match(XonParser.ID);
							}
							break;

						case 2:
							{
							this.state = 375;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.Spread) {
								{
								this.state = 374;
								this.match(XonParser.Spread);
								}
							}

							this.state = 377;
							(_localctx as ObjectExpressionContext)._expression = this.expression(0);
							(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
							}
							break;
						}
						this.state = 380;
						this.match(XonParser.Assign);
						this.state = 381;
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
						}
						}
						this.state = 386;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 389;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 16:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 390;
				this.match(XonParser.OpenParen);
				this.state = 391;
				this.expression(0);
				this.state = 392;
				this.match(XonParser.CloseParen);
				}
				break;

			case 17:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 394;
				this.match(XonParser.LambdaStart);
				this.state = 404;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 395;
					this.match(XonParser.ID);
					this.state = 400;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 396;
						this.match(XonParser.Comma);
						this.state = 397;
						this.match(XonParser.ID);
						}
						}
						this.state = 402;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 403;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 406;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 488;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 486;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 409;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 410;
						this.match(XonParser.Pow);
						this.state = 411;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 412;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 413;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Multiply - 38)) | (1 << (XonParser.Divide - 38)) | (1 << (XonParser.Modulus - 38)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 414;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 415;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 416;
						(_localctx as AddSubExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Plus || _la === XonParser.Minus)) {
							(_localctx as AddSubExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 417;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 418;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 419;
						(_localctx as BitShiftExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic) | (1 << XonParser.RightShiftLogical))) !== 0))) {
							(_localctx as BitShiftExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 420;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 421;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 422;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (XonParser.LessThan - 43)) | (1 << (XonParser.MoreThan - 43)) | (1 << (XonParser.LessThanEquals - 43)) | (1 << (XonParser.MoreThanEquals - 43)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 423;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 424;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 425;
						(_localctx as EqualityExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Equals || _la === XonParser.NotEquals)) {
							(_localctx as EqualityExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 426;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 427;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 428;
						this.match(XonParser.BitAnd);
						this.state = 429;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 430;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 431;
						this.match(XonParser.BitXor);
						this.state = 432;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 433;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 434;
						this.match(XonParser.BitOr);
						this.state = 435;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 436;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 437;
						this.match(XonParser.And);
						this.state = 438;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 439;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 440;
						this.match(XonParser.Or);
						this.state = 441;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 442;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 443;
						this.match(XonParser.Pipe);
						this.state = 446;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
						case 1:
							{
							this.state = 444;
							this.match(XonParser.ID);
							this.state = 445;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 448;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 449;
						if (!(this.precpred(this._ctx, 30))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 30)");
						}
						this.state = 450;
						this.match(XonParser.OpenParen);
						this.state = 459;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.DecimalLiteral - 68)) | (1 << (XonParser.FloatLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
							{
							this.state = 451;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 456;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 452;
								this.match(XonParser.Comma);
								this.state = 453;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 458;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 461;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 462;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 463;
						this.match(XonParser.OpenBracket);
						this.state = 464;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 465;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 467;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 468;
						this.match(XonParser.OpenBracket);
						this.state = 469;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 470;
						this.match(XonParser.Colon);
						this.state = 472;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.DecimalLiteral - 68)) | (1 << (XonParser.FloatLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
							{
							this.state = 471;
							(_localctx as SliceExpressionContext)._endPos = this.expression(0);
							}
						}

						this.state = 476;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 474;
							this.match(XonParser.Colon);
							this.state = 475;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 478;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 480;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 482;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 481;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 484;
						this.match(XonParser.Dot);
						this.state = 485;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayItem(): ArrayItemContext {
		let _localctx: ArrayItemContext = new ArrayItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_arrayItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Spread) {
				{
				this.state = 491;
				this.match(XonParser.Spread);
				}
			}

			this.state = 494;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_literal);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 497;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 498;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 499;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 500;
				this.match(XonParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 24);

		case 2:
			return this.precpred(this._ctx, 19);

		case 3:
			return this.precpred(this._ctx, 18);

		case 4:
			return this.precpred(this._ctx, 17);

		case 5:
			return this.precpred(this._ctx, 16);

		case 6:
			return this.precpred(this._ctx, 15);

		case 7:
			return this.precpred(this._ctx, 14);

		case 8:
			return this.precpred(this._ctx, 13);

		case 9:
			return this.precpred(this._ctx, 12);

		case 10:
			return this.precpred(this._ctx, 11);

		case 11:
			return this.precpred(this._ctx, 10);

		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 30);

		case 14:
			return this.precpred(this._ctx, 29);

		case 15:
			return this.precpred(this._ctx, 28);

		case 16:
			return this.precpred(this._ctx, 27);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03P\u01FA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x07\x02)\n\x02\f\x02\x0E\x02,\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x036\n\x03" +
		"\f\x03\x0E\x039\v\x03\x05\x03;\n\x03\x03\x04\x07\x04>\n\x04\f\x04\x0E" +
		"\x04A\v\x04\x03\x04\x06\x04D\n\x04\r\x04\x0E\x04E\x03\x05\x03\x05\x03" +
		"\x05\x05\x05K\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06R\n" +
		"\x06\r\x06\x0E\x06S\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07[\n" +
		"\x07\x03\x07\x03\x07\x05\x07_\n\x07\x03\x07\x03\x07\x03\x07\x05\x07d\n" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x06\bj\n\b\r\b\x0E\bk\x03\b\x03\b\x03\b\x07" +
		"\bq\n\b\f\b\x0E\bt\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b|\n\b" +
		"\x03\b\x03\b\x05\b\x80\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\x86\n\t\x03\t" +
		"\x03\t\x05\t\x8A\n\t\x05\t\x8C\n\t\x03\n\x03\n\x03\n\x05\n\x91\n\n\x07" +
		"\n\x93\n\n\f\n\x0E\n\x96\v\n\x03\n\x03\n\x05\n\x9A\n\n\x06\n\x9C\n\n\r" +
		"\n\x0E\n\x9D\x05\n\xA0\n\n\x03\v\x03\v\x05\v\xA4\n\v\x03\v\x03\v\x03\v" +
		"\x05\v\xA9\n\v\x07\v\xAB\n\v\f\v\x0E\v\xAE\v\v\x03\f\x03\f\x05\f\xB2\n" +
		"\f\x06\f\xB4\n\f\r\f\x0E\f\xB5\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x07\r\xC0\n\r\f\r\x0E\r\xC3\v\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x07\r\xCB\n\r\f\r\x0E\r\xCE\v\r\x05\r\xD0\n\r\x03\r\x03\r\x05\r" +
		"\xD4\n\r\x03\r\x03\r\x03\r\x07\r\xD9\n\r\f\r\x0E\r\xDC\v\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xE3\n\x0E\f\x0E\x0E\x0E\xE6\v\x0E" +
		"\x05\x0E\xE8\n\x0E\x03\x0E\x03\x0E\x05\x0E\xEC\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xF3\n\x0F\x03\x0F\x03\x0F\x05\x0F\xF7\n\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x06\x10\xFE\n\x10\r\x10\x0E\x10" +
		"\xFF\x03\x10\x03\x10\x05\x10\u0104\n\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\u010D\n\x11\x03\x11\x05\x11\u0110\n\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0116\n\x11\x05\x11\u0118\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u011C\n\x11\x03\x11\x05\x11\u011F\n\x11\x03\x11" +
		"\x05\x11\u0122\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0129" +
		"\n\x11\x05\x11\u012B\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u0133\n\x11\x06\x11\u0135\n\x11\r\x11\x0E\x11\u0136\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\u014D\n\x11\f\x11\x0E\x11\u0150\v\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0159\n\x11\f\x11\x0E" +
		"\x11\u015C\v\x11\x05\x11\u015E\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u0167\n\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u016F\n\x11\x03\x11\x05\x11\u0172\n\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u017A\n\x11\x03\x11\x05" +
		"\x11\u017D\n\x11\x03\x11\x03\x11\x07\x11\u0181\n\x11\f\x11\x0E\x11\u0184" +
		"\v\x11\x05\x11\u0186\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0191\n\x11\f\x11\x0E\x11\u0194\v" +
		"\x11\x03\x11\x05\x11\u0197\n\x11\x03\x11\x05\x11\u019A\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u01C1\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u01C9\n\x11\f\x11\x0E\x11\u01CC\v\x11\x05\x11\u01CE\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u01DB\n\x11\x03\x11\x03\x11\x05\x11\u01DF\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u01E5\n\x11\x03\x11\x03\x11\x07\x11\u01E9" +
		"\n\x11\f\x11\x0E\x11\u01EC\v\x11\x03\x12\x05\x12\u01EF\n\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01F8\n\x13\x03\x13" +
		"\x02\x02\x04\x18 \x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02\x02\b\x04\x02JJNN\x03\x02(*\x03\x02$%\x03\x02\x14\x16\x03" +
		"\x02-0\x03\x0212\x02\u025C\x02*\x03\x02\x02\x02\x04-\x03\x02\x02\x02\x06" +
		"C\x03\x02\x02\x02\bG\x03\x02\x02\x02\nL\x03\x02\x02\x02\fc\x03\x02\x02" +
		"\x02\x0E\x7F\x03\x02\x02\x02\x10\x8B\x03\x02\x02\x02\x12\x9F\x03\x02\x02" +
		"\x02\x14\xA1\x03\x02\x02\x02\x16\xB3\x03\x02\x02\x02\x18\xD3\x03\x02\x02" +
		"\x02\x1A\xDD\x03\x02\x02\x02\x1C\xEF\x03\x02\x02\x02\x1E\xF8\x03\x02\x02" +
		"\x02 \u0199\x03\x02\x02\x02\"\u01EE\x03\x02\x02\x02$\u01F7\x03\x02\x02" +
		"\x02&)\x05\x0E\b\x02\')\x05\n\x06\x02(&\x03\x02\x02\x02(\'\x03\x02\x02" +
		"\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02\x02+\x03\x03\x02" +
		"\x02\x02,*\x03\x02\x02\x02-.\x05\x06\x04\x02.:\x07!\x02\x02/0\x07(\x02" +
		"\x0201\x07\x05\x02\x021;\x07N\x02\x0227\x05\b\x05\x0234\x07\x1E\x02\x02" +
		"46\x05\b\x05\x0253\x03\x02\x02\x0269\x03\x02\x02\x0275\x03\x02\x02\x02" +
		"78\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x02:/\x03\x02\x02\x02" +
		":2\x03\x02\x02\x02;\x05\x03\x02\x02\x02<>\x07#\x02\x02=<\x03\x02\x02\x02" +
		">A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02\x02" +
		"A?\x03\x02\x02\x02BD\t\x02\x02\x02C?\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"EC\x03\x02\x02\x02EF\x03\x02\x02\x02F\x07\x03\x02\x02\x02GJ\x07N\x02\x02" +
		"HI\x07\x05\x02\x02IK\x07N\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"K\t\x03\x02\x02\x02LM\x07N\x02\x02MN\x07!\x02\x02NO\x07\x10\x02\x02OQ" +
		"\x07\x03\x02\x02PR\x05\f\x07\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02S" +
		"Q\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x07\x04\x02\x02" +
		"V\v\x03\x02\x02\x02W^\x07N\x02\x02X_\x05\x18\r\x02Y[\x05\x18\r\x02ZY\x03" +
		"\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07\x1F\x02\x02]" +
		"_\x05 \x11\x02^X\x03\x02\x02\x02^Z\x03\x02\x02\x02_d\x03\x02\x02\x02`" +
		"d\x05\x1A\x0E\x02ad\x07\n\x02\x02bd\x07\x10\x02\x02cW\x03\x02\x02\x02" +
		"c`\x03\x02\x02\x02ca\x03\x02\x02\x02cb\x03\x02\x02\x02d\r\x03\x02\x02" +
		"\x02e\x80\x07\x0F\x02\x02fg\x05\x10\t\x02gh\x07\x1F\x02\x02hj\x03\x02" +
		"\x02\x02if\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lm\x03\x02\x02\x02mr\x05 \x11\x02no\x07\x1E\x02\x02oq\x05 \x11" +
		"\x02pn\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02" +
		"\x02s\x80\x03\x02\x02\x02tr\x03\x02\x02\x02u\x80\x05\x1A\x0E\x02v\x80" +
		"\x07\n\x02\x02w\x80\x07\v\x02\x02x\x80\x07\f\x02\x02y{\x07\r\x02\x02z" +
		"|\x05 \x11\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|\x80\x03\x02\x02\x02" +
		"}\x80\x05 \x11\x02~\x80\x07\x10\x02\x02\x7Fe\x03\x02\x02\x02\x7Fi\x03" +
		"\x02\x02\x02\x7Fu\x03\x02\x02\x02\x7Fv\x03\x02\x02\x02\x7Fw\x03\x02\x02" +
		"\x02\x7Fx\x03\x02\x02\x02\x7Fy\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F" +
		"~\x03\x02\x02\x02\x80\x0F\x03\x02\x02\x02\x81\x8C\x05\x12\n\x02\x82\x83" +
		"\x05\x12\n\x02\x83\x85\x05\x14\v\x02\x84\x86\x05\x16\f\x02\x85\x84\x03" +
		"\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x8C\x03\x02\x02\x02\x87\x89\x05" +
		"\x14\v\x02\x88\x8A\x05\x16\f\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02" +
		"\x02\x02\x8A\x8C\x03\x02\x02\x02\x8B\x81\x03\x02\x02\x02\x8B\x82\x03\x02" +
		"\x02\x02\x8B\x87\x03\x02\x02\x02\x8C\x11\x03\x02\x02\x02\x8D\x94\x07N" +
		"\x02\x02\x8E\x90\x07\x1E\x02\x02\x8F\x91\x07N\x02\x02\x90\x8F\x03\x02" +
		"\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x8E\x03\x02" +
		"\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02" +
		"\x02\x02\x95\xA0\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x99\x07\x1E" +
		"\x02\x02\x98\x9A\x07N\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02" +
		"\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x97\x03\x02\x02\x02\x9C\x9D\x03\x02" +
		"\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02" +
		"\x02\x02\x9F\x8D\x03\x02\x02\x02\x9F\x9B\x03\x02\x02\x02\xA0\x13\x03\x02" +
		"\x02\x02\xA1\xA3\x07E\x02\x02\xA2\xA4\x07N\x02\x02\xA3\xA2\x03\x02\x02" +
		"\x02\xA3\xA4\x03\x02\x02\x02\xA4\xAC\x03\x02\x02\x02\xA5\xA6\x07\x1E\x02" +
		"\x02\xA6\xA8\x07E\x02\x02\xA7\xA9\x07N\x02\x02\xA8\xA7\x03\x02\x02\x02" +
		"\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA5\x03\x02\x02\x02" +
		"\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02" +
		"\xAD\x15\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB1\x07\x1E\x02\x02" +
		"\xB0\xB2\x07N\x02\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02" +
		"\xB2\xB4\x03\x02\x02\x02\xB3\xAF\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02" +
		"\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\x17\x03\x02\x02\x02" +
		"\xB7\xB8\b\r\x01\x02\xB8\xD4\x07N\x02\x02\xB9\xBA\x07\x1B\x02\x02\xBA" +
		"\xBB\x07N\x02\x02\xBB\xC1\x05\x18\r\x02\xBC\xBD\x07\x1E\x02\x02\xBD\xBE" +
		"\x07N\x02\x02\xBE\xC0\x05\x18\r\x02\xBF\xBC\x03\x02\x02\x02\xC0\xC3\x03" +
		"\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03" +
		"\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC5\x07\x1C\x02\x02\xC5\xD4\x03" +
		"\x02\x02\x02\xC6\xCF\x07\x19\x02\x02\xC7\xCC\x05\x18\r\x02\xC8\xC9\x07" +
		"\x1E\x02\x02\xC9\xCB\x05\x18\r\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCE\x03" +
		"\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD0\x03" +
		"\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xC7\x03\x02\x02\x02\xCF\xD0\x03" +
		"\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x07\x1A\x02\x02\xD2\xD4\x05" +
		"\x18\r\x03\xD3\xB7\x03\x02\x02\x02\xD3\xB9\x03\x02\x02\x02\xD3\xC6\x03" +
		"\x02\x02\x02\xD4\xDA\x03\x02\x02\x02\xD5\xD6\f\x05\x02\x02\xD6\xD7\x07" +
		"\x17\x02\x02\xD7\xD9\x07\x18\x02\x02\xD8\xD5\x03\x02\x02\x02\xD9\xDC\x03" +
		"\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\x19\x03" +
		"\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDE\x07N\x02\x02\xDE\xE7\x07" +
		"\x19\x02\x02\xDF\xE4\x05\x1C\x0F\x02\xE0\xE1\x07\x1E\x02\x02\xE1\xE3\x05" +
		"\x1C\x0F\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03" +
		"\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03" +
		"\x02\x02\x02\xE7\xDF\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03" +
		"\x02\x02\x02\xE9\xEB\x07\x1A\x02\x02\xEA\xEC\x05\x18\r\x02\xEB\xEA\x03" +
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x05" +
		"\x1E\x10\x02\xEE\x1B\x03\x02\x02\x02\xEF\xF6\x07N\x02\x02\xF0\xF7\x05" +
		"\x18\r\x02\xF1\xF3\x05\x18\r\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x07\x1F\x02\x02\xF5\xF7\x05 " +
		"\x11\x02\xF6\xF0\x03\x02\x02\x02\xF6\xF2\x03\x02\x02\x02\xF7\x1D\x03\x02" +
		"\x02\x02\xF8\u0103\x07!\x02\x02\xF9\u0104\x05\x0E\b\x02\xFA\xFB\x07\x10" +
		"\x02\x02\xFB\xFD\x07\x03\x02\x02\xFC\xFE\x05\x0E\b\x02\xFD\xFC\x03\x02" +
		"\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03" +
		"\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x07\x04\x02\x02\u0102" +
		"\u0104\x03\x02\x02\x02\u0103\xF9\x03\x02\x02\x02\u0103\xFA\x03\x02\x02" +
		"\x02\u0104\x1F\x03\x02\x02\x02\u0105\u0106\b\x11\x01\x02\u0106\u0107\x07" +
		"\x06\x02\x02\u0107\u0108\x05 \x11\x02\u0108\u010F\x05\x1E\x10\x02\u0109" +
		"\u010C\x07\x07\x02\x02\u010A\u010B\x07\x06\x02\x02\u010B\u010D\x05 \x11" +
		"\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E" +
		"\x03\x02\x02\x02\u010E\u0110\x05\x1E\x10\x02\u010F\u0109\x03\x02\x02\x02" +
		"\u010F\u0110\x03\x02\x02\x02\u0110\u019A\x03\x02\x02\x02\u0111\u0121\x07" +
		"\b\x02\x02\u0112\u0117\x07N\x02\x02\u0113\u0115\x07\x1E\x02\x02\u0114" +
		"\u0116\x07N\x02\x02\u0115\u0114\x03\x02\x02\x02\u0115\u0116\x03\x02\x02" +
		"\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0113\x03\x02\x02\x02\u0117\u0118" +
		"\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u011A\x07\x1E\x02\x02" +
		"\u011A\u011C\x07N\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03" +
		"\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011F\x07\t\x02\x02\u011E" +
		"\u0112\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x03\x02" +
		"\x02\x02\u0120\u0122\x05 \x11\x02\u0121\u011E\x03\x02\x02\x02\u0121\u0122" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u019A\x05\x1E\x10\x02" +
		"\u0124\u012A\x07\x0E\x02\x02\u0125\u0128\x05 \x11\x02\u0126\u0127\x07" +
		"\x05\x02\x02\u0127\u0129\x07N\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0125\x03\x02" +
		"\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C" +
		"\u012D\x07!\x02\x02\u012D\u012E\x07\x10\x02\x02\u012E\u0134\x07\x03\x02" +
		"\x02\u012F\u0130\x05 \x11\x02\u0130\u0132\x05\x1E\x10\x02\u0131\u0133" +
		"\x07\x10\x02\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02" +
		"\u0133\u0135\x03\x02\x02\x02\u0134\u012F\x03\x02\x02\x02\u0135\u0136\x03" +
		"\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137" +
		"\u0138\x03\x02\x02\x02\u0138\u0139\x07\x04\x02\x02\u0139\u019A\x03\x02" +
		"\x02\x02\u013A\u013B\x07#\x02\x02\u013B\u019A\x07N\x02\x02\u013C\u013D" +
		"\x07\x1D\x02\x02\u013D\u019A\x05 \x11\x1B\u013E\u013F\x07$\x02\x02\u013F" +
		"\u019A\x05 \x11\x19\u0140\u0141\x07%\x02\x02\u0141\u019A\x05 \x11\x18" +
		"\u0142\u0143\x07&\x02\x02\u0143\u019A\x05 \x11\x17\u0144\u0145\x07\'\x02" +
		"\x02\u0145\u019A\x05 \x11\x16\u0146\u019A\x07N\x02\x02\u0147\u019A\x05" +
		"$\x13\x02\u0148\u014E\x07K\x02\x02\u0149\u014A\x05 \x11\x02\u014A\u014B" +
		"\x07L\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u0149\x03\x02\x02\x02" +
		"\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03" +
		"\x02\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0152\x05 \x11\x02\u0152\u0153\x07M\x02\x02\u0153\u019A\x03\x02\x02\x02" +
		"\u0154\u015D\x07\x17\x02\x02\u0155\u015A\x05\"\x12\x02\u0156\u0157\x07" +
		"\x1E\x02\x02\u0157\u0159\x05\"\x12\x02\u0158\u0156\x03\x02\x02\x02\u0159" +
		"\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015D" +
		"\u0155\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x03\x02" +
		"\x02\x02\u015F\u019A\x07\x18\x02\x02\u0160\u0161\x07\x17\x02\x02\u0161" +
		"\u0162\x05 \x11\x02\u0162\u0163\x07!\x02\x02\u0163\u0166\x05 \x11\x02" +
		"\u0164\u0165\x07!\x02\x02\u0165\u0167\x05 \x11\x02\u0166\u0164\x03\x02" +
		"\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\u0169\x07\x18\x02\x02\u0169\u019A\x03\x02\x02\x02\u016A\u0185\x07\x1B" +
		"\x02\x02\u016B\u016C\x07#\x02\x02\u016C\u0172\x07N\x02\x02\u016D\u016F" +
		"\x07E\x02\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02" +
		"\u016F\u0170\x03\x02\x02\x02\u0170\u0172\x05 \x11\x02\u0171\u016B\x03" +
		"\x02\x02\x02\u0171\u016E\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173" +
		"\u0174\x07\x1F\x02\x02\u0174\u0182\x05 \x11\x02\u0175\u017C\x07\x1E\x02" +
		"\x02\u0176\u0177\x07#\x02\x02\u0177\u017D\x07N\x02\x02\u0178\u017A\x07" +
		"E\x02\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017B\u017D\x05 \x11\x02\u017C\u0176\x03\x02\x02" +
		"\x02\u017C\u0179\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F" +
		"\x07\x1F\x02\x02\u017F\u0181\x05 \x11\x02\u0180\u0175\x03\x02\x02\x02" +
		"\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03" +
		"\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185" +
		"\u0171\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02" +
		"\x02\x02\u0187\u019A\x07\x1C\x02\x02\u0188\u0189\x07\x19\x02\x02\u0189" +
		"\u018A\x05 \x11\x02\u018A\u018B\x07\x1A\x02\x02\u018B\u019A\x03\x02\x02" +
		"\x02\u018C\u0196\x07@\x02\x02\u018D\u0192\x07N\x02\x02\u018E\u018F\x07" +
		"\x1E\x02\x02\u018F\u0191\x07N\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191" +
		"\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02" +
		"\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195" +
		"\u0197\x07!\x02\x02\u0196\u018D\x03\x02\x02\x02\u0196\u0197\x03\x02\x02" +
		"\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x05 \x11\x03\u0199\u0105" +
		"\x03\x02\x02\x02\u0199\u0111\x03\x02\x02\x02\u0199\u0124\x03\x02\x02\x02" +
		"\u0199\u013A\x03\x02\x02\x02\u0199\u013C\x03\x02\x02\x02\u0199\u013E\x03" +
		"\x02\x02\x02\u0199\u0140\x03\x02\x02\x02\u0199\u0142\x03\x02\x02\x02\u0199" +
		"\u0144\x03\x02\x02\x02\u0199\u0146\x03\x02\x02\x02\u0199\u0147\x03\x02" +
		"\x02\x02\u0199\u0148\x03\x02\x02\x02\u0199\u0154\x03\x02\x02\x02\u0199" +
		"\u0160\x03\x02\x02\x02\u0199\u016A\x03\x02\x02\x02\u0199\u0188\x03\x02" +
		"\x02\x02\u0199\u018C\x03\x02\x02\x02\u019A\u01EA\x03\x02\x02\x02\u019B" +
		"\u019C\f\x1A\x02\x02\u019C\u019D\x07+\x02\x02\u019D\u01E9\x05 \x11\x1B" +
		"\u019E\u019F\f\x15\x02\x02\u019F\u01A0\t\x03\x02\x02\u01A0\u01E9\x05 " +
		"\x11\x16\u01A1\u01A2\f\x14\x02\x02\u01A2\u01A3\t\x04\x02\x02\u01A3\u01E9" +
		"\x05 \x11\x15\u01A4\u01A5\f\x13\x02\x02\u01A5\u01A6\t\x05\x02\x02\u01A6" +
		"\u01E9\x05 \x11\x14\u01A7\u01A8\f\x12\x02\x02\u01A8\u01A9\t\x06\x02\x02" +
		"\u01A9\u01E9\x05 \x11\x13\u01AA\u01AB\f\x11\x02\x02\u01AB\u01AC\t\x07" +
		"\x02\x02\u01AC\u01E9\x05 \x11\x12\u01AD\u01AE\f\x10\x02\x02\u01AE\u01AF" +
		"\x07\x11\x02\x02\u01AF\u01E9\x05 \x11\x11\u01B0\u01B1\f\x0F\x02\x02\u01B1" +
		"\u01B2\x07\x13\x02\x02\u01B2\u01E9\x05 \x11\x10\u01B3\u01B4\f\x0E\x02" +
		"\x02\u01B4\u01B5\x07\x12\x02\x02\u01B5\u01E9\x05 \x11\x0F\u01B6\u01B7" +
		"\f\r\x02\x02\u01B7\u01B8\x073\x02\x02\u01B8\u01E9\x05 \x11\x0E\u01B9\u01BA" +
		"\f\f\x02\x02\u01BA\u01BB\x074\x02\x02\u01BB\u01E9\x05 \x11\r\u01BC\u01BD" +
		"\f\x04\x02\x02\u01BD\u01C0\x07A\x02\x02\u01BE\u01BF\x07N\x02\x02\u01BF" +
		"\u01C1\x07!\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02" +
		"\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01E9\x05 \x11\x05\u01C3\u01C4" +
		"\f \x02\x02\u01C4\u01CD\x07\x19\x02\x02\u01C5\u01CA\x05 \x11\x02\u01C6" +
		"\u01C7\x07\x1E\x02\x02\u01C7\u01C9\x05 \x11\x02\u01C8\u01C6\x03\x02\x02" +
		"\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB" +
		"\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02" +
		"\u01CD\u01C5\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03" +
		"\x02\x02\x02\u01CF\u01E9\x07\x1A\x02\x02\u01D0\u01D1\f\x1F\x02\x02\u01D1" +
		"\u01D2\x07\x17\x02\x02\u01D2\u01D3\x05 \x11\x02\u01D3\u01D4\x07\x18\x02" +
		"\x02\u01D4\u01E9\x03\x02\x02\x02\u01D5\u01D6\f\x1E\x02\x02\u01D6\u01D7" +
		"\x07\x17\x02\x02\u01D7\u01D8\x05 \x11\x02\u01D8\u01DA\x07!\x02\x02\u01D9" +
		"\u01DB\x05 \x11\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02" +
		"\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DD\x07!\x02\x02\u01DD\u01DF" +
		"\x05 \x11\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x07\x18\x02\x02\u01E1\u01E9\x03" +
		"\x02\x02\x02\u01E2\u01E4\f\x1D\x02\x02\u01E3\u01E5\x07 \x02\x02\u01E4" +
		"\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03\x02" +
		"\x02\x02\u01E6\u01E7\x07#\x02\x02\u01E7\u01E9\x07N\x02\x02\u01E8\u019B" +
		"\x03\x02\x02\x02\u01E8\u019E\x03\x02\x02\x02\u01E8\u01A1\x03\x02\x02\x02" +
		"\u01E8\u01A4\x03\x02\x02\x02\u01E8\u01A7\x03\x02\x02\x02\u01E8\u01AA\x03" +
		"\x02\x02\x02\u01E8\u01AD\x03\x02\x02\x02\u01E8\u01B0\x03\x02\x02\x02\u01E8" +
		"\u01B3\x03\x02\x02\x02\u01E8\u01B6\x03\x02\x02\x02\u01E8\u01B9\x03\x02" +
		"\x02\x02\u01E8\u01BC\x03\x02\x02\x02\u01E8\u01C3\x03\x02\x02\x02\u01E8" +
		"\u01D0\x03\x02\x02\x02\u01E8\u01D5\x03\x02\x02\x02\u01E8\u01E2\x03\x02" +
		"\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA" +
		"\u01EB\x03\x02\x02\x02\u01EB!\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02" +
		"\x02\u01ED\u01EF\x07E\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF" +
		"\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x05 \x11\x02" +
		"\u01F1#\x03\x02\x02\x02\u01F2\u01F8\x07F\x02\x02\u01F3\u01F8\x07G\x02" +
		"\x02\u01F4\u01F8\x07H\x02\x02\u01F5\u01F8\x07I\x02\x02\u01F6\u01F8\x07" +
		"J\x02\x02\u01F7\u01F2\x03\x02\x02\x02\u01F7\u01F3\x03\x02\x02\x02\u01F7" +
		"\u01F4\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03\x02" +
		"\x02\x02\u01F8%\x03\x02\x02\x02L(*7:?EJSZ^ckr{\x7F\x85\x89\x8B\x90\x94" +
		"\x99\x9D\x9F\xA3\xA8\xAC\xB1\xB5\xC1\xCC\xCF\xD3\xDA\xE4\xE7\xEB\xF2\xF6" +
		"\xFF\u0103\u010C\u010F\u0115\u0117\u011B\u011E\u0121\u0128\u012A\u0132" +
		"\u0136\u014E\u015A\u015D\u0166\u016E\u0171\u0179\u017C\u0182\u0185\u0192" +
		"\u0196\u0199\u01C0\u01CA\u01CD\u01DA\u01DE\u01E4\u01E8\u01EA\u01EE\u01F7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class ImportsContext extends ParserRuleContext {
	public _alias: Token;
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public importMember(): ImportMemberContext[];
	public importMember(i: number): ImportMemberContext;
	public importMember(i?: number): ImportMemberContext | ImportMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportMemberContext);
		} else {
			return this.getRuleContext(i, ImportMemberContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_imports; }
}


export class ImportPathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringLiteral);
		} else {
			return this.getToken(XonParser.StringLiteral, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Dot);
		} else {
			return this.getToken(XonParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_importPath; }
}


export class ImportMemberContext extends ParserRuleContext {
	public _name: Token;
	public _alias: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_importMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public _name: Token;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class MemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_member; }
	public copyFrom(ctx: MemberContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyMemberContext extends MemberContext {
	public _name: Token;
	public _value: ExpressionContext;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PassMemberContext extends MemberContext {
	public Pass(): TerminalNode { return this.getToken(XonParser.Pass, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakMemberContext extends MemberContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public assignmentsList(): AssignmentsListContext[];
	public assignmentsList(i: number): AssignmentsListContext;
	public assignmentsList(i?: number): AssignmentsListContext | AssignmentsListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentsListContext);
		} else {
			return this.getRuleContext(i, AssignmentsListContext);
		}
	}
	public Assign(): TerminalNode[];
	public Assign(i: number): TerminalNode;
	public Assign(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Assign);
		} else {
			return this.getToken(XonParser.Assign, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionStatementContext extends StatementContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PassStatementContext extends StatementContext {
	public Pass(): TerminalNode { return this.getToken(XonParser.Pass, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContinueStatementContext extends StatementContext {
	public Continue(): TerminalNode { return this.getToken(XonParser.Continue, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public Break(): TerminalNode { return this.getToken(XonParser.Break, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(XonParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class AssignmentsListContext extends ParserRuleContext {
	public leftAssignments(): LeftAssignmentsContext | undefined {
		return this.tryGetRuleContext(0, LeftAssignmentsContext);
	}
	public middleAssignments(): MiddleAssignmentsContext | undefined {
		return this.tryGetRuleContext(0, MiddleAssignmentsContext);
	}
	public rightAssignments(): RightAssignmentsContext | undefined {
		return this.tryGetRuleContext(0, RightAssignmentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_assignmentsList; }
}


export class LeftAssignmentsContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_leftAssignments; }
}


export class MiddleAssignmentsContext extends ParserRuleContext {
	public Spread(): TerminalNode[];
	public Spread(i: number): TerminalNode;
	public Spread(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Spread);
		} else {
			return this.getToken(XonParser.Spread, i);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_middleAssignments; }
}


export class RightAssignmentsContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_rightAssignments; }
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class SimpleTypeContext extends TypeContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DictionaryTypeContext extends TypeContext {
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public _type: TypeContext;
	public _args: TypeContext[] = [];
	public _returnType: TypeContext;
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class FunctionContext extends ParserRuleContext {
	public _name: Token;
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_function; }
}


export class ArgumentContext extends ParserRuleContext {
	public _name: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class BodyContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IfExpressionContext extends ExpressionContext {
	public If(): TerminalNode[];
	public If(i: number): TerminalNode;
	public If(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.If);
		} else {
			return this.getToken(XonParser.If, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopExpressionContext extends ExpressionContext {
	public _value: Token;
	public _key: Token;
	public _index: Token;
	public Loop(): TerminalNode { return this.getToken(XonParser.Loop, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public In(): TerminalNode | undefined { return this.tryGetToken(XonParser.In, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SelectExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _expression: ExpressionContext;
	public _cases: ExpressionContext[] = [];
	public Select(): TerminalNode { return this.getToken(XonParser.Select, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends ExpressionContext {
	public _object: ExpressionContext;
	public _expression: ExpressionContext;
	public _args: ExpressionContext[] = [];
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _index: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SliceExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _startPos: ExpressionContext;
	public _endPos: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(XonParser.Dot, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(XonParser.QuestionMark, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceMemberExpressionContext extends ExpressionContext {
	public Dot(): TerminalNode { return this.getToken(XonParser.Dot, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AsyncExpressionContext extends ExpressionContext {
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _base: ExpressionContext;
	public _exponent: ExpressionContext;
	public Pow(): TerminalNode { return this.getToken(XonParser.Pow, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryPlusExpressionContext extends ExpressionContext {
	public Plus(): TerminalNode { return this.getToken(XonParser.Plus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Minus(): TerminalNode { return this.getToken(XonParser.Minus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitNotExpressionContext extends ExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(XonParser.BitNot, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalNotExpressionContext extends ExpressionContext {
	public Not(): TerminalNode { return this.getToken(XonParser.Not, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(XonParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitShiftExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftLogical, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThanEquals, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThanEquals, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(XonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitAnd(): TerminalNode { return this.getToken(XonParser.BitAnd, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitXorExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitXor(): TerminalNode { return this.getToken(XonParser.BitXor, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitOrExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitOr(): TerminalNode { return this.getToken(XonParser.BitOr, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public And(): TerminalNode { return this.getToken(XonParser.And, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Or(): TerminalNode { return this.getToken(XonParser.Or, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringFormatExpressionContext extends ExpressionContext {
	public StringFormatStart(): TerminalNode { return this.getToken(XonParser.StringFormatStart, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public StringFormatEnd(): TerminalNode { return this.getToken(XonParser.StringFormatEnd, 0); }
	public StringFormatMiddle(): TerminalNode[];
	public StringFormatMiddle(i: number): TerminalNode;
	public StringFormatMiddle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringFormatMiddle);
		} else {
			return this.getToken(XonParser.StringFormatMiddle, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public arrayItem(): ArrayItemContext[];
	public arrayItem(i: number): ArrayItemContext;
	public arrayItem(i?: number): ArrayItemContext | ArrayItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayItemContext);
		} else {
			return this.getRuleContext(i, ArrayItemContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public _startPos: ExpressionContext;
	public _endPos: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExpressionContext {
	public _expression: ExpressionContext;
	public _key: ExpressionContext[] = [];
	public _value: ExpressionContext[] = [];
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public Assign(): TerminalNode[];
	public Assign(i: number): TerminalNode;
	public Assign(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Assign);
		} else {
			return this.getToken(XonParser.Assign, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Dot);
		} else {
			return this.getToken(XonParser.Dot, i);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	public Spread(): TerminalNode[];
	public Spread(i: number): TerminalNode;
	public Spread(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Spread);
		} else {
			return this.getToken(XonParser.Spread, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PipeExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Pipe(): TerminalNode { return this.getToken(XonParser.Pipe, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public LambdaStart(): TerminalNode { return this.getToken(XonParser.LambdaStart, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ArrayItemContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Spread(): TerminalNode | undefined { return this.tryGetToken(XonParser.Spread, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_arrayItem; }
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends LiteralContext {
	public NullLiteral(): TerminalNode { return this.getToken(XonParser.NullLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends LiteralContext {
	public DecimalLiteral(): TerminalNode { return this.getToken(XonParser.DecimalLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FloatLiteral(): TerminalNode { return this.getToken(XonParser.FloatLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


