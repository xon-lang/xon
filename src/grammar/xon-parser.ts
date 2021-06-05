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
	public static readonly RULE_module = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryMember = 2;
	public static readonly RULE_librartMemberName = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_test = 6;
	public static readonly RULE_function = 7;
	public static readonly RULE_extensionMethod = 8;
	public static readonly RULE_extensionProperty = 9;
	public static readonly RULE_statement = 10;
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
	public static readonly RULE_generics = 21;
	public static readonly RULE_declaredGenerics = 22;
	public static readonly RULE_body = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"module", "library", "libraryMember", "librartMemberName", "definition", 
		"member", "test", "function", "extensionMethod", "extensionProperty", 
		"statement", "expression", "literal", "type", "operator", "id", "parameter", 
		"parameters", "argument", "arguments", "typeParameters", "generics", "declaredGenerics", 
		"body",
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
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.TEST - 3)) | (1 << (XonParser.THIS - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.MINUS - 3)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.LESS_THAN - 42)) | (1 << (XonParser.LAMBDA - 42)) | (1 << (XonParser.NULL_LITERAL - 42)) | (1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.BOOLEAN_LITERAL - 42)) | (1 << (XonParser.CHAR_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.PREPROCESSOR - 42)) | (1 << (XonParser.ID - 42)) | (1 << (XonParser.DEFINITION_ID - 42)) | (1 << (XonParser.NL - 42)))) !== 0)) {
				{
				this.state = 55;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 48;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 49;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 50;
					this.function();
					}
					break;

				case 4:
					{
					this.state = 51;
					this.extensionMethod();
					}
					break;

				case 5:
					{
					this.state = 52;
					this.extensionProperty();
					}
					break;

				case 6:
					{
					this.state = 53;
					this.definition();
					}
					break;

				case 7:
					{
					this.state = 54;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 59;
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
			this.state = 60;
			_localctx._scope = this.id();
			this.state = 61;
			this.match(XonParser.DOT);
			this.state = 62;
			_localctx._name = this.id();
			this.state = 63;
			this.match(XonParser.COLON);
			this.state = 64;
			this.libraryMember();
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 65;
				this.match(XonParser.COMMA);
				this.state = 66;
				this.libraryMember();
				}
				}
				this.state = 71;
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
			this.state = 72;
			_localctx._name = this.librartMemberName();
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 73;
				this.match(XonParser.AS);
				this.state = 74;
				_localctx._alias = this.librartMemberName();
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
	public librartMemberName(): LibrartMemberNameContext {
		let _localctx: LibrartMemberNameContext = new LibrartMemberNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_librartMemberName);
		try {
			this.state = 79;
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
				this.state = 77;
				this.id();
				}
				break;
			case XonParser.DEFINITION_ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(XonParser.DEFINITION_ID);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 82;
				this.declaredGenerics();
				}
			}

			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 85;
				this.parameters();
				}
			}

			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 88;
				this.match(XonParser.IS);
				this.state = 89;
				this.type(0);
				}
			}

			this.state = 92;
			this.match(XonParser.COLON);
			this.state = 93;
			this.match(XonParser.NL);
			this.state = 94;
			this.match(XonParser.INDENT);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 97;
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
					this.state = 95;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 96;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.TEST - 3)) | (1 << (XonParser.THIS - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.PLUS - 3)) | (1 << (XonParser.MINUS - 3)) | (1 << (XonParser.SLASH - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.CARET - 35)) | (1 << (XonParser.RANGE - 35)) | (1 << (XonParser.LESS_THAN - 35)) | (1 << (XonParser.MORE_THAN - 35)) | (1 << (XonParser.EQUAL - 35)) | (1 << (XonParser.BIT_AND - 35)) | (1 << (XonParser.BIT_OR - 35)) | (1 << (XonParser.BIT_XOR - 35)) | (1 << (XonParser.MODULO - 35)) | (1 << (XonParser.ASTERISK - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
			this.state = 101;
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
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.id();
				this.state = 104;
				this.type(0);
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 105;
					this.match(XonParser.ASSIGN);
					this.state = 106;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.match(XonParser.INIT);
				this.state = 110;
				this.body();
				}
				break;

			case 3:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 111;
				this.operator();
				this.state = 112;
				this.parameters();
				this.state = 113;
				this.type(0);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 114;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 117;
				this.id();
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 118;
					this.declaredGenerics();
					}
				}

				this.state = 121;
				this.parameters();
				this.state = 122;
				this.type(0);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 123;
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
		this.enterRule(_localctx, 12, XonParser.RULE_test);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(XonParser.TEST);
			this.state = 129;
			this.expression(0);
			this.state = 130;
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
		this.enterRule(_localctx, 14, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.id();
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 133;
				this.declaredGenerics();
				}
			}

			this.state = 136;
			this.parameters();
			this.state = 137;
			this.type(0);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 138;
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
			this.state = 141;
			this.type(0);
			this.state = 142;
			this.match(XonParser.DOT);
			this.state = 143;
			this.id();
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 144;
				this.declaredGenerics();
				}
			}

			this.state = 147;
			this.parameters();
			this.state = 148;
			this.type(0);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 149;
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
	public extensionProperty(): ExtensionPropertyContext {
		let _localctx: ExtensionPropertyContext = new ExtensionPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_extensionProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.type(0);
			this.state = 153;
			this.match(XonParser.DOT);
			this.state = 154;
			this.id();
			this.state = 155;
			this.type(0);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 156;
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
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 159;
				this.match(XonParser.FOR);
				this.state = 167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 160;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 163;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 161;
						this.match(XonParser.COMMA);
						this.state = 162;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 165;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 169;
				this.expression(0);
				this.state = 170;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
				this.match(XonParser.WHILE);
				this.state = 173;
				this.expression(0);
				this.state = 174;
				this.body();
				}
				break;

			case 3:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 176;
				this.match(XonParser.LOOP);
				this.state = 177;
				this.body();
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 178;
				this.match(XonParser.IF);
				this.state = 179;
				this.expression(0);
				this.state = 180;
				this.body();
				this.state = 183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 181;
					this.match(XonParser.ELSE);
					this.state = 182;
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
				this.state = 185;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 186;
				this.match(XonParser.RETURN);
				this.state = 188;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 187;
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
				this.state = 190;
				this.id();
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.LESS_THAN - 42)) | (1 << (XonParser.NULL_LITERAL - 42)) | (1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.BOOLEAN_LITERAL - 42)) | (1 << (XonParser.CHAR_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.DEFINITION_ID - 42)))) !== 0)) {
					{
					this.state = 191;
					this.type(0);
					}
				}

				this.state = 194;
				this.match(XonParser.ASSIGN);
				this.state = 195;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 197;
				this.match(XonParser.ACTUAL);
				this.state = 198;
				this.match(XonParser.COLON);
				this.state = 199;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 200;
					this.match(XonParser.NL);
					}
					}
					this.state = 203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 205;
				this.match(XonParser.EXPECT);
				this.state = 206;
				this.match(XonParser.COLON);
				this.state = 207;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 9:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 209;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 210;
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
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 214;
				this.match(XonParser.THIS);
				}
				break;

			case 2:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 215;
				this.match(XonParser.DEFINITION_ID);
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 216;
					this.generics();
					}
				}

				this.state = 219;
				this.arguments();
				}
				break;

			case 3:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 220;
				this.id();
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 221;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 222;
				this.match(XonParser.MINUS);
				this.state = 223;
				this.expression(13);
				}
				break;

			case 6:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 224;
				this.match(XonParser.NOT);
				this.state = 225;
				this.expression(12);
				}
				break;

			case 7:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 226;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.MINUS - 33)) | (1 << (XonParser.LAMBDA - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.DEFINITION_ID - 33)))) !== 0)) {
					{
					this.state = 227;
					this.expression(0);
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 228;
						this.match(XonParser.COMMA);
						this.state = 229;
						this.expression(0);
						}
						}
						this.state = 234;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 237;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 238;
				this.match(XonParser.OPEN_PAREN);
				this.state = 239;
				this.expression(0);
				this.state = 240;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 242;
				this.match(XonParser.LAMBDA);
				this.state = 253;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 243;
					this.id();
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 244;
						this.match(XonParser.COMMA);
						this.state = 245;
						this.id();
						}
						}
						this.state = 250;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 251;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 255;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 305;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 303;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 258;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 259;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 260;
						(_localctx as PowExpressionContext)._right = this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 261;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 262;
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
						this.state = 263;
						(_localctx as MulDivModExpressionContext)._right = this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 264;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 265;
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
						this.state = 266;
						(_localctx as AddSubExpressionContext)._right = this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 267;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 268;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 269;
						(_localctx as RangeExpressionContext)._right = this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 270;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 271;
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
						this.state = 272;
						(_localctx as RelationalExpressionContext)._right = this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 273;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 274;
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
						this.state = 275;
						(_localctx as EqualityExpressionContext)._right = this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 276;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 277;
						this.match(XonParser.AND);
						this.state = 278;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 279;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 280;
						this.match(XonParser.OR);
						this.state = 281;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 282;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 283;
						this.match(XonParser.PIPE);
						this.state = 287;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
						case 1:
							{
							this.state = 284;
							this.id();
							this.state = 285;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 289;
						(_localctx as PipeExpressionContext)._right = this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 290;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 291;
						this.match(XonParser.DOT);
						this.state = 292;
						this.id();
						}
						break;

					case 11:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 293;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 295;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS_THAN) {
							{
							this.state = 294;
							this.generics();
							}
						}

						this.state = 297;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 299;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 300;
						this.expression(0);
						this.state = 301;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
			this.state = 314;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 308;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 309;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 310;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 311;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 312;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 313;
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
			this.state = 332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 317;
				this.match(XonParser.DEFINITION_ID);
				this.state = 319;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 318;
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
				this.state = 321;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 322;
					this.declaredGenerics();
					}
				}

				this.state = 325;
				this.typeParameters();
				this.state = 326;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 328;
				this.match(XonParser.OPEN_PAREN);
				this.state = 329;
				this.type(0);
				this.state = 330;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 344;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 342;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 334;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 335;
						this.match(XonParser.PIPE);
						this.state = 336;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 337;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 338;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 339;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 340;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 341;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 346;
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
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
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
		this.enterRule(_localctx, 30, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			_localctx._name = this.id();
			this.state = 352;
			this.type(0);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 353;
				this.match(XonParser.HASH);
				this.state = 354;
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
		this.enterRule(_localctx, 34, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(XonParser.OPEN_PAREN);
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN))) !== 0) || _la === XonParser.ID) {
				{
				this.state = 358;
				this.parameter();
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 359;
					this.match(XonParser.COMMA);
					this.state = 360;
					this.parameter();
					}
					}
					this.state = 365;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 368;
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
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 370;
				this.id();
				this.state = 371;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 375;
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
			this.state = 377;
			this.match(XonParser.OPEN_PAREN);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IS) | (1 << XonParser.AS) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.OR) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.AND) | (1 << XonParser.ELSE) | (1 << XonParser.INIT) | (1 << XonParser.LOOP) | (1 << XonParser.TEST) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.EXPECT) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.MINUS - 33)) | (1 << (XonParser.LAMBDA - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.DEFINITION_ID - 33)))) !== 0)) {
				{
				this.state = 378;
				this.argument();
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 379;
					this.match(XonParser.COMMA);
					this.state = 380;
					this.argument();
					}
					}
					this.state = 385;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 388;
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
			this.state = 390;
			this.match(XonParser.OPEN_PAREN);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.LESS_THAN - 42)) | (1 << (XonParser.NULL_LITERAL - 42)) | (1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.BOOLEAN_LITERAL - 42)) | (1 << (XonParser.CHAR_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.DEFINITION_ID - 42)))) !== 0)) {
				{
				this.state = 391;
				this.type(0);
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 392;
					this.match(XonParser.COMMA);
					this.state = 393;
					this.type(0);
					}
					}
					this.state = 398;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 401;
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
		this.enterRule(_localctx, 42, XonParser.RULE_generics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(XonParser.LESS_THAN);
			this.state = 404;
			this.type(0);
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 405;
				this.match(XonParser.COMMA);
				this.state = 406;
				this.type(0);
				}
				}
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 412;
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
		this.enterRule(_localctx, 44, XonParser.RULE_declaredGenerics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(XonParser.LESS_THAN);
			this.state = 415;
			this.match(XonParser.DEFINITION_ID);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 416;
				this.match(XonParser.COMMA);
				this.state = 417;
				this.match(XonParser.DEFINITION_ID);
				}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 423;
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
		this.enterRule(_localctx, 46, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 425;
				this.match(XonParser.COLON);
				this.state = 426;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.match(XonParser.COLON);
				this.state = 428;
				this.match(XonParser.NL);
				this.state = 429;
				this.match(XonParser.INDENT);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 432;
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
						this.state = 430;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 431;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 434;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.IS - 3)) | (1 << (XonParser.AS - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.OR - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.NOT - 3)) | (1 << (XonParser.AND - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.INIT - 3)) | (1 << (XonParser.LOOP - 3)) | (1 << (XonParser.TEST - 3)) | (1 << (XonParser.THIS - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.MINUS - 3)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (XonParser.LAMBDA - 50)) | (1 << (XonParser.NULL_LITERAL - 50)) | (1 << (XonParser.FLOAT_LITERAL - 50)) | (1 << (XonParser.INTEGER_LITERAL - 50)) | (1 << (XonParser.BOOLEAN_LITERAL - 50)) | (1 << (XonParser.CHAR_LITERAL - 50)) | (1 << (XonParser.STRING_LITERAL - 50)) | (1 << (XonParser.PREPROCESSOR - 50)) | (1 << (XonParser.ID - 50)) | (1 << (XonParser.DEFINITION_ID - 50)) | (1 << (XonParser.NL - 50)))) !== 0));
				this.state = 436;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u01BA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03F\n\x03\f\x03\x0E\x03I\v\x03\x03\x04" +
		"\x03\x04\x03\x04\x05\x04N\n\x04\x03\x05\x03\x05\x05\x05R\n\x05\x03\x06" +
		"\x03\x06\x05\x06V\n\x06\x03\x06\x05\x06Y\n\x06\x03\x06\x03\x06\x05\x06" +
		"]\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06d\n\x06\r\x06\x0E" +
		"\x06e\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07n\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07v\n\x07\x03\x07\x03" +
		"\x07\x05\x07z\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\x7F\n\x07\x05\x07" +
		"\x81\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x05\t\x89\n\t\x03\t\x03" +
		"\t\x03\t\x05\t\x8E\n\t\x03\n\x03\n\x03\n\x03\n\x05\n\x94\n\n\x03\n\x03" +
		"\n\x03\n\x05\n\x99\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xA0\n\v\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\xA6\n\f\x03\f\x03\f\x05\f\xAA\n\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\xBA\n\f\x03\f\x03\f\x03\f\x05\f\xBF\n\f\x03\f\x03\f\x05\f\xC3" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\xCC\n\f\r\f\x0E\f" +
		"\xCD\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xD6\n\f\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\xDC\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x07\r\xE9\n\r\f\r\x0E\r\xEC\v\r\x05\r\xEE\n\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xF9\n\r\f\r\x0E" +
		"\r\xFC\v\r\x03\r\x03\r\x05\r\u0100\n\r\x03\r\x05\r\u0103\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0122\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u012A\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0132\n\r" +
		"\f\r\x0E\r\u0135\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u013D\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0142\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0146\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u014F\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u0159\n\x0F\f\x0F\x0E\x0F\u015C\v\x0F\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0166" +
		"\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u016C\n\x13\f\x13\x0E\x13" +
		"\u016F\v\x13\x05\x13\u0171\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\u0178\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07" +
		"\x15\u0180\n\x15\f\x15\x0E\x15\u0183\v\x15\x05\x15\u0185\n\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u018D\n\x16\f\x16\x0E" +
		"\x16\u0190\v\x16\x05\x16\u0192\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\u019A\n\x17\f\x17\x0E\x17\u019D\v\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01A5\n\x18\f\x18\x0E\x18" +
		"\u01A8\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x06\x19\u01B3\n\x19\r\x19\x0E\x19\u01B4\x03\x19\x05\x19\u01B8" +
		"\n\x19\x03\x19\x02\x02\x04\x18\x1C\x1A\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\b\x05\x02" +
		"$$5577\x04\x02\x1E\x1E##\x03\x02*-\x03\x02/0\n\x02\x1E\x1E#%((,-//135" +
		"577\x04\x02\x05\x16AA\x02\u0200\x02;\x03\x02\x02\x02\x04>\x03\x02\x02" +
		"\x02\x06J\x03\x02\x02\x02\bQ\x03\x02\x02\x02\nS\x03\x02\x02\x02\f\x80" +
		"\x03\x02\x02\x02\x0E\x82\x03\x02\x02\x02\x10\x86\x03\x02\x02\x02\x12\x8F" +
		"\x03\x02\x02\x02\x14\x9A\x03\x02\x02\x02\x16\xD5\x03\x02\x02\x02\x18\u0102" +
		"\x03\x02\x02\x02\x1A\u013C\x03\x02\x02\x02\x1C\u014E\x03\x02\x02\x02\x1E" +
		"\u015D\x03\x02\x02\x02 \u015F\x03\x02\x02\x02\"\u0161\x03\x02\x02\x02" +
		"$\u0167\x03\x02\x02\x02&\u0177\x03\x02\x02\x02(\u017B\x03\x02\x02\x02" +
		"*\u0188\x03\x02\x02\x02,\u0195\x03\x02\x02\x02.\u01A0\x03\x02\x02\x02" +
		"0\u01B7\x03\x02\x02\x022:\x05\x04\x03\x023:\x05\x16\f\x024:\x05\x10\t" +
		"\x025:\x05\x12\n\x026:\x05\x14\v\x027:\x05\n\x06\x028:\x07C\x02\x0292" +
		"\x03\x02\x02\x0293\x03\x02\x02\x0294\x03\x02\x02\x0295\x03\x02\x02\x02" +
		"96\x03\x02\x02\x0297\x03\x02\x02\x0298\x03\x02\x02\x02:=\x03\x02\x02\x02" +
		";9\x03\x02\x02\x02;<\x03\x02\x02\x02<\x03\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02>?\x05 \x11\x02?@\x07)\x02\x02@A\x05 \x11\x02AB\x07\"\x02\x02BG\x05" +
		"\x06\x04\x02CD\x07!\x02\x02DF\x05\x06\x04\x02EC\x03\x02\x02\x02FI\x03" +
		"\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\x05\x03\x02\x02\x02" +
		"IG\x03\x02\x02\x02JM\x05\b\x05\x02KL\x07\x06\x02\x02LN\x05\b\x05\x02M" +
		"K\x03\x02\x02\x02MN\x03\x02\x02\x02N\x07\x03\x02\x02\x02OR\x05 \x11\x02" +
		"PR\x07B\x02\x02QO\x03\x02\x02\x02QP\x03\x02\x02\x02R\t\x03\x02\x02\x02" +
		"SU\x07B\x02\x02TV\x05.\x18\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03" +
		"\x02\x02\x02WY\x05$\x13\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02Y\\\x03" +
		"\x02\x02\x02Z[\x07\x05\x02\x02[]\x05\x1C\x0F\x02\\Z\x03\x02\x02\x02\\" +
		"]\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x07\"\x02\x02_`\x07C\x02\x02`c\x07" +
		"\x03\x02\x02ad\x05\f\x07\x02bd\x07C\x02\x02ca\x03\x02\x02\x02cb\x03\x02" +
		"\x02\x02de\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02" +
		"\x02\x02gh\x07\x04\x02\x02h\v\x03\x02\x02\x02ij\x05 \x11\x02jm\x05\x1C" +
		"\x0F\x02kl\x07.\x02\x02ln\x05\x18\r\x02mk\x03\x02\x02\x02mn\x03\x02\x02" +
		"\x02n\x81\x03\x02\x02\x02op\x07\x0E\x02\x02p\x81\x050\x19\x02qr\x05\x1E" +
		"\x10\x02rs\x05$\x13\x02su\x05\x1C\x0F\x02tv\x050\x19\x02ut\x03\x02\x02" +
		"\x02uv\x03\x02\x02\x02v\x81\x03\x02\x02\x02wy\x05 \x11\x02xz\x05.\x18" +
		"\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x05$\x13" +
		"\x02|~\x05\x1C\x0F\x02}\x7F\x050\x19\x02~}\x03\x02\x02\x02~\x7F\x03\x02" +
		"\x02\x02\x7F\x81\x03\x02\x02\x02\x80i\x03\x02\x02\x02\x80o\x03\x02\x02" +
		"\x02\x80q\x03\x02\x02\x02\x80w\x03\x02\x02\x02\x81\r\x03\x02\x02\x02\x82" +
		"\x83\x07\x10\x02\x02\x83\x84\x05\x18\r\x02\x84\x85\x050\x19\x02\x85\x0F" +
		"\x03\x02\x02\x02\x86\x88\x05 \x11\x02\x87\x89\x05.\x18\x02\x88\x87\x03" +
		"\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x05" +
		"$\x13\x02\x8B\x8D\x05\x1C\x0F\x02\x8C\x8E\x050\x19\x02\x8D\x8C\x03\x02" +
		"\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x11\x03\x02\x02\x02\x8F\x90\x05\x1C" +
		"\x0F\x02\x90\x91\x07)\x02\x02\x91\x93\x05 \x11\x02\x92\x94\x05.\x18\x02" +
		"\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02" +
		"\x95\x96\x05$\x13\x02\x96\x98\x05\x1C\x0F\x02\x97\x99\x050\x19\x02\x98" +
		"\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x13\x03\x02\x02\x02\x9A" +
		"\x9B\x05\x1C\x0F\x02\x9B\x9C\x07)\x02\x02\x9C\x9D\x05 \x11\x02\x9D\x9F" +
		"\x05\x1C\x0F\x02\x9E\xA0\x050\x19\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0" +
		"\x03\x02\x02\x02\xA0\x15\x03\x02\x02\x02\xA1\xA9\x07\n\x02\x02\xA2\xA5" +
		"\x05 \x11\x02\xA3\xA4\x07!\x02\x02\xA4\xA6\x05 \x11\x02\xA5\xA3\x03\x02" +
		"\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x07\b" +
		"\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA2\x03\x02\x02\x02\xA9\xAA\x03\x02" +
		"\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x05\x18\r\x02\xAC\xAD\x050\x19" +
		"\x02\xAD\xD6\x03\x02\x02\x02\xAE\xAF\x07\x13\x02\x02\xAF\xB0\x05\x18\r" +
		"\x02\xB0\xB1\x050\x19\x02\xB1\xD6\x03\x02\x02\x02\xB2\xB3\x07\x0F\x02" +
		"\x02\xB3\xD6\x050\x19\x02\xB4\xB5\x07\x07\x02\x02\xB5\xB6\x05\x18\r\x02" +
		"\xB6\xB9\x050\x19\x02\xB7\xB8\x07\r\x02\x02\xB8\xBA\x050\x19\x02\xB9\xB7" +
		"\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xD6\x03\x02\x02\x02\xBB\xD6" +
		"\x07\x12\x02\x02\xBC\xBE\x07\x16\x02\x02\xBD\xBF\x05\x18\r\x02\xBE\xBD" +
		"\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xD6\x03\x02\x02\x02\xC0\xC2" +
		"\x05 \x11\x02\xC1\xC3\x05\x1C\x0F\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3" +
		"\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x07.\x02\x02\xC5\xC6" +
		"\x05\x18\r\x02\xC6\xD6\x03\x02\x02\x02\xC7\xC8\x07\x14\x02\x02\xC8\xC9" +
		"\x07\"\x02\x02\xC9\xCB\x05\x18\r\x02\xCA\xCC\x07C\x02\x02\xCB\xCA\x03" +
		"\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03" +
		"\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x07\x15\x02\x02\xD0\xD1\x07" +
		"\"\x02\x02\xD1\xD2\x05\x18\r\x02\xD2\xD6\x03\x02\x02\x02\xD3\xD6\x07@" +
		"\x02\x02\xD4\xD6\x05\x18\r\x02\xD5\xA1\x03\x02\x02\x02\xD5\xAE\x03\x02" +
		"\x02\x02\xD5\xB2\x03\x02\x02\x02\xD5\xB4\x03\x02\x02\x02\xD5\xBB\x03\x02" +
		"\x02\x02\xD5\xBC\x03\x02\x02\x02\xD5\xC0\x03\x02\x02\x02\xD5\xC7\x03\x02" +
		"\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\x17\x03\x02" +
		"\x02\x02\xD7\xD8\b\r\x01\x02\xD8\u0103\x07\x11\x02\x02\xD9\xDB\x07B\x02" +
		"\x02\xDA\xDC\x05,\x17\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02" +
		"\x02\xDC\xDD\x03\x02\x02\x02\xDD\u0103\x05(\x15\x02\xDE\u0103\x05 \x11" +
		"\x02\xDF\u0103\x05\x1A\x0E\x02\xE0\xE1\x07#\x02\x02\xE1\u0103\x05\x18" +
		"\r\x0F\xE2\xE3\x07\v\x02\x02\xE3\u0103\x05\x18\r\x0E\xE4\xED\x07\x17\x02" +
		"\x02\xE5\xEA\x05\x18\r\x02\xE6\xE7\x07!\x02\x02\xE7\xE9\x05\x18\r\x02" +
		"\xE8\xE6\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02" +
		"\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xED\xE5\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02" +
		"\xEF\u0103\x07\x18\x02\x02\xF0\xF1\x07\x19\x02\x02\xF1\xF2\x05\x18\r\x02" +
		"\xF2\xF3\x07\x1A\x02\x02\xF3\u0103\x03\x02\x02\x02\xF4\xFF\x074\x02\x02" +
		"\xF5\xFA\x05 \x11\x02\xF6\xF7\x07!\x02\x02\xF7\xF9\x05 \x11\x02\xF8\xF6" +
		"\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB" +
		"\x03\x02\x02\x02\xFB\xFD\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\xFE" +
		"\x07\"\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xF5\x03\x02\x02\x02\xFF\u0100" +
		"\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x05\x18\r\x03" +
		"\u0102\xD7\x03\x02\x02\x02\u0102\xD9\x03\x02\x02\x02\u0102\xDE\x03\x02" +
		"\x02\x02\u0102\xDF\x03\x02\x02\x02\u0102\xE0\x03\x02\x02\x02\u0102\xE2" +
		"\x03\x02\x02\x02\u0102\xE4\x03\x02\x02\x02\u0102\xF0\x03\x02\x02\x02\u0102" +
		"\xF4\x03\x02\x02\x02\u0103\u0133\x03\x02\x02\x02\u0104\u0105\f\x10\x02" +
		"\x02\u0105\u0106\x07%\x02\x02\u0106\u0132\x05\x18\r\x11\u0107\u0108\f" +
		"\r\x02\x02\u0108\u0109\t\x02\x02\x02\u0109\u0132\x05\x18\r\x0E\u010A\u010B" +
		"\f\f\x02\x02\u010B\u010C\t\x03\x02\x02\u010C\u0132\x05\x18\r\r\u010D\u010E" +
		"\f\v\x02\x02\u010E\u010F\x07(\x02\x02\u010F\u0132\x05\x18\r\f\u0110\u0111" +
		"\f\n\x02\x02\u0111\u0112\t\x04\x02\x02\u0112\u0132\x05\x18\r\v\u0113\u0114" +
		"\f\t\x02\x02\u0114\u0115\t\x05\x02\x02\u0115\u0132\x05\x18\r\n\u0116\u0117" +
		"\f\b\x02\x02\u0117\u0118\x07\f\x02\x02\u0118\u0132\x05\x18\r\t\u0119\u011A" +
		"\f\x07\x02\x02\u011A\u011B\x07\t\x02\x02\u011B\u0132\x05\x18\r\b\u011C" +
		"\u011D\f\x06\x02\x02\u011D\u0121\x07 \x02\x02\u011E\u011F\x05 \x11\x02" +
		"\u011F\u0120\x07\"\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121\u011E\x03" +
		"\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123" +
		"\u0132\x05\x18\r\x07\u0124\u0125\f\x13\x02\x02\u0125\u0126\x07)\x02\x02" +
		"\u0126\u0132\x05 \x11\x02\u0127\u0129\f\x12\x02\x02\u0128\u012A\x05,\x17" +
		"\x02\u0129\u0128\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B\u0132\x05(\x15\x02\u012C\u012D\f\x11\x02\x02\u012D" +
		"\u012E\x07\x17\x02\x02\u012E\u012F\x05\x18\r\x02\u012F\u0130\x07\x18\x02" +
		"\x02\u0130\u0132\x03\x02\x02\x02\u0131\u0104\x03\x02\x02\x02\u0131\u0107" +
		"\x03\x02\x02\x02\u0131\u010A\x03\x02\x02\x02\u0131\u010D\x03\x02\x02\x02" +
		"\u0131\u0110\x03\x02\x02\x02\u0131\u0113\x03\x02\x02\x02\u0131\u0116\x03" +
		"\x02\x02\x02\u0131\u0119\x03\x02\x02\x02\u0131\u011C\x03\x02\x02\x02\u0131" +
		"\u0124\x03\x02\x02\x02\u0131\u0127\x03\x02\x02\x02\u0131\u012C\x03\x02" +
		"\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133" +
		"\u0134\x03\x02\x02\x02\u0134\x19\x03\x02\x02\x02\u0135\u0133\x03\x02\x02" +
		"\x02\u0136\u013D\x07:\x02\x02\u0137\u013D\x07=\x02\x02\u0138\u013D\x07" +
		"<\x02\x02\u0139\u013D\x07;\x02\x02\u013A\u013D\x07>\x02\x02\u013B\u013D" +
		"\x07?\x02\x02\u013C\u0136\x03\x02\x02\x02\u013C\u0137\x03\x02\x02\x02" +
		"\u013C\u0138\x03\x02\x02\x02\u013C\u0139\x03\x02\x02\x02\u013C\u013A\x03" +
		"\x02\x02\x02\u013C\u013B\x03\x02\x02\x02\u013D\x1B\x03\x02\x02\x02\u013E" +
		"\u013F\b\x0F\x01\x02\u013F\u0141\x07B\x02\x02\u0140\u0142\x05,\x17\x02" +
		"\u0141\u0140\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u014F\x03" +
		"\x02\x02\x02\u0143\u014F\x05\x1A\x0E\x02\u0144\u0146\x05.\x18\x02\u0145" +
		"\u0144\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x03\x02" +
		"\x02\x02\u0147\u0148\x05*\x16\x02\u0148\u0149\x05\x1C\x0F\x04\u0149\u014F" +
		"\x03\x02\x02\x02\u014A\u014B\x07\x19\x02\x02\u014B\u014C\x05\x1C\x0F\x02" +
		"\u014C\u014D\x07\x1A\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u013E\x03" +
		"\x02\x02\x02\u014E\u0143\x03\x02\x02\x02\u014E\u0145\x03\x02\x02\x02\u014E" +
		"\u014A\x03\x02\x02\x02\u014F\u015A\x03\x02\x02\x02\u0150\u0151\f\x05\x02" +
		"\x02\u0151\u0152\x07 \x02\x02\u0152\u0159\x05\x1C\x0F\x06\u0153\u0154" +
		"\f\x07\x02\x02\u0154\u0159\x076\x02\x02\u0155\u0156\f\x06\x02\x02\u0156" +
		"\u0157\x07\x17\x02\x02\u0157\u0159\x07\x18\x02\x02\u0158\u0150\x03\x02" +
		"\x02\x02\u0158\u0153\x03\x02\x02\x02\u0158\u0155\x03\x02\x02\x02\u0159" +
		"\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B\x1D\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015D\u015E" +
		"\t\x06\x02\x02\u015E\x1F\x03\x02\x02\x02\u015F\u0160\t\x07\x02\x02\u0160" +
		"!\x03\x02\x02\x02\u0161\u0162\x05 \x11\x02\u0162\u0165\x05\x1C\x0F\x02" +
		"\u0163\u0164\x07\x1F\x02\x02\u0164\u0166\x07B\x02\x02\u0165\u0163\x03" +
		"\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166#\x03\x02\x02\x02\u0167" +
		"\u0170\x07\x19\x02\x02\u0168\u016D\x05\"\x12\x02\u0169\u016A\x07!\x02" +
		"\x02\u016A\u016C\x05\"\x12\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016F" +
		"\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
		"\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0168\x03" +
		"\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
		"\u0173\x07\x1A\x02\x02\u0173%\x03\x02\x02\x02\u0174\u0175\x05 \x11\x02" +
		"\u0175\u0176\x07.\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0174\x03" +
		"\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u017A\x05\x18\r\x02\u017A\'\x03\x02\x02\x02\u017B\u0184\x07\x19\x02\x02" +
		"\u017C\u0181\x05&\x14\x02\u017D\u017E\x07!\x02\x02\u017E\u0180\x05&\x14" +
		"\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F" +
		"\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02" +
		"\u0183\u0181\x03\x02\x02\x02\u0184\u017C\x03\x02\x02\x02\u0184\u0185\x03" +
		"\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x07\x1A\x02\x02\u0187" +
		")\x03\x02\x02\x02\u0188\u0191\x07\x19\x02\x02\u0189\u018E\x05\x1C\x0F" +
		"\x02\u018A\u018B\x07!\x02\x02\u018B\u018D\x05\x1C\x0F\x02\u018C\u018A" +
		"\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02" +
		"\u018E\u018F\x03\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E\x03" +
		"\x02\x02\x02\u0191\u0189\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192" +
		"\u0193\x03\x02\x02\x02\u0193\u0194\x07\x1A\x02\x02\u0194+\x03\x02\x02" +
		"\x02\u0195\u0196\x07,\x02\x02\u0196\u019B\x05\x1C\x0F\x02\u0197\u0198" +
		"\x07!\x02\x02\u0198\u019A\x05\x1C\x0F\x02\u0199\u0197\x03\x02\x02\x02" +
		"\u019A\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03" +
		"\x02\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E" +
		"\u019F\x07-\x02\x02\u019F-\x03\x02\x02\x02\u01A0\u01A1\x07,\x02\x02\u01A1" +
		"\u01A6\x07B\x02\x02\u01A2\u01A3\x07!\x02\x02\u01A3\u01A5\x07B\x02\x02" +
		"\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03" +
		"\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02\x02\x02\u01A8" +
		"\u01A6\x03\x02\x02\x02\u01A9\u01AA\x07-\x02\x02\u01AA/\x03\x02\x02\x02" +
		"\u01AB\u01AC\x07\"\x02\x02\u01AC\u01B8\x05\x16\f\x02\u01AD\u01AE\x07\"" +
		"\x02\x02\u01AE\u01AF\x07C\x02\x02\u01AF\u01B2\x07\x03\x02\x02\u01B0\u01B3" +
		"\x05\x16\f\x02\u01B1\u01B3\x07C\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B2\x03\x02" +
		"\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
		"\u01B8\x07\x04\x02\x02\u01B7\u01AB\x03\x02\x02\x02\u01B7\u01AD\x03\x02" +
		"\x02\x02\u01B81\x03\x02\x02\x02:9;GMQUX\\cemuy~\x80\x88\x8D\x93\x98\x9F" +
		"\xA5\xA9\xB9\xBE\xC2\xCD\xD5\xDB\xEA\xED\xFA\xFF\u0102\u0121\u0129\u0131" +
		"\u0133\u013C\u0141\u0145\u014E\u0158\u015A\u0165\u016D\u0170\u0177\u0181" +
		"\u0184\u018E\u0191\u019B\u01A6\u01B2\u01B4\u01B7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ModuleContext extends ParserRuleContext {
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
	public extensionProperty(): ExtensionPropertyContext[];
	public extensionProperty(i: number): ExtensionPropertyContext;
	public extensionProperty(i?: number): ExtensionPropertyContext | ExtensionPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionPropertyContext);
		} else {
			return this.getRuleContext(i, ExtensionPropertyContext);
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
	public get ruleIndex(): number { return XonParser.RULE_module; }
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
	public _name!: LibrartMemberNameContext;
	public _alias!: LibrartMemberNameContext;
	public librartMemberName(): LibrartMemberNameContext[];
	public librartMemberName(i: number): LibrartMemberNameContext;
	public librartMemberName(i?: number): LibrartMemberNameContext | LibrartMemberNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibrartMemberNameContext);
		} else {
			return this.getRuleContext(i, LibrartMemberNameContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
}


export class LibrartMemberNameContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public DEFINITION_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEFINITION_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_librartMemberName; }
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


export class ExtensionPropertyContext extends ParserRuleContext {
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_extensionProperty; }
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


