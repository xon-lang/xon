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
	public static readonly RULE_definitionAncestor = 7;
	public static readonly RULE_attribute = 8;
	public static readonly RULE_attributeHeader = 9;
	public static readonly RULE_attributeModifier = 10;
	public static readonly RULE_attributeName = 11;
	public static readonly RULE_statement = 12;
	public static readonly RULE_assignment = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_type = 15;
	public static readonly RULE_literal = 16;
	public static readonly RULE_operator = 17;
	public static readonly RULE_lambdaParameters = 18;
	public static readonly RULE_methodParameter = 19;
	public static readonly RULE_methodParameters = 20;
	public static readonly RULE_methodArguments = 21;
	public static readonly RULE_mapParameter = 22;
	public static readonly RULE_mapParameters = 23;
	public static readonly RULE_mapArgument = 24;
	public static readonly RULE_mapArguments = 25;
	public static readonly RULE_objectParameter = 26;
	public static readonly RULE_objectParameters = 27;
	public static readonly RULE_objectArgument = 28;
	public static readonly RULE_objectArguments = 29;
	public static readonly RULE_arrayArguments = 30;
	public static readonly RULE_typeParameter = 31;
	public static readonly RULE_typeParameters = 32;
	public static readonly RULE_typeArguments = 33;
	public static readonly RULE_body = 34;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "libraryPath", "libraryPathPart", "libraryMember", 
		"definition", "definitionAncestor", "attribute", "attributeHeader", "attributeModifier", 
		"attributeName", "statement", "assignment", "expression", "type", "literal", 
		"operator", "lambdaParameters", "methodParameter", "methodParameters", 
		"methodArguments", "mapParameter", "mapParameters", "mapArgument", "mapArguments", 
		"objectParameter", "objectParameters", "objectArgument", "objectArguments", 
		"arrayArguments", "typeParameter", "typeParameters", "typeArguments", 
		"body",
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
			this.state = 75;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 73;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 70;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 71;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 72;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.UPPER_ID || _la === XonParser.NL) {
				{
				this.state = 80;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.UPPER_ID:
					{
					this.state = 78;
					this.definition();
					}
					break;
				case XonParser.NL:
					{
					this.state = 79;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 84;
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
			this.state = 85;
			this.match(XonParser.EXPORT);
			this.state = 86;
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
			this.state = 88;
			this.match(XonParser.IMPORT);
			this.state = 89;
			this.libraryPath();
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 90;
				this.match(XonParser.AS);
				this.state = 91;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 92;
				this.match(XonParser.COLON);
				this.state = 93;
				this.libraryMember();
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 94;
					this.match(XonParser.COMMA);
					this.state = 95;
					this.libraryMember();
					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.EOF:
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
		this.enterRule(_localctx, 6, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 103;
				_localctx._s29 = this.match(XonParser.DOT);
				_localctx._points.push(_localctx._s29);
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 109;
			this.libraryPathPart();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 110;
				this.match(XonParser.DOT);
				this.state = 111;
				this.libraryPathPart();
				}
				}
				this.state = 116;
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
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AT) {
				{
				this.state = 117;
				this.match(XonParser.AT);
				}
			}

			this.state = 120;
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
			this.state = 122;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 123;
				this.match(XonParser.AS);
				this.state = 124;
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
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				_localctx = new ClassDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				(_localctx as ClassDefinitionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 128;
					this.typeParameters();
					}
				}

				this.state = 131;
				this.methodParameters();
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 132;
					this.definitionAncestor();
					}
				}

				this.state = 148;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 135;
						this.match(XonParser.NL);
						}
						}
						this.state = 138;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === XonParser.NL);
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
							this.state = 141;
							this.attribute();
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
					} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.ASTERISK - 51)) | (1 << (XonParser.AND - 51)) | (1 << (XonParser.OR - 51)) | (1 << (XonParser.EXCLAMATION - 51)) | (1 << (XonParser.INSTANCE - 51)) | (1 << (XonParser.LOWER_ID - 51)) | (1 << (XonParser.NL - 51)))) !== 0));
					this.state = 147;
					this.match(XonParser.DEDENT);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ObjectDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				(_localctx as ObjectDefinitionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 151;
					this.typeParameters();
					}
				}

				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 154;
					this.definitionAncestor();
					}
				}

				this.state = 170;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 157;
						this.match(XonParser.NL);
						}
						}
						this.state = 160;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === XonParser.NL);
					this.state = 162;
					this.match(XonParser.INDENT);
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						this.state = 165;
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
							this.state = 163;
							this.attribute();
							}
							break;
						case XonParser.NL:
							{
							this.state = 164;
							this.match(XonParser.NL);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						this.state = 167;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.ASTERISK - 51)) | (1 << (XonParser.AND - 51)) | (1 << (XonParser.OR - 51)) | (1 << (XonParser.EXCLAMATION - 51)) | (1 << (XonParser.INSTANCE - 51)) | (1 << (XonParser.LOWER_ID - 51)) | (1 << (XonParser.NL - 51)))) !== 0));
					this.state = 169;
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
				this.state = 172;
				(_localctx as AliasDefinitionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 173;
					this.typeParameters();
					}
				}

				this.state = 176;
				this.match(XonParser.COLON);
				this.state = 177;
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
	public definitionAncestor(): DefinitionAncestorContext {
		let _localctx: DefinitionAncestorContext = new DefinitionAncestorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_definitionAncestor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(XonParser.IS);
			this.state = 181;
			this.type(0);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 182;
				this.methodArguments();
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
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				_localctx = new AbstractAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.attributeHeader();
				this.state = 186;
				this.type(0);
				}
				break;

			case 2:
				_localctx = new ValueAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.attributeHeader();
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
					{
					this.state = 189;
					this.type(0);
					}
				}

				this.state = 192;
				this.match(XonParser.COLON);
				this.state = 193;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new MethodAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				this.attributeHeader();
				this.state = 196;
				this.type(0);
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 197;
					this.match(XonParser.NL);
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 202;
				this.match(XonParser.INDENT);
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 205;
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
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.RETURN:
					case XonParser.PLUS:
					case XonParser.MINUS:
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
						this.state = 203;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 204;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 207;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.PREPROCESSOR - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)) | (1 << (XonParser.NL - 41)))) !== 0));
				this.state = 209;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				_localctx = new ObjectAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 211;
				this.attributeHeader();
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 212;
					this.match(XonParser.NL);
					}
					}
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 217;
				this.match(XonParser.INDENT);
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 220;
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
						this.state = 218;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 219;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 222;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.ASTERISK - 51)) | (1 << (XonParser.AND - 51)) | (1 << (XonParser.OR - 51)) | (1 << (XonParser.EXCLAMATION - 51)) | (1 << (XonParser.INSTANCE - 51)) | (1 << (XonParser.LOWER_ID - 51)) | (1 << (XonParser.NL - 51)))) !== 0));
				this.state = 224;
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
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0)) {
				{
				{
				this.state = 228;
				this.attributeModifier();
				}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 234;
			this.attributeName();
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 235;
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
	public attributeModifier(): AttributeModifierContext {
		let _localctx: AttributeModifierContext = new AttributeModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_attributeModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
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
	public attributeName(): AttributeNameContext {
		let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_attributeName);
		try {
			this.state = 243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.LOWER_ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.operator();
				}
				break;
			case XonParser.INSTANCE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 242;
				this.match(XonParser.INSTANCE);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.match(XonParser.FOR);
				this.state = 252;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 246;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 249;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 247;
						this.match(XonParser.COMMA);
						this.state = 248;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 251;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 254;
				this.expression(0);
				this.state = 255;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.match(XonParser.WHILE);
				this.state = 258;
				this.expression(0);
				this.state = 259;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.match(XonParser.DO);
				this.state = 262;
				this.body();
				this.state = 263;
				this.match(XonParser.WHILE);
				this.state = 264;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 266;
				this.match(XonParser.IF);
				this.state = 267;
				this.expression(0);
				this.state = 268;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 271;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					this.match(XonParser.ELSE);
					this.state = 270;
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
				this.state = 273;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 274;
				this.match(XonParser.RETURN);
				this.state = 276;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 275;
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
				this.state = 278;
				this.match(XonParser.ACTUAL);
				this.state = 279;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 280;
					this.match(XonParser.NL);
					}
					}
					this.state = 283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 285;
				this.match(XonParser.EXPECT);
				this.state = 286;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 288;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 289;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 290;
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
			this.state = 337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 293;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 294;
				this.match(XonParser.ASSIGN);
				this.state = 295;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 296;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 297;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 298;
					this.match(XonParser.COMMA);
					this.state = 299;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 305;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 306;
				this.match(XonParser.ASSIGN);
				this.state = 307;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 308;
				this.match(XonParser.OPEN_BRACE);
				this.state = 309;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 310;
					this.match(XonParser.COMMA);
					this.state = 311;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 317;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 318;
				this.match(XonParser.ASSIGN);
				this.state = 319;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 320;
				this.match(XonParser.INSTANCE);
				this.state = 321;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 322;
				this.match(XonParser.ASSIGN);
				this.state = 323;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 324;
				this.expression(0);
				this.state = 325;
				this.match(XonParser.DOT);
				this.state = 326;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 327;
				this.match(XonParser.ASSIGN);
				this.state = 328;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IndexerAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 330;
				this.expression(0);
				this.state = 331;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 332;
				this.expression(0);
				this.state = 333;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 334;
				this.match(XonParser.ASSIGN);
				this.state = 335;
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
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 340;
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
				this.state = 342;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 341;
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
				this.state = 344;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 345;
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
				this.state = 346;
				this.expression(17);
				}
				break;

			case 4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 347;
				this.lambdaParameters();
				this.state = 348;
				this.match(XonParser.COLON);
				this.state = 349;
				this.expression(5);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 351;
				this.arrayArguments();
				}
				break;

			case 6:
				{
				_localctx = new MapExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 352;
				this.mapArguments();
				}
				break;

			case 7:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 353;
				this.objectArguments();
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 354;
				this.match(XonParser.OPEN_PAREN);
				this.state = 355;
				this.expression(0);
				this.state = 356;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 413;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 411;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 360;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 361;
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
						this.state = 362;
						(_localctx as InfixExpressionContext)._right = this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 363;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 364;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 365;
						(_localctx as PowExpressionContext)._right = this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 366;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 367;
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
						this.state = 368;
						(_localctx as MulDivModExpressionContext)._right = this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 369;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 370;
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
						this.state = 371;
						(_localctx as AddSubExpressionContext)._right = this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 372;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 373;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 374;
						(_localctx as RangeExpressionContext)._right = this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 376;
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
						this.state = 377;
						(_localctx as ElvisExpressionContext)._right = this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 379;
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
						this.state = 380;
						(_localctx as RelationalExpressionContext)._right = this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 382;
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
						this.state = 383;
						(_localctx as EqualityExpressionContext)._right = this.expression(10);
						}
						break;

					case 9:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 385;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 386;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(9);
						}
						break;

					case 10:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 388;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 389;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(8);
						}
						break;

					case 11:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 390;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 391;
						this.match(XonParser.PIPE);
						this.state = 394;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
						case 1:
							{
							this.state = 392;
							(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
							this.state = 393;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 396;
						this.expression(7);
						}
						break;

					case 12:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 397;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 398;
						this.methodArguments();
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 399;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 400;
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
						this.state = 401;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 403;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
						case 1:
							{
							this.state = 402;
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
						this.state = 405;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 406;
						this.match(XonParser.IS);
						this.state = 407;
						this.type(0);
						}
						break;

					case 15:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 408;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 409;
						this.match(XonParser.AS);
						this.state = 410;
						this.type(0);
						}
						break;
					}
					}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 417;
				(_localctx as IdTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 419;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 418;
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
				this.state = 421;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new MethodTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 422;
				this.methodParameters();
				this.state = 424;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 423;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new ArrayFixedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 426;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
					{
					this.state = 427;
					this.type(0);
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 428;
						this.match(XonParser.COMMA);
						this.state = 429;
						this.type(0);
						}
						}
						this.state = 434;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 437;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new MapFixedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 438;
				this.mapParameters();
				}
				break;

			case 6:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 439;
				this.objectParameters();
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 440;
				this.match(XonParser.OPEN_PAREN);
				this.state = 441;
				this.type(0);
				this.state = 442;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 468;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 466;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 446;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 447;
						this.match(XonParser.OR);
						this.state = 448;
						this.type(10);
						}
						break;

					case 2:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 449;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 450;
						this.match(XonParser.AND);
						this.state = 451;
						this.type(9);
						}
						break;

					case 3:
						{
						_localctx = new MetaTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 452;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 453;
						this.match(XonParser.HASH);
						this.state = 454;
						(_localctx as MetaTypeContext)._name = this.match(XonParser.UPPER_ID);
						}
						break;

					case 4:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 455;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 456;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 457;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 458;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 459;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 6:
						{
						_localctx = new MapTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 460;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 461;
						this.match(XonParser.COLON);
						this.state = 462;
						this.type(0);
						this.state = 463;
						this.match(XonParser.OPEN_BRACE);
						this.state = 464;
						this.match(XonParser.CLOSE_BRACE);
						}
						break;
					}
					}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 473;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 474;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 475;
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
			this.state = 478;
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
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(XonParser.OPEN_PAREN);
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 481;
				_localctx._LOWER_ID = this.match(XonParser.LOWER_ID);
				_localctx._name.push(_localctx._LOWER_ID);
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 482;
					this.match(XonParser.COMMA);
					this.state = 483;
					_localctx._LOWER_ID = this.match(XonParser.LOWER_ID);
					_localctx._name.push(_localctx._LOWER_ID);
					}
					}
					this.state = 488;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 491;
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
	public methodParameter(): MethodParameterContext {
		let _localctx: MethodParameterContext = new MethodParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XonParser.RULE_methodParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 494;
			this.type(0);
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
	public methodParameters(): MethodParametersContext {
		let _localctx: MethodParametersContext = new MethodParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_methodParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(XonParser.OPEN_PAREN);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 497;
				this.methodParameter();
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 498;
					this.match(XonParser.COMMA);
					this.state = 499;
					this.methodParameter();
					}
					}
					this.state = 504;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 507;
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
	public methodArguments(): MethodArgumentsContext {
		let _localctx: MethodArgumentsContext = new MethodArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_methodArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(XonParser.OPEN_PAREN);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 510;
				this.expression(0);
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 511;
					this.match(XonParser.COMMA);
					this.state = 512;
					this.expression(0);
					}
					}
					this.state = 517;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 520;
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
	public mapParameter(): MapParameterContext {
		let _localctx: MapParameterContext = new MapParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_mapParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.type(0);
			this.state = 523;
			this.match(XonParser.COLON);
			this.state = 524;
			this.type(0);
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
	public mapParameters(): MapParametersContext {
		let _localctx: MapParametersContext = new MapParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XonParser.RULE_mapParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(XonParser.OPEN_BRACE);
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
				{
				this.state = 527;
				this.mapParameter();
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 528;
					this.match(XonParser.COMMA);
					this.state = 529;
					this.mapParameter();
					}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 537;
			this.match(XonParser.CLOSE_BRACE);
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
		this.enterRule(_localctx, 48, XonParser.RULE_mapArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.expression(0);
			this.state = 540;
			this.match(XonParser.COLON);
			this.state = 541;
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
	public mapArguments(): MapArgumentsContext {
		let _localctx: MapArgumentsContext = new MapArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XonParser.RULE_mapArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(XonParser.OPEN_BRACE);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 544;
				this.mapArgument();
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 545;
					this.match(XonParser.COMMA);
					this.state = 546;
					this.mapArgument();
					}
					}
					this.state = 551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 554;
			this.match(XonParser.CLOSE_BRACE);
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
	public objectParameter(): ObjectParameterContext {
		let _localctx: ObjectParameterContext = new ObjectParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, XonParser.RULE_objectParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 557;
			this.type(0);
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
	public objectParameters(): ObjectParametersContext {
		let _localctx: ObjectParametersContext = new ObjectParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, XonParser.RULE_objectParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this.match(XonParser.OPEN_BRACE);
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 560;
				this.objectParameter();
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 561;
					this.match(XonParser.COMMA);
					this.state = 562;
					this.objectParameter();
					}
					}
					this.state = 567;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 570;
			this.match(XonParser.CLOSE_BRACE);
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
	public objectArgument(): ObjectArgumentContext {
		let _localctx: ObjectArgumentContext = new ObjectArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, XonParser.RULE_objectArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 572;
				_localctx._name = this.match(XonParser.LOWER_ID);
				this.state = 573;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 576;
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
	public objectArguments(): ObjectArgumentsContext {
		let _localctx: ObjectArgumentsContext = new ObjectArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, XonParser.RULE_objectArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.match(XonParser.OPEN_BRACE);
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 579;
				this.objectArgument();
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 580;
					this.match(XonParser.COMMA);
					this.state = 581;
					this.objectArgument();
					}
					}
					this.state = 586;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 589;
			this.match(XonParser.CLOSE_BRACE);
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
	public arrayArguments(): ArrayArgumentsContext {
		let _localctx: ArrayArgumentsContext = new ArrayArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, XonParser.RULE_arrayArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 592;
				this.expression(0);
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 593;
					this.match(XonParser.COMMA);
					this.state = 594;
					this.expression(0);
					}
					}
					this.state = 599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 602;
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
		this.enterRule(_localctx, 62, XonParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 604;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 607;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 608;
				this.match(XonParser.IS);
				this.state = 609;
				this.type(0);
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
		this.enterRule(_localctx, 64, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(XonParser.LESS);
			this.state = 613;
			this.typeParameter();
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 614;
				this.match(XonParser.COMMA);
				this.state = 615;
				this.typeParameter();
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 621;
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
		this.enterRule(_localctx, 66, XonParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(XonParser.LESS);
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (XonParser.FLOAT_LITERAL - 60)) | (1 << (XonParser.INTEGER_LITERAL - 60)) | (1 << (XonParser.CHAR_LITERAL - 60)) | (1 << (XonParser.STRING_LITERAL - 60)) | (1 << (XonParser.REGEX_LITERAL - 60)) | (1 << (XonParser.UPPER_ID - 60)))) !== 0)) {
				{
				this.state = 624;
				this.type(0);
				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 625;
					this.match(XonParser.COMMA);
					this.state = 626;
					this.type(0);
					}
					}
					this.state = 631;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 634;
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
		this.enterRule(_localctx, 68, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(XonParser.COLON);
			this.state = 651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 637;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 638;
					this.match(XonParser.NL);
					}
					}
					this.state = 641;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 643;
				this.match(XonParser.INDENT);
				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 646;
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
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.RETURN:
					case XonParser.PLUS:
					case XonParser.MINUS:
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
						this.state = 644;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 645;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 648;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.INSTANCE - 41)) | (1 << (XonParser.INSTANCE_MEMBER - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.PREPROCESSOR - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)) | (1 << (XonParser.NL - 41)))) !== 0));
				this.state = 650;
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
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 7);

		case 10:
			return this.precpred(this._ctx, 6);

		case 11:
			return this.precpred(this._ctx, 21);

		case 12:
			return this.precpred(this._ctx, 20);

		case 13:
			return this.precpred(this._ctx, 19);

		case 14:
			return this.precpred(this._ctx, 18);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 9);

		case 16:
			return this.precpred(this._ctx, 8);

		case 17:
			return this.precpred(this._ctx, 11);

		case 18:
			return this.precpred(this._ctx, 10);

		case 19:
			return this.precpred(this._ctx, 5);

		case 20:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\u0290\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x03\x02\x03\x02\x03\x02\x07\x02L\n\x02\f\x02\x0E\x02O\v\x02" +
		"\x03\x02\x03\x02\x07\x02S\n\x02\f\x02\x0E\x02V\v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04c\n\x04\f\x04\x0E\x04f\v\x04\x05\x04h\n\x04\x03\x05\x07\x05k\n\x05" +
		"\f\x05\x0E\x05n\v\x05\x03\x05\x03\x05\x03\x05\x07\x05s\n\x05\f\x05\x0E" +
		"\x05v\v\x05\x03\x06\x05\x06y\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\x80\n\x07\x03\b\x03\b\x05\b\x84\n\b\x03\b\x03\b\x05\b\x88" +
		"\n\b\x03\b\x06\b\x8B\n\b\r\b\x0E\b\x8C\x03\b\x03\b\x03\b\x06\b\x92\n\b" +
		"\r\b\x0E\b\x93\x03\b\x05\b\x97\n\b\x03\b\x03\b\x05\b\x9B\n\b\x03\b\x05" +
		"\b\x9E\n\b\x03\b\x06\b\xA1\n\b\r\b\x0E\b\xA2\x03\b\x03\b\x03\b\x06\b\xA8" +
		"\n\b\r\b\x0E\b\xA9\x03\b\x05\b\xAD\n\b\x03\b\x03\b\x05\b\xB1\n\b\x03\b" +
		"\x03\b\x05\b\xB5\n\b\x03\t\x03\t\x03\t\x05\t\xBA\n\t\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\xC1\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\xC9" +
		"\n\n\r\n\x0E\n\xCA\x03\n\x03\n\x03\n\x06\n\xD0\n\n\r\n\x0E\n\xD1\x03\n" +
		"\x03\n\x03\n\x03\n\x06\n\xD8\n\n\r\n\x0E\n\xD9\x03\n\x03\n\x03\n\x06\n" +
		"\xDF\n\n\r\n\x0E\n\xE0\x03\n\x03\n\x05\n\xE5\n\n\x03\v\x07\v\xE8\n\v\f" +
		"\v\x0E\v\xEB\v\v\x03\v\x03\v\x05\v\xEF\n\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x05\r\xF6\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xFC\n\x0E\x03" +
		"\x0E\x05\x0E\xFF\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0112\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0117" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u011C\n\x0E\r\x0E\x0E\x0E\u011D" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0126\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u012F\n\x0F" +
		"\f\x0F\x0E\x0F\u0132\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u013B\n\x0F\f\x0F\x0E\x0F\u013E\v\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0154\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0159\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0169\n\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u018D\n\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0196\n\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u019E\n\x10\f\x10\x0E" +
		"\x10\u01A1\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u01A6\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u01AB\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u01B1\n\x11\f\x11\x0E\x11\u01B4\v\x11\x05\x11\u01B6\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01BF\n\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\u01D5\n\x11\f\x11\x0E\x11\u01D8\v\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\u01DF\n\x12\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u01E7\n\x14\f\x14\x0E\x14\u01EA\v\x14\x05" +
		"\x14\u01EC\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x07\x16\u01F7\n\x16\f\x16\x0E\x16\u01FA\v\x16\x05\x16" +
		"\u01FC\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0204" +
		"\n\x17\f\x17\x0E\x17\u0207\v\x17\x05\x17\u0209\n\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0215" +
		"\n\x19\f\x19\x0E\x19\u0218\v\x19\x05\x19\u021A\n\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0226" +
		"\n\x1B\f\x1B\x0E\x1B\u0229\v\x1B\x05\x1B\u022B\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0236\n\x1D" +
		"\f\x1D\x0E\x1D\u0239\v\x1D\x05\x1D\u023B\n\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x05\x1E\u0241\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x07\x1F\u0249\n\x1F\f\x1F\x0E\x1F\u024C\v\x1F\x05\x1F\u024E\n\x1F" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x07 \u0256\n \f \x0E \u0259\v \x05" +
		" \u025B\n \x03 \x03 \x03!\x05!\u0260\n!\x03!\x03!\x03!\x05!\u0265\n!\x03" +
		"\"\x03\"\x03\"\x03\"\x07\"\u026B\n\"\f\"\x0E\"\u026E\v\"\x03\"\x03\"\x03" +
		"#\x03#\x03#\x03#\x07#\u0276\n#\f#\x0E#\u0279\v#\x05#\u027B\n#\x03#\x03" +
		"#\x03$\x03$\x03$\x06$\u0282\n$\r$\x0E$\u0283\x03$\x03$\x03$\x06$\u0289" +
		"\n$\r$\x0E$\u028A\x03$\x05$\u028E\n$\x03$\x02\x02\x04\x1E %\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02\x02\f" +
		"\x05\x02\x14\x14\x1A\x1A\x1C\x1C\x04\x02<=DE\x07\x02\x0F\x0F\"\"++::E" +
		"E\x04\x02\x0F\x0FEE\x05\x02,,2255\x04\x02\"\"++\x04\x02%&)*\x03\x0201" +
		"\x04\x02\x1F\x1F44\f\x02  \"\"%%))+-00225578::\x02\u02F3\x02M\x03\x02" +
		"\x02\x02\x04W\x03\x02\x02\x02\x06Z\x03\x02\x02\x02\bl\x03\x02\x02\x02" +
		"\nx\x03\x02\x02\x02\f|\x03\x02\x02\x02\x0E\xB4\x03\x02\x02\x02\x10\xB6" +
		"\x03\x02\x02\x02\x12\xE4\x03\x02\x02\x02\x14\xE9\x03\x02\x02\x02\x16\xF0" +
		"\x03\x02\x02\x02\x18\xF5\x03\x02\x02\x02\x1A\u0125\x03\x02\x02\x02\x1C" +
		"\u0153\x03\x02\x02\x02\x1E\u0168\x03\x02\x02\x02 \u01BE\x03\x02\x02\x02" +
		"\"\u01DE\x03\x02\x02\x02$\u01E0\x03\x02\x02\x02&\u01E2\x03\x02\x02\x02" +
		"(\u01EF\x03\x02\x02\x02*\u01F2\x03\x02\x02\x02,\u01FF\x03\x02\x02\x02" +
		".\u020C\x03\x02\x02\x020\u0210\x03\x02\x02\x022\u021D\x03\x02\x02\x02" +
		"4\u0221\x03\x02\x02\x026\u022E\x03\x02\x02\x028\u0231\x03\x02\x02\x02" +
		":\u0240\x03\x02\x02\x02<\u0244\x03\x02\x02\x02>\u0251\x03\x02\x02\x02" +
		"@\u025F\x03\x02\x02\x02B\u0266\x03\x02\x02\x02D\u0271\x03\x02\x02\x02" +
		"F\u027E\x03\x02\x02\x02HL\x05\x06\x04\x02IL\x05\x04\x03\x02JL\x07F\x02" +
		"\x02KH\x03\x02\x02\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02LO\x03\x02\x02" +
		"\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NT\x03\x02\x02\x02OM\x03\x02\x02" +
		"\x02PS\x05\x0E\b\x02QS\x07F\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02" +
		"SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\x03\x03\x02\x02" +
		"\x02VT\x03\x02\x02\x02WX\x07\x18\x02\x02XY\x05\b\x05\x02Y\x05\x03\x02" +
		"\x02\x02Z[\x07\x19\x02\x02[g\x05\b\x05\x02\\]\x07\f\x02\x02]h\x07E\x02" +
		"\x02^_\x07(\x02\x02_d\x05\f\x07\x02`a\x07\'\x02\x02ac\x05\f\x07\x02b`" +
		"\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02" +
		"eh\x03\x02\x02\x02fd\x03\x02\x02\x02g\\\x03\x02\x02\x02g^\x03\x02\x02" +
		"\x02gh\x03\x02\x02\x02h\x07\x03\x02\x02\x02ik\x07\x1F\x02\x02ji\x03\x02" +
		"\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02" +
		"\x02\x02nl\x03\x02\x02\x02ot\x05\n\x06\x02pq\x07\x1F\x02\x02qs\x05\n\x06" +
		"\x02rp\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02u\t\x03\x02\x02\x02vt\x03\x02\x02\x02wy\x07\x1E\x02\x02xw\x03\x02" +
		"\x02\x02xy\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x07E\x02\x02{\v\x03\x02" +
		"\x02\x02|\x7F\x07D\x02\x02}~\x07\f\x02\x02~\x80\x07D\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\r\x03\x02\x02\x02\x81\x83\x07" +
		"D\x02\x02\x82\x84\x05B\"\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02" +
		"\x02\x84\x85\x03\x02\x02\x02\x85\x87\x05*\x16\x02\x86\x88\x05\x10\t\x02" +
		"\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x96\x03\x02\x02\x02" +
		"\x89\x8B\x07F\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02" +
		"\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02" +
		"\x8E\x91\x07\x03\x02\x02\x8F\x92\x05\x12\n\x02\x90\x92\x07F\x02\x02\x91" +
		"\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93" +
		"\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95" +
		"\x97\x07\x04\x02\x02\x96\x8A\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97" +
		"\xB5\x03\x02\x02\x02\x98\x9A\x07D\x02\x02\x99\x9B\x05B\"\x02\x9A\x99\x03" +
		"\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9E\x05" +
		"\x10\t\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xAC\x03" +
		"\x02\x02\x02\x9F\xA1\x07F\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA2\x03" +
		"\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03" +
		"\x02\x02\x02\xA4\xA7\x07\x03\x02\x02\xA5\xA8\x05\x12\n\x02\xA6\xA8\x07" +
		"F\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\xA9\x03" +
		"\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03" +
		"\x02\x02\x02\xAB\xAD\x07\x04\x02\x02\xAC\xA0\x03\x02\x02\x02\xAC\xAD\x03" +
		"\x02\x02\x02\xAD\xB5\x03\x02\x02\x02\xAE\xB0\x07D\x02\x02\xAF\xB1\x05" +
		"B\"\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02" +
		"\x02\x02\xB2\xB3\x07(\x02\x02\xB3\xB5\x05 \x11\x02\xB4\x81\x03\x02\x02" +
		"\x02\xB4\x98\x03\x02\x02\x02\xB4\xAE\x03\x02\x02\x02\xB5\x0F\x03\x02\x02" +
		"\x02\xB6\xB7\x07\v\x02\x02\xB7\xB9\x05 \x11\x02\xB8\xBA\x05,\x17\x02\xB9" +
		"\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\x11\x03\x02\x02\x02\xBB" +
		"\xBC\x05\x14\v\x02\xBC\xBD\x05 \x11\x02\xBD\xE5\x03\x02\x02\x02\xBE\xC0" +
		"\x05\x14\v\x02\xBF\xC1\x05 \x11\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03" +
		"\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x07(\x02\x02\xC3\xC4\x05" +
		"\x1E\x10\x02\xC4\xE5\x03\x02\x02\x02\xC5\xC6\x05\x14\v\x02\xC6\xC8\x05" +
		" \x11\x02\xC7\xC9\x07F\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02" +
		"\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02" +
		"\x02\x02\xCC\xCF\x07\x03\x02\x02\xCD\xD0\x05\x1A\x0E\x02\xCE\xD0\x07F" +
		"\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02" +
		"\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02" +
		"\x02\x02\xD3\xD4\x07\x04\x02\x02\xD4\xE5\x03\x02\x02\x02\xD5\xD7\x05\x14" +
		"\v\x02\xD6\xD8\x07F\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02" +
		"\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02" +
		"\x02\xDB\xDE\x07\x03\x02\x02\xDC\xDF\x05\x12\n\x02\xDD\xDF\x07F\x02\x02" +
		"\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02" +
		"\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02" +
		"\xE2\xE3\x07\x04\x02\x02\xE3\xE5\x03\x02\x02\x02\xE4\xBB\x03\x02\x02\x02" +
		"\xE4\xBE\x03\x02\x02\x02\xE4\xC5\x03\x02\x02\x02\xE4\xD5\x03\x02\x02\x02" +
		"\xE5\x13\x03\x02\x02\x02\xE6\xE8\x05\x16\f\x02\xE7\xE6\x03\x02\x02\x02" +
		"\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02" +
		"\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xEE\x05\x18\r\x02" +
		"\xED\xEF\x05B\"\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF" +
		"\x15\x03\x02\x02\x02\xF0\xF1\t\x02\x02\x02\xF1\x17\x03\x02\x02\x02\xF2" +
		"\xF6\x07E\x02\x02\xF3\xF6\x05$\x13\x02\xF4\xF6\x07<\x02\x02\xF5\xF2\x03" +
		"\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\x19\x03" +
		"\x02\x02\x02\xF7\xFE\x07\x10\x02\x02\xF8\xFB\x07E\x02\x02\xF9\xFA\x07" +
		"\'\x02\x02\xFA\xFC\x07E\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02" +
		"\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x07\x0F\x02\x02\xFE\xF8\x03\x02" +
		"\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101" +
		"\x05\x1E\x10\x02\u0101\u0102\x05F$\x02\u0102\u0126\x03\x02\x02\x02\u0103" +
		"\u0104\x07\x15\x02\x02\u0104\u0105\x05\x1E\x10\x02\u0105\u0106\x05F$\x02" +
		"\u0106\u0126\x03\x02\x02\x02\u0107\u0108\x07\r\x02\x02\u0108\u0109\x05" +
		"F$\x02\u0109\u010A\x07\x15\x02\x02\u010A\u010B\x05\x1E\x10\x02\u010B\u0126" +
		"\x03\x02\x02\x02\u010C\u010D\x07\x0E\x02\x02\u010D\u010E\x05\x1E\x10\x02" +
		"\u010E\u0111\x05F$\x02\u010F\u0110\x07\x11\x02\x02\u0110\u0112\x05F$\x02" +
		"\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0126\x03" +
		"\x02\x02\x02\u0113\u0126\x07\x13\x02\x02\u0114\u0116\x07\x1B\x02\x02\u0115" +
		"\u0117\x05\x1E\x10\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02" +
		"\x02\x02\u0117\u0126\x03\x02\x02\x02\u0118\u0119\x07\x16\x02\x02\u0119" +
		"\u011B\x05\x1E\x10\x02\u011A\u011C\x07F\x02\x02\u011B\u011A\x03\x02\x02" +
		"\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E" +
		"\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x07\x17\x02\x02" +
		"\u0120\u0121\x05\x1E\x10\x02\u0121\u0126\x03\x02\x02\x02\u0122\u0126\x07" +
		"C\x02\x02\u0123\u0126\x05\x1E\x10\x02\u0124\u0126\x05\x1C\x0F\x02\u0125" +
		"\xF7\x03\x02\x02\x02\u0125\u0103\x03\x02\x02\x02\u0125\u0107\x03\x02\x02" +
		"\x02\u0125\u010C\x03\x02\x02\x02\u0125\u0113\x03\x02\x02\x02\u0125\u0114" +
		"\x03\x02\x02\x02\u0125\u0118\x03\x02\x02\x02\u0125\u0122\x03\x02\x02\x02" +
		"\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126\x1B\x03" +
		"\x02\x02\x02\u0127\u0128\x07E\x02\x02\u0128\u0129\x07/\x02\x02\u0129\u0154" +
		"\x05\x1E\x10\x02\u012A\u012B\x07\x05\x02\x02\u012B\u0130\x07E\x02\x02" +
		"\u012C\u012D\x07\'\x02\x02\u012D\u012F\x07E\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u0130\x03\x02" +
		"\x02\x02\u0133\u0134\x07\x06\x02\x02\u0134\u0135\x07/\x02\x02\u0135\u0154" +
		"\x05\x1E\x10\x02\u0136\u0137\x07\t\x02\x02\u0137\u013C\x07E\x02\x02\u0138" +
		"\u0139\x07\'\x02\x02\u0139\u013B\x07E\x02\x02\u013A\u0138\x03\x02\x02" +
		"\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D" +
		"\x03\x02\x02\x02\u013D\u013F\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02" +
		"\u013F\u0140\x07\n\x02\x02\u0140\u0141\x07/\x02\x02\u0141\u0154\x05\x1E" +
		"\x10\x02\u0142\u0143\x07<\x02\x02\u0143\u0144\x07E\x02\x02\u0144\u0145" +
		"\x07/\x02\x02\u0145\u0154\x05\x1E\x10\x02\u0146\u0147\x05\x1E\x10\x02" +
		"\u0147\u0148\x07\x1F\x02\x02\u0148\u0149\x07E\x02\x02\u0149\u014A\x07" +
		"/\x02\x02\u014A\u014B\x05\x1E\x10\x02\u014B\u0154\x03\x02\x02\x02\u014C" +
		"\u014D\x05\x1E\x10\x02\u014D\u014E\x07\x05\x02\x02\u014E\u014F\x05\x1E" +
		"\x10\x02\u014F\u0150\x07\x06\x02\x02\u0150\u0151\x07/\x02\x02\u0151\u0152" +
		"\x05\x1E\x10\x02\u0152\u0154\x03\x02\x02\x02\u0153\u0127\x03\x02\x02\x02" +
		"\u0153\u012A\x03\x02\x02\x02\u0153\u0136\x03\x02\x02\x02\u0153\u0142\x03" +
		"\x02\x02\x02\u0153\u0146\x03\x02\x02\x02\u0153\u014C\x03\x02\x02\x02\u0154" +
		"\x1D\x03\x02\x02\x02\u0155\u0156\b\x10\x01\x02\u0156\u0158\t\x03\x02\x02" +
		"\u0157\u0159\x05D#\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02" +
		"\x02\x02\u0159\u0169\x03\x02\x02\x02\u015A\u0169\x05\"\x12\x02\u015B\u015C" +
		"\t\x04\x02\x02\u015C\u0169\x05\x1E\x10\x13\u015D\u015E\x05&\x14\x02\u015E" +
		"\u015F\x07(\x02\x02\u015F\u0160\x05\x1E\x10\x07\u0160\u0169\x03\x02\x02" +
		"\x02\u0161\u0169\x05> \x02\u0162\u0169\x054\x1B\x02\u0163\u0169\x05<\x1F" +
		"\x02\u0164\u0165\x07\x07\x02\x02\u0165\u0166\x05\x1E\x10\x02\u0166\u0167" +
		"\x07\b\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u0155\x03\x02\x02\x02" +
		"\u0168\u015A\x03\x02\x02\x02\u0168\u015B\x03\x02\x02\x02\u0168\u015D\x03" +
		"\x02\x02\x02\u0168\u0161\x03\x02\x02\x02\u0168\u0162\x03\x02\x02\x02\u0168" +
		"\u0163\x03\x02\x02\x02\u0168\u0164\x03\x02\x02\x02\u0169\u019F\x03\x02" +
		"\x02\x02\u016A\u016B\f\x12\x02\x02\u016B\u016C\t\x05\x02\x02\u016C\u019E" +
		"\x05\x1E\x10\x13\u016D\u016E\f\x11\x02\x02\u016E\u016F\x07-\x02\x02\u016F" +
		"\u019E\x05\x1E\x10\x12\u0170\u0171\f\x10\x02\x02\u0171\u0172\t\x06\x02" +
		"\x02\u0172\u019E\x05\x1E\x10\x11\u0173\u0174\f\x0F\x02\x02\u0174\u0175" +
		"\t\x07\x02\x02\u0175\u019E\x05\x1E\x10\x10\u0176\u0177\f\x0E\x02\x02\u0177" +
		"\u0178\x07 \x02\x02\u0178\u019E\x05\x1E\x10\x0F\u0179\u017A\f\r\x02\x02" +
		"\u017A\u017B\x073\x02\x02\u017B\u019E\x05\x1E\x10\x0E\u017C\u017D\f\f" +
		"\x02\x02\u017D\u017E\t\b\x02\x02\u017E\u019E\x05\x1E\x10\r\u017F\u0180" +
		"\f\v\x02\x02\u0180\u0181\t\t\x02\x02\u0181\u019E\x05\x1E\x10\f\u0182\u0183" +
		"\f\n\x02\x02\u0183\u0184\x077\x02\x02\u0184\u019E\x05\x1E\x10\v\u0185" +
		"\u0186\f\t\x02\x02\u0186\u0187\x078\x02\x02\u0187\u019E\x05\x1E\x10\n" +
		"\u0188\u0189\f\b\x02\x02\u0189\u018C\x07$\x02\x02\u018A\u018B\x07E\x02" +
		"\x02\u018B\u018D\x07(\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D" +
		"\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u019E\x05\x1E\x10\t" +
		"\u018F\u0190\f\x17\x02\x02\u0190\u019E\x05,\x17\x02\u0191\u0192\f\x16" +
		"\x02\x02\u0192\u0193\t\n\x02\x02\u0193\u0195\x07E\x02\x02\u0194\u0196" +
		"\x05D#\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u019E\x03\x02\x02\x02\u0197\u0198\f\x15\x02\x02\u0198\u0199\x07\v\x02" +
		"\x02\u0199\u019E\x05 \x11\x02\u019A\u019B\f\x14\x02\x02\u019B\u019C\x07" +
		"\f\x02\x02\u019C\u019E\x05 \x11\x02\u019D\u016A\x03\x02\x02\x02\u019D" +
		"\u016D\x03\x02\x02\x02\u019D\u0170\x03\x02\x02\x02\u019D\u0173\x03\x02" +
		"\x02\x02\u019D\u0176\x03\x02\x02\x02\u019D\u0179\x03\x02\x02\x02\u019D" +
		"\u017C\x03\x02\x02\x02\u019D\u017F\x03\x02\x02\x02\u019D\u0182\x03\x02" +
		"\x02\x02\u019D\u0185\x03\x02\x02\x02\u019D\u0188\x03\x02\x02\x02\u019D" +
		"\u018F\x03\x02\x02\x02\u019D\u0191\x03\x02\x02\x02\u019D\u0197\x03\x02" +
		"\x02\x02\u019D\u019A\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F" +
		"\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\x1F\x03\x02\x02" +
		"\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\b\x11\x01\x02\u01A3\u01A5" +
		"\x07D\x02\x02\u01A4\u01A6\x05D#\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\u01BF\x03\x02\x02\x02\u01A7\u01BF\x05\"\x12" +
		"\x02\u01A8\u01AA\x05*\x16\x02\u01A9\u01AB\x05 \x11\x02\u01AA\u01A9\x03" +
		"\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01BF\x03\x02\x02\x02\u01AC" +
		"\u01B5\x07\x05\x02\x02\u01AD\u01B2\x05 \x11\x02\u01AE\u01AF\x07\'\x02" +
		"\x02\u01AF\u01B1\x05 \x11\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B4" +
		"\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02" +
		"\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01AD\x03" +
		"\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01BF\x07\x06\x02\x02\u01B8\u01BF\x050\x19\x02\u01B9\u01BF\x058\x1D\x02" +
		"\u01BA\u01BB\x07\x07\x02\x02\u01BB\u01BC\x05 \x11\x02\u01BC\u01BD\x07" +
		"\b\x02\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01A2\x03\x02\x02\x02\u01BE" +
		"\u01A7\x03\x02\x02\x02\u01BE\u01A8\x03\x02\x02\x02\u01BE\u01AC\x03\x02" +
		"\x02\x02\u01BE\u01B8\x03\x02\x02\x02\u01BE\u01B9\x03\x02\x02\x02\u01BE" +
		"\u01BA\x03\x02\x02\x02\u01BF\u01D6\x03\x02\x02\x02\u01C0\u01C1\f\v\x02" +
		"\x02\u01C1\u01C2\x078\x02\x02\u01C2\u01D5\x05 \x11\f\u01C3\u01C4\f\n\x02" +
		"\x02\u01C4\u01C5\x077\x02\x02\u01C5\u01D5\x05 \x11\v\u01C6\u01C7\f\r\x02" +
		"\x02\u01C7\u01C8\x07#\x02\x02\u01C8\u01D5\x07D\x02\x02\u01C9\u01CA\f\f" +
		"\x02\x02\u01CA\u01D5\x073\x02\x02\u01CB\u01CC\f\x07\x02\x02\u01CC\u01CD" +
		"\x07\x05\x02\x02\u01CD\u01D5\x07\x06\x02\x02\u01CE\u01CF\f\x05\x02\x02" +
		"\u01CF\u01D0\x07(\x02\x02\u01D0\u01D1\x05 \x11\x02\u01D1\u01D2\x07\t\x02" +
		"\x02\u01D2\u01D3\x07\n\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01C0" +
		"\x03\x02\x02\x02\u01D4\u01C3\x03\x02\x02\x02\u01D4\u01C6\x03\x02\x02\x02" +
		"\u01D4\u01C9\x03\x02\x02\x02\u01D4\u01CB\x03\x02\x02\x02\u01D4\u01CE\x03" +
		"\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6" +
		"\u01D7\x03\x02\x02\x02\u01D7!\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02" +
		"\x02\u01D9\u01DF\x07?\x02\x02\u01DA\u01DF\x07>\x02\x02\u01DB\u01DF\x07" +
		"@\x02\x02\u01DC\u01DF\x07A\x02\x02\u01DD\u01DF\x07B\x02\x02\u01DE\u01D9" +
		"\x03\x02\x02\x02\u01DE\u01DA\x03\x02\x02\x02\u01DE\u01DB\x03\x02\x02\x02" +
		"\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF#\x03\x02" +
		"\x02\x02\u01E0\u01E1\t\v\x02\x02\u01E1%\x03\x02\x02\x02\u01E2\u01EB\x07" +
		"\x07\x02\x02\u01E3\u01E8\x07E\x02\x02\u01E4\u01E5\x07\'\x02\x02\u01E5" +
		"\u01E7\x07E\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02" +
		"\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EC" +
		"\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01E3\x03\x02\x02\x02" +
		"\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x07" +
		"\b\x02\x02\u01EE\'\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01EF\u01F0\x07E\x02\x02\u01F0\u01F1\x05 \x11\x02\u01F1)\x03\x02\x02" +
		"\x02\u01F2\u01FB\x07\x07\x02\x02\u01F3\u01F8\x05(\x15\x02\u01F4\u01F5" +
		"\x07\'\x02\x02\u01F5\u01F7\x05(\x15\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7" +
		"\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02" +
		"\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB" +
		"\u01F3\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x03\x02" +
		"\x02\x02\u01FD\u01FE\x07\b\x02\x02\u01FE+\x03\x02\x02\x02\u01FF\u0208" +
		"\x07\x07\x02\x02\u0200\u0205\x05\x1E\x10\x02\u0201\u0202\x07\'\x02\x02" +
		"\u0202\u0204\x05\x1E\x10\x02\u0203\u0201\x03\x02\x02\x02\u0204\u0207\x03" +
		"\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206" +
		"\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u0200\x03\x02" +
		"\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020B\x07\b\x02\x02\u020B-\x03\x02\x02\x02\u020C\u020D\x05 \x11\x02\u020D" +
		"\u020E\x07(\x02\x02\u020E\u020F\x05 \x11\x02\u020F/\x03\x02\x02\x02\u0210" +
		"\u0219\x07\t\x02\x02\u0211\u0216\x05.\x18\x02\u0212\u0213\x07\'\x02\x02" +
		"\u0213\u0215\x05.\x18\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0218\x03" +
		"\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217" +
		"\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0219\u0211\x03\x02" +
		"\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B" +
		"\u021C\x07\n\x02\x02\u021C1\x03\x02\x02\x02\u021D\u021E\x05\x1E\x10\x02" +
		"\u021E\u021F\x07(\x02\x02\u021F\u0220\x05\x1E\x10\x02\u02203\x03\x02\x02" +
		"\x02\u0221\u022A\x07\t\x02\x02\u0222\u0227\x052\x1A\x02\u0223\u0224\x07" +
		"\'\x02\x02\u0224\u0226\x052\x1A\x02\u0225\u0223\x03\x02\x02\x02\u0226" +
		"\u0229\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02" +
		"\x02\x02\u0228\u022B\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A" +
		"\u0222\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\x03\x02" +
		"\x02\x02\u022C\u022D\x07\n\x02\x02\u022D5\x03\x02\x02\x02\u022E\u022F" +
		"\x07E\x02\x02\u022F\u0230\x05 \x11\x02\u02307\x03\x02\x02\x02\u0231\u023A" +
		"\x07\t\x02\x02\u0232\u0237\x056\x1C\x02\u0233\u0234\x07\'\x02\x02\u0234" +
		"\u0236\x056\x1C\x02\u0235\u0233\x03\x02\x02\x02\u0236\u0239\x03\x02\x02" +
		"\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u023B" +
		"\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u023A\u0232\x03\x02\x02\x02" +
		"\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x07" +
		"\n\x02\x02\u023D9\x03\x02\x02\x02\u023E\u023F\x07E\x02\x02\u023F\u0241" +
		"\x07(\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02" +
		"\u0241\u0242\x03\x02\x02\x02\u0242\u0243\x05\x1E\x10\x02\u0243;\x03\x02" +
		"\x02\x02\u0244\u024D\x07\t\x02\x02\u0245\u024A\x05:\x1E\x02\u0246\u0247" +
		"\x07\'\x02\x02\u0247\u0249\x05:\x1E\x02\u0248\u0246\x03\x02\x02\x02\u0249" +
		"\u024C\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02" +
		"\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D" +
		"\u0245\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u024F\x03\x02" +
		"\x02\x02\u024F\u0250\x07\n\x02\x02\u0250=\x03\x02\x02\x02\u0251\u025A" +
		"\x07\x05\x02\x02\u0252\u0257\x05\x1E\x10\x02\u0253\u0254\x07\'\x02\x02" +
		"\u0254\u0256\x05\x1E\x10\x02\u0255\u0253\x03\x02\x02\x02\u0256\u0259\x03" +
		"\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258" +
		"\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A\u0252\x03\x02" +
		"\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C" +
		"\u025D\x07\x06\x02\x02\u025D?\x03\x02\x02\x02\u025E\u0260\x07!\x02\x02" +
		"\u025F\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x03" +
		"\x02\x02\x02\u0261\u0264\x07D\x02\x02\u0262\u0263\x07\v\x02\x02\u0263" +
		"\u0265\x05 \x11\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02" +
		"\x02\u0265A\x03\x02\x02\x02\u0266\u0267\x07%\x02\x02\u0267\u026C\x05@" +
		"!\x02\u0268\u0269\x07\'\x02\x02\u0269\u026B\x05@!\x02\u026A\u0268\x03" +
		"\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C" +
		"\u026D\x03\x02\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E\u026C\x03\x02" +
		"\x02\x02\u026F\u0270\x07)\x02\x02\u0270C\x03\x02\x02\x02\u0271\u027A\x07" +
		"%\x02\x02\u0272\u0277\x05 \x11\x02\u0273\u0274\x07\'\x02\x02\u0274\u0276" +
		"\x05 \x11\x02\u0275\u0273\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02" +
		"\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027B\x03" +
		"\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u0272\x03\x02\x02\x02\u027A" +
		"\u027B\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027D\x07)\x02" +
		"\x02\u027DE\x03\x02\x02\x02\u027E\u028D\x07(\x02\x02\u027F\u028E\x05\x1A" +
		"\x0E\x02\u0280\u0282\x07F\x02\x02\u0281\u0280\x03\x02\x02\x02\u0282\u0283" +
		"\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02" +
		"\u0284\u0285\x03\x02\x02\x02\u0285\u0288\x07\x03\x02\x02\u0286\u0289\x05" +
		"\x1A\x0E\x02\u0287\u0289\x07F\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288" +
		"\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u0288\x03\x02" +
		"\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C" +
		"\u028E\x07\x04\x02\x02\u028D\u027F\x03\x02\x02\x02\u028D\u0281\x03\x02" +
		"\x02\x02\u028D\u028E\x03\x02\x02\x02\u028EG\x03\x02\x02\x02WKMRTdgltx" +
		"\x7F\x83\x87\x8C\x91\x93\x96\x9A\x9D\xA2\xA7\xA9\xAC\xB0\xB4\xB9\xC0\xCA" +
		"\xCF\xD1\xD9\xDE\xE0\xE4\xE9\xEE\xF5\xFB\xFE\u0111\u0116\u011D\u0125\u0130" +
		"\u013C\u0153\u0158\u0168\u018C\u0195\u019D\u019F\u01A5\u01AA\u01B2\u01B5" +
		"\u01BE\u01D4\u01D6\u01DE\u01E8\u01EB\u01F8\u01FB\u0205\u0208\u0216\u0219" +
		"\u0227\u022A\u0237\u023A\u0240\u024A\u024D\u0257\u025A\u025F\u0264\u026C" +
		"\u0277\u027A\u0283\u0288\u028A\u028D";
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
	public methodParameters(): MethodParametersContext {
		return this.getRuleContext(0, MethodParametersContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public definitionAncestor(): DefinitionAncestorContext | undefined {
		return this.tryGetRuleContext(0, DefinitionAncestorContext);
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
export class ObjectDefinitionContext extends DefinitionContext {
	public _name!: Token;
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public definitionAncestor(): DefinitionAncestorContext | undefined {
		return this.tryGetRuleContext(0, DefinitionAncestorContext);
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
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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


export class DefinitionAncestorContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public methodArguments(): MethodArgumentsContext | undefined {
		return this.tryGetRuleContext(0, MethodArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionAncestor; }
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
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
export class ObjectAttributeContext extends AttributeContext {
	public attributeHeader(): AttributeHeaderContext {
		return this.getRuleContext(0, AttributeHeaderContext);
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
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
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


export class AttributeModifierContext extends ParserRuleContext {
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public POSTFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.POSTFIX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attributeModifier; }
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
export class MethodExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public methodArguments(): MethodArgumentsContext {
		return this.getRuleContext(0, MethodArgumentsContext);
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
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
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
export class ArrayExpressionContext extends ExpressionContext {
	public arrayArguments(): ArrayArgumentsContext {
		return this.getRuleContext(0, ArrayArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MapExpressionContext extends ExpressionContext {
	public mapArguments(): MapArgumentsContext {
		return this.getRuleContext(0, MapArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExpressionContext {
	public objectArguments(): ObjectArgumentsContext {
		return this.getRuleContext(0, ObjectArgumentsContext);
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
export class MetaTypeContext extends TypeContext {
	public _name!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode { return this.getToken(XonParser.HASH, 0); }
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
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
	public AND(): TerminalNode { return this.getToken(XonParser.AND, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodTypeContext extends TypeContext {
	public methodParameters(): MethodParametersContext {
		return this.getRuleContext(0, MethodParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayFixedTypeContext extends TypeContext {
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
export class MapFixedTypeContext extends TypeContext {
	public mapParameters(): MapParametersContext {
		return this.getRuleContext(0, MapParametersContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MapTypeContext extends TypeContext {
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
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectTypeContext extends TypeContext {
	public objectParameters(): ObjectParametersContext {
		return this.getRuleContext(0, ObjectParametersContext);
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


export class LambdaParametersContext extends ParserRuleContext {
	public _LOWER_ID!: Token;
	public _name: Token[] = [];
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_lambdaParameters; }
}


export class MethodParameterContext extends ParserRuleContext {
	public _name!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_methodParameter; }
}


export class MethodParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public methodParameter(): MethodParameterContext[];
	public methodParameter(i: number): MethodParameterContext;
	public methodParameter(i?: number): MethodParameterContext | MethodParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodParameterContext);
		} else {
			return this.getRuleContext(i, MethodParameterContext);
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
	public get ruleIndex(): number { return XonParser.RULE_methodParameters; }
}


export class MethodArgumentsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_methodArguments; }
}


export class MapParameterContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_mapParameter; }
}


export class MapParametersContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public mapParameter(): MapParameterContext[];
	public mapParameter(i: number): MapParameterContext;
	public mapParameter(i?: number): MapParameterContext | MapParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapParameterContext);
		} else {
			return this.getRuleContext(i, MapParameterContext);
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
	public get ruleIndex(): number { return XonParser.RULE_mapParameters; }
}


export class MapArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_mapArgument; }
}


export class MapArgumentsContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_mapArguments; }
}


export class ObjectParameterContext extends ParserRuleContext {
	public _name!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_objectParameter; }
}


export class ObjectParametersContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public objectParameter(): ObjectParameterContext[];
	public objectParameter(i: number): ObjectParameterContext;
	public objectParameter(i?: number): ObjectParameterContext | ObjectParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectParameterContext);
		} else {
			return this.getRuleContext(i, ObjectParameterContext);
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
	public get ruleIndex(): number { return XonParser.RULE_objectParameters; }
}


export class ObjectArgumentContext extends ParserRuleContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_objectArgument; }
}


export class ObjectArgumentsContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public objectArgument(): ObjectArgumentContext[];
	public objectArgument(i: number): ObjectArgumentContext;
	public objectArgument(i?: number): ObjectArgumentContext | ObjectArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectArgumentContext);
		} else {
			return this.getRuleContext(i, ObjectArgumentContext);
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
	public get ruleIndex(): number { return XonParser.RULE_objectArguments; }
}


export class ArrayArgumentsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_arrayArguments; }
}


export class TypeParameterContext extends ParserRuleContext {
	public _name!: Token;
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
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


