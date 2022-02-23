// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly ACTUAL = 9;
	public static readonly BREAK = 10;
	public static readonly DO = 11;
	public static readonly ELSE = 12;
	public static readonly EXPECT = 13;
	public static readonly EXPORT = 14;
	public static readonly FOR = 15;
	public static readonly IF = 16;
	public static readonly IN = 17;
	public static readonly IMPORT = 18;
	public static readonly RETURN = 19;
	public static readonly WHILE = 20;
	public static readonly PREFIX = 21;
	public static readonly INFIX = 22;
	public static readonly OBJECT = 23;
	public static readonly MODEL = 24;
	public static readonly ENUM = 25;
	public static readonly ASSIGN = 26;
	public static readonly COLON = 27;
	public static readonly COMMA = 28;
	public static readonly DOT = 29;
	public static readonly EXCLAMATION = 30;
	public static readonly HASH = 31;
	public static readonly QUESTION = 32;
	public static readonly GENERIC_LEFT = 33;
	public static readonly GENERIC_RIGHT = 34;
	public static readonly FLOAT_LITERAL = 35;
	public static readonly INTEGER_LITERAL = 36;
	public static readonly REGEX_LITERAL = 37;
	public static readonly STRING_LITERAL = 38;
	public static readonly PREPROCESSOR = 39;
	public static readonly ID = 40;
	public static readonly OPERATOR = 41;
	public static readonly NL = 42;
	public static readonly WS = 43;
	public static readonly BLOCK_COMMENT = 44;
	public static readonly LINE_COMMENT = 45;
	public static readonly UNEXPECTED = 46;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_arrayItem = 5;
	public static readonly RULE_parameters = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_id = 8;
	public static readonly RULE_modifier = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expr", "literal", "body", "arrayItem", "parameters", 
		"parameter", "id", "modifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'do'", "'else'", "'expect'", "'export'", "'for'", 
		"'if'", "'in'", "'import'", "'return'", "'while'", "'prefix'", "'infix'", 
		"'object'", "'model'", "'enum'", "'='", "':'", "','", "'.'", "'!'", "'#'", 
		"'?'", "'<|'", "'|>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "DO", "ELSE", 
		"EXPECT", "EXPORT", "FOR", "IF", "IN", "IMPORT", "RETURN", "WHILE", "PREFIX", 
		"INFIX", "OBJECT", "MODEL", "ENUM", "ASSIGN", "COLON", "COMMA", "DOT", 
		"EXCLAMATION", "HASH", "QUESTION", "GENERIC_LEFT", "GENERIC_RIGHT", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "OPERATOR", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
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
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_source);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.PREFIX) | (1 << XonParser.INFIX) | (1 << XonParser.OBJECT) | (1 << XonParser.MODEL) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)) | (1 << (XonParser.NL - 35)))) !== 0)) {
				{
				this.state = 22;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OPEN_BRACKET:
				case XonParser.OPEN_PAREN:
				case XonParser.OPEN_BRACE:
				case XonParser.ACTUAL:
				case XonParser.BREAK:
				case XonParser.DO:
				case XonParser.EXPORT:
				case XonParser.FOR:
				case XonParser.IF:
				case XonParser.IMPORT:
				case XonParser.RETURN:
				case XonParser.WHILE:
				case XonParser.PREFIX:
				case XonParser.INFIX:
				case XonParser.OBJECT:
				case XonParser.MODEL:
				case XonParser.ENUM:
				case XonParser.FLOAT_LITERAL:
				case XonParser.INTEGER_LITERAL:
				case XonParser.REGEX_LITERAL:
				case XonParser.STRING_LITERAL:
				case XonParser.PREPROCESSOR:
				case XonParser.ID:
				case XonParser.OPERATOR:
					{
					this.state = 20;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 21;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 26;
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
			let _alt: number;
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 27;
				this.match(XonParser.IMPORT);
				this.state = 28;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 29;
					this.match(XonParser.COLON);
					this.state = 30;
					(_localctx as ImportStatementContext)._expr = this.expr(0);
					(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
					this.state = 35;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 31;
							this.match(XonParser.COMMA);
							this.state = 32;
							(_localctx as ImportStatementContext)._expr = this.expr(0);
							(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
							}
							}
						}
						this.state = 37;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
					}
					this.state = 39;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						this.state = 38;
						this.match(XonParser.COMMA);
						}
						break;
					}
					}
				}

				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.match(XonParser.EXPORT);
				this.state = 44;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.match(XonParser.FOR);
				this.state = 53;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 46;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 47;
						this.match(XonParser.COMMA);
						this.state = 48;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 51;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 55;
				this.expr(0);
				this.state = 56;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 58;
				this.match(XonParser.WHILE);
				this.state = 59;
				this.expr(0);
				this.state = 60;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 62;
				this.match(XonParser.DO);
				this.state = 63;
				this.body();
				this.state = 64;
				this.match(XonParser.WHILE);
				this.state = 65;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 67;
				this.match(XonParser.IF);
				this.state = 68;
				this.expr(0);
				this.state = 69;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 72;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 70;
					this.match(XonParser.ELSE);
					this.state = 71;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 74;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 75;
				this.match(XonParser.RETURN);
				this.state = 77;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 76;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 79;
				this.match(XonParser.ACTUAL);
				this.state = 80;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 81;
					this.match(XonParser.NL);
					}
					}
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 86;
				this.match(XonParser.EXPECT);
				this.state = 87;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 89;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 90;
				this.id();
				this.state = 91;
				this.match(XonParser.ASSIGN);
				this.state = 92;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new ParameterStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 94;
				this.parameter();
				}
				break;

			case 13:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 95;
				this.expr(0);
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 99;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 100;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
					{
					this.state = 101;
					this.arrayItem();
					this.state = 106;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 102;
							this.match(XonParser.COMMA);
							this.state = 103;
							this.arrayItem();
							}
							}
						}
						this.state = 108;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
					}
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 109;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 114;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 115;
				this.match(XonParser.OPEN_BRACE);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.PREFIX - 21)) | (1 << (XonParser.INFIX - 21)) | (1 << (XonParser.OBJECT - 21)) | (1 << (XonParser.MODEL - 21)) | (1 << (XonParser.ENUM - 21)) | (1 << (XonParser.ID - 21)) | (1 << (XonParser.OPERATOR - 21)))) !== 0)) {
					{
					this.state = 116;
					this.parameter();
					this.state = 121;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 117;
							this.match(XonParser.COMMA);
							this.state = 118;
							this.parameter();
							}
							}
						}
						this.state = 123;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
					}
					this.state = 125;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 124;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 129;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 130;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.ID || _la === XonParser.OPERATOR)) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 131;
				this.expr(6);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 132;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				this.match(XonParser.OPEN_PAREN);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.PREFIX - 21)) | (1 << (XonParser.INFIX - 21)) | (1 << (XonParser.OBJECT - 21)) | (1 << (XonParser.MODEL - 21)) | (1 << (XonParser.ENUM - 21)) | (1 << (XonParser.ID - 21)) | (1 << (XonParser.OPERATOR - 21)))) !== 0)) {
					{
					this.state = 134;
					this.parameter();
					this.state = 139;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 135;
							this.match(XonParser.COMMA);
							this.state = 136;
							this.parameter();
							}
							}
						}
						this.state = 141;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 142;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 147;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 148;
				this.expr(3);
				}
				break;

			case 7:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 149;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.PREFIX - 21)) | (1 << (XonParser.INFIX - 21)) | (1 << (XonParser.OBJECT - 21)) | (1 << (XonParser.MODEL - 21)) | (1 << (XonParser.ENUM - 21)) | (1 << (XonParser.ID - 21)) | (1 << (XonParser.OPERATOR - 21)))) !== 0)) {
					{
					this.state = 150;
					this.parameter();
					this.state = 155;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 151;
							this.match(XonParser.COMMA);
							this.state = 152;
							this.parameter();
							}
							}
						}
						this.state = 157;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					}
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 158;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 163;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 164;
				this.expr(2);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				this.match(XonParser.OPEN_PAREN);
				this.state = 166;
				this.expr(0);
				this.state = 167;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 213;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 211;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 171;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 172;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.ID || _la === XonParser.OPERATOR)) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 173;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 174;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 175;
						this.match(XonParser.OPEN_PAREN);
						this.state = 187;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
							{
							this.state = 176;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 181;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 177;
									this.match(XonParser.COMMA);
									this.state = 178;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 183;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
							}
							this.state = 185;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 184;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 189;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 190;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 191;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
							{
							this.state = 192;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 197;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 193;
									this.match(XonParser.COMMA);
									this.state = 194;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 199;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
							}
							this.state = 201;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 200;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 205;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 4:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 206;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 207;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 208;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 209;
						this.match(XonParser.DOT);
						this.state = 210;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 215;
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
		this.enterRule(_localctx, 6, XonParser.RULE_literal);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 218;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 219;
				this.match(XonParser.REGEX_LITERAL);
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
		this.enterRule(_localctx, 8, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.match(XonParser.COLON);
				this.state = 223;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 224;
					this.match(XonParser.COLON);
					}
				}

				this.state = 227;
				this.match(XonParser.NL);
				this.state = 228;
				this.match(XonParser.INDENT);
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 231;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.WHILE:
					case XonParser.PREFIX:
					case XonParser.INFIX:
					case XonParser.OBJECT:
					case XonParser.MODEL:
					case XonParser.ENUM:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.OPERATOR:
						{
						this.state = 229;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 230;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 233;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.PREFIX) | (1 << XonParser.INFIX) | (1 << XonParser.OBJECT) | (1 << XonParser.MODEL) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
				this.state = 235;
				this.match(XonParser.DEDENT);
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
	public arrayItem(): ArrayItemContext {
		let _localctx: ArrayItemContext = new ArrayItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_arrayItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 238;
				this.expr(0);
				this.state = 239;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 243;
			this.expr(0);
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.parameter();
			this.state = 250;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 246;
					this.match(XonParser.COMMA);
					this.state = 247;
					this.parameter();
					}
					}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 253;
				this.match(XonParser.COMMA);
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.PREFIX) | (1 << XonParser.INFIX) | (1 << XonParser.OBJECT) | (1 << XonParser.MODEL) | (1 << XonParser.ENUM))) !== 0)) {
				{
				this.state = 256;
				this.modifier();
				}
			}

			this.state = 259;
			this.id();
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 260;
				this.expr(0);
				this.state = 261;
				this.body();
				}
				break;

			case 2:
				{
				this.state = 263;
				this.expr(0);
				}
				break;

			case 3:
				{
				this.state = 264;
				this.body();
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_id);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === XonParser.ID || _la === XonParser.OPERATOR)) {
				_localctx._name = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 268;
				this.match(XonParser.GENERIC_LEFT);
				this.state = 269;
				this.parameter();
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 270;
						this.match(XonParser.COMMA);
						this.state = 271;
						this.parameter();
						}
						}
					}
					this.state = 276;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 277;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 280;
				this.match(XonParser.GENERIC_RIGHT);
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
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.PREFIX) | (1 << XonParser.INFIX) | (1 << XonParser.OBJECT) | (1 << XonParser.MODEL) | (1 << XonParser.ENUM))) !== 0))) {
				_localctx._name = this._errHandler.recoverInline(this);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u0121\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x07\x02" +
		"\x19\n\x02\f\x02\x0E\x02\x1C\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03$\n\x03\f\x03\x0E\x03\'\v\x03\x03\x03\x05\x03*\n\x03" +
		"\x05\x03,\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"4\n\x03\x03\x03\x03\x03\x05\x038\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03K\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03P\n\x03\x03\x03\x03\x03\x03\x03\x06\x03U\n\x03\r\x03\x0E\x03V" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03c\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04k\n\x04\f\x04\x0E\x04n\v\x04\x03\x04\x05\x04q\n\x04\x05\x04s\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04z\n\x04\f\x04\x0E" +
		"\x04}\v\x04\x03\x04\x05\x04\x80\n\x04\x05\x04\x82\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x8C\n\x04\f\x04" +
		"\x0E\x04\x8F\v\x04\x03\x04\x05\x04\x92\n\x04\x05\x04\x94\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x9C\n\x04\f\x04\x0E\x04" +
		"\x9F\v\x04\x03\x04\x05\x04\xA2\n\x04\x05\x04\xA4\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAC\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xB6\n\x04\f\x04\x0E" +
		"\x04\xB9\v\x04\x03\x04\x05\x04\xBC\n\x04\x05\x04\xBE\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xC6\n\x04\f\x04\x0E\x04\xC9" +
		"\v\x04\x03\x04\x05\x04\xCC\n\x04\x05\x04\xCE\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04\xD6\n\x04\f\x04\x0E\x04\xD9\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xDF\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xE4\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\xEA\n\x06" +
		"\r\x06\x0E\x06\xEB\x03\x06\x05\x06\xEF\n\x06\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\xF4\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b\xFB\n\b\f\b\x0E" +
		"\b\xFE\v\b\x03\b\x05\b\u0101\n\b\x03\t\x05\t\u0104\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u010C\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\u0113\n\n\f\n\x0E\n\u0116\v\n\x03\n\x05\n\u0119\n\n\x03\n\x03\n\x05" +
		"\n\u011D\n\n\x03\v\x03\v\x03\v\x02\x02\x03\x06\f\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x04\x03\x02*+\x03" +
		"\x02\x17\x1B\x02\u015B\x02\x1A\x03\x02\x02\x02\x04b\x03\x02\x02\x02\x06" +
		"\xAB\x03\x02\x02\x02\b\xDE\x03\x02\x02\x02\n\xEE\x03\x02\x02\x02\f\xF3" +
		"\x03\x02\x02\x02\x0E\xF7\x03\x02\x02\x02\x10\u0103\x03\x02\x02\x02\x12" +
		"\u010D\x03\x02\x02\x02\x14\u011E\x03\x02\x02\x02\x16\x19\x05\x04\x03\x02" +
		"\x17\x19\x07,\x02\x02\x18\x16\x03\x02\x02\x02\x18\x17\x03\x02\x02\x02" +
		"\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02" +
		"\x1B\x03\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1D\x1E\x07\x14\x02\x02" +
		"\x1E+\x05\x06\x04\x02\x1F \x07\x1D\x02\x02 %\x05\x06\x04\x02!\"\x07\x1E" +
		"\x02\x02\"$\x05\x06\x04\x02#!\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03" +
		"\x02\x02\x02%&\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02(*" +
		"\x07\x1E\x02\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*,\x03\x02\x02\x02" +
		"+\x1F\x03\x02\x02\x02+,\x03\x02\x02\x02,c\x03\x02\x02\x02-.\x07\x10\x02" +
		"\x02.c\x05\x06\x04\x02/7\x07\x11\x02\x0203\x05\x10\t\x0212\x07\x1E\x02" +
		"\x0224\x05\x10\t\x0231\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02" +
		"\x0256\x07\x13\x02\x0268\x03\x02\x02\x0270\x03\x02\x02\x0278\x03\x02\x02" +
		"\x0289\x03\x02\x02\x029:\x05\x06\x04\x02:;\x05\n\x06\x02;c\x03\x02\x02" +
		"\x02<=\x07\x16\x02\x02=>\x05\x06\x04\x02>?\x05\n\x06\x02?c\x03\x02\x02" +
		"\x02@A\x07\r\x02\x02AB\x05\n\x06\x02BC\x07\x16\x02\x02CD\x05\x06\x04\x02" +
		"Dc\x03\x02\x02\x02EF\x07\x12\x02\x02FG\x05\x06\x04\x02GJ\x05\n\x06\x02" +
		"HI\x07\x0E\x02\x02IK\x05\n\x06\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"Kc\x03\x02\x02\x02Lc\x07\f\x02\x02MO\x07\x15\x02\x02NP\x05\x06\x04\x02" +
		"ON\x03\x02\x02\x02OP\x03\x02\x02\x02Pc\x03\x02\x02\x02QR\x07\v\x02\x02" +
		"RT\x05\x06\x04\x02SU\x07,\x02\x02TS\x03\x02\x02\x02UV\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x07\x0F\x02\x02" +
		"YZ\x05\x06\x04\x02Zc\x03\x02\x02\x02[c\x07)\x02\x02\\]\x05\x12\n\x02]" +
		"^\x07\x1C\x02\x02^_\x05\x06\x04\x02_c\x03\x02\x02\x02`c\x05\x10\t\x02" +
		"ac\x05\x06\x04\x02b\x1D\x03\x02\x02\x02b-\x03\x02\x02\x02b/\x03\x02\x02" +
		"\x02b<\x03\x02\x02\x02b@\x03\x02\x02\x02bE\x03\x02\x02\x02bL\x03\x02\x02" +
		"\x02bM\x03\x02\x02\x02bQ\x03\x02\x02\x02b[\x03\x02\x02\x02b\\\x03\x02" +
		"\x02\x02b`\x03\x02\x02\x02ba\x03\x02\x02\x02c\x05\x03\x02\x02\x02de\b" +
		"\x04\x01\x02e\xAC\x05\x12\n\x02fr\x07\x05\x02\x02gl\x05\f\x07\x02hi\x07" +
		"\x1E\x02\x02ik\x05\f\x07\x02jh\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mp\x03\x02\x02\x02nl\x03\x02\x02\x02oq\x07" +
		"\x1E\x02\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rg\x03" +
		"\x02\x02\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02t\xAC\x07\x06\x02\x02" +
		"u\x81\x07\t\x02\x02v{\x05\x10\t\x02wx\x07\x1E\x02\x02xz\x05\x10\t\x02" +
		"yw\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02" +
		"|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02~\x80\x07\x1E\x02\x02\x7F~\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81v\x03" +
		"\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\xAC\x07" +
		"\n\x02\x02\x84\x85\t\x02\x02\x02\x85\xAC\x05\x06\x04\b\x86\xAC\x05\b\x05" +
		"\x02\x87\x93\x07\x07\x02\x02\x88\x8D\x05\x10\t\x02\x89\x8A\x07\x1E\x02" +
		"\x02\x8A\x8C\x05\x10\t\x02\x8B\x89\x03\x02\x02\x02\x8C\x8F\x03\x02\x02" +
		"\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x91\x03\x02\x02" +
		"\x02\x8F\x8D\x03\x02\x02\x02\x90\x92\x07\x1E\x02\x02\x91\x90\x03\x02\x02" +
		"\x02\x91\x92\x03\x02\x02\x02\x92\x94\x03\x02\x02\x02\x93\x88\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07\b\x02" +
		"\x02\x96\xAC\x05\x06\x04\x05\x97\xA3\x07\x05\x02\x02\x98\x9D\x05\x10\t" +
		"\x02\x99\x9A\x07\x1E\x02\x02\x9A\x9C\x05\x10\t\x02\x9B\x99\x03\x02\x02" +
		"\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02" +
		"\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA2\x07\x1E\x02" +
		"\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02" +
		"\x02\xA3\x98\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02\x02" +
		"\x02\xA5\xA6\x07\x06\x02\x02\xA6\xAC\x05\x06\x04\x04\xA7\xA8\x07\x07\x02" +
		"\x02\xA8\xA9\x05\x06\x04\x02\xA9\xAA\x07\b\x02\x02\xAA\xAC\x03\x02\x02" +
		"\x02\xABd\x03\x02\x02\x02\xABf\x03\x02\x02\x02\xABu\x03\x02\x02\x02\xAB" +
		"\x84\x03\x02\x02\x02\xAB\x86\x03\x02\x02\x02\xAB\x87\x03\x02\x02\x02\xAB" +
		"\x97\x03\x02\x02\x02\xAB\xA7\x03\x02\x02\x02\xAC\xD7\x03\x02\x02\x02\xAD" +
		"\xAE\f\x07\x02\x02\xAE\xAF\t\x02\x02\x02\xAF\xD6\x05\x06\x04\b\xB0\xB1" +
		"\f\f\x02\x02\xB1\xBD\x07\x07\x02\x02\xB2\xB7\x05\x06\x04\x02\xB3\xB4\x07" +
		"\x1E\x02\x02\xB4\xB6\x05\x06\x04\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB9\x03" +
		"\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBB\x03" +
		"\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x07\x1E\x02\x02\xBB\xBA\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xB2\x03" +
		"\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xD6\x07" +
		"\b\x02\x02\xC0\xC1\f\v\x02\x02\xC1\xCD\x07\x05\x02\x02\xC2\xC7\x05\x06" +
		"\x04\x02\xC3\xC4\x07\x1E\x02\x02\xC4\xC6\x05\x06\x04\x02\xC5\xC3\x03\x02" +
		"\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02" +
		"\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCC\x07\x1E" +
		"\x02\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02" +
		"\x02\x02\xCD\xC2\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02" +
		"\x02\x02\xCF\xD6\x07\x06\x02\x02\xD0\xD1\f\n\x02\x02\xD1\xD6\x07\"\x02" +
		"\x02\xD2\xD3\f\t\x02\x02\xD3\xD4\x07\x1F\x02\x02\xD4\xD6\x05\x12\n\x02" +
		"\xD5\xAD\x03\x02\x02\x02\xD5\xB0\x03\x02\x02\x02\xD5\xC0\x03\x02\x02\x02" +
		"\xD5\xD0\x03\x02\x02\x02\xD5\xD2\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02" +
		"\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x07\x03\x02\x02\x02" +
		"\xD9\xD7\x03\x02\x02\x02\xDA\xDF\x07&\x02\x02\xDB\xDF\x07%\x02\x02\xDC" +
		"\xDF\x07(\x02\x02\xDD\xDF\x07\'\x02\x02\xDE\xDA\x03\x02\x02\x02\xDE\xDB" +
		"\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\t" +
		"\x03\x02\x02\x02\xE0\xE1\x07\x1D\x02\x02\xE1\xEF\x05\x04\x03\x02\xE2\xE4" +
		"\x07\x1D\x02\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5" +
		"\x03\x02\x02\x02\xE5\xE6\x07,\x02\x02\xE6\xE9\x07\x03\x02\x02\xE7\xEA" +
		"\x05\x04\x03\x02\xE8\xEA\x07,\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8" +
		"\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x07\x04\x02\x02\xEE\xE0" +
		"\x03\x02\x02\x02\xEE\xE3\x03\x02\x02\x02\xEF\v\x03\x02\x02\x02\xF0\xF1" +
		"\x05\x06\x04\x02\xF1\xF2\x07\x1D\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xF0" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6" +
		"\x05\x06\x04\x02\xF6\r\x03\x02\x02\x02\xF7\xFC\x05\x10\t\x02\xF8\xF9\x07" +
		"\x1E\x02\x02\xF9\xFB\x05\x10\t\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03" +
		"\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u0100" +
		"\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0101\x07\x1E\x02\x02\u0100" +
		"\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\x0F\x03\x02\x02" +
		"\x02\u0102\u0104\x05\x14\v\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104" +
		"\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u010B\x05\x12\n\x02" +
		"\u0106\u0107\x05\x06\x04\x02\u0107\u0108\x05\n\x06\x02\u0108\u010C\x03" +
		"\x02\x02\x02\u0109\u010C\x05\x06\x04\x02\u010A\u010C\x05\n\x06\x02\u010B" +
		"\u0106\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02" +
		"\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\x11\x03\x02\x02\x02\u010D\u011C" +
		"\t\x02\x02\x02\u010E\u010F\x07#\x02\x02\u010F\u0114\x05\x10\t\x02\u0110" +
		"\u0111\x07\x1E\x02\x02\u0111\u0113\x05\x10\t\x02\u0112\u0110\x03\x02\x02" +
		"\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115" +
		"\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02" +
		"\u0117\u0119\x07\x1E\x02\x02\u0118\u0117\x03\x02\x02\x02\u0118\u0119\x03" +
		"\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011B\x07$\x02\x02\u011B" +
		"\u011D\x03\x02\x02\x02\u011C\u010E\x03\x02\x02\x02\u011C\u011D\x03\x02" +
		"\x02\x02\u011D\x13\x03\x02\x02\x02\u011E\u011F\t\x03\x02\x02\u011F\x15" +
		"\x03\x02\x02\x02/\x18\x1A%)+37JOVblpr{\x7F\x81\x8D\x91\x93\x9D\xA1\xA3" +
		"\xAB\xB7\xBB\xBD\xC7\xCB\xCD\xD5\xD7\xDE\xE3\xE9\xEB\xEE\xF3\xFC\u0100" +
		"\u0103\u010B\u0114\u0118\u011C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
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
export class ImportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public _expr!: ExprContext;
	public _members: ExprContext[] = [];
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForStatementContext extends StatementContext {
	public _value!: ParameterContext;
	public _index!: ParameterContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(XonParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileStatementContext extends StatementContext {
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DoWhileStatementContext extends StatementContext {
	public DO(): TerminalNode { return this.getToken(XonParser.DO, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public _thenBody!: BodyContext;
	public _elseBody!: BodyContext;
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public BREAK(): TerminalNode { return this.getToken(XonParser.BREAK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(XonParser.RETURN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExprContext;
	public _expect!: ExprContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParameterStatementContext extends StatementContext {
	public parameter(): ParameterContext {
		return this.getRuleContext(0, ParameterContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public arrayItem(): ArrayItemContext[];
	public arrayItem(i: number): ArrayItemContext;
	public arrayItem(i?: number): ArrayItemContext | ArrayItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayItemContext);
		} else {
			return this.getRuleContext(i, ArrayItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExprContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPERATOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPERATOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexerExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExprContext) {
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
export class IntegerLiteralContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(XonParser.INTEGER_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(XonParser.FLOAT_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(XonParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RegexLiteralContext extends LiteralContext {
	public REGEX_LITERAL(): TerminalNode { return this.getToken(XonParser.REGEX_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
	public copyFrom(ctx: BodyContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleBodyContext extends BodyContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MultipleBodyContext extends BodyContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ArrayItemContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_arrayItem; }
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameters; }
}


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public modifier(): ModifierContext | undefined {
		return this.tryGetRuleContext(0, ModifierContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class IdContext extends ParserRuleContext {
	public _name!: Token;
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPERATOR, 0); }
	public GENERIC_LEFT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GENERIC_LEFT, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public GENERIC_RIGHT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GENERIC_RIGHT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


export class ModifierContext extends ParserRuleContext {
	public _name!: Token;
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(XonParser.ENUM, 0); }
	public MODEL(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_modifier; }
}


