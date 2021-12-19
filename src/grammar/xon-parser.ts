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
	public static readonly RULE_definitionModifier = 4;
	public static readonly RULE_definitionHeader = 5;
	public static readonly RULE_definitionAncestors = 6;
	public static readonly RULE_definitionBody = 7;
	public static readonly RULE_attribute = 8;
	public static readonly RULE_statement = 9;
	public static readonly RULE_expr = 10;
	public static readonly RULE_literal = 11;
	public static readonly RULE_arguments = 12;
	public static readonly RULE_parameter = 13;
	public static readonly RULE_methodHeader = 14;
	public static readonly RULE_indexerHeader = 15;
	public static readonly RULE_objectArgument = 16;
	public static readonly RULE_generics = 17;
	public static readonly RULE_body = 18;
	public static readonly RULE_attrId = 19;
	public static readonly RULE_id = 20;
	public static readonly RULE_operator = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "export", "library", "definition", "definitionModifier", "definitionHeader", 
		"definitionAncestors", "definitionBody", "attribute", "statement", "expr", 
		"literal", "arguments", "parameter", "methodHeader", "indexerHeader", 
		"objectArgument", "generics", "body", "attrId", "id", "operator",
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
			while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)))) !== 0) || _la === XonParser.NL) {
				{
				this.state = 54;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.CLASS:
				case XonParser.ENUM:
				case XonParser.EXTENSION:
				case XonParser.INTERFACE:
				case XonParser.OBJECT:
				case XonParser.TYPE:
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
			this.state = 62;
			this.match(XonParser.IMPORT);
			this.state = 63;
			_localctx._path = this.expr(0);
			this.state = 64;
			this.match(XonParser.COLON);
			this.state = 65;
			_localctx._expr = this.expr(0);
			_localctx._members.push(_localctx._expr);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 66;
				this.match(XonParser.COMMA);
				this.state = 67;
				_localctx._expr = this.expr(0);
				_localctx._members.push(_localctx._expr);
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_definition);
		let _la: number;
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.TYPE:
				_localctx = new AliasDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.match(XonParser.TYPE);
				this.state = 74;
				this.id();
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 75;
					this.generics();
					}
				}

				this.state = 78;
				this.match(XonParser.COLON);
				this.state = 79;
				(_localctx as AliasDefinitionContext)._type = this.expr(0);
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
				this.state = 81;
				this.definitionModifier();
				this.state = 83;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 82;
					this.definitionHeader();
					}
					break;
				}
				this.state = 86;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 85;
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
	public definitionModifier(): DefinitionModifierContext {
		let _localctx: DefinitionModifierContext = new DefinitionModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definitionModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
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
	public definitionHeader(): DefinitionHeaderContext {
		let _localctx: DefinitionHeaderContext = new DefinitionHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_definitionHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.id();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || _la === XonParser.LESS) {
				{
				this.state = 93;
				this.methodHeader();
				}
			}

			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 96;
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
		this.enterRule(_localctx, 12, XonParser.RULE_definitionAncestors);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(XonParser.IS);
			this.state = 100;
			this.expr(0);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 101;
				this.match(XonParser.COMMA);
				this.state = 102;
				this.expr(0);
				}
				}
				this.state = 107;
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
		this.enterRule(_localctx, 14, XonParser.RULE_definitionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 108;
				this.match(XonParser.NL);
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.NL);
			this.state = 113;
			this.match(XonParser.INDENT);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 116;
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
					this.state = 114;
					this.attribute();
					}
					break;
				case XonParser.NL:
					{
					this.state = 115;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)) | (1 << (XonParser.NL - 49)))) !== 0));
			this.state = 120;
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
		this.enterRule(_localctx, 16, XonParser.RULE_attribute);
		let _la: number;
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new ValueAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.attrId();
				this.state = 124;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 123;
					(_localctx as ValueAttributeContext)._type = this.expr(0);
					}
					break;
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 126;
					this.match(XonParser.COLON);
					this.state = 127;
					(_localctx as ValueAttributeContext)._value = this.expr(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new MethodAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.attrId();
				this.state = 131;
				this.methodHeader();
				this.state = 133;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new IndexerAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 135;
				this.attrId();
				this.state = 136;
				this.indexerHeader();
				this.state = 138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 137;
					this.body();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new ObjectAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 140;
				this.attrId();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 141;
					this.match(XonParser.NL);
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 146;
				this.match(XonParser.INDENT);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 149;
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
						this.state = 147;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 148;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)) | (1 << (XonParser.NL - 49)))) !== 0));
				this.state = 153;
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
		this.enterRule(_localctx, 18, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 157;
				this.match(XonParser.FOR);
				this.state = 165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 158;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 159;
						this.match(XonParser.COMMA);
						this.state = 160;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 163;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 167;
				this.expr(0);
				this.state = 168;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.match(XonParser.WHILE);
				this.state = 171;
				this.expr(0);
				this.state = 172;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 174;
				this.match(XonParser.DO);
				this.state = 175;
				this.body();
				this.state = 176;
				this.match(XonParser.WHILE);
				this.state = 177;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 179;
				this.match(XonParser.IF);
				this.state = 180;
				this.expr(0);
				this.state = 181;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 184;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 182;
					this.match(XonParser.ELSE);
					this.state = 183;
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
				this.state = 186;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 187;
				this.match(XonParser.RETURN);
				this.state = 189;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 188;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 191;
				this.match(XonParser.ACTUAL);
				this.state = 192;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 193;
					this.match(XonParser.NL);
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 198;
				this.match(XonParser.EXPECT);
				this.state = 199;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 201;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 202;
				this.id();
				this.state = 203;
				this.match(XonParser.ASSIGN);
				this.state = 204;
				this.expr(0);
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 206;
				this.expr(0);
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 210;
				this.match(XonParser.OPEN_PAREN);
				this.state = 211;
				this.expr(0);
				this.state = 212;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 2:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 214;
				this.id();
				this.state = 216;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 215;
					this.generics();
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 218;
				this.indexerHeader();
				this.state = 219;
				this.match(XonParser.COLON);
				this.state = 220;
				this.expr(22);
				}
				break;

			case 4:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 222;
				this.methodHeader();
				this.state = 223;
				this.match(XonParser.COLON);
				this.state = 224;
				this.expr(21);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 226;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.MINUS - 52)) | (1 << (XonParser.PLUS - 52)) | (1 << (XonParser.SPREAD - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
					{
					this.state = 227;
					this.arguments();
					}
				}

				this.state = 230;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 231;
				this.match(XonParser.OPEN_BRACE);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.SPREAD - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)))) !== 0)) {
					{
					this.state = 232;
					this.objectArgument();
					this.state = 237;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 233;
							this.match(XonParser.COMMA);
							this.state = 234;
							this.objectArgument();
							}
							}
						}
						this.state = 239;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
					}
					}
				}

				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 242;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 245;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 7:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 246;
				this.match(XonParser.SPREAD);
				this.state = 247;
				this.expr(14);
				}
				break;

			case 8:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 248;
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
				this.state = 249;
				this.expr(13);
				}
				break;

			case 9:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 250;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 309;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 253;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 254;
						(_localctx as InfixExpressionContext)._op = this.id();
						this.state = 255;
						(_localctx as InfixExpressionContext)._right = this.expr(13);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 257;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 258;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 259;
						(_localctx as PowExpressionContext)._right = this.expr(12);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 260;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 261;
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
						this.state = 262;
						(_localctx as MulDivModExpressionContext)._right = this.expr(11);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 263;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 264;
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
						this.state = 265;
						(_localctx as AddSubExpressionContext)._right = this.expr(10);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 266;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 267;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 268;
						(_localctx as RangeExpressionContext)._right = this.expr(9);
						}
						break;

					case 6:
						{
						_localctx = new ElvisExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 269;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 270;
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
						this.state = 271;
						(_localctx as ElvisExpressionContext)._right = this.expr(8);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 272;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 273;
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
						this.state = 274;
						(_localctx as RelationalExpressionContext)._right = this.expr(7);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 275;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 276;
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
						this.state = 277;
						(_localctx as EqualityExpressionContext)._right = this.expr(6);
						}
						break;

					case 9:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 278;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 279;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 280;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(5);
						}
						break;

					case 10:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 281;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 282;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 283;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(4);
						}
						break;

					case 11:
						{
						_localctx = new PipeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 284;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 285;
						this.match(XonParser.PIPE);
						this.state = 289;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
						case 1:
							{
							this.state = 286;
							this.id();
							this.state = 287;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 291;
						(_localctx as PipeExpressionContext)._right = this.expr(3);
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 292;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 293;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 295;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.MINUS - 52)) | (1 << (XonParser.PLUS - 52)) | (1 << (XonParser.SPREAD - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
							{
							this.state = 294;
							this.arguments();
							}
						}

						this.state = 297;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 13:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 298;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 299;
						this.match(XonParser.OPEN_PAREN);
						this.state = 301;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.MINUS - 52)) | (1 << (XonParser.PLUS - 52)) | (1 << (XonParser.SPREAD - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
							{
							this.state = 300;
							this.arguments();
							}
						}

						this.state = 303;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 14:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 304;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 305;
						this.match(XonParser.QUESTION);
						}
						break;

					case 15:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 306;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 307;
						this.match(XonParser.DOT);
						this.state = 308;
						this.attrId();
						}
						break;
					}
					}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
		this.enterRule(_localctx, 22, XonParser.RULE_literal);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 314;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 315;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 316;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 317;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 318;
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.expr(0);
			this.state = 326;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 322;
					this.match(XonParser.COMMA);
					this.state = 323;
					this.expr(0);
					}
					}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 329;
				this.match(XonParser.COMMA);
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 332;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 335;
			this.attrId();
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.EXTENSION) | (1 << XonParser.INTERFACE) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.MINUS - 52)) | (1 << (XonParser.PLUS - 52)) | (1 << (XonParser.SPREAD - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.ID - 52)))) !== 0)) {
				{
				this.state = 336;
				this.expr(0);
				}
			}

			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 339;
				this.match(XonParser.HASH);
				this.state = 340;
				_localctx._meta = this.id();
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
	public methodHeader(): MethodHeaderContext {
		let _localctx: MethodHeaderContext = new MethodHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_methodHeader);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 343;
				this.generics();
				}
			}

			this.state = 346;
			this.match(XonParser.OPEN_PAREN);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.SPREAD - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)))) !== 0)) {
				{
				this.state = 347;
				this.parameter();
				this.state = 352;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 348;
						this.match(XonParser.COMMA);
						this.state = 349;
						this.parameter();
						}
						}
					}
					this.state = 354;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				}
			}

			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 357;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 360;
			this.match(XonParser.CLOSE_PAREN);
			this.state = 362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 361;
				this.expr(0);
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
	public indexerHeader(): IndexerHeaderContext {
		let _localctx: IndexerHeaderContext = new IndexerHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XonParser.RULE_indexerHeader);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 364;
				this.generics();
				}
			}

			this.state = 367;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.EXTENSION - 13)) | (1 << (XonParser.INTERFACE - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.ASSIGN - 13)) | (1 << (XonParser.ASTERISK - 13)) | (1 << (XonParser.CARET - 13)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS - 49)) | (1 << (XonParser.MINUS - 49)) | (1 << (XonParser.MODULO - 49)) | (1 << (XonParser.PLUS - 49)) | (1 << (XonParser.SLASH - 49)) | (1 << (XonParser.SPREAD - 49)) | (1 << (XonParser.STRING_LITERAL - 49)) | (1 << (XonParser.ID - 49)))) !== 0)) {
				{
				this.state = 368;
				this.parameter();
				this.state = 373;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 369;
						this.match(XonParser.COMMA);
						this.state = 370;
						this.parameter();
						}
						}
					}
					this.state = 375;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				}
				}
			}

			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 378;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 381;
			this.match(XonParser.CLOSE_BRACKET);
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 382;
				this.expr(0);
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
	public objectArgument(): ObjectArgumentContext {
		let _localctx: ObjectArgumentContext = new ObjectArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_objectArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.parameter();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 386;
				this.match(XonParser.COLON);
				this.state = 387;
				this.expr(0);
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
	public generics(): GenericsContext {
		let _localctx: GenericsContext = new GenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_generics);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(XonParser.LESS);
			this.state = 391;
			this.match(XonParser.PIPE);
			this.state = 392;
			this.arguments();
			this.state = 393;
			this.match(XonParser.PIPE);
			this.state = 394;
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
		this.enterRule(_localctx, 36, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 396;
				this.match(XonParser.COLON);
				this.state = 397;
				this.statement();
				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 398;
					this.match(XonParser.NL);
					}
					}
					this.state = 401;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 403;
				this.match(XonParser.INDENT);
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 406;
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
					case XonParser.LESS:
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
						this.state = 404;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 405;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 408;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.ENUM - 3)) | (1 << (XonParser.EXTENSION - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.INTERFACE - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.OBJECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.WHILE - 3)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.LESS - 52)) | (1 << (XonParser.MINUS - 52)) | (1 << (XonParser.PLUS - 52)) | (1 << (XonParser.SPREAD - 52)) | (1 << (XonParser.FLOAT_LITERAL - 52)) | (1 << (XonParser.INTEGER_LITERAL - 52)) | (1 << (XonParser.CHAR_LITERAL - 52)) | (1 << (XonParser.STRING_LITERAL - 52)) | (1 << (XonParser.REGEX_LITERAL - 52)) | (1 << (XonParser.PREPROCESSOR - 52)) | (1 << (XonParser.ID - 52)) | (1 << (XonParser.NL - 52)))) !== 0));
				this.state = 410;
				this.match(XonParser.DEDENT);
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
	public attrId(): AttrIdContext {
		let _localctx: AttrIdContext = new AttrIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XonParser.RULE_attrId);
		try {
			this.state = 416;
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
				this.state = 413;
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
				this.state = 414;
				this.operator();
				}
				break;
			case XonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 415;
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
		this.enterRule(_localctx, 40, XonParser.RULE_id);
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
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
				this.state = 419;
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
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
		case 10:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 18);

		case 12:
			return this.precpred(this._ctx, 17);

		case 13:
			return this.precpred(this._ctx, 16);

		case 14:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u01AB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x07\x029\n\x02\f\x02\x0E\x02<\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04G\n\x04\f\x04\x0E\x04J\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05O\n\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05V\n\x05\x03\x05\x05\x05Y\n\x05\x05\x05[\n\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x05\x07a\n\x07\x03\x07\x05\x07d\n\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x07\bj\n\b\f\b\x0E\bm\v\b\x03\t\x06\tp\n\t\r\t\x0E\tq\x03" +
		"\t\x03\t\x03\t\x06\tw\n\t\r\t\x0E\tx\x03\t\x03\t\x03\n\x03\n\x05\n\x7F" +
		"\n\n\x03\n\x03\n\x05\n\x83\n\n\x03\n\x03\n\x03\n\x05\n\x88\n\n\x03\n\x03" +
		"\n\x03\n\x05\n\x8D\n\n\x03\n\x03\n\x06\n\x91\n\n\r\n\x0E\n\x92\x03\n\x03" +
		"\n\x03\n\x06\n\x98\n\n\r\n\x0E\n\x99\x03\n\x03\n\x05\n\x9E\n\n\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\xA4\n\v\x03\v\x03\v\x05\v\xA8\n\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\xBB\n\v\x03\v\x03\v\x03\v\x05\v\xC0\n\v\x03\v\x03" +
		"\v\x03\v\x06\v\xC5\n\v\r\v\x0E\v\xC6\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x05\v\xD2\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\xDB\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\xE7\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xEE\n\f\f\f" +
		"\x0E\f\xF1\v\f\x05\f\xF3\n\f\x03\f\x05\f\xF6\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xFE\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0124\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u012A\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0130\n\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\u0138\n\f\f\f\x0E\f\u013B\v\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0142\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0147" +
		"\n\x0E\f\x0E\x0E\x0E\u014A\v\x0E\x03\x0E\x05\x0E\u014D\n\x0E\x03\x0F\x05" +
		"\x0F\u0150\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0154\n\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u0158\n\x0F\x03\x10\x05\x10\u015B\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x07\x10\u0161\n\x10\f\x10\x0E\x10\u0164\v\x10\x05\x10\u0166\n\x10" +
		"\x03\x10\x05\x10\u0169\n\x10\x03\x10\x03\x10\x05\x10\u016D\n\x10\x03\x11" +
		"\x05\x11\u0170\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0176\n\x11" +
		"\f\x11\x0E\x11\u0179\v\x11\x05\x11\u017B\n\x11\x03\x11\x05\x11\u017E\n" +
		"\x11\x03\x11\x03\x11\x05\x11\u0182\n\x11\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0187\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x06\x14\u0192\n\x14\r\x14\x0E\x14\u0193\x03\x14\x03\x14\x03" +
		"\x14\x06\x14\u0199\n\x14\r\x14\x0E\x14\u019A\x03\x14\x05\x14\u019E\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\u01A3\n\x15\x03\x16\x03\x16\x05\x16\u01A7" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x02\x02\x03\x16\x18\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\t\x07" +
		"\x02\x0F\x0F\x12\x12\x15\x15\x1B\x1B\x1E\x1E\x05\x02\x1D\x1D77<<\x05\x02" +
		"((88??\x04\x0277<<\x04\x022356\x04\x020099\b\x02\'(++3368<<??\x02\u01F6" +
		"\x023\x03\x02\x02\x02\x04=\x03\x02\x02\x02\x06@\x03\x02\x02\x02\bZ\x03" +
		"\x02\x02\x02\n\\\x03\x02\x02\x02\f^\x03\x02\x02\x02\x0Ee\x03\x02\x02\x02" +
		"\x10o\x03\x02\x02\x02\x12\x9D\x03\x02\x02\x02\x14\xD1\x03\x02\x02\x02" +
		"\x16\xFD\x03\x02\x02\x02\x18\u0141\x03\x02\x02\x02\x1A\u0143\x03\x02\x02" +
		"\x02\x1C\u014F\x03\x02\x02\x02\x1E\u015A\x03\x02\x02\x02 \u016F\x03\x02" +
		"\x02\x02\"\u0183\x03\x02\x02\x02$\u0188\x03\x02\x02\x02&\u019D\x03\x02" +
		"\x02\x02(\u01A2\x03\x02\x02\x02*\u01A6\x03\x02\x02\x02,\u01A8\x03\x02" +
		"\x02\x02.2\x05\x06\x04\x02/2\x05\x04\x03\x0202\x07J\x02\x021.\x03\x02" +
		"\x02\x021/\x03\x02\x02\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0234\x03\x02\x02\x024:\x03\x02\x02\x0253\x03\x02\x02\x0269\x05\b" +
		"\x05\x0279\x07J\x02\x0286\x03\x02\x02\x0287\x03\x02\x02\x029<\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\x03\x03\x02\x02\x02<:\x03" +
		"\x02\x02\x02=>\x07\x14\x02\x02>?\x05\x16\f\x02?\x05\x03\x02\x02\x02@A" +
		"\x07\x18\x02\x02AB\x05\x16\f\x02BC\x07-\x02\x02CH\x05\x16\f\x02DE\x07" +
		".\x02\x02EG\x05\x16\f\x02FD\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02" +
		"\x02\x02HI\x03\x02\x02\x02I\x07\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07" +
		"#\x02\x02LN\x05*\x16\x02MO\x05$\x13\x02NM\x03\x02\x02\x02NO\x03\x02\x02" +
		"\x02OP\x03\x02\x02\x02PQ\x07-\x02\x02QR\x05\x16\f\x02R[\x03\x02\x02\x02" +
		"SU\x05\n\x06\x02TV\x05\f\x07\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02V" +
		"X\x03\x02\x02\x02WY\x05\x10\t\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Y[\x03\x02\x02\x02ZK\x03\x02\x02\x02ZS\x03\x02\x02\x02[\t\x03\x02\x02" +
		"\x02\\]\t\x02\x02\x02]\v\x03\x02\x02\x02^`\x05*\x16\x02_a\x05\x1E\x10" +
		"\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x03\x02\x02\x02bd\x05\x0E\b" +
		"\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02d\r\x03\x02\x02\x02ef\x07\x1C" +
		"\x02\x02fk\x05\x16\f\x02gh\x07.\x02\x02hj\x05\x16\f\x02ig\x03\x02\x02" +
		"\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02l\x0F\x03\x02" +
		"\x02\x02mk\x03\x02\x02\x02np\x07J\x02\x02on\x03\x02\x02\x02pq\x03\x02" +
		"\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02sv\x07\x03" +
		"\x02\x02tw\x05\x12\n\x02uw\x07J\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02" +
		"\x02wx\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x03\x02\x02" +
		"\x02z{\x07\x04\x02\x02{\x11\x03\x02\x02\x02|~\x05(\x15\x02}\x7F\x05\x16" +
		"\f\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02" +
		"\x80\x81\x07-\x02\x02\x81\x83\x05\x16\f\x02\x82\x80\x03\x02\x02\x02\x82" +
		"\x83\x03\x02\x02\x02\x83\x9E\x03\x02\x02\x02\x84\x85\x05(\x15\x02\x85" +
		"\x87\x05\x1E\x10\x02\x86\x88\x05&\x14\x02\x87\x86\x03\x02\x02\x02\x87" +
		"\x88\x03\x02\x02\x02\x88\x9E\x03\x02\x02\x02\x89\x8A\x05(\x15\x02\x8A" +
		"\x8C\x05 \x11\x02\x8B\x8D\x05&\x14\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D" +
		"\x03\x02\x02\x02\x8D\x9E\x03\x02\x02\x02\x8E\x90\x05(\x15\x02\x8F\x91" +
		"\x07J\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x90" +
		"\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x97" +
		"\x07\x03\x02\x02\x95\x98\x05\x12\n\x02\x96\x98\x07J\x02\x02\x97\x95\x03" +
		"\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03" +
		"\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x07" +
		"\x04\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D|\x03\x02\x02\x02\x9D\x84\x03" +
		"\x02\x02\x02\x9D\x89\x03\x02\x02\x02\x9D\x8E\x03\x02\x02\x02\x9E\x13\x03" +
		"\x02\x02\x02\x9F\xA7\x07\x16\x02\x02\xA0\xA3\x05*\x16\x02\xA1\xA2\x07" +
		".\x02\x02\xA2\xA4\x05*\x16\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02" +
		"\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x07\x19\x02\x02\xA6\xA8\x03\x02" +
		"\x02\x02\xA7\xA0\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02" +
		"\x02\x02\xA9\xAA\x05\x16\f\x02\xAA\xAB\x05&\x14\x02\xAB\xD2\x03\x02\x02" +
		"\x02\xAC\xAD\x07$\x02\x02\xAD\xAE\x05\x16\f\x02\xAE\xAF\x05&\x14\x02\xAF" +
		"\xD2\x03\x02\x02\x02\xB0\xB1\x07\x10\x02\x02\xB1\xB2\x05&\x14\x02\xB2" +
		"\xB3\x07$\x02\x02\xB3\xB4\x05\x16\f\x02\xB4\xD2\x03\x02\x02\x02\xB5\xB6" +
		"\x07\x17\x02\x02\xB6\xB7\x05\x16\f\x02\xB7\xBA\x05&\x14\x02\xB8\xB9\x07" +
		"\x11\x02\x02\xB9\xBB\x05&\x14\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03" +
		"\x02\x02\x02\xBB\xD2\x03\x02\x02\x02\xBC\xD2\x07\x0E\x02\x02\xBD\xBF\x07" +
		"!\x02\x02\xBE\xC0\x05\x16\f\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02" +
		"\x02\x02\xC0\xD2\x03\x02\x02\x02\xC1\xC2\x07\f\x02\x02\xC2\xC4\x05\x16" +
		"\f\x02\xC3\xC5\x07J\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02" +
		"\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02" +
		"\x02\xC8\xC9\x07\x13\x02\x02\xC9\xCA\x05\x16\f\x02\xCA\xD2\x03\x02\x02" +
		"\x02\xCB\xD2\x07H\x02\x02\xCC\xCD\x05*\x16\x02\xCD\xCE\x07\'\x02\x02\xCE" +
		"\xCF\x05\x16\f\x02\xCF\xD2\x03\x02\x02\x02\xD0\xD2\x05\x16\f\x02\xD1\x9F" +
		"\x03\x02\x02\x02\xD1\xAC\x03\x02\x02\x02\xD1\xB0\x03\x02\x02\x02\xD1\xB5" +
		"\x03\x02\x02\x02\xD1\xBC\x03\x02\x02\x02\xD1\xBD\x03\x02\x02\x02\xD1\xC1" +
		"\x03\x02\x02\x02\xD1\xCB\x03\x02\x02\x02\xD1\xCC\x03\x02\x02\x02\xD1\xD0" +
		"\x03\x02\x02\x02\xD2\x15\x03\x02\x02\x02\xD3\xD4\b\f\x01\x02\xD4\xD5\x07" +
		"\x07\x02\x02\xD5\xD6\x05\x16\f\x02\xD6\xD7\x07\b\x02\x02\xD7\xFE\x03\x02" +
		"\x02\x02\xD8\xDA\x05*\x16\x02\xD9\xDB\x05$\x13\x02\xDA\xD9\x03\x02\x02" +
		"\x02\xDA\xDB\x03\x02\x02\x02\xDB\xFE\x03\x02\x02\x02\xDC\xDD\x05 \x11" +
		"\x02\xDD\xDE\x07-\x02\x02\xDE\xDF\x05\x16\f\x18\xDF\xFE\x03\x02\x02\x02" +
		"\xE0\xE1\x05\x1E\x10\x02\xE1\xE2\x07-\x02\x02\xE2\xE3\x05\x16\f\x17\xE3" +
		"\xFE\x03\x02\x02\x02\xE4\xE6\x07\x05\x02\x02\xE5\xE7\x05\x1A\x0E\x02\xE6" +
		"\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8" +
		"\xFE\x07\x06\x02\x02\xE9\xF2\x07\t\x02\x02\xEA\xEF\x05\"\x12\x02\xEB\xEC" +
		"\x07.\x02\x02\xEC\xEE\x05\"\x12\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x03" +
		"\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF3\x03" +
		"\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xEA\x03\x02\x02\x02\xF2\xF3\x03" +
		"\x02\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xF6\x07.\x02\x02\xF5\xF4\x03" +
		"\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xFE\x07" +
		"\n\x02\x02\xF8\xF9\x07@\x02\x02\xF9\xFE\x05\x16\f\x10\xFA\xFB\t\x03\x02" +
		"\x02\xFB\xFE\x05\x16\f\x0F\xFC\xFE\x05\x18\r\x02\xFD\xD3\x03\x02\x02\x02" +
		"\xFD\xD8\x03\x02\x02\x02\xFD\xDC\x03\x02\x02\x02\xFD\xE0\x03\x02\x02\x02" +
		"\xFD\xE4\x03\x02\x02\x02\xFD\xE9\x03\x02\x02\x02\xFD\xF8\x03\x02\x02\x02" +
		"\xFD\xFA\x03\x02\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE\u0139\x03\x02\x02" +
		"\x02\xFF\u0100\f\x0E\x02\x02\u0100\u0101\x05*\x16\x02\u0101\u0102\x05" +
		"\x16\f\x0F\u0102\u0138\x03\x02\x02\x02\u0103\u0104\f\r\x02\x02\u0104\u0105" +
		"\x07+\x02\x02\u0105\u0138\x05\x16\f\x0E\u0106\u0107\f\f\x02\x02\u0107" +
		"\u0108\t\x04\x02\x02\u0108\u0138\x05\x16\f\r\u0109\u010A\f\v\x02\x02\u010A" +
		"\u010B\t\x05\x02\x02\u010B\u0138\x05\x16\f\f\u010C\u010D\f\n\x02\x02\u010D" +
		"\u010E\x07>\x02\x02\u010E\u0138\x05\x16\f\v\u010F\u0110\f\t\x02\x02\u0110" +
		"\u0111\x07=\x02\x02\u0111\u0138\x05\x16\f\n\u0112\u0113\f\b\x02\x02\u0113" +
		"\u0114\t\x06\x02\x02\u0114\u0138\x05\x16\f\t\u0115\u0116\f\x07\x02\x02" +
		"\u0116\u0117\t\x07\x02\x02\u0117\u0138\x05\x16\f\b\u0118\u0119\f\x06\x02" +
		"\x02\u0119\u011A\x07&\x02\x02\u011A\u0138\x05\x16\f\x07\u011B\u011C\f" +
		"\x05\x02\x02\u011C\u011D\x07:\x02\x02\u011D\u0138\x05\x16\f\x06\u011E" +
		"\u011F\f\x04\x02\x02\u011F\u0123\x07;\x02\x02\u0120\u0121\x05*\x16\x02" +
		"\u0121\u0122\x07-\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0120\x03" +
		"\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125" +
		"\u0138\x05\x16\f\x05\u0126\u0127\f\x14\x02\x02\u0127\u0129\x07\x05\x02" +
		"\x02\u0128\u012A\x05\x1A\x0E\x02\u0129\u0128\x03\x02\x02\x02\u0129\u012A" +
		"\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u0138\x07\x06\x02\x02" +
		"\u012C\u012D\f\x13\x02\x02\u012D\u012F\x07\x07\x02\x02\u012E\u0130\x05" +
		"\x1A\x0E\x02\u012F\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0138\x07\b\x02\x02\u0132\u0133\f\x12\x02" +
		"\x02\u0133\u0138\x07=\x02\x02\u0134\u0135\f\x11\x02\x02\u0135\u0136\x07" +
		"/\x02\x02\u0136\u0138\x05(\x15\x02\u0137\xFF\x03\x02\x02\x02\u0137\u0103" +
		"\x03\x02\x02\x02\u0137\u0106\x03\x02\x02\x02\u0137\u0109\x03\x02\x02\x02" +
		"\u0137\u010C\x03\x02\x02\x02\u0137\u010F\x03\x02\x02\x02\u0137\u0112\x03" +
		"\x02\x02\x02\u0137\u0115\x03\x02\x02\x02\u0137\u0118\x03\x02\x02\x02\u0137" +
		"\u011B\x03\x02\x02\x02\u0137\u011E\x03\x02\x02\x02\u0137\u0126\x03\x02" +
		"\x02\x02\u0137\u012C\x03\x02\x02\x02\u0137\u0132\x03\x02\x02\x02\u0137" +
		"\u0134\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02" +
		"\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\x17\x03\x02\x02\x02\u013B\u0139" +
		"\x03\x02\x02\x02\u013C\u0142\x07D\x02\x02\u013D\u0142\x07C\x02\x02\u013E" +
		"\u0142\x07E\x02\x02\u013F\u0142\x07F\x02\x02\u0140\u0142\x07G\x02\x02" +
		"\u0141\u013C\x03\x02\x02\x02\u0141\u013D\x03\x02\x02\x02\u0141\u013E\x03" +
		"\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0140\x03\x02\x02\x02\u0142" +
		"\x19\x03\x02\x02\x02\u0143\u0148\x05\x16\f\x02\u0144\u0145\x07.\x02\x02" +
		"\u0145\u0147\x05\x16\f\x02\u0146\u0144\x03\x02\x02\x02\u0147\u014A\x03" +
		"\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149" +
		"\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014D\x07.\x02" +
		"\x02\u014C\u014B\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\x1B" +
		"\x03\x02\x02\x02\u014E\u0150\x07@\x02\x02\u014F\u014E\x03\x02\x02\x02" +
		"\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x05" +
		"(\x15\x02\u0152\u0154\x05\x16\f\x02\u0153\u0152\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0156\x074\x02" +
		"\x02\u0156\u0158\x05*\x16\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158" +
		"\x03\x02\x02\x02\u0158\x1D\x03\x02\x02\x02\u0159\u015B\x05$\x13\x02\u015A" +
		"\u0159\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u0165\x07\x07\x02\x02\u015D\u0162\x05\x1C\x0F\x02\u015E" +
		"\u015F\x07.\x02\x02\u015F\u0161\x05\x1C\x0F\x02\u0160\u015E\x03\x02\x02" +
		"\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163" +
		"\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02" +
		"\u0165\u015D\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03" +
		"\x02\x02\x02\u0167\u0169\x07.\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168" +
		"\u0169\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x07\b\x02" +
		"\x02\u016B\u016D\x05\x16\f\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D" +
		"\x03\x02\x02\x02\u016D\x1F\x03\x02\x02\x02\u016E\u0170\x05$\x13\x02\u016F" +
		"\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02" +
		"\x02\x02\u0171\u017A\x07\x05\x02\x02\u0172\u0177\x05\x1C\x0F\x02\u0173" +
		"\u0174\x07.\x02\x02\u0174\u0176\x05\x1C\x0F\x02\u0175\u0173\x03\x02\x02" +
		"\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178" +
		"\x03\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02" +
		"\u017A\u0172\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03" +
		"\x02\x02\x02\u017C\u017E\x07.\x02\x02\u017D\u017C\x03\x02\x02\x02\u017D" +
		"\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0181\x07\x06" +
		"\x02\x02\u0180\u0182\x05\x16\f\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182!\x03\x02\x02\x02\u0183\u0186\x05\x1C\x0F\x02\u0184" +
		"\u0185\x07-\x02\x02\u0185\u0187\x05\x16\f\x02\u0186\u0184\x03\x02\x02" +
		"\x02\u0186\u0187\x03\x02\x02\x02\u0187#\x03\x02\x02\x02\u0188\u0189\x07" +
		"6\x02\x02\u0189\u018A\x07;\x02\x02\u018A\u018B\x05\x1A\x0E\x02\u018B\u018C" +
		"\x07;\x02\x02\u018C\u018D\x073\x02\x02\u018D%\x03\x02\x02\x02\u018E\u018F" +
		"\x07-\x02\x02\u018F\u019E\x05\x14\v\x02\u0190\u0192\x07J\x02\x02\u0191" +
		"\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0191\x03\x02" +
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195" +
		"\u0198\x07\x03\x02\x02\u0196\u0199\x05\x14\v\x02\u0197\u0199\x07J\x02" +
		"\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199\u019A" +
		"\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
		"\u019B\u019C\x03\x02\x02\x02\u019C\u019E\x07\x04\x02\x02\u019D\u018E\x03" +
		"\x02\x02\x02\u019D\u0191\x03\x02\x02\x02\u019E\'\x03\x02\x02\x02\u019F" +
		"\u01A3\x05*\x16\x02\u01A0\u01A3\x05,\x17\x02\u01A1\u01A3\x07F\x02\x02" +
		"\u01A2\u019F\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A1\x03" +
		"\x02\x02\x02\u01A3)\x03\x02\x02\x02\u01A4\u01A7\x07I\x02\x02\u01A5\u01A7" +
		"\x05\n\x06\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A5\x03\x02\x02\x02" +
		"\u01A7+\x03\x02\x02\x02\u01A8\u01A9\t\b\x02\x02\u01A9-\x03\x02\x02\x02" +
		"A138:HNUXZ`ckqvx~\x82\x87\x8C\x92\x97\x99\x9D\xA3\xA7\xBA\xBF\xC6\xD1" +
		"\xDA\xE6\xEF\xF2\xF5\xFD\u0123\u0129\u012F\u0137\u0139\u0141\u0148\u014C" +
		"\u014F\u0153\u0157\u015A\u0162\u0165\u0168\u016C\u016F\u0177\u017A\u017D" +
		"\u0181\u0186\u0193\u0198\u019A\u019D\u01A2\u01A6";
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
	public _type!: ExprContext;
	public TYPE(): TerminalNode { return this.getToken(XonParser.TYPE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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


export class DefinitionHeaderContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public methodHeader(): MethodHeaderContext | undefined {
		return this.tryGetRuleContext(0, MethodHeaderContext);
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
	public _type!: ExprContext;
	public _value!: ExprContext;
	public attrId(): AttrIdContext {
		return this.getRuleContext(0, AttrIdContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodAttributeContext extends AttributeContext {
	public attrId(): AttrIdContext {
		return this.getRuleContext(0, AttrIdContext);
	}
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexerAttributeContext extends AttributeContext {
	public attrId(): AttrIdContext {
		return this.getRuleContext(0, AttrIdContext);
	}
	public indexerHeader(): IndexerHeaderContext {
		return this.getRuleContext(0, IndexerHeaderContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: AttributeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectAttributeContext extends AttributeContext {
	public attrId(): AttrIdContext {
		return this.getRuleContext(0, AttrIdContext);
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
export class ExpressionStatementContext extends StatementContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
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
export class IndexerExpressionContext extends ExprContext {
	public indexerHeader(): IndexerHeaderContext {
		return this.getRuleContext(0, IndexerHeaderContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExprContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
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
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
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
	public attrId(): AttrIdContext {
		return this.getRuleContext(0, AttrIdContext);
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
	public _op!: IdContext;
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
export class ElvisExpressionContext extends ExprContext {
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
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
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
export class PipeExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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


export class ParameterContext extends ParserRuleContext {
	public _meta!: IdContext;
	public attrId(): AttrIdContext {
		return this.getRuleContext(0, AttrIdContext);
	}
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class MethodHeaderContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_methodHeader; }
}


export class IndexerHeaderContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_indexerHeader; }
}


export class ObjectArgumentContext extends ParserRuleContext {
	public parameter(): ParameterContext {
		return this.getRuleContext(0, ParameterContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_objectArgument; }
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


export class BodyContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
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


export class AttrIdContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_attrId; }
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


