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
	public static readonly IMPORT = 14;
	public static readonly IN = 15;
	public static readonly RETURN = 16;
	public static readonly WHILE = 17;
	public static readonly COMMA = 18;
	public static readonly ASSIGN = 19;
	public static readonly QUESTION = 20;
	public static readonly COLON = 21;
	public static readonly META = 22;
	public static readonly DOT = 23;
	public static readonly LAMBDA = 24;
	public static readonly FLOAT = 25;
	public static readonly INTEGER = 26;
	public static readonly STRING = 27;
	public static readonly PREPROCESSOR = 28;
	public static readonly ID = 29;
	public static readonly OP = 30;
	public static readonly NL = 31;
	public static readonly LINE_COMMENT = 32;
	public static readonly WS = 33;
	public static readonly BLOCK_COMMENT = 34;
	public static readonly LINE_JOINING = 35;
	public static readonly UNEXPECTED = 36;
	public static readonly RULE_statement = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_declarations = 5;
	public static readonly RULE_arguments = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_body = 8;
	public static readonly RULE_source = 9;
	public static readonly RULE_id = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "expression", "declaration", "type", "value", "declarations", 
		"arguments", "argument", "body", "source", "id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'actual'", "'break'", 
		"'continue'", "'do'", "'else'", "'expect'", "'export'", "'for'", "'if'", 
		"'import'", "'in'", "'return'", "'while'", "','", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "IN", "RETURN", 
		"WHILE", "COMMA", "ASSIGN", "QUESTION", "COLON", "META", "DOT", "LAMBDA", 
		"FLOAT", "INTEGER", "STRING", "PREPROCESSOR", "ID", "OP", "NL", "LINE_COMMENT", 
		"WS", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
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
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 22;
				this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 23;
				this.match(XonParser.IMPORT);
				this.state = 25;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 24;
					this.expression(0);
					}
					break;
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN) {
					{
					this.state = 27;
					this.declarations();
					}
				}

				}
				break;

			case 3:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 30;
				this.match(XonParser.EXPORT);
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.ELSE) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
					{
					this.state = 31;
					this.expression(0);
					}
				}

				}
				break;

			case 4:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 34;
				this.match(XonParser.FOR);
				this.state = 39;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 36;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						this.state = 35;
						this.declaration();
						}
						break;
					}
					this.state = 38;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 41;
				this.expression(0);
				this.state = 42;
				this.body();
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 44;
				this.match(XonParser.WHILE);
				this.state = 45;
				this.expression(0);
				this.state = 46;
				this.body();
				}
				break;

			case 6:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 48;
				this.match(XonParser.DO);
				this.state = 49;
				this.body();
				this.state = 50;
				this.match(XonParser.WHILE);
				this.state = 51;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 53;
				this.match(XonParser.IF);
				this.state = 54;
				this.expression(0);
				this.state = 55;
				this.body();
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 56;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 61;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 62;
					this.match(XonParser.ELSE);
					this.state = 63;
					this.body();
					}
				}

				}
				break;

			case 8:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 66;
				this.match(XonParser.BREAK);
				}
				break;

			case 9:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 67;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 10:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 68;
				this.match(XonParser.RETURN);
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.ELSE) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
					{
					this.state = 69;
					this.expression(0);
					}
				}

				}
				break;

			case 11:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 72;
				this.match(XonParser.ACTUAL);
				this.state = 73;
				this.expression(0);
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 74;
					this.match(XonParser.NL);
					}
					}
					this.state = 79;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 80;
				this.match(XonParser.EXPECT);
				this.state = 81;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 83;
				this.declaration();
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
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
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
				_localctx = new IntegerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 89;
				this.match(XonParser.INTEGER);
				}
				break;

			case 3:
				{
				_localctx = new FloatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 90;
				this.match(XonParser.FLOAT);
				}
				break;

			case 4:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 91;
				this.match(XonParser.STRING);
				}
				break;

			case 5:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 92;
				this.arguments();
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 93;
				this.id();
				}
				break;

			case 7:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 94;
				this.match(XonParser.OP);
				this.state = 95;
				this.expression(2);
				}
				break;

			case 8:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 96;
					this.declarations();
					}
					}
					this.state = 101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 102;
				this.match(XonParser.LAMBDA);
				this.state = 103;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 125;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 123;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 106;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 107;
						this.match(XonParser.OP);
						this.state = 108;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 109;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 110;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 111;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 112;
						this.match(XonParser.DOT);
						this.state = 114;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
						case 1:
							{
							this.state = 113;
							this.id();
							}
							break;
						}
						}
						break;

					case 4:
						{
						_localctx = new MetaExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 116;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 117;
						this.match(XonParser.META);
						this.state = 119;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
						case 1:
							{
							this.state = 118;
							this.id();
							}
							break;
						}
						}
						break;

					case 5:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 121;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 122;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new DefinitionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.id();
				this.state = 129;
				this.id();
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.OPEN) {
					{
					{
					this.state = 130;
					this.declarations();
					}
					}
					this.state = 135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 136;
					this.type();
					}
				}

				this.state = 140;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 139;
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
				this.state = 142;
				this.declarations();
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 143;
					this.type();
					}
				}

				this.state = 147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 146;
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
				this.state = 149;
				this.id();
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 150;
					this.type();
					}
				}

				this.state = 154;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 153;
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
				this.state = 156;
				this.match(XonParser.OP);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 157;
					this.type();
					}
				}

				this.state = 161;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 160;
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
		this.enterRule(_localctx, 6, XonParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(XonParser.COLON);
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 166;
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
		this.enterRule(_localctx, 8, XonParser.RULE_value);
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.match(XonParser.ASSIGN);
				this.state = 171;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 170;
					this.expression(0);
					}
					break;
				}
				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 173;
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
		this.enterRule(_localctx, 10, XonParser.RULE_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(XonParser.OPEN);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.ELSE) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
				{
				this.state = 177;
				this.declaration();
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 178;
						this.match(XonParser.COMMA);
						this.state = 179;
						this.declaration();
						}
						}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 185;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 190;
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
			this.state = 192;
			this.match(XonParser.OPEN);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.ELSE) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.LAMBDA) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.PREPROCESSOR) | (1 << XonParser.ID) | (1 << XonParser.OP))) !== 0)) {
				{
				this.state = 193;
				this.argument();
				this.state = 198;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 194;
						this.match(XonParser.COMMA);
						this.state = 195;
						this.argument();
						}
						}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 201;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 206;
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
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 208;
				this.id();
				this.state = 209;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 213;
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
			this.state = 215;
			this.match(XonParser.NL);
			this.state = 216;
			this.match(XonParser.INDENT);
			this.state = 217;
			this.source();
			this.state = 218;
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
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.match(XonParser.NL);
				}
				break;
			}
			this.state = 228;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 223;
					this.statement();
					this.state = 224;
					_localctx._NL = this.match(XonParser.NL);
					_localctx._nl.push(_localctx._NL);
					}
					}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN - 3)) | (1 << (XonParser.ACTUAL - 3)) | (1 << (XonParser.BREAK - 3)) | (1 << (XonParser.CONTINUE - 3)) | (1 << (XonParser.DO - 3)) | (1 << (XonParser.ELSE - 3)) | (1 << (XonParser.EXPECT - 3)) | (1 << (XonParser.EXPORT - 3)) | (1 << (XonParser.FOR - 3)) | (1 << (XonParser.IF - 3)) | (1 << (XonParser.IMPORT - 3)) | (1 << (XonParser.IN - 3)) | (1 << (XonParser.RETURN - 3)) | (1 << (XonParser.WHILE - 3)) | (1 << (XonParser.LAMBDA - 3)) | (1 << (XonParser.FLOAT - 3)) | (1 << (XonParser.INTEGER - 3)) | (1 << (XonParser.STRING - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OP - 3)) | (1 << (XonParser.LINE_COMMENT - 3)))) !== 0)) {
				{
				this.state = 231;
				this.statement();
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.NL) {
				{
				this.state = 234;
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
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.ELSE) | (1 << XonParser.EXPECT) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IN) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.ID))) !== 0))) {
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
			return this.precpred(this._ctx, 8);

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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xF2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x02\x05\x02\x1C\n\x02\x03\x02\x05\x02\x1F\n\x02\x03\x02\x03\x02\x05" +
		"\x02#\n\x02\x03\x02\x03\x02\x05\x02\'\n\x02\x03\x02\x05\x02*\n\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02<\n\x02\f" +
		"\x02\x0E\x02?\v\x02\x03\x02\x03\x02\x05\x02C\n\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x05\x02I\n\x02\x03\x02\x03\x02\x03\x02\x07\x02N\n\x02\f\x02" +
		"\x0E\x02Q\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02X\n\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03d\n\x03\f\x03\x0E\x03g\v\x03\x03\x03\x03\x03\x05\x03k" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03u\n\x03\x03\x03\x03\x03\x03\x03\x05\x03z\n\x03\x03\x03\x03\x03" +
		"\x07\x03~\n\x03\f\x03\x0E\x03\x81\v\x03\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\x86\n\x04\f\x04\x0E\x04\x89\v\x04\x03\x04\x05\x04\x8C\n\x04\x03\x04\x05" +
		"\x04\x8F\n\x04\x03\x04\x03\x04\x05\x04\x93\n\x04\x03\x04\x05\x04\x96\n" +
		"\x04\x03\x04\x03\x04\x05\x04\x9A\n\x04\x03\x04\x05\x04\x9D\n\x04\x03\x04" +
		"\x03\x04\x05\x04\xA1\n\x04\x03\x04\x05\x04\xA4\n\x04\x05\x04\xA6\n\x04" +
		"\x03\x05\x03\x05\x05\x05\xAA\n\x05\x03\x06\x03\x06\x05\x06\xAE\n\x06\x03" +
		"\x06\x05\x06\xB1\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xB7\n\x07" +
		"\f\x07\x0E\x07\xBA\v\x07\x03\x07\x05\x07\xBD\n\x07\x05\x07\xBF\n\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xC7\n\b\f\b\x0E\b\xCA\v\b\x03" +
		"\b\x05\b\xCD\n\b\x05\b\xCF\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xD6" +
		"\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x05\v\xE0\n\v\x03" +
		"\v\x03\v\x03\v\x07\v\xE5\n\v\f\v\x0E\v\xE8\v\v\x03\v\x05\v\xEB\n\v\x03" +
		"\v\x05\v\xEE\n\v\x03\f\x03\f\x03\f\x02\x02\x03\x04\r\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03" +
		"\x05\x02\x07\x0F\x11\x13\x1F\x1F\x02\u0124\x02W\x03\x02\x02\x02\x04j\x03" +
		"\x02\x02\x02\x06\xA5\x03\x02\x02\x02\b\xA7\x03\x02\x02\x02\n\xB0\x03\x02" +
		"\x02\x02\f\xB2\x03\x02\x02\x02\x0E\xC2\x03\x02\x02\x02\x10\xD5\x03\x02" +
		"\x02\x02\x12\xD9\x03\x02\x02\x02\x14\xDF\x03\x02\x02\x02\x16\xEF\x03\x02" +
		"\x02\x02\x18X\x07\"\x02\x02\x19\x1B\x07\x10\x02\x02\x1A\x1C\x05\x04\x03" +
		"\x02\x1B\x1A\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02" +
		"\x02\x1D\x1F\x05\f\x07\x02\x1E\x1D\x03\x02\x02\x02\x1E\x1F\x03\x02\x02" +
		"\x02\x1FX\x03\x02\x02\x02 \"\x07\r\x02\x02!#\x05\x04\x03\x02\"!\x03\x02" +
		"\x02\x02\"#\x03\x02\x02\x02#X\x03\x02\x02\x02$)\x07\x0E\x02\x02%\'\x05" +
		"\x06\x04\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02(" +
		"*\x07\x11\x02\x02)&\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02" +
		"+,\x05\x04\x03\x02,-\x05\x12\n\x02-X\x03\x02\x02\x02./\x07\x13\x02\x02" +
		"/0\x05\x04\x03\x0201\x05\x12\n\x021X\x03\x02\x02\x0223\x07\n\x02\x023" +
		"4\x05\x12\n\x0245\x07\x13\x02\x0256\x05\x04\x03\x026X\x03\x02\x02\x02" +
		"78\x07\x0F\x02\x0289\x05\x04\x03\x029=\x05\x12\n\x02:<\x07!\x02\x02;:" +
		"\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02" +
		">B\x03\x02\x02\x02?=\x03\x02\x02\x02@A\x07\v\x02\x02AC\x05\x12\n\x02B" +
		"@\x03\x02\x02\x02BC\x03\x02\x02\x02CX\x03\x02\x02\x02DX\x07\b\x02\x02" +
		"EX\x07\t\x02\x02FH\x07\x12\x02\x02GI\x05\x04\x03\x02HG\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02IX\x03\x02\x02\x02JK\x07\x07\x02\x02KO\x05\x04\x03\x02" +
		"LN\x07!\x02\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x07\f\x02\x02" +
		"ST\x05\x04\x03\x02TX\x03\x02\x02\x02UX\x05\x06\x04\x02VX\x05\x04\x03\x02" +
		"W\x18\x03\x02\x02\x02W\x19\x03\x02\x02\x02W \x03\x02\x02\x02W$\x03\x02" +
		"\x02\x02W.\x03\x02\x02\x02W2\x03\x02\x02\x02W7\x03\x02\x02\x02WD\x03\x02" +
		"\x02\x02WE\x03\x02\x02\x02WF\x03\x02\x02\x02WJ\x03\x02\x02\x02WU\x03\x02" +
		"\x02\x02WV\x03\x02\x02\x02X\x03\x03\x02\x02\x02YZ\b\x03\x01\x02Zk\x07" +
		"\x1E\x02\x02[k\x07\x1C\x02\x02\\k\x07\x1B\x02\x02]k\x07\x1D\x02\x02^k" +
		"\x05\x0E\b\x02_k\x05\x16\f\x02`a\x07 \x02\x02ak\x05\x04\x03\x04bd\x05" +
		"\f\x07\x02cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03" +
		"\x02\x02\x02fh\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07\x1A\x02\x02ik\x05" +
		"\x04\x03\x03jY\x03\x02\x02\x02j[\x03\x02\x02\x02j\\\x03\x02\x02\x02j]" +
		"\x03\x02\x02\x02j^\x03\x02\x02\x02j_\x03\x02\x02\x02j`\x03\x02\x02\x02" +
		"je\x03\x02\x02\x02k\x7F\x03\x02\x02\x02lm\f\x05\x02\x02mn\x07 \x02\x02" +
		"n~\x05\x04\x03\x06op\f\n\x02\x02p~\x07\x16\x02\x02qr\f\t\x02\x02rt\x07" +
		"\x19\x02\x02su\x05\x16\f\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02u~\x03" +
		"\x02\x02\x02vw\f\b\x02\x02wy\x07\x18\x02\x02xz\x05\x16\f\x02yx\x03\x02" +
		"\x02\x02yz\x03\x02\x02\x02z~\x03\x02\x02\x02{|\f\x07\x02\x02|~\x05\x0E" +
		"\b\x02}l\x03\x02\x02\x02}o\x03\x02\x02\x02}q\x03\x02\x02\x02}v\x03\x02" +
		"\x02\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80\x05\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82" +
		"\x83\x05\x16\f\x02\x83\x87\x05\x16\f\x02\x84\x86\x05\f\x07\x02\x85\x84" +
		"\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88" +
		"\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8C" +
		"\x05\b\x05\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E" +
		"\x03\x02\x02\x02\x8D\x8F\x05\n\x06\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F" +
		"\x03\x02\x02\x02\x8F\xA6\x03\x02\x02\x02\x90\x92\x05\f\x07\x02\x91\x93" +
		"\x05\b\x05\x02\x92\x91\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95" +
		"\x03\x02\x02\x02\x94\x96\x05\n\x06\x02\x95\x94\x03\x02\x02\x02\x95\x96" +
		"\x03\x02\x02\x02\x96\xA6\x03\x02\x02\x02\x97\x99\x05\x16\f\x02\x98\x9A" +
		"\x05\b\x05\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C" +
		"\x03\x02\x02\x02\x9B\x9D\x05\n\x06\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D" +
		"\x03\x02\x02\x02\x9D\xA6\x03\x02\x02\x02\x9E\xA0\x07 \x02\x02\x9F\xA1" +
		"\x05\b\x05\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3" +
		"\x03\x02\x02\x02\xA2\xA4\x05\n\x06\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4" +
		"\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\x82\x03\x02\x02\x02\xA5\x90" +
		"\x03\x02\x02\x02\xA5\x97\x03\x02\x02\x02\xA5\x9E\x03\x02\x02\x02\xA6\x07" +
		"\x03\x02\x02\x02\xA7\xA9\x07\x17\x02\x02\xA8\xAA\x05\x04\x03\x02\xA9\xA8" +
		"\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\t\x03\x02\x02\x02\xAB\xAD" +
		"\x07\x15\x02\x02\xAC\xAE\x05\x04\x03\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE" +
		"\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xB1\x05\x12\n\x02\xB0\xAB" +
		"\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\v\x03\x02\x02\x02\xB2\xBE" +
		"\x07\x05\x02\x02\xB3\xB8\x05\x06\x04\x02\xB4\xB5\x07\x14\x02\x02\xB5\xB7" +
		"\x05\x06\x04\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8" +
		"\x03\x02\x02\x02\xBB\xBD\x07\x14\x02\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xB3\x03\x02\x02\x02\xBE\xBF" +
		"\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x07\x06\x02\x02\xC1\r" +
		"\x03\x02\x02\x02\xC2\xCE\x07\x05\x02\x02\xC3\xC8\x05\x10\t\x02\xC4\xC5" +
		"\x07\x14\x02\x02\xC5\xC7\x05\x10\t\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCA" +
		"\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCC" +
		"\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCD\x07\x14\x02\x02\xCC\xCB" +
		"\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xC3" +
		"\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1" +
		"\x07\x06\x02\x02\xD1\x0F\x03\x02\x02\x02\xD2\xD3\x05\x16\f\x02\xD3\xD4" +
		"\x07\x15\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD2\x03\x02\x02\x02\xD5\xD6" +
		"\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x05\x04\x03\x02\xD8\x11" +
		"\x03\x02\x02\x02\xD9\xDA\x07!\x02\x02\xDA\xDB\x07\x03\x02\x02\xDB\xDC" +
		"\x05\x14\v\x02\xDC\xDD\x07\x04\x02\x02\xDD\x13\x03\x02\x02\x02\xDE\xE0" +
		"\x07!\x02\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE6" +
		"\x03\x02\x02\x02\xE1\xE2\x05\x02\x02\x02\xE2\xE3\x07!\x02\x02\xE3\xE5" +
		"\x03\x02\x02\x02\xE4\xE1\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4" +
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6" +
		"\x03\x02\x02\x02\xE9\xEB\x05\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB" +
		"\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEE\x07!\x02\x02\xED\xEC" +
		"\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x15\x03\x02\x02\x02\xEF\xF0" +
		"\t\x02\x02\x02\xF0\x17\x03\x02\x02\x02*\x1B\x1E\"&)=BHOWejty}\x7F\x87" +
		"\x8B\x8E\x92\x95\x99\x9C\xA0\xA3\xA5\xA9\xAD\xB0\xB8\xBC\xBE\xC8\xCC\xCE" +
		"\xD5\xDF\xE6\xEA\xED";
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
	public declarations(): DeclarationsContext | undefined {
		return this.tryGetRuleContext(0, DeclarationsContext);
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
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
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
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
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
export class IdExpressionContext extends ExpressionContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
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


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public ACTUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.ACTUAL, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(XonParser.BREAK, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CONTINUE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(XonParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	public EXPECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXPECT, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXPORT, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.FOR, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(XonParser.IF, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(XonParser.RETURN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(XonParser.WHILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


