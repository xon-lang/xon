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
	public static readonly TEST = 16;
	public static readonly BREAK = 17;
	public static readonly INFIX = 18;
	public static readonly WHILE = 19;
	public static readonly ACTUAL = 20;
	public static readonly EXPECT = 21;
	public static readonly EXPORT = 22;
	public static readonly IMPORT = 23;
	public static readonly PREFIX = 24;
	public static readonly RETURN = 25;
	public static readonly POSTFIX = 26;
	public static readonly EXTENSION = 27;
	public static readonly AT = 28;
	public static readonly DOT = 29;
	public static readonly RANGE = 30;
	public static readonly SPREAD = 31;
	public static readonly PLUS = 32;
	public static readonly HASH = 33;
	public static readonly PIPE = 34;
	public static readonly LESS = 35;
	public static readonly LESS_EQUAL = 36;
	public static readonly COMMA = 37;
	public static readonly COLON = 38;
	public static readonly GREAT = 39;
	public static readonly GREAT_EQUAL = 40;
	public static readonly MINUS = 41;
	public static readonly SLASH = 42;
	public static readonly CARET = 43;
	public static readonly TILDE = 44;
	public static readonly ASSIGN = 45;
	public static readonly EQUAL = 46;
	public static readonly NOT_EQUAL = 47;
	public static readonly MODULO = 48;
	public static readonly QUESTION = 49;
	public static readonly COALESCING = 50;
	public static readonly ASTERISK = 51;
	public static readonly AMPERSAND = 52;
	public static readonly AND = 53;
	public static readonly OR = 54;
	public static readonly UNDERSCORE = 55;
	public static readonly EXCLAMATION = 56;
	public static readonly BACK_SLASH = 57;
	public static readonly INSTANCE = 58;
	public static readonly INSTANCE_MEMBER = 59;
	public static readonly FLOAT_LITERAL = 60;
	public static readonly INTEGER_LITERAL = 61;
	public static readonly CHAR_LITERAL = 62;
	public static readonly STRING_LITERAL = 63;
	public static readonly REGEX_LITERAL = 64;
	public static readonly PREPROCESSOR = 65;
	public static readonly UPPER_ID = 66;
	public static readonly LOWER_ID = 67;
	public static readonly NL = 68;
	public static readonly WS = 69;
	public static readonly COMMENT = 70;
	public static readonly RULE_source = 0;
	public static readonly RULE_export = 1;
	public static readonly RULE_library = 2;
	public static readonly RULE_libraryPath = 3;
	public static readonly RULE_libraryPathPart = 4;
	public static readonly RULE_libraryMember = 5;
	public static readonly RULE_definition = 6;
	public static readonly RULE_definitionBaseType = 7;
	public static readonly RULE_attribute = 8;
	public static readonly RULE_attributeHeader = 9;
	public static readonly RULE_attributeName = 10;
	public static readonly RULE_attributeModifier = 11;
	public static readonly RULE_statement = 12;
	public static readonly RULE_assignment = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_type = 15;
	public static readonly RULE_literal = 16;
	public static readonly RULE_operator = 17;
	public static readonly RULE_expressionParameter = 18;
	public static readonly RULE_functionParameters = 19;
	public static readonly RULE_mapArgument = 20;
	public static readonly RULE_functionArguments = 21;
	public static readonly RULE_indexerArguments = 22;
	public static readonly RULE_typeParameter = 23;
	public static readonly RULE_typeParameters = 24;
	public static readonly RULE_typeArguments = 25;
	public static readonly RULE_body = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "libraryPath", "libraryPathPart", "libraryMember", 
		"definition", "definitionBaseType", "attribute", "attributeHeader", "attributeName", 
		"attributeModifier", "statement", "assignment", "expression", "type", 
		"literal", "operator", "expressionParameter", "functionParameters", "mapArgument", 
		"functionArguments", "indexerArguments", "typeParameter", "typeParameters", 
		"typeArguments", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'test'", "'break'", 
		"'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'@'", "'.'", "'..'", 
		"'...'", "'+'", "'#'", "'|'", "'<'", "'<='", "','", "':'", "'>'", "'>='", 
		"'-'", "'/'", "'^'", "'~'", "'='", "'=='", "'!='", "'%'", "'?'", "'?.'", 
		"'*'", "'&'", "'&&'", "'||'", "'_'", "'!'", "'\\'", "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "EXTENSION", "AT", 
		"DOT", "RANGE", "SPREAD", "PLUS", "HASH", "PIPE", "LESS", "LESS_EQUAL", 
		"COMMA", "COLON", "GREAT", "GREAT_EQUAL", "MINUS", "SLASH", "CARET", "TILDE", 
		"ASSIGN", "EQUAL", "NOT_EQUAL", "MODULO", "QUESTION", "COALESCING", "ASTERISK", 
		"AMPERSAND", "AND", "OR", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "INSTANCE", 
		"INSTANCE_MEMBER", "FLOAT_LITERAL", "INTEGER_LITERAL", "CHAR_LITERAL", 
		"STRING_LITERAL", "REGEX_LITERAL", "PREPROCESSOR", "UPPER_ID", "LOWER_ID", 
		"NL", "WS", "COMMENT",
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
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.ASTERISK - 51)) | (1 << (XonParser.AND - 51)) | (1 << (XonParser.OR - 51)) | (1 << (XonParser.EXCLAMATION - 51)) | (1 << (XonParser.INSTANCE - 51)) | (1 << (XonParser.UPPER_ID - 51)) | (1 << (XonParser.LOWER_ID - 51)) | (1 << (XonParser.NL - 51)))) !== 0)) {
				{
				this.state = 65;
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
					this.attribute();
					}
					break;

				case 3:
					{
					this.state = 64;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 69;
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
			this.state = 70;
			this.match(XonParser.EXPORT);
			this.state = 71;
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
			this.state = 73;
			this.match(XonParser.IMPORT);
			this.state = 74;
			this.libraryPath();
			this.state = 86;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 75;
				this.match(XonParser.AS);
				this.state = 76;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 77;
				this.match(XonParser.COLON);
				this.state = 78;
				this.libraryMember();
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 79;
					this.match(XonParser.COMMA);
					this.state = 80;
					this.libraryMember();
					}
					}
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.EOF:
			case XonParser.INFIX:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.PREFIX:
			case XonParser.POSTFIX:
			case XonParser.RANGE:
			case XonParser.PLUS:
			case XonParser.LESS:
			case XonParser.GREAT:
			case XonParser.MINUS:
			case XonParser.SLASH:
			case XonParser.CARET:
			case XonParser.EQUAL:
			case XonParser.MODULO:
			case XonParser.ASTERISK:
			case XonParser.AND:
			case XonParser.OR:
			case XonParser.EXCLAMATION:
			case XonParser.INSTANCE:
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
		this.enterRule(_localctx, 6, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 88;
				_localctx._s29 = this.match(XonParser.DOT);
				_localctx._points.push(_localctx._s29);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.libraryPathPart();
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 95;
				this.match(XonParser.DOT);
				this.state = 96;
				this.libraryPathPart();
				}
				}
				this.state = 101;
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
		this.enterRule(_localctx, 8, XonParser.RULE_libraryPathPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AT) {
				{
				this.state = 102;
				this.match(XonParser.AT);
				}
			}

			this.state = 105;
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
		this.enterRule(_localctx, 10, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 108;
				this.match(XonParser.AS);
				this.state = 109;
				_localctx._alias = this.match(XonParser.UPPER_ID);
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_definition);
		let _la: number;
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new ClassDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				(_localctx as ClassDefinitionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 114;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 113;
					this.typeParameters();
					}
					break;
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN) {
					{
					this.state = 116;
					this.functionParameters();
					}
				}

				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 119;
					this.definitionBaseType();
					}
				}

				this.state = 135;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 123;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 122;
						this.match(XonParser.NL);
						}
						}
						this.state = 125;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === XonParser.NL);
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
						case XonParser.INFIX:
						case XonParser.PREFIX:
						case XonParser.POSTFIX:
						case XonParser.RANGE:
						case XonParser.PLUS:
						case XonParser.LESS:
						case XonParser.GREAT:
						case XonParser.MINUS:
						case XonParser.SLASH:
						case XonParser.CARET:
						case XonParser.EQUAL:
						case XonParser.MODULO:
						case XonParser.ASTERISK:
						case XonParser.AND:
						case XonParser.OR:
						case XonParser.EXCLAMATION:
						case XonParser.INSTANCE:
						case XonParser.LOWER_ID:
							{
							this.state = 128;
							this.attribute();
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
					} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.ASTERISK - 51)) | (1 << (XonParser.AND - 51)) | (1 << (XonParser.OR - 51)) | (1 << (XonParser.EXCLAMATION - 51)) | (1 << (XonParser.INSTANCE - 51)) | (1 << (XonParser.LOWER_ID - 51)) | (1 << (XonParser.NL - 51)))) !== 0));
					this.state = 134;
					this.match(XonParser.DEDENT);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new AttributeDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				(_localctx as AttributeDefinitionContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 139;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 138;
					this.typeParameters();
					}
					break;
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 141;
					this.definitionBaseType();
					}
				}

				this.state = 157;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 144;
						this.match(XonParser.NL);
						}
						}
						this.state = 147;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === XonParser.NL);
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
						case XonParser.INFIX:
						case XonParser.PREFIX:
						case XonParser.POSTFIX:
						case XonParser.RANGE:
						case XonParser.PLUS:
						case XonParser.LESS:
						case XonParser.GREAT:
						case XonParser.MINUS:
						case XonParser.SLASH:
						case XonParser.CARET:
						case XonParser.EQUAL:
						case XonParser.MODULO:
						case XonParser.ASTERISK:
						case XonParser.AND:
						case XonParser.OR:
						case XonParser.EXCLAMATION:
						case XonParser.INSTANCE:
						case XonParser.LOWER_ID:
							{
							this.state = 150;
							this.attribute();
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
					} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.ASTERISK - 51)) | (1 << (XonParser.AND - 51)) | (1 << (XonParser.OR - 51)) | (1 << (XonParser.EXCLAMATION - 51)) | (1 << (XonParser.INSTANCE - 51)) | (1 << (XonParser.LOWER_ID - 51)) | (1 << (XonParser.NL - 51)))) !== 0));
					this.state = 156;
					this.match(XonParser.DEDENT);
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new AliasDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 159;
				(_localctx as AliasDefinitionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 160;
					this.typeParameters();
					}
				}

				this.state = 163;
				this.match(XonParser.ASSIGN);
				this.state = 164;
				this.type(0);
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
	public definitionBaseType(): DefinitionBaseTypeContext {
		let _localctx: DefinitionBaseTypeContext = new DefinitionBaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_definitionBaseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(XonParser.IS);
			this.state = 168;
			this.type(0);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 169;
				this.functionArguments();
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_attribute);
		let _la: number;
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new AbstractAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.attributeHeader();
				this.state = 173;
				this.type(0);
				}
				break;

			case 2:
				_localctx = new ValueAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this.attributeHeader();
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
					{
					this.state = 176;
					this.type(0);
					}
				}

				this.state = 179;
				this.match(XonParser.ASSIGN);
				this.state = 180;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new MethodAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 182;
				this.attributeHeader();
				this.state = 183;
				this.type(0);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 184;
					this.match(XonParser.NL);
					}
					}
					this.state = 187;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 189;
				this.match(XonParser.INDENT);
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 192;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.INFIX:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.PREFIX:
					case XonParser.RETURN:
					case XonParser.POSTFIX:
					case XonParser.RANGE:
					case XonParser.PLUS:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.EQUAL:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AND:
					case XonParser.OR:
					case XonParser.EXCLAMATION:
					case XonParser.INSTANCE:
					case XonParser.INSTANCE_MEMBER:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.UPPER_ID:
					case XonParser.LOWER_ID:
						{
						this.state = 190;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 191;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.INFIX) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.PREFIX) | (1 << XonParser.RETURN) | (1 << XonParser.POSTFIX) | (1 << XonParser.RANGE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PLUS - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AND - 32)) | (1 << (XonParser.OR - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.INSTANCE - 32)) | (1 << (XonParser.INSTANCE_MEMBER - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.UPPER_ID - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 196;
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
	public attributeHeader(): AttributeHeaderContext {
		let _localctx: AttributeHeaderContext = new AttributeHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_attributeHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0)) {
				{
				{
				this.state = 200;
				this.attributeModifier();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this.attributeName();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 207;
				this.typeParameters();
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
	public attributeName(): AttributeNameContext {
		let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_attributeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.LOWER_ID:
				{
				this.state = 210;
				this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.RANGE:
			case XonParser.PLUS:
			case XonParser.LESS:
			case XonParser.GREAT:
			case XonParser.MINUS:
			case XonParser.SLASH:
			case XonParser.CARET:
			case XonParser.EQUAL:
			case XonParser.MODULO:
			case XonParser.ASTERISK:
			case XonParser.AND:
			case XonParser.OR:
			case XonParser.EXCLAMATION:
				{
				this.state = 211;
				this.operator();
				}
				break;
			case XonParser.INSTANCE:
				{
				this.state = 212;
				this.match(XonParser.INSTANCE);
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
	public attributeModifier(): AttributeModifierContext {
		let _localctx: AttributeModifierContext = new AttributeModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_attributeModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
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
		this.enterRule(_localctx, 24, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 217;
				this.match(XonParser.FOR);
				this.state = 224;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 218;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 221;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 219;
						this.match(XonParser.COMMA);
						this.state = 220;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 223;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 226;
				this.expression(0);
				this.state = 227;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.match(XonParser.WHILE);
				this.state = 230;
				this.expression(0);
				this.state = 231;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 233;
				this.match(XonParser.DO);
				this.state = 234;
				this.body();
				this.state = 235;
				this.match(XonParser.WHILE);
				this.state = 236;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 238;
				this.match(XonParser.IF);
				this.state = 239;
				this.expression(0);
				this.state = 240;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 243;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 241;
					this.match(XonParser.ELSE);
					this.state = 242;
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
				this.state = 245;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 246;
				this.match(XonParser.RETURN);
				this.state = 248;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 247;
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
				this.state = 250;
				this.match(XonParser.ACTUAL);
				this.state = 251;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
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
				this.match(XonParser.EXPECT);
				this.state = 258;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 260;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 261;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new AttributeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 262;
				this.attribute();
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 263;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 267;
				this.match(XonParser.ASSIGN);
				this.state = 268;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 270;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 271;
					this.match(XonParser.COMMA);
					this.state = 272;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 278;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 279;
				this.match(XonParser.ASSIGN);
				this.state = 280;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 281;
				this.match(XonParser.OPEN_BRACE);
				this.state = 282;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 283;
					this.match(XonParser.COMMA);
					this.state = 284;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 290;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 291;
				this.match(XonParser.ASSIGN);
				this.state = 292;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 293;
				this.match(XonParser.INSTANCE);
				this.state = 294;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 295;
				this.match(XonParser.ASSIGN);
				this.state = 296;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 297;
				this.expression(0);
				this.state = 298;
				this.match(XonParser.DOT);
				this.state = 299;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 300;
				this.match(XonParser.ASSIGN);
				this.state = 301;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IndexerAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 303;
				this.expression(0);
				this.state = 304;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 305;
				this.expression(0);
				this.state = 306;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 307;
				this.match(XonParser.ASSIGN);
				this.state = 308;
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
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 313;
				(_localctx as IdExpressionContext)._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.INSTANCE - 58)) | (1 << (XonParser.INSTANCE_MEMBER - 58)) | (1 << (XonParser.UPPER_ID - 58)) | (1 << (XonParser.LOWER_ID - 58)))) !== 0))) {
					(_localctx as IdExpressionContext)._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 315;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 314;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 317;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 318;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.IN - 13)) | (1 << (XonParser.PLUS - 13)) | (1 << (XonParser.MINUS - 13)))) !== 0) || _la === XonParser.EXCLAMATION || _la === XonParser.LOWER_ID)) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 319;
				this.expression(16);
				}
				break;

			case 4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 320;
				this.functionParameters();
				this.state = 321;
				this.match(XonParser.COLON);
				this.state = 322;
				this.expression(4);
				}
				break;

			case 5:
				{
				_localctx = new MapExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 324;
				this.match(XonParser.OPEN_BRACE);
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LOWER_ID) {
					{
					this.state = 325;
					this.mapArgument();
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 326;
						this.match(XonParser.COMMA);
						this.state = 327;
						this.mapArgument();
						}
						}
						this.state = 332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 335;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 336;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
					{
					this.state = 337;
					this.expression(0);
					this.state = 342;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 338;
						this.match(XonParser.COMMA);
						this.state = 339;
						this.expression(0);
						}
						}
						this.state = 344;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 347;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 348;
				this.match(XonParser.OPEN_PAREN);
				this.state = 349;
				this.expression(0);
				this.state = 350;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 410;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 408;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 354;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 355;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.IN || _la === XonParser.LOWER_ID)) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 356;
						(_localctx as InfixExpressionContext)._right = this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 357;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 358;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 359;
						(_localctx as PowExpressionContext)._right = this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 360;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 361;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.SLASH - 42)) | (1 << (XonParser.MODULO - 42)) | (1 << (XonParser.ASTERISK - 42)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 362;
						(_localctx as MulDivModExpressionContext)._right = this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 363;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 364;
						(_localctx as AddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
							(_localctx as AddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 365;
						(_localctx as AddSubExpressionContext)._right = this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 366;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 367;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 368;
						(_localctx as RangeExpressionContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 369;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 370;
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
						this.state = 371;
						(_localctx as ElvisExpressionContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 372;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 373;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.LESS - 35)) | (1 << (XonParser.LESS_EQUAL - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.GREAT_EQUAL - 35)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 374;
						(_localctx as RelationalExpressionContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 376;
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
						this.state = 377;
						(_localctx as EqualityExpressionContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 379;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 380;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 382;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 383;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 385;
						this.match(XonParser.PIPE);
						this.state = 388;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
						case 1:
							{
							this.state = 386;
							(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
							this.state = 387;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 390;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 391;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 394;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case XonParser.OPEN_PAREN:
							{
							this.state = 392;
							this.functionArguments();
							}
							break;
						case XonParser.OPEN_BRACKET:
							{
							this.state = 393;
							this.indexerArguments();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 396;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 397;
						_la = this._input.LA(1);
						if (!(_la === XonParser.DOT || _la === XonParser.COALESCING)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 398;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 400;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
						case 1:
							{
							this.state = 399;
							this.typeArguments();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new IsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 402;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 403;
						this.match(XonParser.IS);
						this.state = 404;
						this.type(0);
						}
						break;

					case 15:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 405;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 406;
						this.match(XonParser.AS);
						this.state = 407;
						this.type(0);
						}
						break;
					}
					}
				}
				this.state = 412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 414;
				(_localctx as IdTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 416;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 415;
					this.typeArguments();
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
				this.state = 418;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 419;
				this.functionParameters();
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new MapTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 423;
				this.match(XonParser.OPEN_BRACE);
				this.state = 424;
				this.type(0);
				this.state = 425;
				this.match(XonParser.COLON);
				this.state = 426;
				this.type(0);
				this.state = 427;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 5:
				{
				_localctx = new TupleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 429;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
					{
					this.state = 430;
					this.type(0);
					this.state = 435;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 431;
						this.match(XonParser.COMMA);
						this.state = 432;
						this.type(0);
						}
						}
						this.state = 437;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 440;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 441;
				this.match(XonParser.OPEN_PAREN);
				this.state = 442;
				this.type(0);
				this.state = 443;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 457;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 455;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 447;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 448;
						this.match(XonParser.OR);
						this.state = 449;
						this.type(6);
						}
						break;

					case 2:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 450;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 451;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 452;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 453;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 454;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 459;
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
		this.enterRule(_localctx, 32, XonParser.RULE_literal);
		try {
			this.state = 465;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 462;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 463;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 464;
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.RANGE - 30)) | (1 << (XonParser.PLUS - 30)) | (1 << (XonParser.LESS - 30)) | (1 << (XonParser.GREAT - 30)) | (1 << (XonParser.MINUS - 30)) | (1 << (XonParser.SLASH - 30)) | (1 << (XonParser.CARET - 30)) | (1 << (XonParser.EQUAL - 30)) | (1 << (XonParser.MODULO - 30)) | (1 << (XonParser.ASTERISK - 30)) | (1 << (XonParser.AND - 30)) | (1 << (XonParser.OR - 30)) | (1 << (XonParser.EXCLAMATION - 30)))) !== 0))) {
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
	public expressionParameter(): ExpressionParameterContext {
		let _localctx: ExpressionParameterContext = new ExpressionParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_expressionParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
				{
				this.state = 470;
				this.type(0);
				}
			}

			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 473;
				this.match(XonParser.HASH);
				this.state = 474;
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
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XonParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(XonParser.OPEN_PAREN);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 478;
				this.expressionParameter();
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 479;
					this.match(XonParser.COMMA);
					this.state = 480;
					this.expressionParameter();
					}
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 488;
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
	public mapArgument(): MapArgumentContext {
		let _localctx: MapArgumentContext = new MapArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_mapArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 491;
			this.match(XonParser.COLON);
			this.state = 492;
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
	public functionArguments(): FunctionArgumentsContext {
		let _localctx: FunctionArgumentsContext = new FunctionArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_functionArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(XonParser.OPEN_PAREN);
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 495;
				this.expression(0);
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 496;
					this.match(XonParser.COMMA);
					this.state = 497;
					this.expression(0);
					}
					}
					this.state = 502;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 505;
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
	public indexerArguments(): IndexerArgumentsContext {
		let _localctx: IndexerArgumentsContext = new IndexerArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_indexerArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 508;
				this.expression(0);
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 509;
					this.match(XonParser.COMMA);
					this.state = 510;
					this.expression(0);
					}
					}
					this.state = 515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 518;
			this.match(XonParser.CLOSE_BRACKET);
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XonParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 520;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 523;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 524;
				this.match(XonParser.IS);
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
					{
					this.state = 525;
					this.type(0);
					}
				}

				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.HASH) {
					{
					this.state = 528;
					this.match(XonParser.HASH);
					this.state = 529;
					_localctx._meta = this.match(XonParser.UPPER_ID);
					}
				}

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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(XonParser.LESS);
			this.state = 535;
			this.typeParameter();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 536;
				this.match(XonParser.COMMA);
				this.state = 537;
				this.typeParameter();
				}
				}
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 543;
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
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XonParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.match(XonParser.LESS);
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
				{
				this.state = 546;
				this.type(0);
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 547;
					this.match(XonParser.COMMA);
					this.state = 548;
					this.type(0);
					}
					}
					this.state = 553;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 556;
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
		this.enterRule(_localctx, 52, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(XonParser.COLON);
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 560;
					this.match(XonParser.NL);
					}
					}
					this.state = 563;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 565;
				this.match(XonParser.INDENT);
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 568;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.INFIX:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.PREFIX:
					case XonParser.RETURN:
					case XonParser.POSTFIX:
					case XonParser.RANGE:
					case XonParser.PLUS:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.EQUAL:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AND:
					case XonParser.OR:
					case XonParser.EXCLAMATION:
					case XonParser.INSTANCE:
					case XonParser.INSTANCE_MEMBER:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.UPPER_ID:
					case XonParser.LOWER_ID:
						{
						this.state = 566;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 567;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 570;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.INFIX) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.PREFIX) | (1 << XonParser.RETURN) | (1 << XonParser.POSTFIX) | (1 << XonParser.RANGE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PLUS - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AND - 32)) | (1 << (XonParser.OR - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.INSTANCE - 32)) | (1 << (XonParser.INSTANCE_MEMBER - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.UPPER_ID - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 572;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 14:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 15:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);

		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 20);

		case 12:
			return this.precpred(this._ctx, 19);

		case 13:
			return this.precpred(this._ctx, 18);

		case 14:
			return this.precpred(this._ctx, 17);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 5);

		case 16:
			return this.precpred(this._ctx, 7);

		case 17:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\u0242\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x03\x02\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03\x02" +
		"\x03\x02\x07\x02D\n\x02\f\x02\x0E\x02G\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04T" +
		"\n\x04\f\x04\x0E\x04W\v\x04\x05\x04Y\n\x04\x03\x05\x07\x05\\\n\x05\f\x05" +
		"\x0E\x05_\v\x05\x03\x05\x03\x05\x03\x05\x07\x05d\n\x05\f\x05\x0E\x05g" +
		"\v\x05\x03\x06\x05\x06j\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x05\x07q\n\x07\x03\b\x03\b\x05\bu\n\b\x03\b\x05\bx\n\b\x03\b\x05\b{\n" +
		"\b\x03\b\x06\b~\n\b\r\b\x0E\b\x7F\x03\b\x03\b\x03\b\x06\b\x85\n\b\r\b" +
		"\x0E\b\x86\x03\b\x05\b\x8A\n\b\x03\b\x03\b\x05\b\x8E\n\b\x03\b\x05\b\x91" +
		"\n\b\x03\b\x06\b\x94\n\b\r\b\x0E\b\x95\x03\b\x03\b\x03\b\x06\b\x9B\n\b" +
		"\r\b\x0E\b\x9C\x03\b\x05\b\xA0\n\b\x03\b\x03\b\x05\b\xA4\n\b\x03\b\x03" +
		"\b\x05\b\xA8\n\b\x03\t\x03\t\x03\t\x05\t\xAD\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\xB4\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\xBC\n" +
		"\n\r\n\x0E\n\xBD\x03\n\x03\n\x03\n\x06\n\xC3\n\n\r\n\x0E\n\xC4\x03\n\x03" +
		"\n\x05\n\xC9\n\n\x03\v\x07\v\xCC\n\v\f\v\x0E\v\xCF\v\v\x03\v\x03\v\x05" +
		"\v\xD3\n\v\x03\f\x03\f\x03\f\x05\f\xD8\n\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xE0\n\x0E\x03\x0E\x05\x0E\xE3\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF6\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xFB\n\x0E\x03\x0E\x03\x0E\x03\x0E\x06" +
		"\x0E\u0100\n\x0E\r\x0E\x0E\x0E\u0101\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u010B\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0114\n\x0F\f\x0F\x0E\x0F\u0117\v\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0120" +
		"\n\x0F\f\x0F\x0E\x0F\u0123\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0139\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\u013E\n\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u014B" +
		"\n\x10\f\x10\x0E\x10\u014E\v\x10\x05\x10\u0150\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u0157\n\x10\f\x10\x0E\x10\u015A\v\x10\x05" +
		"\x10\u015C\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0163" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u0187\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u018D\n\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u0193\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u019B\n\x10\f\x10\x0E\x10\u019E\v\x10\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u01A3\n\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u01A8\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u01B4\n\x11\f\x11\x0E\x11\u01B7\v\x11\x05" +
		"\x11\u01B9\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01C0" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x07\x11\u01CA\n\x11\f\x11\x0E\x11\u01CD\v\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\u01D4\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x05" +
		"\x14\u01DA\n\x14\x03\x14\x03\x14\x05\x14\u01DE\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u01E4\n\x15\f\x15\x0E\x15\u01E7\v\x15\x05\x15\u01E9" +
		"\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x07\x17\u01F5\n\x17\f\x17\x0E\x17\u01F8\v\x17\x05\x17" +
		"\u01FA\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0202" +
		"\n\x18\f\x18\x0E\x18\u0205\v\x18\x05\x18\u0207\n\x18\x03\x18\x03\x18\x03" +
		"\x19\x05\x19\u020C\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0211\n\x19\x03" +
		"\x19\x03\x19\x05\x19\u0215\n\x19\x05\x19\u0217\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x07\x1A\u021D\n\x1A\f\x1A\x0E\x1A\u0220\v\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0228\n\x1B\f\x1B\x0E\x1B" +
		"\u022B\v\x1B\x05\x1B\u022D\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x06\x1C\u0234\n\x1C\r\x1C\x0E\x1C\u0235\x03\x1C\x03\x1C\x03\x1C\x06\x1C" +
		"\u023B\n\x1C\r\x1C\x0E\x1C\u023C\x03\x1C\x05\x1C\u0240\n\x1C\x03\x1C\x02" +
		"\x02\x04\x1E \x1D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02\x02\f\x05\x02\x14\x14" +
		"\x1A\x1A\x1C\x1C\x04\x02<=DE\x07\x02\x0F\x0F\"\"++::EE\x04\x02\x0F\x0F" +
		"EE\x05\x02,,2255\x04\x02\"\"++\x04\x02%&)*\x03\x0201\x04\x02\x1F\x1F4" +
		"4\f\x02  \"\"%%))+-00225578::\x02\u02A5\x02=\x03\x02\x02\x02\x04H\x03" +
		"\x02\x02\x02\x06K\x03\x02\x02\x02\b]\x03\x02\x02\x02\ni\x03\x02\x02\x02" +
		"\fm\x03\x02\x02\x02\x0E\xA7\x03\x02\x02\x02\x10\xA9\x03\x02\x02\x02\x12" +
		"\xC8\x03\x02\x02\x02\x14\xCD\x03\x02\x02\x02\x16\xD7\x03\x02\x02\x02\x18" +
		"\xD9\x03\x02\x02\x02\x1A\u010A\x03\x02\x02\x02\x1C\u0138\x03\x02\x02\x02" +
		"\x1E\u0162\x03\x02\x02\x02 \u01BF\x03\x02\x02\x02\"\u01D3\x03\x02\x02" +
		"\x02$\u01D5\x03\x02\x02\x02&\u01D7\x03\x02\x02\x02(\u01DF\x03\x02\x02" +
		"\x02*\u01EC\x03\x02\x02\x02,\u01F0\x03\x02\x02\x02.\u01FD\x03\x02\x02" +
		"\x020\u020B\x03\x02\x02\x022\u0218\x03\x02\x02\x024\u0223\x03\x02\x02" +
		"\x026\u0230\x03\x02\x02\x028<\x05\x06\x04\x029<\x05\x04\x03\x02:<\x07" +
		"F\x02\x02;8\x03\x02\x02\x02;9\x03\x02\x02\x02;:\x03\x02\x02\x02<?\x03" +
		"\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>E\x03\x02\x02\x02?=\x03" +
		"\x02\x02\x02@D\x05\x0E\b\x02AD\x05\x12\n\x02BD\x07F\x02\x02C@\x03\x02" +
		"\x02\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02" +
		"\x02\x02EF\x03\x02\x02\x02F\x03\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x07" +
		"\x18\x02\x02IJ\x05\b\x05\x02J\x05\x03\x02\x02\x02KL\x07\x19\x02\x02LX" +
		"\x05\b\x05\x02MN\x07\f\x02\x02NY\x07E\x02\x02OP\x07(\x02\x02PU\x05\f\x07" +
		"\x02QR\x07\'\x02\x02RT\x05\f\x07\x02SQ\x03\x02\x02\x02TW\x03\x02\x02\x02" +
		"US\x03\x02\x02\x02UV\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02" +
		"XM\x03\x02\x02\x02XO\x03\x02\x02\x02XY\x03\x02\x02\x02Y\x07\x03\x02\x02" +
		"\x02Z\\\x07\x1F\x02\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02`e\x05\n" +
		"\x06\x02ab\x07\x1F\x02\x02bd\x05\n\x06\x02ca\x03\x02\x02\x02dg\x03\x02" +
		"\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\t\x03\x02\x02\x02ge\x03" +
		"\x02\x02\x02hj\x07\x1E\x02\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03" +
		"\x02\x02\x02kl\x07E\x02\x02l\v\x03\x02\x02\x02mp\x07D\x02\x02no\x07\f" +
		"\x02\x02oq\x07D\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\r\x03\x02" +
		"\x02\x02rt\x07D\x02\x02su\x052\x1A\x02ts\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02uw\x03\x02\x02\x02vx\x05(\x15\x02wv\x03\x02\x02\x02wx\x03\x02\x02" +
		"\x02xz\x03\x02\x02\x02y{\x05\x10\t\x02zy\x03\x02\x02\x02z{\x03\x02\x02" +
		"\x02{\x89\x03\x02\x02\x02|~\x07F\x02\x02}|\x03\x02\x02\x02~\x7F\x03\x02" +
		"\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02" +
		"\x02\x02\x81\x84\x07\x03\x02\x02\x82\x85\x05\x12\n\x02\x83\x85\x07F\x02" +
		"\x02\x84\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02" +
		"\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02" +
		"\x02\x88\x8A\x07\x04\x02\x02\x89}\x03\x02\x02\x02\x89\x8A\x03\x02\x02" +
		"\x02\x8A\xA8\x03\x02\x02\x02\x8B\x8D\x07E\x02\x02\x8C\x8E\x052\x1A\x02" +
		"\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02" +
		"\x8F\x91\x05\x10\t\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02" +
		"\x91\x9F\x03\x02\x02\x02\x92\x94\x07F\x02\x02\x93\x92\x03\x02\x02\x02" +
		"\x94\x95\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02" +
		"\x96\x97\x03\x02\x02\x02\x97\x9A\x07\x03\x02\x02\x98\x9B\x05\x12\n\x02" +
		"\x99\x9B\x07F\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02\x02" +
		"\x9B\x9C\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
		"\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x07\x04\x02\x02\x9F\x93\x03\x02\x02\x02" +
		"\x9F\xA0\x03\x02\x02\x02\xA0\xA8\x03\x02\x02\x02\xA1\xA3\x07D\x02\x02" +
		"\xA2\xA4\x052\x1A\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02" +
		"\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x07/\x02\x02\xA6\xA8\x05 \x11\x02\xA7" +
		"r\x03\x02\x02\x02\xA7\x8B\x03\x02\x02\x02\xA7\xA1\x03\x02\x02\x02\xA8" +
		"\x0F\x03\x02\x02\x02\xA9\xAA\x07\v\x02\x02\xAA\xAC\x05 \x11\x02\xAB\xAD" +
		"\x05,\x17\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\x11" +
		"\x03\x02\x02\x02\xAE\xAF\x05\x14\v\x02\xAF\xB0\x05 \x11\x02\xB0\xC9\x03" +
		"\x02\x02\x02\xB1\xB3\x05\x14\v\x02\xB2\xB4\x05 \x11\x02\xB3\xB2\x03\x02" +
		"\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x07/" +
		"\x02\x02\xB6\xB7\x05\x1E\x10\x02\xB7\xC9\x03\x02\x02\x02\xB8\xB9\x05\x14" +
		"\v\x02\xB9\xBB\x05 \x11\x02\xBA\xBC\x07F\x02\x02\xBB\xBA\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\xC2\x07\x03\x02\x02\xC0\xC3\x05\x1A\x0E\x02" +
		"\xC1\xC3\x07F\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03\x02\x02\x02" +
		"\xC3\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
		"\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x07\x04\x02\x02\xC7\xC9\x03\x02\x02\x02" +
		"\xC8\xAE\x03\x02\x02\x02\xC8\xB1\x03\x02\x02\x02\xC8\xB8\x03\x02\x02\x02" +
		"\xC9\x13\x03\x02\x02\x02\xCA\xCC\x05\x18\r\x02\xCB\xCA\x03\x02\x02\x02" +
		"\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02" +
		"\xCE\xD0\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD2\x05\x16\f\x02" +
		"\xD1\xD3\x052\x1A\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
		"\xD3\x15\x03\x02\x02\x02\xD4\xD8\x07E\x02\x02\xD5\xD8\x05$\x13\x02\xD6" +
		"\xD8\x07<\x02\x02\xD7\xD4\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7" +
		"\xD6\x03\x02\x02\x02\xD8\x17\x03\x02\x02\x02\xD9\xDA\t\x02\x02\x02\xDA" +
		"\x19\x03\x02\x02\x02\xDB\xE2\x07\x10\x02\x02\xDC\xDF\x07E\x02\x02\xDD" +
		"\xDE\x07\'\x02\x02\xDE\xE0\x07E\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE3\x07\x0F\x02\x02\xE2\xDC" +
		"\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5" +
		"\x05\x1E\x10\x02\xE5\xE6\x056\x1C\x02\xE6\u010B\x03\x02\x02\x02\xE7\xE8" +
		"\x07\x15\x02\x02\xE8\xE9\x05\x1E\x10\x02\xE9\xEA\x056\x1C\x02\xEA\u010B" +
		"\x03\x02\x02\x02\xEB\xEC\x07\r\x02\x02\xEC\xED\x056\x1C\x02\xED\xEE\x07" +
		"\x15\x02\x02\xEE\xEF\x05\x1E\x10\x02\xEF\u010B\x03\x02\x02\x02\xF0\xF1" +
		"\x07\x0E\x02\x02\xF1\xF2\x05\x1E\x10\x02\xF2\xF5\x056\x1C\x02\xF3\xF4" +
		"\x07\x11\x02\x02\xF4\xF6\x056\x1C\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6" +
		"\x03\x02\x02\x02\xF6\u010B\x03\x02\x02\x02\xF7\u010B\x07\x13\x02\x02\xF8" +
		"\xFA\x07\x1B\x02\x02\xF9\xFB\x05\x1E\x10\x02\xFA\xF9\x03\x02\x02\x02\xFA" +
		"\xFB\x03\x02\x02\x02\xFB\u010B\x03\x02\x02\x02\xFC\xFD\x07\x16\x02\x02" +
		"\xFD\xFF\x05\x1E\x10\x02\xFE\u0100\x07F\x02\x02\xFF\xFE\x03\x02\x02\x02" +
		"\u0100\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03" +
		"\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x07\x17\x02\x02\u0104" +
		"\u0105\x05\x1E\x10\x02\u0105\u010B\x03\x02\x02\x02\u0106\u010B\x07C\x02" +
		"\x02\u0107\u010B\x05\x1E\x10\x02\u0108\u010B\x05\x12\n\x02\u0109\u010B" +
		"\x05\x1C\x0F\x02\u010A\xDB\x03\x02\x02\x02\u010A\xE7\x03\x02\x02\x02\u010A" +
		"\xEB\x03\x02\x02\x02\u010A\xF0\x03\x02\x02\x02\u010A\xF7\x03\x02\x02\x02" +
		"\u010A\xF8\x03\x02\x02\x02\u010A\xFC\x03\x02\x02\x02\u010A\u0106\x03\x02" +
		"\x02\x02\u010A\u0107\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A" +
		"\u0109\x03\x02\x02\x02\u010B\x1B\x03\x02\x02\x02\u010C\u010D\x07E\x02" +
		"\x02\u010D\u010E\x07/\x02\x02\u010E\u0139\x05\x1E\x10\x02\u010F\u0110" +
		"\x07\x05\x02\x02\u0110\u0115\x07E\x02\x02\u0111\u0112\x07\'\x02\x02\u0112" +
		"\u0114\x07E\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0117\x03\x02\x02" +
		"\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118" +
		"\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u0119\x07\x06\x02\x02" +
		"\u0119\u011A\x07/\x02\x02\u011A\u0139\x05\x1E\x10\x02\u011B\u011C\x07" +
		"\t\x02\x02\u011C\u0121\x07E\x02\x02\u011D\u011E\x07\'\x02\x02\u011E\u0120" +
		"\x07E\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02" +
		"\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03" +
		"\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0125\x07\n\x02\x02\u0125" +
		"\u0126\x07/\x02\x02\u0126\u0139\x05\x1E\x10\x02\u0127\u0128\x07<\x02\x02" +
		"\u0128\u0129\x07E\x02\x02\u0129\u012A\x07/\x02\x02\u012A\u0139\x05\x1E" +
		"\x10\x02\u012B\u012C\x05\x1E\x10\x02\u012C\u012D\x07\x1F\x02\x02\u012D" +
		"\u012E\x07E\x02\x02\u012E\u012F\x07/\x02\x02\u012F\u0130\x05\x1E\x10\x02" +
		"\u0130\u0139\x03\x02\x02\x02\u0131\u0132\x05\x1E\x10\x02\u0132\u0133\x07" +
		"\x05\x02\x02\u0133\u0134\x05\x1E\x10\x02\u0134\u0135\x07\x06\x02\x02\u0135" +
		"\u0136\x07/\x02\x02\u0136\u0137\x05\x1E\x10\x02\u0137\u0139\x03\x02\x02" +
		"\x02\u0138\u010C\x03\x02\x02\x02\u0138\u010F\x03\x02\x02\x02\u0138\u011B" +
		"\x03\x02\x02\x02\u0138\u0127\x03\x02\x02\x02\u0138\u012B\x03\x02\x02\x02" +
		"\u0138\u0131\x03\x02\x02\x02\u0139\x1D\x03\x02\x02\x02\u013A\u013B\b\x10" +
		"\x01\x02\u013B\u013D\t\x03\x02\x02\u013C\u013E\x054\x1B\x02\u013D\u013C" +
		"\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0163\x03\x02\x02\x02" +
		"\u013F\u0163\x05\"\x12\x02\u0140\u0141\t\x04\x02\x02\u0141\u0163\x05\x1E" +
		"\x10\x12\u0142\u0143\x05(\x15\x02\u0143\u0144\x07(\x02\x02\u0144\u0145" +
		"\x05\x1E\x10\x06\u0145\u0163\x03\x02\x02\x02\u0146\u014F\x07\t\x02\x02" +
		"\u0147\u014C\x05*\x16\x02\u0148\u0149\x07\'\x02\x02\u0149\u014B\x05*\x16" +
		"\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A" +
		"\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02" +
		"\u014E\u014C\x03\x02\x02\x02\u014F\u0147\x03\x02\x02\x02\u014F\u0150\x03" +
		"\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0163\x07\n\x02\x02\u0152" +
		"\u015B\x07\x05\x02\x02\u0153\u0158\x05\x1E\x10\x02\u0154\u0155\x07\'\x02" +
		"\x02\u0155\u0157\x05\x1E\x10\x02\u0156\u0154\x03\x02\x02\x02\u0157\u015A" +
		"\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02" +
		"\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u0153\x03" +
		"\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u0163\x07\x06\x02\x02\u015E\u015F\x07\x07\x02\x02\u015F\u0160\x05\x1E" +
		"\x10\x02\u0160\u0161\x07\b\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u013A" +
		"\x03\x02\x02\x02\u0162\u013F\x03\x02\x02\x02\u0162\u0140\x03\x02\x02\x02" +
		"\u0162\u0142\x03\x02\x02\x02\u0162\u0146\x03\x02\x02\x02\u0162\u0152\x03" +
		"\x02\x02\x02\u0162\u015E\x03\x02\x02\x02\u0163\u019C\x03\x02\x02\x02\u0164" +
		"\u0165\f\x11\x02\x02\u0165\u0166\t\x05\x02\x02\u0166\u019B\x05\x1E\x10" +
		"\x12\u0167\u0168\f\x10\x02\x02\u0168\u0169\x07-\x02\x02\u0169\u019B\x05" +
		"\x1E\x10\x11\u016A\u016B\f\x0F\x02\x02\u016B\u016C\t\x06\x02\x02\u016C" +
		"\u019B\x05\x1E\x10\x10\u016D\u016E\f\x0E\x02\x02\u016E\u016F\t\x07\x02" +
		"\x02\u016F\u019B\x05\x1E\x10\x0F\u0170\u0171\f\r\x02\x02\u0171\u0172\x07" +
		" \x02\x02\u0172\u019B\x05\x1E\x10\x0E\u0173\u0174\f\f\x02\x02\u0174\u0175" +
		"\x073\x02\x02\u0175\u019B\x05\x1E\x10\r\u0176\u0177\f\v\x02\x02\u0177" +
		"\u0178\t\b\x02\x02\u0178\u019B\x05\x1E\x10\f\u0179\u017A\f\n\x02\x02\u017A" +
		"\u017B\t\t\x02\x02\u017B\u019B\x05\x1E\x10\v\u017C\u017D\f\t\x02\x02\u017D" +
		"\u017E\x077\x02\x02\u017E\u019B\x05\x1E\x10\n\u017F\u0180\f\b\x02\x02" +
		"\u0180\u0181\x078\x02\x02\u0181\u019B\x05\x1E\x10\t\u0182\u0183\f\x07" +
		"\x02\x02\u0183\u0186\x07$\x02\x02\u0184\u0185\x07E\x02\x02\u0185\u0187" +
		"\x07(\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
		"\u0187\u0188\x03\x02\x02\x02\u0188\u019B\x05\x1E\x10\b\u0189\u018C\f\x16" +
		"\x02\x02\u018A\u018D\x05,\x17\x02\u018B\u018D\x05.\x18\x02\u018C\u018A" +
		"\x03\x02\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u019B\x03\x02\x02\x02" +
		"\u018E\u018F\f\x15\x02\x02\u018F\u0190\t\n\x02\x02\u0190\u0192\x07E\x02" +
		"\x02\u0191\u0193\x054\x1B\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193" +
		"\x03\x02\x02\x02\u0193\u019B\x03\x02\x02\x02\u0194\u0195\f\x14\x02\x02" +
		"\u0195\u0196\x07\v\x02\x02\u0196\u019B\x05 \x11\x02\u0197\u0198\f\x13" +
		"\x02\x02\u0198\u0199\x07\f\x02\x02\u0199\u019B\x05 \x11\x02\u019A\u0164" +
		"\x03\x02\x02\x02\u019A\u0167\x03\x02\x02\x02\u019A\u016A\x03\x02\x02\x02" +
		"\u019A\u016D\x03\x02\x02\x02\u019A\u0170\x03\x02\x02\x02\u019A\u0173\x03" +
		"\x02\x02\x02\u019A\u0176\x03\x02\x02\x02\u019A\u0179\x03\x02\x02\x02\u019A" +
		"\u017C\x03\x02\x02\x02\u019A\u017F\x03\x02\x02\x02\u019A\u0182\x03\x02" +
		"\x02\x02\u019A\u0189\x03\x02\x02\x02\u019A\u018E\x03\x02\x02\x02\u019A" +
		"\u0194\x03\x02\x02\x02\u019A\u0197\x03\x02\x02\x02\u019B\u019E\x03\x02" +
		"\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D" +
		"\x1F\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A0\b\x11\x01" +
		"\x02\u01A0\u01A2\x07D\x02\x02\u01A1\u01A3\x054\x1B\x02\u01A2\u01A1\x03" +
		"\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01C0\x03\x02\x02\x02\u01A4" +
		"\u01C0\x05\"\x12\x02\u01A5\u01A7\x05(\x15\x02\u01A6\u01A8\x05 \x11\x02" +
		"\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01C0\x03" +
		"\x02\x02\x02\u01A9\u01AA\x07\t\x02\x02\u01AA\u01AB\x05 \x11\x02\u01AB" +
		"\u01AC\x07(\x02\x02\u01AC\u01AD\x05 \x11\x02\u01AD\u01AE\x07\n\x02\x02" +
		"\u01AE\u01C0\x03\x02\x02\x02\u01AF\u01B8\x07\x05\x02\x02\u01B0\u01B5\x05" +
		" \x11\x02\u01B1\u01B2\x07\'\x02\x02\u01B2\u01B4\x05 \x11\x02\u01B3\u01B1" +
		"\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02" +
		"\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03" +
		"\x02\x02\x02\u01B8\u01B0\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9" +
		"\u01BA\x03\x02\x02\x02\u01BA\u01C0\x07\x06\x02\x02\u01BB\u01BC\x07\x07" +
		"\x02\x02\u01BC\u01BD\x05 \x11\x02\u01BD\u01BE\x07\b\x02\x02\u01BE\u01C0" +
		"\x03\x02\x02\x02\u01BF\u019F\x03\x02\x02\x02\u01BF\u01A4\x03\x02\x02\x02" +
		"\u01BF\u01A5\x03\x02\x02\x02\u01BF\u01A9\x03\x02\x02\x02\u01BF\u01AF\x03" +
		"\x02\x02\x02\u01BF\u01BB\x03\x02\x02\x02\u01C0\u01CB\x03\x02\x02\x02\u01C1" +
		"\u01C2\f\x07\x02\x02\u01C2\u01C3\x078\x02\x02\u01C3\u01CA\x05 \x11\b\u01C4" +
		"\u01C5\f\t\x02\x02\u01C5\u01CA\x073\x02\x02\u01C6\u01C7\f\b\x02\x02\u01C7" +
		"\u01C8\x07\x05\x02\x02\u01C8\u01CA\x07\x06\x02\x02\u01C9\u01C1\x03\x02" +
		"\x02\x02\u01C9\u01C4\x03\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02\u01CA" +
		"\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02" +
		"\x02\x02\u01CC!\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01D4" +
		"\x07?\x02\x02\u01CF\u01D4\x07>\x02\x02\u01D0\u01D4\x07@\x02\x02\u01D1" +
		"\u01D4\x07A\x02\x02\u01D2\u01D4\x07B\x02\x02\u01D3\u01CE\x03\x02\x02\x02" +
		"\u01D3\u01CF\x03\x02\x02\x02\u01D3\u01D0\x03\x02\x02\x02\u01D3\u01D1\x03" +
		"\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4#\x03\x02\x02\x02\u01D5" +
		"\u01D6\t\v\x02\x02\u01D6%\x03\x02\x02\x02\u01D7\u01D9\x07E\x02\x02\u01D8" +
		"\u01DA\x05 \x11\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02" +
		"\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01DC\x07#\x02\x02\u01DC\u01DE" +
		"\x07D\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02" +
		"\u01DE\'\x03\x02\x02\x02\u01DF\u01E8\x07\x07\x02\x02\u01E0\u01E5\x05&" +
		"\x14\x02\u01E1\u01E2\x07\'\x02\x02\u01E2\u01E4\x05&\x14\x02\u01E3\u01E1" +
		"\x03\x02\x02\x02\u01E4\u01E7\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02" +
		"\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03" +
		"\x02\x02\x02\u01E8\u01E0\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9" +
		"\u01EA\x03\x02\x02\x02\u01EA\u01EB\x07\b\x02\x02\u01EB)\x03\x02\x02\x02" +
		"\u01EC\u01ED\x07E\x02\x02\u01ED\u01EE\x07(\x02\x02\u01EE\u01EF\x05\x1E" +
		"\x10\x02\u01EF+\x03\x02\x02\x02\u01F0\u01F9\x07\x07\x02\x02\u01F1\u01F6" +
		"\x05\x1E\x10\x02\u01F2\u01F3\x07\'\x02\x02\u01F3\u01F5\x05\x1E\x10\x02" +
		"\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03" +
		"\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8" +
		"\u01F6\x03\x02\x02\x02\u01F9\u01F1\x03\x02\x02\x02\u01F9\u01FA\x03\x02" +
		"\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x07\b\x02\x02\u01FC-" +
		"\x03\x02\x02\x02\u01FD\u0206\x07\x05\x02\x02\u01FE\u0203\x05\x1E\x10\x02" +
		"\u01FF\u0200\x07\'\x02\x02\u0200\u0202\x05\x1E\x10\x02\u0201\u01FF\x03" +
		"\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03" +
		"\x02\x02\x02\u0204\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206" +
		"\u01FE\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x03\x02" +
		"\x02\x02\u0208\u0209\x07\x06\x02\x02\u0209/\x03\x02\x02\x02\u020A\u020C" +
		"\x07!\x02\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02" +
		"\u020C\u020D\x03\x02\x02\x02\u020D\u0216\x07D\x02\x02\u020E\u0210\x07" +
		"\v\x02\x02\u020F\u0211\x05 \x11\x02\u0210\u020F\x03\x02\x02\x02\u0210" +
		"\u0211\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212\u0213\x07#\x02" +
		"\x02\u0213\u0215\x07D\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215" +
		"\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216\u020E\x03\x02\x02\x02" +
		"\u0216\u0217\x03\x02\x02\x02\u02171\x03\x02\x02\x02\u0218\u0219\x07%\x02" +
		"\x02\u0219\u021E\x050\x19\x02\u021A\u021B\x07\'\x02\x02\u021B\u021D\x05" +
		"0\x19\x02\u021C\u021A\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E" +
		"\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221\x03\x02" +
		"\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0222\x07)\x02\x02\u02223\x03" +
		"\x02\x02\x02\u0223\u022C\x07%\x02\x02\u0224\u0229\x05 \x11\x02\u0225\u0226" +
		"\x07\'\x02\x02\u0226\u0228\x05 \x11\x02\u0227\u0225\x03\x02\x02\x02\u0228" +
		"\u022B\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02" +
		"\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C" +
		"\u0224\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x03\x02" +
		"\x02\x02\u022E\u022F\x07)\x02\x02\u022F5\x03\x02\x02\x02\u0230\u023F\x07" +
		"(\x02\x02\u0231\u0240\x05\x1A\x0E\x02\u0232\u0234\x07F\x02\x02\u0233\u0232" +
		"\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u023A\x07" +
		"\x03\x02\x02\u0238\u023B\x05\x1A\x0E\x02\u0239\u023B\x07F\x02\x02\u023A" +
		"\u0238\x03\x02\x02\x02\u023A\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023E\u0240\x07\x04\x02\x02\u023F\u0231\x03\x02" +
		"\x02\x02\u023F\u0233\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240" +
		"7\x03\x02\x02\x02S;=CEUX]eiptwz\x7F\x84\x86\x89\x8D\x90\x95\x9A\x9C\x9F" +
		"\xA3\xA7\xAC\xB3\xBD\xC2\xC4\xC8\xCD\xD2\xD7\xDF\xE2\xF5\xFA\u0101\u010A" +
		"\u0115\u0121\u0138\u013D\u014C\u014F\u0158\u015B\u0162\u0186\u018C\u0192" +
		"\u019A\u019C\u01A2\u01A7\u01B5\u01B8\u01BF\u01C9\u01CB\u01D3\u01D9\u01DD" +
		"\u01E5\u01E8\u01F6\u01F9\u0203\u0206\u020B\u0210\u0214\u0216\u021E\u0229" +
		"\u022C\u0235\u023A\u023C\u023F";
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
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
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
	public _s29!: Token;
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
	public _name!: Token;
	public _alias!: Token;
	public UPPER_ID(): TerminalNode[];
	public UPPER_ID(i: number): TerminalNode;
	public UPPER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.UPPER_ID);
		} else {
			return this.getToken(XonParser.UPPER_ID, i);
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
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public functionParameters(): FunctionParametersContext | undefined {
		return this.tryGetRuleContext(0, FunctionParametersContext);
	}
	public definitionBaseType(): DefinitionBaseTypeContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBaseTypeContext);
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
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AttributeDefinitionContext extends DefinitionContext {
	public _name!: Token;
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public definitionBaseType(): DefinitionBaseTypeContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBaseTypeContext);
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
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AliasDefinitionContext extends DefinitionContext {
	public _name!: Token;
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DefinitionBaseTypeContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public functionArguments(): FunctionArgumentsContext | undefined {
		return this.tryGetRuleContext(0, FunctionArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionBaseType; }
}


export class AttributeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attribute; }
	public copyFrom(ctx: AttributeContext): void {
		super.copyFrom(ctx);
	}
}
export class AbstractAttributeContext extends AttributeContext {
	public attributeHeader(): AttributeHeaderContext {
		return this.getRuleContext(0, AttributeHeaderContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ValueAttributeContext extends AttributeContext {
	public attributeHeader(): AttributeHeaderContext {
		return this.getRuleContext(0, AttributeHeaderContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodAttributeContext extends AttributeContext {
	public attributeHeader(): AttributeHeaderContext {
		return this.getRuleContext(0, AttributeHeaderContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
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
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class AttributeHeaderContext extends ParserRuleContext {
	public attributeName(): AttributeNameContext {
		return this.getRuleContext(0, AttributeNameContext);
	}
	public attributeModifier(): AttributeModifierContext[];
	public attributeModifier(i: number): AttributeModifierContext;
	public attributeModifier(i?: number): AttributeModifierContext | AttributeModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeModifierContext);
		} else {
			return this.getRuleContext(i, AttributeModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attributeHeader; }
}


export class AttributeNameContext extends ParserRuleContext {
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public INSTANCE(): TerminalNode | undefined { return this.tryGetToken(XonParser.INSTANCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attributeName; }
}


export class AttributeModifierContext extends ParserRuleContext {
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public POSTFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.POSTFIX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attributeModifier; }
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
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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
	public INSTANCE(): TerminalNode { return this.getToken(XonParser.INSTANCE, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexerAssignmentContext extends AssignmentContext {
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
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public UPPER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.UPPER_ID, 0); }
	public INSTANCE(): TerminalNode | undefined { return this.tryGetToken(XonParser.INSTANCE, 0); }
	public INSTANCE_MEMBER(): TerminalNode | undefined { return this.tryGetToken(XonParser.INSTANCE_MEMBER, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
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
	public functionArguments(): FunctionArgumentsContext | undefined {
		return this.tryGetRuleContext(0, FunctionArgumentsContext);
	}
	public indexerArguments(): IndexerArgumentsContext | undefined {
		return this.tryGetRuleContext(0, IndexerArgumentsContext);
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
	public COALESCING(): TerminalNode | undefined { return this.tryGetToken(XonParser.COALESCING, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOT, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IsExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AsExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(XonParser.AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
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
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
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
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
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
	public _op!: Token;
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
	public _op!: Token;
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
	public _op!: Token;
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
	public RANGE(): TerminalNode { return this.getToken(XonParser.RANGE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ElvisExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
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
	public _op!: Token;
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
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_EQUAL, 0); }
	public GREAT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT_EQUAL, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
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
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConjunctionExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
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
	public AND(): TerminalNode { return this.getToken(XonParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DisjunctionExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
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
	public OR(): TerminalNode { return this.getToken(XonParser.OR, 0); }
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MapExpressionContext extends ExpressionContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public mapArgument(): MapArgumentContext[];
	public mapArgument(i: number): MapArgumentContext;
	public mapArgument(i?: number): MapArgumentContext | MapArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapArgumentContext);
		} else {
			return this.getRuleContext(i, MapArgumentContext);
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
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
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
	public OR(): TerminalNode { return this.getToken(XonParser.OR, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MapTypeContext extends TypeContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TupleTypeContext extends TypeContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
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


export class OperatorContext extends ParserRuleContext {
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
	public AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OR, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(XonParser.RANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class ExpressionParameterContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_expressionParameter; }
}


export class FunctionParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public expressionParameter(): ExpressionParameterContext[];
	public expressionParameter(i: number): ExpressionParameterContext;
	public expressionParameter(i?: number): ExpressionParameterContext | ExpressionParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionParameterContext);
		} else {
			return this.getRuleContext(i, ExpressionParameterContext);
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
	public get ruleIndex(): number { return XonParser.RULE_functionParameters; }
}


export class MapArgumentContext extends ParserRuleContext {
	public _name!: Token;
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_mapArgument; }
}


export class FunctionArgumentsContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_functionArguments; }
}


export class IndexerArgumentsContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_indexerArguments; }
}


export class TypeParameterContext extends ParserRuleContext {
	public _name!: Token;
	public _meta!: Token;
	public UPPER_ID(): TerminalNode[];
	public UPPER_ID(i: number): TerminalNode;
	public UPPER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.UPPER_ID);
		} else {
			return this.getToken(XonParser.UPPER_ID, i);
		}
	}
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_typeParameter; }
}


export class TypeParametersContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
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
	public get ruleIndex(): number { return XonParser.RULE_typeParameters; }
}


export class TypeArgumentsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_typeArguments; }
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


