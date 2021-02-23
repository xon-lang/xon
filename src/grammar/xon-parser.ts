// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT

 
// @ts-nocheck


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
	public static readonly Prefix = 3;
	public static readonly Postfix = 4;
	public static readonly Infix = 5;
	public static readonly Is = 6;
	public static readonly As = 7;
	public static readonly If = 8;
	public static readonly Else = 9;
	public static readonly ElseIf = 10;
	public static readonly Loop = 11;
	public static readonly In = 12;
	public static readonly Break = 13;
	public static readonly Return = 14;
	public static readonly Preprocessor = 15;
	public static readonly LineBreak = 16;
	public static readonly OpenBracket = 17;
	public static readonly CloseBracket = 18;
	public static readonly OpenParen = 19;
	public static readonly CloseParen = 20;
	public static readonly OpenBrace = 21;
	public static readonly CloseBrace = 22;
	public static readonly Comma = 23;
	public static readonly Assign = 24;
	public static readonly Question = 25;
	public static readonly Colon = 26;
	public static readonly Dot = 27;
	public static readonly Plus = 28;
	public static readonly Minus = 29;
	public static readonly Exclamation = 30;
	public static readonly Asterisk = 31;
	public static readonly Slash = 32;
	public static readonly Modulo = 33;
	public static readonly Caret = 34;
	public static readonly Hash = 35;
	public static readonly LessThan = 36;
	public static readonly MoreThan = 37;
	public static readonly Ampersand = 38;
	public static readonly Pipe = 39;
	public static readonly Tilde = 40;
	public static readonly Ad = 41;
	public static readonly Underscore = 42;
	public static readonly LambdaStart = 43;
	public static readonly BooleanLiteral = 44;
	public static readonly FloatLiteral = 45;
	public static readonly IntegerLiteral = 46;
	public static readonly CharLiteral = 47;
	public static readonly StringLiteral = 48;
	public static readonly StringFormatStart = 49;
	public static readonly StringFormatMiddle = 50;
	public static readonly StringFormatEnd = 51;
	public static readonly ID = 52;
	public static readonly TypeId = 53;
	public static readonly Spaces = 54;
	public static readonly Comment = 55;
	public static readonly LineJoining = 56;
	public static readonly UnexpectedCharacter = 57;
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
	public static readonly RULE_argument = 11;
	public static readonly RULE_body = 12;
	public static readonly RULE_fnArg = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "type", "definition", 
		"member", "statement", "expression", "literal", "operator", "argument", 
		"body", "fnArg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'prefix'", "'postfix'", "'infix'", "'is'", 
		"'as'", "'if'", "'else'", "'elif'", "'loop'", "'in'", "'break'", "'return'", 
		undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", "','", 
		"'='", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", 
		"'^'", "'#'", "'<'", "'>'", "'&'", "'|'", "'~'", "'@'", "'_'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Prefix", "Postfix", "Infix", "Is", "As", 
		"If", "Else", "ElseIf", "Loop", "In", "Break", "Return", "Preprocessor", 
		"LineBreak", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "Question", "Colon", "Dot", 
		"Plus", "Minus", "Exclamation", "Asterisk", "Slash", "Modulo", "Caret", 
		"Hash", "LessThan", "MoreThan", "Ampersand", "Pipe", "Tilde", "Ad", "Underscore", 
		"LambdaStart", "BooleanLiteral", "FloatLiteral", "IntegerLiteral", "CharLiteral", 
		"StringLiteral", "StringFormatStart", "StringFormatMiddle", "StringFormatEnd", 
		"ID", "TypeId", "Spaces", "Comment", "LineJoining", "UnexpectedCharacter",
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.Underscore - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.TypeId - 32)))) !== 0)) {
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
			_localctx._name = this.match(XonParser.TypeId);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 65;
				this.match(XonParser.As);
				this.state = 66;
				_localctx._alias = this.match(XonParser.TypeId);
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
			case XonParser.TypeId:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				_localctx._name = this.match(XonParser.TypeId);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LessThan) {
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
				}

				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Hash) {
					{
					this.state = 83;
					this.match(XonParser.Hash);
					this.state = 84;
					_localctx._meta = this.match(XonParser.TypeId);
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
				_localctx._meta = this.match(XonParser.TypeId);
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
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Underscore) {
				{
				this.state = 91;
				this.match(XonParser.Underscore);
				}
			}

			this.state = 94;
			this.match(XonParser.TypeId);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Is) {
				{
				this.state = 95;
				this.match(XonParser.Is);
				this.state = 96;
				this.type();
				}
			}

			this.state = 99;
			this.match(XonParser.Colon);
			this.state = 100;
			this.match(XonParser.LineBreak);
			this.state = 101;
			this.match(XonParser.INDENT);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 104;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Prefix:
				case XonParser.Postfix:
				case XonParser.Infix:
				case XonParser.Ad:
				case XonParser.Underscore:
				case XonParser.ID:
					{
					this.state = 102;
					this.member();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 103;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.Prefix) | (1 << XonParser.Postfix) | (1 << XonParser.Infix) | (1 << XonParser.LineBreak))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.Ad - 41)) | (1 << (XonParser.Underscore - 41)) | (1 << (XonParser.ID - 41)))) !== 0));
			this.state = 108;
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
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Underscore) {
					{
					this.state = 110;
					this.match(XonParser.Underscore);
					}
				}

				this.state = 113;
				this.match(XonParser.ID);
				this.state = 114;
				this.type();
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Underscore) {
					{
					this.state = 115;
					this.match(XonParser.Underscore);
					}
				}

				this.state = 118;
				this.match(XonParser.ID);
				this.state = 119;
				this.match(XonParser.OpenParen);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 120;
					this.argument();
					this.state = 125;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 121;
						this.match(XonParser.Comma);
						this.state = 122;
						this.argument();
						}
						}
						this.state = 127;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 130;
				this.match(XonParser.CloseParen);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Hash || _la === XonParser.TypeId) {
					{
					this.state = 131;
					this.type();
					}
				}

				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 134;
					this.body();
					}
				}

				}
				break;

			case 3:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.match(XonParser.Ad);
				this.state = 138;
				this.match(XonParser.OpenParen);
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 139;
					this.argument();
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 140;
						this.match(XonParser.Comma);
						this.state = 141;
						this.argument();
						}
						}
						this.state = 146;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 149;
				this.match(XonParser.CloseParen);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 150;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new InfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 153;
				this.match(XonParser.Infix);
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 154;
					this.operator();
					}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 159;
				this.match(XonParser.OpenParen);
				this.state = 160;
				this.argument();
				this.state = 161;
				this.match(XonParser.CloseParen);
				this.state = 162;
				this.type();
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 163;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new PrefixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 166;
				this.match(XonParser.Prefix);
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 167;
					this.operator();
					}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 172;
				this.match(XonParser.OpenParen);
				this.state = 173;
				this.match(XonParser.CloseParen);
				this.state = 174;
				this.type();
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 175;
					this.body();
					}
				}

				}
				break;

			case 6:
				_localctx = new PostfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 178;
				this.match(XonParser.Postfix);
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 179;
					this.operator();
					}
					}
					this.state = 182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 184;
				this.match(XonParser.OpenParen);
				this.state = 185;
				this.match(XonParser.CloseParen);
				this.state = 186;
				this.type();
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 187;
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
		this.enterRule(_localctx, 14, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.match(XonParser.If);
				this.state = 193;
				this.expression(0);
				this.state = 194;
				this.body();
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ElseIf) {
					{
					{
					this.state = 195;
					this.match(XonParser.ElseIf);
					this.state = 196;
					this.expression(0);
					this.state = 197;
					this.body();
					}
					}
					this.state = 203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 204;
					this.match(XonParser.Else);
					this.state = 205;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 208;
				this.match(XonParser.Loop);
				this.state = 224;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 221;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						this.state = 209;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 214;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
						case 1:
							{
							this.state = 210;
							this.match(XonParser.Comma);
							this.state = 212;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 211;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 218;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 216;
							this.match(XonParser.Comma);
							this.state = 217;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 220;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 223;
					this.expression(0);
					}
					break;
				}
				this.state = 226;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 227;
				this.match(XonParser.Break);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 228;
				this.match(XonParser.Return);
				this.state = 230;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 229;
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
				this.state = 232;
				this.match(XonParser.ID);
				this.state = 233;
				this.match(XonParser.Assign);
				this.state = 234;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 235;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 236;
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
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 240;
				this.match(XonParser.ID);
				}
				break;

			case 2:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 241;
				this.match(XonParser.Ad);
				this.state = 242;
				this.match(XonParser.ID);
				}
				break;

			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 243;
				this.literal();
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 245;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 244;
						this.operator();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 247;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 249;
				this.expression(7);
				}
				break;

			case 5:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 251;
				this.match(XonParser.StringFormatStart);
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 252;
						this.expression(0);
						this.state = 253;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 260;
				this.expression(0);
				this.state = 261;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 263;
				this.match(XonParser.OpenBracket);
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 264;
					this.expression(0);
					this.state = 269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 265;
						this.match(XonParser.Comma);
						this.state = 266;
						this.expression(0);
						}
						}
						this.state = 271;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 274;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 7:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 275;
				this.match(XonParser.OpenBrace);
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 276;
					this.match(XonParser.ID);
					this.state = 277;
					this.match(XonParser.Colon);
					this.state = 278;
					this.expression(0);
					this.state = 285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 279;
						this.match(XonParser.Comma);
						this.state = 280;
						this.match(XonParser.ID);
						this.state = 281;
						this.match(XonParser.Colon);
						this.state = 282;
						this.expression(0);
						}
						}
						this.state = 287;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 290;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 291;
				this.match(XonParser.OpenParen);
				this.state = 292;
				this.expression(0);
				this.state = 293;
				this.match(XonParser.CloseParen);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 295;
				this.match(XonParser.OpenParen);
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 296;
					this.match(XonParser.ID);
					this.state = 298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.Hash || _la === XonParser.TypeId) {
						{
						this.state = 297;
						this.type();
						}
					}

					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 300;
						this.match(XonParser.Comma);
						this.state = 301;
						this.match(XonParser.ID);
						this.state = 303;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Hash || _la === XonParser.TypeId) {
							{
							this.state = 302;
							this.type();
							}
						}

						}
						}
						this.state = 309;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 312;
				this.match(XonParser.CloseParen);
				this.state = 313;
				this.match(XonParser.Colon);
				this.state = 314;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 351;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 349;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 317;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 319;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 318;
								this.operator();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 321;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						this.state = 323;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 325;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 326;
						this.match(XonParser.OpenParen);
						this.state = 335;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
							{
							this.state = 327;
							this.fnArg();
							this.state = 332;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 328;
								this.match(XonParser.Comma);
								this.state = 329;
								this.fnArg();
								}
								}
								this.state = 334;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 337;
						this.match(XonParser.CloseParen);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 338;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 339;
						this.match(XonParser.OpenBracket);
						this.state = 340;
						this.expression(0);
						this.state = 341;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 343;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 345;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 344;
								this.operator();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 347;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 353;
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
		this.enterRule(_localctx, 18, XonParser.RULE_literal);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.IntegerLiteral:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.match(XonParser.IntegerLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.CharLiteral:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 357;
				this.match(XonParser.CharLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 358;
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
			this.state = 361;
			_la = this._input.LA(1);
			if (!(((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0))) {
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(XonParser.ID);
			this.state = 364;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(XonParser.Colon);
			this.state = 367;
			this.match(XonParser.LineBreak);
			this.state = 368;
			this.match(XonParser.INDENT);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 371;
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
				case XonParser.BooleanLiteral:
				case XonParser.FloatLiteral:
				case XonParser.IntegerLiteral:
				case XonParser.CharLiteral:
				case XonParser.StringLiteral:
				case XonParser.StringFormatStart:
				case XonParser.ID:
					{
					this.state = 369;
					this.statement();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 370;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0));
			this.state = 375;
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
	public fnArg(): FnArgContext {
		let _localctx: FnArgContext = new FnArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_fnArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 377;
				this.match(XonParser.ID);
				this.state = 378;
				this.match(XonParser.Assign);
				}
				break;
			}
			this.state = 381;
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
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03;\u0182\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02#\n\x02" +
		"\f\x02\x0E\x02&\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"-\n\x03\f\x03\x0E\x030\v\x03\x03\x04\x03\x04\x03\x04\x07\x045\n\x04\f" +
		"\x04\x0E\x048\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04>\n\x04\f\x04" +
		"\x0E\x04A\v\x04\x03\x05\x03\x05\x03\x05\x05\x05F\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06M\n\x06\f\x06\x0E\x06P\v\x06\x03\x06\x03" +
		"\x06\x05\x06T\n\x06\x03\x06\x03\x06\x05\x06X\n\x06\x03\x06\x03\x06\x05" +
		"\x06\\\n\x06\x03\x07\x05\x07_\n\x07\x03\x07\x03\x07\x03\x07\x05\x07d\n" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07k\n\x07\r\x07\x0E" +
		"\x07l\x03\x07\x03\x07\x03\b\x05\br\n\b\x03\b\x03\b\x03\b\x05\bw\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x07\b~\n\b\f\b\x0E\b\x81\v\b\x05\b\x83\n\b" +
		"\x03\b\x03\b\x05\b\x87\n\b\x03\b\x05\b\x8A\n\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x07\b\x91\n\b\f\b\x0E\b\x94\v\b\x05\b\x96\n\b\x03\b\x03\b\x05\b" +
		"\x9A\n\b\x03\b\x03\b\x06\b\x9E\n\b\r\b\x0E\b\x9F\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x05\b\xA7\n\b\x03\b\x03\b\x06\b\xAB\n\b\r\b\x0E\b\xAC\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\xB3\n\b\x03\b\x03\b\x06\b\xB7\n\b\r\b\x0E\b\xB8\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\xBF\n\b\x05\b\xC1\n\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x07\t\xCA\n\t\f\t\x0E\t\xCD\v\t\x03\t\x03\t\x05\t" +
		"\xD1\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD7\n\t\x05\t\xD9\n\t\x03\t\x03" +
		"\t\x05\t\xDD\n\t\x03\t\x05\t\xE0\n\t\x03\t\x05\t\xE3\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\xE9\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xF0\n\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\xF8\n\n\r\n\x0E\n\xF9\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0102\n\n\f\n\x0E\n\u0105\v\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u010E\n\n\f\n\x0E\n\u0111\v\n\x05" +
		"\n\u0113\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\u011E\n\n\f\n\x0E\n\u0121\v\n\x05\n\u0123\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\u012D\n\n\x03\n\x03\n\x03\n\x05\n\u0132" +
		"\n\n\x07\n\u0134\n\n\f\n\x0E\n\u0137\v\n\x05\n\u0139\n\n\x03\n\x03\n\x03" +
		"\n\x05\n\u013E\n\n\x03\n\x03\n\x06\n\u0142\n\n\r\n\x0E\n\u0143\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u014D\n\n\f\n\x0E\n\u0150\v\n\x05" +
		"\n\u0152\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\u015C" +
		"\n\n\r\n\x0E\n\u015D\x07\n\u0160\n\n\f\n\x0E\n\u0163\v\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\u016A\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u0176\n\x0E\r\x0E\x0E\x0E\u0177\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u017E\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x02\x02\x03\x12\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x05\x02" +
		"\x1A\x1A\x1C$&*\x02\u01C6\x02$\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x06" +
		"1\x03\x02\x02\x02\bB\x03\x02\x02\x02\n[\x03\x02\x02\x02\f^\x03\x02\x02" +
		"\x02\x0E\xC0\x03\x02\x02\x02\x10\xEF\x03\x02\x02\x02\x12\u013D\x03\x02" +
		"\x02\x02\x14\u0169\x03\x02\x02\x02\x16\u016B\x03\x02\x02\x02\x18\u016D" +
		"\x03\x02\x02\x02\x1A\u0170\x03\x02\x02\x02\x1C\u017D\x03\x02\x02\x02\x1E" +
		"#\x05\x04\x03\x02\x1F#\x05\x10\t\x02 #\x05\f\x07\x02!#\x07\x12\x02\x02" +
		"\"\x1E\x03\x02\x02\x02\"\x1F\x03\x02\x02\x02\" \x03\x02\x02\x02\"!\x03" +
		"\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x03" +
		"\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x05\x06\x04\x02()\x07\x1C\x02\x02" +
		").\x05\b\x05\x02*+\x07\x19\x02\x02+-\x05\b\x05\x02,*\x03\x02\x02\x02-" +
		"0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\x05\x03\x02\x02" +
		"\x020.\x03\x02\x02\x0216\x076\x02\x0223\x07\x1F\x02\x0235\x076\x02\x02" +
		"42\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x02" +
		"79\x03\x02\x02\x0286\x03\x02\x02\x029:\x07\"\x02\x02:?\x076\x02\x02;<" +
		"\x07\x1F\x02\x02<>\x076\x02\x02=;\x03\x02\x02\x02>A\x03\x02\x02\x02?=" +
		"\x03\x02\x02\x02?@\x03\x02\x02\x02@\x07\x03\x02\x02\x02A?\x03\x02\x02" +
		"\x02BE\x077\x02\x02CD\x07\t\x02\x02DF\x077\x02\x02EC\x03\x02\x02\x02E" +
		"F\x03\x02\x02\x02F\t\x03\x02\x02\x02GS\x077\x02\x02HI\x07&\x02\x02IN\x05" +
		"\n\x06\x02JK\x07\x19\x02\x02KM\x05\n\x06\x02LJ\x03\x02\x02\x02MP\x03\x02" +
		"\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PN\x03\x02" +
		"\x02\x02QR\x07\'\x02\x02RT\x03\x02\x02\x02SH\x03\x02\x02\x02ST\x03\x02" +
		"\x02\x02TW\x03\x02\x02\x02UV\x07%\x02\x02VX\x077\x02\x02WU\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02X\\\x03\x02\x02\x02YZ\x07%\x02\x02Z\\\x077\x02\x02" +
		"[G\x03\x02\x02\x02[Y\x03\x02\x02\x02\\\v\x03\x02\x02\x02]_\x07,\x02\x02" +
		"^]\x03\x02\x02\x02^_\x03\x02\x02\x02_`\x03\x02\x02\x02`c\x077\x02\x02" +
		"ab\x07\b\x02\x02bd\x05\n\x06\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d" +
		"e\x03\x02\x02\x02ef\x07\x1C\x02\x02fg\x07\x12\x02\x02gj\x07\x03\x02\x02" +
		"hk\x05\x0E\b\x02ik\x07\x12\x02\x02jh\x03\x02\x02\x02ji\x03\x02\x02\x02" +
		"kl\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x03\x02\x02\x02" +
		"no\x07\x04\x02\x02o\r\x03\x02\x02\x02pr\x07,\x02\x02qp\x03\x02\x02\x02" +
		"qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x076\x02\x02t\xC1\x05\n\x06\x02" +
		"uw\x07,\x02\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"xy\x076\x02\x02y\x82\x07\x15\x02\x02z\x7F\x05\x18\r\x02{|\x07\x19\x02" +
		"\x02|~\x05\x18\r\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02" +
		"\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02" +
		"\x02\x02\x82z\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02" +
		"\x02\x02\x84\x86\x07\x16\x02\x02\x85\x87\x05\n\x06\x02\x86\x85\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02\x88\x8A\x05\x1A" +
		"\x0E\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\xC1\x03\x02" +
		"\x02\x02\x8B\x8C\x07+\x02\x02\x8C\x95\x07\x15\x02\x02\x8D\x92\x05\x18" +
		"\r\x02\x8E\x8F\x07\x19\x02\x02\x8F\x91\x05\x18\r\x02\x90\x8E\x03\x02\x02" +
		"\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02" +
		"\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x8D\x03\x02\x02" +
		"\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x07\x16\x02" +
		"\x02\x98\x9A\x05\x1A\x0E\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02" +
		"\x02\x9A\xC1\x03\x02\x02\x02\x9B\x9D\x07\x07\x02\x02\x9C\x9E\x05\x16\f" +
		"\x02\x9D\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x9D\x03\x02\x02" +
		"\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x07\x15\x02" +
		"\x02\xA2\xA3\x05\x18\r\x02\xA3\xA4\x07\x16\x02\x02\xA4\xA6\x05\n\x06\x02" +
		"\xA5\xA7\x05\x1A\x0E\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02" +
		"\xA7\xC1\x03\x02\x02\x02\xA8\xAA\x07\x05\x02\x02\xA9\xAB\x05\x16\f\x02" +
		"\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02" +
		"\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x07\x15\x02\x02" +
		"\xAF\xB0\x07\x16\x02\x02\xB0\xB2\x05\n\x06\x02\xB1\xB3\x05\x1A\x0E\x02" +
		"\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xC1\x03\x02\x02\x02" +
		"\xB4\xB6\x07\x06\x02\x02\xB5\xB7\x05\x16\f\x02\xB6\xB5\x03\x02\x02\x02" +
		"\xB7\xB8\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x15\x02\x02\xBB\xBC\x07\x16\x02\x02" +
		"\xBC\xBE\x05\n\x06\x02\xBD\xBF\x05\x1A\x0E\x02\xBE\xBD\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0q\x03\x02\x02\x02" +
		"\xC0v\x03\x02\x02\x02\xC0\x8B\x03\x02\x02\x02\xC0\x9B\x03\x02\x02\x02" +
		"\xC0\xA8\x03\x02\x02\x02\xC0\xB4\x03\x02\x02\x02\xC1\x0F\x03\x02\x02\x02" +
		"\xC2\xC3\x07\n\x02\x02\xC3\xC4\x05\x12\n\x02\xC4\xCB\x05\x1A\x0E\x02\xC5" +
		"\xC6\x07\f\x02\x02\xC6\xC7\x05\x12\n\x02\xC7\xC8\x05\x1A\x0E\x02\xC8\xCA" +
		"\x03\x02\x02\x02\xC9\xC5\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9" +
		"\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xD0\x03\x02\x02\x02\xCD\xCB" +
		"\x03\x02\x02\x02\xCE\xCF\x07\v\x02\x02\xCF\xD1\x05\x1A\x0E\x02\xD0\xCE" +
		"\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xF0\x03\x02\x02\x02\xD2\xE2" +
		"\x07\r\x02\x02\xD3\xD8\x076\x02\x02\xD4\xD6\x07\x19\x02\x02\xD5\xD7\x07" +
		"6\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03" +
		"\x02\x02\x02\xD8\xD4\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDC\x03" +
		"\x02\x02\x02\xDA\xDB\x07\x19\x02\x02\xDB\xDD\x076\x02\x02\xDC\xDA\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE0\x07" +
		"\x0E\x02\x02\xDF\xD3\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03" +
		"\x02\x02\x02\xE1\xE3\x05\x12\n\x02\xE2\xDF\x03\x02\x02\x02\xE2\xE3\x03" +
		"\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xF0\x05\x1A\x0E\x02\xE5\xF0\x07" +
		"\x0F\x02\x02\xE6\xE8\x07\x10\x02\x02\xE7\xE9\x05\x12\n\x02\xE8\xE7\x03" +
		"\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xF0\x03\x02\x02\x02\xEA\xEB\x07" +
		"6\x02\x02\xEB\xEC\x07\x1A\x02\x02\xEC\xF0\x05\x12\n\x02\xED\xF0\x05\x12" +
		"\n\x02\xEE\xF0\x07\x11\x02\x02\xEF\xC2\x03\x02\x02\x02\xEF\xD2\x03\x02" +
		"\x02\x02\xEF\xE5\x03\x02\x02\x02\xEF\xE6\x03\x02\x02\x02\xEF\xEA\x03\x02" +
		"\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02\xF0\x11\x03\x02" +
		"\x02\x02\xF1\xF2\b\n\x01\x02\xF2\u013E\x076\x02\x02\xF3\xF4\x07+\x02\x02" +
		"\xF4\u013E\x076\x02\x02\xF5\u013E\x05\x14\v\x02\xF6\xF8\x05\x16\f\x02" +
		"\xF7\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02" +
		"\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x05\x12\n\t\xFC" +
		"\u013E\x03\x02\x02\x02\xFD\u0103\x073\x02\x02\xFE\xFF\x05\x12\n\x02\xFF" +
		"\u0100\x074\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\xFE\x03\x02\x02" +
		"\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104" +
		"\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02" +
		"\u0106\u0107\x05\x12\n\x02\u0107\u0108\x075\x02\x02\u0108\u013E\x03\x02" +
		"\x02\x02\u0109\u0112\x07\x13\x02\x02\u010A\u010F\x05\x12\n\x02\u010B\u010C" +
		"\x07\x19\x02\x02\u010C\u010E\x05\x12\n\x02\u010D\u010B\x03\x02\x02\x02" +
		"\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03" +
		"\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112" +
		"\u010A\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x03\x02" +
		"\x02\x02\u0114\u013E\x07\x14\x02\x02\u0115\u0122\x07\x17\x02\x02\u0116" +
		"\u0117\x076\x02\x02\u0117\u0118\x07\x1C\x02\x02\u0118\u011F\x05\x12\n" +
		"\x02\u0119\u011A\x07\x19\x02\x02\u011A\u011B\x076\x02\x02\u011B\u011C" +
		"\x07\x1C\x02\x02\u011C\u011E\x05\x12\n\x02\u011D\u0119\x03\x02\x02\x02" +
		"\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03" +
		"\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122" +
		"\u0116\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02" +
		"\x02\x02\u0124\u013E\x07\x18\x02\x02\u0125\u0126\x07\x15\x02\x02\u0126" +
		"\u0127\x05\x12\n\x02\u0127\u0128\x07\x16\x02\x02\u0128\u013E\x03\x02\x02" +
		"\x02\u0129\u0138\x07\x15\x02\x02\u012A\u012C\x076\x02\x02\u012B\u012D" +
		"\x05\n\x06\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02" +
		"\u012D\u0135\x03\x02\x02\x02\u012E\u012F\x07\x19\x02\x02\u012F\u0131\x07" +
		"6\x02\x02\u0130\u0132\x05\n\x06\x02\u0131\u0130\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133\u012E\x03\x02" +
		"\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02" +
		"\x02\x02\u0138\u012A\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\u013B\x07\x16\x02\x02\u013B\u013C\x07\x1C" +
		"\x02\x02\u013C\u013E\x05\x12\n\x03\u013D\xF1\x03\x02\x02\x02\u013D\xF3" +
		"\x03\x02\x02\x02\u013D\xF5\x03\x02\x02\x02\u013D\xF7\x03\x02\x02\x02\u013D" +
		"\xFD\x03\x02\x02\x02\u013D\u0109\x03\x02\x02\x02\u013D\u0115\x03\x02\x02" +
		"\x02\u013D\u0125\x03\x02\x02\x02\u013D\u0129\x03\x02\x02\x02\u013E\u0161" +
		"\x03\x02\x02\x02\u013F\u0141\f\n\x02\x02\u0140\u0142\x05\x16\f\x02\u0141" +
		"\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0141\x03\x02" +
		"\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
		"\u0146\x05\x12\n\v\u0146\u0160\x03\x02\x02\x02\u0147\u0148\f\f\x02\x02" +
		"\u0148\u0151\x07\x15\x02\x02\u0149\u014E\x05\x1C\x0F\x02\u014A\u014B\x07" +
		"\x19\x02\x02\u014B\u014D\x05\x1C\x0F\x02\u014C\u014A\x03\x02\x02\x02\u014D" +
		"\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02" +
		"\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0149\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0160\x07\x16\x02\x02\u0154\u0155\f\v\x02\x02\u0155\u0156" +
		"\x07\x13\x02\x02\u0156\u0157\x05\x12\n\x02\u0157\u0158\x07\x14\x02\x02" +
		"\u0158\u0160\x03\x02\x02\x02\u0159\u015B\f\b\x02\x02\u015A\u015C\x05\x16" +
		"\f\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015B" +
		"\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02" +
		"\u015F\u013F\x03\x02\x02\x02\u015F\u0147\x03\x02\x02\x02\u015F\u0154\x03" +
		"\x02\x02\x02\u015F\u0159\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161" +
		"\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\x13\x03\x02\x02" +
		"\x02\u0163\u0161\x03\x02\x02\x02\u0164\u016A\x07.\x02\x02\u0165\u016A" +
		"\x070\x02\x02\u0166\u016A\x07/\x02\x02\u0167\u016A\x071\x02\x02\u0168" +
		"\u016A\x072\x02\x02\u0169\u0164\x03\x02\x02\x02\u0169\u0165\x03\x02\x02" +
		"\x02\u0169\u0166\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u0168" +
		"\x03\x02\x02\x02\u016A\x15\x03\x02\x02\x02\u016B\u016C\t\x02\x02\x02\u016C" +
		"\x17\x03\x02\x02\x02\u016D\u016E\x076\x02\x02\u016E\u016F\x05\n\x06\x02" +
		"\u016F\x19\x03\x02\x02\x02\u0170\u0171\x07\x1C\x02\x02\u0171\u0172\x07" +
		"\x12\x02\x02\u0172\u0175\x07\x03\x02\x02\u0173\u0176\x05\x10\t\x02\u0174" +
		"\u0176\x07\x12\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0174\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177" +
		"\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x07\x04" +
		"\x02\x02\u017A\x1B\x03\x02\x02\x02\u017B\u017C\x076\x02\x02\u017C\u017E" +
		"\x07\x1A\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02" +
		"\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x05\x12\n\x02\u0180\x1D\x03\x02" +
		"\x02\x02>\"$.6?ENSW[^cjlqv\x7F\x82\x86\x89\x92\x95\x99\x9F\xA6\xAC\xB2" +
		"\xB8\xBE\xC0\xCB\xD0\xD6\xD8\xDC\xDF\xE2\xE8\xEF\xF9\u0103\u010F\u0112" +
		"\u011F\u0122\u012C\u0131\u0135\u0138\u013D\u0143\u014E\u0151\u015D\u015F" +
		"\u0161\u0169\u0175\u0177\u017D";
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
	public TypeId(): TerminalNode[];
	public TypeId(i: number): TerminalNode;
	public TypeId(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.TypeId);
		} else {
			return this.getToken(XonParser.TypeId, i);
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
	public TypeId(): TerminalNode[];
	public TypeId(i: number): TerminalNode;
	public TypeId(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.TypeId);
		} else {
			return this.getToken(XonParser.TypeId, i);
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
	public TypeId(): TerminalNode { return this.getToken(XonParser.TypeId, 0); }
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
	public Underscore(): TerminalNode | undefined { return this.tryGetToken(XonParser.Underscore, 0); }
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
	public Underscore(): TerminalNode | undefined { return this.tryGetToken(XonParser.Underscore, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public Underscore(): TerminalNode | undefined { return this.tryGetToken(XonParser.Underscore, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
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
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
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
export class InfixOperatorMemberContext extends MemberContext {
	public Infix(): TerminalNode { return this.getToken(XonParser.Infix, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public argument(): ArgumentContext {
		return this.getRuleContext(0, ArgumentContext);
	}
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
export class PrefixOperatorMemberContext extends MemberContext {
	public Prefix(): TerminalNode { return this.getToken(XonParser.Prefix, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
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
export class PostfixOperatorMemberContext extends MemberContext {
	public Postfix(): TerminalNode { return this.getToken(XonParser.Postfix, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
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
	public fnArg(): FnArgContext[];
	public fnArg(i: number): FnArgContext;
	public fnArg(i?: number): FnArgContext | FnArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FnArgContext);
		} else {
			return this.getRuleContext(i, FnArgContext);
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
export class PrefixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class PostfixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
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


export class ArgumentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
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


export class FnArgContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_fnArg; }
}


