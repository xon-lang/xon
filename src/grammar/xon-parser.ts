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
	public static readonly Tilde = 28;
	public static readonly Ad = 29;
	public static readonly Comma = 30;
	public static readonly Assign = 31;
	public static readonly Question = 32;
	public static readonly Colon = 33;
	public static readonly Dot = 34;
	public static readonly Plus = 35;
	public static readonly Minus = 36;
	public static readonly Exclamation = 37;
	public static readonly Asterisk = 38;
	public static readonly Slash = 39;
	public static readonly Modulo = 40;
	public static readonly Caret = 41;
	public static readonly Hash = 42;
	public static readonly LessThan = 43;
	public static readonly MoreThan = 44;
	public static readonly LessThanEquals = 45;
	public static readonly MoreThanEquals = 46;
	public static readonly Equals = 47;
	public static readonly NotEquals = 48;
	public static readonly And = 49;
	public static readonly Or = 50;
	public static readonly AsteriskAssign = 51;
	public static readonly SlashAssign = 52;
	public static readonly PercentAssign = 53;
	public static readonly PlusAssign = 54;
	public static readonly MinusAssign = 55;
	public static readonly LeftShiftArithmeticAssign = 56;
	public static readonly RightShiftArithmeticAssign = 57;
	public static readonly BitAndAssign = 58;
	public static readonly BitXorAssign = 59;
	public static readonly BitOrAssign = 60;
	public static readonly Pipe = 61;
	public static readonly Underscore = 62;
	public static readonly Elipsis = 63;
	public static readonly LambdaStart = 64;
	public static readonly NullLiteral = 65;
	public static readonly BooleanLiteral = 66;
	public static readonly NumberLiteral = 67;
	public static readonly StringLiteral = 68;
	public static readonly StringFormatStart = 69;
	public static readonly StringFormatMiddle = 70;
	public static readonly StringFormatEnd = 71;
	public static readonly ID = 72;
	public static readonly Skip = 73;
	public static readonly UnexpectedCharacter = 74;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_operator = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_function = 8;
	public static readonly RULE_argument = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_body = 11;
	public static readonly RULE_spreadItem = 12;
	public static readonly RULE_objectItem = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_literal = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "member", 
		"operator", "statement", "function", "argument", "type", "body", "spreadItem", 
		"objectItem", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'as'", "'if'", "'else'", "'elif'", "'loop'", 
		"'in'", "'pass'", "'continue'", "'break'", "'return'", "'select'", undefined, 
		undefined, "'and'", "'or'", "'xor'", "'not'", "'>>'", "'<<'", "'['", "']'", 
		"'('", "')'", "'{'", "'}'", "'~'", "'@'", "','", "'='", "'?'", "':'", 
		"'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", 
		"'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", 
		"'%='", "'+='", "'-='", "'<<='", "'>>='", undefined, undefined, undefined, 
		"'|'", "'_'", "'...'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "As", "If", "Else", "ElseIf", "Loop", "In", 
		"Pass", "Continue", "Break", "Return", "Select", "Preprocessor", "LineBreak", 
		"BitAnd", "BitOr", "BitXor", "BitNot", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "Tilde", "Ad", "Comma", "Assign", "Question", "Colon", "Dot", 
		"Plus", "Minus", "Exclamation", "Asterisk", "Slash", "Modulo", "Caret", 
		"Hash", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", 
		"NotEquals", "And", "Or", "AsteriskAssign", "SlashAssign", "PercentAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "Pipe", "Underscore", "Elipsis", 
		"LambdaStart", "NullLiteral", "BooleanLiteral", "NumberLiteral", "StringLiteral", 
		"StringFormatStart", "StringFormatMiddle", "StringFormatEnd", "ID", "Skip", 
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 32;
					this.imports();
					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 41;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 38;
					this.statement();
					}
					}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.ID) {
				{
				{
				this.state = 44;
				this.definition();
				}
				}
				this.state = 49;
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
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.importPath();
				this.state = 51;
				this.match(XonParser.Colon);
				this.state = 52;
				this.importMember();
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 53;
					this.match(XonParser.Comma);
					this.state = 54;
					this.importMember();
					}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.LineBreak:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
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
			this.state = 63;
			this.match(XonParser.ID);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 64;
				this.match(XonParser.Minus);
				this.state = 65;
				this.match(XonParser.ID);
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(XonParser.Slash);
			this.state = 72;
			this.match(XonParser.ID);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 73;
				this.match(XonParser.Minus);
				this.state = 74;
				this.match(XonParser.ID);
				}
				}
				this.state = 79;
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
			this.state = 80;
			_localctx._name = this.match(XonParser.ID);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 81;
				this.match(XonParser.As);
				this.state = 82;
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
			this.state = 85;
			_localctx._name = this.match(XonParser.ID);
			this.state = 86;
			this.match(XonParser.Colon);
			this.state = 87;
			this.match(XonParser.LineBreak);
			this.state = 88;
			this.match(XonParser.INDENT);
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 89;
				this.member();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XonParser.Pass - 9)) | (1 << (XonParser.LineBreak - 9)) | (1 << (XonParser.BitAnd - 9)) | (1 << (XonParser.BitOr - 9)) | (1 << (XonParser.BitXor - 9)) | (1 << (XonParser.RightShiftArithmetic - 9)) | (1 << (XonParser.LeftShiftArithmetic - 9)) | (1 << (XonParser.Plus - 9)) | (1 << (XonParser.Minus - 9)) | (1 << (XonParser.Asterisk - 9)) | (1 << (XonParser.Slash - 9)) | (1 << (XonParser.Modulo - 9)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.Caret - 41)) | (1 << (XonParser.LessThan - 41)) | (1 << (XonParser.MoreThan - 41)) | (1 << (XonParser.Equals - 41)) | (1 << (XonParser.NotEquals - 41)) | (1 << (XonParser.And - 41)) | (1 << (XonParser.Or - 41)) | (1 << (XonParser.ID - 41)))) !== 0));
			this.state = 94;
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
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 98;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 97;
					this.type(0);
					}
					break;
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 100;
					this.match(XonParser.Assign);
					this.state = 101;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.function();
				}
				break;

			case 3:
				_localctx = new PassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this.match(XonParser.Pass);
				}
				break;

			case 4:
				_localctx = new InfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.operator();
				this.state = 107;
				this.match(XonParser.OpenParen);
				this.state = 108;
				this.match(XonParser.ID);
				this.state = 109;
				(_localctx as InfixOperatorMemberContext)._operandType = this.type(0);
				this.state = 110;
				this.match(XonParser.CloseParen);
				this.state = 111;
				(_localctx as InfixOperatorMemberContext)._returnType = this.type(0);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 112;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 115;
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
			this.state = 118;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.BitAnd) | (1 << XonParser.BitOr) | (1 << XonParser.BitXor) | (1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.Plus - 35)) | (1 << (XonParser.Minus - 35)) | (1 << (XonParser.Asterisk - 35)) | (1 << (XonParser.Slash - 35)) | (1 << (XonParser.Modulo - 35)) | (1 << (XonParser.Caret - 35)) | (1 << (XonParser.LessThan - 35)) | (1 << (XonParser.MoreThan - 35)) | (1 << (XonParser.Equals - 35)) | (1 << (XonParser.NotEquals - 35)) | (1 << (XonParser.And - 35)) | (1 << (XonParser.Or - 35)))) !== 0))) {
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
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.match(XonParser.If);
				this.state = 121;
				this.expression(0);
				this.state = 122;
				this.body();
				this.state = 129;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 123;
						this.match(XonParser.ElseIf);
						this.state = 124;
						this.expression(0);
						this.state = 125;
						this.body();
						}
						}
					}
					this.state = 131;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				this.state = 134;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.match(XonParser.Else);
					this.state = 133;
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
				this.state = 136;
				this.match(XonParser.Select);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Minus - 22)) | (1 << (XonParser.Exclamation - 22)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.NumberLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormatStart - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
					{
					this.state = 137;
					(_localctx as SelectStatementContext)._value = this.expression(0);
					}
				}

				this.state = 140;
				this.match(XonParser.Colon);
				this.state = 141;
				this.match(XonParser.LineBreak);
				this.state = 142;
				this.match(XonParser.INDENT);
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 143;
					(_localctx as SelectStatementContext)._expression = this.expression(0);
					(_localctx as SelectStatementContext)._cases.push((_localctx as SelectStatementContext)._expression);
					this.state = 144;
					this.body();
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.LineBreak) {
						{
						this.state = 145;
						this.match(XonParser.LineBreak);
						}
					}

					}
					}
					this.state = 150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Minus - 22)) | (1 << (XonParser.Exclamation - 22)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.NumberLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormatStart - 64)) | (1 << (XonParser.ID - 64)))) !== 0));
				this.state = 152;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 154;
				this.match(XonParser.Loop);
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Minus - 22)) | (1 << (XonParser.Exclamation - 22)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.NumberLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormatStart - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
					{
					this.state = 167;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						this.state = 155;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 160;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
						case 1:
							{
							this.state = 156;
							this.match(XonParser.Comma);
							this.state = 158;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 157;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 164;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 162;
							this.match(XonParser.Comma);
							this.state = 163;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 166;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 169;
					this.expression(0);
					}
				}

				this.state = 172;
				this.body();
				}
				break;

			case 4:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 173;
				this.match(XonParser.Break);
				}
				break;

			case 5:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 174;
				this.match(XonParser.Return);
				this.state = 176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 175;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 178;
				this.function();
				}
				break;

			case 7:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 179;
				this.match(XonParser.ID);
				this.state = 180;
				this.match(XonParser.Assign);
				this.state = 181;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 182;
				this.expression(0);
				}
				break;

			case 9:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 183;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 10:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 184;
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			_localctx._name = this.match(XonParser.ID);
			this.state = 188;
			this.match(XonParser.OpenParen);
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 189;
				this.argument();
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 190;
					this.match(XonParser.Comma);
					this.state = 191;
					this.argument();
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 199;
			this.match(XonParser.CloseParen);
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 200;
				this.type(0);
				}
			}

			this.state = 203;
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
		this.enterRule(_localctx, 18, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			_localctx._name = this.match(XonParser.ID);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
				{
				this.state = 206;
				this.type(0);
				}
			}

			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 209;
				this.match(XonParser.Assign);
				this.state = 210;
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
			this.state = 241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new SimpleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 214;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.OpenBrace:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 215;
				this.match(XonParser.OpenBrace);
				this.state = 216;
				this.match(XonParser.ID);
				this.state = 217;
				this.type(0);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 218;
					this.match(XonParser.Comma);
					this.state = 219;
					this.match(XonParser.ID);
					this.state = 220;
					this.type(0);
					}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 226;
				this.match(XonParser.CloseBrace);
				}
				break;
			case XonParser.OpenParen:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 228;
				this.match(XonParser.OpenParen);
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OpenParen || _la === XonParser.OpenBrace || _la === XonParser.ID) {
					{
					this.state = 229;
					(_localctx as FunctionTypeContext)._type = this.type(0);
					(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 230;
						this.match(XonParser.Comma);
						this.state = 231;
						(_localctx as FunctionTypeContext)._type = this.type(0);
						(_localctx as FunctionTypeContext)._args.push((_localctx as FunctionTypeContext)._type);
						}
						}
						this.state = 236;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 239;
				this.match(XonParser.CloseParen);
				this.state = 240;
				(_localctx as FunctionTypeContext)._returnType = this.type(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 250;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 248;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 243;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 244;
						this.match(XonParser.Question);
						}
						break;

					case 2:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 245;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 246;
						this.match(XonParser.OpenBracket);
						this.state = 247;
						this.match(XonParser.CloseBracket);
						}
						break;
					}
					}
				}
				this.state = 252;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(XonParser.Colon);
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 254;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 255;
				this.match(XonParser.LineBreak);
				this.state = 256;
				this.match(XonParser.INDENT);
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 257;
					this.statement();
					}
					}
					this.state = 260;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Minus - 36)) | (1 << (XonParser.Exclamation - 36)) | (1 << (XonParser.LambdaStart - 36)) | (1 << (XonParser.NullLiteral - 36)) | (1 << (XonParser.BooleanLiteral - 36)) | (1 << (XonParser.NumberLiteral - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (XonParser.StringLiteral - 68)) | (1 << (XonParser.StringFormatStart - 68)) | (1 << (XonParser.ID - 68)))) !== 0));
				this.state = 262;
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
		this.enterRule(_localctx, 24, XonParser.RULE_spreadItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Elipsis) {
				{
				this.state = 266;
				this.match(XonParser.Elipsis);
				}
			}

			this.state = 269;
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
		this.enterRule(_localctx, 26, XonParser.RULE_objectItem);
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.ID:
					{
					this.state = 271;
					this.match(XonParser.ID);
					}
					break;
				case XonParser.OpenBracket:
					{
					this.state = 272;
					this.match(XonParser.OpenBracket);
					this.state = 273;
					_localctx._exprkey = this.expression(0);
					this.state = 274;
					this.match(XonParser.CloseBracket);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 278;
				this.match(XonParser.Colon);
				this.state = 279;
				_localctx._exprVal = this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
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
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 284;
				this.match(XonParser.ID);
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 285;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 286;
				this.match(XonParser.Minus);
				this.state = 287;
				this.expression(15);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 288;
				this.match(XonParser.Exclamation);
				this.state = 289;
				this.expression(14);
				}
				break;

			case 5:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 290;
				this.match(XonParser.StringFormatStart);
				this.state = 296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 291;
						this.expression(0);
						this.state = 292;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 298;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 299;
				this.expression(0);
				this.state = 300;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 6:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 302;
				this.match(XonParser.OpenBracket);
				this.state = 303;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 304;
				this.match(XonParser.Colon);
				this.state = 305;
				(_localctx as RangeExpressionContext)._endPos = this.expression(0);
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 306;
					this.match(XonParser.Colon);
					this.state = 307;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 310;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 7:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 312;
				this.match(XonParser.OpenBracket);
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Minus - 22)) | (1 << (XonParser.Exclamation - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.Elipsis - 63)) | (1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
					{
					this.state = 313;
					this.spreadItem();
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 314;
						this.match(XonParser.Comma);
						this.state = 315;
						this.spreadItem();
						}
						}
						this.state = 320;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 323;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 8:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 324;
				this.match(XonParser.OpenBrace);
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Minus - 22)) | (1 << (XonParser.Exclamation - 22)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (XonParser.Elipsis - 63)) | (1 << (XonParser.LambdaStart - 63)) | (1 << (XonParser.NullLiteral - 63)) | (1 << (XonParser.BooleanLiteral - 63)) | (1 << (XonParser.NumberLiteral - 63)) | (1 << (XonParser.StringLiteral - 63)) | (1 << (XonParser.StringFormatStart - 63)) | (1 << (XonParser.ID - 63)))) !== 0)) {
					{
					this.state = 325;
					this.objectItem();
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 326;
						this.match(XonParser.Comma);
						this.state = 327;
						this.objectItem();
						}
						}
						this.state = 332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 335;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 336;
				this.match(XonParser.OpenParen);
				this.state = 337;
				this.expression(0);
				this.state = 338;
				this.match(XonParser.CloseParen);
				}
				break;

			case 10:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 340;
				this.match(XonParser.LambdaStart);
				this.state = 350;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 341;
					this.match(XonParser.ID);
					this.state = 346;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 342;
						this.match(XonParser.Comma);
						this.state = 343;
						this.match(XonParser.ID);
						}
						}
						this.state = 348;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 349;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 352;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 422;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 420;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 355;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 356;
						this.match(XonParser.Caret);
						this.state = 357;
						(_localctx as PowExpressionContext)._exponent = this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 358;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 359;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.Asterisk - 38)) | (1 << (XonParser.Slash - 38)) | (1 << (XonParser.Modulo - 38)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 360;
						(_localctx as MulDivModExpressionContext)._right = this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 361;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 362;
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
						this.state = 363;
						(_localctx as AddSubExpressionContext)._right = this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 364;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 365;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (XonParser.LessThan - 43)) | (1 << (XonParser.MoreThan - 43)) | (1 << (XonParser.LessThanEquals - 43)) | (1 << (XonParser.MoreThanEquals - 43)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 366;
						(_localctx as RelationalExpressionContext)._right = this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 367;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 368;
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
						this.state = 369;
						(_localctx as EqualityExpressionContext)._right = this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 370;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 371;
						this.match(XonParser.And);
						this.state = 372;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 373;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 374;
						this.match(XonParser.Or);
						this.state = 375;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 376;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 377;
						this.match(XonParser.Pipe);
						this.state = 380;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
						case 1:
							{
							this.state = 378;
							this.match(XonParser.ID);
							this.state = 379;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 382;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 9:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 383;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 384;
						this.match(XonParser.OpenParen);
						this.state = 393;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Minus - 22)) | (1 << (XonParser.Exclamation - 22)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.NumberLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormatStart - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
							{
							this.state = 385;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 390;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 386;
								this.match(XonParser.Comma);
								this.state = 387;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 392;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 395;
						this.match(XonParser.CloseParen);
						}
						break;

					case 10:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 396;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 397;
						this.match(XonParser.OpenBracket);
						this.state = 398;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 399;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 11:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 401;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 402;
						this.match(XonParser.OpenBracket);
						this.state = 403;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 404;
						this.match(XonParser.Colon);
						this.state = 406;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (XonParser.OpenBracket - 22)) | (1 << (XonParser.OpenParen - 22)) | (1 << (XonParser.OpenBrace - 22)) | (1 << (XonParser.Minus - 22)) | (1 << (XonParser.Exclamation - 22)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.LambdaStart - 64)) | (1 << (XonParser.NullLiteral - 64)) | (1 << (XonParser.BooleanLiteral - 64)) | (1 << (XonParser.NumberLiteral - 64)) | (1 << (XonParser.StringLiteral - 64)) | (1 << (XonParser.StringFormatStart - 64)) | (1 << (XonParser.ID - 64)))) !== 0)) {
							{
							this.state = 405;
							(_localctx as SliceExpressionContext)._endPos = this.expression(0);
							}
						}

						this.state = 410;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 408;
							this.match(XonParser.Colon);
							this.state = 409;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 412;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 12:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 414;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 416;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Question) {
							{
							this.state = 415;
							this.match(XonParser.Question);
							}
						}

						this.state = 418;
						this.match(XonParser.Dot);
						this.state = 419;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
		this.enterRule(_localctx, 30, XonParser.RULE_literal);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 425;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 426;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.NumberLiteral:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 427;
				this.match(XonParser.NumberLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 428;
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
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 16);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 20);

		case 11:
			return this.precpred(this._ctx, 19);

		case 12:
			return this.precpred(this._ctx, 18);

		case 13:
			return this.precpred(this._ctx, 17);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u01B2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x07\x02$" +
		"\n\x02\f\x02\x0E\x02\'\v\x02\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02" +
		"\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03:\n\x03\f\x03\x0E\x03=\v\x03\x03\x03\x05\x03@\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04N\n\x04\f\x04\x0E\x04Q\v\x04\x03\x05\x03\x05" +
		"\x03\x05\x05\x05V\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06" +
		"]\n\x06\r\x06\x0E\x06^\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07e\n\x07" +
		"\x03\x07\x03\x07\x05\x07i\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07t\n\x07\x03\x07\x05\x07w\n\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x82\n\t\f" +
		"\t\x0E\t\x85\v\t\x03\t\x03\t\x05\t\x89\n\t\x03\t\x03\t\x05\t\x8D\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x95\n\t\x06\t\x97\n\t\r\t\x0E\t" +
		"\x98\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xA1\n\t\x05\t\xA3\n\t\x03" +
		"\t\x03\t\x05\t\xA7\n\t\x03\t\x05\t\xAA\n\t\x03\t\x05\t\xAD\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\xB3\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\xBC\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xC3\n\n\f\n\x0E\n\xC6" +
		"\v\n\x05\n\xC8\n\n\x03\n\x03\n\x05\n\xCC\n\n\x03\n\x03\n\x03\v\x03\v\x05" +
		"\v\xD2\n\v\x03\v\x03\v\x05\v\xD6\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x07\f\xE0\n\f\f\f\x0E\f\xE3\v\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x07\f\xEB\n\f\f\f\x0E\f\xEE\v\f\x05\f\xF0\n\f\x03\f\x03\f" +
		"\x05\f\xF4\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xFB\n\f\f\f\x0E\f\xFE" +
		"\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\u0105\n\r\r\r\x0E\r\u0106\x03" +
		"\r\x03\r\x05\r\u010B\n\r\x03\x0E\x05\x0E\u010E\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0117\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u011C\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0129\n\x10\f\x10" +
		"\x0E\x10\u012C\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\u0137\n\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x07\x10\u013F\n\x10\f\x10\x0E\x10\u0142\v\x10\x05\x10" +
		"\u0144\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u014B\n\x10" +
		"\f\x10\x0E\x10\u014E\v\x10\x05\x10\u0150\n\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u015B\n\x10\f" +
		"\x10\x0E\x10\u015E\v\x10\x03\x10\x05\x10\u0161\n\x10\x03\x10\x05\x10\u0164" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u017F\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0187" +
		"\n\x10\f\x10\x0E\x10\u018A\v\x10\x05\x10\u018C\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u0199\n\x10\x03\x10\x03\x10\x05\x10\u019D\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u01A3\n\x10\x03\x10\x03\x10\x07\x10\u01A7\n\x10\f" +
		"\x10\x0E\x10\u01AA\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01B0" +
		"\n\x11\x03\x11\x02\x02\x04\x16\x1E\x12\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\x02\x07\b\x02\x12\x14\x16\x17%&(+-.14\x03\x02(*\x03" +
		"\x02%&\x03\x02-0\x03\x0212\x02\u01FC\x02%\x03\x02\x02\x02\x04?\x03\x02" +
		"\x02\x02\x06A\x03\x02\x02\x02\bR\x03\x02\x02\x02\nW\x03\x02\x02\x02\f" +
		"v\x03\x02\x02\x02\x0Ex\x03\x02\x02\x02\x10\xBB\x03\x02\x02\x02\x12\xBD" +
		"\x03\x02\x02\x02\x14\xCF\x03\x02\x02\x02\x16\xF3\x03\x02\x02\x02\x18\xFF" +
		"\x03\x02\x02\x02\x1A\u010D\x03\x02\x02\x02\x1C\u011B\x03\x02\x02\x02\x1E" +
		"\u0163\x03\x02\x02\x02 \u01AF\x03\x02\x02\x02\"$\x05\x04\x03\x02#\"\x03" +
		"\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&+" +
		"\x03\x02\x02\x02\'%\x03\x02\x02\x02(*\x05\x10\t\x02)(\x03\x02\x02\x02" +
		"*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,1\x03\x02\x02\x02" +
		"-+\x03\x02\x02\x02.0\x05\n\x06\x02/.\x03\x02\x02\x0203\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0212\x03\x02\x02\x022\x03\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0245\x05\x06\x04\x0256\x07#\x02\x026;\x05\b\x05\x0278\x07 \x02\x028" +
		":\x05\b\x05\x0297\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02" +
		";<\x03\x02\x02\x02<@\x03\x02\x02\x02=;\x03\x02\x02\x02>@\x07\x11\x02\x02" +
		"?4\x03\x02\x02\x02?>\x03\x02\x02\x02@\x05\x03\x02\x02\x02AF\x07J\x02\x02" +
		"BC\x07&\x02\x02CE\x07J\x02\x02DB\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03" +
		"\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03\x02\x02\x02IJ\x07" +
		")\x02\x02JO\x07J\x02\x02KL\x07&\x02\x02LN\x07J\x02\x02MK\x03\x02\x02\x02" +
		"NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\x07\x03\x02\x02" +
		"\x02QO\x03\x02\x02\x02RU\x07J\x02\x02ST\x07\x05\x02\x02TV\x07J\x02\x02" +
		"US\x03\x02\x02\x02UV\x03\x02\x02\x02V\t\x03\x02\x02\x02WX\x07J\x02\x02" +
		"XY\x07#\x02\x02YZ\x07\x11\x02\x02Z\\\x07\x03\x02\x02[]\x05\f\x07\x02\\" +
		"[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02" +
		"_`\x03\x02\x02\x02`a\x07\x04\x02\x02a\v\x03\x02\x02\x02bd\x07J\x02\x02" +
		"ce\x05\x16\f\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02eh\x03\x02\x02\x02" +
		"fg\x07!\x02\x02gi\x05\x1E\x10\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02" +
		"iw\x03\x02\x02\x02jw\x05\x12\n\x02kw\x07\v\x02\x02lm\x05\x0E\b\x02mn\x07" +
		"\x1A\x02\x02no\x07J\x02\x02op\x05\x16\f\x02pq\x07\x1B\x02\x02qs\x05\x16" +
		"\f\x02rt\x05\x18\r\x02sr\x03\x02\x02\x02st\x03\x02\x02\x02tw\x03\x02\x02" +
		"\x02uw\x07\x11\x02\x02vb\x03\x02\x02\x02vj\x03\x02\x02\x02vk\x03\x02\x02" +
		"\x02vl\x03\x02\x02\x02vu\x03\x02\x02\x02w\r\x03\x02\x02\x02xy\t\x02\x02" +
		"\x02y\x0F\x03\x02\x02\x02z{\x07\x06\x02\x02{|\x05\x1E\x10\x02|\x83\x05" +
		"\x18\r\x02}~\x07\b\x02\x02~\x7F\x05\x1E\x10\x02\x7F\x80\x05\x18\r\x02" +
		"\x80\x82\x03\x02\x02\x02\x81}\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02" +
		"\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x88\x03\x02\x02\x02" +
		"\x85\x83\x03\x02\x02\x02\x86\x87\x07\x07\x02\x02\x87\x89\x05\x18\r\x02" +
		"\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\xBC\x03\x02\x02\x02" +
		"\x8A\x8C\x07\x0F\x02\x02\x8B\x8D\x05\x1E\x10\x02\x8C\x8B\x03\x02\x02\x02" +
		"\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x07#\x02\x02" +
		"\x8F\x90\x07\x11\x02\x02\x90\x96\x07\x03\x02\x02\x91\x92\x05\x1E\x10\x02" +
		"\x92\x94\x05\x18\r\x02\x93\x95\x07\x11\x02\x02\x94\x93\x03\x02\x02\x02" +
		"\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x91\x03\x02\x02\x02" +
		"\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02" +
		"\x99\x9A\x03\x02\x02\x02\x9A\x9B\x07\x04\x02\x02\x9B\xBC\x03\x02\x02\x02" +
		"\x9C\xAC\x07\t\x02\x02\x9D\xA2\x07J\x02\x02\x9E\xA0\x07 \x02\x02\x9F\xA1" +
		"\x07J\x02\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3" +
		"\x03\x02\x02\x02\xA2\x9E\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA6" +
		"\x03\x02\x02\x02\xA4\xA5\x07 \x02\x02\xA5\xA7\x07J\x02\x02\xA6\xA4\x03" +
		"\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x07" +
		"\n\x02\x02\xA9\x9D\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03" +
		"\x02\x02\x02\xAB\xAD\x05\x1E\x10\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAD\x03" +
		"\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xBC\x05\x18\r\x02\xAF\xBC\x07" +
		"\r\x02\x02\xB0\xB2\x07\x0E\x02\x02\xB1\xB3\x05\x1E\x10\x02\xB2\xB1\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xBC\x03\x02\x02\x02\xB4\xBC\x05" +
		"\x12\n\x02\xB5\xB6\x07J\x02\x02\xB6\xB7\x07!\x02\x02\xB7\xBC\x05\x1E\x10" +
		"\x02\xB8\xBC\x05\x1E\x10\x02\xB9\xBC\x07\x10\x02\x02\xBA\xBC\x07\x11\x02" +
		"\x02\xBBz\x03\x02\x02\x02\xBB\x8A\x03\x02\x02\x02\xBB\x9C\x03\x02\x02" +
		"\x02\xBB\xAF\x03\x02\x02\x02\xBB\xB0\x03\x02\x02\x02\xBB\xB4\x03\x02\x02" +
		"\x02\xBB\xB5\x03\x02\x02\x02\xBB\xB8\x03\x02\x02\x02\xBB\xB9\x03\x02\x02" +
		"\x02\xBB\xBA\x03\x02\x02\x02\xBC\x11\x03\x02\x02\x02\xBD\xBE\x07J\x02" +
		"\x02\xBE\xC7\x07\x1A\x02\x02\xBF\xC4\x05\x14\v\x02\xC0\xC1\x07 \x02\x02" +
		"\xC1\xC3\x05\x14\v\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02" +
		"\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02" +
		"\xC6\xC4\x03\x02\x02\x02\xC7\xBF\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02" +
		"\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x07\x1B\x02\x02\xCA\xCC\x05\x16\f\x02" +
		"\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02" +
		"\xCD\xCE\x05\x18\r\x02\xCE\x13\x03\x02\x02\x02\xCF\xD1\x07J\x02\x02\xD0" +
		"\xD2\x05\x16\f\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2" +
		"\xD5\x03\x02\x02\x02\xD3\xD4\x07!\x02\x02\xD4\xD6\x05\x1E\x10\x02\xD5" +
		"\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\x15\x03\x02\x02\x02\xD7" +
		"\xD8\b\f\x01\x02\xD8\xF4\x07J\x02\x02\xD9\xDA\x07\x1C\x02\x02\xDA\xDB" +
		"\x07J\x02\x02\xDB\xE1\x05\x16\f\x02\xDC\xDD\x07 \x02\x02\xDD\xDE\x07J" +
		"\x02\x02\xDE\xE0\x05\x16\f\x02\xDF\xDC\x03\x02\x02\x02\xE0\xE3\x03\x02" +
		"\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x03\x02" +
		"\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE5\x07\x1D\x02\x02\xE5\xF4\x03\x02" +
		"\x02\x02\xE6\xEF\x07\x1A\x02\x02\xE7\xEC\x05\x16\f\x02\xE8\xE9\x07 \x02" +
		"\x02\xE9\xEB\x05\x16\f\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x03\x02\x02" +
		"\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02" +
		"\x02\xEE\xEC\x03\x02\x02\x02\xEF\xE7\x03\x02\x02\x02\xEF\xF0\x03\x02\x02" +
		"\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x07\x1B\x02\x02\xF2\xF4\x05\x16\f" +
		"\x03\xF3\xD7\x03\x02\x02\x02\xF3\xD9\x03\x02\x02\x02\xF3\xE6\x03\x02\x02" +
		"\x02\xF4\xFC\x03\x02\x02\x02\xF5\xF6\f\x06\x02\x02\xF6\xFB\x07\"\x02\x02" +
		"\xF7\xF8\f\x05\x02\x02\xF8\xF9\x07\x18\x02\x02\xF9\xFB\x07\x19\x02\x02" +
		"\xFA\xF5\x03\x02\x02\x02\xFA\xF7\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02" +
		"\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\x17\x03\x02\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFF\u010A\x07#\x02\x02\u0100\u010B\x05\x10\t" +
		"\x02\u0101\u0102\x07\x11\x02\x02\u0102\u0104\x07\x03\x02\x02\u0103\u0105" +
		"\x05\x10\t\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02" +
		"\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03" +
		"\x02\x02\x02\u0108\u0109\x07\x04\x02\x02\u0109\u010B\x03\x02\x02\x02\u010A" +
		"\u0100\x03\x02\x02\x02\u010A\u0101\x03\x02\x02\x02\u010B\x19\x03\x02\x02" +
		"\x02\u010C\u010E\x07A\x02\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E" +
		"\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x05\x1E\x10\x02" +
		"\u0110\x1B\x03\x02\x02\x02\u0111\u0117\x07J\x02\x02\u0112\u0113\x07\x18" +
		"\x02\x02\u0113\u0114\x05\x1E\x10\x02\u0114\u0115\x07\x19\x02\x02\u0115" +
		"\u0117\x03\x02\x02\x02\u0116\u0111\x03\x02\x02\x02\u0116\u0112\x03\x02" +
		"\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x07#\x02\x02\u0119\u011C" +
		"\x05\x1E\x10\x02\u011A\u011C\x05\x1A\x0E\x02\u011B\u0116\x03\x02\x02\x02" +
		"\u011B\u011A\x03\x02\x02\x02\u011C\x1D\x03\x02\x02\x02\u011D\u011E\b\x10" +
		"\x01\x02\u011E\u0164\x07J\x02\x02\u011F\u0164\x05 \x11\x02\u0120\u0121" +
		"\x07&\x02\x02\u0121\u0164\x05\x1E\x10\x11\u0122\u0123\x07\'\x02\x02\u0123" +
		"\u0164\x05\x1E\x10\x10\u0124\u012A\x07G\x02\x02\u0125\u0126\x05\x1E\x10" +
		"\x02\u0126\u0127\x07H\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128\u0125" +
		"\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02" +
		"\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03" +
		"\x02\x02\x02\u012D\u012E\x05\x1E\x10\x02\u012E\u012F\x07I\x02\x02\u012F" +
		"\u0164\x03\x02\x02\x02\u0130\u0131\x07\x18\x02\x02\u0131\u0132\x05\x1E" +
		"\x10\x02\u0132\u0133\x07#\x02\x02\u0133\u0136\x05\x1E\x10\x02\u0134\u0135" +
		"\x07#\x02\x02\u0135\u0137\x05\x1E\x10\x02\u0136\u0134\x03\x02\x02\x02" +
		"\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x07" +
		"\x19\x02\x02\u0139\u0164\x03\x02\x02\x02\u013A\u0143\x07\x18\x02\x02\u013B" +
		"\u0140\x05\x1A\x0E\x02\u013C\u013D\x07 \x02\x02\u013D\u013F\x05\x1A\x0E" +
		"\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02" +
		"\u0142\u0140\x03\x02\x02\x02\u0143\u013B\x03\x02\x02\x02\u0143\u0144\x03" +
		"\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0164\x07\x19\x02\x02\u0146" +
		"\u014F\x07\x1C\x02\x02\u0147\u014C\x05\x1C\x0F\x02\u0148\u0149\x07 \x02" +
		"\x02\u0149\u014B\x05\x1C\x0F\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014E" +
		"\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02" +
		"\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0147\x03" +
		"\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0164\x07\x1D\x02\x02\u0152\u0153\x07\x1A\x02\x02\u0153\u0154\x05\x1E" +
		"\x10\x02\u0154\u0155\x07\x1B\x02\x02\u0155\u0164\x03\x02\x02\x02\u0156" +
		"\u0160\x07B\x02\x02\u0157\u015C\x07J\x02\x02\u0158\u0159\x07 \x02\x02" +
		"\u0159\u015B\x07J\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015E\x03" +
		"\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u015F\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0161\x07#\x02" +
		"\x02\u0160\u0157\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162" +
		"\x03\x02\x02\x02\u0162\u0164\x05\x1E\x10\x03\u0163\u011D\x03\x02\x02\x02" +
		"\u0163\u011F\x03\x02\x02\x02\u0163\u0120\x03\x02\x02\x02\u0163\u0122\x03" +
		"\x02\x02\x02\u0163\u0124\x03\x02\x02\x02\u0163\u0130\x03\x02\x02\x02\u0163" +
		"\u013A\x03\x02\x02\x02\u0163\u0146\x03\x02\x02\x02\u0163\u0152\x03\x02" +
		"\x02\x02\u0163\u0156\x03\x02\x02\x02\u0164\u01A8\x03\x02\x02\x02\u0165" +
		"\u0166\f\x12\x02\x02\u0166\u0167\x07+\x02\x02\u0167\u01A7\x05\x1E\x10" +
		"\x13\u0168\u0169\f\x0F\x02\x02\u0169\u016A\t\x03\x02\x02\u016A\u01A7\x05" +
		"\x1E\x10\x10\u016B\u016C\f\x0E\x02\x02\u016C\u016D\t\x04\x02\x02\u016D" +
		"\u01A7\x05\x1E\x10\x0F\u016E\u016F\f\r\x02\x02\u016F\u0170\t\x05\x02\x02" +
		"\u0170\u01A7\x05\x1E\x10\x0E\u0171\u0172\f\f\x02\x02\u0172\u0173\t\x06" +
		"\x02\x02\u0173\u01A7\x05\x1E\x10\r\u0174\u0175\f\v\x02\x02\u0175\u0176" +
		"\x073\x02\x02\u0176\u01A7\x05\x1E\x10\f\u0177\u0178\f\n\x02\x02\u0178" +
		"\u0179\x074\x02\x02\u0179\u01A7\x05\x1E\x10\v\u017A\u017B\f\x04\x02\x02" +
		"\u017B\u017E\x07?\x02\x02\u017C\u017D\x07J\x02\x02\u017D\u017F\x07#\x02" +
		"\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180" +
		"\x03\x02\x02\x02\u0180\u01A7\x05\x1E\x10\x05\u0181\u0182\f\x16\x02\x02" +
		"\u0182\u018B\x07\x1A\x02\x02\u0183\u0188\x05\x1E\x10\x02\u0184\u0185\x07" +
		" \x02\x02\u0185\u0187\x05\x1E\x10\x02\u0186\u0184\x03\x02\x02\x02\u0187" +
		"\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02" +
		"\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
		"\u0183\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D\u01A7\x07\x1B\x02\x02\u018E\u018F\f\x15\x02\x02\u018F\u0190" +
		"\x07\x18\x02\x02\u0190\u0191\x05\x1E\x10\x02\u0191\u0192\x07\x19\x02\x02" +
		"\u0192\u01A7\x03\x02\x02\x02\u0193\u0194\f\x14\x02\x02\u0194\u0195\x07" +
		"\x18\x02\x02\u0195\u0196\x05\x1E\x10\x02\u0196\u0198\x07#\x02\x02\u0197" +
		"\u0199\x05\x1E\x10\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199\x03\x02" +
		"\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u019B\x07#\x02\x02\u019B\u019D" +
		"\x05\x1E\x10\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02" +
		"\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x07\x19\x02\x02\u019F\u01A7\x03" +
		"\x02\x02\x02\u01A0\u01A2\f\x13\x02\x02\u01A1\u01A3\x07\"\x02\x02\u01A2" +
		"\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A4\u01A5\x07$\x02\x02\u01A5\u01A7\x07J\x02\x02\u01A6\u0165" +
		"\x03\x02\x02\x02\u01A6\u0168\x03\x02\x02\x02\u01A6\u016B\x03\x02\x02\x02" +
		"\u01A6\u016E\x03\x02\x02\x02\u01A6\u0171\x03\x02\x02\x02\u01A6\u0174\x03" +
		"\x02\x02\x02\u01A6\u0177\x03\x02\x02\x02\u01A6\u017A\x03\x02\x02\x02\u01A6" +
		"\u0181\x03\x02\x02\x02\u01A6\u018E\x03\x02\x02\x02\u01A6\u0193\x03\x02" +
		"\x02\x02\u01A6\u01A0\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8" +
		"\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\x1F\x03\x02\x02" +
		"\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01B0\x07C\x02\x02\u01AC\u01B0" +
		"\x07D\x02\x02\u01AD\u01B0\x07E\x02\x02\u01AE\u01B0\x07F\x02\x02\u01AF" +
		"\u01AB\x03\x02\x02\x02\u01AF\u01AC\x03\x02\x02\x02\u01AF\u01AD\x03\x02" +
		"\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0!\x03\x02\x02\x02=%+1;?FOU^" +
		"dhsv\x83\x88\x8C\x94\x98\xA0\xA2\xA6\xA9\xAC\xB2\xBB\xC4\xC7\xCB\xD1\xD5" +
		"\xE1\xEC\xEF\xF3\xFA\xFC\u0106\u010A\u010D\u0116\u011B\u012A\u0136\u0140" +
		"\u0143\u014C\u014F\u015C\u0160\u0163\u017E\u0188\u018B\u0198\u019C\u01A2" +
		"\u01A6\u01A8\u01AF";
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
	public get ruleIndex(): number { return XonParser.RULE_importPath; }
}


