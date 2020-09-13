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
	public static readonly Preprocessor = 14;
	public static readonly LineBreak = 15;
	public static readonly BitAnd = 16;
	public static readonly BitOr = 17;
	public static readonly BitXor = 18;
	public static readonly BitNot = 19;
	public static readonly RightShiftArithmetic = 20;
	public static readonly LeftShiftArithmetic = 21;
	public static readonly OpenBracket = 22;
	public static readonly CloseBracket = 23;
	public static readonly OpenParen = 24;
	public static readonly CloseParen = 25;
	public static readonly OpenBrace = 26;
	public static readonly CloseBrace = 27;
	public static readonly Ad = 28;
	public static readonly Comma = 29;
	public static readonly Assign = 30;
	public static readonly Question = 31;
	public static readonly Colon = 32;
	public static readonly Dot = 33;
	public static readonly Add = 34;
	public static readonly Substract = 35;
	public static readonly Not = 36;
	public static readonly Multiply = 37;
	public static readonly Divide = 38;
	public static readonly Modulo = 39;
	public static readonly Pow = 40;
	public static readonly Sharp = 41;
	public static readonly LessThan = 42;
	public static readonly MoreThan = 43;
	public static readonly LessThanEquals = 44;
	public static readonly MoreThanEquals = 45;
	public static readonly Equals = 46;
	public static readonly NotEquals = 47;
	public static readonly And = 48;
	public static readonly Or = 49;
	public static readonly MultiplyAssign = 50;
	public static readonly DivideAssign = 51;
	public static readonly ModuloAssign = 52;
	public static readonly AddAssign = 53;
	public static readonly SubstractAssign = 54;
	public static readonly LeftShiftArithmeticAssign = 55;
	public static readonly RightShiftArithmeticAssign = 56;
	public static readonly BitAndAssign = 57;
	public static readonly BitXorAssign = 58;
	public static readonly BitOrAssign = 59;
	public static readonly LambdaStart = 60;
	public static readonly Pipe = 61;
	public static readonly Underscore = 62;
	public static readonly Spread = 63;
	public static readonly NullLiteral = 64;
	public static readonly BooleanLiteral = 65;
	public static readonly NumberLiteral = 66;
	public static readonly StringLiteral = 67;
	public static readonly StringFormatStart = 68;
	public static readonly StringFormatMiddle = 69;
	public static readonly StringFormatEnd = 70;
	public static readonly ID = 71;
	public static readonly DefinitionID = 72;
	public static readonly Skip = 73;
	public static readonly UnexpectedCharacter = 74;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importMember = 2;
	public static readonly RULE_definition = 3;
	public static readonly RULE_member = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_assignmentsList = 6;
	public static readonly RULE_leftAssignments = 7;
	public static readonly RULE_middleAssignments = 8;
	public static readonly RULE_rightAssignments = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_function = 11;
	public static readonly RULE_argument = 12;
	public static readonly RULE_body = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_spreadItem = 15;
	public static readonly RULE_literal = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importMember", "definition", "member", "statement", 
		"assignmentsList", "leftAssignments", "middleAssignments", "rightAssignments", 
		"type", "function", "argument", "body", "expression", "spreadItem", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'as'", "'if'", "'else'", "'elif'", "'loop'", 
		"'in'", "'pass'", "'continue'", "'break'", "'return'", "'select'", undefined, 
		undefined, "'and'", "'or'", "'xor'", "'not'", "'>>'", "'<<'", "'['", "']'", 
		"'('", "')'", "'{'", "'}'", "'@'", "','", "'='", "'?'", "':'", "'.'", 
		"'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", "'>'", 
		"'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", undefined, undefined, undefined, "'\\'", 
		"'|'", "'_'", "'...'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "As", "If", "Else", "ElseIf", "Loop", "In", 
		"Pass", "Continue", "Break", "Return", "Select", "Preprocessor", "LineBreak", 
		"BitAnd", "BitOr", "BitXor", "BitNot", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "Ad", "Comma", "Assign", "Question", "Colon", "Dot", "Add", 
		"Substract", "Not", "Multiply", "Divide", "Modulo", "Pow", "Sharp", "LessThan", 
		"MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", 
		"And", "Or", "MultiplyAssign", "DivideAssign", "ModuloAssign", "AddAssign", 
		"SubstractAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", 
		"Underscore", "Spread", "NullLiteral", "BooleanLiteral", "NumberLiteral", 
		"StringLiteral", "StringFormatStart", "StringFormatMiddle", "StringFormatEnd", 
		"ID", "DefinitionID", "Skip", "UnexpectedCharacter",
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
			this.state = 37;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 34;
					this.imports();
					}
					}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad) | (1 << XonParser.Comma))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.Spread - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
				{
				{
				this.state = 40;
				this.statement();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DefinitionID) {
				{
				{
				this.state = 46;
				this.definition();
				}
				}
				this.state = 51;
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
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(XonParser.StringLiteral);
				this.state = 53;
				this.match(XonParser.Colon);
				this.state = 65;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Multiply:
					{
					this.state = 54;
					this.match(XonParser.Multiply);
					this.state = 55;
					this.match(XonParser.As);
					this.state = 56;
					_localctx._alias = this.match(XonParser.ID);
					}
					break;
				case XonParser.ID:
				case XonParser.DefinitionID:
					{
					this.state = 57;
					this.importMember();
					this.state = 62;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 58;
							this.match(XonParser.Comma);
							this.state = 59;
							this.importMember();
							}
							}
						}
						this.state = 64;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case XonParser.LineBreak:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
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
	public importMember(): ImportMemberContext {
		let _localctx: ImportMemberContext = new ImportMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importMember);
		let _la: number;
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				_localctx._name = this.match(XonParser.ID);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.As) {
					{
					this.state = 71;
					this.match(XonParser.As);
					this.state = 72;
					_localctx._alias = this.match(XonParser.ID);
					}
				}

				}
				break;
			case XonParser.DefinitionID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				_localctx._name = this.match(XonParser.DefinitionID);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.As) {
					{
					this.state = 76;
					this.match(XonParser.As);
					this.state = 77;
					_localctx._alias = this.match(XonParser.DefinitionID);
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_localctx._name = this.match(XonParser.DefinitionID);
			this.state = 83;
			this.match(XonParser.Colon);
			this.state = 84;
			this.match(XonParser.LineBreak);
			this.state = 85;
			this.match(XonParser.INDENT);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 86;
				this.member();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Pass || _la === XonParser.LineBreak || _la === XonParser.ID);
			this.state = 91;
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
		this.enterRule(_localctx, 8, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 93;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 95;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 94;
					this.type(0);
					}
					break;
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 97;
					this.match(XonParser.Assign);
					this.state = 98;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
				this.function();
				}
				break;

			case 3:
				_localctx = new PassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 102;
				this.match(XonParser.Pass);
				}
				break;

			case 4:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_statement);
		try {
			let _alt: number;
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 107;
						this.assignmentsList();
						this.state = 108;
						this.match(XonParser.Assign);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 112;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 123;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 114;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 115;
					this.spreadItem();
					this.state = 120;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 116;
							this.match(XonParser.Comma);
							this.state = 117;
							this.spreadItem();
							}
							}
						}
						this.state = 122;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
					}
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 125;
				this.function();
				}
				break;

			case 4:
				_localctx = new PassStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 126;
				this.match(XonParser.Pass);
				}
				break;

			case 5:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 127;
				this.match(XonParser.Continue);
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 128;
				this.match(XonParser.Break);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 129;
				this.match(XonParser.Return);
				this.state = 131;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 130;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 133;
				this.expression(0);
				}
				break;

			case 9:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 134;
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
	public assignmentsList(): AssignmentsListContext {
		let _localctx: AssignmentsListContext = new AssignmentsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_assignmentsList);
		let _la: number;
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.leftAssignments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 138;
				this.leftAssignments();
				this.state = 139;
				this.middleAssignments();
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 140;
					this.rightAssignments();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
				this.middleAssignments();
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 144;
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
		this.enterRule(_localctx, 14, XonParser.RULE_leftAssignments);
		let _la: number;
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.match(XonParser.ID);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 150;
					this.match(XonParser.Comma);
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 151;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.Comma:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 159;
					this.match(XonParser.Comma);
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 160;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 165;
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
		this.enterRule(_localctx, 16, XonParser.RULE_middleAssignments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(XonParser.Spread);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 170;
				this.match(XonParser.ID);
				}
			}

			this.state = 180;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 173;
					this.match(XonParser.Comma);
					this.state = 174;
					this.match(XonParser.Spread);
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 175;
						this.match(XonParser.ID);
						}
					}

					}
					}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
		this.enterRule(_localctx, 18, XonParser.RULE_rightAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 183;
				this.match(XonParser.Comma);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 184;
					this.match(XonParser.ID);
					}
				}

				}
				}
				this.state = 189;
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new SimpleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 192;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new DictionaryTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 193;
				this.match(XonParser.OpenBrace);
				this.state = 194;
				this.match(XonParser.ID);
				this.state = 195;
				this.type(0);
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 196;
					this.match(XonParser.Comma);
					this.state = 197;
					this.match(XonParser.ID);
					this.state = 198;
					this.type(0);
					}
					}
					this.state = 203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 204;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.match(XonParser.OpenParen);
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 207;
					(_localctx as FunctionTypeContext)._type = this.type(0);
					(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
					this.state = 212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 208;
						this.match(XonParser.Comma);
						this.state = 209;
						(_localctx as FunctionTypeContext)._type = this.type(0);
						(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
						}
						}
						this.state = 214;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 217;
				this.match(XonParser.CloseParen);
				this.state = 218;
				(_localctx as FunctionTypeContext)._returnType = this.type(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
					this.state = 221;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 222;
					this.match(XonParser.OpenBracket);
					this.state = 223;
					this.match(XonParser.CloseBracket);
					}
					}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
		this.enterRule(_localctx, 22, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			_localctx._name = this.match(XonParser.ID);
			this.state = 230;
			this.match(XonParser.OpenParen);
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 231;
				this.argument();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 232;
					this.match(XonParser.Comma);
					this.state = 233;
					this.argument();
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 241;
			this.match(XonParser.CloseParen);
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 242;
				this.type(0);
				}
			}

			this.state = 245;
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
		this.enterRule(_localctx, 24, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			_localctx._name = this.match(XonParser.ID);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 248;
				this.type(0);
				}
			}

			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 251;
				this.match(XonParser.Assign);
				this.state = 252;
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
		this.enterRule(_localctx, 26, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(XonParser.Colon);
			this.state = 266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 257;
				this.match(XonParser.LineBreak);
				this.state = 258;
				this.match(XonParser.INDENT);
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 259;
					this.statement();
					}
					}
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad) | (1 << XonParser.Comma))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.Spread - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0));
				this.state = 264;
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
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				_localctx = new IfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 269;
				this.match(XonParser.If);
				this.state = 270;
				this.expression(0);
				this.state = 271;
				this.body();
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 272;
						this.match(XonParser.ElseIf);
						this.state = 273;
						this.expression(0);
						this.state = 274;
						this.body();
						}
						}
					}
					this.state = 280;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 283;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 281;
					this.match(XonParser.Else);
					this.state = 282;
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
				this.state = 285;
				this.match(XonParser.Loop);
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
					{
					this.state = 298;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						this.state = 286;
						(_localctx as LoopExpressionContext)._value = this.match(XonParser.ID);
						this.state = 291;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
						case 1:
							{
							this.state = 287;
							this.match(XonParser.Comma);
							this.state = 289;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 288;
								(_localctx as LoopExpressionContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 295;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 293;
							this.match(XonParser.Comma);
							this.state = 294;
							(_localctx as LoopExpressionContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 297;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 300;
					this.expression(0);
					}
				}

				this.state = 303;
				this.body();
				}
				break;

			case 3:
				{
				_localctx = new SelectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 304;
				this.match(XonParser.Select);
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
					{
					this.state = 305;
					(_localctx as SelectExpressionContext)._value = this.expression(0);
					}
				}

				this.state = 308;
				this.match(XonParser.Colon);
				this.state = 309;
				this.match(XonParser.LineBreak);
				this.state = 310;
				this.match(XonParser.INDENT);
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 311;
					(_localctx as SelectExpressionContext)._expression = this.expression(0);
					(_localctx as SelectExpressionContext)._cases.push((_localctx as SelectExpressionContext)._expression);
					this.state = 312;
					this.body();
					this.state = 314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.LineBreak) {
						{
						this.state = 313;
						this.match(XonParser.LineBreak);
						}
					}

					}
					}
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0));
				this.state = 320;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				{
				_localctx = new AsyncExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 322;
				this.match(XonParser.Ad);
				this.state = 323;
				this.expression(25);
				}
				break;

			case 5:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 324;
				this.match(XonParser.Add);
				this.state = 325;
				this.expression(23);
				}
				break;

			case 6:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 326;
				this.match(XonParser.Substract);
				this.state = 327;
				this.expression(22);
				}
				break;

			case 7:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 328;
				this.match(XonParser.BitNot);
				this.state = 329;
				this.expression(21);
				}
				break;

			case 8:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 330;
				this.match(XonParser.Not);
				this.state = 331;
				this.expression(20);
				}
				break;

			case 9:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 332;
				this.match(XonParser.ID);
				}
				break;

			case 10:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 333;
				this.literal();
				}
				break;

			case 11:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 334;
				this.match(XonParser.StringFormatStart);
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 335;
						this.expression(0);
						this.state = 336;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 342;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				}
				this.state = 343;
				this.expression(0);
				this.state = 344;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 12:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 346;
				this.match(XonParser.OpenBracket);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.Spread - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
					{
					this.state = 347;
					this.spreadItem();
					this.state = 352;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 348;
						this.match(XonParser.Comma);
						this.state = 349;
						this.spreadItem();
						}
						}
						this.state = 354;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 357;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 13:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 358;
				this.match(XonParser.OpenBracket);
				this.state = 359;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 360;
				this.match(XonParser.Colon);
				this.state = 361;
				(_localctx as RangeExpressionContext)._endPos = this.expression(0);
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 362;
					this.match(XonParser.Colon);
					this.state = 363;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 366;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 14:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 368;
				this.match(XonParser.OpenBrace);
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Add - 33)) | (1 << (XonParser.Substract - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)) | (1 << (XonParser.Spread - 33)) | (1 << (XonParser.NullLiteral - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.BooleanLiteral - 65)) | (1 << (XonParser.NumberLiteral - 65)) | (1 << (XonParser.StringLiteral - 65)) | (1 << (XonParser.StringFormatStart - 65)) | (1 << (XonParser.ID - 65)))) !== 0)) {
					{
					this.state = 375;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.Dot:
						{
						this.state = 369;
						this.match(XonParser.Dot);
						this.state = 370;
						this.match(XonParser.ID);
						}
						break;
					case XonParser.If:
					case XonParser.Loop:
					case XonParser.Select:
					case XonParser.BitNot:
					case XonParser.OpenBracket:
					case XonParser.OpenParen:
					case XonParser.OpenBrace:
					case XonParser.Ad:
					case XonParser.Add:
					case XonParser.Substract:
					case XonParser.Not:
					case XonParser.LambdaStart:
					case XonParser.Spread:
					case XonParser.NullLiteral:
					case XonParser.BooleanLiteral:
					case XonParser.NumberLiteral:
					case XonParser.StringLiteral:
					case XonParser.StringFormatStart:
					case XonParser.ID:
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
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 377;
					this.match(XonParser.Assign);
					this.state = 378;
					(_localctx as ObjectExpressionContext)._expression = this.expression(0);
					(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
					this.state = 392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 379;
						this.match(XonParser.Comma);
						this.state = 386;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case XonParser.Dot:
							{
							this.state = 380;
							this.match(XonParser.Dot);
							this.state = 381;
							this.match(XonParser.ID);
							}
							break;
						case XonParser.If:
						case XonParser.Loop:
						case XonParser.Select:
						case XonParser.BitNot:
						case XonParser.OpenBracket:
						case XonParser.OpenParen:
						case XonParser.OpenBrace:
						case XonParser.Ad:
						case XonParser.Add:
						case XonParser.Substract:
						case XonParser.Not:
						case XonParser.LambdaStart:
						case XonParser.Spread:
						case XonParser.NullLiteral:
						case XonParser.BooleanLiteral:
						case XonParser.NumberLiteral:
						case XonParser.StringLiteral:
						case XonParser.StringFormatStart:
						case XonParser.ID:
							{
							this.state = 383;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.Spread) {
								{
								this.state = 382;
								this.match(XonParser.Spread);
								}
							}

							this.state = 385;
							(_localctx as ObjectExpressionContext)._expression = this.expression(0);
							(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 388;
						this.match(XonParser.Assign);
						this.state = 389;
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
						}
						}
						this.state = 394;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 397;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 15:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 398;
				this.match(XonParser.OpenParen);
				this.state = 399;
				this.expression(0);
				this.state = 400;
				this.match(XonParser.CloseParen);
				}
				break;

			case 16:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 402;
				this.match(XonParser.LambdaStart);
				this.state = 412;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 403;
					this.match(XonParser.ID);
					this.state = 408;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 404;
						this.match(XonParser.Comma);
						this.state = 405;
						this.match(XonParser.ID);
						}
						}
						this.state = 410;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 411;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 414;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 496;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 494;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 417;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 418;
						this.match(XonParser.Pow);
						this.state = 419;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 420;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 421;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.Multiply - 37)) | (1 << (XonParser.Divide - 37)) | (1 << (XonParser.Modulo - 37)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 422;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 423;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 424;
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
						this.state = 425;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 426;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 427;
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
						this.state = 428;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 429;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 430;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.LessThan - 42)) | (1 << (XonParser.MoreThan - 42)) | (1 << (XonParser.LessThanEquals - 42)) | (1 << (XonParser.MoreThanEquals - 42)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 431;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 432;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 433;
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
						this.state = 434;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 435;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 436;
						this.match(XonParser.BitAnd);
						this.state = 437;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 438;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 439;
						this.match(XonParser.BitXor);
						this.state = 440;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 441;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 442;
						this.match(XonParser.BitOr);
						this.state = 443;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 444;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 445;
						this.match(XonParser.And);
						this.state = 446;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 447;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 448;
						this.match(XonParser.Or);
						this.state = 449;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 450;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 451;
						this.match(XonParser.Pipe);
						this.state = 454;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
						case 1:
							{
							this.state = 452;
							this.match(XonParser.ID);
							this.state = 453;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 456;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 457;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 458;
						this.match(XonParser.OpenParen);
						this.state = 467;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
							{
							this.state = 459;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 464;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 460;
								this.match(XonParser.Comma);
								this.state = 461;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 466;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 469;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 470;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 471;
						this.match(XonParser.OpenBracket);
						this.state = 472;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 473;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 475;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 476;
						this.match(XonParser.OpenBracket);
						this.state = 477;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 478;
						this.match(XonParser.Colon);
						this.state = 480;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
							{
							this.state = 479;
							(_localctx as SliceExpressionContext)._endPos = this.expression(0);
							}
						}

						this.state = 484;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 482;
							this.match(XonParser.Colon);
							this.state = 483;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 486;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 488;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 490;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Question) {
							{
							this.state = 489;
							this.match(XonParser.Question);
							}
						}

						this.state = 492;
						this.match(XonParser.Dot);
						this.state = 493;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
	public spreadItem(): SpreadItemContext {
		let _localctx: SpreadItemContext = new SpreadItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XonParser.RULE_spreadItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Spread) {
				{
				this.state = 499;
				this.match(XonParser.Spread);
				}
			}

			this.state = 502;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_literal);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 504;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.NumberLiteral:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 506;
				this.match(XonParser.NumberLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 507;
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
		case 10:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 14:
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u0201\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x07\x02&\n\x02\f\x02\x0E\x02)\v\x02\x03\x02\x07\x02,\n\x02\f\x02" +
		"\x0E\x02/\v\x02\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03?\n\x03\f" +
		"\x03\x0E\x03B\v\x03\x05\x03D\n\x03\x03\x03\x05\x03G\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x05\x04L\n\x04\x03\x04\x03\x04\x03\x04\x05\x04Q\n\x04\x05" +
		"\x04S\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05Z\n\x05\r\x05" +
		"\x0E\x05[\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06b\n\x06\x03\x06\x03\x06" +
		"\x05\x06f\n\x06\x03\x06\x03\x06\x03\x06\x05\x06k\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x06\x07q\n\x07\r\x07\x0E\x07r\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07y\n\x07\f\x07\x0E\x07|\v\x07\x05\x07~\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x86\n\x07\x03\x07\x03\x07" +
		"\x05\x07\x8A\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x90\n\b\x03\b\x03\b\x05" +
		"\b\x94\n\b\x05\b\x96\n\b\x03\t\x03\t\x03\t\x05\t\x9B\n\t\x07\t\x9D\n\t" +
		"\f\t\x0E\t\xA0\v\t\x03\t\x03\t\x05\t\xA4\n\t\x06\t\xA6\n\t\r\t\x0E\t\xA7" +
		"\x05\t\xAA\n\t\x03\n\x03\n\x05\n\xAE\n\n\x03\n\x03\n\x03\n\x05\n\xB3\n" +
		"\n\x07\n\xB5\n\n\f\n\x0E\n\xB8\v\n\x03\v\x03\v\x05\v\xBC\n\v\x06\v\xBE" +
		"\n\v\r\v\x0E\v\xBF\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07" +
		"\f\xCA\n\f\f\f\x0E\f\xCD\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f" +
		"\xD5\n\f\f\f\x0E\f\xD8\v\f\x05\f\xDA\n\f\x03\f\x03\f\x05\f\xDE\n\f\x03" +
		"\f\x03\f\x03\f\x07\f\xE3\n\f\f\f\x0E\f\xE6\v\f\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x07\r\xED\n\r\f\r\x0E\r\xF0\v\r\x05\r\xF2\n\r\x03\r\x03\r\x05\r" +
		"\xF6\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xFC\n\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0100\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u0107" +
		"\n\x0F\r\x0F\x0E\x0F\u0108\x03\x0F\x03\x0F\x05\x0F\u010D\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0117" +
		"\n\x10\f\x10\x0E\x10\u011A\v\x10\x03\x10\x03\x10\x05\x10\u011E\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0124\n\x10\x05\x10\u0126\n\x10\x03" +
		"\x10\x03\x10\x05\x10\u012A\n\x10\x03\x10\x05\x10\u012D\n\x10\x03\x10\x05" +
		"\x10\u0130\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0135\n\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u013D\n\x10\x06\x10\u013F" +
		"\n\x10\r\x10\x0E\x10\u0140\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0155\n\x10\f\x10\x0E\x10\u0158\v" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0161" +
		"\n\x10\f\x10\x0E\x10\u0164\v\x10\x05\x10\u0166\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u016F\n\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0177\n\x10\x03\x10\x05\x10\u017A" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0182\n" +
		"\x10\x03\x10\x05\x10\u0185\n\x10\x03\x10\x03\x10\x07\x10\u0189\n\x10\f" +
		"\x10\x0E\x10\u018C\v\x10\x05\x10\u018E\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0199\n\x10\f\x10" +
		"\x0E\x10\u019C\v\x10\x03\x10\x05\x10\u019F\n\x10\x03\x10\x05\x10\u01A2" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u01C9\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x07\x10\u01D1\n\x10\f\x10\x0E\x10\u01D4\v\x10\x05\x10\u01D6" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u01E3\n\x10\x03\x10\x03\x10\x05\x10\u01E7" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01ED\n\x10\x03\x10\x03" +
		"\x10\x07\x10\u01F1\n\x10\f\x10\x0E\x10\u01F4\v\x10\x03\x11\x05\x11\u01F7" +
		"\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01FF\n" +
		"\x12\x03\x12\x02\x02\x04\x16\x1E\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02\x02\x07\x03\x02\')\x03\x02$%\x03\x02\x16\x17\x03\x02" +
		",/\x03\x0201\x02\u0264\x02\'\x03\x02\x02\x02\x04F\x03\x02\x02\x02\x06" +
		"R\x03\x02\x02\x02\bT\x03\x02\x02\x02\nj\x03\x02\x02\x02\f\x89\x03\x02" +
		"\x02\x02\x0E\x95\x03\x02\x02\x02\x10\xA9\x03\x02\x02\x02\x12\xAB\x03\x02" +
		"\x02\x02\x14\xBD\x03\x02\x02\x02\x16\xDD\x03\x02\x02\x02\x18\xE7\x03\x02" +
		"\x02\x02\x1A\xF9\x03\x02\x02\x02\x1C\u0101\x03\x02\x02\x02\x1E\u01A1\x03" +
		"\x02\x02\x02 \u01F6\x03\x02\x02\x02\"\u01FE\x03\x02\x02\x02$&\x05\x04" +
		"\x03\x02%$\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03" +
		"\x02\x02\x02(-\x03\x02\x02\x02)\'\x03\x02\x02\x02*,\x05\f\x07\x02+*\x03" +
		"\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.3\x03" +
		"\x02\x02\x02/-\x03\x02\x02\x0202\x05\b\x05\x0210\x03\x02\x02\x0225\x03" +
		"\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\x03\x03\x02\x02\x02" +
		"53\x03\x02\x02\x0267\x07E\x02\x027C\x07\"\x02\x0289\x07\'\x02\x029:\x07" +
		"\x05\x02\x02:D\x07I\x02\x02;@\x05\x06\x04\x02<=\x07\x1F\x02\x02=?\x05" +
		"\x06\x04\x02><\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03" +
		"\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02C8\x03\x02\x02\x02C;\x03" +
		"\x02\x02\x02DG\x03\x02\x02\x02EG\x07\x11\x02\x02F6\x03\x02\x02\x02FE\x03" +
		"\x02\x02\x02G\x05\x03\x02\x02\x02HK\x07I\x02\x02IJ\x07\x05\x02\x02JL\x07" +
		"I\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02LS\x03\x02\x02\x02MP\x07" +
		"J\x02\x02NO\x07\x05\x02\x02OQ\x07J\x02\x02PN\x03\x02\x02\x02PQ\x03\x02" +
		"\x02\x02QS\x03\x02\x02\x02RH\x03\x02\x02\x02RM\x03\x02\x02\x02S\x07\x03" +
		"\x02\x02\x02TU\x07J\x02\x02UV\x07\"\x02\x02VW\x07\x11\x02\x02WY\x07\x03" +
		"\x02\x02XZ\x05\n\x06\x02YX\x03\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02" +
		"\x02\x02[\\\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x07\x04\x02\x02^\t\x03" +
		"\x02\x02\x02_a\x07I\x02\x02`b\x05\x16\f\x02a`\x03\x02\x02\x02ab\x03\x02" +
		"\x02\x02be\x03\x02\x02\x02cd\x07 \x02\x02df\x05\x1E\x10\x02ec\x03\x02" +
		"\x02\x02ef\x03\x02\x02\x02fk\x03\x02\x02\x02gk\x05\x18\r\x02hk\x07\v\x02" +
		"\x02ik\x07\x11\x02\x02j_\x03\x02\x02\x02jg\x03\x02\x02\x02jh\x03\x02\x02" +
		"\x02ji\x03\x02\x02\x02k\v\x03\x02\x02\x02l\x8A\x07\x10\x02\x02mn\x05\x0E" +
		"\b\x02no\x07 \x02\x02oq\x03\x02\x02\x02pm\x03\x02\x02\x02qr\x03\x02\x02" +
		"\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02s}\x03\x02\x02\x02t~\x05\x1E\x10" +
		"\x02uz\x05 \x11\x02vw\x07\x1F\x02\x02wy\x05 \x11\x02xv\x03\x02\x02\x02" +
		"y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{~\x03\x02\x02\x02" +
		"|z\x03\x02\x02\x02}t\x03\x02\x02\x02}u\x03\x02\x02\x02~\x8A\x03\x02\x02" +
		"\x02\x7F\x8A\x05\x18\r\x02\x80\x8A\x07\v\x02\x02\x81\x8A\x07\f\x02\x02" +
		"\x82\x8A\x07\r\x02\x02\x83\x85\x07\x0E\x02\x02\x84\x86\x05\x1E\x10\x02" +
		"\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x8A\x03\x02\x02\x02" +
		"\x87\x8A\x05\x1E\x10\x02\x88\x8A\x07\x11\x02\x02\x89l\x03\x02\x02\x02" +
		"\x89p\x03\x02\x02\x02\x89\x7F\x03\x02\x02\x02\x89\x80\x03\x02\x02\x02" +
		"\x89\x81\x03\x02\x02\x02\x89\x82\x03\x02\x02\x02\x89\x83\x03\x02\x02\x02" +
		"\x89\x87\x03\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\r\x03\x02\x02\x02" +
		"\x8B\x96\x05\x10\t\x02\x8C\x8D\x05\x10\t\x02\x8D\x8F\x05\x12\n\x02\x8E" +
		"\x90\x05\x14\v\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90" +
		"\x96\x03\x02\x02\x02\x91\x93\x05\x12\n\x02\x92\x94\x05\x14\v\x02\x93\x92" +
		"\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x96\x03\x02\x02\x02\x95\x8B" +
		"\x03\x02\x02\x02\x95\x8C\x03\x02\x02\x02\x95\x91\x03\x02\x02\x02\x96\x0F" +
		"\x03\x02\x02\x02\x97\x9E\x07I\x02\x02\x98\x9A\x07\x1F\x02\x02\x99\x9B" +
		"\x07I\x02\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D" +
		"\x03\x02\x02\x02\x9C\x98\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C" +
		"\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xAA\x03\x02\x02\x02\xA0\x9E" +
		"\x03\x02\x02\x02\xA1\xA3\x07\x1F\x02\x02\xA2\xA4\x07I\x02\x02\xA3\xA2" +
		"\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA1" +
		"\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8" +
		"\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\x97\x03\x02\x02\x02\xA9\xA5" +
		"\x03\x02\x02\x02\xAA\x11\x03\x02\x02\x02\xAB\xAD\x07A\x02\x02\xAC\xAE" +
		"\x07I\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB6" +
		"\x03\x02\x02\x02\xAF\xB0\x07\x1F\x02\x02\xB0\xB2\x07A\x02\x02\xB1\xB3" +
		"\x07I\x02\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5" +
		"\x03\x02\x02\x02\xB4\xAF\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4" +
		"\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\x13\x03\x02\x02\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB9\xBB\x07\x1F\x02\x02\xBA\xBC\x07I\x02\x02\xBB\xBA" +
		"\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xB9" +
		"\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0" +
		"\x03\x02\x02\x02\xC0\x15\x03\x02\x02\x02\xC1\xC2\b\f\x01\x02\xC2\xDE\x07" +
		"I\x02\x02\xC3\xC4\x07\x1C\x02\x02\xC4\xC5\x07I\x02\x02\xC5\xCB\x05\x16" +
		"\f\x02\xC6\xC7\x07\x1F\x02\x02\xC7\xC8\x07I\x02\x02\xC8\xCA\x05\x16\f" +
		"\x02\xC9\xC6\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02" +
		"\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCB\x03\x02\x02" +
		"\x02\xCE\xCF\x07\x1D\x02\x02\xCF\xDE\x03\x02\x02\x02\xD0\xD9\x07\x1A\x02" +
		"\x02\xD1\xD6\x05\x16\f\x02\xD2\xD3\x07\x1F\x02\x02\xD3\xD5\x05\x16\f\x02" +
		"\xD4\xD2\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02" +
		"\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02" +
		"\xD9\xD1\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02" +
		"\xDB\xDC\x07\x1B\x02\x02\xDC\xDE\x05\x16\f\x03\xDD\xC1\x03\x02\x02\x02" +
		"\xDD\xC3\x03\x02\x02\x02\xDD\xD0\x03\x02\x02\x02\xDE\xE4\x03\x02\x02\x02" +
		"\xDF\xE0\f\x05\x02\x02\xE0\xE1\x07\x18\x02\x02\xE1\xE3\x07\x19\x02\x02" +
		"\xE2\xDF\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02" +
		"\xE4\xE5\x03\x02\x02\x02\xE5\x17\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02" +
		"\xE7\xE8\x07I\x02\x02\xE8\xF1\x07\x1A\x02\x02\xE9\xEE\x05\x1A\x0E\x02" +
		"\xEA\xEB\x07\x1F\x02\x02\xEB\xED\x05\x1A\x0E\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02" +
		"\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xE9\x03\x02\x02\x02" +
		"\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x07\x1B\x02\x02" +
		"\xF4\xF6\x05\x16\f\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
		"\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x05\x1C\x0F\x02\xF8\x19\x03\x02\x02\x02" +
		"\xF9\xFB\x07I\x02\x02\xFA\xFC\x05\x16\f\x02\xFB\xFA\x03\x02\x02\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFE\x07 \x02\x02\xFE" +
		"\u0100\x05\x1E\x10\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02" +
		"\u0100\x1B\x03\x02\x02\x02\u0101\u010C\x07\"\x02\x02\u0102\u010D\x05\f" +
		"\x07\x02\u0103\u0104\x07\x11\x02\x02\u0104\u0106\x07\x03\x02\x02\u0105" +
		"\u0107\x05\f\x07\x02\u0106\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02" +
		"\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A" +
		"\x03\x02\x02\x02\u010A\u010B\x07\x04\x02\x02\u010B\u010D\x03\x02\x02\x02" +
		"\u010C\u0102\x03\x02\x02\x02\u010C\u0103\x03\x02\x02\x02\u010D\x1D\x03" +
		"\x02\x02\x02\u010E\u010F\b\x10\x01\x02\u010F\u0110\x07\x06\x02\x02\u0110" +
		"\u0111\x05\x1E\x10\x02\u0111\u0118\x05\x1C\x0F\x02\u0112\u0113\x07\b\x02" +
		"\x02\u0113\u0114\x05\x1E\x10\x02\u0114\u0115\x05\x1C\x0F\x02\u0115\u0117" +
		"\x03\x02\x02\x02\u0116\u0112\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02" +
		"\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011D\x03" +
		"\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011C\x07\x07\x02\x02\u011C" +
		"\u011E\x05\x1C\x0F\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
		"\x02\x02\u011E\u01A2\x03\x02\x02\x02\u011F\u012F\x07\t\x02\x02\u0120\u0125" +
		"\x07I\x02\x02\u0121\u0123\x07\x1F\x02\x02\u0122\u0124\x07I\x02\x02\u0123" +
		"\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0126\x03\x02" +
		"\x02\x02\u0125\u0121\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126" +
		"\u0129\x03\x02\x02\x02\u0127\u0128\x07\x1F\x02\x02\u0128\u012A\x07I\x02" +
		"\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B\u012D\x07\n\x02\x02\u012C\u0120\x03\x02\x02\x02" +
		"\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x05" +
		"\x1E\x10\x02\u012F\u012C\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u01A2\x05\x1C\x0F\x02\u0132\u0134\x07\x0F" +
		"\x02\x02\u0133\u0135\x05\x1E\x10\x02\u0134\u0133\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07\"\x02" +
		"\x02\u0137\u0138\x07\x11\x02\x02\u0138\u013E\x07\x03\x02\x02\u0139\u013A" +
		"\x05\x1E\x10\x02\u013A\u013C\x05\x1C\x0F\x02\u013B\u013D\x07\x11\x02\x02" +
		"\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F\x03" +
		"\x02\x02\x02\u013E\u0139\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02" +
		"\x02\x02\u0142\u0143\x07\x04\x02\x02\u0143\u01A2\x03\x02\x02\x02\u0144" +
		"\u0145\x07\x1E\x02\x02\u0145\u01A2\x05\x1E\x10\x1B\u0146\u0147\x07$\x02" +
		"\x02\u0147\u01A2\x05\x1E\x10\x19\u0148\u0149\x07%\x02\x02\u0149\u01A2" +
		"\x05\x1E\x10\x18\u014A\u014B\x07\x15\x02\x02\u014B\u01A2\x05\x1E\x10\x17" +
		"\u014C\u014D\x07&\x02\x02\u014D\u01A2\x05\x1E\x10\x16\u014E\u01A2\x07" +
		"I\x02\x02\u014F\u01A2\x05\"\x12\x02\u0150\u0156\x07F\x02\x02\u0151\u0152" +
		"\x05\x1E\x10\x02\u0152\u0153\x07G\x02\x02\u0153\u0155\x03\x02\x02\x02" +
		"\u0154\u0151\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03" +
		"\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158" +
		"\u0156\x03\x02\x02\x02\u0159\u015A\x05\x1E\x10\x02\u015A\u015B\x07H\x02" +
		"\x02\u015B\u01A2\x03\x02\x02\x02\u015C\u0165\x07\x18\x02\x02\u015D\u0162" +
		"\x05 \x11\x02\u015E\u015F\x07\x1F\x02\x02\u015F\u0161\x05 \x11\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02" +
		"\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164" +
		"\u0162\x03\x02\x02\x02\u0165\u015D\x03\x02\x02\x02\u0165\u0166\x03\x02" +
		"\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u01A2\x07\x19\x02\x02\u0168" +
		"\u0169\x07\x18\x02\x02\u0169\u016A\x05\x1E\x10\x02\u016A\u016B\x07\"\x02" +
		"\x02\u016B\u016E\x05\x1E\x10\x02\u016C\u016D\x07\"\x02\x02\u016D\u016F" +
		"\x05\x1E\x10\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02" +
		"\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x07\x19\x02\x02\u0171\u01A2\x03" +
		"\x02\x02\x02\u0172\u018D\x07\x1C\x02\x02\u0173\u0174\x07#\x02\x02\u0174" +
		"\u017A\x07I\x02\x02\u0175\u0177\x07A\x02\x02\u0176\u0175\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u017A\x05" +
		"\x1E\x10\x02\u0179\u0173\x03\x02\x02\x02\u0179\u0176\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017B\u017C\x07 \x02\x02\u017C\u018A\x05\x1E\x10" +
		"\x02\u017D\u0184\x07\x1F\x02\x02\u017E\u017F\x07#\x02\x02\u017F\u0185" +
		"\x07I\x02\x02\u0180\u0182\x07A\x02\x02\u0181\u0180\x03\x02\x02\x02\u0181" +
		"\u0182\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0185\x05\x1E" +
		"\x10\x02\u0184\u017E\x03\x02\x02\x02\u0184\u0181\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\u0187\x07 \x02\x02\u0187\u0189\x05\x1E\x10" +
		"\x02\u0188\u017D\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A\u0188" +
		"\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02" +
		"\u018C\u018A\x03\x02\x02\x02\u018D\u0179\x03\x02\x02\x02\u018D\u018E\x03" +
		"\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u01A2\x07\x1D\x02\x02\u0190" +
		"\u0191\x07\x1A\x02\x02\u0191\u0192\x05\x1E\x10\x02\u0192\u0193\x07\x1B" +
		"\x02\x02\u0193\u01A2\x03\x02\x02\x02\u0194\u019E\x07>\x02\x02\u0195\u019A" +
		"\x07I\x02\x02\u0196\u0197\x07\x1F\x02\x02\u0197\u0199\x07I\x02\x02\u0198" +
		"\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02" +
		"\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C" +
		"\u019A\x03\x02\x02\x02\u019D\u019F\x07\"\x02\x02\u019E\u0195\x03\x02\x02" +
		"\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2" +
		"\x05\x1E\x10\x03\u01A1\u010E\x03\x02\x02\x02\u01A1\u011F\x03\x02\x02\x02" +
		"\u01A1\u0132\x03\x02\x02\x02\u01A1\u0144\x03\x02\x02\x02\u01A1\u0146\x03" +
		"\x02\x02\x02\u01A1\u0148\x03\x02\x02\x02\u01A1\u014A\x03\x02\x02\x02\u01A1" +
		"\u014C\x03\x02\x02\x02\u01A1\u014E\x03\x02\x02\x02\u01A1\u014F\x03\x02" +
		"\x02\x02\u01A1\u0150\x03\x02\x02\x02\u01A1\u015C\x03\x02\x02\x02\u01A1" +
		"\u0168\x03\x02\x02\x02\u01A1\u0172\x03\x02\x02\x02\u01A1\u0190\x03\x02" +
		"\x02\x02\u01A1\u0194\x03\x02\x02\x02\u01A2\u01F2\x03\x02\x02\x02\u01A3" +
		"\u01A4\f\x1A\x02\x02\u01A4\u01A5\x07*\x02\x02\u01A5\u01F1\x05\x1E\x10" +
		"\x1B\u01A6\u01A7\f\x15\x02\x02\u01A7\u01A8\t\x02\x02\x02\u01A8\u01F1\x05" +
		"\x1E\x10\x16\u01A9\u01AA\f\x14\x02\x02\u01AA\u01AB\t\x03\x02\x02\u01AB" +
		"\u01F1\x05\x1E\x10\x15\u01AC\u01AD\f\x13\x02\x02\u01AD\u01AE\t\x04\x02" +
		"\x02\u01AE\u01F1\x05\x1E\x10\x14\u01AF\u01B0\f\x12\x02\x02\u01B0\u01B1" +
		"\t\x05\x02\x02\u01B1\u01F1\x05\x1E\x10\x13\u01B2\u01B3\f\x11\x02\x02\u01B3" +
		"\u01B4\t\x06\x02\x02\u01B4\u01F1\x05\x1E\x10\x12\u01B5\u01B6\f\x10\x02" +
		"\x02\u01B6\u01B7\x07\x12\x02\x02\u01B7\u01F1\x05\x1E\x10\x11\u01B8\u01B9" +
		"\f\x0F\x02\x02\u01B9\u01BA\x07\x14\x02\x02\u01BA\u01F1\x05\x1E\x10\x10" +
		"\u01BB\u01BC\f\x0E\x02\x02\u01BC\u01BD\x07\x13\x02\x02\u01BD\u01F1\x05" +
		"\x1E\x10\x0F\u01BE\u01BF\f\r\x02\x02\u01BF\u01C0\x072\x02\x02\u01C0\u01F1" +
		"\x05\x1E\x10\x0E\u01C1\u01C2\f\f\x02\x02\u01C2\u01C3\x073\x02\x02\u01C3" +
		"\u01F1\x05\x1E\x10\r\u01C4\u01C5\f\x04\x02\x02\u01C5\u01C8\x07?\x02\x02" +
		"\u01C6\u01C7\x07I\x02\x02\u01C7\u01C9\x07\"\x02\x02\u01C8\u01C6\x03\x02" +
		"\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA" +
		"\u01F1\x05\x1E\x10\x05\u01CB\u01CC\f\x1F\x02\x02\u01CC\u01D5\x07\x1A\x02" +
		"\x02\u01CD\u01D2\x05\x1E\x10\x02\u01CE\u01CF\x07\x1F\x02\x02\u01CF\u01D1" +
		"\x05\x1E\x10\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02" +
		"\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D6\x03" +
		"\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01CD\x03\x02\x02\x02\u01D5" +
		"\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01F1\x07\x1B" +
		"\x02\x02\u01D8\u01D9\f\x1E\x02\x02\u01D9\u01DA\x07\x18\x02\x02\u01DA\u01DB" +
		"\x05\x1E\x10\x02\u01DB\u01DC\x07\x19\x02\x02\u01DC\u01F1\x03\x02\x02\x02" +
		"\u01DD\u01DE\f\x1D\x02\x02\u01DE\u01DF\x07\x18\x02\x02\u01DF\u01E0\x05" +
		"\x1E\x10\x02\u01E0\u01E2\x07\"\x02\x02\u01E1\u01E3\x05\x1E\x10\x02\u01E2" +
		"\u01E1\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E6\x03\x02" +
		"\x02\x02\u01E4\u01E5\x07\"\x02\x02\u01E5\u01E7\x05\x1E\x10\x02\u01E6\u01E4" +
		"\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02" +
		"\u01E8\u01E9\x07\x19\x02\x02\u01E9\u01F1\x03\x02\x02\x02\u01EA\u01EC\f" +
		"\x1C\x02\x02\u01EB\u01ED\x07!\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC" +
		"\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x07#\x02" +
		"\x02\u01EF\u01F1\x07I\x02\x02\u01F0\u01A3\x03\x02\x02\x02\u01F0\u01A6" +
		"\x03\x02\x02\x02\u01F0\u01A9\x03\x02\x02\x02\u01F0\u01AC\x03\x02\x02\x02" +
		"\u01F0\u01AF\x03\x02\x02\x02\u01F0\u01B2\x03\x02\x02\x02\u01F0\u01B5\x03" +
		"\x02\x02\x02\u01F0\u01B8\x03\x02\x02\x02\u01F0\u01BB\x03\x02\x02\x02\u01F0" +
		"\u01BE\x03\x02\x02\x02\u01F0\u01C1\x03\x02\x02\x02\u01F0\u01C4\x03\x02" +
		"\x02\x02\u01F0\u01CB\x03\x02\x02\x02\u01F0\u01D8\x03\x02\x02\x02\u01F0" +
		"\u01DD\x03\x02\x02\x02\u01F0\u01EA\x03\x02\x02\x02\u01F1\u01F4\x03\x02" +
		"\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3" +
		"\x1F\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F7\x07A\x02" +
		"\x02\u01F6\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8" +
		"\x03\x02\x02\x02\u01F8\u01F9\x05\x1E\x10\x02\u01F9!\x03\x02\x02\x02\u01FA" +
		"\u01FF\x07B\x02\x02\u01FB\u01FF\x07C\x02\x02\u01FC\u01FF\x07D\x02\x02" +
		"\u01FD\u01FF\x07E\x02\x02\u01FE\u01FA\x03\x02\x02\x02\u01FE\u01FB\x03" +
		"\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FF" +
		"#\x03\x02\x02\x02N\'-3@CFKPR[aejrz}\x85\x89\x8F\x93\x95\x9A\x9E\xA3\xA7" +
		"\xA9\xAD\xB2\xB6\xBB\xBF\xCB\xD6\xD9\xDD\xE4\xEE\xF1\xF5\xFB\xFF\u0108" +
		"\u010C\u0118\u011D\u0123\u0125\u0129\u012C\u012F\u0134\u013C\u0140\u0156" +
		"\u0162\u0165\u016E\u0176\u0179\u0181\u0184\u018A\u018D\u019A\u019E\u01A1" +
		"\u01C8\u01D2\u01D5\u01E2\u01E6\u01EC\u01F0\u01F2\u01F6\u01FE";
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
	public _alias: Token;
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(XonParser.StringLiteral, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
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
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_imports; }
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
	public DefinitionID(): TerminalNode[];
	public DefinitionID(i: number): TerminalNode;
	public DefinitionID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DefinitionID);
		} else {
			return this.getToken(XonParser.DefinitionID, i);
		}
	}
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
	public DefinitionID(): TerminalNode { return this.getToken(XonParser.DefinitionID, 0); }
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
export class LineBreakMemberContext extends MemberContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
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
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
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
export class FunctionStatementContext extends StatementContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
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
export class DictionaryTypeContext extends TypeContext {
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
export class ObjectExpressionContext extends ExpressionContext {
	public _expression: ExpressionContext;
	public _key: ExpressionContext[] = [];
	public _value: ExpressionContext[] = [];
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public Assign(): TerminalNode[];
	public Assign(i: number): TerminalNode;
	public Assign(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Assign);
		} else {
			return this.getToken(XonParser.Assign, i);
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
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Dot);
		} else {
			return this.getToken(XonParser.Dot, i);
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
	public Spread(): TerminalNode[];
	public Spread(i: number): TerminalNode;
	public Spread(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Spread);
		} else {
			return this.getToken(XonParser.Spread, i);
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


