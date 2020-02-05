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
	public static readonly Else = 4;
	public static readonly Loop = 5;
	public static readonly In = 6;
	public static readonly Continue = 7;
	public static readonly Break = 8;
	public static readonly Return = 9;
	public static readonly BitAnd = 10;
	public static readonly BitOr = 11;
	public static readonly BitXor = 12;
	public static readonly RightShiftArithmetic = 13;
	public static readonly LeftShiftArithmetic = 14;
	public static readonly RightShiftLogical = 15;
	public static readonly OpenBracket = 16;
	public static readonly CloseBracket = 17;
	public static readonly OpenParen = 18;
	public static readonly CloseParen = 19;
	public static readonly OpenBrace = 20;
	public static readonly CloseBrace = 21;
	public static readonly Comma = 22;
	public static readonly Assign = 23;
	public static readonly QuestionMark = 24;
	public static readonly Colon = 25;
	public static readonly Ellipsis = 26;
	public static readonly Dot = 27;
	public static readonly Plus = 28;
	public static readonly Minus = 29;
	public static readonly BitNot = 30;
	public static readonly Not = 31;
	public static readonly Multiply = 32;
	public static readonly Divide = 33;
	public static readonly Modulus = 34;
	public static readonly Pow = 35;
	public static readonly Sharp = 36;
	public static readonly LessThan = 37;
	public static readonly MoreThan = 38;
	public static readonly LessThanEquals = 39;
	public static readonly MoreThanEquals = 40;
	public static readonly Equals = 41;
	public static readonly NotEquals = 42;
	public static readonly And = 43;
	public static readonly Or = 44;
	public static readonly MultiplyAssign = 45;
	public static readonly DivideAssign = 46;
	public static readonly ModulusAssign = 47;
	public static readonly PlusAssign = 48;
	public static readonly MinusAssign = 49;
	public static readonly LeftShiftArithmeticAssign = 50;
	public static readonly RightShiftArithmeticAssign = 51;
	public static readonly RightShiftLogicalAssign = 52;
	public static readonly BitAndAssign = 53;
	public static readonly BitXorAssign = 54;
	public static readonly BitOrAssign = 55;
	public static readonly LambdaStart = 56;
	public static readonly Pipe = 57;
	public static readonly BooleanLiteral = 58;
	public static readonly DecimalLiteral = 59;
	public static readonly FloatLiteral = 60;
	public static readonly StringLiteral = 61;
	public static readonly StringFormat = 62;
	public static readonly ID = 63;
	public static readonly Preprocessor = 64;
	public static readonly LineBreak = 65;
	public static readonly WhiteSpaces = 66;
	public static readonly UnexpectedCharacter = 67;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_body = 2;
	public static readonly RULE_scopeArgument = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_literal = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "body", "scopeArgument", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'if'", "'else'", "'loop'", "'in'", "'continue'", 
		"'break'", "'return'", "'and'", "'or'", "'xor'", "'>>'", "'<<'", "'>>>'", 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", "'?'", "':'", 
		"'...'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'^'", 
		"'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", 
		"'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", 
		"'|='", "'\\'", "'|'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "If", "Else", "Loop", 
		"In", "Continue", "Break", "Return", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", 
		"LeftShiftArithmetic", "RightShiftLogical", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "Comma", "Assign", 
		"QuestionMark", "Colon", "Ellipsis", "Dot", "Plus", "Minus", "BitNot", 
		"Not", "Multiply", "Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", 
		"LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", "And", "Or", 
		"MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", 
		"LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", 
		"BooleanLiteral", "DecimalLiteral", "FloatLiteral", "StringLiteral", "StringFormat", 
		"ID", "Preprocessor", "LineBreak", "WhiteSpaces", "UnexpectedCharacter",
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
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)) | (1 << (XonParser.Preprocessor - 56)) | (1 << (XonParser.LineBreak - 56)))) !== 0)) {
				{
				{
				this.state = 12;
				this.statement();
				}
				}
				this.state = 17;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.match(XonParser.If);
				this.state = 19;
				this.expression(0);
				this.state = 20;
				this.body();
				this.state = 27;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 21;
					this.match(XonParser.Else);
					this.state = 24;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 22;
						this.match(XonParser.If);
						this.state = 23;
						this.expression(0);
						}
					}

					this.state = 26;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 29;
				this.match(XonParser.Loop);
				this.state = 45;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 42;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 30;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 35;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
						case 1:
							{
							this.state = 31;
							this.match(XonParser.Comma);
							this.state = 33;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 32;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 39;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 37;
							this.match(XonParser.Comma);
							this.state = 38;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 41;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 44;
					this.expression(0);
					}
					break;
				}
				this.state = 47;
				this.body();
				}
				break;

			case 3:
				_localctx = new ScopeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.match(XonParser.ID);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 49;
					this.scopeArgument();
					this.state = 54;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 50;
						this.match(XonParser.Comma);
						this.state = 51;
						this.scopeArgument();
						}
						}
						this.state = 56;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 59;
				this.body();
				}
				break;

			case 4:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 60;
				this.match(XonParser.LineBreak);
				}
				break;

			case 5:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 61;
				this.match(XonParser.ID);
				{
				this.state = 62;
				this.match(XonParser.Assign);
				}
				this.state = 63;
				this.expression(0);
				this.state = 64;
				this.match(XonParser.LineBreak);
				}
				break;

			case 6:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 66;
				this.match(XonParser.Continue);
				this.state = 67;
				this.match(XonParser.LineBreak);
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 68;
				this.match(XonParser.Break);
				this.state = 69;
				this.match(XonParser.LineBreak);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 70;
				this.match(XonParser.Return);
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
					{
					this.state = 71;
					this.expression(0);
					}
				}

				this.state = 74;
				this.match(XonParser.LineBreak);
				}
				break;

			case 9:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 75;
				this.match(XonParser.Preprocessor);
				this.state = 76;
				this.match(XonParser.LineBreak);
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 77;
				this.expression(0);
				this.state = 78;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.OpenBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(XonParser.OpenBrace);
				this.state = 83;
				this.match(XonParser.LineBreak);
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)) | (1 << (XonParser.Preprocessor - 56)) | (1 << (XonParser.LineBreak - 56)))) !== 0)) {
					{
					{
					this.state = 84;
					this.statement();
					}
					}
					this.state = 89;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 90;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.Colon:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.match(XonParser.Colon);
				this.state = 92;
				this.statement();
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
	public scopeArgument(): ScopeArgumentContext {
		let _localctx: ScopeArgumentContext = new ScopeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_scopeArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			_localctx._name = this.match(XonParser.ID);
			this.state = 96;
			this.match(XonParser.Colon);
			this.state = 97;
			_localctx._type = this.match(XonParser.ID);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 98;
				this.match(XonParser.Assign);
				this.state = 99;
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
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 103;
				this.match(XonParser.Plus);
				this.state = 104;
				this.expression(23);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				this.match(XonParser.Minus);
				this.state = 106;
				this.expression(22);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 107;
				this.match(XonParser.BitNot);
				this.state = 108;
				this.expression(21);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 109;
				this.match(XonParser.Not);
				this.state = 110;
				this.expression(20);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 111;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 113;
				this.match(XonParser.StringFormat);
				}
				break;

			case 8:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 114;
				this.match(XonParser.OpenBracket);
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
					{
					this.state = 115;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 116;
						this.match(XonParser.Comma);
						this.state = 117;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 122;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 125;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 9:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.match(XonParser.OpenBracket);
				this.state = 127;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 128;
				this.match(XonParser.Colon);
				this.state = 129;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 130;
					this.match(XonParser.Colon);
					this.state = 131;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 134;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 10:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 136;
				this.match(XonParser.OpenBrace);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 137;
					this.match(XonParser.ID);
					this.state = 138;
					this.match(XonParser.Colon);
					this.state = 139;
					this.expression(0);
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 140;
						this.match(XonParser.Comma);
						this.state = 141;
						this.match(XonParser.ID);
						this.state = 142;
						this.match(XonParser.Colon);
						this.state = 143;
						this.expression(0);
						}
						}
						this.state = 148;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 151;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 11:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 152;
				this.match(XonParser.OpenParen);
				this.state = 153;
				this.expression(0);
				this.state = 154;
				this.match(XonParser.CloseParen);
				}
				break;

			case 12:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 156;
				this.match(XonParser.LambdaStart);
				this.state = 166;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 157;
					this.match(XonParser.ID);
					this.state = 162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 158;
						this.match(XonParser.Comma);
						this.state = 159;
						this.match(XonParser.ID);
						}
						}
						this.state = 164;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 165;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 168;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 247;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 245;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 171;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 172;
						this.match(XonParser.Pow);
						this.state = 173;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 174;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 175;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Multiply - 32)) | (1 << (XonParser.Divide - 32)) | (1 << (XonParser.Modulus - 32)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 176;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 177;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 178;
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
						this.state = 179;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 180;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 181;
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
						this.state = 182;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 183;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 184;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.LessThan - 37)) | (1 << (XonParser.MoreThan - 37)) | (1 << (XonParser.LessThanEquals - 37)) | (1 << (XonParser.MoreThanEquals - 37)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 185;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 186;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 187;
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
						this.state = 188;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 189;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 190;
						this.match(XonParser.BitAnd);
						this.state = 191;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 192;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 193;
						this.match(XonParser.BitXor);
						this.state = 194;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 195;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 196;
						this.match(XonParser.BitOr);
						this.state = 197;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 198;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 199;
						this.match(XonParser.And);
						this.state = 200;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 201;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 202;
						this.match(XonParser.Or);
						this.state = 203;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 204;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 205;
						this.match(XonParser.Pipe);
						this.state = 208;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 206;
							this.match(XonParser.ID);
							this.state = 207;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 210;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 211;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 212;
						this.match(XonParser.OpenParen);
						this.state = 221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
							{
							this.state = 213;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 218;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 214;
								this.match(XonParser.Comma);
								this.state = 215;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 220;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 223;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 224;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 225;
						this.match(XonParser.OpenBracket);
						this.state = 226;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 227;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 229;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 230;
						this.match(XonParser.OpenBracket);
						this.state = 231;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 232;
						this.match(XonParser.Colon);
						this.state = 234;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
							{
							this.state = 233;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 238;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 236;
							this.match(XonParser.Colon);
							this.state = 237;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 240;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 242;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 243;
						this.match(XonParser.Dot);
						this.state = 244;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 249;
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
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 252;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 253;
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
			return this.precpred(this._ctx, 24);

		case 1:
			return this.precpred(this._ctx, 19);

		case 2:
			return this.precpred(this._ctx, 18);

		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 16);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 12);

		case 9:
			return this.precpred(this._ctx, 11);

		case 10:
			return this.precpred(this._ctx, 10);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 28);

		case 13:
			return this.precpred(this._ctx, 27);

		case 14:
			return this.precpred(this._ctx, 26);

		case 15:
			return this.precpred(this._ctx, 25);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u0103\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x03\x05\x03\x1E" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03$\n\x03\x05\x03&\n\x03\x03" +
		"\x03\x03\x03\x05\x03*\n\x03\x03\x03\x05\x03-\n\x03\x03\x03\x05\x030\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x037\n\x03\f\x03\x0E" +
		"\x03:\v\x03\x05\x03<\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03K" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03S\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x07\x04X\n\x04\f\x04\x0E\x04[\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04`\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05g\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06y\n\x06\f\x06\x0E\x06|\v\x06\x05\x06~\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x87\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x93" +
		"\n\x06\f\x06\x0E\x06\x96\v\x06\x05\x06\x98\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xA3\n\x06\f\x06" +
		"\x0E\x06\xA6\v\x06\x03\x06\x05\x06\xA9\n\x06\x03\x06\x05\x06\xAC\n\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xD3\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06\xDB\n\x06\f\x06\x0E\x06\xDE\v\x06\x05\x06\xE0\n\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xED\n\x06\x03\x06\x03\x06\x05\x06\xF1\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06\xF8\n\x06\f\x06\x0E\x06\xFB\v\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0101\n\x07\x03\x07\x02\x02\x03" +
		"\n\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x07\x03\x02\"$\x03" +
		"\x02\x1E\x1F\x03\x02\x0F\x11\x03\x02\'*\x03\x02+,\x02\u013D\x02\x11\x03" +
		"\x02\x02\x02\x04R\x03\x02\x02\x02\x06_\x03\x02\x02\x02\ba\x03\x02\x02" +
		"\x02\n\xAB\x03\x02\x02\x02\f\u0100\x03\x02\x02\x02\x0E\x10\x05\x04\x03" +
		"\x02\x0F\x0E\x03\x02\x02\x02\x10\x13\x03\x02\x02\x02\x11\x0F\x03\x02\x02" +
		"\x02\x11\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x11\x03\x02\x02" +
		"\x02\x14\x15\x07\x05\x02\x02\x15\x16\x05\n\x06\x02\x16\x1D\x05\x06\x04" +
		"\x02\x17\x1A\x07\x06\x02\x02\x18\x19\x07\x05\x02\x02\x19\x1B\x05\n\x06" +
		"\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1C\x03\x02\x02" +
		"\x02\x1C\x1E\x05\x06\x04\x02\x1D\x17\x03\x02\x02\x02\x1D\x1E\x03\x02\x02" +
		"\x02\x1ES\x03\x02\x02\x02\x1F/\x07\x07\x02\x02 %\x07A\x02\x02!#\x07\x18" +
		"\x02\x02\"$\x07A\x02\x02#\"\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02" +
		"\x02\x02%!\x03\x02\x02\x02%&\x03\x02\x02\x02&)\x03\x02\x02\x02\'(\x07" +
		"\x18\x02\x02(*\x07A\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03" +
		"\x02\x02\x02+-\x07\b\x02\x02, \x03\x02\x02\x02,-\x03\x02\x02\x02-.\x03" +
		"\x02\x02\x02.0\x05\n\x06\x02/,\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03" +
		"\x02\x02\x021S\x05\x06\x04\x022;\x07A\x02\x0238\x05\b\x05\x0245\x07\x18" +
		"\x02\x0257\x05\b\x05\x0264\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02" +
		"\x02\x0289\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02;3\x03\x02" +
		"\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=S\x05\x06\x04\x02>S\x07C" +
		"\x02\x02?@\x07A\x02\x02@A\x07\x19\x02\x02AB\x05\n\x06\x02BC\x07C\x02\x02" +
		"CS\x03\x02\x02\x02DE\x07\t\x02\x02ES\x07C\x02\x02FG\x07\n\x02\x02GS\x07" +
		"C\x02\x02HJ\x07\v\x02\x02IK\x05\n\x06\x02JI\x03\x02\x02\x02JK\x03\x02" +
		"\x02\x02KL\x03\x02\x02\x02LS\x07C\x02\x02MN\x07B\x02\x02NS\x07C\x02\x02" +
		"OP\x05\n\x06\x02PQ\x07C\x02\x02QS\x03\x02\x02\x02R\x14\x03\x02\x02\x02" +
		"R\x1F\x03\x02\x02\x02R2\x03\x02\x02\x02R>\x03\x02\x02\x02R?\x03\x02\x02" +
		"\x02RD\x03\x02\x02\x02RF\x03\x02\x02\x02RH\x03\x02\x02\x02RM\x03\x02\x02" +
		"\x02RO\x03\x02\x02\x02S\x05\x03\x02\x02\x02TU\x07\x16\x02\x02UY\x07C\x02" +
		"\x02VX\x05\x04\x03\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02" +
		"\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\`\x07\x17" +
		"\x02\x02]^\x07\x1B\x02\x02^`\x05\x04\x03\x02_T\x03\x02\x02\x02_]\x03\x02" +
		"\x02\x02`\x07\x03\x02\x02\x02ab\x07A\x02\x02bc\x07\x1B\x02\x02cf\x07A" +
		"\x02\x02de\x07\x19\x02\x02eg\x05\n\x06\x02fd\x03\x02\x02\x02fg\x03\x02" +
		"\x02\x02g\t\x03\x02\x02\x02hi\b\x06\x01\x02ij\x07\x1E\x02\x02j\xAC\x05" +
		"\n\x06\x19kl\x07\x1F\x02\x02l\xAC\x05\n\x06\x18mn\x07 \x02\x02n\xAC\x05" +
		"\n\x06\x17op\x07!\x02\x02p\xAC\x05\n\x06\x16q\xAC\x07A\x02\x02r\xAC\x05" +
		"\f\x07\x02s\xAC\x07@\x02\x02t}\x07\x12\x02\x02uz\x05\n\x06\x02vw\x07\x18" +
		"\x02\x02wy\x05\n\x06\x02xv\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02" +
		"\x02\x02z{\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02}u\x03\x02" +
		"\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\xAC\x07\x13\x02\x02" +
		"\x80\x81\x07\x12\x02\x02\x81\x82\x05\n\x06\x02\x82\x83\x07\x1B\x02\x02" +
		"\x83\x86\x05\n\x06\x02\x84\x85\x07\x1B\x02\x02\x85\x87\x05\n\x06\x02\x86" +
		"\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88" +
		"\x89\x07\x13\x02\x02\x89\xAC\x03\x02\x02\x02\x8A\x97\x07\x16\x02\x02\x8B" +
		"\x8C\x07A\x02\x02\x8C\x8D\x07\x1B\x02\x02\x8D\x94\x05\n\x06\x02\x8E\x8F" +
		"\x07\x18\x02\x02\x8F\x90\x07A\x02\x02\x90\x91\x07\x1B\x02\x02\x91\x93" +
		"\x05\n\x06\x02\x92\x8E\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92" +
		"\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94" +
		"\x03\x02\x02\x02\x97\x8B\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99" +
		"\x03\x02\x02\x02\x99\xAC\x07\x17\x02\x02\x9A\x9B\x07\x14\x02\x02\x9B\x9C" +
		"\x05\n\x06\x02\x9C\x9D\x07\x15\x02\x02\x9D\xAC\x03\x02\x02\x02\x9E\xA8" +
		"\x07:\x02\x02\x9F\xA4\x07A\x02\x02\xA0\xA1\x07\x18\x02\x02\xA1\xA3\x07" +
		"A\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03" +
		"\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03" +
		"\x02\x02\x02\xA7\xA9\x07\x1B\x02\x02\xA8\x9F\x03\x02\x02\x02\xA8\xA9\x03" +
		"\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x05\n\x06\x03\xABh\x03\x02" +
		"\x02\x02\xABk\x03\x02\x02\x02\xABm\x03\x02\x02\x02\xABo\x03\x02\x02\x02" +
		"\xABq\x03\x02\x02\x02\xABr\x03\x02\x02\x02\xABs\x03\x02\x02\x02\xABt\x03" +
		"\x02\x02\x02\xAB\x80\x03\x02\x02\x02\xAB\x8A\x03\x02\x02\x02\xAB\x9A\x03" +
		"\x02\x02\x02\xAB\x9E\x03\x02\x02\x02\xAC\xF9\x03\x02\x02\x02\xAD\xAE\f" +
		"\x1A\x02\x02\xAE\xAF\x07%\x02\x02\xAF\xF8\x05\n\x06\x1B\xB0\xB1\f\x15" +
		"\x02\x02\xB1\xB2\t\x02\x02\x02\xB2\xF8\x05\n\x06\x16\xB3\xB4\f\x14\x02" +
		"\x02\xB4\xB5\t\x03\x02\x02\xB5\xF8\x05\n\x06\x15\xB6\xB7\f\x13\x02\x02" +
		"\xB7\xB8\t\x04\x02\x02\xB8\xF8\x05\n\x06\x14\xB9\xBA\f\x12\x02\x02\xBA" +
		"\xBB\t\x05\x02\x02\xBB\xF8\x05\n\x06\x13\xBC\xBD\f\x11\x02\x02\xBD\xBE" +
		"\t\x06\x02\x02\xBE\xF8\x05\n\x06\x12\xBF\xC0\f\x10\x02\x02\xC0\xC1\x07" +
		"\f\x02\x02\xC1\xF8\x05\n\x06\x11\xC2\xC3\f\x0F\x02\x02\xC3\xC4\x07\x0E" +
		"\x02\x02\xC4\xF8\x05\n\x06\x10\xC5\xC6\f\x0E\x02\x02\xC6\xC7\x07\r\x02" +
		"\x02\xC7\xF8\x05\n\x06\x0F\xC8\xC9\f\r\x02\x02\xC9\xCA\x07-\x02\x02\xCA" +
		"\xF8\x05\n\x06\x0E\xCB\xCC\f\f\x02\x02\xCC\xCD\x07.\x02\x02\xCD\xF8\x05" +
		"\n\x06\r\xCE\xCF\f\x04\x02\x02\xCF\xD2\x07;\x02\x02\xD0\xD1\x07A\x02\x02" +
		"\xD1\xD3\x07\x1B\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
		"\xD3\xD4\x03\x02\x02\x02\xD4\xF8\x05\n\x06\x05\xD5\xD6\f\x1E\x02\x02\xD6" +
		"\xDF\x07\x14\x02\x02\xD7\xDC\x05\n\x06\x02\xD8\xD9\x07\x18\x02\x02\xD9" +
		"\xDB\x05\n\x06\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC" +
		"\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE" +
		"\xDC\x03\x02\x02\x02\xDF\xD7\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1\xF8\x07\x15\x02\x02\xE2\xE3\f\x1D\x02\x02\xE3" +
		"\xE4\x07\x12\x02\x02\xE4\xE5\x05\n\x06\x02\xE5\xE6\x07\x13\x02\x02\xE6" +
		"\xF8\x03\x02\x02\x02\xE7\xE8\f\x1C\x02\x02\xE8\xE9\x07\x12\x02\x02\xE9" +
		"\xEA\x05\n\x06\x02\xEA\xEC\x07\x1B\x02\x02\xEB\xED\x05\n\x06\x02\xEC\xEB" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEF" +
		"\x07\x1B\x02\x02\xEF\xF1\x05\n\x06\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1" +
		"\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x07\x13\x02\x02\xF3\xF8" +
		"\x03\x02\x02\x02\xF4\xF5\f\x1B\x02\x02\xF5\xF6\x07\x1D\x02\x02\xF6\xF8" +
		"\x07A\x02\x02\xF7\xAD\x03\x02\x02\x02\xF7\xB0\x03\x02\x02\x02\xF7\xB3" +
		"\x03\x02\x02\x02\xF7\xB6\x03\x02\x02\x02\xF7\xB9\x03\x02\x02\x02\xF7\xBC" +
		"\x03\x02\x02\x02\xF7\xBF\x03\x02\x02\x02\xF7\xC2\x03\x02\x02\x02\xF7\xC5" +
		"\x03\x02\x02\x02\xF7\xC8\x03\x02\x02\x02\xF7\xCB\x03\x02\x02\x02\xF7\xCE" +
		"\x03\x02\x02\x02\xF7\xD5\x03\x02\x02\x02\xF7\xE2\x03\x02\x02\x02\xF7\xE7" +
		"\x03\x02\x02\x02\xF7\xF4\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7" +
		"\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\v\x03\x02\x02\x02\xFB\xF9" +
		"\x03\x02\x02\x02\xFC\u0101\x07=\x02\x02\xFD\u0101\x07>\x02\x02\xFE\u0101" +
		"\x07<\x02\x02\xFF\u0101\x07?\x02\x02\u0100\xFC\x03\x02\x02\x02\u0100\xFD" +
		"\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101" +
		"\r\x03\x02\x02\x02!\x11\x1A\x1D#%),/8;JRY_fz}\x86\x94\x97\xA4\xA8\xAB" +
		"\xD2\xDC\xDF\xEC\xF0\xF7\xF9\u0100";
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
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
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ScopeStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public scopeArgument(): ScopeArgumentContext[];
	public scopeArgument(i: number): ScopeArgumentContext;
	public scopeArgument(i?: number): ScopeArgumentContext | ScopeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopeArgumentContext);
		} else {
			return this.getRuleContext(i, ScopeArgumentContext);
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
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
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
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContinueStatementContext extends StatementContext {
	public Continue(): TerminalNode { return this.getToken(XonParser.Continue, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public Break(): TerminalNode { return this.getToken(XonParser.Break, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(XonParser.Return, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BodyContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(XonParser.OpenBrace, 0); }
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(XonParser.CloseBrace, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
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
	public StringFormat(): TerminalNode { return this.getToken(XonParser.StringFormat, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
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
export class ObjectExpressionContext extends ExpressionContext {
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
export class StringLiteralContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


