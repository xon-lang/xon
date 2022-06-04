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
	public static readonly MODEL = 21;
	public static readonly OBJECT = 22;
	public static readonly AND = 23;
	public static readonly AS = 24;
	public static readonly IS = 25;
	public static readonly OR = 26;
	public static readonly ASSIGN = 27;
	public static readonly COMMA = 28;
	public static readonly QUESTION = 29;
	public static readonly DOT = 30;
	public static readonly COLON = 31;
	public static readonly LAMBDA = 32;
	public static readonly FLOAT_LITERAL = 33;
	public static readonly INTEGER_LITERAL = 34;
	public static readonly STRING_LITERAL = 35;
	public static readonly PREPROCESSOR = 36;
	public static readonly ID = 37;
	public static readonly OP = 38;
	public static readonly NL = 39;
	public static readonly WS = 40;
	public static readonly BLOCK_COMMENT = 41;
	public static readonly LINE_COMMENT = 42;
	public static readonly UNEXPECTED = 43;
	public static readonly LINE_JOINING = 44;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_parameter = 5;
	public static readonly RULE_parameters = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_arguments = 8;
	public static readonly RULE_body = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expression", "literal", "definition", "parameter", 
		"parameters", "argument", "arguments", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'model'", "'object'", 
		"'and'", "'as'", "'is'", "'or'", "'='", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"MODEL", "OBJECT", "AND", "AS", "IS", "OR", "ASSIGN", "COMMA", "QUESTION", 
		"DOT", "COLON", "LAMBDA", "FLOAT_LITERAL", "INTEGER_LITERAL", "STRING_LITERAL", 
		"PREPROCESSOR", "ID", "OP", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", 
		"UNEXPECTED", "LINE_JOINING",
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
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.MODEL) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.OP - 33)) | (1 << (XonParser.NL - 33)))) !== 0)) {
				{
				this.state = 22;
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
				case XonParser.MODEL:
				case XonParser.OBJECT:
				case XonParser.FLOAT_LITERAL:
				case XonParser.INTEGER_LITERAL:
				case XonParser.STRING_LITERAL:
				case XonParser.PREPROCESSOR:
				case XonParser.ID:
				case XonParser.OP:
					{
					this.state = 20;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 21;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 26;
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
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new DefinitionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 27;
				this.definition();
				}
				break;

			case 2:
				_localctx = new OperatorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 28;
				(_localctx as OperatorStatementContext)._modifier = this.match(XonParser.ID);
				this.state = 29;
				(_localctx as OperatorStatementContext)._name = this.match(XonParser.OP);
				this.state = 31;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 30;
					(_localctx as OperatorStatementContext)._type = this.expression(0);
					}
					break;
				}
				this.state = 34;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 33;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.match(XonParser.EXPORT);
				this.state = 37;
				(_localctx as ExportStatementContext)._path = this.expression(0);
				}
				break;

			case 4:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 38;
				this.match(XonParser.FOR);
				this.state = 46;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 39;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 42;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 40;
						this.match(XonParser.COMMA);
						this.state = 41;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 44;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 48;
				this.expression(0);
				this.state = 49;
				this.body();
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 51;
				this.match(XonParser.WHILE);
				this.state = 52;
				this.expression(0);
				this.state = 53;
				this.body();
				}
				break;

			case 6:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 55;
				this.match(XonParser.DO);
				this.state = 56;
				this.body();
				this.state = 57;
				this.match(XonParser.WHILE);
				this.state = 58;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 60;
				this.match(XonParser.IF);
				this.state = 61;
				this.expression(0);
				this.state = 62;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 65;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 63;
					this.match(XonParser.ELSE);
					this.state = 64;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 67;
				this.match(XonParser.BREAK);
				}
				break;

			case 9:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 68;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 10:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 69;
				this.match(XonParser.RETURN);
				this.state = 71;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 70;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 11:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 73;
				this.match(XonParser.ACTUAL);
				this.state = 74;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 75;
					this.match(XonParser.NL);
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 80;
				this.match(XonParser.EXPECT);
				this.state = 81;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 12:
				_localctx = new ParameterStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 83;
				this.parameter();
				}
				break;

			case 13:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 84;
				this.expression(0);
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
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 88;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 89;
				this.match(XonParser.OPEN_PAREN);
				this.state = 90;
				this.expression(0);
				this.state = 91;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 93;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 94;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.IMPORT || _la === XonParser.OP)) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 95;
				this.expression(5);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 96;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 97;
				this.parameters();
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.OP - 33)))) !== 0)) {
					{
					this.state = 98;
					(_localctx as MethodExpressionContext)._type = this.expression(0);
					}
				}

				this.state = 101;
				this.match(XonParser.LAMBDA);
				this.state = 102;
				(_localctx as MethodExpressionContext)._value = this.expression(2);
				}
				break;

			case 7:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 117;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 107;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 108;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (XonParser.AND - 23)) | (1 << (XonParser.AS - 23)) | (1 << (XonParser.IS - 23)) | (1 << (XonParser.OR - 23)) | (1 << (XonParser.OP - 23)))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 109;
						(_localctx as InfixExpressionContext)._right = this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 110;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 111;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 112;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 113;
						this.match(XonParser.DOT);
						this.state = 114;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 115;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 116;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
			this.state = 125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			_localctx._modifier = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === XonParser.MODEL || _la === XonParser.OBJECT)) {
				_localctx._modifier = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 128;
			_localctx._name = this.match(XonParser.ID);
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 129;
				this.parameters();
				}
				break;
			}
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 132;
				this.match(XonParser.IS);
				this.state = 133;
				this.expression(0);
				}
			}

			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 136;
				this.match(XonParser.NL);
				this.state = 137;
				this.match(XonParser.INDENT);
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 140;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ID:
						{
						this.state = 138;
						this.parameter();
						}
						break;
					case XonParser.NL:
						{
						this.state = 139;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
				this.state = 144;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 166;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				_localctx._name = this.match(XonParser.ID);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 148;
					this.match(XonParser.COLON);
					this.state = 150;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						this.state = 149;
						_localctx._type = this.expression(0);
						}
						break;
					}
					}
				}

				this.state = 155;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 154;
					this.body();
					}
					break;
				}
				}
				break;
			case XonParser.OPEN_BRACKET:
			case XonParser.OPEN_PAREN:
			case XonParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.parameters();
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 158;
					this.match(XonParser.COLON);
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.OP - 33)))) !== 0)) {
						{
						this.state = 159;
						_localctx._type = this.expression(0);
						}
					}

					}
				}

				this.state = 164;
				this.body();
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			_localctx._open = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0))) {
				_localctx._open = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.ID) {
				{
				this.state = 169;
				this.parameter();
				this.state = 174;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 170;
						this.match(XonParser.COMMA);
						this.state = 171;
						this.parameter();
						}
						}
					}
					this.state = 176;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 177;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 182;
			_localctx._close = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0))) {
				_localctx._close = this._errHandler.recoverInline(this);
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 184;
				_localctx._name = this.match(XonParser.ID);
				this.state = 185;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 188;
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			_localctx._open = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0))) {
				_localctx._open = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.OP - 33)))) !== 0)) {
				{
				this.state = 191;
				this.argument();
				this.state = 196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 192;
						this.match(XonParser.COMMA);
						this.state = 193;
						this.argument();
						}
						}
					}
					this.state = 198;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 199;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 204;
			_localctx._close = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0))) {
				_localctx._close = this._errHandler.recoverInline(this);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.match(XonParser.ASSIGN);
				this.state = 207;
				this.statement();
				}
				break;
			case XonParser.NL:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 208;
				this.match(XonParser.NL);
				this.state = 209;
				this.match(XonParser.INDENT);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 212;
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
					case XonParser.MODEL:
					case XonParser.OBJECT:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.OP:
						{
						this.state = 210;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 211;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.MODEL) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.ID - 33)) | (1 << (XonParser.OP - 33)) | (1 << (XonParser.NL - 33)))) !== 0));
				this.state = 216;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\xDE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x07\x02" +
		"\x19\n\x02\f\x02\x0E\x02\x1C\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\"\n\x03\x03\x03\x05\x03%\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03-\n\x03\x03\x03\x03\x03\x05\x031\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03D\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03\x03\x03\x03\x03\x03\x03\x06" +
		"\x03O\n\x03\r\x03\x0E\x03P\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03X\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04f\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04l\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04x\n\x04\f\x04\x0E\x04{\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\x80\n\x05\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\x85\n\x06\x03\x06\x03\x06\x05\x06\x89\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x06\x06\x8F\n\x06\r\x06\x0E\x06\x90\x03\x06\x05\x06\x94\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\x99\n\x07\x05\x07\x9B\n\x07\x03\x07\x05" +
		"\x07\x9E\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xA3\n\x07\x05\x07\xA5\n" +
		"\x07\x03\x07\x03\x07\x05\x07\xA9\n\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xAF" +
		"\n\b\f\b\x0E\b\xB2\v\b\x03\b\x05\b\xB5\n\b\x05\b\xB7\n\b\x03\b\x03\b\x03" +
		"\t\x03\t\x05\t\xBD\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\xC5\n" +
		"\n\f\n\x0E\n\xC8\v\n\x03\n\x05\n\xCB\n\n\x05\n\xCD\n\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\xD7\n\v\r\v\x0E\v\xD8\x03\v\x05" +
		"\v\xDC\n\v\x03\v\x02\x02\x03\x06\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x07\x04\x02\x14\x14((\x04\x02" +
		"\x19\x1C((\x03\x02\x17\x18\x05\x02\x05\x05\x07\x07\t\t\x05\x02\x06\x06" +
		"\b\b\n\n\x02\u010A\x02\x1A\x03\x02\x02\x02\x04W\x03\x02\x02\x02\x06k\x03" +
		"\x02\x02\x02\b\x7F\x03\x02\x02\x02\n\x81\x03\x02\x02\x02\f\xA8\x03\x02" +
		"\x02\x02\x0E\xAA\x03\x02\x02\x02\x10\xBC\x03\x02\x02\x02\x12\xC0\x03\x02" +
		"\x02\x02\x14\xDB\x03\x02\x02\x02\x16\x19\x05\x04\x03\x02\x17\x19\x07)" +
		"\x02\x02\x18\x16\x03\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x1C\x03\x02" +
		"\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x03\x03\x02" +
		"\x02\x02\x1C\x1A\x03\x02\x02\x02\x1DX\x05\n\x06\x02\x1E\x1F\x07\'\x02" +
		"\x02\x1F!\x07(\x02\x02 \"\x05\x06\x04\x02! \x03\x02\x02\x02!\"\x03\x02" +
		"\x02\x02\"$\x03\x02\x02\x02#%\x05\x14\v\x02$#\x03\x02\x02\x02$%\x03\x02" +
		"\x02\x02%X\x03\x02\x02\x02&\'\x07\x11\x02\x02\'X\x05\x06\x04\x02(0\x07" +
		"\x12\x02\x02),\x05\f\x07\x02*+\x07\x1E\x02\x02+-\x05\f\x07\x02,*\x03\x02" +
		"\x02\x02,-\x03\x02\x02\x02-.\x03\x02\x02\x02./\x07\'\x02\x02/1\x03\x02" +
		"\x02\x020)\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x0223\x05\x06" +
		"\x04\x0234\x05\x14\v\x024X\x03\x02\x02\x0256\x07\x16\x02\x0267\x05\x06" +
		"\x04\x0278\x05\x14\v\x028X\x03\x02\x02\x029:\x07\x0E\x02\x02:;\x05\x14" +
		"\v\x02;<\x07\x16\x02\x02<=\x05\x06\x04\x02=X\x03\x02\x02\x02>?\x07\x13" +
		"\x02\x02?@\x05\x06\x04\x02@C\x05\x14\v\x02AB\x07\x0F\x02\x02BD\x05\x14" +
		"\v\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DX\x03\x02\x02\x02EX\x07\f\x02" +
		"\x02FX\x07\r\x02\x02GI\x07\x15\x02\x02HJ\x05\x06\x04\x02IH\x03\x02\x02" +
		"\x02IJ\x03\x02\x02\x02JX\x03\x02\x02\x02KL\x07\v\x02\x02LN\x05\x06\x04" +
		"\x02MO\x07)\x02\x02NM\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02" +
		"\x02PQ\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x07\x10\x02\x02ST\x05\x06\x04" +
		"\x02TX\x03\x02\x02\x02UX\x05\f\x07\x02VX\x05\x06\x04\x02W\x1D\x03\x02" +
		"\x02\x02W\x1E\x03\x02\x02\x02W&\x03\x02\x02\x02W(\x03\x02\x02\x02W5\x03" +
		"\x02\x02\x02W9\x03\x02\x02\x02W>\x03\x02\x02\x02WE\x03\x02\x02\x02WF\x03" +
		"\x02\x02\x02WG\x03\x02\x02\x02WK\x03\x02\x02\x02WU\x03\x02\x02\x02WV\x03" +
		"\x02\x02\x02X\x05\x03\x02\x02\x02YZ\b\x04\x01\x02Zl\x07&\x02\x02[\\\x07" +
		"\x07\x02\x02\\]\x05\x06\x04\x02]^\x07\b\x02\x02^l\x03\x02\x02\x02_l\x05" +
		"\x12\n\x02`a\t\x02\x02\x02al\x05\x06\x04\x07bl\x07\'\x02\x02ce\x05\x0E" +
		"\b\x02df\x05\x06\x04\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02" +
		"\x02\x02gh\x07\"\x02\x02hi\x05\x06\x04\x04il\x03\x02\x02\x02jl\x05\b\x05" +
		"\x02kY\x03\x02\x02\x02k[\x03\x02\x02\x02k_\x03\x02\x02\x02k`\x03\x02\x02" +
		"\x02kb\x03\x02\x02\x02kc\x03\x02\x02\x02kj\x03\x02\x02\x02ly\x03\x02\x02" +
		"\x02mn\f\x06\x02\x02no\t\x03\x02\x02ox\x05\x06\x04\x07pq\f\n\x02\x02q" +
		"x\x07\x1F\x02\x02rs\f\t\x02\x02st\x07 \x02\x02tx\x07\'\x02\x02uv\f\b\x02" +
		"\x02vx\x05\x12\n\x02wm\x03\x02\x02\x02wp\x03\x02\x02\x02wr\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02" +
		"\x02z\x07\x03\x02\x02\x02{y\x03\x02\x02\x02|\x80\x07$\x02\x02}\x80\x07" +
		"#\x02\x02~\x80\x07%\x02\x02\x7F|\x03\x02\x02\x02\x7F}\x03\x02\x02\x02" +
		"\x7F~\x03\x02\x02\x02\x80\t\x03\x02\x02\x02\x81\x82\t\x04\x02\x02\x82" +
		"\x84\x07\'\x02\x02\x83\x85\x05\x0E\b\x02\x84\x83\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x87\x07\x1B\x02\x02\x87\x89" +
		"\x05\x06\x04\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x93" +
		"\x03\x02\x02\x02\x8A\x8B\x07)\x02\x02\x8B\x8E\x07\x03\x02\x02\x8C\x8F" +
		"\x05\f\x07\x02\x8D\x8F\x07)\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8D\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03" +
		"\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94\x07\x04\x02\x02\x93\x8A\x03" +
		"\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\v\x03\x02\x02\x02\x95\x9A\x07" +
		"\'\x02\x02\x96\x98\x07!\x02\x02\x97\x99\x05\x06\x04\x02\x98\x97\x03\x02" +
		"\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x96\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9E\x05\x14" +
		"\v\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA9\x03\x02" +
		"\x02\x02\x9F\xA4\x05\x0E\b\x02\xA0\xA2\x07!\x02\x02\xA1\xA3\x05\x06\x04" +
		"\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02" +
		"\x02\xA4\xA0\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02" +
		"\x02\xA6\xA7\x05\x14\v\x02\xA7\xA9\x03\x02\x02\x02\xA8\x95\x03\x02\x02" +
		"\x02\xA8\x9F\x03\x02\x02\x02\xA9\r\x03\x02\x02\x02\xAA\xB6\t\x05\x02\x02" +
		"\xAB\xB0\x05\f\x07\x02\xAC\xAD\x07\x1E\x02\x02\xAD\xAF\x05\f\x07\x02\xAE" +
		"\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0" +
		"\xB1\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3" +
		"\xB5\x07\x1E\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5" +
		"\xB7\x03\x02\x02\x02\xB6\xAB\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\xB8\x03\x02\x02\x02\xB8\xB9\t\x06\x02\x02\xB9\x0F\x03\x02\x02\x02\xBA" +
		"\xBB\x07\'\x02\x02\xBB\xBD\x07!\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x05\x06\x04\x02\xBF\x11" +
		"\x03\x02\x02\x02\xC0\xCC\t\x05\x02\x02\xC1\xC6\x05\x10\t\x02\xC2\xC3\x07" +
		"\x1E\x02\x02\xC3\xC5\x05\x10\t\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC8\x03" +
		"\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xCA\x03" +
		"\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCB\x07\x1E\x02\x02\xCA\xC9\x03" +
		"\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xC1\x03" +
		"\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\t" +
		"\x06\x02\x02\xCF\x13\x03\x02\x02\x02\xD0\xD1\x07\x1D\x02\x02\xD1\xDC\x05" +
		"\x04\x03\x02\xD2\xD3\x07)\x02\x02\xD3\xD6\x07\x03\x02\x02\xD4\xD7\x05" +
		"\x04\x03\x02\xD5\xD7\x07)\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5\x03" +
		"\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03" +
		"\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDC\x07\x04\x02\x02\xDB\xD0\x03" +
		"\x02\x02\x02\xDB\xD2\x03\x02\x02\x02\xDC\x15\x03\x02\x02\x02&\x18\x1A" +
		"!$,0CIPWekwy\x7F\x84\x88\x8E\x90\x93\x98\x9A\x9D\xA2\xA4\xA8\xB0\xB4\xB6" +
		"\xBC\xC6\xCA\xCC\xD6\xD8\xDB";
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
export class DefinitionStatementContext extends StatementContext {
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorStatementContext extends StatementContext {
	public _modifier!: Token;
	public _name!: Token;
	public _type!: ExpressionContext;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OP(): TerminalNode { return this.getToken(XonParser.OP, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public _path!: ExpressionContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExpressionContext;
	public _expect!: ExpressionContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
export class ParameterStatementContext extends StatementContext {
	public parameter(): ParameterContext {
		return this.getRuleContext(0, ParameterContext);
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
export class PreprocessorExpressionContext extends ExpressionContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class GroupExpressionContext extends ExpressionContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(XonParser.IMPORT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OR, 0); }
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExpressionContext {
	public _type!: ExpressionContext;
	public _value!: ExpressionContext;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
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
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
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


export class DefinitionContext extends ParserRuleContext {
	public _modifier!: Token;
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public MODEL(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODEL, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class ParameterContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: ExpressionContext;
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ParametersContext extends ParserRuleContext {
	public _open!: Token;
	public _close!: Token;
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
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


export class ArgumentContext extends ParserRuleContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class ArgumentsContext extends ParserRuleContext {
	public _open!: Token;
	public _close!: Token;
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
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
	public get ruleIndex(): number { return XonParser.RULE_arguments; }
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


