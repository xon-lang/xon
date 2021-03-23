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
	public static readonly Is = 3;
	public static readonly As = 4;
	public static readonly If = 5;
	public static readonly Else = 6;
	public static readonly ElseIf = 7;
	public static readonly Loop = 8;
	public static readonly In = 9;
	public static readonly Break = 10;
	public static readonly Return = 11;
	public static readonly Preprocessor = 12;
	public static readonly LineBreak = 13;
	public static readonly OpenBracket = 14;
	public static readonly CloseBracket = 15;
	public static readonly OpenParen = 16;
	public static readonly CloseParen = 17;
	public static readonly OpenBrace = 18;
	public static readonly CloseBrace = 19;
	public static readonly Comma = 20;
	public static readonly Assign = 21;
	public static readonly Question = 22;
	public static readonly Colon = 23;
	public static readonly Dot = 24;
	public static readonly Plus = 25;
	public static readonly Minus = 26;
	public static readonly Exclamation = 27;
	public static readonly Asterisk = 28;
	public static readonly Slash = 29;
	public static readonly Modulo = 30;
	public static readonly Caret = 31;
	public static readonly Hash = 32;
	public static readonly LessThan = 33;
	public static readonly MoreThan = 34;
	public static readonly Ampersand = 35;
	public static readonly Pipe = 36;
	public static readonly Tilde = 37;
	public static readonly Ad = 38;
	public static readonly Underscore = 39;
	public static readonly LambdaStart = 40;
	public static readonly BooleanLiteral = 41;
	public static readonly FloatLiteral = 42;
	public static readonly IntegerLiteral = 43;
	public static readonly CharLiteral = 44;
	public static readonly StringLiteral = 45;
	public static readonly StringFormatStart = 46;
	public static readonly StringFormatMiddle = 47;
	public static readonly StringFormatEnd = 48;
	public static readonly ID = 49;
	public static readonly Spaces = 50;
	public static readonly Comment = 51;
	public static readonly LineJoining = 52;
	public static readonly UnexpectedCharacter = 53;
	public static readonly RULE_program = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryPath = 2;
	public static readonly RULE_libraryMember = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_member = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_literal = 9;
	public static readonly RULE_operator = 10;
	public static readonly RULE_parameter = 11;
	public static readonly RULE_argument = 12;
	public static readonly RULE_body = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "type", "definition", 
		"member", "statement", "expression", "literal", "operator", "parameter", 
		"argument", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'is'", "'as'", "'if'", "'else'", "'elif'", 
		"'loop'", "'in'", "'break'", "'return'", undefined, undefined, "'['", 
		"']'", "'('", "')'", "'{'", "'}'", "','", "'='", "'?'", "':'", "'.'", 
		"'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", "'>'", 
		"'&'", "'|'", "'~'", "'@'", "'_'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Is", "As", "If", "Else", "ElseIf", "Loop", 
		"In", "Break", "Return", "Preprocessor", "LineBreak", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "Comma", "Assign", 
		"Question", "Colon", "Dot", "Plus", "Minus", "Exclamation", "Asterisk", 
		"Slash", "Modulo", "Caret", "Hash", "LessThan", "MoreThan", "Ampersand", 
		"Pipe", "Tilde", "Ad", "Underscore", "LambdaStart", "BooleanLiteral", 
		"FloatLiteral", "IntegerLiteral", "CharLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Spaces", "Comment", "LineJoining", 
		"UnexpectedCharacter",
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
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
				{
				this.state = 32;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 28;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 29;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 30;
					this.definition();
					}
					break;

				case 4:
					{
					this.state = 31;
					this.match(XonParser.LineBreak);
					}
					break;
				}
				}
				this.state = 36;
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
			this.state = 37;
			this.libraryPath();
			this.state = 38;
			this.match(XonParser.Colon);
			this.state = 39;
			this.libraryMember();
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Comma) {
				{
				{
				this.state = 40;
				this.match(XonParser.Comma);
				this.state = 41;
				this.libraryMember();
				}
				}
				this.state = 46;
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
			this.state = 47;
			this.match(XonParser.ID);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 48;
				this.match(XonParser.Minus);
				this.state = 49;
				this.match(XonParser.ID);
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
			this.match(XonParser.Slash);
			this.state = 56;
			this.match(XonParser.ID);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 57;
				this.match(XonParser.Minus);
				this.state = 58;
				this.match(XonParser.ID);
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
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			_localctx._name = this.match(XonParser.ID);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 65;
				this.match(XonParser.As);
				this.state = 66;
				_localctx._alias = this.match(XonParser.ID);
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_type);
		let _la: number;
		try {
			this.state = 89;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				_localctx._name = this.match(XonParser.ID);
				this.state = 81;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 70;
					this.match(XonParser.LessThan);
					this.state = 71;
					this.type();
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 72;
						this.match(XonParser.Comma);
						this.state = 73;
						this.type();
						}
						}
						this.state = 78;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 79;
					this.match(XonParser.MoreThan);
					}
					break;
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Hash) {
					{
					this.state = 83;
					this.match(XonParser.Hash);
					this.state = 84;
					_localctx._meta = this.match(XonParser.ID);
					}
				}

				}
				break;
			case XonParser.Hash:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.match(XonParser.Hash);
				this.state = 88;
				_localctx._meta = this.match(XonParser.ID);
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
		this.enterRule(_localctx, 10, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(XonParser.ID);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Is) {
				{
				this.state = 92;
				this.match(XonParser.Is);
				this.state = 93;
				this.type();
				}
			}

			this.state = 96;
			this.match(XonParser.Colon);
			this.state = 97;
			this.match(XonParser.LineBreak);
			this.state = 98;
			this.match(XonParser.INDENT);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 101;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Assign:
				case XonParser.Colon:
				case XonParser.Dot:
				case XonParser.Plus:
				case XonParser.Minus:
				case XonParser.Exclamation:
				case XonParser.Asterisk:
				case XonParser.Slash:
				case XonParser.Modulo:
				case XonParser.Caret:
				case XonParser.LessThan:
				case XonParser.MoreThan:
				case XonParser.Ampersand:
				case XonParser.Pipe:
				case XonParser.Tilde:
				case XonParser.Ad:
				case XonParser.ID:
					{
					this.state = 99;
					this.member();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 100;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.LineBreak) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk) | (1 << XonParser.Slash) | (1 << XonParser.Modulo) | (1 << XonParser.Caret))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LessThan - 33)) | (1 << (XonParser.MoreThan - 33)) | (1 << (XonParser.Ampersand - 33)) | (1 << (XonParser.Pipe - 33)) | (1 << (XonParser.Tilde - 33)) | (1 << (XonParser.Ad - 33)) | (1 << (XonParser.ID - 33)))) !== 0));
			this.state = 105;
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
		this.enterRule(_localctx, 12, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.match(XonParser.ID);
				this.state = 108;
				this.type();
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.match(XonParser.ID);
				this.state = 110;
				this.match(XonParser.OpenParen);
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 111;
					this.parameter();
					this.state = 116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 112;
						this.match(XonParser.Comma);
						this.state = 113;
						this.parameter();
						}
						}
						this.state = 118;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 121;
				this.match(XonParser.CloseParen);
				this.state = 123;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 122;
					this.type();
					}
					break;
				}
				this.state = 126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 125;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.match(XonParser.Ad);
				this.state = 129;
				this.match(XonParser.OpenParen);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 130;
					this.parameter();
					this.state = 135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 131;
						this.match(XonParser.Comma);
						this.state = 132;
						this.parameter();
						}
						}
						this.state = 137;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 140;
				this.match(XonParser.CloseParen);
				this.state = 142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 141;
					this.body();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 144;
					this.operator();
					}
					}
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.Assign - 21)) | (1 << (XonParser.Colon - 21)) | (1 << (XonParser.Dot - 21)) | (1 << (XonParser.Plus - 21)) | (1 << (XonParser.Minus - 21)) | (1 << (XonParser.Exclamation - 21)) | (1 << (XonParser.Asterisk - 21)) | (1 << (XonParser.Slash - 21)) | (1 << (XonParser.Modulo - 21)) | (1 << (XonParser.Caret - 21)) | (1 << (XonParser.LessThan - 21)) | (1 << (XonParser.MoreThan - 21)) | (1 << (XonParser.Ampersand - 21)) | (1 << (XonParser.Pipe - 21)) | (1 << (XonParser.Tilde - 21)))) !== 0));
				this.state = 149;
				this.match(XonParser.OpenParen);
				this.state = 150;
				this.parameter();
				this.state = 151;
				this.match(XonParser.Comma);
				this.state = 152;
				this.parameter();
				this.state = 153;
				this.match(XonParser.CloseParen);
				this.state = 154;
				this.type();
				this.state = 156;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 155;
					this.body();
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this.match(XonParser.If);
				this.state = 161;
				this.expression(0);
				this.state = 162;
				this.body();
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ElseIf) {
					{
					{
					this.state = 163;
					this.match(XonParser.ElseIf);
					this.state = 164;
					this.expression(0);
					this.state = 165;
					this.body();
					}
					}
					this.state = 171;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 172;
					this.match(XonParser.Else);
					this.state = 173;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.match(XonParser.Loop);
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
					{
					this.state = 189;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						this.state = 177;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 182;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
						case 1:
							{
							this.state = 178;
							this.match(XonParser.Comma);
							this.state = 180;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 179;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 186;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 184;
							this.match(XonParser.Comma);
							this.state = 185;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 188;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 191;
					this.expression(0);
					}
				}

				this.state = 194;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				this.match(XonParser.Break);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 196;
				this.match(XonParser.Return);
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 197;
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
				this.state = 200;
				this.match(XonParser.ID);
				this.state = 201;
				this.match(XonParser.Assign);
				this.state = 202;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 203;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 204;
				this.match(XonParser.Preprocessor);
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
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 208;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.Ad:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 209;
				this.match(XonParser.Ad);
				this.state = 210;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.BooleanLiteral:
			case XonParser.FloatLiteral:
			case XonParser.IntegerLiteral:
			case XonParser.CharLiteral:
			case XonParser.StringLiteral:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 211;
				this.literal();
				}
				break;
			case XonParser.StringFormatStart:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 212;
				this.match(XonParser.StringFormatStart);
				this.state = 218;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 213;
						this.expression(0);
						this.state = 214;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 220;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				this.state = 221;
				this.expression(0);
				this.state = 222;
				this.match(XonParser.StringFormatEnd);
				}
				break;
			case XonParser.OpenBracket:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 224;
				this.match(XonParser.OpenBracket);
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
					{
					this.state = 225;
					this.expression(0);
					this.state = 230;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 226;
						this.match(XonParser.Comma);
						this.state = 227;
						this.expression(0);
						}
						}
						this.state = 232;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 235;
				this.match(XonParser.CloseBracket);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 236;
				this.match(XonParser.OpenBrace);
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 237;
					this.match(XonParser.ID);
					this.state = 238;
					this.match(XonParser.Colon);
					this.state = 239;
					this.expression(0);
					this.state = 246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 240;
						this.match(XonParser.Comma);
						this.state = 241;
						this.match(XonParser.ID);
						this.state = 242;
						this.match(XonParser.Colon);
						this.state = 243;
						this.expression(0);
						}
						}
						this.state = 248;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 251;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 252;
				this.match(XonParser.OpenParen);
				this.state = 253;
				this.expression(0);
				this.state = 254;
				this.match(XonParser.CloseParen);
				}
				break;
			case XonParser.LambdaStart:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 256;
				this.match(XonParser.LambdaStart);
				this.state = 278;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 257;
					this.match(XonParser.ID);
					this.state = 258;
					this.type();
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 259;
						this.match(XonParser.Comma);
						this.state = 260;
						this.match(XonParser.ID);
						this.state = 261;
						this.type();
						}
						}
						this.state = 266;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 267;
					this.match(XonParser.Colon);
					}
					break;

				case 2:
					{
					this.state = 269;
					this.match(XonParser.ID);
					this.state = 274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 270;
						this.match(XonParser.Comma);
						this.state = 271;
						this.match(XonParser.ID);
						}
						}
						this.state = 276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 277;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 280;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 309;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 285;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 284;
							this.operator();
							}
							}
							this.state = 287;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.Assign - 21)) | (1 << (XonParser.Colon - 21)) | (1 << (XonParser.Dot - 21)) | (1 << (XonParser.Plus - 21)) | (1 << (XonParser.Minus - 21)) | (1 << (XonParser.Exclamation - 21)) | (1 << (XonParser.Asterisk - 21)) | (1 << (XonParser.Slash - 21)) | (1 << (XonParser.Modulo - 21)) | (1 << (XonParser.Caret - 21)) | (1 << (XonParser.LessThan - 21)) | (1 << (XonParser.MoreThan - 21)) | (1 << (XonParser.Ampersand - 21)) | (1 << (XonParser.Pipe - 21)) | (1 << (XonParser.Tilde - 21)))) !== 0));
						this.state = 289;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 291;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 292;
						this.match(XonParser.OpenParen);
						this.state = 301;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
							{
							this.state = 293;
							this.argument();
							this.state = 298;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 294;
								this.match(XonParser.Comma);
								this.state = 295;
								this.argument();
								}
								}
								this.state = 300;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 303;
						this.match(XonParser.CloseParen);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 304;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 305;
						this.match(XonParser.OpenBracket);
						this.state = 306;
						this.expression(0);
						this.state = 307;
						this.match(XonParser.CloseBracket);
						}
						break;
					}
					}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(_localctx, 18, XonParser.RULE_literal);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 314;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.IntegerLiteral:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 315;
				this.match(XonParser.IntegerLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 316;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.CharLiteral:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 317;
				this.match(XonParser.CharLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 318;
				this.match(XonParser.StringLiteral);
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
		this.enterRule(_localctx, 20, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			_la = this._input.LA(1);
			if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.Assign - 21)) | (1 << (XonParser.Colon - 21)) | (1 << (XonParser.Dot - 21)) | (1 << (XonParser.Plus - 21)) | (1 << (XonParser.Minus - 21)) | (1 << (XonParser.Exclamation - 21)) | (1 << (XonParser.Asterisk - 21)) | (1 << (XonParser.Slash - 21)) | (1 << (XonParser.Modulo - 21)) | (1 << (XonParser.Caret - 21)) | (1 << (XonParser.LessThan - 21)) | (1 << (XonParser.MoreThan - 21)) | (1 << (XonParser.Ampersand - 21)) | (1 << (XonParser.Pipe - 21)) | (1 << (XonParser.Tilde - 21)))) !== 0))) {
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
		this.enterRule(_localctx, 22, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(XonParser.ID);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Hash || _la === XonParser.ID) {
				{
				this.state = 324;
				this.type();
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 327;
				this.match(XonParser.ID);
				this.state = 328;
				this.match(XonParser.Assign);
				}
				break;
			}
			this.state = 331;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(XonParser.Colon);
			this.state = 334;
			this.match(XonParser.LineBreak);
			this.state = 335;
			this.match(XonParser.INDENT);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 338;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.If:
				case XonParser.Loop:
				case XonParser.Break:
				case XonParser.Return:
				case XonParser.Preprocessor:
				case XonParser.OpenBracket:
				case XonParser.OpenParen:
				case XonParser.OpenBrace:
				case XonParser.Ad:
				case XonParser.LambdaStart:
				case XonParser.BooleanLiteral:
				case XonParser.FloatLiteral:
				case XonParser.IntegerLiteral:
				case XonParser.CharLiteral:
				case XonParser.StringLiteral:
				case XonParser.StringFormatStart:
				case XonParser.ID:
					{
					this.state = 336;
					this.statement();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 337;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0));
			this.state = 342;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 8:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\u015B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02#\n\x02" +
		"\f\x02\x0E\x02&\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"-\n\x03\f\x03\x0E\x030\v\x03\x03\x04\x03\x04\x03\x04\x07\x045\n\x04\f" +
		"\x04\x0E\x048\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04>\n\x04\f\x04" +
		"\x0E\x04A\v\x04\x03\x05\x03\x05\x03\x05\x05\x05F\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06M\n\x06\f\x06\x0E\x06P\v\x06\x03\x06\x03" +
		"\x06\x05\x06T\n\x06\x03\x06\x03\x06\x05\x06X\n\x06\x03\x06\x03\x06\x05" +
		"\x06\\\n\x06\x03\x07\x03\x07\x03\x07\x05\x07a\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x06\x07h\n\x07\r\x07\x0E\x07i\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bu\n\b\f\b\x0E\bx\v\b\x05\b" +
		"z\n\b\x03\b\x03\b\x05\b~\n\b\x03\b\x05\b\x81\n\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x07\b\x88\n\b\f\b\x0E\b\x8B\v\b\x05\b\x8D\n\b\x03\b\x03\b\x05" +
		"\b\x91\n\b\x03\b\x06\b\x94\n\b\r\b\x0E\b\x95\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\x9F\n\b\x05\b\xA1\n\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\xAA\n\t\f\t\x0E\t\xAD\v\t\x03\t\x03\t\x05\t\xB1\n" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\xB7\n\t\x05\t\xB9\n\t\x03\t\x03\t\x05" +
		"\t\xBD\n\t\x03\t\x05\t\xC0\n\t\x03\t\x05\t\xC3\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\xC9\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD0\n\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xDB\n\n\f\n\x0E\n\xDE" +
		"\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xE7\n\n\f\n\x0E\n" +
		"\xEA\v\n\x05\n\xEC\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x07\n\xF7\n\n\f\n\x0E\n\xFA\v\n\x05\n\xFC\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0109\n\n\f\n\x0E" +
		"\n\u010C\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0113\n\n\f\n\x0E\n\u0116" +
		"\v\n\x03\n\x05\n\u0119\n\n\x03\n\x05\n\u011C\n\n\x03\n\x03\n\x06\n\u0120" +
		"\n\n\r\n\x0E\n\u0121\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u012B" +
		"\n\n\f\n\x0E\n\u012E\v\n\x05\n\u0130\n\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x07\n\u0138\n\n\f\n\x0E\n\u013B\v\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\u0142\n\v\x03\f\x03\f\x03\r\x03\r\x05\r\u0148\n\r\x03\x0E\x03" +
		"\x0E\x05\x0E\u014C\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x06\x0F\u0155\n\x0F\r\x0F\x0E\x0F\u0156\x03\x0F\x03\x0F\x03\x0F" +
		"\x02\x02\x03\x12\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x05\x02" +
		"\x17\x17\x19!#\'\x02\u0193\x02$\x03\x02\x02\x02\x04\'\x03\x02\x02\x02" +
		"\x061\x03\x02\x02\x02\bB\x03\x02\x02\x02\n[\x03\x02\x02\x02\f]\x03\x02" +
		"\x02\x02\x0E\xA0\x03\x02\x02\x02\x10\xCF\x03\x02\x02\x02\x12\u011B\x03" +
		"\x02\x02\x02\x14\u0141\x03\x02\x02\x02\x16\u0143\x03\x02\x02\x02\x18\u0145" +
		"\x03\x02\x02\x02\x1A\u014B\x03\x02\x02\x02\x1C\u014F\x03\x02\x02\x02\x1E" +
		"#\x05\x04\x03\x02\x1F#\x05\x10\t\x02 #\x05\f\x07\x02!#\x07\x0F\x02\x02" +
		"\"\x1E\x03\x02\x02\x02\"\x1F\x03\x02\x02\x02\" \x03\x02\x02\x02\"!\x03" +
		"\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x03" +
		"\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x05\x06\x04\x02()\x07\x19\x02\x02" +
		").\x05\b\x05\x02*+\x07\x16\x02\x02+-\x05\b\x05\x02,*\x03\x02\x02\x02-" +
		"0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\x05\x03\x02\x02" +
		"\x020.\x03\x02\x02\x0216\x073\x02\x0223\x07\x1C\x02\x0235\x073\x02\x02" +
		"42\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x02" +
		"79\x03\x02\x02\x0286\x03\x02\x02\x029:\x07\x1F\x02\x02:?\x073\x02\x02" +
		";<\x07\x1C\x02\x02<>\x073\x02\x02=;\x03\x02\x02\x02>A\x03\x02\x02\x02" +
		"?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x07\x03\x02\x02\x02A?\x03\x02\x02" +
		"\x02BE\x073\x02\x02CD\x07\x06\x02\x02DF\x073\x02\x02EC\x03\x02\x02\x02" +
		"EF\x03\x02\x02\x02F\t\x03\x02\x02\x02GS\x073\x02\x02HI\x07#\x02\x02IN" +
		"\x05\n\x06\x02JK\x07\x16\x02\x02KM\x05\n\x06\x02LJ\x03\x02\x02\x02MP\x03" +
		"\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PN\x03" +
		"\x02\x02\x02QR\x07$\x02\x02RT\x03\x02\x02\x02SH\x03\x02\x02\x02ST\x03" +
		"\x02\x02\x02TW\x03\x02\x02\x02UV\x07\"\x02\x02VX\x073\x02\x02WU\x03\x02" +
		"\x02\x02WX\x03\x02\x02\x02X\\\x03\x02\x02\x02YZ\x07\"\x02\x02Z\\\x073" +
		"\x02\x02[G\x03\x02\x02\x02[Y\x03\x02\x02\x02\\\v\x03\x02\x02\x02]`\x07" +
		"3\x02\x02^_\x07\x05\x02\x02_a\x05\n\x06\x02`^\x03\x02\x02\x02`a\x03\x02" +
		"\x02\x02ab\x03\x02\x02\x02bc\x07\x19\x02\x02cd\x07\x0F\x02\x02dg\x07\x03" +
		"\x02\x02eh\x05\x0E\b\x02fh\x07\x0F\x02\x02ge\x03\x02\x02\x02gf\x03\x02" +
		"\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02" +
		"\x02\x02kl\x07\x04\x02\x02l\r\x03\x02\x02\x02mn\x073\x02\x02n\xA1\x05" +
		"\n\x06\x02op\x073\x02\x02py\x07\x12\x02\x02qv\x05\x18\r\x02rs\x07\x16" +
		"\x02\x02su\x05\x18\r\x02tr\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02" +
		"\x02\x02vw\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02yq\x03\x02" +
		"\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x07\x13\x02\x02|~\x05\n" +
		"\x06\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02~\x80\x03\x02\x02\x02\x7F" +
		"\x81\x05\x1C\x0F\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81" +
		"\xA1\x03\x02\x02\x02\x82\x83\x07(\x02\x02\x83\x8C\x07\x12\x02\x02\x84" +
		"\x89\x05\x18\r\x02\x85\x86\x07\x16\x02\x02\x86\x88\x05\x18\r\x02\x87\x85" +
		"\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x84" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90" +
		"\x07\x13\x02\x02\x8F\x91\x05\x1C\x0F\x02\x90\x8F\x03\x02\x02\x02\x90\x91" +
		"\x03\x02\x02\x02\x91\xA1\x03\x02\x02\x02\x92\x94\x05\x16\f\x02\x93\x92" +
		"\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96" +
		"\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07\x12\x02\x02\x98\x99" +
		"\x05\x18\r\x02\x99\x9A\x07\x16\x02\x02\x9A\x9B\x05\x18\r\x02\x9B\x9C\x07" +
		"\x13\x02\x02\x9C\x9E\x05\n\x06\x02\x9D\x9F\x05\x1C\x0F\x02\x9E\x9D\x03" +
		"\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0m\x03" +
		"\x02\x02\x02\xA0o\x03\x02\x02\x02\xA0\x82\x03\x02\x02\x02\xA0\x93\x03" +
		"\x02\x02\x02\xA1\x0F\x03\x02\x02\x02\xA2\xA3\x07\x07\x02\x02\xA3\xA4\x05" +
		"\x12\n\x02\xA4\xAB\x05\x1C\x0F\x02\xA5\xA6\x07\t\x02\x02\xA6\xA7\x05\x12" +
		"\n\x02\xA7\xA8\x05\x1C\x0F\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA5\x03\x02" +
		"\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02" +
		"\x02\x02\xAC\xB0\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x07\b" +
		"\x02\x02\xAF\xB1\x05\x1C\x0F\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02" +
		"\x02\x02\xB1\xD0\x03\x02\x02\x02\xB2\xC2\x07\n\x02\x02\xB3\xB8\x073\x02" +
		"\x02\xB4\xB6\x07\x16\x02\x02\xB5\xB7\x073\x02\x02\xB6\xB5\x03\x02\x02" +
		"\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB4\x03\x02\x02" +
		"\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xBB\x07\x16\x02" +
		"\x02\xBB\xBD\x073\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02" +
		"\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x07\v\x02\x02\xBF\xB3\x03\x02\x02" +
		"\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x05\x12\n" +
		"\x02\xC2\xBF\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02" +
		"\x02\xC4\xD0\x05\x1C\x0F\x02\xC5\xD0\x07\f\x02\x02\xC6\xC8\x07\r\x02\x02" +
		"\xC7\xC9\x05\x12\n\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02" +
		"\xC9\xD0\x03\x02\x02\x02\xCA\xCB\x073\x02\x02\xCB\xCC\x07\x17\x02\x02" +
		"\xCC\xD0\x05\x12\n\x02\xCD\xD0\x05\x12\n\x02\xCE\xD0\x07\x0E\x02\x02\xCF" +
		"\xA2\x03\x02\x02\x02\xCF\xB2\x03\x02\x02\x02\xCF\xC5\x03\x02\x02\x02\xCF" +
		"\xC6\x03\x02\x02\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF" +
		"\xCE\x03\x02\x02\x02\xD0\x11\x03\x02\x02\x02\xD1\xD2\b\n\x01\x02\xD2\u011C" +
		"\x073\x02\x02\xD3\xD4\x07(\x02\x02\xD4\u011C\x073\x02\x02\xD5\u011C\x05" +
		"\x14\v\x02\xD6\xDC\x070\x02\x02\xD7\xD8\x05\x12\n\x02\xD8\xD9\x071\x02" +
		"\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD7\x03\x02\x02\x02\xDB\xDE\x03\x02\x02" +
		"\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02" +
		"\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x05\x12\n\x02\xE0\xE1\x072\x02\x02" +
		"\xE1\u011C\x03\x02\x02\x02\xE2\xEB\x07\x10\x02\x02\xE3\xE8\x05\x12\n\x02" +
		"\xE4\xE5\x07\x16\x02\x02\xE5\xE7\x05\x12\n\x02\xE6\xE4\x03\x02\x02\x02" +
		"\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02" +
		"\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xE3\x03\x02\x02\x02" +
		"\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\u011C\x07\x11\x02" +
		"\x02\xEE\xFB\x07\x14\x02\x02\xEF\xF0\x073\x02\x02\xF0\xF1\x07\x19\x02" +
		"\x02\xF1\xF8\x05\x12\n\x02\xF2\xF3\x07\x16\x02\x02\xF3\xF4\x073\x02\x02" +
		"\xF4\xF5\x07\x19\x02\x02\xF5\xF7\x05\x12\n\x02\xF6\xF2\x03\x02\x02\x02" +
		"\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02" +
		"\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xEF\x03\x02\x02\x02" +
		"\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u011C\x07\x15\x02" +
		"\x02\xFE\xFF\x07\x12\x02\x02\xFF\u0100\x05\x12\n\x02\u0100\u0101\x07\x13" +
		"\x02\x02\u0101\u011C\x03\x02\x02\x02\u0102\u0118\x07*\x02\x02\u0103\u0104" +
		"\x073\x02\x02\u0104\u010A\x05\n\x06\x02\u0105\u0106\x07\x16\x02\x02\u0106" +
		"\u0107\x073\x02\x02\u0107\u0109\x05\n\x06\x02\u0108\u0105\x03\x02\x02" +
		"\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B" +
		"\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02" +
		"\u010D\u010E\x07\x19\x02\x02\u010E\u0119\x03\x02\x02\x02\u010F\u0114\x07" +
		"3\x02\x02\u0110\u0111\x07\x16\x02\x02\u0111\u0113\x073\x02\x02\u0112\u0110" +
		"\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02" +
		"\u0114\u0115\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0114\x03" +
		"\x02\x02\x02\u0117\u0119\x07\x19\x02\x02\u0118\u0103\x03\x02\x02\x02\u0118" +
		"\u010F\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02" +
		"\x02\x02\u011A\u011C\x05\x12\n\x03\u011B\xD1\x03\x02\x02\x02\u011B\xD3" +
		"\x03\x02\x02\x02\u011B\xD5\x03\x02\x02\x02\u011B\xD6\x03\x02\x02\x02\u011B" +
		"\xE2\x03\x02\x02\x02\u011B\xEE\x03\x02\x02\x02\u011B\xFE\x03\x02\x02\x02" +
		"\u011B\u0102\x03\x02\x02\x02\u011C\u0139\x03\x02\x02\x02\u011D\u011F\f" +
		"\b\x02\x02\u011E\u0120\x05\x16\f\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
		"\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x05\x12\n\t\u0124\u0138" +
		"\x03\x02\x02\x02\u0125\u0126\f\n\x02\x02\u0126\u012F\x07\x12\x02\x02\u0127" +
		"\u012C\x05\x1A\x0E\x02\u0128\u0129\x07\x16\x02\x02\u0129\u012B\x05\x1A" +
		"\x0E\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0130\x03\x02" +
		"\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0127\x03\x02\x02\x02\u012F" +
		"\u0130\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0138\x07\x13" +
		"\x02\x02\u0132\u0133\f\t\x02\x02\u0133\u0134\x07\x10\x02\x02\u0134\u0135" +
		"\x05\x12\n\x02\u0135\u0136\x07\x11\x02\x02\u0136\u0138\x03\x02\x02\x02" +
		"\u0137\u011D\x03\x02\x02\x02\u0137\u0125\x03\x02\x02\x02\u0137\u0132\x03" +
		"\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\x13\x03\x02\x02\x02\u013B\u0139\x03\x02\x02" +
		"\x02\u013C\u0142\x07+\x02\x02\u013D\u0142\x07-\x02\x02\u013E\u0142\x07" +
		",\x02\x02\u013F\u0142\x07.\x02\x02\u0140\u0142\x07/\x02\x02\u0141\u013C" +
		"\x03\x02\x02\x02\u0141\u013D\x03\x02\x02\x02\u0141\u013E\x03\x02\x02\x02" +
		"\u0141\u013F\x03\x02\x02\x02\u0141\u0140\x03\x02\x02\x02\u0142\x15\x03" +
		"\x02\x02\x02\u0143\u0144\t\x02\x02\x02\u0144\x17\x03\x02\x02\x02\u0145" +
		"\u0147\x073\x02\x02\u0146\u0148\x05\n\x06\x02\u0147\u0146\x03\x02\x02" +
		"\x02\u0147\u0148\x03\x02\x02\x02\u0148\x19\x03\x02\x02\x02\u0149\u014A" +
		"\x073\x02\x02\u014A\u014C\x07\x17\x02\x02\u014B\u0149\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\x05" +
		"\x12\n\x02\u014E\x1B\x03\x02\x02\x02\u014F\u0150\x07\x19\x02\x02\u0150" +
		"\u0151\x07\x0F\x02\x02\u0151\u0154\x07\x03\x02\x02\u0152\u0155\x05\x10" +
		"\t\x02\u0153\u0155\x07\x0F\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0153" +
		"\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02" +
		"\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x07" +
		"\x04\x02\x02\u0159\x1D\x03\x02\x02\x025\"$.6?ENSW[`givy}\x80\x89\x8C\x90" +
		"\x95\x9E\xA0\xAB\xB0\xB6\xB8\xBC\xBF\xC2\xC8\xCF\xDC\xE8\xEB\xF8\xFB\u010A" +
		"\u0114\u0118\u011B\u0121\u012C\u012F\u0137\u0139\u0141\u0147\u014B\u0154" +
		"\u0156";
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
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
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
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public libraryMember(): LibraryMemberContext[];
	public libraryMember(i: number): LibraryMemberContext;
	public libraryMember(i?: number): LibraryMemberContext | LibraryMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryMemberContext);
		} else {
			return this.getRuleContext(i, LibraryMemberContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_library; }
}


