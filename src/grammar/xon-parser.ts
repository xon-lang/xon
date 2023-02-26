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
	public static readonly OPEN = 3;
	public static readonly CLOSE = 4;
	public static readonly LAMBDA = 5;
	public static readonly FLOAT = 6;
	public static readonly INTEGER = 7;
	public static readonly STRING = 8;
	public static readonly PREPROCESSOR = 9;
	public static readonly OP = 10;
	public static readonly DOT = 11;
	public static readonly META = 12;
	public static readonly COMMA = 13;
	public static readonly ASSIGN = 14;
	public static readonly COLON = 15;
	public static readonly ID = 16;
	public static readonly NL = 17;
	public static readonly LINE_COMMENT = 18;
	public static readonly WS = 19;
	public static readonly BLOCK_COMMENT = 20;
	public static readonly LINE_JOINING = 21;
	public static readonly UNEXPECTED = 22;
	public static readonly RULE_statement = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_declarations = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_arguments = 4;
	public static readonly RULE_argument = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_value = 7;
	public static readonly RULE_body = 8;
	public static readonly RULE_source = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "expression", "declarations", "declaration", "arguments", 
		"argument", "type", "value", "body", "source",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'.'", "'::'", "','", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "LAMBDA", "FLOAT", "INTEGER", 
		"STRING", "PREPROCESSOR", "OP", "DOT", "META", "COMMA", "ASSIGN", "COLON", 
		"ID", "NL", "LINE_COMMENT", "WS", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_statement);
		try {
			this.state = 23;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.declaration();
				}
				break;

			case 3:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 22;
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
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 26;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new IntegerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 27;
				this.match(XonParser.INTEGER);
				}
				break;

			case 3:
				{
				_localctx = new FloatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 28;
				this.match(XonParser.FLOAT);
				}
				break;

			case 4:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 29;
				this.match(XonParser.STRING);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 30;
				this.arguments();
				}
				break;

			case 6:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 31;
				this.match(XonParser.OP);
				this.state = 32;
				this.expression(4);
				}
				break;

			case 7:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 33;
				this.match(XonParser.ID);
				}
				break;

			case 8:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 34;
					this.declarations();
					}
					}
					this.state = 39;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 40;
				this.match(XonParser.LAMBDA);
				this.state = 41;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 58;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 56;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 44;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 45;
						this.match(XonParser.OP);
						this.state = 46;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 47;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 48;
						_la = this._input.LA(1);
						if (!(_la === XonParser.DOT || _la === XonParser.META)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 50;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
						case 1:
							{
							this.state = 49;
							this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 3:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 52;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 53;
						this.arguments();
						}
						break;

					case 4:
						{
						_localctx = new BodyExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 54;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 55;
						this.body();
						}
						break;
					}
					}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(XonParser.OPEN);
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OP || _la === XonParser.ID) {
				{
				this.state = 62;
				this.declaration();
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 63;
						this.match(XonParser.COMMA);
						this.state = 64;
						this.declaration();
						}
						}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 70;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 75;
			this.match(XonParser.CLOSE);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				_localctx._modifier = this.match(XonParser.ID);
				this.state = 78;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.OP || _la === XonParser.ID)) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 79;
					this.declarations();
					}
					}
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 85;
					this.type();
					}
				}

				this.state = 89;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 88;
					this.value();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 91;
					_localctx._modifier = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 94;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.OP || _la === XonParser.ID)) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 95;
					this.declarations();
					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 106;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.COLON:
					{
					this.state = 101;
					this.type();
					this.state = 103;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						this.state = 102;
						this.value();
						}
						break;
					}
					}
					break;
				case XonParser.ASSIGN:
				case XonParser.NL:
					{
					this.state = 105;
					this.value();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 108;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.OP || _la === XonParser.ID)) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(XonParser.OPEN);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
				{
				this.state = 112;
				this.argument();
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 113;
						this.match(XonParser.COMMA);
						this.state = 114;
						this.argument();
						}
						}
					}
					this.state = 119;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 120;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 125;
			this.match(XonParser.CLOSE);
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
		this.enterRule(_localctx, 10, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 127;
				this.match(XonParser.ID);
				this.state = 128;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 131;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(XonParser.COLON);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
				{
				this.state = 134;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_value);
		let _la: number;
		try {
			this.state = 142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.match(XonParser.ASSIGN);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
					{
					this.state = 138;
					this.expression(0);
					}
				}

				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(XonParser.NL);
			this.state = 145;
			this.match(XonParser.INDENT);
			this.state = 146;
			this.source();
			this.state = 147;
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
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_source);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 149;
				this.match(XonParser.NL);
				}
				break;
			}
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 152;
					this.statement();
					this.state = 153;
					_localctx._NL = this.match(XonParser.NL);
					_localctx._nl.push(_localctx._NL);
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID) | (1 << XonParser.LINE_COMMENT))) !== 0)) {
				{
				this.state = 160;
				this.statement();
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.NL) {
				{
				this.state = 163;
				this.match(XonParser.NL);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18\xA9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
		"\x05\x02\x1A\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03&\n\x03\f\x03\x0E\x03)\v\x03\x03\x03" +
		"\x03\x03\x05\x03-\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x035\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03;\n\x03\f\x03\x0E" +
		"\x03>\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04D\n\x04\f\x04\x0E\x04" +
		"G\v\x04\x03\x04\x05\x04J\n\x04\x05\x04L\n\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x07\x05S\n\x05\f\x05\x0E\x05V\v\x05\x03\x05\x05\x05Y" +
		"\n\x05\x03\x05\x05\x05\\\n\x05\x03\x05\x05\x05_\n\x05\x03\x05\x03\x05" +
		"\x07\x05c\n\x05\f\x05\x0E\x05f\v\x05\x03\x05\x03\x05\x05\x05j\n\x05\x03" +
		"\x05\x05\x05m\n\x05\x03\x05\x05\x05p\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06v\n\x06\f\x06\x0E\x06y\v\x06\x03\x06\x05\x06|\n\x06\x05\x06" +
		"~\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07\x84\n\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x05\b\x8A\n\b\x03\t\x03\t\x05\t\x8E\n\t\x03\t\x05\t\x91" +
		"\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x05\v\x99\n\v\x03\v\x03\v\x03" +
		"\v\x07\v\x9E\n\v\f\v\x0E\v\xA1\v\v\x03\v\x05\v\xA4\n\v\x03\v\x05\v\xA7" +
		"\n\v\x03\v\x02\x02\x03\x04\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x04\x03\x02\r\x0E\x04\x02\f\f\x12" +
		"\x12\x02\xC4\x02\x19\x03\x02\x02\x02\x04,\x03\x02\x02\x02\x06?\x03\x02" +
		"\x02\x02\bo\x03\x02\x02\x02\nq\x03\x02\x02\x02\f\x83\x03\x02\x02\x02\x0E" +
		"\x87\x03\x02\x02\x02\x10\x90\x03\x02\x02\x02\x12\x92\x03\x02\x02\x02\x14" +
		"\x98\x03\x02\x02\x02\x16\x1A\x07\x14\x02\x02\x17\x1A\x05\b\x05\x02\x18" +
		"\x1A\x05\x04\x03\x02\x19\x16\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19" +
		"\x18\x03\x02\x02\x02\x1A\x03\x03\x02\x02\x02\x1B\x1C\b\x03\x01\x02\x1C" +
		"-\x07\v\x02\x02\x1D-\x07\t\x02\x02\x1E-\x07\b\x02\x02\x1F-\x07\n\x02\x02" +
		" -\x05\n\x06\x02!\"\x07\f\x02\x02\"-\x05\x04\x03\x06#-\x07\x12\x02\x02" +
		"$&\x05\x06\x04\x02%$\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02" +
		"\x02\'(\x03\x02\x02\x02(*\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\x07\x07" +
		"\x02\x02+-\x05\x04\x03\x03,\x1B\x03\x02\x02\x02,\x1D\x03\x02\x02\x02," +
		"\x1E\x03\x02\x02\x02,\x1F\x03\x02\x02\x02, \x03\x02\x02\x02,!\x03\x02" +
		"\x02\x02,#\x03\x02\x02\x02,\'\x03\x02\x02\x02-<\x03\x02\x02\x02./\f\x07" +
		"\x02\x02/0\x07\f\x02\x020;\x05\x04\x03\b12\f\t\x02\x0224\t\x02\x02\x02" +
		"35\x07\x12\x02\x0243\x03\x02\x02\x0245\x03\x02\x02\x025;\x03\x02\x02\x02" +
		"67\f\b\x02\x027;\x05\n\x06\x0289\f\x04\x02\x029;\x05\x12\n\x02:.\x03\x02" +
		"\x02\x02:1\x03\x02\x02\x02:6\x03\x02\x02\x02:8\x03\x02\x02\x02;>\x03\x02" +
		"\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\x05\x03\x02\x02\x02><\x03" +
		"\x02\x02\x02?K\x07\x05\x02\x02@E\x05\b\x05\x02AB\x07\x0F\x02\x02BD\x05" +
		"\b\x05\x02CA\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03" +
		"\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02HJ\x07\x0F\x02\x02IH\x03" +
		"\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02K@\x03\x02\x02\x02KL\x03" +
		"\x02\x02\x02LM\x03\x02\x02\x02MN\x07\x06\x02\x02N\x07\x03\x02\x02\x02" +
		"OP\x07\x12\x02\x02PT\t\x03\x02\x02QS\x05\x06\x04\x02RQ\x03\x02\x02\x02" +
		"SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UX\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02WY\x05\x0E\b\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Y[\x03\x02\x02\x02Z\\\x05\x10\t\x02[Z\x03\x02\x02\x02[\\\x03\x02\x02\x02" +
		"\\p\x03\x02\x02\x02]_\x07\x12\x02\x02^]\x03\x02\x02\x02^_\x03\x02\x02" +
		"\x02_`\x03\x02\x02\x02`d\t\x03\x02\x02ac\x05\x06\x04\x02ba\x03\x02\x02" +
		"\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02el\x03\x02\x02" +
		"\x02fd\x03\x02\x02\x02gi\x05\x0E\b\x02hj\x05\x10\t\x02ih\x03\x02\x02\x02" +
		"ij\x03\x02\x02\x02jm\x03\x02\x02\x02km\x05\x10\t\x02lg\x03\x02\x02\x02" +
		"lk\x03\x02\x02\x02mp\x03\x02\x02\x02np\t\x03\x02\x02oO\x03\x02\x02\x02" +
		"o^\x03\x02\x02\x02on\x03\x02\x02\x02p\t\x03\x02\x02\x02q}\x07\x05\x02" +
		"\x02rw\x05\f\x07\x02st\x07\x0F\x02\x02tv\x05\f\x07\x02us\x03\x02\x02\x02" +
		"vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x{\x03\x02\x02\x02" +
		"yw\x03\x02\x02\x02z|\x07\x0F\x02\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02" +
		"|~\x03\x02\x02\x02}r\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02" +
		"\x02\x7F\x80\x07\x06\x02\x02\x80\v\x03\x02\x02\x02\x81\x82\x07\x12\x02" +
		"\x02\x82\x84\x07\x10\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02" +
		"\x02\x84\x85\x03\x02\x02\x02\x85\x86\x05\x04\x03\x02\x86\r\x03\x02\x02" +
		"\x02\x87\x89\x07\x11\x02\x02\x88\x8A\x05\x04\x03\x02\x89\x88\x03\x02\x02" +
		"\x02\x89\x8A\x03\x02\x02\x02\x8A\x0F\x03\x02\x02\x02\x8B\x8D\x07\x10\x02" +
		"\x02\x8C\x8E\x05\x04\x03\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02" +
		"\x02\x8E\x91\x03\x02\x02\x02\x8F\x91\x05\x12\n\x02\x90\x8B\x03\x02\x02" +
		"\x02\x90\x8F\x03\x02\x02\x02\x91\x11\x03\x02\x02\x02\x92\x93\x07\x13\x02" +
		"\x02\x93\x94\x07\x03\x02\x02\x94\x95\x05\x14\v\x02\x95\x96\x07\x04\x02" +
		"\x02\x96\x13\x03\x02\x02\x02\x97\x99\x07\x13\x02\x02\x98\x97\x03\x02\x02" +
		"\x02\x98\x99\x03\x02\x02\x02\x99\x9F\x03\x02\x02\x02\x9A\x9B\x05\x02\x02" +
		"\x02\x9B\x9C\x07\x13\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x9A\x03\x02\x02" +
		"\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02" +
		"\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA4\x05\x02\x02" +
		"\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02" +
		"\x02\xA5\xA7\x07\x13\x02\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03\x02\x02" +
		"\x02\xA7\x15\x03\x02\x02\x02\x1E\x19\',4:<EIKTX[^dilow{}\x83\x89\x8D\x90" +
		"\x98\x9F\xA3\xA6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
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
export class CommentStatementContext extends StatementContext {
	public LINE_COMMENT(): TerminalNode { return this.getToken(XonParser.LINE_COMMENT, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
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
export class IntegerExpressionContext extends ExpressionContext {
	public INTEGER(): TerminalNode { return this.getToken(XonParser.INTEGER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatExpressionContext extends ExpressionContext {
	public FLOAT(): TerminalNode { return this.getToken(XonParser.FLOAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringExpressionContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(XonParser.STRING, 0); }
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
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOT, 0); }
	public META(): TerminalNode | undefined { return this.tryGetToken(XonParser.META, 0); }
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP(): TerminalNode { return this.getToken(XonParser.OP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public OP(): TerminalNode { return this.getToken(XonParser.OP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class BodyExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public declarations(): DeclarationsContext[];
	public declarations(i: number): DeclarationsContext;
	public declarations(i?: number): DeclarationsContext | DeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationsContext);
		} else {
			return this.getRuleContext(i, DeclarationsContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DeclarationsContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(XonParser.OPEN, 0); }
	public CLOSE(): TerminalNode { return this.getToken(XonParser.CLOSE, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
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
	public get ruleIndex(): number { return XonParser.RULE_declarations; }
}


export class DeclarationContext extends ParserRuleContext {
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
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	public declarations(): DeclarationsContext[];
	public declarations(i: number): DeclarationsContext;
	public declarations(i?: number): DeclarationsContext | DeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationsContext);
		} else {
			return this.getRuleContext(i, DeclarationsContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_declaration; }
}


export class ArgumentsContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(XonParser.OPEN, 0); }
	public CLOSE(): TerminalNode { return this.getToken(XonParser.CLOSE, 0); }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class TypeContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_type; }
}


export class ValueContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_value; }
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


