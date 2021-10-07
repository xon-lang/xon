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
	public static readonly IS = 9;
	public static readonly AS = 10;
	public static readonly DO = 11;
	public static readonly IF = 12;
	public static readonly IN = 13;
	public static readonly FOR = 14;
	public static readonly ELSE = 15;
	public static readonly INIT = 16;
	public static readonly TEST = 17;
	public static readonly BREAK = 18;
	public static readonly INFIX = 19;
	public static readonly WHILE = 20;
	public static readonly ACTUAL = 21;
	public static readonly EXPECT = 22;
	public static readonly EXPORT = 23;
	public static readonly IMPORT = 24;
	public static readonly PREFIX = 25;
	public static readonly RETURN = 26;
	public static readonly POSTFIX = 27;
	public static readonly AT = 28;
	public static readonly DOT = 29;
	public static readonly PLUS = 30;
	public static readonly HASH = 31;
	public static readonly PIPE = 32;
	public static readonly LESS = 33;
	public static readonly COMMA = 34;
	public static readonly COLON = 35;
	public static readonly GREAT = 36;
	public static readonly MINUS = 37;
	public static readonly SLASH = 38;
	public static readonly CARET = 39;
	public static readonly TILDE = 40;
	public static readonly EQUAL = 41;
	public static readonly DOLLAR = 42;
	public static readonly MODULO = 43;
	public static readonly QUESTION = 44;
	public static readonly ASTERISK = 45;
	public static readonly AMPERSAND = 46;
	public static readonly UNDERSCORE = 47;
	public static readonly EXCLAMATION = 48;
	public static readonly BACK_SLASH = 49;
	public static readonly NULL_LITERAL = 50;
	public static readonly FLOAT_LITERAL = 51;
	public static readonly INTEGER_LITERAL = 52;
	public static readonly BOOLEAN_LITERAL = 53;
	public static readonly CHAR_LITERAL = 54;
	public static readonly STRING_LITERAL = 55;
	public static readonly PREPROCESSOR = 56;
	public static readonly ID = 57;
	public static readonly NL = 58;
	public static readonly WS = 59;
	public static readonly COMMENT = 60;
	public static readonly RULE_listing = 0;
	public static readonly RULE_export = 1;
	public static readonly RULE_library = 2;
	public static readonly RULE_libraryPath = 3;
	public static readonly RULE_libraryMember = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_member = 6;
	public static readonly RULE_extensionMember = 7;
	public static readonly RULE_test = 8;
	public static readonly RULE_function = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_literal = 13;
	public static readonly RULE_type = 14;
	public static readonly RULE_operator = 15;
	public static readonly RULE_id = 16;
	public static readonly RULE_parameter = 17;
	public static readonly RULE_parameters = 18;
	public static readonly RULE_argument = 19;
	public static readonly RULE_arguments = 20;
	public static readonly RULE_typeParameters = 21;
	public static readonly RULE_genericArguments = 22;
	public static readonly RULE_genericParameters = 23;
	public static readonly RULE_body = 24;
	public static readonly RULE_operatorBody = 25;
	public static readonly RULE_functionBody = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"listing", "export", "library", "libraryPath", "libraryMember", "definition", 
		"member", "extensionMember", "test", "function", "statement", "assignment", 
		"expression", "literal", "type", "operator", "id", "parameter", "parameters", 
		"argument", "arguments", "typeParameters", "genericArguments", "genericParameters", 
		"body", "operatorBody", "functionBody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'init'", "'test'", 
		"'break'", "'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'@'", "'.'", "'+'", "'#'", "'|'", 
		"'<'", "','", "':'", "'>'", "'-'", "'/'", "'^'", "'~'", "'='", "'$'", 
		"'%'", "'?'", "'*'", "'&'", "'_'", "'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "INIT", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "AT", "DOT", "PLUS", 
		"HASH", "PIPE", "LESS", "COMMA", "COLON", "GREAT", "MINUS", "SLASH", "CARET", 
		"TILDE", "EQUAL", "DOLLAR", "MODULO", "QUESTION", "ASTERISK", "AMPERSAND", 
		"UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "NULL_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "BOOLEAN_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
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
	public listing(): ListingContext {
		let _localctx: ListingContext = new ListingContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_listing);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 57;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 54;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 55;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 56;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.INIT) | (1 << XonParser.TEST) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0)) {
				{
				this.state = 68;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 62;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 63;
					this.extensionMember();
					}
					break;

				case 3:
					{
					this.state = 64;
					this.test();
					}
					break;

				case 4:
					{
					this.state = 65;
					this.function();
					}
					break;

				case 5:
					{
					this.state = 66;
					this.statement();
					}
					break;

				case 6:
					{
					this.state = 67;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 72;
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
			this.state = 73;
			this.match(XonParser.EXPORT);
			this.state = 74;
			this.libraryPath();
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
			this.state = 76;
			this.match(XonParser.IMPORT);
			this.state = 77;
			this.libraryPath();
			this.state = 91;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 78;
				this.match(XonParser.AS);
				this.state = 79;
				this.id();
				}
				break;
			case XonParser.EOF:
			case XonParser.OPEN_BRACKET:
			case XonParser.OPEN_PAREN:
			case XonParser.OPEN_BRACE:
			case XonParser.DO:
			case XonParser.IF:
			case XonParser.FOR:
			case XonParser.INIT:
			case XonParser.TEST:
			case XonParser.BREAK:
			case XonParser.WHILE:
			case XonParser.ACTUAL:
			case XonParser.EXPECT:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.RETURN:
			case XonParser.DOT:
			case XonParser.PLUS:
			case XonParser.PIPE:
			case XonParser.LESS:
			case XonParser.COLON:
			case XonParser.GREAT:
			case XonParser.MINUS:
			case XonParser.SLASH:
			case XonParser.CARET:
			case XonParser.TILDE:
			case XonParser.EQUAL:
			case XonParser.DOLLAR:
			case XonParser.MODULO:
			case XonParser.ASTERISK:
			case XonParser.AMPERSAND:
			case XonParser.EXCLAMATION:
			case XonParser.BACK_SLASH:
			case XonParser.NULL_LITERAL:
			case XonParser.FLOAT_LITERAL:
			case XonParser.INTEGER_LITERAL:
			case XonParser.BOOLEAN_LITERAL:
			case XonParser.CHAR_LITERAL:
			case XonParser.STRING_LITERAL:
			case XonParser.PREPROCESSOR:
			case XonParser.ID:
			case XonParser.NL:
				{
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 80;
					this.match(XonParser.COLON);
					this.state = 81;
					this.libraryMember();
					this.state = 86;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 82;
						this.match(XonParser.COMMA);
						this.state = 83;
						this.libraryMember();
						}
						}
						this.state = 88;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 93;
				this.match(XonParser.DOT);
				}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this.id();
			this.state = 104;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 100;
					this.match(XonParser.DOT);
					this.state = 101;
					this.id();
					}
					}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
		this.enterRule(_localctx, 8, XonParser.RULE_libraryMember);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INIT:
			case XonParser.ACTUAL:
			case XonParser.EXPECT:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				_localctx._name = this.id();
				}
				break;
			case XonParser.AS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.match(XonParser.AS);
				this.state = 110;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 109;
					_localctx._alias = this.id();
					}
					break;
				}
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.id();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 115;
				this.genericParameters();
				}
			}

			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 118;
				this.parameters();
				}
			}

			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 121;
				this.match(XonParser.IS);
				this.state = 122;
				this.type(0);
				}
			}

			this.state = 125;
			this.match(XonParser.COLON);
			this.state = 126;
			this.match(XonParser.NL);
			this.state = 127;
			this.match(XonParser.INDENT);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 130;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.INIT:
				case XonParser.INFIX:
				case XonParser.ACTUAL:
				case XonParser.EXPECT:
				case XonParser.EXPORT:
				case XonParser.IMPORT:
				case XonParser.PREFIX:
				case XonParser.POSTFIX:
				case XonParser.ID:
					{
					this.state = 128;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 129;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.INFIX) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
			this.state = 134;
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
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.id();
				this.state = 138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 137;
					this.type(0);
					}
					break;
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON || _la === XonParser.EQUAL) {
					{
					this.state = 140;
					_la = this._input.LA(1);
					if (!(_la === XonParser.COLON || _la === XonParser.EQUAL)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 141;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new HierarchyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.id();
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 145;
					this.type(0);
					}
				}

				this.state = 148;
				this.match(XonParser.NL);
				this.state = 149;
				this.match(XonParser.INDENT);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 152;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.INIT:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.EXPORT:
					case XonParser.IMPORT:
					case XonParser.DOT:
					case XonParser.PLUS:
					case XonParser.PIPE:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.TILDE:
					case XonParser.EQUAL:
					case XonParser.DOLLAR:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AMPERSAND:
					case XonParser.EXCLAMATION:
					case XonParser.BACK_SLASH:
					case XonParser.NULL_LITERAL:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.BOOLEAN_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.ID:
						{
						this.state = 150;
						this.assignment();
						}
						break;
					case XonParser.NL:
						{
						this.state = 151;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 156;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.match(XonParser.INIT);
				this.state = 159;
				this.body();
				}
				break;

			case 4:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 160;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 161;
				this.operator();
				this.state = 162;
				this.parameters();
				this.state = 164;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 163;
					this.type(0);
					}
					break;
				}
				this.state = 167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 166;
					this.functionBody();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 169;
				this.id();
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 170;
					this.genericParameters();
					}
				}

				this.state = 173;
				this.parameters();
				this.state = 175;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 174;
					this.type(0);
					}
					break;
				}
				this.state = 178;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.functionBody();
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
	public extensionMember(): ExtensionMemberContext {
		let _localctx: ExtensionMemberContext = new ExtensionMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_extensionMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			_localctx._receiver = this.type(0);
			this.state = 183;
			this.match(XonParser.DOT);
			this.state = 184;
			this.id();
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 185;
				this.genericParameters();
				}
				break;
			}
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 188;
				this.parameters();
				}
				break;
			}
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 191;
				_localctx._result = this.type(0);
				}
				break;
			}
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 194;
				this.functionBody();
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(XonParser.TEST);
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 198;
				this.expression(0);
				}
				break;
			}
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 201;
				this.body();
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.id();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 205;
				this.genericParameters();
				}
			}

			this.state = 208;
			this.parameters();
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 209;
				this.type(0);
				}
				break;
			}
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 212;
				this.functionBody();
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
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.match(XonParser.FOR);
				this.state = 223;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 216;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 217;
						this.match(XonParser.COMMA);
						this.state = 218;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 221;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 225;
				this.expression(0);
				this.state = 226;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.match(XonParser.WHILE);
				this.state = 229;
				this.expression(0);
				this.state = 230;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.match(XonParser.DO);
				this.state = 233;
				this.operatorBody();
				this.state = 234;
				this.match(XonParser.WHILE);
				this.state = 235;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 237;
				this.match(XonParser.IF);
				this.state = 238;
				this.expression(0);
				this.state = 239;
				this.body();
				this.state = 242;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 240;
					this.match(XonParser.ELSE);
					this.state = 241;
					this.operatorBody();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 244;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 245;
				this.match(XonParser.RETURN);
				this.state = 247;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 246;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 249;
				this.match(XonParser.ACTUAL);
				this.state = 250;
				this.expression(0);
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 251;
					this.match(XonParser.NL);
					}
					}
					this.state = 254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 256;
				this.match(XonParser.EXPECT);
				this.state = 257;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 259;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 260;
				this.assignment();
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 261;
				this.expression(0);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.id();
				this.state = 266;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 265;
					this.type(0);
					}
					break;
				}
				this.state = 268;
				this.match(XonParser.EQUAL);
				this.state = 269;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new HierarchyAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 271;
				this.id();
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 272;
					this.type(0);
					}
				}

				this.state = 275;
				this.match(XonParser.NL);
				this.state = 276;
				this.match(XonParser.INDENT);
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 279;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.INIT:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.EXPORT:
					case XonParser.IMPORT:
					case XonParser.DOT:
					case XonParser.PLUS:
					case XonParser.PIPE:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.TILDE:
					case XonParser.EQUAL:
					case XonParser.DOLLAR:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AMPERSAND:
					case XonParser.EXCLAMATION:
					case XonParser.BACK_SLASH:
					case XonParser.NULL_LITERAL:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.BOOLEAN_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.ID:
						{
						this.state = 277;
						this.assignment();
						}
						break;
					case XonParser.NL:
						{
						this.state = 278;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 283;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 285;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 286;
				this.id();
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 287;
					this.match(XonParser.COMMA);
					this.state = 288;
					this.id();
					}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 294;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 295;
				this.match(XonParser.EQUAL);
				this.state = 296;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 298;
				this.match(XonParser.OPEN_BRACE);
				this.state = 299;
				this.id();
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 300;
					this.match(XonParser.COMMA);
					this.state = 301;
					this.id();
					}
					}
					this.state = 306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 307;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 308;
				this.match(XonParser.EQUAL);
				this.state = 309;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 311;
				this.match(XonParser.DOLLAR);
				this.state = 312;
				this.id();
				this.state = 313;
				this.match(XonParser.EQUAL);
				this.state = 314;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 316;
				this.expression(0);
				this.state = 317;
				this.match(XonParser.DOT);
				this.state = 318;
				this.id();
				this.state = 319;
				this.match(XonParser.EQUAL);
				this.state = 320;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 322;
				this.expression(0);
				this.state = 323;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 324;
				this.expression(0);
				this.state = 325;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 326;
				this.match(XonParser.EQUAL);
				this.state = 327;
				this.expression(0);
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
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 332;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 333;
				this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 334;
				this.match(XonParser.DOLLAR);
				this.state = 335;
				this.id();
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 336;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 343;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 338;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 337;
							this.operator();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 340;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;

				case 2:
					{
					this.state = 342;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 345;
				this.expression(16);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 346;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 347;
					this.expression(0);
					this.state = 352;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 348;
						this.match(XonParser.COMMA);
						this.state = 349;
						this.expression(0);
						}
						}
						this.state = 354;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 357;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 358;
				this.match(XonParser.OPEN_PAREN);
				this.state = 359;
				this.expression(0);
				this.state = 360;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 8:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 362;
				this.match(XonParser.BACK_SLASH);
				this.state = 373;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 363;
					this.id();
					this.state = 368;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 364;
						this.match(XonParser.COMMA);
						this.state = 365;
						this.id();
						}
						}
						this.state = 370;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 371;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 375;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 448;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 446;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 379;
						(_localctx as PowExpressionContext)._s39 = this.match(XonParser.CARET);
						(_localctx as PowExpressionContext)._op.push((_localctx as PowExpressionContext)._s39);
						this.state = 380;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 382;
						(_localctx as MulDivModExpressionContext).__tset247 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.SLASH - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.ASTERISK - 38)))) !== 0))) {
							(_localctx as MulDivModExpressionContext).__tset247 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as MulDivModExpressionContext)._op.push((_localctx as MulDivModExpressionContext).__tset247);
						this.state = 383;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 385;
						(_localctx as AddSubExpressionContext).__tset298 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
							(_localctx as AddSubExpressionContext).__tset298 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as AddSubExpressionContext)._op.push((_localctx as AddSubExpressionContext).__tset298);
						this.state = 386;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 388;
						(_localctx as RangeExpressionContext)._s29 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s29);
						this.state = 389;
						(_localctx as RangeExpressionContext)._s29 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s29);
						this.state = 390;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 391;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 392;
						(_localctx as InfixExpressionContext)._ID = this.match(XonParser.ID);
						(_localctx as InfixExpressionContext)._op.push((_localctx as InfixExpressionContext)._ID);
						this.state = 393;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 394;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 395;
						(_localctx as ElvisExpressionContext)._s44 = this.match(XonParser.QUESTION);
						(_localctx as ElvisExpressionContext)._op.push((_localctx as ElvisExpressionContext)._s44);
						this.state = 396;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 397;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 398;
						(_localctx as RelationalExpressionContext).__tset444 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.LESS || _la === XonParser.GREAT)) {
							(_localctx as RelationalExpressionContext).__tset444 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext).__tset444);
						this.state = 400;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
						case 1:
							{
							this.state = 399;
							(_localctx as RelationalExpressionContext)._s41 = this.match(XonParser.EQUAL);
							(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext)._s41);
							}
							break;
						}
						this.state = 402;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 403;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 404;
						(_localctx as EqualityExpressionContext).__tset498 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.EXCLAMATION)) {
							(_localctx as EqualityExpressionContext).__tset498 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext).__tset498);
						this.state = 405;
						(_localctx as EqualityExpressionContext)._s41 = this.match(XonParser.EQUAL);
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext)._s41);
						this.state = 406;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 407;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 408;
						(_localctx as ConjunctionExpressionContext)._s46 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s46);
						this.state = 409;
						(_localctx as ConjunctionExpressionContext)._s46 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s46);
						this.state = 410;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 411;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 412;
						(_localctx as DisjunctionExpressionContext)._s32 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s32);
						this.state = 413;
						(_localctx as DisjunctionExpressionContext)._s32 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s32);
						this.state = 414;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 415;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 416;
						this.match(XonParser.PIPE);
						this.state = 417;
						this.id();
						this.state = 418;
						this.match(XonParser.COLON);
						this.state = 419;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 421;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 423;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 422;
							this.genericArguments();
							}
						}

						this.state = 425;
						this.arguments();
						}
						break;

					case 13:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 426;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 427;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 428;
						this.expression(0);
						this.state = 429;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 14:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 431;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 433;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QUESTION) {
							{
							this.state = 432;
							this.match(XonParser.QUESTION);
							}
						}

						this.state = 435;
						this.match(XonParser.DOT);
						this.state = 436;
						this.id();
						}
						break;

					case 15:
						{
						_localctx = new PostfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 437;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 444;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
						case 1:
							{
							this.state = 439;
							this._errHandler.sync(this);
							_alt = 1;
							do {
								switch (_alt) {
								case 1:
									{
									{
									this.state = 438;
									this.operator();
									}
									}
									break;
								default:
									throw new NoViableAltException(this);
								}
								this.state = 441;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
							} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
							}
							break;

						case 2:
							{
							this.state = 443;
							this.match(XonParser.ID);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
		this.enterRule(_localctx, 26, XonParser.RULE_literal);
		try {
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 452;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 453;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 454;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 455;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 456;
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

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 460;
				this.id();
				this.state = 462;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 461;
					this.genericArguments();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new LiteralTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 464;
				this.expression(0);
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 465;
					this.genericParameters();
					}
				}

				this.state = 468;
				this.typeParameters();
				this.state = 469;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 471;
				this.match(XonParser.OPEN_PAREN);
				this.state = 472;
				this.type(0);
				this.state = 473;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 490;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 488;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 477;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 478;
						this.match(XonParser.AMPERSAND);
						this.state = 479;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 480;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 481;
						this.match(XonParser.PIPE);
						this.state = 482;
						this.type(4);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 483;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 484;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 485;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 486;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 487;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (XonParser.DOT - 29)) | (1 << (XonParser.PLUS - 29)) | (1 << (XonParser.PIPE - 29)) | (1 << (XonParser.LESS - 29)) | (1 << (XonParser.GREAT - 29)) | (1 << (XonParser.MINUS - 29)) | (1 << (XonParser.SLASH - 29)) | (1 << (XonParser.CARET - 29)) | (1 << (XonParser.TILDE - 29)) | (1 << (XonParser.EQUAL - 29)) | (1 << (XonParser.MODULO - 29)) | (1 << (XonParser.ASTERISK - 29)) | (1 << (XonParser.AMPERSAND - 29)) | (1 << (XonParser.EXCLAMATION - 29)) | (1 << (XonParser.ID - 29)))) !== 0))) {
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
		this.enterRule(_localctx, 32, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT))) !== 0) || _la === XonParser.ID)) {
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.id();
			this.state = 498;
			this.type(0);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 499;
				this.match(XonParser.HASH);
				this.state = 500;
				this.id();
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(XonParser.OPEN_PAREN);
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT))) !== 0) || _la === XonParser.ID) {
				{
				this.state = 504;
				this.parameter();
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 505;
					this.match(XonParser.COMMA);
					this.state = 506;
					this.parameter();
					}
					}
					this.state = 511;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 514;
			this.match(XonParser.CLOSE_PAREN);
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
		this.enterRule(_localctx, 38, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 516;
				this.id();
				this.state = 517;
				this.match(XonParser.EQUAL);
				}
				break;
			}
			this.state = 521;
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
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(XonParser.OPEN_PAREN);
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
				{
				this.state = 524;
				this.argument();
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 525;
					this.match(XonParser.COMMA);
					this.state = 526;
					this.argument();
					}
					}
					this.state = 531;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 534;
			this.match(XonParser.CLOSE_PAREN);
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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.match(XonParser.OPEN_PAREN);
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.INIT) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
				{
				this.state = 537;
				this.type(0);
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 538;
					this.match(XonParser.COMMA);
					this.state = 539;
					this.type(0);
					}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 547;
			this.match(XonParser.CLOSE_PAREN);
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
	public genericArguments(): GenericArgumentsContext {
		let _localctx: GenericArgumentsContext = new GenericArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.match(XonParser.LESS);
			this.state = 550;
			this.type(0);
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 551;
				this.match(XonParser.COMMA);
				this.state = 552;
				this.type(0);
				}
				}
				this.state = 557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 558;
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
	public genericParameters(): GenericParametersContext {
		let _localctx: GenericParametersContext = new GenericParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this.match(XonParser.LESS);
			this.state = 561;
			this.id();
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 562;
				this.match(XonParser.COMMA);
				this.state = 563;
				this.id();
				}
				}
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 569;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				this.match(XonParser.COLON);
				this.state = 572;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 573;
				this.match(XonParser.COLON);
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 574;
					this.match(XonParser.NL);
					}
					}
					this.state = 579;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 580;
				this.match(XonParser.INDENT);
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 583;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.FOR:
					case XonParser.INIT:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.EXPORT:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.DOT:
					case XonParser.PLUS:
					case XonParser.PIPE:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.TILDE:
					case XonParser.EQUAL:
					case XonParser.DOLLAR:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AMPERSAND:
					case XonParser.EXCLAMATION:
					case XonParser.BACK_SLASH:
					case XonParser.NULL_LITERAL:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.BOOLEAN_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 581;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 582;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.INIT) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.DOT) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 587;
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
	public operatorBody(): OperatorBodyContext {
		let _localctx: OperatorBodyContext = new OperatorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XonParser.RULE_operatorBody);
		try {
			this.state = 592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.body();
				}
				break;
			case XonParser.OPEN_BRACKET:
			case XonParser.OPEN_PAREN:
			case XonParser.OPEN_BRACE:
			case XonParser.DO:
			case XonParser.IF:
			case XonParser.FOR:
			case XonParser.INIT:
			case XonParser.BREAK:
			case XonParser.WHILE:
			case XonParser.ACTUAL:
			case XonParser.EXPECT:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.RETURN:
			case XonParser.DOT:
			case XonParser.PLUS:
			case XonParser.PIPE:
			case XonParser.LESS:
			case XonParser.GREAT:
			case XonParser.MINUS:
			case XonParser.SLASH:
			case XonParser.CARET:
			case XonParser.TILDE:
			case XonParser.EQUAL:
			case XonParser.DOLLAR:
			case XonParser.MODULO:
			case XonParser.ASTERISK:
			case XonParser.AMPERSAND:
			case XonParser.EXCLAMATION:
			case XonParser.BACK_SLASH:
			case XonParser.NULL_LITERAL:
			case XonParser.FLOAT_LITERAL:
			case XonParser.INTEGER_LITERAL:
			case XonParser.BOOLEAN_LITERAL:
			case XonParser.CHAR_LITERAL:
			case XonParser.STRING_LITERAL:
			case XonParser.PREPROCESSOR:
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 591;
				this.statement();
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
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, XonParser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 609;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 594;
				this.body();
				}
				break;
			case XonParser.EQUAL:
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 595;
					this.match(XonParser.NL);
					}
					}
					this.state = 600;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 601;
				this.match(XonParser.EQUAL);
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 602;
					this.match(XonParser.NL);
					}
					}
					this.state = 607;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 608;
				this.statement();
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
		case 12:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 14:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 10);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 8);

		case 7:
			return this.precpred(this._ctx, 7);

		case 8:
			return this.precpred(this._ctx, 6);

		case 9:
			return this.precpred(this._ctx, 5);

		case 10:
			return this.precpred(this._ctx, 4);

		case 11:
			return this.precpred(this._ctx, 19);

		case 12:
			return this.precpred(this._ctx, 18);

		case 13:
			return this.precpred(this._ctx, 17);

		case 14:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 4);

		case 16:
			return this.precpred(this._ctx, 3);

		case 17:
			return this.precpred(this._ctx, 6);

		case 18:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03>\u0266\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x03\x02\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02G\n\x02\f\x02\x0E\x02J\v\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04W\n\x04\f\x04\x0E\x04Z\v\x04\x05\x04\\\n\x04\x05\x04" +
		"^\n\x04\x03\x05\x07\x05a\n\x05\f\x05\x0E\x05d\v\x05\x03\x05\x03\x05\x03" +
		"\x05\x07\x05i\n\x05\f\x05\x0E\x05l\v\x05\x03\x06\x03\x06\x03\x06\x05\x06" +
		"q\n\x06\x05\x06s\n\x06\x03\x07\x03\x07\x05\x07w\n\x07\x03\x07\x05\x07" +
		"z\n\x07\x03\x07\x03\x07\x05\x07~\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x06\x07\x85\n\x07\r\x07\x0E\x07\x86\x03\x07\x03\x07\x03\b\x03" +
		"\b\x05\b\x8D\n\b\x03\b\x03\b\x05\b\x91\n\b\x03\b\x03\b\x05\b\x95\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x06\b\x9B\n\b\r\b\x0E\b\x9C\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA7\n\b\x03\b\x05\b\xAA\n\b\x03\b\x03" +
		"\b\x05\b\xAE\n\b\x03\b\x03\b\x05\b\xB2\n\b\x03\b\x05\b\xB5\n\b\x05\b\xB7" +
		"\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\xBD\n\t\x03\t\x05\t\xC0\n\t\x03\t\x05" +
		"\t\xC3\n\t\x03\t\x05\t\xC6\n\t\x03\n\x03\n\x05\n\xCA\n\n\x03\n\x05\n\xCD" +
		"\n\n\x03\v\x03\v\x05\v\xD1\n\v\x03\v\x03\v\x05\v\xD5\n\v\x03\v\x05\v\xD8" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x05\f\xDE\n\f\x03\f\x03\f\x05\f\xE2\n\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\xF5\n\f\x03\f\x03\f\x03\f\x05\f\xFA\n" +
		"\f\x03\f\x03\f\x03\f\x06\f\xFF\n\f\r\f\x0E\f\u0100\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\u0109\n\f\x03\r\x03\r\x05\r\u010D\n\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\u0114\n\r\x03\r\x03\r\x03\r\x03\r\x06\r\u011A" +
		"\n\r\r\r\x0E\r\u011B\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0124\n" +
		"\r\f\r\x0E\r\u0127\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x07\r\u0131\n\r\f\r\x0E\r\u0134\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\u014C\n\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u0155\n\x0E\r\x0E\x0E\x0E\u0156\x03" +
		"\x0E\x05\x0E\u015A\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\u0161\n\x0E\f\x0E\x0E\x0E\u0164\v\x0E\x05\x0E\u0166\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0171" +
		"\n\x0E\f\x0E\x0E\x0E\u0174\v\x0E\x03\x0E\x03\x0E\x05\x0E\u0178\n\x0E\x03" +
		"\x0E\x05\x0E\u017B\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0193" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01AA\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01B4\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u01BA\n\x0E\r\x0E\x0E\x0E\u01BB\x03\x0E" +
		"\x05\x0E\u01BF\n\x0E\x07\x0E\u01C1\n\x0E\f\x0E\x0E\x0E\u01C4\v\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01CC\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u01D1\n\x10\x03\x10\x03\x10\x05\x10\u01D5\n\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01DE" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x07\x10\u01EB\n\x10\f\x10\x0E\x10\u01EE\v\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u01F8\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u01FE\n\x14\f\x14" +
		"\x0E\x14\u0201\v\x14\x05\x14\u0203\n\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u020A\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x07\x16\u0212\n\x16\f\x16\x0E\x16\u0215\v\x16\x05\x16\u0217\n\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u021F\n\x17\f" +
		"\x17\x0E\x17\u0222\v\x17\x05\x17\u0224\n\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x07\x18\u022C\n\x18\f\x18\x0E\x18\u022F\v\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0237\n\x19\f\x19" +
		"\x0E\x19\u023A\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07" +
		"\x1A\u0242\n\x1A\f\x1A\x0E\x1A\u0245\v\x1A\x03\x1A\x03\x1A\x03\x1A\x06" +
		"\x1A\u024A\n\x1A\r\x1A\x0E\x1A\u024B\x03\x1A\x05\x1A\u024F\n\x1A\x03\x1B" +
		"\x03\x1B\x05\x1B\u0253\n\x1B\x03\x1C\x03\x1C\x07\x1C\u0257\n\x1C\f\x1C" +
		"\x0E\x1C\u025A\v\x1C\x03\x1C\x03\x1C\x07\x1C\u025E\n\x1C\f\x1C\x0E\x1C" +
		"\u0261\v\x1C\x03\x1C\x05\x1C\u0264\n\x1C\x03\x1C\x02\x02\x04\x1A\x1E\x1D" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x02\x02\n\x04\x02%%++\x05\x02\x15\x15" +
		"\x1B\x1B\x1D\x1D\x05\x02((--//\x04\x02  \'\'\x04\x02##&&\x04\x02++22\t" +
		"\x02\x1F \"#&+--/022;;\x05\x02\x12\x12\x17\x1A;;\x02\u02D1\x02=\x03\x02" +
		"\x02\x02\x04K\x03\x02\x02\x02\x06N\x03\x02\x02\x02\bb\x03\x02\x02\x02" +
		"\nr\x03\x02\x02\x02\ft\x03\x02\x02\x02\x0E\xB6\x03\x02\x02\x02\x10\xB8" +
		"\x03\x02\x02\x02\x12\xC7\x03\x02\x02\x02\x14\xCE\x03\x02\x02\x02\x16\u0108" +
		"\x03\x02\x02\x02\x18\u014B\x03\x02\x02\x02\x1A\u017A\x03\x02\x02\x02\x1C" +
		"\u01CB\x03\x02\x02\x02\x1E\u01DD\x03\x02\x02\x02 \u01EF\x03\x02\x02\x02" +
		"\"\u01F1\x03\x02\x02\x02$\u01F3\x03\x02\x02\x02&\u01F9\x03\x02\x02\x02" +
		"(\u0209\x03\x02\x02\x02*\u020D\x03\x02\x02\x02,\u021A\x03\x02\x02\x02" +
		".\u0227\x03\x02\x02\x020\u0232\x03\x02\x02\x022\u024E\x03\x02\x02\x02" +
		"4\u0252\x03\x02\x02\x026\u0263\x03\x02\x02\x028<\x05\x06\x04\x029<\x05" +
		"\x04\x03\x02:<\x07<\x02\x02;8\x03\x02\x02\x02;9\x03\x02\x02\x02;:\x03" +
		"\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>H\x03" +
		"\x02\x02\x02?=\x03\x02\x02\x02@G\x05\f\x07\x02AG\x05\x10\t\x02BG\x05\x12" +
		"\n\x02CG\x05\x14\v\x02DG\x05\x16\f\x02EG\x07<\x02\x02F@\x03\x02\x02\x02" +
		"FA\x03\x02\x02\x02FB\x03\x02\x02\x02FC\x03\x02\x02\x02FD\x03\x02\x02\x02" +
		"FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"I\x03\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07\x19\x02\x02LM\x05\b\x05" +
		"\x02M\x05\x03\x02\x02\x02NO\x07\x1A\x02\x02O]\x05\b\x05\x02PQ\x07\f\x02" +
		"\x02Q^\x05\"\x12\x02RS\x07%\x02\x02SX\x05\n\x06\x02TU\x07$\x02\x02UW\x05" +
		"\n\x06\x02VT\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03" +
		"\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02[R\x03\x02\x02\x02[\\" +
		"\x03\x02\x02\x02\\^\x03\x02\x02\x02]P\x03\x02\x02\x02][\x03\x02\x02\x02" +
		"^\x07\x03\x02\x02\x02_a\x07\x1F\x02\x02`_\x03\x02\x02\x02ad\x03\x02\x02" +
		"\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03\x02\x02" +
		"\x02ej\x05\"\x12\x02fg\x07\x1F\x02\x02gi\x05\"\x12\x02hf\x03\x02\x02\x02" +
		"il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\t\x03\x02\x02" +
		"\x02lj\x03\x02\x02\x02ms\x05\"\x12\x02np\x07\f\x02\x02oq\x05\"\x12\x02" +
		"po\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rm\x03\x02\x02\x02" +
		"rn\x03\x02\x02\x02s\v\x03\x02\x02\x02tv\x05\"\x12\x02uw\x050\x19\x02v" +
		"u\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02\x02\x02xz\x05&\x14\x02y" +
		"x\x03\x02\x02\x02yz\x03\x02\x02\x02z}\x03\x02\x02\x02{|\x07\v\x02\x02" +
		"|~\x05\x1E\x10\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02" +
		"\x02\x7F\x80\x07%\x02\x02\x80\x81\x07<\x02\x02\x81\x84\x07\x03\x02\x02" +
		"\x82\x85\x05\x0E\b\x02\x83\x85\x07<\x02\x02\x84\x82\x03\x02\x02\x02\x84" +
		"\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86" +
		"\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x07\x04\x02\x02\x89" +
		"\r\x03\x02\x02\x02\x8A\x8C\x05\"\x12\x02\x8B\x8D\x05\x1E\x10\x02\x8C\x8B" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8F" +
		"\t\x02\x02\x02\x8F\x91\x05\x1A\x0E\x02\x90\x8E\x03\x02\x02\x02\x90\x91" +
		"\x03\x02\x02\x02\x91\xB7\x03\x02\x02\x02\x92\x94\x05\"\x12\x02\x93\x95" +
		"\x05\x1E\x10\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96" +
		"\x03\x02\x02\x02\x96\x97\x07<\x02\x02\x97\x9A\x07\x03\x02\x02\x98\x9B" +
		"\x05\x18\r\x02\x99\x9B\x07<\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03" +
		"\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03" +
		"\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x07\x04\x02\x02\x9F\xB7\x03" +
		"\x02\x02\x02\xA0\xA1\x07\x12\x02\x02\xA1\xB7\x052\x1A\x02\xA2\xA3\t\x03" +
		"\x02\x02\xA3\xA4\x05 \x11\x02\xA4\xA6\x05&\x14\x02\xA5\xA7\x05\x1E\x10" +
		"\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02" +
		"\x02\xA8\xAA\x056\x1C\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02" +
		"\x02\xAA\xB7\x03\x02\x02\x02\xAB\xAD\x05\"\x12\x02\xAC\xAE\x050\x19\x02" +
		"\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02" +
		"\xAF\xB1\x05&\x14\x02\xB0\xB2\x05\x1E\x10\x02\xB1\xB0\x03\x02\x02\x02" +
		"\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB5\x056\x1C\x02" +
		"\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02" +
		"\xB6\x8A\x03\x02\x02\x02\xB6\x92\x03\x02\x02\x02\xB6\xA0\x03\x02\x02\x02" +
		"\xB6\xA2\x03\x02\x02\x02\xB6\xAB\x03\x02\x02\x02\xB7\x0F\x03\x02\x02\x02" +
		"\xB8\xB9\x05\x1E\x10\x02\xB9\xBA\x07\x1F\x02\x02\xBA\xBC\x05\"\x12\x02" +
		"\xBB\xBD\x050\x19\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02" +
		"\xBD\xBF\x03\x02\x02\x02\xBE\xC0\x05&\x14\x02\xBF\xBE\x03\x02\x02\x02" +
		"\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xC3\x05\x1E\x10\x02" +
		"\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02" +
		"\xC4\xC6\x056\x1C\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02" +
		"\xC6\x11\x03\x02\x02\x02\xC7\xC9\x07\x13\x02\x02\xC8\xCA\x05\x1A\x0E\x02" +
		"\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02" +
		"\xCB\xCD\x052\x1A\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02" +
		"\xCD\x13\x03\x02\x02\x02\xCE\xD0\x05\"\x12\x02\xCF\xD1\x050\x19\x02\xD0" +
		"\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2" +
		"\xD4\x05&\x14\x02\xD3\xD5\x05\x1E\x10\x02\xD4\xD3\x03\x02\x02\x02\xD4" +
		"\xD5\x03\x02\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD8\x056\x1C\x02\xD7" +
		"\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x15\x03\x02\x02\x02\xD9" +
		"\xE1\x07\x10\x02\x02\xDA\xDD\x05\"\x12\x02\xDB\xDC\x07$\x02\x02\xDC\xDE" +
		"\x05\"\x12\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF" +
		"\x03\x02\x02\x02\xDF\xE0\x07\x0F\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDA" +
		"\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4" +
		"\x05\x1A\x0E\x02\xE4\xE5\x052\x1A\x02\xE5\u0109\x03\x02\x02\x02\xE6\xE7" +
		"\x07\x16\x02\x02\xE7\xE8\x05\x1A\x0E\x02\xE8\xE9\x052\x1A\x02\xE9\u0109" +
		"\x03\x02\x02\x02\xEA\xEB\x07\r\x02\x02\xEB\xEC\x054\x1B\x02\xEC\xED\x07" +
		"\x16\x02\x02\xED\xEE\x05\x1A\x0E\x02\xEE\u0109\x03\x02\x02\x02\xEF\xF0" +
		"\x07\x0E\x02\x02\xF0\xF1\x05\x1A\x0E\x02\xF1\xF4\x052\x1A\x02\xF2\xF3" +
		"\x07\x11\x02\x02\xF3\xF5\x054\x1B\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5" +
		"\x03\x02\x02\x02\xF5\u0109\x03\x02\x02\x02\xF6\u0109\x07\x14\x02\x02\xF7" +
		"\xF9\x07\x1C\x02\x02\xF8\xFA\x05\x1A\x0E\x02\xF9\xF8\x03\x02\x02\x02\xF9" +
		"\xFA\x03\x02\x02\x02\xFA\u0109\x03\x02\x02\x02\xFB\xFC\x07\x17\x02\x02" +
		"\xFC\xFE\x05\x1A\x0E\x02\xFD\xFF\x07<\x02\x02\xFE\xFD\x03\x02\x02\x02" +
		"\xFF\u0100\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02" +
		"\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x07\x18\x02\x02\u0103" +
		"\u0104\x05\x1A\x0E\x02\u0104\u0109\x03\x02\x02\x02\u0105\u0109\x07:\x02" +
		"\x02\u0106\u0109\x05\x18\r\x02\u0107\u0109\x05\x1A\x0E\x02\u0108\xD9\x03" +
		"\x02\x02\x02\u0108\xE6\x03\x02\x02\x02\u0108\xEA\x03\x02\x02\x02\u0108" +
		"\xEF\x03\x02\x02\x02\u0108\xF6\x03\x02\x02\x02\u0108\xF7\x03\x02\x02\x02" +
		"\u0108\xFB\x03\x02\x02\x02\u0108\u0105\x03\x02\x02\x02\u0108\u0106\x03" +
		"\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\x17\x03\x02\x02\x02\u010A" +
		"\u010C\x05\"\x12\x02\u010B\u010D\x05\x1E\x10\x02\u010C\u010B\x03\x02\x02" +
		"\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F" +
		"\x07+\x02\x02\u010F\u0110\x05\x1A\x0E\x02\u0110\u014C\x03\x02\x02\x02" +
		"\u0111\u0113\x05\"\x12\x02\u0112\u0114\x05\x1E\x10\x02\u0113\u0112\x03" +
		"\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
		"\u0116\x07<\x02\x02\u0116\u0119\x07\x03\x02\x02\u0117\u011A\x05\x18\r" +
		"\x02\u0118\u011A\x07<\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u0118" +
		"\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02" +
		"\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E\x07" +
		"\x04\x02\x02\u011E\u014C\x03\x02\x02\x02\u011F\u0120\x07\x05\x02\x02\u0120" +
		"\u0125\x05\"\x12\x02\u0121\u0122\x07$\x02\x02\u0122\u0124\x05\"\x12\x02" +
		"\u0123\u0121\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03" +
		"\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127" +
		"\u0125\x03\x02\x02\x02\u0128\u0129\x07\x06\x02\x02\u0129\u012A\x07+\x02" +
		"\x02\u012A\u012B\x05\x1A\x0E\x02\u012B\u014C\x03\x02\x02\x02\u012C\u012D" +
		"\x07\t\x02\x02\u012D\u0132\x05\"\x12\x02\u012E\u012F\x07$\x02\x02\u012F" +
		"\u0131\x05\"\x12\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0134\x03\x02\x02" +
		"\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0135" +
		"\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0136\x07\n\x02\x02" +
		"\u0136\u0137\x07+\x02\x02\u0137\u0138\x05\x1A\x0E\x02\u0138\u014C\x03" +
		"\x02\x02\x02\u0139\u013A\x07,\x02\x02\u013A\u013B\x05\"\x12\x02\u013B" +
		"\u013C\x07+\x02\x02\u013C\u013D\x05\x1A\x0E\x02\u013D\u014C\x03\x02\x02" +
		"\x02\u013E\u013F\x05\x1A\x0E\x02\u013F\u0140\x07\x1F\x02\x02\u0140\u0141" +
		"\x05\"\x12\x02\u0141\u0142\x07+\x02\x02\u0142\u0143\x05\x1A\x0E\x02\u0143" +
		"\u014C\x03\x02\x02\x02\u0144\u0145\x05\x1A\x0E\x02\u0145\u0146\x07\x05" +
		"\x02\x02\u0146\u0147\x05\x1A\x0E\x02\u0147\u0148\x07\x06\x02\x02\u0148" +
		"\u0149\x07+\x02\x02\u0149\u014A\x05\x1A\x0E\x02\u014A\u014C\x03\x02\x02" +
		"\x02\u014B\u010A\x03\x02\x02\x02\u014B\u0111\x03\x02\x02\x02\u014B\u011F" +
		"\x03\x02\x02\x02\u014B\u012C\x03\x02\x02\x02\u014B\u0139\x03\x02\x02\x02" +
		"\u014B\u013E\x03\x02\x02\x02\u014B\u0144\x03\x02\x02\x02\u014C\x19\x03" +
		"\x02\x02\x02\u014D\u014E\b\x0E\x01\x02\u014E\u017B\x05\"\x12\x02\u014F" +
		"\u017B\x07,\x02\x02\u0150\u0151\x07,\x02\x02\u0151\u017B\x05\"\x12\x02" +
		"\u0152\u017B\x05\x1C\x0F\x02\u0153\u0155\x05 \x11\x02\u0154\u0153\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u015A\x07;\x02" +
		"\x02\u0159\u0154\x03\x02\x02\x02\u0159\u0158\x03\x02\x02\x02\u015A\u015B" +
		"\x03\x02\x02\x02\u015B\u017B\x05\x1A\x0E\x12\u015C\u0165\x07\x05\x02\x02" +
		"\u015D\u0162\x05\x1A\x0E\x02\u015E\u015F\x07$\x02\x02\u015F\u0161\x05" +
		"\x1A\x0E\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162" +
		"\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0166\x03\x02" +
		"\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u015D\x03\x02\x02\x02\u0165" +
		"\u0166\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u017B\x07\x06" +
		"\x02\x02\u0168\u0169\x07\x07\x02\x02\u0169\u016A\x05\x1A\x0E\x02\u016A" +
		"\u016B\x07\b\x02\x02\u016B\u017B\x03\x02\x02\x02\u016C\u0177\x073\x02" +
		"\x02\u016D\u0172\x05\"\x12\x02\u016E\u016F\x07$\x02\x02\u016F\u0171\x05" +
		"\"\x12\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x03\x02" +
		"\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0176\x07%\x02\x02\u0176\u0178" +
		"\x03\x02\x02\x02\u0177\u016D\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02" +
		"\u0178\u0179\x03\x02\x02\x02\u0179\u017B\x05\x1A\x0E\x03\u017A\u014D\x03" +
		"\x02\x02\x02\u017A\u014F\x03\x02\x02\x02\u017A\u0150\x03\x02\x02\x02\u017A" +
		"\u0152\x03\x02\x02\x02\u017A\u0159\x03\x02\x02\x02\u017A\u015C\x03\x02" +
		"\x02\x02\u017A\u0168\x03\x02\x02\x02\u017A\u016C\x03\x02\x02\x02\u017B" +
		"\u01C2\x03\x02\x02\x02\u017C\u017D\f\x10\x02\x02\u017D\u017E\x07)\x02" +
		"\x02\u017E\u01C1\x05\x1A\x0E\x11\u017F\u0180\f\x0F\x02\x02\u0180\u0181" +
		"\t\x04\x02\x02\u0181\u01C1\x05\x1A\x0E\x10\u0182\u0183\f\x0E\x02\x02\u0183" +
		"\u0184\t\x05\x02\x02\u0184\u01C1\x05\x1A\x0E\x0F\u0185\u0186\f\r\x02\x02" +
		"\u0186\u0187\x07\x1F\x02\x02\u0187\u0188\x07\x1F\x02\x02\u0188\u01C1\x05" +
		"\x1A\x0E\x0E\u0189\u018A\f\f\x02\x02\u018A\u018B\x07;\x02\x02\u018B\u01C1" +
		"\x05\x1A\x0E\r\u018C\u018D\f\v\x02\x02\u018D\u018E\x07.\x02\x02\u018E" +
		"\u01C1\x05\x1A\x0E\f\u018F\u0190\f\n\x02\x02\u0190\u0192\t\x06\x02\x02" +
		"\u0191\u0193\x07+\x02\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03" +
		"\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u01C1\x05\x1A\x0E\v\u0195" +
		"\u0196\f\t\x02\x02\u0196\u0197\t\x07\x02\x02\u0197\u0198\x07+\x02\x02" +
		"\u0198\u01C1\x05\x1A\x0E\n\u0199\u019A\f\b\x02\x02\u019A\u019B\x070\x02" +
		"\x02\u019B\u019C\x070\x02\x02\u019C\u01C1\x05\x1A\x0E\t\u019D\u019E\f" +
		"\x07\x02\x02\u019E\u019F\x07\"\x02\x02\u019F\u01A0\x07\"\x02\x02\u01A0" +
		"\u01C1\x05\x1A\x0E\b\u01A1\u01A2\f\x06\x02\x02\u01A2\u01A3\x07\"\x02\x02" +
		"\u01A3\u01A4\x05\"\x12\x02\u01A4\u01A5\x07%\x02\x02\u01A5\u01A6\x05\x1A" +
		"\x0E\x07\u01A6\u01C1\x03\x02\x02\x02\u01A7\u01A9\f\x15\x02\x02\u01A8\u01AA" +
		"\x05.\x18\x02\u01A9\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02" +
		"\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01C1\x05*\x16\x02\u01AC\u01AD\f\x14" +
		"\x02\x02\u01AD\u01AE\x07\x05\x02\x02\u01AE\u01AF\x05\x1A\x0E\x02\u01AF" +
		"\u01B0\x07\x06\x02\x02\u01B0\u01C1\x03\x02\x02\x02\u01B1\u01B3\f\x13\x02" +
		"\x02\u01B2\u01B4\x07.\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x07\x1F\x02\x02" +
		"\u01B6\u01C1\x05\"\x12\x02\u01B7\u01BE\f\x11\x02\x02\u01B8\u01BA\x05 " +
		"\x11\x02\u01B9\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BF\x03\x02" +
		"\x02\x02\u01BD\u01BF\x07;\x02\x02\u01BE\u01B9\x03\x02\x02\x02\u01BE\u01BD" +
		"\x03\x02\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u017C\x03\x02\x02\x02" +
		"\u01C0\u017F\x03\x02\x02\x02\u01C0\u0182\x03\x02\x02\x02\u01C0\u0185\x03" +
		"\x02\x02\x02\u01C0\u0189\x03\x02\x02\x02\u01C0\u018C\x03\x02\x02\x02\u01C0" +
		"\u018F\x03\x02\x02\x02\u01C0\u0195\x03\x02\x02\x02\u01C0\u0199\x03\x02" +
		"\x02\x02\u01C0\u019D\x03\x02\x02\x02\u01C0\u01A1\x03\x02\x02\x02\u01C0" +
		"\u01A7\x03\x02\x02\x02\u01C0\u01AC\x03\x02\x02\x02\u01C0\u01B1\x03\x02" +
		"\x02\x02\u01C0\u01B7\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2" +
		"\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\x1B\x03\x02\x02" +
		"\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01CC\x074\x02\x02\u01C6\u01CC" +
		"\x077\x02\x02\u01C7\u01CC\x076\x02\x02\u01C8\u01CC\x075\x02\x02\u01C9" +
		"\u01CC\x078\x02\x02\u01CA\u01CC\x079\x02\x02\u01CB\u01C5\x03\x02\x02\x02" +
		"\u01CB\u01C6\x03\x02\x02\x02\u01CB\u01C7\x03\x02\x02\x02\u01CB\u01C8\x03" +
		"\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC" +
		"\x1D\x03\x02\x02\x02\u01CD\u01CE\b\x10\x01\x02\u01CE\u01D0\x05\"\x12\x02" +
		"\u01CF\u01D1\x05.\x18\x02\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03" +
		"\x02\x02\x02\u01D1\u01DE\x03\x02\x02\x02\u01D2\u01DE\x05\x1A\x0E\x02\u01D3" +
		"\u01D5\x050\x19\x02\u01D4\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02" +
		"\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7\x05,\x17\x02\u01D7\u01D8" +
		"\x05\x1E\x10\x04\u01D8\u01DE\x03\x02\x02\x02\u01D9\u01DA\x07\x07\x02\x02" +
		"\u01DA\u01DB\x05\x1E\x10\x02\u01DB\u01DC\x07\b\x02\x02\u01DC\u01DE\x03" +
		"\x02\x02\x02\u01DD\u01CD\x03\x02\x02\x02\u01DD\u01D2\x03\x02\x02\x02\u01DD" +
		"\u01D4\x03\x02\x02\x02\u01DD\u01D9\x03\x02\x02\x02\u01DE\u01EC\x03\x02" +
		"\x02\x02\u01DF\u01E0\f\x06\x02\x02\u01E0\u01E1\x070\x02\x02\u01E1\u01EB" +
		"\x05\x1E\x10\x07\u01E2\u01E3\f\x05\x02\x02\u01E3\u01E4\x07\"\x02\x02\u01E4" +
		"\u01EB\x05\x1E\x10\x06\u01E5\u01E6\f\b\x02\x02\u01E6\u01EB\x07.\x02\x02" +
		"\u01E7\u01E8\f\x07\x02\x02\u01E8\u01E9\x07\x05\x02\x02\u01E9\u01EB\x07" +
		"\x06\x02\x02\u01EA\u01DF\x03\x02\x02\x02\u01EA\u01E2\x03\x02\x02\x02\u01EA" +
		"\u01E5\x03\x02\x02\x02\u01EA\u01E7\x03\x02\x02\x02\u01EB\u01EE\x03\x02" +
		"\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED" +
		"\x1F\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F0\t\b\x02\x02" +
		"\u01F0!\x03\x02\x02\x02\u01F1\u01F2\t\t\x02\x02\u01F2#\x03\x02\x02\x02" +
		"\u01F3\u01F4\x05\"\x12\x02\u01F4\u01F7\x05";
	private static readonly _serializedATNSegment1: string =
		"\x1E\x10\x02\u01F5\u01F6\x07!\x02\x02\u01F6\u01F8\x05\"\x12\x02\u01F7" +
		"\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8%\x03\x02\x02" +
		"\x02\u01F9\u0202\x07\x07\x02\x02\u01FA\u01FF\x05$\x13\x02\u01FB\u01FC" +
		"\x07$\x02\x02\u01FC\u01FE\x05$\x13\x02\u01FD\u01FB\x03\x02\x02\x02\u01FE" +
		"\u0201\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02" +
		"\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0202" +
		"\u01FA\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02" +
		"\x02\x02\u0204\u0205\x07\b\x02\x02\u0205\'\x03\x02\x02\x02\u0206\u0207" +
		"\x05\"\x12\x02\u0207\u0208\x07+\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209" +
		"\u0206\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B\x03\x02" +
		"\x02\x02\u020B\u020C\x05\x1A\x0E\x02\u020C)\x03\x02\x02\x02\u020D\u0216" +
		"\x07\x07\x02\x02\u020E\u0213\x05(\x15\x02\u020F\u0210\x07$\x02\x02\u0210" +
		"\u0212\x05(\x15\x02\u0211\u020F\x03\x02\x02\x02\u0212\u0215\x03\x02\x02" +
		"\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0217" +
		"\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0216\u020E\x03\x02\x02\x02" +
		"\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x07" +
		"\b\x02\x02\u0219+\x03\x02\x02\x02\u021A\u0223\x07\x07\x02\x02\u021B\u0220" +
		"\x05\x1E\x10\x02\u021C\u021D\x07$\x02\x02\u021D\u021F\x05\x1E\x10\x02" +
		"\u021E\u021C\x03\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03" +
		"\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222" +
		"\u0220\x03\x02\x02\x02\u0223\u021B\x03\x02\x02\x02\u0223\u0224\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x07\b\x02\x02\u0226-" +
		"\x03\x02\x02\x02\u0227\u0228\x07#\x02\x02\u0228\u022D\x05\x1E\x10\x02" +
		"\u0229\u022A\x07$\x02\x02\u022A\u022C\x05\x1E\x10\x02\u022B\u0229\x03" +
		"\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D" +
		"\u022E\x03\x02\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F\u022D\x03\x02" +
		"\x02\x02\u0230\u0231\x07&\x02\x02\u0231/\x03\x02\x02\x02\u0232\u0233\x07" +
		"#\x02\x02\u0233\u0238\x05\"\x12\x02\u0234\u0235\x07$\x02\x02\u0235\u0237" +
		"\x05\"\x12\x02\u0236\u0234\x03\x02\x02\x02\u0237\u023A\x03\x02\x02\x02" +
		"\u0238\u0236\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x03" +
		"\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023B\u023C\x07&\x02\x02\u023C" +
		"1\x03\x02\x02\x02\u023D\u023E\x07%\x02\x02\u023E\u024F\x05\x16\f\x02\u023F" +
		"\u0243\x07%\x02\x02\u0240\u0242\x07<\x02\x02\u0241\u0240\x03\x02\x02\x02" +
		"\u0242\u0245\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0244\x03" +
		"\x02\x02\x02\u0244\u0246\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0246" +
		"\u0249\x07\x03\x02\x02\u0247\u024A\x05\x16\f\x02\u0248\u024A\x07<\x02" +
		"\x02\u0249\u0247\x03\x02\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\u024B" +
		"\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02" +
		"\u024C\u024D\x03\x02\x02\x02\u024D\u024F\x07\x04\x02\x02\u024E\u023D\x03" +
		"\x02\x02\x02\u024E\u023F\x03\x02\x02\x02\u024F3\x03\x02\x02\x02\u0250" +
		"\u0253\x052\x1A\x02\u0251\u0253\x05\x16\f\x02\u0252\u0250\x03\x02\x02" +
		"\x02\u0252\u0251\x03\x02\x02\x02\u02535\x03\x02\x02\x02\u0254\u0264\x05" +
		"2\x1A\x02\u0255\u0257\x07<\x02\x02\u0256\u0255\x03\x02\x02\x02\u0257\u025A" +
		"\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02" +
		"\u0259\u025B\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025F\x07" +
		"+\x02\x02\u025C\u025E\x07<\x02\x02\u025D\u025C\x03\x02\x02\x02\u025E\u0261" +
		"\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02" +
		"\u0260\u0262\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0264\x05" +
		"\x16\f\x02\u0263\u0254\x03\x02\x02\x02\u0263\u0258\x03\x02\x02\x02\u0264" +
		"7\x03\x02\x02\x02Y;=FHX[]bjprvy}\x84\x86\x8C\x90\x94\x9A\x9C\xA6\xA9\xAD" +
		"\xB1\xB4\xB6\xBC\xBF\xC2\xC5\xC9\xCC\xD0\xD4\xD7\xDD\xE1\xF4\xF9\u0100" +
		"\u0108\u010C\u0113\u0119\u011B\u0125\u0132\u014B\u0156\u0159\u0162\u0165" +
		"\u0172\u0177\u017A\u0192\u01A9\u01B3\u01BB\u01BE\u01C0\u01C2\u01CB\u01D0" +
		"\u01D4\u01DD\u01EA\u01EC\u01F7\u01FF\u0202\u0209\u0213\u0216\u0220\u0223" +
		"\u022D\u0238\u0243\u0249\u024B\u024E\u0252\u0258\u025F\u0263";
	public static readonly _serializedATN: string = Utils.join(
		[
			XonParser._serializedATNSegment0,
			XonParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ListingContext extends ParserRuleContext {
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
	public extensionMember(): ExtensionMemberContext[];
	public extensionMember(i: number): ExtensionMemberContext;
	public extensionMember(i?: number): ExtensionMemberContext | ExtensionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionMemberContext);
		} else {
			return this.getRuleContext(i, ExtensionMemberContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_listing; }
}


export class ExportContext extends ParserRuleContext {
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_export; }
}


