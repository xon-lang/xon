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
	public static readonly Select = 15;
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
	public static readonly Declaration = 68;
	public static readonly Constant = 69;
	public static readonly NullLiteral = 70;
	public static readonly BooleanLiteral = 71;
	public static readonly DecimalLiteral = 72;
	public static readonly FloatLiteral = 73;
	public static readonly StringLiteral = 74;
	public static readonly StringFormatStart = 75;
	public static readonly StringFormatMiddle = 76;
	public static readonly StringFormatEnd = 77;
	public static readonly ID = 78;
	public static readonly TypeID = 79;
	public static readonly Skip = 80;
	public static readonly UnexpectedCharacter = 81;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_definitionMember = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_body = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_literal = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "definitionMember", 
		"statement", "argument", "body", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'class'", "'enum'", "'scheme'", "'if'", 
		"'else'", "'loop'", "'in'", "'continue'", "'break'", "'return'", "'as'", 
		"'var'", "'select'", undefined, undefined, "'and'", "'or'", "'xor'", "'>>'", 
		"'<<'", "'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", 
		"'?'", "':'", "'::'", "'...'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", 
		"'/'", "'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
		"'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
		"'>>>='", "'&='", "'^='", "'|='", "'\\'", "'|'", "'_'", "':='", "'::='", 
		"'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Class", "Enum", "Scheme", "If", "Else", 
		"Loop", "In", "Continue", "Break", "Return", "As", "Var", "Select", "Preprocessor", 
		"LineBreak", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "QuestionMark", "Colon", 
		"TwoColon", "Ellipsis", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", 
		"Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", 
		"MoreThanEquals", "Equals", "NotEquals", "And", "Or", "MultiplyAssign", 
		"DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "Declaration", 
		"Constant", "NullLiteral", "BooleanLiteral", "DecimalLiteral", "FloatLiteral", 
		"StringLiteral", "StringFormatStart", "StringFormatMiddle", "StringFormatEnd", 
		"ID", "TypeID", "Skip", "UnexpectedCharacter",
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
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
				{
				{
				this.state = 22;
				this.statement();
				}
				}
				this.state = 27;
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
			this.state = 28;
			this.importPath();
			this.state = 29;
			this.match(XonParser.Colon);
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Multiply:
				{
				this.state = 30;
				this.match(XonParser.Multiply);
				this.state = 31;
				this.match(XonParser.As);
				this.state = 32;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;
			case XonParser.ID:
				{
				this.state = 33;
				this.importMember();
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 34;
					this.match(XonParser.Comma);
					this.state = 35;
					this.importMember();
					}
					}
					this.state = 40;
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
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 43;
				this.match(XonParser.Dot);
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 50;
				this.match(XonParser.Dot);
				this.state = 51;
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
				this.state = 56;
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
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 57;
				_localctx._name = this.match(XonParser.ID);
				this.state = 58;
				this.match(XonParser.As);
				this.state = 59;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(XonParser.TypeID);
			this.state = 64;
			this.match(XonParser.Colon);
			this.state = 65;
			this.match(XonParser.LineBreak);
			this.state = 66;
			this.match(XonParser.INDENT);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 67;
				this.definitionMember();
				this.state = 68;
				this.match(XonParser.LineBreak);
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.ID);
			this.state = 74;
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
	public definitionMember(): DefinitionMemberContext {
		let _localctx: DefinitionMemberContext = new DefinitionMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_definitionMember);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 81;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Colon:
					{
					this.state = 77;
					this.match(XonParser.Colon);
					this.state = 78;
					(_localctx as PropertyMemberContext)._valueType = this.match(XonParser.ID);
					}
					break;
				case XonParser.Assign:
					{
					this.state = 79;
					this.match(XonParser.Assign);
					this.state = 80;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				(_localctx as MethodMemberContext)._name = this.match(XonParser.ID);
				this.state = 84;
				this.match(XonParser.OpenParen);
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 85;
					this.argument();
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 86;
						this.match(XonParser.Comma);
						this.state = 87;
						this.argument();
						}
						}
						this.state = 92;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 95;
				this.match(XonParser.CloseParen);
				this.state = 96;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new ConstantStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.match(XonParser.ID);
				this.state = 101;
				this.match(XonParser.Constant);
				this.state = 102;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 103;
				this.match(XonParser.ID);
				this.state = 104;
				this.match(XonParser.Declaration);
				this.state = 105;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.match(XonParser.ID);
				this.state = 107;
				this.match(XonParser.Assign);
				this.state = 108;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
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
					this.argument();
					this.state = 116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 112;
						this.match(XonParser.Comma);
						this.state = 113;
						this.argument();
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
				this.state = 122;
				this.body();
				}
				break;

			case 6:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 123;
				this.match(XonParser.Continue);
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 124;
				this.match(XonParser.Break);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 125;
				this.match(XonParser.Return);
				this.state = 127;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 126;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 129;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 130;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			_localctx._name = this.match(XonParser.ID);
			this.state = 134;
			this.match(XonParser.Colon);
			this.state = 135;
			_localctx._valueType = this.match(XonParser.ID);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 136;
				this.match(XonParser.Assign);
				this.state = 137;
				_localctx._value = this.expression(0);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(XonParser.Colon);
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 141;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 142;
				this.match(XonParser.LineBreak);
				this.state = 143;
				this.match(XonParser.INDENT);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 144;
					this.statement();
					}
					}
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0));
				this.state = 149;
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
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				_localctx = new IfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 154;
				this.match(XonParser.If);
				this.state = 155;
				this.expression(0);
				this.state = 156;
				this.body();
				this.state = 163;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 157;
					this.match(XonParser.Else);
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 158;
						this.match(XonParser.If);
						this.state = 159;
						this.expression(0);
						}
					}

					this.state = 162;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new LoopExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				this.match(XonParser.Loop);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
					{
					this.state = 178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						this.state = 166;
						(_localctx as LoopExpressionContext)._value = this.match(XonParser.ID);
						this.state = 171;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
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
								(_localctx as LoopExpressionContext)._key = this.match(XonParser.ID);
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
							(_localctx as LoopExpressionContext)._index = this.match(XonParser.ID);
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
				{
				_localctx = new SelectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 184;
				this.match(XonParser.Select);
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
					{
					this.state = 185;
					(_localctx as SelectExpressionContext)._value = this.expression(0);
					}
				}

				this.state = 188;
				this.match(XonParser.Colon);
				this.state = 189;
				this.match(XonParser.LineBreak);
				this.state = 194;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 190;
						this.match(XonParser.INDENT);
						this.state = 191;
						(_localctx as SelectExpressionContext)._item = this.expression(0);
						this.state = 192;
						this.body();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 196;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 198;
				this.match(XonParser.Plus);
				this.state = 199;
				this.expression(23);
				}
				break;

			case 5:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this.match(XonParser.Minus);
				this.state = 201;
				this.expression(22);
				}
				break;

			case 6:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 202;
				this.match(XonParser.BitNot);
				this.state = 203;
				this.expression(21);
				}
				break;

			case 7:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 204;
				this.match(XonParser.Not);
				this.state = 205;
				this.expression(20);
				}
				break;

			case 8:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.match(XonParser.ID);
				}
				break;

			case 9:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 207;
				this.literal();
				}
				break;

			case 10:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 208;
				this.match(XonParser.StringFormatStart);
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 209;
						this.expression(0);
						this.state = 210;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 216;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 217;
				this.expression(0);
				this.state = 218;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 11:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 220;
				this.match(XonParser.OpenBracket);
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
					{
					this.state = 221;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 222;
						this.match(XonParser.Comma);
						this.state = 223;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 228;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 231;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 12:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 232;
				this.match(XonParser.OpenBracket);
				this.state = 233;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 234;
				this.match(XonParser.Colon);
				this.state = 235;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 236;
					this.match(XonParser.Colon);
					this.state = 237;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 240;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 13:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 242;
				this.match(XonParser.OpenBrace);
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 243;
					this.match(XonParser.ID);
					this.state = 244;
					this.match(XonParser.Colon);
					this.state = 245;
					this.expression(0);
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 246;
						this.match(XonParser.Comma);
						this.state = 247;
						this.match(XonParser.ID);
						this.state = 248;
						this.match(XonParser.Colon);
						this.state = 249;
						this.expression(0);
						}
						}
						this.state = 254;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 257;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 258;
				this.match(XonParser.OpenParen);
				this.state = 259;
				this.expression(0);
				this.state = 260;
				this.match(XonParser.CloseParen);
				}
				break;

			case 15:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 262;
				this.match(XonParser.LambdaStart);
				this.state = 272;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 263;
					this.match(XonParser.ID);
					this.state = 268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 264;
						this.match(XonParser.Comma);
						this.state = 265;
						this.match(XonParser.ID);
						}
						}
						this.state = 270;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 271;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 274;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 356;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 354;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 277;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 278;
						this.match(XonParser.Pow);
						this.state = 279;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 280;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 281;
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
						this.state = 282;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 284;
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
						this.state = 285;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 287;
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
						this.state = 288;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 290;
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
						this.state = 291;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 292;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 293;
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
						this.state = 294;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 295;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 296;
						this.match(XonParser.BitAnd);
						this.state = 297;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 299;
						this.match(XonParser.BitXor);
						this.state = 300;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 302;
						this.match(XonParser.BitOr);
						this.state = 303;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 304;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 305;
						this.match(XonParser.And);
						this.state = 306;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 307;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 308;
						this.match(XonParser.Or);
						this.state = 309;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 310;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 311;
						this.match(XonParser.Pipe);
						this.state = 314;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
						case 1:
							{
							this.state = 312;
							this.match(XonParser.ID);
							this.state = 313;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 316;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 317;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 318;
						this.match(XonParser.OpenParen);
						this.state = 327;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
							{
							this.state = 319;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 324;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 320;
								this.match(XonParser.Comma);
								this.state = 321;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 326;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 329;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 330;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 331;
						this.match(XonParser.OpenBracket);
						this.state = 332;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 333;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 335;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 336;
						this.match(XonParser.OpenBracket);
						this.state = 337;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 338;
						this.match(XonParser.Colon);
						this.state = 340;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Plus - 37)) | (1 << (XonParser.Minus - 37)) | (1 << (XonParser.BitNot - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.LambdaStart - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
							{
							this.state = 339;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 344;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 342;
							this.match(XonParser.Colon);
							this.state = 343;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 346;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 348;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 350;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 349;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 352;
						this.match(XonParser.Dot);
						this.state = 353;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 358;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_literal);
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 361;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 362;
				this.match(XonParser.FloatLiteral);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03S\u0171\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\v\x03\x05" +
		"\x03,\n\x03\x03\x04\x07\x04/\n\x04\f\x04\x0E\x042\v\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x047\n\x04\f\x04\x0E\x04:\v\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05@\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x06\x06I\n\x06\r\x06\x0E\x06J\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07T\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07[\n\x07\f\x07\x0E\x07^\v\x07\x05\x07`\n\x07\x03\x07\x03\x07" +
		"\x05\x07d\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bu\n\b\f\b\x0E\bx\v\b\x05\bz" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x82\n\b\x03\b\x03\b\x05" +
		"\b\x86\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8D\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x06\n\x94\n\n\r\n\x0E\n\x95\x03\n\x03\n\x05\n\x9A\n\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xA3\n\v\x03\v\x05\v\xA6\n" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\xAC\n\v\x05\v\xAE\n\v\x03\v\x03\v\x05" +
		"\v\xB2\n\v\x03\v\x05\v\xB5\n\v\x03\v\x05\v\xB8\n\v\x03\v\x03\v\x03\v\x05" +
		"\v\xBD\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\xC5\n\v\r\v\x0E\v" +
		"\xC6\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x07\v\xD7\n\v\f\v\x0E\v\xDA\v\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\xE3\n\v\f\v\x0E\v\xE6\v\v\x05\v\xE8\n\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xF1\n\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xFD\n\v\f\v\x0E\v\u0100" +
		"\v\v\x05\v\u0102\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\u010D\n\v\f\v\x0E\v\u0110\v\v\x03\v\x05\v\u0113\n\v\x03\v\x05" +
		"\v\u0116\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x05\v\u013D\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\u0145\n\v\f\v\x0E\v\u0148\v\v\x05\v\u014A\n\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0157\n\v\x03" +
		"\v\x03\v\x05\v\u015B\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0161\n\v\x03\v" +
		"\x03\v\x07\v\u0165\n\v\f\v\x0E\v\u0168\v\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u016F\n\f\x03\f\x02\x02\x03\x14\r\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\b\x04\x02LLP" +
		"P\x03\x02+-\x03\x02\'(\x03\x02\x17\x19\x03\x0203\x03\x0245\x02\u01B8\x02" +
		"\x1B\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x060\x03\x02\x02\x02\b?\x03" +
		"\x02\x02\x02\nA\x03\x02\x02\x02\fc\x03\x02\x02\x02\x0E\x85\x03\x02\x02" +
		"\x02\x10\x87\x03\x02\x02\x02\x12\x8E\x03\x02\x02\x02\x14\u0115\x03\x02" +
		"\x02\x02\x16\u016E\x03\x02\x02\x02\x18\x1A\x05\x0E\b\x02\x19\x18\x03\x02" +
		"\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02" +
		"\x02\x02\x1C\x03\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x05\x06" +
		"\x04\x02\x1F+\x07#\x02\x02 !\x07+\x02\x02!\"\x07\x0F\x02\x02\",\x07P\x02" +
		"\x02#(\x05\b\x05\x02$%\x07 \x02\x02%\'\x05\b\x05\x02&$\x03\x02\x02\x02" +
		"\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02),\x03\x02\x02" +
		"\x02*(\x03\x02\x02\x02+ \x03\x02\x02\x02+#\x03\x02\x02\x02,\x05\x03\x02" +
		"\x02\x02-/\x07&\x02\x02.-\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02" +
		"\x02\x0201\x03\x02\x02\x0213\x03\x02\x02\x0220\x03\x02\x02\x0238\t\x02" +
		"\x02\x0245\x07&\x02\x0257\t\x02\x02\x0264\x03\x02\x02\x027:\x03\x02\x02" +
		"\x0286\x03\x02\x02\x0289\x03\x02\x02\x029\x07\x03\x02\x02\x02:8\x03\x02" +
		"\x02\x02;<\x07P\x02\x02<=\x07\x0F\x02\x02=@\x07P\x02\x02>@\x07P\x02\x02" +
		"?;\x03\x02\x02\x02?>\x03\x02\x02\x02@\t\x03\x02\x02\x02AB\x07Q\x02\x02" +
		"BC\x07#\x02\x02CD\x07\x13\x02\x02DH\x07\x03\x02\x02EF\x05\f\x07\x02FG" +
		"\x07\x13\x02\x02GI\x03\x02\x02\x02HE\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"JH\x03\x02\x02\x02JK\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x07\x04\x02\x02" +
		"M\v\x03\x02\x02\x02NS\x07P\x02\x02OP\x07#\x02\x02PT\x07P\x02\x02QR\x07" +
		"!\x02\x02RT\x05\x14\v\x02SO\x03\x02\x02\x02SQ\x03\x02\x02\x02Td\x03\x02" +
		"\x02\x02UV\x07P\x02\x02V_\x07\x1C\x02\x02W\\\x05\x10\t\x02XY\x07 \x02" +
		"\x02Y[\x05\x10\t\x02ZX\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02" +
		"\x02\\]\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02_W\x03\x02" +
		"\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x07\x1D\x02\x02bd\x05\x12" +
		"\n\x02cN\x03\x02\x02\x02cU\x03\x02\x02\x02d\r\x03\x02\x02\x02e\x86\x07" +
		"\x12\x02\x02fg\x07P\x02\x02gh\x07G\x02\x02h\x86\x05\x14\v\x02ij\x07P\x02" +
		"\x02jk\x07F\x02\x02k\x86\x05\x14\v\x02lm\x07P\x02\x02mn\x07!\x02\x02n" +
		"\x86\x05\x14\v\x02op\x07P\x02\x02py\x07\x1C\x02\x02qv\x05\x10\t\x02rs" +
		"\x07 \x02\x02su\x05\x10\t\x02tr\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03" +
		"\x02\x02\x02vw\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02yq\x03" +
		"\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07\x1D\x02\x02|\x86" +
		"\x05\x12\n\x02}\x86\x07\f\x02\x02~\x86\x07\r\x02\x02\x7F\x81\x07\x0E\x02" +
		"\x02\x80\x82\x05\x14\v\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02" +
		"\x02\x82\x86\x03\x02\x02\x02\x83\x86\x05\x14\v\x02\x84\x86\x07\x13\x02" +
		"\x02\x85e\x03\x02\x02\x02\x85f\x03\x02\x02\x02\x85i\x03\x02\x02\x02\x85" +
		"l\x03\x02\x02\x02\x85o\x03\x02\x02\x02\x85}\x03\x02\x02\x02\x85~\x03\x02" +
		"\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x84\x03\x02" +
		"\x02\x02\x86\x0F\x03\x02\x02\x02\x87\x88\x07P\x02\x02\x88\x89\x07#\x02" +
		"\x02\x89\x8C\x07P\x02\x02\x8A\x8B\x07!\x02\x02\x8B\x8D\x05\x14\v\x02\x8C" +
		"\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x11\x03\x02\x02\x02\x8E" +
		"\x99\x07#\x02\x02\x8F\x9A\x05\x0E\b\x02\x90\x91\x07\x13\x02\x02\x91\x93" +
		"\x07\x03\x02\x02\x92\x94\x05\x0E\b\x02\x93\x92\x03\x02\x02\x02\x94\x95" +
		"\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97" +
		"\x03\x02\x02\x02\x97\x98\x07\x04\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x8F" +
		"\x03\x02\x02\x02\x99\x90\x03\x02\x02\x02\x9A\x13\x03\x02\x02\x02\x9B\x9C" +
		"\b\v\x01\x02\x9C\x9D\x07\b\x02\x02\x9D\x9E\x05\x14\v\x02\x9E\xA5\x05\x12" +
		"\n\x02\x9F\xA2\x07\t\x02\x02\xA0\xA1\x07\b\x02\x02\xA1\xA3\x05\x14\v\x02" +
		"\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02" +
		"\xA4\xA6\x05\x12\n\x02\xA5\x9F\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02" +
		"\xA6\u0116\x03\x02\x02\x02\xA7\xB7\x07\n\x02\x02\xA8\xAD\x07P\x02\x02" +
		"\xA9\xAB\x07 \x02\x02\xAA\xAC\x07P\x02\x02\xAB\xAA\x03\x02\x02\x02\xAB" +
		"\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xA9\x03\x02\x02\x02\xAD" +
		"\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xB0\x07 \x02\x02\xB0" +
		"\xB2\x07P\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
		"\xB3\x03\x02\x02\x02\xB3\xB5\x07\v\x02\x02\xB4\xA8\x03\x02\x02\x02\xB4" +
		"\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x05\x14\v\x02\xB7" +
		"\xB4\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9" +
		"\u0116\x05\x12\n\x02\xBA\xBC\x07\x11\x02\x02\xBB\xBD\x05\x14\v\x02\xBC" +
		"\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE" +
		"\xBF\x07#\x02\x02\xBF\xC4\x07\x13\x02\x02\xC0\xC1\x07\x03\x02\x02\xC1" +
		"\xC2\x05\x14\v\x02\xC2\xC3\x05\x12\n\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC0" +
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7" +
		"\x03\x02\x02\x02\xC7\u0116\x03\x02\x02\x02\xC8\xC9\x07\'\x02\x02\xC9\u0116" +
		"\x05\x14\v\x19\xCA\xCB\x07(\x02\x02\xCB\u0116\x05\x14\v\x18\xCC\xCD\x07" +
		")\x02\x02\xCD\u0116\x05\x14\v\x17\xCE\xCF\x07*\x02\x02\xCF\u0116\x05\x14" +
		"\v\x16\xD0\u0116\x07P\x02\x02\xD1\u0116\x05\x16\f\x02\xD2\xD8\x07M\x02" +
		"\x02\xD3\xD4\x05\x14\v\x02\xD4\xD5\x07N\x02\x02\xD5\xD7\x03\x02\x02\x02" +
		"\xD6\xD3\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02" +
		"\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02" +
		"\xDB\xDC\x05\x14\v\x02\xDC\xDD\x07O\x02\x02\xDD\u0116\x03\x02\x02\x02" +
		"\xDE\xE7\x07\x1A\x02\x02\xDF\xE4\x05\x14\v\x02\xE0\xE1\x07 \x02\x02\xE1" +
		"\xE3\x05\x14\v\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4" +
		"\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6" +
		"\xE4\x03\x02\x02\x02\xE7\xDF\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8" +
		"\xE9\x03\x02\x02\x02\xE9\u0116\x07\x1B\x02\x02\xEA\xEB\x07\x1A\x02\x02" +
		"\xEB\xEC\x05\x14\v\x02\xEC\xED\x07#\x02\x02\xED\xF0\x05\x14\v\x02\xEE" +
		"\xEF\x07#\x02\x02\xEF\xF1\x05\x14\v\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1" +
		"\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x07\x1B\x02\x02\xF3\u0116" +
		"\x03\x02\x02\x02\xF4\u0101\x07\x1E\x02\x02\xF5\xF6\x07P\x02\x02\xF6\xF7" +
		"\x07#\x02\x02\xF7\xFE\x05\x14\v\x02\xF8\xF9\x07 \x02\x02\xF9\xFA\x07P" +
		"\x02\x02\xFA\xFB\x07#\x02\x02\xFB\xFD\x05\x14\v\x02\xFC\xF8\x03\x02\x02" +
		"\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02" +
		"\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\xF5" +
		"\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02" +
		"\u0103\u0116\x07\x1F\x02\x02\u0104\u0105\x07\x1C\x02\x02\u0105\u0106\x05" +
		"\x14\v\x02\u0106\u0107\x07\x1D\x02\x02\u0107\u0116\x03\x02\x02\x02\u0108" +
		"\u0112\x07C\x02\x02\u0109\u010E\x07P\x02\x02\u010A\u010B\x07 \x02\x02" +
		"\u010B\u010D\x07P\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u0110\x03" +
		"\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0111\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0113\x07#\x02" +
		"\x02\u0112\u0109\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114" +
		"\x03\x02\x02\x02\u0114\u0116\x05\x14\v\x03\u0115\x9B\x03\x02\x02\x02\u0115" +
		"\xA7\x03\x02\x02\x02\u0115\xBA\x03\x02\x02\x02\u0115\xC8\x03\x02\x02\x02" +
		"\u0115\xCA\x03\x02\x02\x02\u0115\xCC\x03\x02\x02\x02\u0115\xCE\x03\x02" +
		"\x02\x02\u0115\xD0\x03\x02\x02\x02\u0115\xD1\x03\x02\x02\x02\u0115\xD2" +
		"\x03\x02\x02\x02\u0115\xDE\x03\x02\x02\x02\u0115\xEA\x03\x02\x02\x02\u0115" +
		"\xF4\x03\x02\x02\x02\u0115\u0104\x03\x02\x02\x02\u0115\u0108\x03\x02\x02" +
		"\x02\u0116\u0166\x03\x02\x02\x02\u0117\u0118\f\x1A\x02\x02\u0118\u0119" +
		"\x07.\x02\x02\u0119\u0165\x05\x14\v\x1B\u011A\u011B\f\x15\x02\x02\u011B" +
		"\u011C\t\x03\x02\x02\u011C\u0165\x05\x14\v\x16\u011D\u011E\f\x14\x02\x02" +
		"\u011E\u011F\t\x04\x02\x02\u011F\u0165\x05\x14\v\x15\u0120\u0121\f\x13" +
		"\x02\x02\u0121\u0122\t\x05\x02\x02\u0122\u0165\x05\x14\v\x14\u0123\u0124" +
		"\f\x12\x02\x02\u0124\u0125\t\x06\x02\x02\u0125\u0165\x05\x14\v\x13\u0126" +
		"\u0127\f\x11\x02\x02\u0127\u0128\t\x07\x02\x02\u0128\u0165\x05\x14\v\x12" +
		"\u0129\u012A\f\x10\x02\x02\u012A\u012B\x07\x14\x02\x02\u012B\u0165\x05" +
		"\x14\v\x11\u012C\u012D\f\x0F\x02\x02\u012D\u012E\x07\x16\x02\x02\u012E" +
		"\u0165\x05\x14\v\x10\u012F\u0130\f\x0E\x02\x02\u0130\u0131\x07\x15\x02" +
		"\x02\u0131\u0165\x05\x14\v\x0F\u0132\u0133\f\r\x02\x02\u0133\u0134\x07" +
		"6\x02\x02\u0134\u0165\x05\x14\v\x0E\u0135\u0136\f\f\x02\x02\u0136\u0137" +
		"\x077\x02\x02\u0137\u0165\x05\x14\v\r\u0138\u0139\f\x04\x02\x02\u0139" +
		"\u013C\x07D\x02\x02\u013A\u013B\x07P\x02\x02\u013B\u013D\x07#\x02\x02" +
		"\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03" +
		"\x02\x02\x02\u013E\u0165\x05\x14\v\x05\u013F\u0140\f\x1E\x02\x02\u0140" +
		"\u0149\x07\x1C\x02\x02\u0141\u0146\x05\x14\v\x02\u0142\u0143\x07 \x02" +
		"\x02\u0143\u0145\x05\x14\v\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0148" +
		"\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02" +
		"\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u0141\x03" +
		"\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B" +
		"\u0165\x07\x1D\x02\x02\u014C\u014D\f\x1D\x02\x02\u014D\u014E\x07\x1A\x02" +
		"\x02\u014E\u014F\x05\x14\v\x02\u014F\u0150\x07\x1B\x02\x02\u0150\u0165" +
		"\x03\x02\x02\x02\u0151\u0152\f\x1C\x02\x02\u0152\u0153\x07\x1A\x02\x02" +
		"\u0153\u0154\x05\x14\v\x02\u0154\u0156\x07#\x02\x02\u0155\u0157\x05\x14" +
		"\v\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u015A" +
		"\x03\x02\x02\x02\u0158\u0159\x07#\x02\x02\u0159\u015B\x05\x14\v\x02\u015A" +
		"\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u015D\x07\x1B\x02\x02\u015D\u0165\x03\x02\x02\x02\u015E" +
		"\u0160\f\x1B\x02\x02\u015F\u0161\x07\"\x02\x02\u0160\u015F\x03\x02\x02" +
		"\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163" +
		"\x07&\x02\x02\u0163\u0165\x07P\x02\x02\u0164\u0117\x03\x02\x02\x02\u0164" +
		"\u011A\x03\x02\x02\x02\u0164\u011D\x03\x02\x02\x02\u0164\u0120\x03\x02" +
		"\x02\x02\u0164\u0123\x03\x02\x02\x02\u0164\u0126\x03\x02\x02\x02\u0164" +
		"\u0129\x03\x02\x02\x02\u0164\u012C\x03\x02\x02\x02\u0164\u012F\x03\x02" +
		"\x02\x02\u0164\u0132\x03\x02\x02\x02\u0164\u0135\x03\x02\x02\x02\u0164" +
		"\u0138\x03\x02\x02\x02\u0164\u013F\x03\x02\x02\x02\u0164\u014C\x03\x02" +
		"\x02\x02\u0164\u0151\x03\x02\x02\x02\u0164\u015E\x03\x02\x02\x02\u0165" +
		"\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02" +
		"\x02\x02\u0167\x15\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016F" +
		"\x07H\x02\x02\u016A\u016F\x07I\x02\x02\u016B\u016F\x07J\x02\x02\u016C" +
		"\u016F\x07K\x02\x02\u016D\u016F\x07L\x02\x02\u016E\u0169\x03\x02\x02\x02" +
		"\u016E\u016A\x03\x02\x02\x02\u016E\u016B\x03\x02\x02\x02\u016E\u016C\x03" +
		"\x02\x02\x02\u016E\u016D\x03\x02\x02\x02\u016F\x17\x03\x02\x02\x02/\x1B" +
		"(+08?JS\\_cvy\x81\x85\x8C\x95\x99\xA2\xA5\xAB\xAD\xB1\xB4\xB7\xBC\xC6" +
		"\xD8\xE4\xE7\xF0\xFE\u0101\u010E\u0112\u0115\u013C\u0146\u0149\u0156\u015A" +
		"\u0160\u0164\u0166\u016E";
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
	public TypeID(): TerminalNode { return this.getToken(XonParser.TypeID, 0); }
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
	public definitionMember(): DefinitionMemberContext[];
	public definitionMember(i: number): DefinitionMemberContext;
	public definitionMember(i?: number): DefinitionMemberContext | DefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionMemberContext);
		} else {
			return this.getRuleContext(i, DefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class DefinitionMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionMember; }
	public copyFrom(ctx: DefinitionMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyMemberContext extends DefinitionMemberContext {
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
	constructor(ctx: DefinitionMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends DefinitionMemberContext {
	public _name: Token;
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	constructor(ctx: DefinitionMemberContext) {
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
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConstantStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Constant(): TerminalNode { return this.getToken(XonParser.Constant, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Declaration(): TerminalNode { return this.getToken(XonParser.Declaration, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class FunctionStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
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


export class ArgumentContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
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
export class IfExpressionContext extends ExpressionContext {
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
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopExpressionContext extends ExpressionContext {
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
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SelectExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _item: ExpressionContext;
	public Select(): TerminalNode { return this.getToken(XonParser.Select, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode[];
	public INDENT(i: number): TerminalNode;
	public INDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.INDENT);
		} else {
			return this.getToken(XonParser.INDENT, i);
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


