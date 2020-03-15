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
	public static readonly Await = 15;
	public static readonly Preprocessor = 16;
	public static readonly LineBreak = 17;
	public static readonly BitAnd = 18;
	public static readonly BitOr = 19;
	public static readonly BitXor = 20;
	public static readonly RightShiftArithmetic = 21;
	public static readonly LeftShiftArithmetic = 22;
	public static readonly RightShiftLogical = 23;
	public static readonly OpenBracket = 24;
	public static readonly CloseBracket = 25;
	public static readonly OpenParen = 26;
	public static readonly CloseParen = 27;
	public static readonly OpenBrace = 28;
	public static readonly CloseBrace = 29;
	public static readonly Comma = 30;
	public static readonly Assign = 31;
	public static readonly QuestionMark = 32;
	public static readonly Colon = 33;
	public static readonly TwoColon = 34;
	public static readonly Ellipsis = 35;
	public static readonly Dot = 36;
	public static readonly Plus = 37;
	public static readonly Minus = 38;
	public static readonly BitNot = 39;
	public static readonly Not = 40;
	public static readonly Multiply = 41;
	public static readonly Divide = 42;
	public static readonly Modulus = 43;
	public static readonly Pow = 44;
	public static readonly Sharp = 45;
	public static readonly LessThan = 46;
	public static readonly MoreThan = 47;
	public static readonly LessThanEquals = 48;
	public static readonly MoreThanEquals = 49;
	public static readonly Equals = 50;
	public static readonly NotEquals = 51;
	public static readonly And = 52;
	public static readonly Or = 53;
	public static readonly MultiplyAssign = 54;
	public static readonly DivideAssign = 55;
	public static readonly ModulusAssign = 56;
	public static readonly PlusAssign = 57;
	public static readonly MinusAssign = 58;
	public static readonly LeftShiftArithmeticAssign = 59;
	public static readonly RightShiftArithmeticAssign = 60;
	public static readonly RightShiftLogicalAssign = 61;
	public static readonly BitAndAssign = 62;
	public static readonly BitXorAssign = 63;
	public static readonly BitOrAssign = 64;
	public static readonly LambdaStart = 65;
	public static readonly Pipe = 66;
	public static readonly Underscore = 67;
	public static readonly NullLiteral = 68;
	public static readonly BooleanLiteral = 69;
	public static readonly DecimalLiteral = 70;
	public static readonly FloatLiteral = 71;
	public static readonly StringLiteral = 72;
	public static readonly StringFormatStart = 73;
	public static readonly StringFormatMiddle = 74;
	public static readonly StringFormatEnd = 75;
	public static readonly ID = 76;
	public static readonly Skip = 77;
	public static readonly UnexpectedCharacter = 78;
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
	public static readonly RULE_literal = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "classItem", 
		"enumItem", "schemeItem", "statement", "scopeArgument", "body", "expression", 
		"literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'class'", "'enum'", "'scheme'", "'if'", 
		"'else'", "'loop'", "'in'", "'continue'", "'break'", "'return'", "'as'", 
		"'var'", "'await'", undefined, undefined, "'and'", "'or'", "'xor'", "'>>'", 
		"'<<'", "'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", 
		"'?'", "':'", "'::'", "'...'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", 
		"'/'", "'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
		"'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
		"'>>>='", "'&='", "'^='", "'|='", "'\\'", "'|'", "'_'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Class", "Enum", "Scheme", "If", "Else", 
		"Loop", "In", "Continue", "Break", "Return", "As", "Var", "Await", "Preprocessor", 
		"LineBreak", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "QuestionMark", "Colon", 
		"TwoColon", "Ellipsis", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", 
		"Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", 
		"MoreThanEquals", "Equals", "NotEquals", "And", "Or", "MultiplyAssign", 
		"DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "NullLiteral", 
		"BooleanLiteral", "DecimalLiteral", "FloatLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
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
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Await) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)) | (1 << (XonParser.NullLiteral - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0)) {
				{
				{
				this.state = 26;
				this.statement();
				}
				}
				this.state = 31;
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
			this.state = 32;
			this.importPath();
			this.state = 33;
			this.match(XonParser.Colon);
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Multiply:
				{
				this.state = 34;
				this.match(XonParser.Multiply);
				this.state = 35;
				this.match(XonParser.As);
				this.state = 36;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;
			case XonParser.ID:
				{
				this.state = 37;
				this.importMember();
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 38;
					this.match(XonParser.Comma);
					this.state = 39;
					this.importMember();
					}
					}
					this.state = 44;
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
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 47;
				this.match(XonParser.Dot);
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
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
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 54;
				this.match(XonParser.Dot);
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
				}
				}
				this.state = 60;
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
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				_localctx._name = this.match(XonParser.ID);
				this.state = 62;
				this.match(XonParser.As);
				this.state = 63;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 64;
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
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Class:
				_localctx = new ClassDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.match(XonParser.Class);
				this.state = 68;
				this.match(XonParser.ID);
				this.state = 69;
				this.match(XonParser.Colon);
				this.state = 70;
				this.match(XonParser.LineBreak);
				this.state = 71;
				this.match(XonParser.INDENT);
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 72;
					this.classItem();
					this.state = 73;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 79;
				this.match(XonParser.DEDENT);
				}
				break;
			case XonParser.Enum:
				_localctx = new EnumDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
				this.match(XonParser.Enum);
				this.state = 82;
				this.match(XonParser.ID);
				this.state = 83;
				this.match(XonParser.Colon);
				this.state = 84;
				this.match(XonParser.LineBreak);
				this.state = 85;
				this.match(XonParser.INDENT);
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 86;
					this.enumItem();
					this.state = 87;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 91;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 93;
				this.match(XonParser.DEDENT);
				}
				break;
			case XonParser.Scheme:
				_localctx = new SchemeDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 95;
				this.match(XonParser.Scheme);
				this.state = 96;
				this.match(XonParser.ID);
				this.state = 97;
				this.match(XonParser.Colon);
				this.state = 98;
				this.match(XonParser.LineBreak);
				this.state = 99;
				this.match(XonParser.INDENT);
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 100;
					this.schemeItem();
					this.state = 101;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 107;
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
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				_localctx = new PropertyClassItemContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				(_localctx as PropertyClassItemContext)._name = this.match(XonParser.ID);
				this.state = 112;
				this.match(XonParser.Colon);
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 113;
					(_localctx as PropertyClassItemContext)._valueType = this.match(XonParser.ID);
					}
				}

				{
				this.state = 116;
				this.match(XonParser.Assign);
				this.state = 117;
				(_localctx as PropertyClassItemContext)._value = this.expression(0);
				}
				}
				break;

			case 2:
				_localctx = new MethodClassItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				(_localctx as MethodClassItemContext)._name = this.match(XonParser.ID);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 119;
					this.scopeArgument();
					this.state = 124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 120;
						this.match(XonParser.Comma);
						this.state = 121;
						this.scopeArgument();
						}
						}
						this.state = 126;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 129;
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
			this.state = 132;
			_localctx._name = this.match(XonParser.ID);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 133;
				this.match(XonParser.Assign);
				this.state = 134;
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
	public schemeItem(): SchemeItemContext {
		let _localctx: SchemeItemContext = new SchemeItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_schemeItem);
		let _la: number;
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				_localctx._name = this.match(XonParser.ID);
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 138;
					this.match(XonParser.Colon);
					this.state = 139;
					_localctx._valueType = this.match(XonParser.ID);
					}
				}

				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 142;
					this.match(XonParser.Assign);
					this.state = 143;
					_localctx._value = this.expression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 146;
				_localctx._name = this.match(XonParser.ID);
				this.state = 147;
				this.match(XonParser.Colon);
				this.state = 148;
				this.match(XonParser.LineBreak);
				this.state = 149;
				this.match(XonParser.INDENT);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 150;
					this.schemeItem();
					this.state = 151;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID);
				this.state = 157;
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
			this.state = 229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this.match(XonParser.If);
				this.state = 163;
				this.expression(0);
				this.state = 164;
				this.body();
				this.state = 171;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 165;
					this.match(XonParser.Else);
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 166;
						this.match(XonParser.If);
						this.state = 167;
						this.expression(0);
						}
					}

					this.state = 170;
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
				this.state = 173;
				this.match(XonParser.Loop);
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (XonParser.Await - 15)) | (1 << (XonParser.OpenBracket - 15)) | (1 << (XonParser.OpenParen - 15)) | (1 << (XonParser.OpenBrace - 15)) | (1 << (XonParser.Plus - 15)) | (1 << (XonParser.Minus - 15)) | (1 << (XonParser.BitNot - 15)) | (1 << (XonParser.Not - 15)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.LambdaStart - 65)) | (1 << (XonParser.NullLiteral - 65)) | (1 << (XonParser.BooleanLiteral - 65)) | (1 << (XonParser.DecimalLiteral - 65)) | (1 << (XonParser.FloatLiteral - 65)) | (1 << (XonParser.StringLiteral - 65)) | (1 << (XonParser.StringFormatStart - 65)) | (1 << (XonParser.ID - 65)))) !== 0)) {
					{
					this.state = 186;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						this.state = 174;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 179;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
						case 1:
							{
							this.state = 175;
							this.match(XonParser.Comma);
							this.state = 177;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 176;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 183;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 181;
							this.match(XonParser.Comma);
							this.state = 182;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 185;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 188;
					this.expression(0);
					}
				}

				this.state = 191;
				this.body();
				}
				break;

			case 4:
				_localctx = new ConstantStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 192;
				(_localctx as ConstantStatementContext)._name = this.match(XonParser.ID);
				this.state = 193;
				this.match(XonParser.TwoColon);
				this.state = 194;
				this.match(XonParser.Assign);
				this.state = 195;
				(_localctx as ConstantStatementContext)._value = this.expression(0);
				}
				break;

			case 5:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 196;
				(_localctx as DeclarationStatementContext)._name = this.match(XonParser.ID);
				this.state = 197;
				this.match(XonParser.Colon);
				this.state = 204;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 198;
					(_localctx as DeclarationStatementContext)._valueType = this.match(XonParser.ID);
					}
					break;

				case 2:
					{
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 199;
						(_localctx as DeclarationStatementContext)._valueType = this.match(XonParser.ID);
						}
					}

					this.state = 202;
					this.match(XonParser.Assign);
					this.state = 203;
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
				this.state = 206;
				this.match(XonParser.ID);
				this.state = 207;
				this.match(XonParser.Assign);
				this.state = 208;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new ScopeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 209;
				this.match(XonParser.ID);
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 210;
					this.scopeArgument();
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 211;
						this.match(XonParser.Comma);
						this.state = 212;
						this.scopeArgument();
						}
						}
						this.state = 217;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 220;
				this.body();
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 221;
				this.match(XonParser.Continue);
				}
				break;

			case 9:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 222;
				this.match(XonParser.Break);
				}
				break;

			case 10:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 223;
				this.match(XonParser.Return);
				this.state = 225;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 224;
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
				this.state = 227;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 228;
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
			this.state = 231;
			_localctx._name = this.match(XonParser.ID);
			this.state = 232;
			this.match(XonParser.Colon);
			this.state = 233;
			_localctx._valueType = this.match(XonParser.ID);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 234;
				this.match(XonParser.Assign);
				this.state = 235;
				_localctx._value = this.expression(0);
				}
			}

			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 238;
				this.match(XonParser.Colon);
				this.state = 239;
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
			this.state = 242;
			this.match(XonParser.Colon);
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 244;
				this.match(XonParser.LineBreak);
				this.state = 245;
				this.match(XonParser.INDENT);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 246;
					this.statement();
					}
					}
					this.state = 249;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Await) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)) | (1 << (XonParser.NullLiteral - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0));
				this.state = 251;
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
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 256;
				this.match(XonParser.Plus);
				this.state = 257;
				this.expression(24);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 258;
				this.match(XonParser.Minus);
				this.state = 259;
				this.expression(23);
				}
				break;

			case 3:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 260;
				this.match(XonParser.BitNot);
				this.state = 261;
				this.expression(22);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 262;
				this.match(XonParser.Not);
				this.state = 263;
				this.expression(21);
				}
				break;

			case 5:
				{
				_localctx = new AwaitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 264;
				this.match(XonParser.Await);
				this.state = 265;
				this.expression(20);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 266;
				this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 267;
				this.literal();
				}
				break;

			case 8:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 268;
				this.match(XonParser.StringFormatStart);
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 269;
						this.expression(0);
						this.state = 270;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 276;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				this.state = 277;
				this.expression(0);
				this.state = 278;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 9:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 280;
				this.match(XonParser.OpenBracket);
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (XonParser.Await - 15)) | (1 << (XonParser.OpenBracket - 15)) | (1 << (XonParser.OpenParen - 15)) | (1 << (XonParser.OpenBrace - 15)) | (1 << (XonParser.Plus - 15)) | (1 << (XonParser.Minus - 15)) | (1 << (XonParser.BitNot - 15)) | (1 << (XonParser.Not - 15)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.LambdaStart - 65)) | (1 << (XonParser.NullLiteral - 65)) | (1 << (XonParser.BooleanLiteral - 65)) | (1 << (XonParser.DecimalLiteral - 65)) | (1 << (XonParser.FloatLiteral - 65)) | (1 << (XonParser.StringLiteral - 65)) | (1 << (XonParser.StringFormatStart - 65)) | (1 << (XonParser.ID - 65)))) !== 0)) {
					{
					this.state = 281;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 282;
						this.match(XonParser.Comma);
						this.state = 283;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 288;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 291;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 10:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.match(XonParser.OpenBracket);
				this.state = 293;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 294;
				this.match(XonParser.Colon);
				this.state = 295;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 296;
					this.match(XonParser.Colon);
					this.state = 297;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 300;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 11:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 302;
				this.match(XonParser.OpenBrace);
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 303;
					this.match(XonParser.ID);
					this.state = 304;
					this.match(XonParser.Colon);
					this.state = 305;
					this.expression(0);
					this.state = 312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 306;
						this.match(XonParser.Comma);
						this.state = 307;
						this.match(XonParser.ID);
						this.state = 308;
						this.match(XonParser.Colon);
						this.state = 309;
						this.expression(0);
						}
						}
						this.state = 314;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 317;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 12:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 318;
				this.match(XonParser.OpenParen);
				this.state = 319;
				this.expression(0);
				this.state = 320;
				this.match(XonParser.CloseParen);
				}
				break;

			case 13:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 322;
				this.match(XonParser.LambdaStart);
				this.state = 332;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 323;
					this.match(XonParser.ID);
					this.state = 328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 324;
						this.match(XonParser.Comma);
						this.state = 325;
						this.match(XonParser.ID);
						}
						}
						this.state = 330;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 331;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 334;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 416;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 414;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 337;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 338;
						this.match(XonParser.Pow);
						this.state = 339;
						(_localctx as PowExpressionContext)._exponent = this.expression(26);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 340;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 341;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.Multiply - 41)) | (1 << (XonParser.Divide - 41)) | (1 << (XonParser.Modulus - 41)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 342;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 343;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 344;
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
						this.state = 345;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 346;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 347;
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
						this.state = 348;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 349;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 350;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (XonParser.LessThan - 46)) | (1 << (XonParser.MoreThan - 46)) | (1 << (XonParser.LessThanEquals - 46)) | (1 << (XonParser.MoreThanEquals - 46)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 351;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 352;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 353;
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
						this.state = 354;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 355;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 356;
						this.match(XonParser.BitAnd);
						this.state = 357;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 358;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 359;
						this.match(XonParser.BitXor);
						this.state = 360;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 361;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 362;
						this.match(XonParser.BitOr);
						this.state = 363;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 364;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 365;
						this.match(XonParser.And);
						this.state = 366;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 367;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 368;
						this.match(XonParser.Or);
						this.state = 369;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 370;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 371;
						this.match(XonParser.Pipe);
						this.state = 374;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
						case 1:
							{
							this.state = 372;
							this.match(XonParser.ID);
							this.state = 373;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 376;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 377;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 378;
						this.match(XonParser.OpenParen);
						this.state = 387;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (XonParser.Await - 15)) | (1 << (XonParser.OpenBracket - 15)) | (1 << (XonParser.OpenParen - 15)) | (1 << (XonParser.OpenBrace - 15)) | (1 << (XonParser.Plus - 15)) | (1 << (XonParser.Minus - 15)) | (1 << (XonParser.BitNot - 15)) | (1 << (XonParser.Not - 15)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.LambdaStart - 65)) | (1 << (XonParser.NullLiteral - 65)) | (1 << (XonParser.BooleanLiteral - 65)) | (1 << (XonParser.DecimalLiteral - 65)) | (1 << (XonParser.FloatLiteral - 65)) | (1 << (XonParser.StringLiteral - 65)) | (1 << (XonParser.StringFormatStart - 65)) | (1 << (XonParser.ID - 65)))) !== 0)) {
							{
							this.state = 379;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 384;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 380;
								this.match(XonParser.Comma);
								this.state = 381;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 386;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 389;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 390;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 391;
						this.match(XonParser.OpenBracket);
						this.state = 392;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 393;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 395;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 396;
						this.match(XonParser.OpenBracket);
						this.state = 397;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 398;
						this.match(XonParser.Colon);
						this.state = 400;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (XonParser.Await - 15)) | (1 << (XonParser.OpenBracket - 15)) | (1 << (XonParser.OpenParen - 15)) | (1 << (XonParser.OpenBrace - 15)) | (1 << (XonParser.Plus - 15)) | (1 << (XonParser.Minus - 15)) | (1 << (XonParser.BitNot - 15)) | (1 << (XonParser.Not - 15)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.LambdaStart - 65)) | (1 << (XonParser.NullLiteral - 65)) | (1 << (XonParser.BooleanLiteral - 65)) | (1 << (XonParser.DecimalLiteral - 65)) | (1 << (XonParser.FloatLiteral - 65)) | (1 << (XonParser.StringLiteral - 65)) | (1 << (XonParser.StringFormatStart - 65)) | (1 << (XonParser.ID - 65)))) !== 0)) {
							{
							this.state = 399;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 404;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 402;
							this.match(XonParser.Colon);
							this.state = 403;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 406;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 408;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 410;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 409;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 412;
						this.match(XonParser.Dot);
						this.state = 413;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 418;
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
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_literal);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 419;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 420;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 421;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 422;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 423;
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
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 25);

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
			return this.precpred(this._ctx, 29);

		case 13:
			return this.precpred(this._ctx, 28);

		case 14:
			return this.precpred(this._ctx, 27);

		case 15:
			return this.precpred(this._ctx, 26);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03P\u01AD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03+\n\x03\f" +
		"\x03\x0E\x03.\v\x03\x05\x030\n\x03\x03\x04\x07\x043\n\x04\f\x04\x0E\x04" +
		"6\v\x04\x03\x04\x03\x04\x03\x04\x07\x04;\n\x04\f\x04\x0E\x04>\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05D\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06N\n\x06\r\x06\x0E\x06O\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x06\x06\\\n\x06\r\x06\x0E\x06]\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06j\n\x06\r\x06\x0E" +
		"\x06k\x03\x06\x03\x06\x05\x06p\n\x06\x03\x07\x03\x07\x03\x07\x05\x07u" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07}\n\x07" +
		"\f\x07\x0E\x07\x80\v\x07\x05\x07\x82\n\x07\x03\x07\x05\x07\x85\n\x07\x03" +
		"\b\x03\b\x03\b\x05\b\x8A\n\b\x03\t\x03\t\x03\t\x05\t\x8F\n\t\x03\t\x03" +
		"\t\x05\t\x93\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x06\t\x9C\n" +
		"\t\r\t\x0E\t\x9D\x03\t\x03\t\x05\t\xA2\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\xAB\n\n\x03\n\x05\n\xAE\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\xB4\n\n\x05\n\xB6\n\n\x03\n\x03\n\x05\n\xBA\n\n\x03\n\x05\n\xBD" +
		"\n\n\x03\n\x05\n\xC0\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\xCB\n\n\x03\n\x03\n\x05\n\xCF\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\xD8\n\n\f\n\x0E\n\xDB\v\n\x05\n\xDD\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\xE4\n\n\x03\n\x03\n\x05\n\xE8\n\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\xEF\n\v\x03\v\x03\v\x05\v\xF3\n\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x06\f\xFA\n\f\r\f\x0E\f\xFB\x03\f\x03\f\x05" +
		"\f\u0100\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0113\n\r\f\r\x0E\r" +
		"\u0116\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u011F\n\r\f" +
		"\r\x0E\r\u0122\v\r\x05\r\u0124\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\u012D\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x07\r\u0139\n\r\f\r\x0E\r\u013C\v\r\x05\r\u013E\n\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0149\n\r\f\r\x0E" +
		"\r\u014C\v\r\x03\r\x05\r\u014F\n\r\x03\r\x05\r\u0152\n\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0179" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0181\n\r\f\r\x0E\r\u0184" +
		"\v\r\x05\r\u0186\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u0193\n\r\x03\r\x03\r\x05\r\u0197\n\r\x03\r\x03\r" +
		"\x03\r\x03\r\x05\r\u019D\n\r\x03\r\x03\r\x07\r\u01A1\n\r\f\r\x0E\r\u01A4" +
		"\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01AB\n\x0E\x03\x0E" +
		"\x02\x02\x03\x18\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\b\x04\x02JJNN\x03" +
		"\x02+-\x03\x02\'(\x03\x02\x17\x19\x03\x0203\x03\x0245\x02\u01FC\x02\x1F" +
		"\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x064\x03\x02\x02\x02\bC\x03\x02" +
		"\x02\x02\no\x03\x02\x02\x02\f\x84\x03\x02\x02\x02\x0E\x86\x03\x02\x02" +
		"\x02\x10\xA1\x03\x02\x02\x02\x12\xE7\x03\x02\x02\x02\x14\xE9\x03\x02\x02" +
		"\x02\x16\xF4\x03\x02\x02\x02\x18\u0151\x03\x02\x02\x02\x1A\u01AA\x03\x02" +
		"\x02\x02\x1C\x1E\x05\x12\n\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02" +
		"\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03\x03\x02\x02\x02" +
		"!\x1F\x03\x02\x02\x02\"#\x05\x06\x04\x02#/\x07#\x02\x02$%\x07+\x02\x02" +
		"%&\x07\x0F\x02\x02&0\x07N\x02\x02\',\x05\b\x05\x02()\x07 \x02\x02)+\x05" +
		"\b\x05\x02*(\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02\x02/$\x03\x02\x02\x02/\'" +
		"\x03\x02\x02\x020\x05\x03\x02\x02\x0213\x07&\x02\x0221\x03\x02\x02\x02" +
		"36\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x0257\x03\x02\x02\x02" +
		"64\x03\x02\x02\x027<\t\x02\x02\x0289\x07&\x02\x029;\t\x02\x02\x02:8\x03" +
		"\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\x07" +
		"\x03\x02\x02\x02><\x03\x02\x02\x02?@\x07N\x02\x02@A\x07\x0F\x02\x02AD" +
		"\x07N\x02\x02BD\x07N\x02\x02C?\x03\x02\x02\x02CB\x03\x02\x02\x02D\t\x03" +
		"\x02\x02\x02EF\x07\x05\x02\x02FG\x07N\x02\x02GH\x07#\x02\x02HI\x07\x13" +
		"\x02\x02IM\x07\x03\x02\x02JK\x05\f\x07\x02KL\x07\x13\x02\x02LN\x03\x02" +
		"\x02\x02MJ\x03\x02\x02\x02NO\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02" +
		"\x02\x02PQ\x03\x02\x02\x02QR\x07\x04\x02\x02Rp\x03\x02\x02\x02ST\x07\x06" +
		"\x02\x02TU\x07N\x02\x02UV\x07#\x02\x02VW\x07\x13\x02\x02W[\x07\x03\x02" +
		"\x02XY\x05\x0E\b\x02YZ\x07\x13\x02\x02Z\\\x03\x02\x02\x02[X\x03\x02\x02" +
		"\x02\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02" +
		"\x02\x02_`\x07\x04\x02\x02`p\x03\x02\x02\x02ab\x07\x07\x02\x02bc\x07N" +
		"\x02\x02cd\x07#\x02\x02de\x07\x13\x02\x02ei\x07\x03\x02\x02fg\x05\x10" +
		"\t\x02gh\x07\x13\x02\x02hj\x03\x02\x02\x02if\x03\x02\x02\x02jk\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\x04" +
		"\x02\x02np\x03\x02\x02\x02oE\x03\x02\x02\x02oS\x03\x02\x02\x02oa\x03\x02" +
		"\x02\x02p\v\x03\x02\x02\x02qr\x07N\x02\x02rt\x07#\x02\x02su\x07N\x02\x02" +
		"ts\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07!\x02\x02" +
		"w\x85\x05\x18\r\x02x\x81\x07N\x02\x02y~\x05\x14\v\x02z{\x07 \x02\x02{" +
		"}\x05\x14\v\x02|z\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02" +
		"~\x7F\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81" +
		"y\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83" +
		"\x85\x05\x16\f\x02\x84q\x03\x02\x02\x02\x84x\x03\x02\x02\x02\x85\r\x03" +
		"\x02\x02\x02\x86\x89\x07N\x02\x02\x87\x88\x07!\x02\x02\x88\x8A\x05\x18" +
		"\r\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x0F\x03\x02" +
		"\x02\x02\x8B\x8E\x07N\x02\x02\x8C\x8D\x07#\x02\x02\x8D\x8F\x07N\x02\x02" +
		"\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02" +
		"\x90\x91\x07!\x02\x02\x91\x93\x05\x18\r\x02\x92\x90\x03\x02\x02\x02\x92" +
		"\x93\x03\x02\x02\x02\x93\xA2\x03\x02\x02\x02\x94\x95\x07N\x02\x02\x95" +
		"\x96\x07#\x02\x02\x96\x97\x07\x13\x02\x02\x97\x9B\x07\x03\x02\x02\x98" +
		"\x99\x05\x10\t\x02\x99\x9A\x07\x13\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B" +
		"\x98\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D" +
		"\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x07\x04\x02\x02\xA0" +
		"\xA2\x03\x02\x02\x02\xA1\x8B\x03\x02\x02\x02\xA1\x94\x03\x02\x02\x02\xA2" +
		"\x11\x03\x02\x02\x02\xA3\xE8\x07\x12\x02\x02\xA4\xA5\x07\b\x02\x02\xA5" +
		"\xA6\x05\x18\r\x02\xA6\xAD\x05\x16\f\x02\xA7\xAA\x07\t\x02\x02\xA8\xA9" +
		"\x07\b\x02\x02\xA9\xAB\x05\x18\r\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03" +
		"\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x05\x16\f\x02\xAD\xA7\x03" +
		"\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xE8\x03\x02\x02\x02\xAF\xBF\x07" +
		"\n\x02\x02\xB0\xB5\x07N\x02\x02\xB1\xB3\x07 \x02\x02\xB2\xB4\x07N\x02" +
		"\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x03\x02\x02" +
		"\x02\xB5\xB1\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB9\x03\x02\x02" +
		"\x02\xB7\xB8\x07 \x02\x02\xB8\xBA\x07N\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x07\v\x02\x02" +
		"\xBC\xB0\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xC0\x05\x18\r\x02\xBF\xBC\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02" +
		"\xC0\xC1\x03\x02\x02\x02\xC1\xE8\x05\x16\f\x02\xC2\xC3\x07N\x02\x02\xC3" +
		"\xC4\x07$\x02\x02\xC4\xC5\x07!\x02\x02\xC5\xE8\x05\x18\r\x02\xC6\xC7\x07" +
		"N\x02\x02\xC7\xCE\x07#\x02\x02\xC8\xCF\x07N\x02\x02\xC9\xCB\x07N\x02\x02" +
		"\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
		"\xCC\xCD\x07!\x02\x02\xCD\xCF\x05\x18\r\x02\xCE\xC8\x03\x02\x02\x02\xCE" +
		"\xCA\x03\x02\x02\x02\xCF\xE8\x03\x02\x02\x02\xD0\xD1\x07N\x02\x02\xD1" +
		"\xD2\x07!\x02\x02\xD2\xE8\x05\x18\r\x02\xD3\xDC\x07N\x02\x02\xD4\xD9\x05" +
		"\x14\v\x02\xD5\xD6\x07 \x02\x02\xD6\xD8\x05\x14\v\x02\xD7\xD5\x03\x02" +
		"\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02" +
		"\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xD4\x03\x02" +
		"\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE8\x05\x16" +
		"\f\x02\xDF\xE8\x07\f\x02\x02\xE0\xE8\x07\r\x02\x02\xE1\xE3\x07\x0E\x02" +
		"\x02\xE2\xE4\x05\x18\r\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
		"\x02\xE4\xE8\x03\x02\x02\x02\xE5\xE8\x05\x18\r\x02\xE6\xE8\x07\x13\x02" +
		"\x02\xE7\xA3\x03\x02\x02\x02\xE7\xA4\x03\x02\x02\x02\xE7\xAF\x03\x02\x02" +
		"\x02\xE7\xC2\x03\x02\x02\x02\xE7\xC6\x03\x02\x02\x02\xE7\xD0\x03\x02\x02" +
		"\x02\xE7\xD3\x03\x02\x02\x02\xE7\xDF\x03\x02\x02\x02\xE7\xE0\x03\x02\x02" +
		"\x02\xE7\xE1\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE6\x03\x02\x02" +
		"\x02\xE8\x13\x03\x02\x02\x02\xE9\xEA\x07N\x02\x02\xEA\xEB\x07#\x02\x02" +
		"\xEB\xEE\x07N\x02\x02\xEC\xED\x07!\x02\x02\xED\xEF\x05\x18\r\x02\xEE\xEC" +
		"\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xF1" +
		"\x07#\x02\x02\xF1\xF3\x05\x18\r\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03" +
		"\x02\x02\x02\xF3\x15\x03\x02\x02\x02\xF4\xFF\x07#\x02\x02\xF5\u0100\x05" +
		"\x12\n\x02\xF6\xF7\x07\x13\x02\x02\xF7\xF9\x07\x03\x02\x02\xF8\xFA\x05" +
		"\x12\n\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xF9\x03" +
		"\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07" +
		"\x04\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xF5\x03\x02\x02\x02\xFF\xF6" +
		"\x03\x02\x02\x02\u0100\x17\x03\x02\x02\x02\u0101\u0102\b\r\x01\x02\u0102" +
		"\u0103\x07\'\x02\x02\u0103\u0152\x05\x18\r\x1A\u0104\u0105\x07(\x02\x02" +
		"\u0105\u0152\x05\x18\r\x19\u0106\u0107\x07)\x02\x02\u0107\u0152\x05\x18" +
		"\r\x18\u0108\u0109\x07*\x02\x02\u0109\u0152\x05\x18\r\x17\u010A\u010B" +
		"\x07\x11\x02\x02\u010B\u0152\x05\x18\r\x16\u010C\u0152\x07N\x02\x02\u010D" +
		"\u0152\x05\x1A\x0E\x02\u010E\u0114\x07K\x02\x02\u010F\u0110\x05\x18\r" +
		"\x02\u0110\u0111\x07L\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u010F" +
		"\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02" +
		"\u0114\u0115\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0114\x03" +
		"\x02\x02\x02\u0117\u0118\x05\x18\r\x02\u0118\u0119\x07M\x02\x02\u0119" +
		"\u0152\x03\x02\x02\x02\u011A\u0123\x07\x1A\x02\x02\u011B\u0120\x05\x18" +
		"\r\x02\u011C\u011D\x07 \x02\x02\u011D\u011F\x05\x18\r\x02\u011E\u011C" +
		"\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02" +
		"\u0120\u0121\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03" +
		"\x02\x02\x02\u0123\u011B\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0152\x07\x1B\x02\x02\u0126\u0127\x07\x1A" +
		"\x02\x02\u0127\u0128\x05\x18\r\x02\u0128\u0129\x07#\x02\x02\u0129\u012C" +
		"\x05\x18\r\x02\u012A\u012B\x07#\x02\x02\u012B\u012D\x05\x18\r\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\u012F\x07\x1B\x02\x02\u012F\u0152\x03\x02\x02\x02\u0130" +
		"\u013D\x07\x1E\x02\x02\u0131\u0132\x07N\x02\x02\u0132\u0133\x07#\x02\x02" +
		"\u0133\u013A\x05\x18\r\x02\u0134\u0135\x07 \x02\x02\u0135\u0136\x07N\x02" +
		"\x02\u0136\u0137\x07#\x02\x02\u0137\u0139\x05\x18\r\x02\u0138\u0134\x03" +
		"\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A" +
		"\u013B\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02" +
		"\x02\x02\u013D\u0131\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0152\x07\x1F\x02\x02\u0140\u0141\x07\x1C" +
		"\x02\x02\u0141\u0142\x05\x18\r\x02\u0142\u0143\x07\x1D\x02\x02\u0143\u0152" +
		"\x03\x02\x02\x02\u0144\u014E\x07C\x02\x02\u0145\u014A\x07N\x02\x02\u0146" +
		"\u0147\x07 \x02\x02\u0147\u0149\x07N\x02\x02\u0148\u0146\x03\x02\x02\x02" +
		"\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03" +
		"\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D" +
		"\u014F\x07#\x02\x02\u014E\u0145\x03\x02\x02\x02\u014E\u014F\x03\x02\x02" +
		"\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0152\x05\x18\r\x03\u0151\u0101" +
		"\x03\x02\x02\x02\u0151\u0104\x03\x02\x02\x02\u0151\u0106\x03\x02\x02\x02" +
		"\u0151\u0108\x03\x02\x02\x02\u0151\u010A\x03\x02\x02\x02\u0151\u010C\x03" +
		"\x02\x02\x02\u0151\u010D\x03\x02\x02\x02\u0151\u010E\x03\x02\x02\x02\u0151" +
		"\u011A\x03\x02\x02\x02\u0151\u0126\x03\x02\x02\x02\u0151\u0130\x03\x02" +
		"\x02\x02\u0151\u0140\x03\x02\x02\x02\u0151\u0144\x03\x02\x02\x02\u0152" +
		"\u01A2\x03\x02\x02\x02\u0153\u0154\f\x1B\x02\x02\u0154\u0155\x07.\x02" +
		"\x02\u0155\u01A1\x05\x18\r\x1C\u0156\u0157\f\x15\x02\x02\u0157\u0158\t" +
		"\x03\x02\x02\u0158\u01A1\x05\x18\r\x16\u0159\u015A\f\x14\x02\x02\u015A" +
		"\u015B\t\x04\x02\x02\u015B\u01A1\x05\x18\r\x15\u015C\u015D\f\x13\x02\x02" +
		"\u015D\u015E\t\x05\x02\x02\u015E\u01A1\x05\x18\r\x14\u015F\u0160\f\x12" +
		"\x02\x02\u0160\u0161\t\x06\x02\x02\u0161\u01A1\x05\x18\r\x13\u0162\u0163" +
		"\f\x11\x02\x02\u0163\u0164\t\x07\x02\x02\u0164\u01A1\x05\x18\r\x12\u0165" +
		"\u0166\f\x10\x02\x02\u0166\u0167\x07\x14\x02\x02\u0167\u01A1\x05\x18\r" +
		"\x11\u0168\u0169\f\x0F\x02\x02\u0169\u016A\x07\x16\x02\x02\u016A\u01A1" +
		"\x05\x18\r\x10\u016B\u016C\f\x0E\x02\x02\u016C\u016D\x07\x15\x02\x02\u016D" +
		"\u01A1\x05\x18\r\x0F\u016E\u016F\f\r\x02\x02\u016F\u0170\x076\x02\x02" +
		"\u0170\u01A1\x05\x18\r\x0E\u0171\u0172\f\f\x02\x02\u0172\u0173\x077\x02" +
		"\x02\u0173\u01A1\x05\x18\r\r\u0174\u0175\f\x04\x02\x02\u0175\u0178\x07" +
		"D\x02\x02\u0176\u0177\x07N\x02\x02\u0177\u0179\x07#\x02\x02\u0178\u0176" +
		"\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02" +
		"\u017A\u01A1\x05\x18\r\x05\u017B\u017C\f\x1F\x02\x02\u017C\u0185\x07\x1C" +
		"\x02\x02\u017D\u0182\x05\x18\r\x02\u017E\u017F\x07 \x02\x02\u017F\u0181" +
		"\x05\x18\r\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02" +
		"\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0186\x03" +
		"\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u017D\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u01A1\x07\x1D" +
		"\x02\x02\u0188\u0189\f\x1E\x02\x02\u0189\u018A\x07\x1A\x02\x02\u018A\u018B" +
		"\x05\x18\r\x02\u018B\u018C\x07\x1B\x02\x02\u018C\u01A1\x03\x02\x02\x02" +
		"\u018D\u018E\f\x1D\x02\x02\u018E\u018F\x07\x1A\x02\x02\u018F\u0190\x05" +
		"\x18\r\x02\u0190\u0192\x07#\x02\x02\u0191\u0193\x05\x18\r\x02\u0192\u0191" +
		"\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02" +
		"\u0194\u0195\x07#\x02\x02\u0195\u0197\x05\x18\r\x02\u0196\u0194\x03\x02" +
		"\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u0199\x07\x1B\x02\x02\u0199\u01A1\x03\x02\x02\x02\u019A\u019C\f\x1C\x02" +
		"\x02\u019B\u019D\x07\"\x02\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D" +
		"\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x07&\x02\x02" +
		"\u019F\u01A1\x07N\x02\x02\u01A0\u0153\x03\x02\x02\x02\u01A0\u0156\x03" +
		"\x02\x02\x02\u01A0\u0159\x03\x02\x02\x02\u01A0\u015C\x03\x02\x02\x02\u01A0" +
		"\u015F\x03\x02\x02\x02\u01A0\u0162\x03\x02\x02\x02\u01A0\u0165\x03\x02" +
		"\x02\x02\u01A0\u0168\x03\x02\x02\x02\u01A0\u016B\x03\x02\x02\x02\u01A0" +
		"\u016E\x03\x02\x02\x02\u01A0\u0171\x03\x02\x02\x02\u01A0\u0174\x03\x02" +
		"\x02\x02\u01A0\u017B\x03\x02\x02\x02\u01A0\u0188\x03\x02\x02\x02\u01A0" +
		"\u018D\x03\x02\x02\x02\u01A0\u019A\x03\x02\x02\x02\u01A1\u01A4\x03\x02" +
		"\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
		"\x19\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01AB\x07F\x02" +
		"\x02\u01A6\u01AB\x07G\x02\x02\u01A7\u01AB\x07H\x02\x02\u01A8\u01AB\x07" +
		"I\x02\x02\u01A9\u01AB\x07J\x02\x02\u01AA\u01A5\x03\x02\x02\x02\u01AA\u01A6" +
		"\x03\x02\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02" +
		"\u01AA\u01A9\x03\x02\x02\x02\u01AB\x1B\x03\x02\x02\x028\x1F,/4<CO]kot" +
		"~\x81\x84\x89\x8E\x92\x9D\xA1\xAA\xAD\xB3\xB5\xB9\xBC\xBF\xCA\xCE\xD9" +
		"\xDC\xE3\xE7\xEE\xF2\xFB\xFF\u0114\u0120\u0123\u012C\u013A\u013D\u014A" +
		"\u014E\u0151\u0178\u0182\u0185\u0192\u0196\u019C\u01A0\u01A2\u01AA";
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
	public _valueType: Token;
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
	public _name: Token;
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	public _name: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_enumItem; }
}


export class SchemeItemContext extends ParserRuleContext {
	public _name: Token;
	public _valueType: Token;
	public _value: ExpressionContext;
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
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public _valueType: Token;
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
	public _valueType: Token;
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
export class AwaitExpressionContext extends ExpressionContext {
	public Await(): TerminalNode { return this.getToken(XonParser.Await, 0); }
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


