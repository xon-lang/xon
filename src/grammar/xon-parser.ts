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
	public static readonly AND = 21;
	public static readonly AS = 22;
	public static readonly IS = 23;
	public static readonly OR = 24;
	public static readonly ASSIGN = 25;
	public static readonly COMMA = 26;
	public static readonly COLON = 27;
	public static readonly QUESTION = 28;
	public static readonly DOT = 29;
	public static readonly LAMBDA = 30;
	public static readonly FLOAT_LITERAL = 31;
	public static readonly INTEGER_LITERAL = 32;
	public static readonly STRING_LITERAL = 33;
	public static readonly PREPROCESSOR = 34;
	public static readonly ID = 35;
	public static readonly LESS = 36;
	public static readonly GREAT = 37;
	public static readonly OP = 38;
	public static readonly NL = 39;
	public static readonly LINE_COMMENT = 40;
	public static readonly WS = 41;
	public static readonly BLOCK_COMMENT = 42;
	public static readonly LINE_JOINING = 43;
	public static readonly UNEXPECTED = 44;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_method = 4;
	public static readonly RULE_parameter = 5;
	public static readonly RULE_valueBody = 6;
	public static readonly RULE_valueType = 7;
	public static readonly RULE_parameters = 8;
	public static readonly RULE_argument = 9;
	public static readonly RULE_arguments = 10;
	public static readonly RULE_body = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expression", "literal", "method", "parameter", 
		"valueBody", "valueType", "parameters", "argument", "arguments", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'and'", "'as'", "'is'", 
		"'or'", "'='", "','", "':'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'<'", "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"AND", "AS", "IS", "OR", "ASSIGN", "COMMA", "COLON", "QUESTION", "DOT", 
		"LAMBDA", "FLOAT_LITERAL", "INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "LESS", "GREAT", "OP", "NL", "LINE_COMMENT", "WS", "BLOCK_COMMENT", 
		"LINE_JOINING", "UNEXPECTED",
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
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this.match(XonParser.NL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 25;
					this.match(XonParser.NL);
					}
				}

				this.state = 33;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 28;
						this.statement();
						this.state = 29;
						_localctx._NL = this.match(XonParser.NL);
						_localctx._nl.push(_localctx._NL);
						}
						}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				this.state = 36;
				this.statement();
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 37;
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
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				(_localctx as CommentStatementContext)._value = this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.match(XonParser.EXPORT);
				this.state = 44;
				(_localctx as ExportStatementContext)._path = this.expression(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.match(XonParser.FOR);
				this.state = 53;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 46;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 47;
						this.match(XonParser.COMMA);
						this.state = 48;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 51;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 55;
				this.expression(0);
				this.state = 56;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 58;
				this.match(XonParser.WHILE);
				this.state = 59;
				this.expression(0);
				this.state = 60;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 62;
				this.match(XonParser.DO);
				this.state = 63;
				this.body();
				this.state = 64;
				this.match(XonParser.WHILE);
				this.state = 65;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 67;
				this.match(XonParser.IF);
				this.state = 68;
				this.expression(0);
				this.state = 69;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 73;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 70;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 76;
					this.match(XonParser.ELSE);
					this.state = 77;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
				}

				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 80;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 81;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 82;
				this.match(XonParser.RETURN);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
					{
					this.state = 83;
					this.expression(0);
					}
				}

				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 86;
				this.match(XonParser.ACTUAL);
				this.state = 87;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 88;
					this.match(XonParser.NL);
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 94;
				this.match(XonParser.EXPECT);
				this.state = 95;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 11:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 97;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 98;
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
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 102;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 103;
				this.match(XonParser.OPEN_PAREN);
				this.state = 104;
				this.expression(0);
				this.state = 105;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 107;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 108;
				this.method();
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 109;
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
				this.state = 110;
				this.expression(3);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 111;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 129;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 127;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 115;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 116;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.AND - 21)) | (1 << (XonParser.AS - 21)) | (1 << (XonParser.IS - 21)) | (1 << (XonParser.OR - 21)) | (1 << (XonParser.LESS - 21)) | (1 << (XonParser.GREAT - 21)) | (1 << (XonParser.OP - 21)))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 117;
						(_localctx as InfixExpressionContext)._right = this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 118;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 119;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 120;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 121;
						this.match(XonParser.DOT);
						this.state = 123;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
						case 1:
							{
							this.state = 122;
							(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 4:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 125;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 126;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
			this.state = 135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 132;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 133;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 134;
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
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_method);
		let _la: number;
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				_localctx._params = this.parameters();
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 138;
					this.valueType();
					}
				}

				this.state = 141;
				this.match(XonParser.LAMBDA);
				this.state = 142;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				_localctx._generics = this.parameters();
				this.state = 145;
				_localctx._params = this.parameters();
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 146;
					this.valueType();
					}
				}

				this.state = 149;
				this.match(XonParser.LAMBDA);
				this.state = 150;
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
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				_localctx._destructure = this.parameters();
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 155;
					this.valueType();
					}
				}

				this.state = 159;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 158;
					this.valueBody();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 161;
					_localctx._modifier = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 164;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.ID - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.OP - 35)))) !== 0))) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 165;
				_localctx._params = this.parameters();
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 166;
					this.valueType();
					}
				}

				this.state = 170;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 169;
					this.valueBody();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 173;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 172;
					_localctx._modifier = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 175;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.ID - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.OP - 35)))) !== 0))) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 176;
				_localctx._generics = this.parameters();
				this.state = 177;
				_localctx._params = this.parameters();
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 178;
					this.valueType();
					}
				}

				this.state = 182;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 181;
					this.valueBody();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 185;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 184;
					_localctx._modifier = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 187;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.ID - 35)) | (1 << (XonParser.LESS - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.OP - 35)))) !== 0))) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 188;
					this.valueType();
					}
				}

				this.state = 192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 191;
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
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.match(XonParser.ASSIGN);
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 197;
					_localctx._value = this.expression(0);
					}
					break;
				}
				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
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
			this.state = 203;
			this.match(XonParser.COLON);
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 204;
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			_localctx._open = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.LESS)) {
				_localctx._open = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 208;
				this.parameter();
				this.state = 213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 209;
						this.match(XonParser.COMMA);
						this.state = 210;
						this.parameter();
						}
						}
					}
					this.state = 215;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 216;
					this.match(XonParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 221;
			_localctx._close = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0) || _la === XonParser.GREAT)) {
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
		this.enterRule(_localctx, 18, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 223;
				_localctx._name = this.match(XonParser.ID);
				this.state = 224;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 227;
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
		this.enterRule(_localctx, 20, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			_localctx._open = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.LESS)) {
				_localctx._open = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
				{
				this.state = 230;
				this.argument();
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 231;
						this.match(XonParser.COMMA);
						this.state = 232;
						this.argument();
						}
						}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 238;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 243;
			_localctx._close = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0) || _la === XonParser.GREAT)) {
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
		this.enterRule(_localctx, 22, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(XonParser.NL);
			this.state = 246;
			this.match(XonParser.INDENT);
			this.state = 247;
			this.source();
			this.state = 248;
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
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\xFD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x05\x02\x1D\n\x02\x03\x02\x03\x02\x03\x02\x07\x02\"\n\x02" +
		"\f\x02\x0E\x02%\v\x02\x03\x02\x03\x02\x05\x02)\n\x02\x05\x02+\n\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03" +
		"\x03\x03\x03\x05\x038\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03J\n\x03\f\x03\x0E\x03M\v\x03\x03\x03\x03\x03\x05\x03" +
		"Q\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03W\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03\\\n\x03\f\x03\x0E\x03_\v\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03f\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04t\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"~\n\x04\x03\x04\x03\x04\x07\x04\x82\n\x04\f\x04\x0E\x04\x85\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\x8A\n\x05\x03\x06\x03\x06\x05\x06\x8E\n\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x96\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\x9B\n\x06\x03\x07\x03\x07\x05\x07\x9F\n\x07" +
		"\x03\x07\x05\x07\xA2\n\x07\x03\x07\x05\x07\xA5\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xAA\n\x07\x03\x07\x05\x07\xAD\n\x07\x03\x07\x05\x07\xB0\n" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xB6\n\x07\x03\x07\x05\x07" +
		"\xB9\n\x07\x03\x07\x05\x07\xBC\n\x07\x03\x07\x03\x07\x05\x07\xC0\n\x07" +
		"\x03\x07\x05\x07\xC3\n\x07\x05\x07\xC5\n\x07\x03\b\x03\b\x05\b\xC9\n\b" +
		"\x03\b\x05\b\xCC\n\b\x03\t\x03\t\x05\t\xD0\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x07\n\xD6\n\n\f\n\x0E\n\xD9\v\n\x03\n\x05\n\xDC\n\n\x05\n\xDE\n\n\x03" +
		"\n\x03\n\x03\v\x03\v\x05\v\xE4\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f" +
		"\x07\f\xEC\n\f\f\f\x0E\f\xEF\v\f\x03\f\x05\f\xF2\n\f\x05\f\xF4\n\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x02\x02\x03\x06\x0E\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x02\x07\x04\x02\x14\x14((\x04\x02\x17\x1A&(\x03\x02%(\x06" +
		"\x02\x05\x05\x07\x07\t\t&&\x06\x02\x06\x06\b\b\n\n\'\'\x02\u012D\x02*" +
		"\x03\x02\x02\x02\x04e\x03\x02\x02\x02\x06s\x03\x02\x02\x02\b\x89\x03\x02" +
		"\x02\x02\n\x9A\x03\x02\x02\x02\f\xC4\x03\x02\x02\x02\x0E\xCB\x03\x02\x02" +
		"\x02\x10\xCD\x03\x02\x02\x02\x12\xD1\x03\x02\x02\x02\x14\xE3\x03\x02\x02" +
		"\x02\x16\xE7\x03\x02\x02\x02\x18\xF7\x03\x02\x02\x02\x1A+\x07)\x02\x02" +
		"\x1B\x1D\x07)\x02\x02\x1C\x1B\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02" +
		"\x1D#\x03\x02\x02\x02\x1E\x1F\x05\x04\x03\x02\x1F \x07)\x02\x02 \"\x03" +
		"\x02\x02\x02!\x1E\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02" +
		"#$\x03\x02\x02\x02$&\x03\x02\x02\x02%#\x03\x02\x02\x02&(\x05\x04\x03\x02" +
		"\')\x07)\x02\x02(\'\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02\x02\x02" +
		"*\x1A\x03\x02\x02\x02*\x1C\x03\x02\x02\x02+\x03\x03\x02\x02\x02,f\x07" +
		"*\x02\x02-.\x07\x11\x02\x02.f\x05\x06\x04\x02/7\x07\x12\x02\x0203\x05" +
		"\f\x07\x0212\x07\x1C\x02\x0224\x05\f\x07\x0231\x03\x02\x02\x0234\x03\x02" +
		"\x02\x0245\x03\x02\x02\x0256\x07%\x02\x0268\x03\x02\x02\x0270\x03\x02" +
		"\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029:\x05\x06\x04\x02:;\x05\x18" +
		"\r\x02;f\x03\x02\x02\x02<=\x07\x16\x02\x02=>\x05\x06\x04\x02>?\x05\x18" +
		"\r\x02?f\x03\x02\x02\x02@A\x07\x0E\x02\x02AB\x05\x18\r\x02BC\x07\x16\x02" +
		"\x02CD\x05\x06\x04\x02Df\x03\x02\x02\x02EF\x07\x13\x02\x02FG\x05\x06\x04" +
		"\x02GK\x05\x18\r\x02HJ\x07)\x02\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02" +
		"KI\x03\x02\x02\x02KL\x03\x02\x02\x02LP\x03\x02\x02\x02MK\x03\x02\x02\x02" +
		"NO\x07\x0F\x02\x02OQ\x05\x18\r\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02" +
		"Qf\x03\x02\x02\x02Rf\x07\f\x02\x02Sf\x07\r\x02\x02TV\x07\x15\x02\x02U" +
		"W\x05\x06\x04\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02Wf\x03\x02\x02\x02" +
		"XY\x07\v\x02\x02Y]\x05\x06\x04\x02Z\\\x07)\x02\x02[Z\x03\x02\x02\x02\\" +
		"_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02" +
		"_]\x03\x02\x02\x02`a\x07\x10\x02\x02ab\x05\x06\x04\x02bf\x03\x02\x02\x02" +
		"cf\x05\x06\x04\x02df\x05\f\x07\x02e,\x03\x02\x02\x02e-\x03\x02\x02\x02" +
		"e/\x03\x02\x02\x02e<\x03\x02\x02\x02e@\x03\x02\x02\x02eE\x03\x02\x02\x02" +
		"eR\x03\x02\x02\x02eS\x03\x02\x02\x02eT\x03\x02\x02\x02eX\x03\x02\x02\x02" +
		"ec\x03\x02\x02\x02ed\x03\x02\x02\x02f\x05\x03\x02\x02\x02gh\b\x04\x01" +
		"\x02ht\x07$\x02\x02ij\x07\x07\x02\x02jk\x05\x06\x04\x02kl\x07\b\x02\x02" +
		"lt\x03\x02\x02\x02mt\x05\x16\f\x02nt\x05\n\x06\x02op\t\x02\x02\x02pt\x05" +
		"\x06\x04\x05qt\x07%\x02\x02rt\x05\b\x05\x02sg\x03\x02\x02\x02si\x03\x02" +
		"\x02\x02sm\x03\x02\x02\x02sn\x03\x02\x02\x02so\x03\x02\x02\x02sq\x03\x02" +
		"\x02\x02sr\x03\x02\x02\x02t\x83\x03\x02\x02\x02uv\f\x07\x02\x02vw\t\x03" +
		"\x02\x02w\x82\x05\x06\x04\bxy\f\n\x02\x02y\x82\x07\x1E\x02\x02z{\f\t\x02" +
		"\x02{}\x07\x1F\x02\x02|~\x07%\x02\x02}|\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x82\x03\x02\x02\x02\x7F\x80\f\b\x02\x02\x80\x82\x05\x16\f\x02\x81" +
		"u\x03\x02\x02\x02\x81x\x03\x02\x02\x02\x81z\x03\x02\x02\x02\x81\x7F\x03" +
		"\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03" +
		"\x02\x02\x02\x84\x07\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x8A\x07" +
		"\"\x02\x02\x87\x8A\x07!\x02\x02\x88\x8A\x07#\x02\x02\x89\x86\x03\x02\x02" +
		"\x02\x89\x87\x03\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\t\x03\x02\x02" +
		"\x02\x8B\x8D\x05\x12\n\x02\x8C\x8E\x05\x10\t\x02\x8D\x8C\x03\x02\x02\x02" +
		"\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x07 \x02\x02" +
		"\x90\x91\x05\x06\x04\x02\x91\x9B\x03\x02\x02\x02\x92\x93\x05\x12\n\x02" +
		"\x93\x95\x05\x12\n\x02\x94\x96\x05\x10\t\x02\x95\x94\x03\x02\x02\x02\x95" +
		"\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07 \x02\x02\x98" +
		"\x99\x05\x06\x04\x02\x99\x9B\x03\x02\x02\x02\x9A\x8B\x03\x02\x02\x02\x9A" +
		"\x92\x03\x02\x02\x02\x9B\v\x03\x02\x02\x02\x9C\x9E\x05\x12\n\x02\x9D\x9F" +
		"\x05\x10\t\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1" +
		"\x03\x02\x02\x02\xA0\xA2\x05\x0E\b\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2" +
		"\x03\x02\x02\x02\xA2\xC5\x03\x02\x02\x02\xA3\xA5\x07%\x02\x02\xA4\xA3" +
		"\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7" +
		"\t\x04\x02\x02\xA7\xA9\x05\x12\n\x02\xA8\xAA\x05\x10\t\x02\xA9\xA8\x03" +
		"\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xAD\x05" +
		"\x0E\b\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xC5\x03" +
		"\x02\x02\x02\xAE\xB0\x07%\x02\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03" +
		"\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\t\x04\x02\x02\xB2\xB3\x05" +
		"\x12\n\x02\xB3\xB5\x05\x12\n\x02\xB4\xB6\x05\x10\t\x02\xB5\xB4\x03\x02" +
		"\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB9\x05\x0E" +
		"\b\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC5\x03\x02" +
		"\x02\x02\xBA\xBC\x07%\x02\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02" +
		"\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\t\x04\x02\x02\xBE\xC0\x05\x10" +
		"\t\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02" +
		"\x02\x02\xC1\xC3\x05\x0E\b\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\x9C\x03\x02\x02\x02\xC4\xA4\x03\x02" +
		"\x02\x02\xC4\xAF\x03\x02\x02\x02\xC4\xBB\x03\x02\x02\x02\xC5\r\x03\x02" +
		"\x02\x02\xC6\xC8\x07\x1B\x02\x02\xC7\xC9\x05\x06\x04\x02\xC8\xC7\x03\x02" +
		"\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xCC\x05\x18" +
		"\r\x02\xCB\xC6\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\x0F\x03\x02" +
		"\x02\x02\xCD\xCF\x07\x1D\x02\x02\xCE\xD0\x05\x06\x04\x02\xCF\xCE\x03\x02" +
		"\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x11\x03\x02\x02\x02\xD1\xDD\t\x05" +
		"\x02\x02\xD2\xD7\x05\f\x07\x02\xD3\xD4\x07\x1C\x02\x02\xD4\xD6\x05\f\x07" +
		"\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02" +
		"\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
		"\x02\xDA\xDC\x07\x1C\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02" +
		"\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD2\x03\x02\x02\x02\xDD\xDE\x03\x02\x02" +
		"\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\t\x06\x02\x02\xE0\x13\x03\x02\x02" +
		"\x02\xE1\xE2\x07%\x02\x02\xE2\xE4\x07\x1B\x02\x02\xE3\xE1\x03\x02\x02" +
		"\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x05\x06\x04" +
		"\x02\xE6\x15\x03\x02\x02\x02\xE7\xF3\t\x05\x02\x02\xE8\xED\x05\x14\v\x02" +
		"\xE9\xEA\x07\x1C\x02\x02\xEA\xEC\x05\x14\v\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF2\x07\x1C\x02\x02" +
		"\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02" +
		"\xF3\xE8\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02" +
		"\xF5\xF6\t\x06\x02\x02\xF6\x17\x03\x02\x02\x02\xF7\xF8\x07)\x02\x02\xF8" +
		"\xF9\x07\x03\x02\x02\xF9\xFA\x05\x02\x02\x02\xFA\xFB\x07\x04\x02\x02\xFB" +
		"\x19\x03\x02\x02\x02+\x1C#(*37KPV]es}\x81\x83\x89\x8D\x95\x9A\x9E\xA1" +
		"\xA4\xA9\xAC\xAF\xB5\xB8\xBB\xBF\xC2\xC4\xC8\xCB\xCF\xD7\xDB\xDD\xE3\xED" +
		"\xF1\xF3";
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OR, 0); }
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExpressionContext {
	public method(): MethodContext {
		return this.getRuleContext(0, MethodContext);
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


export class MethodContext extends ParserRuleContext {
	public _params!: ParametersContext;
	public _generics!: ParametersContext;
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_method; }
}


export class ParameterContext extends ParserRuleContext {
	public _destructure!: ParametersContext;
	public _modifier!: Token;
	public _name!: Token;
	public _params!: ParametersContext;
	public _generics!: ParametersContext;
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


export class ParametersContext extends ParserRuleContext {
	public _open!: Token;
	public _close!: Token;
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
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
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
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


