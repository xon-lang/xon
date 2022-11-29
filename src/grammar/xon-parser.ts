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
	public static readonly RETURN = 18;
	public static readonly WHILE = 19;
	public static readonly COMMA = 20;
	public static readonly ASSIGN = 21;
	public static readonly QUESTION = 22;
	public static readonly COLON = 23;
	public static readonly META = 24;
	public static readonly DOT = 25;
	public static readonly LAMBDA = 26;
	public static readonly FLOAT_LITERAL = 27;
	public static readonly INTEGER_LITERAL = 28;
	public static readonly STRING_LITERAL = 29;
	public static readonly PREPROCESSOR = 30;
	public static readonly ID = 31;
	public static readonly OP = 32;
	public static readonly NL = 33;
	public static readonly LINE_COMMENT = 34;
	public static readonly WS = 35;
	public static readonly BLOCK_COMMENT = 36;
	public static readonly LINE_JOINING = 37;
	public static readonly UNEXPECTED = 38;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_type = 5;
	public static readonly RULE_declarations = 6;
	public static readonly RULE_arguments = 7;
	public static readonly RULE_argument = 8;
	public static readonly RULE_body = 9;
	public static readonly RULE_open = 10;
	public static readonly RULE_close = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expression", "literal", "declaration", "type", 
		"declarations", "arguments", "argument", "body", "open", "close",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'return'", "'while'", "','", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
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
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.match(XonParser.EXPORT);
				this.state = 44;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.match(XonParser.FOR);
				this.state = 50;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 47;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						this.state = 46;
						this.declaration();
						}
						break;
					}
					this.state = 49;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 52;
				this.expression(0);
				this.state = 53;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 55;
				this.match(XonParser.WHILE);
				this.state = 56;
				this.expression(0);
				this.state = 57;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 59;
				this.match(XonParser.DO);
				this.state = 60;
				this.body();
				this.state = 61;
				this.match(XonParser.WHILE);
				this.state = 62;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 64;
				this.match(XonParser.IF);
				this.state = 65;
				this.expression(0);
				this.state = 66;
				this.body();
				this.state = 70;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 67;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 72;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 73;
					this.match(XonParser.ELSE);
					this.state = 74;
					this.body();
					}
				}

				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 77;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 78;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 79;
				this.match(XonParser.RETURN);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.LAMBDA - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OP - 3)))) !== 0)) {
					{
					this.state = 80;
					this.expression(0);
					}
				}

				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 83;
				this.match(XonParser.ACTUAL);
				this.state = 84;
				this.expression(0);
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 85;
					this.match(XonParser.NL);
					}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 91;
				this.match(XonParser.EXPECT);
				this.state = 92;
				this.expression(0);
				}
				break;

			case 11:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 94;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 95;
				this.declaration();
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
			this.state = 117;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 99;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 100;
				this.match(XonParser.OPEN_PAREN);
				this.state = 101;
				this.expression(0);
				this.state = 102;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 106;
				this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 107;
				this.match(XonParser.OP);
				this.state = 108;
				this.expression(2);
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0)) {
					{
					{
					this.state = 109;
					this.declarations();
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 115;
				this.match(XonParser.LAMBDA);
				this.state = 116;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 138;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 136;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 119;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 120;
						this.match(XonParser.OP);
						this.state = 121;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 122;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 123;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 124;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 125;
						this.match(XonParser.DOT);
						this.state = 127;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
						case 1:
							{
							this.state = 126;
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
						this.state = 129;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 130;
						this.match(XonParser.META);
						this.state = 132;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
						case 1:
							{
							this.state = 131;
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
						this.state = 134;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 135;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 140;
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
		this.enterRule(_localctx, 6, XonParser.RULE_literal);
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
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
		this.enterRule(_localctx, 8, XonParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				_localctx = new DestructureDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.declarations();
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 147;
					this.type();
					}
				}

				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 150;
					this.match(XonParser.ASSIGN);
					this.state = 151;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new ParameterDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 154;
				this.match(XonParser.ID);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 155;
					this.type();
					}
				}

				this.state = 163;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 158;
					this.match(XonParser.ASSIGN);
					this.state = 160;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						this.state = 159;
						this.expression(0);
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 162;
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
				this.state = 165;
				this.match(XonParser.OP);
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 166;
					this.type();
					}
				}

				this.state = 174;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 169;
					this.match(XonParser.ASSIGN);
					this.state = 171;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						this.state = 170;
						this.expression(0);
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 173;
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
				this.state = 176;
				this.match(XonParser.ID);
				this.state = 177;
				this.match(XonParser.ID);
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0)) {
					{
					this.state = 178;
					this.declarations();
					}
				}

				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 181;
					this.type();
					}
				}

				this.state = 185;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 184;
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
		this.enterRule(_localctx, 10, XonParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(XonParser.COLON);
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 190;
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
		this.enterRule(_localctx, 12, XonParser.RULE_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.open();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OP - 3)))) !== 0)) {
				{
				this.state = 194;
				this.declaration();
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 195;
						this.match(XonParser.COMMA);
						this.state = 196;
						this.declaration();
						}
						}
					}
					this.state = 201;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 202;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 207;
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.open();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.LAMBDA - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OP - 3)))) !== 0)) {
				{
				this.state = 210;
				this.argument();
				this.state = 215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 211;
						this.match(XonParser.COMMA);
						this.state = 212;
						this.argument();
						}
						}
					}
					this.state = 217;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 218;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 223;
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
		this.enterRule(_localctx, 16, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 225;
				this.match(XonParser.ID);
				this.state = 226;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 229;
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
			this.state = 231;
			this.match(XonParser.NL);
			this.state = 232;
			this.match(XonParser.INDENT);
			this.state = 233;
			this.source();
			this.state = 234;
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
	public open(): OpenContext {
		let _localctx: OpenContext = new OpenContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_open);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0))) {
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
	// @RuleVersion(0)
	public close(): CloseContext {
		let _localctx: CloseContext = new CloseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_close);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0))) {
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
		case 2:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xF3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x05\x02\x1D\n\x02\x03\x02\x03\x02\x03\x02\x07\x02\"\n\x02" +
		"\f\x02\x0E\x02%\v\x02\x03\x02\x03\x02\x05\x02)\n\x02\x05\x02+\n\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x032\n\x03\x03\x03\x05\x035\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03G" +
		"\n\x03\f\x03\x0E\x03J\v\x03\x03\x03\x03\x03\x05\x03N\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03T\n\x03\x03\x03\x03\x03\x03\x03\x07\x03Y\n" +
		"\x03\f\x03\x0E\x03\\\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03c\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04q\n\x04\f\x04\x0E\x04t\v\x04" +
		"\x03\x04\x03\x04\x05\x04x\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\x82\n\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\x87\n\x04\x03\x04\x03\x04\x07\x04\x8B\n\x04\f\x04\x0E\x04\x8E\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\x93\n\x05\x03\x06\x03\x06\x05\x06\x97" +
		"\n\x06\x03\x06\x03\x06\x05\x06\x9B\n\x06\x03\x06\x03\x06\x05\x06\x9F\n" +
		"\x06\x03\x06\x03\x06\x05\x06\xA3\n\x06\x03\x06\x05\x06\xA6\n\x06\x03\x06" +
		"\x03\x06\x05\x06\xAA\n\x06\x03\x06\x03\x06\x05\x06\xAE\n\x06\x03\x06\x05" +
		"\x06\xB1\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB6\n\x06\x03\x06\x05\x06" +
		"\xB9\n\x06\x03\x06\x05\x06\xBC\n\x06\x05\x06\xBE\n\x06\x03\x07\x03\x07" +
		"\x05\x07\xC2\n\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xC8\n\b\f\b\x0E\b\xCB" +
		"\v\b\x03\b\x05\b\xCE\n\b\x05\b\xD0\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x07\t\xD8\n\t\f\t\x0E\t\xDB\v\t\x03\t\x05\t\xDE\n\t\x05\t\xE0\n\t\x03" +
		"\t\x03\t\x03\n\x03\n\x05\n\xE6\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x03\x06\x0E\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x02\x04\x05\x02\x05\x05\x07\x07\t\t\x05\x02\x06\x06\b\b\n\n\x02\u0123" +
		"\x02*\x03\x02\x02\x02\x04b\x03\x02\x02\x02\x06w\x03\x02\x02\x02\b\x92" +
		"\x03\x02\x02\x02\n\xBD\x03\x02\x02\x02\f\xBF\x03\x02\x02\x02\x0E\xC3\x03" +
		"\x02\x02\x02\x10\xD3\x03\x02\x02\x02\x12\xE5\x03\x02\x02\x02\x14\xE9\x03" +
		"\x02\x02\x02\x16\xEE\x03\x02\x02\x02\x18\xF0\x03\x02\x02\x02\x1A+\x07" +
		"#\x02\x02\x1B\x1D\x07#\x02\x02\x1C\x1B\x03\x02\x02\x02\x1C\x1D\x03\x02" +
		"\x02\x02\x1D#\x03\x02\x02\x02\x1E\x1F\x05\x04\x03\x02\x1F \x07#\x02\x02" +
		" \"\x03\x02\x02\x02!\x1E\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02" +
		"\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02%#\x03\x02\x02\x02&(\x05\x04" +
		"\x03\x02\')\x07#\x02\x02(\'\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02" +
		"\x02\x02*\x1A\x03\x02\x02\x02*\x1C\x03\x02\x02\x02+\x03\x03\x02\x02\x02" +
		",c\x07$\x02\x02-.\x07\x11\x02\x02.c\x05\x06\x04\x02/4\x07\x12\x02\x02" +
		"02\x05\n\x06\x0210\x03\x02\x02\x0212\x03\x02\x02\x0223\x03\x02\x02\x02" +
		"35\x07!\x02\x0241\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"67\x05\x06\x04\x0278\x05\x14\v\x028c\x03\x02\x02\x029:\x07\x15\x02\x02" +
		":;\x05\x06\x04\x02;<\x05\x14\v\x02<c\x03\x02\x02\x02=>\x07\x0E\x02\x02" +
		">?\x05\x14\v\x02?@\x07\x15\x02\x02@A\x05\x06\x04\x02Ac\x03\x02\x02\x02" +
		"BC\x07\x13\x02\x02CD\x05\x06\x04\x02DH\x05\x14\v\x02EG\x07#\x02\x02FE" +
		"\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"IM\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07\x0F\x02\x02LN\x05\x14\v\x02" +
		"MK\x03\x02\x02\x02MN\x03\x02\x02\x02Nc\x03\x02\x02\x02Oc\x07\f\x02\x02" +
		"Pc\x07\r\x02\x02QS\x07\x14\x02\x02RT\x05\x06\x04\x02SR\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02Tc\x03\x02\x02\x02UV\x07\v\x02\x02VZ\x05\x06\x04\x02" +
		"WY\x07#\x02\x02XW\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02" +
		"Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\Z\x03\x02\x02\x02]^\x07\x10\x02" +
		"\x02^_\x05\x06\x04\x02_c\x03\x02\x02\x02`c\x05\x06\x04\x02ac\x05\n\x06" +
		"\x02b,\x03\x02\x02\x02b-\x03\x02\x02\x02b/\x03\x02\x02\x02b9\x03\x02\x02" +
		"\x02b=\x03\x02\x02\x02bB\x03\x02\x02\x02bO\x03\x02\x02\x02bP\x03\x02\x02" +
		"\x02bQ\x03\x02\x02\x02bU\x03\x02\x02\x02b`\x03\x02\x02\x02ba\x03\x02\x02" +
		"\x02c\x05\x03\x02\x02\x02de\b\x04\x01\x02ex\x07 \x02\x02fg\x07\x07\x02" +
		"\x02gh\x05\x06\x04\x02hi\x07\b\x02\x02ix\x03\x02\x02\x02jx\x05\x10\t\x02" +
		"kx\x05\b\x05\x02lx\x07!\x02\x02mn\x07\"\x02\x02nx\x05\x06\x04\x04oq\x05" +
		"\x0E\b\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
		"\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02uv\x07\x1C\x02\x02vx\x05" +
		"\x06\x04\x03wd\x03\x02\x02\x02wf\x03\x02\x02\x02wj\x03\x02\x02\x02wk\x03" +
		"\x02\x02\x02wl\x03\x02\x02\x02wm\x03\x02\x02\x02wr\x03\x02\x02\x02x\x8C" +
		"\x03\x02\x02\x02yz\f\x05\x02\x02z{\x07\"\x02\x02{\x8B\x05\x06\x04\x06" +
		"|}\f\v\x02\x02}\x8B\x07\x18\x02\x02~\x7F\f\n\x02\x02\x7F\x81\x07\x1B\x02" +
		"\x02\x80\x82\x07!\x02\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02" +
		"\x02\x82\x8B\x03\x02\x02\x02\x83\x84\f\t\x02\x02\x84\x86\x07\x1A\x02\x02" +
		"\x85\x87\x07!\x02\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
		"\x87\x8B\x03\x02\x02\x02\x88\x89\f\b\x02\x02\x89\x8B\x05\x10\t\x02\x8A" +
		"y\x03\x02\x02\x02\x8A|\x03\x02\x02\x02\x8A~\x03\x02\x02\x02\x8A\x83\x03" +
		"\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03" +
		"\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x07\x03\x02\x02\x02\x8E\x8C\x03" +
		"\x02\x02\x02\x8F\x93\x07\x1E\x02\x02\x90\x93\x07\x1D\x02\x02\x91\x93\x07" +
		"\x1F\x02\x02\x92\x8F\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x91\x03" +
		"\x02\x02\x02\x93\t\x03\x02\x02\x02\x94\x96\x05\x0E\b\x02\x95\x97\x05\f" +
		"\x07\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x9A\x03\x02" +
		"\x02\x02\x98\x99\x07\x17\x02\x02\x99\x9B\x05\x06\x04\x02\x9A\x98\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\xBE\x03\x02\x02\x02\x9C\x9E\x07!" +
		"\x02\x02\x9D\x9F\x05\f\x07\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02" +
		"\x02\x02\x9F\xA5\x03\x02\x02\x02\xA0\xA2\x07\x17\x02\x02\xA1\xA3\x05\x06" +
		"\x04\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA6\x03\x02" +
		"\x02\x02\xA4\xA6\x05\x14\v\x02\xA5\xA0\x03\x02\x02\x02\xA5\xA4\x03\x02" +
		"\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xBE\x03\x02\x02\x02\xA7\xA9\x07\"" +
		"\x02\x02\xA8\xAA\x05\f\x07\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02" +
		"\x02\x02\xAA\xB0\x03\x02\x02\x02\xAB\xAD\x07\x17\x02\x02\xAC\xAE\x05\x06" +
		"\x04\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02" +
		"\x02\x02\xAF\xB1\x05\x14\v\x02\xB0\xAB\x03\x02\x02\x02\xB0\xAF\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xBE\x03\x02\x02\x02\xB2\xB3\x07!" +
		"\x02\x02\xB3\xB5\x07!\x02\x02\xB4\xB6\x05\x0E\b\x02\xB5\xB4\x03\x02\x02" +
		"\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB9\x05\f\x07" +
		"\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02\x02" +
		"\x02\xBA\xBC\x05\x14\v\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02" +
		"\x02\xBC\xBE\x03\x02\x02\x02\xBD\x94\x03\x02\x02\x02\xBD\x9C\x03\x02\x02" +
		"\x02\xBD\xA7\x03\x02\x02\x02\xBD\xB2\x03\x02\x02\x02\xBE\v\x03\x02\x02" +
		"\x02\xBF\xC1\x07\x19\x02\x02\xC0\xC2\x05\x06\x04\x02\xC1\xC0\x03\x02\x02" +
		"\x02\xC1\xC2\x03\x02\x02\x02\xC2\r\x03\x02\x02\x02\xC3\xCF\x05\x16\f\x02" +
		"\xC4\xC9\x05\n\x06\x02\xC5\xC6\x07\x16\x02\x02\xC6\xC8\x05\n\x06\x02\xC7" +
		"\xC5\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9" +
		"\xCA\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC" +
		"\xCE\x07\x16\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE" +
		"\xD0\x03\x02\x02\x02\xCF\xC4\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0" +
		"\xD1\x03\x02\x02\x02\xD1\xD2\x05\x18\r\x02\xD2\x0F\x03\x02\x02\x02\xD3" +
		"\xDF\x05\x16\f\x02\xD4\xD9\x05\x12\n\x02\xD5\xD6\x07\x16\x02\x02\xD6\xD8" +
		"\x05\x12\n\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7" +
		"\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDC\xDE\x07\x16\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE" +
		"\x03\x02\x02\x02\xDE\xE0\x03\x02\x02\x02\xDF\xD4\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x05\x18\r\x02\xE2\x11" +
		"\x03\x02\x02\x02\xE3\xE4\x07!\x02\x02\xE4\xE6\x07\x17\x02\x02\xE5\xE3" +
		"\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8" +
		"\x05\x06\x04\x02\xE8\x13\x03\x02\x02\x02\xE9\xEA\x07#\x02\x02\xEA\xEB" +
		"\x07\x03\x02\x02\xEB\xEC\x05\x02\x02\x02\xEC\xED\x07\x04\x02\x02\xED\x15" +
		"\x03\x02\x02\x02\xEE\xEF\t\x02\x02\x02\xEF\x17\x03\x02\x02\x02\xF0\xF1" +
		"\t\x03\x02\x02\xF1\x19\x03\x02\x02\x02(\x1C#(*14HMSZbrw\x81\x86\x8A\x8C" +
		"\x92\x96\x9A\x9E\xA2\xA5\xA9\xAD\xB0\xB5\xB8\xBB\xBD\xC1\xC9\xCD\xCF\xD9" +
		"\xDD\xDF\xE5";
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
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
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
	public open(): OpenContext {
		return this.getRuleContext(0, OpenContext);
	}
	public close(): CloseContext {
		return this.getRuleContext(0, CloseContext);
	}
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


export class OpenContext extends ParserRuleContext {
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
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_close; }
}


