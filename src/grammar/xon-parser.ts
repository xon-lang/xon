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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expr", "literal", "body", "declaration", "modifier", 
		"id",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.AS) | (1 << XonParser.BREAK) | (1 << XonParser.CLASS) | (1 << XonParser.DO) | (1 << XonParser.ENUM) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.TYPE - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0)) {
				{
				this.state = 18;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OPEN_BRACKET:
				case XonParser.OPEN_PAREN:
				case XonParser.OPEN_BRACE:
				case XonParser.ACTUAL:
				case XonParser.AS:
				case XonParser.BREAK:
				case XonParser.CLASS:
				case XonParser.DO:
				case XonParser.ENUM:
				case XonParser.EXPORT:
				case XonParser.FOR:
				case XonParser.IF:
				case XonParser.IMPORT:
				case XonParser.IN:
				case XonParser.IS:
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
					this.state = 16;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 17;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 22;
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
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 23;
				this.match(XonParser.IMPORT);
				this.state = 24;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 25;
				this.match(XonParser.COLON);
				this.state = 26;
				(_localctx as ImportStatementContext)._expr = this.expr(0);
				(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
				this.state = 31;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 27;
						this.match(XonParser.COMMA);
						this.state = 28;
						(_localctx as ImportStatementContext)._expr = this.expr(0);
						(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
						}
						}
					}
					this.state = 33;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 35;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 34;
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
				this.state = 37;
				this.match(XonParser.EXPORT);
				this.state = 38;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.match(XonParser.FOR);
				this.state = 47;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 40;
					(_localctx as ForStatementContext)._value = this.declaration();
					this.state = 43;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 41;
						this.match(XonParser.COMMA);
						this.state = 42;
						(_localctx as ForStatementContext)._index = this.declaration();
						}
					}

					this.state = 45;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 49;
				this.expr(0);
				this.state = 50;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 52;
				this.match(XonParser.WHILE);
				this.state = 53;
				this.expr(0);
				this.state = 54;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 56;
				this.match(XonParser.DO);
				this.state = 57;
				this.body();
				this.state = 58;
				this.match(XonParser.WHILE);
				this.state = 59;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 61;
				this.match(XonParser.IF);
				this.state = 62;
				this.expr(0);
				this.state = 63;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 66;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 64;
					this.match(XonParser.ELSE);
					this.state = 65;
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
				this.state = 68;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 69;
				this.match(XonParser.RETURN);
				this.state = 71;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 70;
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
				this.state = 73;
				this.match(XonParser.ACTUAL);
				this.state = 74;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 75;
					this.match(XonParser.NL);
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 80;
				this.match(XonParser.EXPECT);
				this.state = 81;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 83;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 84;
				this.declaration();
				}
				break;

			case 12:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 85;
				this.id();
				this.state = 86;
				this.match(XonParser.ASSIGN);
				this.state = 87;
				this.expr(0);
				}
				break;

			case 13:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 89;
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
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 93;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 94;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
					{
					this.state = 95;
					this.expr(0);
					this.state = 100;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 96;
							this.match(XonParser.COMMA);
							this.state = 97;
							this.expr(0);
							}
							}
						}
						this.state = 102;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					}
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 103;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 108;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 109;
				this.match(XonParser.OPEN_BRACE);
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.MODEL - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 110;
					this.declaration();
					this.state = 115;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 111;
							this.match(XonParser.COMMA);
							this.state = 112;
							this.declaration();
							}
							}
						}
						this.state = 117;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 124;
				this.match(XonParser.SPREAD);
				this.state = 125;
				this.expr(15);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
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
				this.state = 127;
				this.expr(14);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 129;
				this.match(XonParser.OPEN_PAREN);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.MODEL - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 130;
					this.declaration();
					this.state = 135;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 131;
							this.match(XonParser.COMMA);
							this.state = 132;
							this.declaration();
							}
							}
						}
						this.state = 137;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 138;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 143;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 145;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 144;
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
				this.state = 147;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.MODEL - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 148;
					this.declaration();
					this.state = 153;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 149;
							this.match(XonParser.COMMA);
							this.state = 150;
							this.declaration();
							}
							}
						}
						this.state = 155;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					}
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 156;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 161;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 163;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 162;
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
			this.state = 237;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 235;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 171;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 172;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 173;
						(_localctx as PowExpressionContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 174;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 175;
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
						this.state = 176;
						(_localctx as MulDivModExpressionContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 177;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 178;
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
						this.state = 179;
						(_localctx as AddSubExpressionContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 180;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 181;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 182;
						(_localctx as RangeExpressionContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 183;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 184;
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
						this.state = 185;
						(_localctx as RelationalExpressionContext)._right = this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 186;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 187;
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
						this.state = 188;
						(_localctx as EqualityExpressionContext)._right = this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 189;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 190;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 191;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 192;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 193;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 194;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 195;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 196;
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
						this.state = 197;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 198;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 199;
						this.match(XonParser.OPEN_PAREN);
						this.state = 211;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 200;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 205;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 201;
									this.match(XonParser.COMMA);
									this.state = 202;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 207;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
							}
							this.state = 209;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 208;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 213;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 214;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 215;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 227;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 216;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 221;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 217;
									this.match(XonParser.COMMA);
									this.state = 218;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 223;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
							}
							this.state = 225;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 224;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 229;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 12:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 230;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 231;
						this.match(XonParser.QUESTION);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 232;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 233;
						this.match(XonParser.DOT);
						this.state = 234;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 239;
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
		this.enterRule(_localctx, 6, XonParser.RULE_literal);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 242;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 243;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 244;
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
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.match(XonParser.COLON);
				this.state = 248;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 249;
					this.match(XonParser.COLON);
					}
				}

				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 252;
					this.match(XonParser.NL);
					}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 257;
				this.match(XonParser.INDENT);
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 260;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.AS:
					case XonParser.BREAK:
					case XonParser.CLASS:
					case XonParser.DO:
					case XonParser.ENUM:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.IN:
					case XonParser.IS:
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
						this.state = 258;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 259;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.AS) | (1 << XonParser.BREAK) | (1 << XonParser.CLASS) | (1 << XonParser.DO) | (1 << XonParser.ENUM) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.TYPE - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 264;
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
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 267;
				this.modifier();
				this.state = 268;
				this.id();
				this.state = 270;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 272;
				this.match(XonParser.IS);
				this.state = 273;
				_localctx._base = this.expr(0);
				this.state = 275;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 274;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.modifier();
				this.state = 278;
				this.id();
				this.state = 280;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 279;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 283;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 282;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 285;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 288;
				this.id();
				this.state = 290;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 289;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 293;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 292;
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
			this.state = 297;
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
			this.state = 299;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.ID - 48)))) !== 0))) {
				_localctx._name = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 300;
				this.match(XonParser.LESS);
				this.state = 301;
				this.match(XonParser.PIPE);
				this.state = 302;
				this.declaration();
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 303;
						this.match(XonParser.COMMA);
						this.state = 304;
						this.declaration();
						}
						}
					}
					this.state = 309;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 310;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 313;
				this.match(XonParser.PIPE);
				this.state = 314;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u0141\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x07\x02\x15\n\x02\f\x02\x0E" +
		"\x02\x18\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		" \n\x03\f\x03\x0E\x03#\v\x03\x03\x03\x05\x03&\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03.\n\x03\x03\x03\x03\x03\x05\x032\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03E\n\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x06\x03O\n\x03\r\x03\x0E\x03P\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03]\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04e\n\x04\f\x04\x0E\x04h\v\x04" +
		"\x03\x04\x05\x04k\n\x04\x05\x04m\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04t\n\x04\f\x04\x0E\x04w\v\x04\x03\x04\x05\x04z\n\x04\x05" +
		"\x04|\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\x88\n\x04\f\x04\x0E\x04\x8B\v\x04\x03\x04" +
		"\x05\x04\x8E\n\x04\x05\x04\x90\n\x04\x03\x04\x03\x04\x05\x04\x94\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x9A\n\x04\f\x04\x0E\x04\x9D\v" +
		"\x04\x03\x04\x05\x04\xA0\n\x04\x05\x04\xA2\n\x04\x03\x04\x03\x04\x05\x04" +
		"\xA6\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAC\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04\xCE\n\x04\f\x04\x0E\x04\xD1\v\x04" +
		"\x03\x04\x05\x04\xD4\n\x04\x05\x04\xD6\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\xDE\n\x04\f\x04\x0E\x04\xE1\v\x04\x03\x04" +
		"\x05\x04\xE4\n\x04\x05\x04\xE6\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xEE\n\x04\f\x04\x0E\x04\xF1\v\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\xF8\n\x05\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\xFD\n\x06\x03\x06\x06\x06\u0100\n\x06\r\x06\x0E\x06\u0101\x03\x06" +
		"\x03\x06\x03\x06\x06\x06\u0107\n\x06\r\x06\x0E\x06\u0108\x03\x06\x05\x06" +
		"\u010C\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\u0111\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u0116\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u011B\n\x07" +
		"\x03\x07\x05\x07\u011E\n\x07\x03\x07\x05\x07\u0121\n\x07\x03\x07\x03\x07" +
		"\x05\x07\u0125\n\x07\x03\x07\x05\x07\u0128\n\x07\x05\x07\u012A\n\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0134\n\t\f\t\x0E\t" +
		"\u0137\v\t\x03\t\x05\t\u013A\n\t\x03\t\x03\t\x03\t\x05\t\u013F\n\t\x03" +
		"\t\x02\x02\x03\x06\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x02\n\x05\x02\x1D\x1D66;;\x05\x02\'\'77>>\x04\x0266;;\x04\x02" +
		"1245\x04\x02//88\x05\x02\r\r\x19\x19\x1B\x1B\x07\x02\x0F\x0F\x12\x12\x1C" +
		"\x1C\x1E\x1E\"\"\f\x02\r\r\x19\x19\x1B\x1B&\'**2257;;>>HH\x02\u018B\x02" +
		"\x16\x03\x02\x02\x02\x04\\\x03\x02\x02\x02\x06\xAB\x03\x02\x02\x02\b\xF7" +
		"\x03\x02\x02\x02\n\u010B\x03\x02\x02\x02\f\u0129\x03\x02\x02\x02\x0E\u012B" +
		"\x03\x02\x02\x02\x10\u012D\x03\x02\x02\x02\x12\x15\x05\x04\x03\x02\x13" +
		"\x15\x07I\x02\x02\x14\x12\x03\x02\x02\x02\x14\x13\x03\x02\x02\x02\x15" +
		"\x18\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17" +
		"\x03\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x19\x1A\x07\x18\x02\x02\x1A" +
		"\x1B\x05\x06\x04\x02\x1B\x1C\x07,\x02\x02\x1C!\x05\x06\x04\x02\x1D\x1E" +
		"\x07-\x02\x02\x1E \x05\x06\x04\x02\x1F\x1D\x03\x02\x02\x02 #\x03\x02\x02" +
		"\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03" +
		"\x02\x02\x02$&\x07-\x02\x02%$\x03\x02\x02\x02%&\x03\x02\x02\x02&]\x03" +
		"\x02\x02\x02\'(\x07\x14\x02\x02(]\x05\x06\x04\x02)1\x07\x16\x02\x02*-" +
		"\x05\f\x07\x02+,\x07-\x02\x02,.\x05\f\x07\x02-+\x03\x02\x02\x02-.\x03" +
		"\x02\x02\x02./\x03\x02\x02\x02/0\x07\x19\x02\x0202\x03\x02\x02\x021*\x03" +
		"\x02\x02\x0212\x03\x02\x02\x0223\x03\x02\x02\x0234\x05\x06\x04\x0245\x05" +
		"\n\x06\x025]\x03\x02\x02\x0267\x07#\x02\x0278\x05\x06\x04\x0289\x05\n" +
		"\x06\x029]\x03\x02\x02\x02:;\x07\x10\x02\x02;<\x05\n\x06\x02<=\x07#\x02" +
		"\x02=>\x05\x06\x04\x02>]\x03\x02\x02\x02?@\x07\x17\x02\x02@A\x05\x06\x04" +
		"\x02AD\x05\n\x06\x02BC\x07\x11\x02\x02CE\x05\n\x06\x02DB\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02E]\x03\x02\x02\x02F]\x07\x0E\x02\x02GI\x07!\x02\x02" +
		"HJ\x05\x06\x04\x02IH\x03\x02\x02\x02IJ\x03\x02\x02\x02J]\x03\x02\x02\x02" +
		"KL\x07\f\x02\x02LN\x05\x06\x04\x02MO\x07I\x02\x02NM\x03\x02\x02\x02OP" +
		"\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02\x02\x02" +
		"RS\x07\x13\x02\x02ST\x05\x06\x04\x02T]\x03\x02\x02\x02U]\x07G\x02\x02" +
		"V]\x05\f\x07\x02WX\x05\x10\t\x02XY\x07&\x02\x02YZ\x05\x06\x04\x02Z]\x03" +
		"\x02\x02\x02[]\x05\x06\x04\x02\\\x19\x03\x02\x02\x02\\\'\x03\x02\x02\x02" +
		"\\)\x03\x02\x02\x02\\6\x03\x02\x02\x02\\:\x03\x02\x02\x02\\?\x03\x02\x02" +
		"\x02\\F\x03\x02\x02\x02\\G\x03\x02\x02\x02\\K\x03\x02\x02\x02\\U\x03\x02" +
		"\x02\x02\\V\x03\x02\x02\x02\\W\x03\x02\x02\x02\\[\x03\x02\x02\x02]\x05" +
		"\x03\x02\x02\x02^_\b\x04\x01\x02_\xAC\x05\x10\t\x02`l\x07\x05\x02\x02" +
		"af\x05\x06\x04\x02bc\x07-\x02\x02ce\x05\x06\x04\x02db\x03\x02\x02\x02" +
		"eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gj\x03\x02\x02\x02" +
		"hf\x03\x02\x02\x02ik\x07-\x02\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02" +
		"km\x03\x02\x02\x02la\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x03\x02\x02\x02" +
		"n\xAC\x07\x06\x02\x02o{\x07\t\x02\x02pu\x05\f\x07\x02qr\x07-\x02\x02r" +
		"t\x05\f\x07\x02sq\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02" +
		"uv\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02xz\x07-\x02\x02" +
		"yx\x03\x02\x02\x02yz\x03\x02\x02\x02z|\x03\x02\x02\x02{p\x03\x02\x02\x02" +
		"{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\xAC\x07\n\x02\x02~\x7F\x07?\x02" +
		"\x02\x7F\xAC\x05\x06\x04\x11\x80\x81\t\x02\x02\x02\x81\xAC\x05\x06\x04" +
		"\x10\x82\xAC\x05\b\x05\x02\x83\x8F\x07\x07\x02\x02\x84\x89\x05\f\x07\x02" +
		"\x85\x86\x07-\x02\x02\x86\x88\x05\f\x07\x02\x87\x85\x03\x02\x02\x02\x88" +
		"\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A" +
		"\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8E\x07-\x02\x02\x8D" +
		"\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F" +
		"\x84\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
		"\x93\x07\b\x02\x02\x92\x94\x05\x06\x04\x02\x93\x92\x03\x02\x02\x02\x93" +
		"\x94\x03\x02\x02\x02\x94\xAC\x03\x02\x02\x02\x95\xA1\x07\x05\x02\x02\x96" +
		"\x9B\x05\f\x07\x02\x97\x98\x07-\x02\x02\x98\x9A\x05\f\x07\x02\x99\x97" +
		"\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C" +
		"\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA0" +
		"\x07-\x02\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2" +
		"\x03\x02\x02\x02\xA1\x96\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3" +
		"\x03\x02\x02\x02\xA3\xA5\x07\x06\x02\x02\xA4\xA6\x05\x06\x04\x02\xA5\xA4" +
		"\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xAC\x03\x02\x02\x02\xA7\xA8" +
		"\x07\x07\x02\x02\xA8\xA9\x05\x06\x04\x02\xA9\xAA\x07\b\x02\x02\xAA\xAC" +
		"\x03\x02\x02\x02\xAB^\x03\x02\x02\x02\xAB`\x03\x02\x02\x02\xABo\x03\x02" +
		"\x02\x02\xAB~\x03\x02\x02\x02\xAB\x80\x03\x02\x02\x02\xAB\x82\x03\x02" +
		"\x02\x02\xAB\x83\x03\x02\x02\x02\xAB\x95\x03\x02\x02\x02\xAB\xA7\x03\x02" +
		"\x02\x02\xAC\xEF\x03\x02\x02\x02\xAD\xAE\f\x0F\x02\x02\xAE\xAF\x07*\x02" +
		"\x02\xAF\xEE\x05\x06\x04\x10\xB0\xB1\f\x0E\x02\x02\xB1\xB2\t\x03\x02\x02" +
		"\xB2\xEE\x05\x06\x04\x0F\xB3\xB4\f\r\x02\x02\xB4\xB5\t\x04\x02\x02\xB5" +
		"\xEE\x05\x06\x04\x0E\xB6\xB7\f\f\x02\x02\xB7\xB8\x07=\x02\x02\xB8\xEE" +
		"\x05\x06\x04\r\xB9\xBA\f\v\x02\x02\xBA\xBB\t\x05\x02\x02\xBB\xEE\x05\x06" +
		"\x04\f\xBC\xBD\f\n\x02\x02\xBD\xBE\t\x06\x02\x02\xBE\xEE\x05\x06\x04\v" +
		"\xBF\xC0\f\t\x02\x02\xC0\xC1\x07%\x02\x02\xC1\xEE\x05\x06\x04\n\xC2\xC3" +
		"\f\b\x02\x02\xC3\xC4\x079\x02\x02\xC4\xEE\x05\x06\x04\t\xC5\xC6\f\x07" +
		"\x02\x02\xC6\xC7\t\x07\x02\x02\xC7\xEE\x05\x06\x04\b\xC8\xC9\f\x15\x02" +
		"\x02\xC9\xD5\x07\x07\x02\x02\xCA\xCF\x05\x06\x04\x02\xCB\xCC\x07-\x02" +
		"\x02\xCC\xCE\x05\x06\x04\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD1\x03\x02\x02" +
		"\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD3\x03\x02\x02" +
		"\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD4\x07-\x02\x02\xD3\xD2\x03\x02\x02" +
		"\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xCA\x03\x02\x02" +
		"\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xEE\x07\b\x02" +
		"\x02\xD8\xD9\f\x14\x02\x02\xD9\xE5\x07\x05\x02\x02\xDA\xDF\x05\x06\x04" +
		"\x02\xDB\xDC\x07-\x02\x02\xDC\xDE\x05\x06\x04\x02\xDD\xDB\x03\x02\x02" +
		"\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02" +
		"\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE4\x07-\x02" +
		"\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02\x02" +
		"\x02\xE5\xDA\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
		"\x02\xE7\xEE\x07\x06\x02\x02\xE8\xE9\f\x13\x02\x02\xE9\xEE\x07<\x02\x02" +
		"\xEA\xEB\f\x12\x02\x02\xEB\xEC\x07.\x02\x02\xEC\xEE\x05\x10\t\x02\xED" +
		"\xAD\x03\x02\x02\x02\xED\xB0\x03\x02\x02\x02\xED\xB3\x03\x02\x02\x02\xED" +
		"\xB6\x03\x02\x02\x02\xED\xB9\x03\x02\x02\x02\xED\xBC\x03\x02\x02\x02\xED" +
		"\xBF\x03\x02\x02\x02\xED\xC2\x03\x02\x02\x02\xED\xC5\x03\x02\x02\x02\xED" +
		"\xC8\x03\x02\x02\x02\xED\xD8\x03\x02\x02\x02\xED\xE8\x03\x02\x02\x02\xED" +
		"\xEA\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF" +
		"\xF0\x03\x02\x02\x02\xF0\x07\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2" +
		"\xF8\x07C\x02\x02\xF3\xF8\x07B\x02\x02\xF4\xF8\x07D\x02\x02\xF5\xF8\x07" +
		"E\x02\x02\xF6\xF8\x07F\x02\x02\xF7\xF2\x03\x02\x02\x02\xF7\xF3\x03\x02" +
		"\x02\x02\xF7\xF4\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF6\x03\x02" +
		"\x02\x02\xF8\t\x03\x02\x02\x02\xF9\xFA\x07,\x02\x02\xFA\u010C\x05\x04" +
		"\x03\x02\xFB\xFD\x07,\x02\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02" +
		"\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\u0100\x07I\x02\x02\xFF\xFE\x03\x02" +
		"\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0106\x07\x03\x02\x02" +
		"\u0104\u0107\x05\x04\x03\x02\u0105\u0107\x07I\x02\x02\u0106\u0104\x03" +
		"\x02\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
		"\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02" +
		"\x02\x02\u010A\u010C\x07\x04\x02\x02\u010B\xF9\x03\x02\x02\x02\u010B\xFC" +
		"\x03\x02\x02\x02\u010C\v\x03\x02\x02\x02\u010D\u010E\x05\x0E\b\x02\u010E" +
		"\u0110\x05\x10\t\x02\u010F\u0111\x05\x06\x04\x02\u0110\u010F\x03\x02\x02" +
		"\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113" +
		"\x07\x1B\x02\x02\u0113\u0115\x05\x06\x04\x02\u0114\u0116\x05\n\x06\x02" +
		"\u0115\u0114\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u012A\x03" +
		"\x02\x02\x02\u0117\u0118\x05\x0E\b\x02\u0118\u011A\x05\x10\t\x02\u0119" +
		"\u011B\x05\x06\x04\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02" +
		"\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u011E\x05\n\x06\x02\u011D\u011C" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u012A\x03\x02\x02\x02" +
		"\u011F\u0121\x07?\x02\x02\u0120\u011F\x03\x02\x02\x02\u0120\u0121\x03" +
		"\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x05\x10\t\x02\u0123" +
		"\u0125\x05\x06\x04\x02\u0124\u0123\x03\x02\x02\x02\u0124\u0125\x03\x02" +
		"\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0128\x05\n\x06\x02\u0127\u0126" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02" +
		"\u0129\u010D\x03\x02\x02\x02\u0129\u0117\x03\x02\x02\x02\u0129\u0120\x03" +
		"\x02\x02\x02\u012A\r\x03\x02\x02\x02\u012B\u012C\t\b\x02\x02\u012C\x0F" +
		"\x03\x02\x02\x02\u012D\u013E\t\t\x02\x02\u012E\u012F\x075\x02\x02\u012F" +
		"\u0130\x07:\x02\x02\u0130\u0135\x05\f\x07\x02\u0131\u0132\x07-\x02\x02" +
		"\u0132\u0134\x05\f\x07\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0137\x03" +
		"\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136" +
		"\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013A\x07-\x02" +
		"\x02\u0139\u0138\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B" +
		"\x03\x02\x02\x02\u013B\u013C\x07:\x02\x02\u013C\u013D\x072\x02\x02\u013D" +
		"\u013F\x03\x02\x02\x02\u013E\u012E\x03\x02\x02\x02\u013E\u013F\x03\x02" +
		"\x02\x02\u013F\x11\x03\x02\x02\x024\x14\x16!%-1DIP\\fjluy{\x89\x8D\x8F" +
		"\x93\x9B\x9F\xA1\xA5\xAB\xCF\xD3\xD5\xDF\xE3\xE5\xED\xEF\xF7\xFC\u0101" +
		"\u0106\u0108\u010B\u0110\u0115\u011A\u011D\u0120\u0124\u0127\u0129\u0135" +
		"\u0139\u013E";
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
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public LESS(): TerminalNode[];
	public LESS(i: number): TerminalNode;
	public LESS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LESS);
		} else {
			return this.getToken(XonParser.LESS, i);
		}
	}
	public GREAT(): TerminalNode[];
	public GREAT(i: number): TerminalNode;
	public GREAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.GREAT);
		} else {
			return this.getToken(XonParser.GREAT, i);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
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


