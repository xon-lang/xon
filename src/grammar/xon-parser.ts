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
	public static readonly INSTANCE = 64;
	public static readonly INSTANCE_MEMBER = 65;
	public static readonly FLOAT_LITERAL = 66;
	public static readonly INTEGER_LITERAL = 67;
	public static readonly CHAR_LITERAL = 68;
	public static readonly STRING_LITERAL = 69;
	public static readonly REGEX_LITERAL = 70;
	public static readonly PREPROCESSOR = 71;
	public static readonly UPPER_ID = 72;
	public static readonly LOWER_ID = 73;
	public static readonly NL = 74;
	public static readonly WS = 75;
	public static readonly COMMENT = 76;
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
	public static readonly RULE_assignment = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_literal = 14;
	public static readonly RULE_parameter = 15;
	public static readonly RULE_typeParameter = 16;
	public static readonly RULE_typeParameters = 17;
	public static readonly RULE_typeArguments = 18;
	public static readonly RULE_body = 19;
	public static readonly RULE_id = 20;
	public static readonly RULE_operator = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "libraryPath", "libraryMember", "definition", 
		"definitionHeader", "definitionAncestor", "definitionBody", "attribute", 
		"statement", "assignment", "expression", "type", "literal", "parameter", 
		"typeParameter", "typeParameters", "typeArguments", "body", "id", "operator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'test'", "'break'", 
		"'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'type'", "'class'", 
		"'object'", "'enum'", "'interface'", "'not'", "'@'", "'.'", "'..'", "'...'", 
		"'+'", "'#'", "'|'", "'<'", "'<='", "','", "':'", "'>'", "'>='", "'-'", 
		"'/'", "'^'", "'~'", "'='", "'=='", "'!='", "'%'", "'?'", "'?.'", "'*'", 
		"'&'", "'&&'", "'||'", "'_'", "'!'", "'\\'", "'$'",
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
		"AND", "OR", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "INSTANCE", "INSTANCE_MEMBER", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
		"REGEX_LITERAL", "PREPROCESSOR", "UPPER_ID", "LOWER_ID", "NL", "WS", "COMMENT",
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
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 47;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 44;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 45;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 46;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (XonParser.EXTENSION - 27)) | (1 << (XonParser.TYPE - 27)) | (1 << (XonParser.CLASS - 27)) | (1 << (XonParser.OBJECT - 27)) | (1 << (XonParser.ENUM - 27)) | (1 << (XonParser.INTERFACE - 27)))) !== 0) || _la === XonParser.NL) {
				{
				this.state = 54;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.EXTENSION:
				case XonParser.TYPE:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
					{
					this.state = 52;
					this.definition();
					}
					break;
				case XonParser.NL:
					{
					this.state = 53;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(XonParser.EXPORT);
			this.state = 60;
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
			this.state = 62;
			this.match(XonParser.IMPORT);
			this.state = 63;
			this.libraryPath();
			this.state = 64;
			this.match(XonParser.COLON);
			this.state = 65;
			this.libraryMember();
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 66;
				this.match(XonParser.COMMA);
				this.state = 67;
				this.libraryMember();
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.id();
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 74;
				this.match(XonParser.DOT);
				this.state = 75;
				this.id();
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
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 82;
				this.match(XonParser.AS);
				this.state = 83;
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
		this.enterRule(_localctx, 10, XonParser.RULE_definition);
		let _la: number;
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.TYPE:
				_localctx = new AliasDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.match(XonParser.TYPE);
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.UPPER_ID) {
					{
					this.state = 87;
					this.definitionHeader();
					}
				}

				this.state = 90;
				this.match(XonParser.COLON);
				this.state = 91;
				this.type(0);
				}
				break;
			case XonParser.CLASS:
				_localctx = new ClassDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.match(XonParser.CLASS);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.UPPER_ID) {
					{
					this.state = 93;
					this.definitionHeader();
					}
				}

				this.state = 97;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 96;
					this.definitionBody();
					}
					break;
				}
				}
				break;
			case XonParser.ENUM:
				_localctx = new EnumDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.match(XonParser.ENUM);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.UPPER_ID) {
					{
					this.state = 100;
					this.definitionHeader();
					}
				}

				this.state = 104;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 103;
					this.definitionBody();
					}
					break;
				}
				}
				break;
			case XonParser.INTERFACE:
				_localctx = new InterfaceDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.match(XonParser.INTERFACE);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.UPPER_ID) {
					{
					this.state = 107;
					this.definitionHeader();
					}
				}

				this.state = 111;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 110;
					this.definitionBody();
					}
					break;
				}
				}
				break;
			case XonParser.OBJECT:
				_localctx = new ObjectDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 113;
				this.match(XonParser.OBJECT);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.UPPER_ID) {
					{
					this.state = 114;
					this.definitionHeader();
					}
				}

				this.state = 118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 117;
					this.definitionBody();
					}
					break;
				}
				}
				break;
			case XonParser.EXTENSION:
				_localctx = new ExtensionDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 120;
				this.match(XonParser.EXTENSION);
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.UPPER_ID) {
					{
					this.state = 121;
					this.definitionHeader();
					}
				}

				this.state = 125;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 124;
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
			this.state = 129;
			this.match(XonParser.UPPER_ID);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 130;
				this.typeParameters();
				}
			}

			this.state = 133;
			this.match(XonParser.OPEN_PAREN);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XonParser.IS - 9)) | (1 << (XonParser.AS - 9)) | (1 << (XonParser.IN - 9)) | (1 << (XonParser.TYPE - 9)) | (1 << (XonParser.CLASS - 9)) | (1 << (XonParser.OBJECT - 9)) | (1 << (XonParser.ENUM - 9)) | (1 << (XonParser.INTERFACE - 9)) | (1 << (XonParser.NOT - 9)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
				{
				this.state = 134;
				this.parameter();
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 135;
					this.match(XonParser.COMMA);
					this.state = 136;
					this.parameter();
					}
					}
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 144;
			this.match(XonParser.CLOSE_PAREN);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 145;
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
			this.state = 148;
			this.match(XonParser.IS);
			this.state = 149;
			this.type(0);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 150;
				this.match(XonParser.OPEN_PAREN);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
					{
					this.state = 151;
					this.expression(0);
					this.state = 156;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 152;
						this.match(XonParser.COMMA);
						this.state = 153;
						this.expression(0);
						}
						}
						this.state = 158;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 161;
				this.match(XonParser.CLOSE_PAREN);
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
	public definitionBody(): DefinitionBodyContext {
		let _localctx: DefinitionBodyContext = new DefinitionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_definitionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 164;
				this.match(XonParser.NL);
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.NL);
			this.state = 169;
			this.match(XonParser.INDENT);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 172;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.IS:
				case XonParser.AS:
				case XonParser.IN:
				case XonParser.TYPE:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
				case XonParser.NOT:
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
				case XonParser.STRING_LITERAL:
				case XonParser.LOWER_ID:
					{
					this.state = 170;
					this.attribute();
					}
					break;
				case XonParser.NL:
					{
					this.state = 171;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.RANGE - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AND - 32)) | (1 << (XonParser.OR - 32)) | (1 << (XonParser.EXCLAMATION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
			this.state = 176;
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
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				_localctx = new OperatorAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.operator();
				this.state = 179;
				this.type(0);
				{
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 180;
					this.match(XonParser.NL);
					}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 185;
				this.match(XonParser.INDENT);
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 188;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.IS:
					case XonParser.AS:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.RETURN:
					case XonParser.TYPE:
					case XonParser.CLASS:
					case XonParser.OBJECT:
					case XonParser.ENUM:
					case XonParser.INTERFACE:
					case XonParser.NOT:
					case XonParser.PLUS:
					case XonParser.MINUS:
					case XonParser.INSTANCE:
					case XonParser.INSTANCE_MEMBER:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.LOWER_ID:
						{
						this.state = 186;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 187;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 192;
				this.match(XonParser.DEDENT);
				}
				}
				break;

			case 2:
				_localctx = new AbstractAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.IS:
				case XonParser.AS:
				case XonParser.IN:
				case XonParser.TYPE:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
				case XonParser.NOT:
				case XonParser.INSTANCE:
				case XonParser.INSTANCE_MEMBER:
				case XonParser.LOWER_ID:
					{
					this.state = 194;
					this.id();
					}
					break;
				case XonParser.STRING_LITERAL:
					{
					this.state = 195;
					this.match(XonParser.STRING_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 198;
					this.typeParameters();
					}
				}

				this.state = 201;
				this.type(0);
				}
				break;

			case 3:
				_localctx = new ValueAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 204;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.IS:
				case XonParser.AS:
				case XonParser.IN:
				case XonParser.TYPE:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
				case XonParser.NOT:
				case XonParser.INSTANCE:
				case XonParser.INSTANCE_MEMBER:
				case XonParser.LOWER_ID:
					{
					this.state = 202;
					this.id();
					}
					break;
				case XonParser.STRING_LITERAL:
					{
					this.state = 203;
					this.match(XonParser.STRING_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 206;
					this.typeParameters();
					}
				}

				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.FLOAT_LITERAL - 66)) | (1 << (XonParser.INTEGER_LITERAL - 66)) | (1 << (XonParser.CHAR_LITERAL - 66)) | (1 << (XonParser.STRING_LITERAL - 66)) | (1 << (XonParser.REGEX_LITERAL - 66)) | (1 << (XonParser.UPPER_ID - 66)))) !== 0)) {
					{
					this.state = 209;
					this.type(0);
					}
				}

				this.state = 212;
				this.match(XonParser.COLON);
				this.state = 213;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new MethodAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 216;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.IS:
				case XonParser.AS:
				case XonParser.IN:
				case XonParser.TYPE:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
				case XonParser.NOT:
				case XonParser.INSTANCE:
				case XonParser.INSTANCE_MEMBER:
				case XonParser.LOWER_ID:
					{
					this.state = 214;
					this.id();
					}
					break;
				case XonParser.STRING_LITERAL:
					{
					this.state = 215;
					this.match(XonParser.STRING_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 218;
					this.typeParameters();
					}
				}

				this.state = 221;
				this.type(0);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 222;
					this.match(XonParser.NL);
					}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 227;
				this.match(XonParser.INDENT);
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 230;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.IS:
					case XonParser.AS:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.RETURN:
					case XonParser.TYPE:
					case XonParser.CLASS:
					case XonParser.OBJECT:
					case XonParser.ENUM:
					case XonParser.INTERFACE:
					case XonParser.NOT:
					case XonParser.PLUS:
					case XonParser.MINUS:
					case XonParser.INSTANCE:
					case XonParser.INSTANCE_MEMBER:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.LOWER_ID:
						{
						this.state = 228;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 229;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 234;
				this.match(XonParser.DEDENT);
				}
				break;

			case 5:
				_localctx = new ObjectAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 238;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.IS:
				case XonParser.AS:
				case XonParser.IN:
				case XonParser.TYPE:
				case XonParser.CLASS:
				case XonParser.OBJECT:
				case XonParser.ENUM:
				case XonParser.INTERFACE:
				case XonParser.NOT:
				case XonParser.INSTANCE:
				case XonParser.INSTANCE_MEMBER:
				case XonParser.LOWER_ID:
					{
					this.state = 236;
					this.id();
					}
					break;
				case XonParser.STRING_LITERAL:
					{
					this.state = 237;
					this.match(XonParser.STRING_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 240;
					this.typeParameters();
					}
				}

				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 243;
					this.match(XonParser.NL);
					}
					}
					this.state = 246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 248;
				this.match(XonParser.INDENT);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 251;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IS:
					case XonParser.AS:
					case XonParser.IN:
					case XonParser.TYPE:
					case XonParser.CLASS:
					case XonParser.OBJECT:
					case XonParser.ENUM:
					case XonParser.INTERFACE:
					case XonParser.NOT:
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
					case XonParser.STRING_LITERAL:
					case XonParser.LOWER_ID:
						{
						this.state = 249;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 250;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.RANGE - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AND - 32)) | (1 << (XonParser.OR - 32)) | (1 << (XonParser.EXCLAMATION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 255;
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
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.match(XonParser.FOR);
				this.state = 266;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 259;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 260;
						this.match(XonParser.COMMA);
						this.state = 261;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 264;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 268;
				this.expression(0);
				this.state = 269;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 271;
				this.match(XonParser.WHILE);
				this.state = 272;
				this.expression(0);
				this.state = 273;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 275;
				this.match(XonParser.DO);
				this.state = 276;
				this.body();
				this.state = 277;
				this.match(XonParser.WHILE);
				this.state = 278;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 280;
				this.match(XonParser.IF);
				this.state = 281;
				this.expression(0);
				this.state = 282;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 285;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 283;
					this.match(XonParser.ELSE);
					this.state = 284;
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
				this.state = 287;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 288;
				this.match(XonParser.RETURN);
				this.state = 290;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 289;
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
				this.state = 292;
				this.match(XonParser.ACTUAL);
				this.state = 293;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 294;
					this.match(XonParser.NL);
					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 299;
				this.match(XonParser.EXPECT);
				this.state = 300;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 302;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 303;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 304;
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
		this.enterRule(_localctx, 22, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.id();
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 308;
					this.match(XonParser.COMMA);
					this.state = 309;
					this.id();
					}
					}
					this.state = 314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 315;
				this.match(XonParser.ASSIGN);
				this.state = 316;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
				this.expression(0);
				this.state = 319;
				this.match(XonParser.DOT);
				this.state = 320;
				this.id();
				this.state = 321;
				this.match(XonParser.ASSIGN);
				this.state = 322;
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
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 327;
				this.id();
				this.state = 329;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 328;
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
				this.state = 331;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 332;
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
				this.state = 333;
				this.expression(16);
				}
				break;

			case 4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 334;
				this.match(XonParser.OPEN_PAREN);
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XonParser.IS - 9)) | (1 << (XonParser.AS - 9)) | (1 << (XonParser.IN - 9)) | (1 << (XonParser.TYPE - 9)) | (1 << (XonParser.CLASS - 9)) | (1 << (XonParser.OBJECT - 9)) | (1 << (XonParser.ENUM - 9)) | (1 << (XonParser.INTERFACE - 9)) | (1 << (XonParser.NOT - 9)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
					{
					this.state = 335;
					this.id();
					this.state = 340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 336;
						this.match(XonParser.COMMA);
						this.state = 337;
						this.id();
						}
						}
						this.state = 342;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 345;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 346;
				this.match(XonParser.COLON);
				this.state = 347;
				this.expression(4);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 348;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
					{
					this.state = 349;
					this.expression(0);
					this.state = 354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 350;
						this.match(XonParser.COMMA);
						this.state = 351;
						this.expression(0);
						}
						}
						this.state = 356;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 359;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 360;
				this.match(XonParser.OPEN_BRACE);
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.RANGE - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AND - 32)) | (1 << (XonParser.OR - 32)) | (1 << (XonParser.EXCLAMATION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
					{
					this.state = 361;
					this.attribute();
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 362;
						this.match(XonParser.COMMA);
						this.state = 363;
						this.attribute();
						}
						}
						this.state = 368;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 371;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 372;
				this.match(XonParser.OPEN_PAREN);
				this.state = 373;
				this.expression(0);
				this.state = 374;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 447;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 445;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 379;
						this.id();
						this.state = 380;
						(_localctx as InfixExpressionContext)._right = this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 382;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 383;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 384;
						(_localctx as PowExpressionContext)._right = this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 385;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 386;
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
						this.state = 387;
						(_localctx as MulDivModExpressionContext)._right = this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 388;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 389;
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
						this.state = 390;
						(_localctx as AddSubExpressionContext)._right = this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 391;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 392;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 393;
						(_localctx as RangeExpressionContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 394;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 395;
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
						this.state = 396;
						(_localctx as ElvisExpressionContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 397;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 398;
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
						this.state = 399;
						(_localctx as RelationalExpressionContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 400;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 401;
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
						this.state = 402;
						(_localctx as EqualityExpressionContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 403;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 404;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 405;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 406;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 407;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 408;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 409;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 410;
						this.match(XonParser.PIPE);
						this.state = 414;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
						case 1:
							{
							this.state = 411;
							this.id();
							this.state = 412;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 416;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 417;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 418;
						this.match(XonParser.OPEN_PAREN);
						this.state = 427;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
							{
							this.state = 419;
							this.expression(0);
							this.state = 424;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.COMMA) {
								{
								{
								this.state = 420;
								this.match(XonParser.COMMA);
								this.state = 421;
								this.expression(0);
								}
								}
								this.state = 426;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 429;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 430;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 431;
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
						this.state = 432;
						this.id();
						this.state = 434;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
						case 1:
							{
							this.state = 433;
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
						this.state = 436;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 437;
						this.match(XonParser.IS);
						this.state = 438;
						this.type(0);
						}
						break;

					case 15:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 439;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 440;
						this.match(XonParser.AS);
						this.state = 441;
						this.type(0);
						}
						break;

					case 16:
						{
						_localctx = new AsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 442;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 443;
						this.match(XonParser.IN);
						this.state = 444;
						this.type(0);
						}
						break;
					}
					}
				}
				this.state = 449;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 451;
				this.match(XonParser.UPPER_ID);
				this.state = 453;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 452;
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
				this.state = 455;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new ArrayFixedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 456;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.FLOAT_LITERAL - 66)) | (1 << (XonParser.INTEGER_LITERAL - 66)) | (1 << (XonParser.CHAR_LITERAL - 66)) | (1 << (XonParser.STRING_LITERAL - 66)) | (1 << (XonParser.REGEX_LITERAL - 66)) | (1 << (XonParser.UPPER_ID - 66)))) !== 0)) {
					{
					this.state = 457;
					this.type(0);
					this.state = 462;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 458;
						this.match(XonParser.COMMA);
						this.state = 459;
						this.type(0);
						}
						}
						this.state = 464;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 467;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new MethodTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 468;
				this.match(XonParser.OPEN_PAREN);
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XonParser.IS - 9)) | (1 << (XonParser.AS - 9)) | (1 << (XonParser.IN - 9)) | (1 << (XonParser.TYPE - 9)) | (1 << (XonParser.CLASS - 9)) | (1 << (XonParser.OBJECT - 9)) | (1 << (XonParser.ENUM - 9)) | (1 << (XonParser.INTERFACE - 9)) | (1 << (XonParser.NOT - 9)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
					{
					this.state = 469;
					this.parameter();
					this.state = 474;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 470;
						this.match(XonParser.COMMA);
						this.state = 471;
						this.parameter();
						}
						}
						this.state = 476;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 479;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 481;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 480;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 5:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 483;
				this.match(XonParser.OPEN_BRACE);
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XonParser.IS - 9)) | (1 << (XonParser.AS - 9)) | (1 << (XonParser.IN - 9)) | (1 << (XonParser.TYPE - 9)) | (1 << (XonParser.CLASS - 9)) | (1 << (XonParser.OBJECT - 9)) | (1 << (XonParser.ENUM - 9)) | (1 << (XonParser.INTERFACE - 9)) | (1 << (XonParser.NOT - 9)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0)) {
					{
					this.state = 484;
					this.parameter();
					this.state = 489;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 485;
						this.match(XonParser.COMMA);
						this.state = 486;
						this.parameter();
						}
						}
						this.state = 491;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 494;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 495;
				this.match(XonParser.OPEN_PAREN);
				this.state = 496;
				this.type(0);
				this.state = 497;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 517;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 515;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 501;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 502;
						this.match(XonParser.OR);
						this.state = 503;
						this.type(8);
						}
						break;

					case 2:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 504;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 505;
						this.match(XonParser.AND);
						this.state = 506;
						this.type(7);
						}
						break;

					case 3:
						{
						_localctx = new MetaTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 507;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 508;
						this.match(XonParser.HASH);
						this.state = 509;
						this.match(XonParser.UPPER_ID);
						}
						break;

					case 4:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 510;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 511;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 512;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 513;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 514;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
		this.enterRule(_localctx, 28, XonParser.RULE_literal);
		try {
			this.state = 525;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 520;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 521;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 522;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 523;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 524;
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
		this.enterRule(_localctx, 30, XonParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.id();
			this.state = 528;
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(XonParser.UPPER_ID);
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 531;
				this.match(XonParser.IS);
				this.state = 532;
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
		this.enterRule(_localctx, 34, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.match(XonParser.LESS);
			this.state = 536;
			this.typeParameter();
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 537;
				this.match(XonParser.COMMA);
				this.state = 538;
				this.typeParameter();
				}
				}
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 544;
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
		this.enterRule(_localctx, 36, XonParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(XonParser.LESS);
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.FLOAT_LITERAL - 66)) | (1 << (XonParser.INTEGER_LITERAL - 66)) | (1 << (XonParser.CHAR_LITERAL - 66)) | (1 << (XonParser.STRING_LITERAL - 66)) | (1 << (XonParser.REGEX_LITERAL - 66)) | (1 << (XonParser.UPPER_ID - 66)))) !== 0)) {
				{
				this.state = 547;
				this.type(0);
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 548;
					this.match(XonParser.COMMA);
					this.state = 549;
					this.type(0);
					}
					}
					this.state = 554;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 557;
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
		this.enterRule(_localctx, 38, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this.match(XonParser.COLON);
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 560;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 561;
					this.match(XonParser.NL);
					}
					}
					this.state = 564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 566;
				this.match(XonParser.INDENT);
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 569;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.IS:
					case XonParser.AS:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.RETURN:
					case XonParser.TYPE:
					case XonParser.CLASS:
					case XonParser.OBJECT:
					case XonParser.ENUM:
					case XonParser.INTERFACE:
					case XonParser.NOT:
					case XonParser.PLUS:
					case XonParser.MINUS:
					case XonParser.INSTANCE:
					case XonParser.INSTANCE_MEMBER:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.LOWER_ID:
						{
						this.state = 567;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 568;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.TYPE) | (1 << XonParser.CLASS) | (1 << XonParser.OBJECT) | (1 << XonParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.NOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 573;
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			_la = this._input.LA(1);
			if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XonParser.IS - 9)) | (1 << (XonParser.AS - 9)) | (1 << (XonParser.IN - 9)) | (1 << (XonParser.TYPE - 9)) | (1 << (XonParser.CLASS - 9)) | (1 << (XonParser.OBJECT - 9)) | (1 << (XonParser.ENUM - 9)) | (1 << (XonParser.INTERFACE - 9)) | (1 << (XonParser.NOT - 9)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.INSTANCE - 64)) | (1 << (XonParser.INSTANCE_MEMBER - 64)) | (1 << (XonParser.LOWER_ID - 64)))) !== 0))) {
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
		this.enterRule(_localctx, 42, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.RANGE - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.EQUAL - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.AND - 36)) | (1 << (XonParser.OR - 36)) | (1 << (XonParser.EXCLAMATION - 36)))) !== 0))) {
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
		case 12:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 13:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03N\u0247\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x07\x029\n\x02\f\x02\x0E\x02<\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04G\n\x04\f\x04\x0E\x04J\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x07\x05O\n\x05\f\x05\x0E\x05R\v\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06W\n\x06\x03\x07\x03\x07\x05\x07[\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07a\n\x07\x03\x07\x05\x07d\n\x07\x03\x07\x03" +
		"\x07\x05\x07h\n\x07\x03\x07\x05\x07k\n\x07\x03\x07\x03\x07\x05\x07o\n" +
		"\x07\x03\x07\x05\x07r\n\x07\x03\x07\x03\x07\x05\x07v\n\x07\x03\x07\x05" +
		"\x07y\n\x07\x03\x07\x03\x07\x05\x07}\n\x07\x03\x07\x05\x07\x80\n\x07\x05" +
		"\x07\x82\n\x07\x03\b\x03\b\x05\b\x86\n\b\x03\b\x03\b\x03\b\x03\b\x07\b" +
		"\x8C\n\b\f\b\x0E\b\x8F\v\b\x05\b\x91\n\b\x03\b\x03\b\x05\b\x95\n\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x9D\n\t\f\t\x0E\t\xA0\v\t\x05\t" +
		"\xA2\n\t\x03\t\x05\t\xA5\n\t\x03\n\x06\n\xA8\n\n\r\n\x0E\n\xA9\x03\n\x03" +
		"\n\x03\n\x06\n\xAF\n\n\r\n\x0E\n\xB0\x03\n\x03\n\x03\v\x03\v\x03\v\x06" +
		"\v\xB8\n\v\r\v\x0E\v\xB9\x03\v\x03\v\x03\v\x06\v\xBF\n\v\r\v\x0E\v\xC0" +
		"\x03\v\x03\v\x03\v\x03\v\x05\v\xC7\n\v\x03\v\x05\v\xCA\n\v\x03\v\x03\v" +
		"\x03\v\x05\v\xCF\n\v\x03\v\x05\v\xD2\n\v\x03\v\x05\v\xD5\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\xDB\n\v\x03\v\x05\v\xDE\n\v\x03\v\x03\v\x06\v\xE2" +
		"\n\v\r\v\x0E\v\xE3\x03\v\x03\v\x03\v\x06\v\xE9\n\v\r\v\x0E\v\xEA\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\xF1\n\v\x03\v\x05\v\xF4\n\v\x03\v\x06\v\xF7\n" +
		"\v\r\v\x0E\v\xF8\x03\v\x03\v\x03\v\x06\v\xFE\n\v\r\v\x0E\v\xFF\x03\v\x05" +
		"\v\u0103\n\v\x03\f\x03\f\x03\f\x03\f\x05\f\u0109\n\f\x03\f\x03\f\x05\f" +
		"\u010D\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0120\n\f\x03\f\x03\f" +
		"\x03\f\x05\f\u0125\n\f\x03\f\x03\f\x03\f\x06\f\u012A\n\f\r\f\x0E\f\u012B" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0134\n\f\x03\r\x03\r\x03\r" +
		"\x07\r\u0139\n\r\f\r\x0E\r\u013C\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0147\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u014C" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\u0155\n\x0E\f\x0E\x0E\x0E\u0158\v\x0E\x05\x0E\u015A\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0163\n\x0E\f\x0E" +
		"\x0E\x0E\u0166\v\x0E\x05\x0E\u0168\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x07\x0E\u016F\n\x0E\f\x0E\x0E\x0E\u0172\v\x0E\x05\x0E\u0174\n" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u017B\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u01A1\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01A9" +
		"\n\x0E\f\x0E\x0E\x0E\u01AC\v\x0E\x05\x0E\u01AE\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u01B5\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01C0\n\x0E\f\x0E\x0E" +
		"\x0E\u01C3\v\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01C8\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01CF\n\x0F\f\x0F\x0E\x0F\u01D2\v" +
		"\x0F\x05\x0F\u01D4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u01DB\n\x0F\f\x0F\x0E\x0F\u01DE\v\x0F\x05\x0F\u01E0\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u01E4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01EA" +
		"\n\x0F\f\x0F\x0E\x0F\u01ED\v\x0F\x05\x0F\u01EF\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u01F6\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\u0206\n\x0F\f\x0F\x0E\x0F\u0209\v\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u0210\n\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\u0218\n\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x07\x13\u021E\n\x13\f\x13\x0E\x13\u0221\v\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u0229\n\x14\f\x14\x0E\x14\u022C\v\x14" +
		"\x05\x14\u022E\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x06\x15\u0235" +
		"\n\x15\r\x15\x0E\x15\u0236\x03\x15\x03\x15\x03\x15\x06\x15\u023C\n\x15" +
		"\r\x15\x0E\x15\u023D\x03\x15\x05\x15\u0241\n\x15\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x02\x02\x04\x1A\x1C\x18\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\n\x05\x02##((11\x05" +
		"\x022288;;\x04\x02((11\x04\x02+,/0\x03\x0267\x04\x02%%::\x07\x02\v\f\x0F" +
		"\x0F\x1E#BCKK\f\x02&&((++//136688;;=>@@\x02\u02B8\x023\x03\x02\x02\x02" +
		"\x04=\x03\x02\x02\x02\x06@\x03\x02\x02\x02\bK\x03\x02\x02\x02\nS\x03\x02" +
		"\x02\x02\f\x81\x03\x02\x02\x02\x0E\x83\x03\x02\x02\x02\x10\x96\x03\x02" +
		"\x02\x02\x12\xA7\x03\x02\x02\x02\x14\u0102\x03\x02\x02\x02\x16\u0133\x03" +
		"\x02\x02\x02\x18\u0146\x03\x02\x02\x02\x1A\u017A\x03\x02\x02\x02\x1C\u01F5" +
		"\x03\x02\x02\x02\x1E\u020F\x03\x02\x02\x02 \u0211\x03\x02\x02\x02\"\u0214" +
		"\x03\x02\x02\x02$\u0219\x03\x02\x02\x02&\u0224\x03\x02\x02\x02(\u0231" +
		"\x03\x02\x02\x02*\u0242\x03\x02\x02\x02,\u0244\x03\x02\x02\x02.2\x05\x06" +
		"\x04\x02/2\x05\x04\x03\x0202\x07L\x02\x021.\x03\x02\x02\x021/\x03\x02" +
		"\x02\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02" +
		"\x02\x024:\x03\x02\x02\x0253\x03\x02\x02\x0269\x05\f\x07\x0279\x07L\x02" +
		"\x0286\x03\x02\x02\x0287\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;\x03\x03\x02\x02\x02<:\x03\x02\x02\x02=>\x07\x18" +
		"\x02\x02>?\x05\b\x05\x02?\x05\x03\x02\x02\x02@A\x07\x19\x02\x02AB\x05" +
		"\b\x05\x02BC\x07.\x02\x02CH\x05\n\x06\x02DE\x07-\x02\x02EG\x05\n\x06\x02" +
		"FD\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"I\x07\x03\x02\x02\x02JH\x03\x02\x02\x02KP\x05*\x16\x02LM\x07%\x02\x02" +
		"MO\x05*\x16\x02NL\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02Q\t\x03\x02\x02\x02RP\x03\x02\x02\x02SV\x07J\x02\x02" +
		"TU\x07\f\x02\x02UW\x07J\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\v" +
		"\x03\x02\x02\x02XZ\x07\x1E\x02\x02Y[\x05\x0E\b\x02ZY\x03\x02\x02\x02Z" +
		"[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07.\x02\x02]\x82\x05\x1C\x0F" +
		"\x02^`\x07\x1F\x02\x02_a\x05\x0E\b\x02`_\x03\x02\x02\x02`a\x03\x02\x02" +
		"\x02ac\x03\x02\x02\x02bd\x05\x12\n\x02cb\x03\x02\x02\x02cd\x03\x02\x02" +
		"\x02d\x82\x03\x02\x02\x02eg\x07!\x02\x02fh\x05\x0E\b\x02gf\x03\x02\x02" +
		"\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ik\x05\x12\n\x02ji\x03\x02\x02" +
		"\x02jk\x03\x02\x02\x02k\x82\x03\x02\x02\x02ln\x07\"\x02\x02mo\x05\x0E" +
		"\b\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02oq\x03\x02\x02\x02pr\x05\x12" +
		"\n\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02r\x82\x03\x02\x02\x02su\x07" +
		" \x02\x02tv\x05\x0E\b\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02" +
		"\x02\x02wy\x05\x12\n\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02y\x82\x03" +
		"\x02\x02\x02z|\x07\x1D\x02\x02{}\x05\x0E\b\x02|{\x03\x02\x02\x02|}\x03" +
		"\x02\x02\x02}\x7F\x03\x02\x02\x02~\x80\x05\x12\n\x02\x7F~\x03\x02\x02" +
		"\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81X\x03\x02\x02" +
		"\x02\x81^\x03\x02\x02\x02\x81e\x03\x02\x02\x02\x81l\x03\x02\x02\x02\x81" +
		"s\x03\x02\x02\x02\x81z\x03\x02\x02\x02\x82\r\x03\x02\x02\x02\x83\x85\x07" +
		"J\x02\x02\x84\x86\x05$\x13\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x90\x07\x07\x02\x02\x88\x8D\x05 " +
		"\x11\x02\x89\x8A\x07-\x02\x02\x8A\x8C\x05 \x11\x02\x8B\x89\x03\x02\x02" +
		"\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02" +
		"\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x88\x03\x02\x02" +
		"\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94\x07\b\x02" +
		"\x02\x93\x95\x05\x10\t\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\x0F\x03\x02\x02\x02\x96\x97\x07\v\x02\x02\x97\xA4\x05\x1C\x0F" +
		"\x02\x98\xA1\x07\x07\x02\x02\x99\x9E\x05\x1A\x0E\x02\x9A\x9B\x07-\x02" +
		"\x02\x9B\x9D\x05\x1A\x0E\x02\x9C\x9A\x03\x02\x02\x02\x9D\xA0\x03\x02\x02" +
		"\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA2\x03\x02\x02" +
		"\x02\xA0\x9E\x03\x02\x02\x02\xA1\x99\x03\x02\x02\x02\xA1\xA2\x03\x02\x02" +
		"\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x07\b\x02\x02\xA4\x98\x03\x02\x02" +
		"\x02\xA4\xA5\x03\x02\x02\x02\xA5\x11\x03\x02\x02\x02\xA6\xA8\x07L\x02" +
		"\x02\xA7\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xA7\x03\x02\x02" +
		"\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAE\x07\x03\x02" +
		"\x02\xAC\xAF\x05\x14\v\x02\xAD\xAF\x07L\x02\x02\xAE\xAC\x03\x02\x02\x02" +
		"\xAE\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x07\x04\x02\x02" +
		"\xB3\x13\x03\x02\x02\x02\xB4\xB5\x05,\x17\x02\xB5\xB7\x05\x1C\x0F\x02" +
		"\xB6\xB8\x07L\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02" +
		"\xBB\xBE\x07\x03\x02\x02\xBC\xBF\x05\x16\f\x02\xBD\xBF\x07L\x02\x02\xBE" +
		"\xBC\x03\x02\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2" +
		"\xC3\x07\x04\x02\x02\xC3\u0103\x03\x02\x02\x02\xC4\xC7\x05*\x16\x02\xC5" +
		"\xC7\x07G\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7" +
		"\xC9\x03\x02\x02\x02\xC8\xCA\x05$\x13\x02\xC9\xC8\x03\x02\x02\x02\xC9" +
		"\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\u0103\x05\x1C\x0F\x02" +
		"\xCC\xCF\x05*\x16\x02\xCD\xCF\x07G\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE" +
		"\xCD\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xD2\x05$\x13\x02\xD1" +
		"\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3" +
		"\xD5\x05\x1C\x0F\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5" +
		"\xD6\x03\x02\x02\x02\xD6\xD7\x07.\x02\x02\xD7\u0103\x05\x1A\x0E\x02\xD8" +
		"\xDB\x05*\x16\x02\xD9\xDB\x07G\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9" +
		"\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDE\x05$\x13\x02\xDD\xDC" +
		"\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1" +
		"\x05\x1C\x0F\x02\xE0\xE2\x07L\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE3" +
		"\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5" +
		"\x03\x02\x02\x02\xE5\xE8\x07\x03\x02\x02\xE6\xE9\x05\x16\f\x02\xE7\xE9" +
		"\x07L\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEA" +
		"\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC" +
		"\x03\x02\x02\x02\xEC\xED\x07\x04\x02\x02\xED\u0103\x03\x02\x02\x02\xEE" +
		"\xF1\x05*\x16\x02\xEF\xF1\x07G\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xEF" +
		"\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF4\x05$\x13\x02\xF3\xF2" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF7" +
		"\x07L\x02\x02\xF6\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF6" +
		"\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFD" +
		"\x07\x03\x02\x02\xFB\xFE\x05\x14\v\x02\xFC\xFE\x07L\x02\x02\xFD\xFB\x03" +
		"\x02\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\xFD\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0103\x07\x04\x02\x02\u0102\xB4\x03\x02\x02\x02\u0102\xC6\x03\x02\x02" +
		"\x02\u0102\xCE\x03\x02\x02\x02\u0102\xDA\x03\x02\x02\x02\u0102\xF0\x03" +
		"\x02\x02\x02\u0103\x15\x03\x02\x02\x02\u0104\u010C\x07\x10\x02\x02\u0105" +
		"\u0108\x05*\x16\x02\u0106\u0107\x07-\x02\x02\u0107\u0109\x05*\x16\x02" +
		"\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03" +
		"\x02\x02\x02\u010A\u010B\x07\x0F\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C" +
		"\u0105\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02" +
		"\x02\x02\u010E\u010F\x05\x1A\x0E\x02\u010F\u0110\x05(\x15\x02\u0110\u0134" +
		"\x03\x02\x02\x02\u0111\u0112\x07\x15\x02\x02\u0112\u0113\x05\x1A\x0E\x02" +
		"\u0113\u0114\x05(\x15\x02\u0114\u0134\x03\x02\x02\x02\u0115\u0116\x07" +
		"\r\x02\x02\u0116\u0117\x05(\x15\x02\u0117\u0118\x07\x15\x02\x02\u0118" +
		"\u0119\x05\x1A\x0E\x02\u0119\u0134\x03\x02\x02\x02\u011A\u011B\x07\x0E" +
		"\x02\x02\u011B\u011C\x05\x1A\x0E\x02\u011C\u011F\x05(\x15\x02\u011D\u011E" +
		"\x07\x11\x02\x02\u011E\u0120\x05(\x15\x02\u011F\u011D\x03\x02\x02\x02" +
		"\u011F\u0120\x03\x02\x02\x02\u0120\u0134\x03\x02\x02\x02\u0121\u0134\x07" +
		"\x13\x02\x02\u0122\u0124\x07\x1B\x02\x02\u0123\u0125\x05\x1A\x0E\x02\u0124" +
		"\u0123\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0134\x03\x02" +
		"\x02\x02\u0126\u0127\x07\x16\x02\x02\u0127\u0129\x05\x1A\x0E\x02\u0128" +
		"\u012A\x07L\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02" +
		"\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D" +
		"\x03\x02\x02\x02\u012D\u012E\x07\x17\x02\x02\u012E\u012F\x05\x1A\x0E\x02" +
		"\u012F\u0134\x03\x02\x02\x02\u0130\u0134\x07I\x02\x02\u0131\u0134\x05" +
		"\x1A\x0E\x02\u0132\u0134\x05\x18\r\x02\u0133\u0104\x03\x02\x02\x02\u0133" +
		"\u0111\x03\x02\x02\x02\u0133\u0115\x03\x02\x02\x02\u0133\u011A\x03\x02" +
		"\x02\x02\u0133\u0121\x03\x02\x02\x02\u0133\u0122\x03\x02\x02\x02\u0133" +
		"\u0126\x03\x02\x02\x02\u0133\u0130\x03\x02\x02\x02\u0133\u0131\x03\x02" +
		"\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134\x17\x03\x02\x02\x02\u0135\u013A" +
		"\x05*\x16\x02\u0136\u0137\x07-\x02\x02\u0137\u0139\x05*\x16\x02\u0138" +
		"\u0136\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02" +
		"\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u013E\x075\x02\x02\u013E\u013F\x05\x1A\x0E" +
		"\x02\u013F\u0147\x03\x02\x02\x02\u0140\u0141\x05\x1A\x0E\x02\u0141\u0142" +
		"\x07%\x02\x02\u0142\u0143\x05*\x16\x02\u0143\u0144\x075\x02\x02\u0144" +
		"\u0145\x05\x1A\x0E\x02\u0145\u0147\x03\x02\x02\x02\u0146\u0135\x03\x02" +
		"\x02\x02\u0146\u0140\x03\x02\x02\x02\u0147\x19\x03\x02\x02\x02\u0148\u0149" +
		"\b\x0E\x01\x02\u0149\u014B\x05*\x16\x02\u014A\u014C\x05&\x14\x02\u014B" +
		"\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u017B\x03\x02" +
		"\x02\x02\u014D\u017B\x05\x1E\x10\x02\u014E\u014F\t\x02\x02\x02\u014F\u017B" +
		"\x05\x1A\x0E\x12\u0150\u0159\x07\x07\x02\x02\u0151\u0156\x05*\x16\x02" +
		"\u0152\u0153\x07-\x02\x02\u0153\u0155\x05*\x16\x02\u0154\u0152\x03\x02" +
		"\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02" +
		"\x02\x02\u0159\u0151\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"\u015B\x03\x02\x02\x02\u015B\u015C\x07\b\x02\x02\u015C\u015D\x07.\x02" +
		"\x02\u015D\u017B\x05\x1A\x0E\x06\u015E\u0167\x07\x05\x02\x02\u015F\u0164" +
		"\x05\x1A\x0E\x02\u0160\u0161\x07-\x02\x02\u0161\u0163\x05\x1A\x0E\x02" +
		"\u0162\u0160\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03" +
		"\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166" +
		"\u0164\x03\x02\x02\x02\u0167\u015F\x03\x02\x02\x02\u0167\u0168\x03\x02" +
		"\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u017B\x07\x06\x02\x02\u016A" +
		"\u0173\x07\t\x02\x02\u016B\u0170\x05\x14\v\x02\u016C\u016D\x07-\x02\x02" +
		"\u016D\u016F\x05\x14\v\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0172\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
		"\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u016B\x03\x02" +
		"\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175" +
		"\u017B\x07\n\x02\x02\u0176\u0177\x07\x07\x02\x02\u0177\u0178\x05\x1A\x0E" +
		"\x02\u0178\u0179\x07\b\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0148" +
		"\x03\x02\x02\x02\u017A\u014D\x03\x02\x02\x02\u017A\u014E\x03\x02\x02\x02" +
		"\u017A\u0150\x03\x02\x02\x02\u017A\u015E\x03\x02\x02\x02\u017A\u016A\x03" +
		"\x02\x02\x02\u017A\u0176\x03\x02\x02\x02\u017B\u01C1\x03\x02\x02\x02\u017C" +
		"\u017D\f\x11\x02\x02\u017D\u017E\x05*\x16\x02\u017E\u017F\x05\x1A\x0E" +
		"\x12\u017F\u01C0\x03\x02\x02\x02\u0180\u0181\f\x10\x02\x02\u0181\u0182" +
		"\x073\x02\x02\u0182\u01C0\x05\x1A\x0E\x11\u0183\u0184\f\x0F\x02\x02\u0184" +
		"\u0185\t\x03\x02\x02\u0185\u01C0\x05\x1A\x0E\x10\u0186\u0187\f\x0E\x02" +
		"\x02\u0187\u0188\t\x04\x02\x02\u0188\u01C0\x05\x1A\x0E\x0F\u0189\u018A" +
		"\f\r\x02\x02\u018A\u018B\x07&\x02\x02\u018B\u01C0\x05\x1A\x0E\x0E\u018C" +
		"\u018D\f\f\x02\x02\u018D\u018E\x079\x02\x02\u018E\u01C0\x05\x1A\x0E\r" +
		"\u018F\u0190\f\v\x02\x02\u0190\u0191\t\x05\x02\x02\u0191\u01C0\x05\x1A" +
		"\x0E\f\u0192\u0193\f\n\x02\x02\u0193\u0194\t\x06\x02\x02\u0194\u01C0\x05" +
		"\x1A\x0E\v\u0195\u0196\f\t\x02\x02\u0196\u0197\x07=\x02\x02\u0197\u01C0" +
		"\x05\x1A\x0E\n\u0198\u0199\f\b\x02\x02\u0199\u019A\x07>\x02\x02\u019A" +
		"\u01C0\x05\x1A\x0E\t\u019B\u019C\f\x07\x02\x02\u019C\u01A0\x07*\x02\x02" +
		"\u019D\u019E\x05*\x16\x02\u019E\u019F\x07.\x02\x02\u019F\u01A1\x03\x02" +
		"\x02\x02\u01A0\u019D\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1" +
		"\u01A2\x03\x02\x02\x02\u01A2\u01C0\x05\x1A\x0E\b\u01A3\u01A4\f\x17\x02" +
		"\x02\u01A4\u01AD\x07\x07\x02\x02\u01A5\u01AA\x05\x1A\x0E\x02\u01A6\u01A7" +
		"\x07-\x02\x02\u01A7\u01A9\x05\x1A\x0E\x02\u01A8\u01A6\x03\x02\x02\x02" +
		"\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03" +
		"\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD" +
		"\u01A5\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02" +
		"\x02\x02\u01AF\u01C0\x07\b\x02\x02\u01B0\u01B1\f\x16\x02\x02\u01B1\u01B2" +
		"\t\x07\x02\x02\u01B2\u01B4\x05*\x16\x02\u01B3\u01B5\x05&\x14\x02\u01B4" +
		"\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01C0\x03\x02" +
		"\x02\x02\u01B6\u01B7\f\x15\x02\x02\u01B7\u01B8\x07\v\x02\x02\u01B8\u01C0" +
		"\x05\x1C\x0F\x02\u01B9\u01BA\f\x14\x02\x02\u01BA\u01BB\x07\f\x02\x02\u01BB" +
		"\u01C0\x05\x1C\x0F\x02\u01BC\u01BD\f\x13\x02\x02\u01BD\u01BE\x07\x0F\x02" +
		"\x02\u01BE\u01C0\x05\x1C\x0F\x02\u01BF\u017C\x03\x02\x02\x02\u01BF\u0180" +
		"\x03\x02\x02\x02\u01BF\u0183\x03\x02\x02\x02\u01BF\u0186\x03\x02\x02\x02" +
		"\u01BF\u0189\x03\x02\x02\x02\u01BF\u018C\x03\x02\x02\x02\u01BF\u018F\x03" +
		"\x02\x02\x02\u01BF\u0192\x03\x02\x02\x02\u01BF\u0195\x03\x02\x02\x02\u01BF" +
		"\u0198\x03\x02\x02\x02\u01BF\u019B\x03\x02\x02\x02\u01BF\u01A3\x03\x02" +
		"\x02\x02\u01BF\u01B0\x03\x02\x02\x02\u01BF\u01B6\x03\x02\x02\x02\u01BF" +
		"\u01B9\x03\x02\x02\x02\u01BF\u01BC\x03\x02\x02\x02\u01C0\u01C3\x03\x02" +
		"\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\x1B\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C5\b\x0F\x01" +
		"\x02\u01C5\u01C7\x07J\x02\x02\u01C6\u01C8\x05&\x14\x02\u01C7\u01C6\x03" +
		"\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01F6\x03\x02\x02\x02\u01C9" +
		"\u01F6\x05\x1E\x10\x02\u01CA\u01D3\x07\x05\x02\x02\u01CB\u01D0\x05\x1C" +
		"\x0F\x02\u01CC\u01CD\x07-\x02\x02\u01CD\u01CF\x05\x1C\x0F\x02\u01CE\u01CC" +
		"\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02" +
		"\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03" +
		"\x02\x02\x02\u01D3\u01CB\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
		"\u01D5\x03\x02\x02\x02\u01D5\u01F6\x07\x06\x02\x02\u01D6\u01DF\x07\x07" +
		"\x02\x02\u01D7\u01DC\x05 \x11\x02\u01D8\u01D9\x07-\x02\x02\u01D9\u01DB" +
		"\x05 \x11\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02" +
		"\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01E0\x03" +
		"\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01D7\x03\x02\x02\x02\u01DF" +
		"\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E3\x07\b\x02" +
		"\x02\u01E2\u01E4\x05\x1C\x0F\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4" +
		"\x03\x02\x02\x02\u01E4\u01F6\x03\x02\x02\x02\u01E5\u01EE\x07\t\x02\x02" +
		"\u01E6\u01EB\x05 \x11\x02\u01E7\u01E8\x07-\x02\x02\u01E8\u01EA\x05 \x11" +
		"\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9" +
		"\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02" +
		"\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01E6\x03\x02\x02\x02\u01EE\u01EF\x03" +
		"\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F6\x07\n\x02\x02\u01F1" +
		"\u01F2\x07\x07\x02\x02\u01F2\u01F3\x05\x1C\x0F\x02\u01F3\u01F4\x07\b\x02" +
		"\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5\u01C4\x03\x02\x02\x02\u01F5\u01C9" +
		"\x03\x02\x02\x02\u01F5\u01CA\x03\x02\x02\x02\u01F5\u01D6\x03\x02\x02\x02" +
		"\u01F5\u01E5\x03\x02\x02\x02\u01F5\u01F1\x03\x02\x02\x02\u01F6\u0207\x03" +
		"\x02\x02\x02\u01F7\u01F8\f\t\x02\x02\u01F8\u01F9";
	private static readonly _serializedATNSegment1: string =
		"\x07>\x02\x02\u01F9\u0206\x05\x1C\x0F\n\u01FA\u01FB\f\b\x02\x02\u01FB" +
		"\u01FC\x07=\x02\x02\u01FC\u0206\x05\x1C\x0F\t\u01FD\u01FE\f\v\x02\x02" +
		"\u01FE\u01FF\x07)\x02\x02\u01FF\u0206\x07J\x02\x02\u0200\u0201\f\n\x02" +
		"\x02\u0201\u0206\x079\x02\x02\u0202\u0203\f\x07\x02\x02\u0203\u0204\x07" +
		"\x05\x02\x02\u0204\u0206\x07\x06\x02\x02\u0205\u01F7\x03\x02\x02\x02\u0205" +
		"\u01FA\x03\x02\x02\x02\u0205\u01FD\x03\x02\x02\x02\u0205\u0200\x03\x02" +
		"\x02\x02\u0205\u0202\x03\x02\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207" +
		"\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\x1D\x03\x02\x02" +
		"\x02\u0209\u0207\x03\x02\x02\x02\u020A\u0210\x07E\x02\x02\u020B\u0210" +
		"\x07D\x02\x02\u020C\u0210\x07F\x02\x02\u020D\u0210\x07G\x02\x02\u020E" +
		"\u0210\x07H\x02\x02\u020F\u020A\x03\x02\x02\x02\u020F\u020B\x03\x02\x02" +
		"\x02\u020F\u020C\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u020E" +
		"\x03\x02\x02\x02\u0210\x1F\x03\x02\x02\x02\u0211\u0212\x05*\x16\x02\u0212" +
		"\u0213\x05\x1C\x0F\x02\u0213!\x03\x02\x02\x02\u0214\u0217\x07J\x02\x02" +
		"\u0215\u0216\x07\v\x02\x02\u0216\u0218\x05\x1C\x0F\x02\u0217\u0215\x03" +
		"\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218#\x03\x02\x02\x02\u0219" +
		"\u021A\x07+\x02\x02\u021A\u021F\x05\"\x12\x02\u021B\u021C\x07-\x02\x02" +
		"\u021C\u021E\x05\"\x12\x02\u021D\u021B\x03\x02\x02\x02\u021E\u0221\x03" +
		"\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220" +
		"\u0222\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0222\u0223\x07/\x02" +
		"\x02\u0223%\x03\x02\x02\x02\u0224\u022D\x07+\x02\x02\u0225\u022A\x05\x1C" +
		"\x0F\x02\u0226\u0227\x07-\x02\x02\u0227\u0229\x05\x1C\x0F\x02\u0228\u0226" +
		"\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02" +
		"\u022A\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03" +
		"\x02\x02\x02\u022D\u0225\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0230\x07/\x02\x02\u0230\'\x03\x02\x02\x02" +
		"\u0231\u0240\x07.\x02\x02\u0232\u0241\x05\x16\f\x02\u0233\u0235\x07L\x02" +
		"\x02\u0234\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0234" +
		"\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02" +
		"\u0238\u023B\x07\x03\x02\x02\u0239\u023C\x05\x16\f\x02\u023A\u023C\x07" +
		"L\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023A\x03\x02\x02\x02\u023C" +
		"\u023D\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02" +
		"\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0241\x07\x04\x02\x02\u0240" +
		"\u0232\x03\x02\x02\x02\u0240\u0234\x03\x02\x02\x02\u0240\u0241\x03\x02" +
		"\x02\x02\u0241)\x03\x02\x02\x02\u0242\u0243\t\b\x02\x02\u0243+\x03\x02" +
		"\x02\x02\u0244\u0245\t\t\x02\x02\u0245-\x03\x02\x02\x02\\138:HPVZ`cgj" +
		"nqux|\x7F\x81\x85\x8D\x90\x94\x9E\xA1\xA4\xA9\xAE\xB0\xB9\xBE\xC0\xC6" +
		"\xC9\xCE\xD1\xD4\xDA\xDD\xE3\xE8\xEA\xF0\xF3\xF8\xFD\xFF\u0102\u0108\u010C" +
		"\u011F\u0124\u012B\u0133\u013A\u0146\u014B\u0156\u0159\u0164\u0167\u0170" +
		"\u0173\u017A\u01A0\u01AA\u01AD\u01B4\u01BF\u01C1\u01C7\u01D0\u01D3\u01DC" +
		"\u01DF\u01E3\u01EB\u01EE\u01F5\u0205\u0207\u020F\u0217\u021F\u022A\u022D" +
		"\u0236\u023B\u023D\u0240";
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
export class AliasDefinitionContext extends DefinitionContext {
	public TYPE(): TerminalNode { return this.getToken(XonParser.TYPE, 0); }
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public definitionHeader(): DefinitionHeaderContext | undefined {
		return this.tryGetRuleContext(0, DefinitionHeaderContext);
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ClassDefinitionContext extends DefinitionContext {
	public CLASS(): TerminalNode { return this.getToken(XonParser.CLASS, 0); }
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
export class EnumDefinitionContext extends DefinitionContext {
	public ENUM(): TerminalNode { return this.getToken(XonParser.ENUM, 0); }
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
export class InterfaceDefinitionContext extends DefinitionContext {
	public INTERFACE(): TerminalNode { return this.getToken(XonParser.INTERFACE, 0); }
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
export class ObjectDefinitionContext extends DefinitionContext {
	public OBJECT(): TerminalNode { return this.getToken(XonParser.OBJECT, 0); }
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
export class ExtensionDefinitionContext extends DefinitionContext {
	public EXTENSION(): TerminalNode { return this.getToken(XonParser.EXTENSION, 0); }
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
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
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
	public definitionAncestor(): DefinitionAncestorContext | undefined {
		return this.tryGetRuleContext(0, DefinitionAncestorContext);
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
	public get ruleIndex(): number { return XonParser.RULE_definitionHeader; }
}


export class DefinitionAncestorContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
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
export class OperatorAttributeContext extends AttributeContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
export class AbstractAttributeContext extends AttributeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.STRING_LITERAL, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ValueAttributeContext extends AttributeContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.STRING_LITERAL, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.STRING_LITERAL, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
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
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.STRING_LITERAL, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
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
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COALESCING(): TerminalNode | undefined { return this.tryGetToken(XonParser.COALESCING, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOT, 0); }
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
	public _right!: ExpressionContext;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
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
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
export class ObjectExpressionContext extends ExpressionContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
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
export class MethodTypeContext extends TypeContext {
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
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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
export class ObjectTypeContext extends TypeContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class TypeParameterContext extends ParserRuleContext {
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
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


export class IdContext extends ParserRuleContext {
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public INSTANCE(): TerminalNode | undefined { return this.tryGetToken(XonParser.INSTANCE, 0); }
	public INSTANCE_MEMBER(): TerminalNode | undefined { return this.tryGetToken(XonParser.INSTANCE_MEMBER, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLASS, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.INTERFACE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(XonParser.TYPE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(XonParser.ENUM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
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


