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
	public static readonly COMMA = 22;
	public static readonly META = 23;
	public static readonly COLON = 24;
	public static readonly QUESTION = 25;
	public static readonly DOT = 26;
	public static readonly LAMBDA = 27;
	public static readonly FLOAT_LITERAL = 28;
	public static readonly INTEGER_LITERAL = 29;
	public static readonly STRING_LITERAL = 30;
	public static readonly PREPROCESSOR = 31;
	public static readonly ID = 32;
	public static readonly LESS = 33;
	public static readonly GREAT = 34;
	public static readonly OP = 35;
	public static readonly NL = 36;
	public static readonly LINE_COMMENT = 37;
	public static readonly WS = 38;
	public static readonly BLOCK_COMMENT = 39;
	public static readonly LINE_JOINING = 40;
	public static readonly UNEXPECTED = 41;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_parameters = 4;
	public static readonly RULE_parameter = 5;
	public static readonly RULE_valueBody = 6;
	public static readonly RULE_valueType = 7;
	public static readonly RULE_arguments = 8;
	public static readonly RULE_argument = 9;
	public static readonly RULE_open = 10;
	public static readonly RULE_close = 11;
	public static readonly RULE_body = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expression", "literal", "parameters", "parameter", 
		"valueBody", "valueType", "arguments", "argument", "open", "close", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'='", "','", "'::'", 
		"':'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'<'", "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"ASSIGN", "COMMA", "META", "COLON", "QUESTION", "DOT", "LAMBDA", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "LESS", "GREAT", 
		"OP", "NL", "LINE_COMMENT", "WS", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
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
			let _alt: number;
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.match(XonParser.NL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 27;
					this.match(XonParser.NL);
					}
				}

				this.state = 35;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 30;
						this.statement();
						this.state = 31;
						_localctx._NL = this.match(XonParser.NL);
						_localctx._nl.push(_localctx._NL);
						}
						}
					}
					this.state = 37;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				this.state = 38;
				this.statement();
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 39;
					this.match(XonParser.NL);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				(_localctx as CommentStatementContext)._value = this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.match(XonParser.EXPORT);
				this.state = 46;
				(_localctx as ExportStatementContext)._path = this.expression(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.match(XonParser.FOR);
				this.state = 52;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						this.state = 48;
						this.parameter();
						}
						break;
					}
					this.state = 51;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 54;
				this.expression(0);
				this.state = 55;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 57;
				this.match(XonParser.WHILE);
				this.state = 58;
				this.expression(0);
				this.state = 59;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 61;
				this.match(XonParser.DO);
				this.state = 62;
				this.body();
				this.state = 63;
				this.match(XonParser.WHILE);
				this.state = 64;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 66;
				this.match(XonParser.IF);
				this.state = 67;
				this.expression(0);
				this.state = 68;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 69;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 74;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 75;
					this.match(XonParser.ELSE);
					this.state = 76;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
				}

				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 79;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 80;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 81;
				this.match(XonParser.RETURN);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.COLON) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
					{
					this.state = 82;
					this.expression(0);
					}
				}

				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 85;
				this.match(XonParser.ACTUAL);
				this.state = 86;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 87;
					this.match(XonParser.NL);
					}
					}
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 93;
				this.match(XonParser.EXPECT);
				this.state = 94;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 11:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 96;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 97;
				this.parameter();
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
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 101;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 102;
				this.match(XonParser.OPEN_PAREN);
				this.state = 103;
				this.expression(0);
				this.state = 104;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 106;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.LESS - 3)))) !== 0)) {
					{
					{
					this.state = 107;
					this.parameters();
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 113;
					this.valueType();
					}
				}

				this.state = 116;
				this.match(XonParser.LAMBDA);
				this.state = 117;
				this.expression(4);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
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
				this.state = 119;
				this.expression(3);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 121;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 143;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 141;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 124;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 125;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.GREAT - 33)) | (1 << (XonParser.OP - 33)))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 126;
						(_localctx as InfixExpressionContext)._right = this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 127;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 128;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 129;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 130;
						this.match(XonParser.DOT);
						this.state = 132;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
						case 1:
							{
							this.state = 131;
							(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 4:
						{
						_localctx = new MetaExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 134;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 135;
						this.match(XonParser.META);
						this.state = 137;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
						case 1:
							{
							this.state = 136;
							(_localctx as MetaExpressionContext)._name = this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 5:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 139;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 140;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 147;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 148;
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.open();
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 152;
				this.parameter();
				this.state = 157;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 153;
						this.match(XonParser.COMMA);
						this.state = 154;
						this.parameter();
						}
						}
					}
					this.state = 159;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 160;
					this.match(XonParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 165;
			this.close();
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
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 167;
				_localctx._destructure = this.parameters();
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 168;
					this.valueType();
					}
				}

				this.state = 172;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 171;
					this.valueBody();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 174;
					_localctx._modifier = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 177;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.OP - 32)))) !== 0))) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.LESS - 3)))) !== 0)) {
					{
					{
					this.state = 178;
					_localctx._parameters = this.parameters();
					_localctx._params.push(_localctx._parameters);
					}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 184;
					this.valueType();
					}
				}

				this.state = 188;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 187;
					this.valueBody();
					}
					break;
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
	public valueBody(): ValueBodyContext {
		let _localctx: ValueBodyContext = new ValueBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_valueBody);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.match(XonParser.ASSIGN);
				this.state = 194;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 193;
					_localctx._value = this.expression(0);
					}
					break;
				}
				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
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
	public valueType(): ValueTypeContext {
		let _localctx: ValueTypeContext = new ValueTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_valueType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(XonParser.COLON);
			this.state = 201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 200;
				_localctx._type = this.expression(0);
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.open();
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.COLON) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
				{
				this.state = 204;
				this.argument();
				this.state = 209;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 205;
						this.match(XonParser.COMMA);
						this.state = 206;
						this.argument();
						}
						}
					}
					this.state = 211;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 212;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 217;
			this.close();
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 219;
				_localctx._name = this.match(XonParser.ID);
				this.state = 220;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 223;
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
	public open(): OpenContext {
		let _localctx: OpenContext = new OpenContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_open);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.LESS - 3)))) !== 0))) {
				_localctx._name = this._errHandler.recoverInline(this);
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
	public close(): CloseContext {
		let _localctx: CloseContext = new CloseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_close);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (XonParser.CLOSE_BRACKET - 4)) | (1 << (XonParser.CLOSE_PAREN - 4)) | (1 << (XonParser.CLOSE_BRACE - 4)) | (1 << (XonParser.GREAT - 4)))) !== 0))) {
				_localctx._name = this._errHandler.recoverInline(this);
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
		this.enterRule(_localctx, 24, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(XonParser.NL);
			this.state = 230;
			this.match(XonParser.INDENT);
			this.state = 231;
			this.source();
			this.state = 232;
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
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xED\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x05\x02\x1F\n\x02\x03\x02\x03\x02\x03\x02\x07" +
		"\x02$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x02\x03\x02\x05\x02+\n\x02\x05\x02" +
		"-\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x03" +
		"\x05\x037\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03I\n\x03\f\x03\x0E\x03L\v\x03\x03\x03\x03\x03\x05\x03P\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03V\n\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03[\n\x03\f\x03\x0E\x03^\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03e\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04o\n\x04\f\x04\x0E\x04r\v\x04\x03\x04\x05\x04u\n\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04}\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x87\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\x8C\n\x04\x03\x04\x03\x04\x07\x04\x90" +
		"\n\x04\f\x04\x0E\x04\x93\v\x04\x03\x05\x03\x05\x03\x05\x05\x05\x98\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x9E\n\x06\f\x06\x0E\x06\xA1\v" +
		"\x06\x03\x06\x05\x06\xA4\n\x06\x05\x06\xA6\n\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x05\x07\xAC\n\x07\x03\x07\x05\x07\xAF\n\x07\x03\x07\x05\x07\xB2" +
		"\n\x07\x03\x07\x03\x07\x07\x07\xB6\n\x07\f\x07\x0E\x07\xB9\v\x07\x03\x07" +
		"\x05\x07\xBC\n\x07\x03\x07\x05\x07\xBF\n\x07\x05\x07\xC1\n\x07\x03\b\x03" +
		"\b\x05\b\xC5\n\b\x03\b\x05\b\xC8\n\b\x03\t\x03\t\x05\t\xCC\n\t\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\xD2\n\n\f\n\x0E\n\xD5\v\n\x03\n\x05\n\xD8\n\n\x05" +
		"\n\xDA\n\n\x03\n\x03\n\x03\v\x03\v\x05\v\xE0\n\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x02\x02" +
		"\x03\x06\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x07\x04\x02\x14\x14%%\x03" +
		"\x02#%\x03\x02\"%\x06\x02\x05\x05\x07\x07\t\t##\x06\x02\x06\x06\b\b\n" +
		"\n$$\x02\u0116\x02,\x03\x02\x02\x02\x04d\x03\x02\x02\x02\x06|\x03\x02" +
		"\x02\x02\b\x97\x03\x02\x02\x02\n\x99\x03\x02\x02\x02\f\xC0\x03\x02\x02" +
		"\x02\x0E\xC7\x03\x02\x02\x02\x10\xC9\x03\x02\x02\x02\x12\xCD\x03\x02\x02" +
		"\x02\x14\xDF\x03\x02\x02\x02\x16\xE3\x03\x02\x02\x02\x18\xE5\x03\x02\x02" +
		"\x02\x1A\xE7\x03\x02\x02\x02\x1C-\x07&\x02\x02\x1D\x1F\x07&\x02\x02\x1E" +
		"\x1D\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F%\x03\x02\x02\x02 !\x05" +
		"\x04\x03\x02!\"\x07&\x02\x02\"$\x03\x02\x02\x02# \x03\x02\x02\x02$\'\x03" +
		"\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&(\x03\x02\x02\x02\'%" +
		"\x03\x02\x02\x02(*\x05\x04\x03\x02)+\x07&\x02\x02*)\x03\x02\x02\x02*+" +
		"\x03\x02\x02\x02+-\x03\x02\x02\x02,\x1C\x03\x02\x02\x02,\x1E\x03\x02\x02" +
		"\x02-\x03\x03\x02\x02\x02.e\x07\'\x02\x02/0\x07\x11\x02\x020e\x05\x06" +
		"\x04\x0216\x07\x12\x02\x0224\x05\f\x07\x0232\x03\x02\x02\x0234\x03\x02" +
		"\x02\x0245\x03\x02\x02\x0257\x07\"\x02\x0263\x03\x02\x02\x0267\x03\x02" +
		"\x02\x0278\x03\x02\x02\x0289\x05\x06\x04\x029:\x05\x1A\x0E\x02:e\x03\x02" +
		"\x02\x02;<\x07\x16\x02\x02<=\x05\x06\x04\x02=>\x05\x1A\x0E\x02>e\x03\x02" +
		"\x02\x02?@\x07\x0E\x02\x02@A\x05\x1A\x0E\x02AB\x07\x16\x02\x02BC\x05\x06" +
		"\x04\x02Ce\x03\x02\x02\x02DE\x07\x13\x02\x02EF\x05\x06\x04\x02FJ\x05\x1A" +
		"\x0E\x02GI\x07&\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02" +
		"\x02\x02JK\x03\x02\x02\x02KO\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x0F" +
		"\x02\x02NP\x05\x1A\x0E\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02Pe\x03\x02" +
		"\x02\x02Qe\x07\f\x02\x02Re\x07\r\x02\x02SU\x07\x15\x02\x02TV\x05\x06\x04" +
		"\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02Ve\x03\x02\x02\x02WX\x07\v\x02" +
		"\x02X\\\x05\x06\x04\x02Y[\x07&\x02\x02ZY\x03\x02\x02\x02[^\x03\x02\x02" +
		"\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^\\\x03\x02" +
		"\x02\x02_`\x07\x10\x02\x02`a\x05\x06\x04\x02ae\x03\x02\x02\x02be\x05\x06" +
		"\x04\x02ce\x05\f\x07\x02d.\x03\x02\x02\x02d/\x03\x02\x02\x02d1\x03\x02" +
		"\x02\x02d;\x03\x02\x02\x02d?\x03\x02\x02\x02dD\x03\x02\x02\x02dQ\x03\x02" +
		"\x02\x02dR\x03\x02\x02\x02dS\x03\x02\x02\x02dW\x03\x02\x02\x02db\x03\x02" +
		"\x02\x02dc\x03\x02\x02\x02e\x05\x03\x02\x02\x02fg\b\x04\x01\x02g}\x07" +
		"!\x02\x02hi\x07\x07\x02\x02ij\x05\x06\x04\x02jk\x07\b\x02\x02k}\x03\x02" +
		"\x02\x02l}\x05\x12\n\x02mo\x05\n\x06\x02nm\x03\x02\x02\x02or\x03\x02\x02" +
		"\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02" +
		"\x02su\x05\x10\t\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02" +
		"\x02vw\x07\x1D\x02\x02w}\x05\x06\x04\x06xy\t\x02\x02\x02y}\x05\x06\x04" +
		"\x05z}\x07\"\x02\x02{}\x05\b\x05\x02|f\x03\x02\x02\x02|h\x03\x02\x02\x02" +
		"|l\x03\x02\x02\x02|p\x03\x02\x02\x02|x\x03\x02\x02\x02|z\x03\x02\x02\x02" +
		"|{\x03\x02\x02\x02}\x91\x03\x02\x02\x02~\x7F\f\x07\x02\x02\x7F\x80\t\x03" +
		"\x02\x02\x80\x90\x05\x06\x04\b\x81\x82\f\v\x02\x02\x82\x90\x07\x1B\x02" +
		"\x02\x83\x84\f\n\x02\x02\x84\x86\x07\x1C\x02\x02\x85\x87\x07\"\x02\x02" +
		"\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x90\x03\x02\x02\x02" +
		"\x88\x89\f\t\x02\x02\x89\x8B\x07\x19\x02\x02\x8A\x8C\x07\"\x02\x02\x8B" +
		"\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x90\x03\x02\x02\x02\x8D" +
		"\x8E\f\b\x02\x02\x8E\x90\x05\x12\n\x02\x8F~\x03\x02\x02\x02\x8F\x81\x03" +
		"\x02\x02\x02\x8F\x83\x03\x02\x02\x02\x8F\x88\x03\x02\x02\x02\x8F\x8D\x03" +
		"\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03" +
		"\x02\x02\x02\x92\x07\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x98\x07" +
		"\x1F\x02\x02\x95\x98\x07\x1E\x02\x02\x96\x98\x07 \x02\x02\x97\x94\x03" +
		"\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98\t\x03" +
		"\x02\x02\x02\x99\xA5\x05\x16\f\x02\x9A\x9F\x05\f\x07\x02\x9B\x9C\x07\x18" +
		"\x02\x02\x9C\x9E\x05\f\x07\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02" +
		"\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA3\x03\x02" +
		"\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA4\x07\x18\x02\x02\xA3\xA2\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\x9A\x03\x02" +
		"\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x05\x18" +
		"\r\x02\xA8\v\x03\x02\x02\x02\xA9\xAB\x05\n\x06\x02\xAA\xAC\x05\x10\t\x02" +
		"\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02" +
		"\xAD\xAF\x05\x0E\b\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02" +
		"\xAF\xC1\x03\x02\x02\x02\xB0\xB2\x07\"\x02\x02\xB1\xB0\x03\x02\x02\x02" +
		"\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB7\t\x04\x02\x02" +
		"\xB4\xB6\x05\n\x06\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02" +
		"\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02" +
		"\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x05\x10\t\x02\xBB\xBA\x03\x02\x02\x02" +
		"\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBF\x05\x0E\b\x02" +
		"\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02" +
		"\xC0\xA9\x03\x02\x02\x02\xC0\xB1\x03\x02\x02\x02\xC1\r\x03\x02\x02\x02" +
		"\xC2\xC4\x07\x17\x02\x02\xC3\xC5\x05\x06\x04\x02\xC4\xC3\x03\x02\x02\x02" +
		"\xC4\xC5\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC8\x05\x1A\x0E\x02" +
		"\xC7\xC2\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x0F\x03\x02\x02\x02" +
		"\xC9\xCB\x07\x1A\x02\x02\xCA\xCC\x05\x06\x04\x02\xCB\xCA\x03\x02\x02\x02" +
		"\xCB\xCC\x03\x02\x02\x02\xCC\x11\x03\x02\x02\x02\xCD\xD9\x05\x16\f\x02" +
		"\xCE\xD3\x05\x14\v\x02\xCF\xD0\x07\x18\x02\x02\xD0\xD2\x05\x14\v\x02\xD1" +
		"\xCF\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3" +
		"\xD4\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6" +
		"\xD8\x07\x18\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
		"\xDA\x03\x02\x02\x02\xD9\xCE\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xDB\x03\x02\x02\x02\xDB\xDC\x05\x18\r\x02\xDC\x13\x03\x02\x02\x02\xDD" +
		"\xDE\x07\"\x02\x02\xDE\xE0\x07\x17\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF" +
		"\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x05\x06\x04\x02\xE2" +
		"\x15\x03\x02\x02\x02\xE3\xE4\t\x05\x02\x02\xE4\x17\x03\x02\x02\x02\xE5" +
		"\xE6\t\x06\x02\x02\xE6\x19\x03\x02\x02\x02\xE7\xE8\x07&\x02\x02\xE8\xE9" +
		"\x07\x03\x02\x02\xE9\xEA\x05\x02\x02\x02\xEA\xEB\x07\x04\x02\x02\xEB\x1B" +
		"\x03\x02\x02\x02&\x1E%*,36JOU\\dpt|\x86\x8B\x8F\x91\x97\x9F\xA3\xA5\xAB" +
		"\xAE\xB1\xB7\xBB\xBE\xC0\xC4\xC7\xCB\xD3\xD7\xD9\xDF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public _NL!: Token;
	public _nl: Token[] = [];
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
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
export class CommentStatementContext extends StatementContext {
	public _value!: Token;
	public LINE_COMMENT(): TerminalNode { return this.getToken(XonParser.LINE_COMMENT, 0); }
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
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
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
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StatementContext {
	public parameter(): ParameterContext {
		return this.getRuleContext(0, ParameterContext);
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
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MetaExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public META(): TerminalNode { return this.getToken(XonParser.META, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
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
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExpressionContext {
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public parameters(): ParametersContext[];
	public parameters(i: number): ParametersContext;
	public parameters(i?: number): ParametersContext | ParametersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParametersContext);
		} else {
			return this.getRuleContext(i, ParametersContext);
		}
	}
	public valueType(): ValueTypeContext | undefined {
		return this.tryGetRuleContext(0, ValueTypeContext);
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
export class IdExpressionContext extends ExpressionContext {
	public _name!: Token;
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


export class ParametersContext extends ParserRuleContext {
	public open(): OpenContext {
		return this.getRuleContext(0, OpenContext);
	}
	public close(): CloseContext {
		return this.getRuleContext(0, CloseContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameters; }
}


export class ParameterContext extends ParserRuleContext {
	public _destructure!: ParametersContext;
	public _modifier!: Token;
	public _name!: Token;
	public _parameters!: ParametersContext;
	public _params: ParametersContext[] = [];
	public parameters(): ParametersContext[];
	public parameters(i: number): ParametersContext;
	public parameters(i?: number): ParametersContext | ParametersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParametersContext);
		} else {
			return this.getRuleContext(i, ParametersContext);
		}
	}
	public valueType(): ValueTypeContext | undefined {
		return this.tryGetRuleContext(0, ValueTypeContext);
	}
	public valueBody(): ValueBodyContext | undefined {
		return this.tryGetRuleContext(0, ValueBodyContext);
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
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ValueBodyContext extends ParserRuleContext {
	public _value!: ExpressionContext;
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_valueBody; }
}


export class ValueTypeContext extends ParserRuleContext {
	public _type!: ExpressionContext;
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_valueType; }
}


export class ArgumentsContext extends ParserRuleContext {
	public open(): OpenContext {
		return this.getRuleContext(0, OpenContext);
	}
	public close(): CloseContext {
		return this.getRuleContext(0, CloseContext);
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


export class ArgumentContext extends ParserRuleContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class OpenContext extends ParserRuleContext {
	public _name!: Token;
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_open; }
}


export class CloseContext extends ParserRuleContext {
	public _name!: Token;
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_close; }
}


export class BodyContext extends ParserRuleContext {
	public NL(): TerminalNode { return this.getToken(XonParser.NL, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public source(): SourceContext {
		return this.getRuleContext(0, SourceContext);
	}
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