export class ImportMemberContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_importMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public _name!: Token;
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
	public _name!: Token;
	public _value!: ExpressionContext;
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
	public _operandType!: TypeContext;
	public _returnType!: TypeContext;
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
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
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	public Asterisk(): TerminalNode | undefined { return this.tryGetToken(XonParser.Asterisk, 0); }
	public Slash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Slash, 0); }
	public Modulo(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulo, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(XonParser.Caret, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(XonParser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(XonParser.Or, 0); }
	public BitAnd(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitAnd, 0); }
	public BitXor(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitXor, 0); }
	public BitOr(): TerminalNode | undefined { return this.tryGetToken(XonParser.BitOr, 0); }
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
	public _value!: ExpressionContext;
	public _expression!: ExpressionContext;
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
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class FunctionContext extends ParserRuleContext {
	public _name!: Token;
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
	public _name!: Token;
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
export class NullableTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Question(): TerminalNode { return this.getToken(XonParser.Question, 0); }
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
	public _type!: TypeContext;
	public _args: TypeContext[] = [];
	public _returnType!: TypeContext;
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
	public Elipsis(): TerminalNode | undefined { return this.tryGetToken(XonParser.Elipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_spreadItem; }
}


export class ObjectItemContext extends ParserRuleContext {
	public _exprkey!: ExpressionContext;
	public _exprVal!: ExpressionContext;
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
export class FunctionExpressionContext extends ExpressionContext {
	public _object!: ExpressionContext;
	public _expression!: ExpressionContext;
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
	public _value!: ExpressionContext;
	public _index!: ExpressionContext;
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
	public _value!: ExpressionContext;
	public _startPos!: ExpressionContext;
	public _endPos!: ExpressionContext;
	public _step!: ExpressionContext;
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
export class PowExpressionContext extends ExpressionContext {
	public _base!: ExpressionContext;
	public _exponent!: ExpressionContext;
	public Caret(): TerminalNode { return this.getToken(XonParser.Caret, 0); }
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
export class LogicalNotExpressionContext extends ExpressionContext {
	public Exclamation(): TerminalNode { return this.getToken(XonParser.Exclamation, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operation!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Asterisk(): TerminalNode | undefined { return this.tryGetToken(XonParser.Asterisk, 0); }
	public Slash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Slash, 0); }
	public Modulo(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulo, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operation!: Token;
	public _right!: ExpressionContext;
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
export class RelationalExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operation!: Token;
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _operation!: Token;
	public _right!: ExpressionContext;
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
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
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
	public _startPos!: ExpressionContext;
	public _endPos!: ExpressionContext;
	public _step!: ExpressionContext;
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
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
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


