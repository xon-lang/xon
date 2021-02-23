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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.TypeId - 32)))) !== 0)) {
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
			this.state = 91;
			this.match(XonParser.TypeId);
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
				case XonParser.Prefix:
				case XonParser.Postfix:
				case XonParser.Infix:
				case XonParser.Ad:
				case XonParser.Underscore:
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.Prefix) | (1 << XonParser.Postfix) | (1 << XonParser.Infix) | (1 << XonParser.LineBreak))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.Ad - 41)) | (1 << (XonParser.Underscore - 41)) | (1 << (XonParser.ID - 41)))) !== 0));
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
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Underscore) {
					{
					this.state = 107;
					this.match(XonParser.Underscore);
					}
				}

				this.state = 110;
				this.match(XonParser.ID);
				this.state = 111;
				this.type();
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Underscore) {
					{
					this.state = 112;
					this.match(XonParser.Underscore);
					}
				}

				this.state = 115;
				this.match(XonParser.ID);
				this.state = 116;
				this.match(XonParser.OpenParen);
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 117;
					this.argument();
					this.state = 122;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 118;
						this.match(XonParser.Comma);
						this.state = 119;
						this.argument();
						}
						}
						this.state = 124;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 127;
				this.match(XonParser.CloseParen);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Hash || _la === XonParser.TypeId) {
					{
					this.state = 128;
					this.type();
					}
				}

				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 131;
					this.body();
					}
				}

				}
				break;

			case 3:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 134;
				this.match(XonParser.Ad);
				this.state = 135;
				this.match(XonParser.OpenParen);
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 136;
					this.argument();
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 137;
						this.match(XonParser.Comma);
						this.state = 138;
						this.argument();
						}
						}
						this.state = 143;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 146;
				this.match(XonParser.CloseParen);
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
				_localctx = new InfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 150;
				this.match(XonParser.Infix);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 151;
					this.operator();
					}
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 156;
				this.match(XonParser.OpenParen);
				this.state = 157;
				this.argument();
				this.state = 158;
				this.match(XonParser.CloseParen);
				this.state = 159;
				this.type();
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 160;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new PrefixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 163;
				this.match(XonParser.Prefix);
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 164;
					this.operator();
					}
					}
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 169;
				this.match(XonParser.OpenParen);
				this.state = 170;
				this.match(XonParser.CloseParen);
				this.state = 171;
				this.type();
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 172;
					this.body();
					}
				}

				}
				break;

			case 6:
				_localctx = new PostfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 175;
				this.match(XonParser.Postfix);
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 176;
					this.operator();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (XonParser.Assign - 24)) | (1 << (XonParser.Colon - 24)) | (1 << (XonParser.Dot - 24)) | (1 << (XonParser.Plus - 24)) | (1 << (XonParser.Minus - 24)) | (1 << (XonParser.Exclamation - 24)) | (1 << (XonParser.Asterisk - 24)) | (1 << (XonParser.Slash - 24)) | (1 << (XonParser.Modulo - 24)) | (1 << (XonParser.Caret - 24)) | (1 << (XonParser.LessThan - 24)) | (1 << (XonParser.MoreThan - 24)) | (1 << (XonParser.Ampersand - 24)) | (1 << (XonParser.Pipe - 24)) | (1 << (XonParser.Tilde - 24)))) !== 0));
				this.state = 181;
				this.match(XonParser.OpenParen);
				this.state = 182;
				this.match(XonParser.CloseParen);
				this.state = 183;
				this.type();
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 184;
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
			this.state = 234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 189;
				this.match(XonParser.If);
				this.state = 190;
				this.expression(0);
				this.state = 191;
				this.body();
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ElseIf) {
					{
					{
					this.state = 192;
					this.match(XonParser.ElseIf);
					this.state = 193;
					this.expression(0);
					this.state = 194;
					this.body();
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 201;
					this.match(XonParser.Else);
					this.state = 202;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 205;
				this.match(XonParser.Loop);
				this.state = 221;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 218;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						this.state = 206;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 211;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
						case 1:
							{
							this.state = 207;
							this.match(XonParser.Comma);
							this.state = 209;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 208;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 215;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 213;
							this.match(XonParser.Comma);
							this.state = 214;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 217;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 220;
					this.expression(0);
					}
					break;
				}
				this.state = 223;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.match(XonParser.Break);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 225;
				this.match(XonParser.Return);
				this.state = 227;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 226;
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
				this.state = 229;
				this.match(XonParser.ID);
				this.state = 230;
				this.match(XonParser.Assign);
				this.state = 231;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 232;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 233;
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
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 237;
				this.match(XonParser.ID);
				}
				break;

			case 2:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 238;
				this.match(XonParser.Ad);
				this.state = 239;
				this.match(XonParser.ID);
				}
				break;

			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 240;
				this.literal();
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 242;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 241;
						this.operator();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 244;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 246;
				this.expression(7);
				}
				break;

			case 5:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 248;
				this.match(XonParser.StringFormatStart);
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 249;
						this.expression(0);
						this.state = 250;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 256;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 257;
				this.expression(0);
				this.state = 258;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 260;
				this.match(XonParser.OpenBracket);
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
					{
					this.state = 261;
					this.expression(0);
					this.state = 266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 262;
						this.match(XonParser.Comma);
						this.state = 263;
						this.expression(0);
						}
						}
						this.state = 268;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 271;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 7:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 272;
				this.match(XonParser.OpenBrace);
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 273;
					this.match(XonParser.ID);
					this.state = 274;
					this.match(XonParser.Colon);
					this.state = 275;
					this.expression(0);
					this.state = 282;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 276;
						this.match(XonParser.Comma);
						this.state = 277;
						this.match(XonParser.ID);
						this.state = 278;
						this.match(XonParser.Colon);
						this.state = 279;
						this.expression(0);
						}
						}
						this.state = 284;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 287;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 288;
				this.match(XonParser.OpenParen);
				this.state = 289;
				this.expression(0);
				this.state = 290;
				this.match(XonParser.CloseParen);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.match(XonParser.OpenParen);
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 293;
					this.match(XonParser.ID);
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.Hash || _la === XonParser.TypeId) {
						{
						this.state = 294;
						this.type();
						}
					}

					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 297;
						this.match(XonParser.Comma);
						this.state = 298;
						this.match(XonParser.ID);
						this.state = 300;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Hash || _la === XonParser.TypeId) {
							{
							this.state = 299;
							this.type();
							}
						}

						}
						}
						this.state = 306;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 309;
				this.match(XonParser.CloseParen);
				this.state = 310;
				this.match(XonParser.Colon);
				this.state = 311;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 346;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 314;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 316;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 315;
								this.operator();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 318;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						this.state = 320;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 322;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 323;
						this.match(XonParser.OpenParen);
						this.state = 332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0)) {
							{
							this.state = 324;
							this.fnArg();
							this.state = 329;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 325;
								this.match(XonParser.Comma);
								this.state = 326;
								this.fnArg();
								}
								}
								this.state = 331;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 334;
						this.match(XonParser.CloseParen);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 335;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 336;
						this.match(XonParser.OpenBracket);
						this.state = 337;
						this.expression(0);
						this.state = 338;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 340;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 342;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 341;
								this.operator();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 344;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.IntegerLiteral:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 352;
				this.match(XonParser.IntegerLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 353;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.CharLiteral:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 354;
				this.match(XonParser.CharLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 355;
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
			this.state = 358;
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
			this.state = 360;
			this.match(XonParser.ID);
			this.state = 361;
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
			this.state = 363;
			this.match(XonParser.Colon);
			this.state = 364;
			this.match(XonParser.LineBreak);
			this.state = 365;
			this.match(XonParser.INDENT);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 368;
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
					this.state = 366;
					this.statement();
					}
					break;
				case XonParser.LineBreak:
					{
					this.state = 367;
					this.match(XonParser.LineBreak);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Assign) | (1 << XonParser.Colon) | (1 << XonParser.Dot) | (1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation) | (1 << XonParser.Asterisk))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Slash - 32)) | (1 << (XonParser.Modulo - 32)) | (1 << (XonParser.Caret - 32)) | (1 << (XonParser.LessThan - 32)) | (1 << (XonParser.MoreThan - 32)) | (1 << (XonParser.Ampersand - 32)) | (1 << (XonParser.Pipe - 32)) | (1 << (XonParser.Tilde - 32)) | (1 << (XonParser.Ad - 32)) | (1 << (XonParser.BooleanLiteral - 32)) | (1 << (XonParser.FloatLiteral - 32)) | (1 << (XonParser.IntegerLiteral - 32)) | (1 << (XonParser.CharLiteral - 32)) | (1 << (XonParser.StringLiteral - 32)) | (1 << (XonParser.StringFormatStart - 32)) | (1 << (XonParser.ID - 32)))) !== 0));
			this.state = 372;
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
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 374;
				this.match(XonParser.ID);
				this.state = 375;
				this.match(XonParser.Assign);
				}
				break;
			}
			this.state = 378;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03;\u017F\x04\x02" +
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
		"\b\x05\bo\n\b\x03\b\x03\b\x03\b\x05\bt\n\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x07\b{\n\b\f\b\x0E\b~\v\b\x05\b\x80\n\b\x03\b\x03\b\x05\b\x84\n\b\x03" +
		"\b\x05\b\x87\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x8E\n\b\f\b\x0E\b" +
		"\x91\v\b\x05\b\x93\n\b\x03\b\x03\b\x05\b\x97\n\b\x03\b\x03\b\x06\b\x9B" +
		"\n\b\r\b\x0E\b\x9C\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA4\n\b\x03\b\x03" +
		"\b\x06\b\xA8\n\b\r\b\x0E\b\xA9\x03\b\x03\b\x03\b\x03\b\x05\b\xB0\n\b\x03" +
		"\b\x03\b\x06\b\xB4\n\b\r\b\x0E\b\xB5\x03\b\x03\b\x03\b\x03\b\x05\b\xBC" +
		"\n\b\x05\b\xBE\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xC7" +
		"\n\t\f\t\x0E\t\xCA\v\t\x03\t\x03\t\x05\t\xCE\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\xD4\n\t\x05\t\xD6\n\t\x03\t\x03\t\x05\t\xDA\n\t\x03\t\x05\t\xDD" +
		"\n\t\x03\t\x05\t\xE0\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\xE6\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\xED\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x06\n\xF5\n\n\r\n\x0E\n\xF6\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n" +
		"\xFF\n\n\f\n\x0E\n\u0102\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x07\n\u010B\n\n\f\n\x0E\n\u010E\v\n\x05\n\u0110\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u011B\n\n\f\n\x0E\n\u011E\v" +
		"\n\x05\n\u0120\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u012A\n\n\x03\n\x03\n\x03\n\x05\n\u012F\n\n\x07\n\u0131\n\n\f\n\x0E" +
		"\n\u0134\v\n\x05\n\u0136\n\n\x03\n\x03\n\x03\n\x05\n\u013B\n\n\x03\n\x03" +
		"\n\x06\n\u013F\n\n\r\n\x0E\n\u0140\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x07\n\u014A\n\n\f\n\x0E\n\u014D\v\n\x05\n\u014F\n\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\u0159\n\n\r\n\x0E\n\u015A\x07" +
		"\n\u015D\n\n\f\n\x0E\n\u0160\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0167" +
		"\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x06\x0E\u0173\n\x0E\r\x0E\x0E\x0E\u0174\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x05\x0F\u017B\n\x0F\x03\x0F\x03\x0F\x03\x0F\x02\x02\x03\x12\x10\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x05\x02\x1A\x1A\x1C$&*\x02\u01C2" +
		"\x02$\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x061\x03\x02\x02\x02\bB\x03" +
		"\x02\x02\x02\n[\x03\x02\x02\x02\f]\x03\x02\x02\x02\x0E\xBD\x03\x02\x02" +
		"\x02\x10\xEC\x03\x02\x02\x02\x12\u013A\x03\x02\x02\x02\x14\u0166\x03\x02" +
		"\x02\x02\x16\u0168\x03\x02\x02\x02\x18\u016A\x03\x02\x02\x02\x1A\u016D" +
		"\x03\x02\x02\x02\x1C\u017A\x03\x02\x02\x02\x1E#\x05\x04\x03\x02\x1F#\x05" +
		"\x10\t\x02 #\x05\f\x07\x02!#\x07\x12\x02\x02\"\x1E\x03\x02\x02\x02\"\x1F" +
		"\x03\x02\x02\x02\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02" +
		"$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x03\x03\x02\x02\x02&$\x03\x02\x02" +
		"\x02\'(\x05\x06\x04\x02()\x07\x1C\x02\x02).\x05\b\x05\x02*+\x07\x19\x02" +
		"\x02+-\x05\b\x05\x02,*\x03\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02" +
		"\x02./\x03\x02\x02\x02/\x05\x03\x02\x02\x020.\x03\x02\x02\x0216\x076\x02" +
		"\x0223\x07\x1F\x02\x0235\x076\x02\x0242\x03\x02\x02\x0258\x03\x02\x02" +
		"\x0264\x03\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02" +
		"\x029:\x07\"\x02\x02:?\x076\x02\x02;<\x07\x1F\x02\x02<>\x076\x02\x02=" +
		";\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02" +
		"@\x07\x03\x02\x02\x02A?\x03\x02\x02\x02BE\x077\x02\x02CD\x07\t\x02\x02" +
		"DF\x077\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02F\t\x03\x02\x02\x02" +
		"GS\x077\x02\x02HI\x07&\x02\x02IN\x05\n\x06\x02JK\x07\x19\x02\x02KM\x05" +
		"\n\x06\x02LJ\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03" +
		"\x02\x02\x02OQ\x03\x02\x02\x02PN\x03\x02\x02\x02QR\x07\'\x02\x02RT\x03" +
		"\x02\x02\x02SH\x03\x02\x02\x02ST\x03\x02\x02\x02TW\x03\x02\x02\x02UV\x07" +
		"%\x02\x02VX\x077\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\\\x03\x02" +
		"\x02\x02YZ\x07%\x02\x02Z\\\x077\x02\x02[G\x03\x02\x02\x02[Y\x03\x02\x02" +
		"\x02\\\v\x03\x02\x02\x02]`\x077\x02\x02^_\x07\b\x02\x02_a\x05\n\x06\x02" +
		"`^\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07\x1C\x02\x02" +
		"cd\x07\x12\x02\x02dg\x07\x03\x02\x02eh\x05\x0E\b\x02fh\x07\x12\x02\x02" +
		"ge\x03\x02\x02\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02" +
		"ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x07\x04\x02\x02l\r\x03\x02\x02" +
		"\x02mo\x07,\x02\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02op\x03\x02\x02" +
		"\x02pq\x076\x02\x02q\xBE\x05\n\x06\x02rt\x07,\x02\x02sr\x03\x02\x02\x02" +
		"st\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x076\x02\x02v\x7F\x07\x15\x02\x02" +
		"w|\x05\x18\r\x02xy\x07\x19\x02\x02y{\x05\x18\r\x02zx\x03\x02\x02\x02{" +
		"~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x80\x03\x02\x02" +
		"\x02~|\x03\x02\x02\x02\x7Fw\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80" +
		"\x81\x03\x02\x02\x02\x81\x83\x07\x16\x02\x02\x82\x84\x05\n\x06\x02\x83" +
		"\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85" +
		"\x87\x05\x1A\x0E\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87" +
		"\xBE\x03\x02\x02\x02\x88\x89\x07+\x02\x02\x89\x92\x07\x15\x02\x02\x8A" +
		"\x8F\x05\x18\r\x02\x8B\x8C\x07\x19\x02\x02\x8C\x8E\x05\x18\r\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90" +
		"\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x8A" +
		"\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x96" +
		"\x07\x16\x02\x02\x95\x97\x05\x1A\x0E\x02\x96\x95\x03\x02\x02\x02\x96\x97" +
		"\x03\x02\x02\x02\x97\xBE\x03\x02\x02\x02\x98\x9A\x07\x07\x02\x02\x99\x9B" +
		"\x05\x16\f\x02\x9A\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9A" +
		"\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F" +
		"\x07\x15\x02\x02\x9F\xA0\x05\x18\r\x02\xA0\xA1\x07\x16\x02\x02\xA1\xA3" +
		"\x05\n\x06\x02\xA2\xA4\x05\x1A\x0E\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4" +
		"\x03\x02\x02\x02\xA4\xBE\x03\x02\x02\x02\xA5\xA7\x07\x05\x02\x02\xA6\xA8" +
		"\x05\x16\f\x02\xA7\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xA7" +
		"\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC" +
		"\x07\x15\x02\x02\xAC\xAD\x07\x16\x02\x02\xAD\xAF\x05\n\x06\x02\xAE\xB0" +
		"\x05\x1A\x0E\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xBE" +
		"\x03\x02\x02\x02\xB1\xB3\x07\x06\x02\x02\xB2\xB4\x05\x16\f\x02\xB3\xB2" +
		"\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6" +
		"\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07\x15\x02\x02\xB8\xB9" +
		"\x07\x16\x02\x02\xB9\xBB\x05\n\x06\x02\xBA\xBC\x05\x1A\x0E\x02\xBB\xBA" +
		"\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBDn" +
		"\x03\x02\x02\x02\xBDs\x03\x02\x02\x02\xBD\x88\x03\x02\x02\x02\xBD\x98" +
		"\x03\x02\x02\x02\xBD\xA5\x03\x02\x02\x02\xBD\xB1\x03\x02\x02\x02\xBE\x0F" +
		"\x03\x02\x02\x02\xBF\xC0\x07\n\x02\x02\xC0\xC1\x05\x12\n\x02\xC1\xC8\x05" +
		"\x1A\x0E\x02\xC2\xC3\x07\f\x02\x02\xC3\xC4\x05\x12\n\x02\xC4\xC5\x05\x1A" +
		"\x0E\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC7\xCA\x03\x02" +
		"\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCD\x03\x02" +
		"\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x07\v\x02\x02\xCC\xCE\x05\x1A" +
		"\x0E\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xED\x03\x02" +
		"\x02\x02\xCF\xDF\x07\r\x02\x02\xD0\xD5\x076\x02\x02\xD1\xD3\x07\x19\x02" +
		"\x02\xD2\xD4\x076\x02\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD1\x03\x02\x02\x02\xD5\xD6\x03\x02\x02" +
		"\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD8\x07\x19\x02\x02\xD8\xDA\x076\x02" +
		"\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02" +
		"\x02\xDB\xDD\x07\x0E\x02\x02\xDC\xD0\x03\x02\x02\x02\xDC\xDD\x03\x02\x02" +
		"\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE0\x05\x12\n\x02\xDF\xDC\x03\x02\x02" +
		"\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xED\x05\x1A\x0E" +
		"\x02\xE2\xED\x07\x0F\x02\x02\xE3\xE5\x07\x10\x02\x02\xE4\xE6\x05\x12\n" +
		"\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xED\x03\x02\x02" +
		"\x02\xE7\xE8\x076\x02\x02\xE8\xE9\x07\x1A\x02\x02\xE9\xED\x05\x12\n\x02" +
		"\xEA\xED\x05\x12\n\x02\xEB\xED\x07\x11\x02\x02\xEC\xBF\x03\x02\x02\x02" +
		"\xEC\xCF\x03\x02\x02\x02\xEC\xE2\x03\x02\x02\x02\xEC\xE3\x03\x02\x02\x02" +
		"\xEC\xE7\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02" +
		"\xED\x11\x03\x02\x02\x02\xEE\xEF\b\n\x01\x02\xEF\u013B\x076\x02\x02\xF0" +
		"\xF1\x07+\x02\x02\xF1\u013B\x076\x02\x02\xF2\u013B\x05\x14\v\x02\xF3\xF5" +
		"\x05\x16\f\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF4" +
		"\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9" +
		"\x05\x12\n\t\xF9\u013B\x03\x02\x02\x02\xFA\u0100\x073\x02\x02\xFB\xFC" +
		"\x05\x12\n\x02\xFC\xFD\x074\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xFB\x03" +
		"\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100" +
		"\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\u0100\x03\x02" +
		"\x02\x02\u0103\u0104\x05\x12\n\x02\u0104\u0105\x075\x02\x02\u0105\u013B" +
		"\x03\x02\x02\x02\u0106\u010F\x07\x13\x02\x02\u0107\u010C\x05\x12\n\x02" +
		"\u0108\u0109\x07\x19\x02\x02\u0109\u010B\x05\x12\n\x02\u010A\u0108\x03" +
		"\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02" +
		"\x02\x02\u010F\u0107\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u013B\x07\x14\x02\x02\u0112\u011F\x07\x17" +
		"\x02\x02\u0113\u0114\x076\x02\x02\u0114\u0115\x07\x1C\x02\x02\u0115\u011C" +
		"\x05\x12\n\x02\u0116\u0117\x07\x19\x02\x02\u0117\u0118\x076\x02\x02\u0118" +
		"\u0119\x07\x1C\x02\x02\u0119\u011B\x05\x12\n\x02\u011A\u0116\x03\x02\x02" +
		"\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D" +
		"\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02" +
		"\u011F\u0113\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03" +
		"\x02\x02\x02\u0121\u013B\x07\x18\x02\x02\u0122\u0123\x07\x15\x02\x02\u0123" +
		"\u0124\x05\x12\n\x02\u0124\u0125\x07\x16\x02\x02\u0125\u013B\x03\x02\x02" +
		"\x02\u0126\u0135\x07\x15\x02\x02\u0127\u0129\x076\x02\x02\u0128\u012A" +
		"\x05\n\x06\x02\u0129\u0128\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02" +
		"\u012A\u0132\x03\x02\x02\x02\u012B\u012C\x07\x19\x02\x02\u012C\u012E\x07" +
		"6\x02\x02\u012D\u012F\x05\n\x06\x02\u012E\u012D\x03\x02\x02\x02\u012E" +
		"\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012B\x03\x02" +
		"\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0135\u0127\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136" +
		"\u0137\x03\x02\x02\x02\u0137\u0138\x07\x16\x02\x02\u0138\u0139\x07\x1C" +
		"\x02\x02\u0139\u013B\x05\x12\n\x03\u013A\xEE\x03\x02\x02\x02\u013A\xF0" +
		"\x03\x02\x02\x02\u013A\xF2\x03\x02\x02\x02\u013A\xF4\x03\x02\x02\x02\u013A" +
		"\xFA\x03\x02\x02\x02\u013A\u0106\x03\x02\x02\x02\u013A\u0112\x03\x02\x02" +
		"\x02\u013A\u0122\x03\x02\x02\x02\u013A\u0126\x03\x02\x02\x02\u013B\u015E" +
		"\x03\x02\x02\x02\u013C\u013E\f\n\x02\x02\u013D\u013F\x05\x16\f\x02\u013E" +
		"\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u013E\x03\x02" +
		"\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
		"\u0143\x05\x12\n\v\u0143\u015D\x03\x02\x02\x02\u0144\u0145\f\f\x02\x02" +
		"\u0145\u014E\x07\x15\x02\x02\u0146\u014B\x05\x1C\x0F\x02\u0147\u0148\x07" +
		"\x19\x02\x02\u0148\u014A\x05\x1C\x0F\x02\u0149\u0147\x03\x02\x02\x02\u014A" +
		"\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02" +
		"\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E" +
		"\u0146\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02" +
		"\x02\x02\u0150\u015D\x07\x16\x02\x02\u0151\u0152\f\v\x02\x02\u0152\u0153" +
		"\x07\x13\x02\x02\u0153\u0154\x05\x12\n\x02\u0154\u0155\x07\x14\x02\x02" +
		"\u0155\u015D\x03\x02\x02\x02\u0156\u0158\f\b\x02\x02\u0157\u0159\x05\x16" +
		"\f\x02\u0158\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u0158" +
		"\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015D\x03\x02\x02\x02" +
		"\u015C\u013C\x03\x02\x02\x02\u015C\u0144\x03\x02\x02\x02\u015C\u0151\x03" +
		"\x02\x02\x02\u015C\u0156\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E" +
		"\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\x13\x03\x02\x02" +
		"\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0167\x07.\x02\x02\u0162\u0167" +
		"\x070\x02\x02\u0163\u0167\x07/\x02\x02\u0164\u0167\x071\x02\x02\u0165" +
		"\u0167\x072\x02\x02\u0166\u0161\x03\x02\x02\x02\u0166\u0162\x03\x02\x02" +
		"\x02\u0166\u0163\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0165" +
		"\x03\x02\x02\x02\u0167\x15\x03\x02\x02\x02\u0168\u0169\t\x02\x02\x02\u0169" +
		"\x17\x03\x02\x02\x02\u016A\u016B\x076\x02\x02\u016B\u016C\x05\n\x06\x02" +
		"\u016C\x19\x03\x02\x02\x02\u016D\u016E\x07\x1C\x02\x02\u016E\u016F\x07" +
		"\x12\x02\x02\u016F\u0172\x07\x03\x02\x02\u0170\u0173\x05\x10\t\x02\u0171" +
		"\u0173\x07\x12\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0171\x03\x02" +
		"\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174" +
		"\u0175\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x07\x04" +
		"\x02\x02\u0177\x1B\x03\x02\x02\x02\u0178\u0179\x076\x02\x02\u0179\u017B" +
		"\x07\x1A\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02" +
		"\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x05\x12\n\x02\u017D\x1D\x03\x02" +
		"\x02\x02=\"$.6?ENSW[`gins|\x7F\x83\x86\x8F\x92\x96\x9C\xA3\xA9\xAF\xB5" +
		"\xBB\xBD\xC8\xCD\xD3\xD5\xD9\xDC\xDF\xE5\xEC\xF6\u0100\u010C\u010F\u011C" +
		"\u011F\u0129\u012E\u0132\u0135\u013A\u0140\u014B\u014E\u015A\u015C\u015E" +
		"\u0166\u0172\u0174\u017A";
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


