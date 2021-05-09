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
	public static readonly THIS = 14;
	public static readonly BREAK = 15;
	public static readonly WHILE = 16;
	public static readonly RETURN = 17;
	public static readonly OPEN_BRACKET = 18;
	public static readonly CLOSE_BRACKET = 19;
	public static readonly OPEN_PAREN = 20;
	public static readonly CLOSE_PAREN = 21;
	public static readonly OPEN_BRACE = 22;
	public static readonly CLOSE_BRACE = 23;
	public static readonly AD = 24;
	public static readonly PLUS = 25;
	public static readonly HASH = 26;
	public static readonly PIPE = 27;
	public static readonly COMMA = 28;
	public static readonly COLON = 29;
	public static readonly MINUS = 30;
	public static readonly SLASH = 31;
	public static readonly CARET = 32;
	public static readonly TILDE = 33;
	public static readonly SPREAD = 34;
	public static readonly RANGE = 35;
	public static readonly DOT = 36;
	public static readonly LESS_THAN_EQUAL = 37;
	public static readonly MORE_THAN_EQUAL = 38;
	public static readonly LESS_THAN = 39;
	public static readonly MORE_THAN = 40;
	public static readonly ASSIGN = 41;
	public static readonly EQUAL = 42;
	public static readonly NOT_EQUAL = 43;
	public static readonly BIT_AND = 44;
	public static readonly BIT_OR = 45;
	public static readonly BIT_XOR = 46;
	public static readonly LAMBDA = 47;
	public static readonly MODULO = 48;
	public static readonly QUESTION = 49;
	public static readonly ASTERISK = 50;
	public static readonly UNDERSCORE = 51;
	public static readonly EXCLAMATION = 52;
	public static readonly NULL_LITERAL = 53;
	public static readonly FLOAT_LITERAL = 54;
	public static readonly INTEGER_LITERAL = 55;
	public static readonly BOOLEAN_LITERAL = 56;
	public static readonly CHAR_LITERAL = 57;
	public static readonly STRING_LITERAL = 58;
	public static readonly PREPROCESSOR = 59;
	public static readonly ID = 60;
	public static readonly DEFINITION_ID = 61;
	public static readonly NL = 62;
	public static readonly WS = 63;
	public static readonly COMMENT = 64;
	public static readonly RULE_program = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryPath = 2;
	public static readonly RULE_libraryMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_function = 6;
	public static readonly RULE_extensionMethod = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_literal = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_operator = 12;
	public static readonly RULE_id = 13;
	public static readonly RULE_parameter = 14;
	public static readonly RULE_parameters = 15;
	public static readonly RULE_argument = 16;
	public static readonly RULE_arguments = 17;
	public static readonly RULE_typeParameters = 18;
	public static readonly RULE_generics = 19;
	public static readonly RULE_declaredGenerics = 20;
	public static readonly RULE_body = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "definition", "member", 
		"function", "extensionMethod", "statement", "expression", "literal", "type", 
		"operator", "id", "parameter", "parameters", "argument", "arguments", 
		"typeParameters", "generics", "declaredGenerics", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'is'", "'as'", "'if'", "'in'", "'or'", 
		"'for'", "'not'", "'and'", "'else'", "'init'", "'loop'", "'this'", "'break'", 
		"'while'", "'return'", "'['", "']'", "'('", "')'", "'{'", "'}'", "'@'", 
		"'+'", "'#'", "'|'", "','", "':'", "'-'", "'/'", "'^'", "'~'", "'...'", 
		"'..'", "'.'", "'<='", "'>='", "'<'", "'>'", "'='", "'=='", "'!='", "'&&'", 
		"'||'", "'^^'", "'\\'", "'%'", "'?'", "'*'", "'_'", "'!'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "IS", "AS", "IF", "IN", "OR", "FOR", "NOT", 
		"AND", "ELSE", "INIT", "LOOP", "THIS", "BREAK", "WHILE", "RETURN", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"AD", "PLUS", "HASH", "PIPE", "COMMA", "COLON", "MINUS", "SLASH", "CARET", 
		"TILDE", "SPREAD", "RANGE", "DOT", "LESS_THAN_EQUAL", "MORE_THAN_EQUAL", 
		"LESS_THAN", "MORE_THAN", "ASSIGN", "EQUAL", "NOT_EQUAL", "BIT_AND", "BIT_OR", 
		"BIT_XOR", "LAMBDA", "MODULO", "QUESTION", "ASTERISK", "UNDERSCORE", "EXCLAMATION", 
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
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LESS_THAN - 39)) | (1 << (XonParser.LAMBDA - 39)) | (1 << (XonParser.NULL_LITERAL - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.PREPROCESSOR - 39)) | (1 << (XonParser.ID - 39)) | (1 << (XonParser.DEFINITION_ID - 39)) | (1 << (XonParser.NL - 39)))) !== 0)) {
				{
				this.state = 50;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 44;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 45;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 46;
					this.function();
					}
					break;

				case 4:
					{
					this.state = 47;
					this.extensionMethod();
					}
					break;

				case 5:
					{
					this.state = 48;
					this.definition();
					}
					break;

				case 6:
					{
					this.state = 49;
					this.match(XonParser.NL);
					}
					break;
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
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.libraryPath();
			this.state = 56;
			this.match(XonParser.COLON);
			this.state = 57;
			this.libraryMember();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 58;
				this.match(XonParser.COMMA);
				this.state = 59;
				this.libraryMember();
				}
				}
				this.state = 64;
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
			this.state = 65;
			this.id();
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 66;
				this.match(XonParser.MINUS);
				this.state = 67;
				this.id();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 73;
			this.match(XonParser.SLASH);
			this.state = 74;
			this.id();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 75;
				this.match(XonParser.MINUS);
				this.state = 76;
				this.id();
				}
				}
				this.state = 81;
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
			this.state = 82;
			_localctx._name = this.match(XonParser.DEFINITION_ID);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 83;
				this.match(XonParser.AS);
				this.state = 84;
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
			this.state = 87;
			this.match(XonParser.DEFINITION_ID);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 88;
				this.declaredGenerics();
				}
			}

			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 91;
				this.parameters();
				}
			}

			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 94;
				this.match(XonParser.IS);
				this.state = 95;
				this.type(0);
				}
			}

			this.state = 98;
			this.match(XonParser.COLON);
			this.state = 99;
			this.match(XonParser.NL);
			this.state = 100;
			this.match(XonParser.INDENT);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 103;
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
					this.state = 101;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 102;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.PLUS) | (1 << XonParser.MINUS) | (1 << XonParser.SLASH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.CARET - 32)) | (1 << (XonParser.RANGE - 32)) | (1 << (XonParser.LESS_THAN - 32)) | (1 << (XonParser.MORE_THAN - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.BIT_AND - 32)) | (1 << (XonParser.BIT_OR - 32)) | (1 << (XonParser.BIT_XOR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
			this.state = 107;
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
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.id();
				this.state = 110;
				this.type(0);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 111;
					this.match(XonParser.ASSIGN);
					this.state = 112;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 115;
				this.match(XonParser.INIT);
				this.state = 116;
				this.body();
				}
				break;

			case 3:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 117;
				this.operator();
				this.state = 118;
				this.parameters();
				this.state = 119;
				this.type(0);
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 120;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 123;
				this.id();
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 124;
					this.declaredGenerics();
					}
				}

				this.state = 127;
				this.parameters();
				this.state = 128;
				this.type(0);
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 129;
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
			this.state = 134;
			this.id();
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 135;
				this.declaredGenerics();
				}
			}

			this.state = 138;
			this.parameters();
			this.state = 139;
			this.type(0);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 140;
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
			this.state = 143;
			this.type(0);
			this.state = 144;
			this.match(XonParser.DOT);
			this.state = 145;
			this.id();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 146;
				this.declaredGenerics();
				}
			}

			this.state = 149;
			this.parameters();
			this.state = 150;
			this.type(0);
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
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.match(XonParser.FOR);
				this.state = 162;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 155;
					(_localctx as ForStatementContext)._value = this.id();
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 156;
						this.match(XonParser.COMMA);
						this.state = 157;
						(_localctx as ForStatementContext)._index = this.id();
						}
					}

					this.state = 160;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 164;
				this.expression(0);
				this.state = 165;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.match(XonParser.WHILE);
				this.state = 168;
				this.expression(0);
				this.state = 169;
				this.body();
				}
				break;

			case 3:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
				this.match(XonParser.LOOP);
				this.state = 172;
				this.body();
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 173;
				this.match(XonParser.IF);
				this.state = 174;
				this.expression(0);
				this.state = 175;
				this.body();
				this.state = 178;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 176;
					this.match(XonParser.ELSE);
					this.state = 177;
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
				this.state = 180;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 181;
				this.match(XonParser.RETURN);
				this.state = 183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 182;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 185;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new IdAssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 186;
				this.id();
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LESS_THAN - 39)) | (1 << (XonParser.NULL_LITERAL - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.DEFINITION_ID - 39)))) !== 0)) {
					{
					this.state = 187;
					this.type(0);
					}
				}

				this.state = 190;
				this.match(XonParser.ASSIGN);
				this.state = 191;
				this.expression(0);
				}
				break;

			case 9:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 193;
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
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.THIS:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 197;
				this.match(XonParser.THIS);
				}
				break;
			case XonParser.DEFINITION_ID:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 198;
				this.match(XonParser.DEFINITION_ID);
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 199;
					this.generics();
					}
				}

				this.state = 202;
				this.arguments();
				}
				break;
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 203;
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
				this.state = 204;
				this.literal();
				}
				break;
			case XonParser.MINUS:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 205;
				this.match(XonParser.MINUS);
				this.state = 206;
				this.expression(13);
				}
				break;
			case XonParser.NOT:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 207;
				this.match(XonParser.NOT);
				this.state = 208;
				this.expression(12);
				}
				break;
			case XonParser.OPEN_BRACKET:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 209;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.NOT) | (1 << XonParser.THIS) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (XonParser.LAMBDA - 47)) | (1 << (XonParser.NULL_LITERAL - 47)) | (1 << (XonParser.FLOAT_LITERAL - 47)) | (1 << (XonParser.INTEGER_LITERAL - 47)) | (1 << (XonParser.BOOLEAN_LITERAL - 47)) | (1 << (XonParser.CHAR_LITERAL - 47)) | (1 << (XonParser.STRING_LITERAL - 47)) | (1 << (XonParser.ID - 47)) | (1 << (XonParser.DEFINITION_ID - 47)))) !== 0)) {
					{
					this.state = 210;
					this.expression(0);
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 211;
						this.match(XonParser.COMMA);
						this.state = 212;
						this.expression(0);
						}
						}
						this.state = 217;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 220;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;
			case XonParser.OPEN_PAREN:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 221;
				this.match(XonParser.OPEN_PAREN);
				this.state = 222;
				this.expression(0);
				this.state = 223;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			case XonParser.LAMBDA:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 225;
				this.match(XonParser.LAMBDA);
				this.state = 236;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 226;
					this.id();
					this.state = 231;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 227;
						this.match(XonParser.COMMA);
						this.state = 228;
						this.id();
						}
						}
						this.state = 233;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 234;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 238;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 288;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 286;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 241;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 242;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 243;
						(_localctx as PowExpressionContext)._right = this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 244;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 245;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (XonParser.SLASH - 31)) | (1 << (XonParser.MODULO - 31)) | (1 << (XonParser.ASTERISK - 31)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 246;
						(_localctx as MulDivModExpressionContext)._right = this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 247;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 248;
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
						this.state = 249;
						(_localctx as AddSubExpressionContext)._right = this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 250;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 251;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 252;
						(_localctx as RangeExpressionContext)._right = this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 253;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 254;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.LESS_THAN_EQUAL - 37)) | (1 << (XonParser.MORE_THAN_EQUAL - 37)) | (1 << (XonParser.LESS_THAN - 37)) | (1 << (XonParser.MORE_THAN - 37)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 255;
						(_localctx as RelationalExpressionContext)._right = this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 256;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 257;
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
						this.state = 258;
						(_localctx as EqualityExpressionContext)._right = this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 259;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 260;
						this.match(XonParser.AND);
						this.state = 261;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 262;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 263;
						this.match(XonParser.OR);
						this.state = 264;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 265;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 266;
						this.match(XonParser.PIPE);
						this.state = 270;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
						case 1:
							{
							this.state = 267;
							this.id();
							this.state = 268;
							this.match(XonParser.COLON);
							}
							break;
						}
						this.state = 272;
						(_localctx as PipeExpressionContext)._right = this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 273;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 274;
						this.match(XonParser.DOT);
						this.state = 275;
						this.id();
						}
						break;

					case 11:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 276;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 278;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS_THAN) {
							{
							this.state = 277;
							this.generics();
							}
						}

						this.state = 280;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 281;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 282;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 283;
						this.expression(0);
						this.state = 284;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 290;
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
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_literal);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 296;
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
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 300;
				this.match(XonParser.DEFINITION_ID);
				this.state = 302;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 301;
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
				this.state = 304;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 305;
					this.declaredGenerics();
					}
				}

				this.state = 308;
				this.typeParameters();
				this.state = 309;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 311;
				this.match(XonParser.OPEN_PAREN);
				this.state = 312;
				this.type(0);
				this.state = 313;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 325;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 317;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 318;
						this.match(XonParser.PIPE);
						this.state = 319;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 320;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 321;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 322;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 323;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 324;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 329;
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (XonParser.PLUS - 25)) | (1 << (XonParser.MINUS - 25)) | (1 << (XonParser.SLASH - 25)) | (1 << (XonParser.CARET - 25)) | (1 << (XonParser.RANGE - 25)) | (1 << (XonParser.LESS_THAN - 25)) | (1 << (XonParser.MORE_THAN - 25)) | (1 << (XonParser.EQUAL - 25)) | (1 << (XonParser.BIT_AND - 25)) | (1 << (XonParser.BIT_OR - 25)) | (1 << (XonParser.BIT_XOR - 25)) | (1 << (XonParser.MODULO - 25)) | (1 << (XonParser.ASTERISK - 25)))) !== 0))) {
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
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
		this.enterRule(_localctx, 28, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			_localctx._name = this.id();
			this.state = 335;
			this.type(0);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 336;
				this.match(XonParser.HASH);
				this.state = 337;
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
		this.enterRule(_localctx, 30, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(XonParser.OPEN_PAREN);
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 341;
				this.parameter();
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 342;
					this.match(XonParser.COMMA);
					this.state = 343;
					this.parameter();
					}
					}
					this.state = 348;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 351;
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
		this.enterRule(_localctx, 32, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 353;
				this.id();
				this.state = 354;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 358;
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
		this.enterRule(_localctx, 34, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(XonParser.OPEN_PAREN);
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.NOT) | (1 << XonParser.THIS) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (XonParser.LAMBDA - 47)) | (1 << (XonParser.NULL_LITERAL - 47)) | (1 << (XonParser.FLOAT_LITERAL - 47)) | (1 << (XonParser.INTEGER_LITERAL - 47)) | (1 << (XonParser.BOOLEAN_LITERAL - 47)) | (1 << (XonParser.CHAR_LITERAL - 47)) | (1 << (XonParser.STRING_LITERAL - 47)) | (1 << (XonParser.ID - 47)) | (1 << (XonParser.DEFINITION_ID - 47)))) !== 0)) {
				{
				this.state = 361;
				this.argument();
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 362;
					this.match(XonParser.COMMA);
					this.state = 363;
					this.argument();
					}
					}
					this.state = 368;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 371;
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
		this.enterRule(_localctx, 36, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(XonParser.OPEN_PAREN);
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LESS_THAN - 39)) | (1 << (XonParser.NULL_LITERAL - 39)) | (1 << (XonParser.FLOAT_LITERAL - 39)) | (1 << (XonParser.INTEGER_LITERAL - 39)) | (1 << (XonParser.BOOLEAN_LITERAL - 39)) | (1 << (XonParser.CHAR_LITERAL - 39)) | (1 << (XonParser.STRING_LITERAL - 39)) | (1 << (XonParser.DEFINITION_ID - 39)))) !== 0)) {
				{
				this.state = 374;
				this.type(0);
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 375;
					this.match(XonParser.COMMA);
					this.state = 376;
					this.type(0);
					}
					}
					this.state = 381;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 384;
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
		this.enterRule(_localctx, 38, XonParser.RULE_generics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(XonParser.LESS_THAN);
			this.state = 387;
			this.type(0);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 388;
				this.match(XonParser.COMMA);
				this.state = 389;
				this.type(0);
				}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 395;
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
		this.enterRule(_localctx, 40, XonParser.RULE_declaredGenerics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(XonParser.LESS_THAN);
			this.state = 398;
			this.match(XonParser.DEFINITION_ID);
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 399;
				this.match(XonParser.COMMA);
				this.state = 400;
				this.match(XonParser.DEFINITION_ID);
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 406;
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
		this.enterRule(_localctx, 42, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this.match(XonParser.COLON);
				this.state = 409;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.match(XonParser.COLON);
				this.state = 411;
				this.match(XonParser.NL);
				this.state = 412;
				this.match(XonParser.INDENT);
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 415;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IF:
					case XonParser.FOR:
					case XonParser.NOT:
					case XonParser.LOOP:
					case XonParser.THIS:
					case XonParser.BREAK:
					case XonParser.WHILE:
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
						this.state = 413;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 414;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 417;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.NOT) | (1 << XonParser.LOOP) | (1 << XonParser.THIS) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.MINUS))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (XonParser.LAMBDA - 47)) | (1 << (XonParser.NULL_LITERAL - 47)) | (1 << (XonParser.FLOAT_LITERAL - 47)) | (1 << (XonParser.INTEGER_LITERAL - 47)) | (1 << (XonParser.BOOLEAN_LITERAL - 47)) | (1 << (XonParser.CHAR_LITERAL - 47)) | (1 << (XonParser.STRING_LITERAL - 47)) | (1 << (XonParser.PREPROCESSOR - 47)) | (1 << (XonParser.ID - 47)) | (1 << (XonParser.DEFINITION_ID - 47)) | (1 << (XonParser.NL - 47)))) !== 0));
				this.state = 419;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u01A9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x025\n\x02\f\x02\x0E" +
		"\x028\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03?\n\x03\f\x03" +
		"\x0E\x03B\v\x03\x03\x04\x03\x04\x03\x04\x07\x04G\n\x04\f\x04\x0E\x04J" +
		"\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04P\n\x04\f\x04\x0E\x04S\v" +
		"\x04\x03\x05\x03\x05\x03\x05\x05\x05X\n\x05\x03\x06\x03\x06\x05\x06\\" +
		"\n\x06\x03\x06\x05\x06_\n\x06\x03\x06\x03\x06\x05\x06c\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x06\x06j\n\x06\r\x06\x0E\x06k\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07t\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07|\n\x07\x03\x07\x03\x07\x05\x07\x80" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\x85\n\x07\x05\x07\x87\n\x07\x03" +
		"\b\x03\b\x05\b\x8B\n\b\x03\b\x03\b\x03\b\x05\b\x90\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\x96\n\t\x03\t\x03\t\x03\t\x05\t\x9B\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\xA1\n\n\x03\n\x03\n\x05\n\xA5\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xB5" +
		"\n\n\x03\n\x03\n\x03\n\x05\n\xBA\n\n\x03\n\x03\n\x03\n\x05\n\xBF\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\xC5\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\xCB\n" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07" +
		"\v\xD8\n\v\f\v\x0E\v\xDB\v\v\x05\v\xDD\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\xE8\n\v\f\v\x0E\v\xEB\v\v\x03\v\x03\v" +
		"\x05\v\xEF\n\v\x03\v\x05\v\xF2\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u0111\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0119\n\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0121\n\v\f\v\x0E\v\u0124\v\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u012C\n\f\x03\r\x03\r\x03\r\x05" +
		"\r\u0131\n\r\x03\r\x03\r\x05\r\u0135\n\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x05\r\u013E\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x07\r\u0148\n\r\f\r\x0E\r\u014B\v\r\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0155\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\u015B\n\x11\f\x11\x0E\x11\u015E\v\x11\x05\x11" +
		"\u0160\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0167\n\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u016F\n\x13\f" +
		"\x13\x0E\x13\u0172\v\x13\x05\x13\u0174\n\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u017C\n\x14\f\x14\x0E\x14\u017F\v\x14\x05" +
		"\x14\u0181\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15" +
		"\u0189\n\x15\f\x15\x0E\x15\u018C\v\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x07\x16\u0194\n\x16\f\x16\x0E\x16\u0197\v\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x06\x17" +
		"\u01A2\n\x17\r\x17\x0E\x17\u01A3\x03\x17\x05\x17\u01A7\n\x17\x03\x17\x02" +
		"\x02\x04\x14\x18\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x07\x05\x02!!2244\x04\x02\x1B\x1B" +
		"  \x03\x02\'*\x03\x02,-\n\x02\x1B\x1B \"%%)*,,.02244\x02\u01EE\x026\x03" +
		"\x02\x02\x02\x049\x03\x02\x02\x02\x06C\x03\x02\x02\x02\bT\x03\x02\x02" +
		"\x02\nY\x03\x02\x02\x02\f\x86\x03\x02\x02\x02\x0E\x88\x03\x02\x02\x02" +
		"\x10\x91\x03\x02\x02\x02\x12\xC4\x03\x02\x02\x02\x14\xF1\x03\x02\x02\x02" +
		"\x16\u012B\x03\x02\x02\x02\x18\u013D\x03\x02\x02\x02\x1A\u014C\x03\x02" +
		"\x02\x02\x1C\u014E\x03\x02\x02\x02\x1E\u0150\x03\x02\x02\x02 \u0156\x03" +
		"\x02\x02\x02\"\u0166\x03\x02\x02\x02$\u016A\x03\x02\x02\x02&\u0177\x03" +
		"\x02\x02\x02(\u0184\x03\x02\x02\x02*\u018F\x03\x02\x02\x02,\u01A6\x03" +
		"\x02\x02\x02.5\x05\x04\x03\x02/5\x05\x12\n\x0205\x05\x0E\b\x0215\x05\x10" +
		"\t\x0225\x05\n\x06\x0235\x07@\x02\x024.\x03\x02\x02\x024/\x03\x02\x02" +
		"\x0240\x03\x02\x02\x0241\x03\x02\x02\x0242\x03\x02\x02\x0243\x03\x02\x02" +
		"\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x027\x03\x03\x02" +
		"\x02\x0286\x03\x02\x02\x029:\x05\x06\x04\x02:;\x07\x1F\x02\x02;@\x05\b" +
		"\x05\x02<=\x07\x1E\x02\x02=?\x05\b\x05\x02><\x03\x02\x02\x02?B\x03\x02" +
		"\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02A\x05\x03\x02\x02\x02B@\x03" +
		"\x02\x02\x02CH\x05\x1C\x0F\x02DE\x07 \x02\x02EG\x05\x1C\x0F\x02FD\x03" +
		"\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x03" +
		"\x02\x02\x02JH\x03\x02\x02\x02KL\x07!\x02\x02LQ\x05\x1C\x0F\x02MN\x07" +
		" \x02\x02NP\x05\x1C\x0F\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03" +
		"\x02\x02\x02QR\x03\x02\x02\x02R\x07\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"TW\x07?\x02\x02UV\x07\x06\x02\x02VX\x07?\x02\x02WU\x03\x02\x02\x02WX\x03" +
		"\x02\x02\x02X\t\x03\x02\x02\x02Y[\x07?\x02\x02Z\\\x05*\x16\x02[Z\x03\x02" +
		"\x02\x02[\\\x03\x02\x02\x02\\^\x03\x02\x02\x02]_\x05 \x11\x02^]\x03\x02" +
		"\x02\x02^_\x03\x02\x02\x02_b\x03\x02\x02\x02`a\x07\x05\x02\x02ac\x05\x18" +
		"\r\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x03\x02\x02\x02de\x07\x1F" +
		"\x02\x02ef\x07@\x02\x02fi\x07\x03\x02\x02gj\x05\f\x07\x02hj\x07@\x02\x02" +
		"ig\x03\x02\x02\x02ih\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02" +
		"kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\x04\x02\x02n\v\x03\x02\x02" +
		"\x02op\x05\x1C\x0F\x02ps\x05\x18\r\x02qr\x07+\x02\x02rt\x05\x14\v\x02" +
		"sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x87\x03\x02\x02\x02uv\x07\x0E\x02" +
		"\x02v\x87\x05,\x17\x02wx\x05\x1A\x0E\x02xy\x05 \x11\x02y{\x05\x18\r\x02" +
		"z|\x05,\x17\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|\x87\x03\x02\x02\x02" +
		"}\x7F\x05\x1C\x0F\x02~\x80\x05*\x16\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03" +
		"\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x05 \x11\x02\x82\x84\x05" +
		"\x18\r\x02\x83\x85\x05,\x17\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02" +
		"\x02\x02\x85\x87\x03\x02\x02\x02\x86o\x03\x02\x02\x02\x86u\x03\x02\x02" +
		"\x02\x86w\x03\x02\x02\x02\x86}\x03\x02\x02\x02\x87\r\x03\x02\x02\x02\x88" +
		"\x8A\x05\x1C\x0F\x02\x89\x8B\x05*\x16\x02\x8A\x89\x03\x02\x02\x02\x8A" +
		"\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x05 \x11\x02\x8D" +
		"\x8F\x05\x18\r\x02\x8E\x90\x05,\x17\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90" +
		"\x03\x02\x02\x02\x90\x0F\x03\x02\x02\x02\x91\x92\x05\x18\r\x02\x92\x93" +
		"\x07&\x02\x02\x93\x95\x05\x1C\x0F\x02\x94\x96\x05*\x16\x02\x95\x94\x03" +
		"\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x05" +
		" \x11\x02\x98\x9A\x05\x18\r\x02\x99\x9B\x05,\x17\x02\x9A\x99\x03\x02\x02" +
		"\x02\x9A\x9B\x03\x02\x02\x02\x9B\x11\x03\x02\x02\x02\x9C\xA4\x07\n\x02" +
		"\x02\x9D\xA0\x05\x1C\x0F\x02\x9E\x9F\x07\x1E\x02\x02\x9F\xA1\x05\x1C\x0F" +
		"\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02" +
		"\x02\xA2\xA3\x07\b\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\x9D\x03\x02\x02" +
		"\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x05\x14\v" +
		"\x02\xA7\xA8\x05,\x17\x02\xA8\xC5\x03\x02\x02\x02\xA9\xAA\x07\x12\x02" +
		"\x02\xAA\xAB\x05\x14\v\x02\xAB\xAC\x05,\x17\x02\xAC\xC5\x03\x02\x02\x02" +
		"\xAD\xAE\x07\x0F\x02\x02\xAE\xC5\x05,\x17\x02\xAF\xB0\x07\x07\x02\x02" +
		"\xB0\xB1\x05\x14\v\x02\xB1\xB4\x05,\x17\x02\xB2\xB3\x07\r\x02\x02\xB3" +
		"\xB5\x05,\x17\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5" +
		"\xC5\x03\x02\x02\x02\xB6\xC5\x07\x11\x02\x02\xB7\xB9\x07\x13\x02\x02\xB8" +
		"\xBA\x05\x14\v\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA" +
		"\xC5\x03\x02\x02\x02\xBB\xC5\x05\x14\v\x02\xBC\xBE\x05\x1C\x0F\x02\xBD" +
		"\xBF\x05\x18\r\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF" +
		"\xC0\x03\x02\x02\x02\xC0\xC1\x07+\x02\x02\xC1\xC2\x05\x14\v\x02\xC2\xC5" +
		"\x03\x02\x02\x02\xC3\xC5\x07=\x02\x02\xC4\x9C\x03\x02\x02\x02\xC4\xA9" +
		"\x03\x02\x02\x02\xC4\xAD\x03\x02\x02\x02\xC4\xAF\x03\x02\x02\x02\xC4\xB6" +
		"\x03\x02\x02\x02\xC4\xB7\x03\x02\x02\x02\xC4\xBB\x03\x02\x02\x02\xC4\xBC" +
		"\x03\x02\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\x13\x03\x02\x02\x02\xC6\xC7" +
		"\b\v\x01\x02\xC7\xF2\x07\x10\x02\x02\xC8\xCA\x07?\x02\x02\xC9\xCB\x05" +
		"(\x15\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03" +
		"\x02\x02\x02\xCC\xF2\x05$\x13\x02\xCD\xF2\x05\x1C\x0F\x02\xCE\xF2\x05" +
		"\x16\f\x02\xCF\xD0\x07 \x02\x02\xD0\xF2\x05\x14\v\x0F\xD1\xD2\x07\v\x02" +
		"\x02\xD2\xF2\x05\x14\v\x0E\xD3\xDC\x07\x14\x02\x02\xD4\xD9\x05\x14\v\x02" +
		"\xD5\xD6\x07\x1E\x02\x02\xD6\xD8\x05\x14\v\x02\xD7\xD5\x03\x02\x02\x02" +
		"\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02" +
		"\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xD4\x03\x02\x02\x02" +
		"\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xF2\x07\x15\x02\x02" +
		"\xDF\xE0\x07\x16\x02\x02\xE0\xE1\x05\x14\v\x02\xE1\xE2\x07\x17\x02\x02" +
		"\xE2\xF2\x03\x02\x02\x02\xE3\xEE\x071\x02\x02\xE4\xE9\x05\x1C\x0F\x02" +
		"\xE5\xE6\x07\x1E\x02\x02\xE6\xE8\x05\x1C\x0F\x02\xE7\xE5\x03\x02\x02\x02" +
		"\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02" +
		"\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xED\x07\x1F\x02\x02" +
		"\xED\xEF\x03\x02\x02\x02\xEE\xE4\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02" +
		"\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x05\x14\v\x03\xF1\xC6\x03\x02\x02\x02" +
		"\xF1\xC8\x03\x02\x02\x02\xF1\xCD\x03\x02\x02\x02\xF1\xCE\x03\x02\x02\x02" +
		"\xF1\xCF\x03\x02\x02\x02\xF1\xD1\x03\x02\x02\x02\xF1\xD3\x03\x02\x02\x02" +
		"\xF1\xDF\x03\x02\x02\x02\xF1\xE3\x03\x02\x02\x02\xF2\u0122\x03\x02\x02" +
		"\x02\xF3\xF4\f\x10\x02\x02\xF4\xF5\x07\"\x02\x02\xF5\u0121\x05\x14\v\x11" +
		"\xF6\xF7\f\r\x02\x02\xF7\xF8\t\x02\x02\x02\xF8\u0121\x05\x14\v\x0E\xF9" +
		"\xFA\f\f\x02\x02\xFA\xFB\t\x03\x02\x02\xFB\u0121\x05\x14\v\r\xFC\xFD\f" +
		"\v\x02\x02\xFD\xFE\x07%\x02\x02\xFE\u0121\x05\x14\v\f\xFF\u0100\f\n\x02" +
		"\x02\u0100\u0101\t\x04\x02\x02\u0101\u0121\x05\x14\v\v\u0102\u0103\f\t" +
		"\x02\x02\u0103\u0104\t\x05\x02\x02\u0104\u0121\x05\x14\v\n\u0105\u0106" +
		"\f\b\x02\x02\u0106\u0107\x07\f\x02\x02\u0107\u0121\x05\x14\v\t\u0108\u0109" +
		"\f\x07\x02\x02\u0109\u010A\x07\t\x02\x02\u010A\u0121\x05\x14\v\b\u010B" +
		"\u010C\f\x06\x02\x02\u010C\u0110\x07\x1D\x02\x02\u010D\u010E\x05\x1C\x0F" +
		"\x02\u010E\u010F\x07\x1F\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\u010D" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112\u0121\x05\x14\v\x07\u0113\u0114\f\x13\x02\x02\u0114\u0115\x07&" +
		"\x02\x02\u0115\u0121\x05\x1C\x0F\x02\u0116\u0118\f\x12\x02\x02\u0117\u0119" +
		"\x05(\x15\x02\u0118\u0117\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02" +
		"\u0119\u011A\x03\x02\x02\x02\u011A\u0121\x05$\x13\x02\u011B\u011C\f\x11" +
		"\x02\x02\u011C\u011D\x07\x14\x02\x02\u011D\u011E\x05\x14\v\x02\u011E\u011F" +
		"\x07\x15\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120\xF3\x03\x02\x02\x02" +
		"\u0120\xF6\x03\x02\x02\x02\u0120\xF9\x03\x02\x02\x02\u0120\xFC\x03\x02" +
		"\x02\x02\u0120\xFF\x03\x02\x02\x02\u0120\u0102\x03\x02\x02\x02\u0120\u0105" +
		"\x03\x02\x02\x02\u0120\u0108\x03\x02\x02\x02\u0120\u010B\x03\x02\x02\x02" +
		"\u0120\u0113\x03\x02\x02\x02\u0120\u0116\x03\x02\x02\x02\u0120\u011B\x03" +
		"\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
		"\u0123\x03\x02\x02\x02\u0123\x15\x03\x02\x02\x02\u0124\u0122\x03\x02\x02" +
		"\x02\u0125\u012C\x077\x02\x02\u0126\u012C\x07:\x02\x02\u0127\u012C\x07" +
		"9\x02\x02\u0128\u012C\x078\x02\x02\u0129\u012C\x07;\x02\x02\u012A\u012C" +
		"\x07<\x02\x02\u012B\u0125\x03\x02\x02\x02\u012B\u0126\x03\x02\x02\x02" +
		"\u012B\u0127\x03\x02\x02\x02\u012B\u0128\x03\x02\x02\x02\u012B\u0129\x03" +
		"\x02\x02\x02\u012B\u012A\x03\x02\x02\x02\u012C\x17\x03\x02\x02\x02\u012D" +
		"\u012E\b\r\x01\x02\u012E\u0130\x07?\x02\x02\u012F\u0131\x05(\x15\x02\u0130" +
		"\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u013E\x03\x02" +
		"\x02\x02\u0132\u013E\x05\x16\f\x02\u0133\u0135\x05*\x16\x02\u0134\u0133" +
		"\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02" +
		"\u0136\u0137\x05&\x14\x02\u0137\u0138\x05\x18\r\x04\u0138\u013E\x03\x02" +
		"\x02\x02\u0139\u013A\x07\x16\x02\x02\u013A\u013B\x05\x18\r\x02\u013B\u013C" +
		"\x07\x17\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u012D\x03\x02\x02\x02" +
		"\u013D\u0132\x03\x02\x02\x02\u013D\u0134\x03\x02\x02\x02\u013D\u0139\x03" +
		"\x02\x02\x02\u013E\u0149\x03\x02\x02\x02\u013F\u0140\f\x05\x02\x02\u0140" +
		"\u0141\x07\x1D\x02\x02\u0141\u0148\x05\x18\r\x06\u0142\u0143\f\x07\x02" +
		"\x02\u0143\u0148\x073\x02\x02\u0144\u0145\f\x06\x02\x02\u0145\u0146\x07" +
		"\x14\x02\x02\u0146\u0148\x07\x15\x02\x02\u0147\u013F\x03\x02\x02\x02\u0147" +
		"\u0142\x03\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0148\u014B\x03\x02" +
		"\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\x19\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014D\t\x06\x02" +
		"\x02\u014D\x1B\x03\x02\x02\x02\u014E\u014F\x07>\x02\x02\u014F\x1D\x03" +
		"\x02\x02\x02\u0150\u0151\x05\x1C\x0F\x02\u0151\u0154\x05\x18\r\x02\u0152" +
		"\u0153\x07\x1C\x02\x02\u0153\u0155\x07?\x02\x02\u0154\u0152\x03\x02\x02" +
		"\x02\u0154\u0155\x03\x02\x02\x02\u0155\x1F\x03\x02\x02\x02\u0156\u015F" +
		"\x07\x16\x02\x02\u0157\u015C\x05\x1E\x10\x02\u0158\u0159\x07\x1E\x02\x02" +
		"\u0159\u015B\x05\x1E\x10\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015E\x03" +
		"\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0157\x03\x02" +
		"\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\u0162\x07\x17\x02\x02\u0162!\x03\x02\x02\x02\u0163\u0164\x05\x1C\x0F" +
		"\x02\u0164\u0165\x07+\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0163" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
		"\u0168\u0169\x05\x14\v\x02\u0169#\x03\x02\x02\x02\u016A\u0173\x07\x16" +
		"\x02\x02\u016B\u0170\x05\"\x12\x02\u016C\u016D\x07\x1E\x02\x02\u016D\u016F" +
		"\x05\"\x12\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02" +
		"\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0174\x03" +
		"\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u016B\x03\x02\x02\x02\u0173" +
		"\u0174\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x07\x17" +
		"\x02\x02\u0176%\x03\x02\x02\x02\u0177\u0180\x07\x16\x02\x02\u0178\u017D" +
		"\x05\x18\r\x02\u0179\u017A\x07\x1E\x02\x02\u017A\u017C\x05\x18\r\x02\u017B" +
		"\u0179\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02" +
		"\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F" +
		"\u017D\x03\x02\x02\x02\u0180\u0178\x03\x02\x02\x02\u0180\u0181\x03\x02" +
		"\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183\x07\x17\x02\x02\u0183" +
		"\'\x03\x02\x02\x02\u0184\u0185\x07)\x02\x02\u0185\u018A\x05\x18\r\x02" +
		"\u0186\u0187\x07\x1E\x02\x02\u0187\u0189\x05\x18\r\x02\u0188\u0186\x03" +
		"\x02\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A" +
		"\u018B\x03\x02\x02\x02\u018B\u018D\x03\x02\x02\x02\u018C\u018A\x03\x02" +
		"\x02\x02\u018D\u018E\x07*\x02\x02\u018E)\x03\x02\x02\x02\u018F\u0190\x07" +
		")\x02\x02\u0190\u0195\x07?\x02\x02\u0191\u0192\x07\x1E\x02\x02\u0192\u0194" +
		"\x07?\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02" +
		"\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0198\x03" +
		"\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\x07*\x02\x02\u0199" +
		"+\x03\x02\x02\x02\u019A\u019B\x07\x1F\x02\x02\u019B\u01A7\x05\x12\n\x02" +
		"\u019C\u019D\x07\x1F\x02\x02\u019D\u019E\x07@\x02\x02\u019E\u01A1\x07" +
		"\x03\x02\x02\u019F\u01A2\x05\x12\n\x02\u01A0\u01A2\x07@\x02\x02\u01A1" +
		"\u019F\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02" +
		"\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01A5\x03\x02\x02\x02\u01A5\u01A7\x07\x04\x02\x02\u01A6\u019A\x03\x02" +
		"\x02\x02\u01A6\u019C\x03\x02\x02\x02\u01A7-\x03\x02\x02\x02946@HQW[^b" +
		"iks{\x7F\x84\x86\x8A\x8F\x95\x9A\xA0\xA4\xB4\xB9\xBE\xC4\xCA\xD9\xDC\xE9" +
		"\xEE\xF1\u0110\u0118\u0120\u0122\u012B\u0130\u0134\u013D\u0147\u0149\u0154" +
		"\u015C\u015F\u0166\u0170\u0173\u017D\u0180\u018A\u0195\u01A1\u01A3\u01A6";
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
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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


