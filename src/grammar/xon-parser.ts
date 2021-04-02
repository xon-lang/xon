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
	public static readonly RULE_type = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_literal = 9;
	public static readonly RULE_operator = 10;
	public static readonly RULE_parameter = 11;
	public static readonly RULE_argument = 12;
	public static readonly RULE_body = 13;
	public static readonly RULE_id = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "definition", "member", 
		"type", "statement", "expression", "literal", "operator", "parameter", 
		"argument", "body", "id",
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
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
				{
				this.state = 34;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 30;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 31;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 32;
					this.definition();
					}
					break;

				case 4:
					{
					this.state = 33;
					this.match(XonParser.LineBreak);
					}
					break;
				}
				}
				this.state = 38;
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
			this.state = 39;
			this.libraryPath();
			this.state = 40;
			this.match(XonParser.Colon);
			this.state = 41;
			this.libraryMember();
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Comma) {
				{
				{
				this.state = 42;
				this.match(XonParser.Comma);
				this.state = 43;
				this.libraryMember();
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(XonParser.ID);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 50;
				this.match(XonParser.Minus);
				this.state = 51;
				this.match(XonParser.ID);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 57;
			this.match(XonParser.Slash);
			this.state = 58;
			this.match(XonParser.ID);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 59;
				this.match(XonParser.Minus);
				this.state = 60;
				this.match(XonParser.ID);
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
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			_localctx._name = this.match(XonParser.ID);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 67;
				this.match(XonParser.As);
				this.state = 68;
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
			this.state = 71;
			_localctx._name = this.id();
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LessThan) {
				{
				this.state = 72;
				this.match(XonParser.LessThan);
				this.state = 73;
				_localctx._id = this.id();
				_localctx._generics.push(_localctx._id);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 74;
					this.match(XonParser.Comma);
					this.state = 75;
					_localctx._id = this.id();
					_localctx._generics.push(_localctx._id);
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 81;
				this.match(XonParser.MoreThan);
				}
			}

			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Is) {
				{
				this.state = 85;
				this.match(XonParser.Is);
				this.state = 86;
				this.type(0);
				}
			}

			this.state = 89;
			this.match(XonParser.Colon);
			this.state = 90;
			this.match(XonParser.LineBreak);
			this.state = 91;
			this.match(XonParser.INDENT);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 94;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Assign:
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
				case XonParser.Ad:
				case XonParser.ID:
					{
					this.state = 92;
					this.member();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 93;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.LineBreak) | (1 << XonParser.Assign) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk) | (1 << XonParser.Slash) | (1 << XonParser.Modulo) | (1 << XonParser.Caret))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LessThan - 33)) | (1 << (XonParser.MoreThan - 33)) | (1 << (XonParser.Ampersand - 33)) | (1 << (XonParser.Pipe - 33)) | (1 << (XonParser.Ad - 33)) | (1 << (XonParser.ID - 33)))) !== 0));
			this.state = 98;
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
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				(_localctx as MethodMemberContext)._name = this.match(XonParser.ID);
				this.state = 101;
				this.match(XonParser.OpenParen);
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 102;
					this.parameter();
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 103;
						this.match(XonParser.Comma);
						this.state = 104;
						this.parameter();
						}
						}
						this.state = 109;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 112;
				this.match(XonParser.CloseParen);
				this.state = 114;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 113;
					this.type(0);
					}
					break;
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 116;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				(_localctx as InitMemberContext)._name = this.match(XonParser.Ad);
				this.state = 120;
				this.match(XonParser.OpenParen);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 121;
					this.parameter();
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 122;
						this.match(XonParser.Comma);
						this.state = 123;
						this.parameter();
						}
						}
						this.state = 128;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 131;
				this.match(XonParser.CloseParen);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 132;
					this.body();
					}
				}

				}
				break;

			case 3:
				_localctx = new IndexMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 135;
				(_localctx as IndexMemberContext)._name = this.match(XonParser.Ad);
				this.state = 136;
				this.match(XonParser.OpenBracket);
				this.state = 137;
				this.parameter();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 138;
					this.match(XonParser.Comma);
					this.state = 139;
					this.parameter();
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 145;
				this.match(XonParser.CloseBracket);
				this.state = 146;
				this.type(0);
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 147;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 150;
				(_localctx as OperatorMemberContext)._name = this.operator();
				this.state = 151;
				this.match(XonParser.OpenParen);
				this.state = 152;
				this.parameter();
				this.state = 153;
				this.match(XonParser.Comma);
				this.state = 154;
				this.parameter();
				this.state = 155;
				this.match(XonParser.CloseParen);
				this.state = 156;
				this.type(0);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 157;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 160;
				(_localctx as PropertyMemberContext)._name = this.id();
				this.state = 161;
				this.type(0);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
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
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 168;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new GenericTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 169;
				this.id();
				this.state = 170;
				this.match(XonParser.LessThan);
				this.state = 171;
				this.type(0);
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 172;
					this.match(XonParser.Comma);
					this.state = 173;
					this.type(0);
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 179;
				this.match(XonParser.MoreThan);
				}
				break;

			case 3:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 181;
				this.match(XonParser.OpenBrace);
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 182;
					this.parameter();
					this.state = 187;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 183;
						this.match(XonParser.Comma);
						this.state = 184;
						this.parameter();
						}
						}
						this.state = 189;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 192;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 4:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 193;
				this.match(XonParser.OpenParen);
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 194;
					this.parameter();
					this.state = 199;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 195;
						this.match(XonParser.Comma);
						this.state = 196;
						this.parameter();
						}
						}
						this.state = 201;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 204;
				this.match(XonParser.CloseParen);
				this.state = 205;
				this.type(4);
				}
				break;

			case 5:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.match(XonParser.OpenParen);
				this.state = 207;
				this.type(0);
				this.state = 208;
				this.match(XonParser.CloseParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 223;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 221;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 212;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 213;
						this.match(XonParser.Pipe);
						this.state = 214;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 215;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 216;
						this.match(XonParser.OpenBracket);
						this.state = 217;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 3:
						{
						_localctx = new MetaTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 218;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 219;
						this.match(XonParser.Hash);
						this.state = 220;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.match(XonParser.If);
				this.state = 227;
				this.expression(0);
				this.state = 228;
				this.body();
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ElseIf) {
					{
					{
					this.state = 229;
					this.match(XonParser.ElseIf);
					this.state = 230;
					this.expression(0);
					this.state = 231;
					this.body();
					}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 238;
					this.match(XonParser.Else);
					this.state = 239;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 242;
				this.match(XonParser.Loop);
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenBracket || _la === XonParser.OpenParen || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
					{
					this.state = 255;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						this.state = 243;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 248;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
						case 1:
							{
							this.state = 244;
							this.match(XonParser.Comma);
							this.state = 246;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 245;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 252;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 250;
							this.match(XonParser.Comma);
							this.state = 251;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 254;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 257;
					this.expression(0);
					}
				}

				this.state = 260;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.match(XonParser.Break);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 262;
				this.match(XonParser.Return);
				this.state = 264;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 263;
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
				this.state = 266;
				this.match(XonParser.ID);
				this.state = 267;
				this.match(XonParser.Assign);
				this.state = 268;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 269;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 270;
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
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 274;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.Ad:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 275;
				this.match(XonParser.Ad);
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
				this.state = 276;
				this.literal();
				}
				break;
			case XonParser.StringFormatStart:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 277;
				this.match(XonParser.StringFormatStart);
				this.state = 283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 278;
						this.expression(0);
						this.state = 279;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 285;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 286;
				this.expression(0);
				this.state = 287;
				this.match(XonParser.StringFormatEnd);
				}
				break;
			case XonParser.OpenBracket:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 289;
				this.match(XonParser.OpenBracket);
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenBracket || _la === XonParser.OpenParen || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
					{
					this.state = 290;
					this.argument();
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 291;
						this.match(XonParser.Comma);
						this.state = 292;
						this.argument();
						}
						}
						this.state = 297;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 300;
				this.match(XonParser.CloseBracket);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 301;
				this.match(XonParser.OpenParen);
				this.state = 302;
				this.expression(0);
				this.state = 303;
				this.match(XonParser.CloseParen);
				}
				break;
			case XonParser.LambdaStart:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 305;
				this.match(XonParser.LambdaStart);
				this.state = 316;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 306;
					this.parameter();
					this.state = 311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 307;
						this.match(XonParser.Comma);
						this.state = 308;
						this.parameter();
						}
						}
						this.state = 313;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 314;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 318;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 356;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 354;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 321;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 322;
						this.operator();
						this.state = 323;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 325;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 326;
						this.match(XonParser.Dot);
						this.state = 327;
						this.id();
						}
						break;

					case 3:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 328;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 329;
						this.match(XonParser.OpenParen);
						this.state = 338;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.OpenBracket || _la === XonParser.OpenParen || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
							{
							this.state = 330;
							this.argument();
							this.state = 335;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 331;
								this.match(XonParser.Comma);
								this.state = 332;
								this.argument();
								}
								}
								this.state = 337;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 340;
						this.match(XonParser.CloseParen);
						}
						break;

					case 4:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 341;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 342;
						this.match(XonParser.OpenBracket);
						this.state = 351;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.OpenBracket || _la === XonParser.OpenParen || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0)) {
							{
							this.state = 343;
							this.argument();
							this.state = 348;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 344;
								this.match(XonParser.Comma);
								this.state = 345;
								this.argument();
								}
								}
								this.state = 350;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 353;
						this.match(XonParser.CloseBracket);
						}
						break;
					}
					}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.IntegerLiteral:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.match(XonParser.IntegerLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 361;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.CharLiteral:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 362;
				this.match(XonParser.CharLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 363;
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
			this.state = 399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Plus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 366;
				this.match(XonParser.Plus);
				}
				break;
			case XonParser.Minus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 367;
				this.match(XonParser.Minus);
				}
				break;
			case XonParser.Asterisk:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 368;
				this.match(XonParser.Asterisk);
				}
				break;
			case XonParser.Slash:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 369;
				this.match(XonParser.Slash);
				}
				break;
			case XonParser.Modulo:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 370;
				this.match(XonParser.Modulo);
				}
				break;
			case XonParser.LessThan:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 371;
				this.match(XonParser.LessThan);
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 372;
					this.match(XonParser.Assign);
					}
				}

				}
				break;
			case XonParser.Assign:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 375;
				this.match(XonParser.Assign);
				this.state = 376;
				this.match(XonParser.Assign);
				}
				break;
			case XonParser.MoreThan:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 377;
				this.match(XonParser.MoreThan);
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 378;
					this.match(XonParser.Assign);
					}
				}

				}
				break;
			case XonParser.Exclamation:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 381;
				this.match(XonParser.Exclamation);
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 382;
					this.match(XonParser.Assign);
					}
				}

				}
				break;
			case XonParser.Caret:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 385;
				this.match(XonParser.Caret);
				}
				break;
			case XonParser.Ampersand:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 386;
				this.match(XonParser.Ampersand);
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Ampersand) {
					{
					this.state = 387;
					this.match(XonParser.Ampersand);
					}
				}

				}
				break;
			case XonParser.Pipe:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 390;
				this.match(XonParser.Pipe);
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Pipe) {
					{
					this.state = 391;
					this.match(XonParser.Pipe);
					}
				}

				}
				break;
			case XonParser.Dot:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 394;
				this.match(XonParser.Dot);
				this.state = 395;
				this.match(XonParser.Dot);
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Dot) {
					{
					this.state = 396;
					this.match(XonParser.Dot);
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(XonParser.ID);
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 402;
				this.type(0);
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
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 405;
				this.match(XonParser.ID);
				this.state = 406;
				this.match(XonParser.Assign);
				}
				break;
			}
			this.state = 409;
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
			this.state = 411;
			this.match(XonParser.Colon);
			this.state = 412;
			this.match(XonParser.LineBreak);
			this.state = 413;
			this.match(XonParser.INDENT);
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 416;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.If:
				case XonParser.Loop:
				case XonParser.Break:
				case XonParser.Return:
				case XonParser.Preprocessor:
				case XonParser.OpenBracket:
				case XonParser.OpenParen:
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
					this.state = 414;
					this.statement();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 415;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Ad - 38)) | (1 << (XonParser.LambdaStart - 38)) | (1 << (XonParser.BooleanLiteral - 38)) | (1 << (XonParser.FloatLiteral - 38)) | (1 << (XonParser.IntegerLiteral - 38)) | (1 << (XonParser.CharLiteral - 38)) | (1 << (XonParser.StringLiteral - 38)) | (1 << (XonParser.StringFormatStart - 38)) | (1 << (XonParser.ID - 38)))) !== 0));
			this.state = 420;
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 8:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\u01AB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x07\x02%\n\x02\f\x02\x0E\x02(\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03/\n\x03\f\x03\x0E\x032\v\x03\x03\x04\x03\x04\x03\x04\x07\x04" +
		"7\n\x04\f\x04\x0E\x04:\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04@" +
		"\n\x04\f\x04\x0E\x04C\v\x04\x03\x05\x03\x05\x03\x05\x05\x05H\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06O\n\x06\f\x06\x0E\x06R\v\x06" +
		"\x03\x06\x03\x06\x05\x06V\n\x06\x03\x06\x03\x06\x05\x06Z\n\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06a\n\x06\r\x06\x0E\x06b\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07l\n\x07\f\x07" +
		"\x0E\x07o\v\x07\x05\x07q\n\x07\x03\x07\x03\x07\x05\x07u\n\x07\x03\x07" +
		"\x05\x07x\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x7F\n" +
		"\x07\f\x07\x0E\x07\x82\v\x07\x05\x07\x84\n\x07\x03\x07\x03\x07\x05\x07" +
		"\x88\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x8F\n\x07\f" +
		"\x07\x0E\x07\x92\v\x07\x03\x07\x03\x07\x03\x07\x05\x07\x97\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xA1\n" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\xA6\n\x07\x05\x07\xA8\n\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xB1\n\b\f\b\x0E\b\xB4\v\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xBC\n\b\f\b\x0E\b\xBF\v\b\x05\b" +
		"\xC1\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xC8\n\b\f\b\x0E\b\xCB\v\b" +
		"\x05\b\xCD\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xD5\n\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xE0\n\b\f\b\x0E" +
		"\b\xE3\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xEC\n\t\f\t" +
		"\x0E\t\xEF\v\t\x03\t\x03\t\x05\t\xF3\n\t\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\xF9\n\t\x05\t\xFB\n\t\x03\t\x03\t\x05\t\xFF\n\t\x03\t\x05\t\u0102\n\t" +
		"\x03\t\x05\t\u0105\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u010B\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0112\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\u011C\n\n\f\n\x0E\n\u011F\v\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\u0128\n\n\f\n\x0E\n\u012B\v\n\x05\n\u012D\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0138\n" +
		"\n\f\n\x0E\n\u013B\v\n\x03\n\x03\n\x05\n\u013F\n\n\x03\n\x05\n\u0142\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\u0150\n\n\f\n\x0E\n\u0153\v\n\x05\n\u0155\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\u015D\n\n\f\n\x0E\n\u0160\v\n\x05\n\u0162\n" +
		"\n\x03\n\x07\n\u0165\n\n\f\n\x0E\n\u0168\v\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\u016F\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0178" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u017E\n\f\x03\f\x03\f\x05\f\u0182\n" +
		"\f\x03\f\x03\f\x03\f\x05\f\u0187\n\f\x03\f\x03\f\x05\f\u018B\n\f\x03\f" +
		"\x03\f\x03\f\x05\f\u0190\n\f\x05\f\u0192\n\f\x03\r\x03\r\x05\r\u0196\n" +
		"\r\x03\x0E\x03\x0E\x05\x0E\u019A\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u01A3\n\x0F\r\x0F\x0E\x0F\u01A4\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x02\x02\x04\x0E\x12\x11\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02\x02\x02\x02\u01FE\x02&\x03\x02\x02\x02\x04" +
		")\x03\x02\x02\x02\x063\x03\x02\x02\x02\bD\x03\x02\x02\x02\nI\x03\x02\x02" +
		"\x02\f\xA7\x03\x02\x02\x02\x0E\xD4\x03\x02\x02\x02\x10\u0111\x03\x02\x02" +
		"\x02\x12\u0141\x03\x02\x02\x02\x14\u016E\x03\x02\x02\x02\x16\u0191\x03" +
		"\x02\x02\x02\x18\u0193\x03\x02\x02\x02\x1A\u0199\x03\x02\x02\x02\x1C\u019D" +
		"\x03\x02\x02\x02\x1E\u01A8\x03\x02\x02\x02 %\x05\x04\x03\x02!%\x05\x10" +
		"\t\x02\"%\x05\n\x06\x02#%\x07\x0F\x02\x02$ \x03\x02\x02\x02$!\x03\x02" +
		"\x02\x02$\"\x03\x02\x02\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03" +
		"\x02\x02\x02&\'\x03\x02\x02\x02\'\x03\x03\x02\x02\x02(&\x03\x02\x02\x02" +
		")*\x05\x06\x04\x02*+\x07\x19\x02\x02+0\x05\b\x05\x02,-\x07\x16\x02\x02" +
		"-/\x05\b\x05\x02.,\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02\x02" +
		"01\x03\x02\x02\x021\x05\x03\x02\x02\x0220\x03\x02\x02\x0238\x073\x02\x02" +
		"45\x07\x1C\x02\x0257\x073\x02\x0264\x03\x02\x02\x027:\x03\x02\x02\x02" +
		"86\x03\x02\x02\x0289\x03\x02\x02\x029;\x03\x02\x02\x02:8\x03\x02\x02\x02" +
		";<\x07\x1F\x02\x02<A\x073\x02\x02=>\x07\x1C\x02\x02>@\x073\x02\x02?=\x03" +
		"\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\x07" +
		"\x03\x02\x02\x02CA\x03\x02\x02\x02DG\x073\x02\x02EF\x07\x06\x02\x02FH" +
		"\x073\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\t\x03\x02\x02\x02I" +
		"U\x05\x1E\x10\x02JK\x07#\x02\x02KP\x05\x1E\x10\x02LM\x07\x16\x02\x02M" +
		"O\x05\x1E\x10\x02NL\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02QS\x03\x02\x02\x02RP\x03\x02\x02\x02ST\x07$\x02\x02" +
		"TV\x03\x02\x02\x02UJ\x03\x02\x02\x02UV\x03\x02\x02\x02VY\x03\x02\x02\x02" +
		"WX\x07\x05\x02\x02XZ\x05\x0E\b\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z[\x03\x02\x02\x02[\\\x07\x19\x02\x02\\]\x07\x0F\x02\x02]`\x07\x03\x02" +
		"\x02^a\x05\f\x07\x02_a\x07\x0F\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02" +
		"\x02ab\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x03\x02\x02" +
		"\x02de\x07\x04\x02\x02e\v\x03\x02\x02\x02fg\x073\x02\x02gp\x07\x12\x02" +
		"\x02hm\x05\x18\r\x02ij\x07\x16\x02\x02jl\x05\x18\r\x02ki\x03\x02\x02\x02" +
		"lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02nq\x03\x02\x02\x02" +
		"om\x03\x02\x02\x02ph\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02" +
		"rt\x07\x13\x02\x02su\x05\x0E\b\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02" +
		"uw\x03\x02\x02\x02vx\x05\x1C\x0F\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"x\xA8\x03\x02\x02\x02yz\x07(\x02\x02z\x83\x07\x12\x02\x02{\x80\x05\x18" +
		"\r\x02|}\x07\x16\x02\x02}\x7F\x05\x18\r\x02~|\x03\x02\x02\x02\x7F\x82" +
		"\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x84" +
		"\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83{\x03\x02\x02\x02\x83\x84" +
		"\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x07\x13\x02\x02\x86\x88" +
		"\x05\x1C\x0F\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\xA8" +
		"\x03\x02\x02\x02\x89\x8A\x07(\x02\x02\x8A\x8B\x07\x10\x02\x02\x8B\x90" +
		"\x05\x18\r\x02\x8C\x8D\x07\x16\x02\x02\x8D\x8F\x05\x18\r\x02\x8E\x8C\x03" +
		"\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03" +
		"\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x94\x07" +
		"\x11\x02\x02\x94\x96\x05\x0E\b\x02\x95\x97\x05\x1C\x0F\x02\x96\x95\x03" +
		"\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\xA8\x03\x02\x02\x02\x98\x99\x05" +
		"\x16\f\x02\x99\x9A\x07\x12\x02\x02\x9A\x9B\x05\x18\r\x02\x9B\x9C\x07\x16" +
		"\x02\x02\x9C\x9D\x05\x18\r\x02\x9D\x9E\x07\x13\x02\x02\x9E\xA0\x05\x0E" +
		"\b\x02\x9F\xA1\x05\x1C\x0F\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02" +
		"\x02\x02\xA1\xA8\x03\x02\x02\x02\xA2\xA3\x05\x1E\x10\x02\xA3\xA5\x05\x0E" +
		"\b\x02\xA4\xA6\x05\x1C\x0F\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02" +
		"\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7f\x03\x02\x02\x02\xA7y\x03\x02\x02" +
		"\x02\xA7\x89\x03\x02\x02\x02\xA7\x98\x03\x02\x02\x02\xA7\xA2\x03\x02\x02" +
		"\x02\xA8\r\x03\x02\x02\x02\xA9\xAA\b\b\x01\x02\xAA\xD5\x05\x1E\x10\x02" +
		"\xAB\xAC\x05\x1E\x10\x02\xAC\xAD\x07#\x02\x02\xAD\xB2\x05\x0E\b\x02\xAE" +
		"\xAF\x07\x16\x02\x02\xAF\xB1\x05\x0E\b\x02\xB0\xAE\x03\x02\x02\x02\xB1" +
		"\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3" +
		"\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB6\x07$\x02\x02\xB6" +
		"\xD5\x03\x02\x02\x02\xB7\xC0\x07\x14\x02\x02\xB8\xBD\x05\x18\r\x02\xB9" +
		"\xBA\x07\x16\x02\x02\xBA\xBC\x05\x18\r\x02\xBB\xB9\x03\x02\x02\x02\xBC" +
		"\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE" +
		"\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xB8\x03\x02\x02\x02\xC0" +
		"\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xD5\x07\x15\x02\x02\xC3" +
		"\xCC\x07\x12\x02\x02\xC4\xC9\x05\x18\r\x02\xC5\xC6\x07\x16\x02\x02\xC6" +
		"\xC8\x05\x18\r\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9" +
		"\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB" +
		"\xC9\x03\x02\x02\x02\xCC\xC4\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xCF\x07\x13\x02\x02\xCF\xD5\x05\x0E\b\x06\xD0" +
		"\xD1\x07\x12\x02\x02\xD1\xD2\x05\x0E\b\x02\xD2\xD3\x07\x13\x02\x02\xD3" +
		"\xD5\x03\x02\x02\x02\xD4\xA9\x03\x02\x02\x02\xD4\xAB\x03\x02\x02\x02\xD4" +
		"\xB7\x03\x02\x02\x02\xD4\xC3\x03\x02\x02\x02\xD4\xD0\x03\x02\x02\x02\xD5" +
		"\xE1\x03\x02\x02\x02\xD6\xD7\f\x05\x02\x02\xD7\xD8\x07&\x02\x02\xD8\xE0" +
		"\x05\x0E\b\x06\xD9\xDA\f\b\x02\x02\xDA\xDB\x07\x10\x02\x02\xDB\xE0\x07" +
		"\x11\x02\x02\xDC\xDD\f\x03\x02\x02\xDD\xDE\x07\"\x02\x02\xDE\xE0\x05\x1E" +
		"\x10\x02\xDF\xD6\x03\x02\x02\x02\xDF\xD9\x03\x02\x02\x02\xDF\xDC\x03\x02" +
		"\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02" +
		"\x02\x02\xE2\x0F\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE5\x07\x07" +
		"\x02\x02\xE5\xE6\x05\x12\n\x02\xE6\xED\x05\x1C\x0F\x02\xE7\xE8\x07\t\x02" +
		"\x02\xE8\xE9\x05\x12\n\x02\xE9\xEA\x05\x1C\x0F\x02\xEA\xEC\x03\x02\x02" +
		"\x02\xEB\xE7\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02" +
		"\x02\xED\xEE\x03\x02\x02\x02\xEE\xF2\x03\x02\x02\x02\xEF\xED\x03\x02\x02" +
		"\x02\xF0\xF1\x07\b\x02\x02\xF1\xF3\x05\x1C\x0F\x02\xF2\xF0\x03\x02\x02" +
		"\x02\xF2\xF3\x03\x02\x02\x02\xF3\u0112\x03\x02\x02\x02\xF4\u0104\x07\n" +
		"\x02\x02\xF5\xFA\x073\x02\x02\xF6\xF8\x07\x16\x02\x02\xF7\xF9\x073\x02" +
		"\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x03\x02\x02" +
		"\x02\xFA\xF6\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFE\x03\x02\x02" +
		"\x02\xFC\xFD\x07\x16\x02\x02\xFD\xFF\x073\x02\x02\xFE\xFC\x03\x02\x02" +
		"\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102\x07" +
		"\v\x02\x02\u0101\xF5\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102" +
		"\u0103\x03\x02\x02\x02\u0103\u0105\x05\x12\n\x02\u0104\u0101\x03\x02\x02" +
		"\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0112" +
		"\x05\x1C\x0F\x02\u0107\u0112\x07\f\x02\x02\u0108\u010A\x07\r\x02\x02\u0109" +
		"\u010B\x05\x12\n\x02\u010A\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02" +
		"\x02\u010B\u0112\x03\x02\x02\x02\u010C\u010D\x073\x02\x02\u010D\u010E" +
		"\x07\x17\x02\x02\u010E\u0112\x05\x12\n\x02\u010F\u0112\x05\x12\n\x02\u0110" +
		"\u0112\x07\x0E\x02\x02\u0111\xE4\x03\x02\x02\x02\u0111\xF4\x03\x02\x02" +
		"\x02\u0111\u0107\x03\x02\x02\x02\u0111\u0108\x03\x02\x02\x02\u0111\u010C" +
		"\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0110\x03\x02\x02\x02" +
		"\u0112\x11\x03\x02\x02\x02\u0113\u0114\b\n\x01\x02\u0114\u0142\x073\x02" +
		"\x02\u0115\u0142\x07(\x02\x02\u0116\u0142\x05\x14\v\x02\u0117\u011D\x07" +
		"0\x02\x02\u0118\u0119\x05\x12\n\x02\u0119\u011A\x071\x02\x02\u011A\u011C" +
		"\x03\x02\x02\x02\u011B\u0118\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02" +
		"\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0120\x03" +
		"\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0121\x05\x12\n\x02\u0121" +
		"\u0122\x072\x02\x02\u0122\u0142\x03\x02\x02\x02\u0123\u012C\x07\x10\x02" +
		"\x02\u0124\u0129\x05\x1A\x0E\x02\u0125\u0126\x07\x16\x02\x02\u0126\u0128" +
		"\x05\x1A\x0E\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02" +
		"\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012D\x03" +
		"\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u0124\x03\x02\x02\x02\u012C" +
		"\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0142\x07\x11" +
		"\x02\x02\u012F\u0130\x07\x12\x02\x02\u0130\u0131\x05\x12\n\x02\u0131\u0132" +
		"\x07\x13\x02\x02\u0132\u0142\x03\x02\x02\x02\u0133\u013E\x07*\x02\x02" +
		"\u0134\u0139\x05\x18\r\x02\u0135\u0136\x07\x16\x02\x02\u0136\u0138\x05" +
		"\x18\r\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139" +
		"\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x03\x02" +
		"\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013D\x07\x19\x02\x02\u013D" +
		"\u013F\x03\x02\x02\x02\u013E\u0134\x03\x02\x02\x02\u013E\u013F\x03\x02" +
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x05\x12\n\x03\u0141\u0113" +
		"\x03\x02\x02\x02\u0141\u0115\x03\x02\x02\x02\u0141\u0116\x03\x02\x02\x02" +
		"\u0141\u0117\x03\x02\x02\x02\u0141\u0123\x03\x02\x02\x02\u0141\u012F\x03" +
		"\x02\x02\x02\u0141\u0133\x03\x02\x02\x02\u0142\u0166\x03\x02\x02\x02\u0143" +
		"\u0144\f\x07\x02\x02\u0144\u0145\x05\x16\f\x02\u0145\u0146\x05\x12\n\b" +
		"\u0146\u0165\x03\x02\x02\x02\u0147\u0148\f\n\x02\x02\u0148\u0149\x07\x1A" +
		"\x02\x02\u0149\u0165\x05\x1E\x10\x02\u014A\u014B\f\t\x02\x02\u014B\u0154" +
		"\x07\x12\x02\x02\u014C\u0151\x05\x1A\x0E\x02\u014D\u014E\x07\x16\x02\x02" +
		"\u014E\u0150\x05\x1A\x0E\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0153\x03" +
		"\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152" +
		"\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0154\u014C\x03\x02" +
		"\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
		"\u0165\x07\x13\x02\x02\u0157\u0158\f\b\x02\x02\u0158\u0161\x07\x10\x02" +
		"\x02\u0159\u015E\x05\x1A\x0E\x02\u015A\u015B\x07\x16\x02\x02\u015B\u015D" +
		"\x05\x1A\x0E\x02\u015C\u015A\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02" +
		"\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0162\x03" +
		"\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0159\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x07\x11" +
		"\x02\x02\u0164\u0143\x03\x02\x02\x02\u0164\u0147\x03\x02\x02\x02\u0164" +
		"\u014A\x03\x02\x02\x02\u0164\u0157\x03\x02\x02\x02\u0165\u0168\x03\x02" +
		"\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167" +
		"\x13\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016F\x07+\x02" +
		"\x02\u016A\u016F\x07-\x02\x02\u016B\u016F\x07,\x02\x02\u016C\u016F\x07" +
		".\x02\x02\u016D\u016F\x07/\x02\x02\u016E\u0169\x03\x02\x02\x02\u016E\u016A" +
		"\x03\x02\x02\x02\u016E\u016B\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02" +
		"\u016E\u016D\x03\x02\x02\x02\u016F\x15\x03\x02\x02\x02\u0170\u0192\x07" +
		"\x1B\x02\x02\u0171\u0192\x07\x1C\x02\x02\u0172\u0192\x07\x1E\x02\x02\u0173" +
		"\u0192\x07\x1F\x02\x02\u0174\u0192\x07 \x02\x02\u0175\u0177\x07#\x02\x02" +
		"\u0176\u0178\x07\x17\x02\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03" +
		"\x02\x02\x02\u0178\u0192\x03\x02\x02\x02\u0179\u017A\x07\x17\x02\x02\u017A" +
		"\u0192\x07\x17\x02\x02\u017B\u017D\x07$\x02\x02\u017C\u017E\x07\x17\x02" +
		"\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0192" +
		"\x03\x02\x02\x02\u017F\u0181\x07\x1D\x02\x02\u0180\u0182\x07\x17\x02\x02" +
		"\u0181\u0180\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0192\x03" +
		"\x02\x02\x02\u0183\u0192\x07!\x02\x02\u0184\u0186\x07%\x02\x02\u0185\u0187" +
		"\x07%\x02\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
		"\u0187\u0192\x03\x02\x02\x02\u0188\u018A\x07&\x02\x02\u0189\u018B\x07" +
		"&\x02\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\u0192\x03\x02\x02\x02\u018C\u018D\x07\x1A\x02\x02\u018D\u018F\x07\x1A" +
		"\x02\x02\u018E\u0190\x07\x1A\x02\x02\u018F\u018E\x03\x02\x02\x02\u018F" +
		"\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191\u0170\x03\x02" +
		"\x02\x02\u0191\u0171\x03\x02\x02\x02\u0191\u0172\x03\x02\x02\x02\u0191" +
		"\u0173\x03\x02\x02\x02\u0191\u0174\x03\x02\x02\x02\u0191\u0175\x03\x02" +
		"\x02\x02\u0191\u0179\x03\x02\x02\x02\u0191\u017B\x03\x02\x02\x02\u0191" +
		"\u017F\x03\x02\x02\x02\u0191\u0183\x03\x02\x02\x02\u0191\u0184\x03\x02" +
		"\x02\x02\u0191\u0188\x03\x02\x02\x02\u0191\u018C\x03\x02\x02\x02\u0192" +
		"\x17\x03\x02\x02\x02\u0193\u0195\x073\x02\x02\u0194\u0196\x05\x0E\b\x02" +
		"\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\x19\x03" +
		"\x02\x02\x02\u0197\u0198\x073\x02\x02\u0198\u019A\x07\x17\x02\x02\u0199" +
		"\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B\x03\x02" +
		"\x02\x02\u019B\u019C\x05\x12\n\x02\u019C\x1B\x03\x02\x02\x02\u019D\u019E" +
		"\x07\x19\x02\x02\u019E\u019F\x07\x0F\x02\x02\u019F\u01A2\x07\x03\x02\x02" +
		"\u01A0\u01A3\x05\x10\t\x02\u01A1\u01A3\x07\x0F\x02\x02\u01A2\u01A0\x03" +
		"\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x03\x02" +
		"\x02\x02\u01A6\u01A7\x07\x04\x02\x02\u01A7\x1D\x03\x02\x02\x02\u01A8\u01A9" +
		"\x073\x02\x02\u01A9\x1F\x03\x02\x02\x02B$&08AGPUY`bmptw\x80\x83\x87\x90" +
		"\x96\xA0\xA5\xA7\xB2\xBD\xC0\xC9\xCC\xD4\xDF\xE1\xED\xF2\xF8\xFA\xFE\u0101" +
		"\u0104\u010A\u0111\u011D\u0129\u012C\u0139\u013E\u0141\u0151\u0154\u015E" +
		"\u0161\u0164\u0166\u016E\u0177\u017D\u0181\u0186\u018A\u018F\u0191\u0195" +
		"\u0199\u01A2\u01A4";
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
	public _name!: IdContext;
	public _id!: IdContext;
	public _generics: IdContext[] = [];
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
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
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
export class MethodMemberContext extends MemberContext {
	public _name!: Token;
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	public _name!: Token;
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
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
	public _name!: Token;
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
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
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
	public _name!: OperatorContext;
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
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PropertyMemberContext extends MemberContext {
	public _name!: IdContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
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
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class GenericTypeContext extends TypeContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LessThan(): TerminalNode { return this.getToken(XonParser.LessThan, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MoreThan(): TerminalNode { return this.getToken(XonParser.MoreThan, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectTypeContext extends TypeContext {
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
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
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
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
	public Pipe(): TerminalNode { return this.getToken(XonParser.Pipe, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedTypeContext extends TypeContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MetaTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Hash(): TerminalNode { return this.getToken(XonParser.Hash, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: TypeContext) {
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
export class InstanceExpressionContext extends ExpressionContext {
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
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
	public Dot(): TerminalNode { return this.getToken(XonParser.Dot, 0); }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
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
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
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
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
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
	public Assign(): TerminalNode[];
	public Assign(i: number): TerminalNode;
	public Assign(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Assign);
		} else {
			return this.getToken(XonParser.Assign, i);
		}
	}
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	public Exclamation(): TerminalNode | undefined { return this.tryGetToken(XonParser.Exclamation, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(XonParser.Caret, 0); }
	public Ampersand(): TerminalNode[];
	public Ampersand(i: number): TerminalNode;
	public Ampersand(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Ampersand);
		} else {
			return this.getToken(XonParser.Ampersand, i);
		}
	}
	public Pipe(): TerminalNode[];
	public Pipe(i: number): TerminalNode;
	public Pipe(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Pipe);
		} else {
			return this.getToken(XonParser.Pipe, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Dot);
		} else {
			return this.getToken(XonParser.Dot, i);
		}
	}
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


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


