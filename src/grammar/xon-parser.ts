// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly ABSTRACT = 9;
	public static readonly ACTUAL = 10;
	public static readonly BREAK = 11;
	public static readonly CLASS = 12;
	public static readonly DO = 13;
	public static readonly ELSE = 14;
	public static readonly ENUM = 15;
	public static readonly EXPECT = 16;
	public static readonly EXPORT = 17;
	public static readonly EXTENSION = 18;
	public static readonly FACTORY = 19;
	public static readonly FOR = 20;
	public static readonly IF = 21;
	public static readonly IS = 22;
	public static readonly IN = 23;
	public static readonly IMPORT = 24;
	public static readonly INFIX = 25;
	public static readonly MODEL = 26;
	public static readonly OBJECT = 27;
	public static readonly POSTFIX = 28;
	public static readonly PREFIX = 29;
	public static readonly RETURN = 30;
	public static readonly TYPE = 31;
	public static readonly WHILE = 32;
	public static readonly ASSIGN = 33;
	public static readonly COLON = 34;
	public static readonly COMMA = 35;
	public static readonly DOT = 36;
	public static readonly EXCLAMATION = 37;
	public static readonly HASH = 38;
	public static readonly QUESTION = 39;
	public static readonly GENERIC_LEFT = 40;
	public static readonly GENERIC_RIGHT = 41;
	public static readonly FLOAT_LITERAL = 42;
	public static readonly INTEGER_LITERAL = 43;
	public static readonly REGEX_LITERAL = 44;
	public static readonly STRING_LITERAL = 45;
	public static readonly PREPROCESSOR = 46;
	public static readonly ID = 47;
	public static readonly NL = 48;
	public static readonly WS = 49;
	public static readonly BLOCK_COMMENT = 50;
	public static readonly LINE_COMMENT = 51;
	public static readonly UNEXPECTED = 52;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_definitionBody = 5;
	public static readonly RULE_arrayItem = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_modifier = 9;
	public static readonly RULE_id = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expr", "literal", "body", "definitionBody", "arrayItem", 
		"parameters", "parameter", "modifier", "id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'abstract'", "'actual'", "'break'", "'class'", "'do'", "'else'", "'enum'", 
		"'expect'", "'export'", "'extension'", "'factory'", "'for'", "'if'", "'is'", 
		"'in'", "'import'", "'infix'", "'model'", "'object'", "'postfix'", "'prefix'", 
		"'return'", "'type'", "'while'", "'='", "':'", "','", "'.'", "'!'", "'#'", 
		"'?'", "'<|'", "'|>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "BREAK", 
		"CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", "FACTORY", 
		"FOR", "IF", "IS", "IN", "IMPORT", "INFIX", "MODEL", "OBJECT", "POSTFIX", 
		"PREFIX", "RETURN", "TYPE", "WHILE", "ASSIGN", "COLON", "COMMA", "DOT", 
		"EXCLAMATION", "HASH", "QUESTION", "GENERIC_LEFT", "GENERIC_RIGHT", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
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
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_source);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.WHILE - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.REGEX_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0)) {
				{
				this.state = 24;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OPEN_BRACKET:
				case XonParser.OPEN_PAREN:
				case XonParser.OPEN_BRACE:
				case XonParser.ACTUAL:
				case XonParser.BREAK:
				case XonParser.DO:
				case XonParser.EXPORT:
				case XonParser.FACTORY:
				case XonParser.FOR:
				case XonParser.IF:
				case XonParser.IMPORT:
				case XonParser.MODEL:
				case XonParser.OBJECT:
				case XonParser.RETURN:
				case XonParser.WHILE:
				case XonParser.FLOAT_LITERAL:
				case XonParser.INTEGER_LITERAL:
				case XonParser.REGEX_LITERAL:
				case XonParser.STRING_LITERAL:
				case XonParser.PREPROCESSOR:
				case XonParser.ID:
					{
					this.state = 22;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 23;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 28;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 29;
				this.match(XonParser.IMPORT);
				this.state = 30;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 31;
					this.match(XonParser.COLON);
					this.state = 32;
					(_localctx as ImportStatementContext)._expr = this.expr(0);
					(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
					this.state = 37;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 33;
							this.match(XonParser.COMMA);
							this.state = 34;
							(_localctx as ImportStatementContext)._expr = this.expr(0);
							(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
							}
							}
						}
						this.state = 39;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
					}
					this.state = 41;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						this.state = 40;
						this.match(XonParser.COMMA);
						}
						break;
					}
					}
				}

				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.match(XonParser.EXPORT);
				this.state = 46;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.match(XonParser.FOR);
				this.state = 55;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 48;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 51;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 49;
						this.match(XonParser.COMMA);
						this.state = 50;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 53;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 57;
				this.expr(0);
				this.state = 58;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 60;
				this.match(XonParser.WHILE);
				this.state = 61;
				this.expr(0);
				this.state = 62;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 64;
				this.match(XonParser.DO);
				this.state = 65;
				this.body();
				this.state = 66;
				this.match(XonParser.WHILE);
				this.state = 67;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 69;
				this.match(XonParser.IF);
				this.state = 70;
				this.expr(0);
				this.state = 71;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 74;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 72;
					this.match(XonParser.ELSE);
					this.state = 73;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 76;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 77;
				this.match(XonParser.RETURN);
				this.state = 79;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 78;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 81;
				this.match(XonParser.ACTUAL);
				this.state = 82;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 83;
					this.match(XonParser.NL);
					}
					}
					this.state = 86;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 88;
				this.match(XonParser.EXPECT);
				this.state = 89;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 91;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new ModelStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 92;
				this.match(XonParser.MODEL);
				this.state = 93;
				(_localctx as ModelStatementContext)._name = this.id();
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 94;
					this.match(XonParser.IS);
					this.state = 95;
					(_localctx as ModelStatementContext)._base = this.id();
					}
				}

				this.state = 99;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 98;
					this.definitionBody();
					}
					break;
				}
				}
				break;

			case 12:
				_localctx = new ObjectStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 101;
				this.match(XonParser.OBJECT);
				this.state = 102;
				(_localctx as ObjectStatementContext)._name = this.id();
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 103;
					this.match(XonParser.IS);
					this.state = 104;
					(_localctx as ObjectStatementContext)._base = this.id();
					}
				}

				this.state = 108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 107;
					this.definitionBody();
					}
					break;
				}
				}
				break;

			case 13:
				_localctx = new FactoryStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 110;
				this.match(XonParser.FACTORY);
				this.state = 111;
				(_localctx as FactoryStatementContext)._name = this.id();
				this.state = 112;
				this.match(XonParser.OPEN_PAREN);
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 113;
					this.parameters();
					}
				}

				this.state = 116;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 117;
					this.definitionBody();
					}
					break;
				}
				}
				break;

			case 14:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 120;
				this.id();
				this.state = 121;
				this.match(XonParser.ASSIGN);
				this.state = 122;
				this.expr(0);
				}
				break;

			case 15:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 124;
				this.expr(0);
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 128;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 129;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.REGEX_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.ID - 42)))) !== 0)) {
					{
					this.state = 130;
					this.arrayItem();
					this.state = 135;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 131;
							this.match(XonParser.COMMA);
							this.state = 132;
							this.arrayItem();
							}
							}
						}
						this.state = 137;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 138;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 143;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.match(XonParser.OPEN_BRACE);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 145;
					this.parameter();
					this.state = 150;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 146;
							this.match(XonParser.COMMA);
							this.state = 147;
							this.parameter();
							}
							}
						}
						this.state = 152;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 153;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 158;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 159;
				(_localctx as PrefixExpressionContext)._op = this.match(XonParser.ID);
				this.state = 160;
				this.expr(6);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(XonParser.OPEN_PAREN);
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 163;
					this.parameter();
					this.state = 168;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 164;
							this.match(XonParser.COMMA);
							this.state = 165;
							this.parameter();
							}
							}
						}
						this.state = 170;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
					}
					this.state = 172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 171;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 176;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 177;
				this.expr(3);
				}
				break;

			case 7:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 178;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 179;
					this.parameter();
					this.state = 184;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 180;
							this.match(XonParser.COMMA);
							this.state = 181;
							this.parameter();
							}
							}
						}
						this.state = 186;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
					}
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 187;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 192;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 193;
				this.expr(2);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 194;
				this.match(XonParser.OPEN_PAREN);
				this.state = 195;
				this.expr(0);
				this.state = 196;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 242;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 240;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 200;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 201;
						(_localctx as InfixExpressionContext)._op = this.match(XonParser.ID);
						this.state = 202;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 203;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 204;
						this.match(XonParser.OPEN_PAREN);
						this.state = 216;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.REGEX_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.ID - 42)))) !== 0)) {
							{
							this.state = 205;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 210;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 206;
									this.match(XonParser.COMMA);
									this.state = 207;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 212;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							}
							this.state = 214;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 213;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 218;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 219;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 220;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 232;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.FLOAT_LITERAL - 42)) | (1 << (XonParser.INTEGER_LITERAL - 42)) | (1 << (XonParser.REGEX_LITERAL - 42)) | (1 << (XonParser.STRING_LITERAL - 42)) | (1 << (XonParser.ID - 42)))) !== 0)) {
							{
							this.state = 221;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 226;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 222;
									this.match(XonParser.COMMA);
									this.state = 223;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 228;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							}
							this.state = 230;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 229;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 234;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 4:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 235;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 236;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 237;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 238;
						this.match(XonParser.DOT);
						this.state = 239;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 244;
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
		this.enterRule(_localctx, 6, XonParser.RULE_literal);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 246;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 247;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 248;
				this.match(XonParser.REGEX_LITERAL);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this.match(XonParser.COLON);
				this.state = 252;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 253;
					this.match(XonParser.COLON);
					}
				}

				this.state = 256;
				this.match(XonParser.NL);
				this.state = 257;
				this.match(XonParser.INDENT);
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 260;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FACTORY:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.MODEL:
					case XonParser.OBJECT:
					case XonParser.RETURN:
					case XonParser.WHILE:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 258;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 259;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.WHILE - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.REGEX_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 264;
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
	public definitionBody(): DefinitionBodyContext {
		let _localctx: DefinitionBodyContext = new DefinitionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_definitionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(XonParser.NL);
			this.state = 268;
			this.match(XonParser.INDENT);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 271;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.ID:
					{
					this.state = 269;
					this.parameter();
					}
					break;
				case XonParser.NL:
					{
					this.state = 270;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.ID || _la === XonParser.NL);
			this.state = 275;
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
	public arrayItem(): ArrayItemContext {
		let _localctx: ArrayItemContext = new ArrayItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_arrayItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 277;
				this.expr(0);
				this.state = 278;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 282;
			this.expr(0);
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.parameter();
			this.state = 289;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 285;
					this.match(XonParser.COMMA);
					this.state = 286;
					this.parameter();
					}
					}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 292;
				this.match(XonParser.COMMA);
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_parameter);
		try {
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.id();
				this.state = 296;
				this.expr(0);
				this.state = 297;
				this.body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 299;
				this.id();
				this.state = 300;
				this.expr(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 302;
				this.id();
				this.state = 303;
				this.body();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 305;
				this.id();
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
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLASS) | (1 << XonParser.ENUM) | (1 << XonParser.MODEL) | (1 << XonParser.OBJECT) | (1 << XonParser.TYPE))) !== 0))) {
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_id);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			_localctx._name = this.match(XonParser.ID);
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 311;
				this.match(XonParser.GENERIC_LEFT);
				this.state = 312;
				this.parameter();
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 313;
						this.match(XonParser.COMMA);
						this.state = 314;
						this.parameter();
						}
						}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 320;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 323;
				this.match(XonParser.GENERIC_RIGHT);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x036\u014A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x07\x02\x1B\n\x02\f\x02\x0E\x02\x1E\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03&\n\x03\f\x03\x0E\x03)\v\x03\x03\x03\x05\x03" +
		",\n\x03\x05\x03.\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x036\n\x03\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03M\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03R\n\x03\x03\x03\x03\x03\x03\x03\x06\x03W\n\x03\r\x03\x0E" +
		"\x03X\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03c\n\x03\x03\x03\x05\x03f\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03l\n\x03\x03\x03\x05\x03o\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03u\n\x03\x03\x03\x03\x03\x05\x03y\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\x80\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\x88\n\x04\f\x04\x0E\x04\x8B\v\x04\x03\x04\x05\x04" +
		"\x8E\n\x04\x05\x04\x90\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04\x97\n\x04\f\x04\x0E\x04\x9A\v\x04\x03\x04\x05\x04\x9D\n\x04\x05\x04" +
		"\x9F\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\xA9\n\x04\f\x04\x0E\x04\xAC\v\x04\x03\x04\x05\x04\xAF\n\x04" +
		"\x05\x04\xB1\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04\xB9\n\x04\f\x04\x0E\x04\xBC\v\x04\x03\x04\x05\x04\xBF\n\x04\x05\x04" +
		"\xC1\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xC9" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04\xD3\n\x04\f\x04\x0E\x04\xD6\v\x04\x03\x04\x05\x04\xD9\n\x04\x05" +
		"\x04\xDB\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\xE3\n\x04\f\x04\x0E\x04\xE6\v\x04\x03\x04\x05\x04\xE9\n\x04\x05\x04\xEB" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xF3\n\x04" +
		"\f\x04\x0E\x04\xF6\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xFC\n" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06\u0101\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x06\x06\u0107\n\x06\r\x06\x0E\x06\u0108\x03\x06\x05\x06\u010C" +
		"\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\u0112\n\x07\r\x07\x0E\x07" +
		"\u0113\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u011B\n\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x07\t\u0122\n\t\f\t\x0E\t\u0125\v\t\x03\t\x05\t\u0128\n" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0135\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u013E\n\f" +
		"\f\f\x0E\f\u0141\v\f\x03\f\x05\f\u0144\n\f\x03\f\x03\f\x05\f\u0148\n\f" +
		"\x03\f\x02\x02\x03\x06\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03\x06\x02\x0E\x0E\x11\x11\x1C" +
		"\x1D!!\x02\u018C\x02\x1C\x03\x02\x02\x02\x04\x7F\x03\x02\x02\x02\x06\xC8" +
		"\x03\x02\x02\x02\b\xFB\x03\x02\x02\x02\n\u010B\x03\x02\x02\x02\f\u010D" +
		"\x03\x02\x02\x02\x0E\u011A\x03\x02\x02\x02\x10\u011E\x03\x02\x02\x02\x12" +
		"\u0134\x03\x02\x02\x02\x14\u0136\x03\x02\x02\x02\x16\u0138\x03\x02\x02" +
		"\x02\x18\x1B\x05\x04\x03\x02\x19\x1B\x072\x02\x02\x1A\x18\x03\x02\x02" +
		"\x02\x1A\x19\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02" +
		"\x02\x1C\x1D\x03\x02\x02\x02\x1D\x03\x03\x02\x02\x02\x1E\x1C\x03\x02\x02" +
		"\x02\x1F \x07\x1A\x02\x02 -\x05\x06\x04\x02!\"\x07$\x02\x02\"\'\x05\x06" +
		"\x04\x02#$\x07%\x02\x02$&\x05\x06\x04\x02%#\x03\x02\x02\x02&)\x03\x02" +
		"\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03" +
		"\x02\x02\x02*,\x07%\x02\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03" +
		"\x02\x02\x02-!\x03\x02\x02\x02-.\x03\x02\x02\x02.\x80\x03\x02\x02\x02" +
		"/0\x07\x13\x02\x020\x80\x05\x06\x04\x0219\x07\x16\x02\x0225\x05\x12\n" +
		"\x0234\x07%\x02\x0246\x05\x12\n\x0253\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"67\x03\x02\x02\x0278\x07\x19\x02\x028:\x03\x02\x02\x0292\x03\x02\x02\x02" +
		"9:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x05\x06\x04\x02<=\x05\n\x06\x02" +
		"=\x80\x03\x02\x02\x02>?\x07\"\x02\x02?@\x05\x06\x04\x02@A\x05\n\x06\x02" +
		"A\x80\x03\x02\x02\x02BC\x07\x0F\x02\x02CD\x05\n\x06\x02DE\x07\"\x02\x02" +
		"EF\x05\x06\x04\x02F\x80\x03\x02\x02\x02GH\x07\x17\x02\x02HI\x05\x06\x04" +
		"\x02IL\x05\n\x06\x02JK\x07\x10\x02\x02KM\x05\n\x06\x02LJ\x03\x02\x02\x02" +
		"LM\x03\x02\x02\x02M\x80\x03\x02\x02\x02N\x80\x07\r\x02\x02OQ\x07 \x02" +
		"\x02PR\x05\x06\x04\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02R\x80\x03\x02" +
		"\x02\x02ST\x07\f\x02\x02TV\x05\x06\x04\x02UW\x072\x02\x02VU\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02" +
		"\x02Z[\x07\x12\x02\x02[\\\x05\x06\x04\x02\\\x80\x03\x02\x02\x02]\x80\x07" +
		"0\x02\x02^_\x07\x1C\x02\x02_b\x05\x16\f\x02`a\x07\x18\x02\x02ac\x05\x16" +
		"\f\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02df\x05\f\x07" +
		"\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02f\x80\x03\x02\x02\x02gh\x07\x1D" +
		"\x02\x02hk\x05\x16\f\x02ij\x07\x18\x02\x02jl\x05\x16\f\x02ki\x03\x02\x02" +
		"\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mo\x05\f\x07\x02nm\x03\x02\x02" +
		"\x02no\x03\x02\x02\x02o\x80\x03\x02\x02\x02pq\x07\x15\x02\x02qr\x05\x16" +
		"\f\x02rt\x07\x07\x02\x02su\x05\x10\t\x02ts\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02uv\x03\x02\x02\x02vx\x07\b\x02\x02wy\x05\f\x07\x02xw\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02y\x80\x03\x02\x02\x02z{\x05\x16\f\x02{|\x07#\x02\x02" +
		"|}\x05\x06\x04\x02}\x80\x03\x02\x02\x02~\x80\x05\x06\x04\x02\x7F\x1F\x03" +
		"\x02\x02\x02\x7F/\x03\x02\x02\x02\x7F1\x03\x02\x02\x02\x7F>\x03\x02\x02" +
		"\x02\x7FB\x03\x02\x02\x02\x7FG\x03\x02\x02\x02\x7FN\x03\x02\x02\x02\x7F" +
		"O\x03\x02\x02\x02\x7FS\x03\x02\x02\x02\x7F]\x03\x02\x02\x02\x7F^\x03\x02" +
		"\x02\x02\x7Fg\x03\x02\x02\x02\x7Fp\x03\x02\x02\x02\x7Fz\x03\x02\x02\x02" +
		"\x7F~\x03\x02\x02\x02\x80\x05\x03\x02\x02\x02\x81\x82\b\x04\x01\x02\x82" +
		"\xC9\x05\x16\f\x02\x83\x8F\x07\x05\x02\x02\x84\x89\x05\x0E\b\x02\x85\x86" +
		"\x07%\x02\x02\x86\x88\x05\x0E\b\x02\x87\x85\x03\x02\x02\x02\x88\x8B\x03" +
		"\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8D\x03" +
		"\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8E\x07%\x02\x02\x8D\x8C\x03" +
		"\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x84\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\xC9\x07" +
		"\x06\x02\x02\x92\x9E\x07\t\x02\x02\x93\x98\x05\x12\n\x02\x94\x95\x07%" +
		"\x02\x02\x95\x97\x05\x12\n\x02\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02" +
		"\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02" +
		"\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9D\x07%\x02\x02\x9C\x9B\x03\x02" +
		"\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x93\x03\x02" +
		"\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xC9\x07\n" +
		"\x02\x02\xA1\xA2\x071\x02\x02\xA2\xC9\x05\x06\x04\b\xA3\xC9\x05\b\x05" +
		"\x02\xA4\xB0\x07\x07\x02\x02\xA5\xAA\x05\x12\n\x02\xA6\xA7\x07%\x02\x02" +
		"\xA7\xA9\x05\x12\n\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02" +
		"\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02" +
		"\xAC\xAA\x03\x02\x02\x02\xAD\xAF\x07%\x02\x02\xAE\xAD\x03\x02\x02\x02" +
		"\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xA5\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x07\b\x02\x02" +
		"\xB3\xC9\x05\x06\x04\x05\xB4\xC0\x07\x05\x02\x02\xB5\xBA\x05\x12\n\x02" +
		"\xB6\xB7\x07%\x02\x02\xB7\xB9\x05\x12\n\x02\xB8\xB6\x03\x02\x02\x02\xB9" +
		"\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB" +
		"\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBF\x07%\x02\x02\xBE" +
		"\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0" +
		"\xB5\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2" +
		"\xC3\x07\x06\x02\x02\xC3\xC9\x05\x06\x04\x04\xC4\xC5\x07\x07\x02\x02\xC5" +
		"\xC6\x05\x06\x04\x02\xC6\xC7\x07\b\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8" +
		"\x81\x03\x02\x02\x02\xC8\x83\x03\x02\x02\x02\xC8\x92\x03\x02\x02\x02\xC8" +
		"\xA1\x03\x02\x02\x02\xC8\xA3\x03\x02\x02\x02\xC8\xA4\x03\x02\x02\x02\xC8" +
		"\xB4\x03\x02\x02\x02\xC8\xC4\x03\x02\x02\x02\xC9\xF4\x03\x02\x02\x02\xCA" +
		"\xCB\f\x07\x02\x02\xCB\xCC\x071\x02\x02\xCC\xF3\x05\x06\x04\b\xCD\xCE" +
		"\f\f\x02\x02\xCE\xDA\x07\x07\x02\x02\xCF\xD4\x05\x06\x04\x02\xD0\xD1\x07" +
		"%\x02\x02\xD1\xD3\x05\x06\x04\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD6\x03" +
		"\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD8\x03" +
		"\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD9\x07%\x02\x02\xD8\xD7\x03" +
		"\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xCF\x03" +
		"\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xF3\x07" +
		"\b\x02\x02\xDD\xDE\f\v\x02\x02\xDE\xEA\x07\x05\x02\x02\xDF\xE4\x05\x06" +
		"\x04\x02\xE0\xE1\x07%\x02\x02\xE1\xE3\x05\x06\x04\x02\xE2\xE0\x03\x02" +
		"\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02" +
		"\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9\x07%" +
		"\x02\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02" +
		"\x02\x02\xEA\xDF\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x03\x02" +
		"\x02\x02\xEC\xF3\x07\x06\x02\x02\xED\xEE\f\n\x02\x02\xEE\xF3\x07)\x02" +
		"\x02\xEF\xF0\f\t\x02\x02\xF0\xF1\x07&\x02\x02\xF1\xF3\x05\x16\f\x02\xF2" +
		"\xCA\x03\x02\x02\x02\xF2\xCD\x03\x02\x02\x02\xF2\xDD\x03\x02\x02\x02\xF2" +
		"\xED\x03\x02\x02\x02\xF2\xEF\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4" +
		"\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\x07\x03\x02\x02\x02\xF6" +
		"\xF4\x03\x02\x02\x02\xF7\xFC\x07-\x02\x02\xF8\xFC\x07,\x02\x02\xF9\xFC" +
		"\x07/\x02\x02\xFA\xFC\x07.\x02\x02\xFB\xF7\x03\x02\x02\x02\xFB\xF8\x03" +
		"\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\t\x03" +
		"\x02\x02\x02\xFD\xFE\x07$\x02\x02\xFE\u010C\x05\x04\x03\x02\xFF\u0101" +
		"\x07$\x02\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0102\x03\x02\x02\x02\u0102\u0103\x072\x02\x02\u0103\u0106\x07\x03\x02" +
		"\x02\u0104\u0107\x05\x04\x03\x02\u0105\u0107\x072\x02\x02\u0106\u0104" +
		"\x03\x02\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02" +
		"\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03" +
		"\x02\x02\x02\u010A\u010C\x07\x04\x02\x02\u010B\xFD\x03\x02\x02\x02\u010B" +
		"\u0100\x03\x02\x02\x02\u010C\v\x03\x02\x02\x02\u010D\u010E\x072\x02\x02" +
		"\u010E\u0111\x07\x03\x02\x02\u010F\u0112\x05\x12\n\x02\u0110\u0112\x07" +
		"2\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0110\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02" +
		"\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x07\x04\x02\x02\u0116" +
		"\r\x03\x02\x02\x02\u0117\u0118\x05\x06\x04\x02\u0118\u0119\x07$\x02\x02" +
		"\u0119\u011B\x03\x02\x02\x02\u011A\u0117\x03\x02\x02\x02\u011A\u011B\x03" +
		"\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x05\x06\x04\x02\u011D" +
		"\x0F\x03\x02\x02\x02\u011E\u0123\x05\x12\n\x02\u011F\u0120\x07%\x02\x02" +
		"\u0120\u0122\x05\x12\n\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0125\x03" +
		"\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0128\x07%\x02" +
		"\x02\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\x11" +
		"\x03\x02\x02\x02\u0129\u012A\x05\x16\f\x02\u012A\u012B\x05\x06\x04\x02" +
		"\u012B\u012C\x05\n\x06\x02\u012C\u0135\x03\x02\x02\x02\u012D\u012E\x05" +
		"\x16\f\x02\u012E\u012F\x05\x06\x04\x02\u012F\u0135\x03\x02\x02\x02\u0130" +
		"\u0131\x05\x16\f\x02\u0131\u0132\x05\n\x06\x02\u0132\u0135\x03\x02\x02" +
		"\x02\u0133\u0135\x05\x16\f\x02\u0134\u0129\x03\x02\x02\x02\u0134\u012D" +
		"\x03\x02\x02\x02\u0134\u0130\x03\x02\x02\x02\u0134\u0133\x03\x02\x02\x02" +
		"\u0135\x13\x03\x02\x02\x02\u0136\u0137\t\x02\x02\x02\u0137\x15\x03\x02" +
		"\x02\x02\u0138\u0147\x071\x02\x02\u0139\u013A\x07*\x02\x02\u013A\u013F" +
		"\x05\x12\n\x02\u013B\u013C\x07%\x02\x02\u013C\u013E\x05\x12\n\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02" +
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141" +
		"\u013F\x03\x02\x02\x02\u0142\u0144\x07%\x02\x02\u0143\u0142\x03\x02\x02" +
		"\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146" +
		"\x07+\x02\x02\u0146\u0148\x03\x02\x02\x02\u0147\u0139\x03\x02\x02\x02" +
		"\u0147\u0148\x03\x02\x02\x02\u0148\x17\x03\x02\x02\x026\x1A\x1C\'+-59" +
		"LQXbekntx\x7F\x89\x8D\x8F\x98\x9C\x9E\xAA\xAE\xB0\xBA\xBE\xC0\xC8\xD4" +
		"\xD8\xDA\xE4\xE8\xEA\xF2\xF4\xFB\u0100\u0106\u0108\u010B\u0111\u0113\u011A" +
		"\u0123\u0127\u0134\u013F\u0143\u0147";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
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
export class ImportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public _expr!: ExprContext;
	public _members: ExprContext[] = [];
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForStatementContext extends StatementContext {
	public _value!: ParameterContext;
	public _index!: ParameterContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(XonParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileStatementContext extends StatementContext {
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DoWhileStatementContext extends StatementContext {
	public DO(): TerminalNode { return this.getToken(XonParser.DO, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public _thenBody!: BodyContext;
	public _elseBody!: BodyContext;
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public BREAK(): TerminalNode { return this.getToken(XonParser.BREAK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(XonParser.RETURN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExprContext;
	public _expect!: ExprContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ModelStatementContext extends StatementContext {
	public _name!: IdContext;
	public _base!: IdContext;
	public MODEL(): TerminalNode { return this.getToken(XonParser.MODEL, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectStatementContext extends StatementContext {
	public _name!: IdContext;
	public _base!: IdContext;
	public OBJECT(): TerminalNode { return this.getToken(XonParser.OBJECT, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FactoryStatementContext extends StatementContext {
	public _name!: IdContext;
	public FACTORY(): TerminalNode { return this.getToken(XonParser.FACTORY, 0); }
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public arrayItem(): ArrayItemContext[];
	public arrayItem(i: number): ArrayItemContext;
	public arrayItem(i?: number): ArrayItemContext | ArrayItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayItemContext);
		} else {
			return this.getRuleContext(i, ArrayItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExprContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexerExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExprContext) {
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
export class IntegerLiteralContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(XonParser.INTEGER_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(XonParser.FLOAT_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(XonParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RegexLiteralContext extends LiteralContext {
	public REGEX_LITERAL(): TerminalNode { return this.getToken(XonParser.REGEX_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
	public copyFrom(ctx: BodyContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleBodyContext extends BodyContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MultipleBodyContext extends BodyContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DefinitionBodyContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionBody; }
}


export class ArrayItemContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_arrayItem; }
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameters; }
}


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ModifierContext extends ParserRuleContext {
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(XonParser.TYPE, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLASS, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(XonParser.ENUM, 0); }
	public MODEL(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_modifier; }
}


export class IdContext extends ParserRuleContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public GENERIC_LEFT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GENERIC_LEFT, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public GENERIC_RIGHT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GENERIC_RIGHT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


