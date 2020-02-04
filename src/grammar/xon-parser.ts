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
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)) | (1 << (XonParser.Preprocessor - 56)) | (1 << (XonParser.LineBreak - 56)))) !== 0)) {
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
			this.state = 31;
			this.match(XonParser.LineBreak);
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)) | (1 << (XonParser.Preprocessor - 56)) | (1 << (XonParser.LineBreak - 56)))) !== 0)) {
				{
				this.state = 34;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 32;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 33;
					this.scope();
					}
					break;
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 39;
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
			this.state = 41;
			_localctx._name = this.match(XonParser.ID);
			this.state = 42;
			this.match(XonParser.Colon);
			this.state = 43;
			_localctx._type = this.match(XonParser.ID);
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 44;
				this.match(XonParser.Assign);
				this.state = 45;
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
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.match(XonParser.If);
				this.state = 49;
				(_localctx as IfStatementContext)._ifCondition = this.expression(0);
				this.state = 61;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OpenBrace:
					{
					this.state = 50;
					this.match(XonParser.OpenBrace);
					this.state = 51;
					this.match(XonParser.LineBreak);
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 52;
						(_localctx as IfStatementContext)._statement = this.statement();
						(_localctx as IfStatementContext)._ifStatements.push((_localctx as IfStatementContext)._statement);
						}
						}
						this.state = 55;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)) | (1 << (XonParser.Preprocessor - 56)) | (1 << (XonParser.LineBreak - 56)))) !== 0));
					this.state = 57;
					this.match(XonParser.CloseBrace);
					}
					break;
				case XonParser.Colon:
					{
					this.state = 59;
					this.match(XonParser.Colon);
					this.state = 60;
					(_localctx as IfStatementContext)._statement = this.statement();
					(_localctx as IfStatementContext)._ifStatements.push((_localctx as IfStatementContext)._statement);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 81;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 63;
					this.match(XonParser.Else);
					this.state = 66;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 64;
						this.match(XonParser.If);
						this.state = 65;
						(_localctx as IfStatementContext)._elseCondition = this.expression(0);
						}
					}

					this.state = 79;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OpenBrace:
						{
						this.state = 68;
						this.match(XonParser.OpenBrace);
						this.state = 69;
						this.match(XonParser.LineBreak);
						this.state = 71;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 70;
							(_localctx as IfStatementContext)._statement = this.statement();
							(_localctx as IfStatementContext)._elseStatements.push((_localctx as IfStatementContext)._statement);
							}
							}
							this.state = 73;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)) | (1 << (XonParser.Preprocessor - 56)) | (1 << (XonParser.LineBreak - 56)))) !== 0));
						this.state = 75;
						this.match(XonParser.CloseBrace);
						}
						break;
					case XonParser.Colon:
						{
						this.state = 77;
						this.match(XonParser.Colon);
						this.state = 78;
						(_localctx as IfStatementContext)._statement = this.statement();
						(_localctx as IfStatementContext)._elseStatements.push((_localctx as IfStatementContext)._statement);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.match(XonParser.Loop);
				this.state = 99;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 96;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						this.state = 84;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 89;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
						case 1:
							{
							this.state = 85;
							this.match(XonParser.Comma);
							this.state = 87;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 86;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 93;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 91;
							this.match(XonParser.Comma);
							this.state = 92;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 95;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 98;
					this.expression(0);
					}
					break;
				}
				this.state = 112;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OpenBrace:
					{
					this.state = 101;
					this.match(XonParser.OpenBrace);
					this.state = 102;
					this.match(XonParser.LineBreak);
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)) | (1 << (XonParser.Preprocessor - 56)) | (1 << (XonParser.LineBreak - 56)))) !== 0)) {
						{
						{
						this.state = 103;
						this.statement();
						}
						}
						this.state = 108;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 109;
					this.match(XonParser.CloseBrace);
					}
					break;
				case XonParser.Colon:
					{
					this.state = 110;
					this.match(XonParser.Colon);
					this.state = 111;
					this.statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.match(XonParser.LineBreak);
				}
				break;

			case 4:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 115;
				this.match(XonParser.ID);
				{
				this.state = 116;
				this.match(XonParser.Assign);
				}
				this.state = 117;
				this.expression(0);
				this.state = 118;
				this.match(XonParser.LineBreak);
				}
				break;

			case 5:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 120;
				this.match(XonParser.Continue);
				this.state = 121;
				this.match(XonParser.LineBreak);
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 122;
				this.match(XonParser.Break);
				this.state = 123;
				this.match(XonParser.LineBreak);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 124;
				this.match(XonParser.Return);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
					{
					this.state = 125;
					this.expression(0);
					}
				}

				this.state = 128;
				this.match(XonParser.LineBreak);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 129;
				this.match(XonParser.Preprocessor);
				this.state = 130;
				this.match(XonParser.LineBreak);
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 131;
				this.expression(0);
				this.state = 132;
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
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 137;
				this.match(XonParser.Plus);
				this.state = 138;
				this.expression(23);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 139;
				this.match(XonParser.Minus);
				this.state = 140;
				this.expression(22);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 141;
				this.match(XonParser.BitNot);
				this.state = 142;
				this.expression(21);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 143;
				this.match(XonParser.Not);
				this.state = 144;
				this.expression(20);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 147;
				this.match(XonParser.StringFormat);
				}
				break;

			case 8:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 148;
				this.match(XonParser.OpenBracket);
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
					{
					this.state = 149;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 150;
						this.match(XonParser.Comma);
						this.state = 151;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 156;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 159;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 9:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 160;
				this.match(XonParser.OpenBracket);
				this.state = 161;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 162;
				this.match(XonParser.Colon);
				this.state = 163;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 164;
					this.match(XonParser.Colon);
					this.state = 165;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 168;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 10:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 170;
				this.match(XonParser.OpenBrace);
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 171;
					this.match(XonParser.ID);
					this.state = 172;
					this.match(XonParser.Colon);
					this.state = 173;
					this.expression(0);
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 174;
						this.match(XonParser.Comma);
						this.state = 175;
						this.match(XonParser.ID);
						this.state = 176;
						this.match(XonParser.Colon);
						this.state = 177;
						this.expression(0);
						}
						}
						this.state = 182;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 185;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 11:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 186;
				this.match(XonParser.OpenParen);
				this.state = 187;
				this.expression(0);
				this.state = 188;
				this.match(XonParser.CloseParen);
				}
				break;

			case 12:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 190;
				this.match(XonParser.LambdaStart);
				this.state = 200;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 191;
					this.match(XonParser.ID);
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 192;
						this.match(XonParser.Comma);
						this.state = 193;
						this.match(XonParser.ID);
						}
						}
						this.state = 198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 199;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 202;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 281;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 279;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 205;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 206;
						this.match(XonParser.Pow);
						this.state = 207;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 208;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 209;
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
						this.state = 210;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 211;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 212;
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
						this.state = 213;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 214;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 215;
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
						this.state = 216;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 217;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 218;
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
						this.state = 219;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 220;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 221;
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
						this.state = 222;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 223;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 224;
						this.match(XonParser.BitAnd);
						this.state = 225;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 226;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 227;
						this.match(XonParser.BitXor);
						this.state = 228;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 229;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 230;
						this.match(XonParser.BitOr);
						this.state = 231;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 232;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 233;
						this.match(XonParser.And);
						this.state = 234;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 235;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 236;
						this.match(XonParser.Or);
						this.state = 237;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 238;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 239;
						this.match(XonParser.Pipe);
						this.state = 242;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
						case 1:
							{
							this.state = 240;
							this.match(XonParser.ID);
							this.state = 241;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 244;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 245;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 246;
						this.match(XonParser.OpenParen);
						this.state = 255;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
							{
							this.state = 247;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 252;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 248;
								this.match(XonParser.Comma);
								this.state = 249;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 254;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 257;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 258;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 259;
						this.match(XonParser.OpenBracket);
						this.state = 260;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 261;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 263;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 264;
						this.match(XonParser.OpenBracket);
						this.state = 265;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 266;
						this.match(XonParser.Colon);
						this.state = 268;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.BitNot) | (1 << XonParser.Not))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (XonParser.LambdaStart - 56)) | (1 << (XonParser.BooleanLiteral - 56)) | (1 << (XonParser.DecimalLiteral - 56)) | (1 << (XonParser.FloatLiteral - 56)) | (1 << (XonParser.StringLiteral - 56)) | (1 << (XonParser.StringFormat - 56)) | (1 << (XonParser.ID - 56)))) !== 0)) {
							{
							this.state = 267;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 272;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 270;
							this.match(XonParser.Colon);
							this.state = 271;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 274;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 276;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 277;
						this.match(XonParser.Dot);
						this.state = 278;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
			this.state = 288;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 284;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 285;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 286;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 287;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u0125\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x05" +
		"\x03\x1F\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03%\n\x03\f\x03\x0E" +
		"\x03(\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x041\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x06\x058\n\x05\r\x05" +
		"\x0E\x059\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05@\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05E\n\x05\x03\x05\x03\x05\x03\x05\x06\x05J\n\x05\r\x05\x0E" +
		"\x05K\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05R\n\x05\x05\x05T\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05Z\n\x05\x05\x05\\\n\x05\x03\x05\x03" +
		"\x05\x05\x05`\n\x05\x03\x05\x05\x05c\n\x05\x03\x05\x05\x05f\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x07\x05k\n\x05\f\x05\x0E\x05n\v\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05s\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x81\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x89\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x9B\n\x06\f\x06" +
		"\x0E\x06\x9E\v\x06\x05\x06\xA0\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xA9\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xB5\n\x06\f\x06" +
		"\x0E\x06\xB8\v\x06\x05\x06\xBA\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xC5\n\x06\f\x06\x0E\x06\xC8" +
		"\v\x06\x03\x06\x05\x06\xCB\n\x06\x03\x06\x05\x06\xCE\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\xF5\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\xFD\n\x06\f\x06\x0E\x06\u0100\v\x06\x05\x06\u0102\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\u010F\n\x06\x03\x06\x03\x06\x05\x06\u0113\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\u011A\n\x06\f\x06\x0E\x06\u011D\v\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0123\n\x07\x03\x07\x02\x02\x03" +
		"\n\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x07\x03\x02\"$\x03" +
		"\x02\x1E\x1F\x03\x02\x0F\x11\x03\x02\'*\x03\x02+,\x02\u0165\x02\x12\x03" +
		"\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06+\x03\x02\x02\x02\b\x88\x03\x02" +
		"\x02\x02\n\xCD\x03\x02\x02\x02\f\u0122\x03\x02\x02\x02\x0E\x11\x05\b\x05" +
		"\x02\x0F\x11\x05\x04\x03\x02\x10\x0E\x03\x02\x02\x02\x10\x0F\x03\x02\x02" +
		"\x02\x11\x14\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02" +
		"\x02\x13\x03\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x1E\x07A\x02" +
		"\x02\x16\x1B\x05\x06\x04\x02\x17\x18\x07\x18\x02\x02\x18\x1A\x05\x06\x04" +
		"\x02\x19\x17\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02" +
		"\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02" +
		"\x02\x1E\x16\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F \x03\x02\x02" +
		"\x02 !\x07\x16\x02\x02!&\x07C\x02\x02\"%\x05\b\x05\x02#%\x05\x04\x03\x02" +
		"$\"\x03\x02\x02\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02" +
		"\x02&\'\x03\x02\x02\x02\')\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07\x17" +
		"\x02\x02*\x05\x03\x02\x02\x02+,\x07A\x02\x02,-\x07\x1B\x02\x02-0\x07A" +
		"\x02\x02./\x07\x19\x02\x02/1\x05\n\x06\x020.\x03\x02\x02\x0201\x03\x02" +
		"\x02\x021\x07\x03\x02\x02\x0223\x07\x05\x02\x023?\x05\n\x06\x0245\x07" +
		"\x16\x02\x0257\x07C\x02\x0268\x05\b\x05\x0276\x03\x02\x02\x0289\x03\x02" +
		"\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x07\x17" +
		"\x02\x02<@\x03\x02\x02\x02=>\x07\x1B\x02\x02>@\x05\b\x05\x02?4\x03\x02" +
		"\x02\x02?=\x03\x02\x02\x02@S\x03\x02\x02\x02AD\x07\x06\x02\x02BC\x07\x05" +
		"\x02\x02CE\x05\n\x06\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EQ\x03\x02" +
		"\x02\x02FG\x07\x16\x02\x02GI\x07C\x02\x02HJ\x05\b\x05\x02IH\x03\x02\x02" +
		"\x02JK\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x03\x02\x02" +
		"\x02MN\x07\x17\x02\x02NR\x03\x02\x02\x02OP\x07\x1B\x02\x02PR\x05\b\x05" +
		"\x02QF\x03\x02\x02\x02QO\x03\x02\x02\x02RT\x03\x02\x02\x02SA\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02T\x89\x03\x02\x02\x02Ue\x07\x07\x02\x02V[\x07A\x02" +
		"\x02WY\x07\x18\x02\x02XZ\x07A\x02\x02YX\x03\x02\x02\x02YZ\x03\x02\x02" +
		"\x02Z\\\x03\x02\x02\x02[W\x03\x02\x02\x02[\\\x03\x02\x02\x02\\_\x03\x02" +
		"\x02\x02]^\x07\x18\x02\x02^`\x07A\x02\x02_]\x03\x02\x02\x02_`\x03\x02" +
		"\x02\x02`a\x03\x02\x02\x02ac\x07\b\x02\x02bV\x03\x02\x02\x02bc\x03\x02" +
		"\x02\x02cd\x03\x02\x02\x02df\x05\n\x06\x02eb\x03\x02\x02\x02ef\x03\x02" +
		"\x02\x02fr\x03\x02\x02\x02gh\x07\x16\x02\x02hl\x07C\x02\x02ik\x05\b\x05" +
		"\x02ji\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02" +
		"\x02mo\x03\x02\x02\x02nl\x03\x02\x02\x02os\x07\x17\x02\x02pq\x07\x1B\x02" +
		"\x02qs\x05\b\x05\x02rg\x03\x02\x02\x02rp\x03\x02\x02\x02s\x89\x03\x02" +
		"\x02\x02t\x89\x07C\x02\x02uv\x07A\x02\x02vw\x07\x19\x02\x02wx\x05\n\x06" +
		"\x02xy\x07C\x02\x02y\x89\x03\x02\x02\x02z{\x07\t\x02\x02{\x89\x07C\x02" +
		"\x02|}\x07\n\x02\x02}\x89\x07C\x02\x02~\x80\x07\v\x02\x02\x7F\x81\x05" +
		"\n\x06\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03" +
		"\x02\x02\x02\x82\x89\x07C\x02\x02\x83\x84\x07B\x02\x02\x84\x89\x07C\x02" +
		"\x02\x85\x86\x05\n\x06\x02\x86\x87\x07C\x02\x02\x87\x89\x03\x02\x02\x02" +
		"\x882\x03\x02\x02\x02\x88U\x03\x02\x02\x02\x88t\x03\x02\x02\x02\x88u\x03" +
		"\x02\x02\x02\x88z\x03\x02\x02\x02\x88|\x03\x02\x02\x02\x88~\x03\x02\x02" +
		"\x02\x88\x83\x03\x02\x02\x02\x88\x85\x03\x02\x02\x02\x89\t\x03\x02\x02" +
		"\x02\x8A\x8B\b\x06\x01\x02\x8B\x8C\x07\x1E\x02\x02\x8C\xCE\x05\n\x06\x19" +
		"\x8D\x8E\x07\x1F\x02\x02\x8E\xCE\x05\n\x06\x18\x8F\x90\x07 \x02\x02\x90" +
		"\xCE\x05\n\x06\x17\x91\x92\x07!\x02\x02\x92\xCE\x05\n\x06\x16\x93\xCE" +
		"\x07A\x02\x02\x94\xCE\x05\f\x07\x02\x95\xCE\x07@\x02\x02\x96\x9F\x07\x12" +
		"\x02\x02\x97\x9C\x05\n\x06\x02\x98\x99\x07\x18\x02\x02\x99\x9B\x05\n\x06" +
		"\x02\x9A\x98\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02" +
		"\x02\x9C\x9D\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02" +
		"\x02\x9F\x97\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02" +
		"\x02\xA1\xCE\x07\x13\x02\x02\xA2\xA3\x07\x12\x02\x02\xA3\xA4\x05\n\x06" +
		"\x02\xA4\xA5\x07\x1B\x02\x02\xA5\xA8\x05\n\x06\x02\xA6\xA7\x07\x1B\x02" +
		"\x02\xA7\xA9\x05\n\x06\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02" +
		"\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x07\x13\x02\x02\xAB\xCE\x03\x02\x02" +
		"\x02\xAC\xB9\x07\x16\x02\x02\xAD\xAE\x07A\x02\x02\xAE\xAF\x07\x1B\x02" +
		"\x02\xAF\xB6\x05\n\x06\x02\xB0\xB1\x07\x18\x02\x02\xB1\xB2\x07A\x02\x02" +
		"\xB2\xB3\x07\x1B\x02\x02\xB3\xB5\x05\n\x06\x02\xB4\xB0\x03\x02\x02\x02" +
		"\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02" +
		"\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xAD\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xCE\x07\x17\x02\x02" +
		"\xBC\xBD\x07\x14\x02\x02\xBD\xBE\x05\n\x06\x02\xBE\xBF\x07\x15\x02\x02" +
		"\xBF\xCE\x03\x02\x02\x02\xC0\xCA\x07:\x02\x02\xC1\xC6\x07A\x02\x02\xC2" +
		"\xC3\x07\x18\x02\x02\xC3\xC5\x07A\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5" +
		"\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7" +
		"\xC9\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCB\x07\x1B\x02\x02\xCA" +
		"\xC1\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC" +
		"\xCE\x05\n\x06\x03\xCD\x8A\x03\x02\x02\x02\xCD\x8D\x03\x02\x02\x02\xCD" +
		"\x8F\x03\x02\x02\x02\xCD\x91\x03\x02\x02\x02\xCD\x93\x03\x02\x02\x02\xCD" +
		"\x94\x03\x02\x02\x02\xCD\x95\x03\x02\x02\x02\xCD\x96\x03\x02\x02\x02\xCD" +
		"\xA2\x03\x02\x02\x02\xCD\xAC\x03\x02\x02\x02\xCD\xBC\x03\x02\x02\x02\xCD" +
		"\xC0\x03\x02\x02\x02\xCE\u011B\x03\x02\x02\x02\xCF\xD0\f\x1A\x02\x02\xD0" +
		"\xD1\x07%\x02\x02\xD1\u011A\x05\n\x06\x1B\xD2\xD3\f\x15\x02\x02\xD3\xD4" +
		"\t\x02\x02\x02\xD4\u011A\x05\n\x06\x16\xD5\xD6\f\x14\x02\x02\xD6\xD7\t" +
		"\x03\x02\x02\xD7\u011A\x05\n\x06\x15\xD8\xD9\f\x13\x02\x02\xD9\xDA\t\x04" +
		"\x02\x02\xDA\u011A\x05\n\x06\x14\xDB\xDC\f\x12\x02\x02\xDC\xDD\t\x05\x02" +
		"\x02\xDD\u011A\x05\n\x06\x13\xDE\xDF\f\x11\x02\x02\xDF\xE0\t\x06\x02\x02" +
		"\xE0\u011A\x05\n\x06\x12\xE1\xE2\f\x10\x02\x02\xE2\xE3\x07\f\x02\x02\xE3" +
		"\u011A\x05\n\x06\x11\xE4\xE5\f\x0F\x02\x02\xE5\xE6\x07\x0E\x02\x02\xE6" +
		"\u011A\x05\n\x06\x10\xE7\xE8\f\x0E\x02\x02\xE8\xE9\x07\r\x02\x02\xE9\u011A" +
		"\x05\n\x06\x0F\xEA\xEB\f\r\x02\x02\xEB\xEC\x07-\x02\x02\xEC\u011A\x05" +
		"\n\x06\x0E\xED\xEE\f\f\x02\x02\xEE\xEF\x07.\x02\x02\xEF\u011A\x05\n\x06" +
		"\r\xF0\xF1\f\x04\x02\x02\xF1\xF4\x07;\x02\x02\xF2\xF3\x07A\x02\x02\xF3" +
		"\xF5\x07\x1B\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5" +
		"\xF6\x03\x02\x02\x02\xF6\u011A\x05\n\x06\x05\xF7\xF8\f\x1E\x02\x02\xF8" +
		"\u0101\x07\x14\x02\x02\xF9\xFE\x05\n\x06\x02\xFA\xFB\x07\x18\x02\x02\xFB" +
		"\xFD\x05\n\x06\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE" +
		"\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02" +
		"\u0100\xFE\x03\x02\x02\x02\u0101\xF9\x03\x02\x02\x02\u0101\u0102\x03\x02" +
		"\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u011A\x07\x15\x02\x02\u0104" +
		"\u0105\f\x1D\x02\x02\u0105\u0106\x07\x12\x02\x02\u0106\u0107\x05\n\x06" +
		"\x02\u0107\u0108\x07\x13\x02\x02\u0108\u011A\x03\x02\x02\x02\u0109\u010A" +
		"\f\x1C\x02\x02\u010A\u010B\x07\x12\x02\x02\u010B\u010C\x05\n\x06\x02\u010C" +
		"\u010E\x07\x1B\x02\x02\u010D\u010F\x05\n\x06\x02\u010E\u010D\x03\x02\x02" +
		"\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u0111" +
		"\x07\x1B\x02\x02\u0111\u0113\x05\n\x06\x02\u0112\u0110\x03\x02\x02\x02" +
		"\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x07" +
		"\x13\x02\x02\u0115\u011A\x03\x02\x02\x02\u0116\u0117\f\x1B\x02\x02\u0117" +
		"\u0118\x07\x1D\x02\x02\u0118\u011A\x07A\x02\x02\u0119\xCF\x03\x02\x02" +
		"\x02\u0119\xD2\x03\x02\x02\x02\u0119\xD5\x03\x02\x02\x02\u0119\xD8\x03" +
		"\x02\x02\x02\u0119\xDB\x03\x02\x02\x02\u0119\xDE\x03\x02\x02\x02\u0119" +
		"\xE1\x03\x02\x02\x02\u0119\xE4\x03\x02\x02\x02\u0119\xE7\x03\x02\x02\x02" +
		"\u0119\xEA\x03\x02\x02\x02\u0119\xED\x03\x02\x02\x02\u0119\xF0\x03\x02" +
		"\x02\x02\u0119\xF7\x03\x02\x02\x02\u0119\u0104\x03\x02\x02\x02\u0119\u0109" +
		"\x03\x02\x02\x02\u0119\u0116\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02" +
		"\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\v\x03\x02" +
		"\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E\u0123\x07=\x02\x02\u011F\u0123" +
		"\x07>\x02\x02\u0120\u0123\x07<\x02\x02\u0121\u0123\x07?\x02\x02\u0122" +
		"\u011E\x03\x02\x02\x02\u0122\u011F\x03\x02\x02\x02\u0122\u0120\x03\x02" +
		"\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123\r\x03\x02\x02\x02(\x10\x12" +
		"\x1B\x1E$&09?DKQSY[_belr\x80\x88\x9C\x9F\xA8\xB6\xB9\xC6\xCA\xCD\xF4\xFE" +
		"\u0101\u010E\u0112\u0119\u011B\u0122";
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
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
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
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
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
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(XonParser.OpenBrace, 0); }
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(XonParser.CloseBrace, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
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


