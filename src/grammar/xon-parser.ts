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
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_literal = 8;
	public static readonly RULE_operator = 9;
	public static readonly RULE_parameter = 10;
	public static readonly RULE_argument = 11;
	public static readonly RULE_body = 12;
	public static readonly RULE_type = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "definition", "member", 
		"statement", "expression", "literal", "operator", "parameter", "argument", 
		"body", "type",
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(XonParser.ID);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Is) {
				{
				this.state = 70;
				this.match(XonParser.Is);
				this.state = 71;
				this.type();
				}
			}

			this.state = 74;
			this.match(XonParser.Colon);
			this.state = 75;
			this.match(XonParser.LineBreak);
			this.state = 76;
			this.match(XonParser.INDENT);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 79;
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
					this.state = 77;
					this.member();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 78;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.LineBreak) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk) | (1 << XonParser.Slash) | (1 << XonParser.Modulo) | (1 << XonParser.Caret))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LessThan - 33)) | (1 << (XonParser.MoreThan - 33)) | (1 << (XonParser.Ampersand - 33)) | (1 << (XonParser.Pipe - 33)) | (1 << (XonParser.Tilde - 33)) | (1 << (XonParser.Ad - 33)) | (1 << (XonParser.ID - 33)))) !== 0));
			this.state = 83;
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
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.match(XonParser.ID);
				this.state = 86;
				this.type();
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.match(XonParser.ID);
				this.state = 88;
				this.match(XonParser.OpenParen);
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 89;
					this.parameter();
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 90;
						this.match(XonParser.Comma);
						this.state = 91;
						this.parameter();
						}
						}
						this.state = 96;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 99;
				this.match(XonParser.CloseParen);
				this.state = 101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 100;
					this.type();
					}
					break;
				}
				this.state = 104;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 103;
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
				this.state = 106;
				this.match(XonParser.Ad);
				this.state = 107;
				this.match(XonParser.OpenParen);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 108;
					this.parameter();
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 109;
						this.match(XonParser.Comma);
						this.state = 110;
						this.parameter();
						}
						}
						this.state = 115;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 118;
				this.match(XonParser.CloseParen);
				this.state = 120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 119;
					this.body();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new IndexMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 122;
				this.match(XonParser.Ad);
				this.state = 123;
				this.match(XonParser.OpenBracket);
				this.state = 124;
				this.parameter();
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 125;
					this.match(XonParser.Comma);
					this.state = 126;
					this.parameter();
					}
					}
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 132;
				this.match(XonParser.CloseBracket);
				this.state = 133;
				this.type();
				this.state = 135;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 134;
					this.body();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 137;
				this.operator();
				this.state = 138;
				this.match(XonParser.OpenParen);
				this.state = 139;
				this.parameter();
				this.state = 140;
				this.match(XonParser.Comma);
				this.state = 141;
				this.parameter();
				this.state = 142;
				this.match(XonParser.CloseParen);
				this.state = 143;
				this.type();
				this.state = 145;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 144;
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
		this.enterRule(_localctx, 12, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.match(XonParser.If);
				this.state = 150;
				this.expression(0);
				this.state = 151;
				this.body();
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ElseIf) {
					{
					{
					this.state = 152;
					this.match(XonParser.ElseIf);
					this.state = 153;
					this.expression(0);
					this.state = 154;
					this.body();
					}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 161;
					this.match(XonParser.Else);
					this.state = 162;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.match(XonParser.Loop);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
					{
					this.state = 178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						this.state = 166;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 171;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 167;
							this.match(XonParser.Comma);
							this.state = 169;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 168;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 175;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 173;
							this.match(XonParser.Comma);
							this.state = 174;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 177;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 180;
					this.expression(0);
					}
				}

				this.state = 183;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 184;
				this.match(XonParser.Break);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 185;
				this.match(XonParser.Return);
				this.state = 187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 186;
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
				this.state = 189;
				this.match(XonParser.ID);
				this.state = 190;
				this.match(XonParser.Assign);
				this.state = 191;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 192;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 193;
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
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 197;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.Ad:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 198;
				this.match(XonParser.Ad);
				this.state = 199;
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
				this.state = 200;
				this.literal();
				}
				break;
			case XonParser.StringFormatStart:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 201;
				this.match(XonParser.StringFormatStart);
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 202;
						this.expression(0);
						this.state = 203;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 209;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 210;
				this.expression(0);
				this.state = 211;
				this.match(XonParser.StringFormatEnd);
				}
				break;
			case XonParser.OpenBracket:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 213;
				this.match(XonParser.OpenBracket);
				this.state = 214;
				this.expression(0);
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 215;
					this.match(XonParser.Comma);
					this.state = 216;
					this.expression(0);
					}
					}
					this.state = 221;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 222;
				this.match(XonParser.CloseBracket);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 224;
				this.match(XonParser.OpenBrace);
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 225;
					this.match(XonParser.ID);
					this.state = 226;
					this.match(XonParser.Colon);
					this.state = 227;
					this.expression(0);
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 228;
						this.match(XonParser.Comma);
						this.state = 229;
						this.match(XonParser.ID);
						this.state = 230;
						this.match(XonParser.Colon);
						this.state = 231;
						this.expression(0);
						}
						}
						this.state = 236;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 239;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 240;
				this.match(XonParser.OpenParen);
				this.state = 241;
				this.expression(0);
				this.state = 242;
				this.match(XonParser.CloseParen);
				}
				break;
			case XonParser.LambdaStart:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 244;
				this.match(XonParser.LambdaStart);
				this.state = 266;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 245;
					this.match(XonParser.ID);
					this.state = 246;
					this.type();
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 247;
						this.match(XonParser.Comma);
						this.state = 248;
						this.match(XonParser.ID);
						this.state = 249;
						this.type();
						}
						}
						this.state = 254;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 255;
					this.match(XonParser.Colon);
					}
					break;

				case 2:
					{
					this.state = 257;
					this.match(XonParser.ID);
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 258;
						this.match(XonParser.Comma);
						this.state = 259;
						this.match(XonParser.ID);
						}
						}
						this.state = 264;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 265;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 268;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 293;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 271;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 272;
						this.operator();
						this.state = 273;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 275;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 276;
						this.match(XonParser.OpenParen);
						this.state = 285;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
							{
							this.state = 277;
							this.argument();
							this.state = 282;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 278;
								this.match(XonParser.Comma);
								this.state = 279;
								this.argument();
								}
								}
								this.state = 284;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 287;
						this.match(XonParser.CloseParen);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 288;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 289;
						this.match(XonParser.OpenBracket);
						this.state = 290;
						this.expression(0);
						this.state = 291;
						this.match(XonParser.CloseBracket);
						}
						break;
					}
					}
				}
				this.state = 297;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_literal);
		try {
			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.IntegerLiteral:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 299;
				this.match(XonParser.IntegerLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 300;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.CharLiteral:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 301;
				this.match(XonParser.CharLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 302;
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
		this.enterRule(_localctx, 18, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
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
		this.enterRule(_localctx, 20, XonParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(XonParser.ID);
			this.state = 308;
			this.type();
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
		this.enterRule(_localctx, 22, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 310;
				this.match(XonParser.ID);
				this.state = 311;
				this.match(XonParser.Assign);
				}
				break;
			}
			this.state = 314;
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
		this.enterRule(_localctx, 24, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(XonParser.Colon);
			this.state = 317;
			this.match(XonParser.LineBreak);
			this.state = 318;
			this.match(XonParser.INDENT);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 321;
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
					this.state = 319;
					this.statement();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 320;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0));
			this.state = 325;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			_localctx._name = this.match(XonParser.ID);
			this.state = 339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 328;
				this.match(XonParser.LessThan);
				this.state = 329;
				this.type();
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 330;
					this.match(XonParser.Comma);
					this.state = 331;
					this.type();
					}
					}
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 337;
				this.match(XonParser.MoreThan);
				}
				break;
			}
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Hash) {
				{
				this.state = 341;
				this.match(XonParser.Hash);
				this.state = 342;
				_localctx._meta = this.match(XonParser.ID);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\u015C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02#\n\x02" +
		"\f\x02\x0E\x02&\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"-\n\x03\f\x03\x0E\x030\v\x03\x03\x04\x03\x04\x03\x04\x07\x045\n\x04\f" +
		"\x04\x0E\x048\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04>\n\x04\f\x04" +
		"\x0E\x04A\v\x04\x03\x05\x03\x05\x03\x05\x05\x05F\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x05\x06K\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06" +
		"R\n\x06\r\x06\x0E\x06S\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07_\n\x07\f\x07\x0E\x07b\v\x07\x05\x07d" +
		"\n\x07\x03\x07\x03\x07\x05\x07h\n\x07\x03\x07\x05\x07k\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x07\x07r\n\x07\f\x07\x0E\x07u\v\x07\x05\x07" +
		"w\n\x07\x03\x07\x03\x07\x05\x07{\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\x82\n\x07\f\x07\x0E\x07\x85\v\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\x8A\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\x94\n\x07\x05\x07\x96\n\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x07\b\x9F\n\b\f\b\x0E\b\xA2\v\b\x03\b\x03\b\x05" +
		"\b\xA6\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\xAC\n\b\x05\b\xAE\n\b\x03\b\x03" +
		"\b\x05\b\xB2\n\b\x03\b\x05\b\xB5\n\b\x03\b\x05\b\xB8\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x05\b\xBE\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xC5\n\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xD0\n\t\f\t\x0E" +
		"\t\xD3\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xDC\n\t\f\t" +
		"\x0E\t\xDF\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x07\t\xEB\n\t\f\t\x0E\t\xEE\v\t\x05\t\xF0\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xFD\n\t\f\t\x0E\t\u0100" +
		"\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0107\n\t\f\t\x0E\t\u010A\v\t" +
		"\x03\t\x05\t\u010D\n\t\x03\t\x05\t\u0110\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x07\t\u011B\n\t\f\t\x0E\t\u011E\v\t\x05\t\u0120" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0128\n\t\f\t\x0E\t\u012B" +
		"\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0132\n\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x05\r\u013B\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x06\x0E\u0144\n\x0E\r\x0E\x0E\x0E\u0145\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u014F\n\x0F\f\x0F\x0E" +
		"\x0F\u0152\v\x0F\x03\x0F\x03\x0F\x05\x0F\u0156\n\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u015A\n\x0F\x03\x0F\x02\x02\x03\x10\x10\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x02\x03\x05\x02\x17\x17\x19!#\'\x02\u0192\x02$\x03\x02\x02\x02" +
		"\x04\'\x03\x02\x02\x02\x061\x03\x02\x02\x02\bB\x03\x02\x02\x02\nG\x03" +
		"\x02\x02\x02\f\x95\x03\x02\x02\x02\x0E\xC4\x03\x02\x02\x02\x10\u010F\x03" +
		"\x02\x02\x02\x12\u0131\x03\x02\x02\x02\x14\u0133\x03\x02\x02\x02\x16\u0135" +
		"\x03\x02\x02\x02\x18\u013A\x03\x02\x02\x02\x1A\u013E\x03\x02\x02\x02\x1C" +
		"\u0149\x03\x02\x02\x02\x1E#\x05\x04\x03\x02\x1F#\x05\x0E\b\x02 #\x05\n" +
		"\x06\x02!#\x07\x0F\x02\x02\"\x1E\x03\x02\x02\x02\"\x1F\x03\x02\x02\x02" +
		"\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02" +
		"\x02$%\x03\x02\x02\x02%\x03\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x05\x06" +
		"\x04\x02()\x07\x19\x02\x02).\x05\b\x05\x02*+\x07\x16\x02\x02+-\x05\b\x05" +
		"\x02,*\x03\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02" +
		"\x02/\x05\x03\x02\x02\x020.\x03\x02\x02\x0216\x073\x02\x0223\x07\x1C\x02" +
		"\x0235\x073\x02\x0242\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02" +
		"\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02\x029:\x07\x1F\x02" +
		"\x02:?\x073\x02\x02;<\x07\x1C\x02\x02<>\x073\x02\x02=;\x03\x02\x02\x02" +
		">A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x07\x03\x02\x02" +
		"\x02A?\x03\x02\x02\x02BE\x073\x02\x02CD\x07\x06\x02\x02DF\x073\x02\x02" +
		"EC\x03\x02\x02\x02EF\x03\x02\x02\x02F\t\x03\x02\x02\x02GJ\x073\x02\x02" +
		"HI\x07\x05\x02\x02IK\x05\x1C\x0F\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KL\x03\x02\x02\x02LM\x07\x19\x02\x02MN\x07\x0F\x02\x02NQ\x07\x03\x02\x02" +
		"OR\x05\f\x07\x02PR\x07\x0F\x02\x02QO\x03\x02\x02\x02QP\x03\x02\x02\x02" +
		"RS\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02" +
		"UV\x07\x04\x02\x02V\v\x03\x02\x02\x02WX\x073\x02\x02X\x96\x05\x1C\x0F" +
		"\x02YZ\x073\x02\x02Zc\x07\x12\x02\x02[`\x05\x16\f\x02\\]\x07\x16\x02\x02" +
		"]_\x05\x16\f\x02^\\\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02c[\x03\x02\x02\x02" +
		"cd\x03\x02\x02\x02de\x03\x02\x02\x02eg\x07\x13\x02\x02fh\x05\x1C\x0F\x02" +
		"gf\x03\x02\x02\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ik\x05\x1A\x0E\x02" +
		"ji\x03\x02\x02\x02jk\x03\x02\x02\x02k\x96\x03\x02\x02\x02lm\x07(\x02\x02" +
		"mv\x07\x12\x02\x02ns\x05\x16\f\x02op\x07\x16\x02\x02pr\x05\x16\f\x02q" +
		"o\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02" +
		"tw\x03\x02\x02\x02us\x03\x02\x02\x02vn\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wx\x03\x02\x02\x02xz\x07\x13\x02\x02y{\x05\x1A\x0E\x02zy\x03\x02\x02\x02" +
		"z{\x03\x02\x02\x02{\x96\x03\x02\x02\x02|}\x07(\x02\x02}~\x07\x10\x02\x02" +
		"~\x83\x05\x16\f\x02\x7F\x80\x07\x16\x02\x02\x80\x82\x05\x16\f\x02\x81" +
		"\x7F\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86" +
		"\x87\x07\x11\x02\x02\x87\x89\x05\x1C\x0F\x02\x88\x8A\x05\x1A\x0E\x02\x89" +
		"\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x96\x03\x02\x02\x02\x8B" +
		"\x8C\x05\x14\v\x02\x8C\x8D\x07\x12\x02\x02\x8D\x8E\x05\x16\f\x02\x8E\x8F" +
		"\x07\x16\x02\x02\x8F\x90\x05\x16\f\x02\x90\x91\x07\x13\x02\x02\x91\x93" +
		"\x05\x1C\x0F\x02\x92\x94\x05\x1A\x0E\x02\x93\x92\x03\x02\x02\x02\x93\x94" +
		"\x03\x02\x02\x02\x94\x96\x03\x02\x02\x02\x95W\x03\x02\x02\x02\x95Y\x03" +
		"\x02\x02\x02\x95l\x03\x02\x02\x02\x95|\x03\x02\x02\x02\x95\x8B\x03\x02" +
		"\x02\x02\x96\r\x03\x02\x02\x02\x97\x98\x07\x07\x02\x02\x98\x99\x05\x10" +
		"\t\x02\x99\xA0\x05\x1A\x0E\x02\x9A\x9B\x07\t\x02\x02\x9B\x9C\x05\x10\t" +
		"\x02\x9C\x9D\x05\x1A\x0E\x02\x9D\x9F\x03\x02\x02\x02\x9E\x9A\x03\x02\x02" +
		"\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02" +
		"\x02\xA1\xA5\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA4\x07\b\x02" +
		"\x02\xA4\xA6\x05\x1A\x0E\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02" +
		"\x02\xA6\xC5\x03\x02\x02\x02\xA7\xB7\x07\n\x02\x02\xA8\xAD\x073\x02\x02" +
		"\xA9\xAB\x07\x16\x02\x02\xAA\xAC\x073\x02\x02\xAB\xAA\x03\x02\x02\x02" +
		"\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xA9\x03\x02\x02\x02" +
		"\xAD\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xB0\x07\x16\x02\x02" +
		"\xB0\xB2\x073\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02" +
		"\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x07\v\x02\x02\xB4\xA8\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x05\x10\t\x02" +
		"\xB7\xB4\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xC5\x05\x1A\x0E\x02\xBA\xC5\x07\f\x02\x02\xBB\xBD\x07\r\x02\x02\xBC" +
		"\xBE\x05\x10\t\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE" +
		"\xC5\x03\x02\x02\x02\xBF\xC0\x073\x02\x02\xC0\xC1\x07\x17\x02\x02\xC1" +
		"\xC5\x05\x10\t\x02\xC2\xC5\x05\x10\t\x02\xC3\xC5\x07\x0E\x02\x02\xC4\x97" +
		"\x03\x02\x02\x02\xC4\xA7\x03\x02\x02\x02\xC4\xBA\x03\x02\x02\x02\xC4\xBB" +
		"\x03\x02\x02\x02\xC4\xBF\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC3" +
		"\x03\x02\x02\x02\xC5\x0F\x03\x02\x02\x02\xC6\xC7\b\t\x01\x02\xC7\u0110" +
		"\x073\x02\x02\xC8\xC9\x07(\x02\x02\xC9\u0110\x073\x02\x02\xCA\u0110\x05" +
		"\x12\n\x02\xCB\xD1\x070\x02\x02\xCC\xCD\x05\x10\t\x02\xCD\xCE\x071\x02" +
		"\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCC\x03\x02\x02\x02\xD0\xD3\x03\x02\x02" +
		"\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02" +
		"\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x05\x10\t\x02\xD5\xD6\x072\x02\x02" +
		"\xD6\u0110\x03\x02\x02\x02\xD7\xD8\x07\x10\x02\x02\xD8\xDD\x05\x10\t\x02" +
		"\xD9\xDA\x07\x16\x02\x02\xDA\xDC\x05\x10\t\x02\xDB\xD9\x03\x02\x02\x02" +
		"\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02" +
		"\xDE\xE0\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x07\x11\x02\x02" +
		"\xE1\u0110\x03\x02\x02\x02\xE2\xEF\x07\x14\x02\x02\xE3\xE4\x073\x02\x02" +
		"\xE4\xE5\x07\x19\x02\x02\xE5\xEC\x05\x10\t\x02\xE6\xE7\x07\x16\x02\x02" +
		"\xE7\xE8\x073\x02\x02\xE8\xE9\x07\x19\x02\x02\xE9\xEB\x05\x10\t\x02\xEA" +
		"\xE6\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC" +
		"\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF" +
		"\xE3\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1" +
		"\u0110\x07\x15\x02\x02\xF2\xF3\x07\x12\x02\x02\xF3\xF4\x05\x10\t\x02\xF4" +
		"\xF5\x07\x13\x02\x02\xF5\u0110\x03\x02\x02\x02\xF6\u010C\x07*\x02\x02" +
		"\xF7\xF8\x073\x02\x02\xF8\xFE\x05\x1C\x0F\x02\xF9\xFA\x07\x16\x02\x02" +
		"\xFA\xFB\x073\x02\x02\xFB\xFD\x05\x1C\x0F\x02\xFC\xF9\x03\x02\x02\x02" +
		"\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02" +
		"\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0102\x07" +
		"\x19\x02\x02\u0102\u010D\x03\x02\x02\x02\u0103\u0108\x073\x02\x02\u0104" +
		"\u0105\x07\x16\x02\x02\u0105\u0107\x073\x02\x02\u0106\u0104\x03\x02\x02" +
		"\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109" +
		"\x03\x02\x02\x02\u0109\u010B\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010B\u010D\x07\x19\x02\x02\u010C\xF7\x03\x02\x02\x02\u010C\u0103\x03" +
		"\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0110\x05\x10\t\x03\u010F\xC6\x03\x02\x02\x02\u010F\xC8\x03\x02\x02\x02" +
		"\u010F\xCA\x03\x02\x02\x02\u010F\xCB\x03\x02\x02\x02\u010F\xD7\x03\x02" +
		"\x02\x02\u010F\xE2\x03\x02\x02\x02\u010F\xF2\x03\x02\x02\x02\u010F\xF6" +
		"\x03\x02\x02\x02\u0110\u0129\x03\x02\x02\x02\u0111\u0112\f\b\x02\x02\u0112" +
		"\u0113\x05\x14\v\x02\u0113\u0114\x05\x10\t\t\u0114\u0128\x03\x02\x02\x02" +
		"\u0115\u0116\f\n\x02\x02\u0116\u011F\x07\x12\x02\x02\u0117\u011C\x05\x18" +
		"\r\x02\u0118\u0119\x07\x16\x02\x02\u0119\u011B\x05\x18\r\x02\u011A\u0118" +
		"\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02" +
		"\u011C\u011D\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03" +
		"\x02\x02\x02\u011F\u0117\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
		"\u0121\x03\x02\x02\x02\u0121\u0128\x07\x13\x02\x02\u0122\u0123\f\t\x02" +
		"\x02\u0123\u0124\x07\x10\x02\x02\u0124\u0125\x05\x10\t\x02\u0125\u0126" +
		"\x07\x11\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0111\x03\x02\x02\x02" +
		"\u0127\u0115\x03\x02\x02\x02\u0127\u0122\x03\x02\x02\x02\u0128\u012B\x03" +
		"\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\x11\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u0132\x07+\x02" +
		"\x02\u012D\u0132\x07-\x02\x02\u012E\u0132\x07,\x02\x02\u012F\u0132\x07" +
		".\x02\x02\u0130\u0132\x07/\x02\x02\u0131\u012C\x03\x02\x02\x02\u0131\u012D" +
		"\x03\x02\x02\x02\u0131\u012E\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02" +
		"\u0131\u0130\x03\x02\x02\x02\u0132\x13\x03\x02\x02\x02\u0133\u0134\t\x02" +
		"\x02\x02\u0134\x15\x03\x02\x02\x02\u0135\u0136\x073\x02\x02\u0136\u0137" +
		"\x05\x1C\x0F\x02\u0137\x17\x03\x02\x02\x02\u0138\u0139\x073\x02\x02\u0139" +
		"\u013B\x07\x17\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x05\x10\t\x02\u013D\x19" +
		"\x03\x02\x02\x02\u013E\u013F\x07\x19\x02\x02\u013F\u0140\x07\x0F\x02\x02" +
		"\u0140\u0143\x07\x03\x02\x02\u0141\u0144\x05\x0E\b\x02\u0142\u0144\x07" +
		"\x0F\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x07\x04\x02\x02\u0148" +
		"\x1B\x03\x02\x02\x02\u0149\u0155\x073\x02\x02\u014A\u014B\x07#\x02\x02" +
		"\u014B\u0150\x05\x1C\x0F\x02\u014C\u014D\x07\x16\x02\x02\u014D\u014F\x05" +
		"\x1C\x0F\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150" +
		"\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x03\x02" +
		"\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0154\x07$\x02\x02\u0154\u0156" +
		"\x03\x02\x02\x02\u0155\u014A\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02" +
		"\u0156\u0159\x03\x02\x02\x02\u0157\u0158\x07\"\x02\x02\u0158\u015A\x07" +
		"3\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"\x1D\x03\x02\x02\x022\"$.6?EJQS`cgjsvz\x83\x89\x93\x95\xA0\xA5\xAB\xAD" +
		"\xB1\xB4\xB7\xBD\xC4\xD1\xDD\xEC\xEF\xFE\u0108\u010C\u010F\u011C\u011F" +
		"\u0127\u0129\u0131\u013A\u0143\u0145\u0150\u0155\u0159";
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
export class IndexMemberContext extends MemberContext {
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
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
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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


