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

import { XonParserListener } from "./XonParserListener";

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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "scope", "scopeArgument", "statement", "expression",
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
			this.state = 14;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
				{
				this.state = 12;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 10;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 11;
					this.scope();
					}
					break;
				}
				}
				this.state = 16;
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
			this.state = 17;
			this.match(XonParser.ID);
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 18;
				this.scopeArgument();
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 19;
					this.match(XonParser.Comma);
					this.state = 20;
					this.scopeArgument();
					}
					}
					this.state = 25;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 28;
			this.match(XonParser.OpenBrace);
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
				{
				this.state = 31;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 29;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 30;
					this.scope();
					}
					break;
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
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
			this.state = 38;
			_localctx._name = this.match(XonParser.ID);
			this.state = 39;
			this.match(XonParser.Colon);
			this.state = 40;
			_localctx._type = this.match(XonParser.ID);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 41;
				this.match(XonParser.Assign);
				this.state = 42;
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
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 45;
				this.match(XonParser.If);
				this.state = 46;
				this.expression(0);
				this.state = 47;
				this.match(XonParser.OpenBrace);
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					{
					this.state = 48;
					this.statement();
					}
					}
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 54;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.match(XonParser.Loop);
				this.state = 72;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 69;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						this.state = 57;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 62;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
						case 1:
							{
							this.state = 58;
							this.match(XonParser.Comma);
							this.state = 60;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 59;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 66;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 64;
							this.match(XonParser.Comma);
							this.state = 65;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 68;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 71;
					this.expression(0);
					}
					break;
				}
				this.state = 74;
				this.match(XonParser.OpenBrace);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.Preprocessor - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					{
					this.state = 75;
					this.statement();
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 81;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 3:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 82;
				this.match(XonParser.ID);
				this.state = 83;
				_la = this._input.LA(1);
				if (!(_la === XonParser.Assign || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.MultiplyAssign - 42)) | (1 << (XonParser.DivideAssign - 42)) | (1 << (XonParser.ModulusAssign - 42)) | (1 << (XonParser.PlusAssign - 42)) | (1 << (XonParser.MinusAssign - 42)) | (1 << (XonParser.BitAndAssign - 42)) | (1 << (XonParser.BitXorAssign - 42)) | (1 << (XonParser.BitOrAssign - 42)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 84;
				this.expression(0);
				this.state = 85;
				this.match(XonParser.SemiColon);
				}
				break;

			case 4:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 87;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 5:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 88;
				this.expression(0);
				this.state = 89;
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
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 94;
				this.match(XonParser.Plus);
				this.state = 95;
				this.expression(26);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 96;
				this.match(XonParser.Minus);
				this.state = 97;
				this.expression(25);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.match(XonParser.BitNot);
				this.state = 99;
				this.expression(24);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 100;
				this.match(XonParser.Not);
				this.state = 101;
				this.expression(23);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 102;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new IntegerLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 103;
				this.match(XonParser.DecimalLiteral);
				}
				break;

			case 7:
				{
				_localctx = new FloatLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.match(XonParser.FloatLiteral);
				}
				break;

			case 8:
				{
				_localctx = new BooleanLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				this.match(XonParser.BooleanLiteral);
				}
				break;

			case 9:
				{
				_localctx = new CharacterLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 106;
				this.match(XonParser.CharacterLiteral);
				}
				break;

			case 10:
				{
				_localctx = new StringLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 107;
				this.match(XonParser.StringLiteral);
				}
				break;

			case 11:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 108;
				this.match(XonParser.OpenBracket);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					this.state = 109;
					(_localctx as ArrayLiteralExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayLiteralExpressionContext)._items.push((_localctx as ArrayLiteralExpressionContext)._expression);
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 110;
						this.match(XonParser.Comma);
						this.state = 111;
						(_localctx as ArrayLiteralExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayLiteralExpressionContext)._items.push((_localctx as ArrayLiteralExpressionContext)._expression);
						}
						}
						this.state = 116;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 119;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 12:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				this.match(XonParser.OpenBracket);
				this.state = 121;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 122;
				this.match(XonParser.Colon);
				this.state = 123;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 124;
					this.match(XonParser.Colon);
					this.state = 125;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 128;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 13:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 130;
				this.match(XonParser.OpenBrace);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 131;
					this.match(XonParser.ID);
					this.state = 132;
					this.match(XonParser.Colon);
					this.state = 133;
					this.expression(0);
					this.state = 140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 134;
						this.match(XonParser.Comma);
						this.state = 135;
						this.match(XonParser.ID);
						this.state = 136;
						this.match(XonParser.Colon);
						this.state = 137;
						this.expression(0);
						}
						}
						this.state = 142;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 145;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.match(XonParser.OpenParen);
				this.state = 147;
				this.expression(0);
				this.state = 148;
				this.match(XonParser.CloseParen);
				}
				break;

			case 15:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.match(XonParser.LambdaStart);
				this.state = 160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 151;
					this.match(XonParser.ID);
					this.state = 156;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 152;
						this.match(XonParser.Comma);
						this.state = 153;
						this.match(XonParser.ID);
						}
						}
						this.state = 158;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 159;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 162;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 239;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 165;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 166;
						this.match(XonParser.Pow);
						this.state = 167;
						(_localctx as PowExpressionContext)._exponent = this.expression(28);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 168;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 169;
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
						this.state = 170;
						(_localctx as MulDivModExpressionContext)._right = this.expression(23);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 171;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 172;
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
						this.state = 173;
						(_localctx as AddSubExpressionContext)._right = this.expression(22);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 174;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 175;
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
						this.state = 176;
						(_localctx as BitShiftExpressionContext)._right = this.expression(21);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 177;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 178;
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
						this.state = 179;
						(_localctx as RelationalExpressionContext)._right = this.expression(20);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 180;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 181;
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
						this.state = 182;
						(_localctx as EqualityExpressionContext)._right = this.expression(19);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 183;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 184;
						this.match(XonParser.BitAnd);
						this.state = 185;
						(_localctx as BitAndExpressionContext)._right = this.expression(18);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 186;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 187;
						this.match(XonParser.BitXor);
						this.state = 188;
						(_localctx as BitXorExpressionContext)._right = this.expression(17);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 189;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 190;
						this.match(XonParser.BitOr);
						this.state = 191;
						(_localctx as BitOrExpressionContext)._right = this.expression(16);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 192;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 193;
						this.match(XonParser.And);
						this.state = 194;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 195;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 196;
						this.match(XonParser.Or);
						this.state = 197;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(14);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 198;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 199;
						this.match(XonParser.Pipe);
						this.state = 202;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 200;
							this.match(XonParser.ID);
							this.state = 201;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 204;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 205;
						if (!(this.precpred(this._ctx, 31))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 31)");
						}
						this.state = 206;
						this.match(XonParser.OpenParen);
						this.state = 215;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
							{
							this.state = 207;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 212;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 208;
								this.match(XonParser.Comma);
								this.state = 209;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 214;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 217;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 218;
						if (!(this.precpred(this._ctx, 30))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 30)");
						}
						this.state = 219;
						this.match(XonParser.OpenBracket);
						this.state = 220;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 221;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 223;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 224;
						this.match(XonParser.OpenBracket);
						this.state = 225;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 226;
						this.match(XonParser.Colon);
						this.state = 228;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.LambdaStart - 53)) | (1 << (XonParser.BooleanLiteral - 53)) | (1 << (XonParser.DecimalLiteral - 53)) | (1 << (XonParser.FloatLiteral - 53)) | (1 << (XonParser.StringLiteral - 53)) | (1 << (XonParser.CharacterLiteral - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
							{
							this.state = 227;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 232;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 230;
							this.match(XonParser.Colon);
							this.state = 231;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 234;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 236;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 237;
						this.match(XonParser.Dot);
						this.state = 238;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 243;
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
			return this.precpred(this._ctx, 27);

		case 1:
			return this.precpred(this._ctx, 22);

		case 2:
			return this.precpred(this._ctx, 21);

		case 3:
			return this.precpred(this._ctx, 20);

		case 4:
			return this.precpred(this._ctx, 19);

		case 5:
			return this.precpred(this._ctx, 18);

		case 6:
			return this.precpred(this._ctx, 17);

		case 7:
			return this.precpred(this._ctx, 16);

		case 8:
			return this.precpred(this._ctx, 15);

		case 9:
			return this.precpred(this._ctx, 14);

		case 10:
			return this.precpred(this._ctx, 13);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 31);

		case 13:
			return this.precpred(this._ctx, 30);

		case 14:
			return this.precpred(this._ctx, 29);

		case 15:
			return this.precpred(this._ctx, 28);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\xF7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x07\x02\x0F\n\x02\f\x02\x0E\x02\x12\v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03\x18\n\x03\f\x03\x0E\x03\x1B\v\x03\x05\x03\x1D\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\"\n\x03\f\x03\x0E\x03%\v\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04.\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x054\n\x05\f\x05\x0E\x057\v\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05?\n\x05\x05\x05A\n\x05\x03" +
		"\x05\x03\x05\x05\x05E\n\x05\x03\x05\x05\x05H\n\x05\x03\x05\x05\x05K\n" +
		"\x05\x03\x05\x03\x05\x07\x05O\n\x05\f\x05\x0E\x05R\v\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"^\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x07\x06s\n\x06\f\x06\x0E\x06v\v\x06\x05\x06x\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x81\n\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06\x8D\n\x06\f\x06\x0E\x06\x90\v\x06\x05\x06\x92\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06\x9D\n\x06\f\x06\x0E\x06\xA0\v\x06\x03\x06\x05\x06\xA3\n\x06\x03\x06" +
		"\x05\x06\xA6\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\xCD\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\xD5\n\x06\f\x06\x0E\x06\xD8\v\x06\x05" +
		"\x06\xDA\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xE7\n\x06\x03\x06\x03\x06\x05" +
		"\x06\xEB\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xF2\n\x06" +
		"\f\x06\x0E\x06\xF5\v\x06\x03\x06\x02\x02\x03\n\x07\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\x02\b\x05\x02\x16\x16,046\x03\x02\x1F!\x03\x02\x1B\x1C" +
		"\x03\x02\v\r\x03\x02$\'\x03\x02()\x02\u012D\x02\x10\x03\x02\x02\x02\x04" +
		"\x13\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b]\x03\x02\x02\x02\n\xA5\x03" +
		"\x02\x02\x02\f\x0F\x05\b\x05\x02\r\x0F\x05\x04\x03\x02\x0E\f\x03\x02\x02" +
		"\x02\x0E\r\x03\x02\x02\x02\x0F\x12\x03\x02\x02\x02\x10\x0E\x03\x02\x02" +
		"\x02\x10\x11\x03\x02\x02\x02\x11\x03\x03\x02\x02\x02\x12\x10\x03\x02\x02" +
		"\x02\x13\x1C\x07@\x02\x02\x14\x19\x05\x06\x04\x02\x15\x16\x07\x15\x02" +
		"\x02\x16\x18\x05\x06\x04\x02\x17\x15\x03\x02\x02\x02\x18\x1B\x03\x02\x02" +
		"\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1D\x03\x02\x02" +
		"\x02\x1B\x19\x03\x02\x02\x02\x1C\x14\x03\x02\x02\x02\x1C\x1D\x03\x02\x02" +
		"\x02\x1D\x1E\x03\x02\x02\x02\x1E#\x07\x12\x02\x02\x1F\"\x05\b\x05\x02" +
		" \"\x05\x04\x03\x02!\x1F\x03\x02\x02\x02! \x03\x02\x02\x02\"%\x03\x02" +
		"\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02%#\x03\x02" +
		"\x02\x02&\'\x07\x13\x02\x02\'\x05\x03\x02\x02\x02()\x07@\x02\x02)*\x07" +
		"\x18\x02\x02*-\x07@\x02\x02+,\x07\x16\x02\x02,.\x05\n\x06\x02-+\x03\x02" +
		"\x02\x02-.\x03\x02\x02\x02.\x07\x03\x02\x02\x02/0\x07\x05\x02\x0201\x05" +
		"\n\x06\x0215\x07\x12\x02\x0224\x05\b\x05\x0232\x03\x02\x02\x0247\x03\x02" +
		"\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x0275\x03\x02" +
		"\x02\x0289\x07\x13\x02\x029^\x03\x02\x02\x02:J\x07\x06\x02\x02;@\x07@" +
		"\x02\x02<>\x07\x15\x02\x02=?\x07@\x02\x02>=\x03\x02\x02\x02>?\x03\x02" +
		"\x02\x02?A\x03\x02\x02\x02@<\x03\x02\x02\x02@A\x03\x02\x02\x02AD\x03\x02" +
		"\x02\x02BC\x07\x15\x02\x02CE\x07@\x02\x02DB\x03\x02\x02\x02DE\x03\x02" +
		"\x02\x02EF\x03\x02\x02\x02FH\x07\x07\x02\x02G;\x03\x02\x02\x02GH\x03\x02" +
		"\x02\x02HI\x03\x02\x02\x02IK\x05\n\x06\x02JG\x03\x02\x02\x02JK\x03\x02" +
		"\x02\x02KL\x03\x02\x02\x02LP\x07\x12\x02\x02MO\x05\b\x05\x02NM\x03\x02" +
		"\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x03\x02" +
		"\x02\x02RP\x03\x02\x02\x02S^\x07\x13\x02\x02TU\x07@\x02\x02UV\t\x02\x02" +
		"\x02VW\x05\n\x06\x02WX\x07\x14\x02\x02X^\x03\x02\x02\x02Y^\x07>\x02\x02" +
		"Z[\x05\n\x06\x02[\\\x07\x14\x02\x02\\^\x03\x02\x02\x02]/\x03\x02\x02\x02" +
		"]:\x03\x02\x02\x02]T\x03\x02\x02\x02]Y\x03\x02\x02\x02]Z\x03\x02\x02\x02" +
		"^\t\x03\x02\x02\x02_`\b\x06\x01\x02`a\x07\x1B\x02\x02a\xA6\x05\n\x06\x1C" +
		"bc\x07\x1C\x02\x02c\xA6\x05\n\x06\x1Bde\x07\x1D\x02\x02e\xA6\x05\n\x06" +
		"\x1Afg\x07\x1E\x02\x02g\xA6\x05\n\x06\x19h\xA6\x07@\x02\x02i\xA6\x07:" +
		"\x02\x02j\xA6\x07;\x02\x02k\xA6\x079\x02\x02l\xA6\x07=\x02\x02m\xA6\x07" +
		"<\x02\x02nw\x07\x0E\x02\x02ot\x05\n\x06\x02pq\x07\x15\x02\x02qs\x05\n" +
		"\x06\x02rp\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02" +
		"\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02wo\x03\x02\x02\x02wx\x03\x02" +
		"\x02\x02xy\x03\x02\x02\x02y\xA6\x07\x0F\x02\x02z{\x07\x0E\x02\x02{|\x05" +
		"\n\x06\x02|}\x07\x18\x02\x02}\x80\x05\n\x06\x02~\x7F\x07\x18\x02\x02\x7F" +
		"\x81\x05\n\x06\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82" +
		"\x03\x02\x02\x02\x82\x83\x07\x0F\x02\x02\x83\xA6\x03\x02\x02\x02\x84\x91" +
		"\x07\x12\x02\x02\x85\x86\x07@\x02\x02\x86\x87\x07\x18\x02\x02\x87\x8E" +
		"\x05\n\x06\x02\x88\x89\x07\x15\x02\x02\x89\x8A\x07@\x02\x02\x8A\x8B\x07" +
		"\x18\x02\x02\x8B\x8D\x05\n\x06\x02\x8C\x88\x03\x02\x02\x02\x8D\x90\x03" +
		"\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x92\x03" +
		"\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x85\x03\x02\x02\x02\x91\x92\x03" +
		"\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\xA6\x07\x13\x02\x02\x94\x95\x07" +
		"\x10\x02\x02\x95\x96\x05\n\x06\x02\x96\x97\x07\x11\x02\x02\x97\xA6\x03" +
		"\x02\x02\x02\x98\xA2\x077\x02\x02\x99\x9E\x07@\x02\x02\x9A\x9B\x07\x15" +
		"\x02\x02\x9B\x9D\x07@\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\xA0\x03\x02" +
		"\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02" +
		"\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA3\x07\x18\x02\x02\xA2\x99\x03\x02" +
		"\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x05\n" +
		"\x06\x03\xA5_\x03\x02\x02\x02\xA5b\x03\x02\x02\x02\xA5d\x03\x02\x02\x02" +
		"\xA5f\x03\x02\x02\x02\xA5h\x03\x02\x02\x02\xA5i\x03\x02\x02\x02\xA5j\x03" +
		"\x02\x02\x02\xA5k\x03\x02\x02\x02\xA5l\x03\x02\x02\x02\xA5m\x03\x02\x02" +
		"\x02\xA5n\x03\x02\x02\x02\xA5z\x03\x02\x02\x02\xA5\x84\x03\x02\x02\x02" +
		"\xA5\x94\x03\x02\x02\x02\xA5\x98\x03\x02\x02\x02\xA6\xF3\x03\x02\x02\x02" +
		"\xA7\xA8\f\x1D\x02\x02\xA8\xA9\x07\"\x02\x02\xA9\xF2\x05\n\x06\x1E\xAA" +
		"\xAB\f\x18\x02\x02\xAB\xAC\t\x03\x02\x02\xAC\xF2\x05\n\x06\x19\xAD\xAE" +
		"\f\x17\x02\x02\xAE\xAF\t\x04\x02\x02\xAF\xF2\x05\n\x06\x18\xB0\xB1\f\x16" +
		"\x02\x02\xB1\xB2\t\x05\x02\x02\xB2\xF2\x05\n\x06\x17\xB3\xB4\f\x15\x02" +
		"\x02\xB4\xB5\t\x06\x02\x02\xB5\xF2\x05\n\x06\x16\xB6\xB7\f\x14\x02\x02" +
		"\xB7\xB8\t\x07\x02\x02\xB8\xF2\x05\n\x06\x15\xB9\xBA\f\x13\x02\x02\xBA" +
		"\xBB\x07\b\x02\x02\xBB\xF2\x05\n\x06\x14\xBC\xBD\f\x12\x02\x02\xBD\xBE" +
		"\x07\n\x02\x02\xBE\xF2\x05\n\x06\x13\xBF\xC0\f\x11\x02\x02\xC0\xC1\x07" +
		"\t\x02\x02\xC1\xF2\x05\n\x06\x12\xC2\xC3\f\x10\x02\x02\xC3\xC4\x07*\x02" +
		"\x02\xC4\xF2\x05\n\x06\x11\xC5\xC6\f\x0F\x02\x02\xC6\xC7\x07+\x02\x02" +
		"\xC7\xF2\x05\n\x06\x10\xC8\xC9\f\x04\x02\x02\xC9\xCC\x078\x02\x02\xCA" +
		"\xCB\x07@\x02\x02\xCB\xCD\x07\x18\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC" +
		"\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xF2\x05\n\x06\x05\xCF" +
		"\xD0\f!\x02\x02\xD0\xD9\x07\x10\x02\x02\xD1\xD6\x05\n\x06\x02\xD2\xD3" +
		"\x07\x15\x02\x02\xD3\xD5\x05\n\x06\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD8" +
		"\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA" +
		"\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xD1\x03\x02\x02\x02\xD9\xDA" +
		"\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xF2\x07\x11\x02\x02\xDC\xDD" +
		"\f \x02\x02\xDD\xDE\x07\x0E\x02\x02\xDE\xDF\x05\n\x06\x02\xDF\xE0\x07" +
		"\x0F\x02\x02\xE0\xF2\x03\x02\x02\x02\xE1\xE2\f\x1F\x02\x02\xE2\xE3\x07" +
		"\x0E\x02\x02\xE3\xE4\x05\n\x06\x02\xE4\xE6\x07\x18\x02\x02\xE5\xE7\x05" +
		"\n\x06\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03" +
		"\x02\x02\x02\xE8\xE9\x07\x18\x02\x02\xE9\xEB\x05\n\x06\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x07" +
		"\x0F\x02\x02\xED\xF2\x03\x02\x02\x02\xEE\xEF\f\x1E\x02\x02\xEF\xF0\x07" +
		"\x1A\x02\x02\xF0\xF2\x07@\x02\x02\xF1\xA7\x03\x02\x02\x02\xF1\xAA\x03" +
		"\x02\x02\x02\xF1\xAD\x03\x02\x02\x02\xF1\xB0\x03\x02\x02\x02\xF1\xB3\x03" +
		"\x02\x02\x02\xF1\xB6\x03\x02\x02\x02\xF1\xB9\x03\x02\x02\x02\xF1\xBC\x03" +
		"\x02\x02\x02\xF1\xBF\x03\x02\x02\x02\xF1\xC2\x03\x02\x02\x02\xF1\xC5\x03" +
		"\x02\x02\x02\xF1\xC8\x03\x02\x02\x02\xF1\xCF\x03\x02\x02\x02\xF1\xDC\x03" +
		"\x02\x02\x02\xF1\xE1\x03\x02\x02\x02\xF1\xEE\x03\x02\x02\x02\xF2\xF5\x03" +
		"\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\v\x03" +
		"\x02\x02\x02\xF5\xF3\x03\x02\x02\x02 \x0E\x10\x19\x1C!#-5>@DGJP]tw\x80" +
		"\x8E\x91\x9E\xA2\xA5\xCC\xD6\xD9\xE6\xEA\xF1\xF3";
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterScope) {
			listener.enterScope(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitScope) {
			listener.exitScope(this);
		}
	}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterScopeArgument) {
			listener.enterScopeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitScopeArgument) {
			listener.exitScopeArgument(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterLoopStatement) {
			listener.enterLoopStatement(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitLoopStatement) {
			listener.exitLoopStatement(this);
		}
	}
}
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(XonParser.SemiColon, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.MinusAssign, 0); }
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.ModulusAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitAndAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitOrAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitXorAssign, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterPreprocessorStatement) {
			listener.enterPreprocessorStatement(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitPreprocessorStatement) {
			listener.exitPreprocessorStatement(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterIndexExpression) {
			listener.enterIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitIndexExpression) {
			listener.exitIndexExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterSliceExpression) {
			listener.enterSliceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitSliceExpression) {
			listener.exitSliceExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterMemberExpression) {
			listener.enterMemberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitMemberExpression) {
			listener.exitMemberExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterPowExpression) {
			listener.enterPowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitPowExpression) {
			listener.exitPowExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterLogicalNotExpression) {
			listener.enterLogicalNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitLogicalNotExpression) {
			listener.exitLogicalNotExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterMulDivModExpression) {
			listener.enterMulDivModExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitMulDivModExpression) {
			listener.exitMulDivModExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterAddSubExpression) {
			listener.enterAddSubExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitAddSubExpression) {
			listener.exitAddSubExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterBitXorExpression) {
			listener.enterBitXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitBitXorExpression) {
			listener.exitBitXorExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
}
export class IdExpressionContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterIdExpression) {
			listener.enterIdExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitIdExpression) {
			listener.exitIdExpression(this);
		}
	}
}
export class IntegerLiteralExpressionContext extends ExpressionContext {
	public DecimalLiteral(): TerminalNode { return this.getToken(XonParser.DecimalLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterIntegerLiteralExpression) {
			listener.enterIntegerLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitIntegerLiteralExpression) {
			listener.exitIntegerLiteralExpression(this);
		}
	}
}
export class FloatLiteralExpressionContext extends ExpressionContext {
	public FloatLiteral(): TerminalNode { return this.getToken(XonParser.FloatLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterFloatLiteralExpression) {
			listener.enterFloatLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitFloatLiteralExpression) {
			listener.exitFloatLiteralExpression(this);
		}
	}
}
export class BooleanLiteralExpressionContext extends ExpressionContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterBooleanLiteralExpression) {
			listener.enterBooleanLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitBooleanLiteralExpression) {
			listener.exitBooleanLiteralExpression(this);
		}
	}
}
export class CharacterLiteralExpressionContext extends ExpressionContext {
	public CharacterLiteral(): TerminalNode { return this.getToken(XonParser.CharacterLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterCharacterLiteralExpression) {
			listener.enterCharacterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitCharacterLiteralExpression) {
			listener.exitCharacterLiteralExpression(this);
		}
	}
}
export class StringLiteralExpressionContext extends ExpressionContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterStringLiteralExpression) {
			listener.enterStringLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitStringLiteralExpression) {
			listener.exitStringLiteralExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterRangeExpression) {
			listener.enterRangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitRangeExpression) {
			listener.exitRangeExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterObjectLiteralExpression) {
			listener.enterObjectLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitObjectLiteralExpression) {
			listener.exitObjectLiteralExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterPipeExpression) {
			listener.enterPipeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitPipeExpression) {
			listener.exitPipeExpression(this);
		}
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
	// @Override
	public enterRule(listener: XonParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XonParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
}


