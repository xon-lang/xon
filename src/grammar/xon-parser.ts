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
	public static readonly MultiLineComment = 1;
	public static readonly SingleLineComment = 2;
	public static readonly If = 3;
	public static readonly Loop = 4;
	public static readonly In = 5;
	public static readonly BitAnd = 6;
	public static readonly BitOr = 7;
	public static readonly BitXor = 8;
	public static readonly RightShiftArithmetic = 9;
	public static readonly LeftShiftArithmetic = 10;
	public static readonly RightShiftLogical = 11;
	public static readonly OpenBracket = 12;
	public static readonly CloseBracket = 13;
	public static readonly OpenParen = 14;
	public static readonly CloseParen = 15;
	public static readonly OpenBrace = 16;
	public static readonly CloseBrace = 17;
	public static readonly SemiColon = 18;
	public static readonly Comma = 19;
	public static readonly Assign = 20;
	public static readonly QuestionMark = 21;
	public static readonly Colon = 22;
	public static readonly Ellipsis = 23;
	public static readonly Dot = 24;
	public static readonly Plus = 25;
	public static readonly Minus = 26;
	public static readonly BitNot = 27;
	public static readonly Not = 28;
	public static readonly Multiply = 29;
	public static readonly Divide = 30;
	public static readonly Modulus = 31;
	public static readonly Pow = 32;
	public static readonly Sharp = 33;
	public static readonly LessThan = 34;
	public static readonly MoreThan = 35;
	public static readonly LessThanEquals = 36;
	public static readonly MoreThanEquals = 37;
	public static readonly Equals = 38;
	public static readonly NotEquals = 39;
	public static readonly And = 40;
	public static readonly Or = 41;
	public static readonly MultiplyAssign = 42;
	public static readonly DivideAssign = 43;
	public static readonly ModulusAssign = 44;
	public static readonly PlusAssign = 45;
	public static readonly MinusAssign = 46;
	public static readonly LeftShiftArithmeticAssign = 47;
	public static readonly RightShiftArithmeticAssign = 48;
	public static readonly RightShiftLogicalAssign = 49;
	public static readonly BitAndAssign = 50;
	public static readonly BitXorAssign = 51;
	public static readonly BitOrAssign = 52;
	public static readonly LambdaStart = 53;
	public static readonly Pipe = 54;
	public static readonly BooleanLiteral = 55;
	public static readonly DecimalLiteral = 56;
	public static readonly FloatLiteral = 57;
	public static readonly StringLiteral = 58;
	public static readonly CharacterLiteral = 59;
	public static readonly Preprocessor = 60;
	public static readonly LambdaParam = 61;
	public static readonly ID = 62;
	public static readonly WhiteSpaces = 63;
	public static readonly UnexpectedCharacter = 64;
	public static readonly RULE_program = 0;
	public static readonly RULE_scope = 1;
	public static readonly RULE_scopeArgument = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_literal = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "scope", "scopeArgument", "statement", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'if'", "'loop'", "'in'", "'and'", "'or'", 
		"'xor'", "'>>'", "'<<'", "'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"';'", "','", "'='", "'?'", "':'", "'...'", "'.'", "'+'", "'-'", "'~'", 
		"'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", 
		"'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", 
		"'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'\\'", "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "If", "Loop", "In", 
		"BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
		"Colon", "Ellipsis", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", 
		"Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", 
		"MoreThanEquals", "Equals", "NotEquals", "And", "Or", "MultiplyAssign", 
		"DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "BooleanLiteral", 
		"DecimalLiteral", "FloatLiteral", "StringLiteral", "CharacterLiteral", 
		"Preprocessor", "LambdaParam", "ID", "WhiteSpaces", "UnexpectedCharacter",
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
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
				{
				this.state = 14;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 12;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 13;
					this.scope();
					}
					break;
				}
				}
				this.state = 18;
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
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_scope);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this.match(XonParser.ID);
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 20;
				this.scopeArgument();
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 21;
					this.match(XonParser.Comma);
					this.state = 22;
					this.scopeArgument();
					}
					}
					this.state = 27;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 30;
			this.match(XonParser.OpenBrace);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
				{
				this.state = 33;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 31;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 32;
					this.scope();
					}
					break;
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this.match(XonParser.CloseBrace);
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
	public scopeArgument(): ScopeArgumentContext {
		let _localctx: ScopeArgumentContext = new ScopeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_scopeArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			_localctx._name = this.match(XonParser.ID);
			this.state = 41;
			this.match(XonParser.Colon);
			this.state = 42;
			_localctx._type = this.match(XonParser.ID);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 43;
				this.match(XonParser.Assign);
				this.state = 44;
				this.expression(0);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.match(XonParser.If);
				this.state = 48;
				this.expression(0);
				this.state = 49;
				this.match(XonParser.OpenBrace);
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					{
					this.state = 50;
					this.statement();
					}
					}
					this.state = 55;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 56;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 58;
				this.match(XonParser.Loop);
				this.state = 74;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 71;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						this.state = 59;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 64;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
						case 1:
							{
							this.state = 60;
							this.match(XonParser.Comma);
							this.state = 62;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 61;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 68;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 66;
							this.match(XonParser.Comma);
							this.state = 67;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 70;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 73;
					this.expression(0);
					}
					break;
				}
				this.state = 76;
				this.match(XonParser.OpenBrace);
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					{
					this.state = 77;
					this.statement();
					}
					}
					this.state = 82;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 83;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 3:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 84;
				this.match(XonParser.ID);
				{
				this.state = 85;
				this.match(XonParser.Assign);
				}
				this.state = 86;
				this.expression(0);
				this.state = 87;
				this.match(XonParser.SemiColon);
				}
				break;

			case 4:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 89;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 5:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 90;
				this.expression(0);
				this.state = 91;
				this.match(XonParser.SemiColon);
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 96;
				this.match(XonParser.Plus);
				this.state = 97;
				this.expression(22);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.match(XonParser.Minus);
				this.state = 99;
				this.expression(21);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 100;
				this.match(XonParser.BitNot);
				this.state = 101;
				this.expression(20);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 102;
				this.match(XonParser.Not);
				this.state = 103;
				this.expression(19);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 106;
				this.match(XonParser.OpenBracket);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					this.state = 107;
					(_localctx as ArrayLiteralExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayLiteralExpressionContext)._items.push((_localctx as ArrayLiteralExpressionContext)._expression);
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 108;
						this.match(XonParser.Comma);
						this.state = 109;
						(_localctx as ArrayLiteralExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayLiteralExpressionContext)._items.push((_localctx as ArrayLiteralExpressionContext)._expression);
						}
						}
						this.state = 114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 117;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 8:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.match(XonParser.OpenBracket);
				this.state = 119;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 120;
				this.match(XonParser.Colon);
				this.state = 121;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 122;
					this.match(XonParser.Colon);
					this.state = 123;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 126;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 9:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				this.match(XonParser.OpenBrace);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 129;
					this.match(XonParser.ID);
					this.state = 130;
					this.match(XonParser.Colon);
					this.state = 131;
					this.expression(0);
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 132;
						this.match(XonParser.Comma);
						this.state = 133;
						this.match(XonParser.ID);
						this.state = 134;
						this.match(XonParser.Colon);
						this.state = 135;
						this.expression(0);
						}
						}
						this.state = 140;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 143;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 10:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.match(XonParser.OpenParen);
				this.state = 145;
				this.expression(0);
				this.state = 146;
				this.match(XonParser.CloseParen);
				}
				break;

			case 11:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 148;
				this.match(XonParser.LambdaStart);
				this.state = 158;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 149;
					this.match(XonParser.ID);
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 150;
						this.match(XonParser.Comma);
						this.state = 151;
						this.match(XonParser.ID);
						}
						}
						this.state = 156;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 157;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 160;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 239;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 237;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 164;
						this.match(XonParser.Pow);
						this.state = 165;
						(_localctx as PowExpressionContext)._exponent = this.expression(24);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 166;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 167;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.Multiply) | (1 << XonParser.Divide) | (1 << XonParser.Modulus))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 168;
						(_localctx as MulDivModExpressionContext)._right = this.expression(19);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 169;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 170;
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
						this.state = 171;
						(_localctx as AddSubExpressionContext)._right = this.expression(18);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 172;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 173;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic) | (1 << XonParser.RightShiftLogical))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 174;
						(_localctx as BitShiftExpressionContext)._right = this.expression(17);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 175;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 176;
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LessThan - 34)) | (1 << (XonParser.MoreThan - 34)) | (1 << (XonParser.LessThanEquals - 34)) | (1 << (XonParser.MoreThanEquals - 34)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 177;
						(_localctx as RelationalExpressionContext)._right = this.expression(16);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 178;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 179;
						_la = this._input.LA(1);
						if (!(_la === XonParser.Equals || _la === XonParser.NotEquals)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 180;
						(_localctx as EqualityExpressionContext)._right = this.expression(15);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 181;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 182;
						this.match(XonParser.BitAnd);
						this.state = 183;
						(_localctx as BitAndExpressionContext)._right = this.expression(14);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 184;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 185;
						this.match(XonParser.BitXor);
						this.state = 186;
						(_localctx as BitXorExpressionContext)._right = this.expression(13);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 187;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 188;
						this.match(XonParser.BitOr);
						this.state = 189;
						(_localctx as BitOrExpressionContext)._right = this.expression(12);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 190;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 191;
						this.match(XonParser.And);
						this.state = 192;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(11);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 193;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 194;
						this.match(XonParser.Or);
						this.state = 195;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(10);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 196;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 197;
						this.match(XonParser.Pipe);
						this.state = 200;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 198;
							this.match(XonParser.ID);
							this.state = 199;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 202;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 203;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 204;
						this.match(XonParser.OpenParen);
						this.state = 213;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
							{
							this.state = 205;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 210;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 206;
								this.match(XonParser.Comma);
								this.state = 207;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 212;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 215;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 216;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 217;
						this.match(XonParser.OpenBracket);
						this.state = 218;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 219;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 221;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 222;
						this.match(XonParser.OpenBracket);
						this.state = 223;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 224;
						this.match(XonParser.Colon);
						this.state = 226;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
							{
							this.state = 225;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 230;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 228;
							this.match(XonParser.Colon);
							this.state = 229;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 232;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 234;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 235;
						this.match(XonParser.Dot);
						this.state = 236;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_literal);
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 244;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.CharacterLiteral:
				_localctx = new CharacterLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 245;
				this.match(XonParser.CharacterLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 246;
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
		case 4:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 23);

		case 1:
			return this.precpred(this._ctx, 18);

		case 2:
			return this.precpred(this._ctx, 17);

		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 15);

		case 5:
			return this.precpred(this._ctx, 14);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 11);

		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 27);

		case 13:
			return this.precpred(this._ctx, 26);

		case 14:
			return this.precpred(this._ctx, 25);

		case 15:
			return this.precpred(this._ctx, 24);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\xFC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x05" +
		"\x03\x1F\n\x03\x03\x03\x03\x03\x03\x03\x07\x03$\n\x03\f\x03\x0E\x03\'" +
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"0\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x056\n\x05\f\x05\x0E\x059" +
		"\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05A\n\x05" +
		"\x05\x05C\n\x05\x03\x05\x03\x05\x05\x05G\n\x05\x03\x05\x05\x05J\n\x05" +
		"\x03\x05\x05\x05M\n\x05\x03\x05\x03\x05\x07\x05Q\n\x05\f\x05\x0E\x05T" +
		"\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05`\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06q\n\x06\f\x06\x0E\x06t\v\x06\x05\x06v\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x7F\n\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x07\x06\x8B\n\x06\f\x06\x0E\x06\x8E\v\x06\x05\x06\x90\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x9B" +
		"\n\x06\f\x06\x0E\x06\x9E\v\x06\x03\x06\x05\x06\xA1\n\x06\x03\x06\x05\x06" +
		"\xA4\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xCB\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x07\x06\xD3\n\x06\f\x06\x0E\x06\xD6\v\x06\x05\x06\xD8" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06\xE5\n\x06\x03\x06\x03\x06\x05\x06\xE9" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xF0\n\x06\f\x06" +
		"\x0E\x06\xF3\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xFA" +
		"\n\x07\x03\x07\x02\x02\x03\n\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x02\x07\x03\x02\x1F!\x03\x02\x1B\x1C\x03\x02\v\r\x03\x02$\'\x03\x02(" +
		")\x02\u0131\x02\x12\x03\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06*\x03\x02" +
		"\x02\x02\b_\x03\x02\x02\x02\n\xA3\x03\x02\x02\x02\f\xF9\x03\x02\x02\x02" +
		"\x0E\x11\x05\b\x05\x02\x0F\x11\x05\x04\x03\x02\x10\x0E\x03\x02\x02\x02" +
		"\x10\x0F\x03\x02\x02\x02\x11\x14\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02" +
		"\x12\x13\x03\x02\x02\x02\x13\x03\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02" +
		"\x15\x1E\x07@\x02\x02\x16\x1B\x05\x06\x04\x02\x17\x18\x07\x15\x02\x02" +
		"\x18\x1A\x05\x06\x04\x02\x19\x17\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02" +
		"\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02" +
		"\x1D\x1B\x03\x02\x02\x02\x1E\x16\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02" +
		"\x1F \x03\x02\x02\x02 %\x07\x12\x02\x02!$\x05\b\x05\x02\"$\x05\x04\x03" +
		"\x02#!\x03\x02\x02\x02#\"\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02" +
		"\x02\x02%&\x03\x02\x02\x02&(\x03\x02\x02\x02\'%\x03\x02\x02\x02()\x07" +
		"\x13\x02\x02)\x05\x03\x02\x02\x02*+\x07@\x02\x02+,\x07\x18\x02\x02,/\x07" +
		"@\x02\x02-.\x07\x16\x02\x02.0\x05\n\x06\x02/-\x03\x02\x02\x02/0\x03\x02" +
		"\x02\x020\x07\x03\x02\x02\x0212\x07\x05\x02\x0223\x05\n\x06\x0237\x07" +
		"\x12\x02\x0246\x05\b\x05\x0254\x03\x02\x02\x0269\x03\x02\x02\x0275\x03" +
		"\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02\x02:;\x07" +
		"\x13\x02\x02;`\x03\x02\x02\x02<L\x07\x06\x02\x02=B\x07@\x02\x02>@\x07" +
		"\x15\x02\x02?A\x07@\x02\x02@?\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03" +
		"\x02\x02\x02B>\x03\x02\x02\x02BC\x03\x02\x02\x02CF\x03\x02\x02\x02DE\x07" +
		"\x15\x02\x02EG\x07@\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x03" +
		"\x02\x02\x02HJ\x07\x07\x02\x02I=\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x03" +
		"\x02\x02\x02KM\x05\n\x06\x02LI\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03" +
		"\x02\x02\x02NR\x07\x12\x02\x02OQ\x05\b\x05\x02PO\x03\x02\x02\x02QT\x03" +
		"\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03" +
		"\x02\x02\x02U`\x07\x13\x02\x02VW\x07@\x02\x02WX\x07\x16\x02\x02XY\x05" +
		"\n\x06\x02YZ\x07\x14\x02\x02Z`\x03\x02\x02\x02[`\x07>\x02\x02\\]\x05\n" +
		"\x06\x02]^\x07\x14\x02\x02^`\x03\x02\x02\x02_1\x03\x02\x02\x02_<\x03\x02" +
		"\x02\x02_V\x03\x02\x02\x02_[\x03\x02\x02\x02_\\\x03\x02\x02\x02`\t\x03" +
		"\x02\x02\x02ab\b\x06\x01\x02bc\x07\x1B\x02\x02c\xA4\x05\n\x06\x18de\x07" +
		"\x1C\x02\x02e\xA4\x05\n\x06\x17fg\x07\x1D\x02\x02g\xA4\x05\n\x06\x16h" +
		"i\x07\x1E\x02\x02i\xA4\x05\n\x06\x15j\xA4\x07@\x02\x02k\xA4\x05\f\x07" +
		"\x02lu\x07\x0E\x02\x02mr\x05\n\x06\x02no\x07\x15\x02\x02oq\x05\n\x06\x02" +
		"pn\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"sv\x03\x02\x02\x02tr\x03\x02\x02\x02um\x03\x02\x02\x02uv\x03\x02\x02\x02" +
		"vw\x03\x02\x02\x02w\xA4\x07\x0F\x02\x02xy\x07\x0E\x02\x02yz\x05\n\x06" +
		"\x02z{\x07\x18\x02\x02{~\x05\n\x06\x02|}\x07\x18\x02\x02}\x7F\x05\n\x06" +
		"\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80" +
		"\x81\x07\x0F\x02\x02\x81\xA4\x03\x02\x02\x02\x82\x8F\x07\x12\x02\x02\x83" +
		"\x84\x07@\x02\x02\x84\x85\x07\x18\x02\x02\x85\x8C\x05\n\x06\x02\x86\x87" +
		"\x07\x15\x02\x02\x87\x88\x07@\x02\x02\x88\x89\x07\x18\x02\x02\x89\x8B" +
		"\x05\n\x06\x02\x8A\x86\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C" +
		"\x03\x02\x02\x02\x8F\x83\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91" +
		"\x03\x02\x02\x02\x91\xA4\x07\x13\x02\x02\x92\x93\x07\x10\x02\x02\x93\x94" +
		"\x05\n\x06\x02\x94\x95\x07\x11\x02\x02\x95\xA4\x03\x02\x02\x02\x96\xA0" +
		"\x077\x02\x02\x97\x9C\x07@\x02\x02\x98\x99\x07\x15\x02\x02\x99\x9B\x07" +
		"@\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03" +
		"\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x9C\x03" +
		"\x02\x02\x02\x9F\xA1\x07\x18\x02\x02\xA0\x97\x03\x02\x02\x02\xA0\xA1\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x05\n\x06\x03\xA3a\x03\x02" +
		"\x02\x02\xA3d\x03\x02\x02\x02\xA3f\x03\x02\x02\x02\xA3h\x03\x02\x02\x02" +
		"\xA3j\x03\x02\x02\x02\xA3k\x03\x02\x02\x02\xA3l\x03\x02\x02\x02\xA3x\x03" +
		"\x02\x02\x02\xA3\x82\x03\x02\x02\x02\xA3\x92\x03\x02\x02\x02\xA3\x96\x03" +
		"\x02\x02\x02\xA4\xF1\x03\x02\x02\x02\xA5\xA6\f\x19\x02\x02\xA6\xA7\x07" +
		"\"\x02\x02\xA7\xF0\x05\n\x06\x1A\xA8\xA9\f\x14\x02\x02\xA9\xAA\t\x02\x02" +
		"\x02\xAA\xF0\x05\n\x06\x15\xAB\xAC\f\x13\x02\x02\xAC\xAD\t\x03\x02\x02" +
		"\xAD\xF0\x05\n\x06\x14\xAE\xAF\f\x12\x02\x02\xAF\xB0\t\x04\x02\x02\xB0" +
		"\xF0\x05\n\x06\x13\xB1\xB2\f\x11\x02\x02\xB2\xB3\t\x05\x02\x02\xB3\xF0" +
		"\x05\n\x06\x12\xB4\xB5\f\x10\x02\x02\xB5\xB6\t\x06\x02\x02\xB6\xF0\x05" +
		"\n\x06\x11\xB7\xB8\f\x0F\x02\x02\xB8\xB9\x07\b\x02\x02\xB9\xF0\x05\n\x06" +
		"\x10\xBA\xBB\f\x0E\x02\x02\xBB\xBC\x07\n\x02\x02\xBC\xF0\x05\n\x06\x0F" +
		"\xBD\xBE\f\r\x02\x02\xBE\xBF\x07\t\x02\x02\xBF\xF0\x05\n\x06\x0E\xC0\xC1" +
		"\f\f\x02\x02\xC1\xC2\x07*\x02\x02\xC2\xF0\x05\n\x06\r\xC3\xC4\f\v\x02" +
		"\x02\xC4\xC5\x07+\x02\x02\xC5\xF0\x05\n\x06\f\xC6\xC7\f\x04\x02\x02\xC7" +
		"\xCA\x078\x02\x02\xC8\xC9\x07@\x02\x02\xC9\xCB\x07\x18\x02\x02\xCA\xC8" +
		"\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xF0" +
		"\x05\n\x06\x05\xCD\xCE\f\x1D\x02\x02\xCE\xD7\x07\x10\x02\x02\xCF\xD4\x05" +
		"\n\x06\x02\xD0\xD1\x07\x15\x02\x02\xD1\xD3\x05\n\x06\x02\xD2\xD0\x03\x02" +
		"\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xCF\x03\x02" +
		"\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xF0\x07\x11" +
		"\x02\x02\xDA\xDB\f\x1C\x02\x02\xDB\xDC\x07\x0E\x02\x02\xDC\xDD\x05\n\x06" +
		"\x02\xDD\xDE\x07\x0F\x02\x02\xDE\xF0\x03\x02\x02\x02\xDF\xE0\f\x1B\x02" +
		"\x02\xE0\xE1\x07\x0E\x02\x02\xE1\xE2\x05\n\x06\x02\xE2\xE4\x07\x18\x02" +
		"\x02\xE3\xE5\x05\n\x06\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02" +
		"\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE7\x07\x18\x02\x02\xE7\xE9\x05\n\x06" +
		"\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x03\x02\x02" +
		"\x02\xEA\xEB\x07\x0F\x02\x02\xEB\xF0\x03\x02\x02\x02\xEC\xED\f\x1A\x02" +
		"\x02\xED\xEE\x07\x1A\x02\x02\xEE\xF0\x07@\x02\x02\xEF\xA5\x03\x02\x02" +
		"\x02\xEF\xA8\x03\x02\x02\x02\xEF\xAB\x03\x02\x02\x02\xEF\xAE\x03\x02\x02" +
		"\x02\xEF\xB1\x03\x02\x02\x02\xEF\xB4\x03\x02\x02\x02\xEF\xB7\x03\x02\x02" +
		"\x02\xEF\xBA\x03\x02\x02\x02\xEF\xBD\x03\x02\x02\x02\xEF\xC0\x03\x02\x02" +
		"\x02\xEF\xC3\x03\x02\x02\x02\xEF\xC6\x03\x02\x02\x02\xEF\xCD\x03\x02\x02" +
		"\x02\xEF\xDA\x03\x02\x02\x02\xEF\xDF\x03\x02\x02\x02\xEF\xEC\x03\x02\x02" +
		"\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02" +
		"\x02\xF2\v\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4\xFA\x07:\x02\x02" +
		"\xF5\xFA\x07;\x02\x02\xF6\xFA\x079\x02\x02\xF7\xFA\x07=\x02\x02\xF8\xFA" +
		"\x07<\x02\x02\xF9\xF4\x03\x02\x02\x02\xF9\xF5\x03\x02\x02\x02\xF9\xF6" +
		"\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA\r" +
		"\x03\x02\x02\x02!\x10\x12\x1B\x1E#%/7@BFILR_ru~\x8C\x8F\x9C\xA0\xA3\xCA" +
		"\xD4\xD7\xE4\xE8\xEF\xF1\xF9";
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
	public scope(): ScopeContext[];
	public scope(i: number): ScopeContext;
	public scope(i?: number): ScopeContext | ScopeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopeContext);
		} else {
			return this.getRuleContext(i, ScopeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class ScopeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public scopeArgument(): ScopeArgumentContext[];
	public scopeArgument(i: number): ScopeArgumentContext;
	public scopeArgument(i?: number): ScopeArgumentContext | ScopeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopeArgumentContext);
		} else {
			return this.getRuleContext(i, ScopeArgumentContext);
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
	public scope(): ScopeContext[];
	public scope(i: number): ScopeContext;
	public scope(i?: number): ScopeContext | ScopeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopeContext);
		} else {
			return this.getRuleContext(i, ScopeContext);
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
	public get ruleIndex(): number { return XonParser.RULE_scope; }
}


export class ScopeArgumentContext extends ParserRuleContext {
	public _name: Token;
	public _type: Token;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_scopeArgument; }
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
export class IfStatementContext extends StatementContext {
	public If(): TerminalNode { return this.getToken(XonParser.If, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopStatementContext extends StatementContext {
	public _value: Token;
	public _key: Token;
	public _index: Token;
	public Loop(): TerminalNode { return this.getToken(XonParser.Loop, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(XonParser.SemiColon, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(XonParser.SemiColon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
	public _end: ExpressionContext;
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
export class ArrayLiteralExpressionContext extends ExpressionContext {
	public _expression: ExpressionContext;
	public _items: ExpressionContext[] = [];
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
	public _end: ExpressionContext;
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
export class ObjectLiteralExpressionContext extends ExpressionContext {
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
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
export class BooleanLiteralContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CharacterLiteralContext extends LiteralContext {
	public CharacterLiteral(): TerminalNode { return this.getToken(XonParser.CharacterLiteral, 0); }
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


