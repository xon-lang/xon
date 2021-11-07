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
	public static readonly PLUS = 31;
	public static readonly HASH = 32;
	public static readonly PIPE = 33;
	public static readonly LESS = 34;
	public static readonly LESS_EQUAL = 35;
	public static readonly COMMA = 36;
	public static readonly COLON = 37;
	public static readonly GREAT = 38;
	public static readonly GREAT_EQUAL = 39;
	public static readonly MINUS = 40;
	public static readonly SLASH = 41;
	public static readonly CARET = 42;
	public static readonly TILDE = 43;
	public static readonly ASSIGN = 44;
	public static readonly EQUAL = 45;
	public static readonly NOT_EQUAL = 46;
	public static readonly DOLLAR = 47;
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
	public static readonly NULL_LITERAL = 58;
	public static readonly FLOAT_LITERAL = 59;
	public static readonly INTEGER_LITERAL = 60;
	public static readonly BOOLEAN_LITERAL = 61;
	public static readonly CHAR_LITERAL = 62;
	public static readonly STRING_LITERAL = 63;
	public static readonly PREPROCESSOR = 64;
	public static readonly UPPER_ID = 65;
	public static readonly LOWER_ID = 66;
	public static readonly NL = 67;
	public static readonly WS = 68;
	public static readonly COMMENT = 69;
	public static readonly RULE_source = 0;
	public static readonly RULE_sourceMember = 1;
	public static readonly RULE_export = 2;
	public static readonly RULE_library = 3;
	public static readonly RULE_libraryPath = 4;
	public static readonly RULE_libraryPathPart = 5;
	public static readonly RULE_libraryMember = 6;
	public static readonly RULE_test = 7;
	public static readonly RULE_definition = 8;
	public static readonly RULE_classMember = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_attribute = 11;
	public static readonly RULE_attributeName = 12;
	public static readonly RULE_attributeModifier = 13;
	public static readonly RULE_assignment = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_type = 16;
	public static readonly RULE_literal = 17;
	public static readonly RULE_operator = 18;
	public static readonly RULE_parameter = 19;
	public static readonly RULE_functionParameters = 20;
	public static readonly RULE_indexParameters = 21;
	public static readonly RULE_lambdaParameters = 22;
	public static readonly RULE_argument = 23;
	public static readonly RULE_arguments = 24;
	public static readonly RULE_genericArguments = 25;
	public static readonly RULE_genericParameters = 26;
	public static readonly RULE_body = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "sourceMember", "export", "library", "libraryPath", "libraryPathPart", 
		"libraryMember", "test", "definition", "classMember", "statement", "attribute", 
		"attributeName", "attributeModifier", "assignment", "expression", "type", 
		"literal", "operator", "parameter", "functionParameters", "indexParameters", 
		"lambdaParameters", "argument", "arguments", "genericArguments", "genericParameters", 
		"body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'test'", "'break'", 
		"'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'@'", "'.'", "'..'", 
		"'+'", "'#'", "'|'", "'<'", "'<='", "','", "':'", "'>'", "'>='", "'-'", 
		"'/'", "'^'", "'~'", "'='", "'=='", "'!='", "'$'", "'%'", "'?'", "'?.'", 
		"'*'", "'&'", "'&&'", "'||'", "'_'", "'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "EXTENSION", "AT", 
		"DOT", "RANGE", "PLUS", "HASH", "PIPE", "LESS", "LESS_EQUAL", "COMMA", 
		"COLON", "GREAT", "GREAT_EQUAL", "MINUS", "SLASH", "CARET", "TILDE", "ASSIGN", 
		"EQUAL", "NOT_EQUAL", "DOLLAR", "MODULO", "QUESTION", "COALESCING", "ASTERISK", 
		"AMPERSAND", "AND", "OR", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "NULL_LITERAL", 
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
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 59;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 56;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 57;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 58;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.TEST || _la === XonParser.UPPER_ID || _la === XonParser.NL) {
				{
				this.state = 66;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.TEST:
				case XonParser.UPPER_ID:
					{
					this.state = 64;
					this.sourceMember();
					}
					break;
				case XonParser.NL:
					{
					this.state = 65;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 70;
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
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.UPPER_ID:
				_localctx = new DefinitionSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.definition();
				}
				break;
			case XonParser.TEST:
				_localctx = new TestSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
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
		this.enterRule(_localctx, 6, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(XonParser.IMPORT);
			this.state = 79;
			this.libraryPath();
			this.state = 91;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 80;
				this.match(XonParser.AS);
				this.state = 81;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 82;
				this.match(XonParser.COLON);
				this.state = 83;
				this.libraryMember();
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 84;
					this.match(XonParser.COMMA);
					this.state = 85;
					this.libraryMember();
					}
					}
					this.state = 90;
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
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 93;
				_localctx._s29 = this.match(XonParser.DOT);
				_localctx._points.push(_localctx._s29);
				}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this.libraryPathPart();
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 100;
				this.match(XonParser.DOT);
				this.state = 101;
				this.libraryPathPart();
				}
				}
				this.state = 106;
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
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AT) {
				{
				this.state = 107;
				this.match(XonParser.AT);
				}
			}

			this.state = 110;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 113;
				this.match(XonParser.AS);
				this.state = 114;
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(XonParser.TEST);
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 118;
				this.expression(0);
				}
				break;
			}
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 121;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_definition);
		let _la: number;
		try {
			_localctx = new ClassDefinitionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			(_localctx as ClassDefinitionContext)._name = this.match(XonParser.UPPER_ID);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 125;
				this.genericParameters();
				}
			}

			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 128;
				this.functionParameters();
				}
			}

			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 131;
				this.match(XonParser.IS);
				this.state = 132;
				this.type(0);
				}
			}

			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 135;
				this.match(XonParser.COLON);
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 136;
					this.match(XonParser.NL);
					}
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 141;
				this.match(XonParser.INDENT);
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 144;
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
					case XonParser.DOLLAR:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AND:
					case XonParser.OR:
					case XonParser.EXCLAMATION:
					case XonParser.LOWER_ID:
						{
						this.state = 142;
						this.classMember();
						}
						break;
					case XonParser.NL:
						{
						this.state = 143;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.DOLLAR - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.ASTERISK - 51)) | (1 << (XonParser.AND - 51)) | (1 << (XonParser.OR - 51)) | (1 << (XonParser.EXCLAMATION - 51)) | (1 << (XonParser.LOWER_ID - 51)) | (1 << (XonParser.NL - 51)))) !== 0));
				this.state = 148;
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
		this.enterRule(_localctx, 18, XonParser.RULE_classMember);
		try {
			_localctx = new AttributeClassMemberContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.attribute();
			}
		}
		catch (re) {
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
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this.match(XonParser.FOR);
				this.state = 160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 154;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 155;
						this.match(XonParser.COMMA);
						this.state = 156;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 159;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 162;
				this.expression(0);
				this.state = 163;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.match(XonParser.WHILE);
				this.state = 166;
				this.expression(0);
				this.state = 167;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 169;
				this.match(XonParser.DO);
				this.state = 170;
				this.body();
				this.state = 171;
				this.match(XonParser.WHILE);
				this.state = 172;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 174;
				this.match(XonParser.IF);
				this.state = 175;
				this.expression(0);
				this.state = 176;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 179;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.match(XonParser.ELSE);
					this.state = 178;
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
				this.state = 181;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 182;
				this.match(XonParser.RETURN);
				this.state = 184;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 183;
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
				this.state = 186;
				this.match(XonParser.ACTUAL);
				this.state = 187;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 188;
					this.match(XonParser.NL);
					}
					}
					this.state = 191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 193;
				this.match(XonParser.EXPECT);
				this.state = 194;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 196;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 197;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new AttributeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 198;
				this.attribute();
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 199;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0)) {
				{
				{
				this.state = 202;
				this.attributeModifier();
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.attributeName();
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 209;
				this.type(0);
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 210;
					this.body();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 213;
					this.type(0);
					}
				}

				this.state = 216;
				this.body();
				}
				break;

			case 3:
				{
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 217;
					this.type(0);
					}
				}

				this.state = 220;
				this.match(XonParser.ASSIGN);
				this.state = 221;
				this.expression(0);
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
	public attributeName(): AttributeNameContext {
		let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_attributeName);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.LOWER_ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
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
				this.state = 225;
				this.operator();
				}
				break;
			case XonParser.DOLLAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 226;
				this.match(XonParser.DOLLAR);
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
	public attributeModifier(): AttributeModifierContext {
		let _localctx: AttributeModifierContext = new AttributeModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_attributeModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 232;
				this.match(XonParser.ASSIGN);
				this.state = 233;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 235;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 236;
					this.match(XonParser.COMMA);
					this.state = 237;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 243;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 244;
				this.match(XonParser.ASSIGN);
				this.state = 245;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
				this.match(XonParser.OPEN_BRACE);
				this.state = 247;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 248;
					this.match(XonParser.COMMA);
					this.state = 249;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 255;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 256;
				this.match(XonParser.ASSIGN);
				this.state = 257;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 258;
				this.match(XonParser.DOLLAR);
				this.state = 259;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 260;
				this.match(XonParser.ASSIGN);
				this.state = 261;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 262;
				this.expression(0);
				this.state = 263;
				this.match(XonParser.DOT);
				this.state = 264;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 265;
				this.match(XonParser.ASSIGN);
				this.state = 266;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 268;
				this.expression(0);
				this.state = 269;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 270;
				this.expression(0);
				this.state = 271;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 272;
				this.match(XonParser.ASSIGN);
				this.state = 273;
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
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 278;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 279;
				(_localctx as InstanceExpressionContext)._name = this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 280;
				this.match(XonParser.DOLLAR);
				this.state = 281;
				(_localctx as InstanceMemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 4:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 282;
				(_localctx as InstantiationExpressionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 283;
					this.genericArguments();
					}
				}

				this.state = 286;
				this.arguments();
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 287;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 288;
				this.match(XonParser.OPEN_PAREN);
				this.state = 289;
				this.expression(0);
				this.state = 290;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 7:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.MINUS - 40)) | (1 << (XonParser.DOLLAR - 40)) | (1 << (XonParser.EXCLAMATION - 40)) | (1 << (XonParser.BACK_SLASH - 40)) | (1 << (XonParser.NULL_LITERAL - 40)) | (1 << (XonParser.FLOAT_LITERAL - 40)) | (1 << (XonParser.INTEGER_LITERAL - 40)) | (1 << (XonParser.BOOLEAN_LITERAL - 40)) | (1 << (XonParser.CHAR_LITERAL - 40)) | (1 << (XonParser.STRING_LITERAL - 40)) | (1 << (XonParser.UPPER_ID - 40)) | (1 << (XonParser.LOWER_ID - 40)))) !== 0)) {
					{
					this.state = 293;
					this.expression(0);
					this.state = 298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 294;
						this.match(XonParser.COMMA);
						this.state = 295;
						this.expression(0);
						}
						}
						this.state = 300;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 303;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 8:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 304;
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
				this.state = 305;
				this.expression(12);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 306;
				this.match(XonParser.BACK_SLASH);
				this.state = 310;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 307;
					this.lambdaParameters();
					this.state = 308;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 312;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 360;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 315;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 316;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 317;
						(_localctx as PowExpressionContext)._right = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 318;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 319;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.SLASH - 41)) | (1 << (XonParser.MODULO - 41)) | (1 << (XonParser.ASTERISK - 41)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 320;
						(_localctx as MulDivModExpressionContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 321;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 322;
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
						this.state = 323;
						(_localctx as AddSubExpressionContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 324;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 325;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
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
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
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
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.LESS_EQUAL - 34)) | (1 << (XonParser.GREAT - 34)) | (1 << (XonParser.GREAT_EQUAL - 34)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 332;
						(_localctx as RelationalExpressionContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 333;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 334;
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
						this.state = 335;
						(_localctx as EqualityExpressionContext)._right = this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 336;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 337;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 338;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 339;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 340;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 341;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(4);
						}
						break;

					case 10:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 342;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 343;
						this.match(XonParser.PIPE);
						this.state = 344;
						(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 345;
						this.match(XonParser.COLON);
						this.state = 346;
						this.expression(3);
						}
						break;

					case 11:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 347;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 349;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 348;
							this.genericArguments();
							}
						}

						this.state = 351;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 352;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 353;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 354;
						this.expression(0);
						this.state = 355;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 357;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 358;
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
						this.state = 359;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						}
						break;
					}
					}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 366;
				(_localctx as IdTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 368;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 367;
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
				this.state = 370;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new IntersectionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 371;
				this.match(XonParser.OPEN_PAREN);
				this.state = 372;
				this.type(0);
				this.state = 373;
				this.match(XonParser.AMPERSAND);
				this.state = 374;
				this.type(0);
				this.state = 375;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 4:
				{
				_localctx = new UnionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 377;
				this.match(XonParser.OPEN_PAREN);
				this.state = 378;
				this.type(0);
				this.state = 379;
				this.match(XonParser.PIPE);
				this.state = 380;
				this.type(0);
				this.state = 381;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 5:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 383;
					this.genericParameters();
					}
				}

				this.state = 386;
				this.functionParameters();
				this.state = 388;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 387;
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
				this.state = 390;
				this.match(XonParser.OPEN_PAREN);
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 391;
					this.genericParameters();
					}
				}

				this.state = 394;
				this.functionParameters();
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 395;
					this.type(0);
					}
				}

				this.state = 398;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 7:
				{
				_localctx = new IndexTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				this.indexParameters();
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 404;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new IndexParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 407;
				this.match(XonParser.OPEN_PAREN);
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 408;
					this.genericParameters();
					}
				}

				this.state = 411;
				this.indexParameters();
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 412;
					this.type(0);
					}
				}

				this.state = 415;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 435;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 433;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 419;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 420;
						this.match(XonParser.AMPERSAND);
						this.state = 421;
						this.type(9);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 422;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 423;
						this.match(XonParser.PIPE);
						this.state = 424;
						this.type(7);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 425;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 426;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 427;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 428;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 430;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.INTEGER_LITERAL) {
							{
							this.state = 429;
							(_localctx as ArrayTypeContext)._size = this.match(XonParser.INTEGER_LITERAL);
							}
						}

						this.state = 432;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 437;
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
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_literal);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 438;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 439;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 440;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 441;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 442;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 443;
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
		this.enterRule(_localctx, 36, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 449;
				this.type(0);
				}
			}

			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 452;
				this.match(XonParser.HASH);
				this.state = 453;
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
		this.enterRule(_localctx, 40, XonParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.match(XonParser.OPEN_PAREN);
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 457;
				this.parameter();
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 458;
					this.match(XonParser.COMMA);
					this.state = 459;
					this.parameter();
					}
					}
					this.state = 464;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 467;
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
	public indexParameters(): IndexParametersContext {
		let _localctx: IndexParametersContext = new IndexParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_indexParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 470;
				this.parameter();
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 471;
					this.match(XonParser.COMMA);
					this.state = 472;
					this.parameter();
					}
					}
					this.state = 477;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 480;
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
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.parameter();
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 483;
				this.match(XonParser.COMMA);
				this.state = 484;
				this.parameter();
				}
				}
				this.state = 489;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
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
			this.state = 492;
			this.match(XonParser.OPEN_PAREN);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.MINUS - 40)) | (1 << (XonParser.DOLLAR - 40)) | (1 << (XonParser.EXCLAMATION - 40)) | (1 << (XonParser.BACK_SLASH - 40)) | (1 << (XonParser.NULL_LITERAL - 40)) | (1 << (XonParser.FLOAT_LITERAL - 40)) | (1 << (XonParser.INTEGER_LITERAL - 40)) | (1 << (XonParser.BOOLEAN_LITERAL - 40)) | (1 << (XonParser.CHAR_LITERAL - 40)) | (1 << (XonParser.STRING_LITERAL - 40)) | (1 << (XonParser.UPPER_ID - 40)) | (1 << (XonParser.LOWER_ID - 40)))) !== 0)) {
				{
				this.state = 493;
				this.argument();
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 494;
					this.match(XonParser.COMMA);
					this.state = 495;
					this.argument();
					}
					}
					this.state = 500;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 503;
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
		this.enterRule(_localctx, 50, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.match(XonParser.LESS);
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 506;
				this.type(0);
				this.state = 511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 507;
					this.match(XonParser.COMMA);
					this.state = 508;
					this.type(0);
					}
					}
					this.state = 513;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 516;
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
		this.enterRule(_localctx, 52, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(XonParser.LESS);
			this.state = 519;
			_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
			_localctx._names.push(_localctx._UPPER_ID);
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 520;
				this.match(XonParser.COMMA);
				this.state = 521;
				_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
				_localctx._names.push(_localctx._UPPER_ID);
				}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 527;
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
		this.enterRule(_localctx, 54, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(XonParser.COLON);
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 530;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 531;
					this.match(XonParser.NL);
					}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 536;
				this.match(XonParser.INDENT);
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 539;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.DO:
					case XonParser.IF:
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
					case XonParser.DOLLAR:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AND:
					case XonParser.OR:
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
						this.state = 537;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 538;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 541;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.INFIX - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.PREFIX - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.POSTFIX - 3)) | (1 << (XonParser.RANGE - 3)) | (1 << (XonParser.PLUS - 3)) | (1 << (XonParser.LESS - 3)))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.GREAT - 38)) | (1 << (XonParser.MINUS - 38)) | (1 << (XonParser.SLASH - 38)) | (1 << (XonParser.CARET - 38)) | (1 << (XonParser.EQUAL - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.ASTERISK - 38)) | (1 << (XonParser.AND - 38)) | (1 << (XonParser.OR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.PREPROCESSOR - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)) | (1 << (XonParser.NL - 38)))) !== 0));
				this.state = 543;
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
		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 16:
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
			return this.precpred(this._ctx, 8);

		case 14:
			return this.precpred(this._ctx, 6);

		case 15:
			return this.precpred(this._ctx, 10);

		case 16:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03G\u0225\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x03\x02\x03\x02\x07\x02>\n\x02\f\x02\x0E\x02A\v\x02" +
		"\x03\x02\x03\x02\x07\x02E\n\x02\f\x02\x0E\x02H\v\x02\x03\x03\x03\x03\x05" +
		"\x03L\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x07\x05Y\n\x05\f\x05\x0E\x05\\\v\x05\x05" +
		"\x05^\n\x05\x03\x06\x07\x06a\n\x06\f\x06\x0E\x06d\v\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06i\n\x06\f\x06\x0E\x06l\v\x06\x03\x07\x05\x07o\n\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x05\bv\n\b\x03\t\x03\t\x05\tz\n\t\x03\t" +
		"\x05\t}\n\t\x03\n\x03\n\x05\n\x81\n\n\x03\n\x05\n\x84\n\n\x03\n\x03\n" +
		"\x05\n\x88\n\n\x03\n\x03\n\x06\n\x8C\n\n\r\n\x0E\n\x8D\x03\n\x03\n\x03" +
		"\n\x06\n\x93\n\n\r\n\x0E\n\x94\x03\n\x05\n\x98\n\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xA0\n\f\x03\f\x05\f\xA3\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\xB6\n\f\x03\f\x03\f\x03\f\x05\f\xBB\n\f\x03\f\x03\f\x03" +
		"\f\x06\f\xC0\n\f\r\f\x0E\f\xC1\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\xCB\n\f\x03\r\x07\r\xCE\n\r\f\r\x0E\r\xD1\v\r\x03\r\x03\r\x03" +
		"\r\x05\r\xD6\n\r\x03\r\x05\r\xD9\n\r\x03\r\x03\r\x05\r\xDD\n\r\x03\r\x03" +
		"\r\x05\r\xE1\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xE6\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF1" +
		"\n\x10\f\x10\x0E\x10\xF4\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x07\x10\xFD\n\x10\f\x10\x0E\x10\u0100\v\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\u0116\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u011F\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u012B\n\x11\f\x11\x0E\x11" +
		"\u012E\v\x11\x05\x11\u0130\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0139\n\x11\x03\x11\x05\x11\u013C\n\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0160\n\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\u016B\n\x11\f\x11\x0E\x11\u016E\v\x11\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u0173\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0183" +
		"\n\x12\x03\x12\x03\x12\x05\x12\u0187\n\x12\x03\x12\x03\x12\x05\x12\u018B" +
		"\n\x12\x03\x12\x03\x12\x05\x12\u018F\n\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u0194\n\x12\x03\x12\x03\x12\x05\x12\u0198\n\x12\x03\x12\x03\x12\x05" +
		"\x12\u019C\n\x12\x03\x12\x03\x12\x05\x12\u01A0\n\x12\x03\x12\x03\x12\x05" +
		"\x12\u01A4\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01B1\n\x12\x03\x12\x07\x12\u01B4" +
		"\n\x12\f\x12\x0E\x12\u01B7\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x05\x13\u01BF\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u01C5" +
		"\n\x15\x03\x15\x03\x15\x05\x15\u01C9\n\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x07\x16\u01CF\n\x16\f\x16\x0E\x16\u01D2\v\x16\x05\x16\u01D4\n\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u01DC\n\x17\f" +
		"\x17\x0E\x17\u01DF\v\x17\x05\x17\u01E1\n\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x07\x18\u01E8\n\x18\f\x18\x0E\x18\u01EB\v\x18\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01F3\n\x1A\f\x1A\x0E\x1A" +
		"\u01F6\v\x1A\x05\x1A\u01F8\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x07\x1B\u0200\n\x1B\f\x1B\x0E\x1B\u0203\v\x1B\x05\x1B\u0205\n" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u020D\n\x1C" +
		"\f\x1C\x0E\x1C\u0210\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x06" +
		"\x1D\u0217\n\x1D\r\x1D\x0E\x1D\u0218\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u021E" +
		"\n\x1D\r\x1D\x0E\x1D\u021F\x03\x1D\x05\x1D\u0223\n\x1D\x03\x1D\x02\x02" +
		"\x04 \"\x1E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02\x02\n\x05\x02\x14\x14" +
		"\x1A\x1A\x1C\x1C\x05\x02!!**::\x05\x02++2255\x04\x02!!**\x04\x02$%()\x03" +
		"\x02/0\x04\x02\x1F\x1F44\v\x02 !$$((*,//225578::\x02\u0281\x02?\x03\x02" +
		"\x02\x02\x04K\x03\x02\x02\x02\x06M\x03\x02\x02\x02\bP\x03\x02\x02\x02" +
		"\nb\x03\x02\x02\x02\fn\x03\x02\x02\x02\x0Er\x03\x02\x02\x02\x10w\x03\x02" +
		"\x02\x02\x12~\x03\x02\x02\x02\x14\x99\x03\x02\x02\x02\x16\xCA\x03\x02" +
		"\x02\x02\x18\xCF\x03\x02\x02\x02\x1A\xE5\x03\x02\x02\x02\x1C\xE7\x03\x02" +
		"\x02\x02\x1E\u0115\x03\x02\x02\x02 \u013B\x03\x02\x02\x02\"\u01A3\x03" +
		"\x02\x02\x02$\u01BE\x03\x02\x02\x02&\u01C0\x03\x02\x02\x02(\u01C2\x03" +
		"\x02\x02\x02*\u01CA\x03\x02\x02\x02,\u01D7\x03\x02\x02\x02.\u01E4\x03" +
		"\x02\x02\x020\u01EC\x03\x02\x02\x022\u01EE\x03\x02\x02\x024\u01FB\x03" +
		"\x02\x02\x026\u0208\x03\x02\x02\x028\u0213\x03\x02\x02\x02:>\x05\b\x05" +
		"\x02;>\x05\x06\x04\x02<>\x07E\x02\x02=:\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02=<\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02" +
		"\x02@F\x03\x02\x02\x02A?\x03\x02\x02\x02BE\x05\x04\x03\x02CE\x07E\x02" +
		"\x02DB\x03\x02\x02\x02DC\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02" +
		"\x02FG\x03\x02\x02\x02G\x03\x03\x02\x02\x02HF\x03\x02\x02\x02IL\x05\x12" +
		"\n\x02JL\x05\x10\t\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02L\x05\x03\x02" +
		"\x02\x02MN\x07\x18\x02\x02NO\x05\n\x06\x02O\x07\x03\x02\x02\x02PQ\x07" +
		"\x19\x02\x02Q]\x05\n\x06\x02RS\x07\f\x02\x02S^\x07D\x02\x02TU\x07\'\x02" +
		"\x02UZ\x05\x0E\b\x02VW\x07&\x02\x02WY\x05\x0E\b\x02XV\x03\x02\x02\x02" +
		"Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[^\x03\x02\x02" +
		"\x02\\Z\x03\x02\x02\x02]R\x03\x02\x02\x02]T\x03\x02\x02\x02]^\x03\x02" +
		"\x02\x02^\t\x03\x02\x02\x02_a\x07\x1F\x02\x02`_\x03\x02\x02\x02ad\x03" +
		"\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03" +
		"\x02\x02\x02ej\x05\f\x07\x02fg\x07\x1F\x02\x02gi\x05\f\x07\x02hf\x03\x02" +
		"\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\v\x03" +
		"\x02\x02\x02lj\x03\x02\x02\x02mo\x07\x1E\x02\x02nm\x03\x02\x02\x02no\x03" +
		"\x02\x02\x02op\x03\x02\x02\x02pq\x07D\x02\x02q\r\x03\x02\x02\x02ru\x07" +
		"C\x02\x02st\x07\f\x02\x02tv\x07C\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02" +
		"\x02v\x0F\x03\x02\x02\x02wy\x07\x12\x02\x02xz\x05 \x11\x02yx\x03\x02\x02" +
		"\x02yz\x03\x02\x02\x02z|\x03\x02\x02\x02{}\x058\x1D\x02|{\x03\x02\x02" +
		"\x02|}\x03\x02\x02\x02}\x11\x03\x02\x02\x02~\x80\x07C\x02\x02\x7F\x81" +
		"\x056\x1C\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83" +
		"\x03\x02\x02\x02\x82\x84\x05*\x16\x02\x83\x82\x03\x02\x02\x02\x83\x84" +
		"\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85\x86\x07\v\x02\x02\x86\x88" +
		"\x05\"\x12\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x97" +
		"\x03\x02\x02\x02\x89\x8B\x07\'\x02\x02\x8A\x8C\x07E\x02\x02\x8B\x8A\x03" +
		"\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03" +
		"\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x92\x07\x03\x02\x02\x90\x93\x05" +
		"\x14\v\x02\x91\x93\x07E\x02\x02\x92\x90\x03\x02\x02\x02\x92\x91\x03\x02" +
		"\x02\x02\x93\x94\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02" +
		"\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x07\x04\x02\x02\x97\x89\x03\x02" +
		"\x02\x02\x97\x98\x03\x02\x02\x02\x98\x13\x03\x02\x02\x02\x99\x9A\x05\x18" +
		"\r\x02\x9A\x15\x03\x02\x02\x02\x9B\xA2\x07\x10\x02\x02\x9C\x9F\x07D\x02" +
		"\x02\x9D\x9E\x07&\x02\x02\x9E\xA0\x07D\x02\x02\x9F\x9D\x03\x02\x02\x02" +
		"\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x07\x0F\x02\x02" +
		"\xA2\x9C\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02" +
		"\xA4\xA5\x05 \x11\x02\xA5\xA6\x058\x1D\x02\xA6\xCB\x03\x02\x02\x02\xA7" +
		"\xA8\x07\x15\x02\x02\xA8\xA9\x05 \x11\x02\xA9\xAA\x058\x1D\x02\xAA\xCB" +
		"\x03\x02\x02\x02\xAB\xAC\x07\r\x02\x02\xAC\xAD\x058\x1D\x02\xAD\xAE\x07" +
		"\x15\x02\x02\xAE\xAF\x05 \x11\x02\xAF\xCB\x03\x02\x02\x02\xB0\xB1\x07" +
		"\x0E\x02\x02\xB1\xB2\x05 \x11\x02\xB2\xB5\x058\x1D\x02\xB3\xB4\x07\x11" +
		"\x02\x02\xB4\xB6\x058\x1D\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02" +
		"\x02\x02\xB6\xCB\x03\x02\x02\x02\xB7\xCB\x07\x13\x02\x02\xB8\xBA\x07\x1B" +
		"\x02\x02\xB9\xBB\x05 \x11\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02" +
		"\x02\x02\xBB\xCB\x03\x02\x02\x02\xBC\xBD\x07\x16\x02\x02\xBD\xBF\x05 " +
		"\x11\x02\xBE\xC0\x07E\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02" +
		"\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\xC4\x07\x17\x02\x02\xC4\xC5\x05 \x11\x02\xC5\xCB\x03\x02" +
		"\x02\x02\xC6\xCB\x07B\x02\x02\xC7\xCB\x05 \x11\x02\xC8\xCB\x05\x18\r\x02" +
		"\xC9\xCB\x05\x1E\x10\x02\xCA\x9B\x03\x02\x02\x02\xCA\xA7\x03\x02\x02\x02" +
		"\xCA\xAB\x03\x02\x02\x02\xCA\xB0\x03\x02\x02\x02\xCA\xB7\x03\x02\x02\x02" +
		"\xCA\xB8\x03\x02\x02\x02\xCA\xBC\x03\x02\x02\x02\xCA\xC6\x03\x02\x02\x02" +
		"\xCA\xC7\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xC9\x03\x02\x02\x02" +
		"\xCB\x17\x03\x02\x02\x02\xCC\xCE\x05\x1C\x0F\x02\xCD\xCC\x03\x02\x02\x02" +
		"\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02" +
		"\xD0\xD2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xE0\x05\x1A\x0E\x02" +
		"\xD3\xD5\x05\"\x12\x02\xD4\xD6\x058\x1D\x02\xD5\xD4\x03\x02\x02\x02\xD5" +
		"\xD6\x03\x02\x02\x02\xD6\xE1\x03\x02\x02\x02\xD7\xD9\x05\"\x12\x02\xD8" +
		"\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xE1\x058\x1D\x02\xDB\xDD\x05\"\x12\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD" +
		"\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x07.\x02\x02\xDF\xE1" +
		"\x05 \x11\x02\xE0\xD3\x03\x02\x02\x02\xE0\xD8\x03\x02\x02\x02\xE0\xDC" +
		"\x03\x02\x02\x02\xE1\x19\x03\x02\x02\x02\xE2\xE6\x07D\x02\x02\xE3\xE6" +
		"\x05&\x14\x02\xE4\xE6\x071\x02\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE3\x03" +
		"\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\x1B\x03\x02\x02\x02\xE7\xE8\t" +
		"\x02\x02\x02\xE8\x1D\x03\x02\x02\x02\xE9\xEA\x07D\x02\x02\xEA\xEB\x07" +
		".\x02\x02\xEB\u0116\x05 \x11\x02\xEC\xED\x07\x05\x02\x02\xED\xF2\x07D" +
		"\x02\x02\xEE\xEF\x07&\x02\x02\xEF\xF1\x07D\x02\x02\xF0\xEE\x03\x02\x02" +
		"\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02" +
		"\x02\xF3\xF5\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF6\x07\x06\x02" +
		"\x02\xF6\xF7\x07.\x02\x02\xF7\u0116\x05 \x11\x02\xF8\xF9\x07\t\x02\x02" +
		"\xF9\xFE\x07D\x02\x02\xFA\xFB\x07&\x02\x02\xFB\xFD\x07D\x02\x02\xFC\xFA" +
		"\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE" +
		"\xFF\x03\x02\x02\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
		"\u0101\u0102\x07\n\x02\x02\u0102\u0103\x07.\x02\x02\u0103\u0116\x05 \x11" +
		"\x02\u0104\u0105\x071\x02\x02\u0105\u0106\x07D\x02\x02\u0106\u0107\x07" +
		".\x02\x02\u0107\u0116\x05 \x11\x02\u0108\u0109\x05 \x11\x02\u0109\u010A" +
		"\x07\x1F\x02\x02\u010A\u010B\x07D\x02\x02\u010B\u010C\x07.\x02\x02\u010C" +
		"\u010D\x05 \x11\x02\u010D\u0116\x03\x02\x02\x02\u010E\u010F\x05 \x11\x02" +
		"\u010F\u0110\x07\x05\x02\x02\u0110\u0111\x05 \x11\x02\u0111\u0112\x07" +
		"\x06\x02\x02\u0112\u0113\x07.\x02\x02\u0113\u0114\x05 \x11\x02\u0114\u0116" +
		"\x03\x02\x02\x02\u0115\xE9\x03\x02\x02\x02\u0115\xEC\x03\x02\x02\x02\u0115" +
		"\xF8\x03\x02\x02\x02\u0115\u0104\x03\x02\x02\x02\u0115\u0108\x03\x02\x02" +
		"\x02\u0115\u010E\x03\x02\x02\x02\u0116\x1F\x03\x02\x02\x02\u0117\u0118" +
		"\b\x11\x01\x02\u0118\u013C\x07D\x02\x02\u0119\u013C\x071\x02\x02\u011A" +
		"\u011B\x071\x02\x02\u011B\u013C\x07D\x02\x02\u011C\u011E\x07C\x02\x02" +
		"\u011D\u011F\x054\x1B\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03" +
		"\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u013C\x052\x1A\x02\u0121" +
		"\u013C\x05$\x13\x02\u0122\u0123\x07\x07\x02\x02\u0123\u0124\x05 \x11\x02" +
		"\u0124\u0125\x07\b\x02\x02\u0125\u013C\x03\x02\x02\x02\u0126\u012F\x07" +
		"\x05\x02\x02\u0127\u012C\x05 \x11\x02\u0128\u0129\x07&\x02\x02\u0129\u012B" +
		"\x05 \x11\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02" +
		"\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0130\x03" +
		"\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0127\x03\x02\x02\x02\u012F" +
		"\u0130\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u013C\x07\x06" +
		"\x02\x02\u0132\u0133\t\x03\x02\x02\u0133\u013C\x05 \x11\x0E\u0134\u0138" +
		"\x07;\x02\x02\u0135\u0136\x05.\x18\x02\u0136\u0137\x07\'\x02\x02\u0137" +
		"\u0139\x03\x02\x02\x02\u0138\u0135\x03\x02\x02\x02\u0138\u0139\x03\x02" +
		"\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x05 \x11\x03\u013B\u0117" +
		"\x03\x02\x02\x02\u013B\u0119\x03\x02\x02\x02\u013B\u011A\x03\x02\x02\x02" +
		"\u013B\u011C\x03\x02\x02\x02\u013B\u0121\x03\x02\x02\x02\u013B\u0122\x03" +
		"\x02\x02\x02\u013B\u0126\x03\x02\x02\x02\u013B\u0132\x03\x02\x02\x02\u013B" +
		"\u0134\x03\x02\x02\x02\u013C\u016C\x03\x02\x02\x02\u013D\u013E\f\r\x02" +
		"\x02\u013E\u013F\x07,\x02\x02\u013F\u016B\x05 \x11\x0E\u0140\u0141\f\f" +
		"\x02\x02\u0141\u0142\t\x04\x02\x02\u0142\u016B\x05 \x11\r\u0143\u0144" +
		"\f\v\x02\x02\u0144\u0145\t\x05\x02\x02\u0145\u016B\x05 \x11\f\u0146\u0147" +
		"\f\n\x02\x02\u0147\u0148\x07 \x02\x02\u0148\u016B\x05 \x11\v\u0149\u014A" +
		"\f\t\x02\x02\u014A\u014B\x073\x02\x02\u014B\u016B\x05 \x11\n\u014C\u014D" +
		"\f\b\x02\x02\u014D\u014E\t\x06\x02\x02\u014E\u016B\x05 \x11\t\u014F\u0150" +
		"\f\x07\x02\x02\u0150\u0151\t\x07\x02\x02\u0151\u016B\x05 \x11\b\u0152" +
		"\u0153\f\x06\x02\x02\u0153\u0154\x077\x02\x02\u0154\u016B\x05 \x11\x07" +
		"\u0155\u0156\f\x05\x02\x02\u0156\u0157\x078\x02\x02\u0157\u016B\x05 \x11" +
		"\x06\u0158\u0159\f\x04\x02\x02\u0159\u015A\x07#\x02\x02\u015A\u015B\x07" +
		"D\x02\x02\u015B\u015C\x07\'\x02\x02\u015C\u016B\x05 \x11\x05\u015D\u015F" +
		"\f\x13\x02\x02\u015E\u0160\x054\x1B\x02\u015F\u015E\x03\x02\x02\x02\u015F" +
		"\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u016B\x052\x1A" +
		"\x02\u0162\u0163\f\x12\x02\x02\u0163\u0164\x07\x05\x02\x02\u0164\u0165" +
		"\x05 \x11\x02\u0165\u0166\x07\x06\x02\x02\u0166\u016B\x03\x02\x02\x02" +
		"\u0167\u0168\f\x0F\x02\x02\u0168\u0169\t\b\x02\x02\u0169\u016B\x07D\x02" +
		"\x02\u016A\u013D\x03\x02\x02\x02\u016A\u0140\x03\x02\x02\x02\u016A\u0143" +
		"\x03\x02\x02\x02\u016A\u0146\x03\x02\x02\x02\u016A\u0149\x03\x02\x02\x02" +
		"\u016A\u014C\x03\x02\x02\x02\u016A\u014F\x03\x02\x02\x02\u016A\u0152\x03" +
		"\x02\x02\x02\u016A\u0155\x03\x02\x02\x02\u016A\u0158\x03\x02\x02\x02\u016A" +
		"\u015D\x03\x02\x02\x02\u016A\u0162\x03\x02\x02\x02\u016A\u0167\x03\x02" +
		"\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C" +
		"\u016D\x03\x02\x02\x02\u016D!\x03\x02\x02\x02\u016E\u016C\x03\x02\x02" +
		"\x02\u016F\u0170\b\x12\x01\x02\u0170\u0172\x07C\x02\x02\u0171\u0173\x05" +
		"4\x1B\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173" +
		"\u01A4\x03\x02\x02\x02\u0174\u01A4\x05$\x13\x02\u0175\u0176\x07\x07\x02" +
		"\x02\u0176\u0177\x05\"\x12\x02\u0177\u0178\x076\x02\x02\u0178\u0179\x05" +
		"\"\x12\x02\u0179\u017A\x07\b\x02\x02\u017A\u01A4\x03\x02\x02\x02\u017B" +
		"\u017C\x07\x07\x02\x02\u017C\u017D\x05\"\x12\x02\u017D\u017E\x07#\x02" +
		"\x02\u017E\u017F\x05\"\x12\x02\u017F\u0180\x07\b\x02\x02\u0180\u01A4\x03" +
		"\x02\x02\x02\u0181\u0183\x056\x1C\x02\u0182\u0181\x03\x02\x02\x02\u0182" +
		"\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0186\x05*\x16" +
		"\x02\u0185\u0187\x05\"\x12\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187" +
		"\x03\x02\x02\x02\u0187\u01A4\x03\x02\x02\x02\u0188\u018A\x07\x07\x02\x02" +
		"\u0189\u018B\x056\x1C\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03" +
		"\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018E\x05*\x16\x02\u018D" +
		"\u018F\x05\"\x12\x02\u018E\u018D\x03\x02\x02\x02\u018E\u018F\x03\x02\x02" +
		"\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x07\b\x02\x02\u0191\u01A4" +
		"\x03\x02\x02\x02\u0192\u0194\x056\x1C\x02\u0193\u0192\x03\x02\x02\x02" +
		"\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0197\x05" +
		",\x17\x02\u0196\u0198\x05\"\x12\x02\u0197\u0196\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u01A4\x03\x02\x02\x02\u0199\u019B\x07\x07" +
		"\x02\x02\u019A\u019C\x056\x1C\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C" +
		"\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019F\x05,\x17\x02" +
		"\u019E\u01A0\x05\"\x12\x02\u019F\u019E\x03\x02\x02\x02\u019F\u01A0\x03" +
		"\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x07\b\x02\x02\u01A2" +
		"\u01A4\x03\x02\x02\x02\u01A3\u016F\x03\x02\x02\x02\u01A3\u0174\x03\x02" +
		"\x02\x02\u01A3\u0175\x03\x02\x02\x02\u01A3\u017B\x03\x02\x02\x02\u01A3" +
		"\u0182\x03\x02\x02\x02\u01A3\u0188\x03\x02\x02\x02\u01A3\u0193\x03\x02" +
		"\x02\x02\u01A3\u0199\x03\x02\x02\x02\u01A4\u01B5\x03\x02\x02\x02\u01A5" +
		"\u01A6\f\n\x02\x02\u01A6\u01A7\x076\x02\x02\u01A7\u01B4\x05\"\x12\v\u01A8" +
		"\u01A9\f\b\x02\x02\u01A9\u01AA\x07#\x02\x02\u01AA\u01B4\x05\"\x12\t\u01AB" +
		"\u01AC\f\f\x02\x02\u01AC\u01B4\x073\x02\x02\u01AD\u01AE\f\v\x02\x02\u01AE" +
		"\u01B0\x07\x05\x02\x02\u01AF\u01B1\x07>\x02\x02\u01B0\u01AF\x03\x02\x02" +
		"\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B4" +
		"\x07\x06\x02\x02\u01B3\u01A5\x03\x02\x02\x02\u01B3\u01A8\x03\x02\x02\x02" +
		"\u01B3\u01AB\x03\x02\x02\x02\u01B3\u01AD\x03\x02\x02\x02\u01B4\u01B7\x03" +
		"\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
		"#\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01BF\x07<\x02\x02" +
		"\u01B9\u01BF\x07?\x02\x02\u01BA\u01BF\x07>\x02\x02\u01BB\u01BF\x07=\x02" +
		"\x02\u01BC\u01BF\x07@\x02\x02\u01BD\u01BF\x07A\x02\x02\u01BE\u01B8\x03" +
		"\x02\x02\x02\u01BE\u01B9\x03\x02\x02\x02\u01BE\u01BA\x03\x02\x02\x02\u01BE" +
		"\u01BB\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BD\x03\x02" +
		"\x02\x02\u01BF%\x03\x02\x02\x02\u01C0\u01C1\t\t\x02\x02\u01C1\'\x03\x02" +
		"\x02\x02\u01C2\u01C4\x07D\x02\x02\u01C3\u01C5\x05\"\x12\x02\u01C4\u01C3" +
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02" +
		"\u01C6\u01C7\x07\"\x02\x02\u01C7\u01C9\x07C\x02\x02\u01C8\u01C6\x03\x02" +
		"\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9)\x03\x02\x02\x02\u01CA\u01D3" +
		"\x07\x07\x02\x02\u01CB\u01D0\x05(\x15\x02\u01CC\u01CD\x07&\x02\x02\u01CD" +
		"\u01CF\x05(\x15\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02" +
		"\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D4" +
		"\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01CB\x03\x02\x02\x02" +
		"\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x07" +
		"\b\x02\x02\u01D6+\x03\x02\x02\x02\u01D7\u01E0\x07\x05\x02\x02\u01D8\u01DD" +
		"\x05(\x15\x02\u01D9\u01DA\x07&\x02\x02\u01DA\u01DC\x05(\x15\x02\u01DB" +
		"\u01D9\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
		"\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF" +
		"\u01DD\x03\x02\x02\x02\u01E0\u01D8\x03\x02\x02\x02\u01E0\u01E1\x03\x02" +
		"\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x07\x06\x02\x02\u01E3" +
		"-\x03\x02\x02\x02\u01E4\u01E9\x05(\x15\x02\u01E5\u01E6\x07&\x02\x02\u01E6" +
		"\u01E8\x05(\x15\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02" +
		"\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA/\x03" +
		"\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC\u01ED\x05 \x11\x02\u01ED" +
		"1\x03\x02\x02\x02\u01EE\u01F7\x07\x07\x02\x02\u01EF\u01F4\x050\x19\x02" +
		"\u01F0\u01F1\x07&\x02\x02\u01F1\u01F3\x050\x19\x02\u01F2\u01F0\x03\x02" +
		"\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4" +
		"\u01F5\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02" +
		"\x02\x02\u01F7\u01EF\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
		"\u01F9\x03\x02\x02\x02\u01F9\u01FA\x07\b\x02\x02\u01FA3\x03\x02\x02\x02" +
		"\u01FB\u0204\x07$\x02\x02\u01FC\u0201\x05\"\x12\x02\u01FD\u01FE\x07&\x02" +
		"\x02\u01FE\u0200\x05\"\x12\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0203" +
		"\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02" +
		"\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0204\u01FC\x03" +
		"\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206" +
		"\u0207\x07(\x02\x02\u02075\x03\x02\x02\x02\u0208\u0209\x07$\x02\x02\u0209" +
		"\u020E\x07C\x02\x02\u020A\u020B\x07&\x02\x02\u020B\u020D\x07C\x02\x02" +
		"\u020C\u020A\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03" +
		"\x02\x02\x02\u020E";
	private static readonly _serializedATNSegment1: string =
		"\u020F\x03\x02\x02\x02\u020F\u0211\x03\x02\x02\x02\u0210\u020E\x03\x02" +
		"\x02\x02\u0211\u0212\x07(\x02\x02\u02127\x03\x02\x02\x02\u0213\u0222\x07" +
		"\'\x02\x02\u0214\u0223\x05\x16\f\x02\u0215\u0217\x07E\x02\x02\u0216\u0215" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02" +
		"\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021D\x07" +
		"\x03\x02\x02\u021B\u021E\x05\x16\f\x02\u021C\u021E\x07E\x02\x02\u021D" +
		"\u021B\x03\x02\x02\x02\u021D\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02" +
		"\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220" +
		"\u0221\x03\x02\x02\x02\u0221\u0223\x07\x04\x02\x02\u0222\u0214\x03\x02" +
		"\x02\x02\u0222\u0216\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223" +
		"9\x03\x02\x02\x02K=?DFKZ]bjnuy|\x80\x83\x87\x8D\x92\x94\x97\x9F\xA2\xB5" +
		"\xBA\xC1\xCA\xCF\xD5\xD8\xDC\xE0\xE5\xF2\xFE\u0115\u011E\u012C\u012F\u0138" +
		"\u013B\u015F\u016A\u016C\u0172\u0182\u0186\u018A\u018E\u0193\u0197\u019B" +
		"\u019F\u01A3\u01B0\u01B3\u01B5\u01BE\u01C4\u01C8\u01D0\u01D3\u01DD\u01E0" +
		"\u01E9\u01F4\u01F7\u0201\u0204\u020E\u0218\u021D\u021F\u0222";
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
	public functionParameters(): FunctionParametersContext | undefined {
		return this.tryGetRuleContext(0, FunctionParametersContext);
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
export class AttributeClassMemberContext extends ClassMemberContext {
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
	constructor(ctx: ClassMemberContext) {
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
	public attributeName(): AttributeNameContext {
		return this.getRuleContext(0, AttributeNameContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attribute; }
}


export class AttributeNameContext extends ParserRuleContext {
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOLLAR, 0); }
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
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
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
	public COALESCING(): TerminalNode | undefined { return this.tryGetToken(XonParser.COALESCING, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOT, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
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
	public lambdaParameters(): LambdaParametersContext | undefined {
		return this.tryGetRuleContext(0, LambdaParametersContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
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
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
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
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
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
export class IndexTypeContext extends TypeContext {
	public indexParameters(): IndexParametersContext {
		return this.getRuleContext(0, IndexParametersContext);
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
export class IndexParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public indexParameters(): IndexParametersContext {
		return this.getRuleContext(0, IndexParametersContext);
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


export class FunctionParametersContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_functionParameters; }
}


export class IndexParametersContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_indexParameters; }
}


export class LambdaParametersContext extends ParserRuleContext {
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


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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


