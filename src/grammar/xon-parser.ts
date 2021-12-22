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
	public static readonly INTERFACE = 25;
	public static readonly IS = 26;
	public static readonly NOT = 27;
	public static readonly OBJECT = 28;
	public static readonly POSTFIX = 29;
	public static readonly PREFIX = 30;
	public static readonly RETURN = 31;
	public static readonly TEST = 32;
	public static readonly TYPE = 33;
	public static readonly WHILE = 34;
	public static readonly AMPERSAND = 35;
	public static readonly AND = 36;
	public static readonly ASSIGN = 37;
	public static readonly ASTERISK = 38;
	public static readonly AT = 39;
	public static readonly BACK_SLASH = 40;
	public static readonly CARET = 41;
	public static readonly COALESCING = 42;
	public static readonly COLON = 43;
	public static readonly COMMA = 44;
	public static readonly DOT = 45;
	public static readonly EQUAL = 46;
	public static readonly EXCLAMATION = 47;
	public static readonly GREAT_EQUAL = 48;
	public static readonly GREAT = 49;
	public static readonly HASH = 50;
	public static readonly LESS_EQUAL = 51;
	public static readonly LESS = 52;
	public static readonly MINUS = 53;
	public static readonly MODULO = 54;
	public static readonly NOT_EQUAL = 55;
	public static readonly OR = 56;
	public static readonly PIPE = 57;
	public static readonly PLUS = 58;
	public static readonly QUESTION = 59;
	public static readonly RANGE = 60;
	public static readonly SLASH = 61;
	public static readonly SPREAD = 62;
	public static readonly TILDE = 63;
	public static readonly UNDERSCORE = 64;
	public static readonly FLOAT_LITERAL = 65;
	public static readonly INTEGER_LITERAL = 66;
	public static readonly CHAR_LITERAL = 67;
	public static readonly STRING_LITERAL = 68;
	public static readonly REGEX_LITERAL = 69;
	public static readonly PREPROCESSOR = 70;
	public static readonly ID = 71;
	public static readonly NL = 72;
	public static readonly WS = 73;
	public static readonly COMMENT = 74;
	public static readonly RULE_source = 0;
	public static readonly RULE_export = 1;
	public static readonly RULE_library = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_body = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_arguments = 8;
	public static readonly RULE_generics = 9;
	public static readonly RULE_parameterId = 10;
	public static readonly RULE_id = 11;
	public static readonly RULE_modifier = 12;
	public static readonly RULE_operator = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "statement", "expr", "literal", "body", 
		"parameter", "arguments", "generics", "parameterId", "id", "modifier", 
		"operator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'abstract'", "'actual'", "'as'", "'break'", "'class'", "'do'", "'else'", 
		"'enum'", "'expect'", "'export'", "'extension'", "'for'", "'if'", "'import'", 
		"'in'", "'infix'", "'interface'", "'is'", "'not'", "'object'", "'postfix'", 
		"'prefix'", "'return'", "'test'", "'type'", "'while'", "'&'", "'&&'", 
		"'='", "'*'", "'@'", "'\\'", "'^'", "'?.'", "':'", "','", "'.'", "'=='", 
		"'!'", "'>='", "'>'", "'#'", "'<='", "'<'", "'-'", "'%'", "'!='", "'||'", 
		"'|'", "'+'", "'?'", "'..'", "'/'", "'...'", "'~'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AS", 
		"BREAK", "CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", 
		"FOR", "IF", "IMPORT", "IN", "INFIX", "INTERFACE", "IS", "NOT", "OBJECT", 
		"POSTFIX", "PREFIX", "RETURN", "TEST", "TYPE", "WHILE", "AMPERSAND", "AND", 
		"ASSIGN", "ASTERISK", "AT", "BACK_SLASH", "CARET", "COALESCING", "COLON", 
		"COMMA", "DOT", "EQUAL", "EXCLAMATION", "GREAT_EQUAL", "GREAT", "HASH", 
		"LESS_EQUAL", "LESS", "MINUS", "MODULO", "NOT_EQUAL", "OR", "PIPE", "PLUS", 
		"QUESTION", "RANGE", "SLASH", "SPREAD", "TILDE", "UNDERSCORE", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "REGEX_LITERAL", 
		"PREPROCESSOR", "ID", "NL", "WS", "COMMENT",
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
			this.state = 33;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 31;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 28;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 29;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 30;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.INTERFACE - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.SPREAD - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)) | (1 << (XonParser.NL - 49)))) !== 0)) {
				{
				this.state = 41;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.AS:
				case XonParser.CLASS:
				case XonParser.ENUM:
				case XonParser.IN:
				case XonParser.INTERFACE:
				case XonParser.IS:
				case XonParser.OBJECT:
				case XonParser.TYPE:
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
				case XonParser.STRING_LITERAL:
				case XonParser.ID:
					{
					this.state = 37;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						this.state = 36;
						this.modifier();
						}
						break;
					}
					this.state = 39;
					this.parameter();
					}
					break;
				case XonParser.NL:
					{
					this.state = 40;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 45;
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(XonParser.EXPORT);
			this.state = 47;
			_localctx._path = this.expr(0);
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
		this.enterRule(_localctx, 4, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(XonParser.IMPORT);
			this.state = 50;
			_localctx._path = this.expr(0);
			this.state = 51;
			this.match(XonParser.COLON);
			this.state = 52;
			_localctx._expr = this.expr(0);
			_localctx._members.push(_localctx._expr);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 53;
				this.match(XonParser.COMMA);
				this.state = 54;
				_localctx._expr = this.expr(0);
				_localctx._members.push(_localctx._expr);
				}
				}
				this.state = 59;
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
		this.enterRule(_localctx, 6, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new ParameterStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this.parameter();
				}
				break;

			case 2:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 62;
				this.id();
				this.state = 63;
				this.match(XonParser.ASSIGN);
				this.state = 64;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 66;
				this.match(XonParser.FOR);
				this.state = 74;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 67;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 70;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 68;
						this.match(XonParser.COMMA);
						this.state = 69;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 72;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 76;
				this.expr(0);
				this.state = 77;
				this.body();
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 79;
				this.match(XonParser.WHILE);
				this.state = 80;
				this.expr(0);
				this.state = 81;
				this.body();
				}
				break;

			case 6:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 83;
				this.match(XonParser.DO);
				this.state = 84;
				this.body();
				this.state = 85;
				this.match(XonParser.WHILE);
				this.state = 86;
				this.expr(0);
				}
				break;

			case 7:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 88;
				this.match(XonParser.IF);
				this.state = 89;
				this.expr(0);
				this.state = 90;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 93;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 91;
					this.match(XonParser.ELSE);
					this.state = 92;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 95;
				this.match(XonParser.BREAK);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 96;
				this.match(XonParser.RETURN);
				this.state = 98;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 97;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 100;
				this.match(XonParser.ACTUAL);
				this.state = 101;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 102;
					this.match(XonParser.NL);
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 107;
				this.match(XonParser.EXPECT);
				this.state = 108;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 11:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 110;
				this.match(XonParser.PREPROCESSOR);
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 114;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 115;
				this.id();
				this.state = 117;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 116;
					this.generics();
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.match(XonParser.OPEN_PAREN);
				this.state = 120;
				this.expr(0);
				this.state = 121;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 4:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.TYPE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.SPREAD - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					this.state = 124;
					this.arguments();
					}
				}

				this.state = 127;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				this.match(XonParser.OPEN_BRACE);
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.INTERFACE - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.SPREAD - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)))) !== 0)) {
					{
					this.state = 129;
					this.parameter();
					this.state = 134;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 130;
							this.match(XonParser.COMMA);
							this.state = 131;
							this.parameter();
							}
							}
						}
						this.state = 136;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
					}
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 137;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 142;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 143;
				this.match(XonParser.OPEN_PAREN);
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.INTERFACE - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)) | (1 << (XonParser.ASSIGN - 11)) | (1 << (XonParser.ASTERISK - 11)) | (1 << (XonParser.CARET - 11)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.SPREAD - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)))) !== 0)) {
					{
					this.state = 144;
					this.parameter();
					this.state = 149;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 145;
							this.match(XonParser.COMMA);
							this.state = 146;
							this.parameter();
							}
							}
						}
						this.state = 151;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 152;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 157;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.TYPE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.SPREAD - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					this.state = 158;
					this.expr(0);
					}
				}

				this.state = 161;
				this.body();
				}
				break;

			case 7:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(XonParser.SPREAD);
				this.state = 163;
				this.expr(11);
				}
				break;

			case 8:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 164;
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
				this.state = 165;
				this.expr(10);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 208;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 206;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 168;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 169;
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
						this.state = 170;
						(_localctx as InfixExpressionContext)._right = this.expr(10);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 171;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 172;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 173;
						(_localctx as PowExpressionContext)._right = this.expr(9);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 174;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 175;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.ASTERISK - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.SLASH - 38)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 176;
						(_localctx as MulDivModExpressionContext)._right = this.expr(8);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 177;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
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
						(_localctx as AddSubExpressionContext)._right = this.expr(7);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 180;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 181;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 182;
						(_localctx as RangeExpressionContext)._right = this.expr(6);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 183;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 184;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT_EQUAL - 48)) | (1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS_EQUAL - 48)) | (1 << (XonParser.LESS - 48)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 185;
						(_localctx as RelationalExpressionContext)._right = this.expr(5);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 186;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
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
						(_localctx as EqualityExpressionContext)._right = this.expr(4);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 189;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 190;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 191;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(3);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 192;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 193;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 194;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(2);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 195;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 196;
						this.match(XonParser.OPEN_PAREN);
						this.state = 198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.TYPE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.SPREAD - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
							{
							this.state = 197;
							this.arguments();
							}
						}

						this.state = 200;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 201;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 202;
						this.match(XonParser.QUESTION);
						}
						break;

					case 12:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 203;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 204;
						this.match(XonParser.DOT);
						this.state = 205;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 211;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 212;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 213;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 214;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 215;
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
		this.enterRule(_localctx, 12, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.match(XonParser.COLON);
				this.state = 219;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 220;
					this.match(XonParser.COLON);
					}
				}

				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 223;
					this.match(XonParser.NL);
					}
					}
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
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
					case XonParser.AS:
					case XonParser.BREAK:
					case XonParser.CLASS:
					case XonParser.DO:
					case XonParser.ENUM:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.INTERFACE:
					case XonParser.IS:
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
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.AS) | (1 << XonParser.BREAK) | (1 << XonParser.CLASS) | (1 << XonParser.DO) | (1 << XonParser.ENUM) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.INTERFACE) | (1 << XonParser.IS) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.TYPE - 33)) | (1 << (XonParser.WHILE - 33)) | (1 << (XonParser.ASSIGN - 33)) | (1 << (XonParser.ASTERISK - 33)) | (1 << (XonParser.CARET - 33)) | (1 << (XonParser.GREAT - 33)) | (1 << (XonParser.LESS - 33)) | (1 << (XonParser.MINUS - 33)) | (1 << (XonParser.MODULO - 33)) | (1 << (XonParser.PLUS - 33)) | (1 << (XonParser.SLASH - 33)) | (1 << (XonParser.SPREAD - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.FLOAT_LITERAL - 65)) | (1 << (XonParser.INTEGER_LITERAL - 65)) | (1 << (XonParser.CHAR_LITERAL - 65)) | (1 << (XonParser.STRING_LITERAL - 65)) | (1 << (XonParser.REGEX_LITERAL - 65)) | (1 << (XonParser.PREPROCESSOR - 65)) | (1 << (XonParser.ID - 65)) | (1 << (XonParser.NL - 65)))) !== 0));
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 238;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 241;
			this.parameterId();
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 242;
				this.generics();
				}
				break;
			}
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 245;
				_localctx._type = this.expr(0);
				}
				break;
			}
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 248;
				this.match(XonParser.IS);
				this.state = 249;
				this.arguments();
				}
				break;
			}
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 252;
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_arguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.expr(0);
			this.state = 260;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 256;
					this.match(XonParser.COMMA);
					this.state = 257;
					this.expr(0);
					}
					}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 263;
				this.match(XonParser.COMMA);
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
	public generics(): GenericsContext {
		let _localctx: GenericsContext = new GenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_generics);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(XonParser.LESS);
			this.state = 267;
			this.match(XonParser.PIPE);
			this.state = 268;
			this.arguments();
			this.state = 269;
			this.match(XonParser.PIPE);
			this.state = 270;
			this.match(XonParser.GREAT);
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
	public parameterId(): ParameterIdContext {
		let _localctx: ParameterIdContext = new ParameterIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_parameterId);
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
			case XonParser.CLASS:
			case XonParser.ENUM:
			case XonParser.IN:
			case XonParser.INTERFACE:
			case XonParser.IS:
			case XonParser.OBJECT:
			case XonParser.TYPE:
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.id();
				}
				break;
			case XonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 273;
				this.match(XonParser.STRING_LITERAL);
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
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 274;
				this.operator();
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_id);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.CLASS:
			case XonParser.ENUM:
			case XonParser.INTERFACE:
			case XonParser.OBJECT:
			case XonParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.modifier();
				}
				break;
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 278;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.IS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 279;
				this.match(XonParser.IS);
				}
				break;
			case XonParser.AS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 280;
				this.match(XonParser.AS);
				}
				break;
			case XonParser.IN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 281;
				this.match(XonParser.IN);
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
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)))) !== 0))) {
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)))) !== 0))) {
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
		case 4:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);

		case 8:
			return this.precpred(this._ctx, 1);

		case 9:
			return this.precpred(this._ctx, 14);

		case 10:
			return this.precpred(this._ctx, 13);

		case 11:
			return this.precpred(this._ctx, 12);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u0123\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x07\x02\"\n\x02\f\x02" +
		"\x0E\x02%\v\x02\x03\x02\x05\x02(\n\x02\x03\x02\x03\x02\x07\x02,\n\x02" +
		"\f\x02\x0E\x02/\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04:\n\x04\f\x04\x0E\x04=\v\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05I\n\x05\x03\x05\x03\x05\x05\x05M\n\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05`\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05e\n\x05\x03\x05\x03\x05\x03\x05\x06\x05j\n\x05\r\x05\x0E\x05" +
		"k\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05r\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06x\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\x80\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x87" +
		"\n\x06\f\x06\x0E\x06\x8A\v\x06\x03\x06\x05\x06\x8D\n\x06\x05\x06\x8F\n" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x96\n\x06\f\x06\x0E" +
		"\x06\x99\v\x06\x03\x06\x05\x06\x9C\n\x06\x05\x06\x9E\n\x06\x03\x06\x03" +
		"\x06\x05\x06\xA2\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\xA9\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xC9\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xD1\n\x06\f\x06\x0E\x06\xD4\v" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xDB\n\x07\x03\b\x03" +
		"\b\x03\b\x05\b\xE0\n\b\x03\b\x06\b\xE3\n\b\r\b\x0E\b\xE4\x03\b\x03\b\x03" +
		"\b\x06\b\xEA\n\b\r\b\x0E\b\xEB\x03\b\x05\b\xEF\n\b\x03\t\x05\t\xF2\n\t" +
		"\x03\t\x03\t\x05\t\xF6\n\t\x03\t\x05\t\xF9\n\t\x03\t\x03\t\x05\t\xFD\n" +
		"\t\x03\t\x05\t\u0100\n\t\x03\n\x03\n\x03\n\x07\n\u0105\n\n\f\n\x0E\n\u0108" +
		"\v\n\x03\n\x05\n\u010B\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x05\f\u0116\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u011D\n\r" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x03\n\x10\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x02\n\x05\x02\x1D\x1D77<<\x05\x02\r\r\x19\x19" +
		"\x1C\x1C\x05\x02((88??\x04\x0277<<\x04\x022356\x04\x020099\x07\x02\x0F" +
		"\x0F\x12\x12\x1B\x1B\x1E\x1E##\b\x02\'(++3368<<??\x02\u015D\x02#\x03\x02" +
		"\x02\x02\x040\x03\x02\x02\x02\x063\x03\x02\x02\x02\bq\x03\x02\x02\x02" +
		"\n\xA8\x03\x02\x02\x02\f\xDA\x03\x02\x02\x02\x0E\xEE\x03\x02\x02\x02\x10" +
		"\xF1\x03\x02\x02\x02\x12\u0101\x03\x02\x02\x02\x14\u010C\x03\x02\x02\x02" +
		"\x16\u0115\x03\x02\x02\x02\x18\u011C\x03\x02\x02\x02\x1A\u011E\x03\x02" +
		"\x02\x02\x1C\u0120\x03\x02\x02\x02\x1E\"\x05\x06\x04\x02\x1F\"\x05\x04" +
		"\x03\x02 \"\x07J\x02\x02!\x1E\x03\x02\x02\x02!\x1F\x03\x02\x02\x02! \x03" +
		"\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$-" +
		"\x03\x02\x02\x02%#\x03\x02\x02\x02&(\x05\x1A\x0E\x02\'&\x03\x02\x02\x02" +
		"\'(\x03\x02\x02\x02()\x03\x02\x02\x02),\x05\x10\t\x02*,\x07J\x02\x02+" +
		"\'\x03\x02\x02\x02+*\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02" +
		"-.\x03\x02\x02\x02.\x03\x03\x02\x02\x02/-\x03\x02\x02\x0201\x07\x14\x02" +
		"\x0212\x05\n\x06\x022\x05\x03\x02\x02\x0234\x07\x18\x02\x0245\x05\n\x06" +
		"\x0256\x07-\x02\x026;\x05\n\x06\x0278\x07.\x02\x028:\x05\n\x06\x0297\x03" +
		"\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<\x07" +
		"\x03\x02\x02\x02=;\x03\x02\x02\x02>r\x05\x10\t\x02?r\x05\n\x06\x02@A\x05" +
		"\x18\r\x02AB\x07\'\x02\x02BC\x05\n\x06\x02Cr\x03\x02\x02\x02DL\x07\x16" +
		"\x02\x02EH\x05\x18\r\x02FG\x07.\x02\x02GI\x05\x18\r\x02HF\x03\x02\x02" +
		"\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x07\x19\x02\x02KM\x03\x02\x02" +
		"\x02LE\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x05\n\x06" +
		"\x02OP\x05\x0E\b\x02Pr\x03\x02\x02\x02QR\x07$\x02\x02RS\x05\n\x06\x02" +
		"ST\x05\x0E\b\x02Tr\x03\x02\x02\x02UV\x07\x10\x02\x02VW\x05\x0E\b\x02W" +
		"X\x07$\x02\x02XY\x05\n\x06\x02Yr\x03\x02\x02\x02Z[\x07\x17\x02\x02[\\" +
		"\x05\n\x06\x02\\_\x05\x0E\b\x02]^\x07\x11\x02\x02^`\x05\x0E\b\x02_]\x03" +
		"\x02\x02\x02_`\x03\x02\x02\x02`r\x03\x02\x02\x02ar\x07\x0E\x02\x02bd\x07" +
		"!\x02\x02ce\x05\n\x06\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02er\x03\x02" +
		"\x02\x02fg\x07\f\x02\x02gi\x05\n\x06\x02hj\x07J\x02\x02ih\x03\x02\x02" +
		"\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02" +
		"\x02mn\x07\x13\x02\x02no\x05\n\x06\x02or\x03\x02\x02\x02pr\x07H\x02\x02" +
		"q>\x03\x02\x02\x02q?\x03\x02\x02\x02q@\x03\x02\x02\x02qD\x03\x02\x02\x02" +
		"qQ\x03\x02\x02\x02qU\x03\x02\x02\x02qZ\x03\x02\x02\x02qa\x03\x02\x02\x02" +
		"qb\x03\x02\x02\x02qf\x03\x02\x02\x02qp\x03\x02\x02\x02r\t\x03\x02\x02" +
		"\x02st\b\x06\x01\x02t\xA9\x05\f\x07\x02uw\x05\x18\r\x02vx\x05\x14\v\x02" +
		"wv\x03\x02\x02\x02wx\x03\x02\x02\x02x\xA9\x03\x02\x02\x02yz\x07\x07\x02" +
		"\x02z{\x05\n\x06\x02{|\x07\b\x02\x02|\xA9\x03\x02\x02\x02}\x7F\x07\x05" +
		"\x02\x02~\x80\x05\x12\n\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02" +
		"\x80\x81\x03\x02\x02\x02\x81\xA9\x07\x06\x02\x02\x82\x8E\x07\t\x02\x02" +
		"\x83\x88\x05\x10\t\x02\x84\x85\x07.\x02\x02\x85\x87\x05\x10\t\x02\x86" +
		"\x84\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88" +
		"\x89\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B" +
		"\x8D\x07.\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D" +
		"\x8F\x03\x02\x02\x02\x8E\x83\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F" +
		"\x90\x03\x02\x02\x02\x90\xA9\x07\n\x02\x02\x91\x9D\x07\x07\x02\x02\x92" +
		"\x97\x05\x10\t\x02\x93\x94\x07.\x02\x02\x94\x96\x05\x10\t\x02\x95\x93" +
		"\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9C" +
		"\x07.\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9E" +
		"\x03\x02\x02\x02\x9D\x92\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F" +
		"\x03\x02\x02\x02\x9F\xA1\x07\b\x02\x02\xA0\xA2\x05\n\x06\x02\xA1\xA0\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA9\x05" +
		"\x0E\b\x02\xA4\xA5\x07@\x02\x02\xA5\xA9\x05\n\x06\r\xA6\xA7\t\x02\x02" +
		"\x02\xA7\xA9\x05\n\x06\f\xA8s\x03\x02\x02\x02\xA8u\x03\x02\x02\x02\xA8" +
		"y\x03\x02\x02\x02\xA8}\x03\x02\x02\x02\xA8\x82\x03\x02\x02\x02\xA8\x91" +
		"\x03\x02\x02\x02\xA8\xA4\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xD2" +
		"\x03\x02\x02\x02\xAA\xAB\f\v\x02\x02\xAB\xAC\t\x03\x02\x02\xAC\xD1\x05" +
		"\n\x06\f\xAD\xAE\f\n\x02\x02\xAE\xAF\x07+\x02\x02\xAF\xD1\x05\n\x06\v" +
		"\xB0\xB1\f\t\x02\x02\xB1\xB2\t\x04\x02\x02\xB2\xD1\x05\n\x06\n\xB3\xB4" +
		"\f\b\x02\x02\xB4\xB5\t\x05\x02\x02\xB5\xD1\x05\n\x06\t\xB6\xB7\f\x07\x02" +
		"\x02\xB7\xB8\x07>\x02\x02\xB8\xD1\x05\n\x06\b\xB9\xBA\f\x06\x02\x02\xBA" +
		"\xBB\t\x06\x02\x02\xBB\xD1\x05\n\x06\x07\xBC\xBD\f\x05\x02\x02\xBD\xBE" +
		"\t\x07\x02\x02\xBE\xD1\x05\n\x06\x06\xBF\xC0\f\x04\x02\x02\xC0\xC1\x07" +
		"&\x02\x02\xC1\xD1\x05\n\x06\x05\xC2\xC3\f\x03\x02\x02\xC3\xC4\x07:\x02" +
		"\x02\xC4\xD1\x05\n\x06\x04\xC5\xC6\f\x10\x02\x02\xC6\xC8\x07\x07\x02\x02" +
		"\xC7\xC9\x05\x12\n\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02" +
		"\xC9\xCA\x03\x02\x02\x02\xCA\xD1\x07\b\x02\x02\xCB\xCC\f\x0F\x02\x02\xCC" +
		"\xD1\x07=\x02\x02\xCD\xCE\f\x0E\x02\x02\xCE\xCF\x07/\x02\x02\xCF\xD1\x05" +
		"\x18\r\x02\xD0\xAA\x03\x02\x02\x02\xD0\xAD\x03\x02\x02\x02\xD0\xB0\x03" +
		"\x02\x02\x02\xD0\xB3\x03\x02\x02\x02\xD0\xB6\x03\x02\x02\x02\xD0\xB9\x03" +
		"\x02\x02\x02\xD0\xBC\x03\x02\x02\x02\xD0\xBF\x03\x02\x02\x02\xD0\xC2\x03" +
		"\x02\x02\x02\xD0\xC5\x03\x02\x02\x02\xD0\xCB\x03\x02\x02\x02\xD0\xCD\x03" +
		"\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03" +
		"\x02\x02\x02\xD3\v\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xDB\x07" +
		"D\x02\x02\xD6\xDB\x07C\x02\x02\xD7\xDB\x07E\x02\x02\xD8\xDB\x07F\x02\x02" +
		"\xD9\xDB\x07G\x02\x02\xDA\xD5\x03\x02\x02\x02\xDA\xD6\x03\x02\x02\x02" +
		"\xDA\xD7\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9\x03\x02\x02\x02" +
		"\xDB\r\x03\x02\x02\x02\xDC\xDD\x07-\x02\x02\xDD\xEF\x05\b\x05\x02\xDE" +
		"\xE0\x07-\x02\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0" +
		"\xE2\x03\x02\x02\x02\xE1\xE3\x07J\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\xE6\x03\x02\x02\x02\xE6\xE9\x07\x03\x02\x02\xE7\xEA\x05\b\x05\x02\xE8" +
		"\xEA\x07J\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA" +
		"\xEB\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC" +
		"\xED\x03\x02\x02\x02\xED\xEF\x07\x04\x02\x02\xEE\xDC\x03\x02\x02\x02\xEE" +
		"\xDF\x03\x02\x02\x02\xEF\x0F\x03\x02\x02\x02\xF0\xF2\x07@\x02\x02\xF1" +
		"\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3" +
		"\xF5\x05\x16\f\x02\xF4\xF6\x05\x14\v\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6" +
		"\x03\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF9\x05\n\x06\x02\xF8\xF7" +
		"\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xFB" +
		"\x07\x1C\x02\x02\xFB\xFD\x05\x12\n\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD" +
		"\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\u0100\x05\x0E\b\x02\xFF\xFE" +
		"\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\x11\x03\x02\x02\x02\u0101" +
		"\u0106\x05\n\x06\x02\u0102\u0103\x07.\x02\x02\u0103\u0105\x05\n\x06\x02" +
		"\u0104\u0102\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03" +
		"\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108" +
		"\u0106\x03\x02\x02\x02\u0109\u010B\x07.\x02\x02\u010A\u0109\x03\x02\x02" +
		"\x02\u010A\u010B\x03\x02\x02\x02\u010B\x13\x03\x02\x02\x02\u010C\u010D" +
		"\x076\x02\x02\u010D\u010E\x07;\x02\x02\u010E\u010F\x05\x12\n\x02\u010F" +
		"\u0110\x07;\x02\x02\u0110\u0111\x073\x02\x02\u0111\x15\x03\x02\x02\x02" +
		"\u0112\u0116\x05\x18\r\x02\u0113\u0116\x07F\x02\x02\u0114\u0116\x05\x1C" +
		"\x0F\x02\u0115\u0112\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115" +
		"\u0114\x03\x02\x02\x02\u0116\x17\x03\x02\x02\x02\u0117\u011D\x05\x1A\x0E" +
		"\x02\u0118\u011D\x07I\x02\x02\u0119\u011D\x07\x1C\x02\x02\u011A\u011D" +
		"\x07\r\x02\x02\u011B\u011D\x07\x19\x02\x02\u011C\u0117\x03\x02\x02\x02" +
		"\u011C\u0118\x03\x02\x02\x02\u011C\u0119\x03\x02\x02\x02\u011C\u011A\x03" +
		"\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D\x19\x03\x02\x02\x02\u011E" +
		"\u011F\t\b\x02\x02\u011F\x1B\x03\x02\x02\x02\u0120\u0121\t\t\x02\x02\u0121" +
		"\x1D\x03\x02\x02\x02*!#\'+-;HL_dkqw\x7F\x88\x8C\x8E\x97\x9B\x9D\xA1\xA8" +
		"\xC8\xD0\xD2\xDA\xDF\xE4\xE9\xEB\xEE\xF1\xF5\xF8\xFC\xFF\u0106\u010A\u0115" +
		"\u011C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public library(): LibraryContext[];
	public library(i: number): LibraryContext;
	public library(i?: number): LibraryContext | LibraryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryContext);
		} else {
			return this.getRuleContext(i, LibraryContext);
		}
	}
	public export(): ExportContext[];
	public export(i: number): ExportContext;
	public export(i?: number): ExportContext | ExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExportContext);
		} else {
			return this.getRuleContext(i, ExportContext);
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
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
}


export class ExportContext extends ParserRuleContext {
	public _path!: ExprContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_export; }
}


export class LibraryContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_library; }
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
export class ForStatementContext extends StatementContext {
	public _value!: IdContext;
	public _index!: IdContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
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
export class LiteralExpressionContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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
export class ArrayExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
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
export class MethodExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
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
export class InvokeExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
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


export class ParameterContext extends ParserRuleContext {
	public _type!: ExprContext;
	public parameterId(): ParameterIdContext {
		return this.getRuleContext(0, ParameterIdContext);
	}
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ArgumentsContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_arguments; }
}


export class GenericsContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
		}
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_generics; }
}


export class ParameterIdContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.STRING_LITERAL, 0); }
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameterId; }
}


export class IdContext extends ParserRuleContext {
	public modifier(): ModifierContext | undefined {
		return this.tryGetRuleContext(0, ModifierContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


export class ModifierContext extends ParserRuleContext {
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(XonParser.TYPE, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLASS, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.INTERFACE, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(XonParser.ENUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_modifier; }
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


