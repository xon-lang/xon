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
	public static readonly EXTENSION = 28;
	public static readonly AT = 29;
	public static readonly DOT = 30;
	public static readonly PLUS = 31;
	public static readonly HASH = 32;
	public static readonly PIPE = 33;
	public static readonly LESS = 34;
	public static readonly COMMA = 35;
	public static readonly COLON = 36;
	public static readonly GREAT = 37;
	public static readonly MINUS = 38;
	public static readonly SLASH = 39;
	public static readonly CARET = 40;
	public static readonly TILDE = 41;
	public static readonly EQUAL = 42;
	public static readonly DOLLAR = 43;
	public static readonly MODULO = 44;
	public static readonly QUESTION = 45;
	public static readonly ASTERISK = 46;
	public static readonly AMPERSAND = 47;
	public static readonly UNDERSCORE = 48;
	public static readonly EXCLAMATION = 49;
	public static readonly BACK_SLASH = 50;
	public static readonly NULL_LITERAL = 51;
	public static readonly FLOAT_LITERAL = 52;
	public static readonly INTEGER_LITERAL = 53;
	public static readonly BOOLEAN_LITERAL = 54;
	public static readonly CHAR_LITERAL = 55;
	public static readonly STRING_LITERAL = 56;
	public static readonly PREPROCESSOR = 57;
	public static readonly UPPER_ID = 58;
	public static readonly LOWER_ID = 59;
	public static readonly NL = 60;
	public static readonly WS = 61;
	public static readonly COMMENT = 62;
	public static readonly RULE_source = 0;
	public static readonly RULE_sourceMember = 1;
	public static readonly RULE_export = 2;
	public static readonly RULE_library = 3;
	public static readonly RULE_libraryPath = 4;
	public static readonly RULE_libraryPathPart = 5;
	public static readonly RULE_libraryMember = 6;
	public static readonly RULE_definition = 7;
	public static readonly RULE_classMember = 8;
	public static readonly RULE_test = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_attribute = 11;
	public static readonly RULE_assignment = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_type = 14;
	public static readonly RULE_literal = 15;
	public static readonly RULE_operator = 16;
	public static readonly RULE_id = 17;
	public static readonly RULE_parameter = 18;
	public static readonly RULE_parameters = 19;
	public static readonly RULE_argument = 20;
	public static readonly RULE_arguments = 21;
	public static readonly RULE_genericArguments = 22;
	public static readonly RULE_genericParameters = 23;
	public static readonly RULE_body = 24;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "sourceMember", "export", "library", "libraryPath", "libraryPathPart", 
		"libraryMember", "definition", "classMember", "test", "statement", "attribute", 
		"assignment", "expression", "type", "literal", "operator", "id", "parameter", 
		"parameters", "argument", "arguments", "genericArguments", "genericParameters", 
		"body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'init'", "'test'", 
		"'break'", "'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'@'", "'.'", "'+'", 
		"'#'", "'|'", "'<'", "','", "':'", "'>'", "'-'", "'/'", "'^'", "'~'", 
		"'='", "'$'", "'%'", "'?'", "'*'", "'&'", "'_'", "'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "INIT", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "EXTENSION", "AT", 
		"DOT", "PLUS", "HASH", "PIPE", "LESS", "COMMA", "COLON", "GREAT", "MINUS", 
		"SLASH", "CARET", "TILDE", "EQUAL", "DOLLAR", "MODULO", "QUESTION", "ASTERISK", 
		"AMPERSAND", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "NULL_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "BOOLEAN_LITERAL", "CHAR_LITERAL", 
		"STRING_LITERAL", "PREPROCESSOR", "UPPER_ID", "LOWER_ID", "NL", "WS", 
		"COMMENT",
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
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 53;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 50;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 51;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 52;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.TEST || _la === XonParser.UPPER_ID || _la === XonParser.NL) {
				{
				this.state = 60;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.TEST:
				case XonParser.UPPER_ID:
					{
					this.state = 58;
					this.sourceMember();
					}
					break;
				case XonParser.NL:
					{
					this.state = 59;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 64;
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
	public sourceMember(): SourceMemberContext {
		let _localctx: SourceMemberContext = new SourceMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_sourceMember);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.UPPER_ID:
				_localctx = new DefinitionSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.definition();
				}
				break;
			case XonParser.TEST:
				_localctx = new TestSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.test();
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(XonParser.EXPORT);
			this.state = 70;
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
		this.enterRule(_localctx, 6, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(XonParser.IMPORT);
			this.state = 73;
			this.libraryPath();
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 74;
				this.match(XonParser.AS);
				this.state = 75;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 76;
				this.match(XonParser.COLON);
				this.state = 77;
				this.libraryMember();
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 78;
					this.match(XonParser.COMMA);
					this.state = 79;
					this.libraryMember();
					}
					}
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.EOF:
			case XonParser.TEST:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.UPPER_ID:
			case XonParser.NL:
				break;
			default:
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 87;
				_localctx._s30 = this.match(XonParser.DOT);
				_localctx._points.push(_localctx._s30);
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this.libraryPathPart();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 94;
				this.match(XonParser.DOT);
				this.state = 95;
				this.libraryPathPart();
				}
				}
				this.state = 100;
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
	public libraryPathPart(): LibraryPathPartContext {
		let _localctx: LibraryPathPartContext = new LibraryPathPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_libraryPathPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AT) {
				{
				this.state = 101;
				this.match(XonParser.AT);
				}
			}

			this.state = 104;
			this.match(XonParser.LOWER_ID);
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
		this.enterRule(_localctx, 12, XonParser.RULE_libraryMember);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				_localctx._name = this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				_localctx._name = this.id();
				this.state = 108;
				this.match(XonParser.AS);
				this.state = 109;
				_localctx._alias = this.id();
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_definition);
		let _la: number;
		try {
			_localctx = new ClassDefinitionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			(_localctx as ClassDefinitionContext)._name = this.match(XonParser.UPPER_ID);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 114;
				this.genericParameters();
				}
			}

			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 117;
				this.parameters();
				}
			}

			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 120;
				this.match(XonParser.IS);
				this.state = 121;
				this.type(0);
				}
			}

			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 124;
				this.match(XonParser.COLON);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 125;
					this.match(XonParser.NL);
					}
					}
					this.state = 128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 130;
				this.match(XonParser.INDENT);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 133;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.INIT:
					case XonParser.INFIX:
					case XonParser.PREFIX:
					case XonParser.POSTFIX:
					case XonParser.DOT:
					case XonParser.LOWER_ID:
						{
						this.state = 131;
						this.classMember();
						}
						break;
					case XonParser.NL:
						{
						this.state = 132;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX) | (1 << XonParser.DOT))) !== 0) || _la === XonParser.LOWER_ID || _la === XonParser.NL);
				this.state = 137;
				this.match(XonParser.DEDENT);
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
	public classMember(): ClassMemberContext {
		let _localctx: ClassMemberContext = new ClassMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_classMember);
		let _la: number;
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.DOT:
				_localctx = new IncludeClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.match(XonParser.DOT);
				this.state = 141;
				this.match(XonParser.DOT);
				this.state = 142;
				this.match(XonParser.DOT);
				this.state = 143;
				(_localctx as IncludeClassMemberContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 144;
				this.arguments();
				}
				break;
			case XonParser.INIT:
				_localctx = new InitClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.match(XonParser.INIT);
				this.state = 146;
				this.body();
				}
				break;
			case XonParser.LOWER_ID:
				_localctx = new AttributeClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 147;
				this.attribute();
				}
				break;
			case XonParser.INFIX:
			case XonParser.PREFIX:
			case XonParser.POSTFIX:
				_localctx = new OperatorClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 148;
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
				this.state = 149;
				(_localctx as OperatorClassMemberContext)._name = this.operator();
				this.state = 150;
				this.parameters();
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 151;
					this.type(0);
					}
				}

				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 154;
					this.body();
					}
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(XonParser.TEST);
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 160;
				this.expression(0);
				}
				break;
			}
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 163;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.match(XonParser.FOR);
				this.state = 173;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 167;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 168;
						this.match(XonParser.COMMA);
						this.state = 169;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 172;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 175;
				this.expression(0);
				this.state = 176;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.match(XonParser.WHILE);
				this.state = 179;
				this.expression(0);
				this.state = 180;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 182;
				this.match(XonParser.DO);
				this.state = 183;
				this.body();
				this.state = 184;
				this.match(XonParser.WHILE);
				this.state = 185;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 187;
				this.match(XonParser.IF);
				this.state = 188;
				this.expression(0);
				this.state = 189;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 190;
					this.match(XonParser.ELSE);
					this.state = 191;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 194;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 195;
				this.match(XonParser.RETURN);
				this.state = 197;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 196;
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
				this.state = 199;
				this.match(XonParser.ACTUAL);
				this.state = 200;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 201;
					this.match(XonParser.NL);
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 206;
				this.match(XonParser.EXPECT);
				this.state = 207;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 209;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 210;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new AttributeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 211;
				this.attribute();
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 212;
				this.assignment();
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 216;
				this.type(0);
				}
				break;

			case 2:
				{
				this.state = 217;
				this.body();
				}
				break;

			case 3:
				{
				this.state = 218;
				this.type(0);
				this.state = 219;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 223;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 224;
				this.match(XonParser.EQUAL);
				this.state = 225;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 226;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 227;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 228;
					this.match(XonParser.COMMA);
					this.state = 229;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 235;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 236;
				this.match(XonParser.EQUAL);
				this.state = 237;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 238;
				this.match(XonParser.OPEN_BRACE);
				this.state = 239;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 240;
					this.match(XonParser.COMMA);
					this.state = 241;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 247;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 248;
				this.match(XonParser.EQUAL);
				this.state = 249;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 250;
				this.match(XonParser.DOLLAR);
				this.state = 251;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 252;
				this.match(XonParser.EQUAL);
				this.state = 253;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 254;
				this.expression(0);
				this.state = 255;
				this.match(XonParser.DOT);
				this.state = 256;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 257;
				this.match(XonParser.EQUAL);
				this.state = 258;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 260;
				this.expression(0);
				this.state = 261;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 262;
				this.expression(0);
				this.state = 263;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 264;
				this.match(XonParser.EQUAL);
				this.state = 265;
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 270;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 271;
				(_localctx as InstanceExpressionContext)._name = this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 272;
				this.match(XonParser.DOLLAR);
				this.state = 273;
				(_localctx as InstanceMemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 4:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 274;
				(_localctx as InstantiationExpressionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 275;
					this.genericArguments();
					}
				}

				this.state = 278;
				this.arguments();
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 279;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 280;
				this.match(XonParser.OPEN_PAREN);
				this.state = 281;
				this.expression(0);
				this.state = 282;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 7:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)))) !== 0)) {
					{
					this.state = 285;
					this.expression(0);
					this.state = 290;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 286;
						this.match(XonParser.COMMA);
						this.state = 287;
						this.expression(0);
						}
						}
						this.state = 292;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 295;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 8:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 296;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (XonParser.PLUS - 31)) | (1 << (XonParser.MINUS - 31)) | (1 << (XonParser.EXCLAMATION - 31)))) !== 0))) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 297;
				this.expression(12);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 298;
				this.match(XonParser.BACK_SLASH);
				this.state = 309;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 299;
					this.parameter();
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 300;
						this.match(XonParser.COMMA);
						this.state = 301;
						this.parameter();
						}
						}
						this.state = 306;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 307;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 311;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 371;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 369;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 314;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 315;
						(_localctx as PowExpressionContext)._s40 = this.match(XonParser.CARET);
						(_localctx as PowExpressionContext)._op.push((_localctx as PowExpressionContext)._s40);
						this.state = 316;
						(_localctx as PowExpressionContext)._right = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 317;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 318;
						(_localctx as MulDivModExpressionContext).__tset303 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.SLASH - 39)) | (1 << (XonParser.MODULO - 39)) | (1 << (XonParser.ASTERISK - 39)))) !== 0))) {
							(_localctx as MulDivModExpressionContext).__tset303 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as MulDivModExpressionContext)._op.push((_localctx as MulDivModExpressionContext).__tset303);
						this.state = 319;
						(_localctx as MulDivModExpressionContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 320;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 321;
						(_localctx as AddSubExpressionContext).__tset358 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
							(_localctx as AddSubExpressionContext).__tset358 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as AddSubExpressionContext)._op.push((_localctx as AddSubExpressionContext).__tset358);
						this.state = 322;
						(_localctx as AddSubExpressionContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 323;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 324;
						(_localctx as RangeExpressionContext)._s30 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s30);
						this.state = 325;
						(_localctx as RangeExpressionContext)._s30 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s30);
						this.state = 326;
						(_localctx as RangeExpressionContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 327;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 328;
						(_localctx as ElvisExpressionContext)._s45 = this.match(XonParser.QUESTION);
						(_localctx as ElvisExpressionContext)._op.push((_localctx as ElvisExpressionContext)._s45);
						this.state = 329;
						(_localctx as ElvisExpressionContext)._right = this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 330;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 331;
						(_localctx as RelationalExpressionContext).__tset485 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.LESS || _la === XonParser.GREAT)) {
							(_localctx as RelationalExpressionContext).__tset485 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext).__tset485);
						this.state = 333;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.EQUAL) {
							{
							this.state = 332;
							(_localctx as RelationalExpressionContext)._s42 = this.match(XonParser.EQUAL);
							(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext)._s42);
							}
						}

						this.state = 335;
						(_localctx as RelationalExpressionContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 336;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 337;
						(_localctx as EqualityExpressionContext).__tset543 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.EXCLAMATION)) {
							(_localctx as EqualityExpressionContext).__tset543 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext).__tset543);
						this.state = 338;
						(_localctx as EqualityExpressionContext)._s42 = this.match(XonParser.EQUAL);
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext)._s42);
						this.state = 339;
						(_localctx as EqualityExpressionContext)._right = this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 340;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 341;
						(_localctx as ConjunctionExpressionContext)._s47 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s47);
						this.state = 342;
						(_localctx as ConjunctionExpressionContext)._s47 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s47);
						this.state = 343;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 344;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 345;
						(_localctx as DisjunctionExpressionContext)._s33 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s33);
						this.state = 346;
						(_localctx as DisjunctionExpressionContext)._s33 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s33);
						this.state = 347;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(4);
						}
						break;

					case 10:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 348;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 349;
						this.match(XonParser.PIPE);
						this.state = 350;
						(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 351;
						this.match(XonParser.COLON);
						this.state = 352;
						this.expression(3);
						}
						break;

					case 11:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 353;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 355;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 354;
							this.genericArguments();
							}
						}

						this.state = 357;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 358;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 359;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 360;
						this.expression(0);
						this.state = 361;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 363;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 365;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QUESTION) {
							{
							this.state = 364;
							this.match(XonParser.QUESTION);
							}
						}

						this.state = 367;
						this.match(XonParser.DOT);
						this.state = 368;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						}
						break;
					}
					}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 375;
				(_localctx as IdTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 377;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 376;
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
				this.state = 379;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new IntersectionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 380;
				this.match(XonParser.OPEN_PAREN);
				this.state = 381;
				this.type(0);
				this.state = 382;
				this.match(XonParser.AMPERSAND);
				this.state = 383;
				this.type(0);
				this.state = 384;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 4:
				{
				_localctx = new UnionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 386;
				this.match(XonParser.OPEN_PAREN);
				this.state = 387;
				this.type(0);
				this.state = 388;
				this.match(XonParser.PIPE);
				this.state = 389;
				this.type(0);
				this.state = 390;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 5:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 392;
					this.genericParameters();
					}
				}

				this.state = 395;
				this.parameters();
				this.state = 397;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 396;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new FunctionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 399;
				this.match(XonParser.OPEN_PAREN);
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 400;
					this.genericParameters();
					}
				}

				this.state = 403;
				this.parameters();
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 404;
					this.type(0);
					}
				}

				this.state = 407;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 427;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 425;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 411;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 412;
						this.match(XonParser.AMPERSAND);
						this.state = 413;
						this.type(7);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 414;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 415;
						this.match(XonParser.PIPE);
						this.state = 416;
						this.type(5);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 417;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 418;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 419;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 420;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 422;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.INTEGER_LITERAL) {
							{
							this.state = 421;
							(_localctx as ArrayTypeContext)._size = this.match(XonParser.INTEGER_LITERAL);
							}
						}

						this.state = 424;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 429;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
		this.enterRule(_localctx, 30, XonParser.RULE_literal);
		try {
			this.state = 436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 430;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 431;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 432;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 433;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 434;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 435;
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 438;
				_la = this._input.LA(1);
				if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.DOT - 30)) | (1 << (XonParser.PLUS - 30)) | (1 << (XonParser.PIPE - 30)) | (1 << (XonParser.LESS - 30)) | (1 << (XonParser.GREAT - 30)) | (1 << (XonParser.MINUS - 30)) | (1 << (XonParser.SLASH - 30)) | (1 << (XonParser.CARET - 30)) | (1 << (XonParser.TILDE - 30)) | (1 << (XonParser.EQUAL - 30)) | (1 << (XonParser.MODULO - 30)) | (1 << (XonParser.ASTERISK - 30)) | (1 << (XonParser.AMPERSAND - 30)) | (1 << (XonParser.EXCLAMATION - 30)))) !== 0))) {
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
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.DOT - 30)) | (1 << (XonParser.PLUS - 30)) | (1 << (XonParser.PIPE - 30)) | (1 << (XonParser.LESS - 30)) | (1 << (XonParser.GREAT - 30)) | (1 << (XonParser.MINUS - 30)) | (1 << (XonParser.SLASH - 30)) | (1 << (XonParser.CARET - 30)) | (1 << (XonParser.TILDE - 30)) | (1 << (XonParser.EQUAL - 30)) | (1 << (XonParser.MODULO - 30)) | (1 << (XonParser.ASTERISK - 30)) | (1 << (XonParser.AMPERSAND - 30)) | (1 << (XonParser.EXCLAMATION - 30)))) !== 0));
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
		this.enterRule(_localctx, 34, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			_la = this._input.LA(1);
			if (!(_la === XonParser.UPPER_ID || _la === XonParser.LOWER_ID)) {
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
		this.enterRule(_localctx, 36, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 446;
				this.type(0);
				}
			}

			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 449;
				this.match(XonParser.HASH);
				this.state = 450;
				_localctx._meta = this.match(XonParser.UPPER_ID);
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
		this.enterRule(_localctx, 38, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(XonParser.OPEN_PAREN);
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 454;
				this.parameter();
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 455;
					this.match(XonParser.COMMA);
					this.state = 456;
					this.parameter();
					}
					}
					this.state = 461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 464;
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
		this.enterRule(_localctx, 40, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 466;
				_localctx._name = this.match(XonParser.LOWER_ID);
				this.state = 467;
				this.match(XonParser.EQUAL);
				}
				break;
			}
			this.state = 470;
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
		this.enterRule(_localctx, 42, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(XonParser.OPEN_PAREN);
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)))) !== 0)) {
				{
				this.state = 473;
				this.argument();
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 474;
					this.match(XonParser.COMMA);
					this.state = 475;
					this.argument();
					}
					}
					this.state = 480;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 483;
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
			this.state = 485;
			this.match(XonParser.LESS);
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 486;
				this.type(0);
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 487;
					this.match(XonParser.COMMA);
					this.state = 488;
					this.type(0);
					}
					}
					this.state = 493;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 496;
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
			this.state = 498;
			this.match(XonParser.LESS);
			this.state = 499;
			_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
			_localctx._names.push(_localctx._UPPER_ID);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 500;
				this.match(XonParser.COMMA);
				this.state = 501;
				_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
				_localctx._names.push(_localctx._UPPER_ID);
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 507;
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
			this.state = 528;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(XonParser.COLON);
				this.state = 511;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 510;
					this.statement();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
				this.match(XonParser.COLON);
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 514;
					this.match(XonParser.NL);
					}
					}
					this.state = 517;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 519;
				this.match(XonParser.INDENT);
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.PREPROCESSOR - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)) | (1 << (XonParser.NL - 38)))) !== 0)) {
					{
					this.state = 522;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.RETURN:
					case XonParser.PLUS:
					case XonParser.MINUS:
					case XonParser.DOLLAR:
					case XonParser.EXCLAMATION:
					case XonParser.BACK_SLASH:
					case XonParser.NULL_LITERAL:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.BOOLEAN_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.UPPER_ID:
					case XonParser.LOWER_ID:
						{
						this.state = 520;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 521;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 526;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 527;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 14:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);

		case 7:
			return this.precpred(this._ctx, 4);

		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 17);

		case 11:
			return this.precpred(this._ctx, 16);

		case 12:
			return this.precpred(this._ctx, 13);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 6);

		case 14:
			return this.precpred(this._ctx, 4);

		case 15:
			return this.precpred(this._ctx, 8);

		case 16:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u0215\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02\x07\x02" +
		"8\n\x02\f\x02\x0E\x02;\v\x02\x03\x02\x03\x02\x07\x02?\n\x02\f\x02\x0E" +
		"\x02B\v\x02\x03\x03\x03\x03\x05\x03F\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05S" +
		"\n\x05\f\x05\x0E\x05V\v\x05\x05\x05X\n\x05\x03\x06\x07\x06[\n\x06\f\x06" +
		"\x0E\x06^\v\x06\x03\x06\x03\x06\x03\x06\x07\x06c\n\x06\f\x06\x0E\x06f" +
		"\v\x06\x03\x07\x05\x07i\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\br\n\b\x03\t\x03\t\x05\tv\n\t\x03\t\x05\ty\n\t\x03\t\x03\t" +
		"\x05\t}\n\t\x03\t\x03\t\x06\t\x81\n\t\r\t\x0E\t\x82\x03\t\x03\t\x03\t" +
		"\x06\t\x88\n\t\r\t\x0E\t\x89\x03\t\x05\t\x8D\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9B\n\n\x03\n" +
		"\x05\n\x9E\n\n\x05\n\xA0\n\n\x03\v\x03\v\x05\v\xA4\n\v\x03\v\x05\v\xA7" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x05\f\xAD\n\f\x03\f\x05\f\xB0\n\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\xC3\n\f\x03\f\x03\f\x03\f\x05\f\xC8\n\f\x03" +
		"\f\x03\f\x03\f\x06\f\xCD\n\f\r\f\x0E\f\xCE\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xD8\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\xE0\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\xE9\n\x0E\f\x0E\x0E\x0E\xEC\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x07\x0E\xF5\n\x0E\f\x0E\x0E\x0E\xF8\v\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u010E\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0117\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0123\n\x0F\f\x0F\x0E" +
		"\x0F\u0126\v\x0F\x05\x0F\u0128\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u0131\n\x0F\f\x0F\x0E\x0F\u0134\v\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0138\n\x0F\x03\x0F\x05\x0F\u013B\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u0150\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0166\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0170\n\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\u0174\n\x0F\f\x0F\x0E\x0F\u0177\v\x0F\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u017C\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u018C\n\x10\x03\x10\x03\x10\x05\x10\u0190\n\x10\x03\x10\x03\x10\x05" +
		"\x10\u0194\n\x10\x03\x10\x03\x10\x05\x10\u0198\n\x10\x03\x10\x03\x10\x05" +
		"\x10\u019C\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01A9\n\x10\x03\x10\x07\x10\u01AC" +
		"\n\x10\f\x10\x0E\x10\u01AF\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u01B7\n\x11\x03\x12\x06\x12\u01BA\n\x12\r\x12\x0E\x12" +
		"\u01BB\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u01C2\n\x14\x03\x14\x03" +
		"\x14\x05\x14\u01C6\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u01CC" +
		"\n\x15\f\x15\x0E\x15\u01CF\v\x15\x05\x15\u01D1\n\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x05\x16\u01D7\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x07\x17\u01DF\n\x17\f\x17\x0E\x17\u01E2\v\x17\x05\x17\u01E4\n" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01EC\n\x18" +
		"\f\x18\x0E\x18\u01EF\v\x18\x05\x18\u01F1\n\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x07\x19\u01F9\n\x19\f\x19\x0E\x19\u01FC\v\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u0202\n\x1A\x03\x1A\x03\x1A\x06" +
		"\x1A\u0206\n\x1A\r\x1A\x0E\x1A\u0207\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u020D" +
		"\n\x1A\f\x1A\x0E\x1A\u0210\v\x1A\x03\x1A\x05\x1A\u0213\n\x1A\x03\x1A\x02" +
		"\x02\x04\x1C\x1E\x1B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02\x02\n\x05\x02\x15\x15\x1B" +
		"\x1B\x1D\x1D\x05\x02!!((33\x05\x02))..00\x04\x02!!((\x04\x02$$\'\'\x04" +
		"\x02,,33\b\x02 !#$\',..0133\x03\x02<=\x02\u026F\x029\x03\x02\x02\x02\x04" +
		"E\x03\x02\x02\x02\x06G\x03\x02\x02\x02\bJ\x03\x02\x02\x02\n\\\x03\x02" +
		"\x02\x02\fh\x03\x02\x02\x02\x0Eq\x03\x02\x02\x02\x10s\x03\x02\x02\x02" +
		"\x12\x9F\x03\x02\x02\x02\x14\xA1\x03\x02\x02\x02\x16\xD7\x03\x02\x02\x02" +
		"\x18\xD9\x03\x02\x02\x02\x1A\u010D\x03\x02\x02\x02\x1C\u013A\x03\x02\x02" +
		"\x02\x1E\u019B\x03\x02\x02\x02 \u01B6\x03\x02\x02\x02\"\u01B9\x03\x02" +
		"\x02\x02$\u01BD\x03\x02\x02\x02&\u01BF\x03\x02\x02\x02(\u01C7\x03\x02" +
		"\x02\x02*\u01D6\x03\x02\x02\x02,\u01DA\x03\x02\x02\x02.\u01E7\x03\x02" +
		"\x02\x020\u01F4\x03\x02\x02\x022\u0212\x03\x02\x02\x0248\x05\b\x05\x02" +
		"58\x05\x06\x04\x0268\x07>\x02\x0274\x03\x02\x02\x0275\x03\x02\x02\x02" +
		"76\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":@\x03\x02\x02\x02;9\x03\x02\x02\x02<?\x05\x04\x03\x02=?\x07>\x02\x02" +
		"><\x03\x02\x02\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02A\x03\x03\x02\x02\x02B@\x03\x02\x02\x02CF\x05\x10\t" +
		"\x02DF\x05\x14\v\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\x05\x03\x02" +
		"\x02\x02GH\x07\x19\x02\x02HI\x05\n\x06\x02I\x07\x03\x02\x02\x02JK\x07" +
		"\x1A\x02\x02KW\x05\n\x06\x02LM\x07\f\x02\x02MX\x07=\x02\x02NO\x07&\x02" +
		"\x02OT\x05\x0E\b\x02PQ\x07%\x02\x02QS\x05\x0E\b\x02RP\x03\x02\x02\x02" +
		"SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UX\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02WL\x03\x02\x02\x02WN\x03\x02\x02\x02WX\x03\x02\x02\x02" +
		"X\t\x03\x02\x02\x02Y[\x07 \x02\x02ZY\x03\x02\x02\x02[^\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^\\\x03\x02\x02" +
		"\x02_d\x05\f\x07\x02`a\x07 \x02\x02ac\x05\f\x07\x02b`\x03\x02\x02\x02" +
		"cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\v\x03\x02\x02" +
		"\x02fd\x03\x02\x02\x02gi\x07\x1F\x02\x02hg\x03\x02\x02\x02hi\x03\x02\x02" +
		"\x02ij\x03\x02\x02\x02jk\x07=\x02\x02k\r\x03\x02\x02\x02lr\x05$\x13\x02" +
		"mn\x05$\x13\x02no\x07\f\x02\x02op\x05$\x13\x02pr\x03\x02\x02\x02ql\x03" +
		"\x02\x02\x02qm\x03\x02\x02\x02r\x0F\x03\x02\x02\x02su\x07<\x02\x02tv\x05" +
		"0\x19\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wy\x05" +
		"(\x15\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02y|\x03\x02\x02\x02z{\x07" +
		"\v\x02\x02{}\x05\x1E\x10\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x8C" +
		"\x03\x02\x02\x02~\x80\x07&\x02\x02\x7F\x81\x07>\x02\x02\x80\x7F\x03\x02" +
		"\x02\x02\x81\x82\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02" +
		"\x02\x02\x83\x84\x03\x02\x02\x02\x84\x87\x07\x03\x02\x02\x85\x88\x05\x12" +
		"\n\x02\x86\x88\x07>\x02\x02\x87\x85\x03\x02\x02\x02\x87\x86\x03\x02\x02" +
		"\x02\x88\x89\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02" +
		"\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x07\x04\x02\x02\x8C~\x03\x02\x02" +
		"\x02\x8C\x8D\x03\x02\x02\x02\x8D\x11\x03\x02\x02\x02\x8E\x8F\x07 \x02" +
		"\x02\x8F\x90\x07 \x02\x02\x90\x91\x07 \x02\x02\x91\x92\x07<\x02\x02\x92" +
		"\xA0\x05,\x17\x02\x93\x94\x07\x12\x02\x02\x94\xA0\x052\x1A\x02\x95\xA0" +
		"\x05\x18\r\x02\x96\x97\t\x02\x02\x02\x97\x98\x05\"\x12\x02\x98\x9A\x05" +
		"(\x15\x02\x99\x9B\x05\x1E\x10\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03" +
		"\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9E\x052\x1A\x02\x9D\x9C\x03" +
		"\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F\x8E\x03" +
		"\x02\x02\x02\x9F\x93\x03\x02\x02\x02\x9F\x95\x03\x02\x02\x02\x9F\x96\x03" +
		"\x02\x02\x02\xA0\x13\x03\x02\x02\x02\xA1\xA3\x07\x13\x02\x02\xA2\xA4\x05" +
		"\x1C\x0F\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03" +
		"\x02\x02\x02\xA5\xA7\x052\x1A\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03" +
		"\x02\x02\x02\xA7\x15\x03\x02\x02\x02\xA8\xAF\x07\x10\x02\x02\xA9\xAC\x07" +
		"=\x02\x02\xAA\xAB\x07%\x02\x02\xAB\xAD\x07=\x02\x02\xAC\xAA\x03\x02\x02" +
		"\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x07\x0F\x02" +
		"\x02\xAF\xA9\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02\x02" +
		"\x02\xB1\xB2\x05\x1C\x0F\x02\xB2\xB3\x052\x1A\x02\xB3\xD8\x03\x02\x02" +
		"\x02\xB4\xB5\x07\x16\x02\x02\xB5\xB6\x05\x1C\x0F\x02\xB6\xB7\x052\x1A" +
		"\x02\xB7\xD8\x03\x02\x02\x02\xB8\xB9\x07\r\x02\x02\xB9\xBA\x052\x1A\x02" +
		"\xBA\xBB\x07\x16\x02\x02\xBB\xBC\x05\x1C\x0F\x02\xBC\xD8\x03\x02\x02\x02" +
		"\xBD\xBE\x07\x0E\x02\x02\xBE\xBF\x05\x1C\x0F\x02\xBF\xC2\x052\x1A\x02" +
		"\xC0\xC1\x07\x11\x02\x02\xC1\xC3\x052\x1A\x02\xC2\xC0\x03\x02\x02\x02" +
		"\xC2\xC3\x03\x02\x02\x02\xC3\xD8\x03\x02\x02\x02\xC4\xD8\x07\x14\x02\x02" +
		"\xC5\xC7\x07\x1C\x02\x02\xC6\xC8\x05\x1C\x0F\x02\xC7\xC6\x03\x02\x02\x02" +
		"\xC7\xC8\x03\x02\x02\x02\xC8\xD8\x03\x02\x02\x02\xC9\xCA\x07\x17\x02\x02" +
		"\xCA\xCC\x05\x1C\x0F\x02\xCB\xCD\x07>\x02\x02\xCC\xCB\x03\x02\x02\x02" +
		"\xCD\xCE\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02" +
		"\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x07\x18\x02\x02\xD1\xD2\x05\x1C\x0F\x02" +
		"\xD2\xD8\x03\x02\x02\x02\xD3\xD8\x07;\x02\x02\xD4\xD8\x05\x1C\x0F\x02" +
		"\xD5\xD8\x05\x18\r\x02\xD6\xD8\x05\x1A\x0E\x02\xD7\xA8\x03\x02\x02\x02" +
		"\xD7\xB4\x03\x02\x02\x02\xD7\xB8\x03\x02\x02\x02\xD7\xBD\x03\x02\x02\x02" +
		"\xD7\xC4\x03\x02\x02\x02\xD7\xC5\x03\x02\x02\x02\xD7\xC9\x03\x02\x02\x02" +
		"\xD7\xD3\x03\x02\x02\x02\xD7\xD4\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02" +
		"\xD7\xD6\x03\x02\x02\x02\xD8\x17\x03\x02\x02\x02\xD9\xDF\x07=\x02\x02" +
		"\xDA\xE0\x05\x1E\x10\x02\xDB\xE0\x052\x1A\x02\xDC\xDD\x05\x1E\x10\x02" +
		"\xDD\xDE\x052\x1A\x02\xDE\xE0\x03\x02\x02\x02\xDF\xDA\x03\x02\x02\x02" +
		"\xDF\xDB\x03\x02\x02\x02\xDF\xDC\x03\x02\x02\x02\xE0\x19\x03\x02\x02\x02" +
		"\xE1\xE2\x07=\x02\x02\xE2\xE3\x07,\x02\x02\xE3\u010E\x05\x1C\x0F\x02\xE4" +
		"\xE5\x07\x05\x02\x02\xE5\xEA\x07=\x02\x02\xE6\xE7\x07%\x02\x02\xE7\xE9" +
		"\x07=\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8" +
		"\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEA" +
		"\x03\x02\x02\x02\xED\xEE\x07\x06\x02\x02\xEE\xEF\x07,\x02\x02\xEF\u010E" +
		"\x05\x1C\x0F\x02\xF0\xF1\x07\t\x02\x02\xF1\xF6\x07=\x02\x02\xF2\xF3\x07" +
		"%\x02\x02\xF3\xF5\x07=\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF8\x03\x02" +
		"\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02" +
		"\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFA\x07\n\x02\x02\xFA\xFB\x07,\x02" +
		"\x02\xFB\u010E\x05\x1C\x0F\x02\xFC\xFD\x07-\x02\x02\xFD\xFE\x07=\x02\x02" +
		"\xFE\xFF\x07,\x02\x02\xFF\u010E\x05\x1C\x0F\x02\u0100\u0101\x05\x1C\x0F" +
		"\x02\u0101\u0102\x07 \x02\x02\u0102\u0103\x07=\x02\x02\u0103\u0104\x07" +
		",\x02\x02\u0104\u0105\x05\x1C\x0F\x02\u0105\u010E\x03\x02\x02\x02\u0106" +
		"\u0107\x05\x1C\x0F\x02\u0107\u0108\x07\x05\x02\x02\u0108\u0109\x05\x1C" +
		"\x0F\x02\u0109\u010A\x07\x06\x02\x02\u010A\u010B\x07,\x02\x02\u010B\u010C" +
		"\x05\x1C\x0F\x02\u010C\u010E\x03\x02\x02\x02\u010D\xE1\x03\x02\x02\x02" +
		"\u010D\xE4\x03\x02\x02\x02\u010D\xF0\x03\x02\x02\x02\u010D\xFC\x03\x02" +
		"\x02\x02\u010D\u0100\x03\x02\x02\x02\u010D\u0106\x03\x02\x02\x02\u010E" +
		"\x1B\x03\x02\x02\x02\u010F\u0110\b\x0F\x01\x02\u0110\u013B\x07=\x02\x02" +
		"\u0111\u013B\x07-\x02\x02\u0112\u0113\x07-\x02\x02\u0113\u013B\x07=\x02" +
		"\x02\u0114\u0116\x07<\x02\x02\u0115\u0117\x05.\x18\x02\u0116\u0115\x03" +
		"\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118" +
		"\u013B\x05,\x17\x02\u0119\u013B\x05 \x11\x02\u011A\u011B\x07\x07\x02\x02" +
		"\u011B\u011C\x05\x1C\x0F\x02\u011C\u011D\x07\b\x02\x02\u011D\u013B\x03" +
		"\x02\x02\x02\u011E\u0127\x07\x05\x02\x02\u011F\u0124\x05\x1C\x0F\x02\u0120" +
		"\u0121\x07%\x02\x02\u0121\u0123\x05\x1C\x0F\x02\u0122\u0120\x03\x02\x02" +
		"\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125" +
		"\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02" +
		"\u0127\u011F\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u013B\x07\x06\x02\x02\u012A\u012B\t\x03\x02\x02\u012B" +
		"\u013B\x05\x1C\x0F\x0E\u012C\u0137\x074\x02\x02\u012D\u0132\x05&\x14\x02" +
		"\u012E\u012F\x07%\x02\x02\u012F\u0131\x05&\x14\x02\u0130\u012E\x03\x02" +
		"\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0135\u0136\x07&\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u012D" +
		"\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
		"\u0139\u013B\x05\x1C\x0F\x03\u013A\u010F\x03\x02\x02\x02\u013A\u0111\x03" +
		"\x02\x02\x02\u013A\u0112\x03\x02\x02\x02\u013A\u0114\x03\x02\x02\x02\u013A" +
		"\u0119\x03\x02\x02\x02\u013A\u011A\x03\x02\x02\x02\u013A\u011E\x03\x02" +
		"\x02\x02\u013A\u012A\x03\x02\x02\x02\u013A\u012C\x03\x02\x02\x02\u013B" +
		"\u0175\x03\x02\x02\x02\u013C\u013D\f\r\x02\x02\u013D\u013E\x07*\x02\x02" +
		"\u013E\u0174\x05\x1C\x0F\x0E\u013F\u0140\f\f\x02\x02\u0140\u0141\t\x04" +
		"\x02\x02\u0141\u0174\x05\x1C\x0F\r\u0142\u0143\f\v\x02\x02\u0143\u0144" +
		"\t\x05\x02\x02\u0144\u0174\x05\x1C\x0F\f\u0145\u0146\f\n\x02\x02\u0146" +
		"\u0147\x07 \x02\x02\u0147\u0148\x07 \x02\x02\u0148\u0174\x05\x1C\x0F\v" +
		"\u0149\u014A\f\t\x02\x02\u014A\u014B\x07/\x02\x02\u014B\u0174\x05\x1C" +
		"\x0F\n\u014C\u014D\f\b\x02\x02\u014D\u014F\t\x06\x02\x02\u014E\u0150\x07" +
		",\x02\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
		"\u0151\x03\x02\x02\x02\u0151\u0174\x05\x1C\x0F\t\u0152\u0153\f\x07\x02" +
		"\x02\u0153\u0154\t\x07\x02\x02\u0154\u0155\x07,\x02\x02\u0155\u0174\x05" +
		"\x1C\x0F\b\u0156\u0157\f\x06\x02\x02\u0157\u0158\x071\x02\x02\u0158\u0159" +
		"\x071\x02\x02\u0159\u0174\x05\x1C\x0F\x07\u015A\u015B\f\x05\x02\x02\u015B" +
		"\u015C\x07#\x02\x02\u015C\u015D\x07#\x02\x02\u015D\u0174\x05\x1C\x0F\x06" +
		"\u015E\u015F\f\x04\x02\x02\u015F\u0160\x07#\x02\x02\u0160\u0161\x07=\x02" +
		"\x02\u0161\u0162\x07&\x02\x02\u0162\u0174\x05\x1C\x0F\x05\u0163\u0165" +
		"\f\x13\x02\x02\u0164\u0166\x05.\x18\x02\u0165\u0164\x03\x02\x02\x02\u0165" +
		"\u0166\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0174\x05,\x17" +
		"\x02\u0168\u0169\f\x12\x02\x02\u0169\u016A\x07\x05\x02\x02\u016A\u016B" +
		"\x05\x1C\x0F\x02\u016B\u016C\x07\x06\x02\x02\u016C\u0174\x03\x02\x02\x02" +
		"\u016D\u016F\f\x0F\x02\x02\u016E\u0170\x07/\x02\x02\u016F\u016E\x03\x02" +
		"\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
		"\u0172\x07 \x02\x02\u0172\u0174\x07=\x02\x02\u0173\u013C\x03\x02\x02\x02" +
		"\u0173\u013F\x03\x02\x02\x02\u0173\u0142\x03\x02\x02\x02\u0173\u0145\x03" +
		"\x02\x02\x02\u0173\u0149\x03\x02\x02\x02\u0173\u014C\x03\x02\x02\x02\u0173" +
		"\u0152\x03\x02\x02\x02\u0173\u0156\x03\x02\x02\x02\u0173\u015A\x03\x02" +
		"\x02\x02\u0173\u015E\x03\x02\x02\x02\u0173\u0163\x03\x02\x02\x02\u0173" +
		"\u0168\x03\x02\x02\x02\u0173\u016D\x03\x02\x02\x02\u0174\u0177\x03\x02" +
		"\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176" +
		"\x1D\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u0179\b\x10\x01" +
		"\x02\u0179\u017B\x07<\x02\x02\u017A\u017C\x05.\x18\x02\u017B\u017A\x03" +
		"\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u019C\x03\x02\x02\x02\u017D" +
		"\u019C\x05 \x11\x02\u017E\u017F\x07\x07\x02\x02\u017F\u0180\x05\x1E\x10" +
		"\x02\u0180\u0181\x071\x02\x02\u0181\u0182\x05\x1E\x10\x02\u0182\u0183" +
		"\x07\b\x02\x02\u0183\u019C\x03\x02\x02\x02\u0184\u0185\x07\x07\x02\x02" +
		"\u0185\u0186\x05\x1E\x10\x02\u0186\u0187\x07#\x02\x02\u0187\u0188\x05" +
		"\x1E\x10\x02\u0188\u0189\x07\b\x02\x02\u0189\u019C\x03\x02\x02\x02\u018A" +
		"\u018C\x050\x19\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02" +
		"\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F\x05(\x15\x02\u018E\u0190" +
		"\x05\x1E\x10\x02\u018F\u018E\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02" +
		"\u0190\u019C\x03\x02\x02\x02\u0191\u0193\x07\x07\x02\x02\u0192\u0194\x05" +
		"0\x19\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194" +
		"\u0195\x03\x02\x02\x02\u0195\u0197\x05(\x15\x02\u0196\u0198\x05\x1E\x10" +
		"\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199" +
		"\x03\x02\x02\x02\u0199\u019A\x07\b\x02\x02\u019A\u019C\x03\x02\x02\x02" +
		"\u019B\u0178\x03\x02\x02\x02\u019B\u017D\x03\x02\x02\x02\u019B\u017E\x03" +
		"\x02\x02\x02\u019B\u0184\x03\x02\x02\x02\u019B\u018B\x03\x02\x02\x02\u019B" +
		"\u0191\x03\x02\x02\x02\u019C\u01AD\x03\x02\x02\x02\u019D\u019E\f\b\x02" +
		"\x02\u019E\u019F\x071\x02\x02\u019F\u01AC\x05\x1E\x10\t\u01A0\u01A1\f" +
		"\x06\x02\x02\u01A1\u01A2\x07#\x02\x02\u01A2\u01AC\x05\x1E\x10\x07\u01A3" +
		"\u01A4\f\n\x02\x02\u01A4\u01AC\x07/\x02\x02\u01A5\u01A6\f\t\x02\x02\u01A6" +
		"\u01A8\x07\x05\x02\x02\u01A7\u01A9\x077\x02\x02\u01A8\u01A7\x03\x02\x02" +
		"\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC" +
		"\x07\x06\x02\x02\u01AB\u019D\x03\x02\x02\x02\u01AB\u01A0\x03\x02\x02\x02" +
		"\u01AB\u01A3\x03\x02\x02\x02\u01AB\u01A5\x03\x02\x02\x02\u01AC\u01AF\x03" +
		"\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE" +
		"\x1F\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B7\x075\x02" +
		"\x02\u01B1\u01B7\x078\x02\x02\u01B2\u01B7\x077\x02\x02\u01B3\u01B7\x07" +
		"6\x02\x02\u01B4\u01B7\x079\x02\x02\u01B5\u01B7\x07:\x02\x02\u01B6\u01B0" +
		"\x03\x02\x02\x02\u01B6\u01B1\x03\x02\x02\x02\u01B6\u01B2\x03\x02\x02\x02" +
		"\u01B6\u01B3\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B5\x03" +
		"\x02\x02\x02\u01B7!\x03\x02\x02\x02\u01B8\u01BA\t\b\x02\x02\u01B9\u01B8" +
		"\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02" +
		"\u01BB\u01BC\x03\x02\x02\x02\u01BC#\x03\x02\x02\x02\u01BD\u01BE\t\t\x02" +
		"\x02\u01BE%\x03\x02\x02\x02\u01BF\u01C1\x07=\x02\x02\u01C0\u01C2\x05\x1E" +
		"\x10\x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C5\x03\x02\x02\x02\u01C3\u01C4\x07\"\x02\x02\u01C4\u01C6\x07<\x02" +
		"\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\'\x03" +
		"\x02\x02\x02\u01C7\u01D0\x07\x07\x02\x02\u01C8\u01CD\x05&\x14\x02\u01C9" +
		"\u01CA\x07%\x02\x02\u01CA\u01CC\x05&\x14\x02\u01CB\u01C9\x03\x02\x02\x02" +
		"\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0" +
		"\u01C8\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03\x02" +
		"\x02\x02\u01D2\u01D3\x07\b\x02\x02\u01D3)\x03\x02\x02\x02\u01D4\u01D5" +
		"\x07=\x02\x02\u01D5\u01D7\x07,\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6" +
		"\u01D7\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x05\x1C" +
		"\x0F\x02\u01D9+\x03\x02\x02\x02\u01DA\u01E3\x07\x07\x02\x02\u01DB\u01E0" +
		"\x05*\x16\x02\u01DC\u01DD\x07%\x02\x02\u01DD\u01DF\x05*\x16\x02\u01DE" +
		"\u01DC\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01DE\x03\x02" +
		"\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2" +
		"\u01E0\x03\x02\x02\x02\u01E3\u01DB\x03\x02\x02\x02\u01E3\u01E4\x03\x02" +
		"\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x07\b\x02\x02\u01E6-" +
		"\x03\x02\x02\x02\u01E7\u01F0\x07$\x02\x02\u01E8\u01ED\x05\x1E\x10\x02" +
		"\u01E9\u01EA\x07%\x02\x02\u01EA\u01EC\x05\x1E\x10\x02\u01EB\u01E9\x03" +
		"\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED" +
		"\u01EE\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02" +
		"\x02\x02\u01F0\u01E8\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1" +
		"\u01F2\x03\x02\x02\x02\u01F2\u01F3\x07\'\x02\x02\u01F3/\x03\x02\x02\x02" +
		"\u01F4\u01F5\x07$\x02\x02\u01F5\u01FA\x07<\x02\x02\u01F6\u01F7\x07%\x02" +
		"\x02\u01F7\u01F9\x07<\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC" +
		"\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02" +
		"\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07" +
		"\'\x02\x02\u01FE1\x03\x02\x02\x02\u01FF\u0201\x07&\x02\x02\u0200\u0202" +
		"\x05\x16\f\x02\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02" +
		"\u0202\u0213\x03\x02\x02\x02\u0203\u0205\x07&\x02\x02\u0204\u0206\x07" +
		">\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207" +
		"\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02" +
		"\x02\x02\u0209\u020E\x07\x03\x02\x02\u020A\u020D\x05\x16\f\x02\u020B\u020D" +
		"\x07>\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02" +
		"\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03" +
		"\x02\x02\x02\u020F\u0211\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211" +
		"\u0213\x07\x04\x02\x02\u0212\u01FF\x03\x02\x02\x02\u0212\u0203\x03\x02" +
		"\x02\x02\u0213";
	private static readonly _serializedATNSegment1: string =
		"3\x03\x02\x02\x02H79>@ETW\\dhqux|\x82\x87\x89\x8C\x9A\x9D\x9F\xA3\xA6" +
		"\xAC\xAF\xC2\xC7\xCE\xD7\xDF\xEA\xF6\u010D\u0116\u0124\u0127\u0132\u0137" +
		"\u013A\u014F\u0165\u016F\u0173\u0175\u017B\u018B\u018F\u0193\u0197\u019B" +
		"\u01A8\u01AB\u01AD\u01B6\u01BB\u01C1\u01C5\u01CD\u01D0\u01D6\u01E0\u01E3" +
		"\u01ED\u01F0\u01FA\u0201\u0207\u020C\u020E\u0212";
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
	public sourceMember(): SourceMemberContext[];
	public sourceMember(i: number): SourceMemberContext;
	public sourceMember(i?: number): SourceMemberContext | SourceMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceMemberContext);
		} else {
			return this.getRuleContext(i, SourceMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
}


export class SourceMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_sourceMember; }
	public copyFrom(ctx: SourceMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class DefinitionSourceMemberContext extends SourceMemberContext {
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	constructor(ctx: SourceMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TestSourceMemberContext extends SourceMemberContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	constructor(ctx: SourceMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
	public _alias!: Token;
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
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
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
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
	public _s30!: Token;
	public _points: Token[] = [];
	public libraryPathPart(): LibraryPathPartContext[];
	public libraryPathPart(i: number): LibraryPathPartContext;
	public libraryPathPart(i?: number): LibraryPathPartContext | LibraryPathPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryPathPartContext);
		} else {
			return this.getRuleContext(i, LibraryPathPartContext);
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


export class LibraryPathPartContext extends ParserRuleContext {
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(XonParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryPathPart; }
}


export class LibraryMemberContext extends ParserRuleContext {
	public _name!: IdContext;
	public _alias!: IdContext;
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
}


export class DefinitionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
	public copyFrom(ctx: DefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClassDefinitionContext extends DefinitionContext {
	public _name!: Token;
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
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
	public classMember(): ClassMemberContext[];
	public classMember(i: number): ClassMemberContext;
	public classMember(i?: number): ClassMemberContext | ClassMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberContext);
		} else {
			return this.getRuleContext(i, ClassMemberContext);
		}
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ClassMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_classMember; }
	public copyFrom(ctx: ClassMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class IncludeClassMemberContext extends ClassMemberContext {
	public _name!: Token;
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DOT);
		} else {
			return this.getToken(XonParser.DOT, i);
		}
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InitClassMemberContext extends ClassMemberContext {
	public INIT(): TerminalNode { return this.getToken(XonParser.INIT, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AttributeClassMemberContext extends ClassMemberContext {
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorClassMemberContext extends ClassMemberContext {
	public _name!: OperatorContext;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public POSTFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.POSTFIX, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
	public _value!: Token;
	public _index!: Token;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public LOWER_ID(): TerminalNode[];
	public LOWER_ID(i: number): TerminalNode;
	public LOWER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LOWER_ID);
		} else {
			return this.getToken(XonParser.LOWER_ID, i);
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
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
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
	public _thenBody!: BodyContext;
	public _elseBody!: BodyContext;
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExpressionContext;
	public _expect!: ExpressionContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AttributeStatementContext extends StatementContext {
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
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


export class AttributeContext extends ParserRuleContext {
	public _name!: Token;
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attribute; }
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
	public _name!: Token;
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayAssignmentContext extends AssignmentContext {
	public _LOWER_ID!: Token;
	public _names: Token[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode[];
	public LOWER_ID(i: number): TerminalNode;
	public LOWER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LOWER_ID);
		} else {
			return this.getToken(XonParser.LOWER_ID, i);
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
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectAssignmentContext extends AssignmentContext {
	public _LOWER_ID!: Token;
	public _names: Token[] = [];
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode[];
	public LOWER_ID(i: number): TerminalNode;
	public LOWER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LOWER_ID);
		} else {
			return this.getToken(XonParser.LOWER_ID, i);
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
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ThisMemberAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberAssignmentContext extends AssignmentContext {
	public _name!: Token;
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
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
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
	public _name!: Token;
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceExpressionContext extends ExpressionContext {
	public _name!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceMemberExpressionContext extends ExpressionContext {
	public _name!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstantiationExpressionContext extends ExpressionContext {
	public _name!: Token;
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
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
export class MemberExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _s40!: Token;
	public _op: Token[] = [];
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _s46!: Token;
	public _op: Token[] = [];
	public _s39!: Token;
	public _s44!: Token;
	public __tset303!: Token;
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _s31!: Token;
	public _op: Token[] = [];
	public _s38!: Token;
	public __tset358!: Token;
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _s30!: Token;
	public _op: Token[] = [];
	public _right!: ExpressionContext;
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
export class ElvisExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _s45!: Token;
	public _op: Token[] = [];
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _s34!: Token;
	public _op: Token[] = [];
	public _s37!: Token;
	public __tset485!: Token;
	public _s42!: Token;
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _s42!: Token;
	public _op: Token[] = [];
	public _s49!: Token;
	public __tset543!: Token;
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _s47!: Token;
	public _op: Token[] = [];
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _s33!: Token;
	public _op: Token[] = [];
	public _right!: ExpressionContext;
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
	public _name!: Token;
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
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
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
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
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
export class IdTypeContext extends TypeContext {
	public _name!: Token;
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralTypeContext extends TypeContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
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
	public _size!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.INTEGER_LITERAL, 0); }
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
export class IntersectionParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
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
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
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
export class UnionParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
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
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
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


export class OperatorContext extends ParserRuleContext {
	public TILDE(): TerminalNode[];
	public TILDE(i: number): TerminalNode;
	public TILDE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.TILDE);
		} else {
			return this.getToken(XonParser.TILDE, i);
		}
	}
	public EXCLAMATION(): TerminalNode[];
	public EXCLAMATION(i: number): TerminalNode;
	public EXCLAMATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EXCLAMATION);
		} else {
			return this.getToken(XonParser.EXCLAMATION, i);
		}
	}
	public CARET(): TerminalNode[];
	public CARET(i: number): TerminalNode;
	public CARET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.CARET);
		} else {
			return this.getToken(XonParser.CARET, i);
		}
	}
	public ASTERISK(): TerminalNode[];
	public ASTERISK(i: number): TerminalNode;
	public ASTERISK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ASTERISK);
		} else {
			return this.getToken(XonParser.ASTERISK, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.SLASH);
		} else {
			return this.getToken(XonParser.SLASH, i);
		}
	}
	public MODULO(): TerminalNode[];
	public MODULO(i: number): TerminalNode;
	public MODULO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.MODULO);
		} else {
			return this.getToken(XonParser.MODULO, i);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PLUS);
		} else {
			return this.getToken(XonParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.MINUS);
		} else {
			return this.getToken(XonParser.MINUS, i);
		}
	}
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
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EQUAL);
		} else {
			return this.getToken(XonParser.EQUAL, i);
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
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
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
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class IdContext extends ParserRuleContext {
	public UPPER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.UPPER_ID, 0); }
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


export class ParameterContext extends ParserRuleContext {
	public _name!: Token;
	public _meta!: Token;
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	public UPPER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.UPPER_ID, 0); }
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
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
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


export class GenericArgumentsContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_genericArguments; }
}


export class GenericParametersContext extends ParserRuleContext {
	public _UPPER_ID!: Token;
	public _names: Token[] = [];
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
	public UPPER_ID(): TerminalNode[];
	public UPPER_ID(i: number): TerminalNode;
	public UPPER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.UPPER_ID);
		} else {
			return this.getToken(XonParser.UPPER_ID, i);
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


