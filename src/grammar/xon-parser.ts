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
	public static readonly IS = 3;
	public static readonly AS = 4;
	public static readonly IF = 5;
	public static readonly IN = 6;
	public static readonly OR = 7;
	public static readonly FOR = 8;
	public static readonly NOT = 9;
	public static readonly AND = 10;
	public static readonly ELSE = 11;
	public static readonly INIT = 12;
	public static readonly LOOP = 13;
	public static readonly TEST = 14;
	public static readonly THIS = 15;
	public static readonly BREAK = 16;
	public static readonly WHILE = 17;
	public static readonly ACTUAL = 18;
	public static readonly EXPECT = 19;
	public static readonly RETURN = 20;
	public static readonly OPEN_BRACKET = 21;
	public static readonly CLOSE_BRACKET = 22;
	public static readonly OPEN_PAREN = 23;
	public static readonly CLOSE_PAREN = 24;
	public static readonly OPEN_BRACE = 25;
	public static readonly CLOSE_BRACE = 26;
	public static readonly AD = 27;
	public static readonly PLUS = 28;
	public static readonly HASH = 29;
	public static readonly PIPE = 30;
	public static readonly COMMA = 31;
	public static readonly COLON = 32;
	public static readonly MINUS = 33;
	public static readonly SLASH = 34;
	public static readonly CARET = 35;
	public static readonly TILDE = 36;
	public static readonly SPREAD = 37;
	public static readonly RANGE = 38;
	public static readonly DOT = 39;
	public static readonly LESS_THAN_EQUAL = 40;
	public static readonly MORE_THAN_EQUAL = 41;
	public static readonly LESS_THAN = 42;
	public static readonly MORE_THAN = 43;
	public static readonly ASSIGN = 44;
	public static readonly EQUAL = 45;
	public static readonly NOT_EQUAL = 46;
	public static readonly BIT_AND = 47;
	public static readonly BIT_OR = 48;
	public static readonly BIT_XOR = 49;
	public static readonly LAMBDA = 50;
	public static readonly MODULO = 51;
	public static readonly QUESTION = 52;
	public static readonly ASTERISK = 53;
	public static readonly UNDERSCORE = 54;
	public static readonly EXCLAMATION = 55;
	public static readonly NULL_LITERAL = 56;
	public static readonly FLOAT_LITERAL = 57;
	public static readonly INTEGER_LITERAL = 58;
	public static readonly BOOLEAN_LITERAL = 59;
	public static readonly CHAR_LITERAL = 60;
	public static readonly STRING_LITERAL = 61;
	public static readonly PREPROCESSOR = 62;
	public static readonly ID = 63;
	public static readonly DEFINITION_ID = 64;
	public static readonly NL = 65;
	public static readonly WS = 66;
	public static readonly COMMENT = 67;
	public static readonly RULE_program = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryMember = 2;
	public static readonly RULE_definition = 3;
	public static readonly RULE_member = 4;
	public static readonly RULE_test = 5;
	public static readonly RULE_function = 6;
	public static readonly RULE_extensionMethod = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_literal = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_operator = 12;
	public static readonly RULE_id = 13;
	public static readonly RULE_commonId = 14;
	public static readonly RULE_parameter = 15;
	public static readonly RULE_parameters = 16;
	public static readonly RULE_argument = 17;
	public static readonly RULE_arguments = 18;
	public static readonly RULE_typeParameters = 19;
	public static readonly RULE_generics = 20;
	public static readonly RULE_declaredGenerics = 21;
	public static readonly RULE_body = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryMember", "definition", "member", "test", 
		"function", "extensionMethod", "statement", "expression", "literal", "type", 
		"operator", "id", "commonId", "parameter", "parameters", "argument", "arguments", 
		"typeParameters", "generics", "declaredGenerics", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'is'", "'as'", "'if'", "'in'", "'or'", 
		"'for'", "'not'", "'and'", "'else'", "'init'", "'loop'", "'test'", "'this'", 
		"'break'", "'while'", "'actual'", "'expect'", "'return'", "'['", "']'", 
		"'('", "')'", "'{'", "'}'", "'@'", "'+'", "'#'", "'|'", "','", "':'", 
		"'-'", "'/'", "'^'", "'~'", "'...'", "'..'", "'.'", "'<='", "'>='", "'<'", 
		"'>'", "'='", "'=='", "'!='", "'&&'", "'||'", "'^^'", "'\\'", "'%'", "'?'", 
		"'*'", "'_'", "'!'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "IS", "AS", "IF", "IN", "OR", "FOR", "NOT", 
		"AND", "ELSE", "INIT", "LOOP", "TEST", "THIS", "BREAK", "WHILE", "ACTUAL", 
		"EXPECT", "RETURN", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "AD", "PLUS", "HASH", "PIPE", "COMMA", "COLON", 
		"MINUS", "SLASH", "CARET", "TILDE", "SPREAD", "RANGE", "DOT", "LESS_THAN_EQUAL", 
		"MORE_THAN_EQUAL", "LESS_THAN", "MORE_THAN", "ASSIGN", "EQUAL", "NOT_EQUAL", 
		"BIT_AND", "BIT_OR", "BIT_XOR", "LAMBDA", "MODULO", "QUESTION", "ASTERISK", 
		"UNDERSCORE", "EXCLAMATION", "NULL_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"BOOLEAN_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", 
		"DEFINITION_ID", "NL", "WS", "COMMENT",
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
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.TEST - 3)) | (1 << (XonParser.THIS - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.MINUS - 3)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.LESS_THAN - 42)) | (1 << (XonParser.LAMBDA - 42)) | (1 << (XonParser.NULL_LITERAL - 42)) | (1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.BOOLEAN_LITERAL - 42)) | (1 << (XonParser.CHAR_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.PREPROCESSOR - 42)) | (1 << (XonParser.ID - 42)) | (1 << (XonParser.DEFINITION_ID - 42)) | (1 << (XonParser.NL - 42)))) !== 0)) {
				{
				this.state = 52;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 46;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 47;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 48;
					this.function();
					}
					break;

				case 4:
					{
					this.state = 49;
					this.extensionMethod();
					}
					break;

				case 5:
					{
					this.state = 50;
					this.definition();
					}
					break;

				case 6:
					{
					this.state = 51;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 56;
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
			this.state = 57;
			_localctx._scope = this.id();
			this.state = 58;
			this.match(XonParser.DOT);
			this.state = 59;
			_localctx._name = this.id();
			this.state = 60;
			this.match(XonParser.COLON);
			this.state = 61;
			this.libraryMember();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 62;
				this.match(XonParser.COMMA);
				this.state = 63;
				this.libraryMember();
				}
				}
				this.state = 68;
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
		this.enterRule(_localctx, 4, XonParser.RULE_libraryMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			_localctx._name = this.commonId();
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 70;
				this.match(XonParser.AS);
				this.state = 71;
				_localctx._alias = this.commonId();
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(XonParser.DEFINITION_ID);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 75;
				this.declaredGenerics();
				}
			}

			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 78;
				this.parameters();
				}
			}

			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 81;
				this.match(XonParser.IS);
				this.state = 82;
				this.type(0);
				}
			}

			this.state = 85;
			this.match(XonParser.COLON);
			this.state = 86;
			this.match(XonParser.NL);
			this.state = 87;
			this.match(XonParser.INDENT);
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 90;
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
				case XonParser.WHILE:
				case XonParser.ACTUAL:
				case XonParser.EXPECT:
				case XonParser.RETURN:
				case XonParser.PLUS:
				case XonParser.MINUS:
				case XonParser.SLASH:
				case XonParser.CARET:
				case XonParser.RANGE:
				case XonParser.LESS_THAN:
				case XonParser.MORE_THAN:
				case XonParser.EQUAL:
				case XonParser.BIT_AND:
				case XonParser.BIT_OR:
				case XonParser.BIT_XOR:
				case XonParser.MODULO:
				case XonParser.ASTERISK:
				case XonParser.ID:
					{
					this.state = 88;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 89;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.TEST - 3)) | (1 << (XonParser.THIS - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.PLUS - 3)) | (1 << (XonParser.MINUS - 3)) | (1 << (XonParser.SLASH - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.CARET - 35)) | (1 << (XonParser.RANGE - 35)) | (1 << (XonParser.LESS_THAN - 35)) | (1 << (XonParser.MORE_THAN - 35)) | (1 << (XonParser.EQUAL - 35)) | (1 << (XonParser.BIT_AND - 35)) | (1 << (XonParser.BIT_OR - 35)) | (1 << (XonParser.BIT_XOR - 35)) | (1 << (XonParser.MODULO - 35)) | (1 << (XonParser.ASTERISK - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
			this.state = 94;
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
		this.enterRule(_localctx, 8, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.id();
				this.state = 97;
				this.type(0);
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 98;
					this.match(XonParser.ASSIGN);
					this.state = 99;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.match(XonParser.INIT);
				this.state = 103;
				this.body();
				}
				break;

			case 3:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 104;
				this.operator();
				this.state = 105;
				this.parameters();
				this.state = 106;
				this.type(0);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 107;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.id();
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 111;
					this.declaredGenerics();
					}
				}

				this.state = 114;
				this.parameters();
				this.state = 115;
				this.type(0);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 116;
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_test);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(XonParser.TEST);
			this.state = 122;
			this.expression(0);
			this.state = 123;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
			this.state = 125;
			this.id();
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 126;
				this.declaredGenerics();
				}
			}

			this.state = 129;
			this.parameters();
			this.state = 130;
			this.type(0);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 131;
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
			this.state = 134;
			this.type(0);
			this.state = 135;
			this.match(XonParser.DOT);
			this.state = 136;
			this.id();
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 137;
				this.declaredGenerics();
				}
			}

			this.state = 140;
			this.parameters();
			this.state = 141;
			this.type(0);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 142;
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
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				this.match(XonParser.FOR);
				this.state = 153;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 146;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 147;
						this.match(XonParser.COMMA);
						this.state = 148;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 151;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 155;
				this.expression(0);
				this.state = 156;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.match(XonParser.WHILE);
				this.state = 159;
				this.expression(0);
				this.state = 160;
				this.body();
				}
				break;

			case 3:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 162;
				this.match(XonParser.LOOP);
				this.state = 163;
				this.body();
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 164;
				this.match(XonParser.IF);
				this.state = 165;
				this.expression(0);
				this.state = 166;
				this.body();
				this.state = 169;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 167;
					this.match(XonParser.ELSE);
					this.state = 168;
					this.body();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 171;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 172;
				this.match(XonParser.RETURN);
				this.state = 174;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 173;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new IdAssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 176;
				this.id();
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.LESS_THAN - 42)) | (1 << (XonParser.NULL_LITERAL - 42)) | (1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.BOOLEAN_LITERAL - 42)) | (1 << (XonParser.CHAR_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.DEFINITION_ID - 42)))) !== 0)) {
					{
					this.state = 177;
					this.type(0);
					}
				}

				this.state = 180;
				this.match(XonParser.ASSIGN);
				this.state = 181;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 183;
				this.match(XonParser.ACTUAL);
				this.state = 184;
				this.match(XonParser.COLON);
				this.state = 185;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 186;
					this.match(XonParser.NL);
					}
					}
					this.state = 189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 191;
				this.match(XonParser.EXPECT);
				this.state = 192;
				this.match(XonParser.COLON);
				this.state = 193;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 9:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 195;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 196;
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
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 200;
				this.match(XonParser.THIS);
				}
				break;

			case 2:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 201;
				this.match(XonParser.DEFINITION_ID);
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 202;
					this.generics();
					}
				}

				this.state = 205;
				this.arguments();
				}
				break;

			case 3:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.id();
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 207;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 208;
				this.match(XonParser.MINUS);
				this.state = 209;
				this.expression(13);
				}
				break;

			case 6:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 210;
				this.match(XonParser.NOT);
				this.state = 211;
				this.expression(12);
				}
				break;

			case 7:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 212;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.MINUS - 33)) | (1 << (XonParser.LAMBDA - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.DEFINITION_ID - 33)))) !== 0)) {
					{
					this.state = 213;
					this.expression(0);
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 214;
						this.match(XonParser.COMMA);
						this.state = 215;
						this.expression(0);
						}
						}
						this.state = 220;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 223;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 224;
				this.match(XonParser.OPEN_PAREN);
				this.state = 225;
				this.expression(0);
				this.state = 226;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 228;
				this.match(XonParser.LAMBDA);
				this.state = 239;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 229;
					this.id();
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 230;
						this.match(XonParser.COMMA);
						this.state = 231;
						this.id();
						}
						}
						this.state = 236;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 237;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 241;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 291;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 289;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 244;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 245;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 246;
						(_localctx as PowExpressionContext)._right = this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 247;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 248;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.SLASH - 34)) | (1 << (XonParser.MODULO - 34)) | (1 << (XonParser.ASTERISK - 34)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 249;
						(_localctx as MulDivModExpressionContext)._right = this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 250;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 251;
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
						this.state = 252;
						(_localctx as AddSubExpressionContext)._right = this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 253;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 254;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 255;
						(_localctx as RangeExpressionContext)._right = this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 256;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 257;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.LESS_THAN_EQUAL - 40)) | (1 << (XonParser.MORE_THAN_EQUAL - 40)) | (1 << (XonParser.LESS_THAN - 40)) | (1 << (XonParser.MORE_THAN - 40)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 258;
						(_localctx as RelationalExpressionContext)._right = this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 259;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 260;
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
						this.state = 261;
						(_localctx as EqualityExpressionContext)._right = this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 262;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 263;
						this.match(XonParser.AND);
						this.state = 264;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 265;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 266;
						this.match(XonParser.OR);
						this.state = 267;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 268;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 269;
						this.match(XonParser.PIPE);
						this.state = 273;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
						case 1:
							{
							this.state = 270;
							this.id();
							this.state = 271;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 275;
						(_localctx as PipeExpressionContext)._right = this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 276;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 277;
						this.match(XonParser.DOT);
						this.state = 278;
						this.id();
						}
						break;

					case 11:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 279;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 281;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS_THAN) {
							{
							this.state = 280;
							this.generics();
							}
						}

						this.state = 283;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 284;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 285;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 286;
						this.expression(0);
						this.state = 287;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
		this.enterRule(_localctx, 20, XonParser.RULE_literal);
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 294;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 296;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 297;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 298;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 299;
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 303;
				this.match(XonParser.DEFINITION_ID);
				this.state = 305;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 304;
					this.generics();
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
				this.state = 307;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 308;
					this.declaredGenerics();
					}
				}

				this.state = 311;
				this.typeParameters();
				this.state = 312;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.match(XonParser.OPEN_PAREN);
				this.state = 315;
				this.type(0);
				this.state = 316;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 330;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 328;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 320;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 321;
						this.match(XonParser.PIPE);
						this.state = 322;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 323;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 324;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 325;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 326;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 327;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
		this.enterRule(_localctx, 24, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (XonParser.PLUS - 28)) | (1 << (XonParser.MINUS - 28)) | (1 << (XonParser.SLASH - 28)) | (1 << (XonParser.CARET - 28)) | (1 << (XonParser.RANGE - 28)) | (1 << (XonParser.LESS_THAN - 28)) | (1 << (XonParser.MORE_THAN - 28)) | (1 << (XonParser.EQUAL - 28)) | (1 << (XonParser.BIT_AND - 28)) | (1 << (XonParser.BIT_OR - 28)) | (1 << (XonParser.BIT_XOR - 28)) | (1 << (XonParser.MODULO - 28)) | (1 << (XonParser.ASTERISK - 28)))) !== 0))) {
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
		this.enterRule(_localctx, 26, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || _la === XonParser.ID)) {
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
	public commonId(): CommonIdContext {
		let _localctx: CommonIdContext = new CommonIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_commonId);
		try {
			this.state = 339;
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
			case XonParser.WHILE:
			case XonParser.ACTUAL:
			case XonParser.EXPECT:
			case XonParser.RETURN:
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 337;
				this.id();
				}
				break;
			case XonParser.DEFINITION_ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 338;
				this.match(XonParser.DEFINITION_ID);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			_localctx._name = this.id();
			this.state = 342;
			this.type(0);
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 343;
				this.match(XonParser.HASH);
				this.state = 344;
				_localctx._meta = this.match(XonParser.DEFINITION_ID);
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
			this.state = 347;
			this.match(XonParser.OPEN_PAREN);
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || _la === XonParser.ID) {
				{
				this.state = 348;
				this.parameter();
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 349;
					this.match(XonParser.COMMA);
					this.state = 350;
					this.parameter();
					}
					}
					this.state = 355;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 358;
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
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 360;
				this.id();
				this.state = 361;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 365;
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
			this.state = 367;
			this.match(XonParser.OPEN_PAREN);
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.MINUS - 33)) | (1 << (XonParser.LAMBDA - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.DEFINITION_ID - 33)))) !== 0)) {
				{
				this.state = 368;
				this.argument();
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 369;
					this.match(XonParser.COMMA);
					this.state = 370;
					this.argument();
					}
					}
					this.state = 375;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 378;
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
			this.state = 380;
			this.match(XonParser.OPEN_PAREN);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.LESS_THAN - 42)) | (1 << (XonParser.NULL_LITERAL - 42)) | (1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.BOOLEAN_LITERAL - 42)) | (1 << (XonParser.CHAR_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.DEFINITION_ID - 42)))) !== 0)) {
				{
				this.state = 381;
				this.type(0);
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 382;
					this.match(XonParser.COMMA);
					this.state = 383;
					this.type(0);
					}
					}
					this.state = 388;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public generics(): GenericsContext {
		let _localctx: GenericsContext = new GenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_generics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.match(XonParser.LESS_THAN);
			this.state = 394;
			this.type(0);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 395;
				this.match(XonParser.COMMA);
				this.state = 396;
				this.type(0);
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 402;
			this.match(XonParser.MORE_THAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public declaredGenerics(): DeclaredGenericsContext {
		let _localctx: DeclaredGenericsContext = new DeclaredGenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_declaredGenerics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(XonParser.LESS_THAN);
			this.state = 405;
			this.match(XonParser.DEFINITION_ID);
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 406;
				this.match(XonParser.COMMA);
				this.state = 407;
				this.match(XonParser.DEFINITION_ID);
				}
				}
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 413;
			this.match(XonParser.MORE_THAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 415;
				this.match(XonParser.COLON);
				this.state = 416;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 417;
				this.match(XonParser.COLON);
				this.state = 418;
				this.match(XonParser.NL);
				this.state = 419;
				this.match(XonParser.INDENT);
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 422;
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
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.EXPECT:
					case XonParser.RETURN:
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.MINUS:
					case XonParser.LAMBDA:
					case XonParser.NULL_LITERAL:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.BOOLEAN_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.DEFINITION_ID:
						{
						this.state = 420;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 421;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 424;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.TEST - 3)) | (1 << (XonParser.THIS - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.MINUS - 3)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (XonParser.LAMBDA - 50)) | (1 << (XonParser.NULL_LITERAL - 50)) | (1 << (XonParser.FLOAT_LITERAL - 50)) | (1 << (XonParser.INTEGER_LITERAL - 50)) | (1 << (XonParser.BOOLEAN_LITERAL - 50)) | (1 << (XonParser.CHAR_LITERAL - 50)) | (1 << (XonParser.STRING_LITERAL - 50)) | (1 << (XonParser.PREPROCESSOR - 50)) | (1 << (XonParser.ID - 50)) | (1 << (XonParser.DEFINITION_ID - 50)) | (1 << (XonParser.NL - 50)))) !== 0));
				this.state = 426;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 11:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);

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
			return this.precpred(this._ctx, 17);

		case 10:
			return this.precpred(this._ctx, 16);

		case 11:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 5);

		case 14:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u01B0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x027\n" +
		"\x02\f\x02\x0E\x02:\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03C\n\x03\f\x03\x0E\x03F\v\x03\x03\x04\x03\x04\x03\x04" +
		"\x05\x04K\n\x04\x03\x05\x03\x05\x05\x05O\n\x05\x03\x05\x05\x05R\n\x05" +
		"\x03\x05\x03\x05\x05\x05V\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x06\x05]\n\x05\r\x05\x0E\x05^\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06g\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06o\n\x06\x03\x06\x03\x06\x05\x06s\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06x\n\x06\x05\x06z\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x05\b\x82\n\b\x03\b\x03\b\x03\b\x05\b\x87\n\b\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\x8D\n\t\x03\t\x03\t\x03\t\x05\t\x92\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\x98\n\n\x03\n\x03\n\x05\n\x9C\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xAC\n\n" +
		"\x03\n\x03\n\x03\n\x05\n\xB1\n\n\x03\n\x03\n\x05\n\xB5\n\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\xBE\n\n\r\n\x0E\n\xBF\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\xC8\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\xCE" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x07\v\xDB\n\v\f\v\x0E\v\xDE\v\v\x05\v\xE0\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xEB\n\v\f\v\x0E\v\xEE\v\v\x03\v\x03" +
		"\v\x05\v\xF2\n\v\x03\v\x05\v\xF5\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u0114\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u011C\n\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0124\n\v\f\v\x0E\v\u0127\v\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u012F\n\f\x03\r\x03\r\x03\r\x05" +
		"\r\u0134\n\r\x03\r\x03\r\x05\r\u0138\n\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x05\r\u0141\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x07\r\u014B\n\r\f\r\x0E\r\u014E\v\r\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x05\x10\u0156\n\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u015C\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0162\n\x12" +
		"\f\x12\x0E\x12\u0165\v\x12\x05\x12\u0167\n\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u016E\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x07\x14\u0176\n\x14\f\x14\x0E\x14\u0179\v\x14\x05\x14\u017B" +
		"\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0183\n" +
		"\x15\f\x15\x0E\x15\u0186\v\x15\x05\x15\u0188\n\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0190\n\x16\f\x16\x0E\x16\u0193\v" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u019B\n\x17" +
		"\f\x17\x0E\x17\u019E\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x06\x18\u01A9\n\x18\r\x18\x0E\x18\u01AA\x03" +
		"\x18\x05\x18\u01AE\n\x18\x03\x18\x02\x02\x04\x14\x18\x19\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"\x02\b\x05\x02$$5577\x04\x02\x1E\x1E##\x03\x02*-\x03\x02/0\n\x02\x1E\x1E" +
		"#%((,-//135577\x04\x02\x05\x16AA\x02\u01F5\x028\x03\x02\x02\x02\x04;\x03" +
		"\x02\x02\x02\x06G\x03\x02\x02\x02\bL\x03\x02\x02\x02\ny\x03\x02\x02\x02" +
		"\f{\x03\x02\x02\x02\x0E\x7F\x03\x02\x02\x02\x10\x88\x03\x02\x02\x02\x12" +
		"\xC7\x03\x02\x02\x02\x14\xF4\x03\x02\x02\x02\x16\u012E\x03\x02\x02\x02" +
		"\x18\u0140\x03\x02\x02\x02\x1A\u014F\x03\x02\x02\x02\x1C\u0151\x03\x02" +
		"\x02\x02\x1E\u0155\x03\x02\x02\x02 \u0157\x03\x02\x02\x02\"\u015D\x03" +
		"\x02\x02\x02$\u016D\x03\x02\x02\x02&\u0171\x03\x02\x02\x02(\u017E\x03" +
		"\x02\x02\x02*\u018B\x03\x02\x02\x02,\u0196\x03\x02\x02\x02.\u01AD\x03" +
		"\x02\x02\x0207\x05\x04\x03\x0217\x05\x12\n\x0227\x05\x0E\b\x0237\x05\x10" +
		"\t\x0247\x05\b\x05\x0257\x07C\x02\x0260\x03\x02\x02\x0261\x03\x02\x02" +
		"\x0262\x03\x02\x02\x0263\x03\x02\x02\x0264\x03\x02\x02\x0265\x03\x02\x02" +
		"\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029\x03\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02;<\x05\x1C\x0F\x02<=\x07)\x02\x02=>\x05\x1C" +
		"\x0F\x02>?\x07\"\x02\x02?D\x05\x06\x04\x02@A\x07!\x02\x02AC\x05\x06\x04" +
		"\x02B@\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02" +
		"\x02E\x05\x03\x02\x02\x02FD\x03\x02\x02\x02GJ\x05\x1E\x10\x02HI\x07\x06" +
		"\x02\x02IK\x05\x1E\x10\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02K\x07\x03" +
		"\x02\x02\x02LN\x07B\x02\x02MO\x05,\x17\x02NM\x03\x02\x02\x02NO\x03\x02" +
		"\x02\x02OQ\x03\x02\x02\x02PR\x05\"\x12\x02QP\x03\x02\x02\x02QR\x03\x02" +
		"\x02\x02RU\x03\x02\x02\x02ST\x07\x05\x02\x02TV\x05\x18\r\x02US\x03\x02" +
		"\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x07\"\x02\x02XY\x07C\x02" +
		"\x02Y\\\x07\x03\x02\x02Z]\x05\n\x06\x02[]\x07C\x02\x02\\Z\x03\x02\x02" +
		"\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02" +
		"\x02\x02_`\x03\x02\x02\x02`a\x07\x04\x02\x02a\t\x03\x02\x02\x02bc\x05" +
		"\x1C\x0F\x02cf\x05\x18\r\x02de\x07.\x02\x02eg\x05\x14\v\x02fd\x03\x02" +
		"\x02\x02fg\x03\x02\x02\x02gz\x03\x02\x02\x02hi\x07\x0E\x02\x02iz\x05." +
		"\x18\x02jk\x05\x1A\x0E\x02kl\x05\"\x12\x02ln\x05\x18\r\x02mo\x05.\x18" +
		"\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02oz\x03\x02\x02\x02pr\x05\x1C\x0F" +
		"\x02qs\x05,\x17\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02st\x03\x02\x02" +
		"\x02tu\x05\"\x12\x02uw\x05\x18\r\x02vx\x05.\x18\x02wv\x03\x02\x02\x02" +
		"wx\x03\x02\x02\x02xz\x03\x02\x02\x02yb\x03\x02\x02\x02yh\x03\x02\x02\x02" +
		"yj\x03\x02\x02\x02yp\x03\x02\x02\x02z\v\x03\x02\x02\x02{|\x07\x10\x02" +
		"\x02|}\x05\x14\v\x02}~\x05.\x18\x02~\r\x03\x02\x02\x02\x7F\x81\x05\x1C" +
		"\x0F\x02\x80\x82\x05,\x17\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x05\"\x12\x02\x84\x86\x05\x18" +
		"\r\x02\x85\x87\x05.\x18\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02" +
		"\x02\x87\x0F\x03\x02\x02\x02\x88\x89\x05\x18\r\x02\x89\x8A\x07)\x02\x02" +
		"\x8A\x8C\x05\x1C\x0F\x02\x8B\x8D\x05,\x17\x02\x8C\x8B\x03\x02\x02\x02" +
		"\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x05\"\x12\x02" +
		"\x8F\x91\x05\x18\r\x02\x90\x92\x05.\x18\x02\x91\x90\x03\x02\x02\x02\x91" +
		"\x92\x03\x02\x02\x02\x92\x11\x03\x02\x02\x02\x93\x9B\x07\n\x02\x02\x94" +
		"\x97\x05\x1C\x0F\x02\x95\x96\x07!\x02\x02\x96\x98\x05\x1C\x0F\x02\x97" +
		"\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x9A\x07\b\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x94\x03\x02\x02\x02\x9B" +
		"\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x05\x14\v\x02\x9E" +
		"\x9F\x05.\x18\x02\x9F\xC8\x03\x02\x02\x02\xA0\xA1\x07\x13\x02\x02\xA1" +
		"\xA2\x05\x14\v\x02\xA2\xA3\x05.\x18\x02\xA3\xC8\x03\x02\x02\x02\xA4\xA5" +
		"\x07\x0F\x02\x02\xA5\xC8\x05.\x18\x02\xA6\xA7\x07\x07\x02\x02\xA7\xA8" +
		"\x05\x14\v\x02\xA8\xAB\x05.\x18\x02\xA9\xAA\x07\r\x02\x02\xAA\xAC\x05" +
		".\x18\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xC8\x03" +
		"\x02\x02\x02\xAD\xC8\x07\x12\x02\x02\xAE\xB0\x07\x16\x02\x02\xAF\xB1\x05" +
		"\x14\v\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xC8\x03" +
		"\x02\x02\x02\xB2\xB4\x05\x1C\x0F\x02\xB3\xB5\x05\x18\r\x02\xB4\xB3\x03" +
		"\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x07" +
		".\x02\x02\xB7\xB8\x05\x14\v\x02\xB8\xC8\x03\x02\x02\x02\xB9\xBA\x07\x14" +
		"\x02\x02\xBA\xBB\x07\"\x02\x02\xBB\xBD\x05\x14\v\x02\xBC\xBE\x07C\x02" +
		"\x02\xBD\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xBD\x03\x02\x02" +
		"\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x07\x15\x02" +
		"\x02\xC2\xC3\x07\"\x02\x02\xC3\xC4\x05\x14\v\x02\xC4\xC8\x03\x02\x02\x02" +
		"\xC5\xC8\x07@\x02\x02\xC6\xC8\x05\x14\v\x02\xC7\x93\x03\x02\x02\x02\xC7" +
		"\xA0\x03\x02\x02\x02\xC7\xA4\x03\x02\x02\x02\xC7\xA6\x03\x02\x02\x02\xC7" +
		"\xAD\x03\x02\x02\x02\xC7\xAE\x03\x02\x02\x02\xC7\xB2\x03\x02\x02\x02\xC7" +
		"\xB9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8" +
		"\x13\x03\x02\x02\x02\xC9\xCA\b\v\x01\x02\xCA\xF5\x07\x11\x02\x02\xCB\xCD" +
		"\x07B\x02\x02\xCC\xCE\x05*\x16\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03" +
		"\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xF5\x05&\x14\x02\xD0\xF5\x05" +
		"\x1C\x0F\x02\xD1\xF5\x05\x16\f\x02\xD2\xD3\x07#\x02\x02\xD3\xF5\x05\x14" +
		"\v\x0F\xD4\xD5\x07\v\x02\x02\xD5\xF5\x05\x14\v\x0E\xD6\xDF\x07\x17\x02" +
		"\x02\xD7\xDC\x05\x14\v\x02\xD8\xD9\x07!\x02\x02\xD9\xDB\x05\x14\v\x02" +
		"\xDA\xD8\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02" +
		"\xDC\xDD\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02" +
		"\xDF\xD7\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02" +
		"\xE1\xF5\x07\x18\x02\x02\xE2\xE3\x07\x19\x02\x02\xE3\xE4\x05\x14\v\x02" +
		"\xE4\xE5\x07\x1A\x02\x02\xE5\xF5\x03\x02\x02\x02\xE6\xF1\x074\x02\x02" +
		"\xE7\xEC\x05\x1C\x0F\x02\xE8\xE9\x07!\x02\x02\xE9\xEB\x05\x1C\x0F\x02" +
		"\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02" +
		"\xEF\xF0\x07\"\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xE7\x03\x02\x02\x02" +
		"\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x05\x14\v\x03" +
		"\xF4\xC9\x03\x02\x02\x02\xF4\xCB\x03\x02\x02\x02\xF4\xD0\x03\x02\x02\x02" +
		"\xF4\xD1\x03\x02\x02\x02\xF4\xD2\x03\x02\x02\x02\xF4\xD4\x03\x02\x02\x02" +
		"\xF4\xD6\x03\x02\x02\x02\xF4\xE2\x03\x02\x02\x02\xF4\xE6\x03\x02\x02\x02" +
		"\xF5\u0125\x03\x02\x02\x02\xF6\xF7\f\x10\x02\x02\xF7\xF8\x07%\x02\x02" +
		"\xF8\u0124\x05\x14\v\x11\xF9\xFA\f\r\x02\x02\xFA\xFB\t\x02\x02\x02\xFB" +
		"\u0124\x05\x14\v\x0E\xFC\xFD\f\f\x02\x02\xFD\xFE\t\x03\x02\x02\xFE\u0124" +
		"\x05\x14\v\r\xFF\u0100\f\v\x02\x02\u0100\u0101\x07(\x02\x02\u0101\u0124" +
		"\x05\x14\v\f\u0102\u0103\f\n\x02\x02\u0103\u0104\t\x04\x02\x02\u0104\u0124" +
		"\x05\x14\v\v\u0105\u0106\f\t\x02\x02\u0106\u0107\t\x05\x02\x02\u0107\u0124" +
		"\x05\x14\v\n\u0108\u0109\f\b\x02\x02\u0109\u010A\x07\f\x02\x02\u010A\u0124" +
		"\x05\x14\v\t\u010B\u010C\f\x07\x02\x02\u010C\u010D\x07\t\x02\x02\u010D" +
		"\u0124\x05\x14\v\b\u010E\u010F\f\x06\x02\x02\u010F\u0113\x07 \x02\x02" +
		"\u0110\u0111\x05\x1C\x0F\x02\u0111\u0112\x07\"\x02\x02\u0112\u0114\x03" +
		"\x02\x02\x02\u0113\u0110\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u0124\x05\x14\v\x07\u0116\u0117\f\x13\x02" +
		"\x02\u0117\u0118\x07)\x02\x02\u0118\u0124\x05\x1C\x0F\x02\u0119\u011B" +
		"\f\x12\x02\x02\u011A\u011C\x05*\x16\x02\u011B\u011A\x03\x02\x02\x02\u011B" +
		"\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0124\x05&\x14" +
		"\x02\u011E\u011F\f\x11\x02\x02\u011F\u0120\x07\x17\x02\x02\u0120\u0121" +
		"\x05\x14\v\x02\u0121\u0122\x07\x18\x02\x02\u0122\u0124\x03\x02\x02\x02" +
		"\u0123\xF6\x03\x02\x02\x02\u0123\xF9\x03\x02\x02\x02\u0123\xFC\x03\x02" +
		"\x02\x02\u0123\xFF\x03\x02\x02\x02\u0123\u0102\x03\x02\x02\x02\u0123\u0105" +
		"\x03\x02\x02\x02\u0123\u0108\x03\x02\x02\x02\u0123\u010B\x03\x02\x02\x02" +
		"\u0123\u010E\x03\x02\x02\x02\u0123\u0116\x03\x02\x02\x02\u0123\u0119\x03" +
		"\x02\x02\x02\u0123\u011E\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125" +
		"\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\x15\x03\x02\x02" +
		"\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012F\x07:\x02\x02\u0129\u012F" +
		"\x07=\x02\x02\u012A\u012F\x07<\x02\x02\u012B\u012F\x07;\x02\x02\u012C" +
		"\u012F\x07>\x02\x02\u012D\u012F\x07?\x02\x02\u012E\u0128\x03\x02\x02\x02" +
		"\u012E\u0129\x03\x02\x02\x02\u012E\u012A\x03\x02\x02\x02\u012E\u012B\x03" +
		"\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F" +
		"\x17\x03\x02\x02\x02\u0130\u0131\b\r\x01\x02\u0131\u0133\x07B\x02\x02" +
		"\u0132\u0134\x05*\x16\x02\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03" +
		"\x02\x02\x02\u0134\u0141\x03\x02\x02\x02\u0135\u0141\x05\x16\f\x02\u0136" +
		"\u0138\x05,\x17\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02" +
		"\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x05(\x15\x02\u013A\u013B" +
		"\x05\x18\r\x04\u013B\u0141\x03\x02\x02\x02\u013C\u013D\x07\x19\x02\x02" +
		"\u013D\u013E\x05\x18\r\x02\u013E\u013F\x07\x1A\x02\x02\u013F\u0141\x03" +
		"\x02\x02\x02\u0140\u0130\x03\x02\x02\x02\u0140\u0135\x03\x02\x02\x02\u0140" +
		"\u0137\x03\x02\x02\x02\u0140\u013C\x03\x02\x02\x02\u0141\u014C\x03\x02" +
		"\x02\x02\u0142\u0143\f\x05\x02\x02\u0143\u0144\x07 \x02\x02\u0144\u014B" +
		"\x05\x18\r\x06\u0145\u0146\f\x07\x02\x02\u0146\u014B\x076\x02\x02\u0147" +
		"\u0148\f\x06\x02\x02\u0148\u0149\x07\x17\x02\x02\u0149\u014B\x07\x18\x02" +
		"\x02\u014A\u0142\x03\x02\x02\x02\u014A\u0145\x03\x02\x02\x02\u014A\u0147" +
		"\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02" +
		"\u014C\u014D\x03\x02\x02\x02\u014D\x19\x03\x02\x02\x02\u014E\u014C\x03" +
		"\x02\x02\x02\u014F\u0150\t\x06\x02\x02\u0150\x1B\x03\x02\x02\x02\u0151" +
		"\u0152\t\x07\x02\x02\u0152\x1D\x03\x02\x02\x02\u0153\u0156\x05\x1C\x0F" +
		"\x02\u0154\u0156\x07B\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0154" +
		"\x03\x02\x02\x02\u0156\x1F\x03\x02\x02\x02\u0157\u0158\x05\x1C\x0F\x02" +
		"\u0158\u015B\x05\x18\r\x02\u0159\u015A\x07\x1F\x02\x02\u015A\u015C\x07" +
		"B\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C" +
		"!\x03\x02\x02\x02\u015D\u0166\x07\x19\x02\x02\u015E\u0163\x05 \x11\x02" +
		"\u015F\u0160\x07!\x02\x02\u0160\u0162\x05 \x11\x02\u0161\u015F\x03\x02" +
		"\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163" +
		"\u0164\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02" +
		"\x02\x02\u0166\u015E\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167" +
		"\u0168\x03\x02\x02\x02\u0168\u0169\x07\x1A\x02\x02\u0169#\x03\x02\x02" +
		"\x02\u016A\u016B\x05\x1C\x0F\x02\u016B\u016C\x07.\x02\x02\u016C\u016E" +
		"\x03\x02\x02\x02\u016D\u016A\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
		"\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x05\x14\v\x02\u0170%\x03\x02" +
		"\x02\x02\u0171\u017A\x07\x19\x02\x02\u0172\u0177\x05$\x13\x02\u0173\u0174" +
		"\x07!\x02\x02\u0174\u0176\x05$\x13\x02\u0175\u0173\x03\x02\x02\x02\u0176" +
		"\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02" +
		"\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A" +
		"\u0172\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02" +
		"\x02\x02\u017C\u017D\x07\x1A\x02\x02\u017D\'\x03\x02\x02\x02\u017E\u0187" +
		"\x07\x19\x02\x02\u017F\u0184\x05\x18\r\x02\u0180\u0181\x07!\x02\x02\u0181" +
		"\u0183\x05\x18\r\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0186\x03\x02\x02" +
		"\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0188" +
		"\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187\u017F\x03\x02\x02\x02" +
		"\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x07" +
		"\x1A\x02\x02\u018A)\x03\x02\x02\x02\u018B\u018C\x07,\x02\x02\u018C\u0191" +
		"\x05\x18\r\x02\u018D\u018E\x07!\x02\x02\u018E\u0190\x05\x18\r\x02\u018F" +
		"\u018D\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02" +
		"\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02\x02\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0194\u0195\x07-\x02\x02\u0195+\x03\x02\x02\x02" +
		"\u0196\u0197\x07,\x02\x02\u0197\u019C\x07B\x02\x02\u0198\u0199\x07!\x02" +
		"\x02\u0199\u019B\x07B\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019E" +
		"\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02" +
		"\u019D\u019F\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A0\x07" +
		"-\x02\x02\u01A0-\x03\x02\x02\x02\u01A1\u01A2\x07\"\x02\x02\u01A2\u01AE" +
		"\x05\x12\n\x02\u01A3\u01A4\x07\"\x02\x02\u01A4\u01A5\x07C\x02\x02\u01A5" +
		"\u01A8\x07\x03\x02\x02\u01A6\u01A9\x05\x12\n\x02\u01A7\u01A9\x07C\x02" +
		"\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A9\u01AA" +
		"\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
		"\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x07\x04\x02\x02\u01AD\u01A1\x03" +
		"\x02\x02\x02\u01AD\u01A3\x03\x02\x02\x02\u01AE/\x03\x02\x02\x02968DJN" +
		"QU\\^fnrwy\x81\x86\x8C\x91\x97\x9B\xAB\xB0\xB4\xBF\xC7\xCD\xDC\xDF\xEC" +
		"\xF1\xF4\u0113\u011B\u0123\u0125\u012E\u0133\u0137\u0140\u014A\u014C\u0155" +
		"\u015B\u0163\u0166\u016D\u0177\u017A\u0184\u0187\u0191\u019C\u01A8\u01AA" +
		"\u01AD";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public library(): LibraryContext[];
	public library(i: number): LibraryContext;
	public library(i?: number): LibraryContext | LibraryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryContext);
		} else {
			return this.getRuleContext(i, LibraryContext);
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
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	public extensionMethod(): ExtensionMethodContext[];
	public extensionMethod(i: number): ExtensionMethodContext;
	public extensionMethod(i?: number): ExtensionMethodContext | ExtensionMethodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionMethodContext);
		} else {
			return this.getRuleContext(i, ExtensionMethodContext);
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
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class LibraryContext extends ParserRuleContext {
	public _scope!: IdContext;
	public _name!: IdContext;
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_library; }
}


