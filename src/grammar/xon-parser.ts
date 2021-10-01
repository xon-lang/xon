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
	public static readonly THIS = 21;
	public static readonly BREAK = 22;
	public static readonly INFIX = 23;
	public static readonly WHILE = 24;
	public static readonly ACTUAL = 25;
	public static readonly EXPECT = 26;
	public static readonly EXPORT = 27;
	public static readonly IMPORT = 28;
	public static readonly PREFIX = 29;
	public static readonly RETURN = 30;
	public static readonly POSTFIX = 31;
	public static readonly AT = 32;
	public static readonly DOT = 33;
	public static readonly PLUS = 34;
	public static readonly HASH = 35;
	public static readonly PIPE = 36;
	public static readonly LESS = 37;
	public static readonly COMMA = 38;
	public static readonly COLON = 39;
	public static readonly GREAT = 40;
	public static readonly MINUS = 41;
	public static readonly SLASH = 42;
	public static readonly CARET = 43;
	public static readonly TILDE = 44;
	public static readonly EQUAL = 45;
	public static readonly MODULO = 46;
	public static readonly QUESTION = 47;
	public static readonly ASTERISK = 48;
	public static readonly AMPERSAND = 49;
	public static readonly UNDERSCORE = 50;
	public static readonly EXCLAMATION = 51;
	public static readonly BACK_SLASH = 52;
	public static readonly NULL_LITERAL = 53;
	public static readonly FLOAT_LITERAL = 54;
	public static readonly INTEGER_LITERAL = 55;
	public static readonly BOOLEAN_LITERAL = 56;
	public static readonly CHAR_LITERAL = 57;
	public static readonly STRING_LITERAL = 58;
	public static readonly PREPROCESSOR = 59;
	public static readonly ID = 60;
	public static readonly NL = 61;
	public static readonly WS = 62;
	public static readonly COMMENT = 63;
	public static readonly RULE_listing = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryPath = 2;
	public static readonly RULE_libraryMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_function = 6;
	public static readonly RULE_extensionMethod = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_assignment = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_literal = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_operator = 13;
	public static readonly RULE_id = 14;
	public static readonly RULE_parameter = 15;
	public static readonly RULE_parameters = 16;
	public static readonly RULE_argument = 17;
	public static readonly RULE_arguments = 18;
	public static readonly RULE_typeParameters = 19;
	public static readonly RULE_genericArguments = 20;
	public static readonly RULE_genericParameters = 21;
	public static readonly RULE_body = 22;
	public static readonly RULE_functionBody = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"listing", "library", "libraryPath", "libraryMember", "definition", "member", 
		"function", "extensionMethod", "statement", "assignment", "expression", 
		"literal", "type", "operator", "id", "parameter", "parameters", "argument", 
		"arguments", "typeParameters", "genericArguments", "genericParameters", 
		"body", "functionBody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'if'", "'in'", "'or'", "'for'", "'not'", "'and'", "'else'", 
		"'init'", "'loop'", "'test'", "'this'", "'break'", "'infix'", "'while'", 
		"'actual'", "'expect'", "'export'", "'import'", "'prefix'", "'return'", 
		"'postfix'", "'@'", "'.'", "'+'", "'#'", "'|'", "'<'", "','", "':'", "'>'", 
		"'-'", "'/'", "'^'", "'~'", "'='", "'%'", "'?'", "'*'", "'&'", "'_'", 
		"'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "IF", "IN", "OR", 
		"FOR", "NOT", "AND", "ELSE", "INIT", "LOOP", "TEST", "THIS", "BREAK", 
		"INFIX", "WHILE", "ACTUAL", "EXPECT", "EXPORT", "IMPORT", "PREFIX", "RETURN", 
		"POSTFIX", "AT", "DOT", "PLUS", "HASH", "PIPE", "LESS", "COMMA", "COLON", 
		"GREAT", "MINUS", "SLASH", "CARET", "TILDE", "EQUAL", "MODULO", "QUESTION", 
		"ASTERISK", "AMPERSAND", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "NULL_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "BOOLEAN_LITERAL", "CHAR_LITERAL", 
		"STRING_LITERAL", "PREPROCESSOR", "ID", "NL", "WS", "COMMENT",
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
			this.state = 52;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 50;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 48;
						this.library();
						}
						break;
					case XonParser.NL:
						{
						this.state = 49;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.DOT - 33)) | (1 << (XonParser.PLUS - 33)) | (1 << (XonParser.PIPE - 33)) | (1 << (XonParser.LESS - 33)) | (1 << (XonParser.GREAT - 33)) | (1 << (XonParser.MINUS - 33)) | (1 << (XonParser.SLASH - 33)) | (1 << (XonParser.CARET - 33)) | (1 << (XonParser.TILDE - 33)) | (1 << (XonParser.EQUAL - 33)) | (1 << (XonParser.MODULO - 33)) | (1 << (XonParser.ASTERISK - 33)) | (1 << (XonParser.AMPERSAND - 33)) | (1 << (XonParser.EXCLAMATION - 33)) | (1 << (XonParser.BACK_SLASH - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.NL - 33)))) !== 0)) {
				{
				this.state = 59;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 55;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 56;
					this.function();
					}
					break;

				case 3:
					{
					this.state = 57;
					this.statement();
					}
					break;

				case 4:
					{
					this.state = 58;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 63;
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
			this.state = 64;
			this.match(XonParser.IMPORT);
			this.state = 65;
			this.libraryPath();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 66;
				this.match(XonParser.COLON);
				this.state = 67;
				this.libraryMember();
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 68;
					this.match(XonParser.COMMA);
					this.state = 69;
					this.libraryMember();
					}
					}
					this.state = 74;
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
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 77;
				this.match(XonParser.DOT);
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this.id();
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 84;
					this.match(XonParser.DOT);
					this.state = 85;
					this.id();
					}
					}
				}
				this.state = 90;
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
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.match(XonParser.AS);
				this.state = 94;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 93;
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
			this.state = 98;
			this.id();
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 99;
				this.genericParameters();
				}
			}

			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 102;
				this.parameters();
				}
			}

			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 105;
				this.match(XonParser.IS);
				this.state = 106;
				this.type(0);
				}
			}

			this.state = 109;
			this.match(XonParser.COLON);
			this.state = 110;
			this.match(XonParser.NL);
			this.state = 111;
			this.match(XonParser.INDENT);
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 114;
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
				case XonParser.TEST:
				case XonParser.THIS:
				case XonParser.BREAK:
				case XonParser.INFIX:
				case XonParser.WHILE:
				case XonParser.ACTUAL:
				case XonParser.EXPECT:
				case XonParser.PREFIX:
				case XonParser.RETURN:
				case XonParser.POSTFIX:
				case XonParser.ID:
					{
					this.state = 112;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 113;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.INFIX) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.PREFIX) | (1 << XonParser.RETURN) | (1 << XonParser.POSTFIX))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
			this.state = 118;
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
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.id();
				this.state = 121;
				this.type(0);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.EQUAL) {
					{
					this.state = 122;
					this.match(XonParser.EQUAL);
					this.state = 123;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.match(XonParser.INIT);
				this.state = 127;
				this.body();
				}
				break;

			case 3:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
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
				this.state = 129;
				this.operator();
				this.state = 130;
				this.parameters();
				this.state = 132;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 131;
					this.type(0);
					}
					break;
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 134;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 137;
				this.id();
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 138;
					this.genericParameters();
					}
				}

				this.state = 141;
				this.parameters();
				this.state = 143;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 142;
					this.type(0);
					}
					break;
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 145;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new TestMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 148;
				this.match(XonParser.TEST);
				this.state = 149;
				this.expression(0);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 150;
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.id();
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 156;
				this.genericParameters();
				}
			}

			this.state = 159;
			this.parameters();
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 160;
				_localctx._result = this.type(0);
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
	public extensionMethod(): ExtensionMethodContext {
		let _localctx: ExtensionMethodContext = new ExtensionMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_extensionMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_localctx._receiver = this.type(0);
			this.state = 167;
			this.match(XonParser.DOT);
			this.state = 168;
			this.id();
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 169;
				this.genericParameters();
				}
			}

			this.state = 172;
			this.parameters();
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.LESS - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.ID - 37)))) !== 0)) {
				{
				this.state = 173;
				_localctx._result = this.type(0);
				}
			}

			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 176;
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
		this.enterRule(_localctx, 16, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.match(XonParser.FOR);
				this.state = 187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 180;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 181;
						this.match(XonParser.COMMA);
						this.state = 182;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 185;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 189;
				this.expression(0);
				this.state = 190;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 192;
				this.match(XonParser.WHILE);
				this.state = 193;
				this.expression(0);
				this.state = 194;
				this.body();
				}
				break;

			case 3:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 196;
				this.match(XonParser.IF);
				this.state = 197;
				this.expression(0);
				this.state = 198;
				this.body();
				this.state = 201;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 199;
					this.match(XonParser.ELSE);
					this.state = 200;
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
				this.state = 203;
				this.match(XonParser.BREAK);
				}
				break;

			case 5:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 204;
				this.match(XonParser.RETURN);
				this.state = 206;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 205;
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
				this.state = 208;
				this.match(XonParser.ACTUAL);
				this.state = 209;
				this.match(XonParser.COLON);
				this.state = 210;
				this.expression(0);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 211;
					this.match(XonParser.NL);
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 216;
				this.match(XonParser.EXPECT);
				this.state = 217;
				this.match(XonParser.COLON);
				this.state = 218;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 220;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 8:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 221;
				this.assignment();
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 222;
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
		this.enterRule(_localctx, 18, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.id();
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.LESS - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.ID - 37)))) !== 0)) {
					{
					this.state = 226;
					this.type(0);
					}
				}

				this.state = 229;
				this.match(XonParser.EQUAL);
				this.state = 230;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 233;
				this.id();
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 234;
					this.match(XonParser.COMMA);
					this.state = 235;
					this.id();
					}
					}
					this.state = 240;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 241;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 242;
				this.match(XonParser.EQUAL);
				this.state = 243;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 245;
				this.match(XonParser.OPEN_BRACE);
				this.state = 246;
				this.id();
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 247;
					this.match(XonParser.COMMA);
					this.state = 248;
					this.id();
					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 254;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 255;
				this.match(XonParser.EQUAL);
				this.state = 256;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 258;
				this.match(XonParser.THIS);
				this.state = 259;
				this.id();
				this.state = 260;
				this.match(XonParser.EQUAL);
				this.state = 261;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 263;
				this.expression(0);
				this.state = 264;
				this.match(XonParser.DOT);
				this.state = 265;
				this.id();
				this.state = 266;
				this.match(XonParser.EQUAL);
				this.state = 267;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 269;
				this.expression(0);
				this.state = 270;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 271;
				this.expression(0);
				this.state = 272;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 273;
				this.match(XonParser.EQUAL);
				this.state = 274;
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 279;
				this.match(XonParser.THIS);
				}
				break;

			case 2:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 280;
				this.id();
				}
				break;

			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 281;
				this.literal();
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 288;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 283;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 282;
							this.operator();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 285;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;

				case 2:
					{
					this.state = 287;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 290;
				this.expression(16);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 291;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.DOT - 33)) | (1 << (XonParser.PLUS - 33)) | (1 << (XonParser.PIPE - 33)) | (1 << (XonParser.LESS - 33)) | (1 << (XonParser.GREAT - 33)) | (1 << (XonParser.MINUS - 33)) | (1 << (XonParser.SLASH - 33)) | (1 << (XonParser.CARET - 33)) | (1 << (XonParser.TILDE - 33)) | (1 << (XonParser.EQUAL - 33)) | (1 << (XonParser.MODULO - 33)) | (1 << (XonParser.ASTERISK - 33)) | (1 << (XonParser.AMPERSAND - 33)) | (1 << (XonParser.EXCLAMATION - 33)) | (1 << (XonParser.BACK_SLASH - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.ID - 33)))) !== 0)) {
					{
					this.state = 292;
					this.expression(0);
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 293;
						this.match(XonParser.COMMA);
						this.state = 294;
						this.expression(0);
						}
						}
						this.state = 299;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 302;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 303;
				this.match(XonParser.OPEN_PAREN);
				this.state = 304;
				this.expression(0);
				this.state = 305;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 7:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 307;
				this.match(XonParser.BACK_SLASH);
				this.state = 318;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 308;
					this.id();
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 309;
						this.match(XonParser.COMMA);
						this.state = 310;
						this.id();
						}
						}
						this.state = 315;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 316;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 320;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 401;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 399;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 323;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 325;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QUESTION) {
							{
							this.state = 324;
							this.match(XonParser.QUESTION);
							}
						}

						this.state = 327;
						this.match(XonParser.DOT);
						this.state = 328;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 329;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 330;
						this.match(XonParser.CARET);
						this.state = 331;
						this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 332;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 333;
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.SLASH - 42)) | (1 << (XonParser.MODULO - 42)) | (1 << (XonParser.ASTERISK - 42)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 334;
						this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 335;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 336;
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
						this.state = 337;
						this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 338;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 339;
						this.match(XonParser.DOT);
						this.state = 340;
						this.match(XonParser.DOT);
						this.state = 341;
						this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 342;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 343;
						this.match(XonParser.ID);
						this.state = 344;
						this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 345;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 346;
						this.match(XonParser.QUESTION);
						this.state = 347;
						this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 348;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 349;
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
						this.state = 351;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
						case 1:
							{
							this.state = 350;
							this.match(XonParser.EQUAL);
							}
							break;
						}
						this.state = 353;
						this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 354;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 359;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case XonParser.EQUAL:
							{
							this.state = 355;
							this.match(XonParser.EQUAL);
							this.state = 356;
							this.match(XonParser.EQUAL);
							}
							break;
						case XonParser.EXCLAMATION:
							{
							this.state = 357;
							this.match(XonParser.EXCLAMATION);
							this.state = 358;
							this.match(XonParser.EQUAL);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 361;
						this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 362;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 363;
						this.match(XonParser.AMPERSAND);
						this.state = 365;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
						case 1:
							{
							this.state = 364;
							this.match(XonParser.AMPERSAND);
							}
							break;
						}
						this.state = 367;
						this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 368;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 369;
						this.match(XonParser.PIPE);
						this.state = 371;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
						case 1:
							{
							this.state = 370;
							this.match(XonParser.PIPE);
							}
							break;
						}
						this.state = 373;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 374;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 375;
						this.match(XonParser.PIPE);
						this.state = 376;
						this.id();
						this.state = 377;
						this.match(XonParser.COLON);
						this.state = 378;
						this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 380;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 382;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 381;
							this.genericArguments();
							}
						}

						this.state = 384;
						this.arguments();
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 385;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 386;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 387;
						this.expression(0);
						this.state = 388;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 15:
						{
						_localctx = new PostfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 390;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 397;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
						case 1:
							{
							this.state = 392;
							this._errHandler.sync(this);
							_alt = 1;
							do {
								switch (_alt) {
								case 1:
									{
									{
									this.state = 391;
									this.operator();
									}
									}
									break;
								default:
									throw new NoViableAltException(this);
								}
								this.state = 394;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
							} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
							}
							break;

						case 2:
							{
							this.state = 396;
							this.match(XonParser.ID);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 403;
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
		this.enterRule(_localctx, 22, XonParser.RULE_literal);
		try {
			this.state = 410;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 404;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 405;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 406;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 407;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 408;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 409;
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
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 413;
				this.id();
				this.state = 415;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 414;
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
				this.state = 417;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 418;
					this.genericParameters();
					}
				}

				this.state = 421;
				this.typeParameters();
				this.state = 422;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 424;
				this.match(XonParser.OPEN_PAREN);
				this.state = 425;
				this.type(0);
				this.state = 426;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 443;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 441;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 430;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 431;
						this.match(XonParser.AMPERSAND);
						this.state = 432;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 433;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 434;
						this.match(XonParser.PIPE);
						this.state = 435;
						this.type(4);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 436;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 437;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 438;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 439;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 440;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 445;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
		this.enterRule(_localctx, 26, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.DOT - 33)) | (1 << (XonParser.PLUS - 33)) | (1 << (XonParser.PIPE - 33)) | (1 << (XonParser.LESS - 33)) | (1 << (XonParser.GREAT - 33)) | (1 << (XonParser.MINUS - 33)) | (1 << (XonParser.SLASH - 33)) | (1 << (XonParser.CARET - 33)) | (1 << (XonParser.TILDE - 33)) | (1 << (XonParser.EQUAL - 33)) | (1 << (XonParser.MODULO - 33)) | (1 << (XonParser.ASTERISK - 33)) | (1 << (XonParser.AMPERSAND - 33)) | (1 << (XonParser.EXCLAMATION - 33)) | (1 << (XonParser.ID - 33)))) !== 0))) {
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
		this.enterRule(_localctx, 28, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || _la === XonParser.ID)) {
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
		this.enterRule(_localctx, 30, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.id();
			this.state = 451;
			this.type(0);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 452;
				this.match(XonParser.HASH);
				this.state = 453;
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
		this.enterRule(_localctx, 32, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.match(XonParser.OPEN_PAREN);
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || _la === XonParser.ID) {
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 469;
				this.id();
				this.state = 470;
				this.match(XonParser.EQUAL);
				}
				break;
			}
			this.state = 474;
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
		this.enterRule(_localctx, 36, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(XonParser.OPEN_PAREN);
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.DOT - 33)) | (1 << (XonParser.PLUS - 33)) | (1 << (XonParser.PIPE - 33)) | (1 << (XonParser.LESS - 33)) | (1 << (XonParser.GREAT - 33)) | (1 << (XonParser.MINUS - 33)) | (1 << (XonParser.SLASH - 33)) | (1 << (XonParser.CARET - 33)) | (1 << (XonParser.TILDE - 33)) | (1 << (XonParser.EQUAL - 33)) | (1 << (XonParser.MODULO - 33)) | (1 << (XonParser.ASTERISK - 33)) | (1 << (XonParser.AMPERSAND - 33)) | (1 << (XonParser.EXCLAMATION - 33)) | (1 << (XonParser.BACK_SLASH - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.ID - 33)))) !== 0)) {
				{
				this.state = 477;
				this.argument();
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 478;
					this.match(XonParser.COMMA);
					this.state = 479;
					this.argument();
					}
					}
					this.state = 484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 487;
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
		this.enterRule(_localctx, 38, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(XonParser.OPEN_PAREN);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_PAREN) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.LESS - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.ID - 37)))) !== 0)) {
				{
				this.state = 490;
				this.type(0);
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 491;
					this.match(XonParser.COMMA);
					this.state = 492;
					this.type(0);
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
	public genericArguments(): GenericArgumentsContext {
		let _localctx: GenericArgumentsContext = new GenericArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.match(XonParser.LESS);
			this.state = 503;
			this.type(0);
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 504;
				this.match(XonParser.COMMA);
				this.state = 505;
				this.type(0);
				}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 511;
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
		this.enterRule(_localctx, 42, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(XonParser.LESS);
			this.state = 514;
			this.id();
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 515;
				this.match(XonParser.COMMA);
				this.state = 516;
				this.id();
				}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 522;
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
		this.enterRule(_localctx, 44, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 536;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 524;
				this.match(XonParser.COLON);
				this.state = 525;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 526;
				this.match(XonParser.COLON);
				this.state = 527;
				this.match(XonParser.NL);
				this.state = 528;
				this.match(XonParser.INDENT);
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 531;
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
					case XonParser.THIS:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.RETURN:
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
						this.state = 529;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 530;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 533;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.DOT - 33)) | (1 << (XonParser.PLUS - 33)) | (1 << (XonParser.PIPE - 33)) | (1 << (XonParser.LESS - 33)) | (1 << (XonParser.GREAT - 33)) | (1 << (XonParser.MINUS - 33)) | (1 << (XonParser.SLASH - 33)) | (1 << (XonParser.CARET - 33)) | (1 << (XonParser.TILDE - 33)) | (1 << (XonParser.EQUAL - 33)) | (1 << (XonParser.MODULO - 33)) | (1 << (XonParser.ASTERISK - 33)) | (1 << (XonParser.AMPERSAND - 33)) | (1 << (XonParser.EXCLAMATION - 33)) | (1 << (XonParser.BACK_SLASH - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.NL - 33)))) !== 0));
				this.state = 535;
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
		this.enterRule(_localctx, 46, XonParser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 538;
				this.body();
				}
				break;
			case XonParser.EQUAL:
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 539;
					this.match(XonParser.NL);
					}
				}

				this.state = 542;
				this.match(XonParser.EQUAL);
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 543;
					this.match(XonParser.NL);
					}
				}

				this.state = 546;
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
		case 10:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 12:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u0228\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x07\x025\n\x02\f\x02\x0E\x02" +
		"8\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02>\n\x02\f\x02\x0E\x02A" +
		"\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03I\n\x03" +
		"\f\x03\x0E\x03L\v\x03\x05\x03N\n\x03\x03\x04\x07\x04Q\n\x04\f\x04\x0E" +
		"\x04T\v\x04\x03\x04\x03\x04\x03\x04\x07\x04Y\n\x04\f\x04\x0E\x04\\\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05a\n\x05\x05\x05c\n\x05\x03\x06\x03\x06" +
		"\x05\x06g\n\x06\x03\x06\x05\x06j\n\x06\x03\x06\x03\x06\x05\x06n\n\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06u\n\x06\r\x06\x0E\x06" +
		"v\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x7F\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x87\n\x07\x03\x07" +
		"\x05\x07\x8A\n\x07\x03\x07\x03\x07\x05\x07\x8E\n\x07\x03\x07\x03\x07\x05" +
		"\x07\x92\n\x07\x03\x07\x05\x07\x95\n\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\x9A\n\x07\x05\x07\x9C\n\x07\x03\b\x03\b\x05\b\xA0\n\b\x03\b\x03\b\x05" +
		"\b\xA4\n\b\x03\b\x05\b\xA7\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\xAD\n\t\x03" +
		"\t\x03\t\x05\t\xB1\n\t\x03\t\x05\t\xB4\n\t\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\xBA\n\n\x03\n\x03\n\x05\n\xBE\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xCC\n\n\x03\n\x03\n\x03\n" +
		"\x05\n\xD1\n\n\x03\n\x03\n\x03\n\x03\n\x06\n\xD7\n\n\r\n\x0E\n\xD8\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xE2\n\n\x03\v\x03\v\x05\v" +
		"\xE6\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xEF\n\v\f\v\x0E" +
		"\v\xF2\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xFC\n" +
		"\v\f\v\x0E\v\xFF\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\u0117\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\u011E\n\f" +
		"\r\f\x0E\f\u011F\x03\f\x05\f\u0123\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07" +
		"\f\u012A\n\f\f\f\x0E\f\u012D\v\f\x05\f\u012F\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u013A\n\f\f\f\x0E\f\u013D\v\f\x03" +
		"\f\x03\f\x05\f\u0141\n\f\x03\f\x05\f\u0144\n\f\x03\f\x03\f\x05\f\u0148" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u0162\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u016A" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0170\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u0176\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u0181\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\u018B" +
		"\n\f\r\f\x0E\f\u018C\x03\f\x05\f\u0190\n\f\x07\f\u0192\n\f\f\f\x0E\f\u0195" +
		"\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u019D\n\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u01A2\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01A6\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01AF\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u01BC\n\x0E\f\x0E\x0E\x0E\u01BF\v\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01C9\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u01CF\n\x12\f\x12\x0E\x12\u01D2" +
		"\v\x12\x05\x12\u01D4\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u01DB\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u01E3\n\x14\f\x14\x0E\x14\u01E6\v\x14\x05\x14\u01E8\n\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u01F0\n\x15\f\x15\x0E\x15" +
		"\u01F3\v\x15\x05\x15\u01F5\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x07\x16\u01FD\n\x16\f\x16\x0E\x16\u0200\v\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0208\n\x17\f\x17\x0E\x17\u020B" +
		"\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x06\x18\u0216\n\x18\r\x18\x0E\x18\u0217\x03\x18\x05\x18\u021B" +
		"\n\x18\x03\x19\x03\x19\x05\x19\u021F\n\x19\x03\x19\x03\x19\x05\x19\u0223" +
		"\n\x19\x03\x19\x05\x19\u0226\n\x19\x03\x19\x02\x02\x04\x16\x1A\x1A\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x02\x02\b\x05\x02\x19\x19\x1F\x1F!!\x05\x02,,0022\x04\x02" +
		"$$++\x04\x02\'\'**\b\x02#$&\'*02355>>\x07\x02\v\x15\x17\x18\x1A\x1C  " +
		">>\x02\u0287\x026\x03\x02\x02\x02\x04B\x03\x02\x02\x02\x06R\x03\x02\x02" +
		"\x02\bb\x03\x02\x02\x02\nd\x03\x02\x02\x02\f\x9B\x03\x02\x02\x02\x0E\x9D" +
		"\x03\x02\x02\x02\x10\xA8\x03\x02\x02\x02\x12\xE1\x03\x02\x02\x02\x14\u0116" +
		"\x03\x02\x02\x02\x16\u0143\x03\x02\x02\x02\x18\u019C\x03\x02\x02\x02\x1A" +
		"\u01AE\x03\x02\x02\x02\x1C\u01C0\x03\x02\x02\x02\x1E\u01C2\x03\x02\x02" +
		"\x02 \u01C4\x03\x02\x02\x02\"\u01CA\x03\x02\x02\x02$\u01DA\x03\x02\x02" +
		"\x02&\u01DE\x03\x02\x02\x02(\u01EB\x03\x02\x02\x02*\u01F8\x03\x02\x02" +
		"\x02,\u0203\x03\x02\x02\x02.\u021A\x03\x02\x02\x020\u0225\x03\x02\x02" +
		"\x0225\x05\x04\x03\x0235\x07?\x02\x0242\x03\x02\x02\x0243\x03\x02\x02" +
		"\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x027?\x03\x02\x02" +
		"\x0286\x03\x02\x02\x029>\x05\n\x06\x02:>\x05\x0E\b\x02;>\x05\x12\n\x02" +
		"<>\x07?\x02\x02=9\x03\x02\x02\x02=:\x03\x02\x02\x02=;\x03\x02\x02\x02" +
		"=<\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02" +
		"@\x03\x03\x02\x02\x02A?\x03\x02\x02\x02BC\x07\x1E\x02\x02CM\x05\x06\x04" +
		"\x02DE\x07)\x02\x02EJ\x05\b\x05\x02FG\x07(\x02\x02GI\x05\b\x05\x02HF\x03" +
		"\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KN\x03" +
		"\x02\x02\x02LJ\x03\x02\x02\x02MD\x03\x02\x02\x02MN\x03\x02\x02\x02N\x05" +
		"\x03\x02\x02\x02OQ\x07#\x02\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02RP" +
		"\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"UZ\x05\x1E\x10\x02VW\x07#\x02\x02WY\x05\x1E\x10\x02XV\x03\x02\x02\x02" +
		"Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\x07\x03\x02\x02" +
		"\x02\\Z\x03\x02\x02\x02]c\x05\x1E\x10\x02^`\x07\f\x02\x02_a\x05\x1E\x10" +
		"\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x03\x02\x02\x02b]\x03\x02\x02" +
		"\x02b^\x03\x02\x02\x02c\t\x03\x02\x02\x02df\x05\x1E\x10\x02eg\x05,\x17" +
		"\x02fe\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hj\x05\"\x12" +
		"\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jm\x03\x02\x02\x02kl\x07\v\x02" +
		"\x02ln\x05\x1A\x0E\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02" +
		"\x02op\x07)\x02\x02pq\x07?\x02\x02qt\x07\x03\x02\x02ru\x05\f\x07\x02s" +
		"u\x07?\x02\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02uv\x03\x02\x02\x02v" +
		"t\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x07\x04\x02\x02" +
		"y\v\x03\x02\x02\x02z{\x05\x1E\x10\x02{~\x05\x1A\x0E\x02|}\x07/\x02\x02" +
		"}\x7F\x05\x16\f\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x9C\x03" +
		"\x02\x02\x02\x80\x81\x07\x14\x02\x02\x81\x9C\x05.\x18\x02\x82\x83\t\x02" +
		"\x02\x02\x83\x84\x05\x1C\x0F\x02\x84\x86\x05\"\x12\x02\x85\x87\x05\x1A" +
		"\x0E\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x03\x02" +
		"\x02\x02\x88\x8A\x05.\x18\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02" +
		"\x02\x02\x8A\x9C\x03\x02\x02\x02\x8B\x8D\x05\x1E\x10\x02\x8C\x8E\x05," +
		"\x17\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02" +
		"\x02\x02\x8F\x91\x05\"\x12\x02\x90\x92\x05\x1A\x0E\x02\x91\x90\x03\x02" +
		"\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94\x03\x02\x02\x02\x93\x95\x05." +
		"\x18\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x9C\x03\x02" +
		"\x02\x02\x96\x97\x07\x16\x02\x02\x97\x99\x05\x16\f\x02\x98\x9A\x05.\x18" +
		"\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02" +
		"\x02\x9Bz\x03\x02\x02\x02\x9B\x80\x03\x02\x02\x02\x9B\x82\x03\x02\x02" +
		"\x02\x9B\x8B\x03\x02\x02\x02\x9B\x96\x03\x02\x02\x02\x9C\r\x03\x02\x02" +
		"\x02\x9D\x9F\x05\x1E\x10\x02\x9E\xA0\x05,\x17\x02\x9F\x9E\x03\x02\x02" +
		"\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x05\"\x12" +
		"\x02\xA2\xA4\x05\x1A\x0E\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02" +
		"\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA7\x05.\x18\x02\xA6\xA5\x03\x02\x02" +
		"\x02\xA6\xA7\x03\x02\x02\x02\xA7\x0F\x03\x02\x02\x02\xA8\xA9\x05\x1A\x0E" +
		"\x02\xA9\xAA\x07#\x02\x02\xAA\xAC\x05\x1E\x10\x02\xAB\xAD\x05,\x17\x02" +
		"\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02" +
		"\xAE\xB0\x05\"\x12\x02\xAF\xB1\x05\x1A\x0E\x02\xB0\xAF\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB4\x05.\x18\x02" +
		"\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\x11\x03\x02\x02\x02" +
		"\xB5\xBD\x07\x10\x02\x02\xB6\xB9\x05\x1E\x10\x02\xB7\xB8\x07(\x02\x02" +
		"\xB8\xBA\x05\x1E\x10\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02" +
		"\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x07\x0E\x02\x02\xBC\xBE\x03\x02\x02\x02" +
		"\xBD\xB6\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
		"\xBF\xC0\x05\x16\f\x02\xC0\xC1\x05.\x18\x02\xC1\xE2\x03\x02\x02\x02\xC2" +
		"\xC3\x07\x1A\x02\x02\xC3\xC4\x05\x16\f\x02\xC4\xC5\x05.\x18\x02\xC5\xE2" +
		"\x03\x02\x02\x02\xC6\xC7\x07\r\x02\x02\xC7\xC8\x05\x16\f\x02\xC8\xCB\x05" +
		".\x18\x02\xC9\xCA\x07\x13\x02\x02\xCA\xCC\x05.\x18\x02\xCB\xC9\x03\x02" +
		"\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xE2\x03\x02\x02\x02\xCD\xE2\x07\x18" +
		"\x02\x02\xCE\xD0\x07 \x02\x02\xCF\xD1\x05\x16\f\x02\xD0\xCF\x03\x02\x02" +
		"\x02\xD0\xD1\x03\x02\x02\x02\xD1\xE2\x03\x02\x02\x02\xD2\xD3\x07\x1B\x02" +
		"\x02\xD3\xD4\x07)\x02\x02\xD4\xD6\x05\x16\f\x02\xD5\xD7\x07?\x02\x02\xD6" +
		"\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8" +
		"\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x07\x1C\x02\x02\xDB" +
		"\xDC\x07)\x02\x02\xDC\xDD\x05\x16\f\x02\xDD\xE2\x03\x02\x02\x02\xDE\xE2" +
		"\x07=\x02\x02\xDF\xE2\x05\x14\v\x02\xE0\xE2\x05\x16\f\x02\xE1\xB5\x03" +
		"\x02\x02\x02\xE1\xC2\x03\x02\x02\x02\xE1\xC6\x03\x02\x02\x02\xE1\xCD\x03" +
		"\x02\x02\x02\xE1\xCE\x03\x02\x02\x02\xE1\xD2\x03\x02\x02\x02\xE1\xDE\x03" +
		"\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\x13\x03" +
		"\x02\x02\x02\xE3\xE5\x05\x1E\x10\x02\xE4\xE6\x05\x1A\x0E\x02\xE5\xE4\x03" +
		"\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x07" +
		"/\x02\x02\xE8\xE9\x05\x16\f\x02\xE9\u0117\x03\x02\x02\x02\xEA\xEB\x07" +
		"\x05\x02\x02\xEB\xF0\x05\x1E\x10\x02\xEC\xED\x07(\x02\x02\xED\xEF\x05" +
		"\x1E\x10\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03" +
		"\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF0\x03" +
		"\x02\x02\x02\xF3\xF4\x07\x06\x02\x02\xF4\xF5\x07/\x02\x02\xF5\xF6\x05" +
		"\x16\f\x02\xF6\u0117\x03\x02\x02\x02\xF7\xF8\x07\t\x02\x02\xF8\xFD\x05" +
		"\x1E\x10\x02\xF9\xFA\x07(\x02\x02\xFA\xFC\x05\x1E\x10\x02\xFB\xF9\x03" +
		"\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03" +
		"\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101" +
		"\x07\n\x02\x02\u0101\u0102\x07/\x02\x02\u0102\u0103\x05\x16\f\x02\u0103" +
		"\u0117\x03\x02\x02\x02\u0104\u0105\x07\x17\x02\x02\u0105\u0106\x05\x1E" +
		"\x10\x02\u0106\u0107\x07/\x02\x02\u0107\u0108\x05\x16\f\x02\u0108\u0117" +
		"\x03\x02\x02\x02\u0109\u010A\x05\x16\f\x02\u010A\u010B\x07#\x02\x02\u010B" +
		"\u010C\x05\x1E\x10\x02\u010C\u010D\x07/\x02\x02\u010D\u010E\x05\x16\f" +
		"\x02\u010E\u0117\x03\x02\x02\x02\u010F\u0110\x05\x16\f\x02\u0110\u0111" +
		"\x07\x05\x02\x02\u0111\u0112\x05\x16\f\x02\u0112\u0113\x07\x06\x02\x02" +
		"\u0113\u0114\x07/\x02\x02\u0114\u0115\x05\x16\f\x02\u0115\u0117\x03\x02" +
		"\x02\x02\u0116\xE3\x03\x02\x02\x02\u0116\xEA\x03\x02\x02\x02\u0116\xF7" +
		"\x03\x02\x02\x02\u0116\u0104\x03\x02\x02\x02\u0116\u0109\x03\x02\x02\x02" +
		"\u0116\u010F\x03\x02\x02\x02\u0117\x15\x03\x02\x02\x02\u0118\u0119\b\f" +
		"\x01\x02\u0119\u0144\x07\x17\x02\x02\u011A\u0144\x05\x1E\x10\x02\u011B" +
		"\u0144\x05\x18\r\x02\u011C\u011E\x05\x1C\x0F\x02\u011D\u011C\x03\x02\x02" +
		"\x02\u011E\u011F\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120" +
		"\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u0123\x07>\x02\x02" +
		"\u0122\u011D\x03\x02\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03" +
		"\x02\x02\x02\u0124\u0144\x05\x16\f\x12\u0125\u012E\x07\x05\x02\x02\u0126" +
		"\u012B\x05\x16\f\x02\u0127\u0128\x07(\x02\x02\u0128\u012A\x05\x16\f\x02" +
		"\u0129\u0127\x03\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03" +
		"\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D" +
		"\u012B\x03\x02\x02\x02\u012E\u0126\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0144\x07\x06\x02\x02\u0131" +
		"\u0132\x07\x07\x02\x02\u0132\u0133\x05\x16\f\x02\u0133\u0134\x07\b\x02" +
		"\x02\u0134\u0144\x03\x02\x02\x02\u0135\u0140\x076\x02\x02\u0136\u013B" +
		"\x05\x1E\x10\x02\u0137\u0138\x07(\x02\x02\u0138\u013A\x05\x1E\x10\x02" +
		"\u0139\u0137\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03" +
		"\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013E\u013F\x07)\x02\x02\u013F\u0141\x03\x02\x02" +
		"\x02\u0140\u0136\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142" +
		"\x03\x02\x02\x02\u0142\u0144\x05\x16\f\x03\u0143\u0118\x03\x02\x02\x02" +
		"\u0143\u011A\x03\x02\x02\x02\u0143\u011B\x03\x02\x02\x02\u0143\u0122\x03" +
		"\x02\x02\x02\u0143\u0125\x03\x02\x02\x02\u0143\u0131\x03\x02\x02\x02\u0143" +
		"\u0135\x03\x02\x02\x02\u0144\u0193\x03\x02\x02\x02\u0145\u0147\f\x13\x02" +
		"\x02\u0146\u0148\x071\x02\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148" +
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x07#\x02\x02" +
		"\u014A\u0192\x05\x16\f\x14\u014B\u014C\f\x10\x02\x02\u014C\u014D\x07-" +
		"\x02\x02\u014D\u0192\x05\x16\f\x11\u014E\u014F\f\x0F\x02\x02\u014F\u0150" +
		"\t\x03\x02\x02\u0150\u0192\x05\x16\f\x10\u0151\u0152\f\x0E\x02\x02\u0152" +
		"\u0153\t\x04\x02\x02\u0153\u0192\x05\x16\f\x0F\u0154\u0155\f\r\x02\x02" +
		"\u0155\u0156\x07#\x02\x02\u0156\u0157\x07#\x02\x02\u0157\u0192\x05\x16" +
		"\f\x0E\u0158\u0159\f\f\x02\x02\u0159\u015A\x07>\x02\x02\u015A\u0192\x05" +
		"\x16\f\r\u015B\u015C\f\v\x02\x02\u015C\u015D\x071\x02\x02\u015D\u0192" +
		"\x05\x16\f\f\u015E\u015F\f\n\x02\x02\u015F\u0161\t\x05\x02\x02\u0160\u0162" +
		"\x07/\x02\x02\u0161\u0160\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163\u0192\x05\x16\f\v\u0164\u0169\f\t\x02" +
		"\x02\u0165\u0166\x07/\x02\x02\u0166\u016A\x07/\x02\x02\u0167\u0168\x07" +
		"5\x02\x02\u0168\u016A\x07/\x02\x02\u0169\u0165\x03\x02\x02\x02\u0169\u0167" +
		"\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u0192\x05\x16\f\n\u016C" +
		"\u016D\f\b\x02\x02\u016D\u016F\x073\x02\x02\u016E\u0170\x073\x02\x02\u016F" +
		"\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02" +
		"\x02\x02\u0171\u0192\x05\x16\f\t\u0172\u0173\f\x07\x02\x02\u0173\u0175" +
		"\x07&\x02\x02\u0174\u0176\x07&\x02\x02\u0175\u0174\x03\x02\x02\x02\u0175" +
		"\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0192\x05\x16" +
		"\f\b\u0178\u0179\f\x06\x02\x02\u0179\u017A\x07&\x02\x02\u017A\u017B\x05" +
		"\x1E\x10\x02\u017B\u017C\x07)\x02\x02\u017C\u017D\x05\x16\f\x07\u017D" +
		"\u0192\x03\x02\x02\x02\u017E\u0180\f\x15\x02\x02\u017F\u0181\x05*\x16" +
		"\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0192\x05&\x14\x02\u0183\u0184\f\x14\x02\x02\u0184" +
		"\u0185\x07\x05\x02\x02\u0185\u0186\x05\x16\f\x02\u0186\u0187\x07\x06\x02" +
		"\x02\u0187\u0192\x03\x02\x02\x02\u0188\u018F\f\x11\x02\x02\u0189\u018B" +
		"\x05\x1C\x0F\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02" +
		"\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u0190\x03" +
		"\x02\x02\x02\u018E\u0190\x07>\x02\x02\u018F\u018A\x03\x02\x02\x02\u018F" +
		"\u018E\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191\u0145\x03\x02" +
		"\x02\x02\u0191\u014B\x03\x02\x02\x02\u0191\u014E\x03\x02\x02\x02\u0191" +
		"\u0151\x03\x02\x02\x02\u0191\u0154\x03\x02\x02\x02\u0191\u0158\x03\x02" +
		"\x02\x02\u0191\u015B\x03\x02\x02\x02\u0191\u015E\x03\x02\x02\x02\u0191" +
		"\u0164\x03\x02\x02\x02\u0191\u016C\x03\x02\x02\x02\u0191\u0172\x03\x02" +
		"\x02\x02\u0191\u0178\x03\x02\x02\x02\u0191\u017E\x03\x02\x02\x02\u0191" +
		"\u0183\x03\x02\x02\x02\u0191\u0188\x03\x02\x02\x02\u0192\u0195\x03\x02" +
		"\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194" +
		"\x17\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u019D\x077\x02" +
		"\x02\u0197\u019D\x07:\x02\x02\u0198\u019D\x079\x02\x02\u0199\u019D\x07" +
		"8\x02\x02\u019A\u019D\x07;\x02\x02\u019B\u019D\x07<\x02\x02\u019C\u0196" +
		"\x03\x02\x02\x02\u019C\u0197\x03\x02\x02\x02\u019C\u0198\x03\x02\x02\x02" +
		"\u019C\u0199\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019B\x03" +
		"\x02\x02\x02\u019D\x19\x03\x02\x02\x02\u019E\u019F\b\x0E\x01\x02\u019F" +
		"\u01A1\x05\x1E\x10\x02\u01A0\u01A2\x05*\x16\x02\u01A1\u01A0\x03\x02\x02" +
		"\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01AF\x03\x02\x02\x02\u01A3\u01AF" +
		"\x05\x18\r\x02\u01A4\u01A6\x05,\x17\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x05(\x15" +
		"\x02\u01A8\u01A9\x05\x1A\x0E\x04\u01A9\u01AF\x03\x02\x02\x02\u01AA\u01AB" +
		"\x07\x07\x02\x02\u01AB\u01AC\x05\x1A\x0E\x02\u01AC\u01AD\x07\b\x02\x02" +
		"\u01AD\u01AF\x03\x02\x02\x02\u01AE\u019E\x03\x02\x02\x02\u01AE\u01A3\x03" +
		"\x02\x02\x02\u01AE\u01A5\x03\x02\x02\x02\u01AE\u01AA\x03\x02\x02\x02\u01AF" +
		"\u01BD\x03\x02\x02\x02\u01B0\u01B1\f\x06\x02\x02\u01B1\u01B2\x073\x02" +
		"\x02\u01B2\u01BC\x05\x1A\x0E\x07\u01B3\u01B4\f\x05\x02\x02\u01B4\u01B5" +
		"\x07&\x02\x02\u01B5\u01BC\x05\x1A\x0E\x06\u01B6\u01B7\f\b\x02\x02\u01B7" +
		"\u01BC\x071\x02\x02\u01B8\u01B9\f\x07\x02\x02\u01B9\u01BA\x07\x05\x02" +
		"\x02\u01BA\u01BC\x07\x06\x02\x02\u01BB\u01B0\x03\x02\x02\x02\u01BB\u01B3" +
		"\x03\x02\x02\x02\u01BB\u01B6\x03\x02\x02\x02\u01BB\u01B8\x03\x02\x02\x02" +
		"\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03" +
		"\x02\x02\x02\u01BE\x1B\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0" +
		"\u01C1\t\x06\x02\x02\u01C1\x1D\x03\x02\x02\x02\u01C2\u01C3\t\x07\x02\x02" +
		"\u01C3\x1F\x03\x02\x02\x02\u01C4\u01C5\x05\x1E\x10\x02\u01C5\u01C8\x05" +
		"\x1A\x0E\x02\u01C6\u01C7\x07%\x02\x02\u01C7\u01C9\x05\x1E\x10\x02\u01C8" +
		"\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9!\x03\x02\x02" +
		"\x02\u01CA\u01D3\x07\x07\x02\x02\u01CB\u01D0\x05 \x11\x02\u01CC\u01CD" +
		"\x07(\x02\x02\u01CD\u01CF\x05 \x11\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF" +
		"\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02" +
		"\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3" +
		"\u01CB\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03\x02" +
		"\x02\x02\u01D5\u01D6\x07\b\x02\x02\u01D6#\x03\x02\x02\x02\u01D7\u01D8" +
		"\x05\x1E\x10\x02\u01D8\u01D9\x07/\x02\x02\u01D9\u01DB\x03\x02\x02\x02" +
		"\u01DA\u01D7\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03" +
		"\x02\x02\x02\u01DC\u01DD\x05\x16\f\x02\u01DD%\x03\x02\x02\x02\u01DE\u01E7" +
		"\x07\x07\x02\x02\u01DF\u01E4\x05$\x13\x02\u01E0\u01E1\x07(\x02\x02\u01E1" +
		"\u01E3\x05$\x13\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02" +
		"\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E8" +
		"\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01DF\x03\x02\x02\x02" +
		"\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x07" +
		"\b\x02\x02\u01EA\'\x03\x02\x02\x02\u01EB\u01F4\x07\x07\x02\x02\u01EC\u01F1" +
		"\x05\x1A\x0E\x02\u01ED\u01EE\x07(\x02\x02\u01EE\u01F0\x05\x1A\x0E\x02" +
		"\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03" +
		"\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3" +
		"\u01F1\x03\x02\x02\x02\u01F4\u01EC\x03\x02\x02\x02\u01F4\u01F5\x03\x02" +
		"\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x07\b\x02\x02\u01F7)" +
		"\x03\x02\x02\x02\u01F8\u01F9\x07\'\x02\x02\u01F9\u01FE\x05\x1A\x0E\x02" +
		"\u01FA\u01FB\x07(\x02\x02\u01FB\u01FD\x05\x1A\x0E\x02\u01FC\u01FA\x03" +
		"\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE" +
		"\u01FF\x03\x02\x02\x02\u01FF\u0201\x03\x02\x02\x02\u0200\u01FE\x03\x02" +
		"\x02\x02\u0201\u0202\x07*\x02\x02\u0202+\x03\x02\x02\x02\u0203\u0204\x07" +
		"\'\x02\x02\u0204\u0209\x05\x1E\x10\x02\u0205\u0206\x07(\x02\x02\u0206" +
		"\u0208\x05\x1E\x10\x02\u0207\u0205\x03\x02\x02\x02\u0208\u020B\x03\x02" +
		"\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020C\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020D\x07*\x02" +
		"\x02\u020D-\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u020E\u020F\x07)\x02\x02\u020F\u021B\x05\x12\n\x02\u0210\u0211\x07" +
		")\x02\x02\u0211\u0212\x07?\x02\x02\u0212\u0215\x07\x03\x02\x02\u0213\u0216" +
		"\x05\x12\n\x02\u0214\u0216\x07?\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215" +
		"\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0215\x03\x02" +
		"\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219" +
		"\u021B\x07\x04\x02\x02\u021A\u020E\x03\x02\x02\x02\u021A\u0210\x03\x02" +
		"\x02\x02\u021B/\x03\x02\x02\x02\u021C\u0226\x05.\x18\x02\u021D\u021F\x07" +
		"?\x02\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F" +
		"\u0220\x03\x02\x02\x02\u0220\u0222\x07/\x02\x02\u0221\u0223\x07?\x02\x02" +
		"\u0222\u0221\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03" +
		"\x02\x02\x02\u0224\u0226\x05\x16\f\x02\u0225\u021C\x03\x02\x02\x02\u0225" +
		"\u021E\x03\x02\x02\x02\u02261\x03\x02\x02\x02P46=?JMRZ`bfimtv~\x86\x89" +
		"\x8D\x91\x94\x99\x9B\x9F\xA3\xA6\xAC\xB0\xB3\xB9\xBD\xCB\xD0\xD8\xE1\xE5" +
		"\xF0\xFD\u0116\u011F\u0122\u012B\u012E\u013B\u0140\u0143\u0147\u0161\u0169" +
		"\u016F\u0175\u0180\u018C\u018F\u0191\u0193\u019C\u01A1\u01A5\u01AE\u01BB" +
		"\u01BD\u01C8\u01D0\u01D3\u01DA\u01E4\u01E7\u01F1\u01F4\u01FE\u0209\u0215" +
		"\u0217\u021A\u021E\u0222\u0225";
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
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
export class TestMemberContext extends MemberContext {
	public TEST(): TerminalNode { return this.getToken(XonParser.TEST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
	public THIS(): TerminalNode { return this.getToken(XonParser.THIS, 0); }
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
export class InstanceExpressionContext extends ExpressionContext {
	public THIS(): TerminalNode { return this.getToken(XonParser.THIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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
	public THIS(): TerminalNode | undefined { return this.tryGetToken(XonParser.THIS, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(XonParser.BREAK, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(XonParser.WHILE, 0); }
	public ACTUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXPECT, 0); }
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


