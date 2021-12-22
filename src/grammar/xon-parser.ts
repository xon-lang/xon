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
	public static readonly RULE_definition = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_expr = 5;
	public static readonly RULE_literal = 6;
	public static readonly RULE_body = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_arguments = 9;
	public static readonly RULE_generics = 10;
	public static readonly RULE_parameterId = 11;
	public static readonly RULE_id = 12;
	public static readonly RULE_modifier = 13;
	public static readonly RULE_operator = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "definition", "statement", "expr", "literal", 
		"body", "parameter", "arguments", "generics", "parameterId", "id", "modifier", 
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
			this.state = 35;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 33;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 30;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 31;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 32;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)))) !== 0) || _la === XonParser.NL) {
				{
				this.state = 40;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.CLASS:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
				case XonParser.OBJECT:
				case XonParser.TYPE:
					{
					this.state = 38;
					this.definition();
					}
					break;
				case XonParser.NL:
					{
					this.state = 39;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 44;
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
			this.state = 45;
			this.match(XonParser.EXPORT);
			this.state = 46;
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
			this.state = 48;
			this.match(XonParser.IMPORT);
			this.state = 49;
			_localctx._path = this.expr(0);
			this.state = 50;
			this.match(XonParser.COLON);
			this.state = 51;
			_localctx._expr = this.expr(0);
			_localctx._members.push(_localctx._expr);
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 52;
				this.match(XonParser.COMMA);
				this.state = 53;
				_localctx._expr = this.expr(0);
				_localctx._members.push(_localctx._expr);
				}
				}
				this.state = 58;
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
		this.enterRule(_localctx, 6, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.modifier();
			this.state = 60;
			this.id();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 61;
				this.generics();
				}
			}

			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 64;
				_localctx._type = this.expr(0);
				}
				break;
			}
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 67;
				this.match(XonParser.IS);
				this.state = 68;
				this.arguments();
				}
			}

			this.state = 72;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 71;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new ParameterStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 74;
				this.parameter();
				}
				break;

			case 2:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 76;
				this.id();
				this.state = 77;
				this.match(XonParser.ASSIGN);
				this.state = 78;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 80;
				this.match(XonParser.FOR);
				this.state = 88;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 81;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 82;
						this.match(XonParser.COMMA);
						this.state = 83;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 86;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 90;
				this.expr(0);
				this.state = 91;
				this.body();
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 93;
				this.match(XonParser.WHILE);
				this.state = 94;
				this.expr(0);
				this.state = 95;
				this.body();
				}
				break;

			case 6:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 97;
				this.match(XonParser.DO);
				this.state = 98;
				this.body();
				this.state = 99;
				this.match(XonParser.WHILE);
				this.state = 100;
				this.expr(0);
				}
				break;

			case 7:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 102;
				this.match(XonParser.IF);
				this.state = 103;
				this.expr(0);
				this.state = 104;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 107;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this.match(XonParser.ELSE);
					this.state = 106;
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
				this.state = 109;
				this.match(XonParser.BREAK);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 110;
				this.match(XonParser.RETURN);
				this.state = 112;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 111;
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
				this.state = 114;
				this.match(XonParser.ACTUAL);
				this.state = 115;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 116;
					this.match(XonParser.NL);
					}
					}
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 121;
				this.match(XonParser.EXPECT);
				this.state = 122;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 11:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 124;
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
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 128;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 129;
				this.id();
				this.state = 131;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 130;
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
				this.state = 133;
				this.match(XonParser.OPEN_PAREN);
				this.state = 134;
				this.expr(0);
				this.state = 135;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 4:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 137;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.TYPE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.SPREAD - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
					{
					this.state = 138;
					this.arguments();
					}
				}

				this.state = 141;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 142;
				this.match(XonParser.OPEN_BRACE);
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.INTERFACE - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (XonParser.SPREAD - 62)) | (1 << (XonParser.STRING_LITERAL - 62)) | (1 << (XonParser.ID - 62)))) !== 0)) {
					{
					this.state = 143;
					this.parameter();
					this.state = 148;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 144;
							this.match(XonParser.COMMA);
							this.state = 145;
							this.parameter();
							}
							}
						}
						this.state = 150;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 151;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 156;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 157;
				this.match(XonParser.OPEN_PAREN);
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (XonParser.AS - 11)) | (1 << (XonParser.CLASS - 11)) | (1 << (XonParser.ENUM - 11)) | (1 << (XonParser.IN - 11)) | (1 << (XonParser.INTERFACE - 11)) | (1 << (XonParser.IS - 11)) | (1 << (XonParser.OBJECT - 11)) | (1 << (XonParser.TYPE - 11)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (XonParser.SPREAD - 62)) | (1 << (XonParser.STRING_LITERAL - 62)) | (1 << (XonParser.ID - 62)))) !== 0)) {
					{
					this.state = 158;
					this.parameter();
					this.state = 163;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 159;
							this.match(XonParser.COMMA);
							this.state = 160;
							this.parameter();
							}
							}
						}
						this.state = 165;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					}
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 166;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 171;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 173;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 172;
					this.expr(0);
					}
					break;
				}
				this.state = 176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 175;
					this.body();
					}
					break;
				}
				}
				break;

			case 7:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 178;
				this.match(XonParser.SPREAD);
				this.state = 179;
				this.expr(11);
				}
				break;

			case 8:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 180;
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
				this.state = 181;
				this.expr(10);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 227;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 225;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 184;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 185;
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
						this.state = 186;
						(_localctx as InfixExpressionContext)._right = this.expr(10);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 187;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 188;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 189;
						(_localctx as PowExpressionContext)._right = this.expr(9);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 190;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 191;
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
						this.state = 192;
						(_localctx as MulDivModExpressionContext)._right = this.expr(8);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 193;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 194;
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
						this.state = 195;
						(_localctx as AddSubExpressionContext)._right = this.expr(7);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 196;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 197;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 198;
						(_localctx as RangeExpressionContext)._right = this.expr(6);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 199;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 200;
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
						this.state = 201;
						(_localctx as RelationalExpressionContext)._right = this.expr(5);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 202;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 203;
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
						this.state = 204;
						(_localctx as EqualityExpressionContext)._right = this.expr(4);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 205;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 206;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 207;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(3);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 208;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 209;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 210;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(2);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 211;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 212;
						this.match(XonParser.OPEN_PAREN);
						this.state = 214;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.TYPE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.SPREAD - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
							{
							this.state = 213;
							this.arguments();
							}
						}

						this.state = 216;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 217;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 218;
						this.match(XonParser.QUESTION);
						}
						break;

					case 12:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 219;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 220;
						this.match(XonParser.DOT);
						this.state = 221;
						this.id();
						this.state = 223;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
						case 1:
							{
							this.state = 222;
							this.generics();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 229;
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
		this.enterRule(_localctx, 12, XonParser.RULE_literal);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 233;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 234;
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
		this.enterRule(_localctx, 14, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.match(XonParser.COLON);
				this.state = 238;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 239;
					this.match(XonParser.COLON);
					}
				}

				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 242;
					this.match(XonParser.NL);
					}
					}
					this.state = 245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 247;
				this.match(XonParser.INDENT);
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 250;
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
					case XonParser.MINUS:
					case XonParser.PLUS:
					case XonParser.SPREAD:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 248;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 249;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.TYPE - 3)) | (1 << (XonParser.WHILE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.SPREAD - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.PREPROCESSOR - 53)) | (1 << (XonParser.ID - 53)) | (1 << (XonParser.NL - 53)))) !== 0));
				this.state = 254;
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
		this.enterRule(_localctx, 16, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 257;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 260;
			this.parameterId();
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 261;
				this.generics();
				}
				break;
			}
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 264;
				_localctx._type = this.expr(0);
				}
				break;
			}
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.match(XonParser.IS);
				this.state = 268;
				this.arguments();
				}
				break;
			}
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 271;
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
		this.enterRule(_localctx, 18, XonParser.RULE_arguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.expr(0);
			this.state = 279;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 275;
					this.match(XonParser.COMMA);
					this.state = 276;
					this.expr(0);
					}
					}
				}
				this.state = 281;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 282;
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
		this.enterRule(_localctx, 20, XonParser.RULE_generics);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(XonParser.LESS);
			this.state = 286;
			this.match(XonParser.PIPE);
			this.state = 287;
			this.arguments();
			this.state = 288;
			this.match(XonParser.PIPE);
			this.state = 289;
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
		this.enterRule(_localctx, 22, XonParser.RULE_parameterId);
		try {
			this.state = 293;
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
				this.state = 291;
				this.id();
				}
				break;
			case XonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.match(XonParser.STRING_LITERAL);
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
		this.enterRule(_localctx, 24, XonParser.RULE_id);
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.CLASS:
			case XonParser.ENUM:
			case XonParser.INTERFACE:
			case XonParser.OBJECT:
			case XonParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.modifier();
				}
				break;
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 296;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.IS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 297;
				this.match(XonParser.IS);
				}
				break;
			case XonParser.AS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 298;
				this.match(XonParser.AS);
				}
				break;
			case XonParser.IN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 299;
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
		this.enterRule(_localctx, 26, XonParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
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
		this.enterRule(_localctx, 28, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
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
		case 5:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u0135\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x07\x02" +
		"$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x02\x03\x02\x07\x02+\n\x02\f\x02\x0E" +
		"\x02.\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x049\n\x04\f\x04\x0E\x04<\v\x04\x03\x05\x03\x05\x03\x05" +
		"\x05\x05A\n\x05\x03\x05\x05\x05D\n\x05\x03\x05\x03\x05\x05\x05H\n\x05" +
		"\x03\x05\x05\x05K\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06W\n\x06\x03\x06\x03\x06\x05\x06" +
		"[\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06n\n\x06\x03\x06\x03\x06\x03\x06\x05\x06s\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x06\x06x\n\x06\r\x06\x0E\x06y\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\x80\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x86\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8E\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x95\n\x07\f\x07\x0E\x07\x98\v" +
		"\x07\x03\x07\x05\x07\x9B\n\x07\x05\x07\x9D\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x07\x07\xA4\n\x07\f\x07\x0E\x07\xA7\v\x07\x03\x07\x05" +
		"\x07\xAA\n\x07\x05\x07\xAC\n\x07\x03\x07\x03\x07\x05\x07\xB0\n\x07\x03" +
		"\x07\x05\x07\xB3\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xB9\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xD9\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\xE2\n\x07\x07\x07\xE4\n\x07\f\x07" +
		"\x0E\x07\xE7\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xEE\n\b\x03\t\x03" +
		"\t\x03\t\x05\t\xF3\n\t\x03\t\x06\t\xF6\n\t\r\t\x0E\t\xF7\x03\t\x03\t\x03" +
		"\t\x06\t\xFD\n\t\r\t\x0E\t\xFE\x03\t\x05\t\u0102\n\t\x03\n\x05\n\u0105" +
		"\n\n\x03\n\x03\n\x05\n\u0109\n\n\x03\n\x05\n\u010C\n\n\x03\n\x03\n\x05" +
		"\n\u0110\n\n\x03\n\x05\n\u0113\n\n\x03\v\x03\v\x03\v\x07\v\u0118\n\v\f" +
		"\v\x0E\v\u011B\v\v\x03\v\x05\v\u011E\n\v\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x05\r\u0128\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u012F\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x02\x02" +
		"\x03\f\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02\x02\n\x05\x02\x1D" +
		"\x1D77<<\x05\x02\r\r\x19\x19\x1C\x1C\x05\x02((88??\x04\x0277<<\x04\x02" +
		"2356\x04\x020099\x07\x02\x0F\x0F\x12\x12\x1B\x1B\x1E\x1E##\b\x02\'(++" +
		"3368<<??\x02\u0172\x02%\x03\x02\x02\x02\x04/\x03\x02\x02\x02\x062\x03" +
		"\x02\x02\x02\b=\x03\x02\x02\x02\n\x7F\x03\x02\x02\x02\f\xB8\x03\x02\x02" +
		"\x02\x0E\xED\x03\x02\x02\x02\x10\u0101\x03\x02\x02\x02\x12\u0104\x03\x02" +
		"\x02\x02\x14\u0114\x03\x02\x02\x02\x16\u011F\x03\x02\x02\x02\x18\u0127" +
		"\x03\x02\x02\x02\x1A\u012E\x03\x02\x02\x02\x1C\u0130\x03\x02\x02\x02\x1E" +
		"\u0132\x03\x02\x02\x02 $\x05\x06\x04\x02!$\x05\x04\x03\x02\"$\x07J\x02" +
		"\x02# \x03\x02\x02\x02#!\x03\x02\x02\x02#\"\x03\x02\x02\x02$\'\x03\x02" +
		"\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&,\x03\x02\x02\x02\'%\x03" +
		"\x02\x02\x02(+\x05\b\x05\x02)+\x07J\x02\x02*(\x03\x02\x02\x02*)\x03\x02" +
		"\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x03\x03" +
		"\x02\x02\x02.,\x03\x02\x02\x02/0\x07\x14\x02\x0201\x05\f\x07\x021\x05" +
		"\x03\x02\x02\x0223\x07\x18\x02\x0234\x05\f\x07\x0245\x07-\x02\x025:\x05" +
		"\f\x07\x0267\x07.\x02\x0279\x05\f\x07\x0286\x03\x02\x02\x029<\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\x07\x03\x02\x02\x02<:\x03" +
		"\x02\x02\x02=>\x05\x1C\x0F\x02>@\x05\x1A\x0E\x02?A\x05\x16\f\x02@?\x03" +
		"\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02BD\x05\f\x07\x02CB\x03" +
		"\x02\x02\x02CD\x03\x02\x02\x02DG\x03\x02\x02\x02EF\x07\x1C\x02\x02FH\x05" +
		"\x14\v\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IK\x05" +
		"\x10\t\x02JI\x03\x02\x02\x02JK\x03\x02\x02\x02K\t\x03\x02\x02\x02L\x80" +
		"\x05\x12\n\x02M\x80\x05\f\x07\x02NO\x05\x1A\x0E\x02OP\x07\'\x02\x02PQ" +
		"\x05\f\x07\x02Q\x80\x03\x02\x02\x02RZ\x07\x16\x02\x02SV\x05\x1A\x0E\x02" +
		"TU\x07.\x02\x02UW\x05\x1A\x0E\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"WX\x03\x02\x02\x02XY\x07\x19\x02\x02Y[\x03\x02\x02\x02ZS\x03\x02\x02\x02" +
		"Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x05\f\x07\x02]^\x05\x10\t\x02" +
		"^\x80\x03\x02\x02\x02_`\x07$\x02\x02`a\x05\f\x07\x02ab\x05\x10\t\x02b" +
		"\x80\x03\x02\x02\x02cd\x07\x10\x02\x02de\x05\x10\t\x02ef\x07$\x02\x02" +
		"fg\x05\f\x07\x02g\x80\x03\x02\x02\x02hi\x07\x17\x02\x02ij\x05\f\x07\x02" +
		"jm\x05\x10\t\x02kl\x07\x11\x02\x02ln\x05\x10\t\x02mk\x03\x02\x02\x02m" +
		"n\x03\x02\x02\x02n\x80\x03\x02\x02\x02o\x80\x07\x0E\x02\x02pr\x07!\x02" +
		"\x02qs\x05\f\x07\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02s\x80\x03\x02" +
		"\x02\x02tu\x07\f\x02\x02uw\x05\f\x07\x02vx\x07J\x02\x02wv\x03\x02\x02" +
		"\x02xy\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02" +
		"\x02{|\x07\x13\x02\x02|}\x05\f\x07\x02}\x80\x03\x02\x02\x02~\x80\x07H" +
		"\x02\x02\x7FL\x03\x02\x02\x02\x7FM\x03\x02\x02\x02\x7FN\x03\x02\x02\x02" +
		"\x7FR\x03\x02\x02\x02\x7F_\x03\x02\x02\x02\x7Fc\x03\x02\x02\x02\x7Fh\x03" +
		"\x02\x02\x02\x7Fo\x03\x02\x02\x02\x7Fp\x03\x02\x02\x02\x7Ft\x03\x02\x02" +
		"\x02\x7F~\x03\x02\x02\x02\x80\v\x03\x02\x02\x02\x81\x82\b\x07\x01\x02" +
		"\x82\xB9\x05\x0E\b\x02\x83\x85\x05\x1A\x0E\x02\x84\x86\x05\x16\f\x02\x85" +
		"\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\xB9\x03\x02\x02\x02\x87" +
		"\x88\x07\x07\x02\x02\x88\x89\x05\f\x07\x02\x89\x8A\x07\b\x02\x02\x8A\xB9" +
		"\x03\x02\x02\x02\x8B\x8D\x07\x05\x02\x02\x8C\x8E\x05\x14\v\x02\x8D\x8C" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\xB9" +
		"\x07\x06\x02\x02\x90\x9C\x07\t\x02\x02\x91\x96\x05\x12\n\x02\x92\x93\x07" +
		".\x02\x02\x93\x95\x05\x12\n\x02\x94\x92\x03\x02\x02\x02\x95\x98\x03\x02" +
		"\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x9A\x03\x02" +
		"\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9B\x07.\x02\x02\x9A\x99\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x91\x03\x02" +
		"\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xB9\x07\n" +
		"\x02\x02\x9F\xAB\x07\x07\x02\x02\xA0\xA5\x05\x12\n\x02\xA1\xA2\x07.\x02" +
		"\x02\xA2\xA4\x05\x12\n\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA7\x03\x02\x02" +
		"\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA9\x03\x02\x02" +
		"\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAA\x07.\x02\x02\xA9\xA8\x03\x02\x02" +
		"\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA0\x03\x02\x02" +
		"\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x07\b\x02" +
		"\x02\xAE\xB0\x05\f\x07\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02" +
		"\x02\xB0\xB2\x03\x02\x02\x02\xB1\xB3\x05\x10\t\x02\xB2\xB1\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB9\x03\x02\x02\x02\xB4\xB5\x07@\x02" +
		"\x02\xB5\xB9\x05\f\x07\r\xB6\xB7\t\x02\x02\x02\xB7\xB9\x05\f\x07\f\xB8" +
		"\x81\x03\x02\x02\x02\xB8\x83\x03\x02\x02\x02\xB8\x87\x03\x02\x02\x02\xB8" +
		"\x8B\x03\x02\x02\x02\xB8\x90\x03\x02\x02\x02\xB8\x9F\x03\x02\x02\x02\xB8" +
		"\xB4\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xE5\x03\x02\x02\x02\xBA" +
		"\xBB\f\v\x02\x02\xBB\xBC\t\x03\x02\x02\xBC\xE4\x05\f\x07\f\xBD\xBE\f\n" +
		"\x02\x02\xBE\xBF\x07+\x02\x02\xBF\xE4\x05\f\x07\v\xC0\xC1\f\t\x02\x02" +
		"\xC1\xC2\t\x04\x02\x02\xC2\xE4\x05\f\x07\n\xC3\xC4\f\b\x02\x02\xC4\xC5" +
		"\t\x05\x02\x02\xC5\xE4\x05\f\x07\t\xC6\xC7\f\x07\x02\x02\xC7\xC8\x07>" +
		"\x02\x02\xC8\xE4\x05\f\x07\b\xC9\xCA\f\x06\x02\x02\xCA\xCB\t\x06\x02\x02" +
		"\xCB\xE4\x05\f\x07\x07\xCC\xCD\f\x05\x02\x02\xCD\xCE\t\x07\x02\x02\xCE" +
		"\xE4\x05\f\x07\x06\xCF\xD0\f\x04\x02\x02\xD0\xD1\x07&\x02\x02\xD1\xE4" +
		"\x05\f\x07\x05\xD2\xD3\f\x03\x02\x02\xD3\xD4\x07:\x02\x02\xD4\xE4\x05" +
		"\f\x07\x04\xD5\xD6\f\x10\x02\x02\xD6\xD8\x07\x07\x02\x02\xD7\xD9\x05\x14" +
		"\v\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02" +
		"\x02\x02\xDA\xE4\x07\b\x02\x02\xDB\xDC\f\x0F\x02\x02\xDC\xE4\x07=\x02" +
		"\x02\xDD\xDE\f\x0E\x02\x02\xDE\xDF\x07/\x02\x02\xDF\xE1\x05\x1A\x0E\x02" +
		"\xE0\xE2\x05\x16\f\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02" +
		"\xE2\xE4\x03\x02\x02\x02\xE3\xBA\x03\x02\x02\x02\xE3\xBD\x03\x02\x02\x02" +
		"\xE3\xC0\x03\x02\x02\x02\xE3\xC3\x03\x02\x02\x02\xE3\xC6\x03\x02\x02\x02" +
		"\xE3\xC9\x03\x02\x02\x02\xE3\xCC\x03\x02\x02\x02\xE3\xCF\x03\x02\x02\x02" +
		"\xE3\xD2\x03\x02\x02\x02\xE3\xD5\x03\x02\x02\x02\xE3\xDB\x03\x02\x02\x02" +
		"\xE3\xDD\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02" +
		"\xE5\xE6\x03\x02\x02\x02\xE6\r\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02" +
		"\xE8\xEE\x07D\x02\x02\xE9\xEE\x07C\x02\x02\xEA\xEE\x07E\x02\x02\xEB\xEE" +
		"\x07F\x02\x02\xEC\xEE\x07G\x02\x02\xED\xE8\x03\x02\x02\x02\xED\xE9\x03" +
		"\x02\x02\x02\xED\xEA\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03" +
		"\x02\x02\x02\xEE\x0F\x03\x02\x02\x02\xEF\xF0\x07-\x02\x02\xF0\u0102\x05" +
		"\n\x06\x02\xF1\xF3\x07-\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xF6\x07J\x02\x02\xF5\xF4\x03\x02" +
		"\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFC\x07\x03\x02\x02\xFA\xFD\x05\n" +
		"\x06\x02\xFB\xFD\x07J\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFB\x03\x02" +
		"\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02" +
		"\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102\x07\x04\x02\x02\u0101\xEF" +
		"\x03\x02\x02\x02\u0101\xF2\x03\x02\x02\x02\u0102\x11\x03\x02\x02\x02\u0103" +
		"\u0105\x07@\x02\x02\u0104\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02\x02" +
		"\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x05\x18\r\x02\u0107\u0109" +
		"\x05\x16\f\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02" +
		"\u0109\u010B\x03\x02\x02\x02\u010A\u010C\x05\f\x07\x02\u010B\u010A\x03" +
		"\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D" +
		"\u010E\x07\x1C\x02\x02\u010E\u0110\x05\x14\v\x02\u010F\u010D\x03\x02\x02" +
		"\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u0113" +
		"\x05\x10\t\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02" +
		"\u0113\x13\x03\x02\x02\x02\u0114\u0119\x05\f\x07\x02\u0115\u0116\x07." +
		"\x02\x02\u0116\u0118\x05\f\x07\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011B" +
		"\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
		"\u011A\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011E\x07" +
		".\x02\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
		"\x15\x03\x02\x02\x02\u011F\u0120\x076\x02\x02\u0120\u0121\x07;\x02\x02" +
		"\u0121\u0122\x05\x14\v\x02\u0122\u0123\x07;\x02\x02\u0123\u0124\x073\x02" +
		"\x02\u0124\x17\x03\x02\x02\x02\u0125\u0128\x05\x1A\x0E\x02\u0126\u0128" +
		"\x07F\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0126\x03\x02\x02\x02" +
		"\u0128\x19\x03\x02\x02\x02\u0129\u012F\x05\x1C\x0F\x02\u012A\u012F\x07" +
		"I\x02\x02\u012B\u012F\x07\x1C\x02\x02\u012C\u012F\x07\r\x02\x02\u012D" +
		"\u012F\x07\x19\x02\x02\u012E\u0129\x03\x02\x02\x02\u012E\u012A\x03\x02" +
		"\x02\x02\u012E\u012B\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E" +
		"\u012D\x03\x02\x02\x02\u012F\x1B\x03\x02\x02\x02\u0130\u0131\t\b\x02\x02" +
		"\u0131\x1D\x03\x02\x02\x02\u0132\u0133\t\t\x02\x02\u0133\x1F\x03\x02\x02" +
		"\x02/#%*,:@CGJVZmry\x7F\x85\x8D\x96\x9A\x9C\xA5\xA9\xAB\xAF\xB2\xB8\xD8" +
		"\xE1\xE3\xE5\xED\xF2\xF7\xFC\xFE\u0101\u0104\u0108\u010B\u010F\u0112\u0119" +
		"\u011D\u0127\u012E";
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
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
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


export class DefinitionContext extends ParserRuleContext {
	public _type!: ExprContext;
	public modifier(): ModifierContext {
		return this.getRuleContext(0, ModifierContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
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
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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


