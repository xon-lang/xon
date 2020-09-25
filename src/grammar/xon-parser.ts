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
	public static readonly As = 3;
	public static readonly If = 4;
	public static readonly Else = 5;
	public static readonly ElseIf = 6;
	public static readonly Loop = 7;
	public static readonly In = 8;
	public static readonly Pass = 9;
	public static readonly Continue = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly Select = 13;
	public static readonly Infix = 14;
	public static readonly Prefix = 15;
	public static readonly Postfix = 16;
	public static readonly Preprocessor = 17;
	public static readonly LineBreak = 18;
	public static readonly BitAnd = 19;
	public static readonly BitOr = 20;
	public static readonly BitXor = 21;
	public static readonly BitNot = 22;
	public static readonly RightShiftArithmetic = 23;
	public static readonly LeftShiftArithmetic = 24;
	public static readonly OpenBracket = 25;
	public static readonly CloseBracket = 26;
	public static readonly OpenParen = 27;
	public static readonly CloseParen = 28;
	public static readonly OpenBrace = 29;
	public static readonly CloseBrace = 30;
	public static readonly Ad = 31;
	public static readonly Comma = 32;
	public static readonly Assign = 33;
	public static readonly Question = 34;
	public static readonly Colon = 35;
	public static readonly Dot = 36;
	public static readonly Add = 37;
	public static readonly Substract = 38;
	public static readonly Not = 39;
	public static readonly Multiply = 40;
	public static readonly Divide = 41;
	public static readonly Modulo = 42;
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
	public static readonly ModuloAssign = 55;
	public static readonly AddAssign = 56;
	public static readonly SubstractAssign = 57;
	public static readonly LeftShiftArithmeticAssign = 58;
	public static readonly RightShiftArithmeticAssign = 59;
	public static readonly BitAndAssign = 60;
	public static readonly BitXorAssign = 61;
	public static readonly BitOrAssign = 62;
	public static readonly LambdaStart = 63;
	public static readonly Pipe = 64;
	public static readonly Underscore = 65;
	public static readonly Spread = 66;
	public static readonly NullLiteral = 67;
	public static readonly BooleanLiteral = 68;
	public static readonly NumberLiteral = 69;
	public static readonly StringLiteral = 70;
	public static readonly StringFormatStart = 71;
	public static readonly StringFormatMiddle = 72;
	public static readonly StringFormatEnd = 73;
	public static readonly ID = 74;
	public static readonly Skip = 75;
	public static readonly UnexpectedCharacter = 76;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_operator = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_assignmentValue = 8;
	public static readonly RULE_assignmentsList = 9;
	public static readonly RULE_leftAssignments = 10;
	public static readonly RULE_middleAssignments = 11;
	public static readonly RULE_rightAssignments = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_function = 14;
	public static readonly RULE_argument = 15;
	public static readonly RULE_body = 16;
	public static readonly RULE_spreadItem = 17;
	public static readonly RULE_objectItem = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_literal = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "member", 
		"operator", "statement", "assignmentValue", "assignmentsList", "leftAssignments", 
		"middleAssignments", "rightAssignments", "type", "function", "argument", 
		"body", "spreadItem", "objectItem", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'as'", "'if'", "'else'", "'elif'", "'loop'", 
		"'in'", "'pass'", "'continue'", "'break'", "'return'", "'select'", "'infix'", 
		"'prefix'", "'postfix'", undefined, undefined, "'and'", "'or'", "'xor'", 
		"'not'", "'>>'", "'<<'", "'['", "']'", "'('", "')'", "'{'", "'}'", "'@'", 
		"','", "'='", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'", 
		"'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
		"'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", undefined, 
		undefined, undefined, "'\\'", "'|'", "'_'", "'...'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "As", "If", "Else", "ElseIf", "Loop", "In", 
		"Pass", "Continue", "Break", "Return", "Select", "Infix", "Prefix", "Postfix", 
		"Preprocessor", "LineBreak", "BitAnd", "BitOr", "BitXor", "BitNot", "RightShiftArithmetic", 
		"LeftShiftArithmetic", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Ad", "Comma", "Assign", "Question", "Colon", 
		"Dot", "Add", "Substract", "Not", "Multiply", "Divide", "Modulo", "Pow", 
		"Sharp", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", 
		"NotEquals", "And", "Or", "MultiplyAssign", "DivideAssign", "ModuloAssign", 
		"AddAssign", "SubstractAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", 
		"Underscore", "Spread", "NullLiteral", "BooleanLiteral", "NumberLiteral", 
		"StringLiteral", "StringFormatStart", "StringFormatMiddle", "StringFormatEnd", 
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 42;
					this.imports();
					}
					}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 48;
					this.statement();
					}
					}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.ID) {
				{
				{
				this.state = 54;
				this.definition();
				}
				}
				this.state = 59;
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
		try {
			let _alt: number;
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this.importPath();
				this.state = 61;
				this.match(XonParser.Colon);
				this.state = 62;
				this.importMember();
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 63;
						this.match(XonParser.Comma);
						this.state = 64;
						this.importMember();
						}
						}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;
			case XonParser.LineBreak:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				this.match(XonParser.LineBreak);
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
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(XonParser.ID);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Substract) {
				{
				{
				this.state = 74;
				this.match(XonParser.Substract);
				this.state = 75;
				this.match(XonParser.ID);
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 81;
			this.match(XonParser.Divide);
			this.state = 82;
			this.match(XonParser.ID);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Substract) {
				{
				{
				this.state = 83;
				this.match(XonParser.Substract);
				this.state = 84;
				this.match(XonParser.ID);
				}
				}
				this.state = 89;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			_localctx._name = this.match(XonParser.ID);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 91;
				this.match(XonParser.As);
				this.state = 92;
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
			this.state = 95;
			_localctx._name = this.match(XonParser.ID);
			this.state = 96;
			this.match(XonParser.Colon);
			this.state = 97;
			this.match(XonParser.LineBreak);
			this.state = 98;
			this.match(XonParser.INDENT);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 99;
				this.member();
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.Pass) | (1 << XonParser.Infix) | (1 << XonParser.Prefix) | (1 << XonParser.Postfix) | (1 << XonParser.LineBreak))) !== 0) || _la === XonParser.ID);
			this.state = 104;
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
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 107;
					this.type(0);
					}
					break;
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 110;
					this.match(XonParser.Assign);
					this.state = 111;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.function();
				}
				break;

			case 3:
				_localctx = new PassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				this.match(XonParser.Pass);
				}
				break;

			case 4:
				_localctx = new InfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 116;
				this.match(XonParser.Infix);
				this.state = 117;
				this.operator();
				this.state = 118;
				this.match(XonParser.OpenParen);
				this.state = 119;
				this.match(XonParser.ID);
				this.state = 120;
				this.match(XonParser.Comma);
				this.state = 121;
				this.match(XonParser.ID);
				this.state = 122;
				this.type(0);
				this.state = 123;
				this.match(XonParser.CloseParen);
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 124;
					(_localctx as InfixOperatorMemberContext)._returnType = this.type(0);
					}
				}

				this.state = 127;
				this.body();
				}
				break;

			case 5:
				_localctx = new PrefixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 129;
				this.match(XonParser.Prefix);
				this.state = 130;
				this.operator();
				this.state = 131;
				this.match(XonParser.OpenParen);
				this.state = 132;
				this.match(XonParser.ID);
				this.state = 133;
				this.match(XonParser.CloseParen);
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 134;
					this.type(0);
					}
				}

				this.state = 137;
				this.body();
				}
				break;

			case 6:
				_localctx = new PostfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 139;
				this.match(XonParser.Postfix);
				this.state = 140;
				this.operator();
				this.state = 141;
				this.match(XonParser.OpenParen);
				this.state = 142;
				this.match(XonParser.ID);
				this.state = 143;
				this.match(XonParser.CloseParen);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 144;
					this.type(0);
					}
				}

				this.state = 147;
				this.body();
				}
				break;

			case 7:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 149;
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.BitAnd) | (1 << XonParser.BitOr) | (1 << XonParser.BitXor) | (1 << XonParser.BitNot) | (1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Add - 37)) | (1 << (XonParser.Substract - 37)) | (1 << (XonParser.Not - 37)) | (1 << (XonParser.Multiply - 37)) | (1 << (XonParser.Divide - 37)) | (1 << (XonParser.Modulo - 37)) | (1 << (XonParser.Pow - 37)) | (1 << (XonParser.LessThan - 37)) | (1 << (XonParser.MoreThan - 37)) | (1 << (XonParser.Equals - 37)) | (1 << (XonParser.NotEquals - 37)) | (1 << (XonParser.And - 37)) | (1 << (XonParser.Or - 37)))) !== 0))) {
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.match(XonParser.If);
				this.state = 155;
				this.expression(0);
				this.state = 156;
				this.body();
				this.state = 163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 157;
						this.match(XonParser.ElseIf);
						this.state = 158;
						this.expression(0);
						this.state = 159;
						this.body();
						}
						}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				this.state = 168;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 166;
					this.match(XonParser.Else);
					this.state = 167;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new SelectStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.match(XonParser.Select);
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.BitNot - 22)) | (1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Ad - 22)) | (1 << (XonParser.Add - 22)) | (1 << (XonParser.Substract - 22)) | (1 << (XonParser.Not - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
					{
					this.state = 171;
					(_localctx as SelectStatementContext)._value = this.expression(0);
					}
				}

				this.state = 174;
				this.match(XonParser.Colon);
				this.state = 175;
				this.match(XonParser.LineBreak);
				this.state = 176;
				this.match(XonParser.INDENT);
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 177;
					(_localctx as SelectStatementContext)._expression = this.expression(0);
					(_localctx as SelectStatementContext)._cases.push((_localctx as SelectStatementContext)._expression);
					this.state = 178;
					this.body();
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.LineBreak) {
						{
						this.state = 179;
						this.match(XonParser.LineBreak);
						}
					}

					}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.BitNot - 22)) | (1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Ad - 22)) | (1 << (XonParser.Add - 22)) | (1 << (XonParser.Substract - 22)) | (1 << (XonParser.Not - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0));
				this.state = 186;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 188;
				this.match(XonParser.Loop);
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.BitNot - 22)) | (1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Ad - 22)) | (1 << (XonParser.Add - 22)) | (1 << (XonParser.Substract - 22)) | (1 << (XonParser.Not - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
					{
					this.state = 201;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						this.state = 189;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 194;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
						case 1:
							{
							this.state = 190;
							this.match(XonParser.Comma);
							this.state = 192;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 191;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 196;
							this.match(XonParser.Comma);
							this.state = 197;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 200;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 203;
					this.expression(0);
					}
				}

				this.state = 206;
				this.body();
				}
				break;

			case 4:
				_localctx = new PassStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 207;
				this.match(XonParser.Pass);
				}
				break;

			case 5:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 208;
				this.match(XonParser.Continue);
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 209;
				this.match(XonParser.Break);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 210;
				this.match(XonParser.Return);
				this.state = 212;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 211;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 214;
				this.function();
				}
				break;

			case 9:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 218;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 215;
						this.assignmentsList();
						this.state = 216;
						this.match(XonParser.Assign);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 220;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 222;
				this.assignmentValue();
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 224;
				this.expression(0);
				}
				break;

			case 11:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 225;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 12:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 226;
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
	public assignmentValue(): AssignmentValueContext {
		let _localctx: AssignmentValueContext = new AssignmentValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_assignmentValue);
		try {
			let _alt: number;
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 229;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 230;
				this.spreadItem();
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 231;
						this.match(XonParser.Comma);
						this.state = 232;
						this.spreadItem();
						}
						}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
	public assignmentsList(): AssignmentsListContext {
		let _localctx: AssignmentsListContext = new AssignmentsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_assignmentsList);
		let _la: number;
		try {
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.leftAssignments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.leftAssignments();
				this.state = 242;
				this.middleAssignments();
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 243;
					this.rightAssignments();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
				this.middleAssignments();
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 247;
					this.rightAssignments();
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
	public leftAssignments(): LeftAssignmentsContext {
		let _localctx: LeftAssignmentsContext = new LeftAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_leftAssignments);
		let _la: number;
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				this.match(XonParser.ID);
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 253;
					this.match(XonParser.Comma);
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 254;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.Comma:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 262;
					this.match(XonParser.Comma);
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 263;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.Comma);
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
	public middleAssignments(): MiddleAssignmentsContext {
		let _localctx: MiddleAssignmentsContext = new MiddleAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_middleAssignments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(XonParser.Spread);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 273;
				this.match(XonParser.ID);
				}
			}

			this.state = 283;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 276;
					this.match(XonParser.Comma);
					this.state = 277;
					this.match(XonParser.Spread);
					this.state = 279;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 278;
						this.match(XonParser.ID);
						}
					}

					}
					}
				}
				this.state = 285;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rightAssignments(): RightAssignmentsContext {
		let _localctx: RightAssignmentsContext = new RightAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_rightAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 286;
				this.match(XonParser.Comma);
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 287;
					this.match(XonParser.ID);
					}
				}

				}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Comma);
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new SimpleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 295;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 296;
				this.match(XonParser.OpenBrace);
				this.state = 297;
				this.match(XonParser.ID);
				this.state = 298;
				this.type(0);
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 299;
					this.match(XonParser.Comma);
					this.state = 300;
					this.match(XonParser.ID);
					this.state = 301;
					this.type(0);
					}
					}
					this.state = 306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 307;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 309;
				this.match(XonParser.OpenParen);
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 310;
					(_localctx as FunctionTypeContext)._type = this.type(0);
					(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 311;
						this.match(XonParser.Comma);
						this.state = 312;
						(_localctx as FunctionTypeContext)._type = this.type(0);
						(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
						}
						}
						this.state = 317;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 320;
				this.match(XonParser.CloseParen);
				this.state = 321;
				(_localctx as FunctionTypeContext)._returnType = this.type(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 329;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
					this.state = 324;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 325;
					this.match(XonParser.OpenBracket);
					this.state = 326;
					this.match(XonParser.CloseBracket);
					}
					}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			_localctx._name = this.match(XonParser.ID);
			this.state = 333;
			this.match(XonParser.OpenParen);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 334;
				this.argument();
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 335;
					this.match(XonParser.Comma);
					this.state = 336;
					this.argument();
					}
					}
					this.state = 341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 344;
			this.match(XonParser.CloseParen);
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 345;
				this.type(0);
				}
			}

			this.state = 348;
			this.body();
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
		this.enterRule(_localctx, 30, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			_localctx._name = this.match(XonParser.ID);
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 351;
				this.type(0);
				}
			}

			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 354;
				this.match(XonParser.Assign);
				this.state = 355;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(XonParser.Colon);
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 359;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 360;
				this.match(XonParser.LineBreak);
				this.state = 361;
				this.match(XonParser.INDENT);
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 362;
					this.statement();
					}
					}
					this.state = 365;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.Comma - 32)) | (1 << (XonParser.Add - 32)) | (1 << (XonParser.Substract - 32)) | (1 << (XonParser.Not - 32)) | (1 << (XonParser.LambdaStart - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.Spread - 66)) | (1 << (XonParser.NullLiteral - 66)) | (1 << (XonParser.BooleanLiteral - 66)) | (1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0));
				this.state = 367;
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
	// @RuleVersion(0)
	public spreadItem(): SpreadItemContext {
		let _localctx: SpreadItemContext = new SpreadItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_spreadItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Spread) {
				{
				this.state = 371;
				this.match(XonParser.Spread);
				}
			}

			this.state = 374;
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
	public objectItem(): ObjectItemContext {
		let _localctx: ObjectItemContext = new ObjectItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_objectItem);
		try {
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.ID:
					{
					this.state = 376;
					this.match(XonParser.ID);
					}
					break;
				case XonParser.OpenBracket:
					{
					this.state = 377;
					this.match(XonParser.OpenBracket);
					this.state = 378;
					_localctx._exprkey = this.expression(0);
					this.state = 379;
					this.match(XonParser.CloseBracket);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 383;
				this.match(XonParser.Colon);
				this.state = 384;
				_localctx._exprVal = this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.spreadItem();
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
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				_localctx = new AsyncExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 389;
				this.match(XonParser.Ad);
				this.state = 390;
				this.expression(25);
				}
				break;

			case 2:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 391;
				this.match(XonParser.Add);
				this.state = 392;
				this.expression(23);
				}
				break;

			case 3:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 393;
				this.match(XonParser.Substract);
				this.state = 394;
				this.expression(22);
				}
				break;

			case 4:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 395;
				this.match(XonParser.BitNot);
				this.state = 396;
				this.expression(21);
				}
				break;

			case 5:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 397;
				this.match(XonParser.Not);
				this.state = 398;
				this.expression(20);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 399;
				this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 400;
				this.literal();
				}
				break;

			case 8:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 401;
				this.match(XonParser.StringFormatStart);
				this.state = 407;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 402;
						this.expression(0);
						this.state = 403;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 409;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				}
				this.state = 410;
				this.expression(0);
				this.state = 411;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 9:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 413;
				this.match(XonParser.OpenBracket);
				this.state = 414;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 415;
				this.match(XonParser.Colon);
				this.state = 416;
				(_localctx as RangeExpressionContext)._endPos = this.expression(0);
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 417;
					this.match(XonParser.Colon);
					this.state = 418;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 421;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 10:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 423;
				this.match(XonParser.OpenBracket);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.BitNot - 22)) | (1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Ad - 22)) | (1 << (XonParser.Add - 22)) | (1 << (XonParser.Substract - 22)) | (1 << (XonParser.Not - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.Spread - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
					{
					this.state = 424;
					this.spreadItem();
					this.state = 429;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 425;
						this.match(XonParser.Comma);
						this.state = 426;
						this.spreadItem();
						}
						}
						this.state = 431;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 434;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 11:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 435;
				this.match(XonParser.OpenBrace);
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.BitNot - 22)) | (1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Ad - 22)) | (1 << (XonParser.Add - 22)) | (1 << (XonParser.Substract - 22)) | (1 << (XonParser.Not - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.Spread - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
					{
					this.state = 436;
					this.objectItem();
					this.state = 441;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 437;
						this.match(XonParser.Comma);
						this.state = 438;
						this.objectItem();
						}
						}
						this.state = 443;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 446;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 12:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 447;
				this.match(XonParser.OpenParen);
				this.state = 448;
				this.expression(0);
				this.state = 449;
				this.match(XonParser.CloseParen);
				}
				break;

			case 13:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 451;
				this.match(XonParser.LambdaStart);
				this.state = 461;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 452;
					this.match(XonParser.ID);
					this.state = 457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 453;
						this.match(XonParser.Comma);
						this.state = 454;
						this.match(XonParser.ID);
						}
						}
						this.state = 459;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 460;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 463;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 545;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 543;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 466;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 467;
						this.match(XonParser.Pow);
						this.state = 468;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 469;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 470;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.Multiply - 40)) | (1 << (XonParser.Divide - 40)) | (1 << (XonParser.Modulo - 40)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 471;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 472;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 473;
						(_localctx as AddSubExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Add || _la === XonParser.Substract)) {
							(_localctx as AddSubExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 474;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 475;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 476;
						(_localctx as BitShiftExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.RightShiftArithmetic || _la === XonParser.LeftShiftArithmetic)) {
							(_localctx as BitShiftExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 477;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 478;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 479;
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
						this.state = 480;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 481;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 482;
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
						this.state = 483;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 484;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 485;
						this.match(XonParser.BitAnd);
						this.state = 486;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 487;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 488;
						this.match(XonParser.BitXor);
						this.state = 489;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 490;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 491;
						this.match(XonParser.BitOr);
						this.state = 492;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 493;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 494;
						this.match(XonParser.And);
						this.state = 495;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 496;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 497;
						this.match(XonParser.Or);
						this.state = 498;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 499;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 500;
						this.match(XonParser.Pipe);
						this.state = 503;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
						case 1:
							{
							this.state = 501;
							this.match(XonParser.ID);
							this.state = 502;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 505;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 506;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 507;
						this.match(XonParser.OpenParen);
						this.state = 516;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.BitNot - 22)) | (1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Ad - 22)) | (1 << (XonParser.Add - 22)) | (1 << (XonParser.Substract - 22)) | (1 << (XonParser.Not - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
							{
							this.state = 508;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 513;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 509;
								this.match(XonParser.Comma);
								this.state = 510;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 515;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 518;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 519;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 520;
						this.match(XonParser.OpenBracket);
						this.state = 521;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 522;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 524;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 525;
						this.match(XonParser.OpenBracket);
						this.state = 526;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 527;
						this.match(XonParser.Colon);
						this.state = 529;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.BitNot - 22)) | (1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Ad - 22)) | (1 << (XonParser.Add - 22)) | (1 << (XonParser.Substract - 22)) | (1 << (XonParser.Not - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
							{
							this.state = 528;
							(_localctx as SliceExpressionContext)._endPos = this.expression(0);
							}
						}

						this.state = 533;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 531;
							this.match(XonParser.Colon);
							this.state = 532;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 535;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 537;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 539;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Question) {
							{
							this.state = 538;
							this.match(XonParser.Question);
							}
						}

						this.state = 541;
						this.match(XonParser.Dot);
						this.state = 542;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 547;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
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
		this.enterRule(_localctx, 40, XonParser.RULE_literal);
		try {
			this.state = 552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 549;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.NumberLiteral:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 550;
				this.match(XonParser.NumberLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 551;
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
		case 13:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 19:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 24);

		case 2:
			return this.precpred(this._ctx, 19);

		case 3:
			return this.precpred(this._ctx, 18);

		case 4:
			return this.precpred(this._ctx, 17);

		case 5:
			return this.precpred(this._ctx, 16);

		case 6:
			return this.precpred(this._ctx, 15);

		case 7:
			return this.precpred(this._ctx, 14);

		case 8:
			return this.precpred(this._ctx, 13);

		case 9:
			return this.precpred(this._ctx, 12);

		case 10:
			return this.precpred(this._ctx, 11);

		case 11:
			return this.precpred(this._ctx, 10);

		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 29);

		case 14:
			return this.precpred(this._ctx, 28);

		case 15:
			return this.precpred(this._ctx, 27);

		case 16:
			return this.precpred(this._ctx, 26);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03N\u022D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02." +
		"\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x07\x024\n\x02\f\x02\x0E\x027\v\x02" +
		"\x03\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03D\n\x03\f\x03\x0E\x03G\v\x03\x03\x03\x05\x03J\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x07\x04O\n\x04\f\x04\x0E\x04R\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04X\n\x04\f\x04\x0E\x04[\v\x04\x03\x05\x03\x05" +
		"\x03\x05\x05\x05`\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06" +
		"g\n\x06\r\x06\x0E\x06h\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07o\n\x07" +
		"\x03\x07\x03\x07\x05\x07s\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x80\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8A" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07\x94\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\x99\n\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xA4\n\t\f\t\x0E\t\xA7" +
		"\v\t\x03\t\x03\t\x05\t\xAB\n\t\x03\t\x03\t\x05\t\xAF\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\xB7\n\t\x06\t\xB9\n\t\r\t\x0E\t\xBA\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\xC3\n\t\x05\t\xC5\n\t\x03\t\x03\t\x05" +
		"\t\xC9\n\t\x03\t\x05\t\xCC\n\t\x03\t\x05\t\xCF\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\xD7\n\t\x03\t\x03\t\x03\t\x03\t\x06\t\xDD\n\t\r\t" +
		"\x0E\t\xDE\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xE6\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\xEC\n\n\f\n\x0E\n\xEF\v\n\x05\n\xF1\n\n\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\xF7\n\v\x03\v\x03\v\x05\v\xFB\n\v\x05\v\xFD\n\v\x03\f\x03" +
		"\f\x03\f\x05\f\u0102\n\f\x07\f\u0104\n\f\f\f\x0E\f\u0107\v\f\x03\f\x03" +
		"\f\x05\f\u010B\n\f\x06\f\u010D\n\f\r\f\x0E\f\u010E\x05\f\u0111\n\f\x03" +
		"\r\x03\r\x05\r\u0115\n\r\x03\r\x03\r\x03\r\x05\r\u011A\n\r\x07\r\u011C" +
		"\n\r\f\r\x0E\r\u011F\v\r\x03\x0E\x03\x0E\x05\x0E\u0123\n\x0E\x06\x0E\u0125" +
		"\n\x0E\r\x0E\x0E\x0E\u0126\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u0131\n\x0F\f\x0F\x0E\x0F\u0134\v\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u013C\n\x0F\f\x0F" +
		"\x0E\x0F\u013F\v\x0F\x05\x0F\u0141\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0145" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u014A\n\x0F\f\x0F\x0E\x0F\u014D" +
		"\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0154\n\x10\f\x10" +
		"\x0E\x10\u0157\v\x10\x05\x10\u0159\n\x10\x03\x10\x03\x10\x05\x10\u015D" +
		"\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\u0163\n\x11\x03\x11\x03" +
		"\x11\x05\x11\u0167\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12" +
		"\u016E\n\x12\r\x12\x0E\x12\u016F\x03\x12\x03\x12\x05\x12\u0174\n\x12\x03" +
		"\x13\x05\x13\u0177\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u0180\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0185\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15" +
		"\u0198\n\x15\f\x15\x0E\x15\u019B\v\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01A6\n\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u01AE\n\x15\f\x15\x0E\x15" +
		"\u01B1\v\x15\x05\x15\u01B3\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x07\x15\u01BA\n\x15\f\x15\x0E\x15\u01BD\v\x15\x05\x15\u01BF\n\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07" +
		"\x15\u01CA\n\x15\f\x15\x0E\x15\u01CD\v\x15\x03\x15\x05\x15\u01D0\n\x15" +
		"\x03\x15\x05\x15\u01D3\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01FA\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0202\n\x15\f\x15\x0E\x15\u0205" +
		"\v\x15\x05\x15\u0207\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0214\n\x15\x03\x15" +
		"\x03\x15\x05\x15\u0218\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u021E" +
		"\n\x15\x03\x15\x03\x15\x07\x15\u0222\n\x15\f\x15\x0E\x15\u0225\v\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\u022B\n\x16\x03\x16\x02\x02\x04\x1C" +
		"(\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02\x02\b\x06\x02\x15\x1A\'-/036\x03\x02*,\x03\x02\'(\x03\x02\x19" +
		"\x1A\x03\x02/2\x03\x0234\x02\u028F\x02/\x03\x02\x02\x02\x04I\x03\x02\x02" +
		"\x02\x06K\x03\x02\x02\x02\b\\\x03\x02\x02\x02\na\x03\x02\x02\x02\f\x98" +
		"\x03\x02\x02\x02\x0E\x9A\x03\x02\x02\x02\x10\xE5\x03\x02\x02\x02\x12\xF0" +
		"\x03\x02\x02\x02\x14\xFC\x03\x02\x02\x02\x16\u0110\x03\x02\x02\x02\x18" +
		"\u0112\x03\x02\x02\x02\x1A\u0124\x03\x02\x02\x02\x1C\u0144\x03\x02\x02" +
		"\x02\x1E\u014E\x03\x02\x02\x02 \u0160\x03\x02\x02\x02\"\u0168\x03\x02" +
		"\x02\x02$\u0176\x03\x02\x02\x02&\u0184\x03\x02\x02\x02(\u01D2\x03\x02" +
		"\x02\x02*\u022A\x03\x02\x02\x02,.\x05\x04\x03\x02-,\x03\x02\x02\x02.1" +
		"\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0205\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0224\x05\x10\t\x0232\x03\x02\x02\x0247\x03\x02\x02\x02" +
		"53\x03\x02\x02\x0256\x03\x02\x02\x026;\x03\x02\x02\x0275\x03\x02\x02\x02" +
		"8:\x05\n\x06\x0298\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02" +
		";<\x03\x02\x02\x02<\x03\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x05\x06\x04" +
		"\x02?@\x07%\x02\x02@E\x05\b\x05\x02AB\x07\"\x02\x02BD\x05\b\x05\x02CA" +
		"\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02" +
		"FJ\x03\x02\x02\x02GE\x03\x02\x02\x02HJ\x07\x14\x02\x02I>\x03\x02\x02\x02" +
		"IH\x03\x02\x02\x02J\x05\x03\x02\x02\x02KP\x07L\x02\x02LM\x07(\x02\x02" +
		"MO\x07L\x02\x02NL\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02QS\x03\x02\x02\x02RP\x03\x02\x02\x02ST\x07+\x02\x02" +
		"TY\x07L\x02\x02UV\x07(\x02\x02VX\x07L\x02\x02WU\x03\x02\x02\x02X[\x03" +
		"\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x07\x03\x02\x02\x02" +
		"[Y\x03\x02\x02\x02\\_\x07L\x02\x02]^\x07\x05\x02\x02^`\x07L\x02\x02_]" +
		"\x03\x02\x02\x02_`\x03\x02\x02\x02`\t\x03\x02\x02\x02ab\x07L\x02\x02b" +
		"c\x07%\x02\x02cd\x07\x14\x02\x02df\x07\x03\x02\x02eg\x05\f\x07\x02fe\x03" +
		"\x02\x02\x02gh\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x03" +
		"\x02\x02\x02jk\x07\x04\x02\x02k\v\x03\x02\x02\x02ln\x07L\x02\x02mo\x05" +
		"\x1C\x0F\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02or\x03\x02\x02\x02pq\x07" +
		"#\x02\x02qs\x05(\x15\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\x99\x03" +
		"\x02\x02\x02t\x99\x05\x1E\x10\x02u\x99\x07\v\x02\x02vw\x07\x10\x02\x02" +
		"wx\x05\x0E\b\x02xy\x07\x1D\x02\x02yz\x07L\x02\x02z{\x07\"\x02\x02{|\x07" +
		"L\x02\x02|}\x05\x1C\x0F\x02}\x7F\x07\x1E\x02\x02~\x80\x05\x1C\x0F\x02" +
		"\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02" +
		"\x81\x82\x05\"\x12\x02\x82\x99\x03\x02\x02\x02\x83\x84\x07\x11\x02\x02" +
		"\x84\x85\x05\x0E\b\x02\x85\x86\x07\x1D\x02\x02\x86\x87\x07L\x02\x02\x87" +
		"\x89\x07\x1E\x02\x02\x88\x8A\x05\x1C\x0F\x02\x89\x88\x03\x02\x02\x02\x89" +
		"\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x05\"\x12\x02\x8C" +
		"\x99\x03\x02\x02\x02\x8D\x8E\x07\x12\x02\x02\x8E\x8F\x05\x0E\b\x02\x8F" +
		"\x90\x07\x1D\x02\x02\x90\x91\x07L\x02\x02\x91\x93\x07\x1E\x02\x02\x92" +
		"\x94\x05\x1C\x0F\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
		"\x95\x03\x02\x02\x02\x95\x96\x05\"\x12\x02\x96\x99\x03\x02\x02\x02\x97" +
		"\x99\x07\x14\x02\x02\x98l\x03\x02\x02\x02\x98t\x03\x02\x02\x02\x98u\x03" +
		"\x02\x02\x02\x98v\x03\x02\x02\x02\x98\x83\x03\x02\x02\x02\x98\x8D\x03" +
		"\x02\x02\x02\x98\x97\x03\x02\x02\x02\x99\r\x03\x02\x02\x02\x9A\x9B\t\x02" +
		"\x02\x02\x9B\x0F\x03\x02\x02\x02\x9C\x9D\x07\x06\x02\x02\x9D\x9E\x05(" +
		"\x15\x02\x9E\xA5\x05\"\x12\x02\x9F\xA0\x07\b\x02\x02\xA0\xA1\x05(\x15" +
		"\x02\xA1\xA2\x05\"\x12\x02\xA2\xA4\x03\x02\x02\x02\xA3\x9F\x03\x02\x02" +
		"\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02" +
		"\x02\xA6\xAA\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x07\x07\x02" +
		"\x02\xA9\xAB\x05\"\x12\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02" +
		"\x02\xAB\xE6\x03\x02\x02\x02\xAC\xAE\x07\x0F\x02\x02\xAD\xAF\x05(\x15" +
		"\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02" +
		"\x02\xB0\xB1\x07%\x02\x02\xB1\xB2\x07\x14\x02\x02\xB2\xB8\x07\x03\x02" +
		"\x02\xB3\xB4\x05(\x15\x02\xB4\xB6\x05\"\x12\x02\xB5\xB7\x07\x14\x02\x02" +
		"\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02" +
		"\xB8\xB3\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02" +
		"\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x07\x04\x02\x02" +
		"\xBD\xE6\x03\x02\x02\x02\xBE\xCE\x07\t\x02\x02\xBF\xC4\x07L\x02\x02\xC0" +
		"\xC2\x07\"\x02\x02\xC1\xC3\x07L\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3" +
		"\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC0\x03\x02\x02\x02\xC4\xC5" +
		"\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC7\x07\"\x02\x02\xC7\xC9" +
		"\x07L\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xCC\x07\n\x02\x02\xCB\xBF\x03\x02\x02\x02\xCB\xCC" +
		"\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x05(\x15\x02\xCE\xCB" +
		"\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xE6" +
		"\x05\"\x12\x02\xD1\xE6\x07\v\x02\x02\xD2\xE6\x07\f\x02\x02\xD3\xE6\x07" +
		"\r\x02\x02\xD4\xD6\x07\x0E\x02\x02\xD5\xD7\x05(\x15\x02\xD6\xD5\x03\x02" +
		"\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xE6\x03\x02\x02\x02\xD8\xE6\x05\x1E" +
		"\x10\x02\xD9\xDA\x05\x14\v\x02\xDA\xDB\x07#\x02\x02\xDB\xDD\x03\x02\x02" +
		"\x02\xDC\xD9\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDC\x03\x02\x02" +
		"\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x05\x12\n" +
		"\x02\xE1\xE6\x03\x02\x02\x02\xE2\xE6\x05(\x15\x02\xE3\xE6\x07\x13\x02" +
		"\x02\xE4\xE6\x07\x14\x02\x02\xE5\x9C\x03\x02\x02\x02\xE5\xAC\x03\x02\x02" +
		"\x02\xE5\xBE\x03\x02\x02\x02\xE5\xD1\x03\x02\x02\x02\xE5\xD2\x03\x02\x02" +
		"\x02\xE5\xD3\x03\x02\x02\x02\xE5\xD4\x03\x02\x02\x02\xE5\xD8\x03\x02\x02" +
		"\x02\xE5\xDC\x03\x02\x02\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE3\x03\x02\x02" +
		"\x02\xE5\xE4\x03\x02\x02\x02\xE6\x11\x03\x02\x02\x02\xE7\xF1\x05(\x15" +
		"\x02\xE8\xED\x05$\x13\x02\xE9\xEA\x07\"\x02\x02\xEA\xEC\x05$\x13\x02\xEB" +
		"\xE9\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED" +
		"\xEE\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0" +
		"\xE7\x03\x02\x02\x02\xF0\xE8\x03\x02\x02\x02\xF1\x13\x03\x02\x02\x02\xF2" +
		"\xFD\x05\x16\f\x02\xF3\xF4\x05\x16\f\x02\xF4\xF6\x05\x18\r\x02\xF5\xF7" +
		"\x05\x1A\x0E\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xFD" +
		"\x03\x02\x02\x02\xF8\xFA\x05\x18\r\x02\xF9\xFB\x05\x1A\x0E\x02\xFA\xF9" +
		"\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFD\x03\x02\x02\x02\xFC\xF2" +
		"\x03\x02\x02\x02\xFC\xF3\x03\x02\x02\x02\xFC\xF8\x03\x02\x02\x02\xFD\x15" +
		"\x03\x02\x02\x02\xFE\u0105\x07L\x02\x02\xFF\u0101\x07\"\x02\x02\u0100" +
		"\u0102\x07L\x02\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u0104\x03\x02\x02\x02\u0103\xFF\x03\x02\x02\x02\u0104\u0107" +
		"\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02" +
		"\u0106\u0111\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108\u010A\x07" +
		"\"\x02\x02\u0109\u010B\x07L\x02\x02\u010A\u0109\x03\x02\x02\x02\u010A" +
		"\u010B\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C\u0108\x03\x02" +
		"\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E" +
		"\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\xFE\x03\x02\x02" +
		"\x02\u0110\u010C\x03\x02\x02\x02\u0111\x17\x03\x02\x02\x02\u0112\u0114" +
		"\x07D\x02\x02\u0113\u0115\x07L\x02\x02\u0114\u0113\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u011D\x03\x02\x02\x02\u0116\u0117\x07\"\x02" +
		"\x02\u0117\u0119\x07D\x02\x02\u0118\u011A\x07L\x02\x02\u0119\u0118\x03" +
		"\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B" +
		"\u0116\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02" +
		"\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\x19\x03\x02\x02\x02\u011F\u011D" +
		"\x03\x02\x02\x02\u0120\u0122\x07\"\x02\x02\u0121\u0123\x07L\x02\x02\u0122" +
		"\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02" +
		"\x02\x02\u0124\u0120\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126" +
		"\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\x1B\x03\x02\x02" +
		"\x02\u0128\u0129\b\x0F\x01\x02\u0129\u0145\x07L\x02\x02\u012A\u012B\x07" +
		"\x1F\x02\x02\u012B\u012C\x07L\x02\x02\u012C\u0132\x05\x1C\x0F\x02\u012D" +
		"\u012E\x07\"\x02\x02\u012E\u012F\x07L\x02\x02\u012F\u0131\x05\x1C\x0F" +
		"\x02\u0130\u012D\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130" +
		"\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02" +
		"\u0134\u0132\x03\x02\x02\x02\u0135\u0136\x07 \x02\x02\u0136\u0145\x03" +
		"\x02\x02\x02\u0137\u0140\x07\x1D\x02\x02\u0138\u013D\x05\x1C\x0F\x02\u0139" +
		"\u013A\x07\"\x02\x02\u013A\u013C\x05\x1C\x0F\x02\u013B\u0139\x03\x02\x02" +
		"\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E" +
		"\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02" +
		"\u0140\u0138\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03" +
		"\x02\x02\x02\u0142\u0143\x07\x1E\x02\x02\u0143\u0145\x05\x1C\x0F\x03\u0144" +
		"\u0128\x03\x02\x02\x02\u0144\u012A\x03\x02\x02\x02\u0144\u0137\x03\x02" +
		"\x02\x02\u0145\u014B\x03\x02\x02\x02\u0146\u0147\f\x05\x02\x02\u0147\u0148" +
		"\x07\x1B\x02\x02\u0148\u014A\x07\x1C\x02\x02\u0149\u0146\x03\x02\x02\x02" +
		"\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03" +
		"\x02\x02\x02\u014C\x1D\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E" +
		"\u014F\x07L\x02\x02\u014F\u0158\x07\x1D\x02\x02\u0150\u0155\x05 \x11\x02" +
		"\u0151\u0152\x07\"\x02\x02\u0152\u0154\x05 \x11\x02\u0153\u0151\x03\x02" +
		"\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155" +
		"\u0156\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02" +
		"\x02\x02\u0158\u0150\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015C\x07\x1E\x02\x02\u015B\u015D\x05\x1C" +
		"\x0F\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u015E\x03\x02\x02\x02\u015E\u015F\x05\"\x12\x02\u015F\x1F\x03\x02\x02" +
		"\x02\u0160\u0162\x07L\x02\x02\u0161\u0163\x05\x1C\x0F\x02\u0162\u0161" +
		"\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02" +
		"\u0164\u0165\x07#\x02\x02\u0165\u0167\x05(\x15\x02\u0166\u0164\x03\x02" +
		"\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167!\x03\x02\x02\x02\u0168\u0173" +
		"\x07%\x02\x02\u0169\u0174\x05\x10\t\x02\u016A\u016B\x07\x14\x02\x02\u016B" +
		"\u016D\x07\x03\x02\x02\u016C\u016E\x05\x10\t\x02\u016D\u016C\x03\x02\x02" +
		"\x02\u016E\u016F\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170" +
		"\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x07\x04\x02\x02" +
		"\u0172\u0174\x03\x02\x02\x02\u0173\u0169\x03\x02\x02\x02\u0173\u016A\x03" +
		"\x02\x02\x02\u0174#\x03\x02\x02\x02\u0175\u0177\x07D\x02\x02\u0176\u0175" +
		"\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02" +
		"\u0178\u0179\x05(\x15\x02\u0179%\x03\x02\x02\x02\u017A\u0180\x07L\x02" +
		"\x02\u017B\u017C\x07\x1B\x02\x02\u017C\u017D\x05(\x15\x02\u017D\u017E" +
		"\x07\x1C\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017A\x03\x02\x02\x02" +
		"\u017F\u017B\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x07" +
		"%\x02\x02\u0182\u0185\x05(\x15\x02\u0183\u0185\x05$\x13\x02\u0184\u017F" +
		"\x03\x02\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185\'\x03\x02\x02\x02\u0186" +
		"\u0187\b\x15\x01\x02\u0187\u0188\x07!\x02\x02\u0188\u01D3\x05(\x15\x1B" +
		"\u0189\u018A\x07\'\x02\x02\u018A\u01D3\x05(\x15\x19\u018B\u018C\x07(\x02" +
		"\x02\u018C\u01D3\x05(\x15\x18\u018D\u018E\x07\x18\x02\x02\u018E\u01D3" +
		"\x05(\x15\x17\u018F\u0190\x07)\x02\x02\u0190\u01D3\x05(\x15\x16\u0191" +
		"\u01D3\x07L\x02\x02\u0192\u01D3\x05*\x16\x02\u0193\u0199\x07I\x02\x02" +
		"\u0194\u0195\x05(\x15\x02\u0195\u0196\x07J\x02\x02\u0196\u0198\x03\x02" +
		"\x02\x02\u0197\u0194\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199" +
		"\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02" +
		"\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019D\x05(\x15\x02\u019D\u019E" +
		"\x07K\x02\x02\u019E\u01D3\x03\x02\x02\x02\u019F\u01A0\x07\x1B\x02\x02" +
		"\u01A0\u01A1\x05(\x15\x02\u01A1\u01A2\x07%\x02\x02\u01A2\u01A5\x05(\x15" +
		"\x02\u01A3\u01A4\x07%\x02\x02\u01A4\u01A6\x05(\x15\x02\u01A5\u01A3\x03" +
		"\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7" +
		"\u01A8\x07\x1C\x02\x02\u01A8\u01D3\x03\x02\x02\x02\u01A9\u01B2\x07\x1B" +
		"\x02\x02\u01AA\u01AF\x05$\x13\x02\u01AB\u01AC\x07\"\x02\x02\u01AC\u01AE" +
		"\x05$\x13\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02" +
		"\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B3\x03" +
		"\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01AA\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01D3\x07\x1C" +
		"\x02\x02\u01B5\u01BE\x07\x1F\x02\x02\u01B6\u01BB\x05&\x14\x02\u01B7\u01B8" +
		"\x07\"\x02\x02\u01B8\u01BA\x05&\x14\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA" +
		"\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02" +
		"\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE" +
		"\u01B6\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03\x02" +
		"\x02\x02\u01C0\u01D3\x07 \x02\x02\u01C1\u01C2\x07\x1D\x02\x02\u01C2\u01C3" +
		"\x05(\x15\x02\u01C3\u01C4\x07\x1E\x02\x02\u01C4\u01D3\x03\x02\x02\x02" +
		"\u01C5\u01CF\x07A\x02\x02\u01C6\u01CB\x07L\x02\x02\u01C7\u01C8\x07\"\x02" +
		"\x02\u01C8\u01CA\x07L\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01CD" +
		"\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02" +
		"\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01D0\x07" +
		"%\x02\x02\u01CF\u01C6\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0" +
		"\u01D1\x03\x02\x02\x02\u01D1\u01D3\x05(\x15\x03\u01D2\u0186\x03\x02\x02" +
		"\x02\u01D2\u0189\x03\x02\x02\x02\u01D2\u018B\x03\x02\x02\x02\u01D2\u018D" +
		"\x03\x02\x02\x02\u01D2\u018F\x03\x02\x02\x02\u01D2\u0191\x03\x02\x02\x02" +
		"\u01D2\u0192\x03\x02\x02\x02\u01D2\u0193\x03\x02\x02\x02\u01D2\u019F\x03" +
		"\x02\x02\x02\u01D2\u01A9\x03\x02\x02\x02\u01D2\u01B5\x03\x02\x02\x02\u01D2" +
		"\u01C1\x03\x02\x02\x02\u01D2\u01C5\x03\x02\x02\x02\u01D3\u0223\x03\x02" +
		"\x02\x02\u01D4\u01D5\f\x1A\x02\x02\u01D5\u01D6\x07-\x02\x02\u01D6\u0222" +
		"\x05(\x15\x1B\u01D7\u01D8\f\x15\x02\x02\u01D8\u01D9\t\x03\x02\x02\u01D9" +
		"\u0222\x05(\x15\x16\u01DA\u01DB\f\x14\x02\x02\u01DB\u01DC\t\x04\x02\x02" +
		"\u01DC\u0222\x05(\x15\x15\u01DD\u01DE\f\x13\x02\x02\u01DE\u01DF\t\x05" +
		"\x02\x02\u01DF\u0222\x05(\x15\x14\u01E0\u01E1\f\x12\x02\x02\u01E1\u01E2" +
		"\t\x06\x02\x02\u01E2\u0222\x05(\x15\x13\u01E3\u01E4\f\x11\x02\x02\u01E4" +
		"\u01E5\t\x07\x02\x02\u01E5\u0222\x05(\x15\x12\u01E6\u01E7\f\x10\x02\x02" +
		"\u01E7\u01E8\x07\x15\x02\x02\u01E8\u0222\x05(\x15\x11\u01E9\u01EA\f\x0F" +
		"\x02\x02\u01EA\u01EB\x07\x17\x02\x02\u01EB\u0222\x05(\x15\x10\u01EC\u01ED" +
		"\f\x0E\x02\x02\u01ED\u01EE\x07\x16\x02\x02\u01EE\u0222\x05(\x15\x0F\u01EF" +
		"\u01F0\f\r\x02\x02\u01F0\u01F1\x075\x02\x02\u01F1\u0222\x05(\x15\x0E\u01F2" +
		"\u01F3\f\f\x02\x02\u01F3\u01F4\x076\x02\x02\u01F4\u0222\x05(\x15\r\u01F5" +
		"\u01F6\f\x04\x02\x02\u01F6\u01F9\x07B\x02\x02\u01F7\u01F8\x07L\x02\x02" +
		"\u01F8\u01FA\x07%\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03" +
		"\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u0222\x05(\x15\x05\u01FC" +
		"\u01FD\f\x1F\x02\x02\u01FD\u0206\x07\x1D\x02\x02\u01FE\u0203\x05(\x15" +
		"\x02\u01FF\u0200\x07\"\x02\x02\u0200\u0202\x05(\x15\x02\u0201\u01FF\x03" +
		"\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203" +
		"\u0204\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02" +
		"\x02\x02\u0206\u01FE\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207" +
		"\u0208\x03\x02\x02\x02\u0208\u0222\x07\x1E\x02\x02\u0209\u020A\f\x1E\x02" +
		"\x02\u020A\u020B\x07\x1B\x02\x02\u020B\u020C\x05(\x15\x02\u020C\u020D" +
		"\x07\x1C\x02\x02\u020D\u0222\x03\x02\x02\x02\u020E\u020F\f\x1D\x02\x02" +
		"\u020F\u0210\x07\x1B\x02\x02\u0210\u0211\x05(\x15\x02\u0211\u0213\x07" +
		"%\x02\x02\u0212\u0214\x05(\x15\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214" +
		"\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0216\x07%\x02\x02" +
		"\u0216\u0218\x05(\x15\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03" +
		"\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x07\x1C\x02\x02\u021A" +
		"\u0222\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u021B\u021D\f\x1C\x02\x02\u021C\u021E\x07$\x02\x02\u021D\u021C\x03" +
		"\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F" +
		"\u0220\x07&\x02\x02\u0220\u0222\x07L\x02\x02\u0221\u01D4\x03\x02\x02\x02" +
		"\u0221\u01D7\x03\x02\x02\x02\u0221\u01DA\x03\x02\x02\x02\u0221\u01DD\x03" +
		"\x02\x02\x02\u0221\u01E0\x03\x02\x02\x02\u0221\u01E3\x03\x02\x02\x02\u0221" +
		"\u01E6\x03\x02\x02\x02\u0221\u01E9\x03\x02\x02\x02\u0221\u01EC\x03\x02" +
		"\x02\x02\u0221\u01EF\x03\x02\x02\x02\u0221\u01F2\x03\x02\x02\x02\u0221" +
		"\u01F5\x03\x02\x02\x02\u0221\u01FC\x03\x02\x02\x02\u0221\u0209\x03\x02" +
		"\x02\x02\u0221\u020E\x03\x02\x02\x02\u0221\u021B\x03\x02\x02\x02\u0222" +
		"\u0225\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02" +
		"\x02\x02\u0224)\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0226\u022B" +
		"\x07E\x02\x02\u0227\u022B\x07F\x02\x02\u0228\u022B\x07G\x02\x02\u0229" +
		"\u022B\x07H\x02\x02\u022A\u0226\x03\x02\x02\x02\u022A\u0227\x03\x02\x02" +
		"\x02\u022A\u0228\x03\x02\x02\x02\u022A\u0229\x03\x02\x02\x02\u022B+\x03" +
		"\x02\x02\x02N/5;EIPY_hnr\x7F\x89\x93\x98\xA5\xAA\xAE\xB6\xBA\xC2\xC4\xC8" +
		"\xCB\xCE\xD6\xDE\xE5\xED\xF0\xF6\xFA\xFC\u0101\u0105\u010A\u010E\u0110" +
		"\u0114\u0119\u011D\u0122\u0126\u0132\u013D\u0140\u0144\u014B\u0155\u0158" +
		"\u015C\u0162\u0166\u016F\u0173\u0176\u017F\u0184\u0199\u01A5\u01AF\u01B2" +
		"\u01BB\u01BE\u01CB\u01CF\u01D2\u01F9\u0203\u0206\u0213\u0217\u021D\u0221" +
		"\u0223\u022A";
	public static readonly _serializedATN: string = Utils.join(
		[
			XonParser._serializedATNSegment0,
			XonParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public imports(): ImportsContext[];
	public imports(i: number): ImportsContext;
	public imports(i?: number): ImportsContext | ImportsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportsContext);
		} else {
			return this.getRuleContext(i, ImportsContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class ImportsContext extends ParserRuleContext {
	public importPath(): ImportPathContext | undefined {
		return this.tryGetRuleContext(0, ImportPathContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public importMember(): ImportMemberContext[];
	public importMember(i: number): ImportMemberContext;
	public importMember(i?: number): ImportMemberContext | ImportMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportMemberContext);
		} else {
			return this.getRuleContext(i, ImportMemberContext);
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
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
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
	public Divide(): TerminalNode { return this.getToken(XonParser.Divide, 0); }
	public Substract(): TerminalNode[];
	public Substract(i: number): TerminalNode;
	public Substract(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Substract);
		} else {
			return this.getToken(XonParser.Substract, i);
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
	public get ruleIndex(): number { return XonParser.RULE_importMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public _name: Token;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	public _name: Token;
	public _value: ExpressionContext;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PassMemberContext extends MemberContext {
	public Pass(): TerminalNode { return this.getToken(XonParser.Pass, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixOperatorMemberContext extends MemberContext {
	public _returnType: TypeContext;
	public Infix(): TerminalNode { return this.getToken(XonParser.Infix, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode { return this.getToken(XonParser.Comma, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixOperatorMemberContext extends MemberContext {
	public Prefix(): TerminalNode { return this.getToken(XonParser.Prefix, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PostfixOperatorMemberContext extends MemberContext {
	public Postfix(): TerminalNode { return this.getToken(XonParser.Postfix, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakMemberContext extends MemberContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class OperatorContext extends ParserRuleContext {
	public Add(): TerminalNode | undefined { return this.tryGetToken(XonParser.Add, 0); }
	public Substract(): TerminalNode | undefined { return this.tryGetToken(XonParser.Substract, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(XonParser.Divide, 0); }
	public Modulo(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulo, 0); }
	public Pow(): TerminalNode | undefined { return this.tryGetToken(XonParser.Pow, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(XonParser.Not, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(XonParser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(XonParser.Or, 0); }
	public BitAnd(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitAnd, 0); }
	public BitXor(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitXor, 0); }
	public BitOr(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitOr, 0); }
	public BitNot(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitNot, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftArithmetic, 0); }
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.LeftShiftArithmetic, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(XonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.NotEquals, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
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
export class SelectStatementContext extends StatementContext {
	public _value: ExpressionContext;
	public _expression: ExpressionContext;
	public _cases: ExpressionContext[] = [];
	public Select(): TerminalNode { return this.getToken(XonParser.Select, 0); }
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
export class PassStatementContext extends StatementContext {
	public Pass(): TerminalNode { return this.getToken(XonParser.Pass, 0); }
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
export class FunctionStatementContext extends StatementContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public assignmentValue(): AssignmentValueContext {
		return this.getRuleContext(0, AssignmentValueContext);
	}
	public assignmentsList(): AssignmentsListContext[];
	public assignmentsList(i: number): AssignmentsListContext;
	public assignmentsList(i?: number): AssignmentsListContext | AssignmentsListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentsListContext);
		} else {
			return this.getRuleContext(i, AssignmentsListContext);
		}
	}
	public Assign(): TerminalNode[];
	public Assign(i: number): TerminalNode;
	public Assign(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Assign);
		} else {
			return this.getToken(XonParser.Assign, i);
		}
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
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class AssignmentValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public spreadItem(): SpreadItemContext[];
	public spreadItem(i: number): SpreadItemContext;
	public spreadItem(i?: number): SpreadItemContext | SpreadItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpreadItemContext);
		} else {
			return this.getRuleContext(i, SpreadItemContext);
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
	public get ruleIndex(): number { return XonParser.RULE_assignmentValue; }
}


export class AssignmentsListContext extends ParserRuleContext {
	public leftAssignments(): LeftAssignmentsContext | undefined {
		return this.tryGetRuleContext(0, LeftAssignmentsContext);
	}
	public middleAssignments(): MiddleAssignmentsContext | undefined {
		return this.tryGetRuleContext(0, MiddleAssignmentsContext);
	}
	public rightAssignments(): RightAssignmentsContext | undefined {
		return this.tryGetRuleContext(0, RightAssignmentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_assignmentsList; }
}


export class LeftAssignmentsContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_leftAssignments; }
}


export class MiddleAssignmentsContext extends ParserRuleContext {
	public Spread(): TerminalNode[];
	public Spread(i: number): TerminalNode;
	public Spread(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Spread);
		} else {
			return this.getToken(XonParser.Spread, i);
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
	public get ruleIndex(): number { return XonParser.RULE_middleAssignments; }
}


export class RightAssignmentsContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_rightAssignments; }
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
export class SimpleTypeContext extends TypeContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
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
	public _type: TypeContext;
	public _args: TypeContext[] = [];
	public _returnType: TypeContext;
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
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
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class FunctionContext extends ParserRuleContext {
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
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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
	public get ruleIndex(): number { return XonParser.RULE_function; }
}


export class ArgumentContext extends ParserRuleContext {
	public _name: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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


export class SpreadItemContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Spread(): TerminalNode | undefined { return this.tryGetToken(XonParser.Spread, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_spreadItem; }
}


export class ObjectItemContext extends ParserRuleContext {
	public _exprkey: ExpressionContext;
	public _exprVal: ExpressionContext;
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
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
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(XonParser.CloseBracket, 0); }
	public spreadItem(): SpreadItemContext | undefined {
		return this.tryGetRuleContext(0, SpreadItemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_objectItem; }
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
	public _endPos: ExpressionContext;
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
	public Question(): TerminalNode | undefined { return this.tryGetToken(XonParser.Question, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AsyncExpressionContext extends ExpressionContext {
	public Ad(): TerminalNode { return this.getToken(XonParser.Ad, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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
	public Add(): TerminalNode { return this.getToken(XonParser.Add, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Substract(): TerminalNode { return this.getToken(XonParser.Substract, 0); }
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
	public Modulo(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulo, 0); }
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
	public Add(): TerminalNode | undefined { return this.tryGetToken(XonParser.Add, 0); }
	public Substract(): TerminalNode | undefined { return this.tryGetToken(XonParser.Substract, 0); }
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
export class RangeExpressionContext extends ExpressionContext {
	public _startPos: ExpressionContext;
	public _endPos: ExpressionContext;
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
export class ArrayExpressionContext extends ExpressionContext {
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public spreadItem(): SpreadItemContext[];
	public spreadItem(i: number): SpreadItemContext;
	public spreadItem(i?: number): SpreadItemContext | SpreadItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpreadItemContext);
		} else {
			return this.getRuleContext(i, SpreadItemContext);
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
	public objectItem(): ObjectItemContext[];
	public objectItem(i: number): ObjectItemContext;
	public objectItem(i?: number): ObjectItemContext | ObjectItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectItemContext);
		} else {
			return this.getRuleContext(i, ObjectItemContext);
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
export class NumberLiteralContext extends LiteralContext {
	public NumberLiteral(): TerminalNode { return this.getToken(XonParser.NumberLiteral, 0); }
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


