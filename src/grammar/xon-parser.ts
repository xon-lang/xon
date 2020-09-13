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
	public static readonly Skip = 72;
	public static readonly UnexpectedCharacter = 73;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_assignmentsList = 7;
	public static readonly RULE_leftAssignments = 8;
	public static readonly RULE_middleAssignments = 9;
	public static readonly RULE_rightAssignments = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_function = 12;
	public static readonly RULE_argument = 13;
	public static readonly RULE_body = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_spreadItem = 16;
	public static readonly RULE_literal = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "member", 
		"statement", "assignmentsList", "leftAssignments", "middleAssignments", 
		"rightAssignments", "type", "function", "argument", "body", "expression", 
		"spreadItem", "literal",
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
			this.state = 39;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 36;
					this.imports();
					}
					}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 45;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 42;
					this.statement();
					}
					}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.ID) {
				{
				{
				this.state = 48;
				this.definition();
				}
				}
				this.state = 53;
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
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.importPath();
				this.state = 55;
				this.match(XonParser.Colon);
				this.state = 56;
				this.importMember();
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 57;
						this.match(XonParser.Comma);
						this.state = 58;
						this.importMember();
						}
						}
					}
					this.state = 63;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;
			case XonParser.LineBreak:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 64;
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
			this.state = 67;
			this.match(XonParser.ID);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Substract) {
				{
				{
				this.state = 68;
				this.match(XonParser.Substract);
				this.state = 69;
				this.match(XonParser.ID);
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.match(XonParser.Divide);
			this.state = 76;
			this.match(XonParser.ID);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Substract) {
				{
				{
				this.state = 77;
				this.match(XonParser.Substract);
				this.state = 78;
				this.match(XonParser.ID);
				}
				}
				this.state = 83;
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
			this.state = 84;
			_localctx._name = this.match(XonParser.ID);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 85;
				this.match(XonParser.As);
				this.state = 86;
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
			this.state = 89;
			_localctx._name = this.match(XonParser.ID);
			this.state = 90;
			this.match(XonParser.Colon);
			this.state = 91;
			this.match(XonParser.LineBreak);
			this.state = 92;
			this.match(XonParser.INDENT);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 93;
				this.member();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Pass || _la === XonParser.LineBreak || _la === XonParser.ID);
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
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 102;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 101;
					this.type(0);
					}
					break;
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 104;
					this.match(XonParser.Assign);
					this.state = 105;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.function();
				}
				break;

			case 3:
				_localctx = new PassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.match(XonParser.Pass);
				}
				break;

			case 4:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
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
		this.enterRule(_localctx, 12, XonParser.RULE_statement);
		try {
			let _alt: number;
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 114;
						this.assignmentsList();
						this.state = 115;
						this.match(XonParser.Assign);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 119;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 121;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 122;
					this.spreadItem();
					this.state = 127;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 123;
							this.match(XonParser.Comma);
							this.state = 124;
							this.spreadItem();
							}
							}
						}
						this.state = 129;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
				this.state = 132;
				this.function();
				}
				break;

			case 4:
				_localctx = new PassStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 133;
				this.match(XonParser.Pass);
				}
				break;

			case 5:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 134;
				this.match(XonParser.Continue);
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 135;
				this.match(XonParser.Break);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 136;
				this.match(XonParser.Return);
				this.state = 138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 137;
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
				this.state = 140;
				this.expression(0);
				}
				break;

			case 9:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 141;
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
		this.enterRule(_localctx, 14, XonParser.RULE_assignmentsList);
		let _la: number;
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 144;
				this.leftAssignments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.leftAssignments();
				this.state = 146;
				this.middleAssignments();
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 147;
					this.rightAssignments();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 150;
				this.middleAssignments();
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Comma) {
					{
					this.state = 151;
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
		this.enterRule(_localctx, 16, XonParser.RULE_leftAssignments);
		let _la: number;
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.match(XonParser.ID);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 157;
					this.match(XonParser.Comma);
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 158;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.Comma:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 166;
					this.match(XonParser.Comma);
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 167;
						this.match(XonParser.ID);
						}
					}

					}
					}
					this.state = 172;
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
		this.enterRule(_localctx, 18, XonParser.RULE_middleAssignments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(XonParser.Spread);
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 177;
				this.match(XonParser.ID);
				}
			}

			this.state = 187;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 180;
					this.match(XonParser.Comma);
					this.state = 181;
					this.match(XonParser.Spread);
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 182;
						this.match(XonParser.ID);
						}
					}

					}
					}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
		this.enterRule(_localctx, 20, XonParser.RULE_rightAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 190;
				this.match(XonParser.Comma);
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 191;
					this.match(XonParser.ID);
					}
				}

				}
				}
				this.state = 196;
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new SimpleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 199;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new DictionaryTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this.match(XonParser.OpenBrace);
				this.state = 201;
				this.match(XonParser.ID);
				this.state = 202;
				this.type(0);
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 203;
					this.match(XonParser.Comma);
					this.state = 204;
					this.match(XonParser.ID);
					this.state = 205;
					this.type(0);
					}
					}
					this.state = 210;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 211;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 213;
				this.match(XonParser.OpenParen);
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 214;
					(_localctx as FunctionTypeContext)._type = this.type(0);
					(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 215;
						this.match(XonParser.Comma);
						this.state = 216;
						(_localctx as FunctionTypeContext)._type = this.type(0);
						(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
						}
						}
						this.state = 221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 224;
				this.match(XonParser.CloseParen);
				this.state = 225;
				(_localctx as FunctionTypeContext)._returnType = this.type(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 233;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
					this.state = 228;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 229;
					this.match(XonParser.OpenBracket);
					this.state = 230;
					this.match(XonParser.CloseBracket);
					}
					}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
		this.enterRule(_localctx, 24, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			_localctx._name = this.match(XonParser.ID);
			this.state = 237;
			this.match(XonParser.OpenParen);
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 238;
				this.argument();
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 239;
					this.match(XonParser.Comma);
					this.state = 240;
					this.argument();
					}
					}
					this.state = 245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 248;
			this.match(XonParser.CloseParen);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 249;
				this.type(0);
				}
			}

			this.state = 252;
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
		this.enterRule(_localctx, 26, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			_localctx._name = this.match(XonParser.ID);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 255;
				this.type(0);
				}
			}

			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 258;
				this.match(XonParser.Assign);
				this.state = 259;
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
		this.enterRule(_localctx, 28, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(XonParser.Colon);
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 263;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 264;
				this.match(XonParser.LineBreak);
				this.state = 265;
				this.match(XonParser.INDENT);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 266;
					this.statement();
					}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad) | (1 << XonParser.Comma))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.Spread - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0));
				this.state = 271;
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
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				_localctx = new IfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 276;
				this.match(XonParser.If);
				this.state = 277;
				this.expression(0);
				this.state = 278;
				this.body();
				this.state = 285;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 279;
						this.match(XonParser.ElseIf);
						this.state = 280;
						this.expression(0);
						this.state = 281;
						this.body();
						}
						}
					}
					this.state = 287;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 290;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 288;
					this.match(XonParser.Else);
					this.state = 289;
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
				this.state = 292;
				this.match(XonParser.Loop);
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
					{
					this.state = 305;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 293;
						(_localctx as LoopExpressionContext)._value = this.match(XonParser.ID);
						this.state = 298;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
						case 1:
							{
							this.state = 294;
							this.match(XonParser.Comma);
							this.state = 296;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 295;
								(_localctx as LoopExpressionContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 302;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 300;
							this.match(XonParser.Comma);
							this.state = 301;
							(_localctx as LoopExpressionContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 304;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 307;
					this.expression(0);
					}
				}

				this.state = 310;
				this.body();
				}
				break;

			case 3:
				{
				_localctx = new SelectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 311;
				this.match(XonParser.Select);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
					{
					this.state = 312;
					(_localctx as SelectExpressionContext)._value = this.expression(0);
					}
				}

				this.state = 315;
				this.match(XonParser.Colon);
				this.state = 316;
				this.match(XonParser.LineBreak);
				this.state = 317;
				this.match(XonParser.INDENT);
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 318;
					(_localctx as SelectExpressionContext)._expression = this.expression(0);
					(_localctx as SelectExpressionContext)._cases.push((_localctx as SelectExpressionContext)._expression);
					this.state = 319;
					this.body();
					this.state = 321;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.LineBreak) {
						{
						this.state = 320;
						this.match(XonParser.LineBreak);
						}
					}

					}
					}
					this.state = 325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0));
				this.state = 327;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				{
				_localctx = new AsyncExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 329;
				this.match(XonParser.Ad);
				this.state = 330;
				this.expression(25);
				}
				break;

			case 5:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 331;
				this.match(XonParser.Add);
				this.state = 332;
				this.expression(23);
				}
				break;

			case 6:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 333;
				this.match(XonParser.Substract);
				this.state = 334;
				this.expression(22);
				}
				break;

			case 7:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 335;
				this.match(XonParser.BitNot);
				this.state = 336;
				this.expression(21);
				}
				break;

			case 8:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 337;
				this.match(XonParser.Not);
				this.state = 338;
				this.expression(20);
				}
				break;

			case 9:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 339;
				this.match(XonParser.ID);
				}
				break;

			case 10:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 340;
				this.literal();
				}
				break;

			case 11:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 341;
				this.match(XonParser.StringFormatStart);
				this.state = 347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 342;
						this.expression(0);
						this.state = 343;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 349;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				}
				this.state = 350;
				this.expression(0);
				this.state = 351;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 12:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 353;
				this.match(XonParser.OpenBracket);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.Spread - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
					{
					this.state = 354;
					this.spreadItem();
					this.state = 359;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 355;
						this.match(XonParser.Comma);
						this.state = 356;
						this.spreadItem();
						}
						}
						this.state = 361;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 364;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 13:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 365;
				this.match(XonParser.OpenBracket);
				this.state = 366;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 367;
				this.match(XonParser.Colon);
				this.state = 368;
				(_localctx as RangeExpressionContext)._endPos = this.expression(0);
				this.state = 371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 369;
					this.match(XonParser.Colon);
					this.state = 370;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 373;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 14:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 375;
				this.match(XonParser.OpenBrace);
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.Dot - 33)) | (1 << (XonParser.Add - 33)) | (1 << (XonParser.Substract - 33)) | (1 << (XonParser.Not - 33)) | (1 << (XonParser.LambdaStart - 33)) | (1 << (XonParser.Spread - 33)) | (1 << (XonParser.NullLiteral - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.BooleanLiteral - 65)) | (1 << (XonParser.NumberLiteral - 65)) | (1 << (XonParser.StringLiteral - 65)) | (1 << (XonParser.StringFormatStart - 65)) | (1 << (XonParser.ID - 65)))) !== 0)) {
					{
					this.state = 382;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.Dot:
						{
						this.state = 376;
						this.match(XonParser.Dot);
						this.state = 377;
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
						this.state = 379;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Spread) {
							{
							this.state = 378;
							this.match(XonParser.Spread);
							}
						}

						this.state = 381;
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 384;
					this.match(XonParser.Assign);
					this.state = 385;
					(_localctx as ObjectExpressionContext)._expression = this.expression(0);
					(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
					this.state = 399;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 386;
						this.match(XonParser.Comma);
						this.state = 393;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case XonParser.Dot:
							{
							this.state = 387;
							this.match(XonParser.Dot);
							this.state = 388;
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
							this.state = 390;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.Spread) {
								{
								this.state = 389;
								this.match(XonParser.Spread);
								}
							}

							this.state = 392;
							(_localctx as ObjectExpressionContext)._expression = this.expression(0);
							(_localctx as ObjectExpressionContext)._key.push((_localctx as ObjectExpressionContext)._expression);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 395;
						this.match(XonParser.Assign);
						this.state = 396;
						(_localctx as ObjectExpressionContext)._expression = this.expression(0);
						(_localctx as ObjectExpressionContext)._value.push((_localctx as ObjectExpressionContext)._expression);
						}
						}
						this.state = 401;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 404;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 15:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 405;
				this.match(XonParser.OpenParen);
				this.state = 406;
				this.expression(0);
				this.state = 407;
				this.match(XonParser.CloseParen);
				}
				break;

			case 16:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 409;
				this.match(XonParser.LambdaStart);
				this.state = 419;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 410;
					this.match(XonParser.ID);
					this.state = 415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 411;
						this.match(XonParser.Comma);
						this.state = 412;
						this.match(XonParser.ID);
						}
						}
						this.state = 417;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 418;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 421;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 503;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 501;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 424;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 425;
						this.match(XonParser.Pow);
						this.state = 426;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 427;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 428;
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
						this.state = 429;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 430;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 431;
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
						this.state = 432;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 433;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 434;
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
						this.state = 435;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 436;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 437;
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
						this.state = 438;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 439;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 440;
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
						this.state = 441;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 442;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 443;
						this.match(XonParser.BitAnd);
						this.state = 444;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 445;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 446;
						this.match(XonParser.BitXor);
						this.state = 447;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 448;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 449;
						this.match(XonParser.BitOr);
						this.state = 450;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 451;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 452;
						this.match(XonParser.And);
						this.state = 453;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 454;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 455;
						this.match(XonParser.Or);
						this.state = 456;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 457;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 458;
						this.match(XonParser.Pipe);
						this.state = 461;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
						case 1:
							{
							this.state = 459;
							this.match(XonParser.ID);
							this.state = 460;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 463;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 464;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 465;
						this.match(XonParser.OpenParen);
						this.state = 474;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
							{
							this.state = 466;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 471;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 467;
								this.match(XonParser.Comma);
								this.state = 468;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 473;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 476;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 477;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 478;
						this.match(XonParser.OpenBracket);
						this.state = 479;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 480;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 482;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 483;
						this.match(XonParser.OpenBracket);
						this.state = 484;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 485;
						this.match(XonParser.Colon);
						this.state = 487;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.BitNot) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Ad))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.Add - 34)) | (1 << (XonParser.Substract - 34)) | (1 << (XonParser.Not - 34)) | (1 << (XonParser.LambdaStart - 34)) | (1 << (XonParser.NullLiteral - 34)) | (1 << (XonParser.BooleanLiteral - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.NumberLiteral - 66)) | (1 << (XonParser.StringLiteral - 66)) | (1 << (XonParser.StringFormatStart - 66)) | (1 << (XonParser.ID - 66)))) !== 0)) {
							{
							this.state = 486;
							(_localctx as SliceExpressionContext)._endPos = this.expression(0);
							}
						}

						this.state = 491;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 489;
							this.match(XonParser.Colon);
							this.state = 490;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 493;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 495;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 497;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Question) {
							{
							this.state = 496;
							this.match(XonParser.Question);
							}
						}

						this.state = 499;
						this.match(XonParser.Dot);
						this.state = 500;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 505;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
		this.enterRule(_localctx, 32, XonParser.RULE_spreadItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Spread) {
				{
				this.state = 506;
				this.match(XonParser.Spread);
				}
			}

			this.state = 509;
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
		this.enterRule(_localctx, 34, XonParser.RULE_literal);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 512;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.NumberLiteral:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 513;
				this.match(XonParser.NumberLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 514;
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
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 15:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03K\u0208\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x07\x02" +
		".\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x07\x024\n\x02\f\x02\x0E\x027\v\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03>\n\x03\f\x03\x0E\x03" +
		"A\v\x03\x03\x03\x05\x03D\n\x03\x03\x04\x03\x04\x03\x04\x07\x04I\n\x04" +
		"\f\x04\x0E\x04L\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04R\n\x04\f" +
		"\x04\x0E\x04U\v\x04\x03\x05\x03\x05\x03\x05\x05\x05Z\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x06\x06a\n\x06\r\x06\x0E\x06b\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x05\x07i\n\x07\x03\x07\x03\x07\x05\x07m\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07r\n\x07\x03\b\x03\b\x03\b\x03\b\x06\bx\n\b" +
		"\r\b\x0E\by\x03\b\x03\b\x03\b\x03\b\x07\b\x80\n\b\f\b\x0E\b\x83\v\b\x05" +
		"\b\x85\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x8D\n\b\x03\b\x03" +
		"\b\x05\b\x91\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\x97\n\t\x03\t\x03\t\x05" +
		"\t\x9B\n\t\x05\t\x9D\n\t\x03\n\x03\n\x03\n\x05\n\xA2\n\n\x07\n\xA4\n\n" +
		"\f\n\x0E\n\xA7\v\n\x03\n\x03\n\x05\n\xAB\n\n\x06\n\xAD\n\n\r\n\x0E\n\xAE" +
		"\x05\n\xB1\n\n\x03\v\x03\v\x05\v\xB5\n\v\x03\v\x03\v\x03\v\x05\v\xBA\n" +
		"\v\x07\v\xBC\n\v\f\v\x0E\v\xBF\v\v\x03\f\x03\f\x05\f\xC3\n\f\x06\f\xC5" +
		"\n\f\r\f\x0E\f\xC6\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07" +
		"\r\xD1\n\r\f\r\x0E\r\xD4\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r" +
		"\xDC\n\r\f\r\x0E\r\xDF\v\r\x05\r\xE1\n\r\x03\r\x03\r\x05\r\xE5\n\r\x03" +
		"\r\x03\r\x03\r\x07\r\xEA\n\r\f\r\x0E\r\xED\v\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\xF4\n\x0E\f\x0E\x0E\x0E\xF7\v\x0E\x05\x0E\xF9" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\xFD\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x05\x0F\u0103\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0107\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x06\x10\u010E\n\x10\r\x10\x0E\x10\u010F\x03\x10" +
		"\x03\x10\x05\x10\u0114\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u011E\n\x11\f\x11\x0E\x11\u0121\v\x11\x03" +
		"\x11\x03\x11\x05\x11\u0125\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u012B\n\x11\x05\x11\u012D\n\x11\x03\x11\x03\x11\x05\x11\u0131\n\x11\x03" +
		"\x11\x05\x11\u0134\n\x11\x03\x11\x05\x11\u0137\n\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u013C\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u0144\n\x11\x06\x11\u0146\n\x11\r\x11\x0E\x11\u0147\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u015C" +
		"\n\x11\f\x11\x0E\x11\u015F\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\u0168\n\x11\f\x11\x0E\x11\u016B\v\x11\x05\x11" +
		"\u016D\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u0176\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u017E\n\x11\x03\x11\x05\x11\u0181\n\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0189\n\x11\x03\x11\x05\x11\u018C\n\x11\x03\x11" +
		"\x03\x11\x07\x11\u0190\n\x11\f\x11\x0E\x11\u0193\v\x11\x05\x11\u0195\n" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\u01A0\n\x11\f\x11\x0E\x11\u01A3\v\x11\x03\x11\x05\x11\u01A6" +
		"\n\x11\x03\x11\x05\x11\u01A9\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01D0\n\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u01D8\n\x11\f\x11\x0E" +
		"\x11\u01DB\v\x11\x05\x11\u01DD\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01EA\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u01EE\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u01F4\n\x11\x03\x11\x03\x11\x07\x11\u01F8\n\x11\f\x11\x0E\x11\u01FB" +
		"\v\x11\x03\x12\x05\x12\u01FE\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u0206\n\x13\x03\x13\x02\x02\x04\x18 \x14\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x07\x03\x02\'" +
		")\x03\x02$%\x03\x02\x16\x17\x03\x02,/\x03\x0201\x02\u0269\x02)\x03\x02" +
		"\x02\x02\x04C\x03\x02\x02\x02\x06E\x03\x02\x02\x02\bV\x03\x02\x02\x02" +
		"\n[\x03\x02\x02\x02\fq\x03\x02\x02\x02\x0E\x90\x03\x02\x02\x02\x10\x9C" +
		"\x03\x02\x02\x02\x12\xB0\x03\x02\x02\x02\x14\xB2\x03\x02\x02\x02\x16\xC4" +
		"\x03\x02\x02\x02\x18\xE4\x03\x02\x02\x02\x1A\xEE\x03\x02\x02\x02\x1C\u0100" +
		"\x03\x02\x02\x02\x1E\u0108\x03\x02\x02\x02 \u01A8\x03\x02\x02\x02\"\u01FD" +
		"\x03\x02\x02\x02$\u0205\x03\x02\x02\x02&(\x05\x04\x03\x02\'&\x03\x02\x02" +
		"\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*/\x03\x02" +
		"\x02\x02+)\x03\x02\x02\x02,.\x05\x0E\b\x02-,\x03\x02\x02\x02.1\x03\x02" +
		"\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0205\x03\x02\x02\x021/\x03\x02" +
		"\x02\x0224\x05\n\x06\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02" +
		"\x02\x0256\x03\x02\x02\x026\x03\x03\x02\x02\x0275\x03\x02\x02\x0289\x05" +
		"\x06\x04\x029:\x07\"\x02\x02:?\x05\b\x05\x02;<\x07\x1F\x02\x02<>\x05\b" +
		"\x05\x02=;\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02" +
		"\x02\x02@D\x03\x02\x02\x02A?\x03\x02\x02\x02BD\x07\x11\x02\x02C8\x03\x02" +
		"\x02\x02CB\x03\x02\x02\x02D\x05\x03\x02\x02\x02EJ\x07I\x02\x02FG\x07%" +
		"\x02\x02GI\x07I\x02\x02HF\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02" +
		"\x02\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07(" +
		"\x02\x02NS\x07I\x02\x02OP\x07%\x02\x02PR\x07I\x02\x02QO\x03\x02\x02\x02" +
		"RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x07\x03\x02\x02" +
		"\x02US\x03\x02\x02\x02VY\x07I\x02\x02WX\x07\x05\x02\x02XZ\x07I\x02\x02" +
		"YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\t\x03\x02\x02\x02[\\\x07I\x02\x02" +
		"\\]\x07\"\x02\x02]^\x07\x11\x02\x02^`\x07\x03\x02\x02_a\x05\f\x07\x02" +
		"`_\x03\x02\x02\x02ab\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02" +
		"cd\x03\x02\x02\x02de\x07\x04\x02\x02e\v\x03\x02\x02\x02fh\x07I\x02\x02" +
		"gi\x05\x18\r\x02hg\x03\x02\x02\x02hi\x03\x02\x02\x02il\x03\x02\x02\x02" +
		"jk\x07 \x02\x02km\x05 \x11\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mr\x03" +
		"\x02\x02\x02nr\x05\x1A\x0E\x02or\x07\v\x02\x02pr\x07\x11\x02\x02qf\x03" +
		"\x02\x02\x02qn\x03\x02\x02\x02qo\x03\x02\x02\x02qp\x03\x02\x02\x02r\r" +
		"\x03\x02\x02\x02s\x91\x07\x10\x02\x02tu\x05\x10\t\x02uv\x07 \x02\x02v" +
		"x\x03\x02\x02\x02wt\x03\x02\x02\x02xy\x03\x02\x02\x02yw\x03\x02\x02\x02" +
		"yz\x03\x02\x02\x02z\x84\x03\x02\x02\x02{\x85\x05 \x11\x02|\x81\x05\"\x12" +
		"\x02}~\x07\x1F\x02\x02~\x80\x05\"\x12\x02\x7F}\x03\x02\x02\x02\x80\x83" +
		"\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x85" +
		"\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84{\x03\x02\x02\x02\x84|\x03" +
		"\x02\x02\x02\x85\x91\x03\x02\x02\x02\x86\x91\x05\x1A\x0E\x02\x87\x91\x07" +
		"\v\x02\x02\x88\x91\x07\f\x02\x02\x89\x91\x07\r\x02\x02\x8A\x8C\x07\x0E" +
		"\x02\x02\x8B\x8D\x05 \x11\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02" +
		"\x02\x02\x8D\x91\x03\x02\x02\x02\x8E\x91\x05 \x11\x02\x8F\x91\x07\x11" +
		"\x02\x02\x90s\x03\x02\x02\x02\x90w\x03\x02\x02\x02\x90\x86\x03\x02\x02" +
		"\x02\x90\x87\x03\x02\x02\x02\x90\x88\x03\x02\x02\x02\x90\x89\x03\x02\x02" +
		"\x02\x90\x8A\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x8F\x03\x02\x02" +
		"\x02\x91\x0F\x03\x02\x02\x02\x92\x9D\x05\x12\n\x02\x93\x94\x05\x12\n\x02" +
		"\x94\x96\x05\x14\v\x02\x95\x97\x05\x16\f\x02\x96\x95\x03\x02\x02\x02\x96" +
		"\x97\x03\x02\x02\x02\x97\x9D\x03\x02\x02\x02\x98\x9A\x05\x14\v\x02\x99" +
		"\x9B\x05\x16\f\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B" +
		"\x9D\x03\x02\x02\x02\x9C\x92\x03\x02\x02\x02\x9C\x93\x03\x02\x02\x02\x9C" +
		"\x98\x03\x02\x02\x02\x9D\x11\x03\x02\x02\x02\x9E\xA5\x07I\x02\x02\x9F" +
		"\xA1\x07\x1F\x02\x02\xA0\xA2\x07I\x02\x02\xA1\xA0\x03\x02\x02\x02\xA1" +
		"\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\x9F\x03\x02\x02\x02\xA4" +
		"\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6" +
		"\xB1\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAA\x07\x1F\x02\x02\xA9" +
		"\xAB\x07I\x02\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB" +
		"\xAD\x03\x02\x02\x02\xAC\xA8\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
		"\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0" +
		"\x9E\x03\x02\x02\x02\xB0\xAC\x03\x02\x02\x02\xB1\x13\x03\x02\x02\x02\xB2" +
		"\xB4\x07A\x02\x02\xB3\xB5\x07I\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5" +
		"\x03\x02\x02\x02\xB5\xBD\x03\x02\x02\x02\xB6\xB7\x07\x1F\x02\x02\xB7\xB9" +
		"\x07A\x02\x02\xB8\xBA\x07I\x02\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03" +
		"\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB6\x03\x02\x02\x02\xBC\xBF\x03" +
		"\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\x15\x03" +
		"\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC2\x07\x1F\x02\x02\xC1\xC3\x07" +
		"I\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03" +
		"\x02\x02\x02\xC4\xC0\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC4\x03" +
		"\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x17\x03\x02\x02\x02\xC8\xC9\b" +
		"\r\x01\x02\xC9\xE5\x07I\x02\x02\xCA\xCB\x07\x1C\x02\x02\xCB\xCC\x07I\x02" +
		"\x02\xCC\xD2\x05\x18\r\x02\xCD\xCE\x07\x1F\x02\x02\xCE\xCF\x07I\x02\x02" +
		"\xCF\xD1\x05\x18\r\x02\xD0\xCD\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02" +
		"\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02" +
		"\xD4\xD2\x03\x02\x02\x02\xD5\xD6\x07\x1D\x02\x02\xD6\xE5\x03\x02\x02\x02" +
		"\xD7\xE0\x07\x1A\x02\x02\xD8\xDD\x05\x18\r\x02\xD9\xDA\x07\x1F\x02\x02" +
		"\xDA\xDC\x05\x18\r\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02" +
		"\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02" +
		"\xDF\xDD\x03\x02\x02\x02\xE0\xD8\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x07\x1B\x02\x02\xE3\xE5\x05\x18\r\x03" +
		"\xE4\xC8\x03\x02\x02\x02\xE4\xCA\x03\x02\x02\x02\xE4\xD7\x03\x02\x02\x02" +
		"\xE5\xEB\x03\x02\x02\x02\xE6\xE7\f\x05\x02\x02\xE7\xE8\x07\x18\x02\x02" +
		"\xE8\xEA\x07\x19\x02\x02\xE9\xE6\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02" +
		"\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\x19\x03\x02\x02\x02" +
		"\xED\xEB\x03\x02\x02\x02\xEE\xEF\x07I\x02\x02\xEF\xF8\x07\x1A\x02\x02" +
		"\xF0\xF5\x05\x1C\x0F\x02\xF1\xF2\x07\x1F\x02\x02\xF2\xF4\x05\x1C\x0F\x02" +
		"\xF3\xF1\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02" +
		"\xF5\xF6\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02" +
		"\xF8\xF0\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02" +
		"\xFA\xFC\x07\x1B\x02\x02\xFB\xFD\x05\x18\r\x02\xFC\xFB\x03\x02\x02\x02" +
		"\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x05\x1E\x10\x02" +
		"\xFF\x1B\x03\x02\x02\x02\u0100\u0102\x07I\x02\x02\u0101\u0103\x05\x18" +
		"\r\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0106" +
		"\x03\x02\x02\x02\u0104\u0105\x07 \x02\x02\u0105\u0107\x05 \x11\x02\u0106" +
		"\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\x1D\x03\x02\x02" +
		"\x02\u0108\u0113\x07\"\x02\x02\u0109\u0114\x05\x0E\b\x02\u010A\u010B\x07" +
		"\x11\x02\x02\u010B\u010D\x07\x03\x02\x02\u010C\u010E\x05\x0E\b\x02\u010D" +
		"\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u010D\x03\x02" +
		"\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111" +
		"\u0112\x07\x04\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\u0109\x03\x02" +
		"\x02\x02\u0113\u010A\x03\x02\x02\x02\u0114\x1F\x03\x02\x02\x02\u0115\u0116" +
		"\b\x11\x01\x02\u0116\u0117\x07\x06\x02\x02\u0117\u0118\x05 \x11\x02\u0118" +
		"\u011F\x05\x1E\x10\x02\u0119\u011A\x07\b\x02\x02\u011A\u011B\x05 \x11" +
		"\x02\u011B\u011C\x05\x1E\x10\x02\u011C\u011E\x03\x02\x02\x02\u011D\u0119" +
		"\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02" +
		"\u011F\u0120\x03\x02\x02\x02\u0120\u0124\x03\x02\x02\x02\u0121\u011F\x03" +
		"\x02\x02\x02\u0122\u0123\x07\x07\x02\x02\u0123\u0125\x05\x1E\x10\x02\u0124" +
		"\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u01A9\x03\x02" +
		"\x02\x02\u0126\u0136\x07\t\x02\x02\u0127\u012C\x07I\x02\x02\u0128\u012A" +
		"\x07\x1F\x02\x02\u0129\u012B\x07I\x02\x02\u012A\u0129\x03\x02\x02\x02" +
		"\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u0128\x03" +
		"\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E" +
		"\u012F\x07\x1F\x02\x02\u012F\u0131\x07I\x02\x02\u0130\u012E\x03\x02\x02" +
		"\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134" +
		"\x07\n\x02\x02\u0133\u0127\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02" +
		"\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x05 \x11\x02\u0136\u0133\x03" +
		"\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138" +
		"\u01A9\x05\x1E\x10\x02\u0139\u013B\x07\x0F\x02\x02\u013A\u013C\x05 \x11" +
		"\x02\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D" +
		"\x03\x02\x02\x02\u013D\u013E\x07\"\x02\x02\u013E\u013F\x07\x11\x02\x02" +
		"\u013F\u0145\x07\x03\x02\x02\u0140\u0141\x05 \x11\x02\u0141\u0143\x05" +
		"\x1E\x10\x02\u0142\u0144\x07\x11\x02\x02\u0143\u0142\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u0146\x03\x02\x02\x02\u0145\u0140\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147" +
		"\u0148\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x07\x04" +
		"\x02\x02\u014A\u01A9\x03\x02\x02\x02\u014B\u014C\x07\x1E\x02\x02\u014C" +
		"\u01A9\x05 \x11\x1B\u014D\u014E\x07$\x02\x02\u014E\u01A9\x05 \x11\x19" +
		"\u014F\u0150\x07%\x02\x02\u0150\u01A9\x05 \x11\x18\u0151\u0152\x07\x15" +
		"\x02\x02\u0152\u01A9\x05 \x11\x17\u0153\u0154\x07&\x02\x02\u0154\u01A9" +
		"\x05 \x11\x16\u0155\u01A9\x07I\x02\x02\u0156\u01A9\x05$\x13\x02\u0157" +
		"\u015D\x07F\x02\x02\u0158\u0159\x05 \x11\x02\u0159\u015A\x07G\x02\x02" +
		"\u015A\u015C\x03\x02\x02\x02\u015B\u0158\x03\x02\x02\x02\u015C\u015F\x03" +
		"\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E" +
		"\u0160\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0161\x05 \x11" +
		"\x02\u0161\u0162\x07H\x02\x02\u0162\u01A9\x03\x02\x02\x02\u0163\u016C" +
		"\x07\x18\x02\x02\u0164\u0169\x05\"\x12\x02\u0165\u0166\x07\x1F\x02\x02" +
		"\u0166\u0168\x05\"\x12\x02\u0167\u0165\x03\x02\x02\x02\u0168\u016B\x03" +
		"\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
		"\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u0164\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"\u01A9\x07\x19\x02\x02\u016F\u0170\x07\x18\x02\x02\u0170\u0171\x05 \x11" +
		"\x02\u0171\u0172\x07\"\x02\x02\u0172\u0175\x05 \x11\x02\u0173\u0174\x07" +
		"\"\x02\x02\u0174\u0176\x05 \x11\x02\u0175\u0173\x03\x02\x02\x02\u0175" +
		"\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x07\x19" +
		"\x02\x02\u0178\u01A9\x03\x02\x02\x02\u0179\u0194\x07\x1C\x02\x02\u017A" +
		"\u017B\x07#\x02\x02\u017B\u0181\x07I\x02\x02\u017C\u017E\x07A\x02\x02" +
		"\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03" +
		"\x02\x02\x02\u017F\u0181\x05 \x11\x02\u0180\u017A\x03\x02\x02\x02\u0180" +
		"\u017D\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183\x07 \x02" +
		"\x02\u0183\u0191\x05 \x11\x02\u0184\u018B\x07\x1F\x02\x02\u0185\u0186" +
		"\x07#\x02\x02\u0186\u018C\x07I\x02\x02\u0187\u0189\x07A\x02\x02\u0188" +
		"\u0187\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02" +
		"\x02\x02\u018A\u018C\x05 \x11\x02\u018B\u0185\x03\x02\x02\x02\u018B\u0188" +
		"\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x07 \x02\x02" +
		"\u018E\u0190\x05 \x11\x02\u018F\u0184\x03\x02\x02\x02\u0190\u0193\x03" +
		"\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192" +
		"\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0180\x03\x02" +
		"\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u01A9\x07\x1D\x02\x02\u0197\u0198\x07\x1A\x02\x02\u0198\u0199\x05 \x11" +
		"\x02\u0199\u019A\x07\x1B\x02\x02\u019A\u01A9\x03\x02\x02\x02\u019B\u01A5" +
		"\x07>\x02\x02\u019C\u01A1\x07I\x02\x02\u019D\u019E\x07\x1F\x02\x02\u019E" +
		"\u01A0\x07I\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02" +
		"\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4" +
		"\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A4\u01A6\x07\"\x02\x02" +
		"\u01A5\u019C\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03" +
		"\x02\x02\x02\u01A7\u01A9\x05 \x11\x03\u01A8\u0115\x03\x02\x02\x02\u01A8" +
		"\u0126\x03\x02\x02\x02\u01A8\u0139\x03\x02\x02\x02\u01A8\u014B\x03\x02" +
		"\x02\x02\u01A8\u014D\x03\x02\x02\x02\u01A8\u014F\x03\x02\x02\x02\u01A8" +
		"\u0151\x03\x02\x02\x02\u01A8\u0153\x03\x02\x02\x02\u01A8\u0155\x03\x02" +
		"\x02\x02\u01A8\u0156\x03\x02\x02\x02\u01A8\u0157\x03\x02\x02\x02\u01A8" +
		"\u0163\x03\x02\x02\x02\u01A8\u016F\x03\x02\x02\x02\u01A8\u0179\x03\x02" +
		"\x02\x02\u01A8\u0197\x03\x02\x02\x02\u01A8\u019B\x03\x02\x02\x02\u01A9" +
		"\u01F9\x03\x02\x02\x02\u01AA\u01AB\f\x1A\x02\x02\u01AB\u01AC\x07*\x02" +
		"\x02\u01AC\u01F8\x05 \x11\x1B\u01AD\u01AE\f\x15\x02\x02\u01AE\u01AF\t" +
		"\x02\x02\x02\u01AF\u01F8\x05 \x11\x16\u01B0\u01B1\f\x14\x02\x02\u01B1" +
		"\u01B2\t\x03\x02\x02\u01B2\u01F8\x05 \x11\x15\u01B3\u01B4\f\x13\x02\x02" +
		"\u01B4\u01B5\t\x04\x02\x02\u01B5\u01F8\x05 \x11\x14\u01B6\u01B7\f\x12" +
		"\x02\x02\u01B7\u01B8\t\x05\x02\x02\u01B8\u01F8\x05 \x11\x13\u01B9\u01BA" +
		"\f\x11\x02\x02\u01BA\u01BB\t\x06\x02\x02\u01BB\u01F8\x05 \x11\x12\u01BC" +
		"\u01BD\f\x10\x02\x02\u01BD\u01BE\x07\x12\x02\x02\u01BE\u01F8\x05 \x11" +
		"\x11\u01BF\u01C0\f\x0F\x02\x02\u01C0\u01C1\x07\x14\x02\x02\u01C1\u01F8" +
		"\x05 \x11\x10\u01C2\u01C3\f\x0E\x02\x02\u01C3\u01C4\x07\x13\x02\x02\u01C4" +
		"\u01F8\x05 \x11\x0F\u01C5\u01C6\f\r\x02\x02\u01C6\u01C7\x072\x02\x02\u01C7" +
		"\u01F8\x05 \x11\x0E\u01C8\u01C9\f\f\x02\x02\u01C9\u01CA\x073\x02\x02\u01CA" +
		"\u01F8\x05 \x11\r\u01CB\u01CC\f\x04\x02\x02\u01CC\u01CF\x07?\x02\x02\u01CD" +
		"\u01CE\x07I\x02\x02\u01CE\u01D0\x07\"\x02\x02\u01CF\u01CD\x03\x02\x02" +
		"\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01F8" +
		"\x05 \x11\x05\u01D2\u01D3\f\x1F\x02\x02\u01D3\u01DC\x07\x1A\x02\x02\u01D4" +
		"\u01D9\x05 \x11\x02\u01D5\u01D6\x07\x1F\x02\x02\u01D6\u01D8\x05 \x11\x02" +
		"\u01D7\u01D5\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01D7\x03" +
		"\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB" +
		"\u01D9\x03\x02\x02\x02\u01DC\u01D4\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
		"\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01F8\x07\x1B\x02\x02\u01DF" +
		"\u01E0\f\x1E\x02\x02\u01E0\u01E1\x07\x18\x02\x02\u01E1\u01E2\x05 \x11" +
		"\x02\u01E2\u01E3\x07\x19\x02\x02\u01E3\u01F8\x03\x02\x02\x02\u01E4\u01E5" +
		"\f\x1D\x02\x02\u01E5\u01E6\x07\x18\x02\x02\u01E6\u01E7\x05 \x11\x02\u01E7" +
		"\u01E9\x07\"\x02\x02\u01E8\u01EA\x05 \x11\x02\u01E9\u01E8\x03\x02\x02" +
		"\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01EC" +
		"\x07\"\x02\x02\u01EC\u01EE\x05 \x11\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED" +
		"\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07\x19" +
		"\x02\x02\u01F0\u01F8\x03\x02\x02\x02\u01F1\u01F3\f\x1C\x02\x02\u01F2\u01F4" +
		"\x07!\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02" +
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x07#\x02\x02\u01F6\u01F8\x07" +
		"I\x02\x02\u01F7\u01AA\x03\x02\x02\x02\u01F7\u01AD\x03\x02\x02\x02\u01F7" +
		"\u01B0\x03\x02\x02\x02\u01F7\u01B3\x03\x02\x02\x02\u01F7\u01B6\x03\x02" +
		"\x02\x02\u01F7\u01B9\x03\x02\x02\x02\u01F7\u01BC\x03\x02\x02\x02\u01F7" +
		"\u01BF\x03\x02\x02\x02\u01F7\u01C2\x03\x02\x02\x02\u01F7\u01C5\x03\x02" +
		"\x02\x02\u01F7\u01C8\x03\x02\x02\x02\u01F7\u01CB\x03\x02\x02\x02\u01F7" +
		"\u01D2\x03\x02\x02\x02\u01F7\u01DF\x03\x02\x02\x02\u01F7\u01E4\x03\x02" +
		"\x02\x02\u01F7\u01F1\x03\x02\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9" +
		"\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA!\x03\x02\x02" +
		"\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FE\x07A\x02\x02\u01FD\u01FC" +
		"\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02" +
		"\u01FF\u0200\x05 \x11\x02\u0200#\x03\x02\x02\x02\u0201\u0206\x07B\x02" +
		"\x02\u0202\u0206\x07C\x02\x02\u0203\u0206\x07D\x02\x02\u0204\u0206\x07" +
		"E\x02\x02\u0205\u0201\x03\x02\x02\x02\u0205\u0202\x03\x02\x02\x02\u0205" +
		"\u0203\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206%\x03\x02\x02" +
		"\x02M)/5?CJSYbhlqy\x81\x84\x8C\x90\x96\x9A\x9C\xA1\xA5\xAA\xAE\xB0\xB4" +
		"\xB9\xBD\xC2\xC6\xD2\xDD\xE0\xE4\xEB\xF5\xF8\xFC\u0102\u0106\u010F\u0113" +
		"\u011F\u0124\u012A\u012C\u0130\u0133\u0136\u013B\u0143\u0147\u015D\u0169" +
		"\u016C\u0175\u017D\u0180\u0188\u018B\u0191\u0194\u01A1\u01A5\u01A8\u01CF" +
		"\u01D9\u01DC\u01E9\u01ED\u01F3\u01F7\u01F9\u01FD\u0205";
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