export class LibraryContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public libraryMember(): LibraryMemberContext[];
	public libraryMember(i: number): LibraryMemberContext;
	public libraryMember(i?: number): LibraryMemberContext | LibraryMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryMemberContext);
		} else {
			return this.getRuleContext(i, LibraryMemberContext);
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


export class LibraryPathContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DOT);
		} else {
			return this.getToken(XonParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryPath; }
}


export class LibraryMemberContext extends ParserRuleContext {
	public _name!: IdContext;
	public _alias!: IdContext;
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class HierarchyMemberContext extends MemberContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InitMemberContext extends MemberContext {
	public INIT(): TerminalNode { return this.getToken(XonParser.INIT, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorMemberContext extends MemberContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public POSTFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.POSTFIX, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExtensionMemberContext extends ParserRuleContext {
	public _receiver!: TypeContext;
	public _result!: TypeContext;
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_extensionMember; }
}


export class TestContext extends ParserRuleContext {
	public TEST(): TerminalNode { return this.getToken(XonParser.TEST, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_test; }
}


export class FunctionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_function; }
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
export class ForStatementContext extends StatementContext {
	public _value!: IdContext;
	public _index!: IdContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public operatorBody(): OperatorBodyContext {
		return this.getRuleContext(0, OperatorBodyContext);
	}
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	public operatorBody(): OperatorBodyContext | undefined {
		return this.tryGetRuleContext(0, OperatorBodyContext);
	}
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
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
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
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


export class AssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_assignment; }
	public copyFrom(ctx: AssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class IdAssignmentContext extends AssignmentContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class HierarchyAssignmentContext extends AssignmentContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayAssignmentContext extends AssignmentContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectAssignmentContext extends AssignmentContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ThisMemberAssignmentContext extends AssignmentContext {
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberAssignmentContext extends AssignmentContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexAssignmentContext extends AssignmentContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	constructor(ctx: AssignmentContext) {
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceExpressionContext extends ExpressionContext {
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceMemberExpressionContext extends ExpressionContext {
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
export class CallExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
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
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
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
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
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
export class PowExpressionContext extends ExpressionContext {
	public _s39!: Token;
	public _op: Token[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CARET(): TerminalNode { return this.getToken(XonParser.CARET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _s45!: Token;
	public _op: Token[] = [];
	public _s38!: Token;
	public _s43!: Token;
	public __tset247!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _s30!: Token;
	public _op: Token[] = [];
	public _s37!: Token;
	public __tset298!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public _s29!: Token;
	public _op: Token[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DOT);
		} else {
			return this.getToken(XonParser.DOT, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
	public _ID!: Token;
	public _op: Token[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ElvisExpressionContext extends ExpressionContext {
	public _s44!: Token;
	public _op: Token[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _s33!: Token;
	public _op: Token[] = [];
	public _s36!: Token;
	public __tset444!: Token;
	public _s41!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _s41!: Token;
	public _op: Token[] = [];
	public _s48!: Token;
	public __tset498!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EQUAL);
		} else {
			return this.getToken(XonParser.EQUAL, i);
		}
	}
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConjunctionExpressionContext extends ExpressionContext {
	public _s46!: Token;
	public _op: Token[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.AMPERSAND);
		} else {
			return this.getToken(XonParser.AMPERSAND, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DisjunctionExpressionContext extends ExpressionContext {
	public _s32!: Token;
	public _op: Token[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PipeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public BACK_SLASH(): TerminalNode { return this.getToken(XonParser.BACK_SLASH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
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
export class NullLiteralContext extends LiteralContext {
	public NULL_LITERAL(): TerminalNode { return this.getToken(XonParser.NULL_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BOOLEAN_LITERAL(): TerminalNode { return this.getToken(XonParser.BOOLEAN_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class PlainTypeContext extends TypeContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralTypeContext extends TypeContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntersectionTypeContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public AMPERSAND(): TerminalNode { return this.getToken(XonParser.AMPERSAND, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnionTypeContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class OperatorContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(XonParser.TILDE, 0); }
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AMPERSAND, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(XonParser.PIPE, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public INIT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INIT, 0); }
	public ACTUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXPECT, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(XonParser.IMPORT, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXPORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ParametersContext extends ParserRuleContext {
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


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class ArgumentsContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
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


export class TypeParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
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
	public get ruleIndex(): number { return XonParser.RULE_typeParameters; }
}


export class GenericArgumentsContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_genericArguments; }
}


export class GenericParametersContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_genericParameters; }
}


export class BodyContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class OperatorBodyContext extends ParserRuleContext {
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operatorBody; }
}


export class FunctionBodyContext extends ParserRuleContext {
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
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
	public get ruleIndex(): number { return XonParser.RULE_functionBody; }
}


