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
	public static readonly BitAnd = 7;
	public static readonly BitOr = 8;
	public static readonly BitXor = 9;
	public static readonly RightShiftArithmetic = 10;
	public static readonly LeftShiftArithmetic = 11;
	public static readonly RightShiftLogical = 12;
	public static readonly OpenBracket = 13;
	public static readonly CloseBracket = 14;
	public static readonly OpenParen = 15;
	public static readonly CloseParen = 16;
	public static readonly OpenBrace = 17;
	public static readonly CloseBrace = 18;
	public static readonly SemiColon = 19;
	public static readonly Comma = 20;
	public static readonly Assign = 21;
	public static readonly QuestionMark = 22;
	public static readonly Colon = 23;
	public static readonly Ellipsis = 24;
	public static readonly Dot = 25;
	public static readonly Plus = 26;
	public static readonly Minus = 27;
	public static readonly BitNot = 28;
	public static readonly Not = 29;
	public static readonly Multiply = 30;
	public static readonly Divide = 31;
	public static readonly Modulus = 32;
	public static readonly Pow = 33;
	public static readonly Sharp = 34;
	public static readonly LessThan = 35;
	public static readonly MoreThan = 36;
	public static readonly LessThanEquals = 37;
	public static readonly MoreThanEquals = 38;
	public static readonly Equals = 39;
	public static readonly NotEquals = 40;
	public static readonly And = 41;
	public static readonly Or = 42;
	public static readonly MultiplyAssign = 43;
	public static readonly DivideAssign = 44;
	public static readonly ModulusAssign = 45;
	public static readonly PlusAssign = 46;
	public static readonly MinusAssign = 47;
	public static readonly LeftShiftArithmeticAssign = 48;
	public static readonly RightShiftArithmeticAssign = 49;
	public static readonly RightShiftLogicalAssign = 50;
	public static readonly BitAndAssign = 51;
	public static readonly BitXorAssign = 52;
	public static readonly BitOrAssign = 53;
	public static readonly LambdaStart = 54;
	public static readonly Pipe = 55;
	public static readonly BooleanLiteral = 56;
	public static readonly DecimalLiteral = 57;
	public static readonly FloatLiteral = 58;
	public static readonly StringLiteral = 59;
	public static readonly CharacterLiteral = 60;
	public static readonly Preprocessor = 61;
	public static readonly LambdaParam = 62;
	public static readonly ID = 63;
	public static readonly WhiteSpaces = 64;
	public static readonly UnexpectedCharacter = 65;
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
		undefined, undefined, undefined, "'if'", "'else'", "'loop'", "'in'", "'and'", 
		"'or'", "'xor'", "'>>'", "'<<'", "'>>>'", "'['", "']'", "'('", "')'", 
		"'{'", "'}'", "';'", "','", "'='", "'?'", "':'", "'...'", "'.'", "'+'", 
		"'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", "'>'", 
		"'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'\\'", 
		"'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "If", "Else", "Loop", 
		"In", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.Preprocessor - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.Preprocessor - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
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
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.match(XonParser.If);
				this.state = 48;
				(_localctx as IfStatementContext)._ifCondition = this.expression(0);
				this.state = 49;
				this.match(XonParser.OpenBrace);
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.Preprocessor - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
					{
					{
					this.state = 50;
					(_localctx as IfStatementContext)._statement = this.statement();
					(_localctx as IfStatementContext)._ifStatements.push((_localctx as IfStatementContext)._statement);
					}
					}
					this.state = 55;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 56;
				this.match(XonParser.CloseBrace);
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 57;
					this.match(XonParser.Else);
					this.state = 60;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 58;
						this.match(XonParser.If);
						this.state = 59;
						(_localctx as IfStatementContext)._elseCondition = this.expression(0);
						}
					}

					this.state = 62;
					this.match(XonParser.OpenBrace);
					this.state = 66;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.Preprocessor - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
						{
						{
						this.state = 63;
						(_localctx as IfStatementContext)._statement = this.statement();
						(_localctx as IfStatementContext)._elseStatements.push((_localctx as IfStatementContext)._statement);
						}
						}
						this.state = 68;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 69;
					this.match(XonParser.CloseBrace);
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(XonParser.Loop);
				this.state = 88;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 85;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						this.state = 73;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 78;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
						case 1:
							{
							this.state = 74;
							this.match(XonParser.Comma);
							this.state = 76;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 75;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 82;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 80;
							this.match(XonParser.Comma);
							this.state = 81;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 84;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 87;
					this.expression(0);
					}
					break;
				}
				this.state = 90;
				this.match(XonParser.OpenBrace);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.Preprocessor - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
					{
					{
					this.state = 91;
					this.statement();
					}
					}
					this.state = 96;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 97;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 3:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 98;
				this.match(XonParser.ID);
				{
				this.state = 99;
				this.match(XonParser.Assign);
				}
				this.state = 100;
				this.expression(0);
				this.state = 101;
				this.match(XonParser.SemiColon);
				}
				break;

			case 4:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 5:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 104;
				this.expression(0);
				this.state = 105;
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
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 110;
				this.match(XonParser.Plus);
				this.state = 111;
				this.expression(22);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				this.match(XonParser.Minus);
				this.state = 113;
				this.expression(21);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 114;
				this.match(XonParser.BitNot);
				this.state = 115;
				this.expression(20);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 116;
				this.match(XonParser.Not);
				this.state = 117;
				this.expression(19);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				this.match(XonParser.OpenBracket);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
					{
					this.state = 121;
					(_localctx as ArrayLiteralExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayLiteralExpressionContext)._items.push((_localctx as ArrayLiteralExpressionContext)._expression);
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 122;
						this.match(XonParser.Comma);
						this.state = 123;
						(_localctx as ArrayLiteralExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayLiteralExpressionContext)._items.push((_localctx as ArrayLiteralExpressionContext)._expression);
						}
						}
						this.state = 128;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 131;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 8:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 132;
				this.match(XonParser.OpenBracket);
				this.state = 133;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 134;
				this.match(XonParser.Colon);
				this.state = 135;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 136;
					this.match(XonParser.Colon);
					this.state = 137;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 140;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 9:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 142;
				this.match(XonParser.OpenBrace);
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 143;
					this.match(XonParser.ID);
					this.state = 144;
					this.match(XonParser.Colon);
					this.state = 145;
					this.expression(0);
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 146;
						this.match(XonParser.Comma);
						this.state = 147;
						this.match(XonParser.ID);
						this.state = 148;
						this.match(XonParser.Colon);
						this.state = 149;
						this.expression(0);
						}
						}
						this.state = 154;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 157;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 10:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 158;
				this.match(XonParser.OpenParen);
				this.state = 159;
				this.expression(0);
				this.state = 160;
				this.match(XonParser.CloseParen);
				}
				break;

			case 11:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(XonParser.LambdaStart);
				this.state = 172;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 163;
					this.match(XonParser.ID);
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 164;
						this.match(XonParser.Comma);
						this.state = 165;
						this.match(XonParser.ID);
						}
						}
						this.state = 170;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 171;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 174;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 251;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 177;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 178;
						this.match(XonParser.Pow);
						this.state = 179;
						(_localctx as PowExpressionContext)._exponent = this.expression(24);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 180;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 181;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.Multiply - 30)) | (1 << (XonParser.Divide - 30)) | (1 << (XonParser.Modulus - 30)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 182;
						(_localctx as MulDivModExpressionContext)._right = this.expression(19);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 183;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 184;
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
						this.state = 185;
						(_localctx as AddSubExpressionContext)._right = this.expression(18);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 186;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 187;
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
						this.state = 188;
						(_localctx as BitShiftExpressionContext)._right = this.expression(17);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 189;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 190;
						_la = this._input.LA(1);
						if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.LessThan - 35)) | (1 << (XonParser.MoreThan - 35)) | (1 << (XonParser.LessThanEquals - 35)) | (1 << (XonParser.MoreThanEquals - 35)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 191;
						(_localctx as RelationalExpressionContext)._right = this.expression(16);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 192;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 193;
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
						this.state = 194;
						(_localctx as EqualityExpressionContext)._right = this.expression(15);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 195;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 196;
						this.match(XonParser.BitAnd);
						this.state = 197;
						(_localctx as BitAndExpressionContext)._right = this.expression(14);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 198;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 199;
						this.match(XonParser.BitXor);
						this.state = 200;
						(_localctx as BitXorExpressionContext)._right = this.expression(13);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 201;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 202;
						this.match(XonParser.BitOr);
						this.state = 203;
						(_localctx as BitOrExpressionContext)._right = this.expression(12);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 204;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 205;
						this.match(XonParser.And);
						this.state = 206;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(11);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 207;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 208;
						this.match(XonParser.Or);
						this.state = 209;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(10);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 210;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 211;
						this.match(XonParser.Pipe);
						this.state = 214;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
						case 1:
							{
							this.state = 212;
							this.match(XonParser.ID);
							this.state = 213;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 216;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 217;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 218;
						this.match(XonParser.OpenParen);
						this.state = 227;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
							{
							this.state = 219;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 224;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 220;
								this.match(XonParser.Comma);
								this.state = 221;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 226;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 229;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 230;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 231;
						this.match(XonParser.OpenBracket);
						this.state = 232;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 233;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 235;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 236;
						this.match(XonParser.OpenBracket);
						this.state = 237;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 238;
						this.match(XonParser.Colon);
						this.state = 240;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (XonParser.LambdaStart - 54)) | (1 << (XonParser.BooleanLiteral - 54)) | (1 << (XonParser.DecimalLiteral - 54)) | (1 << (XonParser.FloatLiteral - 54)) | (1 << (XonParser.StringLiteral - 54)) | (1 << (XonParser.CharacterLiteral - 54)) | (1 << (XonParser.ID - 54)))) !== 0)) {
							{
							this.state = 239;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 244;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 242;
							this.match(XonParser.Colon);
							this.state = 243;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 246;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 248;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 249;
						this.match(XonParser.Dot);
						this.state = 250;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 255;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_literal);
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 258;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.CharacterLiteral:
				_localctx = new CharacterLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 259;
				this.match(XonParser.CharacterLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 260;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03C\u010A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x05" +
		"\x03\x1F\n\x03\x03\x03\x03\x03\x03\x03\x07\x03$\n\x03\f\x03\x0E\x03\'" +
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"0\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x056\n\x05\f\x05\x0E\x059" +
		"\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05?\n\x05\x03\x05\x03\x05" +
		"\x07\x05C\n\x05\f\x05\x0E\x05F\v\x05\x03\x05\x05\x05I\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05O\n\x05\x05\x05Q\n\x05\x03\x05\x03\x05\x05" +
		"\x05U\n\x05\x03\x05\x05\x05X\n\x05\x03\x05\x05\x05[\n\x05\x03\x05\x03" +
		"\x05\x07\x05_\n\x05\f\x05\x0E\x05b\v\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05n\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x7F\n\x06\f\x06\x0E\x06" +
		"\x82\v\x06\x05\x06\x84\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\x8D\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x99\n\x06\f\x06\x0E\x06" +
		"\x9C\v\x06\x05\x06\x9E\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06\xA9\n\x06\f\x06\x0E\x06\xAC\v\x06" +
		"\x03\x06\x05\x06\xAF\n\x06\x03\x06\x05\x06\xB2\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xD9" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xE1\n\x06" +
		"\f\x06\x0E\x06\xE4\v\x06\x05\x06\xE6\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF3" +
		"\n\x06\x03\x06\x03\x06\x05\x06\xF7\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06\xFE\n\x06\f\x06\x0E\x06\u0101\v\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u0108\n\x07\x03\x07\x02\x02\x03\n\b\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x07\x03\x02 \"\x03\x02\x1C\x1D" +
		"\x03\x02\f\x0E\x03\x02%(\x03\x02)*\x02\u0142\x02\x12\x03\x02\x02\x02\x04" +
		"\x15\x03\x02\x02\x02\x06*\x03\x02\x02\x02\bm\x03\x02\x02\x02\n\xB1\x03" +
		"\x02\x02\x02\f\u0107\x03\x02\x02\x02\x0E\x11\x05\b\x05\x02\x0F\x11\x05" +
		"\x04\x03\x02\x10\x0E\x03\x02\x02\x02\x10\x0F\x03\x02\x02\x02\x11\x14\x03" +
		"\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x03\x03" +
		"\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x1E\x07A\x02\x02\x16\x1B\x05" +
		"\x06\x04\x02\x17\x18\x07\x16\x02\x02\x18\x1A\x05\x06\x04\x02\x19\x17\x03" +
		"\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03" +
		"\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x16\x03" +
		"\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F \x03\x02\x02\x02 %\x07\x13\x02" +
		"\x02!$\x05\b\x05\x02\"$\x05\x04\x03\x02#!\x03\x02\x02\x02#\"\x03\x02\x02" +
		"\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&(\x03\x02" +
		"\x02\x02\'%\x03\x02\x02\x02()\x07\x14\x02\x02)\x05\x03\x02\x02\x02*+\x07" +
		"A\x02\x02+,\x07\x19\x02\x02,/\x07A\x02\x02-.\x07\x17\x02\x02.0\x05\n\x06" +
		"\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x07\x03\x02\x02\x0212\x07\x05" +
		"\x02\x0223\x05\n\x06\x0237\x07\x13\x02\x0246\x05\b\x05\x0254\x03\x02\x02" +
		"\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02" +
		"\x0297\x03\x02\x02\x02:H\x07\x14\x02\x02;>\x07\x06\x02\x02<=\x07\x05\x02" +
		"\x02=?\x05\n\x06\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x03\x02\x02" +
		"\x02@D\x07\x13\x02\x02AC\x05\b\x05\x02BA\x03\x02\x02\x02CF\x03\x02\x02" +
		"\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x03\x02\x02\x02FD\x03\x02\x02" +
		"\x02GI\x07\x14\x02\x02H;\x03\x02\x02\x02HI\x03\x02\x02\x02In\x03\x02\x02" +
		"\x02JZ\x07\x07\x02\x02KP\x07A\x02\x02LN\x07\x16\x02\x02MO\x07A\x02\x02" +
		"NM\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PL\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02QT\x03\x02\x02\x02RS\x07\x16\x02\x02SU\x07A\x02\x02" +
		"TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x07\b\x02\x02" +
		"WK\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x05\n\x06\x02" +
		"ZW\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\`\x07\x13\x02" +
		"\x02]_\x05\b\x05\x02^]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02" +
		"\x02`a\x03\x02\x02\x02ac\x03\x02\x02\x02b`\x03\x02\x02\x02cn\x07\x14\x02" +
		"\x02de\x07A\x02\x02ef\x07\x17\x02\x02fg\x05\n\x06\x02gh\x07\x15\x02\x02" +
		"hn\x03\x02\x02\x02in\x07?\x02\x02jk\x05\n\x06\x02kl\x07\x15\x02\x02ln" +
		"\x03\x02\x02\x02m1\x03\x02\x02\x02mJ\x03\x02\x02\x02md\x03\x02\x02\x02" +
		"mi\x03\x02\x02\x02mj\x03\x02\x02\x02n\t\x03\x02\x02\x02op\b\x06\x01\x02" +
		"pq\x07\x1C\x02\x02q\xB2\x05\n\x06\x18rs\x07\x1D\x02\x02s\xB2\x05\n\x06" +
		"\x17tu\x07\x1E\x02\x02u\xB2\x05\n\x06\x16vw\x07\x1F\x02\x02w\xB2\x05\n" +
		"\x06\x15x\xB2\x07A\x02\x02y\xB2\x05\f\x07\x02z\x83\x07\x0F\x02\x02{\x80" +
		"\x05\n\x06\x02|}\x07\x16\x02\x02}\x7F\x05\n\x06\x02~|\x03\x02\x02\x02" +
		"\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02" +
		"\x81\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83{\x03\x02\x02\x02" +
		"\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\xB2\x07\x10\x02\x02" +
		"\x86\x87\x07\x0F\x02\x02\x87\x88\x05\n\x06\x02\x88\x89\x07\x19\x02\x02" +
		"\x89\x8C\x05\n\x06\x02\x8A\x8B\x07\x19\x02\x02\x8B\x8D\x05\n\x06\x02\x8C" +
		"\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E" +
		"\x8F\x07\x10\x02\x02\x8F\xB2\x03\x02\x02\x02\x90\x9D\x07\x13\x02\x02\x91" +
		"\x92\x07A\x02\x02\x92\x93\x07\x19\x02\x02\x93\x9A\x05\n\x06\x02\x94\x95" +
		"\x07\x16\x02\x02\x95\x96\x07A\x02\x02\x96\x97\x07\x19\x02\x02\x97\x99" +
		"\x05\n\x06\x02\x98\x94\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98" +
		"\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A" +
		"\x03\x02\x02\x02\x9D\x91\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F" +
		"\x03\x02\x02\x02\x9F\xB2\x07\x14\x02\x02\xA0\xA1\x07\x11\x02\x02\xA1\xA2" +
		"\x05\n\x06\x02\xA2\xA3\x07\x12\x02\x02\xA3\xB2\x03\x02\x02\x02\xA4\xAE" +
		"\x078\x02\x02\xA5\xAA\x07A\x02\x02\xA6\xA7\x07\x16\x02\x02\xA7\xA9\x07" +
		"A\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03" +
		"\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03" +
		"\x02\x02\x02\xAD\xAF\x07\x19\x02\x02\xAE\xA5\x03\x02\x02\x02\xAE\xAF\x03" +
		"\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x05\n\x06\x03\xB1o\x03\x02" +
		"\x02\x02\xB1r\x03\x02\x02\x02\xB1t\x03\x02\x02\x02\xB1v\x03\x02\x02\x02" +
		"\xB1x\x03\x02\x02\x02\xB1y\x03\x02\x02\x02\xB1z\x03\x02\x02\x02\xB1\x86" +
		"\x03\x02\x02\x02\xB1\x90\x03\x02\x02\x02\xB1\xA0\x03\x02\x02\x02\xB1\xA4" +
		"\x03\x02\x02\x02\xB2\xFF\x03\x02\x02\x02\xB3\xB4\f\x19\x02\x02\xB4\xB5" +
		"\x07#\x02\x02\xB5\xFE\x05\n\x06\x1A\xB6\xB7\f\x14\x02\x02\xB7\xB8\t\x02" +
		"\x02\x02\xB8\xFE\x05\n\x06\x15\xB9\xBA\f\x13\x02\x02\xBA\xBB\t\x03\x02" +
		"\x02\xBB\xFE\x05\n\x06\x14\xBC\xBD\f\x12\x02\x02\xBD\xBE\t\x04\x02\x02" +
		"\xBE\xFE\x05\n\x06\x13\xBF\xC0\f\x11\x02\x02\xC0\xC1\t\x05\x02\x02\xC1" +
		"\xFE\x05\n\x06\x12\xC2\xC3\f\x10\x02\x02\xC3\xC4\t\x06\x02\x02\xC4\xFE" +
		"\x05\n\x06\x11\xC5\xC6\f\x0F\x02\x02\xC6\xC7\x07\t\x02\x02\xC7\xFE\x05" +
		"\n\x06\x10\xC8\xC9\f\x0E\x02\x02\xC9\xCA\x07\v\x02\x02\xCA\xFE\x05\n\x06" +
		"\x0F\xCB\xCC\f\r\x02\x02\xCC\xCD\x07\n\x02\x02\xCD\xFE\x05\n\x06\x0E\xCE" +
		"\xCF\f\f\x02\x02\xCF\xD0\x07+\x02\x02\xD0\xFE\x05\n\x06\r\xD1\xD2\f\v" +
		"\x02\x02\xD2\xD3\x07,\x02\x02\xD3\xFE\x05\n\x06\f\xD4\xD5\f\x04\x02\x02" +
		"\xD5\xD8\x079\x02\x02\xD6\xD7\x07A\x02\x02\xD7\xD9\x07\x19\x02\x02\xD8" +
		"\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xFE\x05\n\x06\x05\xDB\xDC\f\x1D\x02\x02\xDC\xE5\x07\x11\x02\x02\xDD\xE2" +
		"\x05\n\x06\x02\xDE\xDF\x07\x16\x02\x02\xDF\xE1\x05\n\x06\x02\xE0\xDE\x03" +
		"\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03" +
		"\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xDD\x03" +
		"\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xFE\x07" +
		"\x12\x02\x02\xE8\xE9\f\x1C\x02\x02\xE9\xEA\x07\x0F\x02\x02\xEA\xEB\x05" +
		"\n\x06\x02\xEB\xEC\x07\x10\x02\x02\xEC\xFE\x03\x02\x02\x02\xED\xEE\f\x1B" +
		"\x02\x02\xEE\xEF\x07\x0F\x02\x02\xEF\xF0\x05\n\x06\x02\xF0\xF2\x07\x19" +
		"\x02\x02\xF1\xF3\x05\n\x06\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF5\x07\x19\x02\x02\xF5\xF7\x05\n" +
		"\x06\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8\xF9\x07\x10\x02\x02\xF9\xFE\x03\x02\x02\x02\xFA\xFB\f\x1A" +
		"\x02\x02\xFB\xFC\x07\x1B\x02\x02\xFC\xFE\x07A\x02\x02\xFD\xB3\x03\x02" +
		"\x02\x02\xFD\xB6\x03\x02\x02\x02\xFD\xB9\x03\x02\x02\x02\xFD\xBC\x03\x02" +
		"\x02\x02\xFD\xBF\x03\x02\x02\x02\xFD\xC2\x03\x02\x02\x02\xFD\xC5\x03\x02" +
		"\x02\x02\xFD\xC8\x03\x02\x02\x02\xFD\xCB\x03\x02\x02\x02\xFD\xCE\x03\x02" +
		"\x02\x02\xFD\xD1\x03\x02\x02\x02\xFD\xD4\x03\x02\x02\x02\xFD\xDB\x03\x02" +
		"\x02\x02\xFD\xE8\x03\x02\x02\x02\xFD\xED\x03\x02\x02\x02\xFD\xFA\x03\x02" +
		"\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03" +
		"\x02\x02\x02\u0100\v\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0108" +
		"\x07;\x02\x02\u0103\u0108\x07<\x02\x02\u0104\u0108\x07:\x02\x02\u0105" +
		"\u0108\x07>\x02\x02\u0106\u0108\x07=\x02\x02\u0107\u0102\x03\x02\x02\x02" +
		"\u0107\u0103\x03\x02\x02\x02\u0107\u0104\x03\x02\x02\x02\u0107\u0105\x03" +
		"\x02\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\r\x03\x02\x02\x02$\x10" +
		"\x12\x1B\x1E#%/7>DHNPTWZ`m\x80\x83\x8C\x9A\x9D\xAA\xAE\xB1\xD8\xE2\xE5" +
		"\xF2\xF6\xFD\xFF\u0107";
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
	public _ifCondition: ExpressionContext;
	public _statement: StatementContext;
	public _ifStatements: StatementContext[] = [];
	public _elseCondition: ExpressionContext;
	public _elseStatements: StatementContext[] = [];
	public If(): TerminalNode[];
	public If(i: number): TerminalNode;
	public If(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.If);
		} else {
			return this.getToken(XonParser.If, i);
		}
	}
	public OpenBrace(): TerminalNode[];
	public OpenBrace(i: number): TerminalNode;
	public OpenBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.OpenBrace);
		} else {
			return this.getToken(XonParser.OpenBrace, i);
		}
	}
	public CloseBrace(): TerminalNode[];
	public CloseBrace(i: number): TerminalNode;
	public CloseBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.CloseBrace);
		} else {
			return this.getToken(XonParser.CloseBrace, i);
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
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
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


