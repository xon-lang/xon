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
	public static readonly ELSE = 7;
	public static readonly LOOP = 8;
	public static readonly INIT = 9;
	public static readonly VOID = 10;
	public static readonly BREAK = 11;
	public static readonly RETURN = 12;
	public static readonly OPEN_BRACKET = 13;
	public static readonly CLOSE_BRACKET = 14;
	public static readonly OPEN_PAREN = 15;
	public static readonly CLOSE_PAREN = 16;
	public static readonly OPEN_BRACE = 17;
	public static readonly CLOSE_BRACE = 18;
	public static readonly AD = 19;
	public static readonly DOT = 20;
	public static readonly PLUS = 21;
	public static readonly HASH = 22;
	public static readonly PIPE = 23;
	public static readonly COMMA = 24;
	public static readonly COLON = 25;
	public static readonly MINUS = 26;
	public static readonly SLASH = 27;
	public static readonly CARET = 28;
	public static readonly TILDE = 29;
	public static readonly ASSIGN = 30;
	public static readonly MODULO = 31;
	public static readonly QUESTION = 32;
	public static readonly ASTERISK = 33;
	public static readonly LESS_THAN = 34;
	public static readonly MORE_THAN = 35;
	public static readonly AMPERSAND = 36;
	public static readonly UNDERSCORE = 37;
	public static readonly EXCLAMATION = 38;
	public static readonly LAMBDA_START = 39;
	public static readonly FLOAT_LITERAL = 40;
	public static readonly INTEGER_LITERAL = 41;
	public static readonly BOOLEAN_LITERAL = 42;
	public static readonly CHAR_LITERAL = 43;
	public static readonly STRING_LITERAL = 44;
	public static readonly PREPROCESSOR = 45;
	public static readonly ID = 46;
	public static readonly NL = 47;
	public static readonly WS = 48;
	public static readonly COMMENT = 49;
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
	public static readonly RULE_generics = 16;
	public static readonly RULE_body = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "definition", "member", 
		"statement", "expression", "literal", "type", "operator", "id", "parameter", 
		"parameters", "argument", "arguments", "generics", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'is'", "'as'", "'if'", "'in'", "'else'", 
		"'loop'", "'init'", "'void'", "'break'", "'return'", "'['", "']'", "'('", 
		"')'", "'{'", "'}'", "'@'", "'.'", "'+'", "'#'", "'|'", "','", "':'", 
		"'-'", "'/'", "'^'", "'~'", "'='", "'%'", "'?'", "'*'", "'<'", "'>'", 
		"'&'", "'_'", "'!'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "IS", "AS", "IF", "IN", "ELSE", "LOOP", 
		"INIT", "VOID", "BREAK", "RETURN", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "AD", "DOT", "PLUS", "HASH", 
		"PIPE", "COMMA", "COLON", "MINUS", "SLASH", "CARET", "TILDE", "ASSIGN", 
		"MODULO", "QUESTION", "ASTERISK", "LESS_THAN", "MORE_THAN", "AMPERSAND", 
		"UNDERSCORE", "EXCLAMATION", "LAMBDA_START", "FLOAT_LITERAL", "INTEGER_LITERAL", 
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
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LAMBDA_START - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.PREPROCESSOR - 39)) | (1 << (XonParser.ID - 39)) | (1 << (XonParser.NL - 39)))) !== 0)) {
				{
				this.state = 40;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 36;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 37;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 38;
					this.definition();
					}
					break;

				case 4:
					{
					this.state = 39;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 44;
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
			this.state = 45;
			this.libraryPath();
			this.state = 46;
			this.match(XonParser.COLON);
			this.state = 47;
			this.libraryMember();
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 48;
				this.match(XonParser.COMMA);
				this.state = 49;
				this.libraryMember();
				}
				}
				this.state = 54;
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
			this.state = 55;
			this.id();
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 56;
				this.match(XonParser.MINUS);
				this.state = 57;
				this.id();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(XonParser.SLASH);
			this.state = 64;
			this.id();
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 65;
				this.match(XonParser.MINUS);
				this.state = 66;
				this.id();
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
		this.enterRule(_localctx, 6, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			_localctx._name = this.id();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 73;
				this.match(XonParser.AS);
				this.state = 74;
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
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.id();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 78;
				this.generics();
				}
			}

			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 81;
				this.parameters();
				}
			}

			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 84;
				this.match(XonParser.IS);
				this.state = 85;
				this.type(0);
				}
			}

			this.state = 88;
			this.match(XonParser.COLON);
			this.state = 89;
			this.match(XonParser.NL);
			this.state = 90;
			this.match(XonParser.INDENT);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 93;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.INIT:
				case XonParser.DOT:
				case XonParser.PLUS:
				case XonParser.PIPE:
				case XonParser.MINUS:
				case XonParser.SLASH:
				case XonParser.CARET:
				case XonParser.ASSIGN:
				case XonParser.MODULO:
				case XonParser.ASTERISK:
				case XonParser.LESS_THAN:
				case XonParser.MORE_THAN:
				case XonParser.AMPERSAND:
				case XonParser.EXCLAMATION:
				case XonParser.ID:
					{
					this.state = 91;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 92;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.DOT) | (1 << XonParser.PLUS) | (1 << XonParser.PIPE) | (1 << XonParser.MINUS) | (1 << XonParser.SLASH) | (1 << XonParser.CARET) | (1 << XonParser.ASSIGN) | (1 << XonParser.MODULO))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.ASTERISK - 33)) | (1 << (XonParser.LESS_THAN - 33)) | (1 << (XonParser.MORE_THAN - 33)) | (1 << (XonParser.AMPERSAND - 33)) | (1 << (XonParser.EXCLAMATION - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.NL - 33)))) !== 0));
			this.state = 97;
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
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.id();
				this.state = 100;
				this.type(0);
				this.state = 103;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 101;
					this.match(XonParser.ASSIGN);
					this.state = 102;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.match(XonParser.INIT);
				this.state = 106;
				this.body();
				}
				break;

			case 3:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 107;
				this.operator();
				this.state = 108;
				this.parameters();
				this.state = 109;
				this.type(0);
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 110;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 113;
				this.id();
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 114;
					this.generics();
					}
				}

				this.state = 117;
				this.parameters();
				this.state = 118;
				this.type(0);
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 119;
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
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.match(XonParser.LOOP);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LAMBDA_START - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.ID - 39)))) !== 0)) {
					{
					this.state = 138;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
					case 1:
						{
						this.state = 125;
						(_localctx as LoopStatementContext)._value = this.id();
						this.state = 130;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
						case 1:
							{
							this.state = 126;
							this.match(XonParser.COMMA);
							this.state = 128;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 127;
								(_localctx as LoopStatementContext)._key = this.id();
								}
							}

							}
							break;
						}
						this.state = 134;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.COMMA) {
							{
							this.state = 132;
							this.match(XonParser.COMMA);
							this.state = 133;
							(_localctx as LoopStatementContext)._index = this.id();
							}
						}

						this.state = 136;
						this.match(XonParser.IN);
						}
						break;
					}
					this.state = 140;
					this.expression(0);
					}
				}

				this.state = 143;
				this.body();
				}
				break;

			case 2:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.match(XonParser.IF);
				this.state = 145;
				this.expression(0);
				this.state = 146;
				this.body();
				this.state = 149;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 147;
					this.match(XonParser.ELSE);
					this.state = 148;
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
				this.state = 151;
				this.match(XonParser.BREAK);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 152;
				this.match(XonParser.RETURN);
				this.state = 154;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 153;
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
				this.state = 156;
				this.id();
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.VOID || _la === XonParser.OPEN_PAREN || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.FLOAT_LITERAL - 40)) | (1 << (XonParser.INTEGER_LITERAL - 40)) | (1 << (XonParser.BOOLEAN_LITERAL - 40)) | (1 << (XonParser.CHAR_LITERAL - 40)) | (1 << (XonParser.STRING_LITERAL - 40)) | (1 << (XonParser.ID - 40)))) !== 0)) {
					{
					this.state = 157;
					this.type(0);
					}
				}

				this.state = 160;
				this.match(XonParser.ASSIGN);
				this.state = 161;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 163;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 164;
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
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 168;
				this.id();
				}
				break;
			case XonParser.AD:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 169;
				this.match(XonParser.AD);
				}
				break;
			case XonParser.FLOAT_LITERAL:
			case XonParser.INTEGER_LITERAL:
			case XonParser.BOOLEAN_LITERAL:
			case XonParser.CHAR_LITERAL:
			case XonParser.STRING_LITERAL:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 170;
				this.literal();
				}
				break;
			case XonParser.OPEN_BRACKET:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 171;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LAMBDA_START - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.ID - 39)))) !== 0)) {
					{
					this.state = 172;
					this.expression(0);
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 173;
						this.match(XonParser.COMMA);
						this.state = 174;
						this.expression(0);
						}
						}
						this.state = 179;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 182;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;
			case XonParser.OPEN_PAREN:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.match(XonParser.OPEN_PAREN);
				this.state = 184;
				this.expression(0);
				this.state = 185;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			case XonParser.LAMBDA_START:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 187;
				this.match(XonParser.LAMBDA_START);
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 188;
					this.parameter();
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 189;
						this.match(XonParser.COMMA);
						this.state = 190;
						this.parameter();
						}
						}
						this.state = 195;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 196;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 200;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 232;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 230;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 203;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 204;
						this.operator();
						this.state = 205;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 207;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 208;
						this.match(XonParser.DOT);
						this.state = 209;
						this.id();
						}
						break;

					case 3:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 210;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 222;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS_THAN) {
							{
							this.state = 211;
							this.match(XonParser.LESS_THAN);
							this.state = 212;
							this.type(0);
							this.state = 217;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.COMMA) {
								{
								{
								this.state = 213;
								this.match(XonParser.COMMA);
								this.state = 214;
								this.type(0);
								}
								}
								this.state = 219;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 220;
							this.match(XonParser.MORE_THAN);
							}
						}

						this.state = 224;
						this.arguments();
						}
						break;

					case 4:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 225;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 226;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 227;
						this.expression(0);
						this.state = 228;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 237;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 238;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 239;
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
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				_localctx = new VoidTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 243;
				this.match(XonParser.VOID);
				}
				break;

			case 2:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 244;
				this.id();
				this.state = 256;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 245;
					this.match(XonParser.LESS_THAN);
					this.state = 246;
					this.type(0);
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 247;
						this.match(XonParser.COMMA);
						this.state = 248;
						this.type(0);
						}
						}
						this.state = 253;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 254;
					this.match(XonParser.MORE_THAN);
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new LiteralTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 258;
				this.literal();
				}
				break;

			case 4:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 259;
				this.match(XonParser.OPEN_PAREN);
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.VOID || _la === XonParser.OPEN_PAREN || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.FLOAT_LITERAL - 40)) | (1 << (XonParser.INTEGER_LITERAL - 40)) | (1 << (XonParser.BOOLEAN_LITERAL - 40)) | (1 << (XonParser.CHAR_LITERAL - 40)) | (1 << (XonParser.STRING_LITERAL - 40)) | (1 << (XonParser.ID - 40)))) !== 0)) {
					{
					this.state = 260;
					(_localctx as FunctionTypeContext)._type = this.type(0);
					(_localctx as FunctionTypeContext)._params.push((_localctx as FunctionTypeContext)._type);
					this.state = 265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 261;
						this.match(XonParser.COMMA);
						this.state = 262;
						(_localctx as FunctionTypeContext)._type = this.type(0);
						(_localctx as FunctionTypeContext)._params.push((_localctx as FunctionTypeContext)._type);
						}
						}
						this.state = 267;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 270;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 271;
				(_localctx as FunctionTypeContext)._returnType = this.type(3);
				}
				break;

			case 5:
				{
				_localctx = new ActionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 272;
				this.match(XonParser.OPEN_PAREN);
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.VOID || _la === XonParser.OPEN_PAREN || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.FLOAT_LITERAL - 40)) | (1 << (XonParser.INTEGER_LITERAL - 40)) | (1 << (XonParser.BOOLEAN_LITERAL - 40)) | (1 << (XonParser.CHAR_LITERAL - 40)) | (1 << (XonParser.STRING_LITERAL - 40)) | (1 << (XonParser.ID - 40)))) !== 0)) {
					{
					this.state = 273;
					(_localctx as ActionTypeContext)._type = this.type(0);
					(_localctx as ActionTypeContext)._params.push((_localctx as ActionTypeContext)._type);
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 274;
						this.match(XonParser.COMMA);
						this.state = 275;
						(_localctx as ActionTypeContext)._type = this.type(0);
						(_localctx as ActionTypeContext)._params.push((_localctx as ActionTypeContext)._type);
						}
						}
						this.state = 280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 283;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				this.match(XonParser.OPEN_PAREN);
				this.state = 285;
				this.type(0);
				this.state = 286;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 300;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 298;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 290;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 291;
						this.match(XonParser.PIPE);
						this.state = 292;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 293;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 294;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 295;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 296;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 297;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
			this.state = 336;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 303;
				this.match(XonParser.PLUS);
				}
				break;
			case XonParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.match(XonParser.MINUS);
				}
				break;
			case XonParser.ASTERISK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 305;
				this.match(XonParser.ASTERISK);
				}
				break;
			case XonParser.SLASH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 306;
				this.match(XonParser.SLASH);
				}
				break;
			case XonParser.MODULO:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 307;
				this.match(XonParser.MODULO);
				}
				break;
			case XonParser.CARET:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 308;
				this.match(XonParser.CARET);
				}
				break;
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 309;
				this.match(XonParser.ASSIGN);
				this.state = 310;
				this.match(XonParser.ASSIGN);
				}
				break;
			case XonParser.LESS_THAN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 311;
				this.match(XonParser.LESS_THAN);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 312;
					this.match(XonParser.ASSIGN);
					}
				}

				}
				break;
			case XonParser.MORE_THAN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 315;
				this.match(XonParser.MORE_THAN);
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 316;
					this.match(XonParser.ASSIGN);
					}
				}

				}
				break;
			case XonParser.EXCLAMATION:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 319;
				this.match(XonParser.EXCLAMATION);
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 320;
					this.match(XonParser.ASSIGN);
					}
				}

				}
				break;
			case XonParser.AMPERSAND:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 323;
				this.match(XonParser.AMPERSAND);
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.AMPERSAND) {
					{
					this.state = 324;
					this.match(XonParser.AMPERSAND);
					}
				}

				}
				break;
			case XonParser.PIPE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 327;
				this.match(XonParser.PIPE);
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.PIPE) {
					{
					this.state = 328;
					this.match(XonParser.PIPE);
					}
				}

				}
				break;
			case XonParser.DOT:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 331;
				this.match(XonParser.DOT);
				this.state = 332;
				this.match(XonParser.DOT);
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.DOT) {
					{
					this.state = 333;
					this.match(XonParser.DOT);
					}
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
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
			this.state = 340;
			_localctx._name = this.id();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.VOID || _la === XonParser.OPEN_PAREN || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.FLOAT_LITERAL - 40)) | (1 << (XonParser.INTEGER_LITERAL - 40)) | (1 << (XonParser.BOOLEAN_LITERAL - 40)) | (1 << (XonParser.CHAR_LITERAL - 40)) | (1 << (XonParser.STRING_LITERAL - 40)) | (1 << (XonParser.ID - 40)))) !== 0)) {
				{
				this.state = 341;
				this.type(0);
				}
			}

			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 344;
				this.match(XonParser.HASH);
				this.state = 345;
				_localctx._meta = this.id();
				}
			}

			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ASSIGN) {
				{
				this.state = 348;
				this.match(XonParser.ASSIGN);
				this.state = 349;
				this.expression(0);
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
			this.state = 352;
			this.match(XonParser.OPEN_PAREN);
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 353;
				this.parameter();
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 354;
					this.match(XonParser.COMMA);
					this.state = 355;
					this.parameter();
					}
					}
					this.state = 360;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 363;
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
			this.state = 368;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.id();
				this.state = 366;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 370;
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
			this.state = 372;
			this.match(XonParser.OPEN_PAREN);
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LAMBDA_START - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.ID - 39)))) !== 0)) {
				{
				this.state = 373;
				this.argument();
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 374;
					this.match(XonParser.COMMA);
					this.state = 375;
					this.argument();
					}
					}
					this.state = 380;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 383;
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
		this.enterRule(_localctx, 32, XonParser.RULE_generics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(XonParser.LESS_THAN);
			this.state = 386;
			this.id();
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 387;
				this.match(XonParser.COMMA);
				this.state = 388;
				this.id();
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 394;
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
		this.enterRule(_localctx, 34, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 396;
				this.match(XonParser.COLON);
				this.state = 397;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 398;
				this.match(XonParser.COLON);
				this.state = 399;
				this.match(XonParser.NL);
				this.state = 400;
				this.match(XonParser.INDENT);
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 403;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IF:
					case XonParser.LOOP:
					case XonParser.BREAK:
					case XonParser.RETURN:
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.AD:
					case XonParser.LAMBDA_START:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.BOOLEAN_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 401;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 402;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.AD))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LAMBDA_START - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.PREPROCESSOR - 39)) | (1 << (XonParser.ID - 39)) | (1 << (XonParser.NL - 39)))) !== 0));
				this.state = 407;
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
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 4);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\u019D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02+\n\x02\f\x02\x0E\x02" +
		".\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x035\n\x03\f\x03\x0E" +
		"\x038\v\x03\x03\x04\x03\x04\x03\x04\x07\x04=\n\x04\f\x04\x0E\x04@\v\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04I\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x05\x05N\n\x05\x03\x06\x03\x06\x05\x06R\n\x06\x03" +
		"\x06\x05\x06U\n\x06\x03\x06\x03\x06\x05\x06Y\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x06\x06`\n\x06\r\x06\x0E\x06a\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07j\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07r\n\x07\x03\x07\x03\x07\x05\x07v\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07{\n\x07\x05\x07}\n\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\x83\n\b\x05\b\x85\n\b\x03\b\x03\b\x05\b\x89\n\b\x03\b\x03\b\x05" +
		"\b\x8D\n\b\x03\b\x05\b\x90\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\x98\n\b\x03\b\x03\b\x03\b\x05\b\x9D\n\b\x03\b\x03\b\x05\b\xA1\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA8\n\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x07\t\xB2\n\t\f\t\x0E\t\xB5\v\t\x05\t\xB7\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xC2\n\t\f\t\x0E" +
		"\t\xC5\v\t\x03\t\x03\t\x05\t\xC9\n\t\x03\t\x05\t\xCC\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xDA\n\t" +
		"\f\t\x0E\t\xDD\v\t\x03\t\x03\t\x05\t\xE1\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x07\t\xE9\n\t\f\t\x0E\t\xEC\v\t\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\xF3\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xFC\n\v" +
		"\f\v\x0E\v\xFF\v\v\x03\v\x03\v\x05\v\u0103\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x07\v\u010A\n\v\f\v\x0E\v\u010D\v\v\x05\v\u010F\n\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x07\v\u0117\n\v\f\v\x0E\v\u011A\v\v\x05\v\u011C" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0123\n\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\u012D\n\v\f\v\x0E\v\u0130\v\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u013C\n\f\x03" +
		"\f\x03\f\x05\f\u0140\n\f\x03\f\x03\f\x05\f\u0144\n\f\x03\f\x03\f\x05\f" +
		"\u0148\n\f\x03\f\x03\f\x05\f\u014C\n\f\x03\f\x03\f\x03\f\x05\f\u0151\n" +
		"\f\x05\f\u0153\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u0159\n\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u015D\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0161\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0167\n\x0F\f\x0F\x0E\x0F\u016A\v" +
		"\x0F\x05\x0F\u016C\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u0173\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u017B" +
		"\n\x11\f\x11\x0E\x11\u017E\v\x11\x05\x11\u0180\n\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0188\n\x12\f\x12\x0E\x12\u018B\v" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x06\x13\u0196\n\x13\r\x13\x0E\x13\u0197\x03\x13\x05\x13\u019B\n\x13" +
		"\x03\x13\x02\x02\x04\x10\x14\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02\x02\x02\x02\u01EB\x02,\x03\x02\x02\x02\x04/\x03\x02" +
		"\x02\x02\x069\x03\x02\x02\x02\bJ\x03\x02\x02\x02\nO\x03\x02\x02\x02\f" +
		"|\x03\x02\x02\x02\x0E\xA7\x03\x02\x02\x02\x10\xCB\x03\x02\x02\x02\x12" +
		"\xF2\x03\x02\x02\x02\x14\u0122\x03\x02\x02\x02\x16\u0152\x03\x02\x02\x02" +
		"\x18\u0154\x03\x02\x02\x02\x1A\u0156\x03\x02\x02\x02\x1C\u0162\x03\x02" +
		"\x02\x02\x1E\u0172\x03\x02\x02\x02 \u0176\x03\x02\x02\x02\"\u0183\x03" +
		"\x02\x02\x02$\u019A\x03\x02\x02\x02&+\x05\x04\x03\x02\'+\x05\x0E\b\x02" +
		"(+\x05\n\x06\x02)+\x071\x02\x02*&\x03\x02\x02\x02*\'\x03\x02\x02\x02*" +
		"(\x03\x02\x02\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02" +
		",-\x03\x02\x02\x02-\x03\x03\x02\x02\x02.,\x03\x02\x02\x02/0\x05\x06\x04" +
		"\x0201\x07\x1B\x02\x0216\x05\b\x05\x0223\x07\x1A\x02\x0235\x05\b\x05\x02" +
		"42\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x02" +
		"7\x05\x03\x02\x02\x0286\x03\x02\x02\x029>\x05\x18\r\x02:;\x07\x1C\x02" +
		"\x02;=\x05\x18\r\x02<:\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?A\x03\x02\x02\x02@>\x03\x02\x02\x02AB\x07\x1D\x02" +
		"\x02BG\x05\x18\r\x02CD\x07\x1C\x02\x02DF\x05\x18\r\x02EC\x03\x02\x02\x02" +
		"FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\x07\x03\x02\x02" +
		"\x02IG\x03\x02\x02\x02JM\x05\x18\r\x02KL\x07\x06\x02\x02LN\x05\x18\r\x02" +
		"MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\t\x03\x02\x02\x02OQ\x05\x18\r\x02" +
		"PR\x05\"\x12\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02" +
		"SU\x05\x1C\x0F\x02TS\x03\x02\x02\x02TU\x03\x02\x02\x02UX\x03\x02\x02\x02" +
		"VW\x07\x05\x02\x02WY\x05\x14\v\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"YZ\x03\x02\x02\x02Z[\x07\x1B\x02\x02[\\\x071\x02\x02\\_\x07\x03\x02\x02" +
		"]`\x05\f\x07\x02^`\x071\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`a" +
		"\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02" +
		"cd\x07\x04\x02\x02d\v\x03\x02\x02\x02ef\x05\x18\r\x02fi\x05\x14\v\x02" +
		"gh\x07 \x02\x02hj\x05\x10\t\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02j}" +
		"\x03\x02\x02\x02kl\x07\v\x02\x02l}\x05$\x13\x02mn\x05\x16\f\x02no\x05" +
		"\x1C\x0F\x02oq\x05\x14\v\x02pr\x05$\x13\x02qp\x03\x02\x02\x02qr\x03\x02" +
		"\x02\x02r}\x03\x02\x02\x02su\x05\x18\r\x02tv\x05\"\x12\x02ut\x03\x02\x02" +
		"\x02uv\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x05\x1C\x0F\x02xz\x05\x14\v" +
		"\x02y{\x05$\x13\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02" +
		"\x02|e\x03\x02\x02\x02|k\x03\x02\x02\x02|m\x03\x02\x02\x02|s\x03\x02\x02" +
		"\x02}\r\x03\x02\x02\x02~\x8F\x07\n\x02\x02\x7F\x84\x05\x18\r\x02\x80\x82" +
		"\x07\x1A\x02\x02\x81\x83\x05\x18\r\x02\x82\x81\x03\x02\x02\x02\x82\x83" +
		"\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x87\x07\x1A\x02\x02\x87\x89" +
		"\x05\x18\r\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x8B\x07\b\x02\x02\x8B\x8D\x03\x02\x02\x02\x8C\x7F" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90" +
		"\x05\x10\t\x02\x8F\x8C\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91" +
		"\x03\x02\x02\x02\x91\xA8\x05$\x13\x02\x92\x93\x07\x07\x02\x02\x93\x94" +
		"\x05\x10\t\x02\x94\x97\x05$\x13\x02\x95\x96\x07\t\x02\x02\x96\x98\x05" +
		"$\x13\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\xA8\x03" +
		"\x02\x02\x02\x99\xA8\x07\r\x02\x02\x9A\x9C\x07\x0E\x02\x02\x9B\x9D\x05" +
		"\x10\t\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\xA8\x03" +
		"\x02\x02\x02\x9E\xA0\x05\x18\r\x02\x9F\xA1\x05\x14\v\x02\xA0\x9F\x03\x02" +
		"\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x07 " +
		"\x02\x02\xA3\xA4\x05\x10\t\x02\xA4\xA8\x03\x02\x02\x02\xA5\xA8\x05\x10" +
		"\t\x02\xA6\xA8\x07/\x02\x02\xA7~\x03\x02\x02\x02\xA7\x92\x03\x02\x02\x02" +
		"\xA7\x99\x03\x02\x02\x02\xA7\x9A\x03\x02\x02\x02\xA7\x9E\x03\x02\x02\x02" +
		"\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\x0F\x03\x02\x02\x02" +
		"\xA9\xAA\b\t\x01\x02\xAA\xCC\x05\x18\r\x02\xAB\xCC\x07\x15\x02\x02\xAC" +
		"\xCC\x05\x12\n\x02\xAD\xB6\x07\x0F\x02\x02\xAE\xB3\x05\x10\t\x02\xAF\xB0" +
		"\x07\x1A\x02\x02\xB0\xB2\x05\x10\t\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5" +
		"\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB7" +
		"\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xAE\x03\x02\x02\x02\xB6\xB7" +
		"\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xCC\x07\x10\x02\x02\xB9\xBA" +
		"\x07\x11\x02\x02\xBA\xBB\x05\x10\t\x02\xBB\xBC\x07\x12\x02\x02\xBC\xCC" +
		"\x03\x02\x02\x02\xBD\xC8\x07)\x02\x02\xBE\xC3\x05\x1A\x0E\x02\xBF\xC0" +
		"\x07\x1A\x02\x02\xC0\xC2\x05\x1A\x0E\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC5" +
		"\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC6" +
		"\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC7\x07\x1B\x02\x02\xC7\xC9" +
		"\x03\x02\x02\x02\xC8\xBE\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xCC\x05\x10\t\x03\xCB\xA9\x03\x02\x02\x02\xCB\xAB" +
		"\x03\x02\x02\x02\xCB\xAC\x03\x02\x02\x02\xCB\xAD\x03\x02\x02\x02\xCB\xB9" +
		"\x03\x02\x02\x02\xCB\xBD\x03\x02\x02\x02\xCC\xEA\x03\x02\x02\x02\xCD\xCE" +
		"\f\x06\x02\x02\xCE\xCF\x05\x16\f\x02\xCF\xD0\x05\x10\t\x07\xD0\xE9\x03" +
		"\x02\x02\x02\xD1\xD2\f\t\x02\x02\xD2\xD3\x07\x16\x02\x02\xD3\xE9\x05\x18" +
		"\r\x02\xD4\xE0\f\b\x02\x02\xD5\xD6\x07$\x02\x02\xD6\xDB\x05\x14\v\x02" +
		"\xD7\xD8\x07\x1A\x02\x02\xD8\xDA\x05\x14\v\x02\xD9\xD7\x03\x02\x02\x02" +
		"\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02" +
		"\xDC\xDE\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF\x07%\x02\x02" +
		"\xDF\xE1\x03\x02\x02\x02\xE0\xD5\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\xE9\x05 \x11\x02\xE3\xE4\f\x07\x02\x02\xE4" +
		"\xE5\x07\x0F\x02\x02\xE5\xE6\x05\x10\t\x02\xE6\xE7\x07\x10\x02\x02\xE7" +
		"\xE9\x03\x02\x02\x02\xE8\xCD\x03\x02\x02\x02\xE8\xD1\x03\x02\x02\x02\xE8" +
		"\xD4\x03\x02\x02\x02\xE8\xE3\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA" +
		"\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\x11\x03\x02\x02\x02\xEC" +
		"\xEA\x03\x02\x02\x02\xED\xF3\x07,\x02\x02\xEE\xF3\x07+\x02\x02\xEF\xF3" +
		"\x07*\x02\x02\xF0\xF3\x07-\x02\x02\xF1\xF3\x07.\x02\x02\xF2\xED\x03\x02" +
		"\x02\x02\xF2\xEE\x03\x02\x02\x02\xF2\xEF\x03\x02\x02\x02\xF2\xF0\x03\x02" +
		"\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3\x13\x03\x02\x02\x02\xF4\xF5\b\v\x01" +
		"\x02\xF5\u0123\x07\f\x02\x02\xF6\u0102\x05\x18\r\x02\xF7\xF8\x07$\x02" +
		"\x02\xF8\xFD\x05\x14\v\x02\xF9\xFA\x07\x1A\x02\x02\xFA\xFC\x05\x14\v\x02" +
		"\xFB\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02" +
		"\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02" +
		"\x02\u0100\u0101\x07%\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\xF7\x03" +
		"\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0123\x03\x02\x02\x02\u0104" +
		"\u0123\x05\x12\n\x02\u0105\u010E\x07\x11\x02\x02\u0106\u010B\x05\x14\v" +
		"\x02\u0107\u0108\x07\x1A\x02\x02\u0108\u010A\x05\x14\v\x02\u0109\u0107" +
		"\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03" +
		"\x02\x02\x02\u010E\u0106\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0110\x03\x02\x02\x02\u0110\u0111\x07\x12\x02\x02\u0111\u0123\x05\x14" +
		"\v\x05\u0112\u011B\x07\x11\x02\x02\u0113\u0118\x05\x14\v\x02\u0114\u0115" +
		"\x07\x1A\x02\x02\u0115\u0117\x05\x14\v\x02\u0116\u0114\x03\x02\x02\x02" +
		"\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03" +
		"\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B" +
		"\u0113\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02" +
		"\x02\x02\u011D\u0123\x07\x12\x02\x02\u011E\u011F\x07\x11\x02\x02\u011F" +
		"\u0120\x05\x14\v\x02\u0120\u0121\x07\x12\x02\x02\u0121\u0123\x03\x02\x02" +
		"\x02\u0122\xF4\x03\x02\x02\x02\u0122\xF6\x03\x02\x02\x02\u0122\u0104\x03" +
		"\x02\x02\x02\u0122\u0105\x03\x02\x02\x02\u0122\u0112\x03\x02\x02\x02\u0122" +
		"\u011E\x03\x02\x02\x02\u0123\u012E\x03\x02\x02\x02\u0124\u0125\f\x06\x02" +
		"\x02\u0125\u0126\x07\x19\x02\x02\u0126\u012D\x05\x14\v\x07\u0127\u0128" +
		"\f\b\x02\x02\u0128\u012D\x07\"\x02\x02\u0129\u012A\f\x07\x02\x02\u012A" +
		"\u012B\x07\x0F\x02\x02\u012B\u012D\x07\x10\x02\x02\u012C\u0124\x03\x02" +
		"\x02\x02\u012C\u0127\x03\x02\x02\x02\u012C\u0129\x03\x02\x02\x02\u012D" +
		"\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012F\x15\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0153" +
		"\x07\x17\x02\x02\u0132\u0153\x07\x1C\x02\x02\u0133\u0153\x07#\x02\x02" +
		"\u0134\u0153\x07\x1D\x02\x02\u0135\u0153\x07!\x02\x02\u0136\u0153\x07" +
		"\x1E\x02\x02\u0137\u0138\x07 \x02\x02\u0138\u0153\x07 \x02\x02\u0139\u013B" +
		"\x07$\x02\x02\u013A\u013C\x07 \x02\x02\u013B\u013A\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013C\u0153\x03\x02\x02\x02\u013D\u013F\x07%\x02" +
		"\x02\u013E\u0140\x07 \x02\x02\u013F\u013E\x03\x02\x02\x02\u013F\u0140" +
		"\x03\x02\x02\x02\u0140\u0153\x03\x02\x02\x02\u0141\u0143\x07(\x02\x02" +
		"\u0142\u0144\x07 \x02\x02\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03" +
		"\x02\x02\x02\u0144\u0153\x03\x02\x02\x02\u0145\u0147\x07&\x02\x02\u0146" +
		"\u0148\x07&\x02\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03\x02\x02" +
		"\x02\u0148\u0153\x03\x02\x02\x02\u0149\u014B\x07\x19\x02\x02\u014A\u014C" +
		"\x07\x19\x02\x02\u014B\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
		"\u014C\u0153\x03\x02\x02\x02\u014D\u014E\x07\x16\x02\x02\u014E\u0150\x07" +
		"\x16\x02\x02\u014F\u0151\x07\x16\x02\x02\u0150\u014F\x03\x02\x02\x02\u0150" +
		"\u0151\x03\x02\x02\x02\u0151\u0153\x03\x02\x02\x02\u0152\u0131\x03\x02" +
		"\x02\x02\u0152\u0132\x03\x02\x02\x02\u0152\u0133\x03\x02\x02\x02\u0152" +
		"\u0134\x03\x02\x02\x02\u0152\u0135\x03\x02\x02\x02\u0152\u0136\x03\x02" +
		"\x02\x02\u0152\u0137\x03\x02\x02\x02\u0152\u0139\x03\x02\x02\x02\u0152" +
		"\u013D\x03\x02\x02\x02\u0152\u0141\x03\x02\x02\x02\u0152\u0145\x03\x02" +
		"\x02\x02\u0152\u0149\x03\x02\x02\x02\u0152\u014D\x03\x02\x02\x02\u0153" +
		"\x17\x03\x02\x02\x02\u0154\u0155\x070\x02\x02\u0155\x19\x03\x02\x02\x02" +
		"\u0156\u0158\x05\x18\r\x02\u0157\u0159\x05\x14\v\x02\u0158\u0157\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A" +
		"\u015B\x07\x18\x02\x02\u015B\u015D\x05\x18\r\x02\u015C\u015A\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015F" +
		"\x07 \x02\x02\u015F\u0161\x05\x10\t\x02\u0160\u015E\x03\x02\x02\x02\u0160" +
		"\u0161\x03\x02\x02\x02\u0161\x1B\x03\x02\x02\x02\u0162\u016B\x07\x11\x02" +
		"\x02\u0163\u0168\x05\x1A\x0E\x02\u0164\u0165\x07\x1A\x02\x02\u0165\u0167" +
		"\x05\x1A\x0E\x02\u0166\u0164\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02" +
		"\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016C\x03" +
		"\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u0163\x03\x02\x02\x02\u016B" +
		"\u016C\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07\x12" +
		"\x02\x02\u016E\x1D\x03\x02\x02\x02\u016F\u0170\x05\x18\r\x02\u0170\u0171" +
		"\x07 \x02\x02\u0171\u0173\x03\x02\x02\x02\u0172\u016F\x03\x02\x02\x02" +
		"\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0175\x05" +
		"\x10\t\x02\u0175\x1F\x03\x02\x02\x02\u0176\u017F\x07\x11\x02\x02\u0177" +
		"\u017C\x05\x1E\x10\x02\u0178\u0179\x07\x1A\x02\x02\u0179\u017B\x05\x1E" +
		"\x10\x02\u017A\u0178\x03\x02\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C" +
		"\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u0180\x03\x02" +
		"\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0177\x03\x02\x02\x02\u017F" +
		"\u0180\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x07\x12" +
		"\x02\x02\u0182!\x03\x02\x02\x02\u0183\u0184\x07$\x02\x02\u0184\u0189\x05" +
		"\x18\r\x02\u0185\u0186\x07\x1A\x02\x02\u0186\u0188\x05\x18\r\x02\u0187" +
		"\u0185\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02" +
		"\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B" +
		"\u0189\x03\x02\x02\x02\u018C\u018D\x07%\x02\x02\u018D#\x03\x02\x02\x02" +
		"\u018E\u018F\x07\x1B\x02\x02\u018F\u019B\x05\x0E\b\x02\u0190\u0191\x07" +
		"\x1B\x02\x02\u0191\u0192\x071\x02\x02\u0192\u0195\x07\x03\x02\x02\u0193" +
		"\u0196\x05\x0E\b\x02\u0194\u0196\x071\x02\x02\u0195\u0193\x03\x02\x02" +
		"\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0195" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02" +
		"\u0199\u019B\x07\x04\x02\x02\u019A\u018E\x03\x02\x02\x02\u019A\u0190\x03" +
		"\x02\x02\x02\u019B%\x03\x02\x02\x02A*,6>GMQTX_aiquz|\x82\x84\x88\x8C\x8F" +
		"\x97\x9C\xA0\xA7\xB3\xB6\xC3\xC8\xCB\xDB\xE0\xE8\xEA\xF2\xFD\u0102\u010B" +
		"\u010E\u0118\u011B\u0122\u012C\u012E\u013B\u013F\u0143\u0147\u014B\u0150" +
		"\u0152\u0158\u015C\u0160\u0168\u016B\u0172\u017C\u017F\u0189\u0195\u0197" +
		"\u019A";
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
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
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
	public _key!: IdContext;
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
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
	public AD(): TerminalNode { return this.getToken(XonParser.AD, 0); }
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
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_THAN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MORE_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.MORE_THAN, 0); }
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
export class OperatorExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
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
	public LAMBDA_START(): TerminalNode { return this.getToken(XonParser.LAMBDA_START, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class VoidTypeContext extends TypeContext {
	public VOID(): TerminalNode { return this.getToken(XonParser.VOID, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PlainTypeContext extends TypeContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_THAN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MORE_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.MORE_THAN, 0); }
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
	public _type!: TypeContext;
	public _params: TypeContext[] = [];
	public _returnType!: TypeContext;
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
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ActionTypeContext extends TypeContext {
	public _type!: TypeContext;
	public _params: TypeContext[] = [];
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
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ASSIGN);
		} else {
			return this.getToken(XonParser.ASSIGN, i);
		}
	}
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_THAN, 0); }
	public MORE_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.MORE_THAN, 0); }
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.AMPERSAND);
		} else {
			return this.getToken(XonParser.AMPERSAND, i);
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
	public _meta!: IdContext;
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
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


export class GenericsContext extends ParserRuleContext {
	public LESS_THAN(): TerminalNode { return this.getToken(XonParser.LESS_THAN, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
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


