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
	public static readonly BREAK = 5;
	public static readonly CONTINUE = 6;
	public static readonly DO = 7;
	public static readonly ELSE = 8;
	public static readonly EXPORT = 9;
	public static readonly FOR = 10;
	public static readonly IF = 11;
	public static readonly IMPORT = 12;
	public static readonly IN = 13;
	public static readonly RETURN = 14;
	public static readonly WHILE = 15;
	public static readonly LAMBDA = 16;
	public static readonly FLOAT = 17;
	public static readonly INTEGER = 18;
	public static readonly STRING = 19;
	public static readonly PREPROCESSOR = 20;
	public static readonly OP = 21;
	public static readonly DOT = 22;
	public static readonly META = 23;
	public static readonly COMMA = 24;
	public static readonly ASSIGN = 25;
	public static readonly COLON = 26;
	public static readonly ID = 27;
	public static readonly NL = 28;
	public static readonly LINE_COMMENT = 29;
	public static readonly WS = 30;
	public static readonly BLOCK_COMMENT = 31;
	public static readonly LINE_JOINING = 32;
	public static readonly UNEXPECTED = 33;
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
		undefined, undefined, undefined, undefined, undefined, "'break'", "'continue'", 
		"'do'", "'else'", "'export'", "'for'", "'if'", "'import'", "'in'", "'return'", 
		"'while'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"'.'", "'::'", "','", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "BREAK", "CONTINUE", "DO", 
		"ELSE", "EXPORT", "FOR", "IF", "IMPORT", "IN", "RETURN", "WHILE", "LAMBDA", 
		"FLOAT", "INTEGER", "STRING", "PREPROCESSOR", "OP", "DOT", "META", "COMMA", 
		"ASSIGN", "COLON", "ID", "NL", "LINE_COMMENT", "WS", "BLOCK_COMMENT", 
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 69;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.match(XonParser.IMPORT);
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
					{
					this.state = 22;
					this.expression(0);
					}
				}

				}
				break;

			case 3:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 25;
				this.match(XonParser.EXPORT);
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
					{
					this.state = 26;
					this.expression(0);
					}
				}

				}
				break;

			case 4:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 29;
				this.match(XonParser.FOR);
				this.state = 34;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.OP || _la === XonParser.ID) {
						{
						this.state = 30;
						this.declaration();
						}
					}

					this.state = 33;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 36;
				this.expression(0);
				this.state = 37;
				this.body();
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 39;
				this.match(XonParser.WHILE);
				this.state = 40;
				this.expression(0);
				this.state = 41;
				this.body();
				}
				break;

			case 6:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 43;
				this.match(XonParser.DO);
				this.state = 44;
				this.body();
				this.state = 45;
				this.match(XonParser.WHILE);
				this.state = 46;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 48;
				this.match(XonParser.IF);
				this.state = 49;
				this.expression(0);
				this.state = 50;
				this.body();
				this.state = 54;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 51;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 56;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 57;
					this.match(XonParser.ELSE);
					this.state = 58;
					this.body();
					}
				}

				}
				break;

			case 8:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 61;
				this.match(XonParser.BREAK);
				}
				break;

			case 9:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 62;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 10:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 63;
				this.match(XonParser.RETURN);
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
					{
					this.state = 64;
					this.expression(0);
					}
				}

				}
				break;

			case 11:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 67;
				this.declaration();
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 68;
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
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 72;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new IntegerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 73;
				this.match(XonParser.INTEGER);
				}
				break;

			case 3:
				{
				_localctx = new FloatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.match(XonParser.FLOAT);
				}
				break;

			case 4:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 75;
				this.match(XonParser.STRING);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 76;
				this.arguments();
				}
				break;

			case 6:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 77;
				this.match(XonParser.OP);
				this.state = 78;
				this.expression(3);
				}
				break;

			case 7:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 79;
				this.match(XonParser.ID);
				}
				break;

			case 8:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 80;
					this.declarations();
					}
					}
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 86;
				this.match(XonParser.LAMBDA);
				this.state = 87;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 106;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 104;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 90;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 91;
						this.match(XonParser.OP);
						this.state = 92;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 93;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 94;
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
						this.state = 96;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
						case 1:
							{
							this.state = 95;
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
						this.state = 98;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 100;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 99;
								this.arguments();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 102;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 108;
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
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(XonParser.OPEN);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OP || _la === XonParser.ID) {
				{
				this.state = 110;
				this.declaration();
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 111;
						this.match(XonParser.COMMA);
						this.state = 112;
						this.declaration();
						}
						}
					}
					this.state = 117;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 118;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 123;
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
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				_localctx._modifier = this.match(XonParser.ID);
				this.state = 126;
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
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 127;
					this.declarations();
					}
					}
					this.state = 132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 133;
					this.type();
					}
				}

				this.state = 137;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 136;
					this.value();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 139;
					_localctx._modifier = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 142;
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
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 143;
					this.declarations();
					}
					}
					this.state = 148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 154;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.COLON:
					{
					this.state = 149;
					this.type();
					this.state = 151;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						this.state = 150;
						this.value();
						}
						break;
					}
					}
					break;
				case XonParser.ASSIGN:
				case XonParser.NL:
					{
					this.state = 153;
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
				this.state = 156;
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
			this.state = 159;
			this.match(XonParser.OPEN);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
				{
				this.state = 160;
				this.argument();
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 161;
						this.match(XonParser.COMMA);
						this.state = 162;
						this.argument();
						}
						}
					}
					this.state = 167;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 168;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 173;
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
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 175;
				this.match(XonParser.ID);
				this.state = 176;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 179;
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
			this.state = 181;
			this.match(XonParser.COLON);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
				{
				this.state = 182;
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
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.match(XonParser.ASSIGN);
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID))) !== 0)) {
					{
					this.state = 186;
					this.expression(0);
					}
				}

				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
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
			this.state = 192;
			this.match(XonParser.NL);
			this.state = 193;
			this.match(XonParser.INDENT);
			this.state = 194;
			this.source();
			this.state = 195;
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
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 197;
				this.match(XonParser.NL);
				}
				break;
			}
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 200;
					this.statement();
					this.state = 201;
					_localctx._NL = this.match(XonParser.NL);
					_localctx._nl.push(_localctx._NL);
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.OP) | (1 << XonParser.ID) | (1 << XonParser.LINE_COMMENT))) !== 0)) {
				{
				this.state = 208;
				this.statement();
				}
			}

			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.NL) {
				{
				this.state = 211;
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
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xD9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
		"\x05\x02\x1A\n\x02\x03\x02\x03\x02\x05\x02\x1E\n\x02\x03\x02\x03\x02\x05" +
		"\x02\"\n\x02\x03\x02\x05\x02%\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x07\x027\n\x02\f\x02\x0E\x02:\v\x02\x03\x02\x03\x02" +
		"\x05\x02>\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02D\n\x02\x03\x02" +
		"\x03\x02\x05\x02H\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03T\n\x03\f\x03\x0E\x03W\v\x03\x03" +
		"\x03\x03\x03\x05\x03[\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03c\n\x03\x03\x03\x03\x03\x06\x03g\n\x03\r\x03\x0E\x03h\x07" +
		"\x03k\n\x03\f\x03\x0E\x03n\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"t\n\x04\f\x04\x0E\x04w\v\x04\x03\x04\x05\x04z\n\x04\x05\x04|\n\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\x83\n\x05\f\x05\x0E\x05\x86" +
		"\v\x05\x03\x05\x05\x05\x89\n\x05\x03\x05\x05\x05\x8C\n\x05\x03\x05\x05" +
		"\x05\x8F\n\x05\x03\x05\x03\x05\x07\x05\x93\n\x05\f\x05\x0E\x05\x96\v\x05" +
		"\x03\x05\x03\x05\x05\x05\x9A\n\x05\x03\x05\x05\x05\x9D\n\x05\x03\x05\x05" +
		"\x05\xA0\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xA6\n\x06\f\x06" +
		"\x0E\x06\xA9\v\x06\x03\x06\x05\x06\xAC\n\x06\x05\x06\xAE\n\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x05\x07\xB4\n\x07\x03\x07\x03\x07\x03\b\x03\b" +
		"\x05\b\xBA\n\b\x03\t\x03\t\x05\t\xBE\n\t\x03\t\x05\t\xC1\n\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x05\v\xC9\n\v\x03\v\x03\v\x03\v\x07\v\xCE\n" +
		"\v\f\v\x0E\v\xD1\v\v\x03\v\x05\v\xD4\n\v\x03\v\x05\v\xD7\n\v\x03\v\x02" +
		"\x02\x03\x04\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x02\x04\x03\x02\x18\x19\x04\x02\x17\x17\x1D\x1D\x02\u0104" +
		"\x02G\x03\x02\x02\x02\x04Z\x03\x02\x02\x02\x06o\x03\x02\x02\x02\b\x9F" +
		"\x03\x02\x02\x02\n\xA1\x03\x02\x02\x02\f\xB3\x03\x02\x02\x02\x0E\xB7\x03" +
		"\x02\x02\x02\x10\xC0\x03\x02\x02\x02\x12\xC2\x03\x02\x02\x02\x14\xC8\x03" +
		"\x02\x02\x02\x16H\x07\x1F\x02\x02\x17\x19\x07\x0E\x02\x02\x18\x1A\x05" +
		"\x04\x03\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1AH\x03" +
		"\x02\x02\x02\x1B\x1D\x07\v\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03" +
		"\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1EH\x03\x02\x02\x02\x1F$\x07\f\x02" +
		"\x02 \"\x05\b\x05\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02" +
		"\x02\x02#%\x07\x0F\x02\x02$!\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x03\x02" +
		"\x02\x02&\'\x05\x04\x03\x02\'(\x05\x12\n\x02(H\x03\x02\x02\x02)*\x07\x11" +
		"\x02\x02*+\x05\x04\x03\x02+,\x05\x12\n\x02,H\x03\x02\x02\x02-.\x07\t\x02" +
		"\x02./\x05\x12\n\x02/0\x07\x11\x02\x0201\x05\x04\x03\x021H\x03\x02\x02" +
		"\x0223\x07\r\x02\x0234\x05\x04\x03\x0248\x05\x12\n\x0257\x07\x1E\x02\x02" +
		"65\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x02" +
		"9=\x03\x02\x02\x02:8\x03\x02\x02\x02;<\x07\n\x02\x02<>\x05\x12\n\x02=" +
		";\x03\x02\x02\x02=>\x03\x02\x02\x02>H\x03\x02\x02\x02?H\x07\x07\x02\x02" +
		"@H\x07\b\x02\x02AC\x07\x10\x02\x02BD\x05\x04\x03\x02CB\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DH\x03\x02\x02\x02EH\x05\b\x05\x02FH\x05\x04\x03\x02" +
		"G\x16\x03\x02\x02\x02G\x17\x03\x02\x02\x02G\x1B\x03\x02\x02\x02G\x1F\x03" +
		"\x02\x02\x02G)\x03\x02\x02\x02G-\x03\x02\x02\x02G2\x03\x02\x02\x02G?\x03" +
		"\x02\x02\x02G@\x03\x02\x02\x02GA\x03\x02\x02\x02GE\x03\x02\x02\x02GF\x03" +
		"\x02\x02\x02H\x03\x03\x02\x02\x02IJ\b\x03\x01\x02J[\x07\x16\x02\x02K[" +
		"\x07\x14\x02\x02L[\x07\x13\x02\x02M[\x07\x15\x02\x02N[\x05\n\x06\x02O" +
		"P\x07\x17\x02\x02P[\x05\x04\x03\x05Q[\x07\x1D\x02\x02RT\x05\x06\x04\x02" +
		"SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02" +
		"VX\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x07\x12\x02\x02Y[\x05\x04\x03\x03" +
		"ZI\x03\x02\x02\x02ZK\x03\x02\x02\x02ZL\x03\x02\x02\x02ZM\x03\x02\x02\x02" +
		"ZN\x03\x02\x02\x02ZO\x03\x02\x02\x02ZQ\x03\x02\x02\x02ZU\x03\x02\x02\x02" +
		"[l\x03\x02\x02\x02\\]\f\x06\x02\x02]^\x07\x17\x02\x02^k\x05\x04\x03\x07" +
		"_`\f\b\x02\x02`b\t\x02\x02\x02ac\x07\x1D\x02\x02ba\x03\x02\x02\x02bc\x03" +
		"\x02\x02\x02ck\x03\x02\x02\x02df\f\x07\x02\x02eg\x05\n\x06\x02fe\x03\x02" +
		"\x02\x02gh\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x03\x02" +
		"\x02\x02j\\\x03\x02\x02\x02j_\x03\x02\x02\x02jd\x03\x02\x02\x02kn\x03" +
		"\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x05\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02o{\x07\x05\x02\x02pu\x05\b\x05\x02qr\x07\x1A\x02\x02" +
		"rt\x05\b\x05\x02sq\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02" +
		"uv\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02xz\x07\x1A\x02\x02" +
		"yx\x03\x02\x02\x02yz\x03\x02\x02\x02z|\x03\x02\x02\x02{p\x03\x02\x02\x02" +
		"{|\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x07\x06\x02\x02~\x07\x03\x02\x02" +
		"\x02\x7F\x80\x07\x1D\x02\x02\x80\x84\t\x03\x02\x02\x81\x83\x05\x06\x04" +
		"\x02\x82\x81\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02" +
		"\x02\x84\x85\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02" +
		"\x02\x87\x89\x05\x0E\b\x02\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02\x02" +
		"\x02\x89\x8B\x03\x02\x02\x02\x8A\x8C\x05\x10\t\x02\x8B\x8A\x03\x02\x02" +
		"\x02\x8B\x8C\x03\x02\x02\x02\x8C\xA0\x03\x02\x02\x02\x8D\x8F\x07\x1D\x02" +
		"\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02\x02" +
		"\x02\x90\x94\t\x03\x02\x02\x91\x93\x05\x06\x04\x02\x92\x91\x03\x02\x02" +
		"\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\x9C\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x99\x05\x0E\b" +
		"\x02\x98\x9A\x05\x10\t\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02" +
		"\x02\x9A\x9D\x03\x02\x02\x02\x9B\x9D\x05\x10\t\x02\x9C\x97\x03\x02\x02" +
		"\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\xA0\t\x03\x02" +
		"\x02\x9F\x7F\x03\x02\x02\x02\x9F\x8E\x03\x02\x02\x02\x9F\x9E\x03\x02\x02" +
		"\x02\xA0\t\x03\x02\x02\x02\xA1\xAD\x07\x05\x02\x02\xA2\xA7\x05\f\x07\x02" +
		"\xA3\xA4\x07\x1A\x02\x02\xA4\xA6\x05\f\x07\x02\xA5\xA3\x03\x02\x02\x02" +
		"\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02" +
		"\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAC\x07\x1A\x02\x02" +
		"\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02" +
		"\xAD\xA2\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02" +
		"\xAF\xB0\x07\x06\x02\x02\xB0\v\x03\x02\x02\x02\xB1\xB2\x07\x1D\x02\x02" +
		"\xB2\xB4\x07\x1B\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x05\x04\x03\x02\xB6\r\x03\x02\x02\x02" +
		"\xB7\xB9\x07\x1C\x02\x02\xB8\xBA\x05\x04\x03\x02\xB9\xB8\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\x0F\x03\x02\x02\x02\xBB\xBD\x07\x1B\x02\x02" +
		"\xBC\xBE\x05\x04\x03\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xC1\x03\x02\x02\x02\xBF\xC1\x05\x12\n\x02\xC0\xBB\x03\x02\x02\x02" +
		"\xC0\xBF\x03\x02\x02\x02\xC1\x11\x03\x02\x02\x02\xC2\xC3\x07\x1E\x02\x02" +
		"\xC3\xC4\x07\x03\x02\x02\xC4\xC5\x05\x14\v\x02\xC5\xC6\x07\x04\x02\x02" +
		"\xC6\x13\x03\x02\x02\x02\xC7\xC9\x07\x1E\x02\x02\xC8\xC7\x03\x02\x02\x02" +
		"\xC8\xC9\x03\x02\x02\x02\xC9\xCF\x03\x02\x02\x02\xCA\xCB\x05\x02\x02\x02" +
		"\xCB\xCC\x07\x1E\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCA\x03\x02\x02\x02" +
		"\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02" +
		"\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD4\x05\x02\x02\x02" +
		"\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02" +
		"\xD5\xD7\x07\x1E\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02" +
		"\xD7\x15\x03\x02\x02\x02&\x19\x1D!$8=CGUZbhjluy{\x84\x88\x8B\x8E\x94\x99" +
		"\x9C\x9F\xA7\xAB\xAD\xB3\xB9\xBD\xC0\xC8\xCF\xD3\xD6";
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
export class ImportStatementContext extends StatementContext {
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
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
	public arguments(): ArgumentsContext[];
	public arguments(i: number): ArgumentsContext;
	public arguments(i?: number): ArgumentsContext | ArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentsContext);
		} else {
			return this.getRuleContext(i, ArgumentsContext);
		}
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