export class LibraryMemberContext extends ParserRuleContext {
	public _name!: CommonIdContext;
	public _alias!: CommonIdContext;
	public commonId(): CommonIdContext[];
	public commonId(i: number): CommonIdContext;
	public commonId(i?: number): CommonIdContext | CommonIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommonIdContext);
		} else {
			return this.getRuleContext(i, CommonIdContext);
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
	public DEFINITION_ID(): TerminalNode { return this.getToken(XonParser.DEFINITION_ID, 0); }
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
	public declaredGenerics(): DeclaredGenericsContext | undefined {
		return this.tryGetRuleContext(0, DeclaredGenericsContext);
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public declaredGenerics(): DeclaredGenericsContext | undefined {
		return this.tryGetRuleContext(0, DeclaredGenericsContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class TestContext extends ParserRuleContext {
	public TEST(): TerminalNode { return this.getToken(XonParser.TEST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_test; }
}


export class FunctionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public declaredGenerics(): DeclaredGenericsContext | undefined {
		return this.tryGetRuleContext(0, DeclaredGenericsContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_function; }
}


export class ExtensionMethodContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public declaredGenerics(): DeclaredGenericsContext | undefined {
		return this.tryGetRuleContext(0, DeclaredGenericsContext);
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
export class LoopStatementContext extends StatementContext {
	public LOOP(): TerminalNode { return this.getToken(XonParser.LOOP, 0); }
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
export class IdAssignmentStatementContext extends StatementContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COLON);
		} else {
			return this.getToken(XonParser.COLON, i);
		}
	}
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
export class InstantiationExpressionContext extends ExpressionContext {
	public DEFINITION_ID(): TerminalNode { return this.getToken(XonParser.DEFINITION_ID, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
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
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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
export class NegativeExpressionContext extends ExpressionContext {
	public MINUS(): TerminalNode { return this.getToken(XonParser.MINUS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalNotExpressionContext extends ExpressionContext {
	public NOT(): TerminalNode { return this.getToken(XonParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_THAN, 0); }
	public LESS_THAN_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_THAN_EQUAL, 0); }
	public MORE_THAN_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.MORE_THAN_EQUAL, 0); }
	public MORE_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.MORE_THAN, 0); }
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
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public AND(): TerminalNode { return this.getToken(XonParser.AND, 0); }
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
export class LogicalOrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public OR(): TerminalNode { return this.getToken(XonParser.OR, 0); }
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
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
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
	public DEFINITION_ID(): TerminalNode { return this.getToken(XonParser.DEFINITION_ID, 0); }
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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
	public declaredGenerics(): DeclaredGenericsContext | undefined {
		return this.tryGetRuleContext(0, DeclaredGenericsContext);
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
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_THAN, 0); }
	public MORE_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.MORE_THAN, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public BIT_AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.BIT_AND, 0); }
	public BIT_OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.BIT_OR, 0); }
	public BIT_XOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.BIT_XOR, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(XonParser.RANGE, 0); }
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
	public TEST(): TerminalNode | undefined { return this.tryGetToken(XonParser.TEST, 0); }
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


export class CommonIdContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public DEFINITION_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEFINITION_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_commonId; }
}


export class ParameterContext extends ParserRuleContext {
	public _name!: IdContext;
	public _meta!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	public DEFINITION_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEFINITION_ID, 0); }
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
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


export class GenericsContext extends ParserRuleContext {
	public LESS_THAN(): TerminalNode { return this.getToken(XonParser.LESS_THAN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MORE_THAN(): TerminalNode { return this.getToken(XonParser.MORE_THAN, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_generics; }
}


export class DeclaredGenericsContext extends ParserRuleContext {
	public LESS_THAN(): TerminalNode { return this.getToken(XonParser.LESS_THAN, 0); }
	public DEFINITION_ID(): TerminalNode[];
	public DEFINITION_ID(i: number): TerminalNode;
	public DEFINITION_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DEFINITION_ID);
		} else {
			return this.getToken(XonParser.DEFINITION_ID, i);
		}
	}
	public MORE_THAN(): TerminalNode { return this.getToken(XonParser.MORE_THAN, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_declaredGenerics; }
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


