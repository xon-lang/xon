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
	public static readonly RULE_libraryPath = 3;
	public static readonly RULE_libraryMember = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_definitionHeader = 6;
	public static readonly RULE_definitionAncestors = 7;
	public static readonly RULE_definitionBody = 8;
	public static readonly RULE_attribute = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_literal = 13;
	public static readonly RULE_parameter = 14;
	public static readonly RULE_parameters = 15;
	public static readonly RULE_indexerParameters = 16;
	public static readonly RULE_objectParameters = 17;
	public static readonly RULE_tupleParameters = 18;
	public static readonly RULE_lambdaParameter = 19;
	public static readonly RULE_lambdaParameters = 20;
	public static readonly RULE_lambdaArguments = 21;
	public static readonly RULE_arrayArguments = 22;
	public static readonly RULE_objectArguments = 23;
	public static readonly RULE_objectArgument = 24;
	public static readonly RULE_typeParameter = 25;
	public static readonly RULE_typeParameters = 26;
	public static readonly RULE_typeArguments = 27;
	public static readonly RULE_body = 28;
	public static readonly RULE_attributeId = 29;
	public static readonly RULE_id = 30;
	public static readonly RULE_definitionModifier = 31;
	public static readonly RULE_operator = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "libraryPath", "libraryMember", "definition", 
		"definitionHeader", "definitionAncestors", "definitionBody", "attribute", 
		"statement", "expression", "type", "literal", "parameter", "parameters", 
		"indexerParameters", "objectParameters", "tupleParameters", "lambdaParameter", 
		"lambdaParameters", "lambdaArguments", "arrayArguments", "objectArguments", 
		"objectArgument", "typeParameter", "typeParameters", "typeArguments", 
		"body", "attributeId", "id", "definitionModifier", "operator",
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
			this.state = 71;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 69;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 66;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 67;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 68;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)))) !== 0) || _la === XonParser.NL) {
				{
				this.state = 76;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.CLASS:
				case XonParser.ENUM:
				case XonParser.EXTENSION:
				case XonParser.INTERFACE:
				case XonParser.OBJECT:
				case XonParser.TYPE:
					{
					this.state = 74;
					this.definition();
					}
					break;
				case XonParser.NL:
					{
					this.state = 75;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 80;
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
			this.state = 81;
			this.match(XonParser.EXPORT);
			this.state = 82;
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
			this.state = 84;
			this.match(XonParser.IMPORT);
			this.state = 85;
			this.libraryPath();
			this.state = 86;
			this.match(XonParser.COLON);
			this.state = 87;
			this.libraryMember();
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 88;
				this.match(XonParser.COMMA);
				this.state = 89;
				this.libraryMember();
				}
				}
				this.state = 94;
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.id();
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 96;
				this.match(XonParser.DOT);
				this.state = 97;
				this.id();
				}
				}
				this.state = 102;
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
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			_localctx._name = this.id();
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 104;
				this.match(XonParser.AS);
				this.state = 105;
				_localctx._alias = this.id();
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
		this.enterRule(_localctx, 10, XonParser.RULE_definition);
		let _la: number;
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.TYPE:
				_localctx = new AliasDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.match(XonParser.TYPE);
				this.state = 109;
				this.id();
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 110;
					this.typeParameters();
					}
				}

				this.state = 113;
				this.match(XonParser.COLON);
				this.state = 114;
				this.type(0);
				}
				break;
			case XonParser.CLASS:
			case XonParser.ENUM:
			case XonParser.EXTENSION:
			case XonParser.INTERFACE:
			case XonParser.OBJECT:
				_localctx = new TypeDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.definitionModifier();
				this.state = 118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 117;
					this.definitionHeader();
					}
					break;
				}
				this.state = 121;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 120;
					this.definitionBody();
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
	public definitionHeader(): DefinitionHeaderContext {
		let _localctx: DefinitionHeaderContext = new DefinitionHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_definitionHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.id();
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 126;
				this.typeParameters();
				}
			}

			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 129;
				this.parameters();
				}
			}

			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 132;
				this.definitionAncestors();
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
	public definitionAncestors(): DefinitionAncestorsContext {
		let _localctx: DefinitionAncestorsContext = new DefinitionAncestorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_definitionAncestors);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(XonParser.IS);
			this.state = 136;
			this.type(0);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 137;
				this.match(XonParser.COMMA);
				this.state = 138;
				this.type(0);
				}
				}
				this.state = 143;
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
	public definitionBody(): DefinitionBodyContext {
		let _localctx: DefinitionBodyContext = new DefinitionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_definitionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
				case XonParser.CLASS:
				case XonParser.ENUM:
				case XonParser.EXTENSION:
				case XonParser.INTERFACE:
				case XonParser.OBJECT:
				case XonParser.ASSIGN:
				case XonParser.ASTERISK:
				case XonParser.CARET:
				case XonParser.GREAT:
				case XonParser.LESS:
				case XonParser.MINUS:
				case XonParser.MODULO:
				case XonParser.PLUS:
				case XonParser.SLASH:
				case XonParser.STRING_LITERAL:
				case XonParser.ID:
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
			} while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)) | (1 << (XonParser.NL - 49)))) !== 0));
			this.state = 156;
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_attribute);
		let _la: number;
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				_localctx = new ValueAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.attributeId();
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
					{
					this.state = 159;
					this.type(0);
					}
				}

				this.state = 162;
				this.match(XonParser.COLON);
				this.state = 163;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new MethodAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.attributeId();
				this.state = 166;
				this.type(0);
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 167;
					this.match(XonParser.NL);
					}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 172;
				this.match(XonParser.INDENT);
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 175;
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
					case XonParser.EXTENSION:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.INTERFACE:
					case XonParser.NOT:
					case XonParser.OBJECT:
					case XonParser.RETURN:
					case XonParser.WHILE:
					case XonParser.MINUS:
					case XonParser.PLUS:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 173;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 174;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.WHILE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.PREPROCESSOR - 53)) | (1 << (XonParser.ID - 53)) | (1 << (XonParser.NL - 53)))) !== 0));
				this.state = 179;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new ObjectAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 181;
				this.attributeId();
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 182;
					this.match(XonParser.NL);
					}
					}
					this.state = 185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 187;
				this.match(XonParser.INDENT);
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 190;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.CLASS:
					case XonParser.ENUM:
					case XonParser.EXTENSION:
					case XonParser.INTERFACE:
					case XonParser.OBJECT:
					case XonParser.ASSIGN:
					case XonParser.ASTERISK:
					case XonParser.CARET:
					case XonParser.GREAT:
					case XonParser.LESS:
					case XonParser.MINUS:
					case XonParser.MODULO:
					case XonParser.PLUS:
					case XonParser.SLASH:
					case XonParser.STRING_LITERAL:
					case XonParser.ID:
						{
						this.state = 188;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 189;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)) | (1 << (XonParser.NL - 49)))) !== 0));
				this.state = 194;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				_localctx = new AbstractAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 196;
				this.attributeId();
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 197;
					this.type(0);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.match(XonParser.FOR);
				this.state = 210;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 203;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 204;
						this.match(XonParser.COMMA);
						this.state = 205;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 208;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 212;
				this.expression(0);
				this.state = 213;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 215;
				this.match(XonParser.WHILE);
				this.state = 216;
				this.expression(0);
				this.state = 217;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 219;
				this.match(XonParser.DO);
				this.state = 220;
				this.body();
				this.state = 221;
				this.match(XonParser.WHILE);
				this.state = 222;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 224;
				this.match(XonParser.IF);
				this.state = 225;
				this.expression(0);
				this.state = 226;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 229;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 227;
					this.match(XonParser.ELSE);
					this.state = 228;
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
				this.state = 231;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 232;
				this.match(XonParser.RETURN);
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 233;
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
				this.state = 236;
				this.match(XonParser.ACTUAL);
				this.state = 237;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 238;
					this.match(XonParser.NL);
					}
					}
					this.state = 241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 243;
				this.match(XonParser.EXPECT);
				this.state = 244;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 246;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 247;
				this.id();
				this.state = 248;
				this.match(XonParser.ASSIGN);
				this.state = 249;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 251;
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 255;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 256;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 257;
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
				this.state = 258;
				this.expression(16);
				}
				break;

			case 4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 259;
				this.lambdaParameters();
				this.state = 260;
				this.match(XonParser.COLON);
				this.state = 261;
				this.expression(4);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 263;
				this.arrayArguments();
				}
				break;

			case 6:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 264;
				this.objectArguments();
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 265;
				this.match(XonParser.OPEN_PAREN);
				this.state = 266;
				this.expression(0);
				this.state = 267;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 329;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 327;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 271;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 272;
						(_localctx as InfixExpressionContext)._op = this.id();
						this.state = 273;
						(_localctx as InfixExpressionContext)._right = this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 275;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 276;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 277;
						(_localctx as PowExpressionContext)._right = this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 278;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 279;
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
						this.state = 280;
						(_localctx as MulDivModExpressionContext)._right = this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 281;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 282;
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
						this.state = 283;
						(_localctx as AddSubExpressionContext)._right = this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 284;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 285;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 286;
						(_localctx as RangeExpressionContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 287;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 288;
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
						this.state = 289;
						(_localctx as ElvisExpressionContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 290;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 291;
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
						this.state = 292;
						(_localctx as RelationalExpressionContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 293;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 294;
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
						this.state = 295;
						(_localctx as EqualityExpressionContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 296;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 297;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 298;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 299;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 300;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 301;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 302;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 303;
						this.match(XonParser.PIPE);
						this.state = 307;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
						case 1:
							{
							this.state = 304;
							this.id();
							this.state = 305;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 309;
						(_localctx as PipeExpressionContext)._right = this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 310;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 311;
						_la = this._input.LA(1);
						if (!(_la === XonParser.COALESCING || _la === XonParser.DOT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 312;
						this.attributeId();
						}
						break;

					case 13:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 313;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 315;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 314;
							this.typeArguments();
							}
						}

						this.state = 317;
						this.lambdaArguments();
						}
						break;

					case 14:
						{
						_localctx = new IsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 318;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 319;
						this.match(XonParser.IS);
						this.state = 320;
						this.type(0);
						}
						break;

					case 15:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 321;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 322;
						this.match(XonParser.AS);
						this.state = 323;
						this.type(0);
						}
						break;

					case 16:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 324;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 325;
						this.match(XonParser.IN);
						this.state = 326;
						this.type(0);
						}
						break;
					}
					}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 333;
				this.id();
				this.state = 335;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 334;
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
				this.state = 337;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new TupleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 338;
				this.tupleParameters();
				}
				break;

			case 4:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 339;
				this.objectParameters();
				}
				break;

			case 5:
				{
				_localctx = new LambdaTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 340;
					this.typeParameters();
					}
				}

				this.state = 343;
				this.parameters();
				this.state = 345;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 344;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new IndexerTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 347;
					this.typeParameters();
					}
				}

				this.state = 350;
				this.indexerParameters();
				this.state = 352;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 351;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 354;
				this.match(XonParser.OPEN_PAREN);
				this.state = 355;
				this.type(0);
				this.state = 356;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 376;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 374;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 360;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 361;
						this.match(XonParser.AND);
						this.state = 362;
						this.type(6);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 363;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 364;
						this.match(XonParser.OR);
						this.state = 365;
						this.type(5);
						}
						break;

					case 3:
						{
						_localctx = new MetaTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 366;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 367;
						this.match(XonParser.HASH);
						this.state = 368;
						this.id();
						}
						break;

					case 4:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 369;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 370;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 371;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 372;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 373;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 378;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
			this.state = 384;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 379;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 380;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 381;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 382;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 383;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 386;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 389;
			this.id();
			this.state = 390;
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(XonParser.OPEN_PAREN);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || _la === XonParser.SPREAD || _la === XonParser.ID) {
				{
				this.state = 393;
				this.parameter();
				this.state = 398;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 394;
						this.match(XonParser.COMMA);
						this.state = 395;
						this.parameter();
						}
						}
					}
					this.state = 400;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				}
			}

			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 403;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 406;
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
	public indexerParameters(): IndexerParametersContext {
		let _localctx: IndexerParametersContext = new IndexerParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_indexerParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || _la === XonParser.SPREAD || _la === XonParser.ID) {
				{
				this.state = 409;
				this.parameter();
				this.state = 414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 410;
						this.match(XonParser.COMMA);
						this.state = 411;
						this.parameter();
						}
						}
					}
					this.state = 416;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				}
			}

			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 419;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 422;
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
	public objectParameters(): ObjectParametersContext {
		let _localctx: ObjectParametersContext = new ObjectParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_objectParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(XonParser.OPEN_BRACE);
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || _la === XonParser.SPREAD || _la === XonParser.ID) {
				{
				this.state = 425;
				this.parameter();
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 426;
						this.match(XonParser.COMMA);
						this.state = 427;
						this.parameter();
						}
						}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				}
			}

			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 435;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 438;
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
	public tupleParameters(): TupleParametersContext {
		let _localctx: TupleParametersContext = new TupleParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_tupleParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
				{
				this.state = 441;
				this.type(0);
				this.state = 446;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 442;
						this.match(XonParser.COMMA);
						this.state = 443;
						this.type(0);
						}
						}
					}
					this.state = 448;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				}
			}

			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 451;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 454;
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
	public lambdaParameter(): LambdaParameterContext {
		let _localctx: LambdaParameterContext = new LambdaParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XonParser.RULE_lambdaParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.id();
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
				{
				this.state = 457;
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
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(XonParser.OPEN_PAREN);
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || _la === XonParser.ID) {
				{
				this.state = 461;
				this.lambdaParameter();
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 462;
						this.match(XonParser.COMMA);
						this.state = 463;
						this.lambdaParameter();
						}
						}
					}
					this.state = 468;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				}
				}
			}

			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 471;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 474;
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
	public lambdaArguments(): LambdaArgumentsContext {
		let _localctx: LambdaArgumentsContext = new LambdaArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_lambdaArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(XonParser.OPEN_PAREN);
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
				{
				this.state = 477;
				this.expression(0);
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 478;
						this.match(XonParser.COMMA);
						this.state = 479;
						this.expression(0);
						}
						}
					}
					this.state = 484;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				}
			}

			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 487;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 490;
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
	public arrayArguments(): ArrayArgumentsContext {
		let _localctx: ArrayArgumentsContext = new ArrayArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_arrayArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.ID - 53)))) !== 0)) {
				{
				this.state = 493;
				this.expression(0);
				this.state = 498;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 494;
						this.match(XonParser.COMMA);
						this.state = 495;
						this.expression(0);
						}
						}
					}
					this.state = 500;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				}
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 503;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 506;
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
	public objectArguments(): ObjectArgumentsContext {
		let _localctx: ObjectArgumentsContext = new ObjectArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XonParser.RULE_objectArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(XonParser.OPEN_BRACE);
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
				{
				this.state = 509;
				this.objectArgument();
				this.state = 514;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 510;
						this.match(XonParser.COMMA);
						this.state = 511;
						this.objectArgument();
						}
						}
					}
					this.state = 516;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				}
			}

			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 519;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 522;
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
		this.enterRule(_localctx, 48, XonParser.RULE_objectArgument);
		try {
			this.state = 526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 524;
				this.attribute();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 525;
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XonParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 528;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 531;
			this.id();
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 532;
				this.match(XonParser.IS);
				this.state = 533;
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
		this.enterRule(_localctx, 52, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.match(XonParser.LESS);
			this.state = 537;
			this.typeParameter();
			this.state = 542;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 538;
					this.match(XonParser.COMMA);
					this.state = 539;
					this.typeParameter();
					}
					}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 545;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 548;
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
		this.enterRule(_localctx, 54, XonParser.RULE_typeArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(XonParser.LESS);
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
				{
				this.state = 551;
				this.type(0);
				this.state = 556;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 552;
						this.match(XonParser.COMMA);
						this.state = 553;
						this.type(0);
						}
						}
					}
					this.state = 558;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				}
				}
			}

			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 561;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 564;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.match(XonParser.COLON);
			this.state = 581;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 567;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 568;
					this.match(XonParser.NL);
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 573;
				this.match(XonParser.INDENT);
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 576;
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
					case XonParser.EXTENSION:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.INTERFACE:
					case XonParser.NOT:
					case XonParser.OBJECT:
					case XonParser.RETURN:
					case XonParser.WHILE:
					case XonParser.MINUS:
					case XonParser.PLUS:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 574;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 575;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.WHILE - 3)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (XonParser.MINUS - 53)) | (1 << (XonParser.PLUS - 53)) | (1 << (XonParser.FLOAT_LITERAL - 53)) | (1 << (XonParser.INTEGER_LITERAL - 53)) | (1 << (XonParser.CHAR_LITERAL - 53)) | (1 << (XonParser.STRING_LITERAL - 53)) | (1 << (XonParser.REGEX_LITERAL - 53)) | (1 << (XonParser.PREPROCESSOR - 53)) | (1 << (XonParser.ID - 53)) | (1 << (XonParser.NL - 53)))) !== 0));
				this.state = 580;
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
	public attributeId(): AttributeIdContext {
		let _localctx: AttributeIdContext = new AttributeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, XonParser.RULE_attributeId);
		try {
			this.state = 586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.CLASS:
			case XonParser.ENUM:
			case XonParser.EXTENSION:
			case XonParser.INTERFACE:
			case XonParser.OBJECT:
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 583;
				this.id();
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 584;
				this.operator();
				}
				break;
			case XonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 585;
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
		this.enterRule(_localctx, 60, XonParser.RULE_id);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 588;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.CLASS:
			case XonParser.ENUM:
			case XonParser.EXTENSION:
			case XonParser.INTERFACE:
			case XonParser.OBJECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 589;
				this.definitionModifier();
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
	public definitionModifier(): DefinitionModifierContext {
		let _localctx: DefinitionModifierContext = new DefinitionModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, XonParser.RULE_definitionModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.OBJECT))) !== 0))) {
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
		this.enterRule(_localctx, 64, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
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
		case 11:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 12:
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
			return this.precpred(this._ctx, 21);

		case 12:
			return this.precpred(this._ctx, 20);

		case 13:
			return this.precpred(this._ctx, 19);

		case 14:
			return this.precpred(this._ctx, 18);

		case 15:
			return this.precpred(this._ctx, 17);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 5);

		case 17:
			return this.precpred(this._ctx, 4);

		case 18:
			return this.precpred(this._ctx, 10);

		case 19:
			return this.precpred(this._ctx, 9);

		case 20:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u0257\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x03\x02\x03\x02\x07\x02H\n\x02\f\x02\x0E\x02K\v\x02\x03\x02\x03\x02\x07" +
		"\x02O\n\x02\f\x02\x0E\x02R\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04]\n\x04\f\x04\x0E\x04`\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x07\x05e\n\x05\f\x05\x0E\x05h\v\x05\x03\x06\x03\x06" +
		"\x03\x06\x05\x06m\n\x06\x03\x07\x03\x07\x03\x07\x05\x07r\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07y\n\x07\x03\x07\x05\x07|\n\x07" +
		"\x05\x07~\n\x07\x03\b\x03\b\x05\b\x82\n\b\x03\b\x05\b\x85\n\b\x03\b\x05" +
		"\b\x88\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\x8E\n\t\f\t\x0E\t\x91\v\t\x03" +
		"\n\x06\n\x94\n\n\r\n\x0E\n\x95\x03\n\x03\n\x03\n\x06\n\x9B\n\n\r\n\x0E" +
		"\n\x9C\x03\n\x03\n\x03\v\x03\v\x05\v\xA3\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x06\v\xAB\n\v\r\v\x0E\v\xAC\x03\v\x03\v\x03\v\x06\v\xB2\n\v\r" +
		"\v\x0E\v\xB3\x03\v\x03\v\x03\v\x03\v\x06\v\xBA\n\v\r\v\x0E\v\xBB\x03\v" +
		"\x03\v\x03\v\x06\v\xC1\n\v\r\v\x0E\v\xC2\x03\v\x03\v\x03\v\x03\v\x05\v" +
		"\xC9\n\v\x05\v\xCB\n\v\x03\f\x03\f\x03\f\x03\f\x05\f\xD1\n\f\x03\f\x03" +
		"\f\x05\f\xD5\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xE8\n\f\x03\f\x03" +
		"\f\x03\f\x05\f\xED\n\f\x03\f\x03\f\x03\f\x06\f\xF2\n\f\r\f\x0E\f\xF3\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xFF\n\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u0110\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0136\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u013E\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\u014A\n\r\f\r\x0E\r\u014D\v\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u0152\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0158" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\u015C\n\x0E\x03\x0E\x05\x0E\u015F\n\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0163\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0169\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0179" +
		"\n\x0E\f\x0E\x0E\x0E\u017C\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0183\n\x0F\x03\x10\x05\x10\u0186\n\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u018F\n\x11\f\x11\x0E\x11\u0192" +
		"\v\x11\x05\x11\u0194\n\x11\x03\x11\x05\x11\u0197\n\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u019F\n\x12\f\x12\x0E\x12\u01A2" +
		"\v\x12\x05\x12\u01A4\n\x12\x03\x12\x05\x12\u01A7\n\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01AF\n\x13\f\x13\x0E\x13\u01B2" +
		"\v\x13\x05\x13\u01B4\n\x13\x03\x13\x05\x13\u01B7\n\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u01BF\n\x14\f\x14\x0E\x14\u01C2" +
		"\v\x14\x05\x14\u01C4\n\x14\x03\x14\x05\x14\u01C7\n\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x05\x15\u01CD\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07" +
		"\x16\u01D3\n\x16\f\x16\x0E\x16\u01D6\v\x16\x05\x16\u01D8\n\x16\x03\x16" +
		"\x05\x16\u01DB\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\u01E3\n\x17\f\x17\x0E\x17\u01E6\v\x17\x05\x17\u01E8\n\x17\x03\x17" +
		"\x05\x17\u01EB\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u01F3\n\x18\f\x18\x0E\x18\u01F6\v\x18\x05\x18\u01F8\n\x18\x03\x18" +
		"\x05\x18\u01FB\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07" +
		"\x19\u0203\n\x19\f\x19\x0E\x19\u0206\v\x19\x05\x19\u0208\n\x19\x03\x19" +
		"\x05\x19\u020B\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u0211\n\x1A" +
		"\x03\x1B\x05\x1B\u0214\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0219\n\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u021F\n\x1C\f\x1C\x0E\x1C\u0222" +
		"\v\x1C\x03\x1C\x05\x1C\u0225\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x07\x1D\u022D\n\x1D\f\x1D\x0E\x1D\u0230\v\x1D\x05\x1D\u0232" +
		"\n\x1D\x03\x1D\x05\x1D\u0235\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x06\x1E\u023C\n\x1E\r\x1E\x0E\x1E\u023D\x03\x1E\x03\x1E\x03\x1E\x06" +
		"\x1E\u0243\n\x1E\r\x1E\x0E\x1E\u0244\x03\x1E\x05\x1E\u0248\n\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u024D\n\x1F\x03 \x03 \x05 \u0251\n \x03!\x03" +
		"!\x03\"\x03\"\x03\"\x02\x02\x04\x18\x1A#\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02\x02\n\x05\x02\x1D\x1D77<<\x05\x02(" +
		"(88??\x04\x0277<<\x04\x022356\x04\x020099\x04\x02,,//\x07\x02\x0F\x0F" +
		"\x12\x12\x15\x15\x1B\x1B\x1E\x1E\b\x02\'(++3368<<??\x02\u02B7\x02I\x03" +
		"\x02\x02\x02\x04S\x03\x02\x02\x02\x06V\x03\x02\x02\x02\ba\x03\x02\x02" +
		"\x02\ni\x03\x02\x02\x02\f}\x03\x02\x02\x02\x0E\x7F\x03\x02\x02\x02\x10" +
		"\x89\x03\x02\x02\x02\x12\x93\x03\x02\x02\x02\x14\xCA\x03\x02\x02\x02\x16" +
		"\xFE\x03\x02\x02\x02\x18\u010F\x03\x02\x02\x02\x1A\u0168\x03\x02\x02\x02" +
		"\x1C\u0182\x03\x02\x02\x02\x1E\u0185\x03\x02\x02\x02 \u018A\x03\x02\x02" +
		"\x02\"\u019A\x03\x02\x02\x02$\u01AA\x03\x02\x02\x02&\u01BA\x03\x02\x02" +
		"\x02(\u01CA\x03\x02\x02\x02*\u01CE\x03\x02\x02\x02,\u01DE\x03\x02\x02" +
		"\x02.\u01EE\x03\x02\x02\x020\u01FE\x03\x02\x02\x022\u0210\x03\x02\x02" +
		"\x024\u0213\x03\x02\x02\x026\u021A\x03\x02\x02\x028\u0228\x03\x02\x02" +
		"\x02:\u0238\x03\x02\x02\x02<\u024C\x03\x02\x02\x02>\u0250\x03\x02\x02" +
		"\x02@\u0252\x03\x02\x02\x02B\u0254\x03\x02\x02\x02DH\x05\x06\x04\x02E" +
		"H\x05\x04\x03\x02FH\x07J\x02\x02GD\x03\x02\x02\x02GE\x03\x02\x02\x02G" +
		"F\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"JP\x03\x02\x02\x02KI\x03\x02\x02\x02LO\x05\f\x07\x02MO\x07J\x02\x02NL" +
		"\x03\x02\x02\x02NM\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02Q\x03\x03\x02\x02\x02RP\x03\x02\x02\x02ST\x07\x14\x02" +
		"\x02TU\x05\b\x05\x02U\x05\x03\x02\x02\x02VW\x07\x18\x02\x02WX\x05\b\x05" +
		"\x02XY\x07-\x02\x02Y^\x05\n\x06\x02Z[\x07.\x02\x02[]\x05\n\x06\x02\\Z" +
		"\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02" +
		"_\x07\x03\x02\x02\x02`^\x03\x02\x02\x02af\x05> \x02bc\x07/\x02\x02ce\x05" +
		"> \x02db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02" +
		"\x02\x02g\t\x03\x02\x02\x02hf\x03\x02\x02\x02il\x05> \x02jk\x07\r\x02" +
		"\x02km\x05> \x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\v\x03\x02\x02\x02" +
		"no\x07#\x02\x02oq\x05> \x02pr\x056\x1C\x02qp\x03\x02\x02\x02qr\x03\x02" +
		"\x02\x02rs\x03\x02\x02\x02st\x07-\x02\x02tu\x05\x1A\x0E\x02u~\x03\x02" +
		"\x02\x02vx\x05@!\x02wy\x05\x0E\b\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02" +
		"y{\x03\x02\x02\x02z|\x05\x12\n\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02" +
		"|~\x03\x02\x02\x02}n\x03\x02\x02\x02}v\x03\x02\x02\x02~\r\x03\x02\x02" +
		"\x02\x7F\x81\x05> \x02\x80\x82\x056\x1C\x02\x81\x80\x03\x02\x02\x02\x81" +
		"\x82\x03\x02\x02\x02\x82\x84\x03\x02\x02\x02\x83\x85\x05 \x11\x02\x84" +
		"\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86" +
		"\x88\x05\x10\t\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88" +
		"\x0F\x03\x02\x02\x02\x89\x8A\x07\x1C\x02\x02\x8A\x8F\x05\x1A\x0E\x02\x8B" +
		"\x8C\x07.\x02\x02\x8C\x8E\x05\x1A\x0E\x02\x8D\x8B\x03\x02\x02\x02\x8E" +
		"\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90" +
		"\x11\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x94\x07J\x02\x02\x93" +
		"\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95" +
		"\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x9A\x07\x03\x02\x02\x98" +
		"\x9B\x05\x14\v\x02\x99\x9B\x07J\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99" +
		"\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D" +
		"\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x07\x04\x02\x02\x9F\x13" +
		"\x03\x02\x02\x02\xA0\xA2\x05<\x1F\x02\xA1\xA3\x05\x1A\x0E\x02\xA2\xA1" +
		"\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5" +
		"\x07-\x02\x02\xA5\xA6\x05\x18\r\x02\xA6\xCB\x03\x02\x02\x02\xA7\xA8\x05" +
		"<\x1F\x02\xA8\xAA\x05\x1A\x0E\x02\xA9\xAB\x07J\x02\x02\xAA\xA9\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02" +
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB1\x07\x03\x02\x02\xAF\xB2\x05\x16" +
		"\f\x02\xB0\xB2\x07J\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB0\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x07\x04\x02\x02\xB6\xCB\x03\x02\x02" +
		"\x02\xB7\xB9\x05<\x1F\x02\xB8\xBA\x07J\x02\x02\xB9\xB8\x03\x02\x02\x02" +
		"\xBA\xBB\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\xC0\x07\x03\x02\x02\xBE\xC1\x05\x14\v\x02" +
		"\xBF\xC1\x07J\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02" +
		"\xC1\xC2\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02" +
		"\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x07\x04\x02\x02\xC5\xCB\x03\x02\x02\x02" +
		"\xC6\xC8\x05<\x1F\x02\xC7\xC9\x05\x1A\x0E\x02\xC8\xC7\x03\x02\x02\x02" +
		"\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xA0\x03\x02\x02\x02" +
		"\xCA\xA7\x03\x02\x02\x02\xCA\xB7\x03\x02\x02\x02\xCA\xC6\x03\x02\x02\x02" +
		"\xCB\x15\x03\x02\x02\x02\xCC\xD4\x07\x16\x02\x02\xCD\xD0\x05> \x02\xCE" +
		"\xCF\x07.\x02\x02\xCF\xD1\x05> \x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03" +
		"\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x07\x19\x02\x02\xD3\xD5\x03" +
		"\x02\x02\x02\xD4\xCD\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x03" +
		"\x02\x02\x02\xD6\xD7\x05\x18\r\x02\xD7\xD8\x05:\x1E\x02\xD8\xFF\x03\x02" +
		"\x02\x02\xD9\xDA\x07$\x02\x02\xDA\xDB\x05\x18\r\x02\xDB\xDC\x05:\x1E\x02" +
		"\xDC\xFF\x03\x02\x02\x02\xDD\xDE\x07\x10\x02\x02\xDE\xDF\x05:\x1E\x02" +
		"\xDF\xE0\x07$\x02\x02\xE0\xE1\x05\x18\r\x02\xE1\xFF\x03\x02\x02\x02\xE2" +
		"\xE3\x07\x17\x02\x02\xE3\xE4\x05\x18\r\x02\xE4\xE7\x05:\x1E\x02\xE5\xE6" +
		"\x07\x11\x02\x02\xE6\xE8\x05:\x1E\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8" +
		"\x03\x02\x02\x02\xE8\xFF\x03\x02\x02\x02\xE9\xFF\x07\x0E\x02\x02\xEA\xEC" +
		"\x07!\x02\x02\xEB\xED\x05\x18\r\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03" +
		"\x02\x02\x02\xED\xFF\x03\x02\x02\x02\xEE\xEF\x07\f\x02\x02\xEF\xF1\x05" +
		"\x18\r\x02\xF0\xF2\x07J\x02\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02" +
		"\x02\x02\xF5\xF6\x07\x13\x02\x02\xF6\xF7\x05\x18\r\x02\xF7\xFF\x03\x02" +
		"\x02\x02\xF8\xFF\x07H\x02\x02\xF9\xFA\x05> \x02\xFA\xFB\x07\'\x02\x02" +
		"\xFB\xFC\x05\x18\r\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFF\x05\x18\r\x02\xFE" +
		"\xCC\x03\x02\x02\x02\xFE\xD9\x03\x02\x02\x02\xFE\xDD\x03\x02\x02\x02\xFE" +
		"\xE2\x03\x02\x02\x02\xFE\xE9\x03\x02\x02\x02\xFE\xEA\x03\x02\x02\x02\xFE" +
		"\xEE\x03\x02\x02\x02\xFE\xF8\x03\x02\x02\x02\xFE\xF9\x03\x02\x02\x02\xFE" +
		"\xFD\x03\x02\x02\x02\xFF\x17\x03\x02\x02\x02\u0100\u0101\b\r\x01\x02\u0101" +
		"\u0110\x05> \x02\u0102\u0110\x05\x1C\x0F\x02\u0103\u0104\t\x02\x02\x02" +
		"\u0104\u0110\x05\x18\r\x12\u0105\u0106\x05*\x16\x02\u0106\u0107\x07-\x02" +
		"\x02\u0107\u0108\x05\x18\r\x06\u0108\u0110\x03\x02\x02\x02\u0109\u0110" +
		"\x05.\x18\x02\u010A\u0110\x050\x19\x02\u010B\u010C\x07\x07\x02\x02\u010C" +
		"\u010D\x05\x18\r\x02\u010D\u010E\x07\b\x02\x02\u010E\u0110\x03\x02\x02" +
		"\x02\u010F\u0100\x03\x02\x02\x02\u010F\u0102\x03\x02\x02\x02\u010F\u0103" +
		"\x03\x02\x02\x02\u010F\u0105\x03\x02\x02\x02\u010F\u0109\x03\x02\x02\x02" +
		"\u010F\u010A\x03\x02\x02\x02\u010F\u010B\x03\x02\x02\x02\u0110\u014B\x03" +
		"\x02\x02\x02\u0111\u0112\f\x11\x02\x02\u0112\u0113\x05> \x02\u0113\u0114" +
		"\x05\x18\r\x12\u0114\u014A\x03\x02\x02\x02\u0115\u0116\f\x10\x02\x02\u0116" +
		"\u0117\x07+\x02\x02\u0117\u014A\x05\x18\r\x11\u0118\u0119\f\x0F\x02\x02" +
		"\u0119\u011A\t\x03\x02\x02\u011A\u014A\x05\x18\r\x10\u011B\u011C\f\x0E" +
		"\x02\x02\u011C\u011D\t\x04\x02\x02\u011D\u014A\x05\x18\r\x0F\u011E\u011F" +
		"\f\r\x02\x02\u011F\u0120\x07>\x02\x02\u0120\u014A\x05\x18\r\x0E\u0121" +
		"\u0122\f\f\x02\x02\u0122\u0123\x07=\x02\x02\u0123\u014A\x05\x18\r\r\u0124" +
		"\u0125\f\v\x02\x02\u0125\u0126\t\x05\x02\x02\u0126\u014A\x05\x18\r\f\u0127" +
		"\u0128\f\n\x02\x02\u0128\u0129\t\x06\x02\x02\u0129\u014A\x05\x18\r\v\u012A" +
		"\u012B\f\t\x02\x02\u012B\u012C\x07&\x02\x02\u012C\u014A\x05\x18\r\n\u012D" +
		"\u012E\f\b\x02\x02\u012E\u012F\x07:\x02\x02\u012F\u014A\x05\x18\r\t\u0130" +
		"\u0131\f\x07\x02\x02\u0131\u0135\x07;\x02\x02\u0132\u0133\x05> \x02\u0133" +
		"\u0134\x07-\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0132\x03\x02\x02" +
		"\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u014A" +
		"\x05\x18\r\b\u0138\u0139\f\x17\x02\x02\u0139\u013A\t\x07\x02\x02\u013A" +
		"\u014A\x05<\x1F\x02\u013B\u013D\f\x16\x02\x02\u013C\u013E\x058\x1D\x02" +
		"\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x03" +
		"\x02\x02\x02\u013F\u014A\x05,\x17\x02\u0140\u0141\f\x15\x02\x02\u0141" +
		"\u0142\x07\x1C\x02\x02\u0142\u014A\x05\x1A\x0E\x02\u0143\u0144\f\x14\x02" +
		"\x02\u0144\u0145\x07\r\x02\x02\u0145\u014A\x05\x1A\x0E\x02\u0146\u0147" +
		"\f\x13\x02\x02\u0147\u0148\x07\x19\x02\x02\u0148\u014A\x05\x1A\x0E\x02" +
		"\u0149\u0111\x03\x02\x02\x02\u0149\u0115\x03\x02\x02\x02\u0149\u0118\x03" +
		"\x02\x02\x02\u0149\u011B\x03\x02\x02\x02\u0149\u011E\x03\x02\x02\x02\u0149" +
		"\u0121\x03\x02\x02\x02\u0149\u0124\x03\x02\x02\x02\u0149\u0127\x03\x02" +
		"\x02\x02\u0149\u012A\x03\x02\x02\x02\u0149\u012D\x03\x02\x02\x02\u0149" +
		"\u0130\x03\x02\x02\x02\u0149\u0138\x03\x02\x02\x02\u0149\u013B\x03\x02" +
		"\x02\x02\u0149\u0140\x03\x02\x02\x02\u0149\u0143\x03\x02\x02\x02\u0149" +
		"\u0146\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02" +
		"\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\x19\x03\x02\x02\x02\u014D\u014B" +
		"\x03\x02\x02\x02\u014E\u014F\b\x0E\x01\x02\u014F\u0151\x05> \x02\u0150" +
		"\u0152\x058\x1D\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02" +
		"\x02\u0152\u0169\x03\x02\x02\x02\u0153\u0169\x05\x1C\x0F\x02\u0154\u0169" +
		"\x05&\x14\x02\u0155\u0169\x05$\x13\x02\u0156\u0158\x056\x1C\x02\u0157" +
		"\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x03\x02" +
		"\x02\x02\u0159\u015B\x05 \x11\x02\u015A\u015C\x05\x1A\x0E\x02\u015B\u015A" +
		"\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u0169\x03\x02\x02\x02" +
		"\u015D\u015F\x056\x1C\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03" +
		"\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x05\"\x12\x02\u0161" +
		"\u0163\x05\x1A\x0E\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02" +
		"\x02\x02\u0163\u0169\x03\x02\x02\x02\u0164\u0165\x07\x07\x02\x02\u0165" +
		"\u0166\x05\x1A\x0E\x02\u0166\u0167\x07\b\x02\x02\u0167\u0169\x03\x02\x02" +
		"\x02\u0168\u014E\x03\x02\x02\x02\u0168\u0153\x03\x02\x02\x02\u0168\u0154" +
		"\x03\x02\x02\x02\u0168\u0155\x03\x02\x02\x02\u0168\u0157\x03\x02\x02\x02" +
		"\u0168\u015E\x03\x02\x02\x02\u0168\u0164\x03\x02\x02\x02\u0169\u017A\x03" +
		"\x02\x02\x02\u016A\u016B\f\x07\x02\x02\u016B\u016C\x07&\x02\x02\u016C" +
		"\u0179\x05\x1A\x0E\b\u016D\u016E\f\x06\x02\x02\u016E\u016F\x07:\x02\x02" +
		"\u016F\u0179\x05\x1A\x0E\x07\u0170\u0171\f\f\x02\x02\u0171\u0172\x074" +
		"\x02\x02\u0172\u0179\x05> \x02\u0173\u0174\f\v\x02\x02\u0174\u0179\x07" +
		"=\x02\x02\u0175\u0176\f\n\x02\x02\u0176\u0177\x07\x05\x02\x02\u0177\u0179" +
		"\x07\x06\x02\x02\u0178\u016A\x03\x02\x02\x02\u0178\u016D\x03\x02\x02\x02" +
		"\u0178\u0170\x03\x02\x02\x02\u0178\u0173\x03\x02\x02\x02\u0178\u0175\x03" +
		"\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017B\x1B\x03\x02\x02\x02\u017C\u017A\x03\x02\x02" +
		"\x02\u017D\u0183\x07D\x02\x02\u017E\u0183\x07C\x02\x02\u017F\u0183\x07" +
		"E\x02\x02\u0180\u0183\x07F\x02\x02\u0181\u0183\x07G\x02\x02\u0182\u017D" +
		"\x03\x02\x02\x02\u0182\u017E\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02" +
		"\u0182\u0180\x03\x02\x02\x02\u0182\u0181\x03\x02\x02\x02\u0183\x1D\x03" +
		"\x02\x02\x02\u0184\u0186\x07@\x02\x02\u0185\u0184\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x05> \x02" +
		"\u0188\u0189\x05\x1A\x0E\x02\u0189\x1F\x03\x02\x02\x02\u018A\u0193\x07" +
		"\x07\x02\x02\u018B\u0190\x05\x1E\x10\x02\u018C\u018D\x07.\x02\x02\u018D" +
		"\u018F\x05\x1E\x10\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0192\x03\x02" +
		"\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
		"\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u018B\x03\x02" +
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02\x02\x02\u0195" +
		"\u0197\x07.\x02\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02" +
		"\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x07\b\x02\x02\u0199!\x03" +
		"\x02\x02\x02\u019A\u01A3\x07\x05\x02\x02\u019B\u01A0\x05\x1E\x10\x02\u019C" +
		"\u019D\x07.\x02\x02\u019D\u019F\x05\x1E\x10\x02\u019E\u019C\x03\x02\x02" +
		"\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1" +
		"\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02" +
		"\u01A3\u019B\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x03" +
		"\x02\x02\x02\u01A5\u01A7\x07.\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6" +
		"\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\x07\x06" +
		"\x02\x02\u01A9#\x03\x02\x02\x02\u01AA\u01B3\x07\t\x02\x02\u01AB\u01B0" +
		"\x05\x1E\x10\x02\u01AC\u01AD\x07.\x02\x02\u01AD\u01AF\x05\x1E\x10\x02" +
		"\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01AE\x03" +
		"\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2" +
		"\u01B0\x03\x02\x02\x02\u01B3\u01AB\x03\x02\x02\x02\u01B3\u01B4\x03\x02" +
		"\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B7\x07.\x02\x02\u01B6\u01B5" +
		"\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02" +
		"\u01B8\u01B9\x07\n\x02\x02\u01B9%\x03\x02\x02\x02\u01BA\u01C3\x07\x05" +
		"\x02\x02\u01BB\u01C0\x05\x1A\x0E\x02\u01BC\u01BD\x07.\x02\x02\u01BD\u01BF" +
		"\x05\x1A\x0E\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02" +
		"\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C4\x03" +
		"\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C3\u01BB\x03\x02\x02\x02\u01C3" +
		"\u01C4\x03\x02\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01C7\x07.\x02" +
		"\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C8" +
		"\x03\x02\x02\x02\u01C8\u01C9\x07\x06\x02\x02\u01C9\'\x03\x02\x02\x02\u01CA" +
		"\u01CC\x05> \x02\u01CB\u01CD\x05\x1A\x0E\x02\u01CC\u01CB\x03\x02\x02\x02" +
		"\u01CC\u01CD\x03\x02\x02\x02\u01CD)\x03\x02\x02\x02\u01CE\u01D7\x07\x07" +
		"\x02\x02\u01CF\u01D4\x05(\x15\x02\u01D0\u01D1\x07.\x02\x02\u01D1\u01D3" +
		"\x05(\x15\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02" +
		"\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D8\x03" +
		"\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01CF\x03\x02\x02\x02\u01D7" +
		"\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01DB\x07.\x02" +
		"\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC" +
		"\x03\x02\x02\x02\u01DC\u01DD\x07\b\x02\x02\u01DD+\x03\x02\x02\x02\u01DE" +
		"\u01E7\x07\x07\x02\x02\u01DF\u01E4\x05\x18\r\x02\u01E0\u01E1\x07.\x02" +
		"\x02\u01E1\u01E3\x05\x18\r\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E6" +
		"\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01DF\x03" +
		"\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x03\x02\x02\x02\u01E9" +
		"\u01EB\x07.\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02" +
		"\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x07\b\x02\x02\u01ED-\x03" +
		"\x02\x02\x02\u01EE\u01F7\x07\x05\x02\x02\u01EF\u01F4\x05\x18\r\x02\u01F0" +
		"\u01F1\x07.\x02\x02\u01F1\u01F3\x05\x18\r\x02\u01F2\u01F0\x03\x02\x02" +
		"\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F5" +
		"\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02" +
		"\u01F7\u01EF\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03" +
		"\x02\x02\x02\u01F9\u01FB\x07.\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA" +
		"\u01FB\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x07\x06" +
		"\x02\x02\u01FD/\x03\x02\x02\x02\u01FE\u0207\x07\t\x02\x02\u01FF\u0204" +
		"\x052\x1A\x02\u0200\u0201\x07.\x02\x02\u0201\u0203\x052\x1A\x02\u0202" +
		"\u0200\x03\x02\x02\x02\u0203";
	private static readonly _serializedATNSegment1: string =
		"\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02" +
		"\x02\x02\u0205\u0208\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207" +
		"\u01FF\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03\x02" +
		"\x02\x02\u0209\u020B\x07.\x02\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B" +
		"\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x07\n\x02\x02" +
		"\u020D1\x03\x02\x02\x02\u020E\u0211\x05\x14\v\x02\u020F\u0211\x05\x18" +
		"\r\x02\u0210\u020E\x03\x02\x02\x02\u0210\u020F\x03\x02\x02\x02\u02113" +
		"\x03\x02\x02\x02\u0212\u0214\x07@\x02\x02\u0213\u0212\x03\x02\x02\x02" +
		"\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0218\x05" +
		"> \x02\u0216\u0217\x07\x1C\x02\x02\u0217\u0219\x05\x1A\x0E\x02\u0218\u0216" +
		"\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u02195\x03\x02\x02\x02\u021A" +
		"\u021B\x076\x02\x02\u021B\u0220\x054\x1B\x02\u021C\u021D\x07.\x02\x02" +
		"\u021D\u021F\x054\x1B\x02\u021E\u021C\x03\x02\x02\x02\u021F\u0222\x03" +
		"\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221" +
		"\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0225\x07.\x02" +
		"\x02\u0224\u0223\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226" +
		"\x03\x02\x02\x02\u0226\u0227\x073\x02\x02\u02277\x03\x02\x02\x02\u0228" +
		"\u0231\x076\x02\x02\u0229\u022E\x05\x1A\x0E\x02\u022A\u022B\x07.\x02\x02" +
		"\u022B\u022D\x05\x1A\x0E\x02\u022C\u022A\x03\x02\x02\x02\u022D\u0230\x03" +
		"\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
		"\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0229\x03\x02" +
		"\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233" +
		"\u0235\x07.\x02\x02\u0234\u0233\x03\x02\x02\x02\u0234\u0235\x03\x02\x02" +
		"\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x073\x02\x02\u02379\x03\x02" +
		"\x02\x02\u0238\u0247\x07-\x02\x02\u0239\u0248\x05\x16\f\x02\u023A\u023C" +
		"\x07J\x02\x02\u023B\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02" +
		"\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03" +
		"\x02\x02\x02\u023F\u0242\x07\x03\x02\x02\u0240\u0243\x05\x16\f\x02\u0241" +
		"\u0243\x07J\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0241\x03\x02\x02" +
		"\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0245" +
		"\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0248\x07\x04\x02\x02" +
		"\u0247\u0239\x03\x02\x02\x02\u0247\u023B\x03\x02\x02\x02\u0247\u0248\x03" +
		"\x02\x02\x02\u0248;\x03\x02\x02\x02\u0249\u024D\x05> \x02\u024A\u024D" +
		"\x05B\"\x02\u024B\u024D\x07F\x02\x02\u024C\u0249\x03\x02\x02\x02\u024C" +
		"\u024A\x03\x02\x02\x02\u024C\u024B\x03\x02\x02\x02\u024D=\x03\x02\x02" +
		"\x02\u024E\u0251\x07I\x02\x02\u024F\u0251\x05@!\x02\u0250\u024E\x03\x02" +
		"\x02\x02\u0250\u024F\x03\x02\x02\x02\u0251?\x03\x02\x02\x02\u0252\u0253" +
		"\t\b\x02\x02\u0253A\x03\x02\x02\x02\u0254\u0255\t\t\x02\x02\u0255C\x03" +
		"\x02\x02\x02YGINP^flqx{}\x81\x84\x87\x8F\x95\x9A\x9C\xA2\xAC\xB1\xB3\xBB" +
		"\xC0\xC2\xC8\xCA\xD0\xD4\xE7\xEC\xF3\xFE\u010F\u0135\u013D\u0149\u014B" +
		"\u0151\u0157\u015B\u015E\u0162\u0168\u0178\u017A\u0182\u0185\u0190\u0193" +
		"\u0196\u01A0\u01A3\u01A6\u01B0\u01B3\u01B6\u01C0\u01C3\u01C6\u01CC\u01D4" +
		"\u01D7\u01DA\u01E4\u01E7\u01EA\u01F4\u01F7\u01FA\u0204\u0207\u020A\u0210" +
		"\u0213\u0218\u0220\u0224\u022E\u0231\u0234\u023D\u0242\u0244\u0247\u024C" +
		"\u0250";
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
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
export class AliasDefinitionContext extends DefinitionContext {
	public TYPE(): TerminalNode { return this.getToken(XonParser.TYPE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TypeDefinitionContext extends DefinitionContext {
	public definitionModifier(): DefinitionModifierContext {
		return this.getRuleContext(0, DefinitionModifierContext);
	}
	public definitionHeader(): DefinitionHeaderContext | undefined {
		return this.tryGetRuleContext(0, DefinitionHeaderContext);
	}
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DefinitionHeaderContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public definitionAncestors(): DefinitionAncestorsContext | undefined {
		return this.tryGetRuleContext(0, DefinitionAncestorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionHeader; }
}


export class DefinitionAncestorsContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_definitionAncestors; }
}


export class DefinitionBodyContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionBody; }
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
export class ValueAttributeContext extends AttributeContext {
	public attributeId(): AttributeIdContext {
		return this.getRuleContext(0, AttributeIdContext);
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
	public attributeId(): AttributeIdContext {
		return this.getRuleContext(0, AttributeIdContext);
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
	public attributeId(): AttributeIdContext {
		return this.getRuleContext(0, AttributeIdContext);
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
export class AbstractAttributeContext extends AttributeContext {
	public attributeId(): AttributeIdContext {
		return this.getRuleContext(0, AttributeIdContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public attributeId(): AttributeIdContext {
		return this.getRuleContext(0, AttributeIdContext);
	}
	public COALESCING(): TerminalNode | undefined { return this.tryGetToken(XonParser.COALESCING, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CallExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public lambdaArguments(): LambdaArgumentsContext {
		return this.getRuleContext(0, LambdaArgumentsContext);
	}
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
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
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: IdContext;
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode { return this.getToken(XonParser.HASH, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
export class TupleTypeContext extends TypeContext {
	public tupleParameters(): TupleParametersContext {
		return this.getRuleContext(0, TupleParametersContext);
	}
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
export class LambdaTypeContext extends TypeContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexerTypeContext extends TypeContext {
	public indexerParameters(): IndexerParametersContext {
		return this.getRuleContext(0, IndexerParametersContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
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


export class IndexerParametersContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_indexerParameters; }
}


export class ObjectParametersContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_objectParameters; }
}


export class TupleParametersContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_tupleParameters; }
}


export class LambdaParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_lambdaParameter; }
}


export class LambdaParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public lambdaParameter(): LambdaParameterContext[];
	public lambdaParameter(i: number): LambdaParameterContext;
	public lambdaParameter(i?: number): LambdaParameterContext | LambdaParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdaParameterContext);
		} else {
			return this.getRuleContext(i, LambdaParameterContext);
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


export class LambdaArgumentsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_lambdaArguments; }
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


export class ObjectArgumentContext extends ParserRuleContext {
	public attribute(): AttributeContext | undefined {
		return this.tryGetRuleContext(0, AttributeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_objectArgument; }
}


export class TypeParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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


export class AttributeIdContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attributeId; }
}


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public definitionModifier(): DefinitionModifierContext | undefined {
		return this.tryGetRuleContext(0, DefinitionModifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


export class DefinitionModifierContext extends ParserRuleContext {
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLASS, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(XonParser.ENUM, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.INTERFACE, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public EXTENSION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXTENSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionModifier; }
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


