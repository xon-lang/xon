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
	public static readonly ACTUAL = 5;
	public static readonly BREAK = 6;
	public static readonly CONTINUE = 7;
	public static readonly DO = 8;
	public static readonly ELSE = 9;
	public static readonly EXPECT = 10;
	public static readonly EXPORT = 11;
	public static readonly FOR = 12;
	public static readonly IF = 13;
	public static readonly RETURN = 14;
	public static readonly WHILE = 15;
	public static readonly COMMA = 16;
	public static readonly ASSIGN = 17;
	public static readonly QUESTION = 18;
	public static readonly COLON = 19;
	public static readonly META = 20;
	public static readonly DOT = 21;
	public static readonly LAMBDA = 22;
	public static readonly FLOAT_LITERAL = 23;
	public static readonly INTEGER_LITERAL = 24;
	public static readonly STRING_LITERAL = 25;
	public static readonly PREPROCESSOR = 26;
	public static readonly ID = 27;
	public static readonly OP = 28;
	public static readonly NL = 29;
	public static readonly LINE_COMMENT = 30;
	public static readonly WS = 31;
	public static readonly BLOCK_COMMENT = 32;
	public static readonly LINE_JOINING = 33;
	public static readonly UNEXPECTED = 34;
	public static readonly RULE_statement = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_literal = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_declarations = 5;
	public static readonly RULE_arguments = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_body = 8;
	public static readonly RULE_source = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "expression", "literal", "declaration", "type", "declarations", 
		"arguments", "argument", "body", "source",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'actual'", "'break'", 
		"'continue'", "'do'", "'else'", "'expect'", "'export'", "'for'", "'if'", 
		"'return'", "'while'", "','", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "RETURN", "WHILE", "COMMA", 
		"ASSIGN", "QUESTION", "COLON", "META", "DOT", "LAMBDA", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "OP", "NL", 
		"LINE_COMMENT", "WS", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
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
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.match(XonParser.EXPORT);
				this.state = 22;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 23;
				this.match(XonParser.FOR);
				this.state = 28;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 25;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 24;
						this.declaration();
						}
						break;
					}
					this.state = 27;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 30;
				this.expression(0);
				this.state = 31;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 33;
				this.match(XonParser.WHILE);
				this.state = 34;
				this.expression(0);
				this.state = 35;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 37;
				this.match(XonParser.DO);
				this.state = 38;
				this.body();
				this.state = 39;
				this.match(XonParser.WHILE);
				this.state = 40;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 42;
				this.match(XonParser.IF);
				this.state = 43;
				this.expression(0);
				this.state = 44;
				this.body();
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 45;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 50;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 51;
					this.match(XonParser.ELSE);
					this.state = 52;
					this.body();
					}
				}

				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 55;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 56;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 57;
				this.match(XonParser.RETURN);
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
					{
					this.state = 58;
					this.expression(0);
					}
				}

				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 61;
				this.match(XonParser.ACTUAL);
				this.state = 62;
				this.expression(0);
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 63;
					this.match(XonParser.NL);
					}
					}
					this.state = 68;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 69;
				this.match(XonParser.EXPECT);
				this.state = 70;
				this.expression(0);
				}
				break;

			case 11:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 72;
				this.declaration();
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 73;
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
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 77;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 78;
				this.arguments();
				}
				break;

			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 79;
				this.literal();
				}
				break;

			case 4:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.match(XonParser.ID);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 81;
				this.match(XonParser.OP);
				this.state = 82;
				this.expression(2);
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 83;
					this.declarations();
					}
					}
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 89;
				this.match(XonParser.LAMBDA);
				this.state = 90;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 112;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 110;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 93;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 94;
						this.match(XonParser.OP);
						this.state = 95;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 96;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 97;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 99;
						this.match(XonParser.DOT);
						this.state = 101;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
						case 1:
							{
							this.state = 100;
							this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 4:
						{
						_localctx = new MetaExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 103;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 104;
						this.match(XonParser.META);
						this.state = 106;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
						case 1:
							{
							this.state = 105;
							this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 5:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 108;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 109;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
		this.enterRule(_localctx, 4, XonParser.RULE_literal);
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 115;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 117;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new DestructureDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.declarations();
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 121;
					this.type();
					}
				}

				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 124;
					this.match(XonParser.ASSIGN);
					this.state = 125;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new ParameterDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.match(XonParser.ID);
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 129;
					this.type();
					}
				}

				this.state = 137;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.match(XonParser.ASSIGN);
					this.state = 134;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						this.state = 133;
						this.expression(0);
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 136;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new OperatorDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 139;
				this.match(XonParser.OP);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 140;
					this.type();
					}
				}

				this.state = 148;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 143;
					this.match(XonParser.ASSIGN);
					this.state = 145;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						this.state = 144;
						this.expression(0);
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 147;
					this.body();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new DefinitionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 150;
				this.match(XonParser.ID);
				this.state = 151;
				this.match(XonParser.ID);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN) {
					{
					this.state = 152;
					this.declarations();
					}
				}

				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 155;
					this.type();
					}
				}

				this.state = 159;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 158;
					this.body();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(XonParser.COLON);
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 164;
				this.expression(0);
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
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(XonParser.OPEN);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
				{
				this.state = 168;
				this.declaration();
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 169;
						this.match(XonParser.COMMA);
						this.state = 170;
						this.declaration();
						}
						}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 176;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 181;
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(XonParser.OPEN);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
				{
				this.state = 184;
				this.argument();
				this.state = 189;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 185;
						this.match(XonParser.COMMA);
						this.state = 186;
						this.argument();
						}
						}
					}
					this.state = 191;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 192;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 197;
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
		this.enterRule(_localctx, 14, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 199;
				this.match(XonParser.ID);
				this.state = 200;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 203;
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(XonParser.NL);
			this.state = 206;
			this.match(XonParser.INDENT);
			this.state = 207;
			this.source();
			this.state = 208;
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
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 210;
				this.match(XonParser.NL);
				}
				break;
			}
			this.state = 218;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 213;
					this.statement();
					this.state = 214;
					_localctx._NL = this.match(XonParser.NL);
					_localctx._nl.push(_localctx._NL);
					}
					}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP) | (1 << XonParser.LINE_COMMENT))) !== 0)) {
				{
				this.state = 221;
				this.statement();
				}
			}

			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.NL) {
				{
				this.state = 224;
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
			return this.precpred(this._ctx, 3);

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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xE6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x05\x02\x1C\n\x02\x03\x02\x05\x02\x1F\n\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x021\n\x02\f\x02\x0E" +
		"\x024\v\x02\x03\x02\x03\x02\x05\x028\n\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x05\x02>\n\x02\x03\x02\x03\x02\x03\x02\x07\x02C\n\x02\f\x02\x0E\x02" +
		"F\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02M\n\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03W\n\x03" +
		"\f\x03\x0E\x03Z\v\x03\x03\x03\x03\x03\x05\x03^\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03h\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03m\n\x03\x03\x03\x03\x03\x07\x03q\n\x03\f\x03\x0E\x03" +
		"t\v\x03\x03\x04\x03\x04\x03\x04\x05\x04y\n\x04\x03\x05\x03\x05\x05\x05" +
		"}\n\x05\x03\x05\x03\x05\x05\x05\x81\n\x05\x03\x05\x03\x05\x05\x05\x85" +
		"\n\x05\x03\x05\x03\x05\x05\x05\x89\n\x05\x03\x05\x05\x05\x8C\n\x05\x03" +
		"\x05\x03\x05\x05\x05\x90\n\x05\x03\x05\x03\x05\x05\x05\x94\n\x05\x03\x05" +
		"\x05\x05\x97\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\x9C\n\x05\x03\x05\x05" +
		"\x05\x9F\n\x05\x03\x05\x05\x05\xA2\n\x05\x05\x05\xA4\n\x05\x03\x06\x03" +
		"\x06\x05\x06\xA8\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xAE\n\x07" +
		"\f\x07\x0E\x07\xB1\v\x07\x03\x07\x05\x07\xB4\n\x07\x05\x07\xB6\n\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xBE\n\b\f\b\x0E\b\xC1\v\b\x03" +
		"\b\x05\b\xC4\n\b\x05\b\xC6\n\b\x03\b\x03\b\x03\t\x03\t\x05\t\xCC\n\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x05\v\xD6\n\v\x03\v\x03\v" +
		"\x03\v\x07\v\xDB\n\v\f\v\x0E\v\xDE\v\v\x03\v\x05\v\xE1\n\v\x03\v\x05\v" +
		"\xE4\n\v\x03\v\x02\x02\x03\x04\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x02\x02\u0117\x02L\x03\x02\x02" +
		"\x02\x04]\x03\x02\x02\x02\x06x\x03\x02\x02\x02\b\xA3\x03\x02\x02\x02\n" +
		"\xA5\x03\x02\x02\x02\f\xA9\x03\x02\x02\x02\x0E\xB9\x03\x02\x02\x02\x10" +
		"\xCB\x03\x02\x02\x02\x12\xCF\x03\x02\x02\x02\x14\xD5\x03\x02\x02\x02\x16" +
		"M\x07 \x02\x02\x17\x18\x07\r\x02\x02\x18M\x05\x04\x03\x02\x19\x1E\x07" +
		"\x0E\x02\x02\x1A\x1C\x05\b\x05\x02\x1B\x1A\x03\x02\x02\x02\x1B\x1C\x03" +
		"\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1F\x07\x1D\x02\x02\x1E\x1B\x03" +
		"\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F \x03\x02\x02\x02 !\x05\x04\x03" +
		"\x02!\"\x05\x12\n\x02\"M\x03\x02\x02\x02#$\x07\x11\x02\x02$%\x05\x04\x03" +
		"\x02%&\x05\x12\n\x02&M\x03\x02\x02\x02\'(\x07\n\x02\x02()\x05\x12\n\x02" +
		")*\x07\x11\x02\x02*+\x05\x04\x03\x02+M\x03\x02\x02\x02,-\x07\x0F\x02\x02" +
		"-.\x05\x04\x03\x02.2\x05\x12\n\x02/1\x07\x1F\x02\x020/\x03\x02\x02\x02" +
		"14\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x0237\x03\x02\x02\x02" +
		"42\x03\x02\x02\x0256\x07\v\x02\x0268\x05\x12\n\x0275\x03\x02\x02\x027" +
		"8\x03\x02\x02\x028M\x03\x02\x02\x029M\x07\b\x02\x02:M\x07\t\x02\x02;=" +
		"\x07\x10\x02\x02<>\x05\x04\x03\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02" +
		">M\x03\x02\x02\x02?@\x07\x07\x02\x02@D\x05\x04\x03\x02AC\x07\x1F\x02\x02" +
		"BA\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"EG\x03\x02\x02\x02FD\x03\x02\x02\x02GH\x07\f\x02\x02HI\x05\x04\x03\x02" +
		"IM\x03\x02\x02\x02JM\x05\b\x05\x02KM\x05\x04\x03\x02L\x16\x03\x02\x02" +
		"\x02L\x17\x03\x02\x02\x02L\x19\x03\x02\x02\x02L#\x03\x02\x02\x02L\'\x03" +
		"\x02\x02\x02L,\x03\x02\x02\x02L9\x03\x02\x02\x02L:\x03\x02\x02\x02L;\x03" +
		"\x02\x02\x02L?\x03\x02\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02M\x03" +
		"\x03\x02\x02\x02NO\b\x03\x01\x02O^\x07\x1C\x02\x02P^\x05\x0E\b\x02Q^\x05" +
		"\x06\x04\x02R^\x07\x1D\x02\x02ST\x07\x1E\x02\x02T^\x05\x04\x03\x04UW\x05" +
		"\f\x07\x02VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03" +
		"\x02\x02\x02Y[\x03\x02\x02\x02ZX\x03\x02\x02\x02[\\\x07\x18\x02\x02\\" +
		"^\x05\x04\x03\x03]N\x03\x02\x02\x02]P\x03\x02\x02\x02]Q\x03\x02\x02\x02" +
		"]R\x03\x02\x02\x02]S\x03\x02\x02\x02]X\x03\x02\x02\x02^r\x03\x02\x02\x02" +
		"_`\f\x05\x02\x02`a\x07\x1E\x02\x02aq\x05\x04\x03\x06bc\f\v\x02\x02cq\x07" +
		"\x14\x02\x02de\f\n\x02\x02eg\x07\x17\x02\x02fh\x07\x1D\x02\x02gf\x03\x02" +
		"\x02\x02gh\x03\x02\x02\x02hq\x03\x02\x02\x02ij\f\t\x02\x02jl\x07\x16\x02" +
		"\x02km\x07\x1D\x02\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02mq\x03\x02\x02" +
		"\x02no\f\b\x02\x02oq\x05\x0E\b\x02p_\x03\x02\x02\x02pb\x03\x02\x02\x02" +
		"pd\x03\x02\x02\x02pi\x03\x02\x02\x02pn\x03\x02\x02\x02qt\x03\x02\x02\x02" +
		"rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\x05\x03\x02\x02\x02tr\x03\x02\x02" +
		"\x02uy\x07\x1A\x02\x02vy\x07\x19\x02\x02wy\x07\x1B\x02\x02xu\x03\x02\x02" +
		"\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\x07\x03\x02\x02\x02z|\x05\f" +
		"\x07\x02{}\x05\n\x06\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02}\x80\x03" +
		"\x02\x02\x02~\x7F\x07\x13\x02\x02\x7F\x81\x05\x04\x03\x02\x80~\x03\x02" +
		"\x02\x02\x80\x81\x03\x02\x02\x02\x81\xA4\x03\x02\x02\x02\x82\x84\x07\x1D" +
		"\x02\x02\x83\x85\x05\n\x06\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02" +
		"\x02\x02\x85\x8B\x03\x02\x02\x02\x86\x88\x07\x13\x02\x02\x87\x89\x05\x04" +
		"\x03\x02\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8C\x03\x02" +
		"\x02\x02\x8A\x8C\x05\x12\n\x02\x8B\x86\x03\x02\x02\x02\x8B\x8A\x03\x02" +
		"\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\xA4\x03\x02\x02\x02\x8D\x8F\x07\x1E" +
		"\x02\x02\x8E\x90\x05\n\x06\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90\x96\x03\x02\x02\x02\x91\x93\x07\x13\x02\x02\x92\x94\x05\x04" +
		"\x03\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x97\x03\x02" +
		"\x02\x02\x95\x97\x05\x12\n\x02\x96\x91\x03\x02\x02\x02\x96\x95\x03\x02" +
		"\x02\x02\x96\x97\x03\x02\x02\x02\x97\xA4\x03\x02\x02\x02\x98\x99\x07\x1D" +
		"\x02\x02\x99\x9B\x07\x1D\x02\x02\x9A\x9C\x05\f\x07\x02\x9B\x9A\x03\x02" +
		"\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x9F\x05\n" +
		"\x06\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02" +
		"\x02\x02\xA0\xA2\x05\x12\n\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02" +
		"\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3z\x03\x02\x02\x02\xA3\x82\x03\x02" +
		"\x02\x02\xA3\x8D\x03\x02\x02\x02\xA3\x98\x03\x02\x02\x02\xA4\t\x03\x02" +
		"\x02\x02\xA5\xA7\x07\x15\x02\x02\xA6\xA8\x05\x04\x03\x02\xA7\xA6\x03\x02" +
		"\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\v\x03\x02\x02\x02\xA9\xB5\x07\x05" +
		"\x02\x02\xAA\xAF\x05\b\x05\x02\xAB\xAC\x07\x12\x02\x02\xAC\xAE\x05\b\x05" +
		"\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02" +
		"\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02" +
		"\x02\xB2\xB4\x07\x12\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
		"\x02\xB4\xB6\x03\x02\x02\x02\xB5\xAA\x03\x02\x02\x02\xB5\xB6\x03\x02\x02" +
		"\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07\x06\x02\x02\xB8\r\x03\x02\x02" +
		"\x02\xB9\xC5\x07\x05\x02\x02\xBA\xBF\x05\x10\t\x02\xBB\xBC\x07\x12\x02" +
		"\x02\xBC\xBE\x05\x10\t\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC1\x03\x02\x02" +
		"\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC3\x03\x02\x02" +
		"\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC4\x07\x12\x02\x02\xC3\xC2\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC6\x03\x02\x02\x02\xC5\xBA\x03\x02\x02" +
		"\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x07\x06\x02" +
		"\x02\xC8\x0F\x03\x02\x02\x02\xC9\xCA\x07\x1D\x02\x02\xCA\xCC\x07\x13\x02" +
		"\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x03\x02\x02" +
		"\x02\xCD\xCE\x05\x04\x03\x02\xCE\x11\x03\x02\x02\x02\xCF\xD0\x07\x1F\x02" +
		"\x02\xD0\xD1\x07\x03\x02\x02\xD1\xD2\x05\x14\v\x02\xD2\xD3\x07\x04\x02" +
		"\x02\xD3\x13\x03\x02\x02\x02\xD4\xD6\x07\x1F\x02\x02\xD5\xD4\x03\x02\x02" +
		"\x02\xD5\xD6\x03\x02\x02\x02\xD6\xDC\x03\x02\x02\x02\xD7\xD8\x05\x02\x02" +
		"\x02\xD8\xD9\x07\x1F\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD7\x03\x02\x02" +
		"\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02" +
		"\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE1\x05\x02\x02" +
		"\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE3\x03\x02\x02" +
		"\x02\xE2\xE4\x07\x1F\x02\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
		"\x02\xE4\x15\x03\x02\x02\x02(\x1B\x1E27=DLX]glprx|\x80\x84\x88\x8B\x8F" +
		"\x93\x96\x9B\x9E\xA1\xA3\xA7\xAF\xB3\xB5\xBF\xC3\xC5\xCB\xD5\xDC\xE0\xE3";
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
export class ExportStatementContext extends StatementContext {
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
export class AssertStatementContext extends StatementContext {
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
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
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
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
export class MethodExpressionContext extends ExpressionContext {
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


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class DestructureDeclarationContext extends DeclarationContext {
	public declarations(): DeclarationsContext {
		return this.getRuleContext(0, DeclarationsContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParameterDeclarationContext extends DeclarationContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorDeclarationContext extends DeclarationContext {
	public OP(): TerminalNode { return this.getToken(XonParser.OP, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DefinitionDeclarationContext extends DeclarationContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public declarations(): DeclarationsContext | undefined {
		return this.tryGetRuleContext(0, DeclarationsContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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


