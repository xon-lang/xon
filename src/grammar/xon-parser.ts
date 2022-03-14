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
	public static readonly ACTUAL = 9;
	public static readonly BREAK = 10;
	public static readonly CONTINUE = 11;
	public static readonly DO = 12;
	public static readonly ELSE = 13;
	public static readonly EXPECT = 14;
	public static readonly EXPORT = 15;
	public static readonly FOR = 16;
	public static readonly IF = 17;
	public static readonly IMPORT = 18;
	public static readonly RETURN = 19;
	public static readonly WHILE = 20;
	public static readonly ASSIGN = 21;
	public static readonly COLON = 22;
	public static readonly COMMA = 23;
	public static readonly DOT = 24;
	public static readonly GENERIC_LEFT = 25;
	public static readonly GENERIC_RIGHT = 26;
	public static readonly LAMBDA = 27;
	public static readonly QUESTION = 28;
	public static readonly FLOAT_LITERAL = 29;
	public static readonly INTEGER_LITERAL = 30;
	public static readonly STRING_LITERAL = 31;
	public static readonly PREPROCESSOR = 32;
	public static readonly ID = 33;
	public static readonly OPERATOR = 34;
	public static readonly NL = 35;
	public static readonly WS = 36;
	public static readonly BLOCK_COMMENT = 37;
	public static readonly LINE_COMMENT = 38;
	public static readonly UNEXPECTED = 39;
	public static readonly LINE_JOINING = 40;
	public static readonly RULE_source = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_attribute = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_body = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_parameters = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "definition", "attribute", "statement", "expr", "literal", "body", 
		"parameter", "parameters",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'='", "':'", "','", 
		"'.'", "'<|'", "'|>'", "'=>'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"ASSIGN", "COLON", "COMMA", "DOT", "GENERIC_LEFT", "GENERIC_RIGHT", "LAMBDA", 
		"QUESTION", "FLOAT_LITERAL", "INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "OPERATOR", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED", 
		"LINE_JOINING",
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)) | (1 << (XonParser.NL - 32)))) !== 0)) {
				{
				this.state = 21;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 18;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 19;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 20;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 25;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			_localctx._modifier = this.match(XonParser.ID);
			this.state = 27;
			_localctx._name = this.match(XonParser.ID);
			this.state = 29;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 28;
				this.parameters();
				}
				break;
			}
			this.state = 32;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 31;
				this.expr(0);
				}
				break;
			}
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 34;
				this.match(XonParser.NL);
				this.state = 35;
				this.match(XonParser.INDENT);
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 38;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.ID:
						{
						this.state = 36;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 37;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 40;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID || _la === XonParser.NL);
				this.state = 42;
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			_localctx._name = this.match(XonParser.ID);
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 46;
				this.parameters();
				}
				break;
			}
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 49;
				this.expr(0);
				}
				break;
			}
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 52;
				this.body();
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.match(XonParser.IMPORT);
				this.state = 56;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 57;
					this.match(XonParser.COLON);
					this.state = 58;
					(_localctx as ImportStatementContext)._expr = this.expr(0);
					(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
					this.state = 63;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 59;
							this.match(XonParser.COMMA);
							this.state = 60;
							(_localctx as ImportStatementContext)._expr = this.expr(0);
							(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
							}
							}
						}
						this.state = 65;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					}
					this.state = 67;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						this.state = 66;
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
				this.state = 71;
				this.match(XonParser.EXPORT);
				this.state = 72;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.match(XonParser.FOR);
				this.state = 81;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 74;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 75;
						this.match(XonParser.COMMA);
						this.state = 76;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 79;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 83;
				this.expr(0);
				this.state = 84;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 86;
				this.match(XonParser.WHILE);
				this.state = 87;
				this.expr(0);
				this.state = 88;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 90;
				this.match(XonParser.DO);
				this.state = 91;
				this.body();
				this.state = 92;
				this.match(XonParser.WHILE);
				this.state = 93;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 95;
				this.match(XonParser.IF);
				this.state = 96;
				this.expr(0);
				this.state = 97;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 100;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 98;
					this.match(XonParser.ELSE);
					this.state = 99;
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
				this.state = 102;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 103;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 104;
				this.match(XonParser.RETURN);
				this.state = 106;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 108;
				this.match(XonParser.ACTUAL);
				this.state = 109;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 110;
					this.match(XonParser.NL);
					}
					}
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 115;
				this.match(XonParser.EXPECT);
				this.state = 116;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 118;
				this.expr(0);
				this.state = 119;
				this.match(XonParser.ASSIGN);
				this.state = 120;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 122;
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 126;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 127;
				this.match(XonParser.OPEN_BRACE);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 128;
					this.attribute();
					this.state = 133;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 129;
							this.match(XonParser.COMMA);
							this.state = 130;
							this.attribute();
							}
							}
						}
						this.state = 135;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					}
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 136;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 141;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 3:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 142;
				this.match(XonParser.OPEN_PAREN);
				this.state = 143;
				this.expr(0);
				this.state = 144;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 147;
				(_localctx as PrefixExpressionContext)._op = this.match(XonParser.OPERATOR);
				this.state = 148;
				this.expr(5);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 149;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.parameters();
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OPERATOR - 3)))) !== 0)) {
					{
					this.state = 151;
					(_localctx as MethodExpressionContext)._type = this.expr(0);
					}
				}

				this.state = 154;
				this.match(XonParser.LAMBDA);
				this.state = 155;
				(_localctx as MethodExpressionContext)._value = this.expr(2);
				}
				break;

			case 8:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 157;
				this.parameters();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 172;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 170;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 160;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 161;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.ID || _la === XonParser.OPERATOR)) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 162;
						(_localctx as InfixExpressionContext)._right = this.expr(5);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 163;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 164;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 165;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 166;
						this.match(XonParser.DOT);
						this.state = 167;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 168;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 169;
						this.parameters();
						}
						break;
					}
					}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
		this.enterRule(_localctx, 10, XonParser.RULE_literal);
		try {
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 177;
				this.match(XonParser.STRING_LITERAL);
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
		this.enterRule(_localctx, 12, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.match(XonParser.ASSIGN);
				this.state = 181;
				this.statement();
				}
				break;
			case XonParser.NL:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 182;
				this.match(XonParser.NL);
				this.state = 183;
				this.match(XonParser.INDENT);
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 186;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.CONTINUE:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.WHILE:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.OPERATOR:
						{
						this.state = 184;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 185;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 190;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			_localctx._name = this.expr(0);
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 194;
				_localctx._type = this.expr(0);
				}
				break;
			}
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ASSIGN) {
				{
				this.state = 197;
				this.match(XonParser.ASSIGN);
				this.state = 198;
				_localctx._value = this.expr(0);
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OPERATOR - 3)))) !== 0)) {
				{
				this.state = 202;
				this.parameter();
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 203;
						this.match(XonParser.COMMA);
						this.state = 204;
						this.parameter();
						}
						}
					}
					this.state = 209;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 210;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 215;
			this.match(XonParser.CLOSE_BRACKET);
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
		case 4:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\xDC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x07\x02\x18" +
		"\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x03\x03\x03\x03\x03\x05\x03 \n\x03" +
		"\x03\x03\x05\x03#\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03)\n\x03" +
		"\r\x03\x0E\x03*\x03\x03\x05\x03.\n\x03\x03\x04\x03\x04\x05\x042\n\x04" +
		"\x03\x04\x05\x045\n\x04\x03\x04\x05\x048\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x05@\n\x05\f\x05\x0E\x05C\v\x05\x03\x05\x05" +
		"\x05F\n\x05\x05\x05H\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05P\n\x05\x03\x05\x03\x05\x05\x05T\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05g\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05m\n\x05\x03\x05\x03\x05\x03\x05\x06\x05r\n" +
		"\x05\r\x05\x0E\x05s\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05~\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06\x86\n\x06\f\x06\x0E\x06\x89\v\x06\x03\x06\x05\x06\x8C\n\x06" +
		"\x05\x06\x8E\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x9B\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\xA1\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xAD\n\x06\f\x06\x0E" +
		"\x06\xB0\v\x06\x03\x07\x03\x07\x03\x07\x05\x07\xB5\n\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x06\b\xBD\n\b\r\b\x0E\b\xBE\x03\b\x05\b\xC2\n\b\x03" +
		"\t\x03\t\x05\t\xC6\n\t\x03\t\x03\t\x05\t\xCA\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\xD0\n\n\f\n\x0E\n\xD3\v\n\x03\n\x05\n\xD6\n\n\x05\n\xD8\n\n\x03" +
		"\n\x03\n\x03\n\x02\x02\x03\n\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x02\x03\x03\x02#$\x02\u0109\x02\x19\x03\x02\x02" +
		"\x02\x04\x1C\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b}\x03\x02\x02\x02\n" +
		"\xA0\x03\x02\x02\x02\f\xB4\x03\x02\x02\x02\x0E\xC1\x03\x02\x02\x02\x10" +
		"\xC3\x03\x02\x02\x02\x12\xCB\x03\x02\x02\x02\x14\x18\x05\x04\x03\x02\x15" +
		"\x18\x05\b\x05\x02\x16\x18\x07%\x02\x02\x17\x14\x03\x02\x02\x02\x17\x15" +
		"\x03\x02\x02\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19\x17" +
		"\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x03\x03\x02\x02\x02\x1B\x19" +
		"\x03\x02\x02\x02\x1C\x1D\x07#\x02\x02\x1D\x1F\x07#\x02\x02\x1E \x05\x12" +
		"\n\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02" +
		"!#\x05\n\x06\x02\"!\x03\x02\x02\x02\"#\x03\x02\x02\x02#-\x03\x02\x02\x02" +
		"$%\x07%\x02\x02%(\x07\x03\x02\x02&)\x05\x06\x04\x02\')\x07%\x02\x02(&" +
		"\x03\x02\x02\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x07\x04\x02\x02-$\x03\x02\x02\x02" +
		"-.\x03\x02\x02\x02.\x05\x03\x02\x02\x02/1\x07#\x02\x0202\x05\x12\n\x02" +
		"10\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0235\x05\n\x06\x02" +
		"43\x03\x02\x02\x0245\x03\x02\x02\x0257\x03\x02\x02\x0268\x05\x0E\b\x02" +
		"76\x03\x02\x02\x0278\x03\x02\x02\x028\x07\x03\x02\x02\x029:\x07\x14\x02" +
		"\x02:G\x05\n\x06\x02;<\x07\x18\x02\x02<A\x05\n\x06\x02=>\x07\x19\x02\x02" +
		">@\x05\n\x06\x02?=\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02" +
		"AB\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x07\x19\x02\x02" +
		"ED\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02G;\x03\x02\x02\x02" +
		"GH\x03\x02\x02\x02H~\x03\x02\x02\x02IJ\x07\x11\x02\x02J~\x05\n\x06\x02" +
		"KS\x07\x12\x02\x02LO\x05\x10\t\x02MN\x07\x19\x02\x02NP\x05\x10\t\x02O" +
		"M\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x07#\x02\x02R" +
		"T\x03\x02\x02\x02SL\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02" +
		"UV\x05\n\x06\x02VW\x05\x0E\b\x02W~\x03\x02\x02\x02XY\x07\x16\x02\x02Y" +
		"Z\x05\n\x06\x02Z[\x05\x0E\b\x02[~\x03\x02\x02\x02\\]\x07\x0E\x02\x02]" +
		"^\x05\x0E\b\x02^_\x07\x16\x02\x02_`\x05\n\x06\x02`~\x03\x02\x02\x02ab" +
		"\x07\x13\x02\x02bc\x05\n\x06\x02cf\x05\x0E\b\x02de\x07\x0F\x02\x02eg\x05" +
		"\x0E\b\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g~\x03\x02\x02\x02h~\x07" +
		"\f\x02\x02i~\x07\r\x02\x02jl\x07\x15\x02\x02km\x05\n\x06\x02lk\x03\x02" +
		"\x02\x02lm\x03\x02\x02\x02m~\x03\x02\x02\x02no\x07\v\x02\x02oq\x05\n\x06" +
		"\x02pr\x07%\x02\x02qp\x03\x02\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02" +
		"\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x07\x10\x02\x02vw\x05\n\x06" +
		"\x02w~\x03\x02\x02\x02xy\x05\n\x06\x02yz\x07\x17\x02\x02z{\x05\n\x06\x02" +
		"{~\x03\x02\x02\x02|~\x05\n\x06\x02}9\x03\x02\x02\x02}I\x03\x02\x02\x02" +
		"}K\x03\x02\x02\x02}X\x03\x02\x02\x02}\\\x03\x02\x02\x02}a\x03\x02\x02" +
		"\x02}h\x03\x02\x02\x02}i\x03\x02\x02\x02}j\x03\x02\x02\x02}n\x03\x02\x02" +
		"\x02}x\x03\x02\x02\x02}|\x03\x02\x02\x02~\t\x03\x02\x02\x02\x7F\x80\b" +
		"\x06\x01\x02\x80\xA1\x07\"\x02\x02\x81\x8D\x07\t\x02\x02\x82\x87\x05\x06" +
		"\x04\x02\x83\x84\x07\x19\x02\x02\x84\x86\x05\x06\x04\x02\x85\x83\x03\x02" +
		"\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02" +
		"\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8C\x07\x19" +
		"\x02\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02" +
		"\x02\x02\x8D\x82\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02" +
		"\x02\x02\x8F\xA1\x07\n\x02\x02\x90\x91\x07\x07\x02\x02\x91\x92\x05\n\x06" +
		"\x02\x92\x93\x07\b\x02\x02\x93\xA1\x03\x02\x02\x02\x94\xA1\x05\f\x07\x02" +
		"\x95\x96\x07$\x02\x02\x96\xA1\x05\n\x06\x07\x97\xA1\x07#\x02\x02\x98\x9A" +
		"\x05\x12\n\x02\x99\x9B\x05\n\x06\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03" +
		"\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x07\x1D\x02\x02\x9D\x9E\x05" +
		"\n\x06\x04\x9E\xA1\x03\x02\x02\x02\x9F\xA1\x05\x12\n\x02\xA0\x7F\x03\x02" +
		"\x02\x02\xA0\x81\x03\x02\x02\x02\xA0\x90\x03\x02\x02\x02\xA0\x94\x03\x02" +
		"\x02\x02\xA0\x95\x03\x02\x02\x02\xA0\x97\x03\x02\x02\x02\xA0\x98\x03\x02" +
		"\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\xAE\x03\x02\x02\x02\xA2\xA3\f\x06" +
		"\x02\x02\xA3\xA4\t\x02\x02\x02\xA4\xAD\x05\n\x06\x07\xA5\xA6\f\n\x02\x02" +
		"\xA6\xAD\x07\x1E\x02\x02\xA7\xA8\f\t\x02\x02\xA8\xA9\x07\x1A\x02\x02\xA9" +
		"\xAD\x07#\x02\x02\xAA\xAB\f\b\x02\x02\xAB\xAD\x05\x12\n\x02\xAC\xA2\x03" +
		"\x02\x02\x02\xAC\xA5\x03\x02\x02\x02\xAC\xA7\x03\x02\x02\x02\xAC\xAA\x03" +
		"\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03" +
		"\x02\x02\x02\xAF\v\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB5\x07" +
		" \x02\x02\xB2\xB5\x07\x1F\x02\x02\xB3\xB5\x07!\x02\x02\xB4\xB1\x03\x02" +
		"\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\r\x03\x02" +
		"\x02\x02\xB6\xB7\x07\x17\x02\x02\xB7\xC2\x05\b\x05\x02\xB8\xB9\x07%\x02" +
		"\x02\xB9\xBC\x07\x03\x02\x02\xBA\xBD\x05\b\x05\x02\xBB\xBD\x07%\x02\x02" +
		"\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02" +
		"\xC0\xC2\x07\x04\x02\x02\xC1\xB6\x03\x02\x02\x02\xC1\xB8\x03\x02\x02\x02" +
		"\xC2\x0F\x03\x02\x02\x02\xC3\xC5\x05\n\x06\x02\xC4\xC6\x05\n\x06\x02\xC5" +
		"\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7" +
		"\xC8\x07\x17\x02\x02\xC8\xCA\x05\n\x06\x02\xC9\xC7\x03\x02\x02\x02\xC9" +
		"\xCA\x03\x02\x02\x02\xCA\x11\x03\x02\x02\x02\xCB\xD7\x07\x05\x02\x02\xCC" +
		"\xD1\x05\x10\t\x02\xCD\xCE\x07\x19\x02\x02\xCE\xD0\x05\x10\t\x02\xCF\xCD" +
		"\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2" +
		"\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD6" +
		"\x07\x19\x02\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8" +
		"\x03\x02\x02\x02\xD7\xCC\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9" +
		"\x03\x02\x02\x02\xD9\xDA\x07\x06\x02\x02\xDA\x13\x03\x02\x02\x02%\x17" +
		"\x19\x1F\"(*-147AEGOSfls}\x87\x8B\x8D\x9A\xA0\xAC\xAE\xB4\xBC\xBE\xC1" +
		"\xC5\xC9\xD1\xD5\xD7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
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


export class DefinitionContext extends ParserRuleContext {
	public _modifier!: Token;
	public _name!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
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
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class AttributeContext extends ParserRuleContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
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
	public get ruleIndex(): number { return XonParser.RULE_attribute; }
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
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
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
export class ContinueStatementContext extends StatementContext {
	public CONTINUE(): TerminalNode { return this.getToken(XonParser.CONTINUE, 0); }
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
export class AssignmentStatementContext extends StatementContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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
export class PreprocessorExpressionContext extends ExprContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExprContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
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
export class GroupExpressionContext extends ExprContext {
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
export class LiteralExpressionContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
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
	public _name!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
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
	public OPERATOR(): TerminalNode { return this.getToken(XonParser.OPERATOR, 0); }
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
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPERATOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExprContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExprContext {
	public _type!: ExprContext;
	public _value!: ExprContext;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExprContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
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
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
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


export class ParameterContext extends ParserRuleContext {
	public _name!: ExprContext;
	public _type!: ExprContext;
	public _value!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ParametersContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
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


