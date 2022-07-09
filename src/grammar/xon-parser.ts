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
	public static readonly RULE_sourceItem = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_literal = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_parameter = 6;
	public static readonly RULE_valueBody = 7;
	public static readonly RULE_parameters = 8;
	public static readonly RULE_genericParameters = 9;
	public static readonly RULE_genericArguments = 10;
	public static readonly RULE_argument = 11;
	public static readonly RULE_arguments = 12;
	public static readonly RULE_body = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "sourceItem", "statement", "expression", "literal", "definition", 
		"parameter", "valueBody", "parameters", "genericParameters", "genericArguments", 
		"argument", "arguments", "body",
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
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.match(XonParser.NL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 29;
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
						this.state = 32;
						this.sourceItem();
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
	public sourceItem(): SourceItemContext {
		let _localctx: SourceItemContext = new SourceItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_sourceItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.statement();
			this.state = 45;
			this.match(XonParser.NL);
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
		this.enterRule(_localctx, 4, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				(_localctx as CommentStatementContext)._value = this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 48;
				this.match(XonParser.EXPORT);
				this.state = 49;
				(_localctx as ExportStatementContext)._path = this.expression(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.match(XonParser.FOR);
				this.state = 58;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 51;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 54;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 52;
						this.match(XonParser.COMMA);
						this.state = 53;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 56;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 60;
				this.expression(0);
				this.state = 61;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 63;
				this.match(XonParser.WHILE);
				this.state = 64;
				this.expression(0);
				this.state = 65;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 67;
				this.match(XonParser.DO);
				this.state = 68;
				this.body();
				this.state = 69;
				this.match(XonParser.WHILE);
				this.state = 70;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 72;
				this.match(XonParser.IF);
				this.state = 73;
				this.expression(0);
				this.state = 74;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 78;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 75;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 81;
					this.match(XonParser.ELSE);
					this.state = 82;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
				}

				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 85;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 86;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 87;
				this.match(XonParser.RETURN);
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
					{
					this.state = 88;
					this.expression(0);
					}
				}

				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 91;
				this.match(XonParser.ACTUAL);
				this.state = 92;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 93;
					this.match(XonParser.NL);
					}
					}
					this.state = 98;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 99;
				this.match(XonParser.EXPECT);
				this.state = 100;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 11:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 102;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 105;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 103;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 104;
					this.parameter();
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
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 110;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 111;
				this.match(XonParser.OPEN_PAREN);
				this.state = 112;
				this.expression(0);
				this.state = 113;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 115;
					this.genericParameters();
					}
				}

				this.state = 118;
				this.parameters();
				this.state = 119;
				this.match(XonParser.LAMBDA);
				this.state = 120;
				this.expression(9);
				}
				break;

			case 4:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 122;
				this.arguments();
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
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
				this.state = 124;
				this.expression(4);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 125;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 143;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 129;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 130;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.AND - 21)) | (1 << (XonParser.AS - 21)) | (1 << (XonParser.IS - 21)) | (1 << (XonParser.OR - 21)) | (1 << (XonParser.OP - 21)))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 131;
						(_localctx as InfixExpressionContext)._right = this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new GenericsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 133;
						this.genericArguments();
						}
						break;

					case 3:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 134;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 135;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 136;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 137;
						this.match(XonParser.DOT);
						this.state = 139;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
						case 1:
							{
							this.state = 138;
							(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 5:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 142;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
		this.enterRule(_localctx, 8, XonParser.RULE_literal);
		try {
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 148;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 149;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 150;
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
		this.enterRule(_localctx, 10, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			_localctx._modifier = this.match(XonParser.ID);
			this.state = 154;
			_localctx._name = this.match(XonParser.ID);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 155;
				this.genericParameters();
				}
			}

			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0)) {
				{
				this.state = 158;
				this.parameters();
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 161;
				this.match(XonParser.IS);
				this.state = 162;
				this.expression(0);
				}
			}

			this.state = 166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 165;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.OPEN_BRACKET:
			case XonParser.OPEN_PAREN:
			case XonParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				_localctx._destructure = this.parameters();
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 169;
					this.match(XonParser.COLON);
					this.state = 171;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						this.state = 170;
						_localctx._type = this.expression(0);
						}
						break;
					}
					}
				}

				this.state = 176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 175;
					this.valueBody();
					}
					break;
				}
				}
				break;
			case XonParser.ID:
			case XonParser.OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.ID || _la === XonParser.OP)) {
					_localctx._name = this._errHandler.recoverInline(this);
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
				if (_la === XonParser.LESS) {
					{
					this.state = 179;
					this.genericParameters();
					}
				}

				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0)) {
					{
					this.state = 182;
					_localctx._params = this.parameters();
					}
				}

				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 185;
					this.match(XonParser.COLON);
					this.state = 187;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						this.state = 186;
						_localctx._type = this.expression(0);
						}
						break;
					}
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
	public valueBody(): ValueBodyContext {
		let _localctx: ValueBodyContext = new ValueBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_valueBody);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.match(XonParser.ASSIGN);
				this.state = 197;
				_localctx._value = this.expression(0);
				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
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
		this.enterRule(_localctx, 16, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
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
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.ID || _la === XonParser.OP) {
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
	public genericParameters(): GenericParametersContext {
		let _localctx: GenericParametersContext = new GenericParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(XonParser.LESS);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.ID || _la === XonParser.OP) {
				{
				this.state = 218;
				this.parameter();
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 219;
						this.match(XonParser.COMMA);
						this.state = 220;
						this.parameter();
						}
						}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 226;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 231;
			this.match(XonParser.GREAT);
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
	public genericArguments(): GenericArgumentsContext {
		let _localctx: GenericArgumentsContext = new GenericArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(XonParser.LESS);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
				{
				this.state = 234;
				this.expression(0);
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 235;
						this.match(XonParser.COMMA);
						this.state = 236;
						this.expression(0);
						}
						}
					}
					this.state = 241;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				}
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 242;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 247;
			this.match(XonParser.GREAT);
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
		this.enterRule(_localctx, 22, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 249;
				_localctx._name = this.match(XonParser.ID);
				this.state = 250;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 253;
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
		this.enterRule(_localctx, 24, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
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
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
				{
				this.state = 256;
				this.argument();
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 257;
						this.match(XonParser.COMMA);
						this.state = 258;
						this.argument();
						}
						}
					}
					this.state = 263;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 264;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 269;
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
		this.enterRule(_localctx, 26, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(XonParser.NL);
			this.state = 272;
			this.match(XonParser.INDENT);
			this.state = 273;
			this.source();
			this.state = 274;
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
		case 3:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\u0117\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x05\x02!\n\x02\x03\x02\x07\x02" +
		"$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x02\x03\x02\x05\x02+\n\x02\x05\x02-" +
		"\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x049\n\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04O\n\x04\f\x04" +
		"\x0E\x04R\v\x04\x03\x04\x03\x04\x05\x04V\n\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04\\\n\x04\x03\x04\x03\x04\x03\x04\x07\x04a\n\x04\f\x04" +
		"\x0E\x04d\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"l\n\x04\x05\x04n\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05w\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\x82\n\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x8E\n\x05" +
		"\x03\x05\x03\x05\x07\x05\x92\n\x05\f\x05\x0E\x05\x95\v\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\x9A\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\x9F\n\x07" +
		"\x03\x07\x05\x07\xA2\n\x07\x03\x07\x03\x07\x05\x07\xA6\n\x07\x03\x07\x05" +
		"\x07\xA9\n\x07\x03\b\x03\b\x03\b\x05\b\xAE\n\b\x05\b\xB0\n\b\x03\b\x05" +
		"\b\xB3\n\b\x03\b\x03\b\x05\b\xB7\n\b\x03\b\x05\b\xBA\n\b\x03\b\x03\b\x05" +
		"\b\xBE\n\b\x05\b\xC0\n\b\x03\b\x05\b\xC3\n\b\x05\b\xC5\n\b\x03\t\x03\t" +
		"\x03\t\x05\t\xCA\n\t\x03\n\x03\n\x03\n\x03\n\x07\n\xD0\n\n\f\n\x0E\n\xD3" +
		"\v\n\x03\n\x05\n\xD6\n\n\x05\n\xD8\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\xE0\n\v\f\v\x0E\v\xE3\v\v\x03\v\x05\v\xE6\n\v\x05\v\xE8\n\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\xF0\n\f\f\f\x0E\f\xF3\v\f\x03\f" +
		"\x05\f\xF6\n\f\x05\f\xF8\n\f\x03\f\x03\f\x03\r\x03\r\x05\r\xFE\n\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0106\n\x0E\f\x0E\x0E" +
		"\x0E\u0109\v\x0E\x03\x0E\x05\x0E\u010C\n\x0E\x05\x0E\u010E\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x02\x02\x03\b" +
		"\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x07\x04\x02\x14\x14((\x04" +
		"\x02\x17\x1A((\x04\x02%%((\x05\x02\x05\x05\x07\x07\t\t\x05\x02\x06\x06" +
		"\b\b\n\n\x02\u0148\x02,\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x06m\x03" +
		"\x02\x02\x02\b\x81\x03\x02\x02\x02\n\x99\x03\x02\x02\x02\f\x9B\x03\x02" +
		"\x02\x02\x0E\xC4\x03\x02\x02\x02\x10\xC9\x03\x02\x02\x02\x12\xCB\x03\x02" +
		"\x02\x02\x14\xDB\x03\x02\x02\x02\x16\xEB\x03\x02\x02\x02\x18\xFD\x03\x02" +
		"\x02\x02\x1A\u0101\x03\x02\x02\x02\x1C\u0111\x03\x02\x02\x02\x1E-\x07" +
		")\x02\x02\x1F!\x07)\x02\x02 \x1F\x03\x02\x02\x02 !\x03\x02\x02\x02!%\x03" +
		"\x02\x02\x02\"$\x05\x04\x03\x02#\"\x03\x02\x02\x02$\'\x03\x02\x02\x02" +
		"%#\x03\x02\x02\x02%&\x03\x02\x02\x02&(\x03\x02\x02\x02\'%\x03\x02\x02" +
		"\x02(*\x05\x06\x04\x02)+\x07)\x02\x02*)\x03\x02\x02\x02*+\x03\x02\x02" +
		"\x02+-\x03\x02\x02\x02,\x1E\x03\x02\x02\x02, \x03\x02\x02\x02-\x03\x03" +
		"\x02\x02\x02./\x05\x06\x04\x02/0\x07)\x02\x020\x05\x03\x02\x02\x021n\x07" +
		"*\x02\x0223\x07\x11\x02\x023n\x05\b\x05\x024<\x07\x12\x02\x0258\x05\x0E" +
		"\b\x0267\x07\x1C\x02\x0279\x05\x0E\b\x0286\x03\x02\x02\x0289\x03\x02\x02" +
		"\x029:\x03\x02\x02\x02:;\x07%\x02\x02;=\x03\x02\x02\x02<5\x03\x02\x02" +
		"\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x05\b\x05\x02?@\x05\x1C\x0F" +
		"\x02@n\x03\x02\x02\x02AB\x07\x16\x02\x02BC\x05\b\x05\x02CD\x05\x1C\x0F" +
		"\x02Dn\x03\x02\x02\x02EF\x07\x0E\x02\x02FG\x05\x1C\x0F\x02GH\x07\x16\x02" +
		"\x02HI\x05\b\x05\x02In\x03\x02\x02\x02JK\x07\x13\x02\x02KL\x05\b\x05\x02" +
		"LP\x05\x1C\x0F\x02MO\x07)\x02\x02NM\x03\x02\x02\x02OR\x03\x02\x02\x02" +
		"PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QU\x03\x02\x02\x02RP\x03\x02\x02\x02" +
		"ST\x07\x0F\x02\x02TV\x05\x1C\x0F\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02" +
		"Vn\x03\x02\x02\x02Wn\x07\f\x02\x02Xn\x07\r\x02\x02Y[\x07\x15\x02\x02Z" +
		"\\\x05\b\x05\x02[Z\x03\x02\x02\x02[\\\x03\x02\x02\x02\\n\x03\x02\x02\x02" +
		"]^\x07\v\x02\x02^b\x05\b\x05\x02_a\x07)\x02\x02`_\x03\x02\x02\x02ad\x03" +
		"\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03" +
		"\x02\x02\x02ef\x07\x10\x02\x02fg\x05\b\x05\x02gn\x03\x02\x02\x02hn\x05" +
		"\b\x05\x02il\x05\f\x07\x02jl\x05\x0E\b\x02ki\x03\x02\x02\x02kj\x03\x02" +
		"\x02\x02ln\x03\x02\x02\x02m1\x03\x02\x02\x02m2\x03\x02\x02\x02m4\x03\x02" +
		"\x02\x02mA\x03\x02\x02\x02mE\x03\x02\x02\x02mJ\x03\x02\x02\x02mW\x03\x02" +
		"\x02\x02mX\x03\x02\x02\x02mY\x03\x02\x02\x02m]\x03\x02\x02\x02mh\x03\x02" +
		"\x02\x02mk\x03\x02\x02\x02n\x07\x03\x02\x02\x02op\b\x05\x01\x02p\x82\x07" +
		"$\x02\x02qr\x07\x07\x02\x02rs\x05\b\x05\x02st\x07\b\x02\x02t\x82\x03\x02" +
		"\x02\x02uw\x05\x14\v\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02" +
		"\x02\x02xy\x05\x12\n\x02yz\x07 \x02\x02z{\x05\b\x05\v{\x82\x03\x02\x02" +
		"\x02|\x82\x05\x1A\x0E\x02}~\t\x02\x02\x02~\x82\x05\b\x05\x06\x7F\x82\x07" +
		"%\x02\x02\x80\x82\x05\n\x06\x02\x81o\x03\x02\x02\x02\x81q\x03\x02\x02" +
		"\x02\x81v\x03\x02\x02\x02\x81|\x03\x02\x02\x02\x81}\x03\x02\x02\x02\x81" +
		"\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\x93\x03\x02\x02\x02\x83" +
		"\x84\f\x05\x02\x02\x84\x85\t\x03\x02\x02\x85\x92\x05\b\x05\x06\x86\x87" +
		"\f\f\x02\x02\x87\x92\x05\x16\f\x02\x88\x89\f\t\x02\x02\x89\x92\x07\x1E" +
		"\x02\x02\x8A\x8B\f\b\x02\x02\x8B\x8D\x07\x1F\x02\x02\x8C\x8E\x07%\x02" +
		"\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x92\x03\x02\x02" +
		"\x02\x8F\x90\f\x07\x02\x02\x90\x92\x05\x1A\x0E\x02\x91\x83\x03\x02\x02" +
		"\x02\x91\x86\x03\x02\x02\x02\x91\x88\x03\x02\x02\x02\x91\x8A\x03\x02\x02" +
		"\x02\x91\x8F\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94\t\x03\x02\x02\x02\x95\x93\x03\x02\x02" +
		"\x02\x96\x9A\x07\"\x02\x02\x97\x9A\x07!\x02\x02\x98\x9A\x07#\x02\x02\x99" +
		"\x96\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x98\x03\x02\x02\x02\x9A" +
		"\v\x03\x02\x02\x02\x9B\x9C\x07%\x02\x02\x9C\x9E\x07%\x02\x02\x9D\x9F\x05" +
		"\x14\v\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03" +
		"\x02\x02\x02\xA0\xA2\x05\x12\n\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03" +
		"\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA4\x07\x19\x02\x02\xA4\xA6\x05" +
		"\b\x05\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA8\x03" +
		"\x02\x02\x02\xA7\xA9\x05\x1C\x0F\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03" +
		"\x02\x02\x02\xA9\r\x03\x02\x02\x02\xAA\xAF\x05\x12\n\x02\xAB\xAD\x07\x1D" +
		"\x02\x02\xAC\xAE\x05\b\x05\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02" +
		"\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xB0\x03\x02" +
		"\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xB3\x05\x10\t\x02\xB2\xB1\x03\x02" +
		"\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xC5\x03\x02\x02\x02\xB4\xB6\t\x04" +
		"\x02\x02\xB5\xB7\x05\x14\v\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02" +
		"\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xBA\x05\x12\n\x02\xB9\xB8\x03\x02" +
		"\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBF\x03\x02\x02\x02\xBB\xBD\x07\x1D" +
		"\x02\x02\xBC\xBE\x05\b\x05\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02" +
		"\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBB\x03\x02\x02\x02\xBF\xC0\x03\x02" +
		"\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xC3\x05\x10\t\x02\xC2\xC1\x03\x02" +
		"\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xAA\x03\x02" +
		"\x02\x02\xC4\xB4\x03\x02\x02\x02\xC5\x0F\x03\x02\x02\x02\xC6\xC7\x07\x1B" +
		"\x02\x02\xC7\xCA\x05\b\x05\x02\xC8\xCA\x05\x1C\x0F\x02\xC9\xC6\x03\x02" +
		"\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\x11\x03\x02\x02\x02\xCB\xD7\t\x05" +
		"\x02\x02\xCC\xD1\x05\x0E\b\x02\xCD\xCE\x07\x1C\x02\x02\xCE\xD0\x05\x0E" +
		"\b\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02" +
		"\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02" +
		"\x02\x02\xD4\xD6\x07\x1C\x02\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02" +
		"\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xCC\x03\x02\x02\x02\xD7\xD8\x03\x02" +
		"\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\t\x06\x02\x02\xDA\x13\x03\x02" +
		"\x02\x02\xDB\xE7\x07&\x02\x02\xDC\xE1\x05\x0E\b\x02\xDD\xDE\x07\x1C\x02" +
		"\x02\xDE\xE0\x05\x0E\b\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE3\x03\x02\x02" +
		"\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE5\x03\x02\x02" +
		"\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE6\x07\x1C\x02\x02\xE5\xE4\x03\x02\x02" +
		"\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE8\x03\x02\x02\x02\xE7\xDC\x03\x02\x02" +
		"\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07\'\x02" +
		"\x02\xEA\x15\x03\x02\x02\x02\xEB\xF7\x07&\x02\x02\xEC\xF1\x05\b\x05\x02" +
		"\xED\xEE\x07\x1C\x02\x02\xEE\xF0\x05\b\x05\x02\xEF\xED\x03\x02\x02\x02" +
		"\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02" +
		"\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4\xF6\x07\x1C\x02\x02" +
		"\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x03\x02\x02\x02" +
		"\xF7\xEC\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02" +
		"\xF9\xFA\x07\'\x02\x02\xFA\x17\x03\x02\x02\x02\xFB\xFC\x07%\x02\x02\xFC" +
		"\xFE\x07\x1B\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE" +
		"\xFF\x03\x02\x02\x02\xFF\u0100\x05\b\x05\x02\u0100\x19\x03\x02\x02\x02" +
		"\u0101\u010D\t\x05\x02\x02\u0102\u0107\x05\x18\r\x02\u0103\u0104\x07\x1C" +
		"\x02\x02\u0104\u0106\x05\x18\r\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0109" +
		"\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02" +
		"\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010C\x07" +
		"\x1C\x02\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C" +
		"\u010E\x03\x02\x02\x02\u010D\u0102\x03\x02\x02\x02\u010D\u010E\x03\x02" +
		"\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\t\x06\x02\x02\u0110\x1B" +
		"\x03\x02\x02\x02\u0111\u0112\x07)\x02\x02\u0112\u0113\x07\x03\x02\x02" +
		"\u0113\u0114\x05\x02\x02\x02\u0114\u0115\x07\x04\x02\x02\u0115\x1D\x03" +
		"\x02\x02\x02/ %*,8<PU[bkmv\x81\x8D\x91\x93\x99\x9E\xA1\xA5\xA8\xAD\xAF" +
		"\xB2\xB6\xB9\xBD\xBF\xC2\xC4\xC9\xD1\xD5\xD7\xE1\xE5\xE7\xF1\xF5\xF7\xFD" +
		"\u0107\u010B\u010D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public sourceItem(): SourceItemContext[];
	public sourceItem(i: number): SourceItemContext;
	public sourceItem(i?: number): SourceItemContext | SourceItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceItemContext);
		} else {
			return this.getRuleContext(i, SourceItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
}


export class SourceItemContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public NL(): TerminalNode { return this.getToken(XonParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_sourceItem; }
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
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
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
export class GenericsExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public genericArguments(): GenericArgumentsContext {
		return this.getRuleContext(0, GenericArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExpressionContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class ParameterContext extends ParserRuleContext {
	public _destructure!: ParametersContext;
	public _type!: ExpressionContext;
	public _name!: Token;
	public _params!: ParametersContext;
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public valueBody(): ValueBodyContext | undefined {
		return this.tryGetRuleContext(0, ValueBodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
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


export class GenericParametersContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_genericParameters; }
}


export class GenericArgumentsContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public get ruleIndex(): number { return XonParser.RULE_genericArguments; }
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


