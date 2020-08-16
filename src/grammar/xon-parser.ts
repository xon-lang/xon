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
	public static readonly NumberLiteral = 70;
	public static readonly StringLiteral = 71;
	public static readonly StringFormatStart = 72;
	public static readonly StringFormatMiddle = 73;
	public static readonly StringFormatEnd = 74;
	public static readonly ID = 75;
	public static readonly Skip = 76;
	public static readonly UnexpectedCharacter = 77;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importMember = 2;
	public static readonly RULE_definition = 3;
	public static readonly RULE_member = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_assignmentsList = 6;
	public static readonly RULE_leftAssignments = 7;
	public static readonly RULE_middleAssignments = 8;
	public static readonly RULE_rightAssignments = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_function = 11;
	public static readonly RULE_argument = 12;
	public static readonly RULE_body = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_arrayItem = 15;
	public static readonly RULE_literal = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importMember", "definition", "member", "statement", 
		"assignmentsList", "leftAssignments", "middleAssignments", "rightAssignments", 
		"type", "function", "argument", "body", "expression", "arrayItem", "literal",
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
		"Constant", "Spread", "NullLiteral", "BooleanLiteral", "NumberLiteral", 
		"StringLiteral", "StringFormatStart", "StringFormatMiddle", "StringFormatEnd", 
		"ID", "Skip", "UnexpectedCharacter",
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 34;
					this.imports();
					}
					}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad) | (1 << XonParser.Comma))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.NumberLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0)) {
				{
				this.state = 42;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 40;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 41;
					this.definition();
					}
					break;
				}
				}
				this.state = 46;
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
		try {
			let _alt: number;
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.match(XonParser.StringLiteral);
				this.state = 48;
				this.match(XonParser.Colon);
				this.state = 60;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Multiply:
					{
					this.state = 49;
					this.match(XonParser.Multiply);
					this.state = 50;
					this.match(XonParser.As);
					this.state = 51;
					_localctx._alias = this.match(XonParser.ID);
					}
					break;
				case XonParser.ID:
					{
					this.state = 52;
					this.importMember();
					this.state = 57;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 53;
							this.match(XonParser.Comma);
							this.state = 54;
							this.importMember();
							}
							}
						}
						this.state = 59;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case XonParser.LineBreak:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.match(XonParser.LineBreak);
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
	public importMember(): ImportMemberContext {
		let _localctx: ImportMemberContext = new ImportMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			_localctx._name = this.match(XonParser.ID);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 66;
				this.match(XonParser.As);
				this.state = 67;
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
		this.enterRule(_localctx, 6, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			_localctx._name = this.match(XonParser.ID);
			this.state = 71;
			this.match(XonParser.Colon);
			this.state = 72;
			this.match(XonParser.LineBreak);
			this.state = 73;
			this.match(XonParser.INDENT);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 74;
				this.member();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Pass || _la === XonParser.LineBreak || _la === XonParser.ID);
			this.state = 79;
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
		this.enterRule(_localctx, 8, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 88;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 82;
					this.type(0);
					}
					break;

				case 2:
					{
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
						{
						this.state = 83;
						this.type(0);
						}
					}

					this.state = 86;
					this.match(XonParser.Assign);
					this.state = 87;
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
				this.state = 90;
				this.function();
				}
				break;

			case 3:
				_localctx = new PassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.match(XonParser.Pass);
				}
				break;

			case 4:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 92;
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
		this.enterRule(_localctx, 10, XonParser.RULE_statement);
		try {
			let _alt: number;
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 99;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 96;
						this.assignmentsList();
						this.state = 97;
						this.match(XonParser.Assign);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 101;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 103;
				this.expression(0);
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 104;
						this.match(XonParser.Comma);
						this.state = 105;
						this.expression(0);
						}
						}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				}
				break;

			case 3:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 111;
				this.function();
				}
				break;

			case 4:
				_localctx = new PassStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 112;
				this.match(XonParser.Pass);
				}
				break;

			case 5:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 113;
				this.match(XonParser.Continue);
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 114;
				this.match(XonParser.Break);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 115;
				this.match(XonParser.Return);
				this.state = 117;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 116;
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
				this.state = 119;
				this.expression(0);
				}
				break;

			case 9:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 120;
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
		this.enterRule(_localctx, 12, XonParser.RULE_assignmentsList);
		let _la: number;
		try {
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 123;
				this.leftAssignments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 124;
				this.leftAssignments();
				this.state = 125;
				this.middleAssignments();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 126;
					this.rightAssignments();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
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
		this.enterRule(_localctx, 14, XonParser.RULE_leftAssignments);
		let _la: number;
		try {
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.match(XonParser.ID);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 136;
					this.match(XonParser.Comma);
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 137;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.Comma:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 145;
					this.match(XonParser.Comma);
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 146;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 151;
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
		this.enterRule(_localctx, 16, XonParser.RULE_middleAssignments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(XonParser.Spread);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 156;
				this.match(XonParser.ID);
				}
			}

			this.state = 166;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 159;
					this.match(XonParser.Comma);
					this.state = 160;
					this.match(XonParser.Spread);
					this.state = 162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 161;
						this.match(XonParser.ID);
						}
					}

					}
					}
				}
				this.state = 168;
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
		this.enterRule(_localctx, 18, XonParser.RULE_rightAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 169;
				this.match(XonParser.Comma);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 170;
					this.match(XonParser.ID);
					}
				}

				}
				}
				this.state = 175;
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new SimpleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 178;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new DictionaryTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 179;
				this.match(XonParser.OpenBrace);
				this.state = 180;
				this.match(XonParser.ID);
				this.state = 181;
				this.type(0);
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 182;
					this.match(XonParser.Comma);
					this.state = 183;
					this.match(XonParser.ID);
					this.state = 184;
					this.type(0);
					}
					}
					this.state = 189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 190;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 192;
				this.match(XonParser.OpenParen);
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 193;
					(_localctx as FunctionTypeContext)._type = this.type(0);
					(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
					this.state = 198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 194;
						this.match(XonParser.Comma);
						this.state = 195;
						(_localctx as FunctionTypeContext)._type = this.type(0);
						(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
						}
						}
						this.state = 200;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 203;
				this.match(XonParser.CloseParen);
				this.state = 204;
				(_localctx as FunctionTypeContext)._returnType = this.type(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 212;
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
					this.state = 207;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 208;
					this.match(XonParser.OpenBracket);
					this.state = 209;
					this.match(XonParser.CloseBracket);
					}
					}
				}
				this.state = 214;
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
		this.enterRule(_localctx, 22, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			_localctx._name = this.match(XonParser.ID);
			this.state = 216;
			this.match(XonParser.OpenParen);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 217;
				this.argument();
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 218;
					this.match(XonParser.Comma);
					this.state = 219;
					this.argument();
					}
					}
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 227;
			this.match(XonParser.CloseParen);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 228;
				this.type(0);
				}
			}

			this.state = 231;
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
		this.enterRule(_localctx, 24, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			_localctx._name = this.match(XonParser.ID);
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 234;
				this.type(0);
				}
				break;

			case 2:
				{
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 235;
					this.type(0);
					}
				}

				this.state = 238;
				this.match(XonParser.Assign);
				this.state = 239;
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
		this.enterRule(_localctx, 26, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(XonParser.Colon);
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 244;
				this.match(XonParser.LineBreak);
				this.state = 245;
				this.match(XonParser.INDENT);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 246;
					this.statement();
					}
					}
					this.state = 249;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad) | (1 << XonParser.Comma))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.NumberLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0));
				this.state = 251;
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
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				_localctx = new IfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 256;
				this.match(XonParser.If);
				this.state = 257;
				this.expression(0);
				this.state = 258;
				this.body();
				this.state = 265;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 259;
					this.match(XonParser.Else);
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 260;
						this.match(XonParser.If);
						this.state = 261;
						this.expression(0);
						}
					}

					this.state = 264;
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
				this.state = 267;
				this.match(XonParser.Loop);
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.NumberLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
					{
					this.state = 280;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						this.state = 268;
						(_localctx as LoopExpressionContext)._value = this.match(XonParser.ID);
						this.state = 273;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
						case 1:
							{
							this.state = 269;
							this.match(XonParser.Comma);
							this.state = 271;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 270;
								(_localctx as LoopExpressionContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 277;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 275;
							this.match(XonParser.Comma);
							this.state = 276;
							(_localctx as LoopExpressionContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 279;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 282;
					this.expression(0);
					}
				}

				this.state = 285;
				this.body();
				}
				break;

			case 3:
				{
				_localctx = new SelectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 286;
				this.match(XonParser.Select);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.NumberLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
					{
					this.state = 287;
					(_localctx as SelectExpressionContext)._value = this.expression(0);
					this.state = 290;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.As) {
						{
						this.state = 288;
						this.match(XonParser.As);
						this.state = 289;
						this.match(XonParser.ID);
						}
					}

					}
				}

				this.state = 294;
				this.match(XonParser.Colon);
				this.state = 295;
				this.match(XonParser.LineBreak);
				this.state = 296;
				this.match(XonParser.INDENT);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 297;
					(_localctx as SelectExpressionContext)._expression = this.expression(0);
					(_localctx as SelectExpressionContext)._cases.push((_localctx as SelectExpressionContext)._expression);
					this.state = 298;
					this.body();
					this.state = 300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.LineBreak) {
						{
						this.state = 299;
						this.match(XonParser.LineBreak);
						}
					}

					}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.NumberLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0));
				this.state = 306;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 308;
				this.match(XonParser.Dot);
				this.state = 309;
				this.match(XonParser.ID);
				}
				break;

			case 5:
				{
				_localctx = new AsyncExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 310;
				this.match(XonParser.Ad);
				this.state = 311;
				this.expression(25);
				}
				break;

			case 6:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 312;
				this.match(XonParser.Plus);
				this.state = 313;
				this.expression(23);
				}
				break;

			case 7:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.match(XonParser.Minus);
				this.state = 315;
				this.expression(22);
				}
				break;

			case 8:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 316;
				this.match(XonParser.BitNot);
				this.state = 317;
				this.expression(21);
				}
				break;

			case 9:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 318;
				this.match(XonParser.Not);
				this.state = 319;
				this.expression(20);
				}
				break;

			case 10:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 320;
				this.match(XonParser.ID);
				}
				break;

			case 11:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 321;
				this.literal();
				}
				break;

			case 12:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 322;
				this.match(XonParser.StringFormatStart);
				this.state = 328;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 323;
						this.expression(0);
						this.state = 324;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 330;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 331;
				this.expression(0);
				this.state = 332;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 13:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 334;
				this.match(XonParser.OpenBracket);
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.NumberLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0)) {
					{
					this.state = 335;
					this.arrayItem();
					this.state = 340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 336;
						this.match(XonParser.Comma);
						this.state = 337;
						this.arrayItem();
						}
						}
						this.state = 342;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 345;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 14:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 346;
				this.match(XonParser.OpenBracket);
				this.state = 347;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 348;
				this.match(XonParser.Colon);
				this.state = 349;
				(_localctx as RangeExpressionContext)._endPos = this.expression(0);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 350;
					this.match(XonParser.Colon);
					this.state = 351;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 354;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 15:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 356;
				this.match(XonParser.OpenBrace);
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.Spread - 67)) | (1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.NumberLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)) | (1 << (XonParser.StringFormatStart - 67)) | (1 << (XonParser.ID - 67)))) !== 0)) {
					{
					this.state = 363;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						this.state = 357;
						this.match(XonParser.Dot);
						this.state = 358;
						this.match(XonParser.ID);
						}
						break;

					case 2:
						{
						this.state = 360;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Spread) {
							{
							this.state = 359;
							this.match(XonParser.Spread);
							}
						}

						this.state = 362;
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
						}
						break;
					}
					this.state = 365;
					this.match(XonParser.Assign);
					this.state = 366;
					(_localctx as ObjectExpressionContext)._expression = this.expression(0);
					(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
					this.state = 380;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 367;
						this.match(XonParser.Comma);
						this.state = 374;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
						case 1:
							{
							this.state = 368;
							this.match(XonParser.Dot);
							this.state = 369;
							this.match(XonParser.ID);
							}
							break;

						case 2:
							{
							this.state = 371;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.Spread) {
								{
								this.state = 370;
								this.match(XonParser.Spread);
								}
							}

							this.state = 373;
							(_localctx as ObjectExpressionContext)._expression = this.expression(0);
							(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
							}
							break;
						}
						this.state = 376;
						this.match(XonParser.Assign);
						this.state = 377;
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
						}
						}
						this.state = 382;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 385;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 16:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 386;
				this.match(XonParser.OpenParen);
				this.state = 387;
				this.expression(0);
				this.state = 388;
				this.match(XonParser.CloseParen);
				}
				break;

			case 17:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 390;
				this.match(XonParser.LambdaStart);
				this.state = 400;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 391;
					this.match(XonParser.ID);
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 392;
						this.match(XonParser.Comma);
						this.state = 393;
						this.match(XonParser.ID);
						}
						}
						this.state = 398;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 399;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 402;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 484;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 482;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 405;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 406;
						this.match(XonParser.Pow);
						this.state = 407;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 408;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 409;
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
						this.state = 410;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 411;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 412;
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
						this.state = 413;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 414;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 415;
						(_localctx as BitShiftExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.RightShiftArithmetic || _la === XonParser.LeftShiftArithmetic)) {
							(_localctx as BitShiftExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 416;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 417;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 418;
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
						this.state = 419;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 420;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 421;
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
						this.state = 422;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 423;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 424;
						this.match(XonParser.BitAnd);
						this.state = 425;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 426;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 427;
						this.match(XonParser.BitXor);
						this.state = 428;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 429;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 430;
						this.match(XonParser.BitOr);
						this.state = 431;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 432;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 433;
						this.match(XonParser.And);
						this.state = 434;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 435;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 436;
						this.match(XonParser.Or);
						this.state = 437;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 438;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 439;
						this.match(XonParser.Pipe);
						this.state = 442;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
						case 1:
							{
							this.state = 440;
							this.match(XonParser.ID);
							this.state = 441;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 444;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 445;
						if (!(this.precpred(this._ctx, 30))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 30)");
						}
						this.state = 446;
						this.match(XonParser.OpenParen);
						this.state = 455;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.NumberLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
							{
							this.state = 447;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 452;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 448;
								this.match(XonParser.Comma);
								this.state = 449;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 454;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 457;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 458;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 459;
						this.match(XonParser.OpenBracket);
						this.state = 460;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 461;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 463;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 464;
						this.match(XonParser.OpenBracket);
						this.state = 465;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 466;
						this.match(XonParser.Colon);
						this.state = 468;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Plus - 33)) | (1 << (XonParser.Minus - 33)) | (1 << (XonParser.BitNot - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.NullLiteral - 68)) | (1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.NumberLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
							{
							this.state = 467;
							(_localctx as SliceExpressionContext)._endPos = this.expression(0);
							}
						}

						this.state = 472;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 470;
							this.match(XonParser.Colon);
							this.state = 471;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 474;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 476;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 478;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 477;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 480;
						this.match(XonParser.Dot);
						this.state = 481;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 486;
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
		this.enterRule(_localctx, 30, XonParser.RULE_arrayItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Spread) {
				{
				this.state = 487;
				this.match(XonParser.Spread);
				}
			}

			this.state = 490;
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
		this.enterRule(_localctx, 32, XonParser.RULE_literal);
		try {
			this.state = 496;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 492;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 493;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.NumberLiteral:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 494;
				this.match(XonParser.NumberLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 495;
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
		case 10:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 14:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u01F5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x07\x02&\n\x02\f\x02\x0E\x02)\v\x02\x03\x02\x03\x02\x07\x02-\n\x02" +
		"\f\x02\x0E\x020\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x07\x03:\n\x03\f\x03\x0E\x03=\v\x03\x05\x03?\n\x03\x03" +
		"\x03\x05\x03B\n\x03\x03\x04\x03\x04\x03\x04\x05\x04G\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x06\x05N\n\x05\r\x05\x0E\x05O\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06W\n\x06\x03\x06\x03\x06\x05\x06[\n" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06`\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x06\x07f\n\x07\r\x07\x0E\x07g\x03\x07\x03\x07\x03\x07\x07\x07m\n" +
		"\x07\f\x07\x0E\x07p\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07x\n\x07\x03\x07\x03\x07\x05\x07|\n\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\x82\n\b\x03\b\x03\b\x05\b\x86\n\b\x05\b\x88\n\b\x03\t\x03\t\x03" +
		"\t\x05\t\x8D\n\t\x07\t\x8F\n\t\f\t\x0E\t\x92\v\t\x03\t\x03\t\x05\t\x96" +
		"\n\t\x06\t\x98\n\t\r\t\x0E\t\x99\x05\t\x9C\n\t\x03\n\x03\n\x05\n\xA0\n" +
		"\n\x03\n\x03\n\x03\n\x05\n\xA5\n\n\x07\n\xA7\n\n\f\n\x0E\n\xAA\v\n\x03" +
		"\v\x03\v\x05\v\xAE\n\v\x06\v\xB0\n\v\r\v\x0E\v\xB1\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x07\f\xBC\n\f\f\f\x0E\f\xBF\v\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\xC7\n\f\f\f\x0E\f\xCA\v\f\x05\f\xCC\n\f" +
		"\x03\f\x03\f\x05\f\xD0\n\f\x03\f\x03\f\x03\f\x07\f\xD5\n\f\f\f\x0E\f\xD8" +
		"\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xDF\n\r\f\r\x0E\r\xE2\v\r\x05" +
		"\r\xE4\n\r\x03\r\x03\r\x05\r\xE8\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\xEF\n\x0E\x03\x0E\x03\x0E\x05\x0E\xF3\n\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x06\x0F\xFA\n\x0F\r\x0F\x0E\x0F\xFB\x03\x0F\x03\x0F" +
		"\x05\x0F\u0100\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\u0109\n\x10\x03\x10\x05\x10\u010C\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u0112\n\x10\x05\x10\u0114\n\x10\x03\x10\x03\x10\x05" +
		"\x10\u0118\n\x10\x03\x10\x05\x10\u011B\n\x10\x03\x10\x05\x10\u011E\n\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0125\n\x10\x05\x10\u0127" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u012F\n" +
		"\x10\x06\x10\u0131\n\x10\r\x10\x0E\x10\u0132\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0149" +
		"\n\x10\f\x10\x0E\x10\u014C\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x07\x10\u0155\n\x10\f\x10\x0E\x10\u0158\v\x10\x05\x10" +
		"\u015A\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u0163\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u016B\n\x10\x03\x10\x05\x10\u016E\n\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u0176\n\x10\x03\x10\x05\x10\u0179\n\x10\x03\x10" +
		"\x03\x10\x07\x10\u017D\n\x10\f\x10\x0E\x10\u0180\v\x10\x05\x10\u0182\n" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x07\x10\u018D\n\x10\f\x10\x0E\x10\u0190\v\x10\x03\x10\x05\x10\u0193" +
		"\n\x10\x03\x10\x05\x10\u0196\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01BD\n\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u01C5\n\x10\f\x10\x0E" +
		"\x10\u01C8\v\x10\x05\x10\u01CA\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01D7\n\x10" +
		"\x03\x10\x03\x10\x05\x10\u01DB\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u01E1\n\x10\x03\x10\x03\x10\x07\x10\u01E5\n\x10\f\x10\x0E\x10\u01E8" +
		"\v\x10\x03\x11\x05\x11\u01EB\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u01F3\n\x12\x03\x12\x02\x02\x04\x16\x1E\x13\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x07\x03\x02(*\x03" +
		"\x02$%\x03\x02\x14\x15\x03\x02-0\x03\x0212\x02\u0257\x02\'\x03\x02\x02" +
		"\x02\x04A\x03\x02\x02\x02\x06C\x03\x02\x02\x02\bH\x03\x02\x02\x02\n_\x03" +
		"\x02\x02\x02\f{\x03\x02\x02\x02\x0E\x87\x03\x02\x02\x02\x10\x9B\x03\x02" +
		"\x02\x02\x12\x9D\x03\x02\x02\x02\x14\xAF\x03\x02\x02\x02\x16\xCF\x03\x02" +
		"\x02\x02\x18\xD9\x03\x02\x02\x02\x1A\xEB\x03\x02\x02\x02\x1C\xF4\x03\x02" +
		"\x02\x02\x1E\u0195\x03\x02\x02\x02 \u01EA\x03\x02\x02\x02\"\u01F2\x03" +
		"\x02\x02\x02$&\x05\x04\x03\x02%$\x03\x02\x02\x02&)\x03\x02\x02\x02\'%" +
		"\x03\x02\x02\x02\'(\x03\x02\x02\x02(.\x03\x02\x02\x02)\'\x03\x02\x02\x02" +
		"*-\x05\f\x07\x02+-\x05\b\x05\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-" +
		"0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\x03\x03\x02\x02" +
		"\x020.\x03\x02\x02\x0212\x07I\x02\x022>\x07!\x02\x0234\x07(\x02\x0245" +
		"\x07\x05\x02\x025?\x07M\x02\x026;\x05\x06\x04\x0278\x07\x1E\x02\x028:" +
		"\x05\x06\x04\x0297\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02" +
		";<\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02>3\x03\x02\x02\x02" +
		">6\x03\x02\x02\x02?B\x03\x02\x02\x02@B\x07\x10\x02\x02A1\x03\x02\x02\x02" +
		"A@\x03\x02\x02\x02B\x05\x03\x02\x02\x02CF\x07M\x02\x02DE\x07\x05\x02\x02" +
		"EG\x07M\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02G\x07\x03\x02\x02\x02" +
		"HI\x07M\x02\x02IJ\x07!\x02\x02JK\x07\x10\x02\x02KM\x07\x03\x02\x02LN\x05" +
		"\n\x06\x02ML\x03\x02\x02\x02NO\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03" +
		"\x02\x02\x02PQ\x03\x02\x02\x02QR\x07\x04\x02\x02R\t\x03\x02\x02\x02SZ" +
		"\x07M\x02\x02T[\x05\x16\f\x02UW\x05\x16\f\x02VU\x03\x02\x02\x02VW\x03" +
		"\x02\x02\x02WX\x03\x02\x02\x02XY\x07\x1F\x02\x02Y[\x05\x1E\x10\x02ZT\x03" +
		"\x02\x02\x02ZV\x03\x02\x02\x02[`\x03\x02\x02\x02\\`\x05\x18\r\x02]`\x07" +
		"\n\x02\x02^`\x07\x10\x02\x02_S\x03\x02\x02\x02_\\\x03\x02\x02\x02_]\x03" +
		"\x02\x02\x02_^\x03\x02\x02\x02`\v\x03\x02\x02\x02a|\x07\x0F\x02\x02bc" +
		"\x05\x0E\b\x02cd\x07\x1F\x02\x02df\x03\x02\x02\x02eb\x03\x02\x02\x02f" +
		"g\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02" +
		"in\x05\x1E\x10\x02jk\x07\x1E\x02\x02km\x05\x1E\x10\x02lj\x03\x02\x02\x02" +
		"mp\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o|\x03\x02\x02\x02" +
		"pn\x03\x02\x02\x02q|\x05\x18\r\x02r|\x07\n\x02\x02s|\x07\v\x02\x02t|\x07" +
		"\f\x02\x02uw\x07\r\x02\x02vx\x05\x1E\x10\x02wv\x03\x02\x02\x02wx\x03\x02" +
		"\x02\x02x|\x03\x02\x02\x02y|\x05\x1E\x10\x02z|\x07\x10\x02\x02{a\x03\x02" +
		"\x02\x02{e\x03\x02\x02\x02{q\x03\x02\x02\x02{r\x03\x02\x02\x02{s\x03\x02" +
		"\x02\x02{t\x03\x02\x02\x02{u\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02" +
		"\x02\x02|\r\x03\x02\x02\x02}\x88\x05\x10\t\x02~\x7F\x05\x10\t\x02\x7F" +
		"\x81\x05\x12\n\x02\x80\x82\x05\x14\v\x02\x81\x80\x03\x02\x02\x02\x81\x82" +
		"\x03\x02\x02\x02\x82\x88\x03\x02\x02\x02\x83\x85\x05\x12\n\x02\x84\x86" +
		"\x05\x14\v\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88" +
		"\x03\x02\x02\x02\x87}\x03\x02\x02\x02\x87~\x03\x02\x02\x02\x87\x83\x03" +
		"\x02\x02\x02\x88\x0F\x03\x02\x02\x02\x89\x90\x07M\x02\x02\x8A\x8C\x07" +
		"\x1E\x02\x02\x8B\x8D\x07M\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03" +
		"\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E\x8A\x03\x02\x02\x02\x8F\x92\x03" +
		"\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x9C\x03" +
		"\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x95\x07\x1E\x02\x02\x94\x96\x07" +
		"M\x02\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x03" +
		"\x02\x02\x02\x97\x93\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03" +
		"\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x89\x03" +
		"\x02\x02\x02\x9B\x97\x03\x02\x02\x02\x9C\x11\x03\x02\x02\x02\x9D\x9F\x07" +
		"E\x02\x02\x9E\xA0\x07M\x02\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02" +
		"\x02\x02\xA0\xA8\x03\x02\x02\x02\xA1\xA2\x07\x1E\x02\x02\xA2\xA4\x07E" +
		"\x02\x02\xA3\xA5\x07M\x02\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02" +
		"\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA1\x03\x02\x02\x02\xA7\xAA\x03\x02" +
		"\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\x13\x03\x02" +
		"\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAD\x07\x1E\x02\x02\xAC\xAE\x07M" +
		"\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02" +
		"\x02\x02\xAF\xAB\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xAF\x03\x02" +
		"\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\x15\x03\x02\x02\x02\xB3\xB4\b\f\x01" +
		"\x02\xB4\xD0\x07M\x02\x02\xB5\xB6\x07\x1B\x02\x02\xB6\xB7\x07M\x02\x02" +
		"\xB7\xBD\x05\x16\f\x02\xB8\xB9\x07\x1E\x02\x02\xB9\xBA\x07M\x02\x02\xBA" +
		"\xBC\x05\x16\f\x02\xBB\xB8\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD" +
		"\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF" +
		"\xBD\x03\x02\x02\x02\xC0\xC1\x07\x1C\x02\x02\xC1\xD0\x03\x02\x02\x02\xC2" +
		"\xCB\x07\x19\x02\x02\xC3\xC8\x05\x16\f\x02\xC4\xC5\x07\x1E\x02\x02\xC5" +
		"\xC7\x05\x16\f\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA" +
		"\xC8\x03\x02\x02\x02\xCB\xC3\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC" +
		"\xCD\x03\x02\x02\x02\xCD\xCE\x07\x1A\x02\x02\xCE\xD0\x05\x16\f\x03\xCF" +
		"\xB3\x03\x02\x02\x02\xCF\xB5\x03\x02\x02\x02\xCF\xC2\x03\x02\x02\x02\xD0" +
		"\xD6\x03\x02\x02\x02\xD1\xD2\f\x05\x02\x02\xD2\xD3\x07\x17\x02\x02\xD3" +
		"\xD5\x07\x18\x02\x02\xD4\xD1\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6" +
		"\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\x17\x03\x02\x02\x02\xD8" +
		"\xD6\x03\x02\x02\x02\xD9\xDA\x07M\x02\x02\xDA\xE3\x07\x19\x02\x02\xDB" +
		"\xE0\x05\x1A\x0E\x02\xDC\xDD\x07\x1E\x02\x02\xDD\xDF\x05\x1A\x0E\x02\xDE" +
		"\xDC\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3" +
		"\xDB\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\xE7\x07\x1A\x02\x02\xE6\xE8\x05\x16\f\x02\xE7\xE6\x03\x02\x02\x02\xE7" +
		"\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x05\x1C\x0F\x02\xEA" +
		"\x19\x03\x02\x02\x02\xEB\xF2\x07M\x02\x02\xEC\xF3\x05\x16\f\x02\xED\xEF" +
		"\x05\x16\f\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0" +
		"\x03\x02\x02\x02\xF0\xF1\x07\x1F\x02\x02\xF1\xF3\x05\x1E\x10\x02\xF2\xEC" +
		"\x03\x02\x02\x02\xF2\xEE\x03\x02\x02\x02\xF3\x1B\x03\x02\x02\x02\xF4\xFF" +
		"\x07!\x02\x02\xF5\u0100\x05\f\x07\x02\xF6\xF7\x07\x10\x02\x02\xF7\xF9" +
		"\x07\x03\x02\x02\xF8\xFA\x05\f\x07\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFB" +
		"\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD" +
		"\x03\x02\x02\x02\xFD\xFE\x07\x04\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF" +
		"\xF5\x03\x02\x02\x02\xFF\xF6\x03\x02\x02\x02\u0100\x1D\x03\x02\x02\x02" +
		"\u0101\u0102\b\x10\x01\x02\u0102\u0103\x07\x06\x02\x02\u0103\u0104\x05" +
		"\x1E\x10\x02\u0104\u010B\x05\x1C\x0F\x02\u0105\u0108\x07\x07\x02\x02\u0106" +
		"\u0107\x07\x06\x02\x02\u0107\u0109\x05\x1E\x10\x02\u0108\u0106\x03\x02" +
		"\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
		"\u010C\x05\x1C\x0F\x02\u010B\u0105\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\u0196\x03\x02\x02\x02\u010D\u011D\x07\b\x02\x02\u010E\u0113" +
		"\x07M\x02\x02\u010F\u0111\x07\x1E\x02\x02\u0110\u0112\x07M\x02\x02\u0111" +
		"\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02" +
		"\x02\x02\u0113\u010F\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0117\x03\x02\x02\x02\u0115\u0116\x07\x1E\x02\x02\u0116\u0118\x07M\x02" +
		"\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119" +
		"\x03\x02\x02\x02\u0119\u011B\x07\t\x02\x02\u011A\u010E\x03\x02\x02\x02" +
		"\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011E\x05" +
		"\x1E\x10\x02\u011D\u011A\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
		"\u011F\x03\x02\x02\x02\u011F\u0196\x05\x1C\x0F\x02\u0120\u0126\x07\x0E" +
		"\x02\x02\u0121\u0124\x05\x1E\x10\x02\u0122\u0123\x07\x05\x02\x02\u0123" +
		"\u0125\x07M\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02" +
		"\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0121\x03\x02\x02\x02\u0126\u0127" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x07!\x02\x02" +
		"\u0129\u012A\x07\x10\x02\x02\u012A\u0130\x07\x03\x02\x02\u012B\u012C\x05" +
		"\x1E\x10\x02\u012C\u012E\x05\x1C\x0F\x02\u012D\u012F\x07\x10\x02\x02\u012E" +
		"\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02" +
		"\x02\x02\u0130\u012B\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134\u0135\x07\x04\x02\x02\u0135\u0196\x03\x02\x02\x02\u0136" +
		"\u0137\x07#\x02\x02\u0137\u0196\x07M\x02\x02\u0138\u0139\x07\x1D\x02\x02" +
		"\u0139\u0196\x05\x1E\x10\x1B\u013A\u013B\x07$\x02\x02\u013B\u0196\x05" +
		"\x1E\x10\x19\u013C\u013D\x07%\x02\x02\u013D\u0196\x05\x1E\x10\x18\u013E" +
		"\u013F\x07&\x02\x02\u013F\u0196\x05\x1E\x10\x17\u0140\u0141\x07\'\x02" +
		"\x02\u0141\u0196\x05\x1E\x10\x16\u0142\u0196\x07M\x02\x02\u0143\u0196" +
		"\x05\"\x12\x02\u0144\u014A\x07J\x02\x02\u0145\u0146\x05\x1E\x10\x02\u0146" +
		"\u0147\x07K\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0145\x03\x02\x02" +
		"\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B" +
		"\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02" +
		"\u014D\u014E\x05\x1E\x10\x02\u014E\u014F\x07L\x02\x02\u014F\u0196\x03" +
		"\x02\x02\x02\u0150\u0159\x07\x17\x02\x02\u0151\u0156\x05 \x11\x02\u0152" +
		"\u0153\x07\x1E\x02\x02\u0153\u0155\x05 \x11\x02\u0154\u0152\x03\x02\x02" +
		"\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157" +
		"\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02" +
		"\u0159\u0151\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03" +
		"\x02\x02\x02\u015B\u0196\x07\x18\x02\x02\u015C\u015D\x07\x17\x02\x02\u015D" +
		"\u015E\x05\x1E\x10\x02\u015E\u015F\x07!\x02\x02\u015F\u0162\x05\x1E\x10" +
		"\x02\u0160\u0161\x07!\x02\x02\u0161\u0163\x05\x1E\x10\x02\u0162\u0160" +
		"\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02" +
		"\u0164\u0165\x07\x18\x02\x02\u0165\u0196\x03\x02\x02\x02\u0166\u0181\x07" +
		"\x1B\x02\x02\u0167\u0168\x07#\x02\x02\u0168\u016E\x07M\x02\x02\u0169\u016B" +
		"\x07E\x02\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02" +
		"\u016B\u016C\x03\x02\x02\x02\u016C\u016E\x05\x1E\x10\x02\u016D\u0167\x03" +
		"\x02\x02\x02\u016D\u016A\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F" +
		"\u0170\x07\x1F\x02\x02\u0170\u017E\x05\x1E\x10\x02\u0171\u0178\x07\x1E" +
		"\x02\x02\u0172\u0173\x07#\x02\x02\u0173\u0179\x07M\x02\x02\u0174\u0176" +
		"\x07E\x02\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x05\x1E\x10\x02\u0178\u0172\x03" +
		"\x02\x02\x02\u0178\u0175\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
		"\u017B\x07\x1F\x02\x02\u017B\u017D\x05\x1E\x10\x02\u017C\u0171\x03\x02" +
		"\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02" +
		"\x02\x02\u0181\u016D\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182" +
		"\u0183\x03\x02\x02\x02\u0183\u0196\x07\x1C\x02\x02\u0184\u0185\x07\x19" +
		"\x02\x02\u0185\u0186\x05\x1E\x10\x02\u0186\u0187\x07\x1A\x02\x02\u0187" +
		"\u0196\x03\x02\x02\x02\u0188\u0192\x07@\x02\x02\u0189\u018E\x07M\x02\x02" +
		"\u018A\u018B\x07\x1E\x02\x02\u018B\u018D\x07M\x02\x02\u018C\u018A\x03" +
		"\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E" +
		"\u018F\x03\x02\x02\x02\u018F\u0191\x03\x02\x02\x02\u0190\u018E\x03\x02" +
		"\x02\x02\u0191\u0193\x07!\x02\x02\u0192\u0189\x03\x02\x02\x02\u0192\u0193" +
		"\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x05\x1E\x10\x03" +
		"\u0195\u0101\x03\x02\x02\x02\u0195\u010D\x03\x02\x02\x02\u0195\u0120\x03" +
		"\x02\x02\x02\u0195\u0136\x03\x02\x02\x02\u0195\u0138\x03\x02\x02\x02\u0195" +
		"\u013A\x03\x02\x02\x02\u0195\u013C\x03\x02\x02\x02\u0195\u013E\x03\x02" +
		"\x02\x02\u0195\u0140\x03\x02\x02\x02\u0195\u0142\x03\x02\x02\x02\u0195" +
		"\u0143\x03\x02\x02\x02\u0195\u0144\x03\x02\x02\x02\u0195\u0150\x03\x02" +
		"\x02\x02\u0195\u015C\x03\x02\x02\x02\u0195\u0166\x03\x02\x02\x02\u0195" +
		"\u0184\x03\x02\x02\x02\u0195\u0188\x03\x02\x02\x02\u0196\u01E6\x03\x02" +
		"\x02\x02\u0197\u0198\f\x1A\x02\x02\u0198\u0199\x07+\x02\x02\u0199\u01E5" +
		"\x05\x1E\x10\x1B\u019A\u019B\f\x15\x02\x02\u019B\u019C\t\x02\x02\x02\u019C" +
		"\u01E5\x05\x1E\x10\x16\u019D\u019E\f\x14\x02\x02\u019E\u019F\t\x03\x02" +
		"\x02\u019F\u01E5\x05\x1E\x10\x15\u01A0\u01A1\f\x13\x02\x02\u01A1\u01A2" +
		"\t\x04\x02\x02\u01A2\u01E5\x05\x1E\x10\x14\u01A3\u01A4\f\x12\x02\x02\u01A4" +
		"\u01A5\t\x05\x02\x02\u01A5\u01E5\x05\x1E\x10\x13\u01A6\u01A7\f\x11\x02" +
		"\x02\u01A7\u01A8\t\x06\x02\x02\u01A8\u01E5\x05\x1E\x10\x12\u01A9\u01AA" +
		"\f\x10\x02\x02\u01AA\u01AB\x07\x11\x02\x02\u01AB\u01E5\x05\x1E\x10\x11" +
		"\u01AC\u01AD\f\x0F\x02\x02\u01AD\u01AE\x07\x13\x02\x02\u01AE\u01E5\x05" +
		"\x1E\x10\x10\u01AF\u01B0\f\x0E\x02\x02\u01B0\u01B1\x07\x12\x02\x02\u01B1" +
		"\u01E5\x05\x1E\x10\x0F\u01B2\u01B3\f\r\x02\x02\u01B3\u01B4\x073\x02\x02" +
		"\u01B4\u01E5\x05\x1E\x10\x0E\u01B5\u01B6\f\f\x02\x02\u01B6\u01B7\x074" +
		"\x02\x02\u01B7\u01E5\x05\x1E\x10\r\u01B8\u01B9\f\x04\x02\x02\u01B9\u01BC" +
		"\x07A\x02\x02\u01BA\u01BB\x07M\x02\x02\u01BB\u01BD\x07!\x02\x02\u01BC" +
		"\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
		"\x02\x02\u01BE\u01E5\x05\x1E\x10\x05\u01BF\u01C0\f \x02\x02\u01C0\u01C9" +
		"\x07\x19\x02\x02\u01C1\u01C6\x05\x1E\x10\x02\u01C2\u01C3\x07\x1E\x02\x02" +
		"\u01C3\u01C5\x05\x1E\x10\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C8\x03" +
		"\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7" +
		"\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01C1\x03\x02" +
		"\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"\u01E5\x07\x1A\x02\x02\u01CC\u01CD\f\x1F\x02\x02\u01CD\u01CE\x07\x17\x02" +
		"\x02\u01CE\u01CF\x05\x1E\x10\x02\u01CF\u01D0\x07\x18\x02\x02\u01D0\u01E5" +
		"\x03\x02\x02\x02\u01D1\u01D2\f\x1E\x02\x02\u01D2\u01D3\x07\x17\x02\x02" +
		"\u01D3\u01D4\x05\x1E\x10\x02\u01D4\u01D6\x07!\x02\x02\u01D5\u01D7\x05" +
		"\x1E\x10\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7" +
		"\u01DA\x03\x02\x02\x02\u01D8\u01D9\x07!\x02\x02\u01D9\u01DB\x05\x1E\x10" +
		"\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC" +
		"\x03\x02\x02\x02\u01DC\u01DD\x07\x18\x02\x02\u01DD\u01E5\x03\x02\x02\x02" +
		"\u01DE\u01E0\f\x1D\x02\x02\u01DF\u01E1\x07 \x02\x02\u01E0\u01DF\x03\x02" +
		"\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2" +
		"\u01E3\x07#\x02\x02\u01E3\u01E5\x07M\x02\x02\u01E4\u0197\x03\x02\x02\x02" +
		"\u01E4\u019A\x03\x02\x02\x02\u01E4\u019D\x03\x02\x02\x02\u01E4\u01A0\x03" +
		"\x02\x02\x02\u01E4\u01A3\x03\x02\x02\x02\u01E4\u01A6\x03\x02\x02\x02\u01E4" +
		"\u01A9\x03\x02\x02\x02\u01E4\u01AC\x03\x02\x02\x02\u01E4\u01AF\x03\x02" +
		"\x02\x02\u01E4\u01B2\x03\x02\x02\x02\u01E4\u01B5\x03\x02\x02\x02\u01E4" +
		"\u01B8\x03\x02\x02\x02\u01E4\u01BF\x03\x02\x02\x02\u01E4\u01CC\x03\x02" +
		"\x02\x02\u01E4\u01D1\x03\x02\x02\x02\u01E4\u01DE\x03\x02\x02\x02\u01E5" +
		"\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02" +
		"\x02\x02\u01E7\x1F\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EB" +
		"\x07E\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02" +
		"\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x05\x1E\x10\x02\u01ED!\x03\x02" +
		"\x02\x02\u01EE\u01F3\x07F\x02\x02\u01EF\u01F3\x07G\x02\x02\u01F0\u01F3" +
		"\x07H\x02\x02\u01F1\u01F3\x07I\x02\x02\u01F2\u01EE\x03\x02\x02\x02\u01F2" +
		"\u01EF\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F1\x03\x02" +
		"\x02\x02\u01F3#\x03\x02\x02\x02L\',.;>AFOVZ_gnw{\x81\x85\x87\x8C\x90\x95" +
		"\x99\x9B\x9F\xA4\xA8\xAD\xB1\xBD\xC8\xCB\xCF\xD6\xE0\xE3\xE7\xEE\xF2\xFB" +
		"\xFF\u0108\u010B\u0111\u0113\u0117\u011A\u011D\u0124\u0126\u012E\u0132" +
		"\u014A\u0156\u0159\u0162\u016A\u016D\u0175\u0178\u017E\u0181\u018E\u0192" +
		"\u0195\u01BC\u01C6\u01C9\u01D6\u01DA\u01E0\u01E4\u01E6\u01EA\u01F2";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public imports(): ImportsContext[];
	public imports(i: number): ImportsContext;
	public imports(i?: number): ImportsContext | ImportsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportsContext);
		} else {
			return this.getRuleContext(i, ImportsContext);
		}
	}
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
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(XonParser.StringLiteral, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
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
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_imports; }
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
export class NumberLiteralContext extends LiteralContext {
	public NumberLiteral(): TerminalNode { return this.getToken(XonParser.NumberLiteral, 0); }
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


