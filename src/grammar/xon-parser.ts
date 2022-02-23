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
	public static readonly RULE_definition = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_expr = 3;
	public static readonly RULE_literal = 4;
	public static readonly RULE_body = 5;
	public static readonly RULE_arrayItem = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_id = 9;
	public static readonly RULE_modifier = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "definition", "statement", "expr", "literal", "body", "arrayItem", 
		"parameters", "parameter", "id", "modifier",
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
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.PREFIX) | (1 << XonParser.INFIX) | (1 << XonParser.OBJECT) | (1 << XonParser.MODEL) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)) | (1 << (XonParser.NL - 35)))) !== 0)) {
				{
				this.state = 25;
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
				case XonParser.FLOAT_LITERAL:
				case XonParser.INTEGER_LITERAL:
				case XonParser.REGEX_LITERAL:
				case XonParser.STRING_LITERAL:
				case XonParser.PREPROCESSOR:
				case XonParser.ID:
				case XonParser.OPERATOR:
					{
					this.state = 22;
					this.statement();
					}
					break;
				case XonParser.PREFIX:
				case XonParser.INFIX:
				case XonParser.OBJECT:
				case XonParser.MODEL:
				case XonParser.ENUM:
					{
					this.state = 23;
					this.definition();
					}
					break;
				case XonParser.NL:
					{
					this.state = 24;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 29;
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
		this.enterRule(_localctx, 2, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.modifier();
			this.state = 31;
			this.id();
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 32;
				this.expr(0);
				}
				break;
			}
			this.state = 44;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 35;
				this.match(XonParser.NL);
				this.state = 36;
				this.match(XonParser.INDENT);
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 39;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.PREFIX:
					case XonParser.INFIX:
					case XonParser.OBJECT:
					case XonParser.MODEL:
					case XonParser.ENUM:
					case XonParser.ID:
					case XonParser.OPERATOR:
						{
						this.state = 37;
						this.parameter();
						}
						break;
					case XonParser.NL:
						{
						this.state = 38;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.PREFIX - 21)) | (1 << (XonParser.INFIX - 21)) | (1 << (XonParser.OBJECT - 21)) | (1 << (XonParser.MODEL - 21)) | (1 << (XonParser.ENUM - 21)) | (1 << (XonParser.ID - 21)) | (1 << (XonParser.OPERATOR - 21)) | (1 << (XonParser.NL - 21)))) !== 0));
				this.state = 43;
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
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.match(XonParser.IMPORT);
				this.state = 47;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 48;
					this.match(XonParser.COLON);
					this.state = 49;
					(_localctx as ImportStatementContext)._expr = this.expr(0);
					(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
					this.state = 54;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 50;
							this.match(XonParser.COMMA);
							this.state = 51;
							(_localctx as ImportStatementContext)._expr = this.expr(0);
							(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
							}
							}
						}
						this.state = 56;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
					}
					this.state = 58;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 57;
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
				this.state = 62;
				this.match(XonParser.EXPORT);
				this.state = 63;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.match(XonParser.FOR);
				this.state = 72;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 65;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 68;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 66;
						this.match(XonParser.COMMA);
						this.state = 67;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 70;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 74;
				this.expr(0);
				this.state = 75;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 77;
				this.match(XonParser.WHILE);
				this.state = 78;
				this.expr(0);
				this.state = 79;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 81;
				this.match(XonParser.DO);
				this.state = 82;
				this.body();
				this.state = 83;
				this.match(XonParser.WHILE);
				this.state = 84;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 86;
				this.match(XonParser.IF);
				this.state = 87;
				this.expr(0);
				this.state = 88;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 91;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 89;
					this.match(XonParser.ELSE);
					this.state = 90;
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
				this.state = 93;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 94;
				this.match(XonParser.RETURN);
				this.state = 96;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 95;
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
				this.state = 98;
				this.match(XonParser.ACTUAL);
				this.state = 99;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 100;
					this.match(XonParser.NL);
					}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 105;
				this.match(XonParser.EXPECT);
				this.state = 106;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 108;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 109;
				this.id();
				this.state = 110;
				this.match(XonParser.ASSIGN);
				this.state = 111;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 113;
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
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 117;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
					{
					this.state = 119;
					this.arrayItem();
					this.state = 124;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 120;
							this.match(XonParser.COMMA);
							this.state = 121;
							this.arrayItem();
							}
							}
						}
						this.state = 126;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					}
					this.state = 128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 127;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 132;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				this.match(XonParser.OPEN_BRACE);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.PREFIX - 21)) | (1 << (XonParser.INFIX - 21)) | (1 << (XonParser.OBJECT - 21)) | (1 << (XonParser.MODEL - 21)) | (1 << (XonParser.ENUM - 21)) | (1 << (XonParser.ID - 21)) | (1 << (XonParser.OPERATOR - 21)))) !== 0)) {
					{
					this.state = 134;
					this.parameter();
					this.state = 139;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 148;
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
				this.state = 149;
				this.expr(6);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 151;
				this.match(XonParser.OPEN_PAREN);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.PREFIX - 21)) | (1 << (XonParser.INFIX - 21)) | (1 << (XonParser.OBJECT - 21)) | (1 << (XonParser.MODEL - 21)) | (1 << (XonParser.ENUM - 21)) | (1 << (XonParser.ID - 21)) | (1 << (XonParser.OPERATOR - 21)))) !== 0)) {
					{
					this.state = 152;
					this.parameter();
					this.state = 157;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 153;
							this.match(XonParser.COMMA);
							this.state = 154;
							this.parameter();
							}
							}
						}
						this.state = 159;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
					}
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 160;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 165;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 166;
				this.expr(3);
				}
				break;

			case 7:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 167;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.PREFIX - 21)) | (1 << (XonParser.INFIX - 21)) | (1 << (XonParser.OBJECT - 21)) | (1 << (XonParser.MODEL - 21)) | (1 << (XonParser.ENUM - 21)) | (1 << (XonParser.ID - 21)) | (1 << (XonParser.OPERATOR - 21)))) !== 0)) {
					{
					this.state = 168;
					this.parameter();
					this.state = 173;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 169;
							this.match(XonParser.COMMA);
							this.state = 170;
							this.parameter();
							}
							}
						}
						this.state = 175;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
					}
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 176;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 181;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 182;
				this.expr(2);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.match(XonParser.OPEN_PAREN);
				this.state = 184;
				this.expr(0);
				this.state = 185;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 231;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 229;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 189;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 190;
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
						this.state = 191;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 192;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 193;
						this.match(XonParser.OPEN_PAREN);
						this.state = 205;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
							{
							this.state = 194;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 199;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 195;
									this.match(XonParser.COMMA);
									this.state = 196;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 201;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
							}
							this.state = 203;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 202;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 207;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 208;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 209;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
							{
							this.state = 210;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 215;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 211;
									this.match(XonParser.COMMA);
									this.state = 212;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 217;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
							}
							this.state = 219;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 218;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 223;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 4:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 224;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 225;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 226;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 227;
						this.match(XonParser.DOT);
						this.state = 228;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
		this.enterRule(_localctx, 8, XonParser.RULE_literal);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 234;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 235;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 237;
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
		this.enterRule(_localctx, 10, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.match(XonParser.COLON);
				this.state = 241;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 242;
					this.match(XonParser.COLON);
					}
				}

				this.state = 245;
				this.match(XonParser.NL);
				this.state = 246;
				this.match(XonParser.INDENT);
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 249;
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
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.OPERATOR:
						{
						this.state = 247;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 248;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.REGEX_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
				this.state = 253;
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
		this.enterRule(_localctx, 12, XonParser.RULE_arrayItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.expr(0);
				this.state = 257;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 261;
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
		this.enterRule(_localctx, 14, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.parameter();
			this.state = 268;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 264;
					this.match(XonParser.COMMA);
					this.state = 265;
					this.parameter();
					}
					}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 271;
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
		this.enterRule(_localctx, 16, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.PREFIX) | (1 << XonParser.INFIX) | (1 << XonParser.OBJECT) | (1 << XonParser.MODEL) | (1 << XonParser.ENUM))) !== 0)) {
				{
				this.state = 274;
				this.modifier();
				}
			}

			this.state = 277;
			this.id();
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 278;
				this.expr(0);
				this.state = 279;
				this.body();
				}
				break;

			case 2:
				{
				this.state = 281;
				this.expr(0);
				}
				break;

			case 3:
				{
				this.state = 282;
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
		this.enterRule(_localctx, 18, XonParser.RULE_id);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
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
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 286;
				this.match(XonParser.GENERIC_LEFT);
				this.state = 287;
				this.parameter();
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 288;
						this.match(XonParser.COMMA);
						this.state = 289;
						this.parameter();
						}
						}
					}
					this.state = 294;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 295;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 298;
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
		this.enterRule(_localctx, 20, XonParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
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
		case 3:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u0133\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x02\x07\x02\x1C\n\x02\f\x02\x0E\x02\x1F\v\x02\x03\x03\x03\x03\x03" +
		"\x03\x05\x03$\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03*\n\x03\r\x03" +
		"\x0E\x03+\x03\x03\x05\x03/\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x047\n\x04\f\x04\x0E\x04:\v\x04\x03\x04\x05\x04=\n\x04\x05" +
		"\x04?\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04G\n" +
		"\x04\x03\x04\x03\x04\x05\x04K\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04^\n\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04c\n\x04\x03\x04\x03\x04\x03\x04\x06\x04h\n\x04\r\x04\x0E\x04i\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04u\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05}\n" +
		"\x05\f\x05\x0E\x05\x80\v\x05\x03\x05\x05\x05\x83\n\x05\x05\x05\x85\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\x8C\n\x05\f\x05\x0E\x05" +
		"\x8F\v\x05\x03\x05\x05\x05\x92\n\x05\x05\x05\x94\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\x9E\n\x05\f\x05" +
		"\x0E\x05\xA1\v\x05\x03\x05\x05\x05\xA4\n\x05\x05\x05\xA6\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xAE\n\x05\f\x05\x0E\x05" +
		"\xB1\v\x05\x03\x05\x05\x05\xB4\n\x05\x05\x05\xB6\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xBE\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xC8\n\x05\f\x05\x0E" +
		"\x05\xCB\v\x05\x03\x05\x05\x05\xCE\n\x05\x05\x05\xD0\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xD8\n\x05\f\x05\x0E\x05\xDB" +
		"\v\x05\x03\x05\x05\x05\xDE\n\x05\x05\x05\xE0\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x07\x05\xE8\n\x05\f\x05\x0E\x05\xEB\v\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF1\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xF6\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\xFC\n\x07" +
		"\r\x07\x0E\x07\xFD\x03\x07\x05\x07\u0101\n\x07\x03\b\x03\b\x03\b\x05\b" +
		"\u0106\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\u010D\n\t\f\t\x0E\t\u0110" +
		"\v\t\x03\t\x05\t\u0113\n\t\x03\n\x05\n\u0116\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u011E\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0125" +
		"\n\v\f\v\x0E\v\u0128\v\v\x03\v\x05\v\u012B\n\v\x03\v\x03\v\x05\v\u012F" +
		"\n\v\x03\f\x03\f\x03\f\x02\x02\x03\b\r\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x04\x03\x02*+\x03" +
		"\x02\x17\x1B\x02\u0170\x02\x1D\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06" +
		"t\x03\x02\x02\x02\b\xBD\x03\x02\x02\x02\n\xF0\x03\x02\x02\x02\f\u0100" +
		"\x03\x02\x02\x02\x0E\u0105\x03\x02\x02\x02\x10\u0109\x03\x02\x02\x02\x12" +
		"\u0115\x03\x02\x02\x02\x14\u011F\x03\x02\x02\x02\x16\u0130\x03\x02\x02" +
		"\x02\x18\x1C\x05\x06\x04\x02\x19\x1C\x05\x04\x03\x02\x1A\x1C\x07,\x02" +
		"\x02\x1B\x18\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1A\x03\x02\x02" +
		"\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02" +
		"\x02\x1E\x03\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x05\x16\f\x02!" +
		"#\x05\x14\v\x02\"$\x05\b\x05\x02#\"\x03\x02\x02\x02#$\x03\x02\x02\x02" +
		"$.\x03\x02\x02\x02%&\x07,\x02\x02&)\x07\x03\x02\x02\'*\x05\x12\n\x02(" +
		"*\x07,\x02\x02)\'\x03\x02\x02\x02)(\x03\x02\x02\x02*+\x03\x02\x02\x02" +
		"+)\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02-/\x07\x04\x02\x02" +
		".%\x03\x02\x02\x02./\x03\x02\x02\x02/\x05\x03\x02\x02\x0201\x07\x14\x02" +
		"\x021>\x05\b\x05\x0223\x07\x1D\x02\x0238\x05\b\x05\x0245\x07\x1E\x02\x02" +
		"57\x05\b\x05\x0264\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x02" +
		"89\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02;=\x07\x1E\x02\x02" +
		"<;\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x03\x02\x02\x02>2\x03\x02\x02\x02" +
		">?\x03\x02\x02\x02?u\x03\x02\x02\x02@A\x07\x10\x02\x02Au\x05\b\x05\x02" +
		"BJ\x07\x11\x02\x02CF\x05\x12\n\x02DE\x07\x1E\x02\x02EG\x05\x12\n\x02F" +
		"D\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x07\x13\x02\x02" +
		"IK\x03\x02\x02\x02JC\x03\x02\x02\x02JK\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"LM\x05\b\x05\x02MN\x05\f\x07\x02Nu\x03\x02\x02\x02OP\x07\x16\x02\x02P" +
		"Q\x05\b\x05\x02QR\x05\f\x07\x02Ru\x03\x02\x02\x02ST\x07\r\x02\x02TU\x05" +
		"\f\x07\x02UV\x07\x16\x02\x02VW\x05\b\x05\x02Wu\x03\x02\x02\x02XY\x07\x12" +
		"\x02\x02YZ\x05\b\x05\x02Z]\x05\f\x07\x02[\\\x07\x0E\x02\x02\\^\x05\f\x07" +
		"\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^u\x03\x02\x02\x02_u\x07\f\x02" +
		"\x02`b\x07\x15\x02\x02ac\x05\b\x05\x02ba\x03\x02\x02\x02bc\x03\x02\x02" +
		"\x02cu\x03\x02\x02\x02de\x07\v\x02\x02eg\x05\b\x05\x02fh\x07,\x02\x02" +
		"gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02" +
		"jk\x03\x02\x02\x02kl\x07\x0F\x02\x02lm\x05\b\x05\x02mu\x03\x02\x02\x02" +
		"nu\x07)\x02\x02op\x05\x14\v\x02pq\x07\x1C\x02\x02qr\x05\b\x05\x02ru\x03" +
		"\x02\x02\x02su\x05\b\x05\x02t0\x03\x02\x02\x02t@\x03\x02\x02\x02tB\x03" +
		"\x02\x02\x02tO\x03\x02\x02\x02tS\x03\x02\x02\x02tX\x03\x02\x02\x02t_\x03" +
		"\x02\x02\x02t`\x03\x02\x02\x02td\x03\x02\x02\x02tn\x03\x02\x02\x02to\x03" +
		"\x02\x02\x02ts\x03\x02\x02\x02u\x07\x03\x02\x02\x02vw\b\x05\x01\x02w\xBE" +
		"\x05\x14\v\x02x\x84\x07\x05\x02\x02y~\x05\x0E\b\x02z{\x07\x1E\x02\x02" +
		"{}\x05\x0E\b\x02|z\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x81\x83\x07\x1E\x02\x02\x82\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02" +
		"\x83\x85\x03\x02\x02\x02\x84y\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02" +
		"\x85\x86\x03\x02\x02\x02\x86\xBE\x07\x06\x02\x02\x87\x93\x07\t\x02\x02" +
		"\x88\x8D\x05\x12\n\x02\x89\x8A\x07\x1E\x02\x02\x8A\x8C\x05\x12\n\x02\x8B" +
		"\x89\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D" +
		"\x8E\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90" +
		"\x92\x07\x1E\x02\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92" +
		"\x94\x03\x02\x02\x02\x93\x88\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
		"\x95\x03\x02\x02\x02\x95\xBE\x07\n\x02\x02\x96\x97\t\x02\x02\x02\x97\xBE" +
		"\x05\b\x05\b\x98\xBE\x05\n\x06\x02\x99\xA5\x07\x07\x02\x02\x9A\x9F\x05" +
		"\x12\n\x02\x9B\x9C\x07\x1E\x02\x02\x9C\x9E\x05\x12\n\x02\x9D\x9B\x03\x02" +
		"\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02" +
		"\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA4\x07\x1E" +
		"\x02\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02" +
		"\x02\x02\xA5\x9A\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02" +
		"\x02\x02\xA7\xA8\x07\b\x02\x02\xA8\xBE\x05\b\x05\x05\xA9\xB5\x07\x05\x02" +
		"\x02\xAA\xAF\x05\x12\n\x02\xAB\xAC\x07\x1E\x02\x02\xAC\xAE\x05\x12\n\x02" +
		"\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02" +
		"\xAF\xB0\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02" +
		"\xB2\xB4\x07\x1E\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02" +
		"\xB4\xB6\x03\x02\x02\x02\xB5\xAA\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02" +
		"\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07\x06\x02\x02\xB8\xBE\x05\b\x05\x04" +
		"\xB9\xBA\x07\x07\x02\x02\xBA\xBB\x05\b\x05\x02\xBB\xBC\x07\b\x02\x02\xBC" +
		"\xBE\x03\x02\x02\x02\xBDv\x03\x02\x02\x02\xBDx\x03\x02\x02\x02\xBD\x87" +
		"\x03\x02\x02\x02\xBD\x96\x03\x02\x02\x02\xBD\x98\x03\x02\x02\x02\xBD\x99" +
		"\x03\x02\x02\x02\xBD\xA9\x03\x02\x02\x02\xBD\xB9\x03\x02\x02\x02\xBE\xE9" +
		"\x03\x02\x02\x02\xBF\xC0\f\x07\x02\x02\xC0\xC1\t\x02\x02\x02\xC1\xE8\x05" +
		"\b\x05\b\xC2\xC3\f\f\x02\x02\xC3\xCF\x07\x07\x02\x02\xC4\xC9\x05\b\x05" +
		"\x02\xC5\xC6\x07\x1E\x02\x02\xC6\xC8\x05\b\x05\x02\xC7\xC5\x03\x02\x02" +
		"\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02" +
		"\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCE\x07\x1E\x02" +
		"\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02" +
		"\x02\xCF\xC4\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02" +
		"\x02\xD1\xE8\x07\b\x02\x02\xD2\xD3\f\v\x02\x02\xD3\xDF\x07\x05\x02\x02" +
		"\xD4\xD9\x05\b\x05\x02\xD5\xD6\x07\x1E\x02\x02\xD6\xD8\x05\b\x05\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9" +
		"\xDA\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC" +
		"\xDE\x07\x1E\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE" +
		"\xE0\x03\x02\x02\x02\xDF\xD4\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1\xE8\x07\x06\x02\x02\xE2\xE3\f\n\x02\x02\xE3\xE8" +
		"\x07\"\x02\x02\xE4\xE5\f\t\x02\x02\xE5\xE6\x07\x1F\x02\x02\xE6\xE8\x05" +
		"\x14\v\x02\xE7\xBF\x03\x02\x02\x02\xE7\xC2\x03\x02\x02\x02\xE7\xD2\x03" +
		"\x02\x02\x02\xE7\xE2\x03\x02\x02\x02\xE7\xE4\x03\x02\x02\x02\xE8\xEB\x03" +
		"\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\t\x03" +
		"\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xF1\x07&\x02\x02\xED\xF1\x07" +
		"%\x02\x02\xEE\xF1\x07(\x02\x02\xEF\xF1\x07\'\x02\x02\xF0\xEC\x03\x02\x02" +
		"\x02\xF0\xED\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xEF\x03\x02\x02" +
		"\x02\xF1\v\x03\x02\x02\x02\xF2\xF3\x07\x1D\x02\x02\xF3\u0101\x05\x06\x04" +
		"\x02\xF4\xF6\x07\x1D\x02\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02" +
		"\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x07,\x02\x02\xF8\xFB\x07\x03\x02" +
		"\x02\xF9\xFC\x05\x06\x04\x02\xFA\xFC\x07,\x02\x02\xFB\xF9\x03\x02\x02" +
		"\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x07\x04" +
		"\x02\x02\u0100\xF2\x03\x02\x02\x02\u0100\xF5\x03\x02\x02\x02\u0101\r\x03" +
		"\x02\x02\x02\u0102\u0103\x05\b\x05\x02\u0103\u0104\x07\x1D\x02\x02\u0104" +
		"\u0106\x03\x02\x02\x02\u0105\u0102\x03\x02\x02\x02\u0105\u0106\x03\x02" +
		"\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x05\b\x05\x02\u0108\x0F" +
		"\x03\x02\x02\x02\u0109\u010E\x05\x12\n\x02\u010A\u010B\x07\x1E\x02\x02" +
		"\u010B\u010D\x05\x12\n\x02\u010C\u010A\x03\x02\x02\x02\u010D\u0110\x03" +
		"\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0113\x07\x1E" +
		"\x02\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"\x11\x03\x02\x02\x02\u0114\u0116\x05\x16\f\x02\u0115\u0114\x03\x02\x02" +
		"\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u011D" +
		"\x05\x14\v\x02\u0118\u0119\x05\b\x05\x02\u0119\u011A\x05\f\x07\x02\u011A" +
		"\u011E\x03\x02\x02\x02\u011B\u011E\x05\b\x05\x02\u011C\u011E\x05\f\x07" +
		"\x02\u011D\u0118\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011C" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\x13\x03\x02\x02\x02" +
		"\u011F\u012E\t\x02\x02\x02\u0120\u0121\x07#\x02\x02\u0121\u0126\x05\x12" +
		"\n\x02\u0122\u0123\x07\x1E\x02\x02\u0123\u0125\x05\x12\n\x02\u0124\u0122" +
		"\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02" +
		"\u0126\u0127\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03" +
		"\x02\x02\x02\u0129\u012B\x07\x1E\x02\x02\u012A\u0129\x03\x02\x02\x02\u012A" +
		"\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x07$\x02" +
		"\x02\u012D\u012F\x03\x02\x02\x02\u012E\u0120\x03\x02\x02\x02\u012E\u012F" +
		"\x03\x02\x02\x02\u012F\x15\x03\x02\x02\x02\u0130\u0131\t\x03\x02\x02\u0131" +
		"\x17\x03\x02\x02\x023\x1B\x1D#)+.8<>FJ]bit~\x82\x84\x8D\x91\x93\x9F\xA3" +
		"\xA5\xAF\xB3\xB5\xBD\xC9\xCD\xCF\xD9\xDD\xDF\xE7\xE9\xF0\xF5\xFB\xFD\u0100" +
		"\u0105\u010E\u0112\u0115\u011D\u0126\u012A\u012E";
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
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
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


export class DefinitionContext extends ParserRuleContext {
	public modifier(): ModifierContext {
		return this.getRuleContext(0, ModifierContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
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
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
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


