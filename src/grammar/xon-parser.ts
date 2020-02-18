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
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly Class = 3;
	public static readonly Enum = 4;
	public static readonly Scheme = 5;
	public static readonly If = 6;
	public static readonly Else = 7;
	public static readonly Loop = 8;
	public static readonly In = 9;
	public static readonly Continue = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly As = 13;
	public static readonly Var = 14;
	public static readonly Preprocessor = 15;
	public static readonly LineBreak = 16;
	public static readonly BitAnd = 17;
	public static readonly BitOr = 18;
	public static readonly BitXor = 19;
	public static readonly RightShiftArithmetic = 20;
	public static readonly LeftShiftArithmetic = 21;
	public static readonly RightShiftLogical = 22;
	public static readonly OpenBracket = 23;
	public static readonly CloseBracket = 24;
	public static readonly OpenParen = 25;
	public static readonly CloseParen = 26;
	public static readonly OpenBrace = 27;
	public static readonly CloseBrace = 28;
	public static readonly Comma = 29;
	public static readonly Assign = 30;
	public static readonly QuestionMark = 31;
	public static readonly Colon = 32;
	public static readonly TwoColon = 33;
	public static readonly Ellipsis = 34;
	public static readonly Dot = 35;
	public static readonly Plus = 36;
	public static readonly Minus = 37;
	public static readonly BitNot = 38;
	public static readonly Not = 39;
	public static readonly Multiply = 40;
	public static readonly Divide = 41;
	public static readonly Modulus = 42;
	public static readonly Pow = 43;
	public static readonly Sharp = 44;
	public static readonly LessThan = 45;
	public static readonly MoreThan = 46;
	public static readonly LessThanEquals = 47;
	public static readonly MoreThanEquals = 48;
	public static readonly Equals = 49;
	public static readonly NotEquals = 50;
	public static readonly And = 51;
	public static readonly Or = 52;
	public static readonly MultiplyAssign = 53;
	public static readonly DivideAssign = 54;
	public static readonly ModulusAssign = 55;
	public static readonly PlusAssign = 56;
	public static readonly MinusAssign = 57;
	public static readonly LeftShiftArithmeticAssign = 58;
	public static readonly RightShiftArithmeticAssign = 59;
	public static readonly RightShiftLogicalAssign = 60;
	public static readonly BitAndAssign = 61;
	public static readonly BitXorAssign = 62;
	public static readonly BitOrAssign = 63;
	public static readonly LambdaStart = 64;
	public static readonly Pipe = 65;
	public static readonly Underscore = 66;
	public static readonly NullLiteral = 67;
	public static readonly BooleanLiteral = 68;
	public static readonly DecimalLiteral = 69;
	public static readonly FloatLiteral = 70;
	public static readonly StringLiteral = 71;
	public static readonly StringFormat = 72;
	public static readonly ID = 73;
	public static readonly Skip = 74;
	public static readonly UnexpectedCharacter = 75;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_classItem = 5;
	public static readonly RULE_enumItem = 6;
	public static readonly RULE_schemeItem = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_scopeArgument = 9;
	public static readonly RULE_body = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_constant = 12;
	public static readonly RULE_literal = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "classItem", 
		"enumItem", "schemeItem", "statement", "scopeArgument", "body", "expression", 
		"constant", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'class'", "'enum'", "'scheme'", "'if'", 
		"'else'", "'loop'", "'in'", "'continue'", "'break'", "'return'", "'as'", 
		"'var'", undefined, undefined, "'and'", "'or'", "'xor'", "'>>'", "'<<'", 
		"'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", "'?'", 
		"':'", "'::'", "'...'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", 
		"'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
		"'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", 
		"'&='", "'^='", "'|='", "'\\'", "'|'", "'_'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Class", "Enum", "Scheme", "If", "Else", 
		"Loop", "In", "Continue", "Break", "Return", "As", "Var", "Preprocessor", 
		"LineBreak", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "QuestionMark", "Colon", 
		"TwoColon", "Ellipsis", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", 
		"Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", 
		"MoreThanEquals", "Equals", "NotEquals", "And", "Or", "MultiplyAssign", 
		"DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "NullLiteral", 
		"BooleanLiteral", "DecimalLiteral", "FloatLiteral", "StringLiteral", "StringFormat", 
		"ID", "Skip", "UnexpectedCharacter",
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)) | (1 << (XonParser.NullLiteral - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.DecimalLiteral - 68)) | (1 << (XonParser.FloatLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormat - 68)) | (1 << (XonParser.ID - 68)))) !== 0)) {
				{
				{
				this.state = 28;
				this.statement();
				}
				}
				this.state = 33;
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
			this.state = 34;
			this.importPath();
			this.state = 35;
			this.match(XonParser.Colon);
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Multiply:
				{
				this.state = 36;
				this.match(XonParser.Multiply);
				this.state = 37;
				this.match(XonParser.As);
				this.state = 38;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;
			case XonParser.ID:
				{
				this.state = 39;
				this.importMember();
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 40;
					this.match(XonParser.Comma);
					this.state = 41;
					this.importMember();
					}
					}
					this.state = 46;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 49;
				this.match(XonParser.Dot);
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
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
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 56;
				this.match(XonParser.Dot);
				this.state = 57;
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
				this.state = 62;
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
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				_localctx._name = this.match(XonParser.ID);
				this.state = 64;
				this.match(XonParser.As);
				this.state = 65;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Class:
				_localctx = new ClassDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				this.match(XonParser.Class);
				this.state = 70;
				this.match(XonParser.ID);
				this.state = 71;
				this.match(XonParser.Colon);
				this.state = 72;
				this.match(XonParser.LineBreak);
				this.state = 73;
				this.match(XonParser.INDENT);
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 74;
					this.classItem();
					this.state = 75;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 79;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 81;
				this.match(XonParser.DEDENT);
				}
				break;
			case XonParser.Enum:
				_localctx = new EnumDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.match(XonParser.Enum);
				this.state = 84;
				this.match(XonParser.ID);
				this.state = 85;
				this.match(XonParser.Colon);
				this.state = 86;
				this.match(XonParser.LineBreak);
				this.state = 87;
				this.match(XonParser.INDENT);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 88;
					this.enumItem();
					this.state = 89;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 95;
				this.match(XonParser.DEDENT);
				}
				break;
			case XonParser.Scheme:
				_localctx = new SchemeDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 97;
				this.match(XonParser.Scheme);
				this.state = 98;
				this.match(XonParser.ID);
				this.state = 99;
				this.match(XonParser.Colon);
				this.state = 100;
				this.match(XonParser.LineBreak);
				this.state = 101;
				this.match(XonParser.INDENT);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 102;
					this.schemeItem();
					this.state = 103;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 109;
				this.match(XonParser.DEDENT);
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
	public classItem(): ClassItemContext {
		let _localctx: ClassItemContext = new ClassItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_classItem);
		let _la: number;
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				_localctx = new PropertyClassItemContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				(_localctx as PropertyClassItemContext)._name = this.match(XonParser.ID);
				this.state = 114;
				this.match(XonParser.Colon);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 115;
					(_localctx as PropertyClassItemContext)._type = this.match(XonParser.ID);
					}
				}

				{
				this.state = 118;
				this.match(XonParser.Assign);
				this.state = 119;
				(_localctx as PropertyClassItemContext)._value = this.expression(0);
				}
				}
				break;

			case 2:
				_localctx = new MethodClassItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(XonParser.ID);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 121;
					this.scopeArgument();
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 122;
						this.match(XonParser.Comma);
						this.state = 123;
						this.scopeArgument();
						}
						}
						this.state = 128;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 131;
				this.body();
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
	public enumItem(): EnumItemContext {
		let _localctx: EnumItemContext = new EnumItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_enumItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(XonParser.ID);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 135;
				this.match(XonParser.Assign);
				this.state = 142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 136;
					this.literal();
					}
					break;

				case 2:
					{
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (XonParser.NullLiteral - 67)) | (1 << (XonParser.BooleanLiteral - 67)) | (1 << (XonParser.DecimalLiteral - 67)) | (1 << (XonParser.FloatLiteral - 67)) | (1 << (XonParser.StringLiteral - 67)))) !== 0)) {
						{
						this.state = 137;
						this.literal();
						}
					}

					this.state = 140;
					this.match(XonParser.Colon);
					this.state = 141;
					this.constant(0);
					}
					break;
				}
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
	public schemeItem(): SchemeItemContext {
		let _localctx: SchemeItemContext = new SchemeItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_schemeItem);
		let _la: number;
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				_localctx._name = this.match(XonParser.ID);
				this.state = 147;
				this.match(XonParser.Colon);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 148;
					_localctx._type = this.match(XonParser.ID);
					}
				}

				{
				this.state = 151;
				this.match(XonParser.Assign);
				this.state = 152;
				_localctx._value = this.expression(0);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				_localctx._name = this.match(XonParser.ID);
				this.state = 154;
				this.match(XonParser.Colon);
				this.state = 155;
				this.match(XonParser.LineBreak);
				this.state = 156;
				this.match(XonParser.INDENT);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 157;
					this.schemeItem();
					}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 162;
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
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.match(XonParser.If);
				this.state = 168;
				this.expression(0);
				this.state = 169;
				this.body();
				this.state = 176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 170;
					this.match(XonParser.Else);
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 171;
						this.match(XonParser.If);
						this.state = 172;
						this.expression(0);
						}
					}

					this.state = 175;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 178;
				this.match(XonParser.Loop);
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (XonParser.OpenBracket - 23)) | (1 << (XonParser.OpenParen - 23)) | (1 << (XonParser.OpenBrace - 23)) | (1 << (XonParser.Plus - 23)) | (1 << (XonParser.Minus - 23)) | (1 << (XonParser.BitNot - 23)) | (1 << (XonParser.Not - 23)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.DecimalLiteral - 64)) | (1 << (XonParser.FloatLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormat - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
					{
					this.state = 191;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						this.state = 179;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 184;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 180;
							this.match(XonParser.Comma);
							this.state = 182;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 181;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 188;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 186;
							this.match(XonParser.Comma);
							this.state = 187;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 190;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 193;
					this.expression(0);
					}
				}

				this.state = 196;
				this.body();
				}
				break;

			case 4:
				_localctx = new ConstantStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 197;
				(_localctx as ConstantStatementContext)._name = this.match(XonParser.ID);
				this.state = 198;
				this.match(XonParser.TwoColon);
				this.state = 199;
				this.match(XonParser.Assign);
				this.state = 200;
				(_localctx as ConstantStatementContext)._value = this.expression(0);
				}
				break;

			case 5:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 201;
				(_localctx as DeclarationStatementContext)._name = this.match(XonParser.ID);
				this.state = 202;
				this.match(XonParser.Colon);
				this.state = 209;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 203;
					(_localctx as DeclarationStatementContext)._type = this.match(XonParser.ID);
					}
					break;

				case 2:
					{
					this.state = 205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 204;
						(_localctx as DeclarationStatementContext)._type = this.match(XonParser.ID);
						}
					}

					this.state = 207;
					this.match(XonParser.Assign);
					this.state = 208;
					(_localctx as DeclarationStatementContext)._value = this.expression(0);
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 211;
				this.match(XonParser.ID);
				this.state = 212;
				this.match(XonParser.Assign);
				this.state = 213;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new ScopeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 214;
				this.match(XonParser.ID);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 215;
					this.scopeArgument();
					this.state = 220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 216;
						this.match(XonParser.Comma);
						this.state = 217;
						this.scopeArgument();
						}
						}
						this.state = 222;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 225;
				this.body();
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 226;
				this.match(XonParser.Continue);
				}
				break;

			case 9:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 227;
				this.match(XonParser.Break);
				}
				break;

			case 10:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 228;
				this.match(XonParser.Return);
				this.state = 230;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 229;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 11:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 232;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 233;
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
	public scopeArgument(): ScopeArgumentContext {
		let _localctx: ScopeArgumentContext = new ScopeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_scopeArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			_localctx._name = this.match(XonParser.ID);
			this.state = 237;
			this.match(XonParser.Colon);
			this.state = 238;
			_localctx._type = this.match(XonParser.ID);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 239;
				this.match(XonParser.Assign);
				this.state = 240;
				_localctx._value = this.expression(0);
				}
			}

			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.match(XonParser.Colon);
				this.state = 244;
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
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(XonParser.Colon);
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 248;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 249;
				this.match(XonParser.LineBreak);
				this.state = 250;
				this.match(XonParser.INDENT);
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 251;
					this.statement();
					}
					}
					this.state = 254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)) | (1 << (XonParser.NullLiteral - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.BooleanLiteral - 68)) | (1 << (XonParser.DecimalLiteral - 68)) | (1 << (XonParser.FloatLiteral - 68)) | (1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormat - 68)) | (1 << (XonParser.ID - 68)))) !== 0));
				this.state = 256;
				this.match(XonParser.DEDENT);
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 261;
				this.match(XonParser.Plus);
				this.state = 262;
				this.expression(23);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 263;
				this.match(XonParser.Minus);
				this.state = 264;
				this.expression(22);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 265;
				this.match(XonParser.BitNot);
				this.state = 266;
				this.expression(21);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 267;
				this.match(XonParser.Not);
				this.state = 268;
				this.expression(20);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 269;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 270;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 271;
				this.match(XonParser.StringFormat);
				}
				break;

			case 8:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 272;
				this.match(XonParser.OpenBracket);
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (XonParser.OpenBracket - 23)) | (1 << (XonParser.OpenParen - 23)) | (1 << (XonParser.OpenBrace - 23)) | (1 << (XonParser.Plus - 23)) | (1 << (XonParser.Minus - 23)) | (1 << (XonParser.BitNot - 23)) | (1 << (XonParser.Not - 23)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.DecimalLiteral - 64)) | (1 << (XonParser.FloatLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormat - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
					{
					this.state = 273;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 274;
						this.match(XonParser.Comma);
						this.state = 275;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 283;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 9:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				this.match(XonParser.OpenBracket);
				this.state = 285;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 286;
				this.match(XonParser.Colon);
				this.state = 287;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 288;
					this.match(XonParser.Colon);
					this.state = 289;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 292;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 10:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 294;
				this.match(XonParser.OpenBrace);
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 295;
					this.match(XonParser.ID);
					this.state = 296;
					this.match(XonParser.Colon);
					this.state = 297;
					this.expression(0);
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 298;
						this.match(XonParser.Comma);
						this.state = 299;
						this.match(XonParser.ID);
						this.state = 300;
						this.match(XonParser.Colon);
						this.state = 301;
						this.expression(0);
						}
						}
						this.state = 306;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 309;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 11:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 310;
				this.match(XonParser.OpenParen);
				this.state = 311;
				this.expression(0);
				this.state = 312;
				this.match(XonParser.CloseParen);
				}
				break;

			case 12:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.match(XonParser.LambdaStart);
				this.state = 324;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 315;
					this.match(XonParser.ID);
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 316;
						this.match(XonParser.Comma);
						this.state = 317;
						this.match(XonParser.ID);
						}
						}
						this.state = 322;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 323;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 326;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 408;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 406;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 329;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 330;
						this.match(XonParser.Pow);
						this.state = 331;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 332;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 333;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.Multiply - 40)) | (1 << (XonParser.Divide - 40)) | (1 << (XonParser.Modulus - 40)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 334;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 335;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 336;
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
						this.state = 337;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 338;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 339;
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
						this.state = 340;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 341;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 342;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (XonParser.LessThan - 45)) | (1 << (XonParser.MoreThan - 45)) | (1 << (XonParser.LessThanEquals - 45)) | (1 << (XonParser.MoreThanEquals - 45)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 343;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 344;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 345;
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
						this.state = 346;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 347;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 348;
						this.match(XonParser.BitAnd);
						this.state = 349;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 350;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 351;
						this.match(XonParser.BitXor);
						this.state = 352;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 353;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 354;
						this.match(XonParser.BitOr);
						this.state = 355;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 356;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 357;
						this.match(XonParser.And);
						this.state = 358;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 359;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 360;
						this.match(XonParser.Or);
						this.state = 361;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 362;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 363;
						this.match(XonParser.Pipe);
						this.state = 366;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
						case 1:
							{
							this.state = 364;
							this.match(XonParser.ID);
							this.state = 365;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 368;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 369;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 370;
						this.match(XonParser.OpenParen);
						this.state = 379;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (XonParser.OpenBracket - 23)) | (1 << (XonParser.OpenParen - 23)) | (1 << (XonParser.OpenBrace - 23)) | (1 << (XonParser.Plus - 23)) | (1 << (XonParser.Minus - 23)) | (1 << (XonParser.BitNot - 23)) | (1 << (XonParser.Not - 23)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.DecimalLiteral - 64)) | (1 << (XonParser.FloatLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormat - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
							{
							this.state = 371;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 376;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 372;
								this.match(XonParser.Comma);
								this.state = 373;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 378;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 381;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 382;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 383;
						this.match(XonParser.OpenBracket);
						this.state = 384;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 385;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 388;
						this.match(XonParser.OpenBracket);
						this.state = 389;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 390;
						this.match(XonParser.Colon);
						this.state = 392;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (XonParser.OpenBracket - 23)) | (1 << (XonParser.OpenParen - 23)) | (1 << (XonParser.OpenBrace - 23)) | (1 << (XonParser.Plus - 23)) | (1 << (XonParser.Minus - 23)) | (1 << (XonParser.BitNot - 23)) | (1 << (XonParser.Not - 23)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.DecimalLiteral - 64)) | (1 << (XonParser.FloatLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormat - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
							{
							this.state = 391;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 396;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 394;
							this.match(XonParser.Colon);
							this.state = 395;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 398;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 400;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 402;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 401;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 404;
						this.match(XonParser.Dot);
						this.state = 405;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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

	public constant(): ConstantContext;
	public constant(_p: number): ConstantContext;
	// @RuleVersion(0)
	public constant(_p?: number): ConstantContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConstantContext = new ConstantContext(this._ctx, _parentState);
		let _prevctx: ConstantContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, XonParser.RULE_constant, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Plus:
				{
				_localctx = new UnaryPlusConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 412;
				this.match(XonParser.Plus);
				this.state = 413;
				this.constant(16);
				}
				break;
			case XonParser.Minus:
				{
				_localctx = new UnaryMinusConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 414;
				this.match(XonParser.Minus);
				this.state = 415;
				this.constant(15);
				}
				break;
			case XonParser.BitNot:
				{
				_localctx = new BitNotConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 416;
				this.match(XonParser.BitNot);
				this.state = 417;
				this.constant(14);
				}
				break;
			case XonParser.Not:
				{
				_localctx = new LogicalNotConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 418;
				this.match(XonParser.Not);
				this.state = 419;
				this.constant(13);
				}
				break;
			case XonParser.NullLiteral:
			case XonParser.BooleanLiteral:
			case XonParser.DecimalLiteral:
			case XonParser.FloatLiteral:
			case XonParser.StringLiteral:
				{
				_localctx = new LiteralConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 420;
				this.literal();
				}
				break;
			case XonParser.ID:
				{
				_localctx = new IdConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 421;
				this.match(XonParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 459;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 457;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new PowConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as PowConstantContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 424;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 425;
						this.match(XonParser.Pow);
						this.state = 426;
						(_localctx as PowConstantContext)._exponent = this.constant(18);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as MulDivModConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 427;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 428;
						(_localctx as MulDivModConstantContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.Multiply - 40)) | (1 << (XonParser.Divide - 40)) | (1 << (XonParser.Modulus - 40)))) !== 0))) {
							(_localctx as MulDivModConstantContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 429;
						(_localctx as MulDivModConstantContext)._right = this.constant(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as AddSubConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 430;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 431;
						(_localctx as AddSubConstantContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Plus || _la === XonParser.Minus)) {
							(_localctx as AddSubConstantContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 432;
						(_localctx as AddSubConstantContext)._right = this.constant(12);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as BitShiftConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 433;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 434;
						(_localctx as BitShiftConstantContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic) | (1 << XonParser.RightShiftLogical))) !== 0))) {
							(_localctx as BitShiftConstantContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 435;
						(_localctx as BitShiftConstantContext)._right = this.constant(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as RelationalConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 436;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 437;
						(_localctx as RelationalConstantContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (XonParser.LessThan - 45)) | (1 << (XonParser.MoreThan - 45)) | (1 << (XonParser.LessThanEquals - 45)) | (1 << (XonParser.MoreThanEquals - 45)))) !== 0))) {
							(_localctx as RelationalConstantContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 438;
						(_localctx as RelationalConstantContext)._right = this.constant(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as EqualityConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 439;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 440;
						(_localctx as EqualityConstantContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Equals || _la === XonParser.NotEquals)) {
							(_localctx as EqualityConstantContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 441;
						(_localctx as EqualityConstantContext)._right = this.constant(9);
						}
						break;

					case 7:
						{
						_localctx = new BitAndConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as BitAndConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 442;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 443;
						this.match(XonParser.BitAnd);
						this.state = 444;
						(_localctx as BitAndConstantContext)._right = this.constant(8);
						}
						break;

					case 8:
						{
						_localctx = new BitXorConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as BitXorConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 445;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 446;
						this.match(XonParser.BitXor);
						this.state = 447;
						(_localctx as BitXorConstantContext)._right = this.constant(7);
						}
						break;

					case 9:
						{
						_localctx = new BitOrConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as BitOrConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 448;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 449;
						this.match(XonParser.BitOr);
						this.state = 450;
						(_localctx as BitOrConstantContext)._right = this.constant(6);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as LogicalAndConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 451;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 452;
						this.match(XonParser.And);
						this.state = 453;
						(_localctx as LogicalAndConstantContext)._right = this.constant(5);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrConstantContext(new ConstantContext(_parentctx, _parentState));
						(_localctx as LogicalOrConstantContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_constant);
						this.state = 454;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 455;
						this.match(XonParser.Or);
						this.state = 456;
						(_localctx as LogicalOrConstantContext)._right = this.constant(4);
						}
						break;
					}
					}
				}
				this.state = 461;
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
		this.enterRule(_localctx, 26, XonParser.RULE_literal);
		try {
			this.state = 467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 463;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 464;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 465;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 466;
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
		case 11:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 12:
			return this.constant_sempred(_localctx as ConstantContext, predIndex);
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
	private constant_sempred(_localctx: ConstantContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 17);

		case 17:
			return this.precpred(this._ctx, 12);

		case 18:
			return this.precpred(this._ctx, 11);

		case 19:
			return this.precpred(this._ctx, 10);

		case 20:
			return this.precpred(this._ctx, 9);

		case 21:
			return this.precpred(this._ctx, 8);

		case 22:
			return this.precpred(this._ctx, 7);

		case 23:
			return this.precpred(this._ctx, 6);

		case 24:
			return this.precpred(this._ctx, 5);

		case 25:
			return this.precpred(this._ctx, 4);

		case 26:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u01D8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03-" +
		"\n\x03\f\x03\x0E\x030\v\x03\x05\x032\n\x03\x03\x04\x07\x045\n\x04\f\x04" +
		"\x0E\x048\v\x04\x03\x04\x03\x04\x03\x04\x07\x04=\n\x04\f\x04\x0E\x04@" +
		"\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05F\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06P\n\x06\r\x06" +
		"\x0E\x06Q\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x06\x06^\n\x06\r\x06\x0E\x06_\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06l" +
		"\n\x06\r\x06\x0E\x06m\x03\x06\x03\x06\x05\x06r\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x05\x07w\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07" +
		"\x07\x7F\n\x07\f\x07\x0E\x07\x82\v\x07\x05\x07\x84\n\x07\x03\x07\x05\x07" +
		"\x87\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x8D\n\b\x03\b\x03\b\x05\b\x91" +
		"\n\b\x05\b\x93\n\b\x03\t\x03\t\x03\t\x05\t\x98\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x06\t\xA1\n\t\r\t\x0E\t\xA2\x03\t\x03\t\x05\t\xA7" +
		"\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xB0\n\n\x03\n\x05" +
		"\n\xB3\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\xB9\n\n\x05\n\xBB\n\n\x03\n\x03" +
		"\n\x05\n\xBF\n\n\x03\n\x05\n\xC2\n\n\x03\n\x05\n\xC5\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xD0\n\n\x03\n\x03\n\x05\n" +
		"\xD4\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xDD\n\n\f\n\x0E" +
		"\n\xE0\v\n\x05\n\xE2\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xE9\n\n\x03" +
		"\n\x03\n\x05\n\xED\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xF4\n\v\x03" +
		"\v\x03\v\x05\v\xF8\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\xFF\n\f\r\f" +
		"\x0E\f\u0100\x03\f\x03\f\x05\f\u0105\n\f\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07" +
		"\r\u0117\n\r\f\r\x0E\r\u011A\v\r\x05\r\u011C\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0125\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0131\n\r\f\r\x0E\r\u0134\v\r\x05\r\u0136" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0141" +
		"\n\r\f\r\x0E\r\u0144\v\r\x03\r\x05\r\u0147\n\r\x03\r\x05\r\u014A\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0171\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0179\n\r" +
		"\f\r\x0E\r\u017C\v\r\x05\r\u017E\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u018B\n\r\x03\r\x03\r\x05\r\u018F" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0195\n\r\x03\r\x03\r\x07\r\u0199\n" +
		"\r\f\r\x0E\r\u019C\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01A9\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01CC\n\x0E\f\x0E\x0E\x0E" +
		"\u01CF\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01D6\n\x0F" +
		"\x03\x0F\x02\x02\x04\x18\x1A\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02" +
		"\b\x04\x02IIKK\x03\x02*,\x03\x02&\'\x03\x02\x16\x18\x03\x02/2\x03\x02" +
		"34\x02\u0235\x02!\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x066\x03\x02\x02" +
		"\x02\bE\x03\x02\x02\x02\nq\x03\x02\x02\x02\f\x86\x03\x02\x02\x02\x0E\x88" +
		"\x03\x02\x02\x02\x10\xA6\x03\x02\x02\x02\x12\xEC\x03\x02\x02\x02\x14\xEE" +
		"\x03\x02\x02\x02\x16\xF9\x03\x02\x02\x02\x18\u0149\x03\x02\x02\x02\x1A" +
		"\u01A8\x03\x02\x02\x02\x1C\u01D5\x03\x02\x02\x02\x1E \x05\x12\n\x02\x1F" +
		"\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02" +
		"\x02\x02\"\x03\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x05\x06\x04\x02%1\x07" +
		"\"\x02\x02&\'\x07*\x02\x02\'(\x07\x0F\x02\x02(2\x07K\x02\x02).\x05\b\x05" +
		"\x02*+\x07\x1F\x02\x02+-\x05\b\x05\x02,*\x03\x02\x02\x02-0\x03\x02\x02" +
		"\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02" +
		"\x021&\x03\x02\x02\x021)\x03\x02\x02\x022\x05\x03\x02\x02\x0235\x07%\x02" +
		"\x0243\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02" +
		"\x0279\x03\x02\x02\x0286\x03\x02\x02\x029>\t\x02\x02\x02:;\x07%\x02\x02" +
		";=\t\x02\x02\x02<:\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02" +
		">?\x03\x02\x02\x02?\x07\x03\x02\x02\x02@>\x03\x02\x02\x02AB\x07K\x02\x02" +
		"BC\x07\x0F\x02\x02CF\x07K\x02\x02DF\x07K\x02\x02EA\x03\x02\x02\x02ED\x03" +
		"\x02\x02\x02F\t\x03\x02\x02\x02GH\x07\x05\x02\x02HI\x07K\x02\x02IJ\x07" +
		"\"\x02\x02JK\x07\x12\x02\x02KO\x07\x03\x02\x02LM\x05\f\x07\x02MN\x07\x12" +
		"\x02\x02NP\x03\x02\x02\x02OL\x03\x02\x02\x02PQ\x03\x02\x02\x02QO\x03\x02" +
		"\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x04\x02\x02Tr\x03\x02" +
		"\x02\x02UV\x07\x06\x02\x02VW\x07K\x02\x02WX\x07\"\x02\x02XY\x07\x12\x02" +
		"\x02Y]\x07\x03\x02\x02Z[\x05\x0E\b\x02[\\\x07\x12\x02\x02\\^\x03\x02\x02" +
		"\x02]Z\x03\x02\x02\x02^_\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02" +
		"\x02`a\x03\x02\x02\x02ab\x07\x04\x02\x02br\x03\x02\x02\x02cd\x07\x07\x02" +
		"\x02de\x07K\x02\x02ef\x07\"\x02\x02fg\x07\x12\x02\x02gk\x07\x03\x02\x02" +
		"hi\x05\x10\t\x02ij\x07\x12\x02\x02jl\x03\x02\x02\x02kh\x03\x02\x02\x02" +
		"lm\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02\x02" +
		"op\x07\x04\x02\x02pr\x03\x02\x02\x02qG\x03\x02\x02\x02qU\x03\x02\x02\x02" +
		"qc\x03\x02\x02\x02r\v\x03\x02\x02\x02st\x07K\x02\x02tv\x07\"\x02\x02u" +
		"w\x07K\x02\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02x" +
		"y\x07 \x02\x02y\x87\x05\x18\r\x02z\x83\x07K\x02\x02{\x80\x05\x14\v\x02" +
		"|}\x07\x1F\x02\x02}\x7F\x05\x14\v\x02~|\x03\x02\x02\x02\x7F\x82\x03\x02" +
		"\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x84\x03\x02" +
		"\x02\x02\x82\x80\x03\x02\x02\x02\x83{\x03\x02\x02\x02\x83\x84\x03\x02" +
		"\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x05\x16\f\x02\x86s\x03\x02\x02" +
		"\x02\x86z\x03\x02\x02\x02\x87\r\x03\x02\x02\x02\x88\x92\x07K\x02\x02\x89" +
		"\x90\x07 \x02\x02\x8A\x91\x05\x1C\x0F\x02\x8B\x8D\x05\x1C\x0F\x02\x8C" +
		"\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E" +
		"\x8F\x07\"\x02\x02\x8F\x91\x05\x1A\x0E\x02\x90\x8A\x03\x02\x02\x02\x90" +
		"\x8C\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x89\x03\x02\x02\x02\x92" +
		"\x93\x03\x02\x02\x02\x93\x0F\x03\x02\x02\x02\x94\x95\x07K\x02\x02\x95" +
		"\x97\x07\"\x02\x02\x96\x98\x07K\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x07 \x02\x02\x9A\xA7" +
		"\x05\x18\r\x02\x9B\x9C\x07K\x02\x02\x9C\x9D\x07\"\x02\x02\x9D\x9E\x07" +
		"\x12\x02\x02\x9E\xA0\x07\x03\x02\x02\x9F\xA1\x05\x10\t\x02\xA0\x9F\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03" +
		"\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\x04\x02\x02\xA5\xA7\x03" +
		"\x02\x02\x02\xA6\x94\x03\x02\x02\x02\xA6\x9B\x03\x02\x02\x02\xA7\x11\x03" +
		"\x02\x02\x02\xA8\xED\x07\x11\x02\x02\xA9\xAA\x07\b\x02\x02\xAA\xAB\x05" +
		"\x18\r\x02\xAB\xB2\x05\x16\f\x02\xAC\xAF\x07\t\x02\x02\xAD\xAE\x07\b\x02" +
		"\x02\xAE\xB0\x05\x18\r\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02" +
		"\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x05\x16\f\x02\xB2\xAC\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xED\x03\x02\x02\x02\xB4\xC4\x07\n\x02" +
		"\x02\xB5\xBA\x07K\x02\x02\xB6\xB8\x07\x1F\x02\x02\xB7\xB9\x07K\x02\x02" +
		"\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02\x02\x02" +
		"\xBA\xB6\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02" +
		"\xBC\xBD\x07\x1F\x02\x02\xBD\xBF\x07K\x02\x02\xBE\xBC\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x07\v\x02\x02" +
		"\xC1\xB5\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02" +
		"\xC3\xC5\x05\x18\r\x02\xC4\xC1\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
		"\xC5\xC6\x03\x02\x02\x02\xC6\xED\x05\x16\f\x02\xC7\xC8\x07K\x02\x02\xC8" +
		"\xC9\x07#\x02\x02\xC9\xCA\x07 \x02\x02\xCA\xED\x05\x18\r\x02\xCB\xCC\x07" +
		"K\x02\x02\xCC\xD3\x07\"\x02\x02\xCD\xD4\x07K\x02\x02\xCE\xD0\x07K\x02" +
		"\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02" +
		"\x02\xD1\xD2\x07 \x02\x02\xD2\xD4\x05\x18\r\x02\xD3\xCD\x03\x02\x02\x02" +
		"\xD3\xCF\x03\x02\x02\x02\xD4\xED\x03\x02\x02\x02\xD5\xD6\x07K\x02\x02" +
		"\xD6\xD7\x07 \x02\x02\xD7\xED\x05\x18\r\x02\xD8\xE1\x07K\x02\x02\xD9\xDE" +
		"\x05\x14\v\x02\xDA\xDB\x07\x1F\x02\x02\xDB\xDD\x05\x14\v\x02\xDC\xDA\x03" +
		"\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03" +
		"\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xD9\x03" +
		"\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xED\x05" +
		"\x16\f\x02\xE4\xED\x07\f\x02\x02\xE5\xED\x07\r\x02\x02\xE6\xE8\x07\x0E" +
		"\x02\x02\xE7\xE9\x05\x18\r\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02" +
		"\x02\x02\xE9\xED\x03\x02\x02\x02\xEA\xED\x05\x18\r\x02\xEB\xED\x07\x12" +
		"\x02\x02\xEC\xA8\x03\x02\x02\x02\xEC\xA9\x03\x02\x02\x02\xEC\xB4\x03\x02" +
		"\x02\x02\xEC\xC7\x03\x02\x02\x02\xEC\xCB\x03\x02\x02\x02\xEC\xD5\x03\x02" +
		"\x02\x02\xEC\xD8\x03\x02\x02\x02\xEC\xE4\x03\x02\x02\x02\xEC\xE5\x03\x02" +
		"\x02\x02\xEC\xE6\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02" +
		"\x02\x02\xED\x13\x03\x02\x02\x02\xEE\xEF\x07K\x02\x02\xEF\xF0\x07\"\x02" +
		"\x02\xF0\xF3\x07K\x02\x02\xF1\xF2\x07 \x02\x02\xF2\xF4\x05\x18\r\x02\xF3" +
		"\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5" +
		"\xF6\x07\"\x02\x02\xF6\xF8\x05\x18\r\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\x15\x03\x02\x02\x02\xF9\u0104\x07\"\x02\x02\xFA\u0105" +
		"\x05\x12\n\x02\xFB\xFC\x07\x12\x02\x02\xFC\xFE\x07\x03\x02\x02\xFD\xFF" +
		"\x05\x12\n\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100" +
		"\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u0103\x07\x04\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\xFA" +
		"\x03\x02\x02\x02\u0104\xFB\x03\x02\x02\x02\u0105\x17\x03\x02\x02\x02\u0106" +
		"\u0107\b\r\x01\x02\u0107\u0108\x07&\x02\x02\u0108\u014A\x05\x18\r\x19" +
		"\u0109\u010A\x07\'\x02\x02\u010A\u014A\x05\x18\r\x18\u010B\u010C\x07(" +
		"\x02\x02\u010C\u014A\x05\x18\r\x17\u010D\u010E\x07)\x02\x02\u010E\u014A" +
		"\x05\x18\r\x16\u010F\u014A\x07K\x02\x02\u0110\u014A\x05\x1C\x0F\x02\u0111" +
		"\u014A\x07J\x02\x02\u0112\u011B\x07\x19\x02\x02\u0113\u0118\x05\x18\r" +
		"\x02\u0114\u0115\x07\x1F\x02\x02\u0115\u0117\x05\x18\r\x02\u0116\u0114" +
		"\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02" +
		"\u0118\u0119\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03" +
		"\x02\x02\x02\u011B\u0113\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u014A\x07\x1A\x02\x02\u011E\u011F\x07\x19" +
		"\x02\x02\u011F\u0120\x05\x18\r\x02\u0120\u0121\x07\"\x02\x02\u0121\u0124" +
		"\x05\x18\r\x02\u0122\u0123\x07\"\x02\x02\u0123\u0125\x05\x18\r\x02\u0124" +
		"\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02" +
		"\x02\x02\u0126\u0127\x07\x1A\x02\x02\u0127\u014A\x03\x02\x02\x02\u0128" +
		"\u0135\x07\x1D\x02\x02\u0129\u012A\x07K\x02\x02\u012A\u012B\x07\"\x02" +
		"\x02\u012B\u0132\x05\x18\r\x02\u012C\u012D\x07\x1F\x02\x02\u012D\u012E" +
		"\x07K\x02\x02\u012E\u012F\x07\"\x02\x02\u012F\u0131\x05\x18\r\x02\u0130" +
		"\u012C\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02" +
		"\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134" +
		"\u0132\x03\x02\x02\x02\u0135\u0129\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u014A\x07\x1E\x02\x02\u0138" +
		"\u0139\x07\x1B\x02\x02\u0139\u013A\x05\x18\r\x02\u013A\u013B\x07\x1C\x02" +
		"\x02\u013B\u014A\x03\x02\x02\x02\u013C\u0146\x07B\x02\x02\u013D\u0142" +
		"\x07K\x02\x02\u013E\u013F\x07\x1F\x02\x02\u013F\u0141\x07K\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02" +
		"\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144" +
		"\u0142\x03\x02\x02\x02\u0145\u0147\x07\"\x02\x02\u0146\u013D\x03\x02\x02" +
		"\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A" +
		"\x05\x18\r\x03\u0149\u0106\x03\x02\x02\x02\u0149\u0109\x03\x02\x02\x02" +
		"\u0149\u010B\x03\x02\x02\x02\u0149\u010D\x03\x02\x02\x02\u0149\u010F\x03" +
		"\x02\x02\x02\u0149\u0110\x03\x02\x02\x02\u0149\u0111\x03\x02\x02\x02\u0149" +
		"\u0112\x03\x02\x02\x02\u0149\u011E\x03\x02\x02\x02\u0149\u0128\x03\x02" +
		"\x02\x02\u0149\u0138\x03\x02\x02\x02\u0149\u013C\x03\x02\x02\x02\u014A" +
		"\u019A\x03\x02\x02\x02\u014B\u014C\f\x1A\x02\x02\u014C\u014D\x07-\x02" +
		"\x02\u014D\u0199\x05\x18\r\x1B\u014E\u014F\f\x15\x02\x02\u014F\u0150\t" +
		"\x03\x02\x02\u0150\u0199\x05\x18\r\x16\u0151\u0152\f\x14\x02\x02\u0152" +
		"\u0153\t\x04\x02\x02\u0153\u0199\x05\x18\r\x15\u0154\u0155\f\x13\x02\x02" +
		"\u0155\u0156\t\x05\x02\x02\u0156\u0199\x05\x18\r\x14\u0157\u0158\f\x12" +
		"\x02\x02\u0158\u0159\t\x06\x02\x02\u0159\u0199\x05\x18\r\x13\u015A\u015B" +
		"\f\x11\x02\x02\u015B\u015C\t\x07\x02\x02\u015C\u0199\x05\x18\r\x12\u015D" +
		"\u015E\f\x10\x02\x02\u015E\u015F\x07\x13\x02\x02\u015F\u0199\x05\x18\r" +
		"\x11\u0160\u0161\f\x0F\x02\x02\u0161\u0162\x07\x15\x02\x02\u0162\u0199" +
		"\x05\x18\r\x10\u0163\u0164\f\x0E\x02\x02\u0164\u0165\x07\x14\x02\x02\u0165" +
		"\u0199\x05\x18\r\x0F\u0166\u0167\f\r\x02\x02\u0167\u0168\x075\x02\x02" +
		"\u0168\u0199\x05\x18\r\x0E\u0169\u016A\f\f\x02\x02\u016A\u016B\x076\x02" +
		"\x02\u016B\u0199\x05\x18\r\r\u016C\u016D\f\x04\x02\x02\u016D\u0170\x07" +
		"C\x02\x02\u016E\u016F\x07K\x02\x02\u016F\u0171\x07\"\x02\x02\u0170\u016E" +
		"\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02" +
		"\u0172\u0199\x05\x18\r\x05\u0173\u0174\f\x1E\x02\x02\u0174\u017D\x07\x1B" +
		"\x02\x02\u0175\u017A\x05\x18\r\x02\u0176\u0177\x07\x1F\x02\x02\u0177\u0179" +
		"\x05\x18\r\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02" +
		"\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017E\x03" +
		"\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D\u0175\x03\x02\x02\x02\u017D" +
		"\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0199\x07\x1C" +
		"\x02\x02\u0180\u0181\f\x1D\x02\x02\u0181\u0182\x07\x19\x02\x02\u0182\u0183" +
		"\x05\x18\r\x02\u0183\u0184\x07\x1A\x02\x02\u0184\u0199\x03\x02\x02\x02" +
		"\u0185\u0186\f\x1C\x02\x02\u0186\u0187\x07\x19\x02\x02\u0187\u0188\x05" +
		"\x18\r\x02\u0188\u018A\x07\"\x02\x02\u0189\u018B\x05\x18\r\x02\u018A\u0189" +
		"\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02" +
		"\u018C\u018D\x07\"\x02\x02\u018D\u018F\x05\x18\r\x02\u018E\u018C\x03\x02" +
		"\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190" +
		"\u0191\x07\x1A\x02\x02\u0191\u0199\x03\x02\x02\x02\u0192\u0194\f\x1B\x02" +
		"\x02\u0193\u0195\x07!\x02\x02\u0194\u0193\x03\x02\x02\x02\u0194\u0195" +
		"\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x07%\x02\x02" +
		"\u0197\u0199\x07K\x02\x02\u0198\u014B\x03\x02\x02\x02\u0198\u014E\x03" +
		"\x02\x02\x02\u0198\u0151\x03\x02\x02\x02\u0198\u0154\x03\x02\x02\x02\u0198" +
		"\u0157\x03\x02\x02\x02\u0198\u015A\x03\x02\x02\x02\u0198\u015D\x03\x02" +
		"\x02\x02\u0198\u0160\x03\x02\x02\x02\u0198\u0163\x03\x02\x02\x02\u0198" +
		"\u0166\x03\x02\x02\x02\u0198\u0169\x03\x02\x02\x02\u0198\u016C\x03\x02" +
		"\x02\x02\u0198\u0173\x03\x02\x02\x02\u0198\u0180\x03\x02\x02\x02\u0198" +
		"\u0185\x03\x02\x02\x02\u0198\u0192\x03\x02\x02\x02\u0199\u019C\x03\x02" +
		"\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
		"\x19\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u019E\b\x0E\x01" +
		"\x02\u019E\u019F\x07&\x02\x02\u019F\u01A9\x05\x1A\x0E\x12\u01A0\u01A1" +
		"\x07\'\x02\x02\u01A1\u01A9\x05\x1A\x0E\x11\u01A2\u01A3\x07(\x02\x02\u01A3" +
		"\u01A9\x05\x1A\x0E\x10\u01A4\u01A5\x07)\x02\x02\u01A5\u01A9\x05\x1A\x0E" +
		"\x0F\u01A6\u01A9\x05\x1C\x0F\x02\u01A7\u01A9\x07K\x02\x02\u01A8\u019D" +
		"\x03\x02\x02\x02\u01A8\u01A0\x03\x02\x02\x02\u01A8\u01A2\x03\x02\x02\x02" +
		"\u01A8\u01A4\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A7\x03" +
		"\x02\x02\x02\u01A9\u01CD\x03\x02\x02\x02\u01AA\u01AB\f\x13\x02\x02\u01AB" +
		"\u01AC\x07-\x02\x02\u01AC\u01CC\x05\x1A\x0E\x14\u01AD\u01AE\f\x0E\x02" +
		"\x02\u01AE\u01AF\t\x03\x02\x02\u01AF\u01CC\x05\x1A\x0E\x0F\u01B0\u01B1" +
		"\f\r\x02\x02\u01B1\u01B2\t\x04\x02\x02\u01B2\u01CC\x05\x1A\x0E\x0E\u01B3" +
		"\u01B4\f\f\x02\x02\u01B4\u01B5\t\x05\x02\x02\u01B5\u01CC\x05\x1A\x0E\r" +
		"\u01B6\u01B7\f\v\x02\x02\u01B7\u01B8\t\x06\x02\x02\u01B8\u01CC\x05\x1A" +
		"\x0E\f\u01B9\u01BA\f\n\x02\x02\u01BA\u01BB\t\x07\x02\x02\u01BB\u01CC\x05" +
		"\x1A\x0E\v\u01BC\u01BD\f\t\x02\x02\u01BD\u01BE\x07\x13\x02\x02\u01BE\u01CC" +
		"\x05\x1A\x0E\n\u01BF\u01C0\f\b\x02\x02\u01C0\u01C1\x07\x15\x02\x02\u01C1" +
		"\u01CC\x05\x1A\x0E\t\u01C2\u01C3\f\x07\x02\x02\u01C3\u01C4\x07\x14\x02" +
		"\x02\u01C4\u01CC\x05\x1A\x0E\b\u01C5\u01C6\f\x06\x02\x02\u01C6\u01C7\x07" +
		"5\x02\x02\u01C7\u01CC\x05\x1A\x0E\x07\u01C8\u01C9\f\x05\x02\x02\u01C9" +
		"\u01CA\x076\x02\x02\u01CA\u01CC\x05\x1A\x0E\x06\u01CB\u01AA\x03\x02\x02" +
		"\x02\u01CB\u01AD\x03\x02\x02\x02\u01CB\u01B0\x03\x02\x02\x02\u01CB\u01B3" +
		"\x03\x02\x02\x02\u01CB\u01B6\x03\x02\x02\x02\u01CB\u01B9\x03\x02\x02\x02" +
		"\u01CB\u01BC\x03\x02\x02\x02\u01CB\u01BF\x03\x02\x02\x02\u01CB\u01C2\x03" +
		"\x02\x02\x02\u01CB\u01C5\x03\x02\x02\x02\u01CB\u01C8\x03\x02\x02\x02\u01CC" +
		"\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
		"\x02\x02\u01CE\x1B\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01D6" +
		"\x07E\x02\x02\u01D1\u01D6\x07F\x02\x02\u01D2\u01D6\x07G\x02\x02\u01D3" +
		"\u01D6\x07H\x02\x02\u01D4\u01D6\x07I\x02\x02\u01D5\u01D0\x03\x02\x02\x02" +
		"\u01D5\u01D1\x03\x02\x02\x02\u01D5\u01D2\x03\x02\x02\x02\u01D5\u01D3\x03" +
		"\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\x1D\x03\x02\x02\x02;!." +
		"16>EQ_mqv\x80\x83\x86\x8C\x90\x92\x97\xA2\xA6\xAF\xB2\xB8\xBA\xBE\xC1" +
		"\xC4\xCF\xD3\xDE\xE1\xE8\xEC\xF3\xF7\u0100\u0104\u0118\u011B\u0124\u0132" +
		"\u0135\u0142\u0146\u0149\u0170\u017A\u017D\u018A\u018E\u0194\u0198\u019A" +
		"\u01A8\u01CB\u01CD\u01D5";
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


export class DefinitionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
	public copyFrom(ctx: DefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClassDefinitionContext extends DefinitionContext {
	public Class(): TerminalNode { return this.getToken(XonParser.Class, 0); }
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
	public classItem(): ClassItemContext[];
	public classItem(i: number): ClassItemContext;
	public classItem(i?: number): ClassItemContext | ClassItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassItemContext);
		} else {
			return this.getRuleContext(i, ClassItemContext);
		}
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EnumDefinitionContext extends DefinitionContext {
	public Enum(): TerminalNode { return this.getToken(XonParser.Enum, 0); }
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
	public enumItem(): EnumItemContext[];
	public enumItem(i: number): EnumItemContext;
	public enumItem(i?: number): EnumItemContext | EnumItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumItemContext);
		} else {
			return this.getRuleContext(i, EnumItemContext);
		}
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SchemeDefinitionContext extends DefinitionContext {
	public Scheme(): TerminalNode { return this.getToken(XonParser.Scheme, 0); }
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
	public schemeItem(): SchemeItemContext[];
	public schemeItem(i: number): SchemeItemContext;
	public schemeItem(i?: number): SchemeItemContext | SchemeItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SchemeItemContext);
		} else {
			return this.getRuleContext(i, SchemeItemContext);
		}
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ClassItemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_classItem; }
	public copyFrom(ctx: ClassItemContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyClassItemContext extends ClassItemContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ClassItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodClassItemContext extends ClassItemContext {
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
	constructor(ctx: ClassItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class EnumItemContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_enumItem; }
}


export class SchemeItemContext extends ParserRuleContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	public schemeItem(): SchemeItemContext[];
	public schemeItem(i: number): SchemeItemContext;
	public schemeItem(i?: number): SchemeItemContext | SchemeItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SchemeItemContext);
		} else {
			return this.getRuleContext(i, SchemeItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_schemeItem; }
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
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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
export class ConstantStatementContext extends StatementContext {
	public _name: Token;
	public _value: ExpressionContext;
	public TwoColon(): TerminalNode { return this.getToken(XonParser.TwoColon, 0); }
	public Assign(): TerminalNode { return this.getToken(XonParser.Assign, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StatementContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
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
export class ContinueStatementContext extends StatementContext {
	public Continue(): TerminalNode { return this.getToken(XonParser.Continue, 0); }
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
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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


export class BodyContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
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


export class ConstantContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_constant; }
	public copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class PowConstantContext extends ConstantContext {
	public _base: ConstantContext;
	public _exponent: ConstantContext;
	public Pow(): TerminalNode { return this.getToken(XonParser.Pow, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryPlusConstantContext extends ConstantContext {
	public Plus(): TerminalNode { return this.getToken(XonParser.Plus, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryMinusConstantContext extends ConstantContext {
	public Minus(): TerminalNode { return this.getToken(XonParser.Minus, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitNotConstantContext extends ConstantContext {
	public BitNot(): TerminalNode { return this.getToken(XonParser.BitNot, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalNotConstantContext extends ConstantContext {
	public Not(): TerminalNode { return this.getToken(XonParser.Not, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _operation: Token;
	public _right: ConstantContext;
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(XonParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulus, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _operation: Token;
	public _right: ConstantContext;
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitShiftConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _operation: Token;
	public _right: ConstantContext;
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftLogical, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _operation: Token;
	public _right: ConstantContext;
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThanEquals, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThanEquals, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _operation: Token;
	public _right: ConstantContext;
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(XonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.NotEquals, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitAndConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _right: ConstantContext;
	public BitAnd(): TerminalNode { return this.getToken(XonParser.BitAnd, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitXorConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _right: ConstantContext;
	public BitXor(): TerminalNode { return this.getToken(XonParser.BitXor, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitOrConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _right: ConstantContext;
	public BitOr(): TerminalNode { return this.getToken(XonParser.BitOr, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalAndConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _right: ConstantContext;
	public And(): TerminalNode { return this.getToken(XonParser.And, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalOrConstantContext extends ConstantContext {
	public _left: ConstantContext;
	public _right: ConstantContext;
	public Or(): TerminalNode { return this.getToken(XonParser.Or, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralConstantContext extends ConstantContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdConstantContext extends ConstantContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ConstantContext) {
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
	public NullLiteral(): TerminalNode { return this.getToken(XonParser.NullLiteral, 0); }
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
export class StringLiteralContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


