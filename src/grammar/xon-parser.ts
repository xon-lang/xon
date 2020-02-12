// Generated from XonParser.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly MultiLineComment = 1;
	public static readonly SingleLineComment = 2;
	public static readonly If = 3;
	public static readonly Else = 4;
	public static readonly Loop = 5;
	public static readonly In = 6;
	public static readonly Continue = 7;
	public static readonly Break = 8;
	public static readonly Return = 9;
	public static readonly As = 10;
	public static readonly Var = 11;
	public static readonly BitAnd = 12;
	public static readonly BitOr = 13;
	public static readonly BitXor = 14;
	public static readonly RightShiftArithmetic = 15;
	public static readonly LeftShiftArithmetic = 16;
	public static readonly RightShiftLogical = 17;
	public static readonly OpenBracket = 18;
	public static readonly CloseBracket = 19;
	public static readonly OpenParen = 20;
	public static readonly CloseParen = 21;
	public static readonly OpenBrace = 22;
	public static readonly CloseBrace = 23;
	public static readonly Comma = 24;
	public static readonly Assign = 25;
	public static readonly QuestionMark = 26;
	public static readonly Colon = 27;
	public static readonly Ellipsis = 28;
	public static readonly Dot = 29;
	public static readonly Plus = 30;
	public static readonly Minus = 31;
	public static readonly BitNot = 32;
	public static readonly Not = 33;
	public static readonly Multiply = 34;
	public static readonly Divide = 35;
	public static readonly Modulus = 36;
	public static readonly Pow = 37;
	public static readonly Sharp = 38;
	public static readonly LessThan = 39;
	public static readonly MoreThan = 40;
	public static readonly LessThanEquals = 41;
	public static readonly MoreThanEquals = 42;
	public static readonly Equals = 43;
	public static readonly NotEquals = 44;
	public static readonly And = 45;
	public static readonly Or = 46;
	public static readonly MultiplyAssign = 47;
	public static readonly DivideAssign = 48;
	public static readonly ModulusAssign = 49;
	public static readonly PlusAssign = 50;
	public static readonly MinusAssign = 51;
	public static readonly LeftShiftArithmeticAssign = 52;
	public static readonly RightShiftArithmeticAssign = 53;
	public static readonly RightShiftLogicalAssign = 54;
	public static readonly BitAndAssign = 55;
	public static readonly BitXorAssign = 56;
	public static readonly BitOrAssign = 57;
	public static readonly LambdaStart = 58;
	public static readonly Pipe = 59;
	public static readonly Underscore = 60;
	public static readonly BooleanLiteral = 61;
	public static readonly DecimalLiteral = 62;
	public static readonly FloatLiteral = 63;
	public static readonly StringLiteral = 64;
	public static readonly StringFormat = 65;
	public static readonly ID = 66;
	public static readonly Preprocessor = 67;
	public static readonly LineBreak = 68;
	public static readonly WhiteSpaces = 69;
	public static readonly UnexpectedCharacter = 70;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_body = 5;
	public static readonly RULE_scopeArgument = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_literal = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "statement", "body", 
		"scopeArgument", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'if'", "'else'", "'loop'", "'in'", "'continue'", 
		"'break'", "'return'", "'as'", "'var'", "'and'", "'or'", "'xor'", "'>>'", 
		"'<<'", "'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", 
		"'?'", "':'", "'...'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", 
		"'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
		"'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", 
		"'&='", "'^='", "'|='", "'\\'", "'|'", "'_'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "If", "Else", "Loop", 
		"In", "Continue", "Break", "Return", "As", "Var", "BitAnd", "BitOr", "BitXor", 
		"RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"Comma", "Assign", "QuestionMark", "Colon", "Ellipsis", "Dot", "Plus", 
		"Minus", "BitNot", "Not", "Multiply", "Divide", "Modulus", "Pow", "Sharp", 
		"LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", 
		"NotEquals", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
		"LambdaStart", "Pipe", "Underscore", "BooleanLiteral", "DecimalLiteral", 
		"FloatLiteral", "StringLiteral", "StringFormat", "ID", "Preprocessor", 
		"LineBreak", "WhiteSpaces", "UnexpectedCharacter",
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
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.If - 3)) | (1 << (XonParser.Loop - 3)) | (1 << (XonParser.Continue - 3)) | (1 << (XonParser.Break - 3)) | (1 << (XonParser.Return - 3)) | (1 << (XonParser.Var - 3)) | (1 << (XonParser.OpenBracket - 3)) | (1 << (XonParser.OpenParen - 3)) | (1 << (XonParser.OpenBrace - 3)) | (1 << (XonParser.Plus - 3)) | (1 << (XonParser.Minus - 3)) | (1 << (XonParser.BitNot - 3)) | (1 << (XonParser.Not - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.LambdaStart - 58)) | (1 << (XonParser.BooleanLiteral - 58)) | (1 << (XonParser.DecimalLiteral - 58)) | (1 << (XonParser.FloatLiteral - 58)) | (1 << (XonParser.StringLiteral - 58)) | (1 << (XonParser.StringFormat - 58)) | (1 << (XonParser.ID - 58)) | (1 << (XonParser.Preprocessor - 58)) | (1 << (XonParser.LineBreak - 58)))) !== 0)) {
				{
				{
				this.state = 18;
				this.statement();
				}
				}
				this.state = 23;
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
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.importPath();
			this.state = 25;
			this.match(XonParser.Colon);
			this.state = 37;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Multiply:
				{
				this.state = 26;
				this.match(XonParser.Multiply);
				this.state = 27;
				this.match(XonParser.As);
				this.state = 28;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;
			case XonParser.ID:
				{
				this.state = 29;
				this.importMember();
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 30;
					this.match(XonParser.Comma);
					this.state = 31;
					this.importMember();
					}
					}
					this.state = 36;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 39;
			this.match(XonParser.LineBreak);
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
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 41;
				this.match(XonParser.Dot);
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 47;
			_la = this._input.LA(1);
			if (!(_la === XonParser.StringLiteral || _la === XonParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 48;
				this.match(XonParser.Dot);
				this.state = 49;
				_la = this._input.LA(1);
				if (!(_la === XonParser.StringLiteral || _la === XonParser.ID)) {
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
	public importMember(): ImportMemberContext {
		let _localctx: ImportMemberContext = new ImportMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_importMember);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				_localctx._name = this.match(XonParser.ID);
				this.state = 56;
				this.match(XonParser.As);
				this.state = 57;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 58;
				_localctx._name = this.match(XonParser.ID);
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
		this.enterRule(_localctx, 8, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.match(XonParser.If);
				this.state = 62;
				this.expression(0);
				this.state = 63;
				this.body();
				this.state = 70;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 64;
					this.match(XonParser.Else);
					this.state = 67;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 65;
						this.match(XonParser.If);
						this.state = 66;
						this.expression(0);
						}
					}

					this.state = 69;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(XonParser.Loop);
				this.state = 88;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 85;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						this.state = 73;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 78;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
						case 1:
							{
							this.state = 74;
							this.match(XonParser.Comma);
							this.state = 76;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 75;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 82;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 80;
							this.match(XonParser.Comma);
							this.state = 81;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 84;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 87;
					this.expression(0);
					}
					break;
				}
				this.state = 90;
				this.body();
				}
				break;

			case 3:
				_localctx = new ScopeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.match(XonParser.ID);
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 92;
					this.scopeArgument();
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 93;
						this.match(XonParser.Comma);
						this.state = 94;
						this.scopeArgument();
						}
						}
						this.state = 99;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 102;
				this.body();
				}
				break;

			case 4:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.match(XonParser.LineBreak);
				}
				break;

			case 5:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Var) {
					{
					this.state = 104;
					this.match(XonParser.Var);
					}
				}

				this.state = 107;
				this.match(XonParser.ID);
				{
				this.state = 108;
				this.match(XonParser.Assign);
				}
				this.state = 109;
				this.expression(0);
				this.state = 110;
				this.match(XonParser.LineBreak);
				}
				break;

			case 6:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 112;
				this.match(XonParser.Continue);
				this.state = 113;
				this.match(XonParser.LineBreak);
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 114;
				this.match(XonParser.Break);
				this.state = 115;
				this.match(XonParser.LineBreak);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 116;
				this.match(XonParser.Return);
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.OpenBracket - 18)) | (1 << (XonParser.OpenParen - 18)) | (1 << (XonParser.OpenBrace - 18)) | (1 << (XonParser.Plus - 18)) | (1 << (XonParser.Minus - 18)) | (1 << (XonParser.BitNot - 18)) | (1 << (XonParser.Not - 18)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.LambdaStart - 58)) | (1 << (XonParser.BooleanLiteral - 58)) | (1 << (XonParser.DecimalLiteral - 58)) | (1 << (XonParser.FloatLiteral - 58)) | (1 << (XonParser.StringLiteral - 58)) | (1 << (XonParser.StringFormat - 58)) | (1 << (XonParser.ID - 58)))) !== 0)) {
					{
					this.state = 117;
					this.expression(0);
					}
				}

				this.state = 120;
				this.match(XonParser.LineBreak);
				}
				break;

			case 9:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 121;
				this.match(XonParser.Preprocessor);
				this.state = 122;
				this.match(XonParser.LineBreak);
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 123;
				this.expression(0);
				this.state = 124;
				this.match(XonParser.LineBreak);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.OpenBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.match(XonParser.OpenBrace);
				this.state = 129;
				this.match(XonParser.LineBreak);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.If - 3)) | (1 << (XonParser.Loop - 3)) | (1 << (XonParser.Continue - 3)) | (1 << (XonParser.Break - 3)) | (1 << (XonParser.Return - 3)) | (1 << (XonParser.Var - 3)) | (1 << (XonParser.OpenBracket - 3)) | (1 << (XonParser.OpenParen - 3)) | (1 << (XonParser.OpenBrace - 3)) | (1 << (XonParser.Plus - 3)) | (1 << (XonParser.Minus - 3)) | (1 << (XonParser.BitNot - 3)) | (1 << (XonParser.Not - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.LambdaStart - 58)) | (1 << (XonParser.BooleanLiteral - 58)) | (1 << (XonParser.DecimalLiteral - 58)) | (1 << (XonParser.FloatLiteral - 58)) | (1 << (XonParser.StringLiteral - 58)) | (1 << (XonParser.StringFormat - 58)) | (1 << (XonParser.ID - 58)) | (1 << (XonParser.Preprocessor - 58)) | (1 << (XonParser.LineBreak - 58)))) !== 0)) {
					{
					{
					this.state = 130;
					this.statement();
					}
					}
					this.state = 135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 136;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.Colon:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.match(XonParser.Colon);
				this.state = 138;
				this.statement();
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
	public scopeArgument(): ScopeArgumentContext {
		let _localctx: ScopeArgumentContext = new ScopeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_scopeArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			_localctx._name = this.match(XonParser.ID);
			this.state = 142;
			this.match(XonParser.Colon);
			this.state = 143;
			_localctx._type = this.match(XonParser.ID);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 144;
				this.match(XonParser.Assign);
				this.state = 145;
				_localctx._value = this.expression(0);
				}
			}

			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.match(XonParser.Colon);
				this.state = 149;
				_localctx._condition = this.expression(0);
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
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 153;
				this.match(XonParser.Plus);
				this.state = 154;
				this.expression(23);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 155;
				this.match(XonParser.Minus);
				this.state = 156;
				this.expression(22);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 157;
				this.match(XonParser.BitNot);
				this.state = 158;
				this.expression(21);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 159;
				this.match(XonParser.Not);
				this.state = 160;
				this.expression(20);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
				this.match(XonParser.StringFormat);
				}
				break;

			case 8:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 164;
				this.match(XonParser.OpenBracket);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.OpenBracket - 18)) | (1 << (XonParser.OpenParen - 18)) | (1 << (XonParser.OpenBrace - 18)) | (1 << (XonParser.Plus - 18)) | (1 << (XonParser.Minus - 18)) | (1 << (XonParser.BitNot - 18)) | (1 << (XonParser.Not - 18)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.LambdaStart - 58)) | (1 << (XonParser.BooleanLiteral - 58)) | (1 << (XonParser.DecimalLiteral - 58)) | (1 << (XonParser.FloatLiteral - 58)) | (1 << (XonParser.StringLiteral - 58)) | (1 << (XonParser.StringFormat - 58)) | (1 << (XonParser.ID - 58)))) !== 0)) {
					{
					this.state = 165;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 166;
						this.match(XonParser.Comma);
						this.state = 167;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 172;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 175;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 9:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 176;
				this.match(XonParser.OpenBracket);
				this.state = 177;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 178;
				this.match(XonParser.Colon);
				this.state = 179;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 180;
					this.match(XonParser.Colon);
					this.state = 181;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 184;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 10:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 186;
				this.match(XonParser.OpenBrace);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 187;
					this.match(XonParser.ID);
					this.state = 188;
					this.match(XonParser.Colon);
					this.state = 189;
					this.expression(0);
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 190;
						this.match(XonParser.Comma);
						this.state = 191;
						this.match(XonParser.ID);
						this.state = 192;
						this.match(XonParser.Colon);
						this.state = 193;
						this.expression(0);
						}
						}
						this.state = 198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 201;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 11:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 202;
				this.match(XonParser.OpenParen);
				this.state = 203;
				this.expression(0);
				this.state = 204;
				this.match(XonParser.CloseParen);
				}
				break;

			case 12:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.match(XonParser.LambdaStart);
				this.state = 216;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 207;
					this.match(XonParser.ID);
					this.state = 212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 208;
						this.match(XonParser.Comma);
						this.state = 209;
						this.match(XonParser.ID);
						}
						}
						this.state = 214;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 215;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 218;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 300;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 298;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 221;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 222;
						this.match(XonParser.Pow);
						this.state = 223;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 224;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 225;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Multiply - 34)) | (1 << (XonParser.Divide - 34)) | (1 << (XonParser.Modulus - 34)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 226;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 227;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 228;
						(_localctx as AddSubExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Plus || _la === XonParser.Minus)) {
							(_localctx as AddSubExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 229;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 230;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 231;
						(_localctx as BitShiftExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic) | (1 << XonParser.RightShiftLogical))) !== 0))) {
							(_localctx as BitShiftExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 232;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 233;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 234;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.LessThan - 39)) | (1 << (XonParser.MoreThan - 39)) | (1 << (XonParser.LessThanEquals - 39)) | (1 << (XonParser.MoreThanEquals - 39)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 235;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 236;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 237;
						(_localctx as EqualityExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Equals || _la === XonParser.NotEquals)) {
							(_localctx as EqualityExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 238;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 239;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 240;
						this.match(XonParser.BitAnd);
						this.state = 241;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 242;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 243;
						this.match(XonParser.BitXor);
						this.state = 244;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 245;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 246;
						this.match(XonParser.BitOr);
						this.state = 247;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 248;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 249;
						this.match(XonParser.And);
						this.state = 250;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 251;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 252;
						this.match(XonParser.Or);
						this.state = 253;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 254;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 255;
						this.match(XonParser.Pipe);
						this.state = 258;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
						case 1:
							{
							this.state = 256;
							this.match(XonParser.ID);
							this.state = 257;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 260;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 261;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 262;
						this.match(XonParser.OpenParen);
						this.state = 271;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.OpenBracket - 18)) | (1 << (XonParser.OpenParen - 18)) | (1 << (XonParser.OpenBrace - 18)) | (1 << (XonParser.Plus - 18)) | (1 << (XonParser.Minus - 18)) | (1 << (XonParser.BitNot - 18)) | (1 << (XonParser.Not - 18)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.LambdaStart - 58)) | (1 << (XonParser.BooleanLiteral - 58)) | (1 << (XonParser.DecimalLiteral - 58)) | (1 << (XonParser.FloatLiteral - 58)) | (1 << (XonParser.StringLiteral - 58)) | (1 << (XonParser.StringFormat - 58)) | (1 << (XonParser.ID - 58)))) !== 0)) {
							{
							this.state = 263;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 268;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 264;
								this.match(XonParser.Comma);
								this.state = 265;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 270;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 273;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 274;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 275;
						this.match(XonParser.OpenBracket);
						this.state = 276;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 277;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 279;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 280;
						this.match(XonParser.OpenBracket);
						this.state = 281;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 282;
						this.match(XonParser.Colon);
						this.state = 284;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.OpenBracket - 18)) | (1 << (XonParser.OpenParen - 18)) | (1 << (XonParser.OpenBrace - 18)) | (1 << (XonParser.Plus - 18)) | (1 << (XonParser.Minus - 18)) | (1 << (XonParser.BitNot - 18)) | (1 << (XonParser.Not - 18)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (XonParser.LambdaStart - 58)) | (1 << (XonParser.BooleanLiteral - 58)) | (1 << (XonParser.DecimalLiteral - 58)) | (1 << (XonParser.FloatLiteral - 58)) | (1 << (XonParser.StringLiteral - 58)) | (1 << (XonParser.StringFormat - 58)) | (1 << (XonParser.ID - 58)))) !== 0)) {
							{
							this.state = 283;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 288;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 286;
							this.match(XonParser.Colon);
							this.state = 287;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 290;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 292;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 294;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 293;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 296;
						this.match(XonParser.Dot);
						this.state = 297;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 302;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_literal);
		try {
			this.state = 307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 303;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 305;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 306;
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
			return this.precpred(this._ctx, 24);

		case 1:
			return this.precpred(this._ctx, 19);

		case 2:
			return this.precpred(this._ctx, 18);

		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 16);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 12);

		case 9:
			return this.precpred(this._ctx, 11);

		case 10:
			return this.precpred(this._ctx, 10);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 28);

		case 13:
			return this.precpred(this._ctx, 27);

		case 14:
			return this.precpred(this._ctx, 26);

		case 15:
			return this.precpred(this._ctx, 25);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\u0138\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
		"\x02\x19\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03#\n\x03\f\x03\x0E\x03&\v\x03\x05\x03(\n\x03\x03\x03\x03" +
		"\x03\x03\x04\x07\x04-\n\x04\f\x04\x0E\x040\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x045\n\x04\f\x04\x0E\x048\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05>\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06F\n" +
		"\x06\x03\x06\x05\x06I\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06O\n" +
		"\x06\x05\x06Q\n\x06\x03\x06\x03\x06\x05\x06U\n\x06\x03\x06\x05\x06X\n" +
		"\x06\x03\x06\x05\x06[\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06b\n\x06\f\x06\x0E\x06e\v\x06\x05\x06g\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06l\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06y\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06\x81\n\x06\x03\x07\x03\x07\x03\x07\x07" +
		"\x07\x86\n\x07\f\x07\x0E\x07\x89\v\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\x8E\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x95\n\b\x03\b\x03\b\x05" +
		"\b\x99\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xAB\n\t\f\t\x0E\t\xAE\v\t\x05" +
		"\t\xB0\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xB9\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xC5\n\t" +
		"\f\t\x0E\t\xC8\v\t\x05\t\xCA\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\xD5\n\t\f\t\x0E\t\xD8\v\t\x03\t\x05\t\xDB\n\t\x03" +
		"\t\x05\t\xDE\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0105\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x07\t\u010D\n\t\f\t\x0E\t\u0110\v\t\x05\t\u0112\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u011F\n" +
		"\t\x03\t\x03\t\x05\t\u0123\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0129\n\t" +
		"\x03\t\x03\t\x07\t\u012D\n\t\f\t\x0E\t\u0130\v\t\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0136\n\n\x03\n\x02\x02\x03\x10\v\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\b\x04\x02BBDD\x03\x02$&\x03\x02" +
		" !\x03\x02\x11\x13\x03\x02),\x03\x02-.\x02\u0177\x02\x17\x03\x02\x02\x02" +
		"\x04\x1A\x03\x02\x02\x02\x06.\x03\x02\x02\x02\b=\x03\x02\x02\x02\n\x80" +
		"\x03\x02\x02\x02\f\x8D\x03\x02\x02\x02\x0E\x8F\x03\x02\x02\x02\x10\xDD" +
		"\x03\x02\x02\x02\x12\u0135\x03\x02\x02\x02\x14\x16\x05\n\x06\x02\x15\x14" +
		"\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18" +
		"\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x1A\x1B" +
		"\x05\x06\x04\x02\x1B\'\x07\x1D\x02\x02\x1C\x1D\x07$\x02\x02\x1D\x1E\x07" +
		"\f\x02\x02\x1E(\x07D\x02\x02\x1F$\x05\b\x05\x02 !\x07\x1A\x02\x02!#\x05" +
		"\b\x05\x02\" \x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03" +
		"\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02\'\x1C\x03\x02\x02\x02" +
		"\'\x1F\x03\x02\x02\x02()\x03\x02\x02\x02)*\x07F\x02\x02*\x05\x03\x02\x02" +
		"\x02+-\x07\x1F\x02\x02,+\x03\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02" +
		"\x02./\x03\x02\x02\x02/1\x03\x02\x02\x020.\x03\x02\x02\x0216\t\x02\x02" +
		"\x0223\x07\x1F\x02\x0235\t\x02\x02\x0242\x03\x02\x02\x0258\x03\x02\x02" +
		"\x0264\x03\x02\x02\x0267\x03\x02\x02\x027\x07\x03\x02\x02\x0286\x03\x02" +
		"\x02\x029:\x07D\x02\x02:;\x07\f\x02\x02;>\x07D\x02\x02<>\x07D\x02\x02" +
		"=9\x03\x02\x02\x02=<\x03\x02\x02\x02>\t\x03\x02\x02\x02?@\x07\x05\x02" +
		"\x02@A\x05\x10\t\x02AH\x05\f\x07\x02BE\x07\x06\x02\x02CD\x07\x05\x02\x02" +
		"DF\x05\x10\t\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02" +
		"GI\x05\f\x07\x02HB\x03\x02\x02\x02HI\x03\x02\x02\x02I\x81\x03\x02\x02" +
		"\x02JZ\x07\x07\x02\x02KP\x07D\x02\x02LN\x07\x1A\x02\x02MO\x07D\x02\x02" +
		"NM\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PL\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02QT\x03\x02\x02\x02RS\x07\x1A\x02\x02SU\x07D\x02\x02" +
		"TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x07\b\x02\x02" +
		"WK\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x05\x10\t\x02" +
		"ZW\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\x81\x05\f\x07" +
		"\x02]f\x07D\x02\x02^c\x05\x0E\b\x02_`\x07\x1A\x02\x02`b\x05\x0E\b\x02" +
		"a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02" +
		"dg\x03\x02\x02\x02ec\x03\x02\x02\x02f^\x03\x02\x02\x02fg\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02h\x81\x05\f\x07\x02i\x81\x07F\x02\x02jl\x07\r\x02\x02" +
		"kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07D\x02\x02" +
		"no\x07\x1B\x02\x02op\x05\x10\t\x02pq\x07F\x02\x02q\x81\x03\x02\x02\x02" +
		"rs\x07\t\x02\x02s\x81\x07F\x02\x02tu\x07\n\x02\x02u\x81\x07F\x02\x02v" +
		"x\x07\v\x02\x02wy\x05\x10\t\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02yz" +
		"\x03\x02\x02\x02z\x81\x07F\x02\x02{|\x07E\x02\x02|\x81\x07F\x02\x02}~" +
		"\x05\x10\t\x02~\x7F\x07F\x02\x02\x7F\x81\x03\x02\x02\x02\x80?\x03\x02" +
		"\x02\x02\x80J\x03\x02\x02\x02\x80]\x03\x02\x02\x02\x80i\x03\x02\x02\x02" +
		"\x80k\x03\x02\x02\x02\x80r\x03\x02\x02\x02\x80t\x03\x02\x02\x02\x80v\x03" +
		"\x02\x02\x02\x80{\x03\x02\x02\x02\x80}\x03\x02\x02\x02\x81\v\x03\x02\x02" +
		"\x02\x82\x83\x07\x18\x02\x02\x83\x87\x07F\x02\x02\x84\x86\x05\n\x06\x02" +
		"\x85\x84\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02" +
		"\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02" +
		"\x8A\x8E\x07\x19\x02\x02\x8B\x8C\x07\x1D\x02\x02\x8C\x8E\x05\n\x06\x02" +
		"\x8D\x82\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\r\x03\x02\x02\x02" +
		"\x8F\x90\x07D\x02\x02\x90\x91\x07\x1D\x02\x02\x91\x94\x07D\x02\x02\x92" +
		"\x93\x07\x1B\x02\x02\x93\x95\x05\x10\t\x02\x94\x92\x03\x02\x02\x02\x94" +
		"\x95\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x97\x07\x1D\x02\x02\x97" +
		"\x99\x05\x10\t\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x0F\x03\x02\x02\x02\x9A\x9B\b\t\x01\x02\x9B\x9C\x07 \x02\x02\x9C\xDE" +
		"\x05\x10\t\x19\x9D\x9E\x07!\x02\x02\x9E\xDE\x05\x10\t\x18\x9F\xA0\x07" +
		"\"\x02\x02\xA0\xDE\x05\x10\t\x17\xA1\xA2\x07#\x02\x02\xA2\xDE\x05\x10" +
		"\t\x16\xA3\xDE\x07D\x02\x02\xA4\xDE\x05\x12\n\x02\xA5\xDE\x07C\x02\x02" +
		"\xA6\xAF\x07\x14\x02\x02\xA7\xAC\x05\x10\t\x02\xA8\xA9\x07\x1A\x02\x02" +
		"\xA9\xAB\x05\x10\t\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02" +
		"\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02" +
		"\xAE\xAC\x03\x02\x02\x02\xAF\xA7\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\xDE\x07\x15\x02\x02\xB2\xB3\x07\x14\x02\x02" +
		"\xB3\xB4\x05\x10\t\x02\xB4\xB5\x07\x1D\x02\x02\xB5\xB8\x05\x10\t\x02\xB6" +
		"\xB7\x07\x1D\x02\x02\xB7\xB9\x05\x10\t\x02\xB8\xB6\x03\x02\x02\x02\xB8" +
		"\xB9\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x15\x02\x02\xBB" +
		"\xDE\x03\x02\x02\x02\xBC\xC9\x07\x18\x02\x02\xBD\xBE\x07D\x02\x02\xBE" +
		"\xBF\x07\x1D\x02\x02\xBF\xC6\x05\x10\t\x02\xC0\xC1\x07\x1A\x02\x02\xC1" +
		"\xC2\x07D\x02\x02\xC2\xC3\x07\x1D\x02\x02\xC3\xC5\x05\x10\t\x02\xC4\xC0" +
		"\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7" +
		"\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xBD" +
		"\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xDE" +
		"\x07\x19\x02\x02\xCC\xCD\x07\x16\x02\x02\xCD\xCE\x05\x10\t\x02\xCE\xCF" +
		"\x07\x17\x02\x02\xCF\xDE\x03\x02\x02\x02\xD0\xDA\x07<\x02\x02\xD1\xD6" +
		"\x07D\x02\x02\xD2\xD3\x07\x1A\x02\x02\xD3\xD5\x07D\x02\x02\xD4\xD2\x03" +
		"\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03" +
		"\x02\x02\x02\xD7\xD9\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDB\x07" +
		"\x1D\x02\x02\xDA\xD1\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03" +
		"\x02\x02\x02\xDC\xDE\x05\x10\t\x03\xDD\x9A\x03\x02\x02\x02\xDD\x9D\x03" +
		"\x02\x02\x02\xDD\x9F\x03\x02\x02\x02\xDD\xA1\x03\x02\x02\x02\xDD\xA3\x03" +
		"\x02\x02\x02\xDD\xA4\x03\x02\x02\x02\xDD\xA5\x03\x02\x02\x02\xDD\xA6\x03" +
		"\x02\x02\x02\xDD\xB2\x03\x02\x02\x02\xDD\xBC\x03\x02\x02\x02\xDD\xCC\x03" +
		"\x02\x02\x02\xDD\xD0\x03\x02\x02\x02\xDE\u012E\x03\x02\x02\x02\xDF\xE0" +
		"\f\x1A\x02\x02\xE0\xE1\x07\'\x02\x02\xE1\u012D\x05\x10\t\x1B\xE2\xE3\f" +
		"\x15\x02\x02\xE3\xE4\t\x03\x02\x02\xE4\u012D\x05\x10\t\x16\xE5\xE6\f\x14" +
		"\x02\x02\xE6\xE7\t\x04\x02\x02\xE7\u012D\x05\x10\t\x15\xE8\xE9\f\x13\x02" +
		"\x02\xE9\xEA\t\x05\x02\x02\xEA\u012D\x05\x10\t\x14\xEB\xEC\f\x12\x02\x02" +
		"\xEC\xED\t\x06\x02\x02\xED\u012D\x05\x10\t\x13\xEE\xEF\f\x11\x02\x02\xEF" +
		"\xF0\t\x07\x02\x02\xF0\u012D\x05\x10\t\x12\xF1\xF2\f\x10\x02\x02\xF2\xF3" +
		"\x07\x0E\x02\x02\xF3\u012D\x05\x10\t\x11\xF4\xF5\f\x0F\x02\x02\xF5\xF6" +
		"\x07\x10\x02\x02\xF6\u012D\x05\x10\t\x10\xF7\xF8\f\x0E\x02\x02\xF8\xF9" +
		"\x07\x0F\x02\x02\xF9\u012D\x05\x10\t\x0F\xFA\xFB\f\r\x02\x02\xFB\xFC\x07" +
		"/\x02\x02\xFC\u012D\x05\x10\t\x0E\xFD\xFE\f\f\x02\x02\xFE\xFF\x070\x02" +
		"\x02\xFF\u012D\x05\x10\t\r\u0100\u0101\f\x04\x02\x02\u0101\u0104\x07=" +
		"\x02\x02\u0102\u0103\x07D\x02\x02\u0103\u0105\x07\x1D\x02\x02\u0104\u0102" +
		"\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02" +
		"\u0106\u012D\x05\x10\t\x05\u0107\u0108\f\x1E\x02\x02\u0108\u0111\x07\x16" +
		"\x02\x02\u0109\u010E\x05\x10\t\x02\u010A\u010B\x07\x1A\x02\x02\u010B\u010D" +
		"\x05\x10\t\x02\u010C\u010A\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02" +
		"\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0112\x03" +
		"\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0109\x03\x02\x02\x02\u0111" +
		"\u0112\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u012D\x07\x17" +
		"\x02\x02\u0114\u0115\f\x1D\x02\x02\u0115\u0116\x07\x14\x02\x02\u0116\u0117" +
		"\x05\x10\t\x02\u0117\u0118\x07\x15\x02\x02\u0118\u012D\x03\x02\x02\x02" +
		"\u0119\u011A\f\x1C\x02\x02\u011A\u011B\x07\x14\x02\x02\u011B\u011C\x05" +
		"\x10\t\x02\u011C\u011E\x07\x1D\x02\x02\u011D\u011F\x05\x10\t\x02\u011E" +
		"\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0122\x03\x02" +
		"\x02\x02\u0120\u0121\x07\x1D\x02\x02\u0121\u0123\x05\x10\t\x02\u0122\u0120" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
		"\u0124\u0125\x07\x15\x02\x02\u0125\u012D\x03\x02\x02\x02\u0126\u0128\f" +
		"\x1B\x02\x02\u0127\u0129\x07\x1C\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x07\x1F" +
		"\x02\x02\u012B\u012D\x07D\x02\x02\u012C\xDF\x03\x02\x02\x02\u012C\xE2" +
		"\x03\x02\x02\x02\u012C\xE5\x03\x02\x02\x02\u012C\xE8\x03\x02\x02\x02\u012C" +
		"\xEB\x03\x02\x02\x02\u012C\xEE\x03\x02\x02\x02\u012C\xF1\x03\x02\x02\x02" +
		"\u012C\xF4\x03\x02\x02\x02\u012C\xF7\x03\x02\x02\x02\u012C\xFA\x03\x02" +
		"\x02\x02\u012C\xFD\x03\x02\x02\x02\u012C\u0100\x03\x02\x02\x02\u012C\u0107" +
		"\x03\x02\x02\x02\u012C\u0114\x03\x02\x02\x02\u012C\u0119\x03\x02\x02\x02" +
		"\u012C\u0126\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03" +
		"\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\x11\x03\x02\x02\x02\u0130" +
		"\u012E\x03\x02\x02\x02\u0131\u0136\x07@\x02\x02\u0132\u0136\x07A\x02\x02" +
		"\u0133\u0136\x07?\x02\x02\u0134\u0136\x07B\x02\x02\u0135\u0131\x03\x02" +
		"\x02\x02\u0135\u0132\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135" +
		"\u0134\x03\x02\x02\x02\u0136\x13\x03\x02\x02\x02)\x17$\'.6=EHNPTWZcfk" +
		"x\x80\x87\x8D\x94\x98\xAC\xAF\xB8\xC6\xC9\xD6\xDA\xDD\u0104\u010E\u0111" +
		"\u011E\u0122\u0128\u012C\u012E\u0135";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class ImportsContext extends ParserRuleContext {
	public _alias: Token;
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public importMember(): ImportMemberContext[];
	public importMember(i: number): ImportMemberContext;
	public importMember(i?: number): ImportMemberContext | ImportMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportMemberContext);
		} else {
			return this.getRuleContext(i, ImportMemberContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_imports; }
}


