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
	public static readonly NOT = 8;
	public static readonly AND = 9;
	public static readonly ELSE = 10;
	public static readonly LOOP = 11;
	public static readonly INIT = 12;
	public static readonly BREAK = 13;
	public static readonly RETURN = 14;
	public static readonly OPEN_BRACKET = 15;
	public static readonly CLOSE_BRACKET = 16;
	public static readonly OPEN_PAREN = 17;
	public static readonly CLOSE_PAREN = 18;
	public static readonly OPEN_BRACE = 19;
	public static readonly CLOSE_BRACE = 20;
	public static readonly AD = 21;
	public static readonly PLUS = 22;
	public static readonly HASH = 23;
	public static readonly PIPE = 24;
	public static readonly COMMA = 25;
	public static readonly COLON = 26;
	public static readonly MINUS = 27;
	public static readonly SLASH = 28;
	public static readonly CARET = 29;
	public static readonly TILDE = 30;
	public static readonly SPREAD = 31;
	public static readonly RANGE = 32;
	public static readonly DOT = 33;
	public static readonly LESS_THAN_EQUAL = 34;
	public static readonly MORE_THAN_EQUAL = 35;
	public static readonly LESS_THAN = 36;
	public static readonly MORE_THAN = 37;
	public static readonly ASSIGN = 38;
	public static readonly EQUAL = 39;
	public static readonly NOT_EQUAL = 40;
	public static readonly BIT_AND = 41;
	public static readonly BIT_OR = 42;
	public static readonly BIT_XOR = 43;
	public static readonly LAMBDA = 44;
	public static readonly MODULO = 45;
	public static readonly QUESTION = 46;
	public static readonly ASTERISK = 47;
	public static readonly UNDERSCORE = 48;
	public static readonly EXCLAMATION = 49;
	public static readonly NULL_LITERAL = 50;
	public static readonly FLOAT_LITERAL = 51;
	public static readonly INTEGER_LITERAL = 52;
	public static readonly BOOLEAN_LITERAL = 53;
	public static readonly CHAR_LITERAL = 54;
	public static readonly STRING_LITERAL = 55;
	public static readonly PREPROCESSOR = 56;
	public static readonly ID = 57;
	public static readonly DEFINITION_ID = 58;
	public static readonly NL = 59;
	public static readonly WS = 60;
	public static readonly COMMENT = 61;
	public static readonly RULE_program = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryPath = 2;
	public static readonly RULE_libraryMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_literal = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_operator = 10;
	public static readonly RULE_id = 11;
	public static readonly RULE_parameter = 12;
	public static readonly RULE_parameters = 13;
	public static readonly RULE_argument = 14;
	public static readonly RULE_arguments = 15;
	public static readonly RULE_typeParameters = 16;
	public static readonly RULE_generics = 17;
	public static readonly RULE_declaredGenerics = 18;
	public static readonly RULE_body = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "definition", "member", 
		"statement", "expression", "literal", "type", "operator", "id", "parameter", 
		"parameters", "argument", "arguments", "typeParameters", "generics", "declaredGenerics", 
		"body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'is'", "'as'", "'if'", "'in'", "'or'", 
		"'not'", "'and'", "'else'", "'loop'", "'init'", "'break'", "'return'", 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "'@'", "'+'", "'#'", "'|'", 
		"','", "':'", "'-'", "'/'", "'^'", "'~'", "'...'", "'..'", "'.'", "'<='", 
		"'>='", "'<'", "'>'", "'='", "'=='", "'!='", "'&&'", "'||'", "'^^'", "'\\'", 
		"'%'", "'?'", "'*'", "'_'", "'!'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "IS", "AS", "IF", "IN", "OR", "NOT", "AND", 
		"ELSE", "LOOP", "INIT", "BREAK", "RETURN", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "AD", "PLUS", 
		"HASH", "PIPE", "COMMA", "COLON", "MINUS", "SLASH", "CARET", "TILDE", 
		"SPREAD", "RANGE", "DOT", "LESS_THAN_EQUAL", "MORE_THAN_EQUAL", "LESS_THAN", 
		"MORE_THAN", "ASSIGN", "EQUAL", "NOT_EQUAL", "BIT_AND", "BIT_OR", "BIT_XOR", 
		"LAMBDA", "MODULO", "QUESTION", "ASTERISK", "UNDERSCORE", "EXCLAMATION", 
		"NULL_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "BOOLEAN_LITERAL", 
		"CHAR_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "DEFINITION_ID", 
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
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.NOT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (XonParser.LAMBDA - 44)) | (1 << (XonParser.NULL_LITERAL - 44)) | (1 << (XonParser.FLOAT_LITERAL - 44)) | (1 << (XonParser.INTEGER_LITERAL - 44)) | (1 << (XonParser.BOOLEAN_LITERAL - 44)) | (1 << (XonParser.CHAR_LITERAL - 44)) | (1 << (XonParser.STRING_LITERAL - 44)) | (1 << (XonParser.PREPROCESSOR - 44)) | (1 << (XonParser.ID - 44)) | (1 << (XonParser.DEFINITION_ID - 44)) | (1 << (XonParser.NL - 44)))) !== 0)) {
				{
				this.state = 44;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 40;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 41;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 42;
					this.definition();
					}
					break;

				case 4:
					{
					this.state = 43;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 48;
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
			this.state = 49;
			this.libraryPath();
			this.state = 50;
			this.match(XonParser.COLON);
			this.state = 51;
			this.libraryMember();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 52;
				this.match(XonParser.COMMA);
				this.state = 53;
				this.libraryMember();
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.id();
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 60;
				this.match(XonParser.MINUS);
				this.state = 61;
				this.id();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(XonParser.SLASH);
			this.state = 68;
			this.id();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 69;
				this.match(XonParser.MINUS);
				this.state = 70;
				this.id();
				}
				}
				this.state = 75;
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
		this.enterRule(_localctx, 6, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			_localctx._name = this.match(XonParser.DEFINITION_ID);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 77;
				this.match(XonParser.AS);
				this.state = 78;
				_localctx._alias = this.match(XonParser.DEFINITION_ID);
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
				case XonParser.INIT:
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.PLUS) | (1 << XonParser.MINUS) | (1 << XonParser.SLASH) | (1 << XonParser.CARET))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.RANGE - 32)) | (1 << (XonParser.LESS_THAN - 32)) | (1 << (XonParser.MORE_THAN - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.BIT_AND - 32)) | (1 << (XonParser.BIT_OR - 32)) | (1 << (XonParser.BIT_XOR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
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
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.match(XonParser.LOOP);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.NOT) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (XonParser.LAMBDA - 44)) | (1 << (XonParser.NULL_LITERAL - 44)) | (1 << (XonParser.FLOAT_LITERAL - 44)) | (1 << (XonParser.INTEGER_LITERAL - 44)) | (1 << (XonParser.BOOLEAN_LITERAL - 44)) | (1 << (XonParser.CHAR_LITERAL - 44)) | (1 << (XonParser.STRING_LITERAL - 44)) | (1 << (XonParser.ID - 44)) | (1 << (XonParser.DEFINITION_ID - 44)))) !== 0)) {
					{
					this.state = 136;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						this.state = 129;
						(_localctx as LoopStatementContext)._value = this.id();
						this.state = 132;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.COMMA) {
							{
							this.state = 130;
							this.match(XonParser.COMMA);
							this.state = 131;
							(_localctx as LoopStatementContext)._index = this.id();
							}
						}

						this.state = 134;
						this.match(XonParser.IN);
						}
						break;
					}
					this.state = 138;
					this.expression(0);
					}
				}

				this.state = 141;
				this.body();
				}
				break;

			case 2:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
				this.match(XonParser.IF);
				this.state = 143;
				this.expression(0);
				this.state = 144;
				this.body();
				this.state = 147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 145;
					this.match(XonParser.ELSE);
					this.state = 146;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 149;
				this.match(XonParser.BREAK);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 150;
				this.match(XonParser.RETURN);
				this.state = 152;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 151;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 154;
				this.id();
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.LESS_THAN - 36)) | (1 << (XonParser.NULL_LITERAL - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.DEFINITION_ID - 36)))) !== 0)) {
					{
					this.state = 155;
					this.type(0);
					}
				}

				this.state = 158;
				this.match(XonParser.ASSIGN);
				this.state = 159;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 161;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 162;
				this.match(XonParser.PREPROCESSOR);
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
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AD:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 166;
				this.match(XonParser.AD);
				}
				break;
			case XonParser.DEFINITION_ID:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 167;
				this.match(XonParser.DEFINITION_ID);
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 168;
					this.generics();
					}
				}

				this.state = 171;
				this.arguments();
				}
				break;
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 172;
				this.id();
				}
				break;
			case XonParser.NULL_LITERAL:
			case XonParser.FLOAT_LITERAL:
			case XonParser.INTEGER_LITERAL:
			case XonParser.BOOLEAN_LITERAL:
			case XonParser.CHAR_LITERAL:
			case XonParser.STRING_LITERAL:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 173;
				this.literal();
				}
				break;
			case XonParser.MINUS:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 174;
				this.match(XonParser.MINUS);
				this.state = 175;
				this.expression(12);
				}
				break;
			case XonParser.NOT:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 176;
				this.match(XonParser.NOT);
				this.state = 177;
				this.expression(11);
				}
				break;
			case XonParser.OPEN_BRACKET:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 178;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.NOT) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (XonParser.LAMBDA - 44)) | (1 << (XonParser.NULL_LITERAL - 44)) | (1 << (XonParser.FLOAT_LITERAL - 44)) | (1 << (XonParser.INTEGER_LITERAL - 44)) | (1 << (XonParser.BOOLEAN_LITERAL - 44)) | (1 << (XonParser.CHAR_LITERAL - 44)) | (1 << (XonParser.STRING_LITERAL - 44)) | (1 << (XonParser.ID - 44)) | (1 << (XonParser.DEFINITION_ID - 44)))) !== 0)) {
					{
					this.state = 179;
					this.expression(0);
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 180;
						this.match(XonParser.COMMA);
						this.state = 181;
						this.expression(0);
						}
						}
						this.state = 186;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 189;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;
			case XonParser.OPEN_PAREN:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 190;
				this.match(XonParser.OPEN_PAREN);
				this.state = 191;
				this.expression(0);
				this.state = 192;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			case XonParser.LAMBDA:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 194;
				this.match(XonParser.LAMBDA);
				this.state = 205;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 195;
					this.id();
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 196;
						this.match(XonParser.COMMA);
						this.state = 197;
						this.id();
						}
						}
						this.state = 202;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 203;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 207;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 247;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 210;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 211;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 212;
						(_localctx as PowExpressionContext)._right = this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 213;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 214;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (XonParser.SLASH - 28)) | (1 << (XonParser.MODULO - 28)) | (1 << (XonParser.ASTERISK - 28)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 215;
						(_localctx as MulDivModExpressionContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 216;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 217;
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
						this.state = 218;
						(_localctx as AddSubExpressionContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 219;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 220;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 221;
						(_localctx as RangeExpressionContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 222;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 223;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS_THAN_EQUAL - 34)) | (1 << (XonParser.MORE_THAN_EQUAL - 34)) | (1 << (XonParser.LESS_THAN - 34)) | (1 << (XonParser.MORE_THAN - 34)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 224;
						(_localctx as RelationalExpressionContext)._right = this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 225;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 226;
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
						this.state = 227;
						(_localctx as EqualityExpressionContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 228;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 229;
						this.match(XonParser.AND);
						this.state = 230;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 231;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 232;
						this.match(XonParser.OR);
						this.state = 233;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 234;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 235;
						this.match(XonParser.DOT);
						this.state = 236;
						this.id();
						}
						break;

					case 10:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 237;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 239;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS_THAN) {
							{
							this.state = 238;
							this.generics();
							}
						}

						this.state = 241;
						this.arguments();
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 242;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 243;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 244;
						this.expression(0);
						this.state = 245;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
		this.enterRule(_localctx, 16, XonParser.RULE_literal);
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 253;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 254;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 255;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 256;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 257;
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
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 261;
				this.match(XonParser.DEFINITION_ID);
				this.state = 263;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 262;
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
				this.state = 265;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 266;
					this.declaredGenerics();
					}
				}

				this.state = 269;
				this.typeParameters();
				this.state = 270;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 272;
				this.match(XonParser.OPEN_PAREN);
				this.state = 273;
				this.type(0);
				this.state = 274;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 288;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 286;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 278;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 279;
						this.match(XonParser.PIPE);
						this.state = 280;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 281;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 282;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 283;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 284;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 285;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 290;
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
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			_la = this._input.LA(1);
			if (!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.PLUS - 22)) | (1 << (XonParser.MINUS - 22)) | (1 << (XonParser.SLASH - 22)) | (1 << (XonParser.CARET - 22)) | (1 << (XonParser.RANGE - 22)) | (1 << (XonParser.LESS_THAN - 22)) | (1 << (XonParser.MORE_THAN - 22)) | (1 << (XonParser.EQUAL - 22)) | (1 << (XonParser.BIT_AND - 22)) | (1 << (XonParser.BIT_OR - 22)) | (1 << (XonParser.BIT_XOR - 22)) | (1 << (XonParser.MODULO - 22)) | (1 << (XonParser.ASTERISK - 22)))) !== 0))) {
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
		this.enterRule(_localctx, 22, XonParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(XonParser.ID);
			}
		}
		catch (re) {
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
		this.enterRule(_localctx, 24, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			_localctx._name = this.id();
			this.state = 296;
			this.type(0);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 297;
				this.match(XonParser.HASH);
				this.state = 298;
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
		this.enterRule(_localctx, 26, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(XonParser.OPEN_PAREN);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 302;
				this.parameter();
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 303;
					this.match(XonParser.COMMA);
					this.state = 304;
					this.parameter();
					}
					}
					this.state = 309;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 312;
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
		this.enterRule(_localctx, 28, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 314;
				this.id();
				this.state = 315;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 319;
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
		this.enterRule(_localctx, 30, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(XonParser.OPEN_PAREN);
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.NOT) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (XonParser.LAMBDA - 44)) | (1 << (XonParser.NULL_LITERAL - 44)) | (1 << (XonParser.FLOAT_LITERAL - 44)) | (1 << (XonParser.INTEGER_LITERAL - 44)) | (1 << (XonParser.BOOLEAN_LITERAL - 44)) | (1 << (XonParser.CHAR_LITERAL - 44)) | (1 << (XonParser.STRING_LITERAL - 44)) | (1 << (XonParser.ID - 44)) | (1 << (XonParser.DEFINITION_ID - 44)))) !== 0)) {
				{
				this.state = 322;
				this.argument();
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 323;
					this.match(XonParser.COMMA);
					this.state = 324;
					this.argument();
					}
					}
					this.state = 329;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 332;
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
		this.enterRule(_localctx, 32, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(XonParser.OPEN_PAREN);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.LESS_THAN - 36)) | (1 << (XonParser.NULL_LITERAL - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.DEFINITION_ID - 36)))) !== 0)) {
				{
				this.state = 335;
				this.type(0);
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 336;
					this.match(XonParser.COMMA);
					this.state = 337;
					this.type(0);
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
			}
		}
		catch (re) {
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(XonParser.LESS_THAN);
			this.state = 348;
			this.type(0);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 349;
				this.match(XonParser.COMMA);
				this.state = 350;
				this.type(0);
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 356;
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
		this.enterRule(_localctx, 36, XonParser.RULE_declaredGenerics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(XonParser.LESS_THAN);
			this.state = 359;
			this.match(XonParser.DEFINITION_ID);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 360;
				this.match(XonParser.COMMA);
				this.state = 361;
				this.match(XonParser.DEFINITION_ID);
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 367;
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
		this.enterRule(_localctx, 38, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 369;
				this.match(XonParser.COLON);
				this.state = 370;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 371;
				this.match(XonParser.COLON);
				this.state = 372;
				this.match(XonParser.NL);
				this.state = 373;
				this.match(XonParser.INDENT);
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 376;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IF:
					case XonParser.NOT:
					case XonParser.LOOP:
					case XonParser.BREAK:
					case XonParser.RETURN:
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.AD:
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
						this.state = 374;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 375;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.NOT) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (XonParser.LAMBDA - 44)) | (1 << (XonParser.NULL_LITERAL - 44)) | (1 << (XonParser.FLOAT_LITERAL - 44)) | (1 << (XonParser.INTEGER_LITERAL - 44)) | (1 << (XonParser.BOOLEAN_LITERAL - 44)) | (1 << (XonParser.CHAR_LITERAL - 44)) | (1 << (XonParser.STRING_LITERAL - 44)) | (1 << (XonParser.PREPROCESSOR - 44)) | (1 << (XonParser.ID - 44)) | (1 << (XonParser.DEFINITION_ID - 44)) | (1 << (XonParser.NL - 44)))) !== 0));
				this.state = 380;
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
		case 7:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 9:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

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
			return this.precpred(this._ctx, 16);

		case 9:
			return this.precpred(this._ctx, 15);

		case 10:
			return this.precpred(this._ctx, 14);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 3);

		case 12:
			return this.precpred(this._ctx, 5);

		case 13:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u0182\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x07\x02/\n\x02\f\x02\x0E\x022\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x039\n\x03\f\x03\x0E\x03<\v\x03\x03\x04\x03\x04\x03\x04\x07\x04" +
		"A\n\x04\f\x04\x0E\x04D\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04J" +
		"\n\x04\f\x04\x0E\x04M\v\x04\x03\x05\x03\x05\x03\x05\x05\x05R\n\x05\x03" +
		"\x06\x03\x06\x05\x06V\n\x06\x03\x06\x05\x06Y\n\x06\x03\x06\x03\x06\x05" +
		"\x06]\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06d\n\x06\r\x06" +
		"\x0E\x06e\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07n\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07v\n\x07\x03\x07" +
		"\x03\x07\x05\x07z\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\x7F\n\x07\x05" +
		"\x07\x81\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x87\n\b\x03\b\x03\b\x05\b" +
		"\x8B\n\b\x03\b\x05\b\x8E\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"\x96\n\b\x03\b\x03\b\x03\b\x05\b\x9B\n\b\x03\b\x03\b\x05\b\x9F\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA6\n\b\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\xAC\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x07\t\xB9\n\t\f\t\x0E\t\xBC\v\t\x05\t\xBE\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xC9\n\t\f\t\x0E\t\xCC\v\t\x03\t" +
		"\x03\t\x05\t\xD0\n\t\x03\t\x05\t\xD3\n\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\xF2\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xFA\n\t\f\t" +
		"\x0E\t\xFD\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0105\n\n\x03" +
		"\v\x03\v\x03\v\x05\v\u010A\n\v\x03\v\x03\v\x05\v\u010E\n\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0117\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x07\v\u0121\n\v\f\v\x0E\v\u0124\v\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u012E\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0134\n\x0F\f\x0F\x0E\x0F\u0137\v" +
		"\x0F\x05\x0F\u0139\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u0140\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0148" +
		"\n\x11\f\x11\x0E\x11\u014B\v\x11\x05\x11\u014D\n\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0155\n\x12\f\x12\x0E\x12\u0158\v" +
		"\x12\x05\x12\u015A\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x07\x13\u0162\n\x13\f\x13\x0E\x13\u0165\v\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u016D\n\x14\f\x14\x0E\x14\u0170\v\x14" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x06\x15\u017B\n\x15\r\x15\x0E\x15\u017C\x03\x15\x05\x15\u0180\n\x15\x03" +
		"\x15\x02\x02\x04\x10\x14\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02\x02\x07\x05\x02\x1E\x1E//11\x04\x02\x18\x18" +
		"\x1D\x1D\x03\x02$\'\x03\x02)*\n\x02\x18\x18\x1D\x1F\"\"&\'))+-//11\x02" +
		"\u01C0\x020\x03\x02\x02\x02\x043\x03\x02\x02\x02\x06=\x03\x02\x02\x02" +
		"\bN\x03\x02\x02\x02\nS\x03\x02\x02\x02\f\x80\x03\x02\x02\x02\x0E\xA5\x03" +
		"\x02\x02\x02\x10\xD2\x03\x02\x02\x02\x12\u0104\x03\x02\x02\x02\x14\u0116" +
		"\x03\x02\x02\x02\x16\u0125\x03\x02\x02\x02\x18\u0127\x03\x02\x02\x02\x1A" +
		"\u0129\x03\x02\x02\x02\x1C\u012F\x03\x02\x02\x02\x1E\u013F\x03\x02\x02" +
		"\x02 \u0143\x03\x02\x02\x02\"\u0150\x03\x02\x02\x02$\u015D\x03\x02\x02" +
		"\x02&\u0168\x03\x02\x02\x02(\u017F\x03\x02\x02\x02*/\x05\x04\x03\x02+" +
		"/\x05\x0E\b\x02,/\x05\n\x06\x02-/\x07=\x02\x02.*\x03\x02\x02\x02.+\x03" +
		"\x02\x02\x02.,\x03\x02\x02\x02.-\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03" +
		"\x02\x02\x0201\x03\x02\x02\x021\x03\x03\x02\x02\x0220\x03\x02\x02\x02" +
		"34\x05\x06\x04\x0245\x07\x1C\x02\x025:\x05\b\x05\x0267\x07\x1B\x02\x02" +
		"79\x05\b\x05\x0286\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;\x05\x03\x02\x02\x02<:\x03\x02\x02\x02=B\x05\x18\r" +
		"\x02>?\x07\x1D\x02\x02?A\x05\x18\r\x02@>\x03\x02\x02\x02AD\x03\x02\x02" +
		"\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02\x02" +
		"\x02EF\x07\x1E\x02\x02FK\x05\x18\r\x02GH\x07\x1D\x02\x02HJ\x05\x18\r\x02" +
		"IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"L\x07\x03\x02\x02\x02MK\x03\x02\x02\x02NQ\x07<\x02\x02OP\x07\x06\x02\x02" +
		"PR\x07<\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02R\t\x03\x02\x02\x02" +
		"SU\x07<\x02\x02TV\x05&\x14\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03" +
		"\x02\x02\x02WY\x05\x1C\x0F\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02Y\\" +
		"\x03\x02\x02\x02Z[\x07\x05\x02\x02[]\x05\x14\v\x02\\Z\x03\x02\x02\x02" +
		"\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x07\x1C\x02\x02_`\x07=\x02\x02" +
		"`c\x07\x03\x02\x02ad\x05\f\x07\x02bd\x07=\x02\x02ca\x03\x02\x02\x02cb" +
		"\x03\x02\x02\x02de\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02" +
		"fg\x03\x02\x02\x02gh\x07\x04\x02\x02h\v\x03\x02\x02\x02ij\x05\x18\r\x02" +
		"jm\x05\x14\v\x02kl\x07(\x02\x02ln\x05\x10\t\x02mk\x03\x02\x02\x02mn\x03" +
		"\x02\x02\x02n\x81\x03\x02\x02\x02op\x07\x0E\x02\x02p\x81\x05(\x15\x02" +
		"qr\x05\x16\f\x02rs\x05\x1C\x0F\x02su\x05\x14\v\x02tv\x05(\x15\x02ut\x03" +
		"\x02\x02\x02uv\x03\x02\x02\x02v\x81\x03\x02\x02\x02wy\x05\x18\r\x02xz" +
		"\x05&\x14\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|" +
		"\x05\x1C\x0F\x02|~\x05\x14\v\x02}\x7F\x05(\x15\x02~}\x03\x02\x02\x02~" +
		"\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80i\x03\x02\x02\x02\x80" +
		"o\x03\x02\x02\x02\x80q\x03\x02\x02\x02\x80w\x03\x02\x02\x02\x81\r\x03" +
		"\x02\x02\x02\x82\x8D\x07\r\x02\x02\x83\x86\x05\x18\r\x02\x84\x85\x07\x1B" +
		"\x02\x02\x85\x87\x05\x18\r\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02" +
		"\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x07\b\x02\x02\x89\x8B\x03\x02" +
		"\x02\x02\x8A\x83\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02" +
		"\x02\x02\x8C\x8E\x05\x10\t\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\xA6\x05(\x15\x02\x90\x91\x07\x07" +
		"\x02\x02\x91\x92\x05\x10\t\x02\x92\x95\x05(\x15\x02\x93\x94\x07\f\x02" +
		"\x02\x94\x96\x05(\x15\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02" +
		"\x02\x96\xA6\x03\x02\x02\x02\x97\xA6\x07\x0F\x02\x02\x98\x9A\x07\x10\x02" +
		"\x02\x99\x9B\x05\x10\t\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
		"\x02\x9B\xA6\x03\x02\x02\x02\x9C\x9E\x05\x18\r\x02\x9D\x9F\x05\x14\v\x02" +
		"\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02" +
		"\xA0\xA1\x07(\x02\x02\xA1\xA2\x05\x10\t\x02\xA2\xA6\x03\x02\x02\x02\xA3" +
		"\xA6\x05\x10\t\x02\xA4\xA6\x07:\x02\x02\xA5\x82\x03\x02\x02\x02\xA5\x90" +
		"\x03\x02\x02\x02\xA5\x97\x03\x02\x02\x02\xA5\x98\x03\x02\x02\x02\xA5\x9C" +
		"\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\x0F" +
		"\x03\x02\x02\x02\xA7\xA8\b\t\x01\x02\xA8\xD3\x07\x17\x02\x02\xA9\xAB\x07" +
		"<\x02\x02\xAA\xAC\x05$\x13\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02" +
		"\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xD3\x05 \x11\x02\xAE\xD3\x05\x18" +
		"\r\x02\xAF\xD3\x05\x12\n\x02\xB0\xB1\x07\x1D\x02\x02\xB1\xD3\x05\x10\t" +
		"\x0E\xB2\xB3\x07\n\x02\x02\xB3\xD3\x05\x10\t\r\xB4\xBD\x07\x11\x02\x02" +
		"\xB5\xBA\x05\x10\t\x02\xB6\xB7\x07\x1B\x02\x02\xB7\xB9\x05\x10\t\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA" +
		"\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD" +
		"\xB5\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF" +
		"\xD3\x07\x12\x02\x02\xC0\xC1\x07\x13\x02\x02\xC1\xC2\x05\x10\t\x02\xC2" +
		"\xC3\x07\x14\x02\x02\xC3\xD3\x03\x02\x02\x02\xC4\xCF\x07.\x02\x02\xC5" +
		"\xCA\x05\x18\r\x02\xC6\xC7\x07\x1B\x02\x02\xC7\xC9\x05\x18\r\x02\xC8\xC6" +
		"\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCE" +
		"\x07\x1C\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xC5\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3\x05\x10\t\x03\xD2\xA7" +
		"\x03\x02\x02\x02\xD2\xA9\x03\x02\x02\x02\xD2\xAE\x03\x02\x02\x02\xD2\xAF" +
		"\x03\x02\x02\x02\xD2\xB0\x03\x02\x02\x02\xD2\xB2\x03\x02\x02\x02\xD2\xB4" +
		"\x03\x02\x02\x02\xD2\xC0\x03\x02\x02\x02\xD2\xC4\x03\x02\x02\x02\xD3\xFB" +
		"\x03\x02\x02\x02\xD4\xD5\f\x0F\x02\x02\xD5\xD6\x07\x1F\x02\x02\xD6\xFA" +
		"\x05\x10\t\x10\xD7\xD8\f\f\x02\x02\xD8\xD9\t\x02\x02\x02\xD9\xFA\x05\x10" +
		"\t\r\xDA\xDB\f\v\x02\x02\xDB\xDC\t\x03\x02\x02\xDC\xFA\x05\x10\t\f\xDD" +
		"\xDE\f\n\x02\x02\xDE\xDF\x07\"\x02\x02\xDF\xFA\x05\x10\t\v\xE0\xE1\f\t" +
		"\x02\x02\xE1\xE2\t\x04\x02\x02\xE2\xFA\x05\x10\t\n\xE3\xE4\f\b\x02\x02" +
		"\xE4\xE5\t\x05\x02\x02\xE5\xFA\x05\x10\t\t\xE6\xE7\f\x07\x02\x02\xE7\xE8" +
		"\x07\v\x02\x02\xE8\xFA\x05\x10\t\b\xE9\xEA\f\x06\x02\x02\xEA\xEB\x07\t" +
		"\x02\x02\xEB\xFA\x05\x10\t\x07\xEC\xED\f\x12\x02\x02\xED\xEE\x07#\x02" +
		"\x02\xEE\xFA\x05\x18\r\x02\xEF\xF1\f\x11\x02\x02\xF0\xF2\x05$\x13\x02" +
		"\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02" +
		"\xF3\xFA\x05 \x11\x02\xF4\xF5\f\x10\x02\x02\xF5\xF6\x07\x11\x02\x02\xF6" +
		"\xF7\x05\x10\t\x02\xF7\xF8\x07\x12\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9" +
		"\xD4\x03\x02\x02\x02\xF9\xD7\x03\x02\x02\x02\xF9\xDA\x03\x02\x02\x02\xF9" +
		"\xDD\x03\x02\x02\x02\xF9\xE0\x03\x02\x02\x02\xF9\xE3\x03\x02\x02\x02\xF9" +
		"\xE6\x03\x02\x02\x02\xF9\xE9\x03\x02\x02\x02\xF9\xEC\x03\x02\x02\x02\xF9" +
		"\xEF\x03\x02\x02\x02\xF9\xF4\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB" +
		"\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\x11\x03\x02\x02\x02\xFD" +
		"\xFB\x03\x02\x02\x02\xFE\u0105\x074\x02\x02\xFF\u0105\x077\x02\x02\u0100" +
		"\u0105\x076\x02\x02\u0101\u0105\x075\x02\x02\u0102\u0105\x078\x02\x02" +
		"\u0103\u0105\x079\x02\x02\u0104\xFE\x03\x02\x02\x02\u0104\xFF\x03\x02" +
		"\x02\x02\u0104\u0100\x03\x02\x02\x02\u0104\u0101\x03\x02\x02\x02\u0104" +
		"\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\x13\x03\x02\x02" +
		"\x02\u0106\u0107\b\v\x01\x02\u0107\u0109\x07<\x02\x02\u0108\u010A\x05" +
		"$\x13\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
		"\u0117\x03\x02\x02\x02\u010B\u0117\x05\x12\n\x02\u010C\u010E\x05&\x14" +
		"\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F" +
		"\x03\x02\x02\x02\u010F\u0110\x05\"\x12\x02\u0110\u0111\x05\x14\v\x04\u0111" +
		"\u0117\x03\x02\x02\x02\u0112\u0113\x07\x13\x02\x02\u0113\u0114\x05\x14" +
		"\v\x02\u0114\u0115\x07\x14\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0106" +
		"\x03\x02\x02\x02\u0116\u010B\x03\x02\x02\x02\u0116\u010D\x03\x02\x02\x02" +
		"\u0116\u0112\x03\x02\x02\x02\u0117\u0122\x03\x02\x02\x02\u0118\u0119\f" +
		"\x05\x02\x02\u0119\u011A\x07\x1A\x02\x02\u011A\u0121\x05\x14\v\x06\u011B" +
		"\u011C\f\x07\x02\x02\u011C\u0121\x070\x02\x02\u011D\u011E\f\x06\x02\x02" +
		"\u011E\u011F\x07\x11\x02\x02\u011F\u0121\x07\x12\x02\x02\u0120\u0118\x03" +
		"\x02\x02\x02\u0120\u011B\x03\x02\x02\x02\u0120\u011D\x03\x02\x02\x02\u0121" +
		"\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02" +
		"\x02\x02\u0123\x15\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0126" +
		"\t\x06\x02\x02\u0126\x17\x03\x02\x02\x02\u0127\u0128\x07;\x02\x02\u0128" +
		"\x19\x03\x02\x02\x02\u0129\u012A\x05\x18\r\x02\u012A\u012D\x05\x14\v\x02" +
		"\u012B\u012C\x07\x19\x02\x02\u012C\u012E\x07<\x02\x02\u012D\u012B\x03" +
		"\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\x1B\x03\x02\x02\x02\u012F" +
		"\u0138\x07\x13\x02\x02\u0130\u0135\x05\x1A\x0E\x02\u0131\u0132\x07\x1B" +
		"\x02\x02\u0132\u0134\x05\x1A\x0E\x02\u0133\u0131\x03\x02\x02\x02\u0134" +
		"\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u0130\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02" +
		"\x02\x02\u013A\u013B\x07\x14\x02\x02\u013B\x1D\x03\x02\x02\x02\u013C\u013D" +
		"\x05\x18\r\x02\u013D\u013E\x07(\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F" +
		"\u013C\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02" +
		"\x02\x02\u0141\u0142\x05\x10\t\x02\u0142\x1F\x03\x02\x02\x02\u0143\u014C" +
		"\x07\x13\x02\x02\u0144\u0149\x05\x1E\x10\x02\u0145\u0146\x07\x1B\x02\x02" +
		"\u0146\u0148\x05\x1E\x10\x02\u0147\u0145\x03\x02\x02\x02\u0148\u014B\x03" +
		"\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u0144\x03\x02" +
		"\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E" +
		"\u014F\x07\x14\x02\x02\u014F!\x03\x02\x02\x02\u0150\u0159\x07\x13\x02" +
		"\x02\u0151\u0156\x05\x14\v\x02\u0152\u0153\x07\x1B\x02\x02\u0153\u0155" +
		"\x05\x14\v\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02" +
		"\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u015A\x03" +
		"\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u0151\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x07\x14" +
		"\x02\x02\u015C#\x03\x02\x02\x02\u015D\u015E\x07&\x02\x02\u015E\u0163\x05" +
		"\x14\v\x02\u015F\u0160\x07\x1B\x02\x02\u0160\u0162\x05\x14\v\x02\u0161" +
		"\u015F\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0161\x03\x02" +
		"\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165" +
		"\u0163\x03\x02\x02\x02\u0166\u0167\x07\'\x02\x02\u0167%\x03\x02\x02\x02" +
		"\u0168\u0169\x07&\x02\x02\u0169\u016E\x07<\x02\x02\u016A\u016B\x07\x1B" +
		"\x02\x02\u016B\u016D\x07<\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170" +
		"\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02" +
		"\u016F\u0171\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0172\x07" +
		"\'\x02\x02\u0172\'\x03\x02\x02\x02\u0173\u0174\x07\x1C\x02\x02\u0174\u0180" +
		"\x05\x0E\b\x02\u0175\u0176\x07\x1C\x02\x02\u0176\u0177\x07=\x02\x02\u0177" +
		"\u017A\x07\x03\x02\x02\u0178\u017B\x05\x0E\b\x02\u0179\u017B\x07=\x02" +
		"\x02\u017A\u0178\x03\x02\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B\u017C" +
		"\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
		"\u017D\u017E\x03\x02\x02\x02\u017E\u0180\x07\x04\x02\x02\u017F\u0173\x03" +
		"\x02\x02\x02\u017F\u0175\x03\x02\x02\x02\u0180)\x03\x02\x02\x025.0:BK" +
		"QUX\\cemuy~\x80\x86\x8A\x8D\x95\x9A\x9E\xA5\xAB\xBA\xBD\xCA\xCF\xD2\xF1" +
		"\xF9\xFB\u0104\u0109\u010D\u0116\u0120\u0122\u012D\u0135\u0138\u013F\u0149" +
		"\u014C\u0156\u0159\u0163\u016E\u017A\u017C\u017F";
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
	public SLASH(): TerminalNode { return this.getToken(XonParser.SLASH, 0); }
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.MINUS);
		} else {
			return this.getToken(XonParser.MINUS, i);
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
	public DEFINITION_ID(): TerminalNode[];
	public DEFINITION_ID(i: number): TerminalNode;
	public DEFINITION_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DEFINITION_ID);
		} else {
			return this.getToken(XonParser.DEFINITION_ID, i);
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
export class LoopStatementContext extends StatementContext {
	public _value!: IdContext;
	public _index!: IdContext;
	public LOOP(): TerminalNode { return this.getToken(XonParser.LOOP, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
export class AssignmentStatementContext extends StatementContext {
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
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public AD(): TerminalNode { return this.getToken(XonParser.AD, 0); }
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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


