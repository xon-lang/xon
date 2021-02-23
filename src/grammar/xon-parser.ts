// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT

 
// @ts-nocheck


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
	public static readonly Prefix = 3;
	public static readonly Postfix = 4;
	public static readonly Infix = 5;
	public static readonly Is = 6;
	public static readonly As = 7;
	public static readonly If = 8;
	public static readonly Else = 9;
	public static readonly ElseIf = 10;
	public static readonly Loop = 11;
	public static readonly In = 12;
	public static readonly Break = 13;
	public static readonly Return = 14;
	public static readonly Preprocessor = 15;
	public static readonly LineBreak = 16;
	public static readonly OpenBracket = 17;
	public static readonly CloseBracket = 18;
	public static readonly OpenParen = 19;
	public static readonly CloseParen = 20;
	public static readonly OpenBrace = 21;
	public static readonly CloseBrace = 22;
	public static readonly Comma = 23;
	public static readonly Assign = 24;
	public static readonly Question = 25;
	public static readonly Colon = 26;
	public static readonly Dot = 27;
	public static readonly Plus = 28;
	public static readonly Minus = 29;
	public static readonly Exclamation = 30;
	public static readonly Asterisk = 31;
	public static readonly Slash = 32;
	public static readonly Modulo = 33;
	public static readonly Caret = 34;
	public static readonly Hash = 35;
	public static readonly LessThan = 36;
	public static readonly MoreThan = 37;
	public static readonly Ampersand = 38;
	public static readonly Pipe = 39;
	public static readonly Tilde = 40;
	public static readonly LambdaStart = 41;
	public static readonly BooleanLiteral = 42;
	public static readonly FloatLiteral = 43;
	public static readonly IntegerLiteral = 44;
	public static readonly CharLiteral = 45;
	public static readonly StringLiteral = 46;
	public static readonly StringFormatStart = 47;
	public static readonly StringFormatMiddle = 48;
	public static readonly StringFormatEnd = 49;
	public static readonly ID = 50;
	public static readonly Spaces = 51;
	public static readonly Comment = 52;
	public static readonly LineJoining = 53;
	public static readonly UnexpectedCharacter = 54;
	public static readonly RULE_program = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_definition = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_libraryPath = 6;
	public static readonly RULE_libraryMember = 7;
	public static readonly RULE_member = 8;
	public static readonly RULE_operator = 9;
	public static readonly RULE_argument = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_body = 12;
	public static readonly RULE_fnArg = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "definition", "statement", "expression", "literal", 
		"libraryPath", "libraryMember", "member", "operator", "argument", "type", 
		"body", "fnArg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'prefix'", "'postfix'", "'infix'", "'is'", 
		"'as'", "'if'", "'else'", "'elif'", "'loop'", "'in'", "'break'", "'return'", 
		undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", "','", 
		"'='", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", 
		"'^'", "'#'", "'<'", "'>'", "'&'", "'|'", "'~'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Prefix", "Postfix", "Infix", "Is", "As", 
		"If", "Else", "ElseIf", "Loop", "In", "Break", "Return", "Preprocessor", 
		"LineBreak", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "Question", "Colon", "Dot", 
		"Plus", "Minus", "Exclamation", "Asterisk", "Slash", "Modulo", "Caret", 
		"Hash", "LessThan", "MoreThan", "Ampersand", "Pipe", "Tilde", "LambdaStart", 
		"BooleanLiteral", "FloatLiteral", "IntegerLiteral", "CharLiteral", "StringLiteral", 
		"StringFormatStart", "StringFormatMiddle", "StringFormatEnd", "ID", "Spaces", 
		"Comment", "LineJoining", "UnexpectedCharacter",
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

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

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
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.Comment - 32)))) !== 0)) {
				{
				this.state = 33;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 28;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 29;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 30;
					this.definition();
					}
					break;

				case 4:
					{
					this.state = 31;
					this.match(XonParser.LineBreak);
					}
					break;

				case 5:
					{
					this.state = 32;
					this.match(XonParser.Comment);
					}
					break;
				}
				}
				this.state = 37;
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
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.libraryPath();
			this.state = 39;
			this.match(XonParser.Colon);
			this.state = 40;
			this.libraryMember();
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Comma) {
				{
				{
				this.state = 41;
				this.match(XonParser.Comma);
				this.state = 42;
				this.libraryMember();
				}
				}
				this.state = 47;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(XonParser.ID);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Is) {
				{
				this.state = 49;
				this.match(XonParser.Is);
				this.state = 50;
				this.type();
				}
			}

			this.state = 53;
			this.match(XonParser.Colon);
			this.state = 54;
			this.match(XonParser.LineBreak);
			this.state = 55;
			this.match(XonParser.INDENT);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 58;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Prefix:
				case XonParser.Postfix:
				case XonParser.Infix:
				case XonParser.ID:
					{
					this.state = 56;
					this.member();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 57;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.Prefix) | (1 << XonParser.Postfix) | (1 << XonParser.Infix) | (1 << XonParser.LineBreak))) !== 0) || _la === XonParser.ID);
			this.state = 62;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.match(XonParser.If);
				this.state = 65;
				this.expression(0);
				this.state = 66;
				this.body();
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ElseIf) {
					{
					{
					this.state = 67;
					this.match(XonParser.ElseIf);
					this.state = 68;
					this.expression(0);
					this.state = 69;
					this.body();
					}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 76;
					this.match(XonParser.Else);
					this.state = 77;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.match(XonParser.Loop);
				this.state = 96;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 93;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						this.state = 81;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 86;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
						case 1:
							{
							this.state = 82;
							this.match(XonParser.Comma);
							this.state = 84;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 83;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 90;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 88;
							this.match(XonParser.Comma);
							this.state = 89;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 92;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 95;
					this.expression(0);
					}
					break;
				}
				this.state = 98;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.match(XonParser.Break);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 100;
				this.match(XonParser.Return);
				this.state = 102;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 101;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 104;
				this.match(XonParser.ID);
				this.state = 105;
				this.match(XonParser.Assign);
				this.state = 106;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 107;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 108;
				this.match(XonParser.Preprocessor);
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
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 112;
				this.match(XonParser.ID);
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 113;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 115;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 114;
						this.operator();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 117;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 119;
				this.expression(7);
				}
				break;

			case 4:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 121;
				this.match(XonParser.StringFormatStart);
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 122;
						this.expression(0);
						this.state = 123;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 130;
				this.expression(0);
				this.state = 131;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				this.match(XonParser.OpenBracket);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 134;
					this.expression(0);
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 135;
						this.match(XonParser.Comma);
						this.state = 136;
						this.expression(0);
						}
						}
						this.state = 141;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 144;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 6:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.match(XonParser.OpenBrace);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 146;
					this.match(XonParser.ID);
					this.state = 147;
					this.match(XonParser.Colon);
					this.state = 148;
					this.expression(0);
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 149;
						this.match(XonParser.Comma);
						this.state = 150;
						this.match(XonParser.ID);
						this.state = 151;
						this.match(XonParser.Colon);
						this.state = 152;
						this.expression(0);
						}
						}
						this.state = 157;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 160;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				this.match(XonParser.OpenParen);
				this.state = 162;
				this.expression(0);
				this.state = 163;
				this.match(XonParser.CloseParen);
				}
				break;

			case 8:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				this.match(XonParser.OpenParen);
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 166;
					this.match(XonParser.ID);
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.Hash || _la === XonParser.ID) {
						{
						this.state = 167;
						this.type();
						}
					}

					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 170;
						this.match(XonParser.Comma);
						this.state = 171;
						this.match(XonParser.ID);
						this.state = 173;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Hash || _la === XonParser.ID) {
							{
							this.state = 172;
							this.type();
							}
						}

						}
						}
						this.state = 179;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 182;
				this.match(XonParser.CloseParen);
				this.state = 183;
				this.match(XonParser.Colon);
				this.state = 184;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 219;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 187;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 189;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 188;
								this.operator();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 191;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						this.state = 193;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 195;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 196;
						this.match(XonParser.OpenParen);
						this.state = 205;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
							{
							this.state = 197;
							this.fnArg();
							this.state = 202;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 198;
								this.match(XonParser.Comma);
								this.state = 199;
								this.fnArg();
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
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 208;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 209;
						this.match(XonParser.OpenBracket);
						this.state = 210;
						this.expression(0);
						this.state = 211;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 213;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 215;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 214;
								this.operator();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 217;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.IntegerLiteral:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 225;
				this.match(XonParser.IntegerLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 226;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.CharLiteral:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 227;
				this.match(XonParser.CharLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 228;
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
	// @RuleVersion(0)
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(XonParser.ID);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 232;
				this.match(XonParser.Minus);
				this.state = 233;
				this.match(XonParser.ID);
				}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 239;
			this.match(XonParser.Slash);
			this.state = 240;
			this.match(XonParser.ID);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 241;
				this.match(XonParser.Minus);
				this.state = 242;
				this.match(XonParser.ID);
				}
				}
				this.state = 247;
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
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			_localctx._name = this.match(XonParser.ID);
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 249;
				this.match(XonParser.As);
				this.state = 250;
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
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				this.match(XonParser.ID);
				this.state = 254;
				this.type();
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.match(XonParser.ID);
				this.state = 256;
				this.match(XonParser.OpenParen);
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 257;
					this.argument();
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 258;
						this.match(XonParser.Comma);
						this.state = 259;
						this.argument();
						}
						}
						this.state = 264;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 267;
				this.match(XonParser.CloseParen);
				this.state = 269;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 268;
					this.type();
					}
					break;
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 271;
					this.body();
					}
				}

				}
				break;

			case 3:
				_localctx = new InfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 274;
				this.match(XonParser.Infix);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 275;
					this.operator();
					}
					}
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 280;
				this.match(XonParser.OpenParen);
				this.state = 281;
				this.argument();
				this.state = 282;
				this.match(XonParser.CloseParen);
				this.state = 283;
				this.type();
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 284;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new PrefixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 287;
				this.match(XonParser.Prefix);
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 288;
					this.operator();
					}
					}
					this.state = 291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 293;
				this.match(XonParser.OpenParen);
				this.state = 294;
				this.match(XonParser.CloseParen);
				this.state = 295;
				this.type();
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 296;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new PostfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 299;
				this.match(XonParser.Postfix);
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 300;
					this.operator();
					}
					}
					this.state = 303;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 305;
				this.match(XonParser.OpenParen);
				this.state = 306;
				this.match(XonParser.CloseParen);
				this.state = 307;
				this.type();
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 308;
					this.body();
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			_la = this._input.LA(1);
			if (!(((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0))) {
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
		this.enterRule(_localctx, 20, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(XonParser.ID);
			this.state = 316;
			this.type();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_type);
		let _la: number;
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				_localctx._name = this.match(XonParser.ID);
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LessThan) {
					{
					this.state = 319;
					this.match(XonParser.LessThan);
					this.state = 320;
					this.type();
					this.state = 325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 321;
						this.match(XonParser.Comma);
						this.state = 322;
						this.type();
						}
						}
						this.state = 327;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 328;
					this.match(XonParser.MoreThan);
					}
				}

				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Hash) {
					{
					this.state = 332;
					this.match(XonParser.Hash);
					this.state = 333;
					_localctx._meta = this.match(XonParser.ID);
					}
				}

				}
				break;
			case XonParser.Hash:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 336;
				this.match(XonParser.Hash);
				this.state = 337;
				_localctx._meta = this.match(XonParser.ID);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(XonParser.Colon);
			this.state = 341;
			this.match(XonParser.LineBreak);
			this.state = 342;
			this.match(XonParser.INDENT);
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 345;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.If:
				case XonParser.Loop:
				case XonParser.Break:
				case XonParser.Return:
				case XonParser.Preprocessor:
				case XonParser.OpenBracket:
				case XonParser.OpenParen:
				case XonParser.OpenBrace:
				case XonParser.Assign:
				case XonParser.Colon:
				case XonParser.Dot:
				case XonParser.Plus:
				case XonParser.Minus:
				case XonParser.Exclamation:
				case XonParser.Asterisk:
				case XonParser.Slash:
				case XonParser.Modulo:
				case XonParser.Caret:
				case XonParser.LessThan:
				case XonParser.MoreThan:
				case XonParser.Ampersand:
				case XonParser.Pipe:
				case XonParser.Tilde:
				case XonParser.BooleanLiteral:
				case XonParser.FloatLiteral:
				case XonParser.IntegerLiteral:
				case XonParser.CharLiteral:
				case XonParser.StringLiteral:
				case XonParser.StringFormatStart:
				case XonParser.ID:
					{
					this.state = 343;
					this.statement();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 344;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0));
			this.state = 349;
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
	public fnArg(): FnArgContext {
		let _localctx: FnArgContext = new FnArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_fnArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 351;
				this.match(XonParser.ID);
				this.state = 352;
				this.match(XonParser.Assign);
				}
				break;
			}
			this.state = 355;
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
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u0168\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02" +
		"$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03.\n\x03\f\x03\x0E\x031\v\x03\x03\x04\x03\x04\x03\x04\x05\x046" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04=\n\x04\r\x04\x0E" +
		"\x04>\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x07\x05J\n\x05\f\x05\x0E\x05M\v\x05\x03\x05\x03\x05\x05\x05Q" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05W\n\x05\x05\x05Y\n\x05\x03" +
		"\x05\x03\x05\x05\x05]\n\x05\x03\x05\x05\x05`\n\x05\x03\x05\x05\x05c\n" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05i\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05p\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x06" +
		"\x06v\n\x06\r\x06\x0E\x06w\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06\x80\n\x06\f\x06\x0E\x06\x83\v\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x8C\n\x06\f\x06\x0E\x06\x8F\v" +
		"\x06\x05\x06\x91\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\x9C\n\x06\f\x06\x0E\x06\x9F\v\x06\x05" +
		"\x06\xA1\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xAB\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB0\n\x06\x07" +
		"\x06\xB2\n\x06\f\x06\x0E\x06\xB5\v\x06\x05\x06\xB7\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xBC\n\x06\x03\x06\x03\x06\x06\x06\xC0\n\x06\r\x06\x0E" +
		"\x06\xC1\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\xCB\n\x06\f\x06\x0E\x06\xCE\v\x06\x05\x06\xD0\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\xDA\n\x06\r\x06\x0E" +
		"\x06\xDB\x07\x06\xDE\n\x06\f\x06\x0E\x06\xE1\v\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\xE8\n\x07\x03\b\x03\b\x03\b\x07\b\xED\n\b" +
		"\f\b\x0E\b\xF0\v\b\x03\b\x03\b\x03\b\x03\b\x07\b\xF6\n\b\f\b\x0E\b\xF9" +
		"\v\b\x03\t\x03\t\x03\t\x05\t\xFE\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\u0107\n\n\f\n\x0E\n\u010A\v\n\x05\n\u010C\n\n\x03\n\x03" +
		"\n\x05\n\u0110\n\n\x03\n\x05\n\u0113\n\n\x03\n\x03\n\x06\n\u0117\n\n\r" +
		"\n\x0E\n\u0118\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0120\n\n\x03\n\x03" +
		"\n\x06\n\u0124\n\n\r\n\x0E\n\u0125\x03\n\x03\n\x03\n\x03\n\x05\n\u012C" +
		"\n\n\x03\n\x03\n\x06\n\u0130\n\n\r\n\x0E\n\u0131\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0138\n\n\x05\n\u013A\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x07\r\u0146\n\r\f\r\x0E\r\u0149\v\r\x03\r\x03" +
		"\r\x05\r\u014D\n\r\x03\r\x03\r\x05\r\u0151\n\r\x03\r\x03\r\x05\r\u0155" +
		"\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u015C\n\x0E\r\x0E" +
		"\x0E\x0E\u015D\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u0164\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x02\x02\x03\n\x10\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x02\x03\x05\x02\x1A\x1A\x1C$&*\x02\u01A5\x02%\x03\x02\x02\x02\x04" +
		"(\x03\x02\x02\x02\x062\x03\x02\x02\x02\bo\x03\x02\x02\x02\n\xBB\x03\x02" +
		"\x02\x02\f\xE7\x03\x02\x02\x02\x0E\xE9\x03\x02\x02\x02\x10\xFA\x03\x02" +
		"\x02\x02\x12\u0139\x03\x02\x02\x02\x14\u013B\x03\x02\x02\x02\x16\u013D" +
		"\x03\x02\x02\x02\x18\u0154\x03\x02\x02\x02\x1A\u0156\x03\x02\x02\x02\x1C" +
		"\u0163\x03\x02\x02\x02\x1E$\x05\x04\x03\x02\x1F$\x05\b\x05\x02 $\x05\x06" +
		"\x04\x02!$\x07\x12\x02\x02\"$\x076\x02\x02#\x1E\x03\x02\x02\x02#\x1F\x03" +
		"\x02\x02\x02# \x03\x02\x02\x02#!\x03\x02\x02\x02#\"\x03\x02\x02\x02$\'" +
		"\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x03\x03\x02\x02" +
		"\x02\'%\x03\x02\x02\x02()\x05\x0E\b\x02)*\x07\x1C\x02\x02*/\x05\x10\t" +
		"\x02+,\x07\x19\x02\x02,.\x05\x10\t\x02-+\x03\x02\x02\x02.1\x03\x02\x02" +
		"\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x05\x03\x02\x02\x021/\x03\x02" +
		"\x02\x0225\x074\x02\x0234\x07\b\x02\x0246\x05\x18\r\x0253\x03\x02\x02" +
		"\x0256\x03\x02\x02\x0267\x03\x02\x02\x0278\x07\x1C\x02\x0289\x07\x12\x02" +
		"\x029<\x07\x03\x02\x02:=\x05\x12\n\x02;=\x07\x12\x02\x02<:\x03\x02\x02" +
		"\x02<;\x03\x02\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02" +
		"\x02?@\x03\x02\x02\x02@A\x07\x04\x02\x02A\x07\x03\x02\x02\x02BC\x07\n" +
		"\x02\x02CD\x05\n\x06\x02DK\x05\x1A\x0E\x02EF\x07\f\x02\x02FG\x05\n\x06" +
		"\x02GH\x05\x1A\x0E\x02HJ\x03\x02\x02\x02IE\x03\x02\x02\x02JM\x03\x02\x02" +
		"\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02LP\x03\x02\x02\x02MK\x03\x02\x02" +
		"\x02NO\x07\v\x02\x02OQ\x05\x1A\x0E\x02PN\x03\x02\x02\x02PQ\x03\x02\x02" +
		"\x02Qp\x03\x02\x02\x02Rb\x07\r\x02\x02SX\x074\x02\x02TV\x07\x19\x02\x02" +
		"UW\x074\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02" +
		"XT\x03\x02\x02\x02XY\x03\x02\x02\x02Y\\\x03\x02\x02\x02Z[\x07\x19\x02" +
		"\x02[]\x074\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02" +
		"\x02^`\x07\x0E\x02\x02_S\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02" +
		"\x02ac\x05\n\x06\x02b_\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x03\x02\x02" +
		"\x02dp\x05\x1A\x0E\x02ep\x07\x0F\x02\x02fh\x07\x10\x02\x02gi\x05\n\x06" +
		"\x02hg\x03\x02\x02\x02hi\x03\x02\x02\x02ip\x03\x02\x02\x02jk\x074\x02" +
		"\x02kl\x07\x1A\x02\x02lp\x05\n\x06\x02mp\x05\n\x06\x02np\x07\x11\x02\x02" +
		"oB\x03\x02\x02\x02oR\x03\x02\x02\x02oe\x03\x02\x02\x02of\x03\x02\x02\x02" +
		"oj\x03\x02\x02\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\t\x03\x02\x02" +
		"\x02qr\b\x06\x01\x02r\xBC\x074\x02\x02s\xBC\x05\f\x07\x02tv\x05\x14\v" +
		"\x02ut\x03\x02\x02\x02vw\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02" +
		"\x02xy\x03\x02\x02\x02yz\x05\n\x06\tz\xBC\x03\x02\x02\x02{\x81\x071\x02" +
		"\x02|}\x05\n\x06\x02}~\x072\x02\x02~\x80\x03\x02\x02\x02\x7F|\x03\x02" +
		"\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x05\n" +
		"\x06\x02\x85\x86\x073\x02\x02\x86\xBC\x03\x02\x02\x02\x87\x90\x07\x13" +
		"\x02\x02\x88\x8D\x05\n\x06\x02\x89\x8A\x07\x19\x02\x02\x8A\x8C\x05\n\x06" +
		"\x02\x8B\x89\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02" +
		"\x02\x8D\x8E\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02" +
		"\x02\x90\x88\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\xBC\x07\x14\x02\x02\x93\xA0\x07\x17\x02\x02\x94\x95\x074\x02" +
		"\x02\x95\x96\x07\x1C\x02\x02\x96\x9D\x05\n\x06\x02\x97\x98\x07\x19\x02" +
		"\x02\x98\x99\x074\x02\x02\x99\x9A\x07\x1C\x02\x02\x9A\x9C\x05\n\x06\x02" +
		"\x9B\x97\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02" +
		"\x9D\x9E\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02" +
		"\xA0\x94\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02" +
		"\xA2\xBC\x07\x18\x02\x02\xA3\xA4\x07\x15\x02\x02\xA4\xA5\x05\n\x06\x02" +
		"\xA5\xA6\x07\x16\x02\x02\xA6\xBC\x03\x02\x02\x02\xA7\xB6\x07\x15\x02\x02" +
		"\xA8\xAA\x074\x02\x02\xA9\xAB\x05\x18\r\x02\xAA\xA9\x03\x02\x02\x02\xAA" +
		"\xAB\x03\x02\x02\x02\xAB\xB3\x03\x02\x02\x02\xAC\xAD\x07\x19\x02\x02\xAD" +
		"\xAF\x074\x02\x02\xAE\xB0\x05\x18\r\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0" +
		"\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAC\x03\x02\x02\x02\xB2\xB5" +
		"\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB7" +
		"\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xA8\x03\x02\x02\x02\xB6\xB7" +
		"\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\x16\x02\x02\xB9\xBA" +
		"\x07\x1C\x02\x02\xBA\xBC\x05\n\x06\x03\xBBq\x03\x02\x02\x02\xBBs\x03\x02" +
		"\x02\x02\xBBu\x03\x02\x02\x02\xBB{\x03\x02\x02\x02\xBB\x87\x03\x02\x02" +
		"\x02\xBB\x93\x03\x02\x02\x02\xBB\xA3\x03\x02\x02\x02\xBB\xA7\x03\x02\x02" +
		"\x02\xBC\xDF\x03\x02\x02\x02\xBD\xBF\f\n\x02\x02\xBE\xC0\x05\x14\v\x02" +
		"\xBF\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02" +
		"\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x05\n\x06\v\xC4" +
		"\xDE\x03\x02\x02\x02\xC5\xC6\f\f\x02\x02\xC6\xCF\x07\x15\x02\x02\xC7\xCC" +
		"\x05\x1C\x0F\x02\xC8\xC9\x07\x19\x02\x02\xC9\xCB\x05\x1C\x0F\x02\xCA\xC8" +
		"\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD" +
		"\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xC7" +
		"\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xDE" +
		"\x07\x16\x02\x02\xD2\xD3\f\v\x02\x02\xD3\xD4\x07\x13\x02\x02\xD4\xD5\x05" +
		"\n\x06\x02\xD5\xD6\x07\x14\x02\x02\xD6\xDE\x03\x02\x02\x02\xD7\xD9\f\b" +
		"\x02\x02\xD8\xDA\x05\x14\v\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02" +
		"\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02" +
		"\x02\x02\xDD\xBD\x03\x02\x02\x02\xDD\xC5\x03\x02\x02\x02\xDD\xD2\x03\x02" +
		"\x02\x02\xDD\xD7\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02" +
		"\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\v\x03\x02\x02\x02\xE1\xDF\x03\x02" +
		"\x02\x02\xE2\xE8\x07,\x02\x02\xE3\xE8\x07.\x02\x02\xE4\xE8\x07-\x02\x02" +
		"\xE5\xE8\x07/\x02\x02\xE6\xE8\x070\x02\x02\xE7\xE2\x03\x02\x02\x02\xE7" +
		"\xE3\x03\x02\x02\x02\xE7\xE4\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7" +
		"\xE6\x03\x02\x02\x02\xE8\r\x03\x02\x02\x02\xE9\xEE\x074\x02\x02\xEA\xEB" +
		"\x07\x1F\x02\x02\xEB\xED\x074\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xF0" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1" +
		"\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x07\"\x02\x02\xF2\xF7" +
		"\x074\x02\x02\xF3\xF4\x07\x1F\x02\x02\xF4\xF6\x074\x02\x02\xF5\xF3\x03" +
		"\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03" +
		"\x02\x02\x02\xF8\x0F\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFD\x07" +
		"4\x02\x02\xFB\xFC\x07\t\x02\x02\xFC\xFE\x074\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE\x11\x03\x02\x02\x02\xFF\u0100\x074\x02" +
		"\x02\u0100\u013A\x05\x18\r\x02\u0101\u0102\x074\x02\x02\u0102\u010B\x07" +
		"\x15\x02\x02\u0103\u0108\x05\x16\f\x02\u0104\u0105\x07\x19\x02\x02\u0105" +
		"\u0107\x05\x16\f\x02\u0106\u0104\x03\x02\x02\x02\u0107\u010A\x03\x02\x02" +
		"\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010C" +
		"\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u0103\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010F\x07" +
		"\x16\x02\x02\u010E\u0110\x05\x18\r\x02\u010F\u010E\x03\x02\x02\x02\u010F" +
		"\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u0113\x05\x1A" +
		"\x0E\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"\u013A\x03\x02\x02\x02\u0114\u0116\x07\x07\x02\x02\u0115\u0117\x05\x14" +
		"\v\x02\u0116\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0116" +
		"\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
		"\u011A\u011B\x07\x15\x02\x02\u011B\u011C\x05\x16\f\x02\u011C\u011D\x07" +
		"\x16\x02\x02\u011D\u011F\x05\x18\r\x02\u011E\u0120\x05\x1A\x0E\x02\u011F" +
		"\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u013A\x03\x02" +
		"\x02\x02\u0121\u0123\x07\x05\x02\x02\u0122\u0124\x05\x14\v\x02\u0123\u0122" +
		"\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02" +
		"\u0125\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x07" +
		"\x15\x02\x02\u0128\u0129\x07\x16\x02\x02\u0129\u012B\x05\x18\r\x02\u012A" +
		"\u012C\x05\x1A\x0E\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02" +
		"\x02\x02\u012C\u013A\x03\x02\x02\x02\u012D\u012F\x07\x06\x02\x02\u012E" +
		"\u0130\x05\x14\v\x02\u012F\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02" +
		"\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133" +
		"\x03\x02\x02\x02\u0133\u0134\x07\x15\x02\x02\u0134\u0135\x07\x16\x02\x02" +
		"\u0135\u0137\x05\x18\r\x02\u0136\u0138\x05\x1A\x0E\x02\u0137\u0136\x03" +
		"\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139" +
		"\xFF\x03\x02\x02\x02\u0139\u0101\x03\x02\x02\x02\u0139\u0114\x03\x02\x02" +
		"\x02\u0139\u0121\x03\x02\x02\x02\u0139\u012D\x03\x02\x02\x02\u013A\x13" +
		"\x03\x02\x02\x02\u013B\u013C\t\x02\x02\x02\u013C\x15\x03\x02\x02\x02\u013D" +
		"\u013E\x074\x02\x02\u013E\u013F\x05\x18\r\x02\u013F\x17\x03\x02\x02\x02" +
		"\u0140\u014C\x074\x02\x02\u0141\u0142\x07&\x02\x02\u0142\u0147\x05\x18" +
		"\r\x02\u0143\u0144\x07\x19\x02\x02\u0144\u0146\x05\x18\r\x02\u0145\u0143" +
		"\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02" +
		"\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149\u0147\x03" +
		"\x02\x02\x02\u014A\u014B\x07\'\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C" +
		"\u0141\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u0150\x03\x02" +
		"\x02\x02\u014E\u014F\x07%\x02\x02\u014F\u0151\x074\x02\x02\u0150\u014E" +
		"\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0155\x03\x02\x02\x02" +
		"\u0152\u0153\x07%\x02\x02\u0153\u0155\x074\x02\x02\u0154\u0140\x03\x02" +
		"\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\x19\x03\x02\x02\x02\u0156\u0157" +
		"\x07\x1C\x02\x02\u0157\u0158\x07\x12\x02\x02\u0158\u015B\x07\x03\x02\x02" +
		"\u0159\u015C\x05\b\x05\x02\u015A\u015C\x07\x12\x02\x02\u015B\u0159\x03" +
		"\x02\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x03\x02" +
		"\x02\x02\u015F\u0160\x07\x04\x02\x02\u0160\x1B\x03\x02\x02\x02\u0161\u0162" +
		"\x074\x02\x02\u0162\u0164\x07\x1A\x02\x02\u0163\u0161\x03\x02\x02\x02" +
		"\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x05" +
		"\n\x06\x02\u0166\x1D\x03\x02\x02\x028#%/5<>KPVX\\_bhow\x81\x8D\x90\x9D" +
		"\xA0\xAA\xAF\xB3\xB6\xBB\xC1\xCC\xCF\xDB\xDD\xDF\xE7\xEE\xF7\xFD\u0108" +
		"\u010B\u010F\u0112\u0118\u011F\u0125\u012B\u0131\u0137\u0139\u0147\u014C" +
		"\u0150\u0154\u015B\u015D\u0163";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public library(): LibraryContext[];
	public library(i: number): LibraryContext;
	public library(i?: number): LibraryContext | LibraryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryContext);
		} else {
			return this.getRuleContext(i, LibraryContext);
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
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
		}
	}
	public Comment(): TerminalNode[];
	public Comment(i: number): TerminalNode;
	public Comment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comment);
		} else {
			return this.getToken(XonParser.Comment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class LibraryContext extends ParserRuleContext {
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public libraryMember(): LibraryMemberContext[];
	public libraryMember(i: number): LibraryMemberContext;
	public libraryMember(i?: number): LibraryMemberContext | LibraryMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryMemberContext);
		} else {
			return this.getRuleContext(i, LibraryMemberContext);
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
	public get ruleIndex(): number { return XonParser.RULE_library; }
}


export class DefinitionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	public Is(): TerminalNode | undefined { return this.tryGetToken(XonParser.Is, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
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
	public ElseIf(): TerminalNode[];
	public ElseIf(i: number): TerminalNode;
	public ElseIf(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ElseIf);
		} else {
			return this.getToken(XonParser.ElseIf, i);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopStatementContext extends StatementContext {
	public _value!: Token;
	public _key!: Token;
	public _index!: Token;
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
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Assign(): TerminalNode { return this.getToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
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
export class FunctionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public fnArg(): FnArgContext[];
	public fnArg(i: number): FnArgContext;
	public fnArg(i?: number): FnArgContext | FnArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FnArgContext);
		} else {
			return this.getRuleContext(i, FnArgContext);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PostfixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
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
export class LambdaExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
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
export class BooleanLiteralContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends LiteralContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(XonParser.IntegerLiteral, 0); }
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
export class CharLiteralContext extends LiteralContext {
	public CharLiteral(): TerminalNode { return this.getToken(XonParser.CharLiteral, 0); }
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


export class LibraryPathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Slash(): TerminalNode { return this.getToken(XonParser.Slash, 0); }
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Minus);
		} else {
			return this.getToken(XonParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryPath; }
}


export class LibraryMemberContext extends ParserRuleContext {
	public _name!: Token;
	public _alias!: Token;
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
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
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
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixOperatorMemberContext extends MemberContext {
	public Infix(): TerminalNode { return this.getToken(XonParser.Infix, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public argument(): ArgumentContext {
		return this.getRuleContext(0, ArgumentContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixOperatorMemberContext extends MemberContext {
	public Prefix(): TerminalNode { return this.getToken(XonParser.Prefix, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PostfixOperatorMemberContext extends MemberContext {
	public Postfix(): TerminalNode { return this.getToken(XonParser.Postfix, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class OperatorContext extends ParserRuleContext {
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	public Asterisk(): TerminalNode | undefined { return this.tryGetToken(XonParser.Asterisk, 0); }
	public Slash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Slash, 0); }
	public Modulo(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulo, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	public Exclamation(): TerminalNode | undefined { return this.tryGetToken(XonParser.Exclamation, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(XonParser.Caret, 0); }
	public Ampersand(): TerminalNode | undefined { return this.tryGetToken(XonParser.Ampersand, 0); }
	public Pipe(): TerminalNode | undefined { return this.tryGetToken(XonParser.Pipe, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(XonParser.Dot, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(XonParser.Tilde, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class ArgumentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class TypeContext extends ParserRuleContext {
	public _name!: Token;
	public _meta!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	public Hash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Hash, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_type; }
}


export class BodyContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class FnArgContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_fnArg; }
}


