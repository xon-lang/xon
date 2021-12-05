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
	public static readonly TYPE = 28;
	public static readonly CLASS = 29;
	public static readonly OBJECT = 30;
	public static readonly ENUM = 31;
	public static readonly INTERFACE = 32;
	public static readonly NOT = 33;
	public static readonly AT = 34;
	public static readonly DOT = 35;
	public static readonly RANGE = 36;
	public static readonly SPREAD = 37;
	public static readonly PLUS = 38;
	public static readonly HASH = 39;
	public static readonly PIPE = 40;
	public static readonly LESS = 41;
	public static readonly LESS_EQUAL = 42;
	public static readonly COMMA = 43;
	public static readonly COLON = 44;
	public static readonly GREAT = 45;
	public static readonly GREAT_EQUAL = 46;
	public static readonly MINUS = 47;
	public static readonly SLASH = 48;
	public static readonly CARET = 49;
	public static readonly TILDE = 50;
	public static readonly ASSIGN = 51;
	public static readonly EQUAL = 52;
	public static readonly NOT_EQUAL = 53;
	public static readonly MODULO = 54;
	public static readonly QUESTION = 55;
	public static readonly COALESCING = 56;
	public static readonly ASTERISK = 57;
	public static readonly AMPERSAND = 58;
	public static readonly AND = 59;
	public static readonly OR = 60;
	public static readonly UNDERSCORE = 61;
	public static readonly EXCLAMATION = 62;
	public static readonly BACK_SLASH = 63;
	public static readonly FLOAT_LITERAL = 64;
	public static readonly INTEGER_LITERAL = 65;
	public static readonly CHAR_LITERAL = 66;
	public static readonly STRING_LITERAL = 67;
	public static readonly REGEX_LITERAL = 68;
	public static readonly PREPROCESSOR = 69;
	public static readonly ID = 70;
	public static readonly NL = 71;
	public static readonly WS = 72;
	public static readonly COMMENT = 73;
	public static readonly RULE_source = 0;
	public static readonly RULE_export = 1;
	public static readonly RULE_library = 2;
	public static readonly RULE_libraryPath = 3;
	public static readonly RULE_libraryMember = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_definitionHeader = 6;
	public static readonly RULE_definitionAncestor = 7;
	public static readonly RULE_definitionBody = 8;
	public static readonly RULE_attribute = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_literal = 13;
	public static readonly RULE_parameter = 14;
	public static readonly RULE_lambdaParameters = 15;
	public static readonly RULE_arrayParameters = 16;
	public static readonly RULE_objectParameters = 17;
	public static readonly RULE_lambdaArguments = 18;
	public static readonly RULE_arrayArguments = 19;
	public static readonly RULE_objectArguments = 20;
	public static readonly RULE_objectArgument = 21;
	public static readonly RULE_typeParameter = 22;
	public static readonly RULE_typeParameters = 23;
	public static readonly RULE_typeArguments = 24;
	public static readonly RULE_body = 25;
	public static readonly RULE_attributeId = 26;
	public static readonly RULE_id = 27;
	public static readonly RULE_definitionModifier = 28;
	public static readonly RULE_operator = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "libraryPath", "libraryMember", "definition", 
		"definitionHeader", "definitionAncestor", "definitionBody", "attribute", 
		"statement", "expression", "type", "literal", "parameter", "lambdaParameters", 
		"arrayParameters", "objectParameters", "lambdaArguments", "arrayArguments", 
		"objectArguments", "objectArgument", "typeParameter", "typeParameters", 
		"typeArguments", "body", "attributeId", "id", "definitionModifier", "operator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'test'", "'break'", 
		"'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'type'", "'class'", 
		"'object'", "'enum'", "'interface'", "'not'", "'@'", "'.'", "'..'", "'...'", 
		"'+'", "'#'", "'|'", "'<'", "'<='", "','", "':'", "'>'", "'>='", "'-'", 
		"'/'", "'^'", "'~'", "'='", "'=='", "'!='", "'%'", "'?'", "'?.'", "'*'", 
		"'&'", "'&&'", "'||'", "'_'", "'!'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "EXTENSION", "TYPE", 
		"CLASS", "OBJECT", "ENUM", "INTERFACE", "NOT", "AT", "DOT", "RANGE", "SPREAD", 
		"PLUS", "HASH", "PIPE", "LESS", "LESS_EQUAL", "COMMA", "COLON", "GREAT", 
		"GREAT_EQUAL", "MINUS", "SLASH", "CARET", "TILDE", "ASSIGN", "EQUAL", 
		"NOT_EQUAL", "MODULO", "QUESTION", "COALESCING", "ASTERISK", "AMPERSAND", 
		"AND", "OR", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "FLOAT_LITERAL", 
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
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (XonParser.EXTENSION - 27)) | (1 << (XonParser.TYPE - 27)) | (1 << (XonParser.CLASS - 27)) | (1 << (XonParser.OBJECT - 27)) | (1 << (XonParser.ENUM - 27)) | (1 << (XonParser.INTERFACE - 27)))) !== 0) || _la === XonParser.NL) {
				{
				this.state = 70;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.EXTENSION:
				case XonParser.TYPE:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
					{
					this.state = 68;
					this.definition();
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(XonParser.EXPORT);
			this.state = 76;
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
			this.state = 78;
			this.match(XonParser.IMPORT);
			this.state = 79;
			this.libraryPath();
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
			this.state = 89;
			this.id();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 90;
				this.match(XonParser.DOT);
				this.state = 91;
				this.id();
				}
				}
				this.state = 96;
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
			this.state = 97;
			_localctx._name = this.id();
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 98;
				this.match(XonParser.AS);
				this.state = 99;
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
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.TYPE:
				_localctx = new AliasDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.match(XonParser.TYPE);
				this.state = 103;
				this.id();
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 104;
					this.typeParameters();
					}
				}

				this.state = 107;
				this.match(XonParser.COLON);
				this.state = 108;
				this.type(0);
				}
				break;
			case XonParser.EXTENSION:
			case XonParser.CLASS:
			case XonParser.OBJECT:
			case XonParser.ENUM:
			case XonParser.INTERFACE:
				_localctx = new TypeDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this.definitionModifier();
				this.state = 112;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 111;
					this.definitionHeader();
					}
					break;
				}
				this.state = 115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 114;
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
			this.state = 119;
			this.id();
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 120;
				this.type(0);
				}
				break;
			}
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 123;
				this.definitionAncestor();
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
	public definitionAncestor(): DefinitionAncestorContext {
		let _localctx: DefinitionAncestorContext = new DefinitionAncestorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_definitionAncestor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(XonParser.IS);
			this.state = 127;
			this.id();
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 128;
				this.typeArguments();
				}
			}

			this.state = 131;
			this.lambdaArguments();
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
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 133;
				this.match(XonParser.NL);
				}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.NL);
			this.state = 138;
			this.match(XonParser.INDENT);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 141;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.EXTENSION:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
				case XonParser.PLUS:
				case XonParser.LESS:
				case XonParser.GREAT:
				case XonParser.MINUS:
				case XonParser.SLASH:
				case XonParser.CARET:
				case XonParser.ASSIGN:
				case XonParser.MODULO:
				case XonParser.ASTERISK:
				case XonParser.STRING_LITERAL:
				case XonParser.ID:
					{
					this.state = 139;
					this.attribute();
					}
					break;
				case XonParser.NL:
					{
					this.state = 140;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (XonParser.EXTENSION - 27)) | (1 << (XonParser.CLASS - 27)) | (1 << (XonParser.OBJECT - 27)) | (1 << (XonParser.ENUM - 27)) | (1 << (XonParser.INTERFACE - 27)) | (1 << (XonParser.PLUS - 27)) | (1 << (XonParser.LESS - 27)) | (1 << (XonParser.GREAT - 27)) | (1 << (XonParser.MINUS - 27)) | (1 << (XonParser.SLASH - 27)) | (1 << (XonParser.CARET - 27)) | (1 << (XonParser.ASSIGN - 27)) | (1 << (XonParser.MODULO - 27)) | (1 << (XonParser.ASTERISK - 27)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.STRING_LITERAL - 67)) | (1 << (XonParser.ID - 67)) | (1 << (XonParser.NL - 67)))) !== 0));
			this.state = 145;
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
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new AbstractAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.attributeId();
				this.state = 148;
				this.type(0);
				}
				break;

			case 2:
				_localctx = new ValueAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				this.attributeId();
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.LESS - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.ID - 41)))) !== 0)) {
					{
					this.state = 151;
					this.type(0);
					}
				}

				this.state = 154;
				this.match(XonParser.COLON);
				this.state = 155;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new MethodAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				this.attributeId();
				this.state = 158;
				this.type(0);
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 159;
					this.match(XonParser.NL);
					}
					}
					this.state = 162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 164;
				this.match(XonParser.INDENT);
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 167;
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
					case XonParser.EXTENSION:
					case XonParser.CLASS:
					case XonParser.OBJECT:
					case XonParser.ENUM:
					case XonParser.INTERFACE:
					case XonParser.NOT:
					case XonParser.PLUS:
					case XonParser.MINUS:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 165;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 166;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.EXTENSION) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 171;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				_localctx = new ObjectAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 173;
				this.attributeId();
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 174;
					this.match(XonParser.NL);
					}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 179;
				this.match(XonParser.INDENT);
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 182;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.EXTENSION:
					case XonParser.CLASS:
					case XonParser.OBJECT:
					case XonParser.ENUM:
					case XonParser.INTERFACE:
					case XonParser.PLUS:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.ASSIGN:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.STRING_LITERAL:
					case XonParser.ID:
						{
						this.state = 180;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 181;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (XonParser.EXTENSION - 27)) | (1 << (XonParser.CLASS - 27)) | (1 << (XonParser.OBJECT - 27)) | (1 << (XonParser.ENUM - 27)) | (1 << (XonParser.INTERFACE - 27)) | (1 << (XonParser.PLUS - 27)) | (1 << (XonParser.LESS - 27)) | (1 << (XonParser.GREAT - 27)) | (1 << (XonParser.MINUS - 27)) | (1 << (XonParser.SLASH - 27)) | (1 << (XonParser.CARET - 27)) | (1 << (XonParser.ASSIGN - 27)) | (1 << (XonParser.MODULO - 27)) | (1 << (XonParser.ASTERISK - 27)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.STRING_LITERAL - 67)) | (1 << (XonParser.ID - 67)) | (1 << (XonParser.NL - 67)))) !== 0));
				this.state = 186;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				this.match(XonParser.FOR);
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 191;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 192;
						this.match(XonParser.COMMA);
						this.state = 193;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 196;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 200;
				this.expression(0);
				this.state = 201;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.match(XonParser.WHILE);
				this.state = 204;
				this.expression(0);
				this.state = 205;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.match(XonParser.DO);
				this.state = 208;
				this.body();
				this.state = 209;
				this.match(XonParser.WHILE);
				this.state = 210;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 212;
				this.match(XonParser.IF);
				this.state = 213;
				this.expression(0);
				this.state = 214;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 217;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 215;
					this.match(XonParser.ELSE);
					this.state = 216;
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
				this.state = 219;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 220;
				this.match(XonParser.RETURN);
				this.state = 222;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 221;
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
				this.state = 224;
				this.match(XonParser.ACTUAL);
				this.state = 225;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 226;
					this.match(XonParser.NL);
					}
					}
					this.state = 229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 231;
				this.match(XonParser.EXPECT);
				this.state = 232;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 234;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 235;
				this.id();
				this.state = 236;
				this.match(XonParser.ASSIGN);
				this.state = 237;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 239;
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
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 243;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 244;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 245;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.NOT - 33)) | (1 << (XonParser.PLUS - 33)) | (1 << (XonParser.MINUS - 33)))) !== 0))) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 246;
				this.expression(16);
				}
				break;

			case 4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 247;
				this.lambdaParameters();
				this.state = 248;
				this.match(XonParser.COLON);
				this.state = 249;
				this.expression(4);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 251;
				this.arrayArguments();
				}
				break;

			case 6:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 252;
				this.objectArguments();
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 253;
				this.match(XonParser.OPEN_PAREN);
				this.state = 254;
				this.expression(0);
				this.state = 255;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 317;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 315;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 259;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 260;
						(_localctx as InfixExpressionContext)._op = this.id();
						this.state = 261;
						(_localctx as InfixExpressionContext)._right = this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 263;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 264;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 265;
						(_localctx as PowExpressionContext)._right = this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 266;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 267;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.SLASH - 48)) | (1 << (XonParser.MODULO - 48)) | (1 << (XonParser.ASTERISK - 48)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 268;
						(_localctx as MulDivModExpressionContext)._right = this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 269;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 270;
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
						this.state = 271;
						(_localctx as AddSubExpressionContext)._right = this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 272;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 273;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 274;
						(_localctx as RangeExpressionContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 275;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 276;
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
						this.state = 277;
						(_localctx as ElvisExpressionContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 278;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 279;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.LESS - 41)) | (1 << (XonParser.LESS_EQUAL - 41)) | (1 << (XonParser.GREAT - 41)) | (1 << (XonParser.GREAT_EQUAL - 41)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 280;
						(_localctx as RelationalExpressionContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 281;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 282;
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
						this.state = 283;
						(_localctx as EqualityExpressionContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 284;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 285;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 286;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 287;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 288;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 289;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 290;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 291;
						this.match(XonParser.PIPE);
						this.state = 295;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
						case 1:
							{
							this.state = 292;
							this.id();
							this.state = 293;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 297;
						(_localctx as PipeExpressionContext)._right = this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 299;
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
						this.state = 300;
						this.attributeId();
						}
						break;

					case 13:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 303;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 302;
							this.typeArguments();
							}
						}

						this.state = 305;
						this.lambdaArguments();
						}
						break;

					case 14:
						{
						_localctx = new IsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 306;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 307;
						this.match(XonParser.IS);
						this.state = 308;
						this.type(0);
						}
						break;

					case 15:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 309;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 310;
						this.match(XonParser.AS);
						this.state = 311;
						this.type(0);
						}
						break;

					case 16:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 312;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 313;
						this.match(XonParser.IN);
						this.state = 314;
						this.type(0);
						}
						break;
					}
					}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
			this.state = 339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 321;
				this.id();
				this.state = 323;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 322;
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
				this.state = 325;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new LambdaTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 326;
					this.typeParameters();
					}
				}

				this.state = 329;
				this.lambdaParameters();
				this.state = 331;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 330;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new TupleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 333;
				this.arrayParameters();
				}
				break;

			case 5:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 334;
				this.objectParameters();
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 335;
				this.match(XonParser.OPEN_PAREN);
				this.state = 336;
				this.type(0);
				this.state = 337;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 357;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 355;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 341;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 342;
						this.match(XonParser.OR);
						this.state = 343;
						this.type(8);
						}
						break;

					case 2:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 344;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 345;
						this.match(XonParser.AND);
						this.state = 346;
						this.type(7);
						}
						break;

					case 3:
						{
						_localctx = new MetaTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 347;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 348;
						this.match(XonParser.HASH);
						this.state = 349;
						this.id();
						}
						break;

					case 4:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 350;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 351;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 352;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 353;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 354;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 360;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 361;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 362;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 363;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 364;
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
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.id();
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.LESS - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.ID - 41)))) !== 0)) {
					{
					this.state = 368;
					this.type(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 372;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 371;
					this.id();
					}
					break;
				}
				this.state = 374;
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
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(XonParser.OPEN_PAREN);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.LESS - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.ID - 41)))) !== 0)) {
				{
				this.state = 378;
				this.parameter();
				this.state = 383;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 379;
						this.match(XonParser.COMMA);
						this.state = 380;
						this.parameter();
						}
						}
					}
					this.state = 385;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				}
				}
			}

			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 388;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 391;
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
	public arrayParameters(): ArrayParametersContext {
		let _localctx: ArrayParametersContext = new ArrayParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_arrayParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.LESS - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.ID - 41)))) !== 0)) {
				{
				this.state = 394;
				this.parameter();
				this.state = 399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 395;
						this.match(XonParser.COMMA);
						this.state = 396;
						this.parameter();
						}
						}
					}
					this.state = 401;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				}
			}

			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 404;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 407;
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
			this.state = 409;
			this.match(XonParser.OPEN_BRACE);
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.LESS - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.ID - 41)))) !== 0)) {
				{
				this.state = 410;
				this.parameter();
				this.state = 415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 411;
						this.match(XonParser.COMMA);
						this.state = 412;
						this.parameter();
						}
						}
					}
					this.state = 417;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				}
				}
			}

			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 420;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 423;
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
	public lambdaArguments(): LambdaArgumentsContext {
		let _localctx: LambdaArgumentsContext = new LambdaArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_lambdaArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.match(XonParser.OPEN_PAREN);
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.EXTENSION) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
				{
				this.state = 426;
				this.expression(0);
				this.state = 431;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 427;
						this.match(XonParser.COMMA);
						this.state = 428;
						this.expression(0);
						}
						}
					}
					this.state = 433;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				}
			}

			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 436;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 439;
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
		this.enterRule(_localctx, 38, XonParser.RULE_arrayArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.EXTENSION) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
				{
				this.state = 442;
				this.expression(0);
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 443;
						this.match(XonParser.COMMA);
						this.state = 444;
						this.expression(0);
						}
						}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				}
				}
			}

			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 452;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 455;
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
		this.enterRule(_localctx, 40, XonParser.RULE_objectArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(XonParser.OPEN_BRACE);
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.EXTENSION) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
				{
				this.state = 458;
				this.objectArgument();
				this.state = 463;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 459;
						this.match(XonParser.COMMA);
						this.state = 460;
						this.objectArgument();
						}
						}
					}
					this.state = 465;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				}
				}
			}

			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 468;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 471;
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
		this.enterRule(_localctx, 42, XonParser.RULE_objectArgument);
		try {
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				this.attribute();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
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
		this.enterRule(_localctx, 44, XonParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.id();
			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 478;
				this.match(XonParser.IS);
				this.state = 479;
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
		this.enterRule(_localctx, 46, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(XonParser.LESS);
			this.state = 483;
			this.typeParameter();
			this.state = 488;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 484;
					this.match(XonParser.COMMA);
					this.state = 485;
					this.typeParameter();
					}
					}
				}
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 491;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 494;
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
		this.enterRule(_localctx, 48, XonParser.RULE_typeArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(XonParser.LESS);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.LESS - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.REGEX_LITERAL - 41)) | (1 << (XonParser.ID - 41)))) !== 0)) {
				{
				this.state = 497;
				this.type(0);
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 498;
						this.match(XonParser.COMMA);
						this.state = 499;
						this.type(0);
						}
						}
					}
					this.state = 504;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				}
				}
			}

			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 507;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 510;
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
		this.enterRule(_localctx, 50, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(XonParser.COLON);
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 513;
				this.statement();
				}
				break;

			case 2:
				{
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
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
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
					case XonParser.EXTENSION:
					case XonParser.CLASS:
					case XonParser.OBJECT:
					case XonParser.ENUM:
					case XonParser.INTERFACE:
					case XonParser.NOT:
					case XonParser.PLUS:
					case XonParser.MINUS:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
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
					this.state = 524;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.EXTENSION) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 526;
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
		this.enterRule(_localctx, 52, XonParser.RULE_attributeId);
		try {
			this.state = 532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.EXTENSION:
			case XonParser.CLASS:
			case XonParser.OBJECT:
			case XonParser.ENUM:
			case XonParser.INTERFACE:
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 529;
				this.id();
				}
				break;
			case XonParser.PLUS:
			case XonParser.LESS:
			case XonParser.GREAT:
			case XonParser.MINUS:
			case XonParser.SLASH:
			case XonParser.CARET:
			case XonParser.ASSIGN:
			case XonParser.MODULO:
			case XonParser.ASTERISK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 530;
				this.operator();
				}
				break;
			case XonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 531;
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
		this.enterRule(_localctx, 54, XonParser.RULE_id);
		try {
			this.state = 536;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 534;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.EXTENSION:
			case XonParser.CLASS:
			case XonParser.OBJECT:
			case XonParser.ENUM:
			case XonParser.INTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 535;
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
		this.enterRule(_localctx, 56, XonParser.RULE_definitionModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (XonParser.EXTENSION - 27)) | (1 << (XonParser.CLASS - 27)) | (1 << (XonParser.OBJECT - 27)) | (1 << (XonParser.ENUM - 27)) | (1 << (XonParser.INTERFACE - 27)))) !== 0))) {
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
		this.enterRule(_localctx, 58, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.PLUS - 38)) | (1 << (XonParser.LESS - 38)) | (1 << (XonParser.GREAT - 38)) | (1 << (XonParser.MINUS - 38)) | (1 << (XonParser.SLASH - 38)) | (1 << (XonParser.CARET - 38)) | (1 << (XonParser.ASSIGN - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.ASTERISK - 38)))) !== 0))) {
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
			return this.precpred(this._ctx, 7);

		case 17:
			return this.precpred(this._ctx, 6);

		case 18:
			return this.precpred(this._ctx, 9);

		case 19:
			return this.precpred(this._ctx, 8);

		case 20:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03K\u0221\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x07\x02" +
		"B\n\x02\f\x02\x0E\x02E\v\x02\x03\x02\x03\x02\x07\x02I\n\x02\f\x02\x0E" +
		"\x02L\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04W\n\x04\f\x04\x0E\x04Z\v\x04\x03\x05\x03\x05\x03\x05" +
		"\x07\x05_\n\x05\f\x05\x0E\x05b\v\x05\x03\x06\x03\x06\x03\x06\x05\x06g" +
		"\n\x06\x03\x07\x03\x07\x03\x07\x05\x07l\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07s\n\x07\x03\x07\x05\x07v\n\x07\x05\x07x\n\x07" +
		"\x03\b\x03\b\x05\b|\n\b\x03\b\x05\b\x7F\n\b\x03\t\x03\t\x03\t\x05\t\x84" +
		"\n\t\x03\t\x03\t\x03\n\x06\n\x89\n\n\r\n\x0E\n\x8A\x03\n\x03\n\x03\n\x06" +
		"\n\x90\n\n\r\n\x0E\n\x91\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\x9B\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\xA3\n\v\r\v\x0E\v" +
		"\xA4\x03\v\x03\v\x03\v\x06\v\xAA\n\v\r\v\x0E\v\xAB\x03\v\x03\v\x03\v\x03" +
		"\v\x06\v\xB2\n\v\r\v\x0E\v\xB3\x03\v\x03\v\x03\v\x06\v\xB9\n\v\r\v\x0E" +
		"\v\xBA\x03\v\x03\v\x05\v\xBF\n\v\x03\f\x03\f\x03\f\x03\f\x05\f\xC5\n\f" +
		"\x03\f\x03\f\x05\f\xC9\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xDC\n\f" +
		"\x03\f\x03\f\x03\f\x05\f\xE1\n\f\x03\f\x03\f\x03\f\x06\f\xE6\n\f\r\f\x0E" +
		"\f\xE7\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xF3" +
		"\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u0104\n\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u012A\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0132\n\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u013E\n\r\f\r\x0E\r\u0141\v\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u0146\n\x0E\x03\x0E\x03\x0E\x05\x0E\u014A" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\u014E\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u0156\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x07\x0E\u0166\n\x0E\f\x0E\x0E\x0E\u0169\v\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0170\n\x0F\x03\x10\x03\x10\x05\x10\u0174" +
		"\n\x10\x03\x10\x05\x10\u0177\n\x10\x03\x10\x05\x10\u017A\n\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x07\x11\u0180\n\x11\f\x11\x0E\x11\u0183\v\x11" +
		"\x05\x11\u0185\n\x11\x03\x11\x05\x11\u0188\n\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x07\x12\u0190\n\x12\f\x12\x0E\x12\u0193\v\x12" +
		"\x05\x12\u0195\n\x12\x03\x12\x05\x12\u0198\n\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x07\x13\u01A0\n\x13\f\x13\x0E\x13\u01A3\v\x13" +
		"\x05\x13\u01A5\n\x13\x03\x13\x05\x13\u01A8\n\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u01B0\n\x14\f\x14\x0E\x14\u01B3\v\x14" +
		"\x05\x14\u01B5\n\x14\x03\x14\x05\x14\u01B8\n\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\u01C0\n\x15\f\x15\x0E\x15\u01C3\v\x15" +
		"\x05\x15\u01C5\n\x15\x03\x15\x05\x15\u01C8\n\x15\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x07\x16\u01D0\n\x16\f\x16\x0E\x16\u01D3\v\x16" +
		"\x05\x16\u01D5\n\x16\x03\x16\x05\x16\u01D8\n\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x05\x17\u01DE\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u01E3\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u01E9\n\x19\f\x19\x0E\x19\u01EC" +
		"\v\x19\x03\x19\x05\x19\u01EF\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x07\x1A\u01F7\n\x1A\f\x1A\x0E\x1A\u01FA\v\x1A\x05\x1A\u01FC" +
		"\n\x1A\x03\x1A\x05\x1A\u01FF\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x06\x1B\u0206\n\x1B\r\x1B\x0E\x1B\u0207\x03\x1B\x03\x1B\x03\x1B\x06" +
		"\x1B\u020D\n\x1B\r\x1B\x0E\x1B\u020E\x03\x1B\x05\x1B\u0212\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u0217\n\x1C\x03\x1D\x03\x1D\x05\x1D\u021B\n\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x02\x02\x04\x18\x1A \x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\n\x05\x02##((11\x05\x022" +
		"288;;\x04\x02((11\x04\x02+,/0\x03\x0267\x04\x02%%::\x04\x02\x1D\x1D\x1F" +
		"\"\t\x02((++//135588;;\x02\u0279\x02C\x03\x02\x02\x02\x04M\x03\x02\x02" +
		"\x02\x06P\x03\x02\x02\x02\b[\x03\x02\x02\x02\nc\x03\x02\x02\x02\fw\x03" +
		"\x02\x02\x02\x0Ey\x03\x02\x02\x02\x10\x80\x03\x02\x02\x02\x12\x88\x03" +
		"\x02\x02\x02\x14\xBE\x03\x02\x02\x02\x16\xF2\x03\x02\x02\x02\x18\u0103" +
		"\x03\x02\x02\x02\x1A\u0155\x03\x02\x02\x02\x1C\u016F\x03\x02\x02\x02\x1E" +
		"\u0179\x03\x02\x02\x02 \u017B\x03\x02\x02\x02\"\u018B\x03\x02\x02\x02" +
		"$\u019B\x03\x02\x02\x02&\u01AB\x03\x02\x02\x02(\u01BB\x03\x02\x02\x02" +
		"*\u01CB\x03\x02\x02\x02,\u01DD\x03\x02\x02\x02.\u01DF\x03\x02\x02\x02" +
		"0\u01E4\x03\x02\x02\x022\u01F2\x03\x02\x02\x024\u0202\x03\x02\x02\x02" +
		"6\u0216\x03\x02\x02\x028\u021A\x03\x02\x02\x02:\u021C\x03\x02\x02\x02" +
		"<\u021E\x03\x02\x02\x02>B\x05\x06\x04\x02?B\x05\x04\x03\x02@B\x07I\x02" +
		"\x02A>\x03\x02\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02BE\x03\x02\x02" +
		"\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DJ\x03\x02\x02\x02EC\x03\x02\x02" +
		"\x02FI\x05\f\x07\x02GI\x07I\x02\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02" +
		"IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02K\x03\x03\x02\x02" +
		"\x02LJ\x03\x02\x02\x02MN\x07\x18\x02\x02NO\x05\b\x05\x02O\x05\x03\x02" +
		"\x02\x02PQ\x07\x19\x02\x02QR\x05\b\x05\x02RS\x07.\x02\x02SX\x05\n\x06" +
		"\x02TU\x07-\x02\x02UW\x05\n\x06\x02VT\x03\x02\x02\x02WZ\x03\x02\x02\x02" +
		"XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\x07\x03\x02\x02\x02ZX\x03\x02\x02" +
		"\x02[`\x058\x1D\x02\\]\x07%\x02\x02]_\x058\x1D\x02^\\\x03\x02\x02\x02" +
		"_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02a\t\x03\x02\x02" +
		"\x02b`\x03\x02\x02\x02cf\x058\x1D\x02de\x07\f\x02\x02eg\x058\x1D\x02f" +
		"d\x03\x02\x02\x02fg\x03\x02\x02\x02g\v\x03\x02\x02\x02hi\x07\x1E\x02\x02" +
		"ik\x058\x1D\x02jl\x050\x19\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03" +
		"\x02\x02\x02mn\x07.\x02\x02no\x05\x1A\x0E\x02ox\x03\x02\x02\x02pr\x05" +
		":\x1E\x02qs\x05\x0E\b\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02" +
		"\x02\x02tv\x05\x12\n\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02" +
		"\x02\x02wh\x03\x02\x02\x02wp\x03\x02\x02\x02x\r\x03\x02\x02\x02y{\x05" +
		"8\x1D\x02z|\x05\x1A\x0E\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|~\x03" +
		"\x02\x02\x02}\x7F\x05\x10\t\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02" +
		"\x7F\x0F\x03\x02\x02\x02\x80\x81\x07\v\x02\x02\x81\x83\x058\x1D\x02\x82" +
		"\x84\x052\x1A\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84" +
		"\x85\x03\x02\x02\x02\x85\x86\x05&\x14\x02\x86\x11\x03\x02\x02\x02\x87" +
		"\x89\x07I\x02\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A" +
		"\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C" +
		"\x8F\x07\x03\x02\x02\x8D\x90\x05\x14\v\x02\x8E\x90\x07I\x02\x02\x8F\x8D" +
		"\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x8F" +
		"\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94" +
		"\x07\x04\x02\x02\x94\x13\x03\x02\x02\x02\x95\x96\x056\x1C\x02\x96\x97" +
		"\x05\x1A\x0E\x02\x97\xBF\x03\x02\x02\x02\x98\x9A\x056\x1C\x02\x99\x9B" +
		"\x05\x1A\x0E\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C" +
		"\x03\x02\x02\x02\x9C\x9D\x07.\x02\x02\x9D\x9E\x05\x18\r\x02\x9E\xBF\x03" +
		"\x02\x02\x02\x9F\xA0\x056\x1C\x02\xA0\xA2\x05\x1A\x0E\x02\xA1\xA3\x07" +
		"I\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA2\x03" +
		"\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA9\x07" +
		"\x03\x02\x02\xA7\xAA\x05\x16\f\x02\xA8\xAA\x07I\x02\x02\xA9\xA7\x03\x02" +
		"\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xA9\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x07\x04" +
		"\x02\x02\xAE\xBF\x03\x02\x02\x02\xAF\xB1\x056\x1C\x02\xB0\xB2\x07I\x02" +
		"\x02\xB1\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB1\x03\x02\x02" +
		"\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x07\x03\x02" +
		"\x02\xB6\xB9\x05\x14\v\x02\xB7\xB9\x07I\x02\x02\xB8\xB6\x03\x02\x02\x02" +
		"\xB8\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02" +
		"\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x07\x04\x02\x02" +
		"\xBD\xBF\x03\x02\x02\x02\xBE\x95\x03\x02\x02\x02\xBE\x98\x03\x02\x02\x02" +
		"\xBE\x9F\x03\x02\x02\x02\xBE\xAF\x03\x02\x02\x02\xBF\x15\x03\x02\x02\x02" +
		"\xC0\xC8\x07\x10\x02\x02\xC1\xC4\x058\x1D\x02\xC2\xC3\x07-\x02\x02\xC3" +
		"\xC5\x058\x1D\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5" +
		"\xC6\x03\x02\x02\x02\xC6\xC7\x07\x0F\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8" +
		"\xC1\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
		"\xCB\x05\x18\r\x02\xCB\xCC\x054\x1B\x02\xCC\xF3\x03\x02\x02\x02\xCD\xCE" +
		"\x07\x15\x02\x02\xCE\xCF\x05\x18\r\x02\xCF\xD0\x054\x1B\x02\xD0\xF3\x03" +
		"\x02\x02\x02\xD1\xD2\x07\r\x02\x02\xD2\xD3\x054\x1B\x02\xD3\xD4\x07\x15" +
		"\x02\x02\xD4\xD5\x05\x18\r\x02\xD5\xF3\x03\x02\x02\x02\xD6\xD7\x07\x0E" +
		"\x02\x02\xD7\xD8\x05\x18\r\x02\xD8\xDB\x054\x1B\x02\xD9\xDA\x07\x11\x02" +
		"\x02\xDA\xDC\x054\x1B\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02" +
		"\x02\xDC\xF3\x03\x02\x02\x02\xDD\xF3\x07\x13\x02\x02\xDE\xE0\x07\x1B\x02" +
		"\x02\xDF\xE1\x05\x18\r\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02" +
		"\x02\xE1\xF3\x03\x02\x02\x02\xE2\xE3\x07\x16\x02\x02\xE3\xE5\x05\x18\r" +
		"\x02\xE4\xE6\x07I\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
		"\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02" +
		"\x02\xE9\xEA\x07\x17\x02\x02\xEA\xEB\x05\x18\r\x02\xEB\xF3\x03\x02\x02" +
		"\x02\xEC\xF3\x07G\x02\x02\xED\xEE\x058\x1D\x02\xEE\xEF\x075\x02\x02\xEF" +
		"\xF0\x05\x18\r\x02\xF0\xF3\x03\x02\x02\x02\xF1\xF3\x05\x18\r\x02\xF2\xC0" +
		"\x03\x02\x02\x02\xF2\xCD\x03\x02\x02\x02\xF2\xD1\x03\x02\x02\x02\xF2\xD6" +
		"\x03\x02\x02\x02\xF2\xDD\x03\x02\x02\x02\xF2\xDE\x03\x02\x02\x02\xF2\xE2" +
		"\x03\x02\x02\x02\xF2\xEC\x03\x02\x02\x02\xF2\xED\x03\x02\x02\x02\xF2\xF1" +
		"\x03\x02\x02\x02\xF3\x17\x03\x02\x02\x02\xF4\xF5\b\r\x01\x02\xF5\u0104" +
		"\x058\x1D\x02\xF6\u0104\x05\x1C\x0F\x02\xF7\xF8\t\x02\x02\x02\xF8\u0104" +
		"\x05\x18\r\x12\xF9\xFA\x05 \x11\x02\xFA\xFB\x07.\x02\x02\xFB\xFC\x05\x18" +
		"\r\x06\xFC\u0104\x03\x02\x02\x02\xFD\u0104\x05(\x15\x02\xFE\u0104\x05" +
		"*\x16\x02\xFF\u0100\x07\x07\x02\x02\u0100\u0101\x05\x18\r\x02\u0101\u0102" +
		"\x07\b\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103\xF4\x03\x02\x02\x02\u0103" +
		"\xF6\x03\x02\x02\x02\u0103\xF7\x03\x02\x02\x02\u0103\xF9\x03\x02\x02\x02" +
		"\u0103\xFD\x03\x02\x02\x02\u0103\xFE\x03\x02\x02\x02\u0103\xFF\x03\x02" +
		"\x02\x02\u0104\u013F\x03\x02\x02\x02\u0105\u0106\f\x11\x02\x02\u0106\u0107" +
		"\x058\x1D\x02\u0107\u0108\x05\x18\r\x12\u0108\u013E\x03\x02\x02\x02\u0109" +
		"\u010A\f\x10\x02\x02\u010A\u010B\x073\x02\x02\u010B\u013E\x05\x18\r\x11" +
		"\u010C\u010D\f\x0F\x02\x02\u010D\u010E\t\x03\x02\x02\u010E\u013E\x05\x18" +
		"\r\x10\u010F\u0110\f\x0E\x02\x02\u0110\u0111\t\x04\x02\x02\u0111\u013E" +
		"\x05\x18\r\x0F\u0112\u0113\f\r\x02\x02\u0113\u0114\x07&\x02\x02\u0114" +
		"\u013E\x05\x18\r\x0E\u0115\u0116\f\f\x02\x02\u0116\u0117\x079\x02\x02" +
		"\u0117\u013E\x05\x18\r\r\u0118\u0119\f\v\x02\x02\u0119\u011A\t\x05\x02" +
		"\x02\u011A\u013E\x05\x18\r\f\u011B\u011C\f\n\x02\x02\u011C\u011D\t\x06" +
		"\x02\x02\u011D\u013E\x05\x18\r\v\u011E\u011F\f\t\x02\x02\u011F\u0120\x07" +
		"=\x02\x02\u0120\u013E\x05\x18\r\n\u0121\u0122\f\b\x02\x02\u0122\u0123" +
		"\x07>\x02\x02\u0123\u013E\x05\x18\r\t\u0124\u0125\f\x07\x02\x02\u0125" +
		"\u0129\x07*\x02\x02\u0126\u0127\x058\x1D\x02\u0127\u0128\x07.\x02\x02" +
		"\u0128\u012A\x03\x02\x02\x02\u0129\u0126\x03\x02\x02\x02\u0129\u012A\x03" +
		"\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u013E\x05\x18\r\b\u012C" +
		"\u012D\f\x17\x02\x02\u012D\u012E\t\x07\x02\x02\u012E\u013E\x056\x1C\x02" +
		"\u012F\u0131\f\x16\x02\x02\u0130\u0132\x052\x1A\x02\u0131\u0130\x03\x02" +
		"\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133" +
		"\u013E\x05&\x14\x02\u0134\u0135\f\x15\x02\x02\u0135\u0136\x07\v\x02\x02" +
		"\u0136\u013E\x05\x1A\x0E\x02\u0137\u0138\f\x14\x02\x02\u0138\u0139\x07" +
		"\f\x02\x02\u0139\u013E\x05\x1A\x0E\x02\u013A\u013B\f\x13\x02\x02\u013B" +
		"\u013C\x07\x0F\x02\x02\u013C\u013E\x05\x1A\x0E\x02\u013D\u0105\x03\x02" +
		"\x02\x02\u013D\u0109\x03\x02\x02\x02\u013D\u010C\x03\x02\x02\x02\u013D" +
		"\u010F\x03\x02\x02\x02\u013D\u0112\x03\x02\x02\x02\u013D\u0115\x03\x02" +
		"\x02\x02\u013D\u0118\x03\x02\x02\x02\u013D\u011B\x03\x02\x02\x02\u013D" +
		"\u011E\x03\x02\x02\x02\u013D\u0121\x03\x02\x02\x02\u013D\u0124\x03\x02" +
		"\x02\x02\u013D\u012C\x03\x02\x02\x02\u013D\u012F\x03\x02\x02\x02\u013D" +
		"\u0134\x03\x02\x02\x02\u013D\u0137\x03\x02\x02\x02\u013D\u013A\x03\x02" +
		"\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\x19\x03\x02\x02\x02\u0141\u013F\x03\x02\x02" +
		"\x02\u0142\u0143\b\x0E\x01\x02\u0143\u0145\x058\x1D\x02\u0144\u0146\x05" +
		"2\x1A\x02\u0145\u0144\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\u0156\x03\x02\x02\x02\u0147\u0156\x05\x1C\x0F\x02\u0148\u014A\x050\x19" +
		"\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B" +
		"\x03\x02\x02\x02\u014B\u014D\x05 \x11\x02\u014C\u014E\x05\x1A\x0E\x02" +
		"\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0156\x03" +
		"\x02\x02\x02\u014F\u0156\x05\"\x12\x02\u0150\u0156\x05$\x13\x02\u0151" +
		"\u0152\x07\x07\x02\x02\u0152\u0153\x05\x1A\x0E\x02\u0153\u0154\x07\b\x02" +
		"\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0142\x03\x02\x02\x02\u0155\u0147" +
		"\x03\x02\x02\x02\u0155\u0149\x03\x02\x02\x02\u0155\u014F\x03\x02\x02\x02" +
		"\u0155\u0150\x03\x02\x02\x02\u0155\u0151\x03\x02\x02\x02\u0156\u0167\x03" +
		"\x02\x02\x02\u0157\u0158\f\t\x02\x02\u0158\u0159\x07>\x02\x02\u0159\u0166" +
		"\x05\x1A\x0E\n\u015A\u015B\f\b\x02\x02\u015B\u015C\x07=\x02\x02\u015C" +
		"\u0166\x05\x1A\x0E\t\u015D\u015E\f\v\x02\x02\u015E\u015F\x07)\x02\x02" +
		"\u015F\u0166\x058\x1D\x02\u0160\u0161\f\n\x02\x02\u0161\u0166\x079\x02" +
		"\x02\u0162\u0163\f\x07\x02\x02\u0163\u0164\x07\x05\x02\x02\u0164\u0166" +
		"\x07\x06\x02\x02\u0165\u0157\x03\x02\x02\x02\u0165\u015A\x03\x02\x02\x02" +
		"\u0165\u015D\x03\x02\x02\x02\u0165\u0160\x03\x02\x02\x02\u0165\u0162\x03" +
		"\x02\x02\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167" +
		"\u0168\x03\x02\x02\x02\u0168\x1B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02" +
		"\x02\u016A\u0170\x07C\x02\x02\u016B\u0170\x07B\x02\x02\u016C\u0170\x07" +
		"D\x02\x02\u016D\u0170\x07E\x02\x02\u016E\u0170\x07F\x02\x02\u016F\u016A" +
		"\x03\x02\x02\x02\u016F\u016B\x03\x02\x02\x02\u016F\u016C\x03\x02\x02\x02" +
		"\u016F\u016D\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\x1D\x03" +
		"\x02\x02\x02\u0171\u0173\x058\x1D\x02\u0172\u0174\x05\x1A\x0E\x02\u0173" +
		"\u0172\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u017A\x03\x02" +
		"\x02\x02\u0175\u0177\x058\x1D\x02\u0176\u0175\x03\x02\x02\x02\u0176\u0177" +
		"\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u017A\x05\x1A\x0E\x02" +
		"\u0179\u0171\x03\x02\x02\x02\u0179\u0176\x03\x02\x02\x02\u017A\x1F\x03" +
		"\x02\x02\x02\u017B\u0184\x07\x07\x02\x02\u017C\u0181\x05\x1E\x10\x02\u017D" +
		"\u017E\x07-\x02\x02\u017E\u0180\x05\x1E\x10\x02\u017F\u017D\x03\x02\x02" +
		"\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02" +
		"\u0184\u017C\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0187\x03" +
		"\x02\x02\x02\u0186\u0188\x07-\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187" +
		"\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x07\b\x02" +
		"\x02\u018A!\x03\x02\x02\x02\u018B\u0194\x07\x05\x02\x02\u018C\u0191\x05" +
		"\x1E\x10\x02\u018D\u018E\x07-\x02\x02\u018E\u0190\x05\x1E\x10\x02\u018F" +
		"\u018D\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02" +
		"\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0194\u018C\x03\x02\x02\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196\u0198\x07-\x02\x02\u0197\u0196" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02" +
		"\u0199\u019A\x07\x06\x02\x02\u019A#\x03\x02\x02\x02\u019B\u01A4\x07\t" +
		"\x02\x02\u019C\u01A1\x05\x1E\x10\x02\u019D\u019E\x07-\x02\x02\u019E\u01A0" +
		"\x05\x1E\x10\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02" +
		"\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A5\x03" +
		"\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A4\u019C\x03\x02\x02\x02\u01A4" +
		"\u01A5\x03\x02\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u01A8\x07-\x02" +
		"\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9" +
		"\x03\x02\x02\x02\u01A9\u01AA\x07\n\x02\x02\u01AA%\x03\x02\x02\x02\u01AB" +
		"\u01B4\x07\x07\x02\x02\u01AC\u01B1\x05\x18\r\x02\u01AD\u01AE\x07-\x02" +
		"\x02\u01AE\u01B0\x05\x18\r\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B3" +
		"\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02" +
		"\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01AC\x03" +
		"\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6" +
		"\u01B8\x07-\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02" +
		"\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x07\b\x02\x02\u01BA\'\x03" +
		"\x02\x02\x02\u01BB\u01C4\x07\x05\x02\x02\u01BC\u01C1\x05\x18\r\x02\u01BD" +
		"\u01BE\x07-\x02\x02\u01BE\u01C0\x05\x18\r\x02\u01BF\u01BD\x03\x02\x02" +
		"\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2" +
		"\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02" +
		"\u01C4\u01BC\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C7\x03" +
		"\x02\x02\x02\u01C6\u01C8\x07-\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7" +
		"\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x07\x06" +
		"\x02\x02\u01CA)\x03\x02\x02\x02\u01CB\u01D4\x07\t\x02\x02\u01CC\u01D1" +
		"\x05,\x17\x02\u01CD\u01CE\x07-\x02\x02\u01CE\u01D0\x05,\x17\x02\u01CF" +
		"\u01CD\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
		"\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D4\u01CC\x03\x02\x02\x02\u01D4\u01D5\x03\x02" +
		"\x02\x02\u01D5\u01D7\x03\x02\x02\x02\u01D6\u01D8\x07-\x02\x02\u01D7\u01D6" +
		"\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
		"\u01D9\u01DA\x07\n\x02\x02\u01DA+\x03\x02\x02\x02\u01DB\u01DE\x05\x14" +
		"\v\x02\u01DC\u01DE\x05\x18\r\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DC" +
		"\x03\x02\x02\x02\u01DE-\x03\x02\x02\x02\u01DF\u01E2\x058\x1D\x02\u01E0" +
		"\u01E1\x07\v\x02\x02\u01E1\u01E3\x05\x1A\x0E\x02\u01E2\u01E0\x03\x02\x02" +
		"\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3/\x03\x02\x02\x02\u01E4\u01E5\x07" +
		"+\x02\x02\u01E5\u01EA\x05.\x18\x02\u01E6\u01E7\x07-\x02\x02\u01E7\u01E9" +
		"\x05.\x18\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02" +
		"\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EE\x03" +
		"\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01EF\x07-\x02\x02\u01EE" +
		"\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x03\x02" +
		"\x02\x02\u01F0\u01F1\x07/\x02\x02\u01F11\x03\x02\x02\x02\u01F2\u01FB\x07" +
		"+\x02\x02\u01F3\u01F8\x05\x1A\x0E\x02\u01F4\u01F5\x07-\x02\x02\u01F5\u01F7" +
		"\x05\x1A\x0E\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02" +
		"\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FC\x03" +
		"\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01F3\x03\x02\x02\x02\u01FB" +
		"\u01FC\x03\x02\x02\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01FF\x07-\x02" +
		"\x02\u01FE\u01FD\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200" +
		"\x03\x02\x02\x02\u0200\u0201\x07/\x02\x02\u02013\x03\x02\x02\x02\u0202" +
		"\u0211\x07.\x02\x02\u0203\u0212\x05\x16\f\x02\u0204\u0206\x07I\x02\x02" +
		"\u0205\u0204\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0205\x03" +
		"\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209" +
		"\u020C\x07\x03\x02\x02\u020A\u020D\x05\x16\f\x02\u020B\u020D\x07I\x02" +
		"\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D\u020E" +
		"\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02" +
		"\u020F\u0210\x03\x02\x02\x02\u0210\u0212\x07\x04\x02\x02\u0211\u0203\x03" +
		"\x02\x02\x02\u0211\u0205\x03\x02\x02\x02\u0211\u0212";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u02125\x03\x02\x02\x02\u0213\u0217\x058\x1D\x02\u0214" +
		"\u0217\x05<\x1F\x02\u0215\u0217\x07E\x02\x02\u0216\u0213\x03\x02\x02\x02" +
		"\u0216\u0214\x03\x02\x02\x02\u0216\u0215\x03\x02\x02\x02\u02177\x03\x02" +
		"\x02\x02\u0218\u021B\x07H\x02\x02\u0219\u021B\x05:\x1E\x02\u021A\u0218" +
		"\x03\x02\x02\x02\u021A\u0219\x03\x02\x02\x02\u021B9\x03\x02\x02\x02\u021C" +
		"\u021D\t\b\x02\x02\u021D;\x03\x02\x02\x02\u021E\u021F\t\t\x02\x02\u021F" +
		"=\x03\x02\x02\x02OACHJX`fkruw{~\x83\x8A\x8F\x91\x9A\xA4\xA9\xAB\xB3\xB8" +
		"\xBA\xBE\xC4\xC8\xDB\xE0\xE7\xF2\u0103\u0129\u0131\u013D\u013F\u0145\u0149" +
		"\u014D\u0155\u0165\u0167\u016F\u0173\u0176\u0179\u0181\u0184\u0187\u0191" +
		"\u0194\u0197\u01A1\u01A4\u01A7\u01B1\u01B4\u01B7\u01C1\u01C4\u01C7\u01D1" +
		"\u01D4\u01D7\u01DD\u01E2\u01EA\u01EE\u01F8\u01FB\u01FE\u0207\u020C\u020E" +
		"\u0211\u0216\u021A";
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
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public definitionAncestor(): DefinitionAncestorContext | undefined {
		return this.tryGetRuleContext(0, DefinitionAncestorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionHeader; }
}


export class DefinitionAncestorContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public lambdaArguments(): LambdaArgumentsContext {
		return this.getRuleContext(0, LambdaArgumentsContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionAncestor; }
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
export class AbstractAttributeContext extends AttributeContext {
	public attributeId(): AttributeIdContext {
		return this.getRuleContext(0, AttributeIdContext);
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
export class LambdaTypeContext extends TypeContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
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
export class TupleTypeContext extends TypeContext {
	public arrayParameters(): ArrayParametersContext {
		return this.getRuleContext(0, ArrayParametersContext);
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
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class LambdaParametersContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_lambdaParameters; }
}


export class ArrayParametersContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_arrayParameters; }
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


