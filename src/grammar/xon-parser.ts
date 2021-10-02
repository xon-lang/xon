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
	public static readonly IF = 11;
	public static readonly IN = 12;
	public static readonly OR = 13;
	public static readonly FOR = 14;
	public static readonly NOT = 15;
	public static readonly AND = 16;
	public static readonly ELSE = 17;
	public static readonly INIT = 18;
	public static readonly LOOP = 19;
	public static readonly TEST = 20;
	public static readonly BREAK = 21;
	public static readonly INFIX = 22;
	public static readonly WHILE = 23;
	public static readonly ACTUAL = 24;
	public static readonly EXPECT = 25;
	public static readonly EXPORT = 26;
	public static readonly IMPORT = 27;
	public static readonly PREFIX = 28;
	public static readonly RETURN = 29;
	public static readonly POSTFIX = 30;
	public static readonly CLASS = 31;
	public static readonly LITERAL = 32;
	public static readonly INTERFACE = 33;
	public static readonly AT = 34;
	public static readonly DOT = 35;
	public static readonly PLUS = 36;
	public static readonly HASH = 37;
	public static readonly PIPE = 38;
	public static readonly LESS = 39;
	public static readonly COMMA = 40;
	public static readonly COLON = 41;
	public static readonly GREAT = 42;
	public static readonly MINUS = 43;
	public static readonly SLASH = 44;
	public static readonly CARET = 45;
	public static readonly TILDE = 46;
	public static readonly EQUAL = 47;
	public static readonly DOLLAR = 48;
	public static readonly MODULO = 49;
	public static readonly QUESTION = 50;
	public static readonly ASTERISK = 51;
	public static readonly AMPERSAND = 52;
	public static readonly UNDERSCORE = 53;
	public static readonly EXCLAMATION = 54;
	public static readonly BACK_SLASH = 55;
	public static readonly NULL_LITERAL = 56;
	public static readonly FLOAT_LITERAL = 57;
	public static readonly INTEGER_LITERAL = 58;
	public static readonly BOOLEAN_LITERAL = 59;
	public static readonly CHAR_LITERAL = 60;
	public static readonly STRING_LITERAL = 61;
	public static readonly PREPROCESSOR = 62;
	public static readonly ID = 63;
	public static readonly NL = 64;
	public static readonly WS = 65;
	public static readonly COMMENT = 66;
	public static readonly RULE_listing = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryPath = 2;
	public static readonly RULE_libraryMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_testFunction = 6;
	public static readonly RULE_function = 7;
	public static readonly RULE_extensionMethod = 8;
	public static readonly RULE_statement = 9;
	public static readonly RULE_assignment = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_literal = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_operator = 14;
	public static readonly RULE_id = 15;
	public static readonly RULE_parameter = 16;
	public static readonly RULE_parameters = 17;
	public static readonly RULE_argument = 18;
	public static readonly RULE_arguments = 19;
	public static readonly RULE_typeParameters = 20;
	public static readonly RULE_genericArguments = 21;
	public static readonly RULE_genericParameters = 22;
	public static readonly RULE_body = 23;
	public static readonly RULE_functionBody = 24;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"listing", "library", "libraryPath", "libraryMember", "definition", "member", 
		"testFunction", "function", "extensionMethod", "statement", "assignment", 
		"expression", "literal", "type", "operator", "id", "parameter", "parameters", 
		"argument", "arguments", "typeParameters", "genericArguments", "genericParameters", 
		"body", "functionBody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'if'", "'in'", "'or'", "'for'", "'not'", "'and'", "'else'", 
		"'init'", "'loop'", "'test'", "'break'", "'infix'", "'while'", "'actual'", 
		"'expect'", "'export'", "'import'", "'prefix'", "'return'", "'postfix'", 
		"'class'", "'literal'", "'interface'", "'@'", "'.'", "'+'", "'#'", "'|'", 
		"'<'", "','", "':'", "'>'", "'-'", "'/'", "'^'", "'~'", "'='", "'$'", 
		"'%'", "'?'", "'*'", "'&'", "'_'", "'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "IF", "IN", "OR", 
		"FOR", "NOT", "AND", "ELSE", "INIT", "LOOP", "TEST", "BREAK", "INFIX", 
		"WHILE", "ACTUAL", "EXPECT", "EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", 
		"CLASS", "LITERAL", "INTERFACE", "AT", "DOT", "PLUS", "HASH", "PIPE", 
		"LESS", "COMMA", "COLON", "GREAT", "MINUS", "SLASH", "CARET", "TILDE", 
		"EQUAL", "DOLLAR", "MODULO", "QUESTION", "ASTERISK", "AMPERSAND", "UNDERSCORE", 
		"EXCLAMATION", "BACK_SLASH", "NULL_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"BOOLEAN_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", 
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
	public listing(): ListingContext {
		let _localctx: ListingContext = new ListingContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_listing);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 52;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 50;
						this.library();
						}
						break;
					case XonParser.NL:
						{
						this.state = 51;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.EXPORT - 3)) | (1 << (XonParser.IMPORT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.LITERAL - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.DOT - 35)) | (1 << (XonParser.PLUS - 35)) | (1 << (XonParser.PIPE - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.MINUS - 35)) | (1 << (XonParser.SLASH - 35)) | (1 << (XonParser.CARET - 35)) | (1 << (XonParser.TILDE - 35)) | (1 << (XonParser.EQUAL - 35)) | (1 << (XonParser.DOLLAR - 35)) | (1 << (XonParser.MODULO - 35)) | (1 << (XonParser.ASTERISK - 35)) | (1 << (XonParser.AMPERSAND - 35)) | (1 << (XonParser.EXCLAMATION - 35)) | (1 << (XonParser.BACK_SLASH - 35)) | (1 << (XonParser.NULL_LITERAL - 35)) | (1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.BOOLEAN_LITERAL - 35)) | (1 << (XonParser.CHAR_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.NL - 35)))) !== 0)) {
				{
				this.state = 61;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 57;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 58;
					this.function();
					}
					break;

				case 3:
					{
					this.state = 59;
					this.statement();
					}
					break;

				case 4:
					{
					this.state = 60;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 65;
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
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(XonParser.IMPORT);
			this.state = 67;
			this.libraryPath();
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 68;
				this.match(XonParser.COLON);
				this.state = 69;
				this.libraryMember();
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 70;
					this.match(XonParser.COMMA);
					this.state = 71;
					this.libraryMember();
					}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 79;
				this.match(XonParser.DOT);
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this.id();
			this.state = 90;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 86;
					this.match(XonParser.DOT);
					this.state = 87;
					this.id();
					}
					}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
		this.enterRule(_localctx, 6, XonParser.RULE_libraryMember);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 93;
				this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.match(XonParser.AS);
				this.state = 96;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 95;
					this.id();
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.id();
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 101;
				this.genericParameters();
				}
			}

			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 104;
				this.parameters();
				}
			}

			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 107;
				this.match(XonParser.IS);
				this.state = 108;
				this.type(0);
				}
			}

			this.state = 111;
			this.match(XonParser.NL);
			this.state = 112;
			this.match(XonParser.INDENT);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 115;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.IS:
				case XonParser.AS:
				case XonParser.IF:
				case XonParser.IN:
				case XonParser.OR:
				case XonParser.FOR:
				case XonParser.NOT:
				case XonParser.AND:
				case XonParser.ELSE:
				case XonParser.INIT:
				case XonParser.LOOP:
				case XonParser.BREAK:
				case XonParser.INFIX:
				case XonParser.WHILE:
				case XonParser.ACTUAL:
				case XonParser.EXPECT:
				case XonParser.EXPORT:
				case XonParser.IMPORT:
				case XonParser.PREFIX:
				case XonParser.RETURN:
				case XonParser.POSTFIX:
				case XonParser.CLASS:
				case XonParser.LITERAL:
				case XonParser.INTERFACE:
				case XonParser.ID:
					{
					this.state = 113;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 114;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XonParser.IS - 9)) | (1 << (XonParser.AS - 9)) | (1 << (XonParser.IF - 9)) | (1 << (XonParser.IN - 9)) | (1 << (XonParser.OR - 9)) | (1 << (XonParser.FOR - 9)) | (1 << (XonParser.NOT - 9)) | (1 << (XonParser.AND - 9)) | (1 << (XonParser.ELSE - 9)) | (1 << (XonParser.INIT - 9)) | (1 << (XonParser.LOOP - 9)) | (1 << (XonParser.BREAK - 9)) | (1 << (XonParser.INFIX - 9)) | (1 << (XonParser.WHILE - 9)) | (1 << (XonParser.ACTUAL - 9)) | (1 << (XonParser.EXPECT - 9)) | (1 << (XonParser.EXPORT - 9)) | (1 << (XonParser.IMPORT - 9)) | (1 << (XonParser.PREFIX - 9)) | (1 << (XonParser.RETURN - 9)) | (1 << (XonParser.POSTFIX - 9)) | (1 << (XonParser.CLASS - 9)) | (1 << (XonParser.LITERAL - 9)) | (1 << (XonParser.INTERFACE - 9)))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
			this.state = 119;
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
		this.enterRule(_localctx, 10, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.id();
				this.state = 123;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 122;
					this.type(0);
					}
					break;
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.EQUAL) {
					{
					this.state = 125;
					this.match(XonParser.EQUAL);
					this.state = 126;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new HierarchyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.id();
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 130;
					this.type(0);
					}
				}

				this.state = 133;
				this.match(XonParser.NL);
				this.state = 134;
				this.match(XonParser.INDENT);
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 137;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.IS:
					case XonParser.AS:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.OR:
					case XonParser.FOR:
					case XonParser.NOT:
					case XonParser.AND:
					case XonParser.ELSE:
					case XonParser.INIT:
					case XonParser.LOOP:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.EXPORT:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.CLASS:
					case XonParser.LITERAL:
					case XonParser.INTERFACE:
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
						this.state = 135;
						this.assignment();
						}
						break;
					case XonParser.NL:
						{
						this.state = 136;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.EXPORT - 3)) | (1 << (XonParser.IMPORT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.LITERAL - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.DOT - 35)) | (1 << (XonParser.PLUS - 35)) | (1 << (XonParser.PIPE - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.MINUS - 35)) | (1 << (XonParser.SLASH - 35)) | (1 << (XonParser.CARET - 35)) | (1 << (XonParser.TILDE - 35)) | (1 << (XonParser.EQUAL - 35)) | (1 << (XonParser.DOLLAR - 35)) | (1 << (XonParser.MODULO - 35)) | (1 << (XonParser.ASTERISK - 35)) | (1 << (XonParser.AMPERSAND - 35)) | (1 << (XonParser.EXCLAMATION - 35)) | (1 << (XonParser.BACK_SLASH - 35)) | (1 << (XonParser.NULL_LITERAL - 35)) | (1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.BOOLEAN_LITERAL - 35)) | (1 << (XonParser.CHAR_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
				this.state = 141;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
				this.match(XonParser.INIT);
				this.state = 144;
				this.body();
				}
				break;

			case 4:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 145;
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
				this.state = 146;
				this.operator();
				this.state = 147;
				this.parameters();
				this.state = 149;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 148;
					this.type(0);
					}
					break;
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 151;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 154;
				this.id();
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 155;
					this.genericParameters();
					}
				}

				this.state = 158;
				this.parameters();
				this.state = 160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 159;
					this.type(0);
					}
					break;
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 162;
					this.body();
					}
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
	public testFunction(): TestFunctionContext {
		let _localctx: TestFunctionContext = new TestFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_testFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(XonParser.TEST);
			this.state = 168;
			this.expression(0);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 169;
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
		this.enterRule(_localctx, 14, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.id();
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 173;
				this.genericParameters();
				}
			}

			this.state = 176;
			this.parameters();
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 177;
				_localctx._result = this.type(0);
				}
				break;
			}
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 180;
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
	public extensionMethod(): ExtensionMethodContext {
		let _localctx: ExtensionMethodContext = new ExtensionMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_extensionMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			_localctx._receiver = this.type(0);
			this.state = 184;
			this.match(XonParser.DOT);
			this.state = 185;
			this.id();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 186;
				this.genericParameters();
				}
			}

			this.state = 189;
			this.parameters();
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
				{
				this.state = 190;
				_localctx._result = this.type(0);
				}
			}

			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 193;
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
		this.enterRule(_localctx, 18, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.match(XonParser.FOR);
				this.state = 204;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 197;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 198;
						this.match(XonParser.COMMA);
						this.state = 199;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 202;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 206;
				this.expression(0);
				this.state = 207;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.match(XonParser.WHILE);
				this.state = 210;
				this.expression(0);
				this.state = 211;
				this.body();
				}
				break;

			case 3:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 213;
				this.match(XonParser.IF);
				this.state = 214;
				this.expression(0);
				this.state = 215;
				this.body();
				this.state = 218;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 216;
					this.match(XonParser.ELSE);
					this.state = 217;
					this.body();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 220;
				this.match(XonParser.BREAK);
				}
				break;

			case 5:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 221;
				this.match(XonParser.RETURN);
				this.state = 223;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 222;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 225;
				this.match(XonParser.ACTUAL);
				this.state = 226;
				this.match(XonParser.COLON);
				this.state = 227;
				this.expression(0);
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 228;
					this.match(XonParser.NL);
					}
					}
					this.state = 231;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 233;
				this.match(XonParser.EXPECT);
				this.state = 234;
				this.match(XonParser.COLON);
				this.state = 235;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 237;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 8:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 238;
				this.assignment();
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
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
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.id();
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 243;
					this.type(0);
					}
				}

				this.state = 246;
				this.match(XonParser.EQUAL);
				this.state = 247;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new HierarchyAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.id();
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 250;
					this.type(0);
					}
				}

				this.state = 253;
				this.match(XonParser.NL);
				this.state = 254;
				this.match(XonParser.INDENT);
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 257;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.IS:
					case XonParser.AS:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.OR:
					case XonParser.FOR:
					case XonParser.NOT:
					case XonParser.AND:
					case XonParser.ELSE:
					case XonParser.INIT:
					case XonParser.LOOP:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.EXPORT:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.CLASS:
					case XonParser.LITERAL:
					case XonParser.INTERFACE:
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
						this.state = 255;
						this.assignment();
						}
						break;
					case XonParser.NL:
						{
						this.state = 256;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.EXPORT - 3)) | (1 << (XonParser.IMPORT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.LITERAL - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.DOT - 35)) | (1 << (XonParser.PLUS - 35)) | (1 << (XonParser.PIPE - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.MINUS - 35)) | (1 << (XonParser.SLASH - 35)) | (1 << (XonParser.CARET - 35)) | (1 << (XonParser.TILDE - 35)) | (1 << (XonParser.EQUAL - 35)) | (1 << (XonParser.DOLLAR - 35)) | (1 << (XonParser.MODULO - 35)) | (1 << (XonParser.ASTERISK - 35)) | (1 << (XonParser.AMPERSAND - 35)) | (1 << (XonParser.EXCLAMATION - 35)) | (1 << (XonParser.BACK_SLASH - 35)) | (1 << (XonParser.NULL_LITERAL - 35)) | (1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.BOOLEAN_LITERAL - 35)) | (1 << (XonParser.CHAR_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
				this.state = 261;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 263;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 264;
				this.id();
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 265;
					this.match(XonParser.COMMA);
					this.state = 266;
					this.id();
					}
					}
					this.state = 271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 272;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 273;
				this.match(XonParser.EQUAL);
				this.state = 274;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 276;
				this.match(XonParser.OPEN_BRACE);
				this.state = 277;
				this.id();
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 278;
					this.match(XonParser.COMMA);
					this.state = 279;
					this.id();
					}
					}
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 285;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 286;
				this.match(XonParser.EQUAL);
				this.state = 287;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 289;
				this.match(XonParser.DOLLAR);
				this.state = 290;
				this.id();
				this.state = 291;
				this.match(XonParser.EQUAL);
				this.state = 292;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 294;
				this.expression(0);
				this.state = 295;
				this.match(XonParser.DOT);
				this.state = 296;
				this.id();
				this.state = 297;
				this.match(XonParser.EQUAL);
				this.state = 298;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 300;
				this.expression(0);
				this.state = 301;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 302;
				this.expression(0);
				this.state = 303;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 304;
				this.match(XonParser.EQUAL);
				this.state = 305;
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
			this.state = 354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 310;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 311;
				this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 312;
				this.match(XonParser.DOLLAR);
				this.state = 313;
				this.id();
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 321;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 316;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 315;
							this.operator();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 318;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;

				case 2:
					{
					this.state = 320;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 323;
				this.expression(16);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 324;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.DOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 325;
					this.expression(0);
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 326;
						this.match(XonParser.COMMA);
						this.state = 327;
						this.expression(0);
						}
						}
						this.state = 332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 335;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 336;
				this.match(XonParser.OPEN_PAREN);
				this.state = 337;
				this.expression(0);
				this.state = 338;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 8:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 340;
				this.match(XonParser.BACK_SLASH);
				this.state = 351;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 341;
					this.id();
					this.state = 346;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 342;
						this.match(XonParser.COMMA);
						this.state = 343;
						this.id();
						}
						}
						this.state = 348;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 349;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 353;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 434;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 432;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 356;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 358;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QUESTION) {
							{
							this.state = 357;
							this.match(XonParser.QUESTION);
							}
						}

						this.state = 360;
						this.match(XonParser.DOT);
						this.state = 361;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 362;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 363;
						this.match(XonParser.CARET);
						this.state = 364;
						this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 365;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 366;
						_la = this._input.LA(1);
						if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (XonParser.SLASH - 44)) | (1 << (XonParser.MODULO - 44)) | (1 << (XonParser.ASTERISK - 44)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 367;
						this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 368;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 369;
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 370;
						this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 371;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 372;
						this.match(XonParser.DOT);
						this.state = 373;
						this.match(XonParser.DOT);
						this.state = 374;
						this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 376;
						this.match(XonParser.ID);
						this.state = 377;
						this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 379;
						this.match(XonParser.QUESTION);
						this.state = 380;
						this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 382;
						_la = this._input.LA(1);
						if (!(_la === XonParser.LESS || _la === XonParser.GREAT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 384;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
						case 1:
							{
							this.state = 383;
							this.match(XonParser.EQUAL);
							}
							break;
						}
						this.state = 386;
						this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 392;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case XonParser.EQUAL:
							{
							this.state = 388;
							this.match(XonParser.EQUAL);
							this.state = 389;
							this.match(XonParser.EQUAL);
							}
							break;
						case XonParser.EXCLAMATION:
							{
							this.state = 390;
							this.match(XonParser.EXCLAMATION);
							this.state = 391;
							this.match(XonParser.EQUAL);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 394;
						this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 395;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 396;
						this.match(XonParser.AMPERSAND);
						this.state = 398;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
						case 1:
							{
							this.state = 397;
							this.match(XonParser.AMPERSAND);
							}
							break;
						}
						this.state = 400;
						this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 401;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 402;
						this.match(XonParser.PIPE);
						this.state = 404;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
						case 1:
							{
							this.state = 403;
							this.match(XonParser.PIPE);
							}
							break;
						}
						this.state = 406;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 407;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 408;
						this.match(XonParser.PIPE);
						this.state = 409;
						this.id();
						this.state = 410;
						this.match(XonParser.COLON);
						this.state = 411;
						this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 413;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 415;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 414;
							this.genericArguments();
							}
						}

						this.state = 417;
						this.arguments();
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 418;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 419;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 420;
						this.expression(0);
						this.state = 421;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 15:
						{
						_localctx = new PostfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 423;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 430;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
						case 1:
							{
							this.state = 425;
							this._errHandler.sync(this);
							_alt = 1;
							do {
								switch (_alt) {
								case 1:
									{
									{
									this.state = 424;
									this.operator();
									}
									}
									break;
								default:
									throw new NoViableAltException(this);
								}
								this.state = 427;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
							} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
							}
							break;

						case 2:
							{
							this.state = 429;
							this.match(XonParser.ID);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 436;
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
		this.enterRule(_localctx, 24, XonParser.RULE_literal);
		try {
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 437;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 438;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 439;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 440;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 441;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 442;
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 446;
				this.id();
				this.state = 448;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 447;
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
				this.state = 450;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 451;
					this.genericParameters();
					}
				}

				this.state = 454;
				this.typeParameters();
				this.state = 455;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 457;
				this.match(XonParser.OPEN_PAREN);
				this.state = 458;
				this.type(0);
				this.state = 459;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 476;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 474;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 463;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 464;
						this.match(XonParser.AMPERSAND);
						this.state = 465;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 466;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 467;
						this.match(XonParser.PIPE);
						this.state = 468;
						this.type(4);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 469;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 470;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 471;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 472;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 473;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 478;
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
		this.enterRule(_localctx, 28, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.DOT - 35)) | (1 << (XonParser.PLUS - 35)) | (1 << (XonParser.PIPE - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.MINUS - 35)) | (1 << (XonParser.SLASH - 35)) | (1 << (XonParser.CARET - 35)) | (1 << (XonParser.TILDE - 35)) | (1 << (XonParser.EQUAL - 35)) | (1 << (XonParser.MODULO - 35)) | (1 << (XonParser.ASTERISK - 35)) | (1 << (XonParser.AMPERSAND - 35)) | (1 << (XonParser.EXCLAMATION - 35)) | (1 << (XonParser.ID - 35)))) !== 0))) {
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
		this.enterRule(_localctx, 30, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.ID - 32)))) !== 0))) {
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
		this.enterRule(_localctx, 32, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.id();
			this.state = 484;
			this.type(0);
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 485;
				this.match(XonParser.HASH);
				this.state = 486;
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
		this.enterRule(_localctx, 34, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(XonParser.OPEN_PAREN);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
				{
				this.state = 490;
				this.parameter();
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 491;
					this.match(XonParser.COMMA);
					this.state = 492;
					this.parameter();
					}
					}
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 500;
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
		this.enterRule(_localctx, 36, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 502;
				this.id();
				this.state = 503;
				this.match(XonParser.EQUAL);
				}
				break;
			}
			this.state = 507;
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
		this.enterRule(_localctx, 38, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(XonParser.OPEN_PAREN);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.DOT - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.PIPE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.TILDE - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AMPERSAND - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
				{
				this.state = 510;
				this.argument();
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 511;
					this.match(XonParser.COMMA);
					this.state = 512;
					this.argument();
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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(XonParser.OPEN_PAREN);
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.LITERAL - 32)) | (1 << (XonParser.INTERFACE - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
				{
				this.state = 523;
				this.type(0);
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 524;
					this.match(XonParser.COMMA);
					this.state = 525;
					this.type(0);
					}
					}
					this.state = 530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 533;
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
		this.enterRule(_localctx, 42, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.match(XonParser.LESS);
			this.state = 536;
			this.type(0);
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 537;
				this.match(XonParser.COMMA);
				this.state = 538;
				this.type(0);
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
	public genericParameters(): GenericParametersContext {
		let _localctx: GenericParametersContext = new GenericParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(XonParser.LESS);
			this.state = 547;
			this.id();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 548;
				this.match(XonParser.COMMA);
				this.state = 549;
				this.id();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 555;
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
		this.enterRule(_localctx, 46, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 557;
				this.match(XonParser.COLON);
				this.state = 558;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.match(XonParser.COLON);
				this.state = 560;
				this.match(XonParser.NL);
				this.state = 561;
				this.match(XonParser.INDENT);
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 564;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.IS:
					case XonParser.AS:
					case XonParser.IF:
					case XonParser.IN:
					case XonParser.OR:
					case XonParser.FOR:
					case XonParser.NOT:
					case XonParser.AND:
					case XonParser.ELSE:
					case XonParser.INIT:
					case XonParser.LOOP:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.EXPORT:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.CLASS:
					case XonParser.LITERAL:
					case XonParser.INTERFACE:
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
						this.state = 562;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 563;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 566;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.EXPORT - 3)) | (1 << (XonParser.IMPORT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.CLASS - 3)) | (1 << (XonParser.LITERAL - 3)) | (1 << (XonParser.INTERFACE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.DOT - 35)) | (1 << (XonParser.PLUS - 35)) | (1 << (XonParser.PIPE - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.MINUS - 35)) | (1 << (XonParser.SLASH - 35)) | (1 << (XonParser.CARET - 35)) | (1 << (XonParser.TILDE - 35)) | (1 << (XonParser.EQUAL - 35)) | (1 << (XonParser.DOLLAR - 35)) | (1 << (XonParser.MODULO - 35)) | (1 << (XonParser.ASTERISK - 35)) | (1 << (XonParser.AMPERSAND - 35)) | (1 << (XonParser.EXCLAMATION - 35)) | (1 << (XonParser.BACK_SLASH - 35)) | (1 << (XonParser.NULL_LITERAL - 35)) | (1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.BOOLEAN_LITERAL - 35)) | (1 << (XonParser.CHAR_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
				this.state = 568;
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
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, XonParser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				this.body();
				}
				break;
			case XonParser.EQUAL:
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 572;
					this.match(XonParser.NL);
					}
				}

				this.state = 575;
				this.match(XonParser.EQUAL);
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 576;
					this.match(XonParser.NL);
					}
				}

				this.state = 579;
				this.expression(0);
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
		case 11:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 13:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

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
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 19);

		case 13:
			return this.precpred(this._ctx, 18);

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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\u0249\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x07\x027\n\x02" +
		"\f\x02\x0E\x02:\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02@\n\x02\f" +
		"\x02\x0E\x02C\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03K\n\x03\f\x03\x0E\x03N\v\x03\x05\x03P\n\x03\x03\x04\x07\x04S\n\x04" +
		"\f\x04\x0E\x04V\v\x04\x03\x04\x03\x04\x03\x04\x07\x04[\n\x04\f\x04\x0E" +
		"\x04^\v\x04\x03\x05\x03\x05\x03\x05\x05\x05c\n\x05\x05\x05e\n\x05\x03" +
		"\x06\x03\x06\x05\x06i\n\x06\x03\x06\x05\x06l\n\x06\x03\x06\x03\x06\x05" +
		"\x06p\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06v\n\x06\r\x06\x0E\x06" +
		"w\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07~\n\x07\x03\x07\x03\x07\x05\x07" +
		"\x82\n\x07\x03\x07\x03\x07\x05\x07\x86\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x06\x07\x8C\n\x07\r\x07\x0E\x07\x8D\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x98\n\x07\x03\x07\x05\x07\x9B" +
		"\n\x07\x03\x07\x03\x07\x05\x07\x9F\n\x07\x03\x07\x03\x07\x05\x07\xA3\n" +
		"\x07\x03\x07\x05\x07\xA6\n\x07\x05\x07\xA8\n\x07\x03\b\x03\b\x03\b\x05" +
		"\b\xAD\n\b\x03\t\x03\t\x05\t\xB1\n\t\x03\t\x03\t\x05\t\xB5\n\t\x03\t\x05" +
		"\t\xB8\n\t\x03\n\x03\n\x03\n\x03\n\x05\n\xBE\n\n\x03\n\x03\n\x05\n\xC2" +
		"\n\n\x03\n\x05\n\xC5\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\xCB\n\v\x03\v\x03" +
		"\v\x05\v\xCF\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\xDD\n\v\x03\v\x03\v\x03\v\x05\v\xE2\n\v\x03\v" +
		"\x03\v\x03\v\x03\v\x06\v\xE8\n\v\r\v\x0E\v\xE9\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\xF3\n\v\x03\f\x03\f\x05\f\xF7\n\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x05\f\xFE\n\f\x03\f\x03\f\x03\f\x03\f\x06\f\u0104\n" +
		"\f\r\f\x0E\f\u0105\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u010E\n\f" +
		"\f\f\x0E\f\u0111\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07" +
		"\f\u011B\n\f\f\f\x0E\f\u011E\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\u0136\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x06\r\u013F\n\r\r\r\x0E\r\u0140\x03\r\x05\r\u0144\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\u014B\n\r\f\r\x0E\r\u014E\v\r\x05\r\u0150\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u015B\n" +
		"\r\f\r\x0E\r\u015E\v\r\x03\r\x03\r\x05\r\u0162\n\r\x03\r\x05\r\u0165\n" +
		"\r\x03\r\x03\r\x05\r\u0169\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0183\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u018B\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0191\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u0197\n\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u01A2\n\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x06\r\u01AC\n\r\r\r\x0E\r\u01AD\x03\r\x05\r\u01B1\n" +
		"\r\x07\r\u01B3\n\r\f\r\x0E\r\u01B6\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u01BE\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01C3" +
		"\n\x0F\x03\x0F\x03\x0F\x05\x0F\u01C7\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01D0\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u01DD\n\x0F\f\x0F\x0E\x0F\u01E0\v\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01EA\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x07\x13\u01F0\n\x13\f\x13\x0E\x13\u01F3\v\x13\x05\x13\u01F5" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x05\x14\u01FC\n\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0204\n\x15\f\x15" +
		"\x0E\x15\u0207\v\x15\x05\x15\u0209\n\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x07\x16\u0211\n\x16\f\x16\x0E\x16\u0214\v\x16\x05\x16" +
		"\u0216\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u021E" +
		"\n\x17\f\x17\x0E\x17\u0221\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x07\x18\u0229\n\x18\f\x18\x0E\x18\u022C\v\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x06\x19\u0237" +
		"\n\x19\r\x19\x0E\x19\u0238\x03\x19\x05\x19\u023C\n\x19\x03\x1A\x03\x1A" +
		"\x05\x1A\u0240\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0244\n\x1A\x03\x1A\x05\x1A" +
		"\u0247\n\x1A\x03\x1A\x02\x02\x04\x18\x1C\x1B\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02\x02" +
		"\b\x05\x02\x18\x18\x1E\x1E  \x05\x02..3355\x04\x02&&--\x04\x02)),,\t\x02" +
		"%&(),1335688AA\b\x02\v\x15\x17\x17\x19\x1D\x1F\x1F!#AA\x02\u02B0\x028" +
		"\x03\x02\x02\x02\x04D\x03\x02\x02\x02\x06T\x03\x02\x02\x02\bd\x03\x02" +
		"\x02\x02\nf\x03\x02\x02\x02\f\xA7\x03\x02\x02\x02\x0E\xA9\x03\x02\x02" +
		"\x02\x10\xAE\x03\x02\x02\x02\x12\xB9\x03\x02\x02\x02\x14\xF2\x03\x02\x02" +
		"\x02\x16\u0135\x03\x02\x02\x02\x18\u0164\x03\x02\x02\x02\x1A\u01BD\x03" +
		"\x02\x02\x02\x1C\u01CF\x03\x02\x02\x02\x1E\u01E1\x03\x02\x02\x02 \u01E3" +
		"\x03\x02\x02\x02\"\u01E5\x03\x02\x02\x02$\u01EB\x03\x02\x02\x02&\u01FB" +
		"\x03\x02\x02\x02(\u01FF\x03\x02\x02\x02*\u020C\x03\x02\x02\x02,\u0219" +
		"\x03\x02\x02\x02.\u0224\x03\x02\x02\x020\u023B\x03\x02\x02\x022\u0246" +
		"\x03\x02\x02\x0247\x05\x04\x03\x0257\x07B\x02\x0264\x03\x02\x02\x0265" +
		"\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x02" +
		"9A\x03\x02\x02\x02:8\x03\x02\x02\x02;@\x05\n\x06\x02<@\x05\x10\t\x02=" +
		"@\x05\x14\v\x02>@\x07B\x02\x02?;\x03\x02\x02\x02?<\x03\x02\x02\x02?=\x03" +
		"\x02\x02\x02?>\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03" +
		"\x02\x02\x02B\x03\x03\x02\x02\x02CA\x03\x02\x02\x02DE\x07\x1D\x02\x02" +
		"EO\x05\x06\x04\x02FG\x07+\x02\x02GL\x05\b\x05\x02HI\x07*\x02\x02IK\x05" +
		"\b\x05\x02JH\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03" +
		"\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02OF\x03\x02\x02\x02OP\x03" +
		"\x02\x02\x02P\x05\x03\x02\x02\x02QS\x07%\x02\x02RQ\x03\x02\x02\x02SV\x03" +
		"\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02\x02VT\x03" +
		"\x02\x02\x02W\\\x05 \x11\x02XY\x07%\x02\x02Y[\x05 \x11\x02ZX\x03\x02\x02" +
		"\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]\x07\x03" +
		"\x02\x02\x02^\\\x03\x02\x02\x02_e\x05 \x11\x02`b\x07\f\x02\x02ac\x05 " +
		"\x11\x02ba\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02d_\x03\x02" +
		"\x02\x02d`\x03\x02\x02\x02e\t\x03\x02\x02\x02fh\x05 \x11\x02gi\x05.\x18" +
		"\x02hg\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x03\x02\x02\x02jl\x05$\x13" +
		"\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lo\x03\x02\x02\x02mn\x07\v\x02" +
		"\x02np\x05\x1C\x0F\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02" +
		"\x02qr\x07B\x02\x02ru\x07\x03\x02\x02sv\x05\f\x07\x02tv\x07B\x02\x02u" +
		"s\x03\x02\x02\x02ut\x03\x02\x02\x02vw\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"wx\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x07\x04\x02\x02z\v\x03\x02\x02" +
		"\x02{}\x05 \x11\x02|~\x05\x1C\x0F\x02}|\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x81\x03\x02\x02\x02\x7F\x80\x071\x02\x02\x80\x82\x05\x18\r\x02\x81" +
		"\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\xA8\x03\x02\x02\x02\x83" +
		"\x85\x05 \x11\x02\x84\x86\x05\x1C\x0F\x02\x85\x84\x03\x02\x02\x02\x85" +
		"\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x07B\x02\x02\x88" +
		"\x8B\x07\x03\x02\x02\x89\x8C\x05\x16\f\x02\x8A\x8C\x07B\x02\x02\x8B\x89" +
		"\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90" +
		"\x07\x04\x02\x02\x90\xA8\x03\x02\x02\x02\x91\x92\x07\x14\x02\x02\x92\xA8" +
		"\x050\x19\x02\x93\x94\t\x02\x02\x02\x94\x95\x05\x1E\x10\x02\x95\x97\x05" +
		"$\x13\x02\x96\x98\x05\x1C\x0F\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03" +
		"\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x9B\x050\x19\x02\x9A\x99\x03" +
		"\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\xA8\x03\x02\x02\x02\x9C\x9E\x05" +
		" \x11\x02\x9D\x9F\x05.\x18\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02" +
		"\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x05$\x13\x02\xA1\xA3\x05\x1C" +
		"\x0F\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02" +
		"\x02\x02\xA4\xA6\x050\x19\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02" +
		"\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7{\x03\x02\x02\x02\xA7\x83\x03\x02" +
		"\x02\x02\xA7\x91\x03\x02\x02\x02\xA7\x93\x03\x02\x02\x02\xA7\x9C\x03\x02" +
		"\x02\x02\xA8\r\x03\x02\x02\x02\xA9\xAA\x07\x16\x02\x02\xAA\xAC\x05\x18" +
		"\r\x02\xAB\xAD\x050\x19\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD\x0F\x03\x02\x02\x02\xAE\xB0\x05 \x11\x02\xAF\xB1\x05.\x18\x02" +
		"\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02" +
		"\xB2\xB4\x05$\x13\x02\xB3\xB5\x05\x1C\x0F\x02\xB4\xB3\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB8\x050\x19\x02" +
		"\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\x11\x03\x02\x02\x02" +
		"\xB9\xBA\x05\x1C\x0F\x02\xBA\xBB\x07%\x02\x02\xBB\xBD\x05 \x11\x02\xBC" +
		"\xBE\x05.\x18\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE" +
		"\xBF\x03\x02\x02\x02\xBF\xC1\x05$\x13\x02\xC0\xC2\x05\x1C\x0F\x02\xC1" +
		"\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3" +
		"\xC5\x050\x19\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5" +
		"\x13\x03\x02\x02\x02\xC6\xCE\x07\x10\x02\x02\xC7\xCA\x05 \x11\x02\xC8" +
		"\xC9\x07*\x02\x02\xC9\xCB\x05 \x11\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x07\x0E\x02\x02\xCD\xCF" +
		"\x03\x02\x02\x02\xCE\xC7\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xD1\x05\x18\r\x02\xD1\xD2\x050\x19\x02\xD2\xF3\x03" +
		"\x02\x02\x02\xD3\xD4\x07\x19\x02\x02\xD4\xD5\x05\x18\r\x02\xD5\xD6\x05" +
		"0\x19\x02\xD6\xF3\x03\x02\x02\x02\xD7\xD8\x07\r\x02\x02\xD8\xD9\x05\x18" +
		"\r\x02\xD9\xDC\x050\x19\x02\xDA\xDB\x07\x13\x02\x02\xDB\xDD\x050\x19\x02" +
		"\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xF3\x03\x02\x02\x02" +
		"\xDE\xF3\x07\x17\x02\x02\xDF\xE1\x07\x1F\x02\x02\xE0\xE2\x05\x18\r\x02" +
		"\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xF3\x03\x02\x02\x02" +
		"\xE3\xE4\x07\x1A\x02\x02\xE4\xE5\x07+\x02\x02\xE5\xE7\x05\x18\r\x02\xE6" +
		"\xE8\x07B\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9" +
		"\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB" +
		"\xEC\x07\x1B\x02\x02\xEC\xED\x07+\x02\x02\xED\xEE\x05\x18\r\x02\xEE\xF3" +
		"\x03\x02\x02\x02\xEF\xF3\x07@\x02\x02\xF0\xF3\x05\x16\f\x02\xF1\xF3\x05" +
		"\x18\r\x02\xF2\xC6\x03\x02\x02\x02\xF2\xD3\x03\x02\x02\x02\xF2\xD7\x03" +
		"\x02\x02\x02\xF2\xDE\x03\x02\x02\x02\xF2\xDF\x03\x02\x02\x02\xF2\xE3\x03" +
		"\x02\x02\x02\xF2\xEF\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03" +
		"\x02\x02\x02\xF3\x15\x03\x02\x02\x02\xF4\xF6\x05 \x11\x02\xF5\xF7\x05" +
		"\x1C\x0F\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03" +
		"\x02\x02\x02\xF8\xF9\x071\x02\x02\xF9\xFA\x05\x18\r\x02\xFA\u0136\x03" +
		"\x02\x02\x02\xFB\xFD\x05 \x11\x02\xFC\xFE\x05\x1C\x0F\x02\xFD\xFC\x03" +
		"\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100" +
		"\x07B\x02\x02\u0100\u0103\x07\x03\x02\x02\u0101\u0104\x05\x16\f\x02\u0102" +
		"\u0104\x07B\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0102\x03\x02\x02" +
		"\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106" +
		"\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x07\x04\x02\x02" +
		"\u0108\u0136\x03\x02\x02\x02\u0109\u010A\x07\x05\x02\x02\u010A\u010F\x05" +
		" \x11\x02\u010B\u010C\x07*\x02\x02\u010C\u010E\x05 \x11\x02\u010D\u010B" +
		"\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02" +
		"\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u010F\x03" +
		"\x02\x02\x02\u0112\u0113\x07\x06\x02\x02\u0113\u0114\x071\x02\x02\u0114" +
		"\u0115\x05\x18\r\x02\u0115\u0136\x03\x02\x02\x02\u0116\u0117\x07\t\x02" +
		"\x02\u0117\u011C\x05 \x11\x02\u0118\u0119\x07*\x02\x02\u0119\u011B\x05" +
		" \x11\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C" +
		"\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011F\x03\x02" +
		"\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0120\x07\n\x02\x02\u0120\u0121" +
		"\x071\x02\x02\u0121\u0122\x05\x18\r\x02\u0122\u0136\x03\x02\x02\x02\u0123" +
		"\u0124\x072\x02\x02\u0124\u0125\x05 \x11\x02\u0125\u0126\x071\x02\x02" +
		"\u0126\u0127\x05\x18\r\x02\u0127\u0136\x03\x02\x02\x02\u0128\u0129\x05" +
		"\x18\r\x02\u0129\u012A\x07%\x02\x02\u012A\u012B\x05 \x11\x02\u012B\u012C" +
		"\x071\x02\x02\u012C\u012D\x05\x18\r\x02\u012D\u0136\x03\x02\x02\x02\u012E" +
		"\u012F\x05\x18\r\x02\u012F\u0130\x07\x05\x02\x02\u0130\u0131\x05\x18\r" +
		"\x02\u0131\u0132\x07\x06\x02\x02\u0132\u0133\x071\x02\x02\u0133\u0134" +
		"\x05\x18\r\x02\u0134\u0136\x03\x02\x02\x02\u0135\xF4\x03\x02\x02\x02\u0135" +
		"\xFB\x03\x02\x02\x02\u0135\u0109\x03\x02\x02\x02\u0135\u0116\x03\x02\x02" +
		"\x02\u0135\u0123\x03\x02\x02\x02\u0135\u0128\x03\x02\x02\x02\u0135\u012E" +
		"\x03\x02\x02\x02\u0136\x17\x03\x02\x02\x02\u0137\u0138\b\r\x01\x02\u0138" +
		"\u0165\x05 \x11\x02\u0139\u0165\x072\x02\x02\u013A\u013B\x072\x02\x02" +
		"\u013B\u0165\x05 \x11\x02\u013C\u0165\x05\x1A\x0E\x02\u013D\u013F\x05" +
		"\x1E\x10\x02\u013E\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02" +
		"\x02\x02\u0142\u0144\x07A\x02\x02\u0143\u013E\x03\x02\x02\x02\u0143\u0142" +
		"\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0165\x05\x18\r\x12" +
		"\u0146\u014F\x07\x05\x02\x02\u0147\u014C\x05\x18\r\x02\u0148\u0149\x07" +
		"*\x02\x02\u0149\u014B\x05\x18\r\x02\u014A\u0148\x03\x02\x02\x02\u014B" +
		"\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02" +
		"\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F" +
		"\u0147\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02" +
		"\x02\x02\u0151\u0165\x07\x06\x02\x02\u0152\u0153\x07\x07\x02\x02\u0153" +
		"\u0154\x05\x18\r\x02\u0154\u0155\x07\b\x02\x02\u0155\u0165\x03\x02\x02" +
		"\x02\u0156\u0161\x079\x02\x02\u0157\u015C\x05 \x11\x02\u0158\u0159\x07" +
		"*\x02\x02\u0159\u015B\x05 \x11\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015E" +
		"\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
		"\u015D\u015F\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0160\x07" +
		"+\x02\x02\u0160\u0162\x03\x02\x02\x02\u0161\u0157\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x05\x18" +
		"\r\x03\u0164\u0137\x03\x02\x02\x02\u0164\u0139\x03\x02\x02\x02\u0164\u013A" +
		"\x03\x02\x02\x02\u0164\u013C\x03\x02\x02\x02\u0164\u0143\x03\x02\x02\x02" +
		"\u0164\u0146\x03\x02\x02\x02\u0164\u0152\x03\x02\x02\x02\u0164\u0156\x03" +
		"\x02\x02\x02\u0165\u01B4\x03\x02\x02\x02\u0166\u0168\f\x13\x02\x02\u0167" +
		"\u0169\x074\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02" +
		"\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x07%\x02\x02\u016B\u01B3" +
		"\x05\x18\r\x14\u016C\u016D\f\x10\x02\x02\u016D\u016E\x07/\x02\x02\u016E" +
		"\u01B3\x05\x18\r\x11\u016F\u0170\f\x0F\x02\x02\u0170\u0171\t\x03\x02\x02" +
		"\u0171\u01B3\x05\x18\r\x10\u0172\u0173\f\x0E\x02\x02\u0173\u0174\t\x04" +
		"\x02\x02\u0174\u01B3\x05\x18\r\x0F\u0175\u0176\f\r\x02\x02\u0176\u0177" +
		"\x07%\x02\x02\u0177\u0178\x07%\x02\x02\u0178\u01B3\x05\x18\r\x0E\u0179" +
		"\u017A\f\f\x02\x02\u017A\u017B\x07A\x02\x02\u017B\u01B3\x05\x18\r\r\u017C" +
		"\u017D\f\v\x02\x02\u017D\u017E\x074\x02\x02\u017E\u01B3\x05\x18\r\f\u017F" +
		"\u0180\f\n\x02\x02\u0180\u0182\t\x05\x02\x02\u0181\u0183\x071\x02\x02" +
		"\u0182\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x03" +
		"\x02\x02\x02\u0184\u01B3\x05\x18\r\v\u0185\u018A\f\t\x02\x02\u0186\u0187" +
		"\x071\x02\x02\u0187\u018B\x071\x02\x02\u0188\u0189\x078\x02\x02\u0189" +
		"\u018B\x071\x02\x02\u018A\u0186\x03\x02\x02\x02\u018A\u0188\x03\x02\x02" +
		"\x02\u018B\u018C\x03\x02\x02\x02\u018C\u01B3\x05\x18\r\n\u018D\u018E\f" +
		"\b\x02\x02\u018E\u0190\x076\x02\x02\u018F\u0191\x076\x02\x02\u0190\u018F" +
		"\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02" +
		"\u0192\u01B3\x05\x18\r\t\u0193\u0194\f\x07\x02\x02\u0194\u0196\x07(\x02" +
		"\x02\u0195\u0197\x07(\x02\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u01B3\x05\x18\r\b\u0199" +
		"\u019A\f\x06\x02\x02\u019A\u019B\x07(\x02\x02\u019B\u019C\x05 \x11\x02" +
		"\u019C\u019D\x07+\x02\x02\u019D\u019E\x05\x18\r\x07\u019E\u01B3\x03\x02" +
		"\x02\x02\u019F\u01A1\f\x15\x02\x02\u01A0\u01A2\x05,\x17\x02\u01A1\u01A0" +
		"\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02" +
		"\u01A3\u01B3\x05(\x15\x02\u01A4\u01A5\f\x14\x02\x02\u01A5\u01A6\x07\x05" +
		"\x02\x02\u01A6\u01A7\x05\x18\r\x02\u01A7\u01A8\x07\x06\x02\x02\u01A8\u01B3" +
		"\x03\x02\x02\x02\u01A9\u01B0\f\x11\x02\x02\u01AA\u01AC\x05\x1E\x10\x02" +
		"\u01AB\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AB\x03" +
		"\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF" +
		"\u01B1\x07A\x02\x02\u01B0\u01AB\x03\x02\x02\x02\u01B0\u01AF\x03\x02\x02" +
		"\x02\u01B1\u01B3\x03\x02\x02\x02\u01B2\u0166\x03\x02\x02\x02\u01B2\u016C" +
		"\x03\x02\x02\x02\u01B2\u016F\x03\x02\x02\x02\u01B2\u0172\x03\x02\x02\x02" +
		"\u01B2\u0175\x03\x02\x02\x02\u01B2\u0179\x03\x02\x02\x02\u01B2\u017C\x03" +
		"\x02\x02\x02\u01B2\u017F\x03\x02\x02\x02\u01B2\u0185\x03\x02\x02\x02\u01B2" +
		"\u018D\x03\x02\x02\x02\u01B2\u0193\x03\x02\x02\x02\u01B2\u0199\x03\x02" +
		"\x02\x02\u01B2\u019F\x03\x02\x02\x02\u01B2\u01A4\x03\x02\x02\x02\u01B2" +
		"\u01A9\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02" +
		"\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\x19\x03\x02\x02\x02\u01B6\u01B4" +
		"\x03\x02\x02\x02\u01B7\u01BE\x07:\x02\x02\u01B8\u01BE\x07=\x02\x02\u01B9" +
		"\u01BE\x07<\x02\x02\u01BA\u01BE\x07;\x02\x02\u01BB\u01BE\x07>\x02\x02" +
		"\u01BC\u01BE\x07?\x02\x02\u01BD\u01B7\x03\x02\x02\x02\u01BD\u01B8\x03" +
		"\x02\x02\x02\u01BD\u01B9\x03\x02\x02\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD" +
		"\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE\x1B\x03\x02\x02" +
		"\x02\u01BF\u01C0\b\x0F\x01\x02\u01C0\u01C2\x05 \x11\x02\u01C1\u01C3\x05" +
		",\x17\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3" +
		"\u01D0\x03\x02\x02\x02\u01C4\u01D0\x05\x1A\x0E\x02\u01C5\u01C7\x05.\x18" +
		"\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C8" +
		"\x03\x02\x02\x02\u01C8\u01C9\x05*\x16\x02\u01C9\u01CA\x05\x1C\x0F\x04" +
		"\u01CA\u01D0\x03\x02\x02\x02\u01CB\u01CC\x07\x07\x02\x02\u01CC\u01CD\x05" +
		"\x1C\x0F\x02\u01CD\u01CE\x07\b\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF" +
		"\u01BF\x03\x02\x02\x02\u01CF\u01C4\x03\x02\x02\x02\u01CF\u01C6\x03\x02" +
		"\x02\x02\u01CF\u01CB\x03\x02\x02\x02\u01D0\u01DE\x03\x02\x02\x02\u01D1" +
		"\u01D2\f\x06\x02\x02\u01D2\u01D3\x076\x02\x02\u01D3\u01DD\x05\x1C\x0F" +
		"\x07\u01D4\u01D5\f\x05\x02\x02\u01D5\u01D6\x07(\x02\x02\u01D6\u01DD\x05" +
		"\x1C\x0F\x06\u01D7\u01D8\f\b\x02\x02\u01D8\u01DD\x074\x02\x02\u01D9\u01DA" +
		"\f\x07\x02\x02\u01DA\u01DB\x07\x05\x02\x02\u01DB\u01DD\x07\x06\x02\x02" +
		"\u01DC\u01D1\x03\x02\x02\x02\u01DC\u01D4\x03\x02\x02\x02\u01DC\u01D7\x03" +
		"\x02\x02\x02\u01DC\u01D9\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE" +
		"\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\x1D\x03\x02\x02" +
		"\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E2\t\x06\x02\x02\u01E2\x1F\x03" +
		"\x02\x02\x02\u01E3\u01E4\t\x07\x02\x02\u01E4!\x03\x02\x02\x02\u01E5\u01E6" +
		"\x05 \x11\x02\u01E6\u01E9\x05\x1C\x0F\x02\u01E7\u01E8\x07\'\x02\x02\u01E8" +
		"\u01EA\x05 \x11\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02" +
		"\x02\u01EA#\x03\x02\x02\x02\u01EB\u01F4\x07\x07\x02\x02\u01EC\u01F1\x05" +
		"\"\x12\x02\u01ED\u01EE\x07*\x02\x02\u01EE\u01F0\x05\"\x12\x02\u01EF\u01ED" +
		"\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02" +
		"\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03" +
		"\x02\x02\x02\u01F4\u01EC\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5" +
		"\u01F6\x03\x02\x02\x02\u01F6\u01F7\x07\b\x02\x02\u01F7%\x03\x02\x02\x02" +
		"\u01F8\u01F9\x05 \x11\x02\u01F9\u01FA\x071\x02\x02\u01FA\u01FC\x03\x02" +
		"\x02\x02\u01FB\u01F8\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC" +
		"\u01FD\x03\x02\x02\x02\u01FD\u01FE\x05\x18\r\x02\u01FE\'\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01FF\u0208\x07\x07\x02\x02\u0200\u0205\x05&\x14\x02\u0201\u0202" +
		"\x07*\x02\x02\u0202\u0204\x05&\x14\x02\u0203\u0201\x03\x02\x02\x02\u0204" +
		"\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02" +
		"\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208" +
		"\u0200\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02" +
		"\x02\x02\u020A\u020B\x07\b\x02\x02\u020B)\x03\x02\x02\x02\u020C\u0215" +
		"\x07\x07\x02\x02\u020D\u0212\x05\x1C\x0F\x02\u020E\u020F\x07*\x02\x02" +
		"\u020F\u0211\x05\x1C\x0F\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214\x03" +
		"\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
		"\u0216\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u020D\x03\x02" +
		"\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217" +
		"\u0218\x07\b\x02\x02\u0218+\x03\x02\x02\x02\u0219\u021A\x07)\x02\x02\u021A" +
		"\u021F\x05\x1C\x0F\x02\u021B\u021C\x07*\x02\x02\u021C\u021E\x05\x1C\x0F" +
		"\x02\u021D\u021B\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D" +
		"\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02" +
		"\u0221\u021F\x03\x02\x02\x02\u0222\u0223\x07,\x02\x02\u0223-\x03\x02\x02" +
		"\x02\u0224\u0225\x07)\x02\x02\u0225\u022A\x05 \x11\x02\u0226\u0227\x07" +
		"*\x02\x02\u0227\u0229\x05 \x11\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022C" +
		"\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02" +
		"\u022B\u022D\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022D\u022E\x07" +
		",\x02\x02\u022E/\x03\x02\x02\x02\u022F\u0230\x07+\x02\x02\u0230\u023C" +
		"\x05\x14\v\x02\u0231\u0232\x07+\x02\x02\u0232\u0233\x07B\x02\x02\u0233" +
		"\u0236\x07\x03\x02\x02\u0234\u0237\x05\x14\v\x02\u0235\u0237\x07B\x02" +
		"\x02\u0236\u0234\x03\x02\x02\x02\u0236\u0235\x03\x02\x02\x02\u0237\u0238" +
		"\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02" +
		"\u0239\u023A\x03\x02\x02\x02\u023A\u023C\x07\x04\x02\x02\u023B\u022F\x03" +
		"\x02\x02\x02\u023B\u0231\x03\x02\x02\x02\u023C1\x03\x02\x02\x02\u023D" +
		"\u0247\x050\x19\x02\u023E\u0240\x07B\x02\x02\u023F\u023E\x03\x02\x02\x02" +
		"\u023F\u0240\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0243\x07" +
		"1\x02\x02\u0242\u0244\x07B\x02\x02\u0243\u0242\x03\x02\x02\x02\u0243\u0244" +
		"\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0247\x05\x18\r\x02" +
		"\u0246\u023D\x03\x02\x02\x02\u0246\u023F\x03\x02\x02\x02\u02473\x03\x02" +
		"\x02\x02W68?ALOT\\bdhkouw}\x81\x85\x8B\x8D\x97\x9A\x9E\xA2\xA5\xA7\xAC" +
		"\xB0\xB4\xB7\xBD\xC1\xC4\xCA\xCE\xDC\xE1\xE9\xF2\xF6\xFD\u0103\u0105\u010F" +
		"\u011C\u0135\u0140\u0143\u014C\u014F\u015C\u0161\u0164\u0168\u0182\u018A" +
		"\u0190\u0196\u01A1\u01AD\u01B0\u01B2\u01B4\u01BD\u01C2\u01C6\u01CF\u01DC" +
		"\u01DE\u01E9\u01F1\u01F4\u01FB\u0205\u0208\u0212\u0215\u021F\u022A\u0236" +
		"\u0238\u023B\u023F\u0243\u0246";
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


export class LibraryContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
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
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class TestFunctionContext extends ParserRuleContext {
	public TEST(): TerminalNode { return this.getToken(XonParser.TEST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_testFunction; }
}


export class FunctionContext extends ParserRuleContext {
	public _result!: TypeContext;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_function; }
}


export class ExtensionMethodContext extends ParserRuleContext {
	public _receiver!: TypeContext;
	public _result!: TypeContext;
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_extensionMethod; }
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
export class IfStatementContext extends StatementContext {
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
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COLON);
		} else {
			return this.getToken(XonParser.COLON, i);
		}
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
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(XonParser.IF, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OR, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.FOR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AND, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	public INIT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INIT, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOOP, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(XonParser.BREAK, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(XonParser.WHILE, 0); }
	public ACTUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXPECT, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(XonParser.IMPORT, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXPORT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLASS, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.INTERFACE, 0); }
	public LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.LITERAL, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(XonParser.RETURN, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class FunctionBodyContext extends ParserRuleContext {
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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


