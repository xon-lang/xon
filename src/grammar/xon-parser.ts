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
	public static readonly ABSTRACT = 9;
	public static readonly ACTUAL = 10;
	public static readonly AS = 11;
	public static readonly BREAK = 12;
	public static readonly CLASS = 13;
	public static readonly DO = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXPECT = 17;
	public static readonly EXPORT = 18;
	public static readonly EXTENSION = 19;
	public static readonly FOR = 20;
	public static readonly IF = 21;
	public static readonly IMPORT = 22;
	public static readonly IN = 23;
	public static readonly INFIX = 24;
	public static readonly IS = 25;
	public static readonly MODEL = 26;
	public static readonly NOT = 27;
	public static readonly OBJECT = 28;
	public static readonly POSTFIX = 29;
	public static readonly PREFIX = 30;
	public static readonly RETURN = 31;
	public static readonly TYPE = 32;
	public static readonly WHILE = 33;
	public static readonly AMPERSAND = 34;
	public static readonly AND = 35;
	public static readonly ASSIGN = 36;
	public static readonly ASTERISK = 37;
	public static readonly AT = 38;
	public static readonly BACK_SLASH = 39;
	public static readonly CARET = 40;
	public static readonly COALESCING = 41;
	public static readonly COLON = 42;
	public static readonly COMMA = 43;
	public static readonly DOT = 44;
	public static readonly EQUAL = 45;
	public static readonly EXCLAMATION = 46;
	public static readonly GREAT_EQUAL = 47;
	public static readonly GREAT = 48;
	public static readonly HASH = 49;
	public static readonly LESS_EQUAL = 50;
	public static readonly LESS = 51;
	public static readonly MINUS = 52;
	public static readonly MODULO = 53;
	public static readonly NOT_EQUAL = 54;
	public static readonly OR = 55;
	public static readonly PIPE = 56;
	public static readonly PLUS = 57;
	public static readonly QUESTION = 58;
	public static readonly RANGE = 59;
	public static readonly SLASH = 60;
	public static readonly SPREAD = 61;
	public static readonly TILDE = 62;
	public static readonly UNDERSCORE = 63;
	public static readonly FLOAT_LITERAL = 64;
	public static readonly INTEGER_LITERAL = 65;
	public static readonly CHAR_LITERAL = 66;
	public static readonly STRING_LITERAL = 67;
	public static readonly REGEX_LITERAL = 68;
	public static readonly PREPROCESSOR = 69;
	public static readonly ID = 70;
	public static readonly NL = 71;
	public static readonly WS = 72;
	public static readonly BLOCK_COMMENT = 73;
	public static readonly LINE_COMMENT = 74;
	public static readonly UNEXPECTED = 75;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_modifier = 6;
	public static readonly RULE_id = 7;
	public static readonly RULE_operator = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expr", "literal", "body", "declaration", "modifier", 
		"id", "operator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'abstract'", "'actual'", "'as'", "'break'", "'class'", "'do'", "'else'", 
		"'enum'", "'expect'", "'export'", "'extension'", "'for'", "'if'", "'import'", 
		"'in'", "'infix'", "'is'", "'model'", "'not'", "'object'", "'postfix'", 
		"'prefix'", "'return'", "'type'", "'while'", "'&'", "'&&'", "'='", "'*'", 
		"'@'", "'\\'", "'^'", "'?.'", "':'", "','", "'.'", "'=='", "'!'", "'>='", 
		"'>'", "'#'", "'<='", "'<'", "'-'", "'%'", "'!='", "'||'", "'|'", "'+'", 
		"'?'", "'..'", "'/'", "'...'", "'~'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AS", 
		"BREAK", "CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", 
		"FOR", "IF", "IMPORT", "IN", "INFIX", "IS", "MODEL", "NOT", "OBJECT", 
		"POSTFIX", "PREFIX", "RETURN", "TYPE", "WHILE", "AMPERSAND", "AND", "ASSIGN", 
		"ASTERISK", "AT", "BACK_SLASH", "CARET", "COALESCING", "COLON", "COMMA", 
		"DOT", "EQUAL", "EXCLAMATION", "GREAT_EQUAL", "GREAT", "HASH", "LESS_EQUAL", 
		"LESS", "MINUS", "MODULO", "NOT_EQUAL", "OR", "PIPE", "PLUS", "QUESTION", 
		"RANGE", "SLASH", "SPREAD", "TILDE", "UNDERSCORE", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"CHAR_LITERAL", "STRING_LITERAL", "REGEX_LITERAL", "PREPROCESSOR", "ID", 
		"NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.NL) {
				{
				{
				this.state = 18;
				this.match(XonParser.NL);
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 24;
					this.statement();
					this.state = 31;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.NL:
						{
						this.state = 26;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 25;
							this.match(XonParser.NL);
							}
							}
							this.state = 28;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === XonParser.NL);
						}
						break;
					case XonParser.EOF:
						{
						this.state = 30;
						this.match(XonParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.match(XonParser.IMPORT);
				this.state = 39;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 40;
				this.match(XonParser.COLON);
				this.state = 41;
				(_localctx as ImportStatementContext)._expr = this.expr(0);
				(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
				this.state = 46;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 42;
						this.match(XonParser.COMMA);
						this.state = 43;
						(_localctx as ImportStatementContext)._expr = this.expr(0);
						(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
						}
						}
					}
					this.state = 48;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 50;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 49;
					this.match(XonParser.COMMA);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.match(XonParser.EXPORT);
				this.state = 53;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.match(XonParser.FOR);
				this.state = 62;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 55;
					(_localctx as ForStatementContext)._value = this.declaration();
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 56;
						this.match(XonParser.COMMA);
						this.state = 57;
						(_localctx as ForStatementContext)._index = this.declaration();
						}
					}

					this.state = 60;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 64;
				this.expr(0);
				this.state = 65;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 67;
				this.match(XonParser.WHILE);
				this.state = 68;
				this.expr(0);
				this.state = 69;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 71;
				this.match(XonParser.DO);
				this.state = 72;
				this.body();
				this.state = 73;
				this.match(XonParser.WHILE);
				this.state = 74;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 76;
				this.match(XonParser.IF);
				this.state = 77;
				this.expr(0);
				this.state = 78;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 81;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 79;
					this.match(XonParser.ELSE);
					this.state = 80;
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
				this.state = 83;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 84;
				this.match(XonParser.RETURN);
				this.state = 86;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 85;
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
				this.state = 88;
				this.match(XonParser.ACTUAL);
				this.state = 89;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 90;
					this.match(XonParser.NL);
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 95;
				this.match(XonParser.EXPECT);
				this.state = 96;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 98;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 99;
				this.declaration();
				}
				break;

			case 12:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 100;
				this.id();
				this.state = 101;
				this.match(XonParser.ASSIGN);
				this.state = 102;
				this.expr(0);
				}
				break;

			case 13:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 104;
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
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 108;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 109;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
					{
					this.state = 110;
					this.expr(0);
					this.state = 115;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 111;
							this.match(XonParser.COMMA);
							this.state = 112;
							this.expr(0);
							}
							}
						}
						this.state = 117;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
					}
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 118;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 123;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 124;
				this.match(XonParser.OPEN_BRACE);
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.MODEL - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 125;
					this.declaration();
					this.state = 130;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 126;
							this.match(XonParser.COMMA);
							this.state = 127;
							this.declaration();
							}
							}
						}
						this.state = 132;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					}
					this.state = 134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 133;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 138;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 139;
				this.match(XonParser.SPREAD);
				this.state = 140;
				this.expr(15);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 141;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (XonParser.NOT - 27)) | (1 << (XonParser.MINUS - 27)) | (1 << (XonParser.PLUS - 27)))) !== 0))) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 142;
				this.expr(14);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 143;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.match(XonParser.OPEN_PAREN);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.MODEL - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 145;
					this.declaration();
					this.state = 150;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 146;
							this.match(XonParser.COMMA);
							this.state = 147;
							this.declaration();
							}
							}
						}
						this.state = 152;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 153;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 158;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 159;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.MODEL - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 163;
					this.declaration();
					this.state = 168;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 164;
							this.match(XonParser.COMMA);
							this.state = 165;
							this.declaration();
							}
							}
						}
						this.state = 170;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					}
					this.state = 172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 171;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 176;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 178;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 180;
				this.match(XonParser.OPEN_PAREN);
				this.state = 181;
				this.expr(0);
				this.state = 182;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 250;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 186;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 187;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 188;
						(_localctx as PowExpressionContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 189;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 190;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.SLASH - 37)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 191;
						(_localctx as MulDivModExpressionContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 192;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 193;
						(_localctx as AddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.MINUS || _la === XonParser.PLUS)) {
							(_localctx as AddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 194;
						(_localctx as AddSubExpressionContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 195;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 196;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 197;
						(_localctx as RangeExpressionContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 198;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 199;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (XonParser.GREAT_EQUAL - 47)) | (1 << (XonParser.GREAT - 47)) | (1 << (XonParser.LESS_EQUAL - 47)) | (1 << (XonParser.LESS - 47)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 200;
						(_localctx as RelationalExpressionContext)._right = this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 201;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 202;
						(_localctx as EqualityExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.NOT_EQUAL)) {
							(_localctx as EqualityExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 203;
						(_localctx as EqualityExpressionContext)._right = this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 204;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 205;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 206;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 207;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 208;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 209;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 210;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 211;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 212;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 213;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 214;
						this.match(XonParser.OPEN_PAREN);
						this.state = 226;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 215;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 220;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 216;
									this.match(XonParser.COMMA);
									this.state = 217;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 222;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
							}
							this.state = 224;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 223;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 228;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 229;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 230;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 242;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 231;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 236;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 232;
									this.match(XonParser.COMMA);
									this.state = 233;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 238;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							}
							this.state = 240;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 239;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 244;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 12:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 245;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 246;
						this.match(XonParser.QUESTION);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 247;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 248;
						this.match(XonParser.DOT);
						this.state = 249;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
			this.state = 260;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 257;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 258;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 259;
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
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this.match(XonParser.COLON);
				this.state = 263;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 264;
					this.match(XonParser.COLON);
					}
				}

				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 267;
					this.match(XonParser.NL);
					}
					}
					this.state = 270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 272;
				this.match(XonParser.INDENT);
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 275;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.CLASS:
					case XonParser.DO:
					case XonParser.ENUM:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.MODEL:
					case XonParser.NOT:
					case XonParser.OBJECT:
					case XonParser.RETURN:
					case XonParser.TYPE:
					case XonParser.WHILE:
					case XonParser.ASSIGN:
					case XonParser.ASTERISK:
					case XonParser.CARET:
					case XonParser.GREAT:
					case XonParser.LESS:
					case XonParser.MINUS:
					case XonParser.MODULO:
					case XonParser.PLUS:
					case XonParser.SLASH:
					case XonParser.SPREAD:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 273;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 274;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CLASS) | (1 << XonParser.DO) | (1 << XonParser.ENUM) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.TYPE - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 279;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.modifier();
				this.state = 283;
				this.id();
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
					{
					this.state = 284;
					_localctx._type = this.expr(0);
					}
				}

				this.state = 287;
				this.match(XonParser.IS);
				this.state = 288;
				_localctx._base = this.expr(0);
				this.state = 290;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 289;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.modifier();
				this.state = 293;
				this.id();
				this.state = 295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 294;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 298;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 297;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 300;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 303;
				this.id();
				this.state = 305;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 304;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 308;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 307;
					this.body();
					}
					break;
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
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.MODEL - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)))) !== 0))) {
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_id);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				this.state = 314;
				_localctx._name = this.match(XonParser.ID);
				}
				break;
			case XonParser.ASSIGN:
			case XonParser.ASTERISK:
			case XonParser.CARET:
			case XonParser.GREAT:
			case XonParser.LESS:
			case XonParser.MINUS:
			case XonParser.MODULO:
			case XonParser.PLUS:
			case XonParser.SLASH:
				{
				this.state = 315;
				this.operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 318;
				this.match(XonParser.LESS);
				this.state = 319;
				this.match(XonParser.PIPE);
				this.state = 320;
				this.declaration();
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 321;
						this.match(XonParser.COMMA);
						this.state = 322;
						this.declaration();
						}
						}
					}
					this.state = 327;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 328;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 331;
				this.match(XonParser.PIPE);
				this.state = 332;
				this.match(XonParser.GREAT);
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)))) !== 0))) {
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
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 19);

		case 10:
			return this.precpred(this._ctx, 18);

		case 11:
			return this.precpred(this._ctx, 17);

		case 12:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u0155\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
		"\x02\x19\v\x02\x03\x02\x03\x02\x06\x02\x1D\n\x02\r\x02\x0E\x02\x1E\x03" +
		"\x02\x05\x02\"\n\x02\x07\x02$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03/\n\x03\f\x03\x0E\x032\v\x03" +
		"\x03\x03\x05\x035\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03=\n\x03\x03\x03\x03\x03\x05\x03A\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03T\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03Y\n\x03\x03\x03\x03\x03\x03\x03\x06\x03^\n\x03\r\x03\x0E" +
		"\x03_\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03l\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04t\n\x04\f\x04\x0E\x04w\v\x04\x03\x04\x05\x04z\n\x04\x05" +
		"\x04|\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x83\n\x04" +
		"\f\x04\x0E\x04\x86\v\x04\x03\x04\x05\x04\x89\n\x04\x05\x04\x8B\n\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\x97\n\x04\f\x04\x0E\x04\x9A\v\x04\x03\x04\x05\x04\x9D\n\x04" +
		"\x05\x04\x9F\n\x04\x03\x04\x03\x04\x05\x04\xA3\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xA9\n\x04\f\x04\x0E\x04\xAC\v\x04\x03\x04\x05\x04" +
		"\xAF\n\x04\x05\x04\xB1\n\x04\x03\x04\x03\x04\x05\x04\xB5\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\xBB\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xDD\n\x04\f\x04\x0E\x04\xE0\v\x04\x03\x04\x05\x04" +
		"\xE3\n\x04\x05\x04\xE5\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\xED\n\x04\f\x04\x0E\x04\xF0\v\x04\x03\x04\x05\x04\xF3\n\x04" +
		"\x05\x04\xF5\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04\xFD\n\x04\f\x04\x0E\x04\u0100\v\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\u0107\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\u010C\n\x06" +
		"\x03\x06\x06\x06\u010F\n\x06\r\x06\x0E\x06\u0110\x03\x06\x03\x06\x03\x06" +
		"\x06\x06\u0116\n\x06\r\x06\x0E\x06\u0117\x03\x06\x05\x06\u011B\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u0120\n\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u0125\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u012A\n\x07\x03\x07\x05\x07" +
		"\u012D\n\x07\x03\x07\x05\x07\u0130\n\x07\x03\x07\x03\x07\x05\x07\u0134" +
		"\n\x07\x03\x07\x05\x07\u0137\n\x07\x05\x07\u0139\n\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x05\t\u013F\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0146\n\t" +
		"\f\t\x0E\t\u0149\v\t\x03\t\x05\t\u014C\n\t\x03\t\x03\t\x03\t\x05\t\u0151" +
		"\n\t\x03\n\x03\n\x03\n\x03%\x02\x03\x06\v\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\n\x05\x02\x1D\x1D66;;\x05\x02" +
		"\'\'77>>\x04\x0266;;\x04\x021245\x04\x02//88\x05\x02\r\r\x19\x19\x1B\x1B" +
		"\x07\x02\x0F\x0F\x12\x12\x1C\x1C\x1E\x1E\"\"\b\x02&\'**2257;;>>\x02\u01A1" +
		"\x02\x17\x03\x02\x02\x02\x04k\x03\x02\x02\x02\x06\xBA\x03\x02\x02\x02" +
		"\b\u0106\x03\x02\x02\x02\n\u011A\x03\x02\x02\x02\f\u0138\x03\x02\x02\x02" +
		"\x0E\u013A\x03\x02\x02\x02\x10\u013E\x03\x02\x02\x02\x12\u0152\x03\x02" +
		"\x02\x02\x14\x16\x07I\x02\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02" +
		"\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18%\x03\x02" +
		"\x02\x02\x19\x17\x03\x02\x02\x02\x1A!\x05\x04\x03\x02\x1B\x1D\x07I\x02" +
		"\x02\x1C\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1C\x03\x02\x02" +
		"\x02\x1E\x1F\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \"\x07\x02\x02\x03" +
		"!\x1C\x03\x02\x02\x02! \x03\x02\x02\x02\"$\x03\x02\x02\x02#\x1A\x03\x02" +
		"\x02\x02$\'\x03\x02\x02\x02%&\x03\x02\x02\x02%#\x03\x02\x02\x02&\x03\x03" +
		"\x02\x02\x02\'%\x03\x02\x02\x02()\x07\x18\x02\x02)*\x05\x06\x04\x02*+" +
		"\x07,\x02\x02+0\x05\x06\x04\x02,-\x07-\x02\x02-/\x05\x06\x04\x02.,\x03" +
		"\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x0214\x03" +
		"\x02\x02\x0220\x03\x02\x02\x0235\x07-\x02\x0243\x03\x02\x02\x0245\x03" +
		"\x02\x02\x025l\x03\x02\x02\x0267\x07\x14\x02\x027l\x05\x06\x04\x028@\x07" +
		"\x16\x02\x029<\x05\f\x07\x02:;\x07-\x02\x02;=\x05\f\x07\x02<:\x03\x02" +
		"\x02\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x07\x19\x02\x02?A\x03\x02" +
		"\x02\x02@9\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x05\x06" +
		"\x04\x02CD\x05\n\x06\x02Dl\x03\x02\x02\x02EF\x07#\x02\x02FG\x05\x06\x04" +
		"\x02GH\x05\n\x06\x02Hl\x03\x02\x02\x02IJ\x07\x10\x02\x02JK\x05\n\x06\x02" +
		"KL\x07#\x02\x02LM\x05\x06\x04\x02Ml\x03\x02\x02\x02NO\x07\x17\x02\x02" +
		"OP\x05\x06\x04\x02PS\x05\n\x06\x02QR\x07\x11\x02\x02RT\x05\n\x06\x02S" +
		"Q\x03\x02\x02\x02ST\x03\x02\x02\x02Tl\x03\x02\x02\x02Ul\x07\x0E\x02\x02" +
		"VX\x07!\x02\x02WY\x05\x06\x04\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Yl\x03\x02\x02\x02Z[\x07\f\x02\x02[]\x05\x06\x04\x02\\^\x07I\x02\x02]" +
		"\\\x03\x02\x02\x02^_\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02ab\x07\x13\x02\x02bc\x05\x06\x04\x02cl\x03\x02\x02\x02" +
		"dl\x07G\x02\x02el\x05\f\x07\x02fg\x05\x10\t\x02gh\x07&\x02\x02hi\x05\x06" +
		"\x04\x02il\x03\x02\x02\x02jl\x05\x06\x04\x02k(\x03\x02\x02\x02k6\x03\x02" +
		"\x02\x02k8\x03\x02\x02\x02kE\x03\x02\x02\x02kI\x03\x02\x02\x02kN\x03\x02" +
		"\x02\x02kU\x03\x02\x02\x02kV\x03\x02\x02\x02kZ\x03\x02\x02\x02kd\x03\x02" +
		"\x02\x02ke\x03\x02\x02\x02kf\x03\x02\x02\x02kj\x03\x02\x02\x02l\x05\x03" +
		"\x02\x02\x02mn\b\x04\x01\x02n\xBB\x05\x10\t\x02o{\x07\x05\x02\x02pu\x05" +
		"\x06\x04\x02qr\x07-\x02\x02rt\x05\x06\x04\x02sq\x03\x02\x02\x02tw\x03" +
		"\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03" +
		"\x02\x02\x02xz\x07-\x02\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z|\x03" +
		"\x02\x02\x02{p\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\xBB" +
		"\x07\x06\x02\x02~\x8A\x07\t\x02\x02\x7F\x84\x05\f\x07\x02\x80\x81\x07" +
		"-\x02\x02\x81\x83\x05\f\x07\x02\x82\x80\x03\x02\x02\x02\x83\x86\x03\x02" +
		"\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x88\x03\x02" +
		"\x02\x02\x86\x84\x03\x02\x02\x02\x87\x89\x07-\x02\x02\x88\x87\x03\x02" +
		"\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8B\x03\x02\x02\x02\x8A\x7F\x03\x02" +
		"\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\xBB\x07\n" +
		"\x02\x02\x8D\x8E\x07?\x02\x02\x8E\xBB\x05\x06\x04\x11\x8F\x90\t\x02\x02" +
		"\x02\x90\xBB\x05\x06\x04\x10\x91\xBB\x05\b\x05\x02\x92\x9E\x07\x07\x02" +
		"\x02\x93\x98\x05\f\x07\x02\x94\x95\x07-\x02\x02\x95\x97\x05\f\x07\x02" +
		"\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02" +
		"\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02" +
		"\x9B\x9D\x07-\x02\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
		"\x9D\x9F\x03\x02\x02\x02\x9E\x93\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02" +
		"\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x07\b\x02\x02\xA1\xA3\x05\x06\x04\x02" +
		"\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xBB\x03\x02\x02\x02" +
		"\xA4\xB0\x07\x05\x02\x02\xA5\xAA\x05\f\x07\x02\xA6\xA7\x07-\x02\x02\xA7" +
		"\xA9\x05\f\x07\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA" +
		"\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC" +
		"\xAA\x03\x02\x02\x02\xAD\xAF\x07-\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xA5\x03\x02\x02\x02\xB0" +
		"\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x07\x06\x02\x02\xB3" +
		"\xB5\x05\x06\x04\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5" +
		"\xBB\x03\x02\x02\x02\xB6\xB7\x07\x07\x02\x02\xB7\xB8\x05\x06\x04\x02\xB8" +
		"\xB9\x07\b\x02\x02\xB9\xBB\x03\x02\x02\x02\xBAm\x03\x02\x02\x02\xBAo\x03" +
		"\x02\x02\x02\xBA~\x03\x02\x02\x02\xBA\x8D\x03\x02\x02\x02\xBA\x8F\x03" +
		"\x02\x02\x02\xBA\x91\x03\x02\x02\x02\xBA\x92\x03\x02\x02\x02\xBA\xA4\x03" +
		"\x02\x02\x02\xBA\xB6\x03\x02\x02\x02\xBB\xFE\x03\x02\x02\x02\xBC\xBD\f" +
		"\x0F\x02\x02\xBD\xBE\x07*\x02\x02\xBE\xFD\x05\x06\x04\x10\xBF\xC0\f\x0E" +
		"\x02\x02\xC0\xC1\t\x03\x02\x02\xC1\xFD\x05\x06\x04\x0F\xC2\xC3\f\r\x02" +
		"\x02\xC3\xC4\t\x04\x02\x02\xC4\xFD\x05\x06\x04\x0E\xC5\xC6\f\f\x02\x02" +
		"\xC6\xC7\x07=\x02\x02\xC7\xFD\x05\x06\x04\r\xC8\xC9\f\v\x02\x02\xC9\xCA" +
		"\t\x05\x02\x02\xCA\xFD\x05\x06\x04\f\xCB\xCC\f\n\x02\x02\xCC\xCD\t\x06" +
		"\x02\x02\xCD\xFD\x05\x06\x04\v\xCE\xCF\f\t\x02\x02\xCF\xD0\x07%\x02\x02" +
		"\xD0\xFD\x05\x06\x04\n\xD1\xD2\f\b\x02\x02\xD2\xD3\x079\x02\x02\xD3\xFD" +
		"\x05\x06\x04\t\xD4\xD5\f\x07\x02\x02\xD5\xD6\t\x07\x02\x02\xD6\xFD\x05" +
		"\x06\x04\b\xD7\xD8\f\x15\x02\x02\xD8\xE4\x07\x07\x02\x02\xD9\xDE\x05\x06" +
		"\x04\x02\xDA\xDB\x07-\x02\x02\xDB\xDD\x05\x06\x04\x02\xDC\xDA\x03\x02" +
		"\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02" +
		"\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE3\x07-" +
		"\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5\x03\x02" +
		"\x02\x02\xE4\xD9\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02" +
		"\x02\x02\xE6\xFD\x07\b\x02\x02\xE7\xE8\f\x14\x02\x02\xE8\xF4\x07\x05\x02" +
		"\x02\xE9\xEE\x05\x06\x04\x02\xEA\xEB\x07-\x02\x02\xEB\xED\x05\x06\x04" +
		"\x02\xEC\xEA\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02" +
		"\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02" +
		"\x02\xF1\xF3\x07-\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02" +
		"\x02\xF3\xF5\x03\x02\x02\x02\xF4\xE9\x03\x02\x02\x02\xF4\xF5\x03\x02\x02" +
		"\x02\xF5\xF6\x03\x02\x02\x02\xF6\xFD\x07\x06\x02\x02\xF7\xF8\f\x13\x02" +
		"\x02\xF8\xFD\x07<\x02\x02\xF9\xFA\f\x12\x02\x02\xFA\xFB\x07.\x02\x02\xFB" +
		"\xFD\x05\x10\t\x02\xFC\xBC\x03\x02\x02\x02\xFC\xBF\x03\x02\x02\x02\xFC" +
		"\xC2\x03\x02\x02\x02\xFC\xC5\x03\x02\x02\x02\xFC\xC8\x03\x02\x02\x02\xFC" +
		"\xCB\x03\x02\x02\x02\xFC\xCE\x03\x02\x02\x02\xFC\xD1\x03\x02\x02\x02\xFC" +
		"\xD4\x03\x02\x02\x02\xFC\xD7\x03\x02\x02\x02\xFC\xE7\x03\x02\x02\x02\xFC" +
		"\xF7\x03\x02\x02\x02\xFC\xF9\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\x07\x03\x02\x02\x02" +
		"\u0100\xFE\x03\x02\x02\x02\u0101\u0107\x07C\x02\x02\u0102\u0107\x07B\x02" +
		"\x02\u0103\u0107\x07D\x02\x02\u0104\u0107\x07E\x02\x02\u0105\u0107\x07" +
		"F\x02\x02\u0106\u0101\x03\x02\x02\x02\u0106\u0102\x03\x02\x02\x02\u0106" +
		"\u0103\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0105\x03\x02" +
		"\x02\x02\u0107\t\x03\x02\x02\x02\u0108\u0109\x07,\x02\x02\u0109\u011B" +
		"\x05\x04\x03\x02\u010A\u010C\x07,\x02\x02\u010B\u010A\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03\x02\x02\x02\u010D\u010F\x07" +
		"I\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02" +
		"\x02\x02\u0112\u0115\x07\x03\x02\x02\u0113\u0116\x05\x04\x03\x02\u0114" +
		"\u0116\x07I\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0114\x03\x02\x02" +
		"\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118" +
		"\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x07\x04\x02\x02" +
		"\u011A\u0108\x03\x02\x02\x02\u011A\u010B\x03\x02\x02\x02\u011B\v\x03\x02" +
		"\x02\x02\u011C\u011D\x05\x0E\b\x02\u011D\u011F\x05\x10\t\x02\u011E\u0120" +
		"\x05\x06\x04\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02" +
		"\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x07\x1B\x02\x02\u0122\u0124\x05" +
		"\x06\x04\x02\u0123\u0125\x05\n\x06\x02\u0124\u0123\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0139\x03\x02\x02\x02\u0126\u0127\x05\x0E" +
		"\b\x02\u0127\u0129\x05\x10\t\x02\u0128\u012A\x05\x06\x04\x02\u0129\u0128" +
		"\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02" +
		"\u012B\u012D\x05\n\x06\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03" +
		"\x02\x02\x02\u012D\u0139\x03\x02\x02\x02\u012E\u0130\x07?\x02\x02\u012F" +
		"\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x03\x02" +
		"\x02\x02\u0131\u0133\x05\x10\t\x02\u0132\u0134\x05\x06\x04\x02\u0133\u0132" +
		"\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0136\x03\x02\x02\x02" +
		"\u0135\u0137\x05\n\x06\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03" +
		"\x02\x02\x02\u0137\u0139\x03\x02\x02\x02\u0138\u011C\x03\x02\x02\x02\u0138" +
		"\u0126\x03\x02\x02\x02\u0138\u012F\x03\x02\x02\x02\u0139\r\x03\x02\x02" +
		"\x02\u013A\u013B\t\b\x02\x02\u013B\x0F\x03\x02\x02\x02\u013C\u013F\x07" +
		"H\x02\x02\u013D\u013F\x05\x12\n\x02\u013E\u013C\x03\x02\x02\x02\u013E" +
		"\u013D\x03\x02\x02\x02\u013F\u0150\x03\x02\x02\x02\u0140\u0141\x075\x02" +
		"\x02\u0141\u0142\x07:\x02\x02\u0142\u0147\x05\f\x07\x02\u0143\u0144\x07" +
		"-\x02\x02\u0144\u0146\x05\f\x07\x02\u0145\u0143\x03\x02\x02\x02\u0146" +
		"\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A" +
		"\u014C\x07-\x02\x02\u014B\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02" +
		"\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\x07:\x02\x02\u014E\u014F" +
		"\x072\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u0140\x03\x02\x02\x02" +
		"\u0150\u0151\x03\x02\x02\x02\u0151\x11\x03\x02\x02\x02\u0152\u0153\t\t" +
		"\x02\x02\u0153\x13\x03\x02\x02\x027\x17\x1E!%04<@SX_kuy{\x84\x88\x8A\x98" +
		"\x9C\x9E\xA2\xAA\xAE\xB0\xB4\xBA\xDE\xE2\xE4\xEE\xF2\xF4\xFC\xFE\u0106" +
		"\u010B\u0110\u0115\u0117\u011A\u011F\u0124\u0129\u012C\u012F\u0133\u0136" +
		"\u0138\u013E\u0147\u014B\u0150";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
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
	public EOF(): TerminalNode[];
	public EOF(i: number): TerminalNode;
	public EOF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EOF);
		} else {
			return this.getToken(XonParser.EOF, i);
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
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
	public _value!: DeclarationContext;
	public _index!: DeclarationContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
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
export class DeclarationStatementContext extends StatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
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
export class ObjectExpressionContext extends ExprContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
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
export class SpreadExpressionContext extends ExprContext {
	public SPREAD(): TerminalNode { return this.getToken(XonParser.SPREAD, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExprContext {
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
	public CARET(): TerminalNode { return this.getToken(XonParser.CARET, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExprContext {
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
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExprContext {
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
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExprContext {
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
	public RANGE(): TerminalNode { return this.getToken(XonParser.RANGE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExprContext {
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
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_EQUAL, 0); }
	public GREAT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT_EQUAL, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExprContext {
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
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT_EQUAL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConjunctionExpressionContext extends ExprContext {
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
	public AND(): TerminalNode { return this.getToken(XonParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DisjunctionExpressionContext extends ExprContext {
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
	public OR(): TerminalNode { return this.getToken(XonParser.OR, 0); }
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
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
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
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
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
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
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
export class CharLiteralContext extends LiteralContext {
	public CHAR_LITERAL(): TerminalNode { return this.getToken(XonParser.CHAR_LITERAL, 0); }
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
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
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
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DeclarationContext extends ParserRuleContext {
	public _type!: ExprContext;
	public _base!: ExprContext;
	public modifier(): ModifierContext | undefined {
		return this.tryGetRuleContext(0, ModifierContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_declaration; }
}


export class ModifierContext extends ParserRuleContext {
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(XonParser.TYPE, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLASS, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(XonParser.ENUM, 0); }
	public MODEL(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_modifier; }
}


export class IdContext extends ParserRuleContext {
	public _name!: Token;
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
		}
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
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


export class OperatorContext extends ParserRuleContext {
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


