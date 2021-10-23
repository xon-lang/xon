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
	public static readonly RULE_classType = 7;
	public static readonly RULE_classTypeMember = 8;
	public static readonly RULE_extensionType = 9;
	public static readonly RULE_extensionTypeMember = 10;
	public static readonly RULE_test = 11;
	public static readonly RULE_property = 12;
	public static readonly RULE_method = 13;
	public static readonly RULE_statement = 14;
	public static readonly RULE_assignment = 15;
	public static readonly RULE_expression = 16;
	public static readonly RULE_type = 17;
	public static readonly RULE_literal = 18;
	public static readonly RULE_operator = 19;
	public static readonly RULE_id = 20;
	public static readonly RULE_parameter = 21;
	public static readonly RULE_parameters = 22;
	public static readonly RULE_argument = 23;
	public static readonly RULE_arguments = 24;
	public static readonly RULE_typeParameters = 25;
	public static readonly RULE_genericArguments = 26;
	public static readonly RULE_genericParameters = 27;
	public static readonly RULE_body = 28;
	public static readonly RULE_methodBody = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "sourceMember", "export", "library", "libraryPath", "libraryPathPart", 
		"libraryMember", "classType", "classTypeMember", "extensionType", "extensionTypeMember", 
		"test", "property", "method", "statement", "assignment", "expression", 
		"type", "literal", "operator", "id", "parameter", "parameters", "argument", 
		"arguments", "typeParameters", "genericArguments", "genericParameters", 
		"body", "methodBody",
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
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 63;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 60;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 61;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 62;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.TEST || _la === XonParser.EXTENSION || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.UPPER_ID - 58)) | (1 << (XonParser.LOWER_ID - 58)) | (1 << (XonParser.NL - 58)))) !== 0)) {
				{
				this.state = 70;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.TEST:
				case XonParser.EXTENSION:
				case XonParser.UPPER_ID:
				case XonParser.LOWER_ID:
					{
					this.state = 68;
					this.sourceMember();
					}
					break;
				case XonParser.NL:
					{
					this.state = 69;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 74;
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
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new ClassTypeSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.classType();
				}
				break;

			case 2:
				_localctx = new ExtensionTypeSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.extensionType();
				}
				break;

			case 3:
				_localctx = new PropertySourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 77;
				this.property();
				}
				break;

			case 4:
				_localctx = new MethodSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 78;
				this.method();
				}
				break;

			case 5:
				_localctx = new TestSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 79;
				this.test();
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(XonParser.EXPORT);
			this.state = 83;
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
			this.state = 85;
			this.match(XonParser.IMPORT);
			this.state = 86;
			this.libraryPath();
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 87;
				this.match(XonParser.AS);
				this.state = 88;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 89;
				this.match(XonParser.COLON);
				this.state = 90;
				this.libraryMember();
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 91;
					this.match(XonParser.COMMA);
					this.state = 92;
					this.libraryMember();
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.EOF:
			case XonParser.TEST:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.EXTENSION:
			case XonParser.UPPER_ID:
			case XonParser.LOWER_ID:
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
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 100;
				_localctx._s30 = this.match(XonParser.DOT);
				_localctx._points.push(_localctx._s30);
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 106;
			this.libraryPathPart();
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 107;
				this.match(XonParser.DOT);
				this.state = 108;
				this.libraryPathPart();
				}
				}
				this.state = 113;
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
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AT) {
				{
				this.state = 114;
				this.match(XonParser.AT);
				}
			}

			this.state = 117;
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
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				_localctx._name = this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				_localctx._name = this.id();
				this.state = 121;
				this.match(XonParser.AS);
				this.state = 122;
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
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_classType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 127;
				this.genericParameters();
				}
			}

			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 130;
				this.parameters();
				}
			}

			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 133;
				this.match(XonParser.IS);
				this.state = 134;
				this.type(0);
				}
			}

			this.state = 137;
			this.match(XonParser.COLON);
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 138;
				this.classTypeMember();
				}
				break;

			case 2:
				{
				this.state = 139;
				this.match(XonParser.NL);
				this.state = 140;
				this.match(XonParser.INDENT);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 143;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.INIT:
					case XonParser.INFIX:
					case XonParser.PREFIX:
					case XonParser.POSTFIX:
					case XonParser.DOT:
					case XonParser.LOWER_ID:
						{
						this.state = 141;
						this.classTypeMember();
						}
						break;
					case XonParser.NL:
						{
						this.state = 142;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX) | (1 << XonParser.DOT))) !== 0) || _la === XonParser.LOWER_ID || _la === XonParser.NL);
				this.state = 147;
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
	public classTypeMember(): ClassTypeMemberContext {
		let _localctx: ClassTypeMemberContext = new ClassTypeMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_classTypeMember);
		let _la: number;
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				_localctx = new IncludeClassTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 150;
				this.match(XonParser.DOT);
				this.state = 151;
				this.match(XonParser.DOT);
				this.state = 152;
				this.match(XonParser.DOT);
				this.state = 153;
				(_localctx as IncludeClassTypeMemberContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 154;
				this.arguments();
				}
				break;

			case 2:
				_localctx = new PropertyClassTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.property();
				}
				break;

			case 3:
				_localctx = new MethodClassTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.method();
				}
				break;

			case 4:
				_localctx = new InitClassTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 157;
				this.match(XonParser.INIT);
				this.state = 158;
				this.body();
				}
				break;

			case 5:
				_localctx = new OperatorClassTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 159;
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
				this.state = 160;
				this.operator();
				this.state = 161;
				this.parameters();
				this.state = 163;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 162;
					this.type(0);
					}
					break;
				}
				this.state = 166;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 165;
					this.methodBody();
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
	public extensionType(): ExtensionTypeContext {
		let _localctx: ExtensionTypeContext = new ExtensionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_extensionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(XonParser.EXTENSION);
			this.state = 171;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 172;
				this.genericParameters();
				}
			}

			this.state = 175;
			this.match(XonParser.COLON);
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				this.extensionTypeMember();
				}
				break;

			case 2:
				{
				this.state = 177;
				this.match(XonParser.NL);
				this.state = 178;
				this.match(XonParser.INDENT);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 181;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.DOT:
					case XonParser.LOWER_ID:
						{
						this.state = 179;
						this.extensionTypeMember();
						}
						break;
					case XonParser.NL:
						{
						this.state = 180;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.DOT - 30)) | (1 << (XonParser.LOWER_ID - 30)) | (1 << (XonParser.NL - 30)))) !== 0));
				this.state = 185;
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
	public extensionTypeMember(): ExtensionTypeMemberContext {
		let _localctx: ExtensionTypeMemberContext = new ExtensionTypeMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_extensionTypeMember);
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new IncludeExtensionTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.match(XonParser.DOT);
				this.state = 189;
				this.match(XonParser.DOT);
				this.state = 190;
				this.match(XonParser.DOT);
				this.state = 191;
				(_localctx as IncludeExtensionTypeMemberContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 192;
				this.arguments();
				}
				break;

			case 2:
				_localctx = new PropertyExtensionTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.property();
				}
				break;

			case 3:
				_localctx = new MethodExtensionTypeMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 194;
				this.method();
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(XonParser.TEST);
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 205;
				this.type(0);
				}
				break;
			}
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON || _la === XonParser.EQUAL) {
				{
				this.state = 208;
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
				this.state = 209;
				this.expression(0);
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
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 213;
				this.genericParameters();
				}
			}

			this.state = 216;
			this.parameters();
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 217;
				this.type(0);
				}
				break;
			}
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.methodBody();
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
		this.enterRule(_localctx, 28, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 223;
				this.match(XonParser.FOR);
				this.state = 230;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 224;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 227;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 225;
						this.match(XonParser.COMMA);
						this.state = 226;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 229;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 232;
				this.expression(0);
				this.state = 233;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 235;
				this.match(XonParser.WHILE);
				this.state = 236;
				this.expression(0);
				this.state = 237;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 239;
				this.match(XonParser.DO);
				this.state = 240;
				this.body();
				this.state = 241;
				this.match(XonParser.WHILE);
				this.state = 242;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 244;
				this.match(XonParser.IF);
				this.state = 245;
				this.expression(0);
				this.state = 246;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 249;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 247;
					this.match(XonParser.ELSE);
					this.state = 248;
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
				this.state = 251;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 252;
				this.match(XonParser.RETURN);
				this.state = 254;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 253;
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
				this.state = 256;
				this.match(XonParser.ACTUAL);
				this.state = 257;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 258;
					this.match(XonParser.NL);
					}
					}
					this.state = 261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 263;
				this.match(XonParser.EXPECT);
				this.state = 264;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 266;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 267;
				this.assignment();
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 268;
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
		this.enterRule(_localctx, 30, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				_localctx = new TypeAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 271;
				(_localctx as TypeAssignmentContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 272;
				this.match(XonParser.EQUAL);
				this.state = 273;
				this.type(0);
				}
				break;

			case 2:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 275;
					this.type(0);
					}
				}

				this.state = 278;
				this.match(XonParser.EQUAL);
				this.state = 279;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new HierarchyAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 280;
				(_localctx as HierarchyAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 281;
					this.type(0);
					}
				}

				this.state = 284;
				this.match(XonParser.NL);
				this.state = 285;
				this.match(XonParser.INDENT);
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 288;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
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
					case XonParser.UPPER_ID:
					case XonParser.LOWER_ID:
						{
						this.state = 286;
						this.assignment();
						}
						break;
					case XonParser.NL:
						{
						this.state = 287;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 290;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)) | (1 << (XonParser.NL - 38)))) !== 0));
				this.state = 292;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 293;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 294;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 295;
					this.match(XonParser.COMMA);
					this.state = 296;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 301;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 302;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 303;
				this.match(XonParser.EQUAL);
				this.state = 304;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 305;
				this.match(XonParser.OPEN_BRACE);
				this.state = 306;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 307;
					this.match(XonParser.COMMA);
					this.state = 308;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 314;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 315;
				this.match(XonParser.EQUAL);
				this.state = 316;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 317;
				this.match(XonParser.DOLLAR);
				this.state = 318;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 319;
				this.match(XonParser.EQUAL);
				this.state = 320;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 321;
				this.expression(0);
				this.state = 322;
				this.match(XonParser.DOT);
				this.state = 323;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 324;
				this.match(XonParser.EQUAL);
				this.state = 325;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 327;
				this.expression(0);
				this.state = 328;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 329;
				this.expression(0);
				this.state = 330;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 331;
				this.match(XonParser.EQUAL);
				this.state = 332;
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
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 337;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 338;
				this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 339;
				this.match(XonParser.DOLLAR);
				this.state = 340;
				(_localctx as InstanceMemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 4:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 341;
				(_localctx as InstantiationExpressionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 342;
					this.genericArguments();
					}
				}

				this.state = 345;
				this.arguments();
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 346;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 347;
				this.match(XonParser.OPEN_PAREN);
				this.state = 348;
				this.expression(0);
				this.state = 349;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 7:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 351;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)))) !== 0)) {
					{
					this.state = 352;
					this.expression(0);
					this.state = 357;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 353;
						this.match(XonParser.COMMA);
						this.state = 354;
						this.expression(0);
						}
						}
						this.state = 359;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 362;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 8:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 363;
				(_localctx as PrefixExpressionContext).__tset157 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (XonParser.PLUS - 31)) | (1 << (XonParser.MINUS - 31)) | (1 << (XonParser.EXCLAMATION - 31)))) !== 0))) {
					(_localctx as PrefixExpressionContext).__tset157 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				(_localctx as PrefixExpressionContext)._op.push((_localctx as PrefixExpressionContext).__tset157);
				this.state = 364;
				this.expression(12);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 365;
				this.match(XonParser.BACK_SLASH);
				this.state = 376;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 366;
					this.parameter();
					this.state = 371;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 367;
						this.match(XonParser.COMMA);
						this.state = 368;
						this.parameter();
						}
						}
						this.state = 373;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 374;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 378;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 438;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 436;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 382;
						(_localctx as PowExpressionContext)._s40 = this.match(XonParser.CARET);
						(_localctx as PowExpressionContext)._op.push((_localctx as PowExpressionContext)._s40);
						this.state = 383;
						(_localctx as PowExpressionContext)._right = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 385;
						(_localctx as MulDivModExpressionContext).__tset299 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.SLASH - 39)) | (1 << (XonParser.MODULO - 39)) | (1 << (XonParser.ASTERISK - 39)))) !== 0))) {
							(_localctx as MulDivModExpressionContext).__tset299 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as MulDivModExpressionContext)._op.push((_localctx as MulDivModExpressionContext).__tset299);
						this.state = 386;
						(_localctx as MulDivModExpressionContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 388;
						(_localctx as AddSubExpressionContext).__tset354 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
							(_localctx as AddSubExpressionContext).__tset354 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as AddSubExpressionContext)._op.push((_localctx as AddSubExpressionContext).__tset354);
						this.state = 389;
						(_localctx as AddSubExpressionContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 390;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 391;
						(_localctx as RangeExpressionContext)._s30 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s30);
						this.state = 392;
						(_localctx as RangeExpressionContext)._s30 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s30);
						this.state = 393;
						(_localctx as RangeExpressionContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 394;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 395;
						(_localctx as ElvisExpressionContext)._s45 = this.match(XonParser.QUESTION);
						(_localctx as ElvisExpressionContext)._op.push((_localctx as ElvisExpressionContext)._s45);
						this.state = 396;
						(_localctx as ElvisExpressionContext)._right = this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 397;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 398;
						(_localctx as RelationalExpressionContext).__tset481 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.LESS || _la === XonParser.GREAT)) {
							(_localctx as RelationalExpressionContext).__tset481 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext).__tset481);
						this.state = 400;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.EQUAL) {
							{
							this.state = 399;
							(_localctx as RelationalExpressionContext)._s42 = this.match(XonParser.EQUAL);
							(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext)._s42);
							}
						}

						this.state = 402;
						(_localctx as RelationalExpressionContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 403;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 404;
						(_localctx as EqualityExpressionContext).__tset539 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.EXCLAMATION)) {
							(_localctx as EqualityExpressionContext).__tset539 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext).__tset539);
						this.state = 405;
						(_localctx as EqualityExpressionContext)._s42 = this.match(XonParser.EQUAL);
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext)._s42);
						this.state = 406;
						(_localctx as EqualityExpressionContext)._right = this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 407;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 408;
						(_localctx as ConjunctionExpressionContext)._s47 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s47);
						this.state = 409;
						(_localctx as ConjunctionExpressionContext)._s47 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s47);
						this.state = 410;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 411;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 412;
						(_localctx as DisjunctionExpressionContext)._s33 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s33);
						this.state = 413;
						(_localctx as DisjunctionExpressionContext)._s33 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s33);
						this.state = 414;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(4);
						}
						break;

					case 10:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 415;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 416;
						this.match(XonParser.PIPE);
						this.state = 417;
						(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 418;
						this.match(XonParser.COLON);
						this.state = 419;
						this.expression(3);
						}
						break;

					case 11:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 420;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 422;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 421;
							this.genericArguments();
							}
						}

						this.state = 424;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 425;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 426;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 427;
						this.expression(0);
						this.state = 428;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 430;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 432;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QUESTION) {
							{
							this.state = 431;
							this.match(XonParser.QUESTION);
							}
						}

						this.state = 434;
						this.match(XonParser.DOT);
						this.state = 435;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						}
						break;
					}
					}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 442;
				(_localctx as PlainTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 444;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 443;
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
				this.state = 446;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 447;
					this.genericParameters();
					}
				}

				this.state = 450;
				this.typeParameters();
				this.state = 451;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 453;
				this.match(XonParser.OPEN_PAREN);
				this.state = 454;
				this.type(0);
				this.state = 455;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 472;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 470;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 459;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 460;
						this.match(XonParser.AMPERSAND);
						this.state = 461;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 462;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 463;
						this.match(XonParser.PIPE);
						this.state = 464;
						this.type(4);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 465;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 466;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 467;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 468;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 469;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
		this.enterRule(_localctx, 36, XonParser.RULE_literal);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 477;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 478;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 479;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 480;
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
		this.enterRule(_localctx, 38, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 483;
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
				this.state = 486;
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
		this.enterRule(_localctx, 40, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
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
		this.enterRule(_localctx, 42, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 491;
				this.type(0);
				}
			}

			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 494;
				this.match(XonParser.HASH);
				this.state = 495;
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
		this.enterRule(_localctx, 44, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(XonParser.OPEN_PAREN);
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 499;
				this.parameter();
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 500;
					this.match(XonParser.COMMA);
					this.state = 501;
					this.parameter();
					}
					}
					this.state = 506;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 509;
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
		this.enterRule(_localctx, 46, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 511;
				_localctx._name = this.match(XonParser.LOWER_ID);
				this.state = 512;
				this.match(XonParser.EQUAL);
				}
				break;
			}
			this.state = 515;
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
		this.enterRule(_localctx, 48, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(XonParser.OPEN_PAREN);
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)))) !== 0)) {
				{
				this.state = 518;
				this.argument();
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 519;
					this.match(XonParser.COMMA);
					this.state = 520;
					this.argument();
					}
					}
					this.state = 525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 528;
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
		this.enterRule(_localctx, 50, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(XonParser.OPEN_PAREN);
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 531;
				this.type(0);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 532;
					this.match(XonParser.COMMA);
					this.state = 533;
					this.type(0);
					}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 541;
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
		this.enterRule(_localctx, 52, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(XonParser.LESS);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 544;
				this.type(0);
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 545;
					this.match(XonParser.COMMA);
					this.state = 546;
					this.type(0);
					}
					}
					this.state = 551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 554;
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
		this.enterRule(_localctx, 54, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.match(XonParser.LESS);
			this.state = 557;
			_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
			_localctx._names.push(_localctx._UPPER_ID);
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 558;
				this.match(XonParser.COMMA);
				this.state = 559;
				_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
				_localctx._names.push(_localctx._UPPER_ID);
				}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 565;
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
		this.enterRule(_localctx, 56, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 567;
				this.match(XonParser.COLON);
				this.state = 569;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 568;
					this.statement();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 571;
				this.match(XonParser.COLON);
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 572;
					this.match(XonParser.NL);
					}
					}
					this.state = 577;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 578;
				this.match(XonParser.INDENT);
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.PREPROCESSOR - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)) | (1 << (XonParser.NL - 38)))) !== 0)) {
					{
					this.state = 581;
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
						this.state = 579;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 580;
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
				}
				this.state = 586;
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
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, XonParser.RULE_methodBody);
		let _la: number;
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.EQUAL:
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 589;
					this.match(XonParser.NL);
					}
					}
					this.state = 594;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 595;
				this.match(XonParser.EQUAL);
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 596;
					this.match(XonParser.NL);
					}
					}
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 602;
				this.statement();
				}
				break;
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 603;
				this.body();
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
		case 16:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 17:
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
			return this.precpred(this._ctx, 4);

		case 14:
			return this.precpred(this._ctx, 3);

		case 15:
			return this.precpred(this._ctx, 6);

		case 16:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u0261\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x07\x02" +
		"B\n\x02\f\x02\x0E\x02E\v\x02\x03\x02\x03\x02\x07\x02I\n\x02\f\x02\x0E" +
		"\x02L\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03S\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05`\n\x05\f\x05\x0E\x05c\v\x05\x05\x05e\n\x05\x03\x06" +
		"\x07\x06h\n\x06\f\x06\x0E\x06k\v\x06\x03\x06\x03\x06\x03\x06\x07\x06p" +
		"\n\x06\f\x06\x0E\x06s\v\x06\x03\x07\x05\x07v\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\x7F\n\b\x03\t\x03\t\x05\t\x83\n\t\x03" +
		"\t\x05\t\x86\n\t\x03\t\x03\t\x05\t\x8A\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x06\t\x92\n\t\r\t\x0E\t\x93\x03\t\x05\t\x97\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA6" +
		"\n\n\x03\n\x05\n\xA9\n\n\x05\n\xAB\n\n\x03\v\x03\v\x03\v\x05\v\xB0\n\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\xB8\n\v\r\v\x0E\v\xB9\x03\v" +
		"\x05\v\xBD\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xC6\n\f" +
		"\x03\r\x03\r\x05\r\xCA\n\r\x03\r\x05\r\xCD\n\r\x03\x0E\x03\x0E\x05\x0E" +
		"\xD1\n\x0E\x03\x0E\x03\x0E\x05\x0E\xD5\n\x0E\x03\x0F\x03\x0F\x05\x0F\xD9" +
		"\n\x0F\x03\x0F\x03\x0F\x05\x0F\xDD\n\x0F\x03\x0F\x05\x0F\xE0\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\xE6\n\x10\x03\x10\x05\x10\xE9\n\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xFC\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0101\n\x10\x03\x10\x03\x10" +
		"\x03\x10\x06\x10\u0106\n\x10\r\x10\x0E\x10\u0107\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u0110\n\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u0117\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u011D\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\u0123\n\x11\r\x11" +
		"\x0E\x11\u0124\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u012C\n" +
		"\x11\f\x11\x0E\x11\u012F\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\u0138\n\x11\f\x11\x0E\x11\u013B\v\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u0151\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u015A\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0166\n\x12\f\x12\x0E" +
		"\x12\u0169\v\x12\x05\x12\u016B\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x07\x12\u0174\n\x12\f\x12\x0E\x12\u0177\v\x12\x03" +
		"\x12\x03\x12\x05\x12\u017B\n\x12\x03\x12\x05\x12\u017E\n\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u0193\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01A9\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01B3\n\x12\x03\x12" +
		"\x03\x12\x07\x12\u01B7\n\x12\f\x12\x0E\x12\u01BA\v\x12\x03\x13\x03\x13" +
		"\x03\x13\x05\x13\u01BF\n\x13\x03\x13\x03\x13\x05\x13\u01C3\n\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01CC\n\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x07\x13\u01D9\n\x13\f\x13\x0E\x13\u01DC\v\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u01E4\n\x14\x03\x15\x06\x15" +
		"\u01E7\n\x15\r\x15\x0E\x15\u01E8\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17" +
		"\u01EF\n\x17\x03\x17\x03\x17\x05\x17\u01F3\n\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x07\x18\u01F9\n\x18\f\x18\x0E\x18\u01FC\v\x18\x05\x18\u01FE\n" +
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0204\n\x19\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u020C\n\x1A\f\x1A\x0E\x1A\u020F" +
		"\v\x1A\x05\x1A\u0211\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x07\x1B\u0219\n\x1B\f\x1B\x0E\x1B\u021C\v\x1B\x05\x1B\u021E\n\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0226\n\x1C\f" +
		"\x1C\x0E\x1C\u0229\v\x1C\x05\x1C\u022B\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u0233\n\x1D\f\x1D\x0E\x1D\u0236\v\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u023C\n\x1E\x03\x1E\x03\x1E\x07\x1E" +
		"\u0240\n\x1E\f\x1E\x0E\x1E\u0243\v\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E" +
		"\u0248\n\x1E\f\x1E\x0E\x1E\u024B\v\x1E\x03\x1E\x05\x1E\u024E\n\x1E\x03" +
		"\x1F\x07\x1F\u0251\n\x1F\f\x1F\x0E\x1F\u0254\v\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\u0258\n\x1F\f\x1F\x0E\x1F\u025B\v\x1F\x03\x1F\x03\x1F\x05\x1F\u025F" +
		"\n\x1F\x03\x1F\x02\x02\x04\"$ \x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02\x02\v\x05\x02\x15\x15\x1B\x1B\x1D\x1D\x04\x02&&,,\x05\x02!!((33" +
		"\x05\x02))..00\x04\x02!!((\x04\x02$$\'\'\x04\x02,,33\b\x02 !#$\',..01" +
		"33\x03\x02<=\x02\u02C8\x02C\x03\x02\x02\x02\x04R\x03\x02\x02\x02\x06T" +
		"\x03\x02\x02\x02\bW\x03\x02\x02\x02\ni\x03\x02\x02\x02\fu\x03\x02\x02" +
		"\x02\x0E~\x03\x02\x02\x02\x10\x80\x03\x02\x02\x02\x12\xAA\x03\x02\x02" +
		"\x02\x14\xAC\x03\x02\x02\x02\x16\xC5\x03\x02\x02\x02\x18\xC7\x03\x02\x02" +
		"\x02\x1A\xCE\x03\x02\x02\x02\x1C\xD6\x03\x02\x02\x02\x1E\u010F\x03\x02" +
		"\x02\x02 \u0150\x03\x02\x02\x02\"\u017D\x03\x02\x02\x02$\u01CB\x03\x02" +
		"\x02\x02&\u01E3\x03\x02\x02\x02(\u01E6\x03\x02\x02\x02*\u01EA\x03\x02" +
		"\x02\x02,\u01EC\x03\x02\x02\x02.\u01F4\x03\x02\x02\x020\u0203\x03\x02" +
		"\x02\x022\u0207\x03\x02\x02\x024\u0214\x03\x02\x02\x026\u0221\x03\x02" +
		"\x02\x028\u022E\x03\x02\x02\x02:\u024D\x03\x02\x02\x02<\u025E\x03\x02" +
		"\x02\x02>B\x05\b\x05\x02?B\x05\x06\x04\x02@B\x07>\x02\x02A>\x03\x02\x02" +
		"\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02" +
		"\x02CD\x03\x02\x02\x02DJ\x03\x02\x02\x02EC\x03\x02\x02\x02FI\x05\x04\x03" +
		"\x02GI\x07>\x02\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02" +
		"\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02K\x03\x03\x02\x02\x02LJ\x03\x02" +
		"\x02\x02MS\x05\x10\t\x02NS\x05\x14\v\x02OS\x05\x1A\x0E\x02PS\x05\x1C\x0F" +
		"\x02QS\x05\x18\r\x02RM\x03\x02\x02\x02RN\x03\x02\x02\x02RO\x03\x02\x02" +
		"\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x05\x03\x02\x02\x02TU\x07\x19" +
		"\x02\x02UV\x05\n\x06\x02V\x07\x03\x02\x02\x02WX\x07\x1A\x02\x02Xd\x05" +
		"\n\x06\x02YZ\x07\f\x02\x02Ze\x07=\x02\x02[\\\x07&\x02\x02\\a\x05\x0E\b" +
		"\x02]^\x07%\x02\x02^`\x05\x0E\b\x02_]\x03\x02\x02\x02`c\x03\x02\x02\x02" +
		"a_\x03\x02\x02\x02ab\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02" +
		"dY\x03\x02\x02\x02d[\x03\x02\x02\x02de\x03\x02\x02\x02e\t\x03\x02\x02" +
		"\x02fh\x07 \x02\x02gf\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02" +
		"\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02ki\x03\x02\x02\x02lq\x05\f\x07" +
		"\x02mn\x07 \x02\x02np\x05\f\x07\x02om\x03\x02\x02\x02ps\x03\x02\x02\x02" +
		"qo\x03\x02\x02\x02qr\x03\x02\x02\x02r\v\x03\x02\x02\x02sq\x03\x02\x02" +
		"\x02tv\x07\x1F\x02\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02\x02" +
		"\x02wx\x07=\x02\x02x\r\x03\x02\x02\x02y\x7F\x05*\x16\x02z{\x05*\x16\x02" +
		"{|\x07\f\x02\x02|}\x05*\x16\x02}\x7F\x03\x02\x02\x02~y\x03\x02\x02\x02" +
		"~z\x03\x02\x02\x02\x7F\x0F\x03\x02\x02\x02\x80\x82\x07<\x02\x02\x81\x83" +
		"\x058\x1D\x02\x82\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85" +
		"\x03\x02\x02\x02\x84\x86\x05.\x18\x02\x85\x84\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x88\x07\v\x02\x02\x88\x8A" +
		"\x05$\x13\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B" +
		"\x03\x02\x02\x02\x8B\x96\x07&\x02\x02\x8C\x97\x05\x12\n\x02\x8D\x8E\x07" +
		">\x02\x02\x8E\x91\x07\x03\x02\x02\x8F\x92\x05\x12\n\x02\x90\x92\x07>\x02" +
		"\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02" +
		"\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\x97\x07\x04\x02\x02\x96\x8C\x03\x02\x02\x02\x96\x8D\x03\x02\x02" +
		"\x02\x96\x97\x03\x02\x02\x02\x97\x11\x03\x02\x02\x02\x98\x99\x07 \x02" +
		"\x02\x99\x9A\x07 \x02\x02\x9A\x9B\x07 \x02\x02\x9B\x9C\x07<\x02\x02\x9C" +
		"\xAB\x052\x1A\x02\x9D\xAB\x05\x1A\x0E\x02\x9E\xAB\x05\x1C\x0F\x02\x9F" +
		"\xA0\x07\x12\x02\x02\xA0\xAB\x05:\x1E\x02\xA1\xA2\t\x02\x02\x02\xA2\xA3" +
		"\x05(\x15\x02\xA3\xA5\x05.\x18\x02\xA4\xA6\x05$\x13\x02\xA5\xA4\x03\x02" +
		"\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA9\x05<" +
		"\x1F\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02" +
		"\x02\x02\xAA\x98\x03\x02\x02\x02\xAA\x9D\x03\x02\x02\x02\xAA\x9E\x03\x02" +
		"\x02\x02\xAA\x9F\x03\x02\x02\x02\xAA\xA1\x03\x02\x02\x02\xAB\x13\x03\x02" +
		"\x02\x02\xAC\xAD\x07\x1E\x02\x02\xAD\xAF\x07<\x02\x02\xAE\xB0\x058\x1D" +
		"\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02\x02" +
		"\x02\xB1\xBC\x07&\x02\x02\xB2\xBD\x05\x16\f\x02\xB3\xB4\x07>\x02\x02\xB4" +
		"\xB7\x07\x03\x02\x02\xB5\xB8\x05\x16\f\x02\xB6\xB8\x07>\x02\x02\xB7\xB5" +
		"\x03\x02\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xB7" +
		"\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD" +
		"\x07\x04\x02\x02\xBC\xB2\x03\x02\x02\x02\xBC\xB3\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\x15\x03\x02\x02\x02\xBE\xBF\x07 \x02\x02\xBF\xC0" +
		"\x07 \x02\x02\xC0\xC1\x07 \x02\x02\xC1\xC2\x07<\x02\x02\xC2\xC6\x052\x1A" +
		"\x02\xC3\xC6\x05\x1A\x0E\x02\xC4\xC6\x05\x1C\x0F\x02\xC5\xBE\x03\x02\x02" +
		"\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\x17\x03\x02\x02" +
		"\x02\xC7\xC9\x07\x13\x02\x02\xC8\xCA\x05\"\x12\x02\xC9\xC8\x03\x02\x02" +
		"\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB\xCD\x05:\x1E" +
		"\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\x19\x03\x02\x02" +
		"\x02\xCE\xD0\x07=\x02\x02\xCF\xD1\x05$\x13\x02\xD0\xCF\x03\x02\x02\x02" +
		"\xD0\xD1\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD3\t\x03\x02\x02" +
		"\xD3\xD5\x05\"\x12\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
		"\xD5\x1B\x03\x02\x02\x02\xD6\xD8\x07=\x02\x02\xD7\xD9\x058\x1D\x02\xD8" +
		"\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xDC\x05.\x18\x02\xDB\xDD\x05$\x13\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD" +
		"\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xE0\x05<\x1F\x02\xDF\xDE" +
		"\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\x1D\x03\x02\x02\x02\xE1\xE8" +
		"\x07\x10\x02\x02\xE2\xE5\x07=\x02\x02\xE3\xE4\x07%\x02\x02\xE4\xE6\x07" +
		"=\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03" +
		"\x02\x02\x02\xE7\xE9\x07\x0F\x02\x02\xE8\xE2\x03\x02\x02\x02\xE8\xE9\x03" +
		"\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x05\"\x12\x02\xEB\xEC\x05" +
		":\x1E\x02\xEC\u0110\x03\x02\x02\x02\xED\xEE\x07\x16\x02\x02\xEE\xEF\x05" +
		"\"\x12\x02\xEF\xF0\x05:\x1E\x02\xF0\u0110\x03\x02\x02\x02\xF1\xF2\x07" +
		"\r\x02\x02\xF2\xF3\x05:\x1E\x02\xF3\xF4\x07\x16\x02\x02\xF4\xF5\x05\"" +
		"\x12\x02\xF5\u0110\x03\x02\x02\x02\xF6\xF7\x07\x0E\x02\x02\xF7\xF8\x05" +
		"\"\x12\x02\xF8\xFB\x05:\x1E\x02\xF9\xFA\x07\x11\x02\x02\xFA\xFC\x05:\x1E" +
		"\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\u0110\x03\x02" +
		"\x02\x02\xFD\u0110\x07\x14\x02\x02\xFE\u0100\x07\x1C\x02\x02\xFF\u0101" +
		"\x05\"\x12\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0110\x03\x02\x02\x02\u0102\u0103\x07\x17\x02\x02\u0103\u0105\x05\"\x12" +
		"\x02\u0104\u0106\x07>\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0107" +
		"\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02" +
		"\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x07\x18\x02\x02\u010A\u010B\x05" +
		"\"\x12\x02\u010B\u0110\x03\x02\x02\x02\u010C\u0110\x07;\x02\x02\u010D" +
		"\u0110\x05 \x11\x02\u010E\u0110\x05\"\x12\x02\u010F\xE1\x03\x02\x02\x02" +
		"\u010F\xED\x03\x02\x02\x02\u010F\xF1\x03\x02\x02\x02\u010F\xF6\x03\x02" +
		"\x02\x02\u010F\xFD\x03\x02\x02\x02\u010F\xFE\x03\x02\x02\x02\u010F\u0102" +
		"\x03\x02\x02\x02\u010F\u010C\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02" +
		"\u010F\u010E\x03\x02\x02\x02\u0110\x1F\x03\x02\x02\x02\u0111\u0112\x07" +
		"<\x02\x02\u0112\u0113\x07,\x02\x02\u0113\u0151\x05$\x13\x02\u0114\u0116" +
		"\x07=\x02\x02\u0115\u0117\x05$\x13\x02\u0116\u0115\x03\x02\x02\x02\u0116" +
		"\u0117\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x07,\x02" +
		"\x02\u0119\u0151\x05\"\x12\x02\u011A\u011C\x07=\x02\x02\u011B\u011D\x05" +
		"$\x13\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
		"\u011E\x03\x02\x02\x02\u011E\u011F\x07>\x02\x02\u011F\u0122\x07\x03\x02" +
		"\x02\u0120\u0123\x05 \x11\x02\u0121\u0123\x07>\x02\x02\u0122\u0120\x03" +
		"\x02\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02" +
		"\x02\x02\u0126\u0151\x07\x04\x02\x02\u0127\u0128\x07\x05\x02\x02\u0128" +
		"\u012D\x07=\x02\x02\u0129\u012A\x07%\x02\x02\u012A\u012C\x07=\x02\x02" +
		"\u012B\u0129\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012B\x03" +
		"\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F" +
		"\u012D\x03\x02\x02\x02\u0130\u0131\x07\x06\x02\x02\u0131\u0132\x07,\x02" +
		"\x02\u0132\u0151\x05\"\x12\x02\u0133\u0134\x07\t\x02\x02\u0134\u0139\x07" +
		"=\x02\x02\u0135\u0136\x07%\x02\x02\u0136\u0138\x07=\x02\x02\u0137\u0135" +
		"\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02" +
		"\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x03\x02\x02\x02\u013B\u0139\x03" +
		"\x02\x02\x02\u013C\u013D\x07\n\x02\x02\u013D\u013E\x07,\x02\x02\u013E" +
		"\u0151\x05\"\x12\x02\u013F\u0140\x07-\x02\x02\u0140\u0141\x07=\x02\x02" +
		"\u0141\u0142\x07,\x02\x02\u0142\u0151\x05\"\x12\x02\u0143\u0144\x05\"" +
		"\x12\x02\u0144\u0145\x07 \x02\x02\u0145\u0146\x07=\x02\x02\u0146\u0147" +
		"\x07,\x02\x02\u0147\u0148\x05\"\x12\x02\u0148\u0151\x03\x02\x02\x02\u0149" +
		"\u014A\x05\"\x12\x02\u014A\u014B\x07\x05\x02\x02\u014B\u014C\x05\"\x12" +
		"\x02\u014C\u014D\x07\x06\x02\x02\u014D\u014E\x07,\x02\x02\u014E\u014F" +
		"\x05\"\x12\x02\u014F\u0151\x03\x02\x02\x02\u0150\u0111\x03\x02\x02\x02" +
		"\u0150\u0114\x03\x02\x02\x02\u0150\u011A\x03\x02\x02\x02\u0150\u0127\x03" +
		"\x02\x02\x02\u0150\u0133\x03\x02\x02\x02\u0150\u013F\x03\x02\x02\x02\u0150" +
		"\u0143\x03\x02\x02\x02\u0150\u0149\x03\x02\x02\x02\u0151!\x03\x02\x02" +
		"\x02\u0152\u0153\b\x12\x01\x02\u0153\u017E\x07=\x02\x02\u0154\u017E\x07" +
		"-\x02\x02\u0155\u0156\x07-\x02\x02\u0156\u017E\x07=\x02\x02\u0157\u0159" +
		"\x07<\x02\x02\u0158\u015A\x056\x1C\x02\u0159\u0158\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u017E\x052\x1A" +
		"\x02\u015C\u017E\x05&\x14\x02\u015D\u015E\x07\x07\x02\x02\u015E\u015F" +
		"\x05\"\x12\x02\u015F\u0160\x07\b\x02\x02\u0160\u017E\x03\x02\x02\x02\u0161" +
		"\u016A\x07\x05\x02\x02\u0162\u0167\x05\"\x12\x02\u0163\u0164\x07%\x02" +
		"\x02\u0164\u0166\x05\"\x12\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0169" +
		"\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
		"\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u0162\x03" +
		"\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
		"\u017E\x07\x06\x02\x02\u016D\u016E\t\x04\x02\x02\u016E\u017E\x05\"\x12" +
		"\x0E\u016F\u017A\x074\x02\x02\u0170\u0175\x05,\x17\x02\u0171\u0172\x07" +
		"%\x02\x02\u0172\u0174\x05,\x17\x02\u0173\u0171\x03\x02\x02\x02\u0174\u0177" +
		"\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
		"\u0176\u0178\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u0179\x07" +
		"&\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0170\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E\x05\"\x12" +
		"\x03\u017D\u0152\x03\x02\x02\x02\u017D\u0154\x03\x02\x02\x02\u017D\u0155" +
		"\x03\x02\x02\x02\u017D\u0157\x03\x02\x02\x02\u017D\u015C\x03\x02\x02\x02" +
		"\u017D\u015D\x03\x02\x02\x02\u017D\u0161\x03\x02\x02\x02\u017D\u016D\x03" +
		"\x02\x02\x02\u017D\u016F\x03\x02\x02\x02\u017E\u01B8\x03\x02\x02\x02\u017F" +
		"\u0180\f\r\x02\x02\u0180\u0181\x07*\x02\x02\u0181\u01B7\x05\"\x12\x0E" +
		"\u0182\u0183\f\f\x02\x02\u0183\u0184\t\x05\x02\x02\u0184\u01B7\x05\"\x12" +
		"\r\u0185\u0186\f\v\x02\x02\u0186\u0187\t\x06\x02\x02\u0187\u01B7\x05\"" +
		"\x12\f\u0188\u0189\f\n\x02\x02\u0189\u018A\x07 \x02\x02\u018A\u018B\x07" +
		" \x02\x02\u018B\u01B7\x05\"\x12\v\u018C\u018D\f\t\x02\x02\u018D\u018E" +
		"\x07/\x02\x02\u018E\u01B7\x05\"\x12\n\u018F\u0190\f\b\x02\x02\u0190\u0192" +
		"\t\x07\x02\x02\u0191\u0193\x07,\x02\x02\u0192\u0191\x03\x02\x02\x02\u0192" +
		"\u0193\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u01B7\x05\"\x12" +
		"\t\u0195\u0196\f\x07\x02\x02\u0196\u0197\t\b\x02\x02\u0197\u0198\x07," +
		"\x02\x02\u0198\u01B7\x05\"\x12\b\u0199\u019A\f\x06\x02\x02\u019A\u019B" +
		"\x071\x02\x02\u019B\u019C\x071\x02\x02\u019C\u01B7\x05\"\x12\x07\u019D" +
		"\u019E\f\x05\x02\x02\u019E\u019F\x07#\x02\x02\u019F\u01A0\x07#\x02\x02" +
		"\u01A0\u01B7\x05\"\x12\x06\u01A1\u01A2\f\x04\x02\x02\u01A2\u01A3\x07#" +
		"\x02\x02\u01A3\u01A4\x07=\x02\x02\u01A4\u01A5\x07&\x02\x02\u01A5\u01B7" +
		"\x05\"\x12\x05\u01A6\u01A8\f\x13\x02\x02\u01A7\u01A9\x056\x1C\x02\u01A8" +
		"\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA\x03\x02" +
		"\x02\x02\u01AA\u01B7\x052\x1A\x02\u01AB\u01AC\f\x12\x02\x02\u01AC\u01AD" +
		"\x07\x05\x02\x02\u01AD\u01AE\x05\"\x12\x02\u01AE\u01AF\x07\x06\x02\x02" +
		"\u01AF\u01B7\x03\x02\x02\x02\u01B0\u01B2\f\x0F\x02\x02\u01B1\u01B3\x07" +
		"/\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3" +
		"\u01B4\x03\x02\x02\x02\u01B4\u01B5\x07 \x02\x02\u01B5\u01B7\x07=\x02\x02" +
		"\u01B6\u017F\x03\x02\x02\x02\u01B6\u0182\x03\x02\x02\x02\u01B6\u0185\x03" +
		"\x02\x02\x02\u01B6\u0188\x03\x02\x02\x02\u01B6\u018C\x03\x02\x02\x02\u01B6" +
		"\u018F\x03\x02\x02\x02\u01B6\u0195\x03\x02\x02\x02\u01B6\u0199\x03\x02" +
		"\x02\x02\u01B6\u019D\x03\x02\x02\x02\u01B6\u01A1\x03\x02\x02\x02\u01B6" +
		"\u01A6\x03\x02\x02\x02\u01B6\u01AB\x03\x02\x02\x02\u01B6\u01B0\x03\x02" +
		"\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8" +
		"\u01B9\x03\x02\x02\x02\u01B9#\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02" +
		"\x02\u01BB\u01BC\b\x13\x01\x02\u01BC\u01BE\x07<\x02\x02\u01BD\u01BF\x05" +
		"6\x1C\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF" +
		"\u01CC\x03\x02\x02\x02\u01C0\u01CC\x05&\x14\x02\u01C1\u01C3\x058\x1D\x02" +
		"\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03" +
		"\x02\x02\x02\u01C4\u01C5\x054\x1B\x02\u01C5\u01C6\x05$\x13\x04\u01C6\u01CC" +
		"\x03\x02\x02\x02\u01C7\u01C8\x07\x07\x02\x02\u01C8\u01C9\x05$\x13\x02" +
		"\u01C9\u01CA\x07\b\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01BB\x03" +
		"\x02\x02\x02\u01CB\u01C0\x03\x02\x02\x02\u01CB\u01C2\x03\x02\x02\x02\u01CB" +
		"\u01C7\x03\x02\x02\x02\u01CC\u01DA\x03\x02\x02\x02\u01CD\u01CE\f\x06\x02" +
		"\x02\u01CE\u01CF\x071\x02\x02\u01CF\u01D9\x05$\x13\x07\u01D0\u01D1\f\x05" +
		"\x02\x02\u01D1\u01D2\x07#\x02\x02\u01D2\u01D9\x05$\x13\x06\u01D3\u01D4" +
		"\f\b\x02\x02\u01D4\u01D9\x07/\x02\x02\u01D5\u01D6\f\x07\x02\x02\u01D6" +
		"\u01D7\x07\x05\x02\x02\u01D7\u01D9\x07\x06\x02\x02\u01D8\u01CD\x03\x02" +
		"\x02\x02\u01D8\u01D0\x03\x02\x02\x02\u01D8\u01D3\x03\x02\x02\x02\u01D8" +
		"\u01D5\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02" +
		"\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB%\x03\x02\x02\x02\u01DC\u01DA" +
		"\x03\x02\x02\x02\u01DD\u01E4\x075\x02\x02\u01DE\u01E4\x078\x02\x02\u01DF" +
		"\u01E4\x077\x02\x02\u01E0\u01E4\x076\x02\x02\u01E1\u01E4\x079\x02\x02" +
		"\u01E2\u01E4\x07:\x02\x02\u01E3\u01DD\x03\x02\x02\x02\u01E3\u01DE\x03" +
		"\x02\x02\x02\u01E3\u01DF\x03\x02\x02\x02\u01E3\u01E0\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\'\x03\x02\x02" +
		"\x02\u01E5\u01E7\t\t\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03" +
		"\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9" +
		")\x03\x02\x02\x02\u01EA\u01EB\t\n\x02\x02\u01EB+\x03\x02\x02\x02\u01EC" +
		"\u01EE\x07=\x02\x02\u01ED\u01EF\x05$\x13\x02\u01EE\u01ED\x03\x02\x02\x02" +
		"\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01F1\x07" +
		"\"\x02\x02\u01F1\u01F3\x07<\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3-\x03\x02\x02\x02\u01F4\u01FD\x07\x07\x02" +
		"\x02\u01F5\u01FA\x05,\x17\x02\u01F6\u01F7\x07%\x02\x02\u01F7\u01F9\x05" +
		",\x17\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB" +
		"\u01FE\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01F5\x03\x02" +
		"\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF" +
		"\u0200\x07\b\x02\x02\u0200/\x03\x02\x02\x02\u0201\u0202\x07=\x02\x02\u0202" +
		"\u0204\x07,\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02" +
		"\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x05\"\x12\x02\u02061\x03" +
		"\x02\x02\x02\u0207\u0210\x07\x07\x02\x02\u0208\u020D\x050\x19\x02\u0209" +
		"\u020A\x07%\x02\x02\u020A\u020C\x050\x19\x02\u020B\u0209\x03\x02\x02\x02" +
		"\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020E\x03" +
		"\x02\x02\x02\u020E\u0211\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u0210" +
		"\u0208\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02" +
		"\x02\x02\u0212\u0213\x07\b\x02\x02\u02133\x03\x02\x02\x02\u0214\u021D" +
		"\x07\x07\x02\x02\u0215\u021A\x05$\x13\x02\u0216\u0217\x07%\x02\x02\u0217" +
		"\u0219\x05$\x13\x02\u0218\u0216\x03\x02\x02\x02\u0219\u021C\x03\x02\x02" +
		"\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021E" +
		"\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u0215\x03\x02\x02\x02" +
		"\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x07" +
		"\b\x02\x02\u02205\x03\x02\x02\x02\u0221\u022A\x07$\x02\x02\u0222\u0227" +
		"\x05$\x13\x02\u0223\u0224\x07%\x02\x02\u0224\u0226\x05$\x13\x02\u0225" +
		"\u0223\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225\x03\x02" +
		"\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u022B\x03\x02\x02\x02\u0229" +
		"\u0227\x03\x02\x02\x02\u022A\u0222\x03\x02\x02\x02\u022A\u022B\x03\x02" +
		"\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022D\x07\'\x02\x02\u022D7" +
		"\x03\x02\x02\x02\u022E\u022F\x07$\x02\x02\u022F\u0234\x07<\x02\x02\u0230" +
		"\u0231\x07%\x02\x02\u0231\u0233\x07<\x02\x02\u0232\u0230\x03\x02\x02\x02" +
		"\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03" +
		"\x02\x02\x02\u0235\u0237\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0237" +
		"\u0238\x07\'\x02\x02\u02389\x03\x02\x02\x02\u0239\u023B\x07&\x02\x02\u023A" +
		"\u023C\x05\x1E\x10\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u024E\x03\x02\x02\x02\u023D\u0241\x07&\x02\x02\u023E\u0240" +
		"\x07>\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02" +
		"\u0241\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x03" +
		"\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0244\u0249\x07\x03\x02\x02\u0245" +
		"\u0248\x05\x1E\x10\x02\u0246\u0248\x07>\x02\x02\u0247\u0245\x03\x02\x02" +
		"\x02\u0247\u0246\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247" +
		"\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02" +
		"\u024B\u0249\x03\x02\x02\x02\u024C\u024E\x07\x04\x02\x02\u024D\u0239\x03" +
		"\x02\x02\x02\u024D\u023D\x03\x02\x02\x02\u024E;\x03\x02\x02\x02\u024F" +
		"\u0251\x07>\x02\x02\u0250\u024F\x03\x02\x02\x02\u0251\u0254\x03\x02\x02" +
		"\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0255" +
		"\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0259\x07,\x02\x02" +
		"\u0256\u0258\x07>\x02\x02\u0257\u0256\x03\x02\x02\x02\u0258\u025B\x03" +
		"\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A" +
		"\u025C\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025F\x05\x1E" +
		"\x10\x02\u025D\u025F\x05:\x1E\x02\u025E\u0252\x03\x02\x02\x02\u025E\u025D" +
		"\x03\x02\x02\x02\u025F=\x03\x02\x02\x02UACHJRadiqu~\x82\x85\x89\x91\x93" +
		"\x96\xA5\xA8\xAA\xAF\xB7\xB9\xBC\xC5\xC9\xCC\xD0\xD4\xD8\xDC\xDF\xE5\xE8" +
		"\xFB\u0100\u0107\u010F\u0116\u011C\u0122\u0124\u012D\u0139\u0150\u0159" +
		"\u0167\u016A\u0175\u017A\u017D\u0192\u01A8\u01B2\u01B6\u01B8\u01BE\u01C2" +
		"\u01CB\u01D8\u01DA\u01E3\u01E8\u01EE\u01F2\u01FA\u01FD\u0203\u020D\u0210" +
		"\u021A\u021D\u0227\u022A\u0234\u023B\u0241\u0247\u0249\u024D\u0252\u0259" +
		"\u025E";
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
export class ClassTypeSourceMemberContext extends SourceMemberContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(ctx: SourceMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExtensionTypeSourceMemberContext extends SourceMemberContext {
	public extensionType(): ExtensionTypeContext {
		return this.getRuleContext(0, ExtensionTypeContext);
	}
	constructor(ctx: SourceMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PropertySourceMemberContext extends SourceMemberContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	constructor(ctx: SourceMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodSourceMemberContext extends SourceMemberContext {
	public method(): MethodContext {
		return this.getRuleContext(0, MethodContext);
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


export class ClassTypeContext extends ParserRuleContext {
	public _name!: Token;
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
	public classTypeMember(): ClassTypeMemberContext[];
	public classTypeMember(i: number): ClassTypeMemberContext;
	public classTypeMember(i?: number): ClassTypeMemberContext | ClassTypeMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassTypeMemberContext);
		} else {
			return this.getRuleContext(i, ClassTypeMemberContext);
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
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_classType; }
}


export class ClassTypeMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_classTypeMember; }
	public copyFrom(ctx: ClassTypeMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class IncludeClassTypeMemberContext extends ClassTypeMemberContext {
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
	constructor(ctx: ClassTypeMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PropertyClassTypeMemberContext extends ClassTypeMemberContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	constructor(ctx: ClassTypeMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodClassTypeMemberContext extends ClassTypeMemberContext {
	public method(): MethodContext {
		return this.getRuleContext(0, MethodContext);
	}
	constructor(ctx: ClassTypeMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InitClassTypeMemberContext extends ClassTypeMemberContext {
	public INIT(): TerminalNode { return this.getToken(XonParser.INIT, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: ClassTypeMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorClassTypeMemberContext extends ClassTypeMemberContext {
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
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	constructor(ctx: ClassTypeMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExtensionTypeContext extends ParserRuleContext {
	public _name!: Token;
	public EXTENSION(): TerminalNode { return this.getToken(XonParser.EXTENSION, 0); }
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public extensionTypeMember(): ExtensionTypeMemberContext[];
	public extensionTypeMember(i: number): ExtensionTypeMemberContext;
	public extensionTypeMember(i?: number): ExtensionTypeMemberContext | ExtensionTypeMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionTypeMemberContext);
		} else {
			return this.getRuleContext(i, ExtensionTypeMemberContext);
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
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_extensionType; }
}


export class ExtensionTypeMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_extensionTypeMember; }
	public copyFrom(ctx: ExtensionTypeMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class IncludeExtensionTypeMemberContext extends ExtensionTypeMemberContext {
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
	constructor(ctx: ExtensionTypeMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PropertyExtensionTypeMemberContext extends ExtensionTypeMemberContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	constructor(ctx: ExtensionTypeMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExtensionTypeMemberContext extends ExtensionTypeMemberContext {
	public method(): MethodContext {
		return this.getRuleContext(0, MethodContext);
	}
	constructor(ctx: ExtensionTypeMemberContext) {
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


export class PropertyContext extends ParserRuleContext {
	public _name!: Token;
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_property; }
}


export class MethodContext extends ParserRuleContext {
	public _name!: Token;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_method; }
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
export class TypeAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class HierarchyAssignmentContext extends AssignmentContext {
	public _name!: Token;
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
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
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
	public _s49!: Token;
	public _op: Token[] = [];
	public _s38!: Token;
	public _s31!: Token;
	public __tset157!: Token;
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
	public __tset299!: Token;
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
	public __tset354!: Token;
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
	public __tset481!: Token;
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
	public __tset539!: Token;
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
export class PlainTypeContext extends TypeContext {
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


export class MethodBodyContext extends ParserRuleContext {
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_methodBody; }
}