export class ImportPathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringLiteral);
		} else {
			return this.getToken(XonParser.StringLiteral, i);
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
	public get ruleIndex(): number { return XonParser.RULE_importPath; }
}


export class ImportMemberContext extends ParserRuleContext {
	public _name: Token;
	public _alias: Token;
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_importMember; }
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
	public If(): TerminalNode[];
	public If(i: number): TerminalNode;
	public If(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.If);
		} else {
			return this.getToken(XonParser.If, i);
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
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopStatementContext extends StatementContext {
	public _value: Token;
	public _key: Token;
	public _index: Token;
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
export class ScopeStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public scopeArgument(): ScopeArgumentContext[];
	public scopeArgument(i: number): ScopeArgumentContext;
	public scopeArgument(i?: number): ScopeArgumentContext | ScopeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopeArgumentContext);
		} else {
			return this.getRuleContext(i, ScopeArgumentContext);
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
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(XonParser.Var, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContinueStatementContext extends StatementContext {
	public Continue(): TerminalNode { return this.getToken(XonParser.Continue, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public Break(): TerminalNode { return this.getToken(XonParser.Break, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(XonParser.Return, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BodyContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(XonParser.OpenBrace, 0); }
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(XonParser.CloseBrace, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class ScopeArgumentContext extends ParserRuleContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public _condition: ExpressionContext;
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
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
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_scopeArgument; }
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
export class FunctionExpressionContext extends ExpressionContext {
	public _object: ExpressionContext;
	public _expression: ExpressionContext;
	public _args: ExpressionContext[] = [];
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
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
export class IndexExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _index: ExpressionContext;
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
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SliceExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _startPos: ExpressionContext;
	public _end: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(XonParser.QuestionMark, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _base: ExpressionContext;
	public _exponent: ExpressionContext;
	public Pow(): TerminalNode { return this.getToken(XonParser.Pow, 0); }
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
export class UnaryPlusExpressionContext extends ExpressionContext {
	public Plus(): TerminalNode { return this.getToken(XonParser.Plus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Minus(): TerminalNode { return this.getToken(XonParser.Minus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitNotExpressionContext extends ExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(XonParser.BitNot, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalNotExpressionContext extends ExpressionContext {
	public Not(): TerminalNode { return this.getToken(XonParser.Not, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(XonParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitShiftExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftLogical, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThanEquals, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThanEquals, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(XonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitAnd(): TerminalNode { return this.getToken(XonParser.BitAnd, 0); }
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
export class BitXorExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitXor(): TerminalNode { return this.getToken(XonParser.BitXor, 0); }
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
export class BitOrExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitOr(): TerminalNode { return this.getToken(XonParser.BitOr, 0); }
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
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public And(): TerminalNode { return this.getToken(XonParser.And, 0); }
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
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Or(): TerminalNode { return this.getToken(XonParser.Or, 0); }
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
export class IdExpressionContext extends ExpressionContext {
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
export class StringFormatExpressionContext extends ExpressionContext {
	public StringFormat(): TerminalNode { return this.getToken(XonParser.StringFormat, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public _expression: ExpressionContext;
	public _items: ExpressionContext[] = [];
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
export class RangeExpressionContext extends ExpressionContext {
	public _startPos: ExpressionContext;
	public _end: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
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
export class PipeExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Pipe(): TerminalNode { return this.getToken(XonParser.Pipe, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
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
export class DecimalLiteralContext extends LiteralContext {
	public DecimalLiteral(): TerminalNode { return this.getToken(XonParser.DecimalLiteral, 0); }
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
export class BooleanLiteralContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
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


