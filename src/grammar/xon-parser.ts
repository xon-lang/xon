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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.AS) | (1 << XonParser.BREAK) | (1 << XonParser.CLASS) | (1 << XonParser.DO) | (1 << XonParser.ENUM) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.TYPE - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0)) {
				{
				this.state = 20;
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
					this.state = 18;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 19;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 24;
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
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 25;
				this.match(XonParser.IMPORT);
				this.state = 26;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 27;
				this.match(XonParser.COLON);
				this.state = 28;
				(_localctx as ImportStatementContext)._expr = this.expr(0);
				(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 29;
						this.match(XonParser.COMMA);
						this.state = 30;
						(_localctx as ImportStatementContext)._expr = this.expr(0);
						(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
						}
						}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 37;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 36;
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
				this.state = 39;
				this.match(XonParser.EXPORT);
				this.state = 40;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 41;
				this.match(XonParser.FOR);
				this.state = 49;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 42;
					(_localctx as ForStatementContext)._value = this.declaration();
					this.state = 45;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 43;
						this.match(XonParser.COMMA);
						this.state = 44;
						(_localctx as ForStatementContext)._index = this.declaration();
						}
					}

					this.state = 47;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 51;
				this.expr(0);
				this.state = 52;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 54;
				this.match(XonParser.WHILE);
				this.state = 55;
				this.expr(0);
				this.state = 56;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 58;
				this.match(XonParser.DO);
				this.state = 59;
				this.body();
				this.state = 60;
				this.match(XonParser.WHILE);
				this.state = 61;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 63;
				this.match(XonParser.IF);
				this.state = 64;
				this.expr(0);
				this.state = 65;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 68;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 66;
					this.match(XonParser.ELSE);
					this.state = 67;
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
				this.state = 70;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 71;
				this.match(XonParser.RETURN);
				this.state = 73;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 72;
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
				this.state = 75;
				this.match(XonParser.ACTUAL);
				this.state = 76;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 77;
					this.match(XonParser.NL);
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 82;
				this.match(XonParser.EXPECT);
				this.state = 83;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 85;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 86;
				this.declaration();
				}
				break;

			case 12:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 87;
				this.id();
				this.state = 88;
				this.match(XonParser.ASSIGN);
				this.state = 89;
				this.expr(0);
				}
				break;

			case 13:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 91;
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
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 95;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 96;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
					{
					this.state = 97;
					this.expr(0);
					this.state = 102;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 98;
							this.match(XonParser.COMMA);
							this.state = 99;
							this.expr(0);
							}
							}
						}
						this.state = 104;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					}
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 105;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 110;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 111;
				this.match(XonParser.OPEN_BRACE);
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.MODEL - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 112;
					this.declaration();
					this.state = 117;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 113;
							this.match(XonParser.COMMA);
							this.state = 114;
							this.declaration();
							}
							}
						}
						this.state = 119;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					}
					this.state = 121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 120;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 125;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.match(XonParser.SPREAD);
				this.state = 127;
				this.expr(15);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
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
				this.state = 129;
				this.expr(14);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 130;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.match(XonParser.OPEN_PAREN);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.MODEL - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 132;
					this.declaration();
					this.state = 137;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 133;
							this.match(XonParser.COMMA);
							this.state = 134;
							this.declaration();
							}
							}
						}
						this.state = 139;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 140;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 145;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 146;
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
				this.state = 149;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.MODEL - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS - 48)) | (1 << (XonParser.MINUS - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.PLUS - 48)) | (1 << (XonParser.SLASH - 48)) | (1 << (XonParser.SPREAD - 48)) | (1 << (XonParser.ID - 48)))) !== 0)) {
					{
					this.state = 150;
					this.declaration();
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
							this.declaration();
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
				this.state = 165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 164;
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
				this.state = 167;
				this.match(XonParser.OPEN_PAREN);
				this.state = 168;
				this.expr(0);
				this.state = 169;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 239;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 237;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 173;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 174;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 175;
						(_localctx as PowExpressionContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 176;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 177;
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
						this.state = 178;
						(_localctx as MulDivModExpressionContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 179;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 180;
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
						this.state = 181;
						(_localctx as AddSubExpressionContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 182;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 183;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 184;
						(_localctx as RangeExpressionContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 185;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 186;
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
						this.state = 187;
						(_localctx as RelationalExpressionContext)._right = this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 188;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 189;
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
						this.state = 190;
						(_localctx as EqualityExpressionContext)._right = this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 191;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 192;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 193;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 194;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 195;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 196;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 197;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 198;
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
						this.state = 199;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 200;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 201;
						this.match(XonParser.OPEN_PAREN);
						this.state = 213;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 202;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 207;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 203;
									this.match(XonParser.COMMA);
									this.state = 204;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 209;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
							}
							this.state = 211;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 210;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 215;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 216;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 217;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 229;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 218;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 223;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 219;
									this.match(XonParser.COMMA);
									this.state = 220;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 225;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
							}
							this.state = 227;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 226;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 231;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 12:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 232;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 233;
						this.match(XonParser.QUESTION);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 234;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 235;
						this.match(XonParser.DOT);
						this.state = 236;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 241;
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
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 244;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 245;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 246;
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
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 249;
				this.match(XonParser.COLON);
				this.state = 250;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 251;
					this.match(XonParser.COLON);
					}
				}

				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 254;
					this.match(XonParser.NL);
					}
					}
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 259;
				this.match(XonParser.INDENT);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 262;
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
						this.state = 260;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 261;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.AS) | (1 << XonParser.BREAK) | (1 << XonParser.CLASS) | (1 << XonParser.DO) | (1 << XonParser.ENUM) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.TYPE - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 266;
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
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.modifier();
				this.state = 270;
				this.id();
				this.state = 272;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 271;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 274;
				this.match(XonParser.IS);
				this.state = 275;
				_localctx._base = this.expr(0);
				this.state = 277;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 276;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.modifier();
				this.state = 280;
				this.id();
				this.state = 282;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 281;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 285;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 284;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 287;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 290;
				this.id();
				this.state = 292;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 291;
					_localctx._type = this.expr(0);
					}
					break;
				}
				this.state = 295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 294;
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
			this.state = 299;
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
			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
			case XonParser.IN:
			case XonParser.IS:
			case XonParser.ID:
				{
				this.state = 301;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS))) !== 0) || _la === XonParser.ID)) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
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
				this.state = 302;
				this.operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 305;
				this.match(XonParser.LESS);
				this.state = 306;
				this.match(XonParser.PIPE);
				this.state = 307;
				this.declaration();
				this.state = 312;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 308;
						this.match(XonParser.COMMA);
						this.state = 309;
						this.declaration();
						}
						}
					}
					this.state = 314;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 315;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 318;
				this.match(XonParser.PIPE);
				this.state = 319;
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
			this.state = 323;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u0148\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x07\x02\x17\n\x02" +
		"\f\x02\x0E\x02\x1A\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03\"\n\x03\f\x03\x0E\x03%\v\x03\x03\x03\x05\x03(\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x030\n\x03\x03\x03\x03\x03\x05" +
		"\x034\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03G\n\x03\x03\x03\x03\x03\x03\x03\x05\x03L\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x06\x03Q\n\x03\r\x03\x0E\x03R\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03_\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04g\n\x04\f\x04\x0E" +
		"\x04j\v\x04\x03\x04\x05\x04m\n\x04\x05\x04o\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04v\n\x04\f\x04\x0E\x04y\v\x04\x03\x04\x05\x04" +
		"|\n\x04\x05\x04~\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x8A\n\x04\f\x04\x0E\x04\x8D\v" +
		"\x04\x03\x04\x05\x04\x90\n\x04\x05\x04\x92\n\x04\x03\x04\x03\x04\x05\x04" +
		"\x96\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x9C\n\x04\f\x04\x0E" +
		"\x04\x9F\v\x04\x03\x04\x05\x04\xA2\n\x04\x05\x04\xA4\n\x04\x03\x04\x03" +
		"\x04\x05\x04\xA8\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAE\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xD0\n\x04\f\x04\x0E\x04" +
		"\xD3\v\x04\x03\x04\x05\x04\xD6\n\x04\x05\x04\xD8\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xE0\n\x04\f\x04\x0E\x04\xE3\v" +
		"\x04\x03\x04\x05\x04\xE6\n\x04\x05\x04\xE8\n\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\xF0\n\x04\f\x04\x0E\x04\xF3\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xFA\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xFF\n\x06\x03\x06\x06\x06\u0102\n\x06\r\x06\x0E\x06\u0103" +
		"\x03\x06\x03\x06\x03\x06\x06\x06\u0109\n\x06\r\x06\x0E\x06\u010A\x03\x06" +
		"\x05\x06\u010E\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\u0113\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\u0118\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u011D" +
		"\n\x07\x03\x07\x05\x07\u0120\n\x07\x03\x07\x05\x07\u0123\n\x07\x03\x07" +
		"\x03\x07\x05\x07\u0127\n\x07\x03\x07\x05\x07\u012A\n\x07\x05\x07\u012C" +
		"\n\x07\x03\b\x03\b\x03\t\x03\t\x05\t\u0132\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x07\t\u0139\n\t\f\t\x0E\t\u013C\v\t\x03\t\x05\t\u013F\n\t\x03\t" +
		"\x03\t\x03\t\x05\t\u0144\n\t\x03\n\x03\n\x03\n\x02\x02\x03\x06\v\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\v\x05\x02" +
		"\x1D\x1D66;;\x05\x02\'\'77>>\x04\x0266;;\x04\x021245\x04\x02//88\x05\x02" +
		"\r\r\x19\x19\x1B\x1B\x07\x02\x0F\x0F\x12\x12\x1C\x1C\x1E\x1E\"\"\x06\x02" +
		"\r\r\x19\x19\x1B\x1BHH\b\x02&\'**2257;;>>\x02\u0192\x02\x18\x03\x02\x02" +
		"\x02\x04^\x03\x02\x02\x02\x06\xAD\x03\x02\x02\x02\b\xF9\x03\x02\x02\x02" +
		"\n\u010D\x03\x02\x02\x02\f\u012B\x03\x02\x02\x02\x0E\u012D\x03\x02\x02" +
		"\x02\x10\u0131\x03\x02\x02\x02\x12\u0145\x03\x02\x02\x02\x14\x17\x05\x04" +
		"\x03\x02\x15\x17\x07I\x02\x02\x16\x14\x03\x02\x02\x02\x16\x15\x03\x02" +
		"\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02" +
		"\x02\x02\x19\x03\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C\x07\x18" +
		"\x02\x02\x1C\x1D\x05\x06\x04\x02\x1D\x1E\x07,\x02\x02\x1E#\x05\x06\x04" +
		"\x02\x1F \x07-\x02\x02 \"\x05\x06\x04\x02!\x1F\x03\x02\x02\x02\"%\x03" +
		"\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\'\x03\x02\x02\x02%#" +
		"\x03\x02\x02\x02&(\x07-\x02\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02" +
		"(_\x03\x02\x02\x02)*\x07\x14\x02\x02*_\x05\x06\x04\x02+3\x07\x16\x02\x02" +
		",/\x05\f\x07\x02-.\x07-\x02\x02.0\x05\f\x07\x02/-\x03\x02\x02\x02/0\x03" +
		"\x02\x02\x0201\x03\x02\x02\x0212\x07\x19\x02\x0224\x03\x02\x02\x023,\x03" +
		"\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02\x0256\x05\x06\x04\x0267\x05" +
		"\n\x06\x027_\x03\x02\x02\x0289\x07#\x02\x029:\x05\x06\x04\x02:;\x05\n" +
		"\x06\x02;_\x03\x02\x02\x02<=\x07\x10\x02\x02=>\x05\n\x06\x02>?\x07#\x02" +
		"\x02?@\x05\x06\x04\x02@_\x03\x02\x02\x02AB\x07\x17\x02\x02BC\x05\x06\x04" +
		"\x02CF\x05\n\x06\x02DE\x07\x11\x02\x02EG\x05\n\x06\x02FD\x03\x02\x02\x02" +
		"FG\x03\x02\x02\x02G_\x03\x02\x02\x02H_\x07\x0E\x02\x02IK\x07!\x02\x02" +
		"JL\x05\x06\x04\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02L_\x03\x02\x02\x02" +
		"MN\x07\f\x02\x02NP\x05\x06\x04\x02OQ\x07I\x02\x02PO\x03\x02\x02\x02QR" +
		"\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x03\x02\x02\x02" +
		"TU\x07\x13\x02\x02UV\x05\x06\x04\x02V_\x03\x02\x02\x02W_\x07G\x02\x02" +
		"X_\x05\f\x07\x02YZ\x05\x10\t\x02Z[\x07&\x02\x02[\\\x05\x06\x04\x02\\_" +
		"\x03\x02\x02\x02]_\x05\x06\x04\x02^\x1B\x03\x02\x02\x02^)\x03\x02\x02" +
		"\x02^+\x03\x02\x02\x02^8\x03\x02\x02\x02^<\x03\x02\x02\x02^A\x03\x02\x02" +
		"\x02^H\x03\x02\x02\x02^I\x03\x02\x02\x02^M\x03\x02\x02\x02^W\x03\x02\x02" +
		"\x02^X\x03\x02\x02\x02^Y\x03\x02\x02\x02^]\x03\x02\x02\x02_\x05\x03\x02" +
		"\x02\x02`a\b\x04\x01\x02a\xAE\x05\x10\t\x02bn\x07\x05\x02\x02ch\x05\x06" +
		"\x04\x02de\x07-\x02\x02eg\x05\x06\x04\x02fd\x03\x02\x02\x02gj\x03\x02" +
		"\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02" +
		"\x02\x02km\x07-\x02\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02" +
		"\x02\x02nc\x03\x02\x02\x02no\x03\x02\x02\x02op\x03\x02\x02\x02p\xAE\x07" +
		"\x06\x02\x02q}\x07\t\x02\x02rw\x05\f\x07\x02st\x07-\x02\x02tv\x05\f\x07" +
		"\x02us\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02" +
		"\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02z|\x07-\x02\x02{z\x03\x02\x02" +
		"\x02{|\x03\x02\x02\x02|~\x03\x02\x02\x02}r\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\xAE\x07\n\x02\x02\x80\x81\x07?\x02\x02\x81" +
		"\xAE\x05\x06\x04\x11\x82\x83\t\x02\x02\x02\x83\xAE\x05\x06\x04\x10\x84" +
		"\xAE\x05\b\x05\x02\x85\x91\x07\x07\x02\x02\x86\x8B\x05\f\x07\x02\x87\x88" +
		"\x07-\x02\x02\x88\x8A\x05\f\x07\x02\x89\x87\x03\x02\x02\x02\x8A\x8D\x03" +
		"\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8F\x03" +
		"\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x90\x07-\x02\x02\x8F\x8E\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x86\x03" +
		"\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x07" +
		"\b\x02\x02\x94\x96\x05\x06\x04\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03" +
		"\x02\x02\x02\x96\xAE\x03\x02\x02\x02\x97\xA3\x07\x05\x02\x02\x98\x9D\x05" +
		"\f\x07\x02\x99\x9A\x07-\x02\x02\x9A\x9C\x05\f\x07\x02\x9B\x99\x03\x02" +
		"\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02" +
		"\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA2\x07-" +
		"\x02\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02" +
		"\x02\x02\xA3\x98\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02" +
		"\x02\x02\xA5\xA7\x07\x06\x02\x02\xA6\xA8\x05\x06\x04\x02\xA7\xA6\x03\x02" +
		"\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAE\x03\x02\x02\x02\xA9\xAA\x07\x07" +
		"\x02\x02\xAA\xAB\x05\x06\x04\x02\xAB\xAC\x07\b\x02\x02\xAC\xAE\x03\x02" +
		"\x02\x02\xAD`\x03\x02\x02\x02\xADb\x03\x02\x02\x02\xADq\x03\x02\x02\x02" +
		"\xAD\x80\x03\x02\x02\x02\xAD\x82\x03\x02\x02\x02\xAD\x84\x03\x02\x02\x02" +
		"\xAD\x85\x03\x02\x02\x02\xAD\x97\x03\x02\x02\x02\xAD\xA9\x03\x02\x02\x02" +
		"\xAE\xF1\x03\x02\x02\x02\xAF\xB0\f\x0F\x02\x02\xB0\xB1\x07*\x02\x02\xB1" +
		"\xF0\x05\x06\x04\x10\xB2\xB3\f\x0E\x02\x02\xB3\xB4\t\x03\x02\x02\xB4\xF0" +
		"\x05\x06\x04\x0F\xB5\xB6\f\r\x02\x02\xB6\xB7\t\x04\x02\x02\xB7\xF0\x05" +
		"\x06\x04\x0E\xB8\xB9\f\f\x02\x02\xB9\xBA\x07=\x02\x02\xBA\xF0\x05\x06" +
		"\x04\r\xBB\xBC\f\v\x02\x02\xBC\xBD\t\x05\x02\x02\xBD\xF0\x05\x06\x04\f" +
		"\xBE\xBF\f\n\x02\x02\xBF\xC0\t\x06\x02\x02\xC0\xF0\x05\x06\x04\v\xC1\xC2" +
		"\f\t\x02\x02\xC2\xC3\x07%\x02\x02\xC3\xF0\x05\x06\x04\n\xC4\xC5\f\b\x02" +
		"\x02\xC5\xC6\x079\x02\x02\xC6\xF0\x05\x06\x04\t\xC7\xC8\f\x07\x02\x02" +
		"\xC8\xC9\t\x07\x02\x02\xC9\xF0\x05\x06\x04\b\xCA\xCB\f\x15\x02\x02\xCB" +
		"\xD7\x07\x07\x02\x02\xCC\xD1\x05\x06\x04\x02\xCD\xCE\x07-\x02\x02\xCE" +
		"\xD0\x05\x06\x04\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1" +
		"\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3" +
		"\xD1\x03\x02\x02\x02\xD4\xD6\x07-\x02\x02\xD5\xD4\x03\x02\x02\x02\xD5" +
		"\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xCC\x03\x02\x02\x02\xD7" +
		"\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xF0\x07\b\x02\x02\xDA" +
		"\xDB\f\x14\x02\x02\xDB\xE7\x07\x05\x02\x02\xDC\xE1\x05\x06\x04\x02\xDD" +
		"\xDE\x07-\x02\x02\xDE\xE0\x05\x06\x04\x02\xDF\xDD\x03\x02\x02\x02\xE0" +
		"\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2" +
		"\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE6\x07-\x02\x02\xE5" +
		"\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE8\x03\x02\x02\x02\xE7" +
		"\xDC\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9" +
		"\xF0\x07\x06\x02\x02\xEA\xEB\f\x13\x02\x02\xEB\xF0\x07<\x02\x02\xEC\xED" +
		"\f\x12\x02\x02\xED\xEE\x07.\x02\x02\xEE\xF0\x05\x10\t\x02\xEF\xAF\x03" +
		"\x02\x02\x02\xEF\xB2\x03\x02\x02\x02\xEF\xB5\x03\x02\x02\x02\xEF\xB8\x03" +
		"\x02\x02\x02\xEF\xBB\x03\x02\x02\x02\xEF\xBE\x03\x02\x02\x02\xEF\xC1\x03" +
		"\x02\x02\x02\xEF\xC4\x03\x02\x02\x02\xEF\xC7\x03\x02\x02\x02\xEF\xCA\x03" +
		"\x02\x02\x02\xEF\xDA\x03\x02\x02\x02\xEF\xEA\x03\x02\x02\x02\xEF\xEC\x03" +
		"\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03" +
		"\x02\x02\x02\xF2\x07\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4\xFA\x07" +
		"C\x02\x02\xF5\xFA\x07B\x02\x02\xF6\xFA\x07D\x02\x02\xF7\xFA\x07E\x02\x02" +
		"\xF8\xFA\x07F\x02\x02\xF9\xF4\x03\x02\x02\x02\xF9\xF5\x03\x02\x02\x02" +
		"\xF9\xF6\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02\x02\x02" +
		"\xFA\t\x03\x02\x02\x02\xFB\xFC\x07,\x02\x02\xFC\u010E\x05\x04\x03\x02" +
		"\xFD\xFF\x07,\x02\x02\xFE\xFD\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02" +
		"\xFF\u0101\x03\x02\x02\x02\u0100\u0102\x07I\x02\x02\u0101\u0100\x03\x02" +
		"\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103" +
		"\u0104\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0108\x07\x03" +
		"\x02\x02\u0106\u0109\x05\x04\x03\x02\u0107\u0109\x07I\x02\x02\u0108\u0106" +
		"\x03\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x03" +
		"\x02\x02\x02\u010C\u010E\x07\x04\x02\x02\u010D\xFB\x03\x02\x02\x02\u010D" +
		"\xFE\x03\x02\x02\x02\u010E\v\x03\x02\x02\x02\u010F\u0110\x05\x0E\b\x02" +
		"\u0110\u0112\x05\x10\t\x02\u0111\u0113\x05\x06\x04\x02\u0112\u0111\x03" +
		"\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0115\x07\x1B\x02\x02\u0115\u0117\x05\x06\x04\x02\u0116\u0118\x05\n\x06" +
		"\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u012C" +
		"\x03\x02\x02\x02\u0119\u011A\x05\x0E\b\x02\u011A\u011C\x05\x10\t\x02\u011B" +
		"\u011D\x05\x06\x04\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02" +
		"\x02\x02\u011D\u011F\x03\x02\x02\x02\u011E\u0120\x05\n\x06\x02\u011F\u011E" +
		"\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u012C\x03\x02\x02\x02" +
		"\u0121\u0123\x07?\x02\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03" +
		"\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0126\x05\x10\t\x02\u0125" +
		"\u0127\x05\x06\x04\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02" +
		"\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128\u012A\x05\n\x06\x02\u0129\u0128" +
		"\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02" +
		"\u012B\u010F\x03\x02\x02\x02\u012B\u0119\x03\x02\x02\x02\u012B\u0122\x03" +
		"\x02\x02\x02\u012C\r\x03\x02\x02\x02\u012D\u012E\t\b\x02\x02\u012E\x0F" +
		"\x03\x02\x02\x02\u012F\u0132\t\t\x02\x02\u0130\u0132\x05\x12\n\x02\u0131" +
		"\u012F\x03\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0143\x03\x02" +
		"\x02\x02\u0133\u0134\x075\x02\x02\u0134\u0135\x07:\x02\x02\u0135\u013A" +
		"\x05\f\x07\x02\u0136\u0137\x07-\x02\x02\u0137\u0139\x05\f\x07\x02\u0138" +
		"\u0136\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02" +
		"\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u013F\x07-\x02\x02\u013E\u013D\x03\x02\x02" +
		"\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141" +
		"\x07:\x02\x02\u0141\u0142\x072\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143" +
		"\u0133\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\x11\x03\x02\x02" +
		"\x02\u0145\u0146\t\n\x02\x02\u0146\x13\x03\x02\x02\x025\x16\x18#\'/3F" +
		"KR^hlnw{}\x8B\x8F\x91\x95\x9D\xA1\xA3\xA7\xAD\xD1\xD5\xD7\xE1\xE5\xE7" +
		"\xEF\xF1\xF9\xFE\u0103\u0108\u010A\u010D\u0112\u0117\u011C\u011F\u0122" +
		"\u0126\u0129\u012B\u0131\u013A\u013E\u0143";
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
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
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
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
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


