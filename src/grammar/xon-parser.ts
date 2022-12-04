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
	public static readonly RULE_value = 5;
	public static readonly RULE_declarations = 6;
	public static readonly RULE_arguments = 7;
	public static readonly RULE_argument = 8;
	public static readonly RULE_body = 9;
	public static readonly RULE_source = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "expression", "literal", "declaration", "type", "value", 
		"declarations", "arguments", "argument", "body", "source",
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
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 22;
				this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 23;
				this.match(XonParser.EXPORT);
				this.state = 24;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 25;
				this.match(XonParser.FOR);
				this.state = 30;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 27;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 26;
						this.declaration();
						}
						break;
					}
					this.state = 29;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 32;
				this.expression(0);
				this.state = 33;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 35;
				this.match(XonParser.WHILE);
				this.state = 36;
				this.expression(0);
				this.state = 37;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 39;
				this.match(XonParser.DO);
				this.state = 40;
				this.body();
				this.state = 41;
				this.match(XonParser.WHILE);
				this.state = 42;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 44;
				this.match(XonParser.IF);
				this.state = 45;
				this.expression(0);
				this.state = 46;
				this.body();
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 47;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 52;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 53;
					this.match(XonParser.ELSE);
					this.state = 54;
					this.body();
					}
				}

				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 57;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 58;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 59;
				this.match(XonParser.RETURN);
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
					{
					this.state = 60;
					this.expression(0);
					}
				}

				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 63;
				this.match(XonParser.ACTUAL);
				this.state = 64;
				this.expression(0);
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 65;
					this.match(XonParser.NL);
					}
					}
					this.state = 70;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 71;
				this.match(XonParser.EXPECT);
				this.state = 72;
				this.expression(0);
				}
				break;

			case 11:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 74;
				this.declaration();
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 75;
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
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 79;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.arguments();
				}
				break;

			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 81;
				this.literal();
				}
				break;

			case 4:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 82;
				this.match(XonParser.ID);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 83;
				this.match(XonParser.OP);
				this.state = 84;
				this.expression(2);
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 85;
					this.declarations();
					}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 91;
				this.match(XonParser.LAMBDA);
				this.state = 92;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 114;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 112;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 95;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 96;
						this.match(XonParser.OP);
						this.state = 97;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 99;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 100;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 101;
						this.match(XonParser.DOT);
						this.state = 103;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
						case 1:
							{
							this.state = 102;
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
						this.state = 105;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 106;
						this.match(XonParser.META);
						this.state = 108;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
						case 1:
							{
							this.state = 107;
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
						this.state = 110;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 111;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 116;
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
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 119;
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
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				_localctx = new DefinitionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.match(XonParser.ID);
				this.state = 123;
				this.match(XonParser.ID);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 124;
					this.declarations();
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 130;
					this.type();
					}
				}

				this.state = 134;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 133;
					this.value();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new DestructureDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.declarations();
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 137;
					this.type();
					}
				}

				this.state = 141;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 140;
					this.value();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ParameterDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
				this.match(XonParser.ID);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 144;
					this.type();
					}
				}

				this.state = 148;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 147;
					this.value();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new OperatorDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 150;
				this.match(XonParser.OP);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 151;
					this.type();
					}
				}

				this.state = 155;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 154;
					this.value();
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
			this.state = 159;
			this.match(XonParser.COLON);
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 160;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_value);
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 163;
				this.match(XonParser.ASSIGN);
				this.state = 165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 164;
					this.expression(0);
					}
					break;
				}
				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
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
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(XonParser.OPEN);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
				{
				this.state = 171;
				this.declaration();
				this.state = 176;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 172;
						this.match(XonParser.COMMA);
						this.state = 173;
						this.declaration();
						}
						}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 179;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 184;
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
		this.enterRule(_localctx, 14, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(XonParser.OPEN);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
				{
				this.state = 187;
				this.argument();
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 188;
						this.match(XonParser.COMMA);
						this.state = 189;
						this.argument();
						}
						}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 195;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 200;
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
		this.enterRule(_localctx, 16, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 202;
				this.match(XonParser.ID);
				this.state = 203;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 206;
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
		this.enterRule(_localctx, 18, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(XonParser.NL);
			this.state = 209;
			this.match(XonParser.INDENT);
			this.state = 210;
			this.source();
			this.state = 211;
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
		this.enterRule(_localctx, 20, XonParser.RULE_source);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 213;
				this.match(XonParser.NL);
				}
				break;
			}
			this.state = 221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 216;
					this.statement();
					this.state = 217;
					_localctx._NL = this.match(XonParser.NL);
					_localctx._nl.push(_localctx._NL);
					}
					}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.STRING_LITERAL) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP) | (1 << XonParser.LINE_COMMENT))) !== 0)) {
				{
				this.state = 224;
				this.statement();
				}
			}

			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.NL) {
				{
				this.state = 227;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xE9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02\x1E\n\x02\x03\x02\x05\x02!\n\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x023\n\x02\f" +
		"\x02\x0E\x026\v\x02\x03\x02\x03\x02\x05\x02:\n\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x05\x02@\n\x02\x03\x02\x03\x02\x03\x02\x07\x02E\n\x02\f\x02" +
		"\x0E\x02H\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02O\n\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"Y\n\x03\f\x03\x0E\x03\\\v\x03\x03\x03\x03\x03\x05\x03`\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03j\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03o\n\x03\x03\x03\x03\x03\x07\x03s\n\x03\f\x03" +
		"\x0E\x03v\v\x03\x03\x04\x03\x04\x03\x04\x05\x04{\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x07\x05\x80\n\x05\f\x05\x0E\x05\x83\v\x05\x03\x05\x05\x05\x86" +
		"\n\x05\x03\x05\x05\x05\x89\n\x05\x03\x05\x03\x05\x05\x05\x8D\n\x05\x03" +
		"\x05\x05\x05\x90\n\x05\x03\x05\x03\x05\x05\x05\x94\n\x05\x03\x05\x05\x05" +
		"\x97\n\x05\x03\x05\x03\x05\x05\x05\x9B\n\x05\x03\x05\x05\x05\x9E\n\x05" +
		"\x05\x05\xA0\n\x05\x03\x06\x03\x06\x05\x06\xA4\n\x06\x03\x07\x03\x07\x05" +
		"\x07\xA8\n\x07\x03\x07\x05\x07\xAB\n\x07\x03\b\x03\b\x03\b\x03\b\x07\b" +
		"\xB1\n\b\f\b\x0E\b\xB4\v\b\x03\b\x05\b\xB7\n\b\x05\b\xB9\n\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x07\t\xC1\n\t\f\t\x0E\t\xC4\v\t\x03\t\x05\t" +
		"\xC7\n\t\x05\t\xC9\n\t\x03\t\x03\t\x03\n\x03\n\x05\n\xCF\n\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x05\f\xD9\n\f\x03\f\x03\f\x03\f" +
		"\x07\f\xDE\n\f\f\f\x0E\f\xE1\v\f\x03\f\x05\f\xE4\n\f\x03\f\x05\f\xE7\n" +
		"\f\x03\f\x02\x02\x03\x04\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x02\x02\u0117\x02N\x03\x02\x02" +
		"\x02\x04_\x03\x02\x02\x02\x06z\x03\x02\x02\x02\b\x9F\x03\x02\x02\x02\n" +
		"\xA1\x03\x02\x02\x02\f\xAA\x03\x02\x02\x02\x0E\xAC\x03\x02\x02\x02\x10" +
		"\xBC\x03\x02\x02\x02\x12\xCE\x03\x02\x02\x02\x14\xD2\x03\x02\x02\x02\x16" +
		"\xD8\x03\x02\x02\x02\x18O\x07 \x02\x02\x19\x1A\x07\r\x02\x02\x1AO\x05" +
		"\x04\x03\x02\x1B \x07\x0E\x02\x02\x1C\x1E\x05\b\x05\x02\x1D\x1C\x03\x02" +
		"\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F!\x07\x1D" +
		"\x02\x02 \x1D\x03\x02\x02\x02 !\x03\x02\x02\x02!\"\x03\x02\x02\x02\"#" +
		"\x05\x04\x03\x02#$\x05\x14\v\x02$O\x03\x02\x02\x02%&\x07\x11\x02\x02&" +
		"\'\x05\x04\x03\x02\'(\x05\x14\v\x02(O\x03\x02\x02\x02)*\x07\n\x02\x02" +
		"*+\x05\x14\v\x02+,\x07\x11\x02\x02,-\x05\x04\x03\x02-O\x03\x02\x02\x02" +
		"./\x07\x0F\x02\x02/0\x05\x04\x03\x0204\x05\x14\v\x0213\x07\x1F\x02\x02" +
		"21\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x02" +
		"59\x03\x02\x02\x0264\x03\x02\x02\x0278\x07\v\x02\x028:\x05\x14\v\x029" +
		"7\x03\x02\x02\x029:\x03\x02\x02\x02:O\x03\x02\x02\x02;O\x07\b\x02\x02" +
		"<O\x07\t\x02\x02=?\x07\x10\x02\x02>@\x05\x04\x03\x02?>\x03\x02\x02\x02" +
		"?@\x03\x02\x02\x02@O\x03\x02\x02\x02AB\x07\x07\x02\x02BF\x05\x04\x03\x02" +
		"CE\x07\x1F\x02\x02DC\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02" +
		"FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03\x02\x02\x02IJ\x07\f\x02\x02" +
		"JK\x05\x04\x03\x02KO\x03\x02\x02\x02LO\x05\b\x05\x02MO\x05\x04\x03\x02" +
		"N\x18\x03\x02\x02\x02N\x19\x03\x02\x02\x02N\x1B\x03\x02\x02\x02N%\x03" +
		"\x02\x02\x02N)\x03\x02\x02\x02N.\x03\x02\x02\x02N;\x03\x02\x02\x02N<\x03" +
		"\x02\x02\x02N=\x03\x02\x02\x02NA\x03\x02\x02\x02NL\x03\x02\x02\x02NM\x03" +
		"\x02\x02\x02O\x03\x03\x02\x02\x02PQ\b\x03\x01\x02Q`\x07\x1C\x02\x02R`" +
		"\x05\x10\t\x02S`\x05\x06\x04\x02T`\x07\x1D\x02\x02UV\x07\x1E\x02\x02V" +
		"`\x05\x04\x03\x04WY\x05\x0E\b\x02XW\x03\x02\x02\x02Y\\\x03\x02\x02\x02" +
		"ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\Z\x03\x02\x02" +
		"\x02]^\x07\x18\x02\x02^`\x05\x04\x03\x03_P\x03\x02\x02\x02_R\x03\x02\x02" +
		"\x02_S\x03\x02\x02\x02_T\x03\x02\x02\x02_U\x03\x02\x02\x02_Z\x03\x02\x02" +
		"\x02`t\x03\x02\x02\x02ab\f\x05\x02\x02bc\x07\x1E\x02\x02cs\x05\x04\x03" +
		"\x06de\f\v\x02\x02es\x07\x14\x02\x02fg\f\n\x02\x02gi\x07\x17\x02\x02h" +
		"j\x07\x1D\x02\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02js\x03\x02\x02\x02" +
		"kl\f\t\x02\x02ln\x07\x16\x02\x02mo\x07\x1D\x02\x02nm\x03\x02\x02\x02n" +
		"o\x03\x02\x02\x02os\x03\x02\x02\x02pq\f\b\x02\x02qs\x05\x10\t\x02ra\x03" +
		"\x02\x02\x02rd\x03\x02\x02\x02rf\x03\x02\x02\x02rk\x03\x02\x02\x02rp\x03" +
		"\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02u\x05" +
		"\x03\x02\x02\x02vt\x03\x02\x02\x02w{\x07\x1A\x02\x02x{\x07\x19\x02\x02" +
		"y{\x07\x1B\x02\x02zw\x03\x02\x02\x02zx\x03\x02\x02\x02zy\x03\x02\x02\x02" +
		"{\x07\x03\x02\x02\x02|}\x07\x1D\x02\x02}\x81\x07\x1D\x02\x02~\x80\x05" +
		"\x0E\b\x02\x7F~\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02" +
		"\x02\x02\x81\x82\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02" +
		"\x02\x02\x84\x86\x05\n\x06\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02" +
		"\x02\x02\x86\x88\x03\x02\x02\x02\x87\x89\x05\f\x07\x02\x88\x87\x03\x02" +
		"\x02\x02\x88\x89\x03\x02\x02\x02\x89\xA0\x03\x02\x02\x02\x8A\x8C\x05\x0E" +
		"\b\x02\x8B\x8D\x05\n\x06\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02" +
		"\x02\x8D\x8F\x03\x02\x02\x02\x8E\x90\x05\f\x07\x02\x8F\x8E\x03\x02\x02" +
		"\x02\x8F\x90\x03\x02\x02\x02\x90\xA0\x03\x02\x02\x02\x91\x93\x07\x1D\x02" +
		"\x02\x92\x94\x05\n\x06\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02" +
		"\x02\x94\x96\x03\x02\x02\x02\x95\x97\x05\f\x07\x02\x96\x95\x03\x02\x02" +
		"\x02\x96\x97\x03\x02\x02\x02\x97\xA0\x03\x02\x02\x02\x98\x9A\x07\x1E\x02" +
		"\x02\x99\x9B\x05\n\x06\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
		"\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9E\x05\f\x07\x02\x9D\x9C\x03\x02\x02" +
		"\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F|\x03\x02\x02" +
		"\x02\x9F\x8A\x03\x02\x02\x02\x9F\x91\x03\x02\x02\x02\x9F\x98\x03\x02\x02" +
		"\x02\xA0\t\x03\x02\x02\x02\xA1\xA3\x07\x15\x02\x02\xA2\xA4\x05\x04\x03" +
		"\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\v\x03\x02\x02" +
		"\x02\xA5\xA7\x07\x13\x02\x02\xA6\xA8\x05\x04\x03\x02\xA7\xA6\x03\x02\x02" +
		"\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xAB\x05\x14\v" +
		"\x02\xAA\xA5\x03\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\r\x03\x02\x02" +
		"\x02\xAC\xB8\x07\x05\x02\x02\xAD\xB2\x05\b\x05\x02\xAE\xAF\x07\x12\x02" +
		"\x02\xAF\xB1\x05\b\x05\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02" +
		"\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x03\x02\x02" +
		"\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB7\x07\x12\x02\x02\xB6\xB5\x03\x02\x02" +
		"\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xAD\x03\x02\x02" +
		"\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x06\x02" +
		"\x02\xBB\x0F\x03\x02\x02\x02\xBC\xC8\x07\x05\x02\x02\xBD\xC2\x05\x12\n" +
		"\x02\xBE\xBF\x07\x12\x02\x02\xBF\xC1\x05\x12\n\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02" +
		"\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC7\x07\x12\x02" +
		"\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02" +
		"\x02\xC8\xBD\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02" +
		"\x02\xCA\xCB\x07\x06\x02\x02\xCB\x11\x03\x02\x02\x02\xCC\xCD\x07\x1D\x02" +
		"\x02\xCD\xCF\x07\x13\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02" +
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x05\x04\x03\x02\xD1\x13\x03\x02\x02" +
		"\x02\xD2\xD3\x07\x1F\x02\x02\xD3\xD4\x07\x03\x02\x02\xD4\xD5\x05\x16\f" +
		"\x02\xD5\xD6\x07\x04\x02\x02\xD6\x15\x03\x02\x02\x02\xD7\xD9\x07\x1F\x02" +
		"\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDF\x03\x02\x02" +
		"\x02\xDA\xDB\x05\x02\x02\x02\xDB\xDC\x07\x1F\x02\x02\xDC\xDE\x03\x02\x02" +
		"\x02\xDD\xDA\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
		"\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02" +
		"\x02\xE2\xE4\x05\x02\x02\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
		"\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE7\x07\x1F\x02\x02\xE6\xE5\x03\x02\x02" +
		"\x02\xE6\xE7\x03\x02\x02\x02\xE7\x17\x03\x02\x02\x02(\x1D 49?FNZ_inrt" +
		"z\x81\x85\x88\x8C\x8F\x93\x96\x9A\x9D\x9F\xA3\xA7\xAA\xB2\xB6\xB8\xC2" +
		"\xC6\xC8\xCE\xD8\xDF\xE3\xE6";
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
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DestructureDeclarationContext extends DeclarationContext {
	public declarations(): DeclarationsContext {
		return this.getRuleContext(0, DeclarationsContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
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
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
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
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
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