export class LibraryPathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Slash(): TerminalNode { return this.getToken(XonParser.Slash, 0); }
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Minus);
		} else {
			return this.getToken(XonParser.Minus, i);
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
}


export class TypeContext extends ParserRuleContext {
	public _name!: Token;
	public _meta!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	public Hash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Hash, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_type; }
}


export class DefinitionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public Is(): TerminalNode | undefined { return this.tryGetToken(XonParser.Is, 0); }
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InitMemberContext extends MemberContext {
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorMemberContext extends MemberContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public Comma(): TerminalNode { return this.getToken(XonParser.Comma, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
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
export class IfStatementContext extends StatementContext {
	public If(): TerminalNode { return this.getToken(XonParser.If, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
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
	public ElseIf(): TerminalNode[];
	public ElseIf(i: number): TerminalNode;
	public ElseIf(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ElseIf);
		} else {
			return this.getToken(XonParser.ElseIf, i);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopStatementContext extends StatementContext {
	public _value!: Token;
	public _key!: Token;
	public _index!: Token;
	public Loop(): TerminalNode { return this.getToken(XonParser.Loop, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public In(): TerminalNode | undefined { return this.tryGetToken(XonParser.In, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public Break(): TerminalNode { return this.getToken(XonParser.Break, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(XonParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Assign(): TerminalNode { return this.getToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceMemberExpressionContext extends ExpressionContext {
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
export class FunctionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
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
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
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
export class StringFormatExpressionContext extends ExpressionContext {
	public StringFormatStart(): TerminalNode { return this.getToken(XonParser.StringFormatStart, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public StringFormatEnd(): TerminalNode { return this.getToken(XonParser.StringFormatEnd, 0); }
	public StringFormatMiddle(): TerminalNode[];
	public StringFormatMiddle(i: number): TerminalNode;
	public StringFormatMiddle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringFormatMiddle);
		} else {
			return this.getToken(XonParser.StringFormatMiddle, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExpressionContext {
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
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
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public LambdaStart(): TerminalNode { return this.getToken(XonParser.LambdaStart, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
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
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
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
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends LiteralContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(XonParser.IntegerLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FloatLiteral(): TerminalNode { return this.getToken(XonParser.FloatLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CharLiteralContext extends LiteralContext {
	public CharLiteral(): TerminalNode { return this.getToken(XonParser.CharLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class OperatorContext extends ParserRuleContext {
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	public Asterisk(): TerminalNode | undefined { return this.tryGetToken(XonParser.Asterisk, 0); }
	public Slash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Slash, 0); }
	public Modulo(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulo, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	public Exclamation(): TerminalNode | undefined { return this.tryGetToken(XonParser.Exclamation, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(XonParser.Caret, 0); }
	public Ampersand(): TerminalNode | undefined { return this.tryGetToken(XonParser.Ampersand, 0); }
	public Pipe(): TerminalNode | undefined { return this.tryGetToken(XonParser.Pipe, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(XonParser.Dot, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(XonParser.Tilde, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class ParameterContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class BodyContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


